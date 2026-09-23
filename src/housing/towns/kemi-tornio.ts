import type { HousingCopyMap } from '../types';
import { pickSources } from '../sources';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'kemi', 'keminmaa', 'tornio', 'ahvl', 'rakli'] as const;

/** Mitattu kysyntä (OpenSEO 18.9.2026, fi/2246): "vuokra-asunnot kemi" 3 600/kk, "vuokra-asunnot tornio" 3 600/kk. */
export const TOWN_KEMI_TORNIO: HousingCopyMap = {
  fi: {
    // 23.9.2026: Keminmaa otsikkoon (OpenSEO fi: vuokra-asunnot keminmaa 880/kk, sivu kattoi sen jo).
    metaTitle: 'Vuokra-asunnot Kemi, Tornio ja Keminmaa',
    metaDescription:
      'Vuokra-asunnot Kemissä, Torniossa ja Keminmaalla: kaupunkien omat vuokrayhtiöt (Itätuuli, Tornion Krunni, Keminmaan Vuokra-asunnot), yksityiset välittäjät, Lapin neliövuokrat ja Kelan tuki.',
    breadcrumb: 'Kemi ja Tornio',
    hero: {
      eyebrow: 'Meri-Lapin rannikko',
      title: 'Vuokra-asunnot Kemi, Tornio ja Keminmaa.',
      subtitle:
        'Rannikon kaksoiskaupunki, jossa kaupunkien omilla vuokrayhtiöillä on satoja asuntoja ja hakemus jätetään verkossa. Mistä aloittaa ja mitä vuokra maksaa.',
    },
    authorNote:
      'Vuokrayhtiöiden asuntomäärät Kemin, Tornion ja Keminmaan kuntien omilta sivuilta, neliövuokrat Tilastokeskuksen vuokratilastosta (Lapin maakunta 2026Q2). Tarkistettu 17.9.2026.',
    intro: [
      'Kemissä asuu 19 339, Torniossa 20 823 ja Keminmaalla 7 576 ihmistä (Tilastokeskus 31.12.2025). Kolme kuntaa muodostavat yhden työssäkäyntialueen, jonka sisällä asunto voi olla eri kunnassa kuin työpaikka ilman että matka venyy.',
      'Kaupunkien omat vuokrayhtiöt ovat ensimmäinen osoite: Kemin kaupungin vuokra-asunnoista vastaa Kiinteistö Oy Itätuuli, jolla on reilut 600 asuntoa keskustassa ja viiden kilometrin säteellä (kemi.fi). Keminmaan Vuokra-asunnot Oy:llä on 162 kerrostalo- ja 146 rivitaloasuntoa (keminmaa.fi), ja molempiin haetaan samalla sähköisellä hakemuksella. Torniossa kaupungin asuntoja hallinnoi Tornion Krunni Oy, jonka alle kuuluu Tornion Vuokra-asunnot Oy (tornio.fi).',
      'Tilastokeskus ei julkaise Kemistä ja Torniosta omaa keskineliövuokraa, joten alla on Lapin maakunnan luku. Rovaniemen luvut löydät omalta sivultaan.',
    ],
    sections: [
      {
        id: 'hinnat',
        kicker: 'Mitä vuokra maksaa',
        h2: 'Lapin maakunnan neliövuokrat, huhti–kesäkuu 2026.',
        table: {
          caption: 'Keskineliövuokra €/m²/kk, vapaarahoitteiset vuokra-asunnot, 2026Q2',
          head: ['', 'Lappi (maakunta)', 'Rovaniemi', 'Koko maa'],
          rows: [
            ['Yksiöt', '17,30', '18,66', '20,46'],
            ['Kaksiot', '12,85', '14,35', '15,04'],
            ['Kolmiot ja isommat', '10,97', '12,09', '13,92'],
            ['Kaikki asunnot', '13,10', '14,55', '15,94'],
          ],
          foot: 'Tilastokeskus, vuokrat 2026Q2, taulukko 15fa. Lapin maakunnan luku sisältää Rovaniemen, joten Kemi–Tornion oma taso on todennäköisesti tämän alapuolella; sitä ei julkaista erikseen.',
        },
        paras: [
          '<strong>Esimerkit maakunnan keskihinnalla:</strong> 30 m²:n yksiö noin 520 €/kk (17,30 × 30) · 50 m²:n kaksio noin 640 €/kk (12,85 × 50) · 75 m²:n kolmio noin 820 €/kk (10,97 × 75).',
        ],
      },
      {
        id: 'asumistuki',
        kicker: 'Kelan asumistuki',
        h2: 'Kemi, Tornio ja Keminmaa ovat kuntaryhmää III.',
        table: {
          caption: 'Enimmäisasumismenot 2026, €/kk, kuntaryhmä III',
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
            body: 'Kaupungin vuokra-asunnot, reilut 600 asuntoa keskustassa ja viiden kilometrin säteellä. Hakemus jätetään Kemi–Keminmaan yhteisellä sähköisellä lomakkeella. Kemin sivu listaa myös yksityiset välittäjät: Forenom, Habita Kemi, HVC Group, Kiinteistömaailma, KVP Group, OP Koti Kemi, Pihlajaniemi & Co ja Solecco.',
            href: 'https://www.kemi.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
            linkLabel: 'kemi.fi: Vuokra-asunnot',
            event: 'kemi_city',
          },
          {
            title: 'Keminmaan Vuokra-asunnot Oy',
            body: 'Kunnan omistama vuokrataloyhtiö: 18 kiinteistöä, joissa 162 kerrostalo- ja 146 rivitaloasuntoa. Sama sähköinen hakemus kuin Itätuulella.',
            href: 'https://www.keminmaa.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
            linkLabel: 'keminmaa.fi: Vuokra-asunnot',
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
            body: 'Yksityisten ja välittäjien ilmoitukset. Hae kunnalla Kemi, Tornio ja Keminmaa erikseen, sillä alue on yhtä työssäkäyntialuetta mutta kolme eri kuntahakua.',
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
        a: 'Sähköisellä hakemuksella, joka on yhteinen Kiinteistö Oy Itätuulelle (Kemi) ja Keminmaan Vuokra-asunnot Oy:lle. Itätuulella on reilut 600 asuntoa keskustassa ja viiden kilometrin säteellä (kemi.fi).',
      },
      {
        q: 'Mitä vuokra maksaa Kemissä ja Torniossa?',
        a: 'Tilastokeskus ei julkaise kaupungeille omaa keskineliövuokraa. Lapin maakunnan keskineliövuokra oli 13,10 €/m² huhti–kesäkuussa 2026 (yksiöt 17,30, kaksiot 12,85), ja luku sisältää kalliimman Rovaniemen.',
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
      'Renting in Kemi, Tornio and Keminmaa on Lapland’s coast: the municipal housing companies (Itätuuli, Tornion Krunni, Keminmaan Vuokra-asunnot), private agencies, Lapland rents per m² and Kela support.',
    breadcrumb: 'Kemi and Tornio',
    hero: {
      eyebrow: 'The coast of Sea Lapland',
      title: 'Rentals in Kemi, Tornio and Keminmaa.',
      subtitle:
        'The coastal twin towns, where the municipal housing companies hold hundreds of flats and applications are filed online. Where to start and what rent costs.',
    },
    authorNote:
      'Housing-company flat counts from the municipalities’ own pages for Kemi, Tornio and Keminmaa, rents per m² from Statistics Finland (Lapland region 2026Q2). Checked 17 September 2026.',
    intro: [
      'Kemi has 19,339 residents, Tornio 20,823 and Keminmaa 7,576 (Statistics Finland, 31 Dec 2025). The three municipalities form one commuting area, so the flat can sit in a different municipality from the job without a long drive.',
      'The municipal housing companies are the first address: Kemi’s municipal flats are run by Kiinteistö Oy Itätuuli, with over 600 flats in the centre and within five kilometres of it (kemi.fi). Keminmaan Vuokra-asunnot Oy has 162 flats in apartment blocks and 146 in row houses (keminmaa.fi), and one online application covers both companies. In Tornio the city’s flats are managed by Tornion Krunni Oy, which includes Tornion Vuokra-asunnot Oy (tornio.fi).',
      'Statistics Finland does not publish a separate rent figure for Kemi and Tornio, so the Lapland regional figure is shown below. Rovaniemi’s figures are on its own page.',
    ],
    sections: [
      {
        id: 'prices',
        kicker: 'What rent costs',
        h2: 'Lapland regional rents per m², April–June 2026.',
        table: {
          caption: 'Average rent €/m²/month, free-market rental flats, 2026Q2',
          head: ['', 'Lapland (region)', 'Rovaniemi', 'Whole country'],
          rows: [
            ['Studios', '17.30', '18.66', '20.46'],
            ['Two-room flats', '12.85', '14.35', '15.04'],
            ['Three rooms and larger', '10.97', '12.09', '13.92'],
            ['All flats', '13.10', '14.55', '15.94'],
          ],
          foot: 'Statistics Finland, rents 2026Q2, table 15fa. The regional figure includes Rovaniemi, so the Kemi–Tornio level is probably below it; it is not published separately.',
        },
        paras: [
          '<strong>Examples at the regional average:</strong> a 30 m² studio about €520 a month (17.30 × 30) · a 50 m² two-room flat about €640 (12.85 × 50) · a 75 m² three-room flat about €820 (10.97 × 75).',
        ],
      },
      {
        id: 'housing-allowance',
        kicker: 'Kela housing allowance',
        h2: 'Kemi, Tornio and Keminmaa are in group III.',
        table: {
          caption: 'Maximum housing costs 2026, €/month, municipality group III',
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
            body: 'The city’s rental flats, over 600 in the centre and within five kilometres. Applications go through the joint Kemi–Keminmaa online form. Kemi’s page also lists the private agencies: Forenom, Habita Kemi, HVC Group, Kiinteistömaailma, KVP Group, OP Koti Kemi, Pihlajaniemi & Co and Solecco.',
            href: 'https://www.kemi.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
            linkLabel: 'kemi.fi: Rental housing',
            event: 'kemi_city',
          },
          {
            title: 'Keminmaan Vuokra-asunnot Oy',
            body: 'The municipality-owned housing company: 18 properties with 162 flats in apartment blocks and 146 in row houses. The same online application as Itätuuli.',
            href: 'https://www.keminmaa.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
            linkLabel: 'keminmaa.fi: Rental housing',
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
            body: 'Private and agency listings. Search Kemi, Tornio and Keminmaa as separate municipalities: one commuting area, three municipal searches.',
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
        a: 'Through the online application shared by Kiinteistö Oy Itätuuli (Kemi) and Keminmaan Vuokra-asunnot Oy. Itätuuli has over 600 flats in the centre and within five kilometres of it (kemi.fi).',
      },
      {
        q: 'What does rent cost in Kemi and Tornio?',
        a: 'Statistics Finland publishes no separate figure for the towns. The Lapland regional average was €13.10 per m² in April–June 2026 (studios 17.30, two-room flats 12.85), and that figure includes the dearer Rovaniemi.',
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
