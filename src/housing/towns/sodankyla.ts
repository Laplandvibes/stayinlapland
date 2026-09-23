import type { HousingCopyMap } from '../types';
import { pickSources } from '../sources';

const SOURCES = [
  'tkVaesto', 'sodankyla', 'asentopuulaaki', 'asentopuulaakiHaku', 'asentopuulaakiVapaat', 'asentopuulaakiMuutto',
  'sodankyla2025', 'yle2025sodankyla', 'tkVuokratPostinumero', 'sodankylaOpintolaina', 'yle2026opintolaina', 'kela',
  'maavoimat', 'yle2026kasarmi', 'yle2026kevitsa', 'angloSakatti', 'yle2026sakatti', 'sodankylaMuuttajalle', 'fmi',
  'osrm', 'redu', 'sodankylaAsuntola', 'ahvl', 'rakli',
] as const;

/**
 * Mitattu kysyntä (OpenSEO 23.9.2026, fi/2246): "vuokra-asunnot sodankylä" 1 300/kk.
 * Vuokrataulukko on laskettu Asentopuulaaki Oy:n kohdelistan huoneistokohtaisista vuokrista
 * 23.9.2026 (42 taloa, 597 asuntoa). Kunta itse puhuu noin 720 asunnosta; ero voi olla
 * erityisasumista, jota lista ei näytä, joten sivu käyttää kunnan lukua kunnan nimissä.
 */
