/**
 * generate-prerender-meta.mjs  (stayinlapland)
 *
 * Emits scripts/prerender-meta.json — a per-route × per-locale { title, description }
 * map consumed by ../_prerender_routes.mjs via its `--meta=` flag (READER 0, tried
 * first). It covers ONLY the routes whose first-byte meta the generic readers can't
 * express from a single copyKey:
 *
 *   1. /destinations/<slug>  — title/description are COMPOSED at runtime in
 *      DestinationPage.tsx as `${dest.name} — ${metaTitleSuffix}` and
 *      `${pitch} ${longStayAngle}`. We reproduce that here, per locale, from the
 *      already-localized copy.{lang}.ts (destinationsData + destinationPage.metaTitleSuffix)
 *      and the proper-noun names in src/data/properties.ts.
 *
 *   2. /privacy, /terms, /cookie-policy — meta lives in an inline
 *      `const META: Record<Lang, {title, description}>` block inside each page .tsx,
 *      keyed by lang (en/fi/…); the generic per-lang/nested readers key by section
 *      name, not by a META map, so they miss it.
 *
 * The HOME route and the six section pages (/hotels, /glass-igloos, /wilderness,
 * /long-stays, /booking-guide, /when-to-go) are NOT emitted here — they resolve via
 * `copyKey` in routes.json (per-lang reader reads metaTitle/metaDescription straight
 * from copy.{lang}.ts), so there is a single source of truth and no duplication.
 *
 * Idempotent. Reads source only; writes scripts/prerender-meta.json. If a source
 * string is missing for a locale it is simply omitted, so the prerenderer falls back
 * to its EN/copyKey chain rather than shipping a wrong string.
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const LOCALES_DIR = resolve(ROOT, 'src', 'locales');
const OUT = resolve(__dirname, 'prerender-meta.json');

// lang → copy.{file}.ts filename (must mirror _prerender_routes.mjs FULL_LOCALE_LIST)
const LOCALES = [
  { lang: 'en', file: 'copy.en.ts' },
  { lang: 'fi', file: 'copy.fi.ts' },
  { lang: 'de', file: 'copy.de.ts' },
  { lang: 'ja', file: 'copy.ja.ts' },
  { lang: 'es', file: 'copy.es.ts' },
  { lang: 'pt-BR', file: 'copy.pt-BR.ts' },
  { lang: 'zh-CN', file: 'copy.zh-CN.ts' },
  { lang: 'ko', file: 'copy.ko.ts' },
  { lang: 'fr', file: 'copy.fr.ts' },
  { lang: 'it', file: 'copy.it.ts' },
  { lang: 'nl', file: 'copy.nl.ts' },
  { lang: 'sv', file: 'copy.sv.ts' },
];

const MAX_TITLE = 62;
const MAX_DESC = 165;

// ---------- shared TS-source extraction helpers (ported from _prerender_routes.mjs) ----------
function unescapeJsString(s) {
  return s
    .replace(/\\n/g, ' ')
    .replace(/\\t/g, ' ')
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/\\`/g, '`')
    .replace(/\\\\/g, '\\')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Walk braces from the first `{` at/after openIdx, return inner slice (exclusive of outer braces). */
function sliceBlock(src, openIdx) {
  let depth = 0, start = -1, end = -1;
  for (let i = openIdx; i < src.length; i++) {
    const c = src[i];
    if (c === '{') { if (depth === 0) start = i + 1; depth++; }
    else if (c === '}') { depth--; if (depth === 0) { end = i; break; } }
  }
  if (start < 0 || end < 0) return null;
  return src.slice(start, end);
}

/** Read a single `<key>: '…'` (or "…"/`…`) string value from a block. */
function readString(block, key) {
  if (!block) return null;
  const re = new RegExp(`(?:^|[\\s,{])${key}\\s*:\\s*(['"\`])((?:\\\\.|(?!\\1).)*)\\1`, 's');
  const m = block.match(re);
  return m ? unescapeJsString(m[2]) : null;
}

function clip(s, max) {
  if (!s) return s;
  const t = s.trim();
  if (t.length <= max) return t;
  // Clip on a word boundary, drop trailing punctuation/space.
  return t.slice(0, max).replace(/\s+\S*$/, '').replace(/[\s,.;:—–-]+$/, '').trim();
}

/** All `<key>: { … }` inner blocks in src (balanced-brace aware). */
function findKeyBlocks(src, key) {
  const re = new RegExp(`(?:["']${key.replace(/[-/]/g, '\\$&')}["']|\\b${key}\\b)\\s*:\\s*\\{`, 'g');
  const out = [];
  let m;
  while ((m = re.exec(src)) !== null) {
    const inner = sliceBlock(src, m.index + m[0].length - 1);
    if (inner != null) out.push(inner);
  }
  return out;
}

