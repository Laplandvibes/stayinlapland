import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import Newsletter from '../components/Newsletter';
import FinnishDivider from '../components/FinnishDivider';
import AuthorByline from '../components/AuthorByline';
import HomeAdSlots, { MainPartnerBanner } from '../shared/HomeAdSlots';
import { AD_SLOTS } from '../data/adSlots';
import { pageUrl } from '../lib/meta';
import { useLang, useLocalePath, useLocalPageUrl } from '../i18n/useLang';
import { getCopy } from '../locales/copy';
import { AppPromoHero } from '../components/AppPromo';
import { HOME, HOUSING_ROUTES, HOUSING_UI, housingLang, type HousingRouteKey } from '../housing';

/**
 * Etusivu asumisen roolissa (lv_permanent_rules §23, Vesa 16.9.2026), vain
 * suomeksi ja englanniksi. Muut kielet näkevät vanhan etusivun, kunnes niiden
 * asumissisältö on kirjoitettu ja kysyntä mitattu (§25).
 *
 * 🔴 JÄRJESTYS (Vesa 18.9.2026: "eihän tällaista voi olla etusivun parhaalla
 * paikalla"): heron ja lukukaistan jälkeen tulee HETI sisältö, jota lukija
 * haki: paikkakuntakortit kuvilla, sitten polut kuvilla. Talon mainospaikka
 * (MainPartnerBanner) vasta näiden jälkeen, appimainos UKK:n jälkeen. Sama
 * linja kuin laplandstaysilla 17.9. (ef91439). Sivusto ei puhu itsestään eikä
 * lähteistään sivun alussa; tarkistusmerkintä on lähdelistan yhteydessä.
 * Älä palauta tekstikappaletta tai mainosta heron alle.
 *
 * Kuvat ovat omia valokuvia heinäkuun 2026 ajomatkalta (meta-lasit), ei AI:ta.
 * Inarista ei ole omaa kuvaa: kortissa on nimeämätön tunturimaisema, alt ei
 * väitä paikkaa.
 */
