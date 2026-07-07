import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLang, useLocalePath } from '../i18n/useLang';
import { getCopy } from '../locales/copy';

const IMAGE_DATA = [
  { imageSrc: '/images/trip-first-timer.webp', imageAlt: 'Family arriving at boutique hotel near Rovaniemi', to: '/hotels' },
  { imageSrc: '/images/trip-repeat-visitor.webp', imageAlt: 'Solo skier crossing fell on cross-country skis', to: '/long-stays' },
  { imageSrc: '/images/trip-luxury.webp', imageAlt: 'Cast-iron coffee pot pouring at cabin window with snowy fell view', to: '/wilderness' },
];

export default function TripTypeRecommender() {
  const lang = useLang();
  const localePath = useLocalePath();
  const t = getCopy(lang).tripRecommender;
  const items = t.items.map((item, i) => ({ ...item, ...IMAGE_DATA[i] }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
      {items.map((tt) => (
        <article
          key={tt.recommendation}
          className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-charcoal/8 shadow-sm hover:shadow-md hover:border-charcoal/15 transition-all duration-300"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-cream-2">
            <img
              src={tt.imageSrc}
              alt={tt.imageAlt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night/65 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-4 right-4 text-snow text-xs sm:text-sm font-medium leading-tight">
              {tt.forWho}
            </p>
          </div>
          <div className="p-6 sm:p-7 flex flex-col flex-1">
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.22em] uppercase mb-2">
              {t.weBook}
            </p>
            <h3 className="font-heading text-2xl sm:text-[26px] text-charcoal leading-tight mb-3">
              {tt.recommendation}
            </h3>
            <p className="text-graphite text-[15px] leading-relaxed mb-5 flex-1">
              {tt.rationale}
            </p>
            <Link
              to={localePath(tt.to)}
              className="inline-flex items-center gap-1.5 text-vibe-pink hover:gap-2.5 text-sm font-semibold transition-all mt-auto"
            >
              {tt.ctaLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