/** First `<key>: { … }` block that itself contains a metaTitle/metaDescription. */
function findSectionBlock(src, key) {
  const blocks = findKeyBlocks(src, key);
  for (const b of blocks) {
    if (/metaTitle\s*:/.test(b) || /metaDescription\s*:/.test(b)) return b;
  }
  return blocks[0] || null;
}

/** Read { metaTitle, metaDescription } from a named top-level copy section. */
function getSectionMeta(src, sectionKey) {
  const block = findSectionBlock(src, sectionKey);
  if (!block) return null;
  const title = readString(block, 'metaTitle');
  const description = readString(block, 'metaDescription');
  if (!title && !description) return null;
  return { title, description };
}

// ---------- source reads ----------
function readCopySource(loc) {
  const fp = resolve(LOCALES_DIR, loc.file);
  if (!existsSync(fp)) {
    console.warn(`[gen-meta] WARN: ${loc.file} missing — locale ${loc.lang} skipped`);
    return null;
  }
  return readFileSync(fp, 'utf-8');
}

/** destinationPage.metaTitleSuffix for a locale. */
function getMetaTitleSuffix(src) {
  return readString(src, 'metaTitleSuffix');
}

/**
 * destinationsData: [ { slug, pitch, longStayAngle }, … ] for a locale →
 * Map(slug → { pitch, longStayAngle }).
 */
function getDestinationsData(src) {
  const out = new Map();
  const idx = src.indexOf('destinationsData');
  if (idx < 0) return out;
  const arrOpen = src.indexOf('[', idx);
  if (arrOpen < 0) return out;
  // Walk the array's brackets to bound it, then pull each object literal.
  let depth = 0, end = -1;
  for (let i = arrOpen; i < src.length; i++) {
    const c = src[i];
    if (c === '[') depth++;
    else if (c === ']') { depth--; if (depth === 0) { end = i; break; } }
  }
  if (end < 0) return out;
  const arr = src.slice(arrOpen, end);
  // Each entry begins at a `{`; reuse sliceBlock to capture balanced object bodies.
  let cursor = 0;
  while (true) {
    const open = arr.indexOf('{', cursor);
    if (open < 0) break;
    const inner = sliceBlock(arr, open);
    if (inner == null) break;
    const slug = readString(inner, 'slug');
    const pitch = readString(inner, 'pitch');
    const longStayAngle = readString(inner, 'longStayAngle');
    if (slug) out.set(slug, { pitch, longStayAngle });
    // advance cursor past this object
    cursor = open + inner.length + 1;
  }
  return out;
}

/** destinations array in src/data/properties.ts → [ { slug, name }, … ] (proper nouns). */
function getDestinationList() {
  const fp = resolve(ROOT, 'src', 'data', 'properties.ts');
  const src = readFileSync(fp, 'utf-8');
  const idx = src.indexOf('export const destinations');
  const region = idx >= 0 ? src.slice(idx) : src;
  // Bound to the array literal that follows the `=` — NOT the `[]` inside the
  // type annotation (`: DestinationInfo[] =`), which would otherwise be picked
  // up first and bracket-walk to an empty slice.
  const eq = region.indexOf('=');
  const arrOpen = region.indexOf('[', eq >= 0 ? eq : 0);
  let depth = 0, end = -1;
  for (let i = arrOpen; i < region.length; i++) {
    const c = region[i];
    if (c === '[') depth++;
    else if (c === ']') { depth--; if (depth === 0) { end = i; break; } }
  }
  const arr = region.slice(arrOpen, end < 0 ? undefined : end);
  const out = [];
  let cursor = 0;
  while (true) {
    const open = arr.indexOf('{', cursor);
    if (open < 0) break;
    const inner = sliceBlock(arr, open);
    if (inner == null) break;
    const slug = readString(inner, 'slug');
    const name = readString(inner, 'name');
    if (slug && name) out.push({ slug, name });
    cursor = open + inner.length + 1;
  }
  return out;
}

/**
 * Legal page inline META: const META: Record<Lang, {…}> = { en: {title, description}, … }.
 * Returns Map(lang → {title, description}).
 */
