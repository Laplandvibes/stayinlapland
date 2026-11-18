import type { Lang } from '../../i18n/useLang';
import type { HousingHomeCopy } from '../home';
import type { HousingUiCopy } from '../labels';
import type { SourceId } from '../sources';
import type { WhenSrcId } from '../whentogo';

/**
 * Asumissivujen kymmenen käännöskieltä (15.11.2026). Englanti ja suomi ovat sivujen omat
 * tiedostot (`src/housing/*.ts`), muut kielet kansiossa `src/housing/l10n/<kieli>/`, yksi
 * tiedosto per sivu. Vesa 18.10.2026: kieliversio on sivulla jo olevaa lukijaa varten.
 */
export type L10nLang = Exclude<Lang, 'en' | 'fi'>;

export const L10N_LANGS: readonly L10nLang[] = ['sv', 'de', 'fr', 'es', 'it', 'nl', 'pt-BR', 'ja', 'ko', 'zh-CN'];

export function isL10nLang(lang: Lang): lang is L10nLang {
  return lang !== 'en' && lang !== 'fi';
}

/** Tiedoston nimi = avain: `src/housing/l10n/<kieli>/<avain>.ts`. */
export type HousingPageKey =
  | 'rentals'
  | 'seasonal'
  | 'moving'
  | 'cost'
  | 'longstays'
  | 'town-rovaniemi'
  | 'town-kemi-tornio'
  | 'town-kemijarvi'
  | 'town-sodankyla'
  | 'town-kittila-levi'
  | 'town-ivalo-inari';

export type AdContext = 'moving' | 'electricity' | 'arrival' | 'renting' | 'winter';

export interface AdWrapCopy {
  kicker: string;
  title: string;
  lead: string;
  /** Osion oma alaviite, kun yleinen ("jos teet sopimuksen…") ei sovi, esim. ostettava tuote (talvivarusteet). */
  note?: string;
}

export type CabinGroupKey = 'levi' | 'yllas' | 'saariselka' | 'lapland';

export interface CabinTextCopy {
  ad: string;
  kicker: string;
  h2: string;
  lead: string;
  tabs: Record<CabinGroupKey, string>;
  /** {price} = viikkohinta euroina. */
  weekFrom: string;
  guests: string;
  bedrooms: string;
  size: string;
  view: string;
  /** {count} = mökkien määrä, {area} = alueen nimi. */
  browseAll: string;
  note: string;
  updated: string;
}

/** Kielen yhteiset tekstit (`src/housing/l10n/<kieli>/common.ts`). */
export interface HousingCommonCopy {
  /** Sivujen pienet UI-tekstit. Ranskalla ja hollannilla ne ovat jo `HOUSING_UI`:ssa (etusivu), joten ne puuttuvat täältä. */
  ui?: HousingUiCopy;
  /** Työnhakijan nosto (laplandwork). Ranskalla ja hollannilla `HOME[kieli].work`. */
  work?: HousingHomeCopy['work'];
  /** Asumissivujen lähteiden nimet (`sources.ts`). */
  sourceLabels: Record<SourceId, string>;
  /** Milloin-sivun lähteiden nimet (`whentogo.ts`). */
  whenToGoSourceLabels: Record<WhenSrcId, string>;
  /** Mainosrivin alaviite (kumppanilinkit). */
  adsNote: string;
  /** Mainosrivin otsikko lukijan tilanteen mukaan. */
  adsWrap: Record<AdContext, AdWrapCopy>;
  /** Lomarenkaan mökkikaruselli (pitkät jaksot). */
  cabins: CabinTextCopy;
}
