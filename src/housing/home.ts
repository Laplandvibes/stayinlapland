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
    /**
     * `stats`: kaksi lukua omille paikoilleen (arvo + selite). 🔴 Ennen yksi " · "-rivi, joka katkesi
     * kapeassa kortissa pisteen kohdalta (Vesa 23.9.2026: "korteissa ei ole … katsottu rivityksiä").
     */
    items: { slug: RentalTownSlugLiteral; name: string; stats: { value: string; label: string }[]; body: string; cta: string; image: string; alt: string; pos?: string }[];
    more: string;
  };
  paths: {
    kicker: string;
    h2: string;
    lead: string;
    cards: { key: HousingRouteKey | 'longStays'; title: string; body: string; image: string; alt: string; pos?: string }[];
  };
  work: { kicker: string; h2a: string; h2b: string; body: string; stripText: string; cta: string; image: string; alt: string; caption: string };
  /**
   * Arki Lapissa: mitä paikalliset tekevät vuoden mittaan (Vesa 23.9.2026: "tämän sivun pitäisi
   * kertoa myös siitä asumisesta siellä pidemmän aikaa, mitä paikalliset tekee yleensä").
   * Jokainen luku nimetystä lähteestä (fmi, traficom, ounasvaara, yle2025das).
   */
  life: {
    kicker: string;
    h2: string;
    lead: string;
    cards: { season: string; title: string; body: string; image: string; alt: string; href: string; linkLabel: string }[];
    more: { label: string; href: string };
  };
  faq: { kicker: string; h2: string; items: Faq[] };
  holiday: { kicker: string; h2: string; lead: string; links: { label: string; href: string; external?: boolean }[] };
  authorNote: string;
  sources: Source[];
}

const SOURCES = ['tkVaesto', 'tkVuokrat', 'kemi', 'sodankyla', 'inari', 'kesko2026', 'fmi', 'foreca', 'traficom', 'ounasvaara', 'yle2025das'] as const;

/**
 * 🔴 Kuvat vaihdettu 23.9.2026 (Vesa: "kuvat ei ole parhaat mahdolliset … muutto lappiin on jokin
 * työmaa kuva" + "käytät liikaa samoja kuvia useaan kertaan"). Polkukortti näyttää kohdesivunsa
 * heron (sama kuva, kortin oma 4:3-rajaus), muuten jokainen kuva on käytössä yhdessä paikassa.
 * Lähteet ja lisenssit: src/data/photoCredits.ts (PHOTO_CREDITS + STOCK_RECEIPTS).
 */
const IMG = {
  hero: '/images/housing-home-hero-talo.webp',
  rovaniemi: '/images/housing-card-rovaniemi-ounasvaara.webp',
  kemiTornio: '/images/housing-card-kemin-kirkko.webp',
  levi: '/images/housing-levi-uudet-talot.webp',
  inari: '/images/housing-card-inari-juutuanjoki.webp',
  seasonal: '/images/housing-seasonal-card-yllasjarvi.webp',
  moving: '/images/housing-moving-card-talvitie.webp',
  cost: '/images/housing-cost-card-polttopuut.webp',
  longStays: '/images/housing-longstay-card-mokki.webp',
  work: '/images/housing-yllas-hiihtokeskus.webp',
  kaamos: '/images/housing-arki-revontulet.webp',
  kevat: '/images/housing-arki-pilkki.webp',
  kesa: '/images/housing-arki-keskiyo-hetta.webp',
  syksy: '/images/housing-arki-ruska.webp',
} as const;

export const HOME_HERO_IMAGE = IMG.hero;

