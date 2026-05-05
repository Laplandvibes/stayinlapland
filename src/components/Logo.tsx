interface LogoProps {
  size?: 'sm' | 'lg';
  /** Use light treatment on dark surfaces (hero panels). Defaults to dark
      treatment for the cream body. */
  light?: boolean;
}

export default function Logo({ size = 'sm', light = false }: LogoProps) {
  const textSize =
    size === 'lg'
      ? 'text-3xl sm:text-4xl md:text-5xl'
      : 'text-xl md:text-[22px]';

  const lapText = light ? 'text-snow' : 'text-charcoal';
  const inText = light ? 'text-snow/85' : 'text-charcoal/70';

  return (
    <span className={`font-heading tracking-tight font-semibold ${textSize}`}>
      <span className="text-vibe-pink">Stay</span>
      <span className={inText}>&nbsp;in&nbsp;</span>
      <span className={lapText}>Lapland</span>
    </span>
  );
}
