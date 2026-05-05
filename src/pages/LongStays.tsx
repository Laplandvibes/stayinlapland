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
import MarginNote from '../components/MarginNote';
import WorkInLaplandPromo from '../components/WorkInLaplandPromo';
import { longStays } from '../data/properties';
import { pageUrl } from '../lib/meta';

const editorsPick = longStays[0]; // Octola
const runnersUp = longStays.slice(1);

const PROPERTY_IMAGES: Record<string, string> = {
  'Octola Private Reserve': '/images/pick-octola.webp',
  'Lapland Hotels Bear\'s Lodge': '/images/hero-cabins.webp',
  'Lapland Hotels Ounasvaara Chalets': '/images/hero-cabins.webp',
};

export default function LongStays() {
  return (
    <>
      <title>Long Stays in Finnish Lapland — week+ rentals | StayInLapland</title>
      <meta
        name="description"
        content="Six long-stay Lapland properties for week-plus rentals — Octola private reserve, Arctic TreeHouse design suites, Levi penthouse residences, Pyhä log cabins, Lake Inari villas. Weekly rates, private saunas, kitchenettes."
      />
      <link rel="canonical" href={pageUrl('/long-stays')} />
      <meta name="robots" content="index, follow" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Article',
                headline: 'Long Stays in Finnish Lapland',
                publisher: { '@id': `${pageUrl('/')}#organization` },
                mainEntityOfPage: pageUrl('/long-stays'),
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: pageUrl('/') },
                  { '@type': 'ListItem', position: 2, name: 'Long Stays', item: pageUrl('/long-stays') },
                ],
              },
            ],
          }),
        }}
      />

      <PageHero
        eyebrow="Six long-stay properties"
        title="Stay a week. Or a month."
        subtitle="The right answer for repeat visitors, remote workers, families and anyone whose Lapland trip is longer than three nights. Weekly rates, private saunas, real kitchens — and the buyout-only properties at the top of the market."
        imageSrc="/images/hero-long-stays.webp"
        imageAlt="Lakeside Finnish log cabin in winter — long-stay rental setting"
      />

      <section className="py-12 sm:py-16 px-5 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <AuthorByline note="Six properties cross-checked with on-the-ground partners and weekly-rate calendars across the 2025/26 season." />

          <div className="mt-10">
            <WorkInLaplandPromo placement="long_stays_top" variant="inline" />
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <EditorsPick
            name={editorsPick.name}
            location={editorsPick.location}
            priceRange={editorsPick.priceRange}
            imageSrc="/images/pick-octola.webp"
            imageAlt="Architect-designed wilderness lodge on private fjell ridge in winter golden hour"
            sidPrefix="ls"
            whyParagraphs={[
              'Octola is the answer when the question is &ldquo;what is the most exclusive long stay possible in Finnish Lapland?&rdquo; A 300-hectare private wilderness reserve with one architect-designed lodge — Studio Puisto, ten suites, full buyout only.',
              'There is no day rate. The minimum is two nights and the lodge sleeps ten — so €280 per person per night for a group of ten, in one of the best buildings in Finland and 300 hectares of nobody else.',
              'Octola is not on Hotels.com — to actually book, you contact octola.fi directly. We list it because the long-stay question would be incomplete without it; the &ldquo;Check rates&rdquo; button below routes you to nearby alternatives instead.',
            ]}
            caveat="Booked 9–12 months out for peak weeks. Off-peak (mid-November, late April) sometimes opens 3 months out. The lodge does not accept partial bookings — only the full 10-suite buyout."
          />
        </div>
      </section>

      <PullQuote attribution="Studio Puisto · architect statement, Octola Lodge">
        The brief was to disappear into the ridge. Use timber that came from the property,
        glass facing only north, and never raise the roofline above the tree line. What you
        see is what was already there — we just made it possible to live inside it.
      </PullQuote>

      <ImageBreak
        src="/images/break-frozen-lake.webp"
        alt="Frozen lake at dawn"
        ratio="3/1"
      />

      <FinnishDivider />

      <section className="py-16 sm:py-24 px-5 sm:px-6 bg-cream-2/60">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 max-w-2xl">
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
              The other five
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight tracking-tight">
              From design suites to ski-in apartments.
            </h2>
            <p className="text-graphite mt-4 leading-relaxed">
              Each of the five below has a different long-stay rationale — proximity to a
              lift system, work-from-Lapland weekday infrastructure, family-friendly
              kitchen, or culturally rich lake-side base.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {runnersUp.map((p) => (
              <PropertyCard
                key={p.slug}
                property={p}
                sidPrefix="ls"
                imageSrc={PROPERTY_IMAGES[p.name]}
                imageAlt={p.name}
              />
            ))}
          </div>
        </div>
      </section>

      <FinnishDivider />

      <section className="py-16 sm:py-20 px-5 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-gold text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
            How weekly rates work
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal mb-6 leading-tight tracking-tight">
            The price drops faster than people expect.
          </h2>
          <div className="space-y-4 text-graphite text-[16px] leading-relaxed">
            <p>
              Across the six properties above, the weekly rate is on average <strong>23% cheaper per night</strong> than
              the headline nightly rate. Levi Residences drops 30%, Pyhä Bear&rsquo;s Lodge drops 18%, Arctic
              TreeHouse drops 25%. Most properties don&rsquo;t advertise this — the discount lives in the booking
              system once you select 7+ nights.
            </p>
            <p>
              The shoulder weeks — <strong>mid-November</strong> (right before snow stabilises) and{' '}
              <strong>late April</strong> (right after the snow melts) — drop a further 30–50% on top.
              Aurora is still active in both windows. This is the sweet spot for long stays
              with a flexible work calendar.
            </p>
          </div>

          <MarginNote label="Booking tactic">
            For a 4-week stay, splitting it across two properties can beat a single-property
            booking — you avoid the &ldquo;peak week&rdquo; spike that hits Christmas and Mardi Gras,
            and you actually see two parts of Lapland. The transfer day takes half a day; the
            money saved usually pays for two extra nights elsewhere.
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
            When NOT to book a long stay.
          </h2>
          <div className="space-y-4 text-graphite text-[16px] leading-relaxed">
            <p>
              For a 2–3 night first trip, skip long-stay rentals. The check-in, grocery
              shopping and learning-the-stove tax wipes out the savings. Book a hotel
              instead.
            </p>
            <p>
              For a single bucket-list aurora night, glass igloos are the better answer.
              The roof of glass is the experience you came for; a long-stay cabin gives you
              a window.
            </p>
            <p>
              For mixed-mobility groups, call the property directly before booking — most
              long-stay cabins are not step-free and the saunas in particular sit in the
              basement on a wood floor.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/hotels"
              className="px-5 py-2.5 bg-white hover:bg-charcoal hover:text-snow border border-charcoal/15 text-charcoal rounded-full text-sm font-semibold transition-colors"
            >
              See hotels
            </Link>
            <Link
              to="/glass-igloos"
              className="px-5 py-2.5 bg-white hover:bg-charcoal hover:text-snow border border-charcoal/15 text-charcoal rounded-full text-sm font-semibold transition-colors"
            >
              See glass igloos
            </Link>
            <AffiliateCTA
              partner="hotels"
              sid="ls_browse_all_cta"
              destination="Lapland weekly rental"
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
