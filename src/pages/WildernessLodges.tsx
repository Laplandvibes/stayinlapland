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
import { wilderness, stayCardImage } from '../data/properties';
import type { Property } from '../data/properties';
import { pageUrl } from '../lib/meta';
import { useLang, useLocalePath } from '../i18n/useLang';
import { getCopy } from '../locales/copy';

const COMPARISON_SCORES = [
  [4, 4, 4, 4, 3],
  [4, 4, 3, 5, 4],
];

export default function WildernessLodges() {
  const lang = useLang();
  const localePath = useLocalePath();
  const t = getCopy(lang);
  const w = t.wilderness;

  const localized: Property[] = wilderness.map((p, i) => ({
    ...p,
    name: t.wildernessData[i]?.name ?? p.name,
    location: t.wildernessData[i]?.location ?? p.location,
    highlight: t.wildernessData[i]?.highlight ?? p.highlight,
    description: t.wildernessData[i]?.description ?? p.description,
  }));

  const editorsPick = localized[0];
  const runnersUp = localized.slice(1);
  const comparisonRows = w.rows.map((row, i) => ({ ...row, scores: COMPARISON_SCORES[i] }));

  return (
    <>
      <title>{w.metaTitle}</title>
      <meta name="description" content={w.metaDescription} />
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
                headline: w.metaTitle,
                publisher: { '@id': `${pageUrl('/')}#organization` },
                mainEntityOfPage: pageUrl('/wilderness'),
                inLanguage: lang,
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: t.home.breadcrumbHome, item: pageUrl('/') },
                  { '@type': 'ListItem', position: 2, name: w.breadcrumb, item: pageUrl('/wilderness') },
                ],
              },
            ],
          }),
        }}
      />

      <PageHero
        eyebrow={w.pageHero.eyebrow}
        title={w.pageHero.title}
        subtitle={w.pageHero.subtitle}
        imageSrc="/images/pillar-wilderness-hero.webp"
      />

      <section className="py-12 sm:py-16 px-5 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <AuthorByline note={w.authorNote} />
        </div>
      </section>

      <section className="py-10 sm:py-14 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <EditorsPick
            name={editorsPick.name}
            location={editorsPick.location}
            priceRange={editorsPick.priceRange}
            imageSrc={stayCardImage(wilderness[0].name) ?? editorsPick.imageSrc ?? '/images/pillar-wilderness-hero.webp'}
            imageAlt={t.home.categoryNames.wilderness}
            sidPrefix="wl"
            whyParagraphs={w.pickWhy}
            caveat={w.pickCaveat}
          />
        </div>
      </section>

      <PullQuote attribution={w.pullQuote.attr}>{w.pullQuote.text}</PullQuote>

      <ImageBreak src="/images/break-frozen-lake.webp" alt="" ratio="3/1" />

      <FinnishDivider />

      <section className="py-16 sm:py-24 px-5 sm:px-6 bg-cream-2/60">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 max-w-2xl">
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
              {w.runnersKicker}
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight tracking-wide">
              {w.runnersH2}
            </h2>
            {/* Sama rehellisyyshuomautus kuin kohdesivuilla, ja tarkoituksella
                SAMA merkkijono: vaite on identtinen ("kuva esittaa tyyppia, ei
                tata kohdetta"), joten se on yksi kaannos eika kaksi. */}
            <p className="text-stone text-[13px] leading-relaxed mt-4 max-w-xl">
              {t.destinationPage.imageNote}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {runnersUp.map((p, i) => (
              <PropertyCard
                key={p.slug}
                property={p}
                sidPrefix="wl"
                imageSrc={stayCardImage(wilderness[i + 1].name)}
                imageAlt={`${t.home.categoryNames.wilderness} \u2014 ${p.location}`}
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
              {w.glanceKicker}
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight tracking-wide">
              {w.glanceH2}
            </h2>
          </div>
          <ComparisonTable axes={w.axes} rows={comparisonRows} rubric={w.rubric} />
          <MarginNote label={w.marginLabel}>{w.marginBody}</MarginNote>
        </div>
      </section>

      <FinnishDivider />

      <section className="py-16 sm:py-20 px-5 sm:px-6 bg-cream-2/60">
        <div className="max-w-3xl mx-auto">
          <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
            {w.counterKicker}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal mb-5 leading-tight tracking-wide">
            {w.counterH2}
          </h2>
          <div className="space-y-4 text-graphite text-[16px] leading-relaxed">
            <p>{w.counterP1}</p>
            <p>{w.counterP2}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={localePath('/long-stays')}
              className="px-5 py-2.5 bg-white hover:bg-charcoal hover:text-snow border border-charcoal/15 text-charcoal rounded-full text-sm font-semibold transition-colors"
            >
              {w.seeLong}
            </Link>
            <AffiliateCTA
              partner="hotels"
              sid="wl_browse_all_cta"
              destination="Lapland, Finland"
              className="px-5 py-2.5 bg-vibe-pink hover:bg-vibe-pink/90 text-white rounded-full text-sm font-semibold transition-all"
            >
              {w.browseAll}
            </AffiliateCTA>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
