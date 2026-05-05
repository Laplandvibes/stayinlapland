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
import { wilderness } from '../data/properties';
import { pageUrl } from '../lib/meta';

const editorsPick = wilderness[0]; // Octola
const runnersUp = wilderness.slice(1);

const comparisonRows = [
  { name: 'Octola Lodge',         scores: [2, 5, 5, 5, 5], verdict: 'Most exclusive booking on this site. Full buyout only.' },
  { name: 'Iso-Syöte Eagle View', scores: [4, 4, 4, 4, 3], verdict: 'Above-treeline. Easiest from southern Finland.' },
  { name: 'Hotel Muotka',         scores: [4, 4, 3, 5, 4], verdict: 'On-site aurora wake-up service. Hotel comforts.' },
];

export default function WildernessLodges() {
  return (
    <>
      <title>Wilderness Lodges in Finnish Lapland — three serious retreats | StayInLapland</title>
      <meta
        name="description"
        content="Three wilderness lodges past the last road — Octola Lodge private reserve, Iso-Syöte Eagle View Suites, Wilderness Hotel Muotka. Above-treeline aurora viewing, full buyouts, on-site aurora wake-up service."
      />
      <link rel="canonical" href={pageUrl('/wilderness')} />
      <meta name="robots" content="index, follow" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Article',
                headline: 'Wilderness Lodges in Finnish Lapland',
                publisher: { '@id': `${pageUrl('/')}#organization` },
                mainEntityOfPage: pageUrl('/wilderness'),
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: pageUrl('/') },
                  { '@type': 'ListItem', position: 2, name: 'Wilderness', item: pageUrl('/wilderness') },
                ],
              },
            ],
          }),
        }}
      />

      <PageHero
        eyebrow="Past the last road"
        title="Wilderness Lodges."
        subtitle="The new Lapland tradition — architect-designed retreats built since the 2010s in places where the tourist road ends. Three lodges, three different definitions of wilderness."
        imageSrc="/images/hero-wilderness.webp"
        imageAlt="Aerial view of single wooden lodge on lakeside in vast pine forest"
      />

      <section className="py-12 sm:py-16 px-5 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <AuthorByline note="Two of the three properties physically inspected this winter; Octola covered through long-standing partner relationships only." />
        </div>
      </section>

      <section className="py-10 sm:py-14 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <EditorsPick
            name={editorsPick.name}
            location={editorsPick.location}
            priceRange={editorsPick.priceRange}
            imageSrc="/images/pick-octola.webp"
            imageAlt="Single architect-designed wilderness lodge on private fjell ridge"
            sidPrefix="wl"
            whyParagraphs={[
              'Octola is unlike any other property in this guide. It is not a hotel. It is a 300-hectare private wilderness reserve with one 10-suite lodge, booked only as a full buyout.',
              "Architecture is by Studio Puisto. The kitchen is Sami-fusion fine dining. Aurora viewing is from heated outdoor seating across the ridge — guests can stand outside in -25°C for an hour without ever feeling cold.",
              "Expensive in a way that should be quoted in proper sentences: from €2 800/night for the lodge, sleeping ten — so €280 per person for a group of ten, in one of the best buildings in Finland. That is the right way to think about Octola.",
            ]}
            caveat="Octola is not on Hotels.com. The 'check rates' button on this site routes to Hotels.com search for nearby alternatives. To actually book Octola, contact octola.fi directly."
          />
        </div>
      </section>

      <PullQuote attribution="On the Octola access road, looking up">
        The word &ldquo;exclusive&rdquo; is usually marketing language. It is true here.
        There is a fence and a long driveway and you cannot drop in. Whatever the
        imagination invents about what is happening behind it is probably happening.
      </PullQuote>

      <ImageBreak
        src="/images/break-frozen-lake.webp"
        alt="Frozen lake stretching to horizon at dawn"
        ratio="3/1"
      />

      <FinnishDivider />

      <section className="py-16 sm:py-24 px-5 sm:px-6 bg-cream-2/60">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 max-w-2xl">
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
              The other two
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight tracking-tight">
              When Octola is too much.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {runnersUp.map((p) => (
              <PropertyCard key={p.slug} property={p} sidPrefix="wl" />
            ))}
          </div>
        </div>
      </section>

      <FinnishDivider />

      <section className="py-16 sm:py-24 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
              Three definitions of wilderness
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight tracking-tight">
              At a glance.
            </h2>
          </div>
          <ComparisonTable
            axes={['Access', 'Isolation', 'Service', 'Activities', 'Once-in-life factor']}
            rows={comparisonRows}
            rubric="Isolation = how alone you actually feel. Service = staff-to-guest ratio. Activities = guided experiences included or available."
          />
          <MarginNote label="Aurora wake-up at Muotka">
            Wilderness Hotel Muotka runs an on-duty aurora hunter who watches the Kp index
            and physically knocks on doors when the auroras open. It is the single best
            feature of any property in this guide and worth the price difference for
            one-night-only trips.
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
            Wilderness lodges are not for everyone.
          </h2>
          <div className="space-y-4 text-graphite text-[16px] leading-relaxed">
            <p>
              All three lodges sit 1–3 hours by transfer from the nearest airport. For
              trips under three nights, the time spent in transit is disproportionate.
            </p>
            <p>
              For first-time Arctic travellers: do a Rovaniemi or Saariselkä trip first.
              Octola is wasted on someone still figuring out -25°C.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/long-stays"
              className="px-5 py-2.5 bg-white hover:bg-charcoal hover:text-snow border border-charcoal/15 text-charcoal rounded-full text-sm font-semibold transition-colors"
            >
              See long stays
            </Link>
            <AffiliateCTA
              partner="hotels"
              sid="wl_browse_all_cta"
              destination="Lapland wilderness lodge"
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
