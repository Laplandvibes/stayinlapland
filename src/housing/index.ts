import { RENTALS } from './rentals';
import { SEASONAL } from './seasonal';
import { MOVING } from './moving';
import { COST } from './cost';
import { LONG_STAYS } from './longstays';
import { TOWN_ROVANIEMI } from './towns/rovaniemi';
import { TOWN_KEMI_TORNIO } from './towns/kemi-tornio';
import { TOWN_KITTILA_LEVI } from './towns/kittila-levi';
import { TOWN_IVALO_INARI } from './towns/ivalo-inari';
import { TOWN_KEMIJARVI } from './towns/kemijarvi';
import { TOWN_SODANKYLA } from './towns/sodankyla';

export * from './types';
export * from './labels';
export { HOME } from './home';
export type { HousingHomeCopy } from './home';

/**
 * Vuokra-asuntojen paikkakuntasivut. Slugit ovat englanninkielisiä kuten muutkin
 * sivuston reitit (/fi/rentals/rovaniemi). Järjestys = mitattu kysyntä
 * (OpenSEO 18.9. ja 23.9.2026, fi/2246): Rovaniemi 14 800 · Kemi 3 600 + Tornio 3 600 ·
 * Kemijärvi 1 600 · Sodankylä 1 300 · Kittilä 880 + Levi 320 · Ivalo 590.
 */
export const RENTAL_TOWNS = {
  rovaniemi: TOWN_ROVANIEMI,
  'kemi-tornio': TOWN_KEMI_TORNIO,
  kemijarvi: TOWN_KEMIJARVI,
  sodankyla: TOWN_SODANKYLA,
  'kittila-levi': TOWN_KITTILA_LEVI,
  'ivalo-inari': TOWN_IVALO_INARI,
} as const;

export type RentalTownSlug = keyof typeof RENTAL_TOWNS;

export const RENTAL_TOWN_SLUGS = Object.keys(RENTAL_TOWNS) as RentalTownSlug[];

export function isRentalTownSlug(slug: string): slug is RentalTownSlug {
  return Object.prototype.hasOwnProperty.call(RENTAL_TOWNS, slug);
}

export * from './l10n';

export const HOUSING_PAGES = { rentals: RENTALS, seasonal: SEASONAL, moving: MOVING, cost: COST, longStays: LONG_STAYS } as const;
