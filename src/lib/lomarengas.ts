import type { Lang } from '../i18n/useLang';

/**
 * Lomarengas (Adtraction) — the network's paid cabin partner, 20 €/booking.
 *
 * Photo use is EXPLICITLY allowed by the Lomarengas programme terms, unlike
 * the hotel partners (Sembo/Trip.com serve OTA-licensed imagery we may not
 * re-host). That is why the cabin cards on this site are the only place with
 * real photographs of real, bookable properties — everything else in
 * /public/images is AI-generated.
 *
 * Every click routes through the affiliate Worker so it lands in D1 with an
 * epi placement tag; never link on.lomarengas.fi or lomarengas.fi directly.
 */

const REDIRECT_BASE = 'https://go.laplandvibes.com';

/** Live cabin JSON: the Worker's KV-cached parse of the Lomarengas product
 *  feed (pfid 375), grouped by resort area, refreshed at most once per 24 h so
 *  delisted cabins drop out on their own. */
export const CABINS_API = `${REDIRECT_BASE}/_cabins`;

// Lomarengas has no DE/other-language sites, so every non-FI locale deep-links
// to /en. Verified 2026-07-25: the search pages live under /mokkihaku (fi) and
// /en/cottage-search, while /mokit/* and /en/cottages/* are the cabin-DETAIL
// namespaces. A bogus slug there renders a client-side 404 with HTTP 200 and
// no SSR <title> — always verify a URL change against page CONTENT, never the
// status code.
const LOMARENGAS_AREAS = {
  lapland: {
    fi: 'https://www.lomarengas.fi/mokkihaku/lappi',
    intl: 'https://www.lomarengas.fi/en/cottage-search/lappi',
  },
  levi: {
    fi: 'https://www.lomarengas.fi/mokkihaku/lappi/hiihtokeskus/levi',
    intl: 'https://www.lomarengas.fi/en/cottage-search/lappi/ski-resort/levi',
  },
  yllas: {
    fi: 'https://www.lomarengas.fi/mokkihaku/lappi/hiihtokeskus/yllas',
    intl: 'https://www.lomarengas.fi/en/cottage-search/lappi/ski-resort/yllas',
  },
  saariselka: {
    fi: 'https://www.lomarengas.fi/mokkihaku/lappi/hiihtokeskus/saariselka',
    intl: 'https://www.lomarengas.fi/en/cottage-search/lappi/ski-resort/saariselka',
  },
} as const;

/** Areas the Worker feed groups cabins into AND this site has a page for.
 *  Rovaniemi and Inari are deliberately absent: the feed's served payload has
 *  no meaningful cabin set for them, and inventing one would be fake data. */
export type CabinArea = keyof typeof LOMARENGAS_AREAS;

export const CABIN_AREAS = Object.keys(LOMARENGAS_AREAS) as CabinArea[];

export function isCabinArea(slug: string): slug is CabinArea {
  return (CABIN_AREAS as string[]).includes(slug);
}

/** Area search link ("browse all N cabins"). */
export function buildLomarengasUrl(area: CabinArea, sid: string, lang: Lang = 'en'): string {
  const dest = lang === 'fi' ? LOMARENGAS_AREAS[area].fi : LOMARENGAS_AREAS[area].intl;
  return `${REDIRECT_BASE}/go/lomarengas?sid=${encodeURIComponent(sid)}&dest=${encodeURIComponent(dest)}`;
}

/** Cabin-detail deep link from a product-feed slug (kunta-kylä-nimi-id, e.g.
 *  kolari-yllasjarvi-vanamoinen-4708). */
export function buildLomarengasCabinUrl(slug: string, sid: string, lang: Lang = 'en'): string {
  const dest = lang === 'fi'
    ? `https://www.lomarengas.fi/mokit/${slug}`
    : `https://www.lomarengas.fi/en/cottages/${slug}`;
  return `${REDIRECT_BASE}/go/lomarengas?sid=${encodeURIComponent(sid)}&dest=${encodeURIComponent(dest)}`;
}

export type ApiCabin = {
  id: string;
  name: string;
  img: string;
  slug: string;
  place: string;
  muni: string;
  p: number | null;
  pe: number;
  sqm: number | null;
  br: number | null;
  stars: number | null;
  weeklyFrom: number | null;
};

export type CabinsApiData = {
  updatedAt: string;
  totals: Record<string, number>;
  groups: Record<string, ApiCabin[]>;
};

// Module-level cache so several bands on one page share a single request.
let cabinsCache: CabinsApiData | null = null;
let cabinsPromise: Promise<CabinsApiData | null> | null = null;

export function loadCabins(): Promise<CabinsApiData | null> {
  if (cabinsCache) return Promise.resolve(cabinsCache);
  if (!cabinsPromise) {
    cabinsPromise = fetch(CABINS_API)
      .then((r) => (r.ok ? (r.json() as Promise<CabinsApiData>) : null))
      .then((d) => {
        if (d && d.groups && d.totals) cabinsCache = d;
        return cabinsCache;
      })
      .catch(() => null);
  }
  return cabinsPromise;
}

export function getCachedCabins(): CabinsApiData | null {
  return cabinsCache;
}
