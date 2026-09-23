import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import SourcesDisclosure from '../components/SourcesDisclosure';
import MarginNote from '../components/MarginNote';
import { pageUrl } from '../lib/meta';
import { useLang, useLocalePath, useLocalPageUrl } from '../i18n/useLang';
import { getCopy } from '../locales/copy';

/**
 * Milloin Lappiin, kuukausi kerrallaan.
 *
 * 🔴 Vesa 23.9.2026: *"todella kamala osio tämä, hyvä sivu menee vähän hukkaan, hierarkia
 * ihan hukassa"* + *"mikä luettelo tämä on, eikö näitä saa kaksi rinnan"* + tekoälykuvat.
 * Mitattu ennen korjausta: jokainen kuukausi oli <h2> (8 samantasoista pääotsikkoa ilman
 * yläotsikkoa), kuukaudet yhdessä 896 px:n palstassa, välissä kaksi AI-kuvakaistaa, ja
 * heron ja kuukausien välissä pikavalikko + tarkistusmerkintä + viisirivinen versaalisitaatti,
 * jonka "lähde" oli sivusto itse. Nyt:
 *   - kuukausipillerit hyppylinkkeinä heti heron alla (kevyt, ei korttiruudukkoa)
 *   - kuukaudet pareittain, parilla oma <h2> ja kuukaudella <h3>
 *   - kaksi palstaa ≥ 768 px, yksi puhelimessa (feedback_mobile_uniform_grid)
 *   - sitaattikortti pois (feedback_ei_geneerista_ai_ulkoasua: ei sitaattikortteja)
 *   - tarkistusmerkintä suljettuna rivinä sivun lopussa (SourcesDisclosure)
 * Ryhmän otsikko muodostetaan kuukausien omista nimistä, joten se toimii 12 kielellä
 * ilman uusia käännöksiä.
 */
