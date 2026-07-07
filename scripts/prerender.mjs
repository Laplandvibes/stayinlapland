// scripts/prerender.mjs  (stayinlapland)
//
// Non-invasive, react-snap–style post-build prerender. After `vite build`:
//   1. serves dist/ on a local port (vite preview),
//   2. drives system Chrome (puppeteer-core, no Chromium download) to visit
//      every route × every locale,
//   3. waits for React to mount + the SEO head (canonical) + footer to render,
//   4. snapshots document.documentElement.outerHTML,
//   5. writes it to dist/<prefix>/<route>/index.html.
//
// The SPA is untouched: main.tsx still createRoot().render()s into #root, so
// the static HTML is replaced by the client render on load (no hydrateRoot →
// no hydration-mismatch). SAFE: if Chrome is missing or preview fails, aborts
// WITHOUT touching the build output. `npm run build:nossg` is the escape hatch.
//
// Dynamic destination slugs are discovered from src/data/properties.ts at run
// time so the route list never drifts from the app.

import { spawn } from 'node:child_process'
import { mkdir, writeFile, readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { dirname, resolve, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer-core'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const DIST = join(ROOT, 'dist')
const PORT = Number(process.env.PRERENDER_PORT || 4324)
const ORIGIN = `http://localhost:${PORT}`

// ---- Locale prefixes (must match src/App.tsx LOCALE_PREFIXES) --------------
const LOCALE_PREFIXES = ['', '/fi', '/de', '/ja', '/es', '/br', '/cn', '/kr', '/fr', '/it', '/nl']

// ---- Static routes (must match the routes built in src/App.tsx) ------------
const STATIC_ROUTES = [
  '',
  '/long-stays',
  '/hotels',
  '/glass-igloos',
  '/wilderness',
  '/when-to-go',
  '/booking-guide',
  '/privacy',
  '/terms',
  '/cookie-policy',
]

// ---- Discover dynamic destination slugs from source (never drift) ----------
async function discoverDestinationSlugs() {
  try {
    const src = await readFile(join(ROOT, 'src', 'data', 'properties.ts'), 'utf8')
    // Only the `destinations` array feeds /destinations/:slug. Slice from its
    // declaration to the end so we don't pick up property/category slugs above.
    const idx = src.indexOf('export const destinations')
    const region = idx >= 0 ? src.slice(idx) : src
    const slugs = [...region.matchAll(/slug:\s*'([a-z0-9-]+)'/g)].map((m) => m[1])
    return [...new Set(slugs)]
  } catch {
    return []
  }
}

// ---- System Chrome discovery (Windows-first, then common *nix paths) -------
function findChrome() {
  if (process.env.PUPPETEER_EXECUTABLE_PATH) return process.env.PUPPETEER_EXECUTABLE_PATH
  const candidates = [
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ]
  for (const c of candidates) if (existsSync(c)) return c
  return null
}

function urlPathFor(prefix, route) {
  if (route === '') return prefix === '' ? '/' : prefix
  return `${prefix}${route}`
}

function distFileFor(prefix, route) {
  const segs = []
  if (prefix) segs.push(prefix.replace(/^\//, ''))
  if (route) segs.push(route.replace(/^\//, ''))
  return join(DIST, ...segs, 'index.html')
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function waitForPreview(maxMs = 30000) {
  const start = Date.now()
  while (Date.now() - start < maxMs) {
    try {
      const res = await fetch(ORIGIN + '/')
      if (res.ok) return true
    } catch {
      /* not up yet */
    }
    await sleep(250)
  }
  return false
}

async function main() {
  if (!existsSync(DIST) || !existsSync(join(DIST, 'index.html'))) {
    console.error('[prerender] dist/index.html not found — run `vite build` first.')
    process.exit(1)
  }

  const chromePath = findChrome()
  if (!chromePath) {
    console.error(
      '[prerender] BLOCKER: no system Chrome/Edge found. Set PUPPETEER_EXECUTABLE_PATH ' +
        'to a Chromium binary and re-run. Prerender aborted (build output is unchanged; ' +
        'use `npm run build:nossg` for a clean no-prerender build).',
    )
    process.exit(2)
  }
  console.log(`[prerender] using browser: ${chromePath}`)

  const destSlugs = await discoverDestinationSlugs()
  const ROUTES = [
    ...STATIC_ROUTES,
    ...destSlugs.map((s) => `/destinations/${s}`),
  ]
  console.log(
    `[prerender] routes: ${STATIC_ROUTES.length} static + ${destSlugs.length} destinations = ` +
      `${ROUTES.length} × ${LOCALE_PREFIXES.length} locales = ` +
      `${ROUTES.length * LOCALE_PREFIXES.length} pages`,
  )

  // ---- 1. serve dist/ via vite preview --------------------------------------
  const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  const preview = spawn(
    npmCmd,
    ['run', 'preview', '--', '--port', String(PORT), '--strictPort'],
    { cwd: ROOT, stdio: ['ignore', 'pipe', 'pipe'], shell: process.platform === 'win32' },
  )
  preview.stdout.on('data', () => {})
  preview.stderr.on('data', (d) => process.stderr.write(`[preview] ${d}`))

  const ok = await waitForPreview()
  if (!ok) {
    preview.kill()
    console.error('[prerender] BLOCKER: vite preview did not come up on ' + ORIGIN)
    process.exit(3)
  }
  console.log(`[prerender] preview live at ${ORIGIN}`)

  // ---- 2. launch headless Chrome --------------------------------------------
  let browser
  try {
    browser = await puppeteer.launch({
      executablePath: chromePath,
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    })
  } catch (err) {
    preview.kill()
    console.error('[prerender] BLOCKER: could not launch headless Chrome:', err.message)
    process.exit(4)
  }

  let written = 0
  let failed = 0
  const total = LOCALE_PREFIXES.length * ROUTES.length

  for (const prefix of LOCALE_PREFIXES) {
    for (const route of ROUTES) {
      const urlPath = urlPathFor(prefix, route)
      const outFile = distFileFor(prefix, route)
      const page = await browser.newPage()
      try {
        // Suppress the in-page locale auto-redirect: an explicit 'en' choice
        // makes the sync redirect short-circuit, so a bare-root EN capture
        // stays on '/' instead of bouncing to a browser-language locale.
        await page.evaluateOnNewDocument(() => {
          try {
            localStorage.setItem('lv_locale_choice', 'en')
          } catch {
            /* ignore */
          }
        })

        await page.goto(ORIGIN + urlPath, { waitUntil: 'networkidle0', timeout: 45000 })

        await page.waitForFunction(
          () => {
            const root = document.getElementById('root')
            const hasBody = !!root && root.innerText.trim().length > 200
            const hasCanonical = !!document.head.querySelector('link[rel="canonical"]')
            const hasFooter = !!document.querySelector('footer')
            return hasBody && hasCanonical && hasFooter
          },
          { timeout: 45000, polling: 200 },
        )

        const html = '<!doctype html>\n' + (await page.evaluate(() => document.documentElement.outerHTML))

        await mkdir(dirname(outFile), { recursive: true })
        await writeFile(outFile, html, 'utf8')
        written++
        if (written % 25 === 0) console.log(`[prerender] … ${written}/${total} written`)
      } catch (err) {
        failed++
        console.error(`[prerender] ✗ ${urlPath} — ${err.message}`)
      } finally {
        await page.close()
      }
    }
  }

  await browser.close()
  preview.kill()
  if (preview.pid && process.platform === 'win32') {
    try {
      spawn('taskkill', ['/pid', String(preview.pid), '/T', '/F'])
    } catch {
      /* best effort */
    }
  }

  console.log(`\n[prerender] done: ${written}/${total} written, ${failed} failed.`)
  if (failed > total * 0.1) {
    console.error(`[prerender] ABORT: ${failed} failures exceed 10% threshold.`)
    process.exit(5)
  }
}

main().catch((err) => {
  console.error('[prerender] fatal:', err)
  process.exit(1)
})
