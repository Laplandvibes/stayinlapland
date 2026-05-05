import type { ReactNode } from 'react';

/**
 * Every monetised click goes through go.laplandvibes.com — the Cloudflare
 * Worker handles CJ tracking, GYG partner_id injection and per-domain
 * Website ID attribution via the Referer header.
 *
 * SID convention (LV spec §5):
 *   - hero_widget_*, hero_cta              — main hero placements
 *   - {pillar}_{intent}_cta                — pillar bottom CTAs (e.g. gi_property_card_cta)
 *   - inline_paragraph, property_card,
 *     sidebar_widget, footer_banner        — body / in-content placements
 * a–z, 0–9, underscore. Max 50 chars. No domain (Worker reads Referer).
 */

export type AffiliatePartner =
  | 'hotels'
  | 'hotels-seasonal'
  | 'hotels-budget'
  | 'cars'
  | 'activities';

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

function buildHref(props: AffiliateCTAProps): string {
  const { partner, sid, destination, query } = props;
  const params = new URLSearchParams();
  params.set('sid', sid);

  if (destination) {
    if (partner.startsWith('hotels')) {
      params.set('ss', destination);
    } else if (partner === 'cars') {
      params.set('pickup_location', destination);
    }
  }

  if (query) {
    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined && value !== '') params.set(key, value);
    }
  }

  if (partner === 'activities' && destination) {
    return `${REDIRECT_BASE}/activities/${destination}?${params.toString()}`;
  }
  return `${REDIRECT_BASE}/${partner}?${params.toString()}`;
}

export default function AffiliateCTA(props: AffiliateCTAProps) {
  const { className, children, onClick, ariaLabel } = props;
  return (
    <a
      href={buildHref(props)}
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
