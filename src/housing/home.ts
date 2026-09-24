import type { Faq, HomeLang, Source } from './types';
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

export const HOME: Record<HomeLang, HousingHomeCopy> = {
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
  /**
   * Ranska (24.9.2026). Mitattu kysyntä ENNEN kirjoittamista (OpenSEO, FR/2250):
   * vivre en laponie 170/kk · travailler en laponie 70 · s’installer en laponie 10 ·
   * emploi saisonnier laponie 10. Suomi-tason haut ovat isompia (vivre en finlande 390,
   * coût de la vie finlande 320), mutta ne eivät ole Lappi-sivuston aihe.
   * 🔴 "logement laponie" (320, kaupallinen) on majoitushaku = laplandstays.com (§23),
   * ei tämän sivun kohde.
   * Teksti on kirjoitettu ranskaksi, ei käännetty. Luvut ovat samat lähteistetyt luvut
   * kuin fi/en-versiossa. Alasivut ovat yhä englanniksi, ja lukija näkee sen sivun
   * omasta kielilapusta (HOUSING_LANG_NOTICE).
   */
  fr: {
    metaTitle: 'Vivre en Laponie : logement, travail saisonnier et budget',
    metaDescription:
      'Vivre en Laponie finlandaise : trouver un logement de Rovaniemi à Ivalo, le logement des saisonniers, le coût de la vie et l’année au quotidien. Un studio à Rovaniemi coûte environ 560 € par mois.',
    schemaName: 'StayInLapland : vivre en Laponie finlandaise',
    hero: {
      eyebrow: 'Laponie finlandaise · 176 215 habitants',
      h1a: 'Vivre en Laponie.',
      h1b: 'De la nuit polaire au soleil de minuit.',
      lead: 'Où trouver un logement, ce que coûte le quotidien et comment on vit ici toute l’année. Un studio à Rovaniemi coûte environ 560 euros par mois.',
      ctaPrimary: 'Locations',
      ctaSecondary: 'Pour les saisonniers',
    },
    stats: [
      { value: '560 €/mois', label: 'studio à Rovaniemi\u00a0: 30 m² × 18,66 €/m²' },
      { value: '720 €/mois', label: 'deux-pièces à Rovaniemi\u00a0: 50 m² × 14,35 €/m²' },
      { value: '66 191', label: 'habitants à Rovaniemi au 31 décembre 2025' },
      { value: '+2,0 %', label: 'croissance de Kittilä en 2025' },
    ],
    statsSource: 'Tilastokeskus (office statistique finlandais)\u00a0: loyers au m² du parc privé, avril–juin 2026 (arrondis)\u00a0; population au 31 décembre 2025.',
    towns: {
      kicker: 'Les locations commune par commune',
      h2: 'Où allez-vous vous installer\u00a0?',
      lead:
        'La Laponie compte 176 215 habitants (Tilastokeskus, 31 décembre 2025), plus d’un tiers à Rovaniemi. Chaque page donne le niveau des loyers, les bailleurs et où déposer un dossier.',
      items: [
        {
          slug: 'rovaniemi',
          name: 'Rovaniemi',
          stats: [
            { value: '66 191', label: 'habitants' },
            { value: '≈ 560 €', label: 'loyer d’un studio par mois' },
          ],
          body: 'Le plus grand marché locatif de Laponie. Les studios se font rares en août et en septembre, quand les étudiants arrivent en ville.',
          cta: 'Louer à Rovaniemi',
          image: IMG.rovaniemi,
          alt: 'Rovaniemi vu d’Ounasvaara : le fleuve Kemijoki, les ponts de Suutarinkorva et les quartiers d’habitation en juin',
        },
        {
          slug: 'kemi-tornio',
          name: 'Kemi et Tornio',
          stats: [
            { value: '19 339', label: 'habitants à Kemi' },
            { value: '20 823', label: 'habitants à Tornio' },
          ],
          body: 'Commencez par les sociétés de logement des villes elles-mêmes : à Kemi, Itätuuli possède à elle seule plus de 600 appartements.',
          cta: 'Louer à Kemi et Tornio',
          image: IMG.kemiTornio,
          alt: 'L’église de Kemi sous la neige, un soir d’hiver',
        },
        {
          slug: 'kittila-levi',
          name: 'Kittilä et Levi',
          stats: [
            { value: '6 973', label: 'habitants' },
            { value: '+2,0 %', label: 'croissance en 2025' },
          ],
          body: 'La commune qui grandit le plus vite de Laponie. L’hiver, des milliers de saisonniers cherchent les mêmes appartements.',
          cta: 'Louer à Kittilä et Levi',
          image: IMG.levi,
          alt: 'Maisons neuves en construction à Levi, le fjeld Levitunturi derrière',
        },
        {
          slug: 'ivalo-inari',
          name: 'Ivalo, Inari et Saariselkä',
          stats: [
            { value: '7 244', label: 'habitants' },
            { value: 'plus de 500', label: 'logements communaux' },
          ],
          body: 'La société de la commune, Inarin Vuokra-asunnot Oy, loue des appartements à Ivalo, Inari et Saariselkä. Adressez-vous directement à elle.',
          cta: 'Louer à Ivalo et Inari',
          image: IMG.inari,
          alt: 'Maisons au bord du Juutuanjoki en partie gelé, au village d’Inari, en mars',
        },
      ],
      more: 'Kemijärvi, Sodankylä et les autres communes',
    },
    paths: {
      kicker: 'Selon votre situation',
      h2: 'Par où commencer\u00a0?',
      lead: 'Vous venez pour une saison, vous vous installez pour de bon, ou vous cherchez un toit pour quelques semaines\u00a0?',
      cards: [
        {
          key: 'seasonal',
          title: 'Le logement des saisonniers',
          body: 'Logement de l’employeur, chalet loué à la saison ou appartement communal. Les questions à poser avant de signer.',
          image: IMG.seasonal,
          alt: 'Ylläs et les forêts enneigées vues du ciel, au coucher du soleil en hiver',
        },
        {
          key: 'moving',
          title: 'S’installer en Laponie',
          body: 'Déclaration d’adresse, pneus hiver, crèche, contrat d’électricité et nuit polaire. La liste du premier mois.',
          image: IMG.moving,
          alt: 'Route enneigée à travers une forêt d’épicéas, jalons de déneigement sur le bas-côté',
        },
        {
          key: 'cost',
          title: 'Le coût de la vie',
          body: 'Loyer, électricité, carburant et allocation logement en chiffres. Ce qui coûte moins cher ici, et ce qui coûte plus.',
          image: IMG.cost,
          alt: 'Pile de bois de chauffage et banc contre une maison en rondins, un jour de neige',
        },
        {
          key: 'longStays',
          title: 'Séjours longue durée',
          body: 'D’un mois à tout un hiver : appartement meublé, chalet à la semaine ou logement de l’employeur, et ce que couvre la loi sur les baux.',
          image: IMG.longStays,
          alt: 'Chalet rouge au milieu de bouleaux givrés',
        },
      ],
    },
    work: {
      kicker: 'Site jumeau · LaplandWork.com',
      h2a: 'D’abord le travail,',
      h2b: 'le logement\u00a0suit.',
      body: 'LaplandWork.com rassemble les offres d’emploi en Laponie : stations de ski, hôtels, prestataires d’activités et santé. En saison, le logement vient souvent avec le poste, alors regardez les offres avant de chercher un appartement.',
      stripText: 'LaplandWork.com : les offres d’emploi en Laponie, dans les stations, les hôtels et la santé.',
      cta: 'Voir les offres',
      image: IMG.work,
      alt: 'Le loueur de skis et l’école de ski de la station d’Ylläs en été, les canons à neige rangés sous l’auvent',
      caption: 'Ylläs en juillet 2026 : les canons à neige attendent la saison. Photo : LaplandVibes.',
    },
    life: {
      kicker: 'Le quotidien en Laponie',
      h2: 'Quatre saisons, quatre Laponies.',
      lead: 'Ici, la saison n’est pas qu’une affaire de météo. Elle décide comment on se déplace le soir, ce qu’on fait le week-end et à quel moment on cherche un logement.',
      cards: [
        {
          season: 'Novembre–janvier',
          title: 'La nuit polaire',
          body: 'À l’extrême nord, le soleil ne se lève pas du tout : à Nuorgam, la nuit polaire dure du 25 novembre au 17 janvier (Institut météorologique finlandais). Le ski ne s’arrête pas pour autant. À Rovaniemi, une cinquantaine de kilomètres de pistes sont éclairées sur l’Ounasvaara, et les soirs clairs, l’aurore boréale se voit depuis la cour.',
          image: IMG.kaamos,
          alt: 'Aurore boréale au-dessus d’une route forestière enneigée, la nuit',
          href: '/moving-to-lapland#light',
          linkLabel: 'Lumière et obscurité',
        },
        {
          season: 'Mars–avril',
          title: 'La fin de l’hiver',
          body: 'La lumière revient vite, mais les lacs sont encore gelés. C’est la saison de la pêche sur glace, du ski sur la neige durcie et de la motoneige sur les pistes balisées. Les pneus cloutés restent autorisés après le mois de mars si les conditions l’exigent (Traficom).',
          image: IMG.kevat,
          alt: 'Deux pêcheurs sur la glace au coucher du soleil',
          href: '/moving-to-lapland#car',
          linkLabel: 'Voiture et distances',
        },
        {
          season: 'Juin–juillet',
          title: 'Le soleil de minuit',
          body: 'À Nuorgam, le soleil ne se couche pas du 16 mai au 29 juillet, et à Rovaniemi, sur le cercle polaire, il reste au-dessus de l’horizon autour de la Saint-Jean (Institut météorologique finlandais). Les soirées se passent dehors, sur le lac et au chalet. Les rideaux occultants sont l’achat de l’été.',
          image: IMG.kesa,
          alt: 'Le lac Ounasjärvi et le fjeld Ounastunturi sous le soleil de minuit à Hetta, en juin, une barque au premier plan',
          href: '/seasonal-worker-housing#summer',
          linkLabel: 'La saison d’été et le travail',
        },
        {
          season: 'Septembre–octobre',
          title: 'Les couleurs d’automne',
          body: 'Les bouleaux des fjelds et les arbrisseaux virent au rouge et à l’or, et les soirées qui raccourcissent ramènent les aurores. L’automne est aussi la saison des déménagements : les nouveaux étudiants arrivent à Rovaniemi en août et en septembre, et c’est là que la concurrence pour les studios est la plus rude (Yle, 27 juillet 2025).',
          image: IMG.syksy,
          alt: 'Berge aux couleurs d’automne et petit grenier en bois',
          href: '/rentals',
          linkLabel: 'Locations',
        },
      ],
      more: { label: 'Mois par mois : quand venir en Laponie', href: '/when-to-go' },
    },
    faq: {
      kicker: 'Les questions les plus posées',
      h2: 'Avant de vous installer.',
      items: [
        {
          q: 'Peut-on vivre en Laponie toute l’année sans voiture\u00a0?',
          a: 'À Rovaniemi, oui : le centre, l’université et les commerces sont accessibles à pied ou en bus. Dans les villages de fjeld et les petites communes, la voiture est en pratique indispensable, car les distances se comptent en dizaines de kilomètres et les bus sont rares.',
        },
        {
          q: 'Combien coûte un logement en location à Rovaniemi\u00a0?',
          a: 'Selon Tilastokeskus, le loyer moyen du parc privé à Rovaniemi était de 18,66 € par m² pour un studio en avril–juin 2026 et de 14,35 € par m² pour un deux-pièces. Multipliez par la surface : un studio de 30 m² revient à environ 560 € par mois et un deux-pièces de 50 m² à environ 720 €.',
        },
        {
          q: 'L’employeur loge-t-il les saisonniers\u00a0?',
          a: 'Souvent, mais pas toujours et pas gratuitement. Dans les stations, les employeurs louent des maisons mitoyennes et des chalets pour le personnel, et le loyer est en général retenu sur le salaire. Demandez le détail du logement par écrit dès l’offre d’emploi.',
        },
        {
          q: 'La nuit polaire, c’est sombre à quel point\u00a0?',
          a: 'D’après l’Institut météorologique finlandais, la nuit polaire dure presque deux mois à Nuorgam (du 25 novembre au 17 janvier) et seulement quatre jours à Sodankylä, juste avant Noël. Rovaniemi n’a pas de vraie nuit polaire, car sa limite passe un peu au nord du cercle polaire (Foreca) : le soleil d’hiver reste bas, mais il fait clair à midi, et la neige démultiplie le peu de lumière qu’il y a.',
        },
        {
          q: 'Qui peut m’aider à venir de l’étranger\u00a0?',
          a: 'Notre site jumeau laplandwork.com détaille les titres de séjour, le numéro d’identité finlandais, la carte d’impôt et le compte bancaire. Le logement et le quotidien sont sur la page S’installer en Laponie.',
        },
      ],
    },
    holiday: {
      kicker: 'Vous venez en vacances\u00a0?',
      h2: 'Hôtels, chalets et igloos.',
      lead: 'Les hôtels, les chalets et les igloos de verre sont sur notre site jumeau laplandstays.com. Les séjours à la semaine ou au mois et le calendrier du voyage restent ici.',
      links: [
        { label: 'laplandstays.com', href: 'https://laplandstays.com/fr/', external: true },
        { label: 'Igloos de verre', href: 'https://laplandstays.com/fr/property-types/', external: true },
        { label: 'Chalets', href: 'https://laplandstays.com/fr/cabins/', external: true },
        { label: 'Séjours longue durée', href: '/long-stays' },
        { label: 'Quand venir', href: '/when-to-go' },
      ],
    },
    authorNote: 'Chiffres vérifiés auprès de Tilastokeskus, de Kela et des communes le 17 septembre 2026. Mis à jour à la publication du trimestre suivant.',
    sources: pickSources('fr', SOURCES),
  },
  /**
   * Hollanti (24.9.2026). Mitattu kysyntä ENNEN kirjoittamista (OpenSEO, NL/2528):
   * wonen in lapland 110/kk · werken in lapland 40 · leven in lapland 40 ·
   * emigreren naar lapland 20. Suomi-tason haut ovat isompia (emigreren naar finland 140,
   * wonen in finland 70), mutta ne eivät ole Lappi-sivuston aihe.
   * 🔴 "huis huren finland" (90, kaupallinen) on majoitus-/lomavuokraushaku = stays (§23).
   * Teksti on kirjoitettu hollanniksi, ei käännetty. Luvut ovat samat lähteistetyt luvut
   * kuin fi/en-versiossa; hollannin lukumuoto (66.191 vs 66 191) ja €-merkin paikka
   * ovat hollannin omat.
   */
  nl: {
    metaTitle: 'Wonen in Lapland: huren, seizoenswerk en wat het kost',
    metaDescription:
      'Wonen in Fins Lapland: een huurwoning van Rovaniemi tot Ivalo, huisvesting voor seizoenswerkers, de kosten van het dagelijks leven en het jaar hierboven. Een studio in Rovaniemi kost ongeveer € 560 per maand.',
    schemaName: 'StayInLapland: wonen in Fins Lapland',
    hero: {
      eyebrow: 'Fins Lapland · 176.215 inwoners',
      h1a: 'Wonen in Lapland.',
      h1b: 'Van poolnacht tot middernachtzon.',
      lead: 'Waar u een huurwoning vindt, wat het dagelijks leven kost en hoe u hier het jaar doorkomt. Een studio in Rovaniemi kost ongeveer 560 euro per maand.',
      ctaPrimary: 'Huurwoningen',
      ctaSecondary: 'Voor seizoenswerkers',
    },
    stats: [
      { value: '€ 560 p.m.', label: 'studio in Rovaniemi: 30 m² × € 18,66/m²' },
      { value: '€ 720 p.m.', label: 'tweekamerwoning in Rovaniemi: 50 m² × € 14,35/m²' },
      { value: '66.191', label: 'inwoners in Rovaniemi op 31 december 2025' },
      { value: '+2,0 %', label: 'bevolkingsgroei van Kittilä in 2025' },
    ],
    statsSource: 'Tilastokeskus (het Finse statistiekbureau): huren per m² in de vrije sector, april–juni 2026 (afgerond); bevolking op 31 december 2025.',
    towns: {
      kicker: 'Huurwoningen per plaats',
      h2: 'Waar gaat u wonen?',
      lead:
        'In Lapland wonen 176.215 mensen (Tilastokeskus, 31 december 2025), ruim een derde daarvan in Rovaniemi. Elke pagina geeft het huurniveau, de verhuurders en waar u zich inschrijft.',
      items: [
        {
          slug: 'rovaniemi',
          name: 'Rovaniemi',
          stats: [
            { value: '66.191', label: 'inwoners' },
            { value: '± € 560', label: 'huur van een studio per maand' },
          ],
          body: 'De grootste huurmarkt van Lapland. Studio’s zijn schaars in augustus en september, als de studenten naar de stad komen.',
          cta: 'Huren in Rovaniemi',
          image: IMG.rovaniemi,
          alt: 'Rovaniemi gezien vanaf Ounasvaara: de rivier Kemijoki, de Suutarinkorva-bruggen en woonwijken in juni',
        },
        {
          slug: 'kemi-tornio',
          name: 'Kemi en Tornio',
          stats: [
            { value: '19.339', label: 'inwoners in Kemi' },
            { value: '20.823', label: 'inwoners in Tornio' },
          ],
          body: 'Begin bij de woningbedrijven van de steden zelf: Itätuuli heeft in Kemi alleen al ruim 600 woningen.',
          cta: 'Huren in Kemi en Tornio',
          image: IMG.kemiTornio,
          alt: 'De kerk van Kemi in de sneeuw op een winteravond',
        },
        {
          slug: 'kittila-levi',
          name: 'Kittilä en Levi',
          stats: [
            { value: '6.973', label: 'inwoners' },
            { value: '+2,0 %', label: 'bevolkingsgroei 2025' },
          ],
          body: 'De snelst groeiende gemeente van Lapland. In de winter zoeken duizenden seizoenswerkers dezelfde woningen.',
          cta: 'Huren in Kittilä en Levi',
          image: IMG.levi,
          alt: 'Nieuwbouwhuizen in aanbouw in Levi, met de Levitunturi erachter',
        },
        {
          slug: 'ivalo-inari',
          name: 'Ivalo, Inari en Saariselkä',
          stats: [
            { value: '7.244', label: 'inwoners' },
            { value: 'ruim 500', label: 'gemeentelijke huurwoningen' },
          ],
          body: 'Het gemeentelijke bedrijf Inarin Vuokra-asunnot Oy verhuurt woningen in Ivalo, Inari en Saariselkä. Meld u rechtstreeks bij dat bedrijf aan.',
          cta: 'Huren in Ivalo en Inari',
          image: IMG.inari,
          alt: 'Huizen aan de deels bevroren rivier Juutuanjoki in het dorp Inari in maart',
        },
      ],
      more: 'Kemijärvi, Sodankylä en de andere gemeenten',
    },
    paths: {
      kicker: 'Naar situatie',
      h2: 'Waar begint u?',
      lead: 'Komt u voor één seizoen werken, verhuist u voorgoed, of zoekt u een dak voor een paar weken?',
      cards: [
        {
          key: 'seasonal',
          title: 'Huisvesting voor seizoenswerkers',
          body: 'Een woning van de werkgever, een vakantiehuis voor het seizoen of een gemeentewoning. Wat u vraagt voordat u tekent.',
          image: IMG.seasonal,
          alt: 'Ylläs en besneeuwde bossen vanuit de lucht bij zonsondergang in de winter',
        },
        {
          key: 'moving',
          title: 'Verhuizen naar Lapland',
          body: 'Adreswijziging, winterbanden, kinderopvang, energiecontract en de poolnacht. De checklist voor uw eerste maand.',
          image: IMG.moving,
          alt: 'Besneeuwde weg door een sparrenbos, sneeuwstokken langs de berm',
        },
        {
          key: 'cost',
          title: 'Kosten van levensonderhoud',
          body: 'Huur, stroom, brandstof en huurtoeslag in cijfers. Wat hier goedkoper is en wat niet.',
          image: IMG.cost,
          alt: 'Stapel brandhout en een bank tegen een blokhut op een besneeuwde dag',
        },
        {
          key: 'longStays',
          title: 'Lange verblijven',
          body: 'Van een maand tot een hele winter: een gemeubileerde huurwoning, een huisje per week of een woning van de werkgever, en wat de huurwet dekt.',
          image: IMG.longStays,
          alt: 'Rood huisje tussen berijpte berken',
        },
      ],
    },
    work: {
      kicker: 'Zustersite · LaplandWork.com',
      h2a: 'Eerst het werk,',
      h2b: 'dan de\u00a0woning.',
      body: 'LaplandWork.com verzamelt de vacatures in Lapland: skigebieden, hotels, activiteitenbedrijven en de zorg. Bij seizoenswerk hoort vaak een woning, kijk dus eerst naar de vacatures en pas daarna naar huurwoningen.',
      stripText: 'LaplandWork.com: vacatures in Lapland, in de skigebieden, de hotels en de zorg.',
      cta: 'Bekijk de vacatures',
      image: IMG.work,
      alt: 'De skiverhuur en skischool van skigebied Ylläs in de zomer, sneeuwkanonnen opgeslagen onder het afdak',
      caption: 'Ylläs in juli 2026: de sneeuwkanonnen wachten op het seizoen. Foto: LaplandVibes.',
    },
    life: {
      kicker: 'Het dagelijks leven in Lapland',
      h2: 'Vier seizoenen, vier verschillende Laplanden.',
      lead: 'Een seizoen is hier meer dan het weer. Het bepaalt hoe u ’s avonds reist, wat u in het weekend doet en wanneer mensen een woning zoeken.',
      cards: [
        {
          season: 'November–januari',
          title: 'De poolnacht',
          body: 'In het uiterste noorden komt de zon helemaal niet op: in Nuorgam duurt de poolnacht van 25 november tot 17 januari (het Fins Meteorologisch Instituut). Toch wordt er gewoon geskied. Op de Ounasvaara bij Rovaniemi is zo’n vijftig kilometer loipe verlicht, en op heldere avonden ziet u het noorderlicht vanaf uw eigen erf.',
          image: IMG.kaamos,
          alt: 'Noorderlicht boven een besneeuwde bosweg in de winternacht',
          href: '/moving-to-lapland#light',
          linkLabel: 'Licht en donker',
        },
        {
          season: 'Maart–april',
          title: 'Het einde van de winter',
          body: 'Het licht komt snel terug, maar de meren liggen nog dicht. Dit is de tijd van ijsvissen, skiën op de harde sneeuwkorst en sneeuwscooters op gemarkeerde routes. Spijkerbanden mogen ook na maart blijven zitten als de omstandigheden daarom vragen (Traficom).',
          image: IMG.kevat,
          alt: 'Twee ijsvissers op het ijs bij zonsondergang',
          href: '/moving-to-lapland#car',
          linkLabel: 'Auto en afstanden',
        },
        {
          season: 'Juni–juli',
          title: 'De middernachtzon',
          body: 'In Nuorgam gaat de zon van 16 mei tot 29 juli niet onder, en in Rovaniemi, op de poolcirkel, blijft hij rond midzomer boven de horizon (het Fins Meteorologisch Instituut). De avonden brengt u buiten door, op het meer en bij het zomerhuisje. Verduisterende gordijnen zijn de belangrijkste aankoop van de zomer.',
          image: IMG.kesa,
          alt: 'Het meer Ounasjärvi en de Ounastunturi in de middernachtzon bij Hetta in juni, met een roeiboot op de voorgrond',
          href: '/seasonal-worker-housing#summer',
          linkLabel: 'Zomerseizoen en werk',
        },
        {
          season: 'September–oktober',
          title: 'De herfstkleuren',
          body: 'De berken op de fjelden en de dwergstruiken kleuren rood en goud, en de donkerder avonden brengen het noorderlicht terug. De herfst is ook verhuistijd: in augustus en september komen de nieuwe studenten naar Rovaniemi, en dan is de strijd om studio’s het hevigst (Yle, 27 juli 2025).',
          image: IMG.syksy,
          alt: 'Rivieroever in herfstkleuren met een klein voorraadschuurtje',
          href: '/rentals',
          linkLabel: 'Huurwoningen',
        },
      ],
      more: { label: 'Maand voor maand: wanneer naar Lapland?', href: '/when-to-go' },
    },
    faq: {
      kicker: 'Meest gesteld',
      h2: 'Voordat u verhuist.',
      items: [
        {
          q: 'Kunt u in Lapland het hele jaar zonder auto wonen?',
          a: 'In Rovaniemi wel: het centrum, de universiteit en de winkels liggen op loop- of busafstand. In de fjelddorpen en de kleinere gemeenten is een auto in de praktijk onmisbaar, want de afstanden lopen in tientallen kilometers en er rijden weinig bussen.',
        },
        {
          q: 'Wat kost een huurwoning in Rovaniemi?',
          a: 'Volgens Tilastokeskus was de gemiddelde vrijesectorhuur in Rovaniemi in april–juni 2026 € 18,66 per m² voor een studio en € 14,35 per m² voor een tweekamerwoning. Vermenigvuldig met de oppervlakte: een studio van 30 m² komt op ongeveer € 560 per maand en een tweekamerwoning van 50 m² op ongeveer € 720.',
        },
        {
          q: 'Regelt de werkgever huisvesting voor seizoenswerkers?',
          a: 'Vaak wel, maar niet altijd en niet gratis. In de skigebieden huren werkgevers rijtjeshuizen en vakantiewoningen voor hun personeel, en de huur wordt meestal op het loon ingehouden. Vraag bij het aanbod schriftelijk hoe de huisvesting geregeld is.',
        },
        {
          q: 'Hoe donker is de poolnacht echt?',
          a: 'Volgens het Fins Meteorologisch Instituut duurt de poolnacht in Nuorgam bijna twee maanden (25 november–17 januari) en in Sodankylä maar vier dagen, vlak voor Kerstmis. Rovaniemi heeft geen echte poolnacht, want die grens loopt net ten noorden van de poolcirkel (Foreca): de winterzon blijft laag, maar rond het middaguur is het licht, en de sneeuw versterkt het beetje licht dat er is.',
        },
        {
          q: 'Waar krijg ik hulp bij een verhuizing vanuit het buitenland?',
          a: 'Onze zustersite laplandwork.com behandelt verblijfsvergunningen, het Finse persoonsnummer, de belastingkaart en een bankrekening. De woning en het dagelijks leven staan op de pagina Verhuizen naar Lapland.',
        },
      ],
    },
    holiday: {
      kicker: 'Komt u op vakantie?',
      h2: 'Hotels, huisjes en iglo’s.',
      lead: 'Hotels, huisjes en glazen iglo’s staan op onze zustersite laplandstays.com. Verblijven van een week of een maand en de timing van uw reis blijven hier.',
      links: [
        { label: 'laplandstays.com', href: 'https://laplandstays.com/nl/', external: true },
        { label: 'Glazen iglo’s', href: 'https://laplandstays.com/nl/property-types/', external: true },
        { label: 'Huisjes', href: 'https://laplandstays.com/nl/cabins/', external: true },
        { label: 'Lange verblijven', href: '/long-stays' },
        { label: 'De beste reistijd', href: '/when-to-go' },
      ],
    },
    authorNote: 'Cijfers gecontroleerd bij Tilastokeskus, Kela en de gemeenten zelf op 17 september 2026. We werken ze bij zodra het volgende kwartaal verschijnt.',
    sources: pickSources('nl', SOURCES),
  },
};
