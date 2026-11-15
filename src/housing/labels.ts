import type { Lang } from '../i18n/useLang';
import type { HomeLang, HousingLang } from './types';

/**
 * Asumissivujen perustekstien kielet: englanti ja suomi ovat sivutiedostoissa (`src/housing/*.ts`) ja
 * sivupalassa valmiina. Muut kymmenen kieltä ovat 15.11.2026 alkaen `src/housing/l10n/<kieli>/`
 * -tiedostoissa ja ladataan tarvittaessa (Vesa 18.10.2026: sivu kaikille sivuston kielille).
 */
export const HOUSING_LANGS: readonly HousingLang[] = ['en', 'fi'];

export function isHousingLang(lang: Lang): lang is HousingLang {
  return (HOUSING_LANGS as readonly string[]).includes(lang);
}

/** Kielet, joilla asumisen ETUSIVU on kirjoitettu (alasivuja enemmän, ks. HomeLang). */
export const HOME_LANGS: readonly HomeLang[] = ['en', 'fi', 'fr', 'nl'];

export function isHomeLang(lang: Lang): lang is HomeLang {
  return (HOME_LANGS as readonly string[]).includes(lang);
}

export function homeLang(lang: Lang): HomeLang {
  return isHomeLang(lang) ? lang : 'en';
}

export const HOUSING_ROUTES = {
  rentals: '/rentals',
  seasonal: '/seasonal-worker-housing',
  moving: '/moving-to-lapland',
  cost: '/cost-of-living',
  /** 23.9.2026: lomasivusta asumissivuksi (kuukaudesta talveen), Vesa: "miksi kerrotaan luxushuviloista täällä?" */
  longStays: '/long-stays',
} as const;

export type HousingRouteKey = keyof typeof HOUSING_ROUTES;

/**
 * Navin ja murupolun otsikot kaikilla 12 kielellä. Sama kuvio kuin Nav.tsx:n DESTINATIONS_LABEL.
 */
export const HOUSING_NAV: Record<HousingRouteKey | 'stays' | 'housingHome' | 'staysSite', Record<Lang, string>> = {
  housingHome: {
    en: 'Living in Lapland', fi: 'Asuminen Lapissa', sv: 'Att bo i Lappland', de: 'Leben in Lappland',
    fr: 'Vivre en Laponie', es: 'Vivir en Laponia', it: 'Vivere in Lapponia', nl: 'Wonen in Lapland',
    'pt-BR': 'Morar na Lapônia', ja: 'ラップランドで暮らす', ko: '라플란드에서 살기', 'zh-CN': '在拉普兰生活',
  },
  rentals: {
    en: 'Rentals', fi: 'Vuokra-asunnot', sv: 'Hyresbostäder', de: 'Mietwohnungen',
    fr: 'Locations', es: 'Alquileres', it: 'Affitti', nl: 'Huurwoningen',
    'pt-BR': 'Aluguéis', ja: '賃貸住宅', ko: '임대 주택', 'zh-CN': '租房',
  },
  seasonal: {
    en: 'Seasonal workers', fi: 'Kausityöntekijälle', sv: 'Säsongsarbetare', de: 'Saisonkräfte',
    fr: 'Saisonniers', es: 'Temporeros', it: 'Stagionali', nl: 'Seizoenswerkers',
    'pt-BR': 'Trabalho sazonal', ja: '季節労働者の住まい', ko: '계절 근로자 숙소', 'zh-CN': '季节工住宿',
  },
  moving: {
    en: 'Moving to Lapland', fi: 'Muutto Lappiin', sv: 'Flytta till Lappland', de: 'Umzug nach Lappland',
    fr: 'S’installer en Laponie', es: 'Mudarse a Laponia', it: 'Trasferirsi in Lapponia', nl: 'Verhuizen naar Lapland',
    'pt-BR': 'Mudar para a Lapônia', ja: 'ラップランドへの移住', ko: '라플란드 이주', 'zh-CN': '移居拉普兰',
  },
  cost: {
    en: 'Cost of living', fi: 'Elinkustannukset', sv: 'Levnadskostnader', de: 'Lebenshaltungskosten',
    fr: 'Coût de la vie', es: 'Costo de vida', it: 'Costo della vita', nl: 'Kosten van levensonderhoud',
    'pt-BR': 'Custo de vida', ja: '生活費', ko: '생활비', 'zh-CN': '生活成本',
  },
  longStays: {
    en: 'Long stays', fi: 'Pitkät jaksot', sv: 'Långtidsvistelser', de: 'Langzeitaufenthalte',
    fr: 'Séjours longue durée', es: 'Larga estancia', it: 'Soggiorni lunghi', nl: 'Lange verblijven',
    'pt-BR': 'Longa duração', ja: '長期滞在', ko: '장기 숙박', 'zh-CN': '长期入住',
  },
  stays: {
    en: 'Stays', fi: 'Majoitus', sv: 'Boende', de: 'Unterkünfte',
    fr: 'Hébergements', es: 'Alojamiento', it: 'Alloggi', nl: 'Verblijven',
    'pt-BR': 'Hospedagem', ja: '宿泊', ko: '숙박', 'zh-CN': '住宿',
  },
  /** Vaihe 2 (18.9.2026): hotellit, iglut ja erämaalodget ovat laplandstays.comissa. */
  staysSite: {
    en: 'Hotels & cabins (LaplandStays)', fi: 'Hotellit ja mökit (LaplandStays)', sv: 'Hotell och stugor (LaplandStays)',
    de: 'Hotels & Hütten (LaplandStays)', fr: 'Hôtels et chalets (LaplandStays)', es: 'Hoteles y cabañas (LaplandStays)',
    it: 'Hotel e chalet (LaplandStays)', nl: 'Hotels en huisjes (LaplandStays)', 'pt-BR': 'Hotéis e chalés (LaplandStays)',
    ja: 'ホテルとコテージ（LaplandStays）', ko: '호텔과 코티지 (LaplandStays)', 'zh-CN': '酒店与小木屋（LaplandStays）',
  },
};

