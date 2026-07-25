import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import FinnishDivider from '../components/FinnishDivider';
import AuthorByline from '../components/AuthorByline';
import AffiliateCTA from '../components/AffiliateCTA';
import {
  destinations,
  longStays,
  hotels,
  glassIgloos,
  wilderness,
} from '../data/properties';
import type { Property } from '../data/properties';
import { pageUrl } from '../lib/meta';
import { useLang, useLocalePath } from '../i18n/useLang';
import { getCopy } from '../locales/copy';

const HERO_IMAGES: Record<string, string> = {
  rovaniemi: '/images/hero-cabins.webp',
  levi: '/images/hero-aurora-cabins.webp',
  saariselka: '/images/hero-glass-igloos.webp',
  inari: '/images/hero-aurora-cabins.webp',
  yllas: '/images/hero-wilderness.webp',
};

type Bucket = 'long-stays' | 'hotels' | 'glass-igloos' | 'wilderness';

function findProperty(name: string): { p: Property; bucket: Bucket; index: number } | null {
  const sources: { items: Property[]; bucket: Bucket }[] = [
    { items: longStays, bucket: 'long-stays' },
    { items: hotels, bucket: 'hotels' },
    { items: glassIgloos, bucket: 'glass-igloos' },
    { items: wilderness, bucket: 'wilderness' },
  ];
  for (const s of sources) {
    const index = s.items.findIndex((x) => x.name === name);
    if (index !== -1) return { p: s.items[index], bucket: s.bucket, index };
  }
  return null;
}

