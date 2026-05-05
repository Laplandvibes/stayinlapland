import { MapPin, ArrowUpRight, Clock } from 'lucide-react';
import AffiliateCTA from './AffiliateCTA';
import type { Property } from '../data/properties';

interface PropertyCardProps {
  property: Property;
  /** SID prefix per pillar — e.g. 'ls' long-stay, 'hot' hotels, 'gi' glass igloos. */
  sidPrefix: string;
  /** Optional photographic image src. Falls back to a soft cream placeholder. */
  imageSrc?: string;
  imageAlt?: string;
}

const STAY_LABEL: Record<Property['bestFor'], string> = {
  short: '1–3 nights',
  medium: '3–6 nights',
  long: '7+ nights',
};

export default function PropertyCard({ property, sidPrefix, imageSrc, imageAlt }: PropertyCardProps) {
  // Fall back to property's own image if no override is passed.
  const finalSrc = imageSrc ?? property.imageSrc;
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-charcoal/8 shadow-sm hover:shadow-md hover:border-charcoal/15 transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-2">
        {finalSrc ? (
          <img
            src={finalSrc}
            alt={imageAlt ?? property.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, #F2EFE8 0%, #E8D9B7 60%, #C9A464 100%)',
            }}
          />
        )}
        <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/85 backdrop-blur-sm rounded-full text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-charcoal">
            <Clock className="w-3 h-3 text-vibe-pink" />
            {STAY_LABEL[property.bestFor]}
          </span>
          {property.minStay && (
            <span className="px-2.5 py-1 bg-night/70 backdrop-blur-sm rounded-full text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-snow">
              Min {property.minStay}
            </span>
          )}
        </div>
      </div>

      <div className="p-6 sm:p-7 flex flex-col flex-1">
        <p className="text-[11px] tracking-[0.18em] uppercase text-vibe-pink font-semibold mb-2">
          {property.highlight}
        </p>
        <h3 className="font-heading text-2xl sm:text-[26px] text-charcoal leading-tight mb-3">
          {property.name}
        </h3>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-stone mb-4">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-gold" />
            {property.location}
          </span>
          <span className="text-charcoal font-semibold">
            {property.priceRange} <span className="text-stone font-normal">/ night</span>
          </span>
        </div>

        <p className="text-graphite text-[15px] leading-relaxed mb-6 flex-1">
          {property.description}
        </p>

        <AffiliateCTA
          partner="hotels"
          sid={`${sidPrefix}_property_card`}
          destination={property.searchQuery ?? property.name}
          className="inline-flex items-center justify-between gap-2 w-full px-5 py-3 bg-charcoal hover:bg-vibe-pink text-white rounded-full font-semibold text-sm transition-all duration-200"
        >
          <span>Check rates &amp; book</span>
          <ArrowUpRight className="w-4 h-4" />
        </AffiliateCTA>
      </div>
    </article>
  );
}