/** Sivujen yhteiset pienet UI-merkkijonot. */
export interface HousingUiCopy {
  sources: string;
  /** Avattavan lähderivin otsikko (SourcesDisclosure, 23.9.2026). */
  sourcesSummary: string;
  sourcesLead: string;
  updated: string;
  readMore: string;
  faqKicker: string;
  faqH2: string;
  siblingsKicker: string;
  siblingsH2: string;
  photoCredit: string;
  affiliateNote: string;
  onThisPage: string;
  photo: string;
  photosHeading: string;
  photosLead: string;
}

/**
 * Etusivun kielet (en, fi, fr, nl). Asumissivujen muut kahdeksan kieltä saavat samat tekstit omasta
 * `l10n/<kieli>/common.ts`:stä.
 */
export const HOUSING_UI: Record<HomeLang, HousingUiCopy> = {
  fi: {
    sources: 'Lähteet',
    sourcesSummary: 'Lähteet ja kuvat',
    sourcesLead: 'Jokainen luku tällä sivulla on jostakin näistä. Lasketut luvut näyttävät kaavansa.',
    updated: 'Tarkistettu 15.11.2026',
    readMore: 'Lue lisää',
    faqKicker: 'Kysytyimmät',
    faqH2: 'Ennen kuin muutat.',
    siblingsKicker: 'Asuminen Lapissa',
    siblingsH2: 'Muut asumisen sivut.',
    photoCredit: 'Kuva: LaplandVibes',
    affiliateNote: 'Kumppanilinkki: varaus tuo meille komission, sinulle hinta on sama.',
    onThisPage: 'Tällä sivulla',
    photo: 'Kuva',
    photosHeading: 'Kuvat',
    photosLead: 'Avoimella lisenssillä käytetyt kuvat Wikimedia Commonsista. Muut kuvat: LaplandVibes.',
  },
  en: {
    sources: 'Sources',
    sourcesSummary: 'Sources and photos',
    sourcesLead: 'Every figure on this page comes from one of these. Calculated figures show their formula.',
    updated: 'Checked 15 November 2026',
    readMore: 'Read more',
    faqKicker: 'Most asked',
    faqH2: 'Before you move.',
    siblingsKicker: 'Living in Lapland',
    siblingsH2: 'The other housing pages.',
    photoCredit: 'Photo: LaplandVibes',
    affiliateNote: 'Partner link: a booking earns us a commission, the price to you is the same.',
    onThisPage: 'On this page',
    photo: 'Photo',
    photosHeading: 'Photos',
    photosLead: 'Openly licensed photos from Wikimedia Commons. All other photos: LaplandVibes.',
  },
  fr: {
    sources: 'Sources',
    sourcesSummary: 'Sources et photos',
    sourcesLead: 'Chaque chiffre de cette page vient de l’une d’elles. Les chiffres calculés montrent leur formule.',
    updated: 'Vérifié le 15 novembre 2026',
    readMore: 'En savoir plus',
    faqKicker: 'Les questions les plus posées',
    faqH2: 'Avant de vous installer.',
    siblingsKicker: 'Vivre en Laponie',
    siblingsH2: 'Les autres pages sur le logement.',
    photoCredit: 'Photo : LaplandVibes',
    affiliateNote: 'Lien partenaire : une réservation nous rapporte une commission, le prix reste le même pour vous.',
    onThisPage: 'Sur cette page',
    photo: 'Photo',
    photosHeading: 'Photos',
    photosLead: 'Photos sous licence libre issues de Wikimedia Commons. Toutes les autres photos : LaplandVibes.',
  },
  nl: {
    sources: 'Bronnen',
    sourcesSummary: 'Bronnen en foto’s',
    sourcesLead: 'Elk cijfer op deze pagina komt uit een van deze bronnen. Berekende cijfers laten hun formule zien.',
    updated: 'Gecontroleerd op 15 november 2026',
    readMore: 'Lees meer',
    faqKicker: 'Meest gesteld',
    faqH2: 'Voordat u verhuist.',
    siblingsKicker: 'Wonen in Lapland',
    siblingsH2: 'De andere pagina’s over wonen.',
    photoCredit: 'Foto: LaplandVibes',
    affiliateNote: 'Partnerlink: een boeking levert ons commissie op, u betaalt dezelfde prijs.',
    onThisPage: 'Op deze pagina',
    photo: 'Foto',
    photosHeading: 'Foto’s',
    photosLead: 'Foto’s met een vrije licentie van Wikimedia Commons. Alle andere foto’s: LaplandVibes.',
  },
};

