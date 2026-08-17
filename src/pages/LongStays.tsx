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
import LongTermRentals from '../components/LongTermRentals';
import LomarengasAd from '../components/LomarengasAd';
import { longStays, stayCardImage } from '../data/properties';
import type { Property } from '../data/properties';
import { pageUrl } from '../lib/meta';
import { useLang, useLocalePath } from '../i18n/useLang';
import { getCopy } from '../locales/copy';

// PROPERTY_IMAGES poistettu 2026-08-17: se mappasi kaksi eri kohdetta SAMAAN
// kuvaan (hero-cabins.webp) ja jatti loput kortit kultaliukuvarille. Tilalla
// stayCardImage(), joka kattaa kaikki 16 kohdetta omalla kuvalla.

export default function LongStays() {
  const lang = useLang();
  const localePath = useLocalePath();
  const t = getCopy(lang);
  const ls = t.longStays;

  const localized: Property[] = longStays.map((p, i) => ({
    ...p,
    name: t.longStaysData[i]?.name ?? p.name,
    location: t.longStaysData[i]?.location ?? p.location,
    highlight: t.longStaysData[i]?.highlight ?? p.highlight,
    description: t.longStaysData[i]?.description ?? p.description,
  }));

  const editorsPick = localized[0];
  const runnersUp = localized.slice(1);
  const originalNames = longStays.map((p) => p.name);

  return (
    <>
      <title>{ls.metaTitle}</title>
      <meta name="description" content={ls.metaDescription} />
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
                headline: ls.metaTitle,
                publisher: { '@id': `${pageUrl('/')}#organization` },
                mainEntityOfPage: pageUrl('/long-stays'),
                inLanguage: lang,
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: t.home.breadcrumbHome, item: pageUrl('/') },
                  { '@type': 'ListItem', position: 2, name: ls.breadcrumb, item: pageUrl('/long-stays') },
                ],
              },
            ],
          }),
        }}
      />

      <PageHero
        eyebrow={ls.pageHero.eyebrow}
        title={ls.pageHero.title}
        subtitle={ls.pageHero.subtitle}
        imageSrc="/images/hero-long-stays.webp"
      />

      <section className="py-12 sm:py-16 px-5 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <AuthorByline note={ls.authorNote} />
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
            imageSrc={stayCardImage(longStays[0].name) ?? editorsPick.imageSrc ?? '/images/hero-long-stays.webp'}
            imageAlt={t.home.categoryNames.longStays}
            sidPrefix="ls"
            whyParagraphs={ls.pickWhy}
            caveat={ls.pickCaveat}
          />
        </div>
      </section>

      <PullQuote attribution={ls.pullQuote.attr}>{ls.pullQuote.text}</PullQuote>

      {/* Flagship affiliate ad — Lomarengas (privately-owned weekly cottages),
          the natural partner for the whole-cabin-for-a-week angle. */}
      <section className="py-10 sm:py-14 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <LomarengasAd sid="long_stays_cottages" />
        </div>
      </section>

      <ImageBreak src="/images/break-frozen-lake.webp" alt="" ratio="3/1" />

      <FinnishDivider />

      <section className="py-16 sm:py-24 px-5 sm:px-6 bg-cream-2/60">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 max-w-2xl">
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
              {ls.runnersKicker}
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight tracking-wide">
              {ls.runnersH2}
            </h2>
            {/* Sama rehellisyyshuomautus kuin kohdesivuilla, ja tarkoituksella
                SAMA merkkijono: vaite on identtinen ("kuva esittaa tyyppia, ei
                tata kohdetta"), joten se on yksi kaannos eika kaksi. */}
            <p className="text-stone text-[13px] leading-relaxed mt-4 max-w-xl">
              {t.destinationPage.imageNote}
            </p>
            <p className="text-graphite mt-4 leading-relaxed">{ls.runnersLead}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {runnersUp.map((p, i) => (
              <PropertyCard
                key={p.slug}
                property={p}
                sidPrefix="ls"
                imageSrc={stayCardImage(originalNames[i + 1])}
                imageAlt={`${t.home.categoryNames.longStays} \u2014 ${p.location}`}
              />
            ))}
          </div>
        </div>
      </section>

      <FinnishDivider />

      <section className="py-16 sm:py-20 px-5 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-gold text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
            {ls.weeklyKicker}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal mb-6 leading-tight tracking-wide">
            {ls.weeklyH2}
          </h2>
          <div className="space-y-4 text-graphite text-[16px] leading-relaxed">
            <p dangerouslySetInnerHTML={{ __html: ls.weeklyP1 }} />
            <p dangerouslySetInnerHTML={{ __html: ls.weeklyP2 }} />
          </div>
          <MarginNote label={ls.marginLabel}>{ls.marginBody}</MarginNote>
        </div>
      </section>

      <FinnishDivider />

      <LongTermRentals />

      <FinnishDivider />

      <section className="py-16 sm:py-20 px-5 sm:px-6 bg-cream-2/60">
        <div className="max-w-3xl mx-auto">
          <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
            {ls.counterKicker}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal mb-5 leading-tight tracking-wide">
            {ls.counterH2}
          </h2>
          <div className="space-y-4 text-graphite text-[16px] leading-relaxed">
            <p>{ls.counterP1}</p>
            <p>{ls.counterP2}</p>
            <p>{ls.counterP3}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={localePath('/hotels')}
              className="px-5 py-2.5 bg-white hover:bg-charcoal hover:text-snow border border-charcoal/15 text-charcoal rounded-full text-sm font-semibold transition-colors"
            >
              {ls.seeHotels}
            </Link>
            <Link
              to={localePath('/glass-igloos')}
              className="px-5 py-2.5 bg-white hover:bg-charcoal hover:text-snow border border-charcoal/15 text-charcoal rounded-full text-sm font-semibold transition-colors"
            >
              {ls.seeIgloos}
            </Link>
            <AffiliateCTA
              partner="hotels"
              sid="ls_browse_all_cta"
              destination="Lapland, Finland"
              className="px-5 py-2.5 bg-vibe-pink hover:bg-vibe-pink/90 text-white rounded-full text-sm font-semibold transition-all"
            >
              {ls.browseAll}
            </AffiliateCTA>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
