import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import FinnishDivider from '../components/FinnishDivider';
import AuthorByline from '../components/AuthorByline';
import PullQuote from '../components/PullQuote';
import TripTypeRecommender from '../components/TripTypeRecommender';
import WorkInLaplandPromo from '../components/WorkInLaplandPromo';
import CabinBand from '../components/CabinBand';
import HomeAdSlots, { MainPartnerBanner } from '../shared/HomeAdSlots';
import { AD_SLOTS } from '../data/adSlots';
import { allCategoriesSummary, destinations } from '../data/properties';
import { pageUrl } from '../lib/meta';
import { useLang, useLocalePath } from '../i18n/useLang';
import { getCopy } from '../locales/copy';
import { AppPromoHero } from '../components/AppPromo';

// Per-question links to the pages that back each FAQ answer (Vesa 2026-07-07:
// FAQ answers must point to our own supporting content). Labels reuse the
// existing nav translations; "Rovaniemi" is a proper noun in every locale.
const FAQ_LINKS: { route: string; navKey?: 'longStays' | 'glassIgloos'; literal?: string }[][] = [
  [{ route: '/long-stays', navKey: 'longStays' }],                                                  // 1 what counts as a long stay
  [{ route: '/long-stays', navKey: 'longStays' }, { route: '/glass-igloos', navKey: 'glassIgloos' }], // 2 long stays vs igloos
  [{ route: '/glass-igloos', navKey: 'glassIgloos' }],                                              // 3 Kakslauttanen worth it
  [{ route: '/destinations/rovaniemi', literal: 'Rovaniemi' }, { route: '/long-stays', navKey: 'longStays' }], // 4 remote-work base
];

