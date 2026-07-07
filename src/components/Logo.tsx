interface LogoProps {
  size?: 'sm' | 'lg';
  /** Use light treatment on dark surfaces (hero panels). Defaults to dark
      treatment for the cream body. */
  light?: boolean;
}

/**
 * #STAYINLAPLAND wordmark — LV brand signature.
 * Pattern per CLAUDE.md: # accent (vibe-pink) + STAYIN (neutral) + LAPLAND (vibe-pink).
 * Single word, no spaces, CAPS, font-heading.
 */
export default function Logo({ size = 'sm', light = false }: LogoProps) {
  const textSize =
    size === 'lg'
      ? 'text-3xl sm:text-4xl md:text-5xl'
      : 'text-xl md:text-2xl';

  const heavy = light ? 'text-snow' : 'text-charcoal';

  return (
    <span className={`font-heading tracking-wide font-semibold leading-none ${textSize}`}>
      <span className="text-vibe-pink">#</span>
      <span className={heavy}>STAYIN</span>
      <span className="text-vibe-pink">LAPLAND</span>
    </span>
  );
}
