import ProductRail, { type RailLang } from '../shared/ads/ProductRail'
import finlaysonRail from '../shared/ads/rails/finlayson'
import finlaysonPicks from '../shared/ads/data/finlaysonPicks'
import { Link } from 'react-router-dom';
import { SiteLink } from '../lib/movedToStays';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import FinnishDivider from '../components/FinnishDivider';
import AuthorByline from '../components/AuthorByline';
import { KickerChip } from '../components/housing/ui';
import TripTypeRecommender from '../components/TripTypeRecommender';
import WorkInLaplandPromo from '../components/WorkInLaplandPromo';
import CabinBand from '../components/CabinBand';
import HomeAdSlots, { MainPartnerBanner } from '../shared/HomeAdSlots';
import { AD_SLOTS } from '../data/adSlots';
import { allCategoriesSummary, destinations } from '../data/properties';
import { pageUrl } from '../lib/meta';
import { useLang, useLocalePath, useLocalPageUrl } from '../i18n/useLang';
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
  const localUrl = useLocalPageUrl();
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

  return (
    <>
      <title>{h.metaTitle}</title>
      <meta name="description" content={h.metaDescription} />
      <link rel="canonical" href={localUrl('/')} />
      <meta name="robots" content="index, follow" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': `${localUrl('/')}#webpage`,
                url: localUrl('/'),
                name: h.schemaName,
                isPartOf: { '@id': `${pageUrl('/')}#website` },
                inLanguage: lang,
                about: { '@type': 'Place', name: 'Finnish Lapland' },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: h.breadcrumbHome, item: localUrl('/') },
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

      {/* JÄRJESTYS (Vesa 18.9.2026, tällä sivulla 1.10.2026, sama linja kuin
          asumisetusivulla HomeHousing.tsx): heron alla heti sisältö kuvakortteina
          (aidot mökit, majoitustavat, kohteet). Pääkumppanin paikka vasta näiden
          jälkeen, appimainos ja kumppanipaikat UKK:n jälkeen, tarkistusmerkintä
          sivun lopussa. Heron alla ei lukukaistaa ("16 kuratoitua majoitusta ·
          5 tukikohtaa · 4 tapaa · 8 kuukautta"): luvut ovat korteissa, joissa
          lukija niitä käyttää (majoitusmäärä tapakortissa, kohteet omina
          kortteinaan). Johdantokappaleet, joissa opas kertoi itsestään, eivät
          ole etusivulla. */}
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
          {/* lg: the heading gets 896 px and each sentence is its own unit (3.10.2026). In the 672 px column the
              ja heading ran to three lines and broke inside a word ("一つに腰を据え / る。 または2つを / 組み合わせる。");
              de now reads "WÄHLEN SIE EINE. / ODER VERBINDEN SIE ZWEI." The lead keeps its 672 px measure. */}
          <div className="mb-12 sm:mb-16 max-w-2xl lg:max-w-4xl">
            <div className="mb-4"><KickerChip tone="pink">{h.fourWays.kicker}</KickerChip></div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal leading-[1.1] tracking-wide">
              <span className="lg:inline-block">{h.fourWays.h2A}</span> <span className="lg:inline-block text-vibe-pink">{h.fourWays.h2B}</span>
            </h2>
            <p className="text-graphite text-base sm:text-lg mt-5 leading-relaxed max-w-2xl">
              {h.fourWays.lead}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {localizedCategories.map((cat) => (
              <SiteLink
                key={cat.slug}
                path={`/${cat.slug}`}
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
                  <p className="text-[13px] text-stone font-semibold mb-2">
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
              </SiteLink>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations. Kermapohja: tapakortit yllä ovat sävytetyllä kaistalla. */}
      <section className="py-20 sm:py-28 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 sm:mb-14 max-w-2xl">
            <div className="mb-4"><KickerChip tone="pink">{h.destKicker}</KickerChip></div>
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

      {/* Pääkumppanin paikka sisällön jälkeen, ei heron alla. */}
      <MainPartnerBanner config={AD_SLOTS} locale={lang} surface="light" />

      {/* Trip-type recommender */}
      <section className="py-20 sm:py-28 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-14 max-w-2xl mx-auto">
            <div className="mb-4"><KickerChip tone="pink">{h.tripKicker}</KickerChip></div>
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

      {/* FAQ */}
      <section className="py-20 sm:py-28 px-5 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <div className="mb-4"><KickerChip tone="pink">{h.faqKicker}</KickerChip></div>
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
                        <SiteLink
                          key={l.route}
                          path={l.route}
                          className="lv-tap inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-charcoal hover:text-vibe-pink transition-colors"
                        >
                          {l.navKey ? t.nav[l.navKey] : l.literal} →
                        </SiteLink>
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

      {/* Appimainos ja kumppanipaikat sisällön jälkeen. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <AppPromoHero />
      </div>

      {/* LV Media: kakkospääkumppani + 6 premium-kohdepaikkaa sisällön jälkeen.
          Cream-pinta → surface="light". */}
      <HomeAdSlots config={AD_SLOTS} locale={lang} surface="light" />
      {/* Oikea tuoterivi tyhjän house-ad-kortin tilalle (Vesa 4.9.). */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <ProductRail partner={finlaysonRail} snapshot={finlaysonPicks} lang={lang as RailLang} sid="home_bed_linen" variant="light" />
      </div>

      {/* Tarkistusmerkintä sivun lopussa. */}
      <section className="px-5 sm:px-6 py-10 sm:py-12">
        <div className="max-w-3xl mx-auto">
          <AuthorByline note={h.authorNote} />
        </div>
      </section>

      <Newsletter />
    </>
  );
}
