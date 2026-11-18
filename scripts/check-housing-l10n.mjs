// Asumissivujen käännösten tarkistus englantia vasten (src/housing/l10n/<kieli>/ vs src/housing/*.ts `en`):
// rakenne, tunnisteet (id, href, src, sid …), HTML-merkinnät, luvut (uusi luku = virhe), viivat, metaikkuna, kääntämättömät.
// Ajo sivuston juuresta: node scripts/check-housing-l10n.mjs . <kieli|all> [--warn]   (15.11.2026, ks. per-site-muisti)
// Aja aina kun englantia tai käännöstä muutetaan: englannin muutos pitää viedä kaikkiin kymmeneen kieleen.
// Exit 1 = virheitä. Varoitukset (--warn näyttää): luku puuttuu käännöksestä, mahdollisesti kääntämätön lähteen nimi.
import { join, resolve } from 'node:path';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';

const W = resolve(process.argv[2]);
const arg = process.argv[3] || 'all';
const SHOW_WARN = process.argv.includes('--warn');
const ALL = ['sv', 'de', 'fr', 'es', 'it', 'nl', 'pt-BR', 'ja', 'ko', 'zh-CN'];
const LANGS = arg === 'all' ? ALL : arg.split(',');

const require = createRequire(join(W, 'package.json'));
const vite = await import(pathToFileURL(require.resolve('vite')).href);
const server = await vite.createServer({ root: W, configFile: false, logLevel: 'error', server: { middlewareMode: true }, appType: 'custom', optimizeDeps: { noDiscovery: true, include: [] } });
const I = await server.ssrLoadModule('/src/housing/index.ts');
const WG = await server.ssrLoadModule('/src/housing/whentogo.ts');
const S = await server.ssrLoadModule('/src/housing/sources.ts');
const CC = await server.ssrLoadModule('/src/components/housing/CabinCarousel.tsx');
const SA = await server.ssrLoadModule('/src/components/SettlingInAds.tsx');
const DM = await server.ssrLoadModule('/src/data/destMeta.mjs');

const EN = {
  rentals: I.HOUSING_PAGES.rentals.en,
  seasonal: I.HOUSING_PAGES.seasonal.en,
  moving: I.HOUSING_PAGES.moving.en,
  cost: I.HOUSING_PAGES.cost.en,
  longstays: I.HOUSING_PAGES.longStays.en,
  ...Object.fromEntries(Object.entries(I.RENTAL_TOWNS).map(([k, v]) => [`town-${k}`, v.en])),
  whentogo: WG.WHEN_TO_GO.en,
};
const commonEn = (lang) => ({
  ...(lang !== 'fr' && lang !== 'nl' ? { ui: I.HOUSING_UI.en, work: I.HOME.en.work } : {}),
  sourceLabels: Object.fromEntries(S.SOURCE_IDS.map((id) => [id, S.sourceLabelEn(id)])),
  whenToGoSourceLabels: WG.WHEN_SOURCE_LABELS_EN,
  adsNote: SA.NOTE.en,
  adsWrap: { moving: SA.WRAP_TEXT.moving.en, electricity: SA.WRAP_TEXT.electricity.en, arrival: SA.WRAP_TEXT.arrival.en, renting: SA.WRAP_TEXT.renting.en },
  cabins: CC.TEXT.en,
});

const KEEP = new Set(['id', 'href', 'src', 'sid', 'destination', 'event', 'partner', 'ratio', 'url', 'image', 'band']);
const CJK = /^(ja|ko|zh)/;
const tagsOf = (s) => [...String(s).matchAll(/<\/?([a-z]+)\b([^>]*)>/gi)].map((m) => {
  const href = /href="([^"]*)"/.exec(m[2]);
  // Sisarsivuston linkki saa viedä lukijan kieliversioon (laplandwork.com/de/…): verrataan ilman kielietuliitettä ja loppukauttaviivaa.
  const h = href ? href[1].replace(/^(https:\/\/lapland[a-z]*\.com)\/(sv|de|fr|es|it|nl|br|ja|kr|cn)\//, '$1/').replace(/(.)\/$/, '$1') : null;
  return `${m[0].startsWith('</') ? '/' : ''}${m[1].toLowerCase()}${h ? `[${h}]` : ''}`;
});
const NUM = /\d+(?:[.,:](?=\d)\d+|[   ](?=\d{3}(?!\d))\d{3})*/g;
function nums(s, lang) {
  const t = String(s).replace(/<[^>]+>/g, ' ').replace(/https?:\/\/\S+/g, ' ');
  const out = [];
  for (const m of t.matchAll(NUM)) {
    const after = t.slice(m.index + m[0].length, m.index + m[0].length + 1);
    if (CJK.test(lang) && /^[月월]$/.test(after) && Number(m[0]) <= 12) continue; // kuukausi numerona
    out.push(m[0].replace(/\D/g, ''));
  }
  return out;
}
const DASH_BAD = /—| – |–(?=\s)(?<=\s–)/;

let errors = 0, warns = 0;
const lines = [];
function err(lang, file, path, msg) { errors++; lines.push(`❌ ${lang} ${file} ${path}: ${msg}`); }
function warn(lang, file, path, msg) { warns++; if (SHOW_WARN) lines.push(`⚠ ${lang} ${file} ${path}: ${msg}`); }

