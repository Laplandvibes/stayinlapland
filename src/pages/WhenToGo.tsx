import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import FinnishDivider from '../components/FinnishDivider';
import AuthorByline from '../components/AuthorByline';
import PullQuote from '../components/PullQuote';
import MarginNote from '../components/MarginNote';
import { pageUrl } from '../lib/meta';
import { useLang, useLocalePath } from '../i18n/useLang';
import { getCopy } from '../locales/copy';

export default function WhenToGo() {
  const lang = useLang();
  const localePath = useLocalePath();
  const t = getCopy(lang);
  const w = t.whenToGo;
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
        imageSrc="/images/hero-when-to-go.webp"
        imageAlt="Lapland fell at 14:00 in late February, deep snow with long blue shadows"
      />

      <section className="py-12 sm:py-16 px-5 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <AuthorByline note={w.authorNote} />
        </div>
      </section>

      <PullQuote attribution={w.pullQuote.attr}>{w.pullQuote.text}</PullQuote>

      <FinnishDivider />

      <section className="py-16 sm:py-24 px-5 sm:px-6 bg-cream-2/60">
        <div className="max-w-4xl mx-auto space-y-6">
          {w.months.map((m) => (
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
          ))}
        </div>
      </section>

      <FinnishDivider />

      <section className="py-16 sm:py-20 px-5 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
            {w.cheatKicker}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal mb-7 leading-tight tracking-tight">
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
