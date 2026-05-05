import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import FinnishDivider from '../components/FinnishDivider';
import AffiliateCTA from '../components/AffiliateCTA';
import AuthorByline from '../components/AuthorByline';
import { Calendar, Plane, Snowflake, Wallet, Compass, Lightbulb } from 'lucide-react';
import { pageUrl } from '../lib/meta';

const sections = [
  {
    icon: Calendar,
    title: 'When to come',
    body: [
      'Aurora season is late August through early April. The strongest windows are September–October and February–March, when long dark nights overlap with active solar weather.',
      'Avoid late November to mid-December: dark, but the snow is often patchy and many activities have not started.',
      'Christmas and New Year sell out 9 months ahead and prices triple. The local pick is the second half of January — quieter, colder, better aurora.',
    ],
  },
  {
    icon: Plane,
    title: 'How to get there',
    body: [
      'Three Lapland airports cover most of what you would book. Rovaniemi (RVN) for Santa Claus Village and the south, Kittilä (KTT) for Levi and Ylläs, Ivalo (IVL) for Saariselkä, Inari and the north.',
      'Helsinki (HEL) → Lapland is a 90-minute domestic flight. Direct flights from London, Berlin and Paris also exist December–March.',
      'Trains: the Helsinki–Rovaniemi overnight sleeper is slow but the Tornio dawn is genuinely beautiful and the cabin is full of locals doing the same trip.',
    ],
  },
  {
    icon: Snowflake,
    title: 'What to pack',
    body: [
      'Most properties supply Arctic outerwear (-30°C suits, boots, gloves, hats) included or for a small daily fee. Confirm before flying with a checked bag full of ski gear.',
      'Layers matter more than thickness — merino base + fleece mid + windproof shell. Cotton kills.',
      'Cameras: bring spare batteries inside your jacket. Cold drains them fast.',
    ],
  },
  {
    icon: Wallet,
    title: 'Budget reality check',
    body: [
      'Long-stay cabin (weekly): €140–280/night, can sleep 4–6.',
      'Boutique hotel: €140–420/night, breakfast usually included.',
      'Glass igloo, peak season: €400–1500/night for two.',
      'Wilderness lodge full buyout: €2 800+/night for ten.',
      'Activities (husky safari, snowmobile, aurora hunt) typically €120–200 per person per outing on top.',
    ],
  },
  {
    icon: Compass,
    title: 'Cancellation policies',
    body: [
      'Most Lapland properties have moved to non-refundable rates for peak weeks. Read the fine print before clicking &ldquo;book&rdquo;.',
      'Travel insurance with cancel-for-any-reason coverage is genuinely worth it for trips over €2 000. Aurora chasers cancel for weather all the time.',
      'Hotels.com and Booking.com both honour their public cancellation policies — book through the redirect on this site to keep the rate visible and consistent.',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Insider tips',
    body: [
      'Saariselkä and Inari are colder, darker and have stronger aurora than Rovaniemi — but Rovaniemi has the airport, the activities, the Santa Claus Village. Mix bases.',
      'If you only have 3 nights, do them in one location. Lapland is bigger than people expect and transfers eat days.',
      'Aurora forecasts (NOAA, Aurora Service Europe) are accurate 30–90 minutes ahead, not days. Stay flexible.',
    ],
  },
];

export default function BookingGuide() {
  return (
    <>
      <title>Lapland Booking Guide — when, how, what to pack | StayInLapland</title>
      <meta
        name="description"
        content="Practical Lapland booking guide — when to come for the best aurora, how to get there, what to pack, what it actually costs, cancellation policies and insider tips."
      />
      <link rel="canonical" href={pageUrl('/booking-guide')} />
      <meta name="robots" content="index, follow" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Article',
                headline: 'Lapland Booking Guide',
                publisher: { '@id': `${pageUrl('/')}#organization` },
                mainEntityOfPage: pageUrl('/booking-guide'),
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: pageUrl('/') },
                  { '@type': 'ListItem', position: 2, name: 'Booking Guide', item: pageUrl('/booking-guide') },
                ],
              },
            ],
          }),
        }}
      />

      <PageHero
        eyebrow="Plan a real trip"
        title="The Lapland Booking Guide."
        subtitle="Practical, opinionated advice. When to come, how to get there, what to pack, what it actually costs."
        imageSrc="/images/hero-booking-guide.webp"
        imageAlt="Flat lay: paper map of Lapland, wool gloves, thermos, vintage compass, hand-written notes"
      />

      <section className="py-12 sm:py-16 px-5 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <AuthorByline />
        </div>
      </section>

      <FinnishDivider />

      <section className="py-16 sm:py-20 px-5 sm:px-6 bg-cream-2/60">
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-white border border-charcoal/8 rounded-2xl p-7 sm:p-9 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-vibe-pink/10 border border-vibe-pink/30 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-vibe-pink" />
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl text-charcoal">{title}</h2>
              </div>
              <div className="space-y-3">
                {body.map((p, i) => (
                  <p
                    key={i}
                    className="text-graphite text-base sm:text-[17px] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
              </div>
            </div>
          ))}

          <div className="text-center pt-8">
            <h2 className="font-heading text-3xl sm:text-4xl text-charcoal mb-3 leading-tight tracking-tight">
              Ready to book?
            </h2>
            <p className="text-graphite max-w-xl mx-auto mb-6 leading-relaxed">
              Browse hand-picked properties by category, or jump straight to live availability
              on Hotels.com.
            </p>
            <AffiliateCTA
              partner="hotels"
              sid="bg_browse_all_cta"
              destination="Lapland Finland"
              className="inline-flex px-7 py-3.5 bg-vibe-pink hover:bg-vibe-pink/90 text-white rounded-full font-semibold transition-all"
            >
              Browse all Lapland accommodation
            </AffiliateCTA>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
