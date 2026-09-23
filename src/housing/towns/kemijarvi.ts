import type { HousingCopyMap } from '../types';
import { pickSources } from '../sources';

const SOURCES = [
  'tkVaesto', 'kemijarvi', 'kemijarviHaku', 'kemijarviVuostimo', 'kemijarviTalousarvio', 'kemijarviTietoa',
  'kemijarviToihin', 'tkVuokrat', 'tkVuokratPostinumero', 'kela', 'tkAvainluvut', 'osrm', 'redu', 'ahvl', 'rakli',
] as const;

/**
 * Mitattu kysyntä (OpenSEO 23.9.2026, fi/2246): "vuokra-asunnot kemijärvi" 1 600/kk.
 * Kaikki luvut luettu lähteestä 23.9.2026; talousarvion luvut (käyttöaste, korotukset,
 * työnantajat) kaupungin talousarviosta 2026, jonka valtuusto hyväksyi 16.12.2025.
 */
export const TOWN_KEMIJARVI: HousingCopyMap = {
  fi: {
    metaTitle: 'Vuokra-asunnot Kemijärvi: kaupungin 560 asuntoa ja hakemus',
    metaDescription:
      'Vuokra-asunnot Kemijärvellä: kaupungin 560 asuntoa, hakemus verkossa, vuokrankorotukset 2026, Vuostimon rivitalot Pyhän lähellä ja Kelan asumistuki.',
    breadcrumb: 'Kemijärvi',
    hero: {
      eyebrow: 'Kemijärvi, 6 919 asukasta',
      title: 'Vuokra-asunnot Kemijärvi.',
      subtitle:
        'Suomen pohjoisin kaupunki, jossa kaupungilla on 560 vuokra-asuntoa ja osa niistä on tyhjillään. Mistä asunto haetaan ja mitä kannattaa tietää ennen muuttoa.',
    },
    authorNote:
      'Väkiluku Tilastokeskukselta, asuntomäärä ja hakuohje Kemijärven kaupungin sivuilta, vuokrankorotukset ja käyttöastetavoitteet kaupungin talousarviosta 2026. Tarkistettu 23.9.2026.',
    intro: [
      'Kemijärvellä asui 6 919 ihmistä vuoden 2025 lopussa, 35 vähemmän kuin vuotta aiemmin (Tilastokeskus). Kaupunki kutsuu itseään Suomen pohjoisimmaksi kaupungiksi, ja sen mukaan keskustan palvelut ovat kävelymatkan päässä (kemijarvi.fi).',
      'Kaupungin kahdella kiinteistöyhtiöllä, Kemijärven Vuokrataloilla ja Kemijärven Tövelillä, on 560 vuokra-asuntoa (kemijarvi.fi). Kaupungin talousarviossa realistisena tavoitteena pidetään, että yhtiöiden asunnoista 80–85 prosenttia on vuokrattuna. Tyhjiä asuntoja siis on.',
      'Vuokrat nousevat: Kemijärven Vuokratalojen vuokriin tuli 4,5 prosentin korotus 1.2.2026 ja Tövelin vuokriin 5 prosentin korotus 1.7.2026. Samat korotukset on kirjattu myös vuosille 2027 ja 2028 (talousarvio 2026).',
    ],
    sections: [
      {
        id: 'kanavat',
        kicker: 'Keneltä asuntoa haetaan',
        h2: 'Kaupungin yhtiöt ensin, sitten portaalit.',
        band: true,
        cards: [
          {
            title: 'Kaupungin vuokratalot',
            body: 'Kaupungin 560 asuntoa ovat keskustassa, Särkikankaalla, Sipovaarassa, Isokylässä, Halosenrannassa ja Vuostimossa. Hakemus tehdään verkossa tai paperilla, jonka saa Sortteerista (Vapaudenkatu 8). Se on voimassa neljä kuukautta, ja sen voi uusia.',
            href: 'https://kemijarvi.fi/asuminen-ja-ymparisto/asuminen/kemijarven-kaupungin-vuokratalot/asunnon-hakeminen/',
            linkLabel: 'kemijarvi.fi: Asunnon hakeminen',
            event: 'kemijarvi_city',
          },
          {
            title: 'Vuostimo, 14 km Pyhälle',
            body: 'Kaupungin rivitalot vuodelta 1987 Vuostimossa, noin 35 kilometriä keskustasta pohjoiseen. Pyhätunturin hiihtokeskus on 14 kilometrin päässä, joten nämä ovat kaupungin vuokra-asunnoista lähimpänä Pyhää.',
            href: 'https://kemijarvi.fi/asuminen-ja-ymparisto/asuminen/kemijarven-kaupungin-vuokratalot/vuokratalokohteet/vuostimo/',
            linkLabel: 'kemijarvi.fi: Vuostimo',
            event: 'kemijarvi_vuostimo',
          },
          {
            title: 'Oikotie ja Vuokraovi',
            body: 'Yksityisten vuokranantajien ja välittäjien ilmoitukset kunnalla Kemijärvi. Kaupungin asuntosivut eivät listaa yksityisiä vuokranantajia, joten niiden asunnot löytyvät portaaleista.',
            href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kemij%C3%A4rvi',
            linkLabel: 'Oikotie: vuokra-asunnot Kemijärvi',
            event: 'oikotie',
          },
        ],
      },
      {
        id: 'hinnat',
        kicker: 'Mitä vuokra maksaa',
        h2: 'Kaupungin yhtiöt eivät julkaise vuokriaan.',
        table: {
          caption: 'Keskineliövuokra €/m²/kk, vapaarahoitteiset vuokra-asunnot, 2026Q2',
          head: ['', 'Lappi (maakunta)', 'Koko maa'],
          rows: [
            ['Yksiöt', '17,30', '20,46'],
            ['Kaksiot', '12,85', '15,04'],
            ['Kolmiot ja isommat', '10,97', '13,92'],
            ['Kaikki asunnot', '13,10', '15,94'],
          ],
          foot: 'Tilastokeskus, vuokrat 2026Q2, taulukko 15fa. Kemijärvestä ei julkaista omaa lukua, ja maakunnan luku sisältää kalliimman Rovaniemen.',
        },
        paras: [
          '<strong>Kemijärven oma luku on vuodelta 2022.</strong> Keskustan postinumeroalueella 98100 vapaarahoitteiset yksiöt maksoivat tammi–maaliskuussa 2022 keskimäärin 12,15 €/m² ja kaksiot 9,10 €/m². Sen jälkeen luku on peitetty joka neljännes, koska Tilastokeskus peittää postinumeroalueen luvun, jos havaintoja on alle 20 tai vuokrataloyhtiöiden osuus on suuri (taulukko 13eb).',
          'Kaupungin yhtiöiden vuokria ei ole verkossa. Kysy asunnon vuokra asuntosihteeriltä ennen kuin hyväksyt tarjouksen, ja muista, että vuokriin tuli vuonna 2026 korotus: 4,5 prosenttia Vuokrataloissa ja 5 prosenttia Tövelissä.',
        ],
      },
      {
        id: 'asumistuki',
        kicker: 'Kelan asumistuki',
        h2: 'Kemijärvi on Kelan ryhmässä ”muut kunnat”.',
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
        id: 'tyo',
        kicker: 'Työ ja yhteydet',
        h2: 'Työpaikka kannattaa sopia ennen muuttoa.',
        bullets: [
          'Kaupungin mukaan merkittäviä työnantajia ovat kaupungin itsensä lisäksi Keitele Group, Festivo Porkka Group ja Kelan yhteyskeskus sekä kauppa-, palvelu- ja matkailuyritykset (talousarvio 2026).',
          'Työttömiä oli 15,6 prosenttia työvoimasta vuonna 2024, kun koko maassa osuus oli 11,7 prosenttia (Tilastokeskus).',
          'Suomutunturille on keskustasta 46 km ja Pyhätunturille 50 km (OpenStreetMap). Suomu on Kemijärven omaa aluetta, Pyhä naapurikunnan Pelkosenniemen.',
          'Rovaniemen lentoasemalle on 80 km (OpenStreetMap), ja kaupungin mukaan suora junayhteys vie Helsinkiin asti (kemijarvi.fi).',
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
        q: 'Miten Kemijärven kaupungin vuokra-asuntoa haetaan?',
        a: 'Sähköisellä hakemuksella kaupungin sivulta tai paperilla, jonka saa Sortteerista (Vapaudenkatu 8). Hakemus on voimassa neljä kuukautta, ja sen voi uusia neljäksi kuukaudeksi. Luottotiedot tarkistetaan, eikä hakemusta käsitellä ennen kuin liitteet on toimitettu. Asukasvalintakokoukset pidetään yleensä joka toinen keskiviikko (kemijarvi.fi).',
      },
      {
        q: 'Onko Kemijärvellä vapaita vuokra-asuntoja?',
        a: 'Todennäköisesti on. Kaupungin talousarviossa realistisena tavoitteena pidetään, että yhtiöiden asunnoista 80–85 prosenttia on vuokrattuna (talousarvio 2026). Vapaita asuntoja voi kysyä asuntosihteeriltä.',
      },
      {
        q: 'Mitä vuokra-asunto maksaa Kemijärvellä?',
        a: 'Tuoretta keskivuokraa ei julkaista. Keskustan postinumeroalueen viimeisin luku on alkuvuodelta 2022: yksiöt 12,15 €/m² ja kaksiot 9,10 €/m². Lapin maakunnan keskiarvo oli 13,10 €/m² huhti–kesäkuussa 2026, ja se sisältää kalliimman Rovaniemen (Tilastokeskus).',
      },
      {
        q: 'Onko Kemijärvellä opiskelija-asuntoja?',
        a: 'Lapin koulutuskeskus REDUlla on opiskelija-asuntola Kemijärvellä. Oppivelvolliselle opiskelijalle asuminen on maksutonta, ja muille opiskelijoille vapaita paikkoja vuokrataan hinnaston mukaan (redu.fi).',
      },
    ],
    cta: {
      partner: 'hotels',
      kicker: 'Ensimmäiset yöt',
      h2: 'Näytöt paikan päällä.',
      lead: 'Kumppanihaku näyttää Kemijärven ja Pyhän vapaat huoneet ja huoneistot päivän hinnoin.',
      chips: [
        { label: 'Kemijärvi', destination: 'Kemijärvi', sid: 'rentals_kemijarvi_first_weeks' },
        { label: 'Pyhä', destination: 'Pyhä', sid: 'rentals_pyha_first_weeks' },
      ],
    },
    sources: pickSources('fi', SOURCES),
  },
  en: {
    metaTitle: 'Rentals in Kemijärvi: the City’s 560 Flats and How to Apply',
    metaDescription:
      'Renting in Kemijärvi: the city’s 560 rental flats, the online application, the 2026 rent increases, the Vuostimo row houses near Pyhä and Kela housing allowance.',
    breadcrumb: 'Kemijärvi',
    hero: {
      eyebrow: 'Kemijärvi, 6,919 residents',
      title: 'Rentals in Kemijärvi.',
      subtitle:
        'Finland’s northernmost town, where the city owns 560 rental flats and some of them stand empty. Where to apply and what to know before you move.',
    },
    authorNote:
      'Population from Statistics Finland, flat numbers and how to apply from the City of Kemijärvi’s pages, rent increases and occupancy targets from the city’s 2026 budget. Checked 23 September 2026.',
    intro: [
      'Kemijärvi had 6,919 residents at the end of 2025, 35 fewer than a year earlier (Statistics Finland). The city calls itself Finland’s northernmost town and says the services in the centre are within walking distance (kemijarvi.fi).',
      'The city’s two property companies, Kemijärven Vuokratalot and Kemijärven Töveli, own 560 rental flats (kemijarvi.fi). The city budget treats having 80–85 percent of those flats let as a realistic target, so empty flats do exist.',
      'Rents are rising: Kemijärven Vuokratalot raised its rents by 4.5 percent on 1 February 2026 and Töveli by 5 percent on 1 July 2026. The same increases are written into the plan for 2027 and 2028 (budget 2026).',
    ],
    sections: [
      {
        id: 'channels',
        kicker: 'Who to apply to',
        h2: 'The city companies first, then the portals.',
        band: true,
        cards: [
          {
            title: 'The city’s rental housing',
            body: 'The city’s 560 flats are in the centre, Särkikangas, Sipovaara, Isokylä, Halosenranta and Vuostimo. Apply online or on a paper form from Sortteeri (Vapaudenkatu 8). An application is valid for four months and can be renewed.',
            href: 'https://kemijarvi.fi/asuminen-ja-ymparisto/asuminen/kemijarven-kaupungin-vuokratalot/asunnon-hakeminen/',
            linkLabel: 'kemijarvi.fi: Applying for a flat',
            event: 'kemijarvi_city',
          },
          {
            title: 'Vuostimo, 14 km from Pyhä',
            body: 'City-owned row houses from 1987 in Vuostimo, about 35 kilometres north of the centre. The Pyhätunturi ski resort is 14 kilometres away, which makes these the city’s rental flats closest to Pyhä.',
            href: 'https://kemijarvi.fi/asuminen-ja-ymparisto/asuminen/kemijarven-kaupungin-vuokratalot/vuokratalokohteet/vuostimo/',
            linkLabel: 'kemijarvi.fi: Vuostimo',
            event: 'kemijarvi_vuostimo',
          },
          {
            title: 'Oikotie and Vuokraovi',
            body: 'Private and agency listings under the municipality Kemijärvi. The city’s housing pages list no private landlords, so their flats are found on the portals.',
            href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kemij%C3%A4rvi',
            linkLabel: 'Oikotie: rentals in Kemijärvi',
            event: 'oikotie',
          },
        ],
      },
      {
        id: 'prices',
        kicker: 'What rent costs',
        h2: 'The city companies do not publish their rents.',
        table: {
          caption: 'Average rent €/m²/month, free-market rental flats, 2026Q2',
          head: ['', 'Lapland (region)', 'Whole country'],
          rows: [
            ['Studios', '17.30', '20.46'],
            ['Two-room flats', '12.85', '15.04'],
            ['Three rooms and larger', '10.97', '13.92'],
            ['All flats', '13.10', '15.94'],
          ],
          foot: 'Statistics Finland, rents 2026Q2, table 15fa. No separate figure is published for Kemijärvi, and the regional figure includes the dearer Rovaniemi.',
        },
        paras: [
          '<strong>Kemijärvi’s own figure dates from 2022.</strong> In the town-centre postal area 98100, free-market studios averaged €12.15 per m² and two-room flats €9.10 per m² in January–March 2022. Every quarter since has been suppressed: Statistics Finland hides a postal area’s figure when there are fewer than 20 observations or the share of housing companies is large (table 13eb).',
          'The city companies’ rents are not online. Ask the housing secretary for the rent before you accept an offer, and remember that rents went up in 2026: 4.5 percent at Vuokratalot and 5 percent at Töveli.',
        ],
      },
      {
        id: 'housing-allowance',
        kicker: 'Kela housing allowance',
        h2: 'Kemijärvi falls under Kela’s “other municipalities”.',
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
        id: 'work',
        kicker: 'Work and connections',
        h2: 'Agree on the job before you move.',
        bullets: [
          'According to the city, its major employers besides the city itself are Keitele Group, Festivo Porkka Group and Kela’s contact centre, along with retail, service and tourism businesses (budget 2026).',
          'The unemployed made up 15.6 percent of the labour force in 2024, against 11.7 percent in Finland as a whole (Statistics Finland).',
          'Suomutunturi is 46 km from the centre and Pyhätunturi 50 km (OpenStreetMap). Suomu lies within Kemijärvi; Pyhä belongs to the neighbouring municipality of Pelkosenniemi.',
          'Rovaniemi airport is 80 km away (OpenStreetMap), and the city says a direct rail connection runs all the way to Helsinki (kemijarvi.fi).',
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
        q: 'How do I apply for a city-owned flat in Kemijärvi?',
        a: 'With the online application on the city’s site, or on a paper form from Sortteeri (Vapaudenkatu 8). The application is valid for four months and can be renewed for another four. Credit records are checked, and the application is not processed until its attachments have arrived. Tenant selection meetings are usually held every other Wednesday (kemijarvi.fi).',
      },
      {
        q: 'Are there free rental flats in Kemijärvi?',
        a: 'Most likely. The city budget treats having 80–85 percent of the companies’ flats let as a realistic target (budget 2026). Ask the housing secretary which flats are free.',
      },
      {
        q: 'What does a rental flat cost in Kemijärvi?',
        a: 'No current average is published. The latest figure for the town-centre postal area is from early 2022: studios €12.15 per m² and two-room flats €9.10 per m². The Lapland average was €13.10 per m² in April–June 2026, and it includes the dearer Rovaniemi (Statistics Finland).',
      },
      {
        q: 'Is there student housing in Kemijärvi?',
        a: 'The Lapland Education Centre REDU has a student dormitory in Kemijärvi. Housing is free for students still in compulsory education, and spare places are let to other students at the listed price (redu.fi).',
      },
    ],
    cta: {
      partner: 'hotels',
      kicker: 'The first nights',
      h2: 'Viewings in person.',
      lead: 'The partner search shows free rooms and apartments in Kemijärvi and at Pyhä at today’s prices.',
      chips: [
        { label: 'Kemijärvi', destination: 'Kemijärvi', sid: 'rentals_kemijarvi_first_weeks' },
        { label: 'Pyhä', destination: 'Pyhä', sid: 'rentals_pyha_first_weeks' },
      ],
    },
    sources: pickSources('en', SOURCES),
  },
};
