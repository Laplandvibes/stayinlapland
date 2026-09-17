import type { HousingCopyMap } from '../types';
import { pickSources } from '../sources';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'inari', 'ahvl', 'rakli'] as const;

/** Mitattu kysyntä (OpenSEO 18.9.2026, fi/2246): "vuokra-asunto ivalo" 590/kk. */
export const TOWN_IVALO_INARI: HousingCopyMap = {
  fi: {
    metaTitle: 'Vuokra-asunnot Ivalo ja Inari: kunnan yhtiö ja yksityiset',
    metaDescription:
      'Vuokra-asunnot Ivalossa, Inarissa ja Saariselällä: Inarin Vuokra-asunnot Oy:n yli 500 asuntoa, kunnan listaamat yksityiset vuokranantajat, Lapin neliövuokrat ja Kelan tuki.',
    breadcrumb: 'Ivalo ja Inari',
    hero: {
      eyebrow: 'Inarin kunta · 7 244 asukasta · Ivalo · Inari · Saariselkä',
      title: 'Vuokra-asunnot Ivalo ja Inari.',
      subtitle:
        'Suomen pohjoisin vuokramarkkina: kunnan oma yhtiö, muutama yksityinen vuokranantaja ja Saariselän kausi. Mistä aloittaa.',
    },
    authorNote:
      'Inarin Vuokra-asunnot Oy:n ja yksityisten vuokranantajien tiedot Inarin kunnan omalta Asuminen-sivulta, väkiluku Tilastokeskukselta, neliövuokrat Tilastokeskuksen vuokratilastosta (Lapin maakunta 2026Q2). Tarkistettu 17.9.2026.',
    intro: [
      'Inarin kunnassa asuu 7 244 ihmistä (Tilastokeskus 31.12.2025), ja kunnan mukaan kiinnostus asumiseen kunnassa on lisääntynyt: siksi kunta on koonnut sivulleen listan vuokra-asuntoja tarjoavista toimijoista (inari.fi).',
      'Kunnan oma yhtiö Inarin Vuokra-asunnot Oy vuokraa yli 500 asuntoa Ivalossa, Inarissa, Saariselällä, Nellimissä ja Sevettijärvellä, yksiöistä perheasuntoihin. Yksityisiä vuokranantajia kunnan listalla ovat Bilto Oy, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg Oy ja Uni Kodit (inari.fi).',
      'Tilastokeskus ei julkaise Inarista omaa keskineliövuokraa, joten alla on Lapin maakunnan luku. Saariselän kausityöntekijöiden asuminen on omalla sivullaan.',
    ],
    sections: [
      {
        id: 'kanavat',
        kicker: 'Keneltä asuntoa haetaan',
        h2: 'Kunnan yhtiö ja kunnan lista.',
        band: true,
        cards: [
          {
            title: 'Inarin Vuokra-asunnot Oy',
            body: 'Kunnan vuokrayhtiö: yli 500 asuntoa Ivalossa, Inarissa, Saariselällä, Nellimissä ja Sevettijärvellä. Asunnot sijaitsevat hyvien kulkuyhteyksien päässä peruspalveluista. Vapaat asunnot ja hakemus yhtiön omilla sivuilla.',
            href: 'https://inarinvuokra-asunnot.fi/',
            linkLabel: 'inarinvuokra-asunnot.fi',
            event: 'inari_company',
          },
          {
            title: 'Inarin kunta: yksityiset vuokranantajat',
            body: 'Kunnan Asuminen-sivu listaa Bilto Oy:n, Ivalon vuokra-asunnot, IvaloCenterin, Rakennusliike Holmberg Oy:n ja Uni Kodit yhteystietoineen sekä Sodankylä–Inari–Utsjoki-alueen vuokra-asuntoryhmän Facebookissa. Lisätietoa saa myös osoitteesta inari@inari.fi.',
            href: 'https://www.inari.fi/fi/palvelut/asuminen.html',
            linkLabel: 'inari.fi: Asuminen',
            event: 'inari_city',
          },
          {
            title: 'Oikotie ja Vuokraovi',
            body: 'Yksityisten ilmoitukset kunnalla Inari; Ivalon ja Saariselän kohteet ovat samassa haussa. Ilmoituksia on vähän, joten hakuvahti kannattaa laittaa päälle.',
            href: 'https://asunnot.oikotie.fi/vuokra-asunnot/inari',
            linkLabel: 'Oikotie: vuokra-asunnot Inari',
            event: 'oikotie',
          },
          {
            title: 'Saariselän kausityöntekijälle',
            body: 'Saariselän työnantajat majoittavat henkilökuntaa myös itse, ja kunnan yhtiöllä on asuntoja Saariselällä. Kysy asumisesta jo haastattelussa; koko kuvio kausityöntekijän sivulla.',
            href: '/seasonal-worker-housing',
            linkLabel: 'Kausityöntekijän asuminen',
            event: 'seasonal_page',
          },
        ],
      },
      {
        id: 'hinnat',
        kicker: 'Mitä vuokra maksaa',
        h2: 'Lapin maakunnan neliövuokrat, huhti–kesäkuu 2026.',
        table: {
          caption: 'Keskineliövuokra €/m²/kk, vapaarahoitteiset vuokra-asunnot, 2026Q2',
          head: ['', 'Lappi (maakunta)', 'Koko maa'],
          rows: [
            ['Yksiöt', '17,30', '20,46'],
            ['Kaksiot', '12,85', '15,04'],
            ['Kolmiot ja isommat', '10,97', '13,92'],
            ['Kaikki asunnot', '13,10', '15,94'],
          ],
          foot: 'Tilastokeskus, vuokrat 2026Q2, taulukko 15fa. Inarista ei julkaista omaa lukua.',
        },
      },
      {
        id: 'asumistuki',
        kicker: 'Kelan asumistuki',
        h2: 'Inari on kuntaryhmää III.',
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
        id: 'sopimus',
        kicker: 'Sopimus',
        h2: 'Vakuus ja sen palautus.',
        bullets: [
          'Vakuus on enintään kolmen kuukauden vuokra (laki asuinhuoneiston vuokrauksesta 8 §).',
          '1.10.2026 alkaen vakuus on palautettava tai sen pidättämisestä ilmoitettava kirjallisesti viimeistään 14 päivän kuluessa vuokrasuhteen päättymisestä (Rakli).',
        ],
      },
    ],
    faqs: [
      {
        q: 'Mistä Ivalosta saa vuokra-asunnon?',
        a: 'Kunnan yhtiöltä Inarin Vuokra-asunnot Oy:ltä, jolla on yli 500 asuntoa Ivalossa, Inarissa ja Saariselällä, tai kunnan listaamilta yksityisiltä vuokranantajilta (Bilto, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg, Uni Kodit). Portaaleissa ilmoituksia on vähän.',
      },
      {
        q: 'Onko Saariselällä vuokra-asuntoja?',
        a: 'Kunnan yhtiöllä on asuntoja myös Saariselällä, ja työnantajat majoittavat kausihenkilökuntaa itse. Vapailla markkinoilla Saariselän asunnot ovat pääosin loma-asuntoja.',
      },
    ],
    cta: {
      partner: 'hotels',
      kicker: 'Ensimmäiset yöt',
      h2: 'Ennen avaimia.',
      lead: 'Kumppanihaku näyttää Ivalon ja Saariselän vapaat huoneet päivän hinnoin.',
      chips: [
        { label: 'Ivalo', destination: 'Ivalo', sid: 'rentals_ivalo_first_weeks' },
        { label: 'Saariselkä', destination: 'Saariselkä', sid: 'rentals_saariselka_first_weeks' },
      ],
    },
    sources: pickSources('fi', SOURCES),
  },
  en: {
    metaTitle: 'Rentals in Ivalo and Inari: Municipal Company and Private Landlords',
    metaDescription:
      'Renting in Ivalo, Inari and Saariselkä: the municipal company Inarin Vuokra-asunnot Oy with over 500 flats, the private landlords listed by the municipality, Lapland rents per m² and Kela support.',
    breadcrumb: 'Ivalo and Inari',
    hero: {
      eyebrow: 'Municipality of Inari · 7,244 residents · Ivalo · Inari · Saariselkä',
      title: 'Rentals in Ivalo and Inari.',
      subtitle:
        'Finland’s northernmost rental market: one municipal company, a few private landlords and the Saariselkä season. Where to start.',
    },
    authorNote:
      'Inarin Vuokra-asunnot Oy and the private landlords from the Municipality of Inari’s own housing page, population from Statistics Finland, rents per m² from Statistics Finland (Lapland region 2026Q2). Checked 17 September 2026.',
    intro: [
      'The municipality of Inari has 7,244 residents (Statistics Finland, 31 Dec 2025), and according to the municipality interest in living there has grown, which is why it has compiled a list of rental providers on its page (inari.fi).',
      'The municipal company Inarin Vuokra-asunnot Oy lets over 500 flats in Ivalo, Inari, Saariselkä, Nellim and Sevettijärvi, from studios to family flats. The private landlords on the municipality’s list are Bilto Oy, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg Oy and Uni Kodit (inari.fi).',
      'Statistics Finland publishes no separate rent figure for Inari, so the Lapland regional figure is shown below. Housing for Saariselkä’s seasonal workers has its own page.',
    ],
    sections: [
      {
        id: 'channels',
        kicker: 'Who to apply to',
        h2: 'The municipal company and the municipality’s list.',
        band: true,
        cards: [
          {
            title: 'Inarin Vuokra-asunnot Oy',
            body: 'The municipal housing company: over 500 flats in Ivalo, Inari, Saariselkä, Nellim and Sevettijärvi, within easy reach of basic services. Vacancies and applications on the company’s own site.',
            href: 'https://inarinvuokra-asunnot.fi/en/home/',
            linkLabel: 'inarinvuokra-asunnot.fi',
            event: 'inari_company',
          },
          {
            title: 'Municipality of Inari: private landlords',
            body: 'The municipality’s housing page lists Bilto Oy, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg Oy and Uni Kodit with contact details, plus the Sodankylä–Inari–Utsjoki rental group on Facebook. More information from inari@inari.fi.',
            href: 'https://www.inari.fi/fi/palvelut/asuminen.html',
            linkLabel: 'inari.fi: Housing',
            event: 'inari_city',
          },
          {
            title: 'Oikotie and Vuokraovi',
            body: 'Private listings under the municipality Inari; Ivalo and Saariselkä homes are in the same search. Listings are few, so set up a search alert.',
            href: 'https://asunnot.oikotie.fi/vuokra-asunnot/inari',
            linkLabel: 'Oikotie: rentals in Inari',
            event: 'oikotie',
          },
          {
            title: 'For Saariselkä’s seasonal workers',
            body: 'Saariselkä employers also house staff themselves, and the municipal company has flats in Saariselkä. Ask about housing at the interview; the whole picture is on the seasonal workers’ page.',
            href: '/seasonal-worker-housing',
            linkLabel: 'Seasonal worker housing',
            event: 'seasonal_page',
          },
        ],
      },
      {
        id: 'prices',
        kicker: 'What rent costs',
        h2: 'Lapland regional rents per m², April–June 2026.',
        table: {
          caption: 'Average rent €/m²/month, free-market rental flats, 2026Q2',
          head: ['', 'Lapland (region)', 'Whole country'],
          rows: [
            ['Studios', '17.30', '20.46'],
            ['Two-room flats', '12.85', '15.04'],
            ['Three rooms and larger', '10.97', '13.92'],
            ['All flats', '13.10', '15.94'],
          ],
          foot: 'Statistics Finland, rents 2026Q2, table 15fa. No separate figure is published for Inari.',
        },
      },
      {
        id: 'housing-allowance',
        kicker: 'Kela housing allowance',
        h2: 'Inari is in group III.',
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
        id: 'contract',
        kicker: 'The contract',
        h2: 'The deposit and its return.',
        bullets: [
          'The deposit is at most three months’ rent (Act on Residential Leases, section 8).',
          'From 1 October 2026 the deposit must be returned, or its retention explained in writing, within 14 days of the tenancy ending (Rakli).',
        ],
      },
    ],
    faqs: [
      {
        q: 'Where do I find a rental in Ivalo?',
        a: 'From the municipal company Inarin Vuokra-asunnot Oy, which has over 500 flats in Ivalo, Inari and Saariselkä, or from the private landlords the municipality lists (Bilto, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg, Uni Kodit). The portals carry few listings.',
      },
      {
        q: 'Are there rentals in Saariselkä?',
        a: 'The municipal company has flats in Saariselkä too, and employers house seasonal staff themselves. On the open market Saariselkä’s flats are mostly holiday homes.',
      },
    ],
    cta: {
      partner: 'hotels',
      kicker: 'The first nights',
      h2: 'Before the keys.',
      lead: 'The partner search shows free rooms in Ivalo and Saariselkä at today’s prices.',
      chips: [
        { label: 'Ivalo', destination: 'Ivalo', sid: 'rentals_ivalo_first_weeks' },
        { label: 'Saariselkä', destination: 'Saariselkä', sid: 'rentals_saariselka_first_weeks' },
      ],
    },
    sources: pickSources('en', SOURCES),
  },
};
