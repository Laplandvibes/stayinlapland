import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface TripType {
  imageSrc?: string;
  imageAlt: string;
  forWho: string;
  recommendation: string;
  rationale: string;
  ctaLabel: string;
  to: string;
}

const defaults: TripType[] = [
  {
    imageSrc: '/images/trip-first-timer.webp',
    imageAlt: 'Family arriving at boutique hotel near Rovaniemi',
    forWho: 'First trip · 4–6 nights · with kids',
    recommendation: 'Boutique hotel in Rovaniemi',
    rationale:
      'A design hotel like Arctic Light or Arctic TreeHouse gives the airport convenience, a real restaurant scene and the Santa Claus Village logistics — without forcing the family into a remote cabin where the heating becomes an evening project.',
    ctaLabel: 'See hotels',
    to: '/hotels',
  },
  {
    imageSrc: '/images/trip-repeat-visitor.webp',
    imageAlt: 'Solo skier crossing fell on cross-country skis',
    forWho: 'Repeat visitor · 7–14 nights · base in one place',
    recommendation: 'Long-stay cabin in Levi or Saariselkä',
    rationale:
      'Once a week. A two-bedroom apartment at Levi Spirit or a hilltop cabin near Saariselkä gives weekly rates, a private sauna and enough time to actually settle into Lapland — instead of running between bucket-list nights.',
    ctaLabel: 'See long stays',
    to: '/long-stays',
  },
  {
    imageSrc: '/images/trip-luxury.webp',
    imageAlt: 'Cast-iron coffee pot pouring at cabin window with snowy fell view',
    forWho: 'Anniversary · retirement · group buyout',
    recommendation: 'Octola or a Wilderness lodge',
    rationale:
      'Octola is the most exclusive booking on this site — a 300-hectare private reserve, full buyout for ten guests. If that feels excessive, an Iso-Syöte Eagle View Suite or Wilderness Hotel Nangu villa delivers 80% of the same isolation at a third of the price.',
    ctaLabel: 'See wilderness lodges',
    to: '/wilderness',
  },
];

interface TripTypeRecommenderProps {
  items?: TripType[];
}

export default function TripTypeRecommender({ items = defaults }: TripTypeRecommenderProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
      {items.map((t) => (
        <article
          key={t.recommendation}
          className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-charcoal/8 shadow-sm hover:shadow-md hover:border-charcoal/15 transition-all duration-300"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-cream-2">
            {t.imageSrc ? (
              <img
                src={t.imageSrc}
                alt={t.imageAlt}
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
            <div className="absolute inset-0 bg-gradient-to-t from-night/65 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-4 right-4 text-snow text-xs sm:text-sm font-medium leading-tight">
              {t.forWho}
            </p>
          </div>
          <div className="p-6 sm:p-7 flex flex-col flex-1">
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.22em] uppercase mb-2">
              We&rsquo;d book
            </p>
            <h3 className="font-heading text-2xl sm:text-[26px] text-charcoal leading-tight mb-3">
              {t.recommendation}
            </h3>
            <p className="text-graphite text-[15px] leading-relaxed mb-5 flex-1">
              {t.rationale}
            </p>
            <Link
              to={t.to}
              className="inline-flex items-center gap-1.5 text-vibe-pink hover:gap-2.5 text-sm font-semibold transition-all mt-auto"
            >
              {t.ctaLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
