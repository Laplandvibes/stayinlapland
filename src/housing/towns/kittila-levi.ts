import type { HousingCopyMap } from '../types';
import { pickSources } from '../sources';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'kittila', 'yle2023', 'yle2017', 'ahvl', 'rakli'] as const;

/** Mitattu kysyntä (OpenSEO 18.9.2026, fi/2246): "vuokra-asunnot kittilä" 880/kk, "vuokra-asunto kittilä" 880, "vuokra-asunnot levi" 320. */
export const TOWN_KITTILA_LEVI: HousingCopyMap = {
  fi: {
    metaTitle: 'Vuokra-asunnot Kittilä ja Levi: kunnan asunnot ja kausivuokra',
    metaDescription:
      'Vuokra-asunnot Kittilässä ja Levillä: Kittilän Vuokratalot Oy, vapaa-ajan asuntojen kausivuokrat, työnantajan asunnot kausityöntekijöille, Lapin neliövuokrat ja Kelan tuki.',
    breadcrumb: 'Kittilä ja Levi',
    hero: {
      eyebrow: 'Kittilä, 6 973 asukasta',
      title: 'Vuokra-asunnot Kittilä ja Levi.',
      subtitle:
        'Lapin nopeimmin kasvava kunta ja sen hiihtokeskus, jossa sama asunto maksaa kesällä kuukausivuokran ja talvella viikkohinnan. Mistä asunto haetaan ja milloin.',
    },
    authorNote:
      'Väkiluku ja kasvu Tilastokeskukselta, Kittilän Vuokratalot Oy kunnan omalta sivulta, Levin kausihinnat Ylen uutisesta 25.5.2023. Tarkistettu 17.9.2026.',
    intro: [
      'Kittilän väkiluku oli 6 973 vuoden 2025 lopussa, ja se kasvoi 2,0 prosenttia vuodessa, eniten Lapin kunnista (Tilastokeskus). Kasvun moottori on Levi, jonne palkataan talvikaudeksi runsaat 2 000 kausityöntekijää (Levin Matkailu Oy:n arvio, Yle 25.10.2017).',
      'Levin vuokramarkkina elää kauden mukaan: 80 neliön alppimökki lähellä keskustaa maksoi 750 euroa kuukaudessa touko–marraskuussa, 2 000 euroa viikossa sesongissa ja ympärivuotisena 1 650 euroa kuukaudessa (Yle 25.5.2023). Majoituskäyttöön kaavoitettuun vapaa-ajan asuntoon ei myöskään voi rekisteröidä osoitetta.',
      'Vakituinen vuokra-asunto löytyy todennäköisemmin Kittilän kirkonkylästä kuin Levin keskustasta. Kunnan omistamia asuntoja välittää Kittilän Vuokratalot Oy, ja hakemus on voimassa kolme kuukautta (kittila.fi).',
    ],
    sections: [
      {
        id: 'kanavat',
        kicker: 'Keneltä asuntoa haetaan',
        h2: 'Kunnan yhtiö, portaalit ja Levin ryhmä.',
        band: true,
        cards: [
          {
            title: 'Kittilän Vuokratalot Oy',
            body: 'Välittää kunnan omistamia vuokra-asuntoja. Toimisto on kunnantalon ala-aulassa (Valtatie 15, 99100 Kittilä). Hakemus on voimassa kolme kuukautta, ja sen voi jättää, vaikka vapaita asuntoja ei juuri nyt olisi: yhtiö ottaa yhteyttä, kun sopiva asunto vapautuu.',
            href: 'https://kittila.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot',
            linkLabel: 'kittila.fi: Vuokra-asunnot',
            event: 'kittila_city',
          },
          {
            title: 'Oikotie, Vuokraovi ja TA-Asunnot',
            body: 'Yksityisten ja välittäjien ilmoitukset kunnalla Kittilä; Levin kohteet ovat samassa haussa. TA-Asunnoilla on omia vapaita vuokra-asuntoja Kittilässä.',
            href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kittil%C3%A4',
            linkLabel: 'Oikotie: vuokra-asunnot Kittilä',
            event: 'oikotie',
          },
          {
            title: 'Työnantajan asunto',
            body: 'Hiihtokeskuksen työnantajat vuokraavat rivitaloja ja vapaa-ajan asuntoja henkilökunnalle koko kaudeksi, ja vuokra peritään palkasta. Kysy asumisesta kirjallisesti jo työtarjouksen yhteydessä. Koko kuvio kausityöntekijän sivulla.',
            href: '/seasonal-worker-housing',
            linkLabel: 'Kausityöntekijän asuminen',
            event: 'seasonal_page',
          },
          {
            title: 'Levin asuntohaku Facebookissa',
            body: 'Nopein kanava tunturikylässä ja se, josta kausityöntekijät asuntonsa usein löytävät. Ei kenenkään takuuta: älä maksa vakuutta ennen näyttöä, ja pyydä sopimus kirjallisena.',
            href: 'https://www.facebook.com/',
            linkLabel: 'Facebook: hae ryhmää "Levi asunnot"',
            event: 'facebook',
          },
        ],
      },
      {
        id: 'hinnat',
        kicker: 'Mitä vuokra maksaa',
        h2: 'Maakunnan luku ja Levin poikkeus.',
        table: {
          caption: 'Keskineliövuokra €/m²/kk, vapaarahoitteiset vuokra-asunnot, 2026Q2',
          head: ['', 'Lappi (maakunta)', 'Koko maa'],
          rows: [
            ['Yksiöt', '17,30', '20,46'],
            ['Kaksiot', '12,85', '15,04'],
            ['Kolmiot ja isommat', '10,97', '13,92'],
            ['Kaikki asunnot', '13,10', '15,94'],
          ],
          foot: 'Tilastokeskus, vuokrat 2026Q2, taulukko 15fa. Kittilästä ei julkaista omaa lukua, ja Levin kausivuokrat eivät ole tilastossa lainkaan.',
        },
        paras: [
          '<strong>Levin esimerkki (Yle 25.5.2023):</strong> 80 m² alppimökki 750 €/kk touko–marraskuussa = 9,40 €/m², sesongissa 2 000 €/viikko, ympärivuotisena 1 650 €/kk = 20,60 €/m². Sama asunto on kesällä maakunnan keskiarvoa halvempi ja ympärivuotisena koko maan yksiöhintaa kalliimpi.',
        ],
      },
      {
        id: 'asumistuki',
        kicker: 'Kelan asumistuki',
        h2: 'Kittilä on kuntaryhmää III.',
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
          foot: 'Kela, yleinen asumistuki 2026. Tuki on enintään 70 % hyväksyttävistä asumismenoista. Vapaa-ajan asunnossa ilman rekisteröityä osoitetta tuen edellytykset eivät täyty.',
        },
      },
      {
        id: 'milloin',
        kicker: 'Milloin hakea',
        h2: 'Kesällä, ennen kuin viikkomyynti alkaa.',
        bullets: [
          'Vapaa-ajan asuntojen kuukausivuokraus loppuu marraskuussa, kun viikkomyynti alkaa (Yle 25.5.2023). Talvikaudeksi asunto haetaan kesällä.',
          'Kunnan vuokrayhtiön hakemus on voimassa kolme kuukautta (kittila.fi); jätä se ennen kauden alkua ja uusi tarvittaessa.',
          'Vakuus on enintään kolmen kuukauden vuokra (laki asuinhuoneiston vuokrauksesta 8 §), ja 1.10.2026 alkaen se palautetaan viimeistään 14 päivässä vuokrasuhteen päättymisestä (Rakli).',
        ],
      },
    ],
    faqs: [
      {
        q: 'Mistä Leviltä saa vuokra-asunnon talveksi?',
        a: 'Todennäköisimmin työnantajalta: hiihtokeskuksen yritykset vuokraavat rivitaloja ja vapaa-ajan asuntoja henkilökunnalle koko kaudeksi. Vapailta markkinoilta Levin asunnot myydään talvella viikoittain matkailijoille (Yle 25.5.2023), joten kuukausivuokralle pääsee lähinnä touko–marraskuussa. Kunnan asuntoja on Kittilän kirkonkylässä.',
      },
      {
        q: 'Miten Kittilän kunnan vuokra-asuntoa haetaan?',
        a: 'Kittilän Vuokratalot Oy:n hakemuksella, joka on voimassa kolme kuukautta. Toimisto on kunnantalon ala-aulassa, Valtatie 15. Hakemuksen voi jättää, vaikka vapaita asuntoja ei juuri nyt olisi (kittila.fi).',
      },
    ],
    cta: {
      partner: 'hotels',
      kicker: 'Ensimmäiset yöt',
      h2: 'Ennen kuin asunto vapautuu.',
      lead: 'Kumppanihaku näyttää Levin ja Kittilän vapaat huoneet ja huoneistot päivän hinnoin.',
      chips: [
        { label: 'Levi', destination: 'Levi', sid: 'rentals_levi_first_weeks' },
        { label: 'Kittilä', destination: 'Kittilä', sid: 'rentals_kittila_first_weeks' },
      ],
    },
    sources: pickSources('fi', SOURCES),
  },
  en: {
    metaTitle: 'Rentals in Kittilä and Levi: Municipal Flats and Seasonal Leases',
    metaDescription:
      'Renting in Kittilä and Levi: the municipal company Kittilän Vuokratalot Oy, seasonal rents on holiday apartments, staff housing for seasonal workers, Lapland rents per m² and Kela support.',
    breadcrumb: 'Kittilä and Levi',
    hero: {
      eyebrow: 'Kittilä, 6,973 residents',
      title: 'Rentals in Kittilä and Levi.',
      subtitle:
        'Lapland’s fastest-growing municipality and its ski resort, where the same flat costs a monthly rent in summer and a weekly rate in winter. Where to apply and when.',
    },
    authorNote:
      'Population and growth from Statistics Finland, Kittilän Vuokratalot Oy from the municipality’s own page, Levi seasonal prices from Yle, 25 May 2023. Checked 17 September 2026.',
    intro: [
      'Kittilä had 6,973 residents at the end of 2025 and grew 2.0 percent in a year, the most of any Lapland municipality (Statistics Finland). The engine is Levi, which hires well over 2,000 seasonal workers for the winter season (Levin Matkailu Oy’s estimate, Yle, 25 Oct 2017).',
      'Levi’s rental market follows the season: an 80 m² alpine cabin near the centre cost €750 a month from May to November, €2,000 a week in high season and €1,650 a month year-round (Yle, 25 May 2023). You also cannot register your address at a holiday apartment zoned for accommodation.',
      'A permanent rental is likelier in Kittilä village than in Levi centre. The municipality’s flats are let by Kittilän Vuokratalot Oy, and an application is valid for three months (kittila.fi).',
    ],
    sections: [
      {
        id: 'channels',
        kicker: 'Who to apply to',
        h2: 'The municipal company, the portals and the Levi group.',
        band: true,
        cards: [
          {
            title: 'Kittilän Vuokratalot Oy',
            body: 'Lets the municipality’s own rental flats. The office is on the ground floor of the municipal hall (Valtatie 15, 99100 Kittilä). An application is valid for three months and can be filed even when nothing is free right now: the company gets in touch when a suitable flat comes up.',
            href: 'https://kittila.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot',
            linkLabel: 'kittila.fi: Rental housing',
            event: 'kittila_city',
          },
          {
            title: 'Oikotie, Vuokraovi and TA-Asunnot',
            body: 'Private and agency listings under the municipality Kittilä; Levi homes are in the same search. TA-Asunnot has its own vacant rental flats in Kittilä.',
            href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kittil%C3%A4',
            linkLabel: 'Oikotie: rentals in Kittilä',
            event: 'oikotie',
          },
          {
            title: 'Staff housing',
            body: 'Resort employers rent row houses and holiday apartments for staff for the whole season and take the rent from your pay. Ask about housing in writing with the job offer. The whole picture is on the seasonal workers’ page.',
            href: '/seasonal-worker-housing',
            linkLabel: 'Seasonal worker housing',
            event: 'seasonal_page',
          },
          {
            title: 'The Levi housing group on Facebook',
            body: 'The fastest channel in the fell village and where seasonal workers often find their flat. Nobody vouches for it: never pay a deposit before a viewing, and get the contract in writing.',
            href: 'https://www.facebook.com/',
            linkLabel: 'Facebook: search for the Levi housing group',
            event: 'facebook',
          },
        ],
      },
      {
        id: 'prices',
        kicker: 'What rent costs',
        h2: 'The regional figure and the Levi exception.',
        table: {
          caption: 'Average rent €/m²/month, free-market rental flats, 2026Q2',
          head: ['', 'Lapland (region)', 'Whole country'],
          rows: [
            ['Studios', '17.30', '20.46'],
            ['Two-room flats', '12.85', '15.04'],
            ['Three rooms and larger', '10.97', '13.92'],
            ['All flats', '13.10', '15.94'],
          ],
          foot: 'Statistics Finland, rents 2026Q2, table 15fa. No separate figure is published for Kittilä, and Levi’s seasonal rents are not in the statistics at all.',
        },
        paras: [
          '<strong>The Levi example (Yle, 25 May 2023):</strong> an 80 m² alpine cabin at €750 a month from May to November = €9.40 per m², €2,000 a week in high season, €1,650 a month year-round = €20.60 per m². The same flat is cheaper than the regional average in summer and dearer than the national studio price year-round.',
        ],
      },
      {
        id: 'housing-allowance',
        kicker: 'Kela housing allowance',
        h2: 'Kittilä is in group III.',
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
          foot: 'Kela, general housing allowance 2026. The allowance is at most 70 % of accepted housing costs. In a holiday apartment without a registered address the conditions are not met.',
        },
      },
      {
        id: 'when',
        kicker: 'When to apply',
        h2: 'In summer, before weekly sales begin.',
        bullets: [
          'Monthly lets of holiday apartments end in November when weekly sales begin (Yle, 25 May 2023). For the winter season, find the flat in summer.',
          'The municipal company’s application is valid for three months (kittila.fi); file it before the season and renew if needed.',
          'The deposit is at most three months’ rent (Act on Residential Leases, section 8), and from 1 October 2026 it is returned within 14 days of the tenancy ending (Rakli).',
        ],
      },
    ],
    faqs: [
      {
        q: 'Where do I find a winter rental at Levi?',
        a: 'Most likely from your employer: resort companies rent row houses and holiday apartments for staff for the whole season. On the open market Levi’s flats are sold by the week to tourists in winter (Yle, 25 May 2023), so monthly rent is mainly possible from May to November. Municipal flats are in Kittilä village.',
      },
      {
        q: 'How do I apply for a municipal flat in Kittilä?',
        a: 'With the Kittilän Vuokratalot Oy application, valid for three months. The office is on the ground floor of the municipal hall, Valtatie 15. You can apply even when nothing is free right now (kittila.fi).',
      },
    ],
    cta: {
      partner: 'hotels',
      kicker: 'The first nights',
      h2: 'Before the flat is free.',
      lead: 'The partner search shows free rooms and apartments at Levi and in Kittilä at today’s prices.',
      chips: [
        { label: 'Levi', destination: 'Levi', sid: 'rentals_levi_first_weeks' },
        { label: 'Kittilä', destination: 'Kittilä', sid: 'rentals_kittila_first_weeks' },
      ],
    },
    sources: pickSources('en', SOURCES),
  },
};
