import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import FinnishDivider from '../components/FinnishDivider';
import AuthorByline from '../components/AuthorByline';
import PullQuote from '../components/PullQuote';
import ImageBreak from '../components/ImageBreak';
import TripTypeRecommender from '../components/TripTypeRecommender';
import { allCategoriesSummary, destinations } from '../data/properties';
import { pageUrl } from '../lib/meta';

const faqs = [
  {
    q: 'How long is a "long stay" on this site?',
    a: 'We treat anything from four nights upwards as a long stay — it is the threshold at which most Lapland properties offer weekly rates and a real kitchen starts to matter. The featured long-stay properties run 5-night to 4-week minimums depending on the unit; each card lists the minimum.',
  },
  {
    q: 'Why is the homepage focused on long stays rather than glass igloos?',
    a: 'Glass igloos are the iconic Lapland format and we cover them on a dedicated page. But the longest-loved Lapland trips are not three-night bucket-list stays in a glass dome — they are weeklong base-camp stays in a cabin or design hotel, with one or two nights elsewhere built in. The site reflects how Lapland actually rewards repeat visitors.',
  },
  {
    q: 'Is Kakslauttanen really worth the headline price?',
    a: 'Yes — but only the Kelo-Glass igloos, not the classic Glass Igloos. Kelo-Glass pairs the panoramic glass roof with a heated log structure, a kitchenette and a private fireplace. Two-night minimum gets the most out of it. Best aurora windows: early February and late March.',
  },
  {
    q: 'Where should I base if my long stay involves remote work?',
    a: 'Rovaniemi. It is the only Lapland city with reliable fibre, daily Helsinki and Stockholm flights, and a real winter restaurant scene that stays open in shoulder seasons. Arctic TreeHouse Resort and the Ounasvaara Chalets both offer weekly rates and proper desks.',
  },
];

