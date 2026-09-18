import type { Lang } from '../i18n/useLang';
import type { HousingLang } from './types';

/** Kielet, joilla asumissisältö on kirjoitettu natiivisti. Laajennetaan vasta mitatun kysynnän mukaan (§25). */
export const HOUSING_LANGS: readonly HousingLang[] = ['en', 'fi'];

export function isHousingLang(lang: Lang): lang is HousingLang {
  return (HOUSING_LANGS as readonly string[]).includes(lang);
}

/** Lukijan kieli → sisällön kieli (englanti, kun omaa kieltä ei vielä ole). */
export function housingLang(lang: Lang): HousingLang {
  return isHousingLang(lang) ? lang : 'en';
}

export const HOUSING_ROUTES = {
  rentals: '/rentals',
  seasonal: '/seasonal-worker-housing',
  moving: '/moving-to-lapland',
  cost: '/cost-of-living',
} as const;

export type HousingRouteKey = keyof typeof HOUSING_ROUTES;

export const HOUSING_ROUTE_PATHS: readonly string[] = Object.values(HOUSING_ROUTES);

/**
 * Navin ja murupolun otsikot kaikilla 12 kielellä. Lyhyet nimet kirjoitetaan
 * natiivisti, koska navi näkyy jokaisella kielellä vaikka sivun runko on
 * englanniksi. Sama kuvio kuin Nav.tsx:n DESTINATIONS_LABEL.
 */
export const HOUSING_NAV: Record<HousingRouteKey | 'stays' | 'housingHome', Record<Lang, string>> = {
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
  stays: {
    en: 'Stays', fi: 'Majoitus', sv: 'Boende', de: 'Unterkünfte',
    fr: 'Hébergements', es: 'Alojamiento', it: 'Alloggi', nl: 'Verblijven',
    'pt-BR': 'Hospedagem', ja: '宿泊', ko: '숙박', 'zh-CN': '住宿',
  },
};

/** Ilmoitus lukijalle, jonka kielellä sivua ei vielä ole. Linkit vievät englantiin ja suomeen. */
export const HOUSING_LANG_NOTICE: Record<Lang, string> = {
  en: '',
  fi: '',
  sv: 'Den här sidan finns än så länge på engelska och finska.',
  de: 'Diese Seite gibt es bisher auf Englisch und Finnisch.',
  fr: 'Cette page existe pour l’instant en anglais et en finnois.',
  es: 'Esta página está disponible por ahora en inglés y en finés.',
  it: 'Questa pagina è per ora disponibile in inglese e in finlandese.',
  nl: 'Deze pagina is voorlopig beschikbaar in het Engels en het Fins.',
  'pt-BR': 'Esta página está disponível, por enquanto, em inglês e finlandês.',
  ja: 'このページは現在、英語とフィンランド語でご覧いただけます。',
  ko: '이 페이지는 현재 영어와 핀란드어로 제공됩니다.',
  'zh-CN': '此页面目前提供英文和芬兰文版本。',
};

/** Sivujen yhteiset pienet UI-merkkijonot (vain sisältökielillä). */
export const HOUSING_UI: Record<HousingLang, {
  sources: string;
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
}> = {
  fi: {
    sources: 'Lähteet',
    sourcesLead: 'Jokainen luku tällä sivulla on jostakin näistä. Lasketut luvut näyttävät kaavansa.',
    updated: 'Tarkistettu 17.9.2026',
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
    sourcesLead: 'Every figure on this page comes from one of these. Calculated figures show their formula.',
    updated: 'Checked 17 September 2026',
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
};
