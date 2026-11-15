/**
 * Ruotsi (sv) · town-kemi-tornio. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/kemi-tornio.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'kemi', 'itatuuli', 'keminmaa', 'keminmaaVuokra', 'tornio', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Hyra bostad i Kemi, Torneå och Keminmaa: kommunala bostäder',
  metaDescription:
    'Hyra bostad i Kemi, Torneå och Keminmaa vid Lapplands kust: kommunala hyresbolag som Itätuuli och Tornion Krunni, privata förmedlare och stöd från Kela.',
  breadcrumb: 'Kemi och Torneå',
  hero: {
    eyebrow: 'Havslapplands kust',
    title: 'Hyra bostad i Kemi, Torneå och Keminmaa.',
    subtitle:
      'Tvillingstäderna vid kusten, där de kommunala hyresbolagen har hundratals bostäder och ansökningarna görs på nätet. Var du börjar och vad hyran kostar.',
  },
  authorNote:
    'Antalet bostäder i hyresbolagen från kommunernas egna sidor för Kemi, Torneå och Keminmaa, ansökningsvillkor från bolagens egna sidor, hyror per m² från Statistikcentralen (landskapet Lappland 2026Q3). Kontrollerat den 15 november 2026.',
  intro: [
    'Kemi har 19 339 invånare, Torneå 20 823 och Keminmaa 7 576 (Statistikcentralen, 31 dec 2025). De tre kommunerna gränsar till varandra, så bostaden kan ligga i en annan kommun än jobbet.',
    'De kommunala hyresbolagen är första adressen: Kemis kommunala bostäder drivs av Kiinteistö Oy Itätuuli (kemi.fi), stadens största hyresvärd, med bostäder inom fem kilometer från centrum (itatuuli.fi). Keminmaan Vuokra-asunnot Oy har 18 fastigheter med drygt 300 bostäder (keminmaa.fi). Varje bolag har sin egen webbansökan. I Torneå förvaltas stadens bostäder av Tornion Krunni Oy, dit Tornion Vuokra-asunnot Oy hör (tornio.fi).',
    'Statistikcentralens aktuella hyrestabell har ingen separat rad för Kemi eller Torneå, så nedan visas siffran för landskapet Lappland. Rovaniemis siffror finns på dess egen sida.',
  ],
  sections: [
    {
      id: 'prices',
      kicker: 'Vad hyran kostar',
      h2: 'Hyror per m² i landskapet Lappland, juli–september 2026.',
      table: {
        caption: 'Genomsnittlig hyra €/m²/månad, fritt finansierade hyresbostäder, 2026Q3',
        head: ['', 'Lappland (landskapet)', 'Rovaniemi', 'Hela landet'],
        rows: [
          ['Ettor', '17,25', '18,63', '20,49'],
          ['Tvåor', '12,87', '14,40', '15,07'],
          ['Treor och större', '11,08', '12,29', '13,98'],
          ['Alla bostäder', '13,14', '14,63', '15,99'],
        ],
        foot: 'Statistikcentralen, hyror 2026Q3, tabell 15fa. Landskapssiffran inkluderar Rovaniemi, så nivån i Kemi–Torneå ligger sannolikt under den; den aktuella tabellen visar den inte separat.',
      },
      paras: [
        '<strong>Exempel vid landskapsgenomsnittet:</strong> en etta på 30 m² cirka 520 € i månaden (17,25 × 30); en tvåa på 50 m² cirka 640 € (12,87 × 50); en trea på 75 m² cirka 830 € (11,08 × 75).',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Bostadsbidrag från Kela',
      h2: 'Kemi, Torneå och Keminmaa hör till Kelas ”övriga kommuner”.',
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
      id: 'channels',
      kicker: 'Vem du ansöker hos',
      h2: 'Först det kommunala bolaget, sedan förmedlarna.',
      band: true,
      cards: [
        {
          title: 'Kemi: Kiinteistö Oy Itätuuli',
          body: 'Stadens hyresbostäder. Itätuuli är Kemis största hyresvärd, och bolagets bostäder ligger inom fem kilometer från centrum. Bolagets egen webbansökan gäller i fyra månader, och ingen deposition tas ut. Visit Kemis företagssida listar också de privata förmedlarna: Forenom, Habita Kemi, HVC Group, Kiinteistömaailma, KVP Group, OP Koti Kemi, Pihlajaniemi & Co, Solecco och AJK Asunnot.',
          href: 'https://www.kemi.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
          linkLabel: 'kemi.fi: Hyresbostäder',
          event: 'kemi_city',
        },
        {
          title: 'Keminmaa: Keminmaan Vuokra-asunnot Oy',
          body: 'Det kommunägda bostadsbolaget: 18 fastigheter med drygt 300 bostäder, och vatten och uppvärmning ingår i hyran. Bolagets egen webbansökan gäller i tre månader, och depositionen är en månadshyra.',
          href: 'https://www.keminmaanvuokra-asunnot.fi/asunnonhaku.html',
          linkLabel: 'Keminmaan Vuokra-asunnot: Så ansöker du',
          event: 'keminmaa',
        },
        {
          title: 'Torneå: Tornion Krunni Oy',
          body: 'Förvaltar Tornion Vuokra-asunnot Oy, Tornion Oppilasasuntola Oy och Tornion Palveluasunnot Oy; stadens lokalenhet sköter också de bostäder som staden äger direkt. Bostadsfrågor per telefon, och stadens sida pekar också på privata hyresvärdar och förmedlare.',
          href: 'https://www.tornio.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
          linkLabel: 'tornio.fi: Hyresbostäder',
          event: 'tornio_city',
        },
        {
          title: 'Oikotie och Vuokraovi',
          body: 'Privata annonser och förmedlarannonser. Sök Kemi, Torneå och Keminmaa som separata kommuner: det är tre skilda kommunsökningar.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kemi',
          linkLabel: 'Oikotie: hyresbostäder i Kemi',
          event: 'oikotie',
        },
      ],
    },
    {
      id: 'contract',
      kicker: 'Hyresavtalet',
      h2: 'Två paragrafer i lagen som är bra att känna till.',
      bullets: [
        'Depositionen är högst tre månadshyror (lagen om hyra av bostadslägenhet, 8 §).',
        'Från och med 1 oktober 2026 ska depositionen betalas tillbaka, eller så ska det skriftligen förklaras varför den hålls kvar, inom 14 dagar efter att hyresförhållandet upphört (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Hur ansöker jag om en kommunal bostad i Kemi?',
      a: 'Med Kiinteistö Oy Itätuulis egen webbansökan, som gäller i fyra månader. Itätuuli är Kemis största hyresvärd med bostäder inom fem kilometer från centrum och hyr ut alla utan deposition (itatuuli.fi). Keminmaan Vuokra-asunnot Oy har en egen ansökan.',
    },
    {
      q: 'Vad kostar hyran i Kemi och Torneå?',
      a: 'Statistikcentralens aktuella tabell har ingen separat rad för städerna. Landskapet Lapplands genomsnitt var 13,14 € per m² i juli–september 2026 (ettor 17,25, tvåor 12,87), och den siffran inkluderar det dyrare Rovaniemi.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'De första veckorna',
    h2: 'Visningar på plats.',
    lead: 'Boka ett ställe att bo på under visningarna och se bostaden innan du skriver under.',
    chips: [
      { label: 'Kemi', destination: 'Kemi', sid: 'rentals_kemi_first_weeks' },
      { label: 'Torneå', destination: 'Tornio', sid: 'rentals_tornio_first_weeks' },
    ],
  },
  sources: pickSources('sv', SOURCES, common.sourceLabels),
};

export default copy;
