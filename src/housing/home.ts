import type { Faq, HousingLang, Source } from './types';
import { pickSources } from './sources';
import type { HousingRouteKey } from './labels';

/**
 * Etusivun copy (fi + en).
 *
 * 🔴 18.9.2026 (Vesa): heron alla EI puhuta sivustosta itsestään eikä sen
 * lähteistä. Ensimmäinen ruutu heron jälkeen on se, mitä lukija tuli hakemaan:
 * vuokrat paikkakunnittain kuvakortteina, sitten polut. Sama vika kirjattiin
 * laplandstaysin auditissa 16.9. (kohdat 4 ja 6: "copy puolusteli"). Lähde- ja
 * tarkistusmerkintä kuuluu sivun loppuun lähdelistan viereen.
 */
export type RentalTownSlugLiteral = 'rovaniemi' | 'kemi-tornio' | 'kittila-levi' | 'ivalo-inari';

export interface HousingHomeCopy {
  metaTitle: string;
  metaDescription: string;
  schemaName: string;
  hero: { eyebrow: string; h1a: string; h1b: string; lead: string; ctaPrimary: string; ctaSecondary: string };
  stats: { value: string; label: string }[];
  statsSource: string;
  towns: {
    kicker: string;
    h2: string;
    lead: string;
    /** image tyhjä = paikasta ei ole omaa valokuvaa, kortti saa graafisen taustan (PlaceGraphic). */
    items: { slug: RentalTownSlugLiteral; name: string; fact: string; body: string; cta: string; image: string; alt: string; pos?: string }[];
    more: string;
  };
  paths: {
    kicker: string;
    h2: string;
    lead: string;
    cards: { key: HousingRouteKey | 'longStays'; title: string; body: string; image: string; alt: string; pos?: string }[];
  };
  work: { kicker: string; h2a: string; h2b: string; body: string; stripText: string; cta: string; image: string; alt: string; caption: string };
  faq: { kicker: string; h2: string; items: Faq[] };
  holiday: { kicker: string; h2: string; lead: string; links: { label: string; href: string; external?: boolean }[] };
  authorNote: string;
  sources: Source[];
}

const SOURCES = ['tkVaesto', 'tkVuokrat', 'kemi', 'sodankyla', 'inari', 'kesko2026', 'fmi', 'foreca'] as const;

const IMG = {
  rovaniemi: '/images/housing-rovaniemi-lappia-card.webp',
  kemiTornio: '/images/housing-tornio-kerrostalo-card.webp',
  levi: '/images/housing-levi-uudet-talot.webp',
  inari: '/images/housing-ivalo-joki.webp',
  seasonal: '/images/housing-levi-keskusta-card.webp',
  moving: '/images/housing-tornionjoki-card.webp',
  cost: '/images/housing-jouninkauppa.webp',
  longStays: '/images/housing-pyha-huoneistot.webp',
  work: '/images/housing-yllas-hiihtokeskus.webp',
} as const;

