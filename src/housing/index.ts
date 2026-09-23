import type { Lang } from '../i18n/useLang';
import type { HousingCopyMap, HousingPageCopy } from './types';
import { RENTALS } from './rentals';
import { SEASONAL } from './seasonal';
import { MOVING } from './moving';
import { COST } from './cost';
import { LONG_STAYS } from './longstays';
import { TOWN_ROVANIEMI } from './towns/rovaniemi';
import { TOWN_KEMI_TORNIO } from './towns/kemi-tornio';
import { TOWN_KITTILA_LEVI } from './towns/kittila-levi';
import { TOWN_IVALO_INARI } from './towns/ivalo-inari';
import { housingLang } from './labels';

export * from './types';
export * from './labels';
export { HOME } from './home';
export type { HousingHomeCopy } from './home';

/**
 * Vuokra-asuntojen paikkakuntasivut. Slugit ovat englanninkielisiä kuten muutkin
 * sivuston reitit (/fi/rentals/rovaniemi). Järjestys = mitattu kysyntä
 * (OpenSEO 18.9.2026, fi/2246): Rovaniemi 14 800 · Kemi 3 600 + Tornio 3 600 ·
 * Kittilä 880 + Levi 320 · Ivalo 590.
 */
export const RENTAL_TOWNS = {
  rovaniemi: TOWN_ROVANIEMI,
  'kemi-tornio': TOWN_KEMI_TORNIO,
  'kittila-levi': TOWN_KITTILA_LEVI,
  'ivalo-inari': TOWN_IVALO_INARI,
} as const;

export type RentalTownSlug = keyof typeof RENTAL_TOWNS;

export const RENTAL_TOWN_SLUGS = Object.keys(RENTAL_TOWNS) as RentalTownSlug[];

export function isRentalTownSlug(slug: string): slug is RentalTownSlug {
  return Object.prototype.hasOwnProperty.call(RENTAL_TOWNS, slug);
}

/** Sivukohtainen copy lukijan kielellä; englanti, kun omaa kieltä ei vielä ole. */
export function pickHousing(map: HousingCopyMap, lang: Lang): HousingPageCopy {
  return map[housingLang(lang)];
}

export const HOUSING_PAGES = { rentals: RENTALS, seasonal: SEASONAL, moving: MOVING, cost: COST, longStays: LONG_STAYS } as const;