export const TOWN_SODANKYLA: HousingCopyMap = {
  fi: {
    metaTitle: 'Vuokra-asunnot Sodankylä: kunnan 720 asuntoa ja vuokrat',
    metaDescription:
      'Vuokra-asunnot Sodankylässä: Asentopuulaaki Oy:n noin 720 asuntoa, vuokrat 10–18 €/m², hakemus verkossa, vapaat asunnot, opintolainan hyvitys ja Kelan asumistuki.',
    breadcrumb: 'Sodankylä',
    hero: {
      eyebrow: 'Sodankylä, 8 095 asukasta',
      title: 'Vuokra-asunnot Sodankylä.',
      subtitle:
        'Varuskunta, kaivos ja tiedeyhteisö samassa kunnassa, jonka kirkonkylän pitkä asuntopula on uusien talojen myötä helpottanut. Mistä asunto haetaan ja mitä se maksaa.',
    },
    authorNote:
      'Väkiluku Tilastokeskukselta, asuntomäärä kunnan sivulta, vuokrat, ehdot ja vapaat asunnot Asentopuulaaki Oy:n omilta sivuilta, työpaikat Maavoimilta, Yleltä ja yrityksiltä. Tarkistettu 23.9.2026.',
    intro: [
      'Sodankylässä asui 8 095 ihmistä vuoden 2025 lopussa (Tilastokeskus). Kunnalla on noin 720 vuokra-asuntoa, joita vuokraa sen tytäryhtiö Asentopuulaaki Oy (sodankyla.fi). Yhtiön kohdelistan asunnoista lähes kaikki ovat kirkonkylässä; loput ovat Askassa, Orajärvellä, Riipissä, Torvisessa ja Vaalajärvellä.',
      'Kunnan mukaan Sodankylää pitkään vaivannut asuntopula on helpottanut: kesällä 2025 Jeesiöjoen varteen valmistui Käpyriihi, jossa on 36 uutta asuntoa (Sodankylän kunta 2.7.2025). 23.9.2026 yhtiön asuntohaussa oli 21 vapaata tai vapautumassa olevaa asuntoa, suurin osa kolmioita tai isompia (Asentopuulaaki).',
      'Pula ei ole kokonaan ohi. Syyskuussa 2025 kunnan tekninen johtaja kertoi Ylelle, että asuntopula vaikeuttaa työntekijöiden saamista Sodankylään, vaikka työpaikkoja on tarjolla (Yle 11.9.2025).',
    ],
    sections: [
      {
        id: 'hinnat',
        kicker: 'Mitä vuokra maksaa',
        h2: 'Vanhassa talossa 10 €/m², uudessa 18 €/m².',
        table: {
          caption: 'Asentopuulaaki Oy:n vuokrat €/m²/kk, kohdelista 23.9.2026',
          head: ['Talot', '€/m²/kk'],
          rows: [
            ['Käpyriihi, valmistui 2025', '18,00'],
            ['Peuranpalas 2013 ja Kehtoranta 2015', '12,80–13,00'],
            ['Rivi-, luhti- ja kerrostalot 1977–1998', '8,80–12,50'],
            ['Keskustan kerrostalot 1968–1970', '10,20'],
            ['Sivukylien rivitalot', '7,40–10,90'],
          ],
          foot: 'Laskettu Asentopuulaaki Oy:n kohdelistan huoneistokohtaisista vuokrista 23.9.2026: 42 taloa, 597 asuntoa. Vakuus on kuukauden vuokra, vesimaksu peritään ennakkona ja taloussähkön maksaa vuokralainen. Sivukylien sähkölämmitteisissä taloissa vuokralainen maksaa myös lämmityssähkön, yhtiön arvion mukaan noin 100 €/kk kesällä ja 200 €/kk talvella.',
        },
        paras: [
          '<strong>Esimerkit:</strong> 62 m²:n kaksio keskustan kerrostalossa 632 €/kk · 42 m²:n kaksio Käpyriihessä 756 €/kk · 80 m²:n kolmio Kaanaanmaan rivitalossa 800 €/kk.',
          '<strong>Yksityiset vuokrat:</strong> vapaarahoitteisten kaksioiden keskivuokra oli Sodankylän keskustan postinumeroalueella 11,73 €/m² loka–joulukuussa 2025 (Tilastokeskus, taulukko 13eb). Uudempaa kuntakohtaista lukua ei ole, sillä Sodankylä puuttuu Tilastokeskuksen nykyisestä vuokrataulukosta.',
        ],
      },
      {
        id: 'kanavat',
        kicker: 'Keneltä asuntoa haetaan',
        h2: 'Kunnan yhtiö ensin, sitten portaalit.',
        band: true,
        cards: [
          {
            title: 'Asentopuulaaki Oy',
            body: 'Kunnan tytäryhtiö, joka vuokraa kunnan noin 720 asuntoa. Hakemus tehdään verkossa, ja siihen liitetään selvitys tuloista. Luottotiedot tarkistetaan, ja maksuhäiriömerkinnät vaikuttavat asunnon saantiin.',
            href: 'https://www.asentopuulaaki.fi/asunnon-hakeminen/',
            linkLabel: 'asentopuulaaki.fi: Asunnon hakeminen',
            event: 'asentopuulaaki',
          },
          {
            title: 'Vapaat asunnot',
            body: 'Yhtiön asuntohaku näyttää vapaat ja vapautuvat asunnot vuokrineen ja vapautumispäivineen. 23.9.2026 niitä oli 21, ja monta rivitalokolmiota oli heti vapaana.',
            href: 'https://www.asentopuulaaki.fi/asuntohaku/',
            linkLabel: 'asentopuulaaki.fi: Asuntohaku',
            event: 'asentopuulaaki_vapaat',
          },
          {
            title: 'Oikotie ja Vuokraovi',
            body: 'Yksityisten vuokranantajien ilmoitukset kunnalla Sodankylä. Kunnan asuntosivu ei listaa muita vuokranantajia kuin oman yhtiönsä, joten yksityiset asunnot löytyvät portaaleista.',
            href: 'https://asunnot.oikotie.fi/vuokra-asunnot/sodankyl%C3%A4',
            linkLabel: 'Oikotie: vuokra-asunnot Sodankylä',
            event: 'oikotie',
          },
        ],
      },
      {
        id: 'opintolaina',
        kicker: 'Muuttajalle',
        h2: 'Vastavalmistuneelle jopa 5 800 euroa.',
        paras: [
          'Sodankylä, Inari ja Utsjoki hyvittävät opintolainaa vastavalmistuneelle, joka muuttaa kuntaan ja tekee töitä vähintään 50 prosentin työajalla tai yrittäjänä. Hyvitys on enintään 5 800 euroa, ja sitä maksetaan takautuvasti enintään kolmen vuoden ajan 12 kuukauden jaksoissa (Sodankylän kunta).',
          'Hyvitys koskee opintolainaa toisen asteen ammatillisesta, ammattikorkeakoulu- tai yliopistotutkinnosta, ja valmistumisesta saa olla enintään kaksi vuotta. Hakemuksia käsitellään ensimmäisen kerran tammikuussa 2027, ja Ylen mukaan hakulomake aukeaa 1.12.2026 (Yle 1.9.2026).',
        ],
      },
      {
        id: 'asumistuki',
        kicker: 'Kelan asumistuki',
        h2: 'Sodankylä on Kelan ryhmässä ”muut kunnat”.',
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
        kicker: 'Työ',
        h2: 'Varuskunta kasvaa, kaivos sulkeutuu 2034.',
        bullets: [
          'Jääkäriprikaatissa työskentelee noin 400 henkilöä, ja se kouluttaa vuosittain noin 2 200 varusmiestä (Maavoimat). Sodankylän varuskuntaan rakennetaan lähes 700 varusmiehen kasarmi, joka valmistuu vuoden 2028 alkuun mennessä (Yle 2.4.2026).',
          'Bolidenin Kevitsan kaivos ilmoitti toukokuussa 2026 vähentävänsä 77 työpaikkaa, ja kaivos on päätetty sulkea vuonna 2034 (Yle 26.5.2026).',
          'Anglo Americanin suunnitteleman Sakatin kaivoksen on tarkoitus aloittaa toimintansa noin vuonna 2032, mutta hanke on yhä lupavaiheessa, ja Luonnonsuojeluliiton Lapin piiri on valittanut Sakatti-päätöksestä oikeuteen (Anglo American, Yle 18.6.2026).',
          'Kunnan mukaan Sodankylässä ovat myös Tähtelän tiedeyhteisö ja Luoston tunturikeskus (sodankyla.fi). Luostolle on kirkonkylästä 38 km (OpenStreetMap).',
        ],
      },
      {
        id: 'arki',
        kicker: 'Arki',
        h2: 'Kaamos kestää täällä neljä päivää.',
        bullets: [
          'Kaamos kestää Sodankylässä vain neljä päivää juuri ennen joulua (Ilmatieteen laitos).',
          'Lähin lentoasema on Kittilässä, 93 km, ja Rovaniemen keskustaan on 130 km (OpenStreetMap).',
          'Opiskelijalle: REDUlla on opiskelija-asuntola Sodankylässä, ja kunta ilmoitti maaliskuussa 2026 perustavansa lukiolaisille ja aikuisopiskelijoille asuntolan Asentopuulaakin isoihin asuntoihin (redu.fi, Sodankylän kunta 5.3.2026).',
        ],
      },
      {
        id: 'sopimus',
        kicker: 'Sopimus',
        h2: 'Irtisanomisaika on kuukausi.',
        bullets: [
          'Asentopuulaakilla irtisanomisaika on yksi kalenterikuukausi, ja vakuus palautetaan noin kahden viikon kuluessa muutosta (Asentopuulaaki).',
          'Vakuus on enintään kolmen kuukauden vuokra (laki asuinhuoneiston vuokrauksesta 8 §).',
          '1.10.2026 alkaen vakuus on palautettava tai sen pidättämisestä ilmoitettava kirjallisesti viimeistään 14 päivän kuluessa vuokrasuhteen päättymisestä (Rakli).',
        ],
      },
    ],
    faqs: [
      {
        q: 'Miten Sodankylän kunnan vuokra-asuntoa haetaan?',
        a: 'Asentopuulaaki Oy:n sähköisellä asuntohakemuksella, johon liitetään selvitys tuloista, esimerkiksi palkkalaskelma. Luottotiedot tarkistetaan Suomen Asiakastiedosta, ja maksuhäiriömerkinnät vaikuttavat asunnon saantiin (Asentopuulaaki).',
      },
      {
        q: 'Mitä vuokra-asunto maksaa Sodankylässä?',
        a: 'Kunnan yhtiön vanhoissa kerrostaloissa noin 10 €/m², rivi- ja luhtitaloissa pääosin 10–12,50 €/m² ja vuonna 2025 valmistuneessa Käpyriihessä 18 €/m², jolloin 42 m²:n kaksio maksaa 756 € kuussa (Asentopuulaaki 23.9.2026). Vapaiden markkinoiden kaksioiden keskivuokra keskustassa oli 11,73 €/m² loka–joulukuussa 2025 (Tilastokeskus).',
      },
      {
        q: 'Onko Sodankylässä asuntopula?',
        a: 'Oli pitkään. Kunnan mukaan pula on helpottanut uusien kohteiden valmistuttua (2.7.2025), ja 23.9.2026 kunnan yhtiöllä oli 21 vapaata tai vapautumassa olevaa asuntoa, suurin osa kolmioita tai isompia (Asentopuulaaki).',
      },
      {
        q: 'Kuka voi saada opintolainan hyvityksen?',
        a: 'Vastavalmistunut, joka muuttaa Sodankylään, Inariin tai Utsjoelle ja tekee töitä vähintään 50 prosentin työajalla tai yrittäjänä. Hyvitys on enintään 5 800 euroa kolmen vuoden aikana, ja hakemuksia käsitellään ensimmäisen kerran tammikuussa 2027 (Sodankylän kunta).',
      },
    ],
    cta: {
      partner: 'hotels',
      kicker: 'Ensimmäiset yöt',
      h2: 'Näytöt paikan päällä.',
      lead: 'Kumppanihaku näyttää Sodankylän ja Luoston vapaat huoneet ja huoneistot päivän hinnoin.',
      chips: [
        { label: 'Sodankylä', destination: 'Sodankylä', sid: 'rentals_sodankyla_first_weeks' },
        { label: 'Luosto', destination: 'Luosto', sid: 'rentals_luosto_first_weeks' },
      ],
    },
    sources: pickSources('fi', SOURCES),
  },
  en: {
    metaTitle: 'Rentals in Sodankylä: 720 Municipal Flats and What They Cost',
    metaDescription:
      'Renting in Sodankylä: Asentopuulaaki Oy’s roughly 720 municipal flats, rents of €10–18 per m², the online application, free flats, the student loan pilot and Kela support.',
    breadcrumb: 'Sodankylä',
    hero: {
      eyebrow: 'Sodankylä, 8,095 residents',
      title: 'Rentals in Sodankylä.',
      subtitle:
        'A garrison, a mine and a science community in one municipality, where the main village’s long housing shortage has eased as new buildings went up. Where to apply and what it costs.',
    },
    authorNote:
      'Population from Statistics Finland, the flat count from the municipality’s page, rents, terms and free flats from Asentopuulaaki Oy’s own pages, jobs from the Finnish Army, Yle and the companies. Checked 23 September 2026.',
    intro: [
      'Sodankylä had 8,095 residents at the end of 2025 (Statistics Finland). The municipality owns roughly 720 rental flats, let by its subsidiary Asentopuulaaki Oy (sodankyla.fi). Almost every flat on the company’s list is in the main village; the rest are in Aska, Orajärvi, Riipi, Torvinen and Vaalajärvi.',
      'According to the municipality, the housing shortage that dogged Sodankylä for years has eased: in summer 2025 Käpyriihi, with 36 new flats, was completed by the Jeesiöjoki river (Municipality of Sodankylä, 2 Jul 2025). On 23 September 2026 the company’s search listed 21 flats free or coming free, most of them with three rooms or more (Asentopuulaaki).',
      'The shortage is not entirely over. In September 2025 the municipality’s technical director told Yle that it still makes it hard to bring workers to Sodankylä, even though there are jobs (Yle, 11 Sep 2025).',
    ],
    sections: [
      {
        id: 'prices',
        kicker: 'What rent costs',
        h2: 'About €10 per m² in an old building, €18 in a new one.',
        table: {
          caption: 'Asentopuulaaki Oy rents, €/m²/month, property list 23 Sep 2026',
          head: ['Buildings', '€/m²/month'],
          rows: [
            ['Käpyriihi, completed 2025', '18.00'],
            ['Peuranpalas 2013 and Kehtoranta 2015', '12.80–13.00'],
            ['Row, access-balcony and apartment houses 1977–1998', '8.80–12.50'],
            ['Apartment blocks in the centre, 1968–1970', '10.20'],
            ['Row houses in the outlying villages', '7.40–10.90'],
          ],
          foot: 'Calculated from the rent of every flat on Asentopuulaaki Oy’s property list, 23 Sep 2026: 42 buildings, 597 flats. The deposit is one month’s rent, water is charged in advance and the tenant pays for household electricity. In the electrically heated village houses the tenant also pays for heating, which the company puts at about €100 a month in summer and €200 in winter.',
        },
        paras: [
          '<strong>Examples:</strong> a 62 m² two-room flat in a central apartment block €632 a month · a 42 m² two-room flat at Käpyriihi €756 · an 80 m² three-room row house in Kaanaanmaa €800.',
          '<strong>Private rents:</strong> free-market two-room flats averaged €11.73 per m² in the Sodankylä centre postal area in October–December 2025 (Statistics Finland, table 13eb). There is no newer municipal figure: Sodankylä is not in Statistics Finland’s current rent table.',
        ],
      },
      {
        id: 'channels',
        kicker: 'Who to apply to',
        h2: 'The municipal company first, then the portals.',
        band: true,
        cards: [
          {
            title: 'Asentopuulaaki Oy',
            body: 'The municipal subsidiary that lets the municipality’s roughly 720 flats. You apply online and attach proof of income. Credit records are checked, and payment defaults count against you.',
            href: 'https://www.asentopuulaaki.fi/asunnon-hakeminen/',
            linkLabel: 'asentopuulaaki.fi: Applying for a flat',
            event: 'asentopuulaaki',
          },
          {
            title: 'Free flats',
            body: 'The company’s flat search shows free and soon-free flats with their rent and the date they come free. On 23 September 2026 there were 21, and several three-room row houses were free at once.',
            href: 'https://www.asentopuulaaki.fi/asuntohaku/',
            linkLabel: 'asentopuulaaki.fi: Flat search',
            event: 'asentopuulaaki_vapaat',
          },
          {
            title: 'Oikotie and Vuokraovi',
            body: 'Private listings under the municipality Sodankylä. The municipality’s housing page names no landlord other than its own company, so private flats are found on the portals.',
            href: 'https://asunnot.oikotie.fi/vuokra-asunnot/sodankyl%C3%A4',
            linkLabel: 'Oikotie: rentals in Sodankylä',
            event: 'oikotie',
          },
        ],
      },
      {
        id: 'student-loan',
        kicker: 'For newcomers',
        h2: 'Up to €5,800 for recent graduates.',
        paras: [
          'Sodankylä, Inari and Utsjoki compensate the student loans of recent graduates who move there and work at least 50 percent of full time or as an entrepreneur. The compensation is at most €5,800, paid retroactively over at most three years in 12-month periods (Municipality of Sodankylä).',
          'It covers student loans for a vocational upper secondary qualification or a university of applied sciences or university degree, and you must have graduated within the previous two years. Applications are first processed in January 2027, and according to Yle the application form opens on 1 December 2026 (Yle, 1 Sep 2026).',
        ],
      },
      {
        id: 'housing-allowance',
        kicker: 'Kela housing allowance',
        h2: 'Sodankylä falls under Kela’s “other municipalities”.',
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
        kicker: 'Work',
        h2: 'The garrison is growing; the mine closes in 2034.',
        bullets: [
          'The Jaeger Brigade employs about 400 people and trains about 2,200 conscripts a year (Finnish Army). A barracks for almost 700 conscripts is being built at the Sodankylä garrison and is due by early 2028 (Yle, 2 Apr 2026).',
          'Boliden’s Kevitsa mine announced 77 job cuts in May 2026, and the mine is set to close in 2034 (Yle, 26 May 2026).',
          'Anglo American’s planned Sakatti mine is meant to start operating around 2032, but the project is still in permitting, and the Lapland district of the Finnish Association for Nature Conservation has appealed the Sakatti decision in court (Anglo American; Yle, 18 Jun 2026).',
          'The municipality also names the Tähtelä science community and the Luosto fell resort (sodankyla.fi). Luosto is 38 km from the main village (OpenStreetMap).',
        ],
      },
      {
        id: 'everyday',
        kicker: 'Everyday life',
        h2: 'Polar night here lasts four days.',
        bullets: [
          'In Sodankylä the polar night lasts only four days, just before Christmas (Finnish Meteorological Institute).',
          'The nearest airport is Kittilä, 93 km away, and Rovaniemi centre is 130 km (OpenStreetMap).',
          'For students: REDU has a student dormitory in Sodankylä, and in March 2026 the municipality announced a dormitory for upper secondary and adult students in large Asentopuulaaki flats (redu.fi; Municipality of Sodankylä, 5 Mar 2026).',
        ],
      },
      {
        id: 'contract',
        kicker: 'The contract',
        h2: 'One month’s notice.',
        bullets: [
          'At Asentopuulaaki the notice period is one calendar month, and the deposit is returned about two weeks after you move out (Asentopuulaaki).',
          'The deposit is at most three months’ rent (Act on Residential Leases, section 8).',
          'From 1 October 2026 the deposit must be returned, or its retention explained in writing, within 14 days of the tenancy ending (Rakli).',
        ],
      },
    ],
    faqs: [
      {
        q: 'How do I apply for a municipal flat in Sodankylä?',
        a: 'With Asentopuulaaki Oy’s online application, with proof of income attached, such as a payslip. Credit records are checked with Suomen Asiakastieto, and payment defaults count against you (Asentopuulaaki).',
      },
      {
        q: 'What does a rental flat cost in Sodankylä?',
        a: 'In the municipal company’s old apartment blocks about €10 per m², in row and access-balcony houses mostly €10–12.50, and at Käpyriihi, completed in 2025, €18, which makes a 42 m² two-room flat €756 a month (Asentopuulaaki, 23 Sep 2026). Free-market two-room flats in the centre averaged €11.73 per m² in October–December 2025 (Statistics Finland).',
      },
      {
        q: 'Is there a housing shortage in Sodankylä?',
        a: 'There was for years. According to the municipality it has eased as new buildings were completed (2 Jul 2025), and on 23 September 2026 the municipal company had 21 flats free or coming free, most of them with three rooms or more (Asentopuulaaki).',
      },
      {
        q: 'Who can get the student loan compensation?',
        a: 'A recent graduate who moves to Sodankylä, Inari or Utsjoki and works at least 50 percent of full time or as an entrepreneur. The compensation is at most €5,800 over three years, and applications are first processed in January 2027 (Municipality of Sodankylä).',
      },
    ],
    cta: {
      partner: 'hotels',
      kicker: 'The first nights',
      h2: 'Viewings in person.',
      lead: 'The partner search shows free rooms and apartments in Sodankylä and at Luosto at today’s prices.',
      chips: [
        { label: 'Sodankylä', destination: 'Sodankylä', sid: 'rentals_sodankyla_first_weeks' },
        { label: 'Luosto', destination: 'Luosto', sid: 'rentals_luosto_first_weeks' },
      ],
    },
    sources: pickSources('en', SOURCES),
  },
};