export default function Home() {
  const lang = useLang();
  const localePath = useLocalePath();
  const t = getCopy(lang);
  const h = t.home;

  const localizedCategories = allCategoriesSummary.map((cat) => {
    const key =
      cat.slug === 'long-stays' ? 'longStays'
      : cat.slug === 'hotels' ? 'hotels'
      : cat.slug === 'glass-igloos' ? 'glassIgloos'
      : 'wilderness';
    return {
      ...cat,
      name: h.categoryNames[key as keyof typeof h.categoryNames],
      description: h.categoryDescriptions[key as keyof typeof h.categoryDescriptions],
    };
  });

  const dests = destinations.map((d) => {
    const dl = t.destinationsData.find((x) => x.slug === d.slug);
    return { ...d, pitch: dl?.pitch ?? d.pitch };
  });

  // Real counts from the data layer — the stat band must never drift from the
  // actual inventory (the old hardcoded "17" survived a property removal).
  const totalStays = allCategoriesSummary.reduce((n, c) => n + c.count, 0);

  return (
    <>
      <title>{h.metaTitle}</title>
      <meta name="description" content={h.metaDescription} />
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
                name: h.schemaName,
                isPartOf: { '@id': `${pageUrl('/')}#website` },
                inLanguage: lang,
                about: { '@type': 'Place', name: 'Finnish Lapland' },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: h.breadcrumbHome, item: pageUrl('/') },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: h.faqs.map(({ q, a }) => ({
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

      {/* Stat band — glass tiles straddling the hero/cream edge. The negative
          margin only works against the Hero: while AppPromoHero sat between
          the two, these tiles were pulled on top of the app card and covered
          its last line (Vesa 2026-08-17, "miksi trust ikonit on apin päällä").
          Keep the stat band adjacent to the Hero and the app block after it.
          Numbers are REAL counts from the data layer (never hardcode). */}
      <section className="relative z-10 -mt-14 sm:-mt-16 px-5 sm:px-6" aria-label={`${totalStays} ${h.stats.stays}`}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            { n: totalStays, label: h.stats.stays },
            { n: destinations.length, label: h.stats.bases },
            { n: allCategoriesSummary.length, label: h.stats.categories },
            { n: t.whenToGo.months.length, label: h.stats.months },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-night/85 backdrop-blur-md p-4 md:p-5 text-center shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
            >
              <p className="font-heading text-4xl md:text-5xl text-vibe-pink leading-none">{s.n}</p>
              <p className="mt-2 text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-snow/75 font-semibold leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* App launch block, high on the page. At the foot of the page it measured
          81 % down a 33,000 px front page, and an announcement nobody scrolls
          to is not an announcement. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-16">
        <AppPromoHero />
      </div>

      {/* LV Media — PÄÄKUMPPANI-banneri heti heron alla */}
      <MainPartnerBanner config={AD_SLOTS} locale={lang} surface="light" />

      {/* Editor intro */}
      <section className="pt-14 pb-12 sm:pt-16 sm:pb-16 px-5 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <AuthorByline note={h.authorNote} />

          <div className="mt-8 space-y-5 text-graphite text-base sm:text-[17px] leading-relaxed">
            <p>{h.intro.p1}</p>
            <p>{h.intro.p2}</p>
            <p className="text-stone italic">{h.intro.p3}</p>
          </div>
        </div>
      </section>

      {/* Real, bookable cabins BEFORE the category grid. These are the only
          photographs on the site of actual, bookable properties; the
          category cards below are generated imagery. Showing the generated set
          first and the real one 700 px later had it backwards (Vesa 2026-08-17:
          "aitoja mökkejä, aidot kuvat -osio pitää olla ylempänä kuin fake
          kuvat"). Same partner, same disclosure, better creative. */}
      <CabinBand areas={['yllas', 'levi', 'saariselka']} />

      {/* Four-bucket overview */}
      <section className="py-20 sm:py-28 px-5 sm:px-6 bg-cream-2/60">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 sm:mb-16 max-w-2xl">
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
              {h.fourWays.kicker}
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal leading-[1.1] tracking-wide">
              {h.fourWays.h2A} <span className="text-vibe-pink">{h.fourWays.h2B}</span>
            </h2>
            <p className="text-graphite text-base sm:text-lg mt-5 leading-relaxed">
              {h.fourWays.lead}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {localizedCategories.map((cat) => (
              <Link
                key={cat.slug}
                to={localePath(`/${cat.slug}`)}
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
                    {cat.count} {cat.count === 1 ? h.propertyWord : h.propertiesWord}
                  </p>
                  <h3 className="font-heading text-3xl text-charcoal leading-tight mb-3">
                    {cat.name}
                  </h3>
                  <p className="text-graphite text-[15px] leading-relaxed mb-5 flex-1">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-vibe-pink group-hover:gap-2.5 text-sm font-semibold transition-all mt-auto">
                    {h.explore}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LV Media — kumppaniosio ylhäällä: kakkospääkumppani + 6 premium-
          kohdepaikkaa. Cream-pinta → surface="light". */}
      <HomeAdSlots config={AD_SLOTS} locale={lang} surface="light" />

      <PullQuote attribution={h.pullQuote.attr}>{h.pullQuote.text}</PullQuote>

      <FinnishDivider />

      {/* Trip-type recommender */}
      <section className="py-20 sm:py-28 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-14 max-w-2xl mx-auto">
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
              {h.tripKicker}
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal leading-[1.1] tracking-wide">
              {h.tripH2}
            </h2>
          </div>
          <TripTypeRecommender />
        </div>
      </section>

      <FinnishDivider />

      <WorkInLaplandPromo placement="home_below_trips" />

      <FinnishDivider />

      {/* Destinations */}
      <section className="py-20 sm:py-28 px-5 sm:px-6 bg-cream-2/60">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 sm:mb-14 max-w-2xl">
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
              {h.destKicker}
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal leading-[1.1] tracking-wide">
              {h.destH2}
            </h2>
            <p className="text-graphite text-base sm:text-lg mt-5 leading-relaxed">
              {h.destLead}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {dests.map((d) => (
              <Link
                key={d.slug}
                to={localePath(`/destinations/${d.slug}`)}
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
                  <h3 className="absolute bottom-4 left-5 right-5 font-heading text-3xl text-snow leading-tight drop-shadow">
                    {d.name}
                  </h3>
                </div>
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <p className="text-graphite text-[15px] leading-relaxed mb-5 flex-1">
                    {d.pitch}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-vibe-pink group-hover:gap-2.5 text-sm font-semibold transition-all mt-auto">
                    {h.readGuide} {d.name}
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
              {h.faqKicker}
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal leading-[1.1] tracking-wide">
              {h.faqH2}
            </h2>
          </div>
          <div className="space-y-3">
            {h.faqs.map((f, faqIndex) => (
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
                <div className="px-6 pb-6">
                  <p className="text-graphite leading-relaxed text-[15px] sm:text-base">
                    {f.a}
                  </p>
                  {(FAQ_LINKS[faqIndex] ?? []).length > 0 && (
                    <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
                      {FAQ_LINKS[faqIndex].map((l) => (
                        <Link
                          key={l.route}
                          to={localePath(l.route)}
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-charcoal hover:text-vibe-pink transition-colors"
                        >
                          {l.navKey ? t.nav[l.navKey] : l.literal} →
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </details>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to={localePath('/booking-guide')}
              className="inline-flex items-center justify-center text-center leading-snug gap-2 px-7 py-3.5 bg-charcoal hover:bg-vibe-pink text-snow rounded-full font-semibold transition-colors"
            >
              {h.fullGuideCta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
