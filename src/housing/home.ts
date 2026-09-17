import type { Faq, HousingLang, Source } from './types';
import { pickSources } from './sources';
import type { HousingRouteKey } from './labels';

export interface HousingHomeCopy {
  metaTitle: string;
  metaDescription: string;
  schemaName: string;
  hero: { eyebrow: string; h1a: string; h1b: string; lead: string; ctaPrimary: string; ctaSecondary: string };
  stats: { value: string; label: string }[];
  statsSource: string;
  authorNote: string;
  intro: string[];
  paths: { kicker: string; h2: string; lead: string; cards: { key: HousingRouteKey | 'longStays'; title: string; body: string }[] };
  places: { kicker: string; h2: string; lead: string; items: { name: string; pop: string; body: string }[] };
  photo: { src: string; alt: string; caption: string };
  faq: { kicker: string; h2: string; items: Faq[] };
  holiday: { kicker: string; h2: string; lead: string; links: { label: string; href: string; external?: boolean }[] };
  sources: Source[];
}

const SOURCES = ['tkVaesto', 'tkVuokrat', 'kemi', 'sodankyla', 'inari', 'kesko2026', 'fmi', 'foreca'] as const;

export const HOME: Record<HousingLang, HousingHomeCopy> = {
  fi: {
    metaTitle: 'Asuminen Lapissa: vuokra-asunnot, kausityö ja muutto',
    metaDescription:
      'Millaista on asua Lapissa? Vuokra-asunnot Rovaniemeltä Ivaloon, kausityöntekijän asunto, muuton käytännöt ja elinkustannukset. Luvut Tilastokeskukselta ja Kelalta.',
    schemaName: 'StayInLapland: asuminen Suomen Lapissa',
    hero: {
      eyebrow: 'Suomen Lappi · Asuminen · Vuokraus · Kausityö',
      h1a: 'Asetu Lappiin.',
      h1b: 'Älä vain käy.',
      lead:
        'Vuokra-asunnot Rovaniemeltä Ivaloon, kausityöntekijän asunto Levillä ja Ylläksellä, muuton paperityöt ja se, mitä eläminen täällä oikeasti maksaa. Luvut ovat Tilastokeskuksen, Kelan ja kuntien omia, eivät arvioita.',
      ctaPrimary: 'Vuokra-asunnot',
      ctaSecondary: 'Kausityöntekijälle',
    },
    stats: [
      { value: '66 191', label: 'asukasta Rovaniemellä 31.12.2025' },
      { value: '176 215', label: 'asukasta Lapissa 31.12.2025' },
      { value: '14,55 €/m²', label: 'keskivuokra Rovaniemellä, huhti–kesäkuu 2026' },
      { value: '+2,0 %', label: 'Kittilän väestönkasvu vuonna 2025' },
    ],
    statsSource: 'Tilastokeskus: väestörakenne 31.12.2025 ja vuokratilasto 2026Q2.',
    authorNote:
      'Luvut tarkistettu Tilastokeskuksen, Kelan ja kuntien omista lähteistä 17.9.2026. Päivitämme, kun seuraava neljännes julkaistaan.',
    intro: [
      'Lomaoppaita Lapista löytyy joka kielellä. Tämä sivusto on toista lajia: se kertoo, millaista täällä on asua, vuokrata ja tehdä töitä kauden verran tai loppuelämän. Sisarsivustomme laplandstays.com hoitaa hotellit ja lomamökit; me hoidamme arjen.',
      'Kysymykset ovat samat, tuli lukija Oulusta, Tallinnasta tai Manchesterista: mistä asunto löytyy, mitä vuokra maksaa, järjestääkö työnantaja katon pään päälle ja mitä pimeän kanssa tehdään. Vastaamme jokaiseen lähteen kanssa, ei tunnelmalla.',
      'Lähteet ovat joka sivulla näkyvissä. Jos luku on Tilastokeskuksen, sanomme neljänneksen; jos se on Ylen uutisesta, sanomme päivän.',
    ],
    paths: {
      kicker: 'Neljä polkua',
      h2: 'Mistä aloitat?',
      lead: 'Valitse tilanteesi. Jokainen sivu seisoo omillaan, mutta ne on kirjoitettu samasta datasta.',
      cards: [
        { key: 'rentals', title: 'Vuokra-asunnot', body: 'Rovaniemi, Kittilä ja Levi, Kolari ja Ylläs, Kemi–Tornio, Sodankylä, Inari. Kuntien vuokrayhtiöt, portaalit ja Tilastokeskuksen neliövuokrat.' },
        { key: 'seasonal', title: 'Kausityöntekijän asuminen', body: 'Työnantajan asunto, vapaa-ajan asunto kausivuokralla vai kunnan vuokra-asunto. Mitä kysyä ennen kuin allekirjoitat.' },
        { key: 'moving', title: 'Muutto Lappiin', body: 'Muuttoilmoitus, talvirenkaat, päiväkoti, sähkösopimus ja kaamos. Ensimmäisen kuukauden tarkistuslista.' },
        { key: 'cost', title: 'Elinkustannukset', body: 'Vuokra, sähkö, polttoaine ja asumistuki lukuina. Mikä täällä on halvempaa ja mikä ei.' },
        { key: 'longStays', title: 'Pitkät jaksot', body: 'Viikosta kuukauteen: kalustetut asunnot ja mökit viikkohinnoin, kun tarvitset katon ennen omaa vuokrasopimusta.' },
      ],
    },
    places: {
      kicker: 'Kaupungit ja kylät',
      h2: 'Missä päin Lappia?',
      lead:
        'Lapissa asuu 176 215 ihmistä (Tilastokeskus 31.12.2025), ja yli kolmannes heistä Rovaniemellä. Loput jakautuvat rannikolle, jokivarsiin ja tunturikyliin, joissa kausi määrää vuokramarkkinan.',
      items: [
        { name: 'Rovaniemi', pop: '66 191 asukasta', body: 'Ainoa oikea kaupunki. Yliopisto, lentokenttä, työpaikat ympäri vuoden ja Lapin kirein yksiömarkkina: opiskelijat, matkailijat ja kausityöntekijät hakevat samoja asuntoja.' },
        { name: 'Kittilä ja Levi', pop: '6 973 asukasta, +2,0 % vuonna 2025', body: 'Lapin nopeimmin kasvava kunta hiihtokeskuksen ympärillä. Talvella asuntoja haetaan tuhansille kausityöntekijöille.' },
        { name: 'Kolari ja Ylläs', pop: '4 001 asukasta', body: 'Äkäslompolo ja Ylläsjärvi: kauppiaat rakennuttavat itse asuntoja työntekijöilleen, koska vuokrat ovat nousseet korkeiksi.' },
        { name: 'Kemi ja Tornio', pop: '19 339 + 20 823 asukasta', body: 'Rannikon kaksoiskaupunki, jossa kaupungin vuokrayhtiöillä on satoja asuntoja: Itätuulella yli 600 Kemissä. Tornio on rajakaupunki Haaparannan kyljessä.' },
        { name: 'Sodankylä', pop: '8 095 asukasta', body: 'Kaivos, varuskunta ja kunnan noin 720 vuokra-asuntoa Asentopuulaakin hoidossa.' },
        { name: 'Inari, Ivalo ja Saariselkä', pop: '7 244 asukasta', body: 'Pohjoisin tukikohta: kunnan Inarin Vuokra-asunnot Oy:llä on yli 500 asuntoa Ivalossa, Inarissa ja Saariselällä.' },
      ],
    },
    photo: {
      src: '/images/housing-rovaniemi-lappia.webp',
      alt: 'Lappia-talo Rovaniemen keskustassa kesäpäivänä',
      caption: 'Rovaniemi, Lappia-talo heinäkuussa 2026. Kuva: LaplandVibes.',
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
          a: 'Sisarsivustomme laplandwork.com käy läpi oleskeluluvat, henkilötunnuksen, verokortin ja pankkitilin. Tämä sivusto jatkaa siitä, mihin se päättyy: asuntoon ja arkeen.',
        },
      ],
    },
    holiday: {
      kicker: 'Lomalle Lappiin?',
      h2: 'Se on toinen sivusto.',
      lead:
        'Hotellit, mökit ja lasi-iglut löytyvät verkoston viralliselta majoitussivustolta laplandstays.com. Omat lomasivumme löydät yhä täältä:',
      links: [
        { label: 'laplandstays.com', href: 'https://laplandstays.com/fi/', external: true },
        { label: 'Hotellit', href: '/hotels' },
        { label: 'Lasi-iglut', href: '/glass-igloos' },
        { label: 'Erämaalodget', href: '/wilderness' },
        { label: 'Milloin matkustaa', href: '/when-to-go' },
      ],
    },
    sources: pickSources('fi', SOURCES),
  },
  en: {
    metaTitle: 'Living in Lapland: Rentals, Seasonal Work and Moving',
    metaDescription:
      'Living in Finnish Lapland: rentals from Rovaniemi to Ivalo, seasonal worker housing, moving practicalities and the cost of living. Figures from Statistics Finland and Kela.',
    schemaName: 'StayInLapland: living in Finnish Lapland',
    hero: {
      eyebrow: 'Finnish Lapland · Living · Renting · Seasonal work',
      h1a: 'Settle into Lapland.',
      h1b: 'Don’t just visit.',
      lead:
        'Rentals from Rovaniemi to Ivalo, seasonal worker housing at Levi and Ylläs, the paperwork of moving and what living here really costs. The figures are Statistics Finland’s, Kela’s and the municipalities’ own, not estimates.',
      ctaPrimary: 'Rentals',
      ctaSecondary: 'Seasonal workers',
    },
    stats: [
      { value: '66,191', label: 'residents in Rovaniemi, 31 Dec 2025' },
      { value: '176,215', label: 'residents in Lapland, 31 Dec 2025' },
      { value: '€14.55/m²', label: 'average rent in Rovaniemi, Apr–Jun 2026' },
      { value: '+2.0 %', label: 'Kittilä population growth in 2025' },
    ],
    statsSource: 'Statistics Finland: population structure 31 Dec 2025 and rent statistics 2026Q2.',
    authorNote:
      'Figures checked against Statistics Finland, Kela and the municipalities’ own sources on 17 September 2026. Updated when the next quarter is published.',
    intro: [
      'Holiday guides to Lapland exist in every language. This site is a different animal: it tells you what it is like to live, rent and work here, for a season or for good. Our sister site laplandstays.com handles hotels and holiday cabins; we handle everyday life.',
      'The questions are the same whether the reader is from Oulu, Tallinn or Manchester: where the flats are, what rent costs, whether the employer puts a roof over your head, and what to do about the dark. We answer each one with a source, not with atmosphere.',
      'The sources are on every page. If a figure is from Statistics Finland we name the quarter; if it is from a Yle news story we name the day.',
    ],
    paths: {
      kicker: 'Four paths',
      h2: 'Where do you start?',
      lead: 'Pick your situation. Each page stands on its own, but they are written from the same data.',
      cards: [
        { key: 'rentals', title: 'Rentals', body: 'Rovaniemi, Kittilä and Levi, Kolari and Ylläs, Kemi–Tornio, Sodankylä, Inari. Municipal housing companies, portals and Statistics Finland rents per m².' },
        { key: 'seasonal', title: 'Seasonal worker housing', body: 'Staff housing, a holiday apartment on a seasonal lease or a municipal flat. What to ask before you sign.' },
        { key: 'moving', title: 'Moving to Lapland', body: 'Address notification, winter tyres, daycare, electricity contract and the polar night. The first-month checklist.' },
        { key: 'cost', title: 'Cost of living', body: 'Rent, electricity, fuel and housing allowance in figures. What is cheaper here and what is not.' },
        { key: 'longStays', title: 'Long stays', body: 'A week to a month: furnished apartments and cabins at weekly rates when you need a roof before your own lease.' },
      ],
    },
    places: {
      kicker: 'Towns and villages',
      h2: 'Which part of Lapland?',
      lead:
        'Lapland has 176,215 residents (Statistics Finland, 31 Dec 2025), more than a third of them in Rovaniemi. The rest are spread along the coast, the river valleys and the fell villages, where the season sets the rental market.',
      items: [
        { name: 'Rovaniemi', pop: '66,191 residents', body: 'The only real city. A university, an airport, year-round jobs and Lapland’s tightest studio market: students, tourists and seasonal workers chase the same flats.' },
        { name: 'Kittilä and Levi', pop: '6,973 residents, +2.0 % in 2025', body: 'Lapland’s fastest-growing municipality, wrapped around a ski resort. In winter, homes are sought for thousands of seasonal workers.' },
        { name: 'Kolari and Ylläs', pop: '4,001 residents', body: 'Äkäslompolo and Ylläsjärvi: shopkeepers are building homes for their own staff because rents have climbed high.' },
        { name: 'Kemi and Tornio', pop: '19,339 + 20,823 residents', body: 'The coastal twin towns, where the municipal housing companies hold hundreds of flats: Itätuuli alone has over 600 in Kemi. Tornio is a border town joined to Haparanda.' },
        { name: 'Sodankylä', pop: '8,095 residents', body: 'A mine, a garrison and about 720 municipal rental flats run by Asentopuulaaki.' },
        { name: 'Inari, Ivalo and Saariselkä', pop: '7,244 residents', body: 'The northernmost base: the municipal company Inarin Vuokra-asunnot Oy has over 500 flats in Ivalo, Inari and Saariselkä.' },
      ],
    },
    photo: {
      src: '/images/housing-rovaniemi-lappia.webp',
      alt: 'Lappia House in the centre of Rovaniemi on a summer day',
      caption: 'Rovaniemi, Lappia House in July 2026. Photo: LaplandVibes.',
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
          a: 'Our sister site laplandwork.com walks through residence permits, the personal identity code, the tax card and a bank account. This site picks up where it ends: the home and everyday life.',
        },
      ],
    },
    holiday: {
      kicker: 'Coming on holiday?',
      h2: 'That is another site.',
      lead:
        'Hotels, cabins and glass igloos live on the network’s official accommodation site, laplandstays.com. Our own holiday pages are still here too:',
      links: [
        { label: 'laplandstays.com', href: 'https://laplandstays.com/', external: true },
        { label: 'Hotels', href: '/hotels' },
        { label: 'Glass igloos', href: '/glass-igloos' },
        { label: 'Wilderness lodges', href: '/wilderness' },
        { label: 'When to go', href: '/when-to-go' },
      ],
    },
    sources: pickSources('en', SOURCES),
  },
};
