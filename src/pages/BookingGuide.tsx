import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import FinnishDivider from '../components/FinnishDivider';
import AffiliateCTA from '../components/AffiliateCTA';
import AuthorByline from '../components/AuthorByline';
import { Calendar, Plane, Snowflake, Wallet, Compass, Lightbulb } from 'lucide-react';
import { pageUrl } from '../lib/meta';
import { useLang } from '../i18n/useLang';
import { getCopy } from '../locales/copy';
import AdUnit from '../../../shared/ads/AdUnit';
import omenaHotelsAd from '../../../shared/ads/advertisers/omenaHotels';

const ICONS = [Calendar, Plane, Snowflake, Wallet, Compass, Lightbulb];

export default function BookingGuide() {
  const lang = useLang();
  const t = getCopy(lang);
  const b = t.bookingGuide;
  return (
    <>
      <title>{b.metaTitle}</title>
      <meta name="description" content={b.metaDescription} />
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
                headline: b.metaTitle,
                publisher: { '@id': `${pageUrl('/')}#organization` },
                mainEntityOfPage: pageUrl('/booking-guide'),
                inLanguage: lang,
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: t.home.breadcrumbHome, item: pageUrl('/') },
                  { '@type': 'ListItem', position: 2, name: b.breadcrumb, item: pageUrl('/booking-guide') },
                ],
              },
            ],
          }),
        }}
      />

      <PageHero
        eyebrow={b.pageHero.eyebrow}
        title={b.pageHero.title}
        subtitle={b.pageHero.subtitle}
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
          {b.sections.map((section, idx) => {
            const Icon = ICONS[idx] ?? Calendar;
            return (
              <div
                key={section.title}
                className="bg-white border border-charcoal/8 rounded-2xl p-7 sm:p-9 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-vibe-pink/10 border border-vibe-pink/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-vibe-pink" />
                  </div>
                  <h2 className="font-heading text-3xl sm:text-4xl text-charcoal">{section.title}</h2>
                </div>
                <div className="space-y-3">
                  {section.body.map((p, i) => (
                    <p
                      key={i}
                      className="text-graphite text-base sm:text-[17px] leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: p }}
                    />
                  ))}
                </div>
              </div>
            );
          })}

          <div className="text-center pt-8">
            <h2 className="font-heading text-3xl sm:text-4xl text-charcoal mb-3 leading-tight tracking-wide">
              {b.readyTitle}
            </h2>
            <p className="text-graphite max-w-xl mx-auto mb-6 leading-relaxed">{b.readyLead}</p>
            <AffiliateCTA
              partner="hotels"
              sid="bg_browse_all_cta"
              destination="Lapland Finland"
              className="inline-flex px-7 py-3.5 bg-vibe-pink hover:bg-vibe-pink/90 text-white rounded-full font-semibold transition-all"
            >
              {b.browseAll}
            </AffiliateCTA>
          </div>

          {/* Omena Hotels ad — city-stopover angle complements Lapland stays
              (shared/ads; different product than the site's own hotel-partner
              routing: budget city hotels for the journey, not Lapland stays). */}
          <AdUnit
            spec={omenaHotelsAd}
            sid="booking_guide_stopover"
            lang={lang}
            variant="light"
            className="mt-12"
          />
        </div>
      </section>

      <Newsletter />
    </>
  );
}
