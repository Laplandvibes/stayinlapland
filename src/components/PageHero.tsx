import type { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  imageSrc?: string;
  imageAlt?: string;
  children?: ReactNode;
}

/**
 * Pillar-page hero — full-bleed dark photograph panel that sits above the
 * cream content body. Magazine "section opener" feel.
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-night">
      <div className="relative min-h-[60svh] sm:min-h-[68svh] flex items-center justify-center py-24 sm:py-28">
        {imageSrc ? (
          <>
            <img
              src={imageSrc}
              alt={imageAlt ?? ''}
              className="absolute inset-0 w-full h-full object-cover"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-night/55 via-night/35 to-night" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 65% 60% at 50% 55%, rgba(15,23,42,0.40) 0%, transparent 70%)',
              }}
            />
          </>
        ) : (
          <div className="absolute inset-0 bg-night" />
        )}

        <div className="relative z-10 max-w-3xl mx-auto text-center px-5">
          <p
            className="inline-flex text-vibe-pink uppercase tracking-[0.28em] text-[11px] sm:text-xs font-semibold mb-5"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}
          >
            {eyebrow}
          </p>
          <h1
            className="font-heading font-medium text-snow leading-[1.08] tracking-tight text-[38px] sm:text-5xl md:text-6xl lg:text-7xl mb-5"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.85)' }}
          >
            {title}
          </h1>
          <p
            className="font-body text-snow/85 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ textShadow: '0 2px 14px rgba(0,0,0,0.8)' }}
          >
            {subtitle}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
