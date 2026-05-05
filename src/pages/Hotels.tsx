import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import PropertyCard from '../components/PropertyCard';
import Newsletter from '../components/Newsletter';
import FinnishDivider from '../components/FinnishDivider';
import AffiliateCTA from '../components/AffiliateCTA';
import AuthorByline from '../components/AuthorByline';
import PullQuote from '../components/PullQuote';
import ImageBreak from '../components/ImageBreak';
import ComparisonTable from '../components/ComparisonTable';
import MarginNote from '../components/MarginNote';
import { hotels } from '../data/properties';
import { pageUrl } from '../lib/meta';

const comparisonRows = [
  { name: 'Arctic TreeHouse',  scores: [5, 4, 5, 4, 4], verdict: 'Best design hotel in Rovaniemi.' },
  { name: 'Arctic Light',      scores: [4, 5, 3, 4, 4], verdict: 'Most architecturally interesting building.' },
  { name: 'Levi Spirit',       scores: [3, 5, 5, 5, 3], verdict: 'Adults-only feel. Spa + ski-in.' },
  { name: 'Lapland Hotels Saaga', scores: [4, 3, 4, 3, 4], verdict: 'Reliable mid-luxury near Kittilä airport.' },
  { name: 'Star Arctic',       scores: [3, 4, 5, 4, 5], verdict: 'Hilltop · darkest sky · cabin/hotel mix.' },
];

export default function Hotels() {
  return (
    <>
      <title>Boutique &amp; Design Hotels in Finnish Lapland | StayInLapland</title>
      <meta
        name="description"
        content="Five Lapland hotels worth booking — Arctic TreeHouse design suites, Arctic Light boutique heritage, Levi Spirit villa hotel, Lapland Hotels Saaga, Star Arctic Hotel. Curated for short stays, work trips, and the nights between long-stay legs."
      />
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
                headline: 'Boutique & Design Hotels in Finnish Lapland',
                publisher: { '@id': `${pageUrl('/')}#organization` },
                mainEntityOfPage: pageUrl('/hotels'),
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: pageUrl('/') },
                  { '@type': 'ListItem', position: 2, name: 'Hotels', item: pageUrl('/hotels') },
                ],
              },
            ],
          }),
        }}
      />

      <PageHero
        eyebrow="Five hotels worth booking"
        title="Hotels in Lapland."
        subtitle="Boutique, design and reliably classic Lapland hotels — for the short stays, the work trips, and the two-night cities you build around a longer cabin base."
        imageSrc="/images/hero-hotels.webp"
        imageAlt="Boutique design hotel in Finnish Lapland — exterior at golden hour"
      />

      <section className="py-12 sm:py-16 px-5 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <AuthorByline note="Five properties cross-checked with on-site partners and recent stays across the 2025/26 season." />

          <div className="mt-10 space-y-4 text-graphite text-[16px] leading-relaxed">
            <p>
              Lapland has plenty of mid-tier chain hotels — Scandic, Cumulus, Sokos — that
              do the basics well at €90–140/night. We do not list them; their booking
              decision is largely &ldquo;closest to airport, cheapest week.&rdquo;
            </p>
            <p>
              The five hotels below earn their spot for a different reason — design,
              architecture, view, or service mix. They are the right answer when you want
              a hotel that is part of why you came, not just a base.
            </p>
          </div>
        </div>
      </section>

      <ImageBreak
        src="/images/break-boreal-forest.webp"
        alt="Boreal pine forest in winter"
        ratio="3/1"
      />

      <FinnishDivider />

      <section className="py-16 sm:py-24 px-5 sm:px-6 bg-cream-2/60">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 max-w-2xl">
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
              Five picks
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight tracking-tight">
              Curated, not aggregated.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {hotels.map((p) => (
              <PropertyCard key={p.slug} property={p} sidPrefix="hot" />
            ))}
          </div>
        </div>
      </section>

      <PullQuote attribution="Architectural Record · Arctic Light Hotel feature">
        Rovaniemi was rebuilt three times after 1944 — the third time by Alvar Aalto, who
        drew the city plan in the shape of a reindeer&rsquo;s antlers. The Arctic Light Hotel
        sits inside the antlers, in a 1939 building that survived all three rebuilds.
      </PullQuote>

      <FinnishDivider />

      <section className="py-16 sm:py-24 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
              All five at a glance
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight tracking-tight">
              Opinionated comparison.
            </h2>
          </div>
          <ComparisonTable
            axes={['Design', 'Architecture', 'Spa / sauna', 'Activities', 'Restaurant']}
            rows={comparisonRows}
            rubric="Five dots is best. Design = interior styling and material quality. Architecture = the building itself. Activities = ski-in/out, husky kennels, local culture within 15 min."
          />

          <MarginNote label="Insider">
            Arctic TreeHouse and Levi Spirit both run their own restaurants — Rakas
            (TreeHouse) and Spirit Kitchen (Levi). Both source local. If you book either,
            book a table the same day you book the room — they sell out faster than the
            hotel does on weekends.
          </MarginNote>
        </div>
      </section>

      <FinnishDivider />

      <section className="py-16 sm:py-20 px-5 sm:px-6 bg-cream-2/60">
        <div className="max-w-3xl mx-auto">
          <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
            Honest counter-recommendation
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal mb-5 leading-tight tracking-tight">
            When a hotel is not the answer.
          </h2>
          <div className="space-y-4 text-graphite text-[16px] leading-relaxed">
            <p>
              For 5+ nights with the same trip rhythm — skiing, cooking, sauna, repeat — a
              long-stay cabin or apartment beats any of these hotels on cost-per-night and
              quality of life. Hotels are right when the days are different from each other.
            </p>
            <p>
              For a single aurora-bucket-list night, glass igloos win. None of the hotels
              above have a glass roof.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/long-stays"
              className="px-5 py-2.5 bg-white hover:bg-charcoal hover:text-snow border border-charcoal/15 text-charcoal rounded-full text-sm font-semibold transition-colors"
            >
              See long stays
            </Link>
            <Link
              to="/glass-igloos"
              className="px-5 py-2.5 bg-white hover:bg-charcoal hover:text-snow border border-charcoal/15 text-charcoal rounded-full text-sm font-semibold transition-colors"
            >
              See glass igloos
            </Link>
            <AffiliateCTA
              partner="hotels"
              sid="hot_browse_all_cta"
              destination="Lapland boutique hotel"
              className="px-5 py-2.5 bg-vibe-pink hover:bg-vibe-pink/90 text-white rounded-full text-sm font-semibold transition-all"
            >
              Browse Hotels.com inventory
            </AffiliateCTA>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
