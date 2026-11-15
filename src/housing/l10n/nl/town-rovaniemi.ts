/**
 * Hollanti (nl) · town-rovaniemi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/rovaniemi.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'rovaniemi', 'das', 'yle2025das', 'yle2026rovaniemi', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Huren in Rovaniemi: huurprijzen, verhuurders en aanmelden',
  metaDescription:
    'Een woning huren in Rovaniemi: huur per m² (Statistics Finland 2026), verhuurders, DAS voor studenten, huurtoeslag van Kela en wanneer u zich aanmeldt.',
  breadcrumb: 'Rovaniemi',
  hero: {
    eyebrow: 'Rovaniemi, 66.191 inwoners',
    title: 'Huren in Rovaniemi.',
    subtitle:
      'De grootste stad van Lapland, 66.191 inwoners. Wat huur kost, bij wie u zich aanmeldt en wanneer.',
  },
  authorNote:
    'Huren per m² van Statistics Finland (juli–september 2026), verhuurders van de eigen woonpagina van de stad Rovaniemi, cijfers over het tekort van Yle. Gecontroleerd op 15 november 2026.',
  intro: [
    'Rovaniemi heeft 66.191 inwoners (Statistics Finland, 31 december 2025) en felle concurrentie om studio’s: de studentenhuisvestingsstichting DAS ontving in de zomer van 2026 ongeveer 550 spoedaanvragen, 15 procent meer dan een jaar eerder, bijna 90 procent van de aanvragers wilde een studio, en de studio’s van de stad worden voor het winterseizoen kortdurend aan toeristen verhuurd (Yle, 27 juli 2026). Volgens de directeur van DAS kan de stichting in augustus en september niet elke aanvrager een woning aanbieden.',
    'Een wervingsbureau dat ongeveer 250 werknemers naar Lapland bracht, huisvestte hen op een tiental verschillende plekken in Rovaniemi (Yle, 9 maart 2026). Seizoenswerkers, studenten en toeristen zijn allemaal op zoek naar dezelfde kleine woningen.',
    'Het goede nieuws is de prijs: de gemiddelde huur in Rovaniemi van € 14,63 per m² ligt onder het landelijke gemiddelde van € 15,99 (Statistics Finland 2026Q3). Hieronder staan de cijfers per woninggrootte en de kanalen waarlangs u zich aanmeldt.',
  ],
  sections: [
    {
      id: 'prices',
      kicker: 'Wat huur kost',
      h2: 'Huren in Rovaniemi per m², juli–september 2026.',
      table: {
        caption: 'Gemiddelde huur €/m²/maand, vrijesectorhuurwoningen, Rovaniemi 2026Q3',
        head: ['', 'Alle huren', 'Nieuwe huren', 'Heel Finland'],
        rows: [
          ['Studio’s', '18,63', '20,14', '20,49'],
          ['Tweekamerwoningen', '14,40', '16,40', '15,07'],
          ['Drie kamers en groter', '12,29', '13,66', '13,98'],
          ['Alle woningen', '14,63', '15,93', '15,99'],
        ],
        foot: 'Statistics Finland, huren 2026Q3, tabel 15fa. Nieuwe huurcontracten = contracten die in het kwartaal zijn begonnen, dus wat er nu voor vrije woningen wordt gevraagd.',
      },
      paras: [
        '<strong>Voorbeelden:</strong> een studio van 30 m² ongeveer € 560 per maand (18,63 × 30), bij een nieuw huurcontract ongeveer € 600 (20,14 × 30); een tweekamerwoning van 50 m² ongeveer € 720 (14,40 × 50); een driekamerwoning van 75 m² ongeveer € 920 (12,29 × 75). Water en elektriciteit komen meestal erbovenop.',
        'De prijs van een studio met een nieuw huurcontract, € 20,14 per m², ligt € 1,51 (8 %) boven het gemiddelde van alle studio’s in Rovaniemi, € 18,63: een studio die nu vrijkomt, kost meer dan een die al verhuurd is. Vergeleken met het landelijke gemiddelde is Rovaniemi bij elke woninggrootte goedkoper.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Huurtoeslag van Kela',
      h2: 'Rovaniemi heeft een hoger plafond.',
      lead:
        'De algemene huurtoeslag bedraagt hoogstens 70 % van de erkende woonkosten. In Rovaniemi ligt het plafond voor erkende kosten hoger dan in de andere gemeenten in Lapland, omdat de stad tot de groep van 24 grotere gemeenten van Kela behoort (Kela 2026).',
      table: {
        caption: 'Maximale woonkosten 2026, €/maand, groep van 24 grotere gemeenten van Kela',
        head: ['Grootte van het huishouden', 'Maximale woonkosten'],
        rows: [
          ['1 persoon', '447'],
          ['2 personen', '652'],
          ['3 personen', '828'],
          ['4 personen', '981'],
          ['Elke extra persoon', '+134'],
        ],
        foot: 'Kela, algemene huurtoeslag 2026. Een toeslag van minder dan € 15 wordt niet uitbetaald. Het inkomen verlaagt de toeslag via het basisbedrag dat u zelf draagt.',
      },
    },
    {
      id: 'channels',
      kicker: 'Bij wie u zich aanmeldt',
      h2: 'De lijst van de stad, de studentenstichting en de portalen.',
      lead: 'De woonpagina van de stad Rovaniemi noemt de verhuurders en zoekdiensten; er wordt geen eigen gemeentelijk woningbedrijf genoemd.',
      band: true,
      cards: [
        {
          title: 'Stad Rovaniemi: verhuurders',
          body: 'De pagina van de stad verwijst naar de zakelijke verhuurders KAS asunnot, M2-Kodit, Tarveasunnot, Avara en Lumo en naar de zoekdiensten Oikotie, Vuokraovi en Qasa. Elke verhuurder heeft een eigen onlineaanvraag; meld u bij meerdere tegelijk aan.',
          href: 'https://www.rovaniemi.fi/Asuminen-ja-ymparisto/Asuminen',
          linkLabel: 'rovaniemi.fi: wonen',
          event: 'rovaniemi_city',
        },
        {
          title: 'DAS: voor studenten',
          body: 'De stichting Domus Arctica heeft ongeveer 1.700 woningen, waarvan 700 studio’s en 460 tweekamerwoningen, tegen een gemiddelde huur van € 12,50 per m² (Yle, 27 juli 2026). Aanvragen kunnen doorlopend worden ingediend, zijn drie maanden geldig, en nieuwe studenten hebben in augustus en september voorrang. U kunt zich aanmelden als u in Rovaniemi studeert aan een instelling voor vervolgonderwijs.',
          href: 'https://www.das.fi/en/apply/applying-info',
          linkLabel: 'das.fi: informatie over aanmelden',
          event: 'das',
        },
        {
          title: 'KAS asunnot',
          body: 'Huurwoningen in meerdere wijken van Rovaniemi (lijst van de stad). Onlineaanvraag.',
          href: 'https://kas.fi/rovaniemen-vuokrattavat-kas-kodit/',
          linkLabel: 'kas.fi: Rovaniemi',
          event: 'kas',
        },
        {
          title: 'Lumo',
          body: 'Een zakelijke verhuurder met gebouwen in Rovaniemi. Standaardcontract, onlineaanvraag, snel intrekken.',
          href: 'https://lumo.fi/en/rental-apartments',
          linkLabel: 'lumo.fi: huurwoningen',
          event: 'lumo',
        },
        {
          title: 'Oikotie en Vuokraovi',
          body: 'De landelijke portalen bevatten de meeste advertenties van particulieren en makelaars. Filter op de gemeente Rovaniemi, niet op wijk, zodat ook Ounasvaara, Saarenkylä en woningen buiten het centrum verschijnen.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/rovaniemi',
          linkLabel: 'Oikotie: huurwoningen in Rovaniemi',
          event: 'oikotie',
        },
        {
          title: 'NAL Rovaniemi: onder de 30',
          body: 'De afdeling Rovaniemi van de Finse vereniging voor jongerenhuisvesting biedt jongerenwoningen voor mensen onder de 30 (lijst van de stad). Een optie als DAS niet mogelijk is en u geen student bent.',
          href: 'https://www.rovaniemi.fi/Asuminen-ja-ymparisto/Asuminen',
          linkLabel: 'rovaniemi.fi: jongerenwoningen',
          event: 'nal',
        },
      ],
    },
    {
      id: 'when',
      kicker: 'Wanneer u zich aanmeldt',
      h2: 'Twee drukke periodes per jaar.',
      bullets: [
        '<strong>Augustus–september</strong> is het krapst: DAS kan niet alle aanvragers huisvesten, en studio’s op de vrije markt zijn schaars (Yle, 27 juli 2026).',
        '<strong>November–december:</strong> sommige studio’s worden voor het winterseizoen kortdurend aan toeristen verhuurd. Contracten voor bepaalde tijd eindigen vaak eind oktober (Yle, 27 juli 2026).',
        '<strong>In het voorjaar</strong> komen de studio’s die voor het winterseizoen waren verhuurd weer op de markt.',
        '<strong>De waarborgsom</strong> bedraagt hoogstens drie maanden huur (Wet op de woninghuur, paragraaf 8), en vanaf 1 oktober 2026 moet ze binnen 14 dagen na het einde van de huur worden teruggegeven (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Hoeveel kost een studio in Rovaniemi?',
      a: 'Volgens Statistics Finland € 18,63 per m² voor alle huurcontracten en € 20,14 per m² voor nieuwe (2026Q3). Een studio van 30 m² kost dus ongeveer € 560–600 per maand, exclusief elektriciteit.',
    },
    {
      q: 'Is het moeilijk om in Rovaniemi een huurwoning te vinden?',
      a: 'Studio’s zijn in augustus–september moeilijk te krijgen: DAS kan niet alle aanvragers huisvesten (Yle, 27 juli 2026), en studio’s op de vrije markt zijn schaars. Twee- en driekamerwoningen zijn makkelijker.',
    },
    {
      q: 'Kan ik me aanmelden zonder Rovaniemi te bezoeken?',
      a: 'U kunt zich online aanmelden bij elke verhuurder die de stad noemt en bij DAS. Bekijk de woning toch zelf of vraag om een videotour, en betaal de waarborgsom pas nadat het contract is getekend.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'De eerste weken',
    h2: 'Een hotel of aparthotel terwijl u woningen bekijkt.',
    lead: 'Bekijk de woningen zelf voordat u tekent. De partnerzoekmachine toont de vrije kamers in Rovaniemi tegen de prijzen van vandaag.',
    chips: [
      { label: 'Rovaniemi', destination: 'Rovaniemi', sid: 'rentals_rovaniemi_first_weeks' },
    ],
  },
  sources: pickSources('nl', SOURCES, common.sourceLabels),
};

export default copy;
