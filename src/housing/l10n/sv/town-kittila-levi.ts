/**
 * Ruotsi (sv) · town-kittila-levi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/kittila-levi.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'kittila', 'yle2023', 'yle2017', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Hyra bostad i Kittilä och Levi: kommunala bostäder',
  metaDescription:
    'Hyra bostad i Kittilä och Levi: kommunala Kittilän Vuokratalot Oy, säsongshyror på semesterlägenheter, personalbostäder och stöd från Kela.',
  breadcrumb: 'Kittilä och Levi',
  hero: {
    eyebrow: 'Kittilä, 6 973 invånare',
    title: 'Hyra bostad i Kittilä och Levi.',
    subtitle:
      'En av Lapplands snabbast växande kommuner och dess skidort, där samma lägenhet kostar månadshyra på sommaren och veckopris på vintern. Var du ansöker och när.',
  },
  authorNote:
    'Folkmängd och tillväxt från Statistikcentralen, Kittilän Vuokratalot Oy från kommunens och bolagets egna sidor, Levis säsongspriser från Yle, 25 maj 2023. Kontrollerat den 15 november 2026.',
  intro: [
    'Kittilä hade 6 973 invånare i slutet av 2025 och växte med 2,0 procent på ett år, näst snabbast av Lapplands kommuner: bara Pelkosenniemi växte snabbare, med 2,4 procent (Statistikcentralen). Motorn är Levi: 2017 uppskattade Levin Matkailu Oy att skidortsområdet skulle anställa drygt 2 000 säsongsarbetare för vintersäsongen (Yle, 25 oktober 2017).',
    'Levis hyresmarknad följer säsongen: en lägenhet på 80 m² i ett fjällhus nära centrum kostade 750 € i månaden från maj till november, 2 000 € i veckan under högsäsong och 1 650 € i månaden året runt (Yle, 25 maj 2023). En semesterlägenhet kanske inte heller får en officiell adress.',
    'En permanent hyresbostad är troligare i Kittilä by än i Levi centrum. Kommunens bostäder hyrs ut av Kittilän Vuokratalot Oy, och du ansöker elektroniskt på bolagets webbplats (kittila.fi, Kittilän Vuokratalot).',
  ],
  sections: [
    {
      id: 'channels',
      kicker: 'Vem du ansöker hos',
      h2: 'Det kommunala bolaget, portalerna och Levi-gruppen.',
      band: true,
      cards: [
        {
          title: 'Kittilän Vuokratalot Oy',
          body: 'Hyr ut kommunens egna hyresbostäder. Kontoret ligger på nedre botten i kommunhuset (Valtatie 15, 99100 Kittilä). Bolaget behandlar bara elektroniska ansökningar som görs via dess webbplats, med nödvändiga bilagor. På bolagets sidor står det inte hur länge en ansökan gäller, så fråga bolaget.',
          href: 'https://kittila.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot',
          linkLabel: 'kittila.fi: Hyresbostäder',
          event: 'kittila_city',
        },
        {
          title: 'Oikotie, Vuokraovi och TA-Asunnot',
          body: 'Privata annonser och förmedlarannonser under kommunen Kittilä; bostäder i Levi finns i samma sökning. TA-Asunnot har egna lediga hyresbostäder i Kittilä.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kittil%C3%A4',
          linkLabel: 'Oikotie: hyresbostäder i Kittilä',
          event: 'oikotie',
        },
        {
          title: 'Personalbostäder',
          body: 'Arbetsgivare i skidorten hyr radhus och semesterlägenheter åt personalen för hela säsongen och drar hyran från lönen. Fråga om boende skriftligt tillsammans med jobberbjudandet. Hela bilden finns på sidan för säsongsarbetare.',
          href: '/seasonal-worker-housing',
          linkLabel: 'Boende för säsongsarbetare',
          event: 'seasonal_page',
        },
        {
          title: 'Levi housing-gruppen på Facebook',
          body: 'Den snabbaste kanalen i fjällbyn och där säsongsarbetare ofta hittar sin bostad. Ingen står för att annonserna stämmer: betala aldrig deposition före en visning, och skaffa avtalet skriftligt.',
        },
      ],
    },
    {
      id: 'prices',
      kicker: 'Vad hyran kostar',
      h2: 'Landskapssiffran och Levi-undantaget.',
      table: {
        caption: 'Genomsnittlig hyra €/m²/månad, fritt finansierade hyresbostäder, 2026Q3',
        head: ['', 'Lappland (landskapet)', 'Hela landet'],
        rows: [
          ['Ettor', '17,25', '20,49'],
          ['Tvåor', '12,87', '15,07'],
          ['Treor och större', '11,08', '13,98'],
          ['Alla bostäder', '13,14', '15,99'],
        ],
        foot: 'Statistikcentralen, hyror 2026Q3, tabell 15fa. Ingen separat siffra publiceras för Kittilä, och Levis säsongshyror ingår inte alls i statistiken.',
      },
      paras: [
        '<strong>Levi-exemplet (Yle, 25 maj 2023):</strong> en lägenhet på 80 m² i ett fjällhus för 750 € i månaden från maj till november = 9,38 € per m², 2 000 € i veckan under högsäsong, 1 650 € i månaden året runt = 20,63 € per m². Samma lägenhet är billigare än landskapsgenomsnittet på sommaren och dyrare än det nationella ettapriset året runt.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Bostadsbidrag från Kela',
      h2: 'Kittilä hör till Kelas ”övriga kommuner”.',
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
        foot: 'Kela, allmänt bostadsbidrag 2026. Bidraget är högst 70 % av de godtagbara boendeutgifterna. I en semesterlägenhet utan registrerad adress är villkoren inte uppfyllda.',
      },
    },
    {
      id: 'when',
      kicker: 'När du ska söka',
      h2: 'På sommaren, innan veckopriserna börjar.',
      bullets: [
        'Månadsuthyrning av semesterlägenheter finns bara från maj till november, och under högsäsong är priset ett veckopris (Yle, 25 maj 2023). För vintersäsongen bör du hitta bostaden på sommaren.',
        'Lämna in det kommunala bolagets ansökan före säsongen och fråga bolaget hur länge den gäller.',
        'Depositionen är högst tre månadshyror (lagen om hyra av bostadslägenhet, 8 §), och från och med 1 oktober 2026 betalas den tillbaka inom 14 dagar efter att hyresförhållandet upphört (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Var hittar jag en vinterbostad i Levi?',
      a: 'Mest sannolikt hos din arbetsgivare: skidortens företag hyr radhus och semesterlägenheter åt personalen för hela säsongen. På den öppna marknaden hyrs Levis lägenheter ut per vecka på vintern (Yle, 25 maj 2023), så månadshyra är i första hand möjlig från maj till november. Det kommunala bolaget har bostäder både i Kittilä by och i Sirkka i Levi (Kittilän Vuokratalot).',
    },
    {
      q: 'Hur ansöker jag om en kommunal bostad i Kittilä?',
      a: 'Med Kittilän Vuokratalot Oy:s elektroniska ansökan på bolagets webbplats. Ofullständiga ansökningar utan de nödvändiga bilagorna behandlas inte. Kontoret ligger på nedre botten i kommunhuset, Valtatie 15 (kittila.fi, Kittilän Vuokratalot).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'De första nätterna',
    h2: 'Innan bostaden är ledig.',
    lead: 'Partnersökningen visar lediga rum och lägenheter i Levi och Kittilä till dagens priser.',
    chips: [
      { label: 'Levi', destination: 'Levi', sid: 'rentals_levi_first_weeks' },
      { label: 'Kittilä', destination: 'Kittilä', sid: 'rentals_kittila_first_weeks' },
    ],
  },
  sources: pickSources('sv', SOURCES, common.sourceLabels),
};

export default copy;
