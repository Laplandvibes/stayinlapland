import type { ReactNode } from 'react';
import { useLang } from '../i18n/useLang';

/**
 * Every monetised click goes through go.laplandvibes.com — the Cloudflare
 * Worker handles CJ tracking, GYG partner_id injection and per-domain
 * Website ID attribution via the Referer header.
 *
 * LOCALE 2026-05-16: appends partner-specific locale params so DE/FI users
 * land on the local partner site.
 */

export type AffiliatePartner =
  | 'hotels'
  | 'hotels-seasonal'
  | 'hotels-budget'
  | 'cars'
  | 'activities';

type _Lang = 'en' | 'fi' | 'de' | 'ja' | 'es' | 'pt-BR' | 'zh-CN' | 'ko' | 'fr' | 'it' | 'nl' | 'sv';

export interface AffiliateCTAProps {
  partner: AffiliatePartner;
  sid: string;
  /** Hotels: search query (city or property name). Cars: pickup IATA. Activities: GYG slug-lID. */
  destination?: string;
  query?: Record<string, string | undefined>;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
}

const REDIRECT_BASE = 'https://go.laplandvibes.com/go';

const HOTELS_LOCALE: Record<_Lang, string> = {
  en: 'en_US', fi: 'fi_FI', de: 'de_DE', ja: 'ja_JP',
  es: 'es_ES', 'pt-BR': 'pt_BR', 'zh-CN': 'zh_CN',
  ko: 'ko_KR', fr: 'fr_FR', it: 'it_IT', nl: 'nl_NL', sv: 'sv_SE',
};
const CARS_LANG: Record<_Lang, string> = {
  en: 'en', fi: 'fi', de: 'de', ja: 'ja',
  es: 'es', 'pt-BR': 'pt', 'zh-CN': 'zh',
  ko: 'ko', fr: 'fr', it: 'it', nl: 'nl', sv: 'sv',
};
/**
 * Worker `?language=` codes (same table as shared/gyg/picks.ts). The Worker's
 * handleGyg turns the code into GetYourGuide's `<lang>-<country>/` PATH prefix
 * — the only localisation GYG honours. 🔴 A raw `?language=xx` appended to a
 * getyourguide.com URL does NOTHING (measured in a real browser 2026-08-02),
 * so never "simplify" back to passing it to GYG directly. `en` is GYG's
 * default and needs no param; `de` needs a code here even though the old raw
 * links didn't send one — they used the getyourguide.de domain instead.
 */
const GYG_WORKER_LANG: Record<_Lang, string | undefined> = {
  en: undefined, fi: 'fi', de: 'de', ja: 'ja', es: 'es', 'pt-BR': 'pt-br',
  'zh-CN': 'zh', ko: 'ko', fr: 'fr', it: 'it', nl: 'nl', sv: 'sv',
};

function buildHref(props: AffiliateCTAProps, lang: _Lang = 'en'): string {
  const { partner, sid, destination, query } = props;

  if (partner === 'activities') {
    // Reitittää Workerin kautta 2026-08-03 alkaen. Worker hoitaa slugin,
    // /s?q=-haun JA kielen polkuprefiksin (raaka ?language= on GYG:llä no-op,
    // ja vanha getyourguide.de-domain-taulu jätti muut kielet englanniksi).
    // Suora linkitys menettäisi D1-klikkilokin ja veisi partner_id:n bundleen.
    const params = new URLSearchParams({ sid });
    const gygLang = GYG_WORKER_LANG[lang];
    if (gygLang) params.set('language', gygLang);
    const path = (destination ?? '').replace(/^\/+/, '').replace(/\/+$/, '');
    if (query) for (const [k, v] of Object.entries(query)) if (v !== undefined && v !== '') params.set(k, v);
    return `${REDIRECT_BASE}/activities${path ? `/${path}` : ''}?${params.toString()}`;
  }

  const params = new URLSearchParams();
  params.set('sid', sid);

  if (destination) {
    if (partner.startsWith('hotels')) {
      params.set('ss', anchorHotelsSs(partner, destination));
    } else if (partner === 'cars') {
      params.set('pickup_location', destination);
    }
  }

  if (partner.startsWith('hotels')) {
    params.set('locale', HOTELS_LOCALE[lang]);
  } else if (partner === 'cars') {
    params.set('lang', CARS_LANG[lang]);
  }

  if (query) {
    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined && value !== '') params.set(key, value);
    }
  }

  return `${REDIRECT_BASE}/${partner}?${params.toString()}`;
}

export default function AffiliateCTA(props: AffiliateCTAProps) {
  const { className, children, onClick, ariaLabel } = props;
  const rawLang = useLang();
  const lang = rawLang as _Lang;
  return (
    <a
      href={buildHref(props, lang)}
      target="_blank"
      rel="sponsored nofollow noopener"
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

/**
 * Anchor any hotels search to Finnish Lapland. A bare "Lapland"/"Levi"/etc.
 * makes Hotels.com geocode to *Lapland, Indiana, USA* — a real revenue/trust
 * bug (Vesa 2026-07-08). Force ", Finland" onto every hotels query that does
 * not already name the country; leave cars/activities queries untouched.
 * Callers cannot re-introduce the bug.
 */
function anchorHotelsSs(partner: string, destination: string): string {
  const isHotels = partner === "hotels" || partner === "hotels-seasonal" || partner === "hotels-budget";
  if (!isHotels) return destination;
  return /finland|suomi/i.test(destination) ? destination : `${destination.replace(/[\s,]+$/, "")}, Finland`;
}
