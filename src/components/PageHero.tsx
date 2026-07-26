import type { ReactNode } from 'react';
import PageBreadcrumb from './PageBreadcrumb';

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
    <>
    <section className="relative overflow-hidden bg-night">
      <div className="relative min-h-[60svh] sm:min-h-[68svh] flex items-center justify-center py-24 sm:py-28">
        {imageSrc ? (
          <>
            <img
              src={imageSrc}
              alt={imageAlt ?? ''}
              className="absolute inset-0 w-full h-full object-cover [object-position:50%_45%]"
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
          /* Editorial backdrop for pages we have no honest photograph of.
             Deliberately a GRAPHIC, not a picture: an AI render of "a lodge
             somewhere" claims to show a place it has never seen, which is the
             one thing an accommodation guide cannot afford (Vesa 2026-07-26).
             Real photography on this site lives in the cabin cards, where the
             partner licence lets us show the actual property. */
          <>
            <div className="absolute inset-0 bg-night" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(120% 78% at 50% -15%, rgba(6,182,212,0.30) 0%, rgba(16,185,129,0.16) 38%, rgba(236,72,153,0.10) 62%, transparent 82%)',
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(70% 42% at 16% 6%, rgba(16,185,129,0.18) 0%, transparent 68%)',
              }}
            />
            <svg
              className="absolute inset-x-0 bottom-0 w-full h-[42%]"
              viewBox="0 0 1440 300"
              preserveAspectRatio="none"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M0,190 L210,120 L360,168 L560,74 L760,166 L980,110 L1180,172 L1440,120 L1440,300 L0,300 Z"
                fill="#0B1220"
                opacity="0.9"
              />
              <path
                d="M0,238 L260,186 L470,226 L700,160 L920,222 L1160,182 L1440,232 L1440,300 L0,300 Z"
                fill="#070D16"
              />
            </svg>
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-night" />
          </>
        )}

        {/* Desktop gets a wider measure so long FI/DE compounds stay on one
            line: at max-w-3xl "Der Lappland-Buchungsleitfaden." wrapped at its
            own hyphen on lg+. The H1 also holds text-6xl through the lg band
            and only steps up to text-7xl at xl, so 1024px stays one line.
            Mobile/tablet measure is unchanged; the subtitle keeps its own
            max-w-2xl so body copy stays readable. */}
        <div className="relative z-10 max-w-3xl lg:max-w-6xl mx-auto text-center px-5">
          <p
            className="inline-flex text-vibe-pink uppercase tracking-[0.28em] text-[11px] sm:text-xs font-semibold mb-5"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}
          >
            {eyebrow}
          </p>
          <h1
            className="font-heading font-medium text-snow leading-[1.08] tracking-wide text-[38px] sm:text-5xl md:text-6xl xl:text-7xl mb-5"
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
    <PageBreadcrumb />
    </>
  );
}