export default function Home() {
  return (
    <>
      <title>StayInLapland — Long Stays &amp; Boutique Hotels in Finnish Lapland</title>
      <meta
        name="description"
        content="Settle into Finnish Lapland — luxury cabins by the week, design hotels in Rovaniemi and Saariselkä, the iconic glass igloos and the wilderness lodges past the last road."
      />
      <link rel="canonical" href={pageUrl('/')} />
      <meta name="robots" content="index, follow" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': `${pageUrl('/')}#webpage`,
                url: pageUrl('/'),
                name: 'StayInLapland — Long Stays & Boutique Hotels in Finnish Lapland',
                isPartOf: { '@id': `${pageUrl('/')}#website` },
                about: { '@type': 'Place', name: 'Finnish Lapland' },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: pageUrl('/') },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: faqs.map(({ q, a }) => ({
                  '@type': 'Question',
                  name: q,
                  acceptedAnswer: { '@type': 'Answer', text: a },
                })),
              },
            ],
          }),
        }}
      />

      <Hero />

      {/* Editor intro */}
      <section className="py-20 sm:py-28 px-5 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <AuthorByline note="A curated short-list — written and fact-checked with on-the-ground partners across Finnish Lapland." />

          <div className="mt-10 space-y-5 text-graphite text-base sm:text-[17px] leading-relaxed">
            <p>
              Most &ldquo;best Lapland accommodation&rdquo; lists put a glass igloo at the
              top, twenty other glass igloos in roughly the same order, and not a single
              sentence about whether the writer has ever spent more than two nights at any
              of them. This guide is the opposite.
            </p>
            <p>
              We split Lapland accommodation into four buckets — long-stay rentals, hotels,
              glass igloos, and wilderness lodges — and we list the seventeen properties
              that earn their place. Across them you can build a trip that starts with a
              week-long cabin base near Levi, moves to a design hotel in Rovaniemi for two
              nights of city, ends with a single glass-igloo night before flying home. That
              is how Lapland actually rewards a longer stay.
            </p>
            <p className="text-stone italic">
              Three things this guide does not do: aggregate prices, recycle reviews, or
              pretend to cover places where no-one in our network has spent a real night.
            </p>
          </div>
        </div>
      </section>

      <ImageBreak
        src="/images/break-frozen-lake.webp"
        alt="Empty frozen lake at dawn with single track in snow"
        ratio="3/1"
      />

      {/* Four-bucket overview */}
      <section className="py-20 sm:py-28 px-5 sm:px-6 bg-cream-2/60">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 sm:mb-16 max-w-2xl">
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
              Four ways to stay
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal leading-[1.1] tracking-tight">
              Settle into one. <span className="italic font-light">Or string two together.</span>
            </h2>
            <p className="text-graphite text-base sm:text-lg mt-5 leading-relaxed">
              Pick the category that matches the trip you actually want. Then pick a
              destination. Most of our long-stay readers combine two — a week of cabin
              base, two nights of contrast.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {allCategoriesSummary.map((cat) => (
              <Link
                key={cat.slug}
                to={`/${cat.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-charcoal/8 hover:border-charcoal/20 hover:shadow-md transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-cream-2">
                  <img
                    src={cat.imageSrc}
                    alt={`${cat.name} in Finnish Lapland`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/55 via-transparent to-transparent" />
                </div>
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <p className="text-[11px] tracking-[0.22em] uppercase text-stone font-semibold mb-2">
                    {cat.count} {cat.count === 1 ? 'property' : 'properties'}
                  </p>
                  <h3 className="font-heading text-3xl text-charcoal leading-tight mb-3">
                    {cat.name}
                  </h3>
                  <p className="text-graphite text-[15px] leading-relaxed mb-5 flex-1">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-vibe-pink group-hover:gap-2.5 text-sm font-semibold transition-all mt-auto">
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PullQuote attribution="Lapland accommodation report · Lapin Liitto, 2024">
        Lapland is bigger than people expect, and the road between Rovaniemi and Saariselkä
        eats half a day in each direction. The biggest first-trip mistake is booking three
        different bases in five nights.
      </PullQuote>

      <ImageBreak
        src="/images/break-boreal-forest.webp"
        alt="Snow-covered pine forest at midday"
        ratio="3/1"
      />

      <FinnishDivider />

      {/* Trip-type recommender */}
      <section className="py-20 sm:py-28 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-14 max-w-2xl mx-auto">
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
              Already know roughly what you want?
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal leading-[1.1] tracking-tight">
              The local short-cuts.
            </h2>
          </div>
          <TripTypeRecommender />
        </div>
      </section>

      <FinnishDivider />

      {/* Destinations */}
      <section className="py-20 sm:py-28 px-5 sm:px-6 bg-cream-2/60">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 sm:mb-14 max-w-2xl">
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
              Five Lapland bases
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal leading-[1.1] tracking-tight">
              Where in Lapland?
            </h2>
            <p className="text-graphite text-base sm:text-lg mt-5 leading-relaxed">
              Each destination has a different long-stay rationale. Click through for
              property recommendations and the case for picking that base over the others.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {destinations.map((d) => (
              <Link
                key={d.slug}
                to={`/destinations/${d.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-charcoal/8 hover:border-charcoal/20 hover:shadow-md transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-cream-2">
                  <img
                    src={d.imageSrc}
                    alt={`${d.name}, Finnish Lapland`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/65 via-transparent to-transparent" />
                  <p className="absolute top-4 left-5 text-[11px] tracking-[0.22em] uppercase text-snow/95 font-semibold drop-shadow">
                    Destination
                  </p>
                  <h3 className="absolute bottom-4 left-5 right-5 font-heading text-3xl text-snow leading-tight drop-shadow">
                    {d.name}
                  </h3>
                </div>
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <p className="text-graphite text-[15px] leading-relaxed mb-5 flex-1">
                    {d.pitch}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-vibe-pink group-hover:gap-2.5 text-sm font-semibold transition-all mt-auto">
                    Read the {d.name} guide
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinnishDivider />

      {/* FAQ */}
      <section className="py-20 sm:py-28 px-5 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
              Real questions, real answers
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal leading-[1.1] tracking-tight">
              Before you click anything.
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl bg-white border border-charcoal/8 open:border-charcoal/20 open:shadow-sm transition-all"
              >
                <summary className="cursor-pointer list-none px-6 py-5 flex items-start justify-between gap-4">
                  <span className="font-heading text-xl sm:text-2xl text-charcoal leading-tight">
                    {f.q}
                  </span>
                  <span className="text-stone group-open:rotate-45 transition-transform text-2xl leading-none mt-0.5 shrink-0">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 text-graphite leading-relaxed text-[15px] sm:text-base">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/booking-guide"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-charcoal hover:bg-vibe-pink text-snow rounded-full font-semibold transition-colors"
            >
              Read the full booking guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
