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

const HERO_IMAGES: Record<string, string> = {
  rovaniemi: '/images/hero-cabins.webp',
  levi: '/images/hero-aurora-cabins.webp',
  saariselka: '/images/hero-glass-igloos.webp',
  inari: '/images/hero-aurora-cabins.webp',
  yllas: '/images/hero-wilderness.webp',
};

function findProperty(name: string): { p: Property; bucket: string } | null {
  const sources: { items: Property[]; bucket: string }[] = [
    { items: longStays, bucket: 'long-stays' },
    { items: hotels, bucket: 'hotels' },
    { items: glassIgloos, bucket: 'glass-igloos' },
    { items: wilderness, bucket: 'wilderness' },
  ];
  for (const s of sources) {
    const p = s.items.find((x) => x.name === name);
    if (p) return { p, bucket: s.bucket };
  }
  return null;
}

export default function DestinationPage() {
  const { slug = '' } = useParams<{ slug: string }>();
  const dest = destinations.find((d) => d.slug === slug);

  if (!dest) {
    return (
      <section className="py-32 px-5 max-w-3xl mx-auto text-center">
        <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
          Page not found
        </p>
        <h1 className="font-heading text-5xl text-charcoal mb-5">
          Destination not on the list.
        </h1>
        <p className="text-graphite mb-8">
          We currently cover Rovaniemi, Levi, Saariselkä, Inari and Ylläs.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal hover:bg-vibe-pink text-snow rounded-full font-semibold transition-colors"
        >
          Back home <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    );
  }

  const matched = dest.propertyNames.map(findProperty).filter(Boolean) as { p: Property; bucket: string }[];

  return (
    <>
      <title>{dest.name} — Where to Stay | StayInLapland</title>
      <meta
        name="description"
        content={`${dest.pitch} ${dest.longStayAngle}`.slice(0, 160)}
      />
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
                description: dest.pitch,
                containedInPlace: { '@type': 'Place', name: 'Finnish Lapland' },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: pageUrl('/') },
                  { '@type': 'ListItem', position: 2, name: dest.name, item: pageUrl(`/destinations/${dest.slug}`) },
                ],
              },
            ],
          }),
        }}
      />

      <PageHero
        eyebrow="Lapland destination"
        title={dest.name}
        subtitle={dest.pitch}
        imageSrc={HERO_IMAGES[dest.slug]}
        imageAlt={`Editorial winter scene from ${dest.name}, Finnish Lapland`}
      />

      <section className="py-16 sm:py-20 px-5 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <AuthorByline note={`Long-stay angle for ${dest.name} — written and fact-checked with on-the-ground partners.`} />
          <p className="mt-10 text-graphite text-[17px] leading-relaxed">
            {dest.longStayAngle}
          </p>
        </div>
      </section>

      <FinnishDivider />

      <section className="py-16 sm:py-24 px-5 sm:px-6 bg-cream-2/60">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 max-w-2xl">
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
              Recommended in {dest.name}
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight tracking-tight">
              Where to actually stay.
            </h2>
          </div>

          <div className="space-y-5">
            {matched.map(({ p, bucket }) => (
              <article
                key={p.slug}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 bg-white border border-charcoal/8 rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="md:col-span-8">
                  <p className="text-[11px] tracking-[0.18em] uppercase text-stone font-semibold mb-2">
                    {bucket.replace('-', ' ')}
                  </p>
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
                    {p.priceRange} <span className="text-stone font-normal text-sm">/ night</span>
                  </p>
                  {p.minStay && (
                    <p className="text-stone text-[13px]">Min stay: {p.minStay}</p>
                  )}
                  <AffiliateCTA
                    partner="hotels"
                    sid={`dest_${dest.slug}_card`}
                    destination={p.searchQuery ?? p.name}
                    className="inline-flex justify-center px-5 py-2.5 bg-charcoal hover:bg-vibe-pink text-snow rounded-full text-sm font-semibold transition-colors"
                  >
                    Check rates
                  </AffiliateCTA>
                  <Link
                    to={`/${bucket}`}
                    className="text-vibe-pink text-[13px] font-semibold hover:underline"
                  >
                    See all {bucket.replace('-', ' ')}
                  </Link>
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
            Searching live availability in {dest.name}?
          </h2>
          <p className="text-graphite mb-7 leading-relaxed">
            Our network only ranks 17 properties. Hotels.com lists everything else operating
            in {dest.name} this winter — flex dates, filter by amenity, see the full inventory.
          </p>
          <AffiliateCTA
            partner="hotels"
            sid={`dest_${dest.slug}_browse_all`}
            destination={dest.name}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-vibe-pink hover:bg-vibe-pink/90 text-white rounded-full font-semibold transition-all"
          >
            Browse Hotels.com — {dest.name}
          </AffiliateCTA>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
