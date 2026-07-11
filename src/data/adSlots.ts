/**
 * Etusivun standardi mainospaikkaosio (LV Media -inventaari).
 * Kauppa → täytä Partner-objekti oikeaan paikkaan → build → deploy.
 */
import type { HomeAdSlotsConfig } from '../../../shared/HomeAdSlots';
import { DEFAULT_PREMIUM_SPOTS } from '../../../shared/PremiumSpotGrid';

export const AD_SLOTS: HomeAdSlotsConfig = {
  siteSlug: 'stayinlapland',
  sponsors: [null, null],
  spots: DEFAULT_PREMIUM_SPOTS,
};
