import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import FinnishDivider from '../components/FinnishDivider';
import AuthorByline from '../components/AuthorByline';
import PullQuote from '../components/PullQuote';
import MarginNote from '../components/MarginNote';
import { pageUrl } from '../lib/meta';

const months = [
  {
    name: 'September',
    pitch: 'Aurora season opens',
    body: 'Long dark nights begin. Snow has not yet fallen — this is the &ldquo;ruska&rdquo; period when birch turns red and gold. Aurora reads against bare ground, the colours are the most photographed of any month.',
    bestFor: ['Photographers', 'Aurora-first short stays', 'Hiking + aurora combo'],
    avoidIf: ['You came specifically for snow'],
  },
  {
    name: 'October',
    pitch: 'Quiet shoulder',
    body: 'First snow flurries, but ground rarely stays white before late month. Hotels run shoulder rates (-30% from peak), aurora active, very few tourists. The cheapest aurora window with full activity infrastructure.',
    bestFor: ['Aurora hunters on a budget', 'Long-stay arrival before peak'],
    avoidIf: ['You want skiing or snowmobile guarantees'],
  },
  {
    name: 'November',
    pitch: 'Polar night begins, snow stabilises',
    body: 'Coldest start to a Lapland winter. Polar night kicks in north of Sodankylä mid-month. Snow starts holding in late November — by month-end most resorts and snow hotels open. Late November is the absolute best value for long stays.',
    bestFor: ['Long stays at -50% rates', 'Repeat visitors who know the cold'],
    avoidIf: ['First-time travellers (snow inconsistency)'],
  },
  {
    name: 'December',
    pitch: 'Christmas peak',
    body: 'Christmas through New Year is peak everything — peak prices, peak demand, peak Santa Claus tourism in Rovaniemi. Glass igloos triple in price, snow hotels fully open. Aurora still active but weather often cloudier.',
    bestFor: ['Christmas-themed family trips', 'First-timers who want guaranteed snow'],
    avoidIf: ['Budget-sensitive travel', 'Aurora-first stays'],
  },
  {
    name: 'January',
    pitch: 'The local pick',
    body: 'Second half of January is the quiet sweet spot — peak prices have receded, days lengthen perceptibly, snow is stable, aurora most active. Christmas crowds have left and February school-break crowds have not arrived.',
    bestFor: ['Long stays', 'Honeymooners', 'Aurora photography'],
    avoidIf: ['You need warm weather of any kind'],
  },
  {
    name: 'February',
    pitch: 'Strongest aurora month',
    body: 'Mid-Feb to mid-March is statistically the strongest aurora window of the year — dark sky overlap with active solar weather. Long stays at peak rates again because of European school breaks; book 6 months ahead.',
    bestFor: ['Glass igloos', 'Aurora bucket-list trips'],
    avoidIf: ['Short-notice planners'],
  },
  {
    name: 'March',
    pitch: 'Light returns',
    body: 'Days lengthen rapidly — by month-end you have 13 hours of daylight. Aurora still strong on dark mornings and late evenings. Spring skiing on south-facing fells. The most photogenic skiing month.',
    bestFor: ['Ski-in long stays', 'Anyone who wants light + aurora'],
    avoidIf: ['Photographers who came for the polar night vibe'],
  },
  {
    name: 'April',
    pitch: 'Spring snow + light',
    body: 'Snow still deep and skiing world-class on the fells. Aurora season ends mid-April as nights become too light. Late April is shoulder again — rates drop 30%, properties still open, sun above horizon for 16+ hours.',
    bestFor: ['Late-season ski long stays', 'Cross-country skiing'],
    avoidIf: ['Aurora-first trips'],
  },
];

