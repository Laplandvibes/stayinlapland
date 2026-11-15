/**
 * Ruotsi (sv) · moving. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/moving.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'dvv', 'traficom', 'tkSahko', 'tkPolttoaine', 'kuntaliitto', 'perusopetuslaki', 'fmi', 'foreca',
  'lvDrive', 'lapha', 'laplandwork', 'ahvl', 'rakli',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Flytta till finska Lappland: guide för den första månaden',
  metaDescription:
    'Flyttanmälan, vinterdäck, barnomsorgsavgifter, el och polarnatten: vad du bör ordna under din första månad i finska Lappland.',
  breadcrumb: 'Flytta till Lappland',
  hero: {
    eyebrow: 'Flytta till finska Lappland: de första 30 dagarna',
    title: 'Flytta till finska Lappland.',
    subtitle:
      'Flyttanmälan, vinterdäck, barnomsorg, elavtalet och polarnatten: vad du bör ordna under den första månaden, och i vilken ordning.',
  },
  authorNote:
    'Tidsfrister från DVV, Traficom och Finlands Kommunförbund, polarnattens längd från Meteorologiska institutet, avstånd från LaplandVibes körrutter. Kontrollerat den 15 november 2026.',
  intro: [
    'Pappersarbetet vid en flytt till Lappland är detsamma som var som helst i Finland, men tre saker väger tyngre här än i söder: vintern varar halva året, avstånden mäts i hundratals kilometer, och i små kommuner finns tjänsterna på ett och samma ställe. Den här sidan är en checklista i den ordning sakerna behöver göras.',
    'Om du flyttar till Finland från utlandet behandlas uppehållstillstånd, personbeteckning, skattekort och bankkonto på vår systersajt <a href="https://laplandwork.com/sv/moving-to-finland/" target="_blank" rel="noopener">laplandwork.com</a>. Den här sidan börjar när du har fått nycklarna.',
  ],
  sections: [
    {
      id: 'week-one',
      kicker: 'Den första veckan',
      h2: 'Fyra anmälningar, en tidsfrist.',
      bullets: [
        '<strong>Flyttanmälan till DVV</strong>: tidigast en månad före flyttdagen och senast en vecka efter flytten (DVV). Samma anmälan går till Posti. Kommunala tjänster (barnomsorg, skola, hälsocentral) följer din registrerade hemkommun, så gör anmälan genast.',
        '<strong>Elavtal.</strong> Totalpriset på el för ett hushåll som använder 2 500–4 999 kWh om året var i genomsnitt 23,7 cent per kWh i hela Finland i juni 2026, och 14,9 cent i klassen över 15 000 kWh, dit ett eluppvärmt hus hör (Statistikcentralen). Lapplands uppvärmningssäsong är lång, så räkna hellre med en hög förbrukning.',
        '<strong>Hälso- och sjukvården</strong> ordnas av Lapplands välfärdsområde (Lapha). Vård som inte är brådskande sköts av din lokala hälsocentral. Den närmaste hittar du på välfärdsområdets webbplats; registrera dig också i Omakanta.',
        '<strong>Internet.</strong> Fråga bostadsbolaget eller hyresvärden om fiber innan du skriver under. I glest befolkade områden är en mobil router ofta det enda alternativet, och den som arbetar på distans bör testa anslutningen i bostaden först.',
      ],
    },
    {
      id: 'car',
      kicker: 'Bil och vinter',
      h2: 'I Rovaniemi klarar man sig utan bil. På andra håll inte.',
      bullets: [
        '<strong>Vinterdäck:</strong> i Finland ska vinterdäck användas från 1 november till 31 mars om väder eller väglag kräver det. Dubbdäck är tillåtna under samma period och vid andra tider när förhållandena kräver det. Vinterdäckets huvudspår ska vara minst 3,0 mm djupa (Traficom).',
        '<strong>Bränsle:</strong> bensin 95E10 kostade i genomsnitt 2,09 € per liter i hela Finland i juni 2026 och diesel 2,15 € (Statistikcentralen). De långa avstånden gör det till en större post i Lappland än i söder.',
        '<strong>Avstånd</strong> enligt LaplandVibes körrutter: Uleåborg–Kemi 105 km, Kemi–Rovaniemi 118 km, Rovaniemi–Ylläs (Äkäslompolo) 175 km, Sodankylä–Saariselkä 130 km, Levi–Kilpisjärvi 258 km. Lappland är större än det ser ut på kartan.',
        '<strong>Motorvärmare och kupévärmare.</strong> Vid hård kyla värms bilen innan du åker; ett värmeuttag på parkeringen är standardutrustning i Lappland. Se till att en parkeringsplats med uttag skrivs in i hyresavtalet.',
      ],
      image: {
        src: '/images/housing-kittila-airport.webp',
        alt: 'Terminalbyggnaden vid Kittilä flygplats en sommardag',
        caption: 'Kittilä flygplats, juli 2026. Levi och Ylläs trafikeras av Kittilä, Rovaniemi av sin egen flygplats och Saariselkä av Ivalo. Foto: LaplandVibes.',
        ratio: '16/9',
      },
    },
    {
      id: 'children',
      kicker: 'Barn',
      h2: 'Barnomsorgen prissätts efter inkomst, skolan kostar ingenting.',
      bullets: [
        '<strong>Avgifterna för småbarnspedagogik</strong> följer familjens inkomster: från och med 1 augusti 2026 är den högsta avgiften 335 € i månaden per barn och den lägsta som tas ut 32 €. Det andra barnet betalar högst 40 % av det yngsta barnets avgift, alltså högst 134 € (Finlands Kommunförbund).',
        '<strong>Förskola och grundläggande utbildning</strong> är avgiftsfria, läromedel och skolmåltider inberäknade (lagen om grundläggande utbildning, 31 §). Skolskjuts ordnas när skolvägen överstiger fem kilometer (32 §), och i små kommuner hör den till vardagen.',
        'Du ansöker om barnomsorgsplats hos kommunen, och kommunen avgörs av den adress som är registrerad hos DVV. Därför kommer flyttanmälan först, inte sist.',
      ],
    },
    {
      id: 'light',
      kicker: 'Ljus och mörker',
      h2: 'Polarnatten är kortare än du tror. Utom i Utsjoki.',
      paras: [
        'Kaamos, polarnatten, innebär att solen inte går upp över horisonten. Enligt Meteorologiska institutet varar den nästan två månader i Nuorgam i Utsjoki, från 25 november till 17 januari, och bara fyra dagar strax före jul i Sodankylä. Polarnattens gräns går något norr om polcirkeln, så Rovaniemi har ingen egentlig polarnatt (Foreca): på vintern står solen lågt, men den går upp.',
        'På sommaren är det tvärtom. Midnattssolens gräns nås vid polcirkeln i Rovaniemi, och i Nuorgam går solen inte ned från 16 maj till 29 juli (Meteorologiska institutet). Mörkläggningsgardiner är det viktigaste sommarinköpet, en dagsljuslampa det viktigaste vinterinköpet.',
      ],
    },
    {
      id: 'before-signing',
      kicker: 'Innan du skriver under',
      h2: 'Fråga hyresvärden om det här.',
      bullets: [
        'Uppvärmningssätt och vem som betalar det: fjärrvärme ingår oftast i hyran, eluppvärmning hamnar på din egen räkning.',
        'En parkeringsplats med värmeuttag och förvaring för vinterutrustning: skidor, pulka, vinterdäck.',
        'Avstånd till närmaste butik, hälsocentral och skola, och om en buss går dit på vintern.',
        'Deposition och återbetalning av den: högst tre månadshyror (lagen om hyra av bostadslägenhet, 8 §), och från och med 1 oktober 2026 återbetalning inom 14 dagar efter att hyresförhållandet upphört (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'När måste jag göra flyttanmälan?',
      a: 'Tidigast en månad före flyttdagen och senast en vecka efter flytten (DVV). En anmälan gäller både Digitaliserings- och befolkningsdatabyrån och Posti.',
    },
    {
      q: 'När krävs vinterdäck i Lappland?',
      a: 'Lagen anger 1 november till 31 mars om väder eller väglag kräver det, och dubbar är tillåtna under samma period och vid andra tider när förhållandena kräver det (Traficom). Däcken byts alltså efter förhållandena, inte efter kalendern.',
    },
    {
      q: 'Har Rovaniemi polarnatt?',
      a: 'Ingen egentlig: polarnattens gräns går något norr om polcirkeln (Foreca). I Sodankylä är solen nere i fyra dagar före jul och i Nuorgam i nästan två månader (Meteorologiska institutet).',
    },
  ],
  cta: {
    partner: 'cars',
    kicker: 'Bil för de första veckorna',
    h2: 'Visningar, flyttlasset, butiken.',
    lead:
      'Din egen bil kommer ofta senare. En hyrbil från flygplatsen täcker visningarna och de första veckorna; partnersökningen jämför biluthyrningsföretagen på en gång.',
    chips: [
      { label: 'Rovaniemi (RVN)', destination: 'RVN', sid: 'moving_car_rvn' },
      { label: 'Kittilä (KTT)', destination: 'KTT', sid: 'moving_car_ktt' },
      { label: 'Kemi-Torneå (KEM)', destination: 'KEM', sid: 'moving_car_kem' },
      { label: 'Ivalo (IVL)', destination: 'IVL', sid: 'moving_car_ivl' },
    ],
  },
  sources: pickSources('sv', SOURCES, common.sourceLabels),
};

export default copy;