/**
 * Työpöytänavin ylärivi (1280 px) mitattiin 18.9.2026 tiukaksi: neljä pitkää
 * nimikettä + kaksi pudotusvalikkoa + CTA eivät mahdu yhdelle riville.
 * Ylärivillä lyhyt muoto, pudotusvalikossa, alatunnisteessa ja murupolussa
 * täysi (HOUSING_NAV).
 */
export const HOUSING_NAV_SHORT: Record<HousingRouteKey, Record<Lang, string>> = {
  rentals: HOUSING_NAV.rentals,
  seasonal: {
    en: 'Seasonal work', fi: 'Kausityö', sv: 'Säsongsjobb', de: 'Saisonarbeit',
    fr: 'Saisonniers', es: 'Temporada', it: 'Stagionali', nl: 'Seizoenswerk',
    'pt-BR': 'Temporada', ja: '季節労働', ko: '계절 근로', 'zh-CN': '季节工',
  },
  moving: {
    en: 'Moving', fi: 'Muutto', sv: 'Flytta hit', de: 'Umzug',
    fr: 'S’installer', es: 'Mudarse', it: 'Trasferirsi', nl: 'Verhuizen',
    'pt-BR': 'Mudar-se', ja: '移住', ko: '이주', 'zh-CN': '移居',
  },
  cost: {
    en: 'Cost of living', fi: 'Elinkustannukset', sv: 'Kostnader', de: 'Kosten',
    fr: 'Coût de la vie', es: 'Costo de vida', it: 'Costo della vita', nl: 'Kosten',
    'pt-BR': 'Custo de vida', ja: '生活費', ko: '생활비', 'zh-CN': '生活成本',
  },
  /** Ei ylärivillä (Majoitus-valikossa), mutta tyyppi vaatii jokaisen reitin. */
  longStays: HOUSING_NAV.longStays,
};