export const HOME: Record<HousingLang, HousingHomeCopy> = {
  fi: {
    metaTitle: 'Asuminen Lapissa: vuokra-asunnot, kausityö ja muutto',
    metaDescription:
      'Asuminen Lapissa: vuokra-asunnot Rovaniemeltä Ivaloon, kausityöntekijän asunto, muutto ja elinkustannukset. Yksiö Rovaniemellä noin 560 €/kk (Tilastokeskus).',
    schemaName: 'StayInLapland: asuminen Suomen Lapissa',
    hero: {
      eyebrow: 'Suomen Lappi · 176 215 asukasta',
      h1a: 'Asuminen Lapissa.',
      h1b: 'Kaamoksesta yöttömään yöhön.',
      lead: 'Mistä vuokra-asunto löytyy, mitä arki maksaa ja miten täällä eletään läpi vuoden. Yksiö Rovaniemellä maksaa noin 560 euroa kuukaudessa.',
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
          stats: [
            { value: '66 191', label: 'asukasta' },
            { value: '≈ 560 €', label: 'yksiön vuokra kuussa' },
          ],
          body: 'Lapin suurin vuokramarkkina. Yksiöt käyvät vähiin elo–syyskuussa, kun opiskelijat muuttavat kaupunkiin.',
          cta: 'Rovaniemen vuokra-asunnot',
          image: IMG.rovaniemi,
          alt: 'Rovaniemi Ounasvaaralta: Kemijoki, Suutarinkorvan sillat ja asuinalueet kesäkuussa',
        },
        {
          slug: 'kemi-tornio',
          name: 'Kemi ja Tornio',
          stats: [
            { value: '19 339', label: 'asukasta Kemissä' },
            { value: '20 823', label: 'asukasta Torniossa' },
          ],
          body: 'Aloita kaupunkien omista vuokrayhtiöistä: Kemin Itätuulella on yli 600 asuntoa.',
          cta: 'Kemin ja Tornion vuokra-asunnot',
          image: IMG.kemiTornio,
          alt: 'Kemin kirkko lumisena talvi-iltana',
        },
        {
          slug: 'kittila-levi',
          name: 'Kittilä ja Levi',
          stats: [
            { value: '6 973', label: 'asukasta' },
            { value: '+2,0 %', label: 'väestönkasvu 2025' },
          ],
          body: 'Lapin nopeimmin kasvava kunta. Talvella samoista asunnoista kilpailevat tuhannet kausityöntekijät.',
          cta: 'Kittilän ja Levin vuokra-asunnot',
          image: IMG.levi,
          alt: 'Uusia taloja rakenteilla Levillä, taustalla Levitunturi',
        },
        {
          slug: 'ivalo-inari',
          name: 'Ivalo, Inari ja Saariselkä',
          stats: [
            { value: '7 244', label: 'asukasta' },
            { value: 'yli 500', label: 'kunnan vuokra-asuntoa' },
          ],
          body: 'Kunnan oma Inarin Vuokra-asunnot Oy vuokraa asuntoja Ivalossa, Inarissa ja Saariselällä. Hae suoraan yhtiöltä.',
          cta: 'Ivalon ja Inarin vuokra-asunnot',
          image: IMG.inari,
          alt: 'Taloja osin jäätyneen Juutuanjoen rannalla Inarin kylässä maaliskuussa',
        },
      ],
      more: 'Kemijärvi, Sodankylä ja muut kunnat',
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
          alt: 'Ylläs ja lumiset metsät ilmasta talven auringonlaskussa',
        },
        {
          key: 'moving',
          title: 'Muutto Lappiin',
          body: 'Muuttoilmoitus, talvirenkaat, päiväkoti, sähkösopimus ja kaamos. Ensimmäisen kuukauden tarkistuslista.',
          image: IMG.moving,
          alt: 'Luminen maantie kuusimetsän halki, tienreunassa aurausmerkit',
        },
        {
          key: 'cost',
          title: 'Elinkustannukset',
          body: 'Vuokra, sähkö, polttoaine ja asumistuki lukuina. Mikä täällä on halvempaa ja mikä ei.',
          image: IMG.cost,
          alt: 'Polttopuupino ja penkki hirsitalon seinustalla lumisena päivänä',
        },
        {
          key: 'longStays',
          title: 'Pitkät jaksot',
          body: 'Kuukaudesta talveen: kalustettu vuokra-asunto, mökki viikkovuokralla vai työnantajan asunto, ja mitä vuokralaki kattaa.',
          image: IMG.longStays,
          alt: 'Punainen mökki huurteisten koivujen keskellä',
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
    life: {
      kicker: 'Arki Lapissa',
      h2: 'Neljä vuodenaikaa, neljä eri Lappia.',
      lead: 'Täällä vuodenaika ei ole pelkkää säätä. Se ratkaisee, miten iltaisin liikutaan, mitä viikonloppuna tehdään ja milloin asuntoja haetaan.',
      cards: [
        {
          season: 'Marras–tammikuu',
          title: 'Kaamos',
          body: 'Pohjoisimmassa Lapissa aurinko ei nouse lainkaan: Nuorgamissa kaamos kestää 25.11.–17.1. (Ilmatieteen laitos). Hiihto ei silti lopu. Rovaniemen Ounasvaaralla noin 50 kilometriä latuja on valaistu, ja selkeinä iltoina revontulet näkyvät kotipihalta.',
          image: IMG.kaamos,
          alt: 'Revontulet lumisen metsätien yllä talviyönä',
          href: '/moving-to-lapland#valo',
          linkLabel: 'Valo ja pimeä',
        },
        {
          season: 'Maalis–huhtikuu',
          title: 'Kevättalvi',
          body: 'Valo palaa nopeasti, mutta järvet ovat vielä jäässä. Silloin pilkitään, hiihdetään hangen päällä ja ajetaan moottorikelkalla merkittyjä uria. Nastarenkaita saa käyttää maaliskuun jälkeenkin, jos keli sitä vaatii (Traficom).',
          image: IMG.kevat,
          alt: 'Kaksi pilkkijää jäällä auringonlaskussa',
          href: '/moving-to-lapland#auto',
          linkLabel: 'Auto ja välimatkat',
        },
        {
          season: 'Kesä–heinäkuu',
          title: 'Yötön yö',
          body: 'Nuorgamissa aurinko ei laske 16.5.–29.7., ja Rovaniemellä napapiirillä se pysyy horisontin yläpuolella juhannuksen tienoilla (Ilmatieteen laitos). Illat vietetään ulkona, järvellä ja mökillä. Pimennysverhot ovat kesän tärkein hankinta.',
          image: IMG.kesa,
          alt: 'Ounasjärvi ja Ounastunturi keskiyön auringossa Hetassa kesäkuussa, etualalla soutuvene',
          href: '/seasonal-worker-housing#kesa',
          linkLabel: 'Kesäkausi ja työ',
        },
        {
          season: 'Syys–lokakuu',
          title: 'Ruska',
          body: 'Tunturikoivut ja varvut värittyvät, ja pimenevät illat tuovat revontulet takaisin. Syksy on myös muuttojen aikaa: Rovaniemelle tulee uusia opiskelijoita elo–syyskuussa, ja silloin yksiöistä kilpaillaan eniten (Yle 27.7.2025).',
          image: IMG.syksy,
          alt: 'Ruskan värittämä joenranta ja pieni aitta',
          href: '/rentals',
          linkLabel: 'Vuokra-asunnot',
        },
      ],
      more: { label: 'Kuukausi kerrallaan: milloin Lappiin?', href: '/when-to-go' },
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
      lead: 'Hotellit, mökit ja lasi-iglut löytyvät sisarsivustoltamme laplandstays.com. Täällä ovat yhä viikon ja kuukauden jaksot sekä matkan ajoitus.',
      links: [
        { label: 'laplandstays.com', href: 'https://laplandstays.com/fi/', external: true },
        { label: 'Lasi-iglut', href: 'https://laplandstays.com/fi/iglumajoitus/', external: true },
        { label: 'Mökit', href: 'https://laplandstays.com/fi/cabins/', external: true },
        { label: 'Pitkät jaksot', href: '/long-stays' },
        { label: 'Lapin vuosi kuukausittain', href: '/when-to-go' },
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
      eyebrow: 'Finnish Lapland · 176,215 residents',
      h1a: 'Living in Lapland.',
      h1b: 'From polar night to midnight sun.',
      lead: 'Where to find a rental, what everyday life costs and how people here live through the year. A studio in Rovaniemi costs about €560 a month.',
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
          stats: [
            { value: '66,191', label: 'residents' },
            { value: '≈ €560', label: 'studio rent a month' },
          ],
          body: 'Lapland’s largest rental market. Studios run short in August and September, when students move to town.',
          cta: 'Renting in Rovaniemi',
          image: IMG.rovaniemi,
          alt: 'Rovaniemi from Ounasvaara: the Kemijoki river, the Suutarinkorva bridges and homes in June',
        },
        {
          slug: 'kemi-tornio',
          name: 'Kemi and Tornio',
          stats: [
            { value: '19,339', label: 'residents in Kemi' },
            { value: '20,823', label: 'residents in Tornio' },
          ],
          body: 'Start with the towns’ own housing companies: Itätuuli alone has over 600 flats in Kemi.',
          cta: 'Renting in Kemi and Tornio',
          image: IMG.kemiTornio,
          alt: 'Kemi church in snow on a winter evening',
        },
        {
          slug: 'kittila-levi',
          name: 'Kittilä and Levi',
          stats: [
            { value: '6,973', label: 'residents' },
            { value: '+2.0 %', label: 'population growth 2025' },
          ],
          body: 'Lapland’s fastest-growing municipality. In winter, thousands of seasonal workers compete for the same flats.',
          cta: 'Renting in Kittilä and Levi',
          image: IMG.levi,
          alt: 'New houses under construction in Levi with Levi fell behind',
        },
        {
          slug: 'ivalo-inari',
          name: 'Ivalo, Inari and Saariselkä',
          stats: [
            { value: '7,244', label: 'residents' },
            { value: '500+', label: 'municipal rental flats' },
          ],
          body: 'The municipality’s own company, Inarin Vuokra-asunnot Oy, lets flats in Ivalo, Inari and Saariselkä. Apply to it directly.',
          cta: 'Renting in Ivalo and Inari',
          image: IMG.inari,
          alt: 'Houses by the partly frozen Juutuanjoki river in Inari village in March',
        },
      ],
      more: 'Kemijärvi, Sodankylä and the other municipalities',
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
          alt: 'Ylläs and snowy forests from the air at a winter sunset',
        },
        {
          key: 'moving',
          title: 'Moving to Lapland',
          body: 'Address notification, winter tyres, daycare, electricity contract and the polar night. The first-month checklist.',
          image: IMG.moving,
          alt: 'A snowy main road through spruce forest, snow poles along the verge',
        },
        {
          key: 'cost',
          title: 'Cost of living',
          body: 'Rent, electricity, fuel and housing allowance in figures. What is cheaper here and what is not.',
          image: IMG.cost,
          alt: 'A stack of firewood and a bench against a log house on a snowy day',
        },
        {
          key: 'longStays',
          title: 'Long stays',
          body: 'From a month to a winter: a furnished rental flat, a cabin by the week or staff housing, and what the tenancy law covers.',
          image: IMG.longStays,
          alt: 'A red cabin among frosted birches',
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
    life: {
      kicker: 'Everyday life in Lapland',
      h2: 'Four seasons, four different Laplands.',
      lead: 'Here a season is more than weather. It decides how you get around in the evening, what you do at the weekend and when people look for a flat.',
      cards: [
        {
          season: 'November–January',
          title: 'Polar night',
          body: 'In the far north the sun does not rise at all: in Nuorgam the polar night lasts from 25 November to 17 January (Finnish Meteorological Institute). Skiing does not stop. About 50 kilometres of trails on Ounasvaara in Rovaniemi are lit, and on clear evenings the aurora shows from your own yard.',
          image: IMG.kaamos,
          alt: 'The aurora over a snowy forest road on a winter night',
          href: '/moving-to-lapland#light',
          linkLabel: 'Light and dark',
        },
        {
          season: 'March–April',
          title: 'Late winter',
          body: 'The light returns fast, but the lakes are still frozen. This is when people ice-fish, ski on the crust of the snow and ride snowmobiles along marked trails. Studded tyres may stay on after March if the conditions require it (Traficom).',
          image: IMG.kevat,
          alt: 'Two people ice fishing on a lake at sunset',
          href: '/moving-to-lapland#car',
          linkLabel: 'Car and distances',
        },
        {
          season: 'June–July',
          title: 'Midnight sun',
          body: 'In Nuorgam the sun does not set from 16 May to 29 July, and at the Arctic Circle in Rovaniemi it stays above the horizon around Midsummer (Finnish Meteorological Institute). Evenings are spent outdoors, on the lake and at the cottage. Blackout curtains are the key purchase of the summer.',
          image: IMG.kesa,
          alt: 'Lake Ounasjärvi and Ounastunturi fell in the midnight sun at Hetta in June, a rowing boat in front',
          href: '/seasonal-worker-housing#summer',
          linkLabel: 'Summer season and work',
        },
        {
          season: 'September–October',
          title: 'Autumn colours',
          body: 'Fell birches and dwarf shrubs turn red and gold, and the darkening evenings bring the aurora back. Autumn is also moving season: new students arrive in Rovaniemi in August and September, and that is when competition for studios is at its fiercest (Yle, 27 Jul 2025).',
          image: IMG.syksy,
          alt: 'A riverbank in autumn colours and a small storehouse',
          href: '/rentals',
          linkLabel: 'Rentals',
        },
      ],
      more: { label: 'Month by month: when to come to Lapland', href: '/when-to-go' },
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
      lead: 'Hotels, cabins and glass igloos are on our sister site laplandstays.com. Weekly and monthly stays and trip timing are still here.',
      links: [
        { label: 'laplandstays.com', href: 'https://laplandstays.com/', external: true },
        { label: 'Glass igloos', href: 'https://laplandstays.com/property-types/', external: true },
        { label: 'Cabins', href: 'https://laplandstays.com/cabins/', external: true },
        { label: 'Long stays', href: '/long-stays' },
        { label: 'When to go', href: '/when-to-go' },
      ],
    },
    authorNote: 'Figures checked against Statistics Finland, Kela and the municipalities’ own sources on 17 September 2026. Updated when the next quarter is published.',
    sources: pickSources('en', SOURCES),
  },
};
