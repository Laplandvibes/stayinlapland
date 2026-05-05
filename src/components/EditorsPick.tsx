import AffiliateCTA from './AffiliateCTA';
import { ArrowUpRight } from 'lucide-react';

interface EditorsPickProps {
  name: string;
  location: string;
  priceRange: string;
  imageSrc: string;
  imageAlt: string;
  sidPrefix: string;
  whyParagraphs: string[];
  caveat?: string;
}

export default function EditorsPick({
  name,
  location,
  priceRange,
  imageSrc,
  imageAlt,
  sidPrefix,
  whyParagraphs,
  caveat,
}: EditorsPickProps) {
  return (
    <section className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
        <div className="lg:col-span-7 relative">
          <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-4">
            Editor&rsquo;s pick
          </p>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-cream-2">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="lg:col-span-5 lg:pt-12">
          <h2 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight tracking-tight mb-2">
            {name}
          </h2>
          <p className="text-stone text-sm mb-7 inline-flex items-center gap-2">
            {location}
            <span aria-hidden="true" className="text-charcoal/30">·</span>
            <span className="text-charcoal font-semibold">{priceRange}</span>
            <span className="text-stone">/ night</span>
          </p>

          <div className="space-y-4 text-graphite text-[16px] leading-relaxed">
            {whyParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {caveat && (
            <aside className="mt-7 px-5 py-4 bg-cream-2 border-l-2 border-gold rounded-r-md">
              <p className="text-graphite text-sm leading-relaxed italic">
                <span className="text-gold not-italic font-semibold uppercase tracking-[0.18em] text-[11px] block mb-1">
                  Note
                </span>
                {caveat}
              </p>
            </aside>
          )}

          <AffiliateCTA
            partner="hotels"
            sid={`${sidPrefix}_editors_pick_cta`}
            destination={name}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-charcoal hover:bg-vibe-pink text-white rounded-full font-semibold text-sm transition-colors"
          >
            Check rates &amp; book
            <ArrowUpRight className="w-4 h-4" />
          </AffiliateCTA>
        </div>
      </div>
    </section>
  );
}
