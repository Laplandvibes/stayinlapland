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
export default function Logo({ size = 'sm', light = false }: LogoProps) {
  const textSize =
    size === 'lg'
      ? 'text-4xl sm:text-5xl md:text-6xl'
      : 'text-2xl md:text-3xl';

  const heavy = light ? 'text-snow' : 'text-charcoal';

  return (
    <span className={`font-logo tracking-wide leading-none ${textSize}`}>
      <span className="text-vibe-pink">#</span>
      <span className={heavy}>STAYIN</span>
      <span className="text-vibe-pink">LAPLAND</span>
    </span>
  );
}