function walk(lang, file, en, tr, path) {
  if (typeof en === 'string') {
    if (typeof tr !== 'string') return err(lang, file, path, `ei merkkijono (${typeof tr})`);
    const key = path.split('.').pop().replace(/\[\d+\]$/, '');
    if (KEEP.has(key) || path.endsWith('.image.src') || /\.image$/.test(path)) {
      if (tr !== en) err(lang, file, path, `tunniste muuttui: "${en}" → "${tr}"`);
      return;
    }
    const te = tagsOf(en).join(' '), tt = tagsOf(tr).join(' ');
    if (te !== tt) err(lang, file, path, `HTML eri: en [${te}] ≠ [${tt}]`);
    for (const ph of ['{price}', '{count}', '{area}']) if (en.includes(ph) && !tr.includes(ph)) err(lang, file, path, `paikanpitäjä ${ph} puuttuu`);
    if (/—/.test(tr)) err(lang, file, path, 'em-viiva —');
    if (/\s–\s/.test(tr)) err(lang, file, path, 'välilyönnein kirjoitettu ajatusviiva –');
    const ne = nums(en, 'en'), nt = nums(tr, lang);
    const pool = [...ne];
    for (const n of nt) {
      const i = pool.indexOf(n);
      if (i >= 0) pool.splice(i, 1);
      else if (!ne.includes(n)) err(lang, file, path, `uusi luku ${n} (en: ${ne.join(',') || '-'})`);
    }
    const missing = ne.filter((n) => !nt.includes(n));
    if (missing.length) warn(lang, file, path, `luku puuttuu: ${missing.join(',')}`);
    // Kääntämätön = sama kuin englannissa JA siinä on vähintään kaksi pienellä alkavaa sanaa (yritys- ja paikannimet saavat jäädä).
    const lowerWords = (en.replace(/<[^>]+>/g, ' ').match(/(?:^|\s)[a-z][a-z'’-]{2,}/g) || []).length;
    if (tr === en && en.length > 24 && lowerWords >= 2) {
      (/sourceLabels|SourceLabels/.test(path) ? warn : err)(lang, file, path, `kääntämättä: "${en.slice(0, 70)}"`);
    }
    if (key === 'metaTitle' && tr.length > 62) err(lang, file, path, `metaTitle ${tr.length} > 62 merkkiä`);
    if (key === 'metaDescription') { const p = DM.descriptionWindowProblem(tr); if (p) err(lang, file, path, `metaDescription ${p}`); }
    return;
  }
  if (Array.isArray(en)) {
    if (!Array.isArray(tr)) return err(lang, file, path, 'ei taulukko');
    if (en.length !== tr.length) err(lang, file, path, `pituus ${tr.length} ≠ en ${en.length}`);
    en.forEach((v, i) => tr[i] !== undefined && walk(lang, file, v, tr[i], `${path}[${i}]`));
    return;
  }
  if (en && typeof en === 'object') {
    if (!tr || typeof tr !== 'object') return err(lang, file, path, 'ei olio');
    for (const k of Object.keys(en)) {
      if (!(k in tr)) { err(lang, file, path, `avain ${k} puuttuu`); continue; }
      walk(lang, file, en[k], tr[k], path ? `${path}.${k}` : k);
    }
    for (const k of Object.keys(tr)) if (!(k in en)) err(lang, file, path, `ylimääräinen avain ${k}`);
    return;
  }
  if (en !== tr) err(lang, file, path, `arvo muuttui: ${en} → ${tr}`);
}

const summary = [];
for (const lang of LANGS) {
  const before = errors;
  for (const [file, en] of Object.entries(EN)) {
    let tr;
    try { tr = (await server.ssrLoadModule(`/src/housing/l10n/${lang}/${file}.ts`)).default; }
    catch (e) { err(lang, file, '', `ei latautunut: ${String(e.message).split('\n')[0]}`); continue; }
    const enSources = en.sources;
    const { sources: _s, ...enRest } = en; const { sources: _t, ...trRest } = tr || {};
    walk(lang, file, enRest, trRest, '');
    if (!Array.isArray(tr?.sources) || tr.sources.length !== enSources.length) err(lang, file, 'sources', 'lähdelista eri pituinen');
    // Sisältö yhä englantia? (sama metaTitle kuin englannissa)
    if (tr && tr.metaTitle === en.metaTitle) err(lang, file, 'metaTitle', 'sama kuin englannissa');
  }
  let common;
  try { common = (await server.ssrLoadModule(`/src/housing/l10n/${lang}/common.ts`)).default; }
  catch (e) { err(lang, 'common', '', `ei latautunut: ${String(e.message).split('\n')[0]}`); }
  if (common) walk(lang, 'common', commonEn(lang), common, '');
  summary.push(`${lang}: ${errors - before} virhettä`);
}
await server.close();
console.log(lines.slice(0, 400).join('\n'));
if (lines.length > 400) console.log(`… ${lines.length - 400} riviä lisää`);
console.log(summary.join(' · '));
console.log(`YHTEENSÄ ${errors} virhettä, ${warns} varoitusta${SHOW_WARN ? '' : ' (näytä: --warn)'}`);
process.exit(errors ? 1 : 0);
