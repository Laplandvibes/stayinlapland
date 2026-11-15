/**
 * Ruotsi (sv) · town-sodankyla. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/sodankyla.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'tkVaesto', 'sodankyla', 'asentopuulaaki', 'asentopuulaakiHaku', 'asentopuulaakiVapaat', 'asentopuulaakiMuutto',
  'sodankyla2025', 'yle2025sodankyla', 'tkVuokratPostinumero', 'sodankylaOpintolaina', 'yle2026opintolaina', 'kela',
  'maavoimat', 'yle2026kasarmi', 'yle2026kevitsa', 'angloSakatti', 'yle2026sakatti', 'sodankylaMuuttajalle', 'fmi',
  'osrm', 'redu', 'sodankylaAsuntola', 'ahvl', 'rakli',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Hyra bostad i Sodankylä: 720 kommunala lägenheter och priser',
  metaDescription:
    'Hyra bostad i Sodankylä: Asentopuulaaki Oy:s omkring 720 kommunala bostäder, hyror på cirka 7,40–18 € per m², webbansökan, studielånspiloten och stöd från Kela.',
  breadcrumb: 'Sodankylä',
  hero: {
    eyebrow: 'Sodankylä, 8 095 invånare',
    title: 'Hyra bostad i Sodankylä.',
    subtitle:
      'En garnison, en gruva och ett forskarsamhälle i en och samma kommun, där centralortens långa bostadsbrist har lättat i takt med att nya hus byggts. Var du ansöker och vad det kostar.',
  },
  authorNote:
    'Folkmängd från Statistikcentralen, antalet bostäder från kommunens sida, hyror, villkor och lediga bostäder från Asentopuulaaki Oy:s egna sidor, jobb från Armén, Yle och företagen. Kontrollerat den 15 november 2026.',
  intro: [
    'Sodankylä hade 8 095 invånare i slutet av 2025 (Statistikcentralen). Kommunen äger omkring 720 hyresbostäder, som hyrs ut av dotterbolaget Asentopuulaaki Oy (sodankyla.fi). Nästan varje bostad på bolagets lista ligger i centralorten; resten finns i Aska, Orajärvi, Riipi, Torvinen och Vaalajärvi.',
    'Enligt kommunen har den bostadsbrist som i åratal plågat Sodankylä lättat: sommaren 2025 blev Käpyriihi med 36 nya bostäder klart vid Jeesiöjoki (Sodankylä kommun, 2 juli 2025). Bolagets bostadssökning listar de bostäder som är lediga eller snart blir lediga, med hyra och det datum då de blir lediga (Asentopuulaaki).',
    'Bristen är inte helt över. I september 2025 sade kommunens tekniska direktör till Yle att den fortfarande gör det svårt att få arbetare till Sodankylä, trots att det finns jobb (Yle, 11 september 2025).',
  ],
  sections: [
    {
      id: 'prices',
      kicker: 'Vad hyran kostar',
      h2: 'Cirka 10 € per m² i ett äldre hus, 18 € i ett nytt.',
      table: {
        caption: 'Asentopuulaaki Oy:s hyror, €/m²/månad, fastighetslistan 15 nov 2026',
        head: ['Byggnader', '€/m²/månad'],
        rows: [
          ['Käpyriihi, färdigt 2025', '18,00'],
          ['Peuranpalas 2013 och Kehtoranta 2015', '12,80–13,00'],
          ['Radhus, loftgångshus och flerbostadshus 1977–1998', '8,80–12,50'],
          ['Flerbostadshus i centrum, 1968–1970', '10,20'],
          ['Radhus i de yttre byarna', '7,40–10,90'],
        ],
        foot: 'Uträknat från hyran för varje bostad på Asentopuulaaki Oy:s fastighetslista, 15 nov 2026: 42 byggnader, 597 bostäder. Depositionen är en månadshyra, vatten debiteras i förskott och hyresgästen betalar hushållselen. I de eluppvärmda byhusen betalar hyresgästen också uppvärmningen, som bolaget uppskattar till cirka 100 € i månaden på sommaren och 200 € på vintern.',
      },
      paras: [
        '<strong>Exempel:</strong> en tvåa på 55 m² i ett flerbostadshus i centrum 632 € i månaden; en tvåa på 42 m² i Käpyriihi 756 €; ett radhus med tre rum på 80 m² i Kaanaanmaa 800 €.',
        '<strong>Privata hyror:</strong> fritt finansierade tvåor kostade i genomsnitt 11,73 € per m² i postnummerområdet Sodankylä centrum i oktober–december 2025 (Statistikcentralen, tabell 13eb). Det finns ingen nyare kommunsiffra: Sodankylä ingår inte i Statistikcentralens aktuella hyrestabell.',
      ],
    },
    {
      id: 'channels',
      kicker: 'Vem du ansöker hos',
      h2: 'Först det kommunala bolaget, sedan portalerna.',
      band: true,
      cards: [
        {
          title: 'Asentopuulaaki Oy',
          body: 'Det kommunala dotterbolaget som hyr ut kommunens omkring 720 bostäder. Du ansöker på nätet och bifogar inkomstbevis. Kreditupplysning tas, och betalningsanmärkningar talar emot dig.',
          href: 'https://www.asentopuulaaki.fi/asunnon-hakeminen/',
          linkLabel: 'asentopuulaaki.fi: Ansöka om bostad',
          event: 'asentopuulaaki',
        },
        {
          title: 'Lediga bostäder',
          body: 'Bolagets bostadssökning visar lediga och snart lediga bostäder med hyra och det datum de blir lediga. Listan uppdateras på bolagets egen webbplats, så kontrollera den innan du ansöker.',
          href: 'https://www.asentopuulaaki.fi/asuntohaku/',
          linkLabel: 'asentopuulaaki.fi: Bostadssökning',
          event: 'asentopuulaaki_vapaat',
        },
        {
          title: 'Oikotie och Vuokraovi',
          body: 'Privata annonser under kommunen Sodankylä. Kommunens bostadssida nämner ingen annan hyresvärd än det egna bolaget, så privata bostäder hittar du på portalerna.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/sodankyl%C3%A4',
          linkLabel: 'Oikotie: hyresbostäder i Sodankylä',
          event: 'oikotie',
        },
      ],
    },
    {
      id: 'student-loan',
      kicker: 'För nyinflyttade',
      h2: 'Upp till 5 800 € för nyutexaminerade.',
      paras: [
        'Sodankylä, Inari och Utsjoki kompenserar studielånen för nyutexaminerade som flyttar dit och arbetar minst 50 procent av heltid eller som företagare. Kompensationen är högst 5 800 € och betalas retroaktivt under högst tre år i perioder om 12 månader (Sodankylä kommun).',
        'Den gäller studielån för en yrkesinriktad examen på andra stadiet eller en yrkeshögskole- eller universitetsexamen, och du måste ha tagit examen under de senaste två åren. Ansökningarna behandlas första gången i januari 2027, och enligt Yle öppnas ansökningsblanketten den 1 december 2026 (Yle, 1 september 2026).',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Bostadsbidrag från Kela',
      h2: 'Sodankylä hör till Kelas ”övriga kommuner”.',
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
      id: 'work',
      kicker: 'Arbete',
      h2: 'Garnisonen växer; gruvan stänger 2034.',
      bullets: [
        'Jägarbrigaden sysselsätter omkring 400 personer och utbildar omkring 2 200 värnpliktiga per år (Armén). En kasern för nästan 700 värnpliktiga byggs vid Sodankylä garnison och ska vara klar i början av 2028 (Yle, 2 april 2026).',
        'Bolidens Kevitsa-gruva meddelade 77 uppsägningar i maj 2026, och gruvan ska stänga 2034 (Yle, 26 maj 2026).',
        'Anglo Americans planerade Sakatti-gruva ska enligt planerna tas i drift omkring 2032, men projektet är fortfarande i tillståndsskedet, och Finlands naturskyddsförbunds Lapplandsdistrikt har överklagat Sakatti-beslutet i domstol (Anglo American; Yle, 18 juni 2026).',
        'Kommunen nämner också forskarsamhället Tähtelä och fjällorten Luosto (sodankyla.fi). Luosto ligger 38 km från centralorten (OpenStreetMap).',
      ],
    },
    {
      id: 'everyday',
      kicker: 'Vardagen',
      h2: 'Polarnatten varar här fyra dagar.',
      bullets: [
        'I Sodankylä varar polarnatten bara fyra dagar, strax före jul (Meteorologiska institutet).',
        'Närmaste flygplats är Kittilä, 93 km bort, och Rovaniemi centrum ligger 130 km bort (OpenStreetMap).',
        'För studerande: REDU har ett studenthem i Sodankylä, och i mars 2026 meddelade kommunen ett studenthem för studerande på andra stadiet och vuxenstuderande i stora Asentopuulaaki-bostäder (redu.fi; Sodankylä kommun, 5 mars 2026).',
      ],
    },
    {
      id: 'contract',
      kicker: 'Hyresavtalet',
      h2: 'En månads uppsägningstid.',
      bullets: [
        'Hos Asentopuulaaki är uppsägningstiden en kalendermånad, och depositionen betalas tillbaka omkring två veckor efter att du flyttat ut (Asentopuulaaki).',
        'Depositionen är högst tre månadshyror (lagen om hyra av bostadslägenhet, 8 §).',
        'Från och med 1 oktober 2026 ska depositionen betalas tillbaka, eller så ska det skriftligen förklaras varför den hålls kvar, inom 14 dagar efter att hyresförhållandet upphört (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Hur ansöker jag om en kommunal bostad i Sodankylä?',
      a: 'Med Asentopuulaaki Oy:s webbansökan, med inkomstbevis bifogat, till exempel ett lönebesked. Kreditupplysning tas hos Suomen Asiakastieto, och betalningsanmärkningar talar emot dig (Asentopuulaaki).',
    },
    {
      q: 'Vad kostar en hyresbostad i Sodankylä?',
      a: 'I det kommunala bolagets äldre flerbostadshus cirka 10 € per m², i radhus och loftgångshus oftast 10–12,50 €, och i Käpyriihi, som stod klart 2025, 18 €, vilket gör en tvåa på 42 m² till 756 € i månaden (Asentopuulaaki, 15 nov 2026). Fritt finansierade tvåor i centrum kostade i genomsnitt 11,73 € per m² i oktober–december 2025 (Statistikcentralen).',
    },
    {
      q: 'Finns det bostadsbrist i Sodankylä?',
      a: 'Ja, i åratal. Enligt kommunen har den lättat i takt med att nya byggnader blivit klara (2 juli 2025), och det kommunala bolagets bostadssökning listar lediga och snart lediga bostäder (Asentopuulaaki).',
    },
    {
      q: 'Vem kan få kompensation för studielån?',
      a: 'En nyutexaminerad som flyttar till Sodankylä, Inari eller Utsjoki och arbetar minst 50 procent av heltid eller som företagare. Kompensationen är högst 5 800 € under tre år, och ansökningarna behandlas första gången i januari 2027 (Sodankylä kommun).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'De första nätterna',
    h2: 'Visningar på plats.',
    lead: 'Partnersökningen visar lediga rum och lägenheter i Sodankylä och i Luosto till dagens priser.',
    chips: [
      { label: 'Sodankylä', destination: 'Sodankylä', sid: 'rentals_sodankyla_first_weeks' },
      { label: 'Luosto', destination: 'Luosto', sid: 'rentals_luosto_first_weeks' },
    ],
  },
  sources: pickSources('sv', SOURCES, common.sourceLabels),
};

export default copy;
