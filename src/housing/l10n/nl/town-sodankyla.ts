/**
 * Hollanti (nl) · town-sodankyla. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
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
  metaTitle: 'Huren in Sodankylä: 720 gemeentewoningen en wat ze kosten',
  metaDescription:
    'Huren in Sodankylä: ongeveer 720 gemeentewoningen van Asentopuulaaki Oy, huren van € 7,40–18 per m², onlineaanvraag, compensatie voor studielening en Kela.',
  breadcrumb: 'Sodankylä',
  hero: {
    eyebrow: 'Sodankylä, 8.095 inwoners',
    title: 'Huren in Sodankylä.',
    subtitle:
      'Een garnizoen, een mijn en een wetenschappelijke gemeenschap in één gemeente, waar de lange woningnood in het hoofddorp is afgenomen door nieuwbouw. Waar u zich aanmeldt en wat het kost.',
  },
  authorNote:
    'Bevolking van Statistics Finland, het aantal woningen van de pagina van de gemeente, huren, voorwaarden en vrije woningen van de eigen pagina’s van Asentopuulaaki Oy, banen van het Finse leger, Yle en de bedrijven. Gecontroleerd op 15 november 2026.',
  intro: [
    'Sodankylä had eind 2025 8.095 inwoners (Statistics Finland). De gemeente bezit ongeveer 720 huurwoningen, die worden verhuurd door haar dochterbedrijf Asentopuulaaki Oy (sodankyla.fi). Bijna elke woning op de lijst van het bedrijf ligt in het hoofddorp; de rest ligt in Aska, Orajärvi, Riipi, Torvinen en Vaalajärvi.',
    'Volgens de gemeente is de woningnood die Sodankylä jarenlang plaagde afgenomen: in de zomer van 2025 werd Käpyriihi, met 36 nieuwe woningen, opgeleverd bij de rivier Jeesiöjoki (gemeente Sodankylä, 2 juli 2025). De woningzoeker van het bedrijf toont de woningen die op dat moment vrij zijn of binnenkort vrijkomen, met hun huur en de datum waarop ze vrijkomen (Asentopuulaaki).',
    'De woningnood is nog niet helemaal voorbij. In september 2025 zei de technisch directeur van de gemeente tegen Yle dat het nog steeds moeilijk maakt om werknemers naar Sodankylä te halen, hoewel er banen zijn (Yle, 11 september 2025).',
  ],
  sections: [
    {
      id: 'prices',
      kicker: 'Wat huur kost',
      h2: 'Ongeveer € 10 per m² in een oud gebouw, € 18 in een nieuw.',
      table: {
        caption: 'Huren van Asentopuulaaki Oy, €/m²/maand, objectenlijst 15 november 2026',
        head: ['Gebouwen', '€/m²/maand'],
        rows: [
          ['Käpyriihi, opgeleverd in 2025', '18,00'],
          ['Peuranpalas 2013 en Kehtoranta 2015', '12,80–13,00'],
          ['Rijtjeshuizen, galerijflats en appartementengebouwen 1977–1998', '8,80–12,50'],
          ['Appartementenblokken in het centrum, 1968–1970', '10,20'],
          ['Rijtjeshuizen in de buitendorpen', '7,40–10,90'],
        ],
        foot: 'Berekend uit de huur van elke woning op de objectenlijst van Asentopuulaaki Oy, 15 november 2026: 42 gebouwen, 597 woningen. De waarborgsom is een maand huur, water wordt vooraf in rekening gebracht en de huurder betaalt de huishoudelijke elektriciteit. In de elektrisch verwarmde dorpshuizen betaalt de huurder ook de verwarming, die het bedrijf op ongeveer € 100 per maand in de zomer en € 200 in de winter schat.',
      },
      paras: [
        '<strong>Voorbeelden:</strong> een tweekamerwoning van 55 m² in een appartementenblok in het centrum € 632 per maand; een tweekamerwoning van 42 m² in Käpyriihi € 756; een driekamerwoning van 80 m² in een rijtjeshuis in Kaanaanmaa € 800.',
        '<strong>Particuliere huren:</strong> tweekamerwoningen op de vrije markt kostten gemiddeld € 11,73 per m² in het postcodegebied van het centrum van Sodankylä in oktober–december 2025 (Statistics Finland, tabel 13eb). Er is geen nieuwer gemeentelijk cijfer: Sodankylä staat niet in de huidige huurtabel van Statistics Finland.',
      ],
    },
    {
      id: 'channels',
      kicker: 'Bij wie u zich aanmeldt',
      h2: 'Eerst het gemeentelijke bedrijf, daarna de portalen.',
      band: true,
      cards: [
        {
          title: 'Asentopuulaaki Oy',
          body: 'Het gemeentelijke dochterbedrijf dat de ongeveer 720 woningen van de gemeente verhuurt. U meldt zich online aan en voegt een inkomensbewijs toe. Kredietgegevens worden gecontroleerd, en betalingsachterstanden werken tegen u.',
          href: 'https://www.asentopuulaaki.fi/asunnon-hakeminen/',
          linkLabel: 'asentopuulaaki.fi: een woning aanvragen',
          event: 'asentopuulaaki',
        },
        {
          title: 'Vrije woningen',
          body: 'De woningzoeker van het bedrijf toont vrije woningen en woningen die binnenkort vrijkomen met hun huur en de datum waarop ze vrijkomen. De lijst wordt bijgewerkt op de eigen site van het bedrijf, dus controleer die voordat u zich aanmeldt.',
          href: 'https://www.asentopuulaaki.fi/asuntohaku/',
          linkLabel: 'asentopuulaaki.fi: woningzoeker',
          event: 'asentopuulaaki_vapaat',
        },
        {
          title: 'Oikotie en Vuokraovi',
          body: 'Advertenties van particulieren onder de gemeente Sodankylä. De woonpagina van de gemeente noemt geen andere verhuurder dan haar eigen bedrijf, dus particuliere woningen vindt u op de portalen.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/sodankyl%C3%A4',
          linkLabel: 'Oikotie: huurwoningen in Sodankylä',
          event: 'oikotie',
        },
      ],
    },
    {
      id: 'student-loan',
      kicker: 'Voor nieuwkomers',
      h2: 'Tot € 5.800 voor pas afgestudeerden.',
      paras: [
        'Sodankylä, Inari en Utsjoki compenseren de studieleningen van pas afgestudeerden die er komen wonen en minstens 50 procent van een volledige werkweek werken, of als ondernemer. De compensatie bedraagt hoogstens € 5.800, met terugwerkende kracht uitgekeerd over hoogstens drie jaar in perioden van 12 maanden (gemeente Sodankylä).',
        'Ze geldt voor studieleningen voor een beroepskwalificatie in het middelbaar onderwijs of een diploma van een hogeschool of universiteit, en u moet in de voorafgaande twee jaar zijn afgestudeerd. Aanvragen worden voor het eerst in januari 2027 behandeld, en volgens Yle gaat het aanvraagformulier open op 1 december 2026 (Yle, 1 september 2026).',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Huurtoeslag van Kela',
      h2: 'Sodankylä valt onder de “overige gemeenten” van Kela.',
      table: {
        caption: 'Maximale woonkosten 2026, €/maand, Kela-groep “overige gemeenten”',
        head: ['Grootte van het huishouden', 'Maximale woonkosten'],
        rows: [
          ['1 persoon', '394'],
          ['2 personen', '574'],
          ['3 personen', '734'],
          ['4 personen', '875'],
          ['Elke extra persoon', '+129'],
        ],
        foot: 'Kela, algemene huurtoeslag 2026. De toeslag bedraagt hoogstens 70 % van de erkende woonkosten; een toeslag van minder dan € 15 wordt niet uitbetaald.',
      },
    },
    {
      id: 'work',
      kicker: 'Werk',
      h2: 'Het garnizoen groeit; de mijn sluit in 2034.',
      bullets: [
        'De Jaeger Brigade geeft werk aan ongeveer 400 mensen en leidt jaarlijks ongeveer 2.200 dienstplichtigen op (Finse landmacht). Op het garnizoen van Sodankylä wordt een kazerne voor bijna 700 dienstplichtigen gebouwd, die begin 2028 klaar moet zijn (Yle, 2 april 2026).',
        'De Kevitsa-mijn van Boliden kondigde in mei 2026 77 ontslagen aan, en de mijn zal in 2034 sluiten (Yle, 26 mei 2026).',
        'De geplande Sakatti-mijn van Anglo American moet rond 2032 in bedrijf komen, maar het project zit nog in de vergunningsfase, en de afdeling Lapland van de Finse natuurbeschermingsvereniging is bij de rechter in beroep gegaan tegen het Sakatti-besluit (Anglo American; Yle, 18 juni 2026).',
        'De gemeente noemt ook de wetenschappelijke gemeenschap Tähtelä en het fjelldorp Luosto (sodankyla.fi). Luosto ligt 38 km van het hoofddorp (OpenStreetMap).',
      ],
    },
    {
      id: 'everyday',
      kicker: 'Het dagelijks leven',
      h2: 'De poolnacht duurt hier vier dagen.',
      bullets: [
        'In Sodankylä duurt de poolnacht maar vier dagen, vlak voor Kerstmis (Fins Meteorologisch Instituut).',
        'De dichtstbijzijnde luchthaven is Kittilä, 93 km verderop, en het centrum van Rovaniemi ligt 130 km ver (OpenStreetMap).',
        'Voor studenten: REDU heeft een studentenhuis in Sodankylä, en in maart 2026 kondigde de gemeente een studentenhuis aan voor leerlingen van het middelbaar onderwijs en volwassen studenten in grote woningen van Asentopuulaaki (redu.fi; gemeente Sodankylä, 5 maart 2026).',
      ],
    },
    {
      id: 'contract',
      kicker: 'Het contract',
      h2: 'Eén maand opzegtermijn.',
      bullets: [
        'Bij Asentopuulaaki is de opzegtermijn één kalendermaand, en de waarborgsom wordt ongeveer twee weken nadat u bent vertrokken teruggegeven (Asentopuulaaki).',
        'De waarborgsom bedraagt hoogstens drie maanden huur (Wet op de woninghuur, paragraaf 8).',
        'Vanaf 1 oktober 2026 moet de waarborgsom worden teruggegeven, of moet schriftelijk worden uitgelegd waarom ze wordt ingehouden, binnen 14 dagen nadat de huur is geëindigd (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Hoe vraag ik een gemeentelijke woning aan in Sodankylä?',
      a: 'Met de onlineaanvraag van Asentopuulaaki Oy, met een inkomensbewijs als bijlage, zoals een loonstrook. Kredietgegevens worden gecontroleerd bij Suomen Asiakastieto, en betalingsachterstanden werken tegen u (Asentopuulaaki).',
    },
    {
      q: 'Wat kost een huurwoning in Sodankylä?',
      a: 'In de oude appartementenblokken van het gemeentelijke bedrijf ongeveer € 10 per m², in rijtjeshuizen en galerijflats meestal € 10–12,50, en in Käpyriihi, opgeleverd in 2025, € 18, waardoor een tweekamerwoning van 42 m² € 756 per maand kost (Asentopuulaaki, 15 november 2026). Tweekamerwoningen op de vrije markt in het centrum kostten gemiddeld € 11,73 per m² in oktober–december 2025 (Statistics Finland).',
    },
    {
      q: 'Is er woningnood in Sodankylä?',
      a: 'Jarenlang wel. Volgens de gemeente is die afgenomen doordat er nieuwe gebouwen werden opgeleverd (2 juli 2025), en de woningzoeker van het gemeentelijke bedrijf toont vrije woningen en woningen die binnenkort vrijkomen (Asentopuulaaki).',
    },
    {
      q: 'Wie komt in aanmerking voor de compensatie voor studieleningen?',
      a: 'Een pas afgestudeerde die naar Sodankylä, Inari of Utsjoki verhuist en minstens 50 procent van een volledige werkweek werkt, of als ondernemer. De compensatie bedraagt hoogstens € 5.800 over drie jaar, en aanvragen worden voor het eerst in januari 2027 behandeld (gemeente Sodankylä).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'De eerste nachten',
    h2: 'Bezichtigingen in persoon.',
    lead: 'De partnerzoekmachine toont vrije kamers en appartementen in Sodankylä en Luosto tegen de prijzen van vandaag.',
    chips: [
      { label: 'Sodankylä', destination: 'Sodankylä', sid: 'rentals_sodankyla_first_weeks' },
      { label: 'Luosto', destination: 'Luosto', sid: 'rentals_luosto_first_weeks' },
    ],
  },
  sources: pickSources('nl', SOURCES, common.sourceLabels),
};

export default copy;