export default function DestinationPage() {
  const { slug = '' } = useParams<{ slug: string }>();
  const lang = useLang();
  const localePath = useLocalePath();
  const t = getCopy(lang);
  const d = t.destinationPage;
  const dest = destinations.find((x) => x.slug === slug);

  if (!dest) {
    return (
      <section className="py-32 px-5 max-w-3xl mx-auto text-center">
        <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
          {d.notFoundKicker}
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl text-charcoal mb-5">{d.notFoundTitle}</h1>
        <p className="text-graphite mb-8">{d.notFoundBody}</p>
        <Link
          to={localePath('/')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal hover:bg-vibe-pink text-snow rounded-full font-semibold transition-colors"
        >
          {d.backHome} <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    );
  }

  // Build localized dest pitch/longStayAngle from copy.
  const destCopy = t.destinationsData.find((x) => x.slug === dest.slug);
  const pitch = destCopy?.pitch ?? dest.pitch;
  const longStayAngle = destCopy?.longStayAngle ?? dest.longStayAngle;

  const dataForBucket: Record<Bucket, typeof t.hotelsData> = {
    'long-stays': t.longStaysData,
    hotels: t.hotelsData,
    'glass-igloos': t.glassIgloosData,
    wilderness: t.wildernessData,
  };

  const matched = (dest.propertyNames
    .map(findProperty)
    .filter(Boolean) as { p: Property; bucket: Bucket; index: number }[])
    .map(({ p, bucket, index }) => {
      const loc = dataForBucket[bucket][index];
      return {
        bucket,
        p: {
          ...p,
          name: loc?.name ?? p.name,
          location: loc?.location ?? p.location,
          highlight: loc?.highlight ?? p.highlight,
          description: loc?.description ?? p.description,
        } as Property,
      };
    });

  return (
    <>
      <title>{`${dest.name}: ${d.metaTitleSuffix}`}</title>
      <meta name="description" content={`${pitch} ${longStayAngle}`.slice(0, 160)} />
      <link rel="canonical" href={pageUrl(`/destinations/${dest.slug}`)} />
      <meta name="robots" content="index, follow" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'TouristDestination',
                name: dest.name,
                description: pitch,
                containedInPlace: { '@type': 'Place', name: 'Finnish Lapland' },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: t.home.breadcrumbHome, item: pageUrl('/') },
                  { '@type': 'ListItem', position: 2, name: dest.name, item: pageUrl(`/destinations/${dest.slug}`) },
                ],
              },
            ],
          }),
        }}
      />

      <PageHero
        eyebrow={d.pageHeroEyebrow}
        title={dest.name}
        subtitle={pitch}
        imageSrc={HERO_IMAGES[dest.slug]}
        imageAlt={`Editorial winter scene from ${dest.name}, Finnish Lapland`}
      />

      <section className="py-16 sm:py-20 px-5 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <AuthorByline note={d.authorNoteFor(dest.name)} />
          <p className="mt-10 text-graphite text-[17px] leading-relaxed">{longStayAngle}</p>
        </div>
      </section>

      <FinnishDivider />

      <section className="py-16 sm:py-24 px-5 sm:px-6 bg-cream-2/60">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 max-w-2xl">
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
              {d.recommendedIn(dest.name)}
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight tracking-tight">
              {d.whereToStay}
            </h2>
          </div>

          <div className="space-y-5">
            {matched.map(({ p, bucket }) => (
              <article
                key={p.slug}
                className="group overflow-hidden bg-white border border-charcoal/8 rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                {/* Image top from the property's existing card image (no new assets). */}
                <div className="relative h-40 overflow-hidden bg-cream-2">
                  <img
                    src={p.imageSrc ?? HERO_IMAGES[dest.slug]}
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(15,23,42,0.60) 0%, rgba(15,23,42,0.05) 60%)',
                    }}
                  />
                  <p className="absolute bottom-3 left-5 right-5 text-[11px] tracking-[0.18em] uppercase text-snow font-semibold">
                    {d.bucketLabels[bucket] ?? bucket.replace('-', ' ')}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
                <div className="md:col-span-8">
                  <h3 className="font-heading text-2xl sm:text-3xl text-charcoal leading-tight mb-2">
                    {p.name}
                  </h3>
                  <p className="text-vibe-pink text-[12px] tracking-[0.18em] uppercase font-semibold mb-3">
                    {p.highlight}
                  </p>
                  <p className="text-graphite text-[15px] leading-relaxed">{p.description}</p>
                </div>
                <div className="md:col-span-4 flex flex-col gap-3 md:items-end md:text-right">
                  <p className="text-charcoal font-semibold text-lg">
                    {p.priceRange} <span className="text-stone font-normal text-sm">{d.perNight}</span>
                  </p>
                  {p.minStay && (
                    <p className="text-stone text-[13px]">{d.minStayLabel} {p.minStay}</p>
                  )}
                  <AffiliateCTA
                    partner="hotels"
                    sid={`dest_${dest.slug}_card`}
                    destination={p.searchQuery ?? p.name}
                    className="inline-flex justify-center px-5 py-2.5 bg-charcoal hover:bg-vibe-pink text-snow rounded-full text-sm font-semibold transition-colors"
                  >
                    {d.checkRates}
                  </AffiliateCTA>
                  <Link
                    to={localePath(`/${bucket}`)}
                    className="text-vibe-pink text-[13px] font-semibold hover:underline"
                  >
                    {d.seeAll} {d.bucketLabels[bucket] ?? bucket.replace('-', ' ')}
                  </Link>
                </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinnishDivider />

      <section className="py-16 sm:py-20 px-5 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal mb-5 leading-tight tracking-tight">
            {d.liveAvailabilityIn(dest.name)}
          </h2>
          <p className="text-graphite mb-7 leading-relaxed">
            {d.networkLeadA}
            {dest.name}
            {d.networkLeadB}
          </p>
          <AffiliateCTA
            partner="hotels"
            sid={`dest_${dest.slug}_browse_all`}
            destination={dest.searchQuery ?? dest.name}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-vibe-pink hover:bg-vibe-pink/90 text-white rounded-full font-semibold transition-all"
          >
            {d.browseInDest(dest.name)}
          </AffiliateCTA>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
