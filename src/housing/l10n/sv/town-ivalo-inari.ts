/**
 * Ruotsi (sv) · town-ivalo-inari. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/ivalo-inari.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'inari', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Hyra bostad i Ivalo och Inari: kommunalt och privat',
  metaDescription:
    'Hyra bostad i Ivalo, Inari och Saariselkä: över 500 kommunala bostäder (Inarin Vuokra-asunnot Oy), privata hyresvärdar som kommunen listar och stöd från Kela.',
  breadcrumb: 'Ivalo och Inari',
  hero: {
    eyebrow: 'Enare kommun, 7 244 invånare',
    title: 'Hyra bostad i Ivalo och Inari.',
    subtitle:
      'Finlands nordligaste hyresmarknad: ett kommunalt bolag, några privata hyresvärdar och Saariselkäs säsong. Var du börjar.',
  },
  authorNote:
    'Inarin Vuokra-asunnot Oy och de privata hyresvärdarna från Enare kommuns egen bostadssida, folkmängd från Statistikcentralen, hyror per m² från Statistikcentralen (landskapet Lappland 2026Q3). Kontrollerat den 15 november 2026.',
  intro: [
    'Enare kommun har 7 244 invånare (Statistikcentralen, 31 dec 2025), och enligt kommunen har intresset för att bo där vuxit, varför den har sammanställt en lista över hyresvärdar på sin sida (inari.fi).',
    'Det kommunala bolaget Inarin Vuokra-asunnot Oy hyr ut över 500 bostäder i Ivalo, Inari, Saariselkä, Nellim och Sevettijärvi, från ettor till familjebostäder. De privata hyresvärdarna på kommunens lista är Bilto Oy, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg Oy och Uni Kodit (inari.fi).',
    'Statistikcentralen publicerar ingen separat hyressiffra för Inari, så nedan visas siffran för landskapet Lappland. Boende för Saariselkäs säsongsarbetare har en egen sida.',
  ],
  sections: [
    {
      id: 'channels',
      kicker: 'Vem du ansöker hos',
      h2: 'Det kommunala bolaget och kommunens lista.',
      band: true,
      cards: [
        {
          title: 'Inarin Vuokra-asunnot Oy',
          body: 'Det kommunala bostadsbolaget: över 500 bostäder i Ivalo, Inari, Saariselkä, Nellim och Sevettijärvi, nära grundläggande service. Lediga bostäder och ansökningar på bolagets egen webbplats.',
          href: 'https://inarinvuokra-asunnot.fi/',
          linkLabel: 'inarinvuokra-asunnot.fi',
          event: 'inari_company',
        },
        {
          title: 'Enare kommun: privata hyresvärdar',
          body: 'Kommunens bostadssida listar Bilto Oy, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg Oy och Uni Kodit med kontaktuppgifter, plus hyresgruppen Sodankylä–Inari–Utsjoki på Facebook. Mer information från inari@inari.fi.',
          href: 'https://www.inari.fi/fi/palvelut/asuminen.html',
          linkLabel: 'inari.fi: Boende',
          event: 'inari_city',
        },
        {
          title: 'Oikotie och Vuokraovi',
          body: 'Privata annonser under kommunen Inari; bostäder i Ivalo och Saariselkä finns i samma sökning. Annonserna är få, så skapa en sökbevakning.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/inari',
          linkLabel: 'Oikotie: hyresbostäder i Inari',
          event: 'oikotie',
        },
        {
          title: 'För Saariselkäs säsongsarbetare',
          body: 'Arbetsgivarna i Saariselkä inkvarterar också personal själva, och det kommunala bolaget har bostäder i Saariselkä. Fråga om boende vid intervjun; hela bilden finns på sidan för säsongsarbetare.',
          href: '/seasonal-worker-housing',
          linkLabel: 'Boende för säsongsarbetare',
          event: 'seasonal_page',
        },
      ],
    },
    {
      id: 'prices',
      kicker: 'Vad hyran kostar',
      h2: 'Hyror per m² i landskapet Lappland, juli–september 2026.',
      table: {
        caption: 'Genomsnittlig hyra €/m²/månad, fritt finansierade hyresbostäder, 2026Q3',
        head: ['', 'Lappland (landskapet)', 'Hela landet'],
        rows: [
          ['Ettor', '17,25', '20,49'],
          ['Tvåor', '12,87', '15,07'],
          ['Treor och större', '11,08', '13,98'],
          ['Alla bostäder', '13,14', '15,99'],
        ],
        foot: 'Statistikcentralen, hyror 2026Q3, tabell 15fa. Ingen separat siffra publiceras för Inari.',
      },
    },
    {
      id: 'housing-allowance',
      kicker: 'Bostadsbidrag från Kela',
      h2: 'Inari hör till Kelas ”övriga kommuner”.',
      table: {
        caption: 'Högsta boendeutgifter 2026, €/månad, Kelas grupp ”övriga kommuner”',
        head: ['Hushållets storlek', 'Högsta boendeutgifter'],
        rows: [
          ['1 person', '394'],
          ['2 personer', '574'],
          ['3 personer', '734'],
          ['4 personer', '875'],
          ['Varje ytterligare person', '+129'],
        ],
        foot: 'Kela, allmänt bostadsbidrag 2026. Bidraget är högst 70 % av de godtagbara boendeutgifterna; ett bidrag under 15 € betalas inte ut.',
      },
    },
    {
      id: 'contract',
      kicker: 'Hyresavtalet',
      h2: 'Depositionen och dess återbetalning.',
      bullets: [
        'Depositionen är högst tre månadshyror (lagen om hyra av bostadslägenhet, 8 §).',
        'Från och med 1 oktober 2026 ska depositionen betalas tillbaka, eller så ska det skriftligen förklaras varför den hålls kvar, inom 14 dagar efter att hyresförhållandet upphört (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Var hittar jag en hyresbostad i Ivalo?',
      a: 'Hos det kommunala bolaget Inarin Vuokra-asunnot Oy, som har över 500 bostäder i Ivalo, Inari och Saariselkä, eller hos de privata hyresvärdar som kommunen listar (Bilto, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg, Uni Kodit). Portalerna har få annonser.',
    },
    {
      q: 'Finns det hyresbostäder i Saariselkä?',
      a: 'Det kommunala bolaget har bostäder också i Saariselkä, och arbetsgivare inkvarterar säsongspersonal själva. På den öppna marknaden är Saariselkäs bostäder mest fritidshus.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'De första nätterna',
    h2: 'Innan nycklarna.',
    lead: 'Partnersökningen visar lediga rum i Ivalo och Saariselkä till dagens priser.',
    chips: [
      { label: 'Ivalo', destination: 'Ivalo', sid: 'rentals_ivalo_first_weeks' },
      { label: 'Saariselkä', destination: 'Saariselkä', sid: 'rentals_saariselka_first_weeks' },
    ],
  },
  sources: pickSources('sv', SOURCES, common.sourceLabels),
};

export default copy;