export default function WhenToGo() {
  const lang = useLang();
  const localUrl = useLocalPageUrl();
  const localePath = useLocalePath();
  const t = getCopy(lang);
  const w = t.whenToGo;

  // Kahden kuukauden parit: kahden palstan ruudukko täyttyy aina (kolmen ryhmä jätti
  // reiän, 23.9.2026 mitattu kuvakaappauksesta: marraskuu ja helmikuu yksin rivillään).
  const groups: { start: number; months: (typeof w.months)[number][] }[] = [];
  for (let i = 0; i < w.months.length; i += 2) groups.push({ start: i, months: w.months.slice(i, i + 2) });

  const renderMonth = (m: (typeof w.months)[number], i: number) => (
    <article
      key={m.name}
      id={`kk-${i + 1}`}
      className="relative flex flex-col bg-white border border-charcoal/10 rounded-2xl p-6 sm:p-7 shadow-sm scroll-mt-24 overflow-hidden"
    >
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-vibe-pink via-gold to-finland-blue" aria-hidden="true" />
      <div className="flex items-center gap-3 mb-1">
        <span className="inline-flex w-9 h-9 shrink-0 items-center justify-center rounded-full bg-finland-blue text-white font-heading text-lg leading-none">
          {String(i + 1).padStart(2, '0')}
        </span>
        <h3 className="font-heading text-3xl text-charcoal leading-tight tracking-wide">{m.name}</h3>
      </div>
      <p className="text-[#BE185D] text-[12px] tracking-[0.16em] uppercase font-semibold mb-4 pl-12">{m.pitch}</p>
      <p className="text-graphite text-[16px] leading-relaxed mb-5" dangerouslySetInnerHTML={{ __html: m.body }} />
      <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-[15px] border-t border-charcoal/8 pt-4">
        <div>
          <p className="text-[#047857] text-[11px] font-semibold tracking-[0.18em] uppercase mb-2">{w.bestForLabel}</p>
          <ul className="space-y-1.5 text-graphite">
            {m.bestFor.map((bf) => (
              <li key={bf} className="flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-aurora-green" aria-hidden="true" />
                {bf}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-graphite text-[11px] font-semibold tracking-[0.18em] uppercase mb-2">{w.skipIfLabel}</p>
          <ul className="space-y-1.5 text-graphite">
            {m.avoidIf.map((a) => (
              <li key={a} className="flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full border border-stone" aria-hidden="true" />
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
      <link rel="canonical" href={localUrl('/when-to-go')} />
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
                mainEntityOfPage: localUrl('/when-to-go'),
                inLanguage: lang,
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: t.home.breadcrumbHome, item: localUrl('/') },
                  { '@type': 'ListItem', position: 2, name: w.breadcrumb, item: localUrl('/when-to-go') },
                ],
              },
            ],
          }),
        }}
      />

      <PageHero eyebrow={w.pageHero.eyebrow} title={w.pageHero.title} subtitle={w.pageHero.subtitle} imageSrc="/images/whentogo-hero-tykky.webp" />

      {/* Kuukaudet hyppylinkkeinä: kevyt rivi, ei korttiruudukkoa. */}
      <nav aria-label={w.pageHero.eyebrow} className="px-5 sm:px-6 pt-10 sm:pt-12">
        <ul className="max-w-6xl mx-auto flex flex-wrap gap-2">
          {w.months.map((m, i) => (
            <li key={m.name}>
              <a
                href={`#kk-${i + 1}`}
                className="lv-tap inline-flex items-center gap-2 px-3.5 py-2 min-h-11 rounded-full bg-white border border-charcoal/12 text-charcoal text-[14px] font-semibold shadow-sm hover:border-vibe-pink hover:text-[#BE185D] transition-colors"
              >
                <span className="font-heading text-[#7A5C1E] text-sm leading-none">{String(i + 1).padStart(2, '0')}</span>
                {m.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {groups.map((g, gi) => {
        const first = g.months[0];
        const last = g.months[g.months.length - 1];
        return (
          <section key={g.start} className={`px-5 sm:px-6 py-12 sm:py-16 ${gi % 2 === 0 ? '' : 'bg-cream-2/70'}`}>
            <div className="max-w-6xl mx-auto">
              <h2 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight tracking-wide mb-2">
                {first.name}
                {last !== first && (
                  <>
                    {' '}
                    <span className="text-vibe-pink">–</span> {last.name}
                  </>
                )}
              </h2>
              <div className="h-1 w-14 rounded-full bg-vibe-pink mb-8" aria-hidden="true" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {g.months.map((m, j) => renderMonth(m, g.start + j))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Paikallisten vinkit ja varausajoitus kuukausien jälkeen */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 bg-night text-snow relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-vibe-pink/20 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto">
          <p className="inline-flex px-3 py-1 rounded-full bg-white/10 text-[#F9A8D4] text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">{w.cheatKicker}</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-snow mb-7 leading-tight tracking-wide">{w.cheatH2}</h2>
          <div className="space-y-5 text-snow/85 text-[16px] leading-relaxed [&_strong]:text-snow">
            <p dangerouslySetInnerHTML={{ __html: w.cheatP1.replace(/class="text-charcoal"/g, '') }} />
            <p dangerouslySetInnerHTML={{ __html: w.cheatP2.replace(/class="text-charcoal"/g, '') }} />
            <p dangerouslySetInnerHTML={{ __html: w.cheatP3.replace(/class="text-charcoal"/g, '') }} />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-5 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <MarginNote label={w.marginLabel}>{w.marginBody}</MarginNote>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={localePath('/booking-guide')}
              className="inline-flex items-center px-5 py-2.5 min-h-11 bg-charcoal hover:bg-[#BE185D] text-snow rounded-full text-sm font-semibold transition-colors"
            >
              {w.readGuide}
            </Link>
            <Link
              to={localePath('/long-stays')}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 min-h-11 bg-white hover:bg-cream-2 border border-charcoal/15 text-charcoal rounded-full text-sm font-semibold transition-colors"
            >
              {w.seeLong} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <SourcesDisclosure summary={t.authorByline.reviewed} note={w.authorNote} page="when_to_go" />

      <Newsletter />
    </>
  );
}
