// assert-css-budget.mjs — kaataa buildin jos Tailwindin skannaus on pudottanut
// sivustokohtaiset luokat. Aja vite buildin JALKEEN.
//
// 🔴🔴 MIKSI TAMA ON OLEMASSA (2026-08-17, kaksi tuotantovikaa samana paivana):
// Hub-repon laplandvibes/.gitignore alkaa rivilla `*/`, ja Tailwind v4:n oxide-
// skanneri kayttaa Rustin `ignore`-cratea joka lukee MYOS isantahakemistojen
// .gitignoret. Jos build ajetaan puussa joka on laplandvibes/:n SISALLA, taman
// sivuston `src/` on ignoroitu -> se jaa skannaamatta, mutta `shared/` ei (koska
// samassa tiedostossa on `!shared/`).
//
// Lopputulos on vaarallisempi kuin kaatuminen: build menee lapi, prerenderin
// savuportti on vihrea, konsoli on puhdas, sivu renderoityy -- mutta CSS on
// 72 kB eika 105 kB ja siita puuttuu ~93 luokkaa (bg-night, bg-cream,
// font-logo, italic...). Kermanvaalea sivusto menee liveen ilman taustavarejaan.
//
// KORJAUS jos tama portti laukeaa: rakenna hub-repon ULKOPUOLELLA, esim.
// projects/_lv_iso/ , jonne kopioidaan sisaruksiksi shared/ +
// _prerender_routes.mjs + _prerender_crawlable_body.mjs, ja node_modules
// junctionina SEKA juureen etta sivuston hakemistoon.
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'dist/assets';
// Nykyinen koko ~105 kt. Raja on reilusti alle sen mutta selvasti yli rikkinaisen
// 72 kt:n, jotta normaali vaihtelu ei laukaise tata.
// 2026-08-21: kalibroitu vendoroinnin jalkeiseen todelliseen kokoon (94 478 t).
// Aiempi raja 95 000 nojasi INFLATOITUUN kokoon: @source osoitti monorepon
// shared/:aan, joten Tailwind skannasi komponentteja joita tama sivusto ei
// renderoi. Mikaan ei puuttunut — kaikki kolme merkkiluokkaa olivat mukana.
const MIN_BYTES = 88_000;
// Luokat jotka tulevat VAIN taman sivuston src/:sta -- ei shared/:sta.
// Nama olivat kaikki poissa rikkinaisesta buildista.
const REQUIRED = ['bg-night', 'bg-cream', 'font-logo'];

const files = readdirSync(DIR).filter((f) => /^index-.*\.css$/.test(f));
if (files.length !== 1) {
  console.error(`[css-budget] odotettiin yhta index-*.css-tiedostoa, loytyi ${files.length}`);
  process.exit(1);
}
const path = join(DIR, files[0]);
const css = readFileSync(path, 'utf8');
const missing = REQUIRED.filter((c) => !css.includes(c));

if (css.length < MIN_BYTES || missing.length) {
  console.error('');
  console.error('❌ [css-budget] TAILWIND EI SKANNANNUT src/:AA — ALA DEPLOYAA');
  console.error(`   ${files[0]}: ${css.length} t (raja ${MIN_BYTES})`);
  if (missing.length) console.error(`   puuttuvat luokat: ${missing.join(', ')}`);
  console.error('   Syy: build ajettiin puussa joka on laplandvibes/:n sisalla.');
  console.error('   Hub-repon .gitignore (`*/`) piilottaa src/:n Tailwindin skannerilta.');
  console.error('   Korjaus: rakenna hub-repon ULKOPUOLELLA. Ks. tiedoston kommentti.');
  console.error('');
  process.exit(1);
}
console.log(`[css-budget] OK — ${files[0]} ${css.length} t, kaikki ${REQUIRED.length} merkkiluokkaa mukana`);
