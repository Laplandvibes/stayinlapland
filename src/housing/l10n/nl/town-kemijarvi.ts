/**
 * Hollanti (nl) · town-kemijarvi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
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
  metaTitle: 'Huren in Kemijärvi: de 560 woningen van de stad en aanmelden',
  metaDescription:
    'Huren in Kemijärvi: de 560 huurwoningen van de stad, de onlineaanvraag, huurverhogingen in 2026, de rijtjeshuizen van Vuostimo bij Pyhä en huurtoeslag van Kela.',
  breadcrumb: 'Kemijärvi',
  hero: {
    eyebrow: 'Kemijärvi, 6.919 inwoners',
    title: 'Huren in Kemijärvi.',
    subtitle:
      'De noordelijkste stad van Finland, waar de stad 560 huurwoningen bezit en een deel daarvan leegstaat. Waar u zich aanmeldt en wat u moet weten voordat u verhuist.',
  },
  authorNote:
    'Bevolking van Statistics Finland, aantallen woningen en hoe u zich aanmeldt van de pagina’s van de stad Kemijärvi, huurverhogingen en bezettingsdoelen uit de begroting van de stad voor 2026. Gecontroleerd op 15 november 2026.',
  intro: [
    'Kemijärvi had eind 2025 6.919 inwoners, 35 minder dan een jaar eerder (Statistics Finland). De stad noemt zichzelf de noordelijkste stad van Finland en zegt dat de voorzieningen in het centrum op loopafstand liggen (kemijarvi.fi).',
    'De twee vastgoedbedrijven van de stad, Kemijärven Vuokratalot en Kemijärven Töveli, bezitten 560 huurwoningen (kemijarvi.fi). De begroting van de stad beschouwt het als een realistisch doel dat 80–85 procent van die woningen verhuurd is, dus er staan echt woningen leeg.',
    'De huren stijgen: Kemijärven Vuokratalot verhoogde zijn huren op 1 februari 2026 met 4,5 procent en Töveli op 1 juli 2026 met 5 procent. Dezelfde verhogingen staan in het plan voor 2027 en 2028 (begroting 2026).',
  ],
  sections: [
    {
      id: 'channels',
      kicker: 'Bij wie u zich aanmeldt',
      h2: 'Eerst de bedrijven van de stad, daarna de portalen.',
      band: true,
      cards: [
        {
          title: 'De huurwoningen van de stad',
          body: 'De 560 woningen van de stad liggen in het centrum, Särkikangas, Sipovaara, Isokylä, Halosenranta en Vuostimo. Meld u online aan of met een papieren formulier van Sortteeri (Vapaudenkatu 8). Een aanvraag is vier maanden geldig en kan worden verlengd.',
          href: 'https://kemijarvi.fi/asuminen-ja-ymparisto/asuminen/kemijarven-kaupungin-vuokratalot/asunnon-hakeminen/',
          linkLabel: 'kemijarvi.fi: een woning aanvragen',
          event: 'kemijarvi_city',
        },
        {
          title: 'Vuostimo, 14 km van Pyhä',
          body: 'Rijtjeshuizen uit 1987 in Vuostimo, eigendom van de stad, ongeveer 35 kilometer ten noorden van het centrum. Het skigebied Pyhätunturi ligt 14 kilometer verderop, waardoor dit de huurwoningen van de stad zijn die het dichtst bij Pyhä liggen.',
          href: 'https://kemijarvi.fi/asuminen-ja-ymparisto/asuminen/kemijarven-kaupungin-vuokratalot/vuokratalokohteet/vuostimo/',
          linkLabel: 'kemijarvi.fi: Vuostimo',
          event: 'kemijarvi_vuostimo',
        },
        {
          title: 'Oikotie en Vuokraovi',
          body: 'Advertenties van particulieren en makelaars onder de gemeente Kemijärvi. De woonpagina’s van de stad noemen geen particuliere verhuurders, dus hun woningen vindt u op de portalen.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kemij%C3%A4rvi',
          linkLabel: 'Oikotie: huurwoningen in Kemijärvi',
          event: 'oikotie',
        },
      ],
    },
    {
      id: 'prices',
      kicker: 'Wat huur kost',
      h2: 'De bedrijven van de stad publiceren hun huren niet.',
      table: {
        caption: 'Gemiddelde huur €/m²/maand, vrijesectorhuurwoningen, 2026Q3',
        head: ['', 'Lapland (regio)', 'Heel Finland'],
        rows: [
          ['Studio’s', '17,25', '20,49'],
          ['Tweekamerwoningen', '12,87', '15,07'],
          ['Drie kamers en groter', '11,08', '13,98'],
          ['Alle woningen', '13,14', '15,99'],
        ],
        foot: 'Statistics Finland, huren 2026Q3, tabel 15fa. Voor Kemijärvi wordt geen apart cijfer gepubliceerd, en het regionale cijfer omvat het duurdere Rovaniemi.',
      },
      paras: [
        '<strong>Het eigen cijfer van Kemijärvi dateert uit 2022.</strong> In het postcodegebied 98100 in het stadscentrum bedroeg de gemiddelde huur van studio’s op de vrije markt € 12,15 per m² en van tweekamerwoningen € 9,10 per m² in januari–maart 2022. Sindsdien is het cijfer elk kwartaal achtergehouden: Statistics Finland publiceert het cijfer van een postcodegebied niet als er te weinig waarnemingen zijn (tabel 13eb).',
        'De huren van de bedrijven van de stad staan niet online. Vraag de woonconsulent naar de huur voordat u een aanbod aanvaardt, en bedenk dat de huren in 2026 zijn gestegen: 4,5 procent bij Vuokratalot en 5 procent bij Töveli.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Huurtoeslag van Kela',
      h2: 'Kemijärvi valt onder de “overige gemeenten” van Kela.',
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
      kicker: 'Werk en verbindingen',
      h2: 'Regel de baan voordat u verhuist.',
      bullets: [
        'Volgens de stad zijn de grote werkgevers, naast de stad zelf, Keitele Group, Festivo Porkka Group en het klantencontactcentrum van Kela, aangevuld met bedrijven in de detailhandel, dienstverlening en het toerisme (begroting 2026).',
        'Werklozen vormden in 2024 15,6 procent van de beroepsbevolking, tegenover 11,7 procent in heel Finland (Statistics Finland).',
        'Suomutunturi ligt 46 km van het centrum en Pyhätunturi 50 km (OpenStreetMap). Suomu ligt binnen Kemijärvi; Pyhä hoort bij de naburige gemeente Pelkosenniemi.',
        'De luchthaven van Rovaniemi ligt 80 km verderop (OpenStreetMap), en volgens de stad loopt er een directe treinverbinding helemaal naar Helsinki (kemijarvi.fi).',
      ],
    },
    {
      id: 'contract',
      kicker: 'Het contract',
      h2: 'Twee paragrafen van de wet die u moet kennen.',
      bullets: [
        'De waarborgsom bedraagt hoogstens drie maanden huur (Wet op de woninghuur, paragraaf 8).',
        'Vanaf 1 oktober 2026 moet de waarborgsom worden teruggegeven, of moet schriftelijk worden uitgelegd waarom ze wordt ingehouden, binnen 14 dagen nadat de huur is geëindigd (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Hoe vraag ik een woning van de stad aan in Kemijärvi?',
      a: 'Met de onlineaanvraag op de site van de stad, of op een papieren formulier bij Sortteeri (Vapaudenkatu 8). De aanvraag is vier maanden geldig en kan nog eens vier maanden worden verlengd. Kredietgegevens worden gecontroleerd, en de aanvraag wordt pas behandeld als de bijlagen binnen zijn. Huurders worden meestal om de woensdag in een vergadering gekozen (kemijarvi.fi).',
    },
    {
      q: 'Zijn er vrije huurwoningen in Kemijärvi?',
      a: 'Hoogstwaarschijnlijk wel. De begroting van de stad beschouwt het als een realistisch doel dat 80–85 procent van de woningen van de bedrijven verhuurd is (begroting 2026). Vraag de woonconsulent welke woningen vrij zijn.',
    },
    {
      q: 'Wat kost een huurwoning in Kemijärvi?',
      a: 'Er wordt geen actueel gemiddelde gepubliceerd. Het meest recente cijfer voor het postcodegebied in het stadscentrum dateert van begin 2022: studio’s € 12,15 per m² en tweekamerwoningen € 9,10 per m². Het gemiddelde voor Lapland was € 13,14 per m² in juli–september 2026, en dat omvat het duurdere Rovaniemi (Statistics Finland).',
    },
    {
      q: 'Is er studentenhuisvesting in Kemijärvi?',
      a: 'Het onderwijscentrum van Lapland REDU heeft een studentenhuis in Kemijärvi. Wonen is gratis voor studenten die nog leerplichtig zijn, en overgebleven plaatsen worden tegen de vermelde prijs aan andere studenten verhuurd (redu.fi).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'De eerste nachten',
    h2: 'Bezichtigingen ter plaatse.',
    lead: 'De partnerzoekmachine toont vrije kamers en appartementen in Kemijärvi en bij Pyhä tegen de prijzen van vandaag.',
    chips: [
      { label: 'Kemijärvi', destination: 'Kemijärvi', sid: 'rentals_kemijarvi_first_weeks' },
      { label: 'Pyhä', destination: 'Pyhä', sid: 'rentals_pyha_first_weeks' },
    ],
  },
  sources: pickSources('nl', SOURCES, common.sourceLabels),
};

export default copy;