export const HOME: Record<HousingLang, HousingHomeCopy> = {
  fi: {
    metaTitle: 'Asuminen Lapissa: vuokra-asunnot, kausityö ja muutto',
    metaDescription:
      'Asuminen Lapissa: vuokra-asunnot Rovaniemeltä Ivaloon, kausityöntekijän asunto, muutto ja elinkustannukset. Yksiö Rovaniemellä noin 560 €/kk (Tilastokeskus).',
    schemaName: 'StayInLapland: asuminen Suomen Lapissa',
    hero: {
      eyebrow: 'Suomen Lappi · Asuminen · Vuokraus · Kausityö',
      h1a: 'Asetu Lappiin.',
      h1b: 'Älä vain käy.',
      lead: 'Vuokrat paikkakunnittain, kausityöntekijän asunto, muuton paperityöt ja arjen hinta. Yksiö Rovaniemellä maksaa noin 560 €/kk.',
      ctaPrimary: 'Vuokra-asunnot',
      ctaSecondary: 'Kausityöntekijälle',
    },
    stats: [
      { value: '560 €/kk', label: 'yksiö Rovaniemellä: 30 m² × 18,66 €/m²' },
      { value: '720 €/kk', label: 'kaksio Rovaniemellä: 50 m² × 14,35 €/m²' },
      { value: '66 191', label: 'asukasta Rovaniemellä 31.12.2025' },
      { value: '+2,0 %', label: 'Kittilän väestönkasvu vuonna 2025' },
    ],
    statsSource: 'Tilastokeskus: vapaarahoitteiset neliövuokrat huhti–kesäkuu 2026 (pyöristetty), väestörakenne 31.12.2025.',
    towns: {
      kicker: 'Vuokra-asunnot paikkakunnittain',
      h2: 'Minne olet muuttamassa?',
      lead:
        'Lapissa asuu 176 215 ihmistä (Tilastokeskus 31.12.2025), yli kolmannes heistä Rovaniemellä. Joka sivulla on paikkakunnan vuokrataso, vuokranantajat ja hakukanavat.',
      items: [
        {
          slug: 'rovaniemi',
          name: 'Rovaniemi',
          fact: '66 191 asukasta · yksiö n. 560 €/kk',
          body: 'Yliopisto, lentokenttä ja työpaikat ympäri vuoden. Yksiöistä kilpailevat opiskelijat, matkailijat ja kausityöntekijät.',
          cta: 'Rovaniemen vuokra-asunnot',
          image: IMG.rovaniemi,
          alt: 'Lappia-talo Rovaniemen keskustassa kesäpäivänä',
        },
        {
          slug: 'kemi-tornio',
          name: 'Kemi ja Tornio',
          fact: '19 339 + 20 823 asukasta',
          body: 'Rannikon kaksoiskaupunki. Kaupunkien omilla vuokrayhtiöillä on satoja asuntoja, Itätuulella yli 600 Kemissä.',
          cta: 'Kemin ja Tornion vuokra-asunnot',
          image: IMG.kemiTornio,
          alt: 'Kerrostalo Tornion keskustassa',
        },
        {
          slug: 'kittila-levi',
          name: 'Kittilä ja Levi',
          fact: '6 973 asukasta · +2,0 % vuonna 2025',
          body: 'Lapin nopeimmin kasvava kunta hiihtokeskuksen ympärillä. Talvella asuntoja haetaan tuhansille kausityöntekijöille.',
          cta: 'Kittilän ja Levin vuokra-asunnot',
          image: IMG.levi,
          alt: 'Uusia taloja rakenteilla Levillä, taustalla Levitunturi',
        },
        {
          slug: 'ivalo-inari',
          name: 'Ivalo, Inari ja Saariselkä',
          fact: '7 244 asukasta',
          body: 'Kunnan Inarin Vuokra-asunnot Oy:llä on yli 500 asuntoa Ivalossa, Inarissa ja Saariselällä.',
          cta: 'Ivalon ja Inarin vuokra-asunnot',
          image: IMG.inari,
          alt: 'Ivalo Ivalojoen yli kesäiltana',
        },
      ],
      more: 'Kolari ja Ylläs, Sodankylä ja muut kunnat',
    },
    paths: {
      kicker: 'Tilanteesi mukaan',
      h2: 'Mistä aloitat?',
      lead: 'Tuletko kaudeksi töihin, muutatko pysyvästi vai tarvitsetko katon muutamaksi viikoksi?',
      cards: [
        {
          key: 'seasonal',
          title: 'Kausityöntekijän asuminen',
          body: 'Työnantajan asunto, vapaa-ajan asunto kausivuokralla vai kunnan vuokra-asunto. Mitä kysyä ennen kuin allekirjoitat.',
          image: IMG.seasonal,
          alt: 'Levin keskustan puurakennuksia kesäpäivänä',
        },
        {
          key: 'moving',
          title: 'Muutto Lappiin',
          body: 'Muuttoilmoitus, talvirenkaat, päiväkoti, sähkösopimus ja kaamos. Ensimmäisen kuukauden tarkistuslista.',
          image: IMG.moving,
          alt: 'Laituri Tornionjoella kesäiltana',
        },
        {
          key: 'cost',
          title: 'Elinkustannukset',
          body: 'Vuokra, sähkö, polttoaine ja asumistuki lukuina. Mikä täällä on halvempaa ja mikä ei.',
          image: IMG.cost,
          alt: 'Jounin Kauppa Äkäslompolossa',
        },
        {
          key: 'longStays',
          title: 'Pitkät jaksot',
          body: 'Viikosta kuukauteen: kalustetut asunnot ja mökit viikkohinnoin, kun tarvitset katon ennen omaa vuokrasopimusta.',
          image: IMG.longStays,
          alt: 'Huoneistorakennus Pyhän tunturikylässä kesällä',
        },
      ],
    },
    work: {
      kicker: 'Sisarsivusto · LaplandWork.com',
      h2a: 'Työpaikka ensin,',
      h2b: 'asunto sen\u00a0mukaan.',
      body: 'LaplandWork.com kokoaa Lapin avoimet työpaikat: hiihtokeskukset, hotellit, ohjelmapalvelut ja terveydenhuolto. Kausitöissä asunto tulee usein työn mukana, joten katso paikat ennen kuin etsit vuokra-asuntoa.',
      stripText: 'LaplandWork.com: Lapin avoimet työpaikat hiihtokeskuksissa, hotelleissa ja terveydenhuollossa.',
      cta: 'Selaa työpaikkoja',
      image: IMG.work,
      alt: 'Ylläksen hiihtokeskuksen vuokraamo ja hiihtokoulu kesällä, lumitykit varastoituna katoksen alle',
      caption: 'Ylläs heinäkuussa 2026: lumitykit odottavat kautta. Kuva: LaplandVibes.',
    },
    faq: {
      kicker: 'Kysytyimmät',
      h2: 'Ennen kuin muutat.',
      items: [
        {
          q: 'Voiko Lapissa asua ympäri vuoden ilman autoa?',
          a: 'Rovaniemellä kyllä: keskusta, yliopisto ja kaupat ovat kävely- ja bussimatkan päässä. Tunturikylissä ja pienemmissä kunnissa auto on käytännössä välttämätön, koska välimatkat ovat kymmeniä kilometrejä ja bussivuoroja on vähän.',
        },
        {
          q: 'Mitä vuokra-asunto maksaa Rovaniemellä?',
          a: 'Tilastokeskuksen mukaan vapaarahoitteisen yksiön keskineliövuokra Rovaniemellä oli 18,66 €/m² huhti–kesäkuussa 2026 ja kaksion 14,35 €/m². Kerro luku neliöillä: 30 m²:n yksiö on noin 560 €/kk ja 50 m²:n kaksio noin 720 €/kk.',
        },
        {
          q: 'Järjestääkö työnantaja kausityöntekijälle asunnon?',
          a: 'Usein, mutta ei aina eikä ilmaiseksi. Hiihtokeskuksissa työnantajat vuokraavat rivitaloja ja vapaa-ajan asuntoja henkilökunnalle, ja vuokra vähennetään yleensä palkasta. Kysy asumisesta kirjallisesti jo työtarjouksen yhteydessä.',
        },
        {
          q: 'Kuinka pimeää kaamos oikeasti on?',
          a: 'Ilmatieteen laitoksen mukaan kaamos kestää Nuorgamissa lähes kaksi kuukautta (25.11.–17.1.) ja Sodankylässä vain neljä päivää juuri ennen joulua. Rovaniemellä varsinaista kaamosta ei ole, koska sen raja kulkee hieman napapiirin pohjoispuolella (Foreca): aurinko käy talvella matalalla, mutta keskipäivällä on valoisaa, ja lumi moninkertaistaa sen vähän valon, joka on.',
        },
        {
          q: 'Mistä saan apua muuttoon ulkomailta?',
          a: 'Sisarsivustomme laplandwork.com käy läpi oleskeluluvat, henkilötunnuksen, verokortin ja pankkitilin. Asunnon ja arjen käytännöt löydät Muutto Lappiin -sivulta.',
        },
      ],
    },
    holiday: {
      kicker: 'Lomalle Lappiin?',
      h2: 'Hotellit, mökit ja iglut.',
      lead: 'Lomamajoituksen haku on sisarsivustollamme laplandstays.com. Omat lomasivumme löydät yhä täältä:',
      links: [
        { label: 'laplandstays.com', href: 'https://laplandstays.com/fi/', external: true },
        { label: 'Hotellit', href: '/hotels' },
        { label: 'Lasi-iglut', href: '/glass-igloos' },
        { label: 'Erämaalodget', href: '/wilderness' },
        { label: 'Milloin matkustaa', href: '/when-to-go' },
      ],
    },
    authorNote: 'Luvut tarkistettu Tilastokeskuksen, Kelan ja kuntien omista lähteistä 17.9.2026. Päivitämme, kun seuraava neljännes julkaistaan.',
    sources: pickSources('fi', SOURCES),
  },
  en: {
    metaTitle: 'Living in Lapland: Rentals, Seasonal Work and Moving',
    metaDescription:
      'Living in Finnish Lapland: rentals from Rovaniemi to Ivalo, seasonal worker housing, moving and the cost of living. A studio in Rovaniemi is about €560 a month.',
    schemaName: 'StayInLapland: living in Finnish Lapland',
    hero: {
      eyebrow: 'Finnish Lapland · Living · Renting · Seasonal work',
      h1a: 'Settle into Lapland.',
      h1b: 'Don’t just visit.',
      lead: 'Rents town by town, seasonal worker housing, the paperwork of moving and what daily life costs. A studio in Rovaniemi is about €560 a month.',
      ctaPrimary: 'Rentals',
      ctaSecondary: 'Seasonal workers',
    },
    stats: [
      { value: '€560/mo', label: 'studio in Rovaniemi: 30 m² × €18.66/m²' },
      { value: '€720/mo', label: 'two-room flat in Rovaniemi: 50 m² × €14.35/m²' },
      { value: '66,191', label: 'residents in Rovaniemi, 31 Dec 2025' },
      { value: '+2.0 %', label: 'Kittilä population growth in 2025' },
    ],
    statsSource: 'Statistics Finland: free-market rents per m², April–June 2026 (rounded); population structure 31 Dec 2025.',
    towns: {
      kicker: 'Rentals town by town',
      h2: 'Where are you moving to?',
      lead:
        'Lapland has 176,215 residents (Statistics Finland, 31 Dec 2025), more than a third of them in Rovaniemi. Each page covers the local rent level, the landlords and where to apply.',
      items: [
        {
          slug: 'rovaniemi',
          name: 'Rovaniemi',
          fact: '66,191 residents · studio about €560/mo',
          body: 'A university, an airport and year-round jobs. Students, tourists and seasonal workers compete for the same studios.',
          cta: 'Renting in Rovaniemi',
          image: IMG.rovaniemi,
          alt: 'Lappia House in the centre of Rovaniemi on a summer day',
        },
        {
          slug: 'kemi-tornio',
          name: 'Kemi and Tornio',
          fact: '19,339 + 20,823 residents',
          body: 'The coastal twin towns. The municipal housing companies hold hundreds of flats; Itätuuli alone has over 600 in Kemi.',
          cta: 'Renting in Kemi and Tornio',
          image: IMG.kemiTornio,
          alt: 'An apartment block in the centre of Tornio',
        },
        {
          slug: 'kittila-levi',
          name: 'Kittilä and Levi',
          fact: '6,973 residents · +2.0 % in 2025',
          body: 'Lapland’s fastest-growing municipality, wrapped around a ski resort. In winter, homes are sought for thousands of seasonal workers.',
          cta: 'Renting in Kittilä and Levi',
          image: IMG.levi,
          alt: 'New houses under construction in Levi with Levi fell behind',
        },
        {
          slug: 'ivalo-inari',
          name: 'Ivalo, Inari and Saariselkä',
          fact: '7,244 residents',
          body: 'The municipal company Inarin Vuokra-asunnot Oy has over 500 flats in Ivalo, Inari and Saariselkä.',
          cta: 'Renting in Ivalo and Inari',
          image: IMG.inari,
          alt: 'Ivalo seen across the Ivalo river on a summer evening',
        },
      ],
      more: 'Kolari and Ylläs, Sodankylä and the other municipalities',
    },
    paths: {
      kicker: 'By situation',
      h2: 'Where do you start?',
      lead: 'Coming for a season of work, moving for good, or in need of a roof for a few weeks?',
      cards: [
        {
          key: 'seasonal',
          title: 'Seasonal worker housing',
          body: 'Staff housing, a holiday apartment on a seasonal lease or a municipal flat. What to ask before you sign.',
          image: IMG.seasonal,
          alt: 'Wooden buildings in the centre of Levi on a summer day',
        },
        {
          key: 'moving',
          title: 'Moving to Lapland',
          body: 'Address notification, winter tyres, daycare, electricity contract and the polar night. The first-month checklist.',
          image: IMG.moving,
          alt: 'A jetty on the Tornio river on a summer evening',
        },
        {
          key: 'cost',
          title: 'Cost of living',
          body: 'Rent, electricity, fuel and housing allowance in figures. What is cheaper here and what is not.',
          image: IMG.cost,
          alt: 'The Jounin Kauppa grocery store in Äkäslompolo',
        },
        {
          key: 'longStays',
          title: 'Long stays',
          body: 'A week to a month: furnished apartments and cabins at weekly rates when you need a roof before your own lease.',
          image: IMG.longStays,
          alt: 'An apartment building in the Pyhä fell village in summer',
        },
      ],
    },
    work: {
      kicker: 'Sister site · LaplandWork.com',
      h2a: 'The job first,',
      h2b: 'the home\u00a0follows.',
      body: 'LaplandWork.com lists the open jobs in Lapland: ski resorts, hotels, activity companies and healthcare. Seasonal jobs often come with housing, so look at the vacancies before you hunt for a flat.',
      stripText: 'LaplandWork.com: open jobs in Lapland’s ski resorts, hotels and healthcare.',
      cta: 'Browse jobs',
      image: IMG.work,
      alt: 'The ski rental and ski school at the Ylläs resort in summer, snow cannons stored under the canopy',
      caption: 'Ylläs in July 2026: the snow cannons wait for the season. Photo: LaplandVibes.',
    },
    faq: {
      kicker: 'Most asked',
      h2: 'Before you move.',
      items: [
        {
          q: 'Can you live in Lapland all year without a car?',
          a: 'In Rovaniemi, yes: the centre, the university and the shops are within walking or bus distance. In the fell villages and smaller municipalities a car is in practice essential, because distances run to tens of kilometres and buses are few.',
        },
        {
          q: 'How much does a rental flat cost in Rovaniemi?',
          a: 'According to Statistics Finland the average free-market rent for a studio in Rovaniemi was €18.66 per m² in April–June 2026 and €14.35 for a two-room flat. Multiply by the floor area: a 30 m² studio is about €560 a month and a 50 m² two-room flat about €720.',
        },
        {
          q: 'Does the employer house seasonal workers?',
          a: 'Often, but not always and not for free. In the ski resorts employers rent row houses and holiday apartments for staff, and the rent usually comes off your pay. Ask about housing in writing when you get the job offer.',
        },
        {
          q: 'How dark is the polar night, really?',
          a: 'According to the Finnish Meteorological Institute the polar night lasts almost two months in Nuorgam (25 Nov–17 Jan) and only four days just before Christmas in Sodankylä. Rovaniemi has no true polar night, because the line runs slightly north of the Arctic Circle (Foreca): the winter sun stays low, but midday is light, and snow multiplies what little light there is.',
        },
        {
          q: 'Where do I get help moving from abroad?',
          a: 'Our sister site laplandwork.com walks through residence permits, the personal identity code, the tax card and a bank account. The home and everyday practicalities are on the Moving to Lapland page.',
        },
      ],
    },
    holiday: {
      kicker: 'Coming on holiday?',
      h2: 'Hotels, cabins and igloos.',
      lead: 'Holiday accommodation search lives on our sister site laplandstays.com. Our own holiday pages are still here too:',
      links: [
        { label: 'laplandstays.com', href: 'https://laplandstays.com/', external: true },
        { label: 'Hotels', href: '/hotels' },
        { label: 'Glass igloos', href: '/glass-igloos' },
        { label: 'Wilderness lodges', href: '/wilderness' },
        { label: 'When to go', href: '/when-to-go' },
      ],
    },
    authorNote: 'Figures checked against Statistics Finland, Kela and the municipalities’ own sources on 17 September 2026. Updated when the next quarter is published.',
    sources: pickSources('en', SOURCES),
  },
};
