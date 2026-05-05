import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import PropertyCard from '../components/PropertyCard';
import Newsletter from '../components/Newsletter';
import FinnishDivider from '../components/FinnishDivider';
import AffiliateCTA from '../components/AffiliateCTA';
import AuthorByline from '../components/AuthorByline';
import EditorsPick from '../components/EditorsPick';
import PullQuote from '../components/PullQuote';
import ImageBreak from '../components/ImageBreak';
import ComparisonTable from '../components/ComparisonTable';
import MarginNote from '../components/MarginNote';
import { glassIgloos } from '../data/properties';
import { pageUrl } from '../lib/meta';

const editorsPick = glassIgloos[0]; // Kakslauttanen
const runnersUp = glassIgloos.slice(1);

const comparisonRows = [
  { name: 'Kakslauttanen',  scores: [3, 5, 3, 4, 5], verdict: 'The original. Pricey. Worth it for Kelo-Glass only.' },
  { name: 'Levin Iglut',    scores: [4, 4, 4, 5, 4], verdict: 'Best engineering. Motorised aurora beds.' },
  { name: 'Aurora Village', scores: [4, 5, 5, 3, 3], verdict: 'Most remote feel. 30 min from Ivalo.' },
  { name: 'Aurora Pyramids', scores: [3, 5, 5, 4, 4], verdict: 'Lake reflections double the aurora.' },
];

export default function GlassIgloos() {
  return (
    <>
      <title>Glass Igloos in Finnish Lapland — four resorts ranked | StayInLapland</title>
      <meta
        name="description"
        content="Curated guide to Finnish Lapland glass igloo resorts that earn the name — Kakslauttanen, Levin Iglut, Aurora Village, Aurora Pyramids. Ranked by sky visibility, dark-sky position, comfort and access."
      />
      <link rel="canonical" href={pageUrl('/glass-igloos')} />
      <meta name="robots" content="index, follow" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Article',
                headline: 'Glass Igloos in Finnish Lapland — four resorts ranked',
                publisher: { '@id': `${pageUrl('/')}#organization` },
                mainEntityOfPage: pageUrl('/glass-igloos'),
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: pageUrl('/') },
                  { '@type': 'ListItem', position: 2, name: 'Glass Igloos', item: pageUrl('/glass-igloos') },
                ],
              },
            ],
          }),
        }}
      />

      <PageHero
        eyebrow="The iconic Lapland format"
        title="Glass Igloos in Finnish Lapland."
        subtitle="The Finnish glass-roofed dome was invented in Saariselkä in 1973. Four properties earn the name today — and there is a meaningful difference between them."
        imageSrc="/images/hero-glass-igloos.webp"
        imageAlt="Single glass igloo dome on a Lappish hillside under faint green aurora at night"
      />

      <section className="py-12 sm:py-16 px-5 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <AuthorByline note="Four resorts cross-checked with on-the-ground partners. Last on-site review: Levin Iglut, February 2026." />
        </div>
      </section>

      <section className="py-10 sm:py-14 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <EditorsPick
            name={editorsPick.name}
            location={editorsPick.location}
            priceRange={editorsPick.priceRange}
            imageSrc="/images/pick-kakslauttanen.webp"
            imageAlt="Kakslauttanen Kelo-Glass igloo at night with warm interior light"
            sidPrefix="gi"
            whyParagraphs={[
              'Kakslauttanen is on every list because it deserves to be there. The resort invented the modern glass igloo in 1973 — at a time when &ldquo;tourist accommodation in Saariselkä&rdquo; meant a wooden hostel and the aurora was something you watched from the parking lot.',
              "But there's a fork: book the Kelo-Glass igloos, not the classic Glass Igloos. Kelo-Glass pairs a panoramic glass roof with a heated log structure, a private kitchenette and a fireplace. The classic Glass Igloos are smaller, busier, and the bathroom is a 50-metre walk in -25°C.",
              "The price difference is roughly €200/night. Across three nights, the Kelo-Glass earns its premium back in not having to put on snow boots at 4 AM.",
            ]}
            caveat="The classic Glass Igloos run about 30% cheaper but the experience is meaningfully worse. If your budget caps at €400/night, look at Aurora Village or Aurora Pyramids — same sky, often a better lake or wilderness setting."
          />
        </div>
      </section>

      <PullQuote attribution="Kakslauttanen origin story · 1973">
        The first glass igloo was built so guests could see the aurora without standing
        outside in -30°C. Fifty years later that is still the entire pitch — and the part
        every imitator gets wrong is what happens after the aurora goes away.
      </PullQuote>

      <ImageBreak
        src="/images/break-boreal-forest.webp"
        alt="Snow-covered pine forest at midday"
        ratio="3/1"
      />

      <FinnishDivider />

      <section className="py-16 sm:py-24 px-5 sm:px-6 bg-cream-2/60">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 max-w-2xl">
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
              The other three
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight tracking-tight">
              When Kakslauttanen isn&rsquo;t the right answer.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {runnersUp.map((p) => (
              <PropertyCard key={p.slug} property={p} sidPrefix="gi" />
            ))}
          </div>
        </div>
      </section>

      <FinnishDivider />

      <section className="py-16 sm:py-24 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
              All four at a glance
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight tracking-tight">
              The opinionated comparison.
            </h2>
          </div>
          <ComparisonTable
            axes={['Access', 'Sky', 'Privacy', 'Comfort', 'Reputation']}
            rows={comparisonRows}
            rubric="Five dots is best. Access = ease from the nearest airport. Sky = darkness + viewing geometry. Privacy = isolation from neighbouring units. Comfort = bathroom, kitchen, sound insulation. Reputation = how well the resort delivers on the brochure."
          />
          <MarginNote label="Trade-off">
            No resort wins all five axes. Aurora Pyramids beats everyone on sky reflection
            but loses on access (40 min from Ivalo). Levin Iglut wins on engineering but
            sits inside a busy ski village. Pick the priority that matters most.
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
            When to skip glass igloos entirely.
          </h2>
          <div className="space-y-4 text-graphite text-[16px] leading-relaxed">
            <p>
              For four-plus-night stays, two glass-igloo nights and a long-stay cabin block
              is a better trip than four glass-igloo nights. The novelty wears off after
              night two; a hirsimökki with a private sauna delivers the part of Lapland a
              glass dome cannot.
            </p>
            <p>
              For Christmas (Dec 22 → Jan 2), prices triple and 90% of inventory goes to UK
              package tours by spring. Move dates to the second half of January if possible
              — colder, darker, half the price, better aurora.
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
              to="/booking-guide"
              className="px-5 py-2.5 bg-white hover:bg-charcoal hover:text-snow border border-charcoal/15 text-charcoal rounded-full text-sm font-semibold transition-colors"
            >
              Booking guide
            </Link>
            <AffiliateCTA
              partner="hotels"
              sid="gi_browse_all_cta"
              destination="Lapland glass igloo"
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
