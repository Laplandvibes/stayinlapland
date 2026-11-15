import type { HousingCopyMap } from '../types';
import { pickSources } from '../sources';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'kittila', 'yle2023', 'yle2017', 'ahvl', 'rakli'] as const;

/** Mitattu kysyntä (OpenSEO 18.9.2026, fi/2246): "vuokra-asunnot kittilä" 880/kk, "vuokra-asunto kittilä" 880, "vuokra-asunnot levi" 320. */
export const TOWN_KITTILA_LEVI: HousingCopyMap = {
  fi: {
    metaTitle: 'Vuokra-asunnot Kittilä ja Levi: kunnan asunnot ja kausivuokra',
    metaDescription:
      'Vuokra-asunnot Kittilässä ja Levillä: Kittilän Vuokratalot Oy, vapaa-ajan asuntojen kausivuokrat, työnantajan asunnot kausityöntekijöille ja Kelan tuki.',
    breadcrumb: 'Kittilä ja Levi',
    hero: {
      eyebrow: 'Kittilä, 6 973 asukasta',
      title: 'Vuokra-asunnot Kittilä ja Levi.',
      subtitle:
        'Yksi Lapin nopeimmin kasvavista kunnista ja sen hiihtokeskus, jossa sama asunto maksaa kesällä kuukausivuokran ja talvella viikkohinnan. Mistä asunto haetaan ja milloin.',
    },
    authorNote:
      'Väkiluku ja kasvu Tilastokeskukselta, Kittilän Vuokratalot Oy kunnan ja yhtiön omilta sivuilta, Levin kausihinnat Ylen uutisesta 25.5.2023. Tarkistettu 15.11.2026.',
    intro: [
      'Kittilän väkiluku oli 6 973 vuoden 2025 lopussa, ja se kasvoi 2,0 prosenttia vuodessa, Lapin kunnista toiseksi eniten: vain Pelkosenniemi kasvoi nopeammin, 2,4 prosenttia (Tilastokeskus). Kasvun moottori on Levi: Levin Matkailu Oy arvioi vuonna 2017, että matkailualueelle palkataan talvikaudeksi reilut 2 000 kausityöntekijää (Yle 25.10.2017).',
      'Levin vuokramarkkina elää kauden mukaan: 80 neliön alppitaloasunto lähellä keskustaa maksoi 750 euroa kuukaudessa touko–marraskuussa, 2 000 euroa viikossa sesongissa ja ympärivuotisena 1 650 euroa kuukaudessa (Yle 25.5.2023). Lomahuoneistoon ei myöskään välttämättä saa virallista osoitetta.',
      'Vakituinen vuokra-asunto löytyy todennäköisemmin Kittilän kirkonkylästä kuin Levin keskustasta. Kunnan omistamia asuntoja välittää Kittilän Vuokratalot Oy, ja hakemus tehdään sähköisesti yhtiön sivuilla (kittila.fi, Kittilän Vuokratalot).',
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
            body: 'Välittää kunnan omistamia vuokra-asuntoja. Toimisto on kunnantalon ala-aulassa (Valtatie 15, 99100 Kittilä). Yhtiö käsittelee vain kotisivujensa kautta tehtyjä sähköisiä hakemuksia, joissa vaaditut liitteet ovat mukana. Hakemuksen voimassaoloaikaa sivuilla ei kerrota, joten kysy se yhtiöltä.',
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
          },
        ],
      },
      {
        id: 'hinnat',
        kicker: 'Mitä vuokra maksaa',
        h2: 'Maakunnan luku ja Levin poikkeus.',
        table: {
          caption: 'Keskineliövuokra €/m²/kk, vapaarahoitteiset vuokra-asunnot, 2026Q3',
          head: ['', 'Lappi (maakunta)', 'Koko maa'],
          rows: [
            ['Yksiöt', '17,25', '20,49'],
            ['Kaksiot', '12,87', '15,07'],
            ['Kolmiot ja isommat', '11,08', '13,98'],
            ['Kaikki asunnot', '13,14', '15,99'],
          ],
          foot: 'Tilastokeskus, vuokrat 2026Q3, taulukko 15fa. Kittilästä ei julkaista omaa lukua, ja Levin kausivuokrat eivät ole tilastossa lainkaan.',
        },
        paras: [
          '<strong>Levin esimerkki (Yle 25.5.2023):</strong> 80 m²:n alppitaloasunto 750 €/kk touko–marraskuussa = 9,38 €/m², sesongissa 2 000 €/viikko, ympärivuotisena 1 650 €/kk = 20,63 €/m². Sama asunto on kesällä maakunnan keskiarvoa halvempi ja ympärivuotisena koko maan yksiöhintaa kalliimpi.',
        ],
      },
      {
        id: 'asumistuki',
        kicker: 'Kelan asumistuki',
        h2: 'Kittilä on Kelan ryhmässä ”muut kunnat”.',
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
          foot: 'Kela, yleinen asumistuki 2026. Tuki on enintään 70 % hyväksyttävistä asumismenoista. Vapaa-ajan asunnossa ilman rekisteröityä osoitetta tuen edellytykset eivät täyty.',
        },
      },
      {
        id: 'milloin',
        kicker: 'Milloin hakea',
        h2: 'Kesällä, ennen kuin viikkovuokrat alkavat.',
        bullets: [
          'Vapaa-ajan asunnon kuukausivuokra on tarjolla vain touko–marraskuussa, ja sesongin ajaksi hinta on viikkovuokra (Yle 25.5.2023). Talvikaudeksi asunto haetaan kesällä.',
          'Jätä kunnan vuokrayhtiön hakemus ennen kauden alkua ja kysy yhtiöltä, kuinka kauan se on voimassa.',
          'Vakuus on enintään kolmen kuukauden vuokra (laki asuinhuoneiston vuokrauksesta 8 §), ja 1.10.2026 alkaen se palautetaan viimeistään 14 päivässä vuokrasuhteen päättymisestä (Rakli).',
        ],
      },
    ],
    faqs: [
      {
        q: 'Mistä Leviltä saa vuokra-asunnon talveksi?',
        a: 'Todennäköisimmin työnantajalta: hiihtokeskuksen yritykset vuokraavat rivitaloja ja vapaa-ajan asuntoja henkilökunnalle koko kaudeksi. Vapailla markkinoilla Levin asunnot vuokrataan talvella viikkohintaan (Yle 25.5.2023), joten kuukausivuokralle pääsee lähinnä touko–marraskuussa. Kunnan yhtiöllä on asuntoja sekä Kittilän kirkonkylässä että Sirkassa Levillä (Kittilän Vuokratalot).',
      },
      {
        q: 'Miten Kittilän kunnan vuokra-asuntoa haetaan?',
        a: 'Kittilän Vuokratalot Oy:n sähköisellä hakemuksella yhtiön sivuilla. Puutteellisia hakemuksia, joista vaaditut liitteet puuttuvat, ei käsitellä. Toimisto on kunnantalon ala-aulassa, Valtatie 15 (kittila.fi, Kittilän Vuokratalot).',
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
    metaTitle: 'Rentals in Kittilä and Levi: Municipal Flats, Seasonal Leases',
    metaDescription:
      'Renting in Kittilä and Levi: the municipal Kittilän Vuokratalot Oy, seasonal rents on holiday apartments, staff housing for seasonal workers and Kela support.',
    breadcrumb: 'Kittilä and Levi',
    hero: {
      eyebrow: 'Kittilä, 6,973 residents',
      title: 'Rentals in Kittilä and Levi.',
      subtitle:
        'One of Lapland’s fastest-growing municipalities and its ski resort, where the same flat costs a monthly rent in summer and a weekly rate in winter. Where to apply and when.',
    },
    authorNote:
      'Population and growth from Statistics Finland, Kittilän Vuokratalot Oy from the municipality’s and the company’s own pages, Levi seasonal prices from Yle, 25 May 2023. Checked 15 November 2026.',
    intro: [
      'Kittilä had 6,973 residents at the end of 2025 and grew 2.0 percent in a year, the second fastest of Lapland’s municipalities: only Pelkosenniemi grew faster, at 2.4 percent (Statistics Finland). The engine is Levi: in 2017 Levin Matkailu Oy estimated that the resort area would hire just over 2,000 seasonal workers for the winter season (Yle, 25 Oct 2017).',
      'Levi’s rental market follows the season: an 80 m² alpine-house flat near the centre cost €750 a month from May to November, €2,000 a week in high season and €1,650 a month year-round (Yle, 25 May 2023). A holiday apartment may not get an official address either.',
      'A permanent rental is likelier in Kittilä village than in Levi centre. The municipality’s flats are let by Kittilän Vuokratalot Oy, and you apply electronically on the company’s site (kittila.fi, Kittilän Vuokratalot).',
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
            body: 'Lets the municipality’s own rental flats. The office is on the ground floor of the municipal hall (Valtatie 15, 99100 Kittilä). The company processes only electronic applications made through its website, with the required attachments. Its pages do not say how long an application stays valid, so ask the company.',
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
          },
        ],
      },
      {
        id: 'prices',
        kicker: 'What rent costs',
        h2: 'The regional figure and the Levi exception.',
        table: {
          caption: 'Average rent €/m²/month, free-market rental flats, 2026Q3',
          head: ['', 'Lapland (region)', 'Whole country'],
          rows: [
            ['Studios', '17.25', '20.49'],
            ['Two-room flats', '12.87', '15.07'],
            ['Three rooms and larger', '11.08', '13.98'],
            ['All flats', '13.14', '15.99'],
          ],
          foot: 'Statistics Finland, rents 2026Q3, table 15fa. No separate figure is published for Kittilä, and Levi’s seasonal rents are not in the statistics at all.',
        },
        paras: [
          '<strong>The Levi example (Yle, 25 May 2023):</strong> an 80 m² alpine-house flat at €750 a month from May to November = €9.38 per m², €2,000 a week in high season, €1,650 a month year-round = €20.63 per m². The same flat is cheaper than the regional average in summer and dearer than the national studio price year-round.',
        ],
      },
      {
        id: 'housing-allowance',
        kicker: 'Kela housing allowance',
        h2: 'Kittilä falls under Kela’s “other municipalities”.',
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
          foot: 'Kela, general housing allowance 2026. The allowance is at most 70 % of accepted housing costs. In a holiday apartment without a registered address the conditions are not met.',
        },
      },
      {
        id: 'when',
        kicker: 'When to apply',
        h2: 'In summer, before weekly rates begin.',
        bullets: [
          'Monthly lets of holiday apartments are available only from May to November, and in high season the price is a weekly rate (Yle, 25 May 2023). For the winter season, find the flat in summer.',
          'File the municipal company’s application before the season and ask the company how long it stays valid.',
          'The deposit is at most three months’ rent (Act on Residential Leases, section 8), and from 1 October 2026 it is returned within 14 days of the tenancy ending (Rakli).',
        ],
      },
    ],
    faqs: [
      {
        q: 'Where do I find a winter rental at Levi?',
        a: 'Most likely from your employer: resort companies rent row houses and holiday apartments for staff for the whole season. On the open market Levi’s flats are let by the week in winter (Yle, 25 May 2023), so monthly rent is mainly possible from May to November. The municipal company has flats both in Kittilä village and in Sirkka at Levi (Kittilän Vuokratalot).',
      },
      {
        q: 'How do I apply for a municipal flat in Kittilä?',
        a: 'With Kittilän Vuokratalot Oy’s electronic application on the company’s site. Incomplete applications without the required attachments are not processed. The office is on the ground floor of the municipal hall, Valtatie 15 (kittila.fi, Kittilän Vuokratalot).',
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
