import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import PropertyCard from '../components/PropertyCard';
import Newsletter from '../components/Newsletter';
import FinnishDivider from '../components/FinnishDivider';
import AffiliateCTA from '../components/AffiliateCTA';
import AuthorByline from '../components/AuthorByline';
import PullQuote from '../components/PullQuote';
import ComparisonTable from '../components/ComparisonTable';
import MarginNote from '../components/MarginNote';
import HotelsComAd from '../components/HotelsComAd';
import { hotels } from '../data/properties';
import type { Property } from '../data/properties';
import { pageUrl } from '../lib/meta';
import { useLang, useLocalePath } from '../i18n/useLang';
import { getCopy } from '../locales/copy';

const COMPARISON_SCORES = [
  [5, 4, 5, 4, 4],
  [4, 5, 3, 4, 4],
  [3, 5, 5, 5, 3],
  [4, 3, 4, 4, 4],
  [3, 4, 5, 4, 5],
];

export default function Hotels() {
  const lang = useLang();
  const localePath = useLocalePath();
  const t = getCopy(lang);
  const h = t.hotels;

  const localizedHotels: Property[] = hotels.map((p, i) => ({
    ...p,
    name: t.hotelsData[i]?.name ?? p.name,
    location: t.hotelsData[i]?.location ?? p.location,
    highlight: t.hotelsData[i]?.highlight ?? p.highlight,
    description: t.hotelsData[i]?.description ?? p.description,
  }));

  const comparisonRows = h.rows.map((row, i) => ({ ...row, scores: COMPARISON_SCORES[i] }));

  return (
    <>
      <title>{h.metaTitle}</title>
      <meta name="description" content={h.metaDescription} />
      <link rel="canonical" href={pageUrl('/hotels')} />
      <meta name="robots" content="index, follow" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Article',
                headline: h.metaTitle,
                publisher: { '@id': `${pageUrl('/')}#organization` },
                mainEntityOfPage: pageUrl('/hotels'),
                inLanguage: lang,
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: t.home.breadcrumbHome, item: pageUrl('/') },
                  { '@type': 'ListItem', position: 2, name: h.breadcrumb, item: pageUrl('/hotels') },
                ],
              },
            ],
          }),
        }}
      />

      <PageHero
        eyebrow={h.pageHero.eyebrow}
        title={h.pageHero.title}
        subtitle={h.pageHero.subtitle}
        imageSrc="/images/hero-hotels.webp"
        imageAlt="Boutique design hotel in Finnish Lapland, exterior at golden hour"
      />

      <section className="py-12 sm:py-16 px-5 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <AuthorByline note={h.authorNote} />
          <div className="mt-10 space-y-4 text-graphite text-[16px] leading-relaxed">
            <p>{h.introP1}</p>
            <p>{h.introP2}</p>
          </div>
        </div>
      </section>

      <FinnishDivider />

      <section className="py-16 sm:py-24 px-5 sm:px-6 bg-cream-2/60">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 max-w-2xl">
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
              {h.picksKicker}
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight tracking-wide">
              {h.picksH2}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {localizedHotels.map((p) => (
              <PropertyCard key={p.slug} property={p} sidPrefix="hot" />
            ))}
          </div>
        </div>
      </section>

      <PullQuote attribution={h.pullQuote.attr}>{h.pullQuote.text}</PullQuote>

      {/* Flagship affiliate ad — hotel partner card (fi=Sembo, others=Trip.com via Worker). */}
      <section className="py-10 sm:py-14 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <HotelsComAd sid="hotels_partner_card" ss="Lapland, Finland" />
        </div>
      </section>

      <FinnishDivider />

      <section className="py-16 sm:py-24 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
              {h.glanceKicker}
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight tracking-wide">
              {h.glanceH2}
            </h2>
          </div>
          <ComparisonTable axes={h.axes} rows={comparisonRows} rubric={h.rubric} />
          <MarginNote label={h.marginLabel}>{h.marginBody}</MarginNote>
        </div>
      </section>

      <FinnishDivider />

      <section className="py-16 sm:py-20 px-5 sm:px-6 bg-cream-2/60">
        <div className="max-w-3xl mx-auto">
          <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
            {h.counterKicker}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal mb-5 leading-tight tracking-wide">
            {h.counterH2}
          </h2>
          <div className="space-y-4 text-graphite text-[16px] leading-relaxed">
            <p>{h.counterP1}</p>
            <p>{h.counterP2}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={localePath('/long-stays')}
              className="px-5 py-2.5 bg-white hover:bg-charcoal hover:text-snow border border-charcoal/15 text-charcoal rounded-full text-sm font-semibold transition-colors"
            >
              {h.seeLong}
            </Link>
            <Link
              to={localePath('/glass-igloos')}
              className="px-5 py-2.5 bg-white hover:bg-charcoal hover:text-snow border border-charcoal/15 text-charcoal rounded-full text-sm font-semibold transition-colors"
            >
              {h.seeIgloos}
            </Link>
            <AffiliateCTA
              partner="hotels"
              sid="hot_browse_all_cta"
              destination="Lapland, Finland"
              className="px-5 py-2.5 bg-vibe-pink hover:bg-vibe-pink/90 text-white rounded-full text-sm font-semibold transition-all"
            >
              {h.browseAll}
            </AffiliateCTA>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
