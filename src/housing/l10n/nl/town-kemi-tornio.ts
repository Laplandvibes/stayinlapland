/**
 * Hollanti (nl) · town-kemi-tornio. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/kemi-tornio.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'kemi', 'itatuuli', 'keminmaa', 'keminmaaVuokra', 'tornio', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Huren in Kemi, Tornio en Keminmaa: gemeentelijke woningen',
  metaDescription:
    'Huren in Kemi, Tornio en Keminmaa aan de kust van Lapland: gemeentelijke woningbedrijven als Itätuuli en Tornion Krunni, makelaars en steun van Kela.',
  breadcrumb: 'Kemi en Tornio',
  hero: {
    eyebrow: 'De kust van Zee-Lapland',
    title: 'Huren in Kemi, Tornio en Keminmaa.',
    subtitle:
      'De kuststeden die bij elkaar liggen, waar de gemeentelijke woningbedrijven honderden woningen hebben en aanvragen online worden ingediend. Waar u begint en wat huur kost.',
  },
  authorNote:
    'Aantallen woningen van de woningbedrijven van de eigen pagina’s van de gemeenten Kemi, Tornio en Keminmaa, aanvraagvoorwaarden van de eigen pagina’s van de bedrijven, huren per m² van Statistics Finland (regio Lapland 2026Q3). Gecontroleerd op 15 november 2026.',
  intro: [
    'Kemi heeft 19.339 inwoners, Tornio 20.823 en Keminmaa 7.576 (Statistics Finland, 31 december 2025). De drie gemeenten grenzen aan elkaar, dus de woning kan in een andere gemeente liggen dan het werk.',
    'De gemeentelijke woningbedrijven zijn het eerste adres: de gemeentelijke woningen van Kemi worden beheerd door Kiinteistö Oy Itätuuli (kemi.fi), de grootste verhuurder van huurwoningen in de stad, met woningen binnen vijf kilometer van het centrum (itatuuli.fi). Keminmaan Vuokra-asunnot Oy heeft 18 objecten met ruim 300 woningen (keminmaa.fi). Elk bedrijf heeft een eigen onlineaanvraag. In Tornio worden de woningen van de stad beheerd door Tornion Krunni Oy, waartoe Tornion Vuokra-asunnot Oy behoort (tornio.fi).',
    'De huidige huurtabel van Statistics Finland heeft geen aparte rij voor Kemi of Tornio, dus hieronder staat het regionale cijfer voor Lapland. De cijfers van Rovaniemi staan op de eigen pagina.',
  ],
  sections: [
    {
      id: 'prices',
      kicker: 'Wat huur kost',
      h2: 'Regionale huren in Lapland per m², juli–september 2026.',
      table: {
        caption: 'Gemiddelde huur €/m²/maand, vrije-sectorhuurwoningen, 2026Q3',
        head: ['', 'Lapland (regio)', 'Rovaniemi', 'Heel Finland'],
        rows: [
          ['Studio’s', '17,25', '18,63', '20,49'],
          ['Tweekamerwoningen', '12,87', '14,40', '15,07'],
          ['Drie kamers en groter', '11,08', '12,29', '13,98'],
          ['Alle woningen', '13,14', '14,63', '15,99'],
        ],
        foot: 'Statistics Finland, huren 2026Q3, tabel 15fa. Het regionale cijfer omvat Rovaniemi, dus het niveau van Kemi–Tornio ligt waarschijnlijk lager; de huidige tabel toont het niet apart.',
      },
      paras: [
        '<strong>Voorbeelden bij het regionale gemiddelde:</strong> een studio van 30 m² ongeveer € 520 per maand (17,25 × 30); een tweekamerwoning van 50 m² ongeveer € 640 (12,87 × 50); een driekamerwoning van 75 m² ongeveer € 830 (11,08 × 75).',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Huurtoeslag van Kela',
      h2: 'Kemi, Tornio en Keminmaa vallen onder de “overige gemeenten” van Kela.',
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
      id: 'channels',
      kicker: 'Bij wie u zich aanmeldt',
      h2: 'Eerst het gemeentelijke bedrijf, daarna de makelaars.',
      band: true,
      cards: [
        {
          title: 'Kemi: Kiinteistö Oy Itätuuli',
          body: 'De huurwoningen van de stad. Itätuuli is de grootste verhuurder van huurwoningen in Kemi, en de woningen liggen binnen vijf kilometer van het centrum. De eigen onlineaanvraag is vier maanden geldig, en er wordt geen waarborgsom gevraagd. De zakelijke infopagina van Visit Kemi noemt ook de particuliere makelaars: Forenom, Habita Kemi, HVC Group, Kiinteistömaailma, KVP Group, OP Koti Kemi, Pihlajaniemi & Co, Solecco en AJK Asunnot.',
          href: 'https://www.kemi.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
          linkLabel: 'kemi.fi: huurwoningen',
          event: 'kemi_city',
        },
        {
          title: 'Woningbedrijf Keminmaan Vuokra-asunnot Oy',
          body: 'Het woningbedrijf van de gemeente: 18 objecten met ruim 300 woningen, en water en verwarming zijn bij de huur inbegrepen. De eigen onlineaanvraag is drie maanden geldig, en de waarborgsom is een maand huur.',
          href: 'https://www.keminmaanvuokra-asunnot.fi/asunnonhaku.html',
          linkLabel: 'Keminmaan Vuokra-asunnot: hoe u zich aanmeldt',
          event: 'keminmaa',
        },
        {
          title: 'Tornio: woningbedrijf Tornion Krunni Oy',
          body: 'Beheert Tornion Vuokra-asunnot Oy, Tornion Oppilasasuntola Oy en Tornion Palveluasunnot Oy; de afdeling voorzieningen van de stad behandelt ook woningen die de stad rechtstreeks bezit. Vragen over wonen telefonisch, en de pagina van de stad verwijst ook naar particuliere verhuurders en makelaars.',
          href: 'https://www.tornio.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
          linkLabel: 'tornio.fi: huurwoningen',
          event: 'tornio_city',
        },
        {
          title: 'Oikotie en Vuokraovi',
          body: 'Advertenties van particulieren en makelaars. Zoek Kemi, Tornio en Keminmaa als afzonderlijke gemeenten: het zijn drie afzonderlijke zoekopdrachten per gemeente.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kemi',
          linkLabel: 'Oikotie: huurwoningen in Kemi',
          event: 'oikotie',
        },
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
      q: 'Hoe vraag ik een gemeentelijke woning aan in Kemi?',
      a: 'Met de eigen onlineaanvraag van Kiinteistö Oy Itätuuli, die vier maanden geldig is. Itätuuli is de grootste verhuurder van huurwoningen in Kemi met woningen binnen vijf kilometer van het centrum, en verhuurt ze allemaal zonder waarborgsom (itatuuli.fi). Keminmaan Vuokra-asunnot Oy heeft een eigen aanvraag.',
    },
    {
      q: 'Wat kost huur in Kemi en Tornio?',
      a: 'De huidige tabel van Statistics Finland heeft geen aparte rij voor de steden. Het regionale gemiddelde van Lapland was € 13,14 per m² in juli–september 2026 (studio’s 17,25, tweekamerwoningen 12,87), en dat cijfer omvat het duurdere Rovaniemi.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'De eerste weken',
    h2: 'Bezichtigingen in persoon.',
    lead: 'Boek een verblijf voor de bezichtigingen en bekijk de woning voordat u tekent.',
    chips: [
      { label: 'Kemi', destination: 'Kemi', sid: 'rentals_kemi_first_weeks' },
      { label: 'Tornio', destination: 'Tornio', sid: 'rentals_tornio_first_weeks' },
    ],
  },
  sources: pickSources('nl', SOURCES, common.sourceLabels),
};

export default copy;
