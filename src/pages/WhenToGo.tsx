import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import FinnishDivider from '../components/FinnishDivider';
import AuthorByline from '../components/AuthorByline';
import PullQuote from '../components/PullQuote';
import MarginNote from '../components/MarginNote';
import ImageBreak from '../components/ImageBreak';
import { pageUrl } from '../lib/meta';
import { useLang, useLocalePath } from '../i18n/useLang';
import { getCopy } from '../locales/copy';

export default function WhenToGo() {
  const lang = useLang();
  const localePath = useLocalePath();
  const t = getCopy(lang);
  const w = t.whenToGo;

  // Yksi kortti, kolmessa eri paikassa (kaistat jakavat pinon) — siksi funktio
  // eikä kolme kopiota. `i` on kuukauden järjestysluku, ja siitä tulee sekä
  // ankkuri että kortin numero, joten ylälaidan pikavalikko osuu aina oikeaan.
  const renderMonth = (m: (typeof w.months)[number], i: number) => (
    <article
      key={m.name}
      id={`kk-${i + 1}`}
      className="relative bg-white border border-charcoal/8 rounded-2xl p-7 sm:p-9 shadow-sm scroll-mt-24 overflow-hidden"
    >
      <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gold to-gold/20" />
      <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 mb-4">
        <span className="font-heading text-gold/70 text-lg leading-none">
          {String(i + 1).padStart(2, '0')}
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl text-charcoal leading-tight tracking-wide">
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
            {w.bestForLabel}
          </p>
          <ul className="space-y-1.5 text-graphite">
            {m.bestFor.map((bf) => (
              <li key={bf} className="flex items-start gap-2">
                <span className="text-aurora-green mt-1">●</span>
                {bf}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-stone text-[11px] font-semibold tracking-[0.2em] uppercase mb-2">
            {w.skipIfLabel}
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
  );
  return (
    <>
      <title>{w.metaTitle}</title>
      <meta name="description" content={w.metaDescription} />
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
                headline: w.metaTitle,
                publisher: { '@id': `${pageUrl('/')}#organization` },
                mainEntityOfPage: pageUrl('/when-to-go'),
                inLanguage: lang,
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: t.home.breadcrumbHome, item: pageUrl('/') },
                  { '@type': 'ListItem', position: 2, name: w.breadcrumb, item: pageUrl('/when-to-go') },
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
        imageSrc="/images/whentogo-hero.webp"
      />

      {/* The page used to open with a section containing nothing but the
          editorial credit, then a pull quote, then eight identical white cards
          (Vesa 2026-08-17: "tämän sivun alku on aivan paska" + "jatkuu vain
          valkoisena seinänä"). A visitor asking "when should I go" now gets the
          answer as the first thing on the page: every month, its one-line verdict,
          and a jump to the detail. Built entirely from the existing month copy —
          no new claims. */}
      <section className="py-12 sm:py-16 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <nav aria-label={w.pageHero.title} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {w.months.map((m, i) => (
              <a
                key={m.name}
                href={`#kk-${i + 1}`}
                className="group flex items-baseline gap-3 rounded-xl bg-white border border-charcoal/8 px-4 py-3 shadow-sm hover:border-vibe-pink/50 hover:shadow-md transition-all"
              >
                <span className="font-heading text-gold/70 text-sm leading-none shrink-0 w-6">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-heading text-xl sm:text-2xl text-charcoal leading-none tracking-wide shrink-0">
                  {m.name}
                </span>
                <span className="text-stone text-[13px] leading-snug min-w-0 flex-1">{m.pitch}</span>
                <ArrowRight className="w-4 h-4 shrink-0 text-charcoal/25 group-hover:text-vibe-pink transition-colors" />
              </a>
            ))}
          </nav>

          <div className="mt-10 max-w-3xl">
            <AuthorByline note={w.authorNote} />
          </div>
        </div>
      </section>

      <PullQuote attribution={w.pullQuote.attr}>{w.pullQuote.text}</PullQuote>

      <FinnishDivider />

      {/* Eight identical white cards in one column was the "white wall". Two
          full-bleed landscape bands split the run into three stretches of the
          winter, and each card carries its month number so the pile has a
          rhythm you can read at a glance. The bands are decorative, so their
          alt is empty on purpose — that is the correct accessible choice and it
          keeps them out of a 12-locale translation sweep. */}
      <section className="pt-16 sm:pt-24 px-5 sm:px-6 bg-cream-2/60">
        <div className="max-w-4xl mx-auto space-y-6">
          {w.months.slice(0, 3).map((m, i) => renderMonth(m, i))}
        </div>
      </section>

      <ImageBreak src="/images/whentogo-band-kaamos.webp" alt="" ratio="band" />

      <section className="py-16 sm:py-24 px-5 sm:px-6 bg-cream-2/60">
        <div className="max-w-4xl mx-auto space-y-6">
          {w.months.slice(3, 6).map((m, i) => renderMonth(m, i + 3))}
        </div>
      </section>

      <ImageBreak src="/images/whentogo-band-kevat.webp" alt="" ratio="band" />

      <section className="pt-16 sm:pt-24 pb-16 sm:pb-24 px-5 sm:px-6 bg-cream-2/60">
        <div className="max-w-4xl mx-auto space-y-6">
          {w.months.slice(6).map((m, i) => renderMonth(m, i + 6))}
        </div>
      </section>

      <FinnishDivider />

      <section className="py-16 sm:py-20 px-5 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
            {w.cheatKicker}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal mb-7 leading-tight tracking-wide">
            {w.cheatH2}
          </h2>

          <div className="space-y-5 text-graphite text-[16px] leading-relaxed">
            <p dangerouslySetInnerHTML={{ __html: w.cheatP1 }} />
            <p dangerouslySetInnerHTML={{ __html: w.cheatP2 }} />
            <p dangerouslySetInnerHTML={{ __html: w.cheatP3 }} />
          </div>

          <MarginNote label={w.marginLabel}>{w.marginBody}</MarginNote>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={localePath('/booking-guide')}
              className="px-5 py-2.5 bg-charcoal hover:bg-vibe-pink text-snow rounded-full text-sm font-semibold transition-colors"
            >
              {w.readGuide}
            </Link>
            <Link
              to={localePath('/long-stays')}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white hover:bg-cream-2 border border-charcoal/15 text-charcoal rounded-full text-sm font-semibold transition-colors"
            >
              {w.seeLong} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
