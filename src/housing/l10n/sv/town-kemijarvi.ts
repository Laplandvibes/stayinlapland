/**
 * Ruotsi (sv) · town-kemijarvi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/kemijarvi.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'tkVaesto', 'kemijarvi', 'kemijarviHaku', 'kemijarviVuostimo', 'kemijarviTalousarvio', 'kemijarviTietoa',
  'kemijarviToihin', 'tkVuokrat', 'tkVuokratPostinumero', 'kela', 'tkAvainluvut', 'osrm', 'redu', 'ahvl', 'rakli',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Hyra bostad i Kemijärvi: stadens 560 lägenheter och ansökan',
  metaDescription:
    'Hyra bostad i Kemijärvi: stadens 560 hyresbostäder, webbansökan, hyreshöjningarna 2026, radhusen i Vuostimo nära Pyhä och bostadsbidrag från Kela.',
  breadcrumb: 'Kemijärvi',
  hero: {
    eyebrow: 'Kemijärvi, 6 919 invånare',
    title: 'Hyra bostad i Kemijärvi.',
    subtitle:
      'Finlands nordligaste stad, där staden äger 560 hyresbostäder och en del av dem står tomma. Var du ansöker och vad du bör veta innan du flyttar.',
  },
  authorNote:
    'Folkmängd från Statistikcentralen, antal bostäder och ansökan från Kemijärvi stads sidor, hyreshöjningar och uthyrningsmål från stadens budget för 2026. Kontrollerat den 15 november 2026.',
  intro: [
    'Kemijärvi hade 6 919 invånare i slutet av 2025, 35 färre än ett år tidigare (Statistikcentralen). Staden kallar sig Finlands nordligaste stad och säger att servicen i centrum ligger inom gångavstånd (kemijarvi.fi).',
    'Stadens två fastighetsbolag, Kemijärven Vuokratalot och Kemijärven Töveli, äger 560 hyresbostäder (kemijarvi.fi). Stadens budget räknar det som ett realistiskt mål att 80–85 procent av bostäderna är uthyrda, så tomma bostäder finns.',
    'Hyrorna stiger: Kemijärven Vuokratalot höjde sina hyror med 4,5 procent den 1 februari 2026 och Töveli med 5 procent den 1 juli 2026. Samma höjningar finns inskrivna i planen för 2027 och 2028 (budgeten 2026).',
  ],
  sections: [
    {
      id: 'channels',
      kicker: 'Vem du ansöker hos',
      h2: 'Först stadens bolag, sedan portalerna.',
      band: true,
      cards: [
        {
          title: 'Stadens hyresbostäder',
          body: 'Stadens 560 bostäder ligger i centrum, Särkikangas, Sipovaara, Isokylä, Halosenranta och Vuostimo. Ansök på nätet eller med pappersblankett från Sortteeri (Vapaudenkatu 8). En ansökan gäller i fyra månader och kan förnyas.',
          href: 'https://kemijarvi.fi/asuminen-ja-ymparisto/asuminen/kemijarven-kaupungin-vuokratalot/asunnon-hakeminen/',
          linkLabel: 'kemijarvi.fi: Ansöka om bostad',
          event: 'kemijarvi_city',
        },
        {
          title: 'Vuostimo, 14 km från Pyhä',
          body: 'Stadsägda radhus från 1987 i Vuostimo, omkring 35 kilometer norr om centrum. Skidorten Pyhätunturi ligger 14 kilometer bort, vilket gör dessa till stadens hyresbostäder närmast Pyhä.',
          href: 'https://kemijarvi.fi/asuminen-ja-ymparisto/asuminen/kemijarven-kaupungin-vuokratalot/vuokratalokohteet/vuostimo/',
          linkLabel: 'kemijarvi.fi: Vuostimo',
          event: 'kemijarvi_vuostimo',
        },
        {
          title: 'Oikotie och Vuokraovi',
          body: 'Privata annonser och förmedlarannonser under kommunen Kemijärvi. Stadens bostadssidor listar inga privata hyresvärdar, så deras bostäder hittar du på portalerna.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kemij%C3%A4rvi',
          linkLabel: 'Oikotie: hyresbostäder i Kemijärvi',
          event: 'oikotie',
        },
      ],
    },
    {
      id: 'prices',
      kicker: 'Vad hyran kostar',
      h2: 'Stadens bolag publicerar inte sina hyror.',
      table: {
        caption: 'Genomsnittlig hyra €/m²/månad, fritt finansierade hyresbostäder, 2026Q3',
        head: ['', 'Lappland (landskapet)', 'Hela landet'],
        rows: [
          ['Ettor', '17,25', '20,49'],
          ['Tvåor', '12,87', '15,07'],
          ['Treor och större', '11,08', '13,98'],
          ['Alla bostäder', '13,14', '15,99'],
        ],
        foot: 'Statistikcentralen, hyror 2026Q3, tabell 15fa. Ingen separat siffra publiceras för Kemijärvi, och landskapssiffran inkluderar det dyrare Rovaniemi.',
      },
      paras: [
        '<strong>Kemijärvis egen siffra är från 2022.</strong> I postnummerområdet 98100 i stadens centrum var genomsnittet för fritt finansierade ettor 12,15 € per m² och för tvåor 9,10 € per m² i januari–mars 2022. Varje kvartal sedan dess har dolts: Statistikcentralen publicerar inte ett postnummerområdes siffra när det finns för få observationer (tabell 13eb).',
        'Stadens bolags hyror finns inte på nätet. Fråga bostadssekreteraren om hyran innan du tar emot ett erbjudande, och kom ihåg att hyrorna steg 2026: 4,5 procent hos Vuokratalot och 5 procent hos Töveli.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Bostadsbidrag från Kela',
      h2: 'Kemijärvi hör till Kelas ”övriga kommuner”.',
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
      kicker: 'Arbete och förbindelser',
      h2: 'Kom överens om jobbet innan du flyttar.',
      bullets: [
        'Enligt staden är de stora arbetsgivarna vid sidan av staden själv Keitele Group, Festivo Porkka Group och Kelas kontaktcenter, tillsammans med handels-, service- och turistföretag (budgeten 2026).',
        'De arbetslösa utgjorde 15,6 procent av arbetskraften 2024, mot 11,7 procent i Finland som helhet (Statistikcentralen).',
        'Suomutunturi ligger 46 km från centrum och Pyhätunturi 50 km (OpenStreetMap). Suomu ligger inom Kemijärvi; Pyhä hör till grannkommunen Pelkosenniemi.',
        'Rovaniemi flygplats ligger 80 km bort (OpenStreetMap), och staden säger att en direkt tågförbindelse går ända till Helsingfors (kemijarvi.fi).',
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
      q: 'Hur ansöker jag om en stadsägd bostad i Kemijärvi?',
      a: 'Med webbansökan på stadens webbplats eller med pappersblankett från Sortteeri (Vapaudenkatu 8). Ansökan gäller i fyra månader och kan förnyas för ytterligare fyra. Kreditupplysning tas, och ansökan behandlas inte förrän bilagorna har kommit in. Möten för val av hyresgäster hålls vanligtvis varannan onsdag (kemijarvi.fi).',
    },
    {
      q: 'Finns det lediga hyresbostäder i Kemijärvi?',
      a: 'Mest sannolikt. Stadens budget räknar det som ett realistiskt mål att 80–85 procent av bolagens bostäder är uthyrda (budgeten 2026). Fråga bostadssekreteraren vilka bostäder som är lediga.',
    },
    {
      q: 'Vad kostar en hyresbostad i Kemijärvi?',
      a: 'Inget aktuellt genomsnitt publiceras. Den senaste siffran för postnummerområdet i stadens centrum är från början av 2022: ettor 12,15 € per m² och tvåor 9,10 € per m². Lapplands genomsnitt var 13,14 € per m² i juli–september 2026, och det inkluderar det dyrare Rovaniemi (Statistikcentralen).',
    },
    {
      q: 'Finns det studentbostäder i Kemijärvi?',
      a: 'Lapplands utbildningscentral REDU har ett studenthem i Kemijärvi. Boendet är gratis för studerande som fortfarande omfattas av läroplikten, och lediga platser hyrs ut till andra studerande till det angivna priset (redu.fi).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'De första nätterna',
    h2: 'Visningar på plats.',
    lead: 'Partnersökningen visar lediga rum och lägenheter i Kemijärvi och i Pyhä till dagens priser.',
    chips: [
      { label: 'Kemijärvi', destination: 'Kemijärvi', sid: 'rentals_kemijarvi_first_weeks' },
      { label: 'Pyhä', destination: 'Pyhä', sid: 'rentals_pyha_first_weeks' },
    ],
  },
  sources: pickSources('sv', SOURCES, common.sourceLabels),
};

export default copy;
