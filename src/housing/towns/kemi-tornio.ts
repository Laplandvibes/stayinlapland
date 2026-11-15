import type { HousingCopyMap } from '../types';
import { pickSources } from '../sources';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'kemi', 'itatuuli', 'keminmaa', 'keminmaaVuokra', 'tornio', 'ahvl', 'rakli'] as const;

/** Mitattu kysyntä (OpenSEO 18.9.2026, fi/2246): "vuokra-asunnot kemi" 3 600/kk, "vuokra-asunnot tornio" 3 600/kk. */
export const TOWN_KEMI_TORNIO: HousingCopyMap = {
  fi: {
    // 23.9.2026: Keminmaa otsikkoon (OpenSEO fi: vuokra-asunnot keminmaa 880/kk, sivu kattoi sen jo).
    metaTitle: 'Vuokra-asunnot Kemi, Tornio ja Keminmaa',
    metaDescription:
      'Vuokra-asunnot Kemissä, Torniossa ja Keminmaalla: kuntien vuokrayhtiöt (Itätuuli, Tornion Krunni, Keminmaan Vuokra-asunnot), välittäjät ja Kelan tuki.',
    breadcrumb: 'Kemi ja Tornio',
    hero: {
      eyebrow: 'Meri-Lapin rannikko',
      title: 'Vuokra-asunnot Kemi, Tornio ja Keminmaa.',
      subtitle:
        'Rannikon kaksoiskaupunki, jossa kaupunkien omilla vuokrayhtiöillä on satoja asuntoja ja hakemus jätetään verkossa. Mistä aloittaa ja mitä vuokra maksaa.',
    },
    authorNote:
      'Vuokrayhtiöiden asuntomäärät Kemin, Tornion ja Keminmaan kuntien omilta sivuilta, hakuehdot yhtiöiden omilta sivuilta, neliövuokrat Tilastokeskuksen vuokratilastosta (Lapin maakunta 2026Q3). Tarkistettu 15.11.2026.',
    intro: [
      'Kemissä asuu 19 339, Torniossa 20 823 ja Keminmaalla 7 576 ihmistä (Tilastokeskus 31.12.2025). Kolme kuntaa ovat toistensa naapureita, ja asunto voi olla eri kunnassa kuin työpaikka.',
      'Kaupunkien omat vuokrayhtiöt ovat ensimmäinen osoite: Kemin kaupungin vuokra-asunnoista vastaa Kiinteistö Oy Itätuuli (kemi.fi), joka on Kemin suurin vuokra-asuntotoimija ja tarjoaa asuntoja viiden kilometrin säteellä keskustasta (itatuuli.fi). Keminmaan Vuokra-asunnot Oy:llä on 18 kiinteistöä ja reilut 300 asuntoa (keminmaa.fi). Kumpaankin haetaan omalla sähköisellä hakemuksellaan. Torniossa kaupungin asuntoja hallinnoi Tornion Krunni Oy, jonka alle kuuluu Tornion Vuokra-asunnot Oy (tornio.fi).',
      'Tilastokeskuksen tuoreessa vuokrataulukossa Kemillä ja Torniolla ei ole omaa riviä, joten alla on Lapin maakunnan luku. Rovaniemen luvut löydät omalta sivultaan.',
    ],
    sections: [
      {
        id: 'hinnat',
        kicker: 'Mitä vuokra maksaa',
        h2: 'Lapin maakunnan neliövuokrat, heinä–syyskuu 2026.',
        table: {
          caption: 'Keskineliövuokra €/m²/kk, vapaarahoitteiset vuokra-asunnot, 2026Q3',
          head: ['', 'Lappi (maakunta)', 'Rovaniemi', 'Koko maa'],
          rows: [
            ['Yksiöt', '17,25', '18,63', '20,49'],
            ['Kaksiot', '12,87', '14,40', '15,07'],
            ['Kolmiot ja isommat', '11,08', '12,29', '13,98'],
            ['Kaikki asunnot', '13,14', '14,63', '15,99'],
          ],
          foot: 'Tilastokeskus, vuokrat 2026Q3, taulukko 15fa. Lapin maakunnan luku sisältää Rovaniemen, joten Kemi–Tornion oma taso on todennäköisesti tämän alapuolella; sitä ei julkaista tuoreessa taulukossa erikseen.',
        },
        paras: [
          '<strong>Esimerkit maakunnan keskihinnalla:</strong> 30 m²:n yksiö noin 520 €/kk (17,25 × 30); 50 m²:n kaksio noin 640 €/kk (12,87 × 50); 75 m²:n kolmio noin 830 €/kk (11,08 × 75).',
        ],
      },
      {
        id: 'asumistuki',
        kicker: 'Kelan asumistuki',
        h2: 'Kemi, Tornio ja Keminmaa ovat Kelan ryhmässä ”muut kunnat”.',
        table: {
          caption: 'Enimmäisasumismenot 2026, €/kk, Kelan ryhmä ”muut kunnat”',
          head: ['Ruokakunnan koko', 'Enimmäisasumismenot'],
          rows: [
            ['1 henkilö', '394'],
            ['2 henkilöä', '574'],
            ['3 henkilöä', '734'],
            ['4 henkilöä', '875'],
            ['Jokainen lisähenkilö', '+129'],
          ],
          foot: 'Kela, yleinen asumistuki 2026. Tuki on enintään 70 % hyväksyttävistä asumismenoista; alle 15 euron tukea ei makseta.',
        },
      },
      {
        id: 'kanavat',
        kicker: 'Keneltä asuntoa haetaan',
        h2: 'Kaupungin yhtiö ensin, sitten välittäjät.',
        band: true,
        cards: [
          {
            title: 'Kemi: Kiinteistö Oy Itätuuli',
            body: 'Kaupungin vuokra-asunnot. Itätuuli on Kemin suurin vuokra-asuntotoimija, ja sen asunnot ovat viiden kilometrin säteellä keskustasta. Oma sähköinen hakemus on voimassa neljä kuukautta, eikä vakuutta peritä. Visit Kemin yritysinfo-sivu listaa myös yksityiset välittäjät: Forenom, Habita Kemi, HVC Group, Kiinteistömaailma, KVP Group, OP Koti Kemi, Pihlajaniemi & Co, Solecco ja AJK Asunnot.',
            href: 'https://www.kemi.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
            linkLabel: 'kemi.fi: Vuokra-asunnot',
            event: 'kemi_city',
          },
          {
            title: 'Keminmaan Vuokra-asunnot Oy',
            body: 'Kunnan omistama vuokrataloyhtiö: 18 kiinteistöä ja reilut 300 asuntoa, ja vuokraan sisältyvät vesi ja lämmitys. Oma sähköinen hakemus on voimassa kolme kuukautta, ja vakuus on kuukauden vuokra.',
            href: 'https://www.keminmaanvuokra-asunnot.fi/asunnonhaku.html',
            linkLabel: 'Keminmaan Vuokra-asunnot: Asunnonhaku',
            event: 'keminmaa',
          },
          {
            title: 'Tornio: Tornion Krunni Oy',
            body: 'Hallinnoi Tornion Vuokra-asunnot Oy:tä, Tornion Oppilasasuntola Oy:tä ja Tornion Palveluasunnot Oy:tä; kaupungin Tilapalvelut hoitaa lisäksi kaupungin suoraan omistamat asunnot. Asuntotiedustelut puhelimitse, ja kaupungin sivu ohjaa myös yksityisille vuokranantajille ja välittäjille.',
            href: 'https://www.tornio.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
            linkLabel: 'tornio.fi: Vuokra-asunnot',
            event: 'tornio_city',
          },
          {
            title: 'Oikotie ja Vuokraovi',
            body: 'Yksityisten ja välittäjien ilmoitukset. Hae kunnalla Kemi, Tornio ja Keminmaa erikseen, sillä ne ovat kolme eri kuntahakua.',
            href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kemi',
            linkLabel: 'Oikotie: vuokra-asunnot Kemi',
            event: 'oikotie',
          },
        ],
      },
      {
        id: 'sopimus',
        kicker: 'Sopimus',
        h2: 'Kaksi lakipykälää, jotka kannattaa tietää.',
        bullets: [
          'Vakuus on enintään kolmen kuukauden vuokra (laki asuinhuoneiston vuokrauksesta 8 §).',
          '1.10.2026 alkaen vakuus on palautettava tai sen pidättämisestä ilmoitettava kirjallisesti viimeistään 14 päivän kuluessa vuokrasuhteen päättymisestä (Rakli).',
        ],
      },
    ],
    faqs: [
      {
        q: 'Miten Kemin kaupungin vuokra-asuntoa haetaan?',
        a: 'Kiinteistö Oy Itätuulen omalla sähköisellä hakemuksella, joka on voimassa neljä kuukautta. Itätuuli on Kemin suurin vuokra-asuntotoimija ja tarjoaa asuntoja viiden kilometrin säteellä keskustasta, ja se vuokraa kaikki asuntonsa ilman vakuutta (itatuuli.fi). Keminmaan Vuokra-asunnot Oy:llä on oma hakemuksensa.',
      },
      {
        q: 'Mitä vuokra maksaa Kemissä ja Torniossa?',
        a: 'Tilastokeskuksen tuoreessa taulukossa kaupungeilla ei ole omaa keskineliövuokrariviä. Lapin maakunnan keskineliövuokra oli 13,14 €/m² heinä–syyskuussa 2026 (yksiöt 17,25, kaksiot 12,87), ja luku sisältää kalliimman Rovaniemen.',
      },
    ],
    cta: {
      partner: 'hotels',
      kicker: 'Ensimmäiset viikot',
      h2: 'Näytöt paikan päällä.',
      lead: 'Varaa majoitus näyttöjen ajaksi ja katso asunto ennen kuin allekirjoitat.',
      chips: [
        { label: 'Kemi', destination: 'Kemi', sid: 'rentals_kemi_first_weeks' },
        { label: 'Tornio', destination: 'Tornio', sid: 'rentals_tornio_first_weeks' },
      ],
    },
    sources: pickSources('fi', SOURCES),
  },
  en: {
    metaTitle: 'Rentals in Kemi, Tornio and Keminmaa: Municipal Flats',
    metaDescription:
      'Renting in Kemi, Tornio and Keminmaa on Lapland’s coast: municipal housing companies such as Itätuuli and Tornion Krunni, private agencies and Kela support.',
    breadcrumb: 'Kemi and Tornio',
    hero: {
      eyebrow: 'The coast of Sea Lapland',
      title: 'Rentals in Kemi, Tornio and Keminmaa.',
      subtitle:
        'The coastal twin towns, where the municipal housing companies hold hundreds of flats and applications are filed online. Where to start and what rent costs.',
    },
    authorNote:
      'Housing-company flat counts from the municipalities’ own pages for Kemi, Tornio and Keminmaa, application terms from the companies’ own pages, rents per m² from Statistics Finland (Lapland region 2026Q3). Checked 15 November 2026.',
    intro: [
      'Kemi has 19,339 residents, Tornio 20,823 and Keminmaa 7,576 (Statistics Finland, 31 Dec 2025). The three municipalities border one another, so the flat can sit in a different municipality from the job.',
      'The municipal housing companies are the first address: Kemi’s municipal flats are run by Kiinteistö Oy Itätuuli (kemi.fi), the town’s largest rental housing provider, with flats within five kilometres of the centre (itatuuli.fi). Keminmaan Vuokra-asunnot Oy has 18 properties with just over 300 flats (keminmaa.fi). Each company has its own online application. In Tornio the city’s flats are managed by Tornion Krunni Oy, which includes Tornion Vuokra-asunnot Oy (tornio.fi).',
      'Statistics Finland’s current rent table has no separate row for Kemi or Tornio, so the Lapland regional figure is shown below. Rovaniemi’s figures are on its own page.',
    ],
    sections: [
      {
        id: 'prices',
        kicker: 'What rent costs',
        h2: 'Lapland regional rents per m², July–September 2026.',
        table: {
          caption: 'Average rent €/m²/month, free-market rental flats, 2026Q3',
          head: ['', 'Lapland (region)', 'Rovaniemi', 'Whole country'],
          rows: [
            ['Studios', '17.25', '18.63', '20.49'],
            ['Two-room flats', '12.87', '14.40', '15.07'],
            ['Three rooms and larger', '11.08', '12.29', '13.98'],
            ['All flats', '13.14', '14.63', '15.99'],
          ],
          foot: 'Statistics Finland, rents 2026Q3, table 15fa. The regional figure includes Rovaniemi, so the Kemi–Tornio level is probably below it; the current table does not show it separately.',
        },
        paras: [
          '<strong>Examples at the regional average:</strong> a 30 m² studio about €520 a month (17.25 × 30); a 50 m² two-room flat about €640 (12.87 × 50); a 75 m² three-room flat about €830 (11.08 × 75).',
        ],
      },
      {
        id: 'housing-allowance',
        kicker: 'Kela housing allowance',
        h2: 'Kemi, Tornio and Keminmaa fall under Kela’s “other municipalities”.',
        table: {
          caption: 'Maximum housing costs 2026, €/month, Kela group “other municipalities”',
          head: ['Household size', 'Maximum housing costs'],
          rows: [
            ['1 person', '394'],
            ['2 persons', '574'],
            ['3 persons', '734'],
            ['4 persons', '875'],
            ['Each additional person', '+129'],
          ],
          foot: 'Kela, general housing allowance 2026. The allowance is at most 70 % of accepted housing costs; an allowance below €15 is not paid.',
        },
      },
      {
        id: 'channels',
        kicker: 'Who to apply to',
        h2: 'The municipal company first, then the agencies.',
        band: true,
        cards: [
          {
            title: 'Kemi: Kiinteistö Oy Itätuuli',
            body: 'The city’s rental flats. Itätuuli is Kemi’s largest rental housing provider, and its flats are within five kilometres of the centre. Its own online application is valid for four months, and no deposit is charged. Visit Kemi’s business info page also lists the private agencies: Forenom, Habita Kemi, HVC Group, Kiinteistömaailma, KVP Group, OP Koti Kemi, Pihlajaniemi & Co, Solecco and AJK Asunnot.',
            href: 'https://www.kemi.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
            linkLabel: 'kemi.fi: Rental housing',
            event: 'kemi_city',
          },
          {
            title: 'Keminmaan Vuokra-asunnot Oy',
            body: 'The municipality-owned housing company: 18 properties with just over 300 flats, and water and heating are included in the rent. Its own online application is valid for three months, and the deposit is one month’s rent.',
            href: 'https://www.keminmaanvuokra-asunnot.fi/asunnonhaku.html',
            linkLabel: 'Keminmaan Vuokra-asunnot: How to apply',
            event: 'keminmaa',
          },
          {
            title: 'Tornio: Tornion Krunni Oy',
            body: 'Manages Tornion Vuokra-asunnot Oy, Tornion Oppilasasuntola Oy and Tornion Palveluasunnot Oy; the city’s facilities unit also handles flats the city owns directly. Housing enquiries by phone, and the city’s page points to private landlords and agencies too.',
            href: 'https://www.tornio.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
            linkLabel: 'tornio.fi: Rental housing',
            event: 'tornio_city',
          },
          {
            title: 'Oikotie and Vuokraovi',
            body: 'Private and agency listings. Search Kemi, Tornio and Keminmaa as separate municipalities: they are three separate municipal searches.',
            href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kemi',
            linkLabel: 'Oikotie: rentals in Kemi',
            event: 'oikotie',
          },
        ],
      },
      {
        id: 'contract',
        kicker: 'The contract',
        h2: 'Two sections of the law worth knowing.',
        bullets: [
          'The deposit is at most three months’ rent (Act on Residential Leases, section 8).',
          'From 1 October 2026 the deposit must be returned, or its retention explained in writing, within 14 days of the tenancy ending (Rakli).',
        ],
      },
    ],
    faqs: [
      {
        q: 'How do I apply for a municipal flat in Kemi?',
        a: 'With Kiinteistö Oy Itätuuli’s own online application, valid for four months. Itätuuli is Kemi’s largest rental housing provider with flats within five kilometres of the centre, and lets all of them with no deposit (itatuuli.fi). Keminmaan Vuokra-asunnot Oy has its own application.',
      },
      {
        q: 'What does rent cost in Kemi and Tornio?',
        a: 'Statistics Finland’s current table has no separate row for the towns. The Lapland regional average was €13.14 per m² in July–September 2026 (studios 17.25, two-room flats 12.87), and that figure includes the dearer Rovaniemi.',
      },
    ],
    cta: {
      partner: 'hotels',
      kicker: 'The first weeks',
      h2: 'Viewings in person.',
      lead: 'Book a place to stay for the viewings and see the flat before you sign.',
      chips: [
        { label: 'Kemi', destination: 'Kemi', sid: 'rentals_kemi_first_weeks' },
        { label: 'Tornio', destination: 'Tornio', sid: 'rentals_tornio_first_weeks' },
      ],
    },
    sources: pickSources('en', SOURCES),
  },
};