export default function HomeHousing() {
  const lang = useLang();
  const hl = housingLang(lang);
  const h = HOME[hl];
  const ui = HOUSING_UI[hl];
  const t = getCopy(lang);
  const localePath = useLocalePath();
  const localUrl = useLocalPageUrl();

  const pathHref = (key: HousingRouteKey | 'longStays') => (key === 'longStays' ? '/long-stays' : HOUSING_ROUTES[key]);
  const workHref = 'https://laplandwork.com/?utm_source=stayinlapland&utm_medium=crosslink&utm_campaign=housing_home';

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
                inLanguage: hl,
                about: { '@type': 'Place', name: 'Finnish Lapland' },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [{ '@type': 'ListItem', position: 1, name: t.home.breadcrumbHome, item: localUrl('/') }],
              },
              {
                '@type': 'FAQPage',
                mainEntity: h.faq.items.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
              },
            ],
          }),
        }}
      />

      {/* Hero — oma valokuva, Levin keskusta heinäkuussa 2026 */}
      <section className="relative overflow-hidden bg-night">
        <div className="relative min-h-[82svh] sm:min-h-[88svh] flex items-center justify-center">
          <img
            src="/images/housing-home-hero.webp"
            alt={hl === 'fi' ? 'Levin keskusta ja tunturi kesäiltana' : 'Levi village centre and the fell on a summer evening'}
            className="absolute inset-0 w-full h-full object-cover [object-position:50%_40%]"
            fetchPriority="high"
            decoding="async"
          />
          {/* Tummennus painotettu alas ja vasemmalle: teksti on keskellä, kirkas taivas ylhäällä. */}
          <div className="absolute inset-0 bg-gradient-to-b from-night/55 via-night/45 to-night" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 65% at 50% 55%, rgba(15,23,42,0.55) 0%, rgba(15,23,42,0) 72%)' }} />

          <div className="relative z-10 text-center px-5 sm:px-6 max-w-3xl mx-auto pt-28 pb-32">
            <p className="inline-flex items-center gap-2 text-vibe-pink uppercase tracking-[0.3em] text-[11px] sm:text-xs font-semibold mb-6" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.85)' }}>
              <MapPin className="w-3.5 h-3.5" />
              {h.hero.eyebrow}
            </p>
            <h1
              className="font-heading font-medium text-snow leading-[1.05] tracking-wide text-[42px] sm:text-6xl lg:text-7xl xl:text-8xl mb-6 xl:text-[clamp(96px,1.5vw_+_76.8px,115.2px)]"
              style={{ textShadow: '0 4px 30px rgba(0,0,0,0.85)' }}
            >
              {h.hero.h1a}
              <br />
              <span className="text-vibe-pink">{h.hero.h1b}</span>
            </h1>
            <p className="font-body text-snow/85 text-base sm:text-lg lg:text-xl max-w-2xl xl:max-w-4xl mx-auto leading-relaxed" style={{ textShadow: '0 2px 14px rgba(0,0,0,0.8)' }}>
              {h.hero.lead}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to={localePath(HOUSING_ROUTES.rentals)} className="px-7 py-3.5 min-h-11 bg-vibe-pink hover:bg-vibe-pink/90 text-white rounded-full font-semibold transition-all hover:scale-[1.02] shadow-lg shadow-vibe-pink/30 text-center">
                {h.hero.ctaPrimary}
              </Link>
              <Link to={localePath(HOUSING_ROUTES.seasonal)} className="px-7 py-3.5 min-h-11 bg-night/55 backdrop-blur-sm border border-snow/35 text-snow rounded-full font-semibold hover:bg-night/75 hover:border-snow/55 transition-all text-center">
                {h.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lukukaista — vuokra euroina ensin; lähde rivin alla. */}
      <section className="relative z-10 -mt-14 sm:-mt-16 px-5 sm:px-6" aria-label={h.statsSource}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {h.stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-night/85 backdrop-blur-md p-4 md:p-5 text-center shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
              <p className="font-heading text-3xl md:text-4xl text-vibe-pink leading-none">{s.value}</p>
              <p className="mt-2 text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-snow/75 font-semibold leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="max-w-5xl mx-auto mt-3 text-right text-stone text-[11px]">{h.statsSource}</p>
      </section>

      {/* 1. Paikkakunnat kuvakortteina: se, mitä haetaan eniten, heti heron alle. */}
      <section className="pt-14 pb-16 sm:pt-20 sm:pb-24 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-12 max-w-2xl">
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">{h.towns.kicker}</p>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal leading-[1.1] tracking-wide">{h.towns.h2}</h2>
            <p className="text-graphite text-base sm:text-lg mt-5 leading-relaxed">{h.towns.lead}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
            {h.towns.items.map((town) => (
              <Link
                key={town.slug}
                to={localePath(`${HOUSING_ROUTES.rentals}/${town.slug}`)}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-charcoal/8 hover:border-charcoal/20 hover:shadow-md transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-cream-2">
                  <img
                    src={town.image}
                    alt={town.alt}
                    style={town.pos ? { objectPosition: town.pos } : undefined}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/75 via-night/10 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 right-5 font-heading text-2xl sm:text-3xl text-snow leading-tight tracking-wide drop-shadow">{town.name}</h3>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[11px] tracking-[0.16em] uppercase text-stone font-semibold mb-2">{town.fact}</p>
                  <p className="text-graphite text-[15px] leading-relaxed mb-5 flex-1">{town.body}</p>
                  <span className="inline-flex items-center gap-1.5 text-vibe-pink group-hover:gap-2.5 text-sm font-semibold transition-all mt-auto">
                    {town.cta}
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link to={localePath(HOUSING_ROUTES.rentals)} className="lv-tap inline-flex items-center gap-1.5 text-vibe-pink text-sm font-semibold">
              {h.towns.more}
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Polut kuvakortteina */}
      <section className="py-16 sm:py-24 px-5 sm:px-6 bg-cream-2/60">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-12 max-w-2xl">
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">{h.paths.kicker}</p>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal leading-[1.1] tracking-wide">{h.paths.h2}</h2>
            <p className="text-graphite text-base sm:text-lg mt-5 leading-relaxed">{h.paths.lead}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
            {h.paths.cards.map((c) => (
              <Link
                key={c.key}
                to={localePath(pathHref(c.key))}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-charcoal/8 hover:border-charcoal/20 hover:shadow-md transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-cream-2">
                  <img
                    src={c.image}
                    alt={c.alt}
                    style={c.pos ? { objectPosition: c.pos } : undefined}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading text-2xl sm:text-3xl text-charcoal leading-tight tracking-wide mb-3">{c.title}</h3>
                  <p className="text-graphite text-[15px] leading-relaxed mb-5 flex-1">{c.body}</p>
                  <span className="inline-flex items-center gap-1.5 text-vibe-pink group-hover:gap-2.5 text-sm font-semibold transition-all mt-auto">
                    {ui.readMore}
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Talon mainospaikka vasta sisällön jälkeen (Vesa 18.9.2026). */}
      <MainPartnerBanner config={AD_SLOTS} locale={lang} surface="light" />

      {/* 3. Työ: kuva + yksi viesti, ei tekstilaatikoita. */}
      <section className="py-16 sm:py-24 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-night">
              <img src={h.work.image} alt={h.work.alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
            <figcaption className="mt-3 text-stone text-xs sm:text-sm italic leading-relaxed">{h.work.caption}</figcaption>
          </figure>
          <div>
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">{h.work.kicker}</p>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal leading-[1.1] tracking-wide mb-5">
              {h.work.h2a} <span className="text-vibe-pink">{h.work.h2b}</span>
            </h2>
            <p className="text-graphite text-base sm:text-lg leading-relaxed mb-7">{h.work.body}</p>
            <a
              href={workHref}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center text-center leading-snug gap-2 px-7 py-3.5 min-h-11 bg-charcoal hover:bg-vibe-pink text-snow rounded-full font-semibold transition-colors"
              data-umami-event="housing_out"
              data-umami-event-page="home"
              data-umami-event-target="laplandwork"
            >
              {h.work.cta}
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </div>
      </section>

      <FinnishDivider />

      {/* UKK */}
      <section className="py-16 sm:py-24 px-5 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">{h.faq.kicker}</p>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal leading-[1.1] tracking-wide">{h.faq.h2}</h2>
          </div>
          <div className="space-y-3">
            {h.faq.items.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-white border border-charcoal/8 open:border-charcoal/20 open:shadow-sm transition-all">
                <summary className="cursor-pointer list-none px-6 py-5 flex items-start justify-between gap-4 min-h-11">
                  <span className="font-heading text-xl sm:text-2xl text-charcoal leading-tight tracking-wide">{f.q}</span>
                  <span className="text-stone group-open:rotate-45 transition-transform text-2xl leading-none mt-0.5 shrink-0">+</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-graphite leading-relaxed text-[15px] sm:text-base">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Appimainos ja kumppanipaikat sisällön jälkeen. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <AppPromoHero />
      </div>

      <HomeAdSlots config={AD_SLOTS} locale={lang} surface="light" />

      <FinnishDivider />

      {/* Lomalle Lappiin → laplandstays + omat lomasivut (vaihe 2 ohjaa nämä staysille) */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 bg-cream-2/60">
        <div className="max-w-3xl mx-auto">
          <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">{h.holiday.kicker}</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight tracking-wide">{h.holiday.h2}</h2>
          <p className="text-graphite text-base sm:text-lg mt-4 leading-relaxed">{h.holiday.lead}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {h.holiday.links.map((l) =>
              l.external ? (
                <a key={l.href} href={l.href} target="_blank" rel="noopener" className="lv-tap inline-flex items-center gap-1.5 px-4 py-2.5 min-h-11 rounded-full bg-vibe-pink text-white text-sm font-semibold" data-umami-event="housing_out" data-umami-event-page="home" data-umami-event-target="laplandstays">
                  {l.label}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ) : (
                <Link key={l.href} to={localePath(l.href)} className="lv-tap inline-flex items-center gap-1.5 px-4 py-2.5 min-h-11 rounded-full bg-white border border-charcoal/15 text-charcoal text-sm font-semibold hover:border-vibe-pink hover:text-vibe-pink transition-colors">
                  {l.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      <FinnishDivider />
      {/* Lähteet + tarkistusmerkintä: sivun lopussa, ei heron alla. */}
      <section className="py-10 sm:py-12 px-5 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <AuthorByline note={h.authorNote} />
          <p className="mt-8 text-gold text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">{ui.sources}</p>
          <ol className="space-y-1.5 text-[13px] leading-relaxed list-decimal pl-5 marker:text-stone">
            {h.sources.map((s) => (
              <li key={s.id} className="text-graphite">
                <a href={s.url} target="_blank" rel="noopener" className="text-charcoal underline underline-offset-2 hover:text-vibe-pink" data-umami-event="housing_out" data-umami-event-page="home" data-umami-event-target={`source_${s.id}`}>
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
          <p className="mt-3 text-stone text-[12px]">{ui.updated}</p>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
