/**
 * Ruotsi (sv) · seasonal. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/seasonal.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'yle2017', 'yle2023', 'yle2026yllas', 'kesko2026', 'yle2026rovaniemi', 'yle2025das',
  'tkVaesto', 'kittila', 'inari', 'sodankyla', 'rakli', 'dvv',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Boende för säsongsarbetare i finska Lappland: Levi, Ylläs',
  metaDescription:
    'Var säsongsarbetare bor i Levi, Ylläs, Saariselkä och Rovaniemi: personalbostad, säsongshyra eller kommunal bostad, och vad du bör fråga innan du skriver under.',
  breadcrumb: 'Säsongsarbetare',
  hero: {
    eyebrow: 'Säsongsarbete, vinter och sommar',
    title: 'Var bor säsongsarbetarna?',
    subtitle:
      'En delad personalbostad, en semesterlägenhet på säsongshyra eller en kommunal hyresbostad. Bostadsbristen i skidorterna är verklig, och så här lever man med den.',
  },
  authorNote:
    'Siffror om bristen från Yle och Keskos nyheter 2017–2026, sökkanaler från kommunernas egna sidor. Vår systersajt laplandwork.com tar hand om själva jobben.',
  intro: [
    'Levi turistområde anställer drygt 2 000 säsongsarbetare för vintersäsongen, uppskattade Kristiina Kukkohovi, verkställande direktör för Levin Matkailu Oy, redan 2017, och hon sade att bostadsbristen höll på att bli ett stort problem i alla skidorter i Lappland (Yle, 25 oktober 2017). Det har inte blivit bättre: våren 2023 rapporterade Yle om arbetare i Levi och Ylläs som bor i semesterlägenheter där de inte kan folkbokföra sig på adressen.',
    'I juni 2026 beslöt ägarna till K-Market Jounin Kauppa i Äkäslompolo att bygga tre radhus åt sin egen personal, eftersom det finns för få bostäder och hyrorna har stigit högt (Yle, 16 juni 2026). Butiken har omkring 20 säsongsarbetare per år, och ungefär hälften av dem behöver en hyresbostad (Kesko, 17 juni 2026).',
    'I Rovaniemi tog rekryteringsföretaget Career.fi omkring 250 arbetare till Lappland och inkvarterade dem på ett tiotal olika ställen; två estniska arbetare bodde två vintrar hos tillväxtchefens familj efter att deras hyresbostad hamnat i rörrenovering. Att hitta boende är ”varje år ett riktigt spektakel” (Yle, 9 mars 2026).',
  ],
  sections: [
    {
      id: 'three-ways',
      kicker: 'Tre sätt att bo under en säsong',
      h2: 'Personalbostad, säsongshyra eller kommunal bostad.',
      cards: [
        {
          title: '1. Personalbostad',
          body:
            'Det vanligaste svaret i skidorterna: arbetsgivaren hyr radhus, stugor och semesterlägenheter åt personalen för hela säsongen och drar hyran från lönen. I Ruka hyrde en restaurangkoncern redan 2017 fyra semesterfastigheter från november till maj åt sin personal (Yle, 25 oktober 2017). Fördelen: ett tak över huvudet väntar när du kommer. Risken: bostaden upphör när jobbet upphör.',
        },
        {
          title: '2. En semesterlägenhet på säsongshyra',
          body:
            'En lägenhet på 80 m² i ett fjällhus i Levi: 750 € i månaden från maj till november, 2 000 € i veckan under högsäsong, 1 650 € i månaden året runt (Yle, 25 maj 2023). Billigt på sommaren, omöjligt på vintern. Du kan inte heller få en officiell adress i en semesterlägenhet (Yle, 25 maj 2023).',
        },
        {
          title: '3. En kommunal hyresbostad',
          body:
            'Kittilän Vuokratalot Oy, Inarin Vuokra-asunnot Oy (över 500 bostäder i Ivalo, Inari och Saariselkä) och Asentopuulaaki i Sodankylä (omkring 720 bostäder). Ansök på sommaren innan säsongen börjar; fråga bolaget hur länge en ansökan gäller.',
        },
      ],
    },
    {
      id: 'places',
      kicker: 'Orter',
      h2: 'Samma brist, olika lösningar.',
      band: true,
      cards: [
        {
          title: 'Levi och Kittilä',
          image: { src: '/images/housing-levi-keskusta-card.webp', alt: 'Trähus i centrala Levi en sommardag' },
          body:
            'Kittiläs folkmängd ökade med 2,0 procent 2025, näst mest av Lapplands kommuner efter Pelkosenniemi (2,4 procent) (Statistikcentralen). Arbetsgivare hyr radhus åt personalen för hela säsongen, och alla andra söker i Levi housing-gruppen på Facebook. Kittilän Vuokratalot Oy listar bostäder både i Kittilä by och i Levi, i Sirkka.',
          href: 'https://kittila.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot',
          linkLabel: 'Kittilän Vuokratalot Oy',
          event: 'kittila',
        },
        {
          title: 'Ylläs: Äkäslompolo och Ylläsjärvi',
          image: { src: '/images/housing-seasonal-card-yllas-tunturi.webp', alt: 'Ylläs sett över sjön i Äkäslompolo en septembermorgon' },
          body:
            'Handlarna bygger åt sig själva: Jounin Kauppas tre radhus ska enligt nuvarande plan vara klara i november–december 2026, med ettor, tvåor avsedda för delat boende och treor för familjer, alla med bastu (Kesko, 17 juni 2026). Byns första modulbyggnad var nästan klar i oktober 2025 (Yle, 16 juni 2026).',
          href: 'https://www.kesko.fi/media/uutiset-ja-tiedotteet/uutiset/2026/lapin-asuntopulaa-ratkomassa-k-market-jounin-kaupan-kauppiaat-rakennuttavat-kolme-rivitaloa-tyontekijoilleen/',
          linkLabel: 'Kesko, 17 juni 2026',
          event: 'yllas',
        },
        {
          title: 'Saariselkä och Ivalo',
          image: { src: '/images/housing-saariselka-hirsitalot.webp', alt: 'Timmerhus i Saariselkä i november' },
          body:
            'Det kommunala bolaget Inarin Vuokra-asunnot Oy har bostäder både i Saariselkä och i Ivalo, och kommunens sida listar privata hyresvärdar och Facebook-gruppen Sodankylä–Inari–Utsjoki. Fråga vid intervjun om arbetsgivaren ordnar boende.',
          href: 'https://www.inari.fi/fi/palvelut/asuminen.html',
          linkLabel: 'inari.fi: Boende',
          event: 'inari',
        },
        {
          title: 'Rovaniemi',
          image: { src: '/images/housing-rovaniemi-lappia-card.webp', alt: 'Lappia-huset i centrala Rovaniemi' },
          body:
            'Studerande, turister och säsongsarbetare konkurrerar om samma ettor samtidigt: sommaren 2026 fick studentbostadsstiftelsen DAS omkring 550 brådskande ansökningar, 15 procent fler än ett år tidigare, och nästan 90 procent av de sökande ville ha en etta (Yle, 27 juli 2026).',
          href: 'https://yle.fi/a/74-20213937',
          linkLabel: 'Yle, 9 mars 2026: bostadsbristen i Rovaniemi',
          event: 'rovaniemi',
        },
        {
          title: 'Ruka och Kuusamo',
          image: { src: '/images/housing-ruka-kyla-card.webp', alt: 'Torget och det röda utsiktstornet i Rukas gågatuby på sommaren' },
          body:
            'Ruka ligger i Norra Österbotten, inte i Lappland, men säsongen och bristen är desamma. År 2017 växte Rukas restaurangkoncern från drygt 20 fasta anställda till över 80 på vintern och hyrde fyra semesterfastigheter åt personalen från november till maj (Yle, 25 oktober 2017).',
          href: 'https://yle.fi/a/3-9895965',
          linkLabel: 'Yle, 25 oktober 2017',
          event: 'ruka',
        },
      ],
    },
    {
      id: 'summer',
      kicker: 'Sommarsäsongen',
      h2: 'Sommaren är inte lugn.',
      paras: [
        'Sommararbete i Lappland är en egen säsong: Rovaniemis turism året runt, vandringsområdena, byggarbetsplatserna och butikernas sommartopp. På sommaren hyrs semesterlägenheter ut per månad (750 € i månaden från maj till november i Levi-exemplet, Yle, 25 maj 2023).',
        'I Rovaniemi hoppas ett rekryteringsföretags tillväxtchef kunna samla säsongsarbetare under ett och samma tak på vintern och byggarbetare och idrottslag där på sommaren (Yle, 9 mars 2026). För den som kommer på sommaren är det goda nyheter: personalbostäder som byggts för vintern står tomma på sommaren.',
      ],
      image: {
        src: '/images/housing-jouninkauppa.webp',
        alt: 'Fasaden på K-Market Jounin Kauppa i Äkäslompolo på sommaren',
        caption:
          'K-Market Jounin Kauppa, Äkäslompolo, juli 2026. Ägarna bygger tre radhus åt sin personal (Kesko, 17 juni 2026). Foto: LaplandVibes.',
        ratio: '4/3',
      },
    },
    {
      id: 'ask',
      kicker: 'Innan du skriver under',
      h2: 'Fråga din arbetsgivare detta.',
      bullets: [
        'Ingår bostaden i anställningsvillkoren eller är det ett separat hyresavtal? Hur mycket dras från lönen, och syns det på lönebeskedet?',
        'Eget rum eller delat? Hur många bor i bostaden, och finns det lås på din dörr?',
        'Vad händer med hyresavtalet om jobbet tar slut före säsongen, eller fortsätter efter den?',
        'Kan du folkbokföra dig på adressen? Flyttanmälan till DVV ska göras inom en vecka efter flytten, och en semesterlägenhet godkänns ofta inte.',
        'Vem betalar el, vatten och internet?',
        'Hur tar du dig till jobbet utan bil: avstånd, buss, skidbuss?',
        'Finns det en deposition, och när betalas den tillbaka? Lagen: från och med den 1 oktober 2026 inom 14 dagar efter att hyresförhållandet upphört (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Ordnar arbetsgivaren boende åt säsongsarbetare i Levi?',
      a: 'Ofta, men inte alltid och inte gratis. Arbetsgivare hyr radhus och semesterlägenheter åt personalen för hela säsongen och drar hyran från lönen. Be om erbjudandet skriftligt och kontrollera vad som händer med bostaden om jobbet tar slut.',
    },
    {
      q: 'När ska jag börja söka boende för vintersäsongen?',
      a: 'På sommaren. Ansök hos de kommunala hyresbolagen (Kittilä, Inari, Sodankylä) före säsongen, och i Levi-exemplet kunde en semesterlägenhet hyras per månad bara från maj till november (Yle, 25 maj 2023).',
    },
    {
      q: 'Kan jag bo i en semesterlägenhet under hela säsongen?',
      a: 'Ja, om ägaren erbjuder säsongshyra, men du kan inte få en officiell adress i en semesterlägenhet (Yle, 25 maj 2023).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'De första nätterna',
    h2: 'Innan nycklarna ligger i din hand.',
    lead:
      'Säsongen börjar ofta innan bostaden är ledig. Vår partnersökning visar lediga rum och lägenheter till dagens priser.',
    chips: [
      { label: 'Levi', destination: 'Levi', sid: 'seasonal_first_nights_levi' },
      { label: 'Ylläs', destination: 'Äkäslompolo', sid: 'seasonal_first_nights_yllas' },
      { label: 'Saariselkä', destination: 'Saariselkä', sid: 'seasonal_first_nights_saariselka' },
      { label: 'Rovaniemi', destination: 'Rovaniemi', sid: 'seasonal_first_nights_rovaniemi' },
    ],
  },
  sources: pickSources('sv', SOURCES, common.sourceLabels),
};

export default copy;
