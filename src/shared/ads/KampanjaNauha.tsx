import { useState } from 'react'
import type { CSSProperties } from 'react'
import { kampanja } from './kampanjat'

/**
 * Kumppanin määräaikainen kampanja nauhana perusmainoksen tai ostonapin yhteydessä.
 *
 * Tiedot, lähteet ja aikaikkuna: shared/ads/kampanjat.ts. Nauha palauttaa null, kun mainostajalla
 * ei ole voimassa olevaa kampanjaa lukijan kielellä: silloin mainos on tavallinen perusmainos.
 * Päätös tehdään renderöinnin hetkellä, joten kampanja alkaa ja loppuu ilman julkaisua.
 *
 * - `href` (valinnainen): nauhan oma linkki kampanjan sivulle. Anna se vain, kun nauha EI ole
 *   kokonaan linkkinä olevan kortin sisällä (linkkiä ei saa olla linkin sisällä) ja kampanjalla
 *   on oma sivu (`landing`). Rakenna href sijoituksessa: withKampanja(spec.linkFor(sid), key, lang).
 * - `tone`: 'light' vaalealla pohjalla, 'dark' tummalla lasilla.
 * - Kaikki mitat ja värit ovat inline-tyylejä, koska Tailwind ei aina lue shared/-hakemistoa
 *   sivustojen buildeissa (sama syy kuin AdUnitissa).
 *
 * Rakenne (Vesa 19.11.2026: "miten tämä tekstit ja muut ei näytä firm ja siltä että ammattilainen olisi
 * suunnitellut"): nimilappu "Kampanja" ⇒ otsikko ⇒ tarjousrivit ⇒ ehdot ⇒ hiusviivan alla lähderivi.
 * Ennen kaikki oli yhdessä harmaassa kappaleessa katkoviivakehyksen sisällä (näytti täytettävältä
 * kupongilta). Lähderivi ("Tiedot on tarkistettu … d.m.yyyy.") erotetaan ehtojen viimeisestä virkkeestä,
 * joten rekisterin rivit eivät muutu. Ehdot ja lähderivi ovat kokonaisia virkkeitä, joten ne ovat
 * leipätekstiä: 16 px ja muste vähintään /75 (lv_permanent_rules §33). Nimilappu on lyhyt, ei virke:
 * 14 px (`data-nimilappu`, julkaisuajon mittaus ohittaa sen 16 px:n rajassa).
 */
// Viimeinen virke "Tiedot/Ehdot on tarkistettu <mistä> d.m.yyyy." (päivän pisteet sallittu virkkeen sisällä).
const LAHDERIVI =
  /\s*((?:Tiedot|Ehdot|Hinnat|Details|Terms|Prices)\s+(?:on\s+|were\s+)?(?:tarkistettu|checked)\b[^.]*?(?:\d{1,2}\.\s?\d{1,2}\.\s?)?\d{4}\.)\s*$/

const NIMILAPPU: Record<string, string> = { fi: 'Kampanja', sv: 'Kampanj', de: 'Aktion' }

export function jaaLahderivi(ehdot: string): { runko: string; lahde?: string } {
  const m = ehdot.match(LAHDERIVI)
  if (!m || m.index === undefined || m.index === 0) return { runko: ehdot }
  return { runko: ehdot.slice(0, m.index).trim(), lahde: m[1] }
}

export default function KampanjaNauha({
  mainostaja,
  lang,
  tone = 'light',
  href,
  onLinkClick,
  marginTop,
  marginBottom,
  now,
}: {
  /** AdSpec.key tai kumppanin tunniste, sama kuin kampanjat.ts:n `mainostaja`. */
  mainostaja?: string
  lang?: string
  tone?: 'light' | 'dark'
  href?: string
  onLinkClick?: (href: string) => void
  /** Väli yläpuolelle (esim. '1rem'). Nauhan omassa juuressa, jotta tyhjä nauha ei jätä rakoa. */
  marginTop?: string
  marginBottom?: string
  /** Testiä varten; oletus on renderöinnin hetki. */
  now?: number
}) {
  const [renderedAt] = useState(() => now ?? Date.now())
  const kieli = (lang || '').split('-')[0]
  const k = kampanja(mainostaja, lang, renderedAt)
  const t = k?.teksti[kieli]
  if (!k || !t) return null

  const dark = tone === 'dark'
  const ink = dark ? '#F9FAFB' : '#0F172A'
  const body = dark ? 'rgba(249,250,251,0.86)' : '#334155'
  const meta = dark ? 'rgba(249,250,251,0.76)' : '#475569'
  const viiva = dark ? 'rgba(249,250,251,0.14)' : 'rgba(15,23,42,0.10)'
  const juuri: CSSProperties = {
    marginTop,
    marginBottom,
    padding: '1.125rem 1.25rem 1rem',
    borderRadius: '1rem',
    textAlign: 'left',
    color: ink,
    background: dark ? 'rgba(255,255,255,0.05)' : '#FFFFFF',
    border: `1px solid ${dark ? 'rgba(249,250,251,0.16)' : 'rgba(15,23,42,0.12)'}`,
    boxShadow: dark ? 'none' : '0 1px 2px rgba(15,23,42,0.05), 0 4px 12px rgba(15,23,42,0.04)',
  }
  const linkki = href && k.landing && t.cta ? href : undefined
  const { runko, lahde } = jaaLahderivi(t.ehdot)

  return (
    <aside aria-label={t.otsikko} data-kampanja={k.mainostaja} style={juuri}>
      <p
        data-nimilappu=""
        style={{
          margin: 0, fontSize: '14px', fontWeight: 600, lineHeight: 1.2, letterSpacing: '0.01em',
          color: dark ? '#BAE6FD' : '#BE185D',
        }}
      >
        {NIMILAPPU[kieli] ?? 'Offer'}
      </p>
      <p
        style={{
          margin: '0.375rem 0 0', fontSize: '20px', fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.01em',
          color: ink, textWrap: 'balance',
        }}
      >
        {t.otsikko}
      </p>
      {t.rivit && (
        <ul style={{ listStyle: 'none', margin: '0.75rem 0 0', padding: 0 }}>
          {t.rivit.map((r) => (
            <li
              key={r}
              style={{
                // balance: rivi jakautuu tasan eikä jätä normaalihintaa yksin kolmannelle riville puhelimella.
                fontSize: '16px', lineHeight: 1.4, color: ink, padding: '0.5rem 0', textWrap: 'balance',
                borderTop: `1px solid ${viiva}`,
              }}
            >
              {r}
            </li>
          ))}
        </ul>
      )}
      <p style={{ margin: '0.625rem 0 0', fontSize: '16px', lineHeight: 1.55, color: body, textWrap: 'pretty' }}>{runko}</p>
      {linkki && (
        <a
          href={linkki}
          target="_blank"
          rel="sponsored nofollow noopener"
          data-kampanja-linkki=""
          onClick={() => onLinkClick?.(linkki)}
          style={{
            display: 'inline-flex', alignItems: 'center', minHeight: '44px', marginTop: '0.25rem',
            fontSize: '16px', fontWeight: 700, color: ink, textDecoration: 'underline', textUnderlineOffset: '4px',
          }}
        >
          {t.cta}
          <span aria-hidden="true" style={{ marginLeft: '0.375rem' }}>→</span>
        </a>
      )}
      {lahde && (
        <p
          style={{
            margin: '0.875rem 0 0', paddingTop: '0.75rem', borderTop: `1px solid ${viiva}`,
            fontSize: '16px', lineHeight: 1.45, color: meta,
          }}
        >
          {lahde}
        </p>
      )}
    </aside>
  )
}
