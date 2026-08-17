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
import { glassIgloos, stayCardImage } from '../data/properties';
import type { Property } from '../data/properties';
import { pageUrl } from '../lib/meta';
import { useLang, useLocalePath } from '../i18n/useLang';
import { getCopy } from '../locales/copy';

const COMPARISON_SCORES = [
  [3, 5, 3, 4, 5],
  [4, 4, 4, 5, 4],
  [4, 5, 5, 3, 3],
  [3, 5, 5, 4, 4],
];

export default function GlassIgloos() {
  const lang = useLang();
  const localePath = useLocalePath();
  const t = getCopy(lang);
  const g = t.glassIgloos;

  const localized: Property[] = glassIgloos.map((p, i) => ({
    ...p,
    name: t.glassIgloosData[i]?.name ?? p.name,
    location: t.glassIgloosData[i]?.location ?? p.location,
    highlight: t.glassIgloosData[i]?.highlight ?? p.highlight,
    description: t.glassIgloosData[i]?.description ?? p.description,
  }));

  const editorsPick = localized[0];
  const runnersUp = localized.slice(1);
  const comparisonRows = g.rows.map((row, i) => ({ ...row, scores: COMPARISON_SCORES[i] }));

  return (
    <>
      <title>{g.metaTitle}</title>
      <meta name="description" content={g.metaDescription} />
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
                headline: g.metaTitle,
                publisher: { '@id': `${pageUrl('/')}#organization` },
                mainEntityOfPage: pageUrl('/glass-igloos'),
                inLanguage: lang,
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: t.home.breadcrumbHome, item: pageUrl('/') },
                  { '@type': 'ListItem', position: 2, name: g.breadcrumb, item: pageUrl('/glass-igloos') },
                ],
              },
            ],
          }),
        }}
      />

      <PageHero
        eyebrow={g.pageHero.eyebrow}
        title={g.pageHero.title}
        subtitle={g.pageHero.subtitle}
        imageSrc="/images/hero-glass-igloos.webp"
      />

      <section className="py-12 sm:py-16 px-5 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <AuthorByline note={g.authorNote} />
        </div>
      </section>

      <section className="py-10 sm:py-14 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <EditorsPick
            name={editorsPick.name}
            location={editorsPick.location}
            priceRange={editorsPick.priceRange}
            imageSrc="/images/pick-kakslauttanen.webp"
            imageAlt={t.home.categoryNames.glassIgloos}
            sidPrefix="gi"
            whyParagraphs={g.pickWhy}
            caveat={g.pickCaveat}
          />
        </div>
      </section>

      <PullQuote attribution={g.pullQuote.attr}>{g.pullQuote.text}</PullQuote>

      <ImageBreak src="/images/break-boreal-forest.webp" alt="" ratio="3/1" />

      <FinnishDivider />

      <section className="py-16 sm:py-24 px-5 sm:px-6 bg-cream-2/60">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 max-w-2xl">
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
              {g.runnersKicker}
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight tracking-wide">
              {g.runnersH2}
            </h2>
            {/* Sama rehellisyyshuomautus kuin kohdesivuilla, ja tarkoituksella
                SAMA merkkijono: vaite on identtinen ("kuva esittaa tyyppia, ei
                tata kohdetta"), joten se on yksi kaannos eika kaksi. */}
            <p className="text-stone text-[13px] leading-relaxed mt-4 max-w-xl">
              {t.destinationPage.imageNote}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {runnersUp.map((p, i) => (
              <PropertyCard
                key={p.slug}
                property={p}
                sidPrefix="gi"
                imageSrc={stayCardImage(glassIgloos[i + 1].name)}
                imageAlt={`${t.home.categoryNames.glassIgloos} \u2014 ${p.location}`}
              />
            ))}
          </div>
        </div>
      </section>

      <FinnishDivider />

      <section className="py-16 sm:py-24 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
              {g.glanceKicker}
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight tracking-wide">
              {g.glanceH2}
            </h2>
          </div>
          <ComparisonTable axes={g.axes} rows={comparisonRows} rubric={g.rubric} />
          <MarginNote label={g.marginLabel}>{g.marginBody}</MarginNote>
        </div>
      </section>

      <FinnishDivider />

      <section className="py-16 sm:py-20 px-5 sm:px-6 bg-cream-2/60">
        <div className="max-w-3xl mx-auto">
          <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
            {g.counterKicker}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal mb-5 leading-tight tracking-wide">
            {g.counterH2}
          </h2>
          <div className="space-y-4 text-graphite text-[16px] leading-relaxed">
            <p>{g.counterP1}</p>
            <p>{g.counterP2}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={localePath('/long-stays')}
              className="px-5 py-2.5 bg-white hover:bg-charcoal hover:text-snow border border-charcoal/15 text-charcoal rounded-full text-sm font-semibold transition-colors"
            >
              {g.seeLong}
            </Link>
            <Link
              to={localePath('/booking-guide')}
              className="px-5 py-2.5 bg-white hover:bg-charcoal hover:text-snow border border-charcoal/15 text-charcoal rounded-full text-sm font-semibold transition-colors"
            >
              {g.bookingGuideBtn}
            </Link>
            <AffiliateCTA
              partner="hotels"
              sid="gi_browse_all_cta"
              destination="Lapland, Finland"
              className="px-5 py-2.5 bg-vibe-pink hover:bg-vibe-pink/90 text-white rounded-full text-sm font-semibold transition-all"
            >
              {g.browseAll}
            </AffiliateCTA>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