function getLegalMeta(pageFile) {
  const fp = resolve(ROOT, pageFile);
  if (!existsSync(fp)) {
    console.warn(`[gen-meta] WARN: ${pageFile} missing`);
    return new Map();
  }
  const src = readFileSync(fp, 'utf-8');
  const m = src.match(/const\s+META\s*(?::[^=]+)?=\s*\{/);
  if (!m) return new Map();
  const metaBlock = sliceBlock(src, m.index + m[0].length - 1);
  if (!metaBlock) return new Map();
  const out = new Map();
  for (const loc of LOCALES) {
    // Key may be a bare ident (en, fi, de…) or a quoted compound ('pt-BR', 'zh-CN').
    const keyRe = new RegExp(`(?:["']${loc.lang}["']|\\b${loc.lang.replace(/[-]/g, '\\$&')}\\b)\\s*:\\s*\\{`);
    const km = metaBlock.match(keyRe);
    if (!km) continue;
    const inner = sliceBlock(metaBlock, km.index + km[0].length - 1);
    if (!inner) continue;
    const title = readString(inner, 'title');
    const description = readString(inner, 'description');
    if (title || description) out.set(loc.lang, { title, description });
  }
  return out;
}

// ---------- build the map ----------
const META = {}; // { "<path>": { "<lang>": { title, description } } }

function set(path, lang, title, description) {
  if (!title && !description) return;
  META[path] ??= {};
  const entry = {};
  if (title) entry.title = clip(title, MAX_TITLE);
  if (description) entry.description = clip(description, MAX_DESC);
  META[path][lang] = entry;
}

const destList = getDestinationList();

// route path → top-level section key in copy.{lang}.ts (metaTitle/metaDescription).
const SECTION_ROUTES = {
  '/': 'home',
  '/long-stays': 'longStays',
  '/hotels': 'hotels',
  '/glass-igloos': 'glassIgloos',
  '/wilderness': 'wilderness',
  '/when-to-go': 'whenToGo',
  '/booking-guide': 'bookingGuide',
};

for (const loc of LOCALES) {
  const src = readCopySource(loc);
  if (!src) continue;

  // Home + section pages — localized metaTitle/metaDescription straight from the
  // copy section. Emitting them here (rather than relying on the prerenderer's
  // per-lang reader) makes prerender-meta.json the single first-byte SEO source
  // for ALL routes and is filename-agnostic — the shared reader expects
  // copy.ptBR.ts / copy.zhCN.ts, but this site ships copy.pt-BR.ts / copy.zh-CN.ts,
  // so pt-BR + zh-CN would otherwise EN-fallback on section pages.
  for (const [path, sectionKey] of Object.entries(SECTION_ROUTES)) {
    const sm = getSectionMeta(src, sectionKey);
    if (sm) set(path, loc.lang, sm.title, sm.description);
  }

  const suffix = getMetaTitleSuffix(src);
  const destData = getDestinationsData(src);

  // /destinations/<slug>
  for (const { slug, name } of destList) {
    const dd = destData.get(slug);
    // Title: "<Name> — <localized suffix>"  (mirrors DestinationPage.tsx line 101)
    const title = suffix ? `${name} — ${suffix}` : null;
    // Description: "<pitch> <longStayAngle>" sliced to 160 (mirrors line 102).
    const description = dd
      ? clip([dd.pitch, dd.longStayAngle].filter(Boolean).join(' '), MAX_DESC)
      : null;
    set(`/destinations/${slug}`, loc.lang, title, description);
  }
}

// Legal pages — inline META per page.
const LEGAL = [
  { path: '/privacy', file: 'src/pages/PrivacyPolicy.tsx' },
  { path: '/terms', file: 'src/pages/Terms.tsx' },
  { path: '/cookie-policy', file: 'src/pages/CookiePolicy.tsx' },
];
for (const { path, file } of LEGAL) {
  const map = getLegalMeta(file);
  for (const [lang, { title, description }] of map) {
    set(path, lang, title, description);
  }
}

writeFileSync(OUT, JSON.stringify(META, null, 2) + '\n', 'utf-8');

// ---------- report ----------
const routeCount = Object.keys(META).length;
const localeCounts = {};
for (const path of Object.keys(META)) {
  for (const lang of Object.keys(META[path])) localeCounts[lang] = (localeCounts[lang] || 0) + 1;
}
console.log(`[gen-meta] wrote ${OUT.replace(ROOT + '\\', '').replace(ROOT + '/', '')} — ${routeCount} routes`);
console.log(`[gen-meta] per-locale route coverage:`, localeCounts);
// Surface any locale missing the destination suffix (would mean EN-fallback titles).
const enRoutes = Object.keys(META).filter((p) => META[p].en).length;
for (const loc of LOCALES) {
  const got = localeCounts[loc.lang] || 0;
  if (got < enRoutes) console.warn(`[gen-meta] WARN: locale ${loc.lang} covers ${got}/${enRoutes} routes — some will EN-fallback`);
}
