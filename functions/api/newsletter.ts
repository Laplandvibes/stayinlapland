// Cloudflare Pages Function — same-origin proxy to the Supabase Edge Function
// `send-welcome-email`. Lives at https://stayinlapland.com/api/newsletter.
//
// Why a proxy?  The Supabase function's CORS policy only allows
// https://laplandvibes.com. Spoke sites (stayinlapland.com etc.) would
// otherwise hit "Failed to fetch" in the browser. Routing through this Function
// makes the call same-origin from the browser's perspective, so CORS never
// enters the picture, and the actual hop to Supabase is a server-side fetch.
//
// 🔴 WHY THIS ONE FORWARDS MORE THAN {email, source} (2026-08-16)
// The older sister-site copies of this file (laplandstays, laplandhuskysafaris,
// laplandluxuryvillas, laplandnature, laplandsnowmobile, laplandcarrental)
// rebuild the upstream body as `{email, source}` only. That predates
// LV-CONSENT-V2 (2026-08-14), which made `consent`, `ageConfirmed` and
// `consentText` REQUIRED upstream (`z.literal(true)` — see
// laplandvibes/supabase/functions/send-welcome-email/index.ts). Those proxies
// silently drop the consent fields the popup sends, so every submit through
// them now dies with HTTP 400 `CONSENT_REQUIRED` — verified live against
// https://laplandstays.com/api/newsletter on 2026-08-16.
//
// This proxy therefore forwards the consent trio, the segmentation fields
// (`site`, `language`, `channel`) and the honeypot fields. Dropping the
// honeypots would disarm the upstream bot trap (HONEYPOT_FIELDS), so they are
// passed through verbatim — including when empty, which is what a human sends.
//
// Configure these as Cloudflare Pages env vars (Project -> Settings -> Env):
//   SUPABASE_URL              -> https://oogioaxmfnqcbvjbcodh.supabase.co
//   SUPABASE_PUBLISHABLE_KEY  -> the anon key
// Both fall back to the values shipped in the bundle if not set.

interface Env {
  SUPABASE_URL?: string
  SUPABASE_PUBLISHABLE_KEY?: string
}

const SUPABASE_URL_FALLBACK = 'https://oogioaxmfnqcbvjbcodh.supabase.co'
const SUPABASE_ANON_FALLBACK =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vZ2lvYXhtZm5xY2J2amJjb2RoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4NjMyNDIsImV4cCI6MjA5MDQzOTI0Mn0.eTfgsux0zV3_gPyFRUcE8M_-DuDpU2xE9gehQM9pz54'

/** Honeypots checked upstream — forward them untouched, empty or not. */
const HONEYPOT_FIELDS = ['website', 'company', 'url', 'hp_field'] as const

interface Body {
  email?: string
  source?: string
  site?: string
  language?: string
  channel?: string
  consent?: boolean
  ageConfirmed?: boolean
  consentText?: string
  [key: string]: unknown
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let body: Body
  try {
    body = await request.json()
  } catch {
    return json({ error: 'Invalid JSON body' }, 400)
  }

  const email = (body.email || '').trim()
  const source = (body.source || 'stayinlapland').trim()

  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return json({ error: 'Valid email required' }, 400)
  }

  const supabaseUrl = env.SUPABASE_URL || SUPABASE_URL_FALLBACK
  const anonKey = env.SUPABASE_PUBLISHABLE_KEY || SUPABASE_ANON_FALLBACK

  // Rebuild rather than spread the raw body: the upstream schema is the
  // contract, and an explicit list makes it obvious what a new required field
  // would need added here (the bug this file's header documents).
  const upstreamBody: Record<string, unknown> = {
    email,
    source,
    site: body.site,
    language: body.language,
    channel: body.channel,
    consent: body.consent,
    ageConfirmed: body.ageConfirmed,
    consentText: body.consentText,
  }
  for (const field of HONEYPOT_FIELDS) {
    if (field in body) upstreamBody[field] = body[field]
  }

  try {
    const upstream = await fetch(`${supabaseUrl}/functions/v1/send-welcome-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
      },
      body: JSON.stringify(upstreamBody),
    })

    const responseText = await upstream.text()
    let data: Record<string, unknown> = {}
    try {
      data = JSON.parse(responseText)
    } catch {
      data = { rawBody: responseText.slice(0, 500) }
    }

    if (!upstream.ok) {
      return json(
        { error: (data?.error as string) || `upstream HTTP ${upstream.status}`, upstreamBody: data },
        upstream.status,
      )
    }
    return json(data, 200)
  } catch (err) {
    return json({ error: err instanceof Error ? err.message : 'Upstream fetch failed' }, 502)
  }
}

export const onRequestOptions: PagesFunction = () =>
  new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })

function json(payload: unknown, status: number): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}
