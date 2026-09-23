import type { HousingCopyMap } from '../types';
import { pickSources } from '../sources';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'rovaniemi', 'das', 'yle2025das', 'lapinKansaDas', 'yle2026rovaniemi', 'ahvl', 'rakli'] as const;

/** Mitattu kysyntä (OpenSEO 18.9.2026, fi/2246): "vuokra-asunnot rovaniemi" 14 800/kk, "vuokra-asunto rovaniemi" 14 800, "asunnot rovaniemi" 2 900, "opiskelija-asunnot rovaniemi" 210. */
export const TOWN_ROVANIEMI: HousingCopyMap = {
  fi: {
    metaTitle: 'Vuokra-asunnot Rovaniemi: hinnat, hakukanavat, vuokranantajat',
    metaDescription:
      'Vuokra-asunnot Rovaniemellä: Tilastokeskuksen neliövuokrat 2026, kaupungin listaamat vuokranantajat, DAS opiskelijoille, Kelan asumistuen katto ja milloin kannattaa hakea.',
    breadcrumb: 'Rovaniemi',
    hero: {
      eyebrow: 'Rovaniemi, 66 191 asukasta',
      title: 'Vuokra-asunnot Rovaniemi.',
      subtitle:
        'Lapin suurin kaupunki, 66 191 asukasta. Mitä vuokra maksaa, keneltä asuntoa haetaan ja milloin.',
    },
    authorNote:
      'Neliövuokrat Tilastokeskuksen vuokratilastosta (huhti–kesäkuu 2026), vuokranantajat Rovaniemen kaupungin omalta Asuminen-sivulta, asuntopulan luvut Ylen ja Lapin Kansan uutisista. Tarkistettu 17.9.2026.',
    intro: [
      'Rovaniemellä asuu 66 191 ihmistä (Tilastokeskus 31.12.2025), ja yksiöistä on kova kilpailu: opiskelija-asuntosäätiö DAS sai kesällä 2025 noin 550 kiireellistä hakemusta, lähes 90 prosenttia hakijoista halusi yksiön, ja kaupungin yksiöitä lyhytvuokrataan talvisesongiksi matkailijoille (Yle 27.7.2025). Lapin Kansan mukaan DAS pystyi tarjoamaan asunnon noin 30 prosentille hakijoista.',
      'Rekrytointiyhtiö, joka toi Lappiin noin 250 työntekijää, majoitti heitä Rovaniemellä kymmeneen eri paikkaan (Yle 9.3.2026). Kausityöntekijät, opiskelijat ja matkailijat hakevat siis samoja pieniä asuntoja samaan aikaan, elo–syyskuussa ja marras–joulukuussa.',
      'Hyvä uutinen on hinta: Rovaniemen keskineliövuokra 14,55 €/m² on alle koko maan keskiarvon 15,94 (Tilastokeskus 2026Q2). Alla luvut asuntokoon mukaan ja kanavat, joista asuntoa haetaan.',
    ],
    sections: [
      {
        id: 'hinnat',
        kicker: 'Mitä vuokra maksaa',
        h2: 'Rovaniemen neliövuokrat, huhti–kesäkuu 2026.',
        table: {
          caption: 'Keskineliövuokra €/m²/kk, vapaarahoitteiset vuokra-asunnot, Rovaniemi 2026Q2',
          head: ['', 'Kaikki vuokrat', 'Uudet vuokrat', 'Koko maa'],
          rows: [
            ['Yksiöt', '18,66', '21,17', '20,46'],
            ['Kaksiot', '14,35', '16,11', '15,04'],
            ['Kolmiot ja isommat', '12,09', '13,66', '13,92'],
            ['Kaikki asunnot', '14,55', '15,87', '15,94'],
          ],
          foot: 'Tilastokeskus, vuokrat 2026Q2, taulukko 15fa. Uudet vuokrasuhteet = neljänneksellä alkaneet sopimukset eli se, mitä vapaista asunnoista juuri nyt pyydetään.',
        },
        paras: [
          '<strong>Esimerkit:</strong> 30 m²:n yksiö noin 560 €/kk (18,66 × 30), uudessa sopimuksessa noin 635 €/kk (21,17 × 30) · 50 m²:n kaksio noin 720 €/kk (14,35 × 50) · 75 m²:n kolmio noin 910 €/kk (12,09 × 75). Vesi ja sähkö tulevat yleensä päälle.',
          'Uusien vuokrasuhteiden yksiöhinta 21,17 €/m² on korkeampi kuin koko maan keskiarvo 20,46: juuri nyt vapautuva yksiö Rovaniemellä maksaa enemmän kuin keskimääräinen yksiö Suomessa. Kaksioissa ja kolmioissa Rovaniemi on koko maata halvempi.',
        ],
      },
      {
        id: 'asumistuki',
        kicker: 'Kelan asumistuki',
        h2: 'Rovaniemellä katto on korkeampi.',
        lead:
          'Yleinen asumistuki on enintään 70 % hyväksyttävistä asumismenoista. Rovaniemellä hyväksyttävien menojen katto on korkeampi kuin muissa Lapin kunnissa, koska kaupunki on Kelan 24 suuremman kunnan ryhmässä (Kela 2026).',
        table: {
          caption: 'Enimmäisasumismenot 2026, €/kk, Kelan 24 suuremman kunnan ryhmä',
          head: ['Ruokakunnan koko', 'Enimmäisasumismenot'],
          rows: [
            ['1 henkilö', '447'],
            ['2 henkilöä', '652'],
            ['3 henkilöä', '828'],
            ['4 henkilöä', '981'],
            ['Jokainen lisähenkilö', '+134'],
          ],
          foot: 'Kela, yleinen asumistuki 2026. Alle 15 euron tukea ei makseta. Tulot pienentävät tukea perusomavastuun kautta.',
        },
      },
      {
        id: 'kanavat',
        kicker: 'Keneltä asuntoa haetaan',
        h2: 'Kaupungin lista, opiskelijasäätiö ja portaalit.',
        lead: 'Rovaniemen kaupungilla ei ole omaa vuokra-asuntoyhtiötä, jolle hakemus jätettäisiin; kaupungin Asuminen-sivu listaa vuokranantajat ja hakupalvelut.',
        band: true,
        cards: [
          {
            title: 'Rovaniemen kaupunki: vuokranantajat',
            body: 'Kaupungin sivu ohjaa yritysvuokranantajille KAS asunnot, M2-Kodit, Tarveasunnot, Avara ja Lumo sekä hakupalveluihin Oikotie, Vuokraovi ja Qasa. Kaikilla vuokranantajilla on oma verkkohaku, ja hakemus kannattaa jättää useammalle yhtä aikaa.',
            href: 'https://www.rovaniemi.fi/Asuminen-ja-ymparisto/Asuminen',
            linkLabel: 'rovaniemi.fi: Asuminen',
            event: 'rovaniemi_city',
          },
          {
            title: 'DAS: opiskelijalle',
            body: 'Domus Arctica -säätiöllä on noin 1 700 asuntoa, joista 700 yksiötä ja 460 kaksiota, ja keskivuokra 12,50 €/m² (Yle 27.7.2025). Haku on jatkuva, hakemus on voimassa kolme kuukautta ja uudet opiskelijat ovat etusijalla elo–syyskuussa. Hakea voi, jos opiskelee Rovaniemellä perusopetuksen jälkeisessä oppilaitoksessa.',
            href: 'https://www.das.fi/en/apply/applying-info',
            linkLabel: 'das.fi: Tietoa hakemisesta',
            event: 'das',
          },
          {
            title: 'KAS asunnot',
            body: 'Vuokrakohteita usealla Rovaniemen asuinalueella (kaupungin listaus). Hakemus verkossa.',
            href: 'https://kas.fi/rovaniemen-vuokrattavat-kas-kodit/',
            linkLabel: 'kas.fi: Rovaniemen KAS-kodit',
            event: 'kas',
          },
          {
            title: 'Lumo',
            body: 'Yritysvuokranantaja, jolla on rakennuksia Rovaniemellä. Vakiosopimus, verkkohaku, nopea muutto.',
            href: 'https://lumo.fi/vuokra-asunnot/?city=Rovaniemi',
            linkLabel: 'lumo.fi: Rovaniemi',
            event: 'lumo',
          },
          {
            title: 'Oikotie ja Vuokraovi',
            body: 'Valtakunnalliset portaalit, joissa on suurin osa yksityisten ja välittäjien ilmoituksista. Suodata kunnalla Rovaniemi, ei kaupunginosalla, niin näet myös Ounasvaaran, Saarenkylän ja keskustan ulkopuoliset kohteet.',
            href: 'https://asunnot.oikotie.fi/vuokra-asunnot/rovaniemi',
            linkLabel: 'Oikotie: vuokra-asunnot Rovaniemi',
            event: 'oikotie',
          },
          {
            title: 'NAL Rovaniemi: 18–29-vuotiaille',
            body: 'Nuorisoasuntoliiton Rovaniemen yhdistys tarjoaa nuorisoasuntoja 18–29-vuotiaille (kaupungin listaus). Vaihtoehto, kun DAS ei ole mahdollinen eikä opiskelijastatusta ole.',
            href: 'https://www.rovaniemi.fi/Asuminen-ja-ymparisto/Asuminen',
            linkLabel: 'rovaniemi.fi: nuorisoasunnot',
            event: 'nal',
          },
        ],
      },
      {
        id: 'milloin',
        kicker: 'Milloin hakea',
        h2: 'Kaksi ruuhkaa vuodessa.',
        bullets: [
          '<strong>Elo–syyskuu</strong> on pahin: DAS ei pysty tarjoamaan asuntoa kaikille hakijoille, ja yksityiset yksiöt menevät opiskelijoille ja kausityöntekijöille samaan aikaan (Yle 27.7.2025).',
          '<strong>Marras–joulukuu:</strong> talvisesongin kausityöntekijät saapuvat ja osa yksiöistä on lyhytvuokrattu matkailijoille. Määräaikaiset sopimukset päättyvät usein lokakuun lopussa (Yle 27.7.2025).',
          '<strong>Kevät</strong> on väljin: talvisesongiksi lyhytvuokratut yksiöt vapautuvat, ja kesätyöhön tulevalle asunto löytyy helpommin.',
          '<strong>Vakuus</strong> on enintään kolmen kuukauden vuokra (laki asuinhuoneiston vuokrauksesta 8 §), ja 1.10.2026 alkaen se on palautettava viimeistään 14 päivän kuluessa vuokrasuhteen päättymisestä (Rakli).',
        ],
      },
    ],
    faqs: [
      {
        q: 'Paljonko yksiö maksaa Rovaniemellä?',
        a: 'Tilastokeskuksen mukaan 18,66 €/m² kaikissa vuokrasuhteissa ja 21,17 €/m² uusissa (2026Q2). 30 m²:n yksiö on siis noin 560–635 €/kk ilman sähköä.',
      },
      {
        q: 'Onko Rovaniemellä vaikea saada vuokra-asuntoa?',
        a: 'Yksiöitä on vaikea saada elo–syyskuussa: DAS pystyi tarjoamaan asunnon noin 30 prosentille hakijoista (Lapin Kansa), ja yksityisiä yksiöitä hakevat samaan aikaan opiskelijat ja kausityöntekijät. Kaksioita ja kolmioita on helpompi löytää, ja keväällä markkina on väljin.',
      },
      {
        q: 'Voiko asuntoa hakea ilman Rovaniemellä käyntiä?',
        a: 'Hakemuksen voi jättää verkossa kaikille kaupungin listaamille vuokranantajille ja DASiin. Näyttö kannattaa silti tehdä itse tai pyytää videokierros, ja vakuus maksetaan vasta sopimuksen jälkeen.',
      },
    ],
    cta: {
      partner: 'hotels',
      kicker: 'Ensimmäiset viikot',
      h2: 'Hotelli tai huoneistohotelli näyttöjen ajaksi.',
      lead: 'Katso asunnot paikan päällä ennen allekirjoitusta. Kumppanihaku näyttää Rovaniemen vapaat huoneet päivän hinnoin.',
      chips: [
        { label: 'Rovaniemi', destination: 'Rovaniemi', sid: 'rentals_rovaniemi_first_weeks' },
      ],
    },
    sources: pickSources('fi', SOURCES),
  },
  en: {
    metaTitle: 'Rentals in Rovaniemi: Rents, Landlords and How to Apply',
    metaDescription:
      'Renting a flat in Rovaniemi: rent per m² from Statistics Finland 2026, the landlords listed by the city, DAS for students, the Kela housing allowance ceiling and when to apply.',
    breadcrumb: 'Rovaniemi',
    hero: {
      eyebrow: 'Rovaniemi, 66,191 residents',
      title: 'Rentals in Rovaniemi.',
      subtitle:
        'Lapland’s largest city, 66,191 residents. What rent costs, who you apply to and when.',
    },
    authorNote:
      'Rents per m² from Statistics Finland (April–June 2026), landlords from the City of Rovaniemi’s own housing page, shortage figures from Yle and Lapin Kansa. Checked 17 September 2026.',
    intro: [
      'Rovaniemi has 66,191 residents (Statistics Finland, 31 Dec 2025) and fierce competition for studios: the student housing foundation DAS received about 550 urgent applications in summer 2025, nearly 90 percent of applicants wanted a studio, and the city’s studios are let short-term to tourists for the winter season (Yle, 27 Jul 2025). According to Lapin Kansa, DAS could house about 30 percent of applicants.',
      'A recruitment company that brought about 250 workers to Lapland housed them in some ten different places in Rovaniemi (Yle, 9 Mar 2026). Seasonal workers, students and tourists are all after the same small flats at the same time, in August–September and November–December.',
      'The good news is the price: Rovaniemi’s average rent of €14.55 per m² is below the national average of €15.94 (Statistics Finland 2026Q2). Below, the figures by flat size and the channels to apply through.',
    ],
    sections: [
      {
        id: 'prices',
        kicker: 'What rent costs',
        h2: 'Rovaniemi rents per m², April–June 2026.',
        table: {
          caption: 'Average rent €/m²/month, free-market rental flats, Rovaniemi 2026Q2',
          head: ['', 'All rents', 'New rents', 'Whole country'],
          rows: [
            ['Studios', '18.66', '21.17', '20.46'],
            ['Two-room flats', '14.35', '16.11', '15.04'],
            ['Three rooms and larger', '12.09', '13.66', '13.92'],
            ['All flats', '14.55', '15.87', '15.94'],
          ],
          foot: 'Statistics Finland, rents 2026Q2, table 15fa. New tenancies = contracts that started during the quarter, i.e. what free flats are being asked right now.',
        },
        paras: [
          '<strong>Examples:</strong> a 30 m² studio about €560 a month (18.66 × 30), in a new tenancy about €635 (21.17 × 30) · a 50 m² two-room flat about €720 (14.35 × 50) · a 75 m² three-room flat about €910 (12.09 × 75). Water and electricity usually come on top.',
          'The new-tenancy studio price of €21.17 per m² is above the national average of €20.46: a studio coming free in Rovaniemi right now costs more than the average studio in Finland. In two- and three-room flats Rovaniemi is cheaper than the country as a whole.',
        ],
      },
      {
        id: 'housing-allowance',
        kicker: 'Kela housing allowance',
        h2: 'Rovaniemi has a higher ceiling.',
        lead:
          'General housing allowance is at most 70 % of accepted housing costs. In Rovaniemi the ceiling on accepted costs is higher than in the other Lapland municipalities, because the city is in Kela’s group of 24 larger municipalities (Kela 2026).',
        table: {
          caption: 'Maximum housing costs 2026, €/month, Kela’s group of 24 larger municipalities',
          head: ['Household size', 'Maximum housing costs'],
          rows: [
            ['1 person', '447'],
            ['2 persons', '652'],
            ['3 persons', '828'],
            ['4 persons', '981'],
            ['Each additional person', '+134'],
          ],
          foot: 'Kela, general housing allowance 2026. An allowance below €15 is not paid. Income reduces the allowance through the basic deductible.',
        },
      },
      {
        id: 'channels',
        kicker: 'Who to apply to',
        h2: 'The city’s list, the student foundation and the portals.',
        lead: 'The City of Rovaniemi has no municipal housing company of its own to apply to; the city’s housing page lists the landlords and search services instead.',
        band: true,
        cards: [
          {
            title: 'City of Rovaniemi: landlords',
            body: 'The city’s page points to the corporate landlords KAS asunnot, M2-Kodit, Tarveasunnot, Avara and Lumo, and to the search services Oikotie, Vuokraovi and Qasa. Every landlord has its own online application; apply to several at once.',
            href: 'https://www.rovaniemi.fi/Asuminen-ja-ymparisto/Asuminen',
            linkLabel: 'rovaniemi.fi: Housing',
            event: 'rovaniemi_city',
          },
          {
            title: 'DAS: for students',
            body: 'The Domus Arctica Foundation has about 1,700 flats, 700 of them studios and 460 two-room flats, at an average rent of €12.50 per m² (Yle, 27 Jul 2025). Applications are continuous, valid for three months, and new students have priority in August and September. You can apply if you study in Rovaniemi at a post-comprehensive institution.',
            href: 'https://www.das.fi/en/apply/applying-info',
            linkLabel: 'das.fi: Applying info',
            event: 'das',
          },
          {
            title: 'KAS asunnot',
            body: 'Rental homes in several Rovaniemi districts (city listing). Online application.',
            href: 'https://kas.fi/rovaniemen-vuokrattavat-kas-kodit/',
            linkLabel: 'kas.fi: Rovaniemi',
            event: 'kas',
          },
          {
            title: 'Lumo',
            body: 'A corporate landlord with buildings in Rovaniemi. Standard contract, online application, fast move-in.',
            href: 'https://lumo.fi/en/rental-apartments',
            linkLabel: 'lumo.fi: rental apartments',
            event: 'lumo',
          },
          {
            title: 'Oikotie and Vuokraovi',
            body: 'The national portals carry most private and agency listings. Filter by the municipality Rovaniemi, not by district, so that Ounasvaara, Saarenkylä and homes outside the centre show up too.',
            href: 'https://asunnot.oikotie.fi/vuokra-asunnot/rovaniemi',
            linkLabel: 'Oikotie: rentals in Rovaniemi',
            event: 'oikotie',
          },
          {
            title: 'NAL Rovaniemi: ages 18–29',
            body: 'The Rovaniemi branch of the Finnish Youth Housing Association offers youth housing for 18–29-year-olds (city listing). An option when DAS is not possible and you are not a student.',
            href: 'https://www.rovaniemi.fi/Asuminen-ja-ymparisto/Asuminen',
            linkLabel: 'rovaniemi.fi: youth housing',
            event: 'nal',
          },
        ],
      },
      {
        id: 'when',
        kicker: 'When to apply',
        h2: 'Two rushes a year.',
        bullets: [
          '<strong>August–September</strong> is the worst: DAS cannot house every applicant, and private studios go to students and seasonal workers at the same time (Yle, 27 Jul 2025).',
          '<strong>November–December:</strong> the winter season’s workers arrive and some studios are let short-term to tourists. Fixed-term contracts often end in late October (Yle, 27 Jul 2025).',
          '<strong>Spring</strong> is the loosest: studios let for the winter season come back, and a summer-job arrival finds a flat more easily.',
          '<strong>The deposit</strong> is at most three months’ rent (Act on Residential Leases, section 8), and from 1 October 2026 it must be returned within 14 days of the tenancy ending (Rakli).',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much is a studio in Rovaniemi?',
        a: 'According to Statistics Finland, €18.66 per m² across all tenancies and €21.17 per m² in new ones (2026Q2). A 30 m² studio is therefore about €560–635 a month before electricity.',
      },
      {
        q: 'Is it hard to find a rental in Rovaniemi?',
        a: 'Studios are hard to get in August–September: DAS could house about 30 percent of applicants (Lapin Kansa), and students and seasonal workers chase the same private studios. Two- and three-room flats are easier, and the market is loosest in spring.',
      },
      {
        q: 'Can I apply without visiting Rovaniemi?',
        a: 'You can apply online to every landlord the city lists and to DAS. Still view the flat yourself or ask for a video tour, and pay the deposit only after the contract is signed.',
      },
    ],
    cta: {
      partner: 'hotels',
      kicker: 'The first weeks',
      h2: 'A hotel or aparthotel while you view flats.',
      lead: 'See the flats in person before you sign. The partner search shows Rovaniemi’s free rooms at today’s prices.',
      chips: [
        { label: 'Rovaniemi', destination: 'Rovaniemi', sid: 'rentals_rovaniemi_first_weeks' },
      ],
    },
    sources: pickSources('en', SOURCES),
  },
};
