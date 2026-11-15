import type { HousingCopyMap } from '../types';
import { pickSources } from '../sources';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'rovaniemi', 'das', 'yle2025das', 'yle2026rovaniemi', 'ahvl', 'rakli'] as const;

/** Mitattu kysyntä (OpenSEO 18.9.2026, fi/2246): "vuokra-asunnot rovaniemi" 14 800/kk, "vuokra-asunto rovaniemi" 14 800, "asunnot rovaniemi" 2 900, "opiskelija-asunnot rovaniemi" 210. */
export const TOWN_ROVANIEMI: HousingCopyMap = {
  fi: {
    metaTitle: 'Vuokra-asunnot Rovaniemi: hinnat, hakukanavat, vuokranantajat',
    metaDescription:
      'Vuokra-asunnot Rovaniemellä: neliövuokrat 2026, kaupungin listaamat vuokranantajat, DAS opiskelijoille, Kelan asumistuen katto ja milloin kannattaa hakea.',
    breadcrumb: 'Rovaniemi',
    hero: {
      eyebrow: 'Rovaniemi, 66 191 asukasta',
      title: 'Vuokra-asunnot Rovaniemi.',
      subtitle:
        'Lapin suurin kaupunki, 66 191 asukasta. Mitä vuokra maksaa, keneltä asuntoa haetaan ja milloin.',
    },
    authorNote:
      'Neliövuokrat Tilastokeskuksen vuokratilastosta (heinä–syyskuu 2026), vuokranantajat Rovaniemen kaupungin omalta Asuminen-sivulta, asuntopulan luvut Ylen uutisista. Tarkistettu 15.11.2026.',
    intro: [
      'Rovaniemellä asuu 66 191 ihmistä (Tilastokeskus 31.12.2025), ja yksiöistä on kova kilpailu. Opiskelija-asuntosäätiö DAS sai kesällä 2026 noin 550 kiireellistä hakemusta, 15 prosenttia enemmän kuin vuotta aiemmin, ja lähes 90 prosenttia hakijoista halusi yksiön. Lisäksi kaupungin yksiöitä lyhytvuokrataan talvisesongiksi matkailijoille (Yle 27.7.2026). DAS:n toimitusjohtajan mukaan elo–syyskuussa asuntoa ei pystytä tarjoamaan kaikille hakijoille.',
      'Rekrytointiyhtiö, joka toi Lappiin noin 250 työntekijää, majoitti heitä Rovaniemellä kymmeneen eri paikkaan (Yle 9.3.2026). Kausityöntekijät, opiskelijat ja matkailijat hakevat siis samoja pieniä asuntoja.',
      'Hyvä uutinen on hinta: Rovaniemen keskineliövuokra 14,63 €/m² on alle koko maan keskiarvon 15,99 (Tilastokeskus 2026Q3). Alla luvut asuntokoon mukaan ja kanavat, joista asuntoa haetaan.',
    ],
    sections: [
      {
        id: 'hinnat',
        kicker: 'Mitä vuokra maksaa',
        h2: 'Rovaniemen neliövuokrat, heinä–syyskuu 2026.',
        table: {
          caption: 'Keskineliövuokra €/m²/kk, vapaarahoitteiset vuokra-asunnot, Rovaniemi 2026Q3',
          head: ['', 'Kaikki vuokrat', 'Uudet vuokrat', 'Koko maa'],
          rows: [
            ['Yksiöt', '18,63', '20,14', '20,49'],
            ['Kaksiot', '14,40', '16,40', '15,07'],
            ['Kolmiot ja isommat', '12,29', '13,66', '13,98'],
            ['Kaikki asunnot', '14,63', '15,93', '15,99'],
          ],
          foot: 'Tilastokeskus, vuokrat 2026Q3, taulukko 15fa. Uudet vuokrasuhteet = neljänneksellä alkaneet sopimukset eli se, mitä vapaista asunnoista juuri nyt pyydetään.',
        },
        paras: [
          '<strong>Esimerkit:</strong> 30 m²:n yksiö noin 560 €/kk (18,63 × 30), uudessa sopimuksessa noin 600 €/kk (20,14 × 30); 50 m²:n kaksio noin 720 €/kk (14,40 × 50); 75 m²:n kolmio noin 920 €/kk (12,29 × 75). Vesi ja sähkö tulevat yleensä päälle.',
          'Uusien vuokrasuhteiden yksiöhinta 20,14 €/m² on 1,51 euroa (8 %) korkeampi kuin Rovaniemen kaikkien yksiöiden keskihinta 18,63: juuri nyt vapautuva yksiö maksaa enemmän kuin jo vuokralla oleva. Koko maan keskiarvoon verrattuna Rovaniemi on halvempi kaikissa asuntokokoissa.',
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
        lead: 'Rovaniemen kaupungin Asuminen-sivu listaa vuokranantajat ja hakupalvelut; sivu ei nimeä kaupungin omaa vuokra-asuntoyhtiötä.',
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
            body: 'Domus Arctica -säätiöllä on noin 1 700 asuntoa, joista 700 yksiötä ja 460 kaksiota, ja keskivuokra 12,50 €/m² (Yle 27.7.2026). Haku on jatkuva, hakemus on voimassa kolme kuukautta ja uudet opiskelijat ovat etusijalla elo–syyskuussa. Hakea voi, jos opiskelee Rovaniemellä perusopetuksen jälkeisessä oppilaitoksessa.',
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
            href: 'https://lumo.fi/vuokra-asunnot/Rovaniemi',
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
            title: 'NAL Rovaniemi: alle 30-vuotiaille',
            body: 'Nuorisoasuntoliiton Rovaniemen yhdistys tarjoaa nuorisoasuntoja alle 30-vuotiaille (kaupungin listaus). Vaihtoehto, kun DAS ei ole mahdollinen eikä opiskelijastatusta ole.',
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
          '<strong>Elo–syyskuu</strong> on tiukin: DAS ei pysty tarjoamaan asuntoa kaikille hakijoille, ja vapailla markkinoilla yksiöitä on vähän (Yle 27.7.2026).',
          '<strong>Marras–joulukuu:</strong> osa yksiöistä on lyhytvuokrattu matkailijoille talvisesongiksi. Määräaikaiset sopimukset päättyvät usein lokakuun lopussa (Yle 27.7.2026).',
          '<strong>Keväällä</strong> vapautuvat talvisesongiksi lyhytvuokratut yksiöt.',
          '<strong>Vakuus</strong> on enintään kolmen kuukauden vuokra (laki asuinhuoneiston vuokrauksesta 8 §), ja 1.10.2026 alkaen se on palautettava viimeistään 14 päivän kuluessa vuokrasuhteen päättymisestä (Rakli).',
        ],
      },
    ],
    faqs: [
      {
        q: 'Paljonko yksiö maksaa Rovaniemellä?',
        a: 'Tilastokeskuksen mukaan 18,63 €/m² kaikissa vuokrasuhteissa ja 20,14 €/m² uusissa (2026Q3). 30 m²:n yksiö on siis noin 560–600 €/kk ilman sähköä.',
      },
      {
        q: 'Onko Rovaniemellä vaikea saada vuokra-asuntoa?',
        a: 'Yksiöitä on vaikea saada elo–syyskuussa: DAS ei pysty tarjoamaan asuntoa kaikille hakijoille (Yle 27.7.2026), ja vapailla markkinoilla yksiöitä on vähän. Kaksioita ja kolmioita on helpompi löytää.',
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
      'Renting a flat in Rovaniemi: rent per m² (Statistics Finland 2026), landlords listed by the city, DAS for students, Kela housing allowance and when to apply.',
    breadcrumb: 'Rovaniemi',
    hero: {
      eyebrow: 'Rovaniemi, 66,191 residents',
      title: 'Rentals in Rovaniemi.',
      subtitle:
        'Lapland’s largest city, 66,191 residents. What rent costs, who you apply to and when.',
    },
    authorNote:
      'Rents per m² from Statistics Finland (July–September 2026), landlords from the City of Rovaniemi’s own housing page, shortage figures from Yle. Checked 15 November 2026.',
    intro: [
      'Rovaniemi has 66,191 residents (Statistics Finland, 31 Dec 2025) and fierce competition for studios. The student housing foundation DAS received about 550 urgent applications in summer 2026, 15 percent more than a year earlier, and nearly 90 percent of applicants wanted a studio. On top of that, the city’s studios are let short-term to tourists for the winter season (Yle, 27 Jul 2026). According to DAS’s managing director, the foundation cannot offer a flat to every applicant in August and September.',
      'A recruitment company that brought about 250 workers to Lapland housed them in some ten different places in Rovaniemi (Yle, 9 Mar 2026). Seasonal workers, students and tourists are all after the same small flats.',
      'The good news is the price: Rovaniemi’s average rent of €14.63 per m² is below the national average of €15.99 (Statistics Finland 2026Q3). Below, the figures by flat size and the channels to apply through.',
    ],
    sections: [
      {
        id: 'prices',
        kicker: 'What rent costs',
        h2: 'Rovaniemi rents per m², July–September 2026.',
        table: {
          caption: 'Average rent €/m²/month, free-market rental flats, Rovaniemi 2026Q3',
          head: ['', 'All rents', 'New rents', 'Whole country'],
          rows: [
            ['Studios', '18.63', '20.14', '20.49'],
            ['Two-room flats', '14.40', '16.40', '15.07'],
            ['Three rooms and larger', '12.29', '13.66', '13.98'],
            ['All flats', '14.63', '15.93', '15.99'],
          ],
          foot: 'Statistics Finland, rents 2026Q3, table 15fa. New tenancies = contracts that started during the quarter, i.e. what free flats are being asked right now.',
        },
        paras: [
          '<strong>Examples:</strong> a 30 m² studio about €560 a month (18.63 × 30), in a new tenancy about €600 (20.14 × 30); a 50 m² two-room flat about €720 (14.40 × 50); a 75 m² three-room flat about €920 (12.29 × 75). Water and electricity usually come on top.',
          'The new-tenancy studio price of €20.14 per m² is €1.51 (8 %) above the €18.63 average for all studios in Rovaniemi: a studio coming free right now costs more than one already let. Against the national average, Rovaniemi is cheaper in every flat size.',
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
        lead: 'The City of Rovaniemi’s housing page lists the landlords and search services; it does not name a municipal housing company of its own.',
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
            body: 'The Domus Arctica Foundation has about 1,700 flats, 700 of them studios and 460 two-room flats, at an average rent of €12.50 per m² (Yle, 27 Jul 2026). Applications are continuous, valid for three months, and new students have priority in August and September. You can apply if you study in Rovaniemi at a post-comprehensive institution.',
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
            title: 'NAL Rovaniemi: under 30',
            body: 'The Rovaniemi branch of the Finnish Youth Housing Association offers youth housing for under-30s (city listing). An option when DAS is not possible and you are not a student.',
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
          '<strong>August–September</strong> is the tightest: DAS cannot house every applicant, and free-market studios are scarce (Yle, 27 Jul 2026).',
          '<strong>November–December:</strong> some studios are let short-term to tourists for the winter season. Fixed-term contracts often end in late October (Yle, 27 Jul 2026).',
          '<strong>In spring</strong>, studios let for the winter season come back onto the market.',
          '<strong>The deposit</strong> is at most three months’ rent (Act on Residential Leases, section 8), and from 1 October 2026 it must be returned within 14 days of the tenancy ending (Rakli).',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much is a studio in Rovaniemi?',
        a: 'According to Statistics Finland, €18.63 per m² across all tenancies and €20.14 per m² in new ones (2026Q3). A 30 m² studio is therefore about €560–600 a month before electricity.',
      },
      {
        q: 'Is it hard to find a rental in Rovaniemi?',
        a: 'Studios are hard to get in August–September: DAS cannot house every applicant (Yle, 27 Jul 2026), and free-market studios are scarce. Two- and three-room flats are easier.',
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