export default function WhenToGo() {
  return (
    <>
      <title>When to Visit Lapland — month-by-month guide | StayInLapland</title>
      <meta
        name="description"
        content="Editorial month-by-month guide to visiting Finnish Lapland — when aurora is strongest, when snow stabilises, peak vs shoulder rates, and which weeks the locals book for themselves."
      />
      <link rel="canonical" href={pageUrl('/when-to-go')} />
      <meta name="robots" content="index, follow" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Article',
                headline: 'When to Visit Finnish Lapland — month by month',
                publisher: { '@id': `${pageUrl('/')}#organization` },
                mainEntityOfPage: pageUrl('/when-to-go'),
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: pageUrl('/') },
                  { '@type': 'ListItem', position: 2, name: 'When to Go', item: pageUrl('/when-to-go') },
                ],
              },
            ],
          }),
        }}
      />

      <PageHero
        eyebrow="Month-by-month"
        title="When to visit Lapland."
        subtitle="The right month depends on the trip. Aurora-first, ski-first, long-stay value, Christmas peak — each has a different sweet spot. Here is the editorial month-by-month."
        imageSrc="/images/hero-when-to-go.webp"
        imageAlt="Lapland fell at 14:00 in late February — deep snow with long blue shadows"
      />

      <section className="py-12 sm:py-16 px-5 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <AuthorByline note="Compiled from on-the-ground partner reports plus Finnish Meteorological Institute aurora and snow data." />
        </div>
      </section>

      <PullQuote attribution="Finnish Meteorological Institute · auroral activity data 2014–2024">
        Roughly 65% of all visible auroras over Finnish Lapland fall between 21:00 and
        02:00 local time — and February + March account for 38% of all annual aurora
        sightings. The rest of the season is real, but those two months are statistically
        ahead.
      </PullQuote>

      <FinnishDivider />

      <section className="py-16 sm:py-24 px-5 sm:px-6 bg-cream-2/60">
        <div className="max-w-4xl mx-auto space-y-6">
          {months.map((m) => (
            <article
              key={m.name}
              className="bg-white border border-charcoal/8 rounded-2xl p-7 sm:p-9 shadow-sm"
            >
              <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 mb-4">
                <h2 className="font-heading text-3xl sm:text-4xl text-charcoal leading-tight">
                  {m.name}
                </h2>
                <p className="text-vibe-pink text-[12px] tracking-[0.2em] uppercase font-semibold">
                  {m.pitch}
                </p>
              </div>
              <p
                className="text-graphite text-[16px] leading-relaxed mb-5"
                dangerouslySetInnerHTML={{ __html: m.body }}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-aurora-green text-[11px] font-semibold tracking-[0.2em] uppercase mb-2">
                    Best for
                  </p>
                  <ul className="space-y-1.5 text-graphite">
                    {m.bestFor.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="text-aurora-green mt-1">●</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-stone text-[11px] font-semibold tracking-[0.2em] uppercase mb-2">
                    Skip if
                  </p>
                  <ul className="space-y-1.5 text-graphite">
                    {m.avoidIf.map((a) => (
                      <li key={a} className="flex items-start gap-2">
                        <span className="text-stone mt-1">○</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FinnishDivider />

      <section className="py-16 sm:py-20 px-5 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
            The local cheat-sheet
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal mb-7 leading-tight tracking-tight">
            Three weeks the locals book for themselves.
          </h2>

          <div className="space-y-5 text-graphite text-[16px] leading-relaxed">
            <p>
              <strong className="text-charcoal">Late November (week 47–48).</strong> Snow has
              just stabilised, polar night peaks, aurora season at full activity. Long-stay
              rates 40–50% off peak. Some properties not fully open yet — confirm before
              booking.
            </p>
            <p>
              <strong className="text-charcoal">Second half of January (week 3–4).</strong>{' '}
              The single best aurora-vs-cost week of the season. Christmas crowds gone,
              February school break has not started, days lengthening, snow fully set. This
              is when our editor takes vacation.
            </p>
            <p>
              <strong className="text-charcoal">Late April (week 16–17).</strong> Spring
              skiing peak, sun above horizon 16h/day, snow still deep on north-facing slopes.
              Aurora window has closed but the light alone is worth the trip. Rates drop 30%
              after Easter.
            </p>
          </div>

          <MarginNote label="Booking timing">
            For peak February: book 6 months out. For late January: 3 months. For shoulder
            (Nov, late Apr): 6–8 weeks works. Christmas / NYE: 9 months minimum, and have
            backup dates because peak inventory disappears in spring.
          </MarginNote>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/booking-guide"
              className="px-5 py-2.5 bg-charcoal hover:bg-vibe-pink text-snow rounded-full text-sm font-semibold transition-colors"
            >
              Read the booking guide
            </Link>
            <Link
              to="/long-stays"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white hover:bg-cream-2 border border-charcoal/15 text-charcoal rounded-full text-sm font-semibold transition-colors"
            >
              See long stays <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
