/**
 * Ruotsi (sv) · rentals. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/rentals.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'tkVuokrat', 'kela', 'ahvl', 'rakli', 'kuluttajaliittoVuokra', 'yle2025das', 'yle2023', 'rovaniemi', 'das',
  'kittila', 'kemi', 'keminmaa', 'tornio', 'kemijarvi', 'kemijarviHaku', 'kemijarviVuostimo', 'kemijarviTalousarvio',
  'sodankyla', 'asentopuulaaki', 'asentopuulaakiVapaat', 'inari',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Hyra lägenhet i finska Lappland: Rovaniemi, Levi, Torneå',
  metaDescription:
    'Långtidshyra i finska Lappland, från Rovaniemi och Kemi–Torneå till Levi och Inari: hyra per m² (Statistikcentralen), deposition och bostadsbidrag från Kela.',
  breadcrumb: 'Hyresbostäder',
  hero: {
    eyebrow: 'Hyra bostad i Lappland',
    title: 'Hyra bostad i finska Lappland.',
    subtitle:
      'Var du hittar en hyresbostad, vad den kostar och hur mycket Kela täcker. Stad för stad.',
  },
  authorNote:
    'Hyror per m²: Statistikcentralens hyresstatistik, fritt finansierade hyresbostäder, juli–september 2026. De kommunala hyresbolagen är kontrollerade på kommunernas och bolagens egna webbplatser den 15 november 2026.',
  intro: [
    'I finska Lappland kommer en hyresbostad från en av tre källor: kommunens eget hyresbolag, de nationella portalerna eller lokala grupper. Börja med kommunen. Deras bolag äger hundratals bostäder, till exempel drygt 300 i Keminmaa, omkring 720 i Sodankylä, 560 i Kemijärvi och över 500 i Inari, och du kan ansöka även när ingenting är ledigt just nu.',
    'Priset beror på var du flyttar. I Rovaniemi kostar en etta på 30 m² i genomsnitt cirka 560 € i månaden, på andra håll i Lappland mindre. I fjällbyarna följer hyran säsongen, så för vintern bör du först fråga din arbetsgivare om personalbostad.',
  ],
  sections: [
    {
      id: 'towns',
      kicker: 'Var bostäderna finns',
      h2: 'Stad för stad.',
      lead: 'Varje ort har en egen sida: det kommunala hyresbolaget och hur du ansöker, hyresnivån och Kelas tak. Personalbostäder i Ylläs behandlas på sidan för säsongsarbetare.',
      band: true,
      cards: [
        {
          title: 'Rovaniemi',
          image: { src: '/images/housing-rovaniemi-card-talvikatu.webp', alt: 'Flerbostadshus och människor som går på en snötäckt gata i Rovaniemi i januari' },
          body:
            'Stadens egen sida pekar på hyresvärdarna KAS asunnot, M2-Kodit, Tarveasunnot, Avara och Lumo samt på söktjänsterna Oikotie, Vuokraovi och Qasa. Studerande ansöker hos Domus Arctica-stiftelsen DAS (omkring 1 700 bostäder, 700 av dem ettor); personer under 30 år hos NAL Rovaniemi. En DAS-ansökan gäller i tre månader, och nya studerande har förtur i augusti och september.',
          href: '/rentals/rovaniemi',
          linkLabel: 'Hyresbostäder i Rovaniemi',
        },
        {
          title: 'Kemi, Keminmaa och Torneå',
          image: { src: '/images/housing-kemi-card-kaupungintalo.webp', alt: 'Kemi stadshus en snöig januarimorgon' },
          body:
            'Kemis kommunala bostäder drivs av Kiinteistö Oy Itätuuli, stadens största hyresvärd, med bostäder inom fem kilometer från centrum. Keminmaan Vuokra-asunnot Oy har drygt 300 bostäder, och varje bolag har sin egen webbansökan. I Torneå förvaltas stadens bostäder av Tornion Krunni Oy (Tornion Vuokra-asunnot Oy).',
          href: '/rentals/kemi-tornio',
          linkLabel: 'Hyresbostäder i Kemi, Torneå och Keminmaa',
        },
        {
          title: 'Kemijärvi',
          image: { src: '/images/housing-kemijarvi-card-kerrostalo.webp', alt: 'Ett flerbostadshus och en gammal tall i Kemijärvi en julikväll' },
          body:
            'Stadens två fastighetsbolag äger 560 hyresbostäder, och budgeten siktar på att 80–85 procent av dem ska vara uthyrda, så tomma bostäder finns. En ansökan gäller i fyra månader. Radhusen i Vuostimo ligger 14 km från Pyhätunturi.',
          href: '/rentals/kemijarvi',
          linkLabel: 'Hyresbostäder i Kemijärvi',
        },
        {
          title: 'Sodankylä',
          image: { src: '/images/housing-sodankyla-jaamerentie.webp', alt: 'Jäämerentie, huvudgatan i Sodankylä by, i september' },
          body:
            'Asentopuulaaki Oy hyr ut kommunens omkring 720 bostäder, och bolagets bostadssökning visar de bostäder som är lediga eller blir lediga just nu. Äldre hus hyrs ut för cirka 9–12,50 € per m², och Käpyriihi, som stod klart 2025, för 18 €.',
          href: '/rentals/sodankyla',
          linkLabel: 'Hyresbostäder i Sodankylä',
        },
        {
          title: 'Kittilä och Levi',
          image: { src: '/images/housing-kittila-levi-card-kyla.webp', alt: 'Levi by sedd från toppen av Levifjället i november, med en sjö och fjäll bortom' },
          body:
            'Kittilän Vuokratalot Oy hyr ut kommunens egna hyresbostäder; kontoret ligger på nedre botten i kommunhuset (Valtatie 15). Ansökan görs på nätet på bolagets webbplats. Levis semesterlägenheter går ut på månadshyra främst från maj till november; på vintern hyrs samma lägenhet ut per vecka.',
          href: '/rentals/kittila-levi',
          linkLabel: 'Hyresbostäder i Kittilä och Levi',
        },
        {
          title: 'Inari, Ivalo och Saariselkä',
          image: { src: '/images/housing-ivalo-joki.webp', alt: 'Ivalo sett över Ivalojoki en sommarkväll' },
          body:
            'Inarin Vuokra-asunnot Oy har över 500 bostäder i Ivalo, Inari, Saariselkä, Nellim och Sevettijärvi. Kommunens sida listar också de privata hyresvärdarna (Bilto, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg, Uni Kodit) och hyresgruppen Sodankylä–Inari–Utsjoki på Facebook.',
          href: '/rentals/ivalo-inari',
          linkLabel: 'Hyresbostäder i Ivalo och Inari',
        },
      ],
    },
    {
      id: 'portals',
      kicker: 'Portaler och grupper',
      h2: 'Samma kanaler som i resten av Finland.',
      bullets: [
        '<a href="https://asunnot.oikotie.fi/vuokra-asunnot/rovaniemi" target="_blank" rel="noopener">Oikotie</a>: nationell. Filtrera på kommun, inte bara på by.',
        '<a href="https://www.vuokraovi.com/vuokra-asunnot/rovaniemi" target="_blank" rel="noopener">Vuokraovi</a>: enbart hyresbostäder.',
        '<a href="https://qasa.fi" target="_blank" rel="noopener">Qasa</a>: listas av Rovaniemi stad; avtalet skrivs under elektroniskt på plattformen.',
        '<a href="https://www.tori.fi" target="_blank" rel="noopener">Tori</a>: en annonssajt som också har hyresbostäder. Läs nedan vad du bör kontrollera innan du betalar.',
        'Facebook-grupper: Levi housing search, Kemi–Keminmaa och Sodankylä–Inari–Utsjoki. Den snabbaste kanalen i fjällbyarna, men ingen står för att annonserna stämmer.',
      ],
    },
    {
      id: 'prices',
      kicker: 'Vad hyran kostar',
      h2: 'Per kvadratmeter, inte på känn.',
      lead:
        'Statistikcentralen publicerar hyror varje kvartal. Nedan visas genomsnittshyran för fritt finansierade hyresbostäder i juli–september 2026, euro per kvadratmeter och månad.',
      table: {
        caption: 'Genomsnittlig hyra €/m²/månad, fritt finansierade hyresbostäder, 2026Q3',
        head: ['', 'Rovaniemi', 'Lappland (landskapet)', 'Hela landet'],
        rows: [
          ['Ettor', '18,63', '17,25', '20,49'],
          ['Tvåor', '14,40', '12,87', '15,07'],
          ['Treor och större', '12,29', '11,08', '13,98'],
          ['Alla bostäder', '14,63', '13,14', '15,99'],
          ['Nya hyresavtal, alla bostäder', '15,93', '13,39', '16,72'],
        ],
        foot: 'Statistikcentralen, hyror 2026Q3, tabell 15fa. Nytt hyresavtal = avtal som började under kvartalet; de visar vad som begärs just nu.',
      },
      paras: [
        '<strong>Så räknar du:</strong> multiplicera hyran per m² med golvytan. I Rovaniemi kostar en etta på 30 m² i genomsnitt cirka 560 € i månaden (18,63 × 30) och cirka 600 € vid ett nytt hyresavtal (20,14 × 30, siffran för ettor i nya hyresavtal i Rovaniemi). En tvåa på 50 m²: cirka 720 € i månaden (14,40 × 50). Vatten och el tillkommer oftast.',
        'Lapplands hyror per kvadratmeter ligger under riksgenomsnittet för alla bostadsstorlekar, och skillnaden är minst för tvåor.',
      ],
      note: {
        label: 'Vad statistiken inte ser',
        body:
          'Säsongsuthyrning i skidorterna och möblerad korttidsuthyrning ingår inte i dessa siffror. Nära Levi centrum kostade en lägenhet på 80 m² i ett fjällhus 750 € i månaden från maj till november, 2 000 € i veckan under högsäsong och 1 650 € i månaden året runt (Yle, 25 maj 2023): samma lägenhet till tre priser.',
      },
    },
    {
      id: 'housing-allowance',
      kicker: 'Bostadsbidrag från Kela',
      h2: 'Taket beror på kommunen.',
      lead:
        'Det allmänna bostadsbidraget täcker högst 70 % av de godtagbara boendeutgifterna, och de godtagbara utgifterna har ett tak som beror på kommun och hushållets storlek. Kela delar in kommunerna i tre grupper: Rovaniemi hör till gruppen med de 24 större kommunerna, och alla andra kommuner i Lappland hör till ”övriga kommuner”, som har ett lägre tak.',
      table: {
        caption: 'Högsta boendeutgifter 2026, €/månad',
        head: ['Hushållets storlek', 'Rovaniemi', 'Övriga kommuner i Lappland'],
        rows: [
          ['1 person', '447', '394'],
          ['2 personer', '652', '574'],
          ['3 personer', '828', '734'],
          ['4 personer', '981', '875'],
          ['Varje ytterligare person', '+134', '+129'],
        ],
        foot: 'Kela, allmänt bostadsbidrag 2026. Ett bidrag under 15 € betalas inte ut.',
      },
      paras: [
        'Taket betyder att hyran för ett hushåll med en person i Rovaniemi räknas upp till 447 €, även om hyran är 600 €. Resten betalar du själv. Inkomsterna minskar bidraget genom grundomkostnaden; Kelas räknare visar ditt eget fall.',
      ],
    },
    {
      id: 'contract',
      kicker: 'Hyresavtalet',
      h2: 'Fem saker innan du skriver under.',
      bullets: [
        '<strong>Depositionen är högst tre månadshyror</strong> (lagen om hyra av bostadslägenhet, 8 §). En eller två månader är vanligt.',
        '<strong>Från och med den 1 oktober 2026 ska depositionen betalas tillbaka</strong>, eller så ska det skriftligen förklaras varför den hålls kvar, inom 14 dagar efter att hyresförhållandet upphört eller bostaden lämnats tillbaka (reformen träder i kraft den 1 oktober 2026, Rakli).',
        '<strong>Hyresgästens uppsägningstid är en månad.</strong> För avtal som ingås den 1 oktober 2026 eller senare är hyresvärdens uppsägningstid tre månader, och fyra månader om hyresförhållandet har pågått oavbrutet i minst två år (Rakli). Avtal som ingåtts före den 1 oktober 2026 behåller de gamla uppsägningstiderna (Konsumentförbundet).',
        '<strong>Ett tidsbundet avtal binder båda parter till slutet.</strong> I säsongsarbete är arbetsgivarens bostad ofta knuten till jobbet: läs vad som händer om jobbet tar slut före säsongen.',
        '<strong>Kreditupplysning tas nästan alltid.</strong> En betalningsanmärkning utesluter inte att du kan hyra, men ett kommunalt hyresbolag eller en privat hyresvärd är då troligare än de stora kedjorna.',
      ],
    },
    {
      id: 'before-paying',
      kicker: 'Innan du betalar något',
      h2: 'Tre regler som räddar din deposition.',
      bullets: [
        'Betala aldrig deposition före en visning eller en videovisning där du ser både bostaden och nycklarna i samma bild.',
        'Skriftligt avtal, med hyresvärdens namn och FO-nummer eller personbeteckning på. Ett kommunalt hyresbolag är den tryggaste starten om du inte känner marknaden.',
        'En möblerad korttidsuthyrning är inte ett hyresförhållande: en semesterlägenhet kanske inte får en officiell adress, och den saknade adressen försvårar kontakter med företag, till exempel vid kreditprövning (Yle, 25 maj 2023).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Hur mycket kostar en etta i Rovaniemi?',
      a: 'Enligt Statistikcentralen var genomsnittshyran för en fritt finansierad etta i Rovaniemi 18,63 € per m² i juli–september 2026 och 20,14 € per m² i nya hyresavtal. En etta på 30 m² kostar därmed cirka 560–600 € i månaden före el.',
    },
    {
      q: 'Kan jag hyra i Lappland utan finsk kreditupplysning?',
      a: 'Ja, men med färre alternativ. Kommunala hyresbolag och privata hyresvärdar bedömer från fall till fall, och en större deposition (lagen tillåter upp till tre månadshyror) eller en borgensman hjälper. De stora hyreskedjorna tar alltid kreditupplysning.',
    },
    {
      q: 'När är det bäst att söka bostad i Rovaniemi?',
      a: 'Bäst är alla månader utom augusti och september. Då kan DAS inte ge bostad åt alla sökande, och fritt finansierade ettor är ont om (Yle, 27 juli 2026). Ettor som hyrts ut kortvarigt för vintersäsongen kommer tillbaka på marknaden på våren.',
    },
    {
      q: 'Varför är hyran i Levi flera gånger högre på vintern?',
      a: 'Därför att samma lägenhet hyrs ut per vecka under högsäsongen. I Yles exempel (25 maj 2023) kostade en lägenhet på 80 m² i ett fjällhus 750 € i månaden på sommaren och 2 000 € i veckan på vintern. Månadshyra är möjlig från maj till november; för vintern, fråga din arbetsgivare om personalbostad eller det kommunala bolaget i Kittilä.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'De första veckorna',
    h2: 'Se bostaden på plats.',
    lead:
      'Boka hotell eller apartmenthotell för de första veckorna och se bostäderna själv innan du skriver under. Vår partnersökning visar lediga rum till dagens priser.',
    chips: [
      { label: 'Rovaniemi', destination: 'Rovaniemi', sid: 'rentals_first_weeks_rovaniemi' },
      { label: 'Levi', destination: 'Levi', sid: 'rentals_first_weeks_levi' },
      { label: 'Torneå', destination: 'Tornio', sid: 'rentals_first_weeks_tornio' },
      { label: 'Ivalo', destination: 'Ivalo', sid: 'rentals_first_weeks_ivalo' },
    ],
  },
  sources: pickSources('sv', SOURCES, common.sourceLabels),
};

export default copy;
