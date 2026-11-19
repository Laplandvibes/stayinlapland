import type { CSSProperties } from 'react';

import { LV_SANAMERKKI, LV_SANAMERKKI_PIENI } from './lvSanamerkki';
// Sanamerkin leveys 1 px:n fontilla (Bebas Neue + tracking-wide). Puhelin- ja tablettinavissa koko lasketaan
// tästä ja vapaasta tilasta (index.css LV-NAV-SANAMERKKI): 24 px (tabletilla 30 px), pienempi vain kun ei mahdu.
const WM_STYLE = { '--lv-wm-k': 5.55, '--lv-wm-max-md': '30px' } as CSSProperties;

interface LogoProps {
  size?: 'sm' | 'lg';
  /** Use light treatment on dark surfaces (hero panels). Defaults to dark
      treatment for the cream body. */
  light?: boolean;
}

/**
 * #STAYINLAPLAND wordmark — LV brand signature.
 * Pattern per CLAUDE.md: # accent (vibe-pink) + STAYIN (neutral) + LAPLAND (vibe-pink).
 * NETWORK RULE (Vesa 2026-07-24): the hashtag wordmark renders in Bebas Neue on
 * every site via the dedicated --font-logo token, so it looks identical to
 * #LAPLANDVIBES network-wide. Site headings stay Playfair (variant palette).
 */
export default function Logo({ size = 'sm', light = false, nav = false }: LogoProps & { nav?: boolean }) {
  // Yläpalkissa pienen koon muoto (kirjainten reiät auki 16–21 px:n koossa), muualla virallinen.
  const LVS = nav ? LV_SANAMERKKI_PIENI : LV_SANAMERKKI;
  const textSize =
    size === 'lg'
      ? 'text-4xl sm:text-5xl md:text-6xl'
      : 'text-2xl md:text-3xl';

  const heavy = light ? 'text-snow' : 'text-charcoal';

  return (
    <span translate="no" className={`notranslate font-logo tracking-wide leading-none ${textSize}${nav ? ' lv-wm' : ''}`} data-lv-sanamerkki={nav ? '' : undefined} style={nav ? WM_STYLE : undefined}>
      {/* VIRALLINEN sanamerkki (Vesa 14.11.2026; yläpalkki 15.11.2026 "sama leveys kuin nyt"): piirros ./lvSanamerkki.ts,
          leveys = entisen tekstin leveys, osat perivät entiset värinsä (currentColor). Teksti ruudunlukijalle ja hakukoneelle. */}
      <svg viewBox={LVS.viewBox} aria-hidden="true" focusable="false" style={{ width: `${LVS.leveysEm}em`, height: 'auto', display: 'inline-block', verticalAlign: 'middle', overflow: 'visible' }}>
        <path className="text-vibe-pink" fill="currentColor" fillRule="evenodd" d={LVS.d[0]} />
        <path className={heavy} fill="currentColor" fillRule="evenodd" d={LVS.d[1]} />
        <path className="text-vibe-pink" fill="currentColor" fillRule="evenodd" d={LVS.d[2]} />
      </svg>
      <span className="sr-only">#STAYINLAPLAND</span>
    </span>
  );
}
