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
import PlaceGraphic from '../components/housing/PlaceGraphic';
import PhotoCredit, { PhotoCreditList, uniqueCredits } from '../components/PhotoCredit';
import { creditFor } from '../data/photoCredits';
import HousingWorkPromo from '../components/housing/HousingWorkPromo';
import { KickerChip, TwoTone } from '../components/housing/ui';
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
 * Inarista ei ole omaa kuvaa: kortissa on graafinen tausta (PlaceGraphic), ei
 * toisen paikan valokuvaa (Vesa 26.7.2026).
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
  const photoCredits = uniqueCredits([...h.towns.items.map((t) => t.image), ...h.paths.cards.map((c) => c.image), h.work.image], creditFor);

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
          {/* 🔴 Peite oli 55/45 %, ja mediaani tekstin alla oli 1,5-1,7:1 eli kuva
              paistoi lapi lahes sellaisenaan. Kesainen Levin keskusta on kirkas. */}
          <div className="absolute inset-0 bg-gradient-to-b from-night/78 via-night/70 to-night" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 72% 68% at 50% 55%, rgba(15,23,42,0.72) 0%, rgba(15,23,42,0) 78%)' }} />

          <div className="relative z-10 text-center px-5 sm:px-6 max-w-3xl mx-auto pt-28 pb-32">
            {/* 🔴 11 px muste valokuvalla: varjo ei riita kirkkaalla taustalla (1,17:1).
                Tumma laatta antaa musteelle taustan - sama ratkaisu kuin verkoston
                muissa heroissa 21.9. */}
            <p className="inline-flex items-center gap-2 rounded-full bg-night/80 px-3 py-1.5 text-vibe-pink uppercase tracking-[0.3em] text-[11px] sm:text-xs font-semibold mb-6">
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
            <p className="font-body text-snow text-base sm:text-lg lg:text-xl max-w-2xl xl:max-w-4xl mx-auto leading-relaxed" style={{ textShadow: '0 2px 14px rgba(0,0,0,0.8)' }}>
              {h.hero.lead}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to={localePath(HOUSING_ROUTES.rentals)} className="px-7 py-3.5 min-h-11 bg-[#DB2777] hover:bg-[#BE185D] text-white rounded-full font-semibold transition-all hover:scale-[1.02] shadow-lg shadow-vibe-pink/30 text-center">
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
            <div className="mb-4"><KickerChip tone="pink">{h.towns.kicker}</KickerChip></div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal leading-[1.1] tracking-wide">{h.towns.h2}</h2>
            <div className="mt-4 h-1 w-14 rounded-full bg-vibe-pink" aria-hidden="true" />
            <p className="text-graphite text-base sm:text-lg mt-5 leading-relaxed">{h.towns.lead}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
            {h.towns.items.map((town) => (
              <Link
                key={town.slug}
                to={localePath(`${HOUSING_ROUTES.rentals}/${town.slug}`)}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-charcoal/10 shadow-sm hover:border-charcoal/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-night">
                  {town.image ? (
                    <img
                      src={town.image}
                      alt={town.alt}
                      style={town.pos ? { objectPosition: town.pos } : undefined}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <PlaceGraphic />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-night/75 via-night/10 to-transparent" />
                  {/* Kortti on linkki ⇒ merkintä tekstinä; linkit sivun lopun kuvaluettelossa. */}
                  <PhotoCredit credit={creditFor(town.image)} label={ui.photo} linked={false} position="top" />
                  <h3 className="absolute bottom-4 left-5 right-5 font-heading text-2xl sm:text-3xl text-snow leading-tight tracking-wide drop-shadow">{town.name}</h3>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[11px] tracking-[0.16em] uppercase text-stone font-semibold mb-2">{town.fact}</p>
                  <p className="text-graphite text-[15px] leading-relaxed mb-5 flex-1">{town.body}</p>
                  <span className="inline-flex items-center gap-1.5 text-[#BE185D] group-hover:gap-2.5 text-sm font-semibold transition-all mt-auto">
                    {town.cta}
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link to={localePath(HOUSING_ROUTES.rentals)} className="lv-tap inline-flex items-center gap-1.5 text-[#BE185D] text-sm font-semibold">
              {h.towns.more}
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Polut kuvakortteina */}
      <section className="relative overflow-hidden py-16 sm:py-24 px-5 sm:px-6 bg-night text-snow">
        <div className="pointer-events-none absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-vibe-pink/20 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-40 -right-24 w-[32rem] h-[32rem] rounded-full bg-arctic-cyan/10 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-12 max-w-2xl">
            <div className="mb-4"><KickerChip tone="night">{h.paths.kicker}</KickerChip></div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-snow leading-[1.1] tracking-wide">{h.paths.h2}</h2>
            <div className="mt-4 h-1 w-14 rounded-full bg-vibe-pink" aria-hidden="true" />
            <p className="text-snow text-base sm:text-lg mt-5 leading-relaxed">{h.paths.lead}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
            {h.paths.cards.map((c) => (
              <Link
                key={c.key}
                to={localePath(pathHref(c.key))}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white/[0.06] border border-white/12 hover:bg-white/[0.1] hover:border-white/25 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-night">
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
                  <h3 className="font-heading text-2xl sm:text-3xl text-snow leading-tight tracking-wide mb-3">{c.title}</h3>
                  <p className="text-snow/80 text-[15px] leading-relaxed mb-5 flex-1">{c.body}</p>
                  <span className="inline-flex items-center gap-1.5 text-[#F9A8D4] group-hover:gap-2.5 text-sm font-semibold transition-all mt-auto">
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
      <HousingWorkPromo copy={h.work} placement="housing_home" />

      <FinnishDivider />

      {/* UKK */}
      <section className="py-16 sm:py-24 px-5 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <div className="mb-4"><KickerChip tone="pink">{h.faq.kicker}</KickerChip></div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal leading-[1.1] tracking-wide"><TwoTone text={h.faq.h2} /></h2>
          </div>
          <div className="space-y-3">
            {h.faq.items.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-white border border-charcoal/10 shadow-sm open:border-vibe-pink/50 open:shadow-md transition-all">
                <summary className="cursor-pointer list-none px-6 py-5 flex items-start justify-between gap-4 min-h-11">
                  <span className="font-heading text-xl sm:text-2xl text-charcoal leading-tight tracking-wide">{f.q}</span>
                  <span className="inline-flex w-7 h-7 shrink-0 items-center justify-center rounded-full bg-vibe-pink/10 text-[#BE185D] group-open:bg-vibe-pink group-open:text-white group-open:rotate-45 transition-all text-xl leading-none">+</span>
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
      <section className="relative overflow-hidden py-14 sm:py-20 px-5 sm:px-6 bg-finland-blue text-snow">
        <div className="pointer-events-none absolute -top-24 -right-16 w-[26rem] h-[26rem] rounded-full bg-vibe-pink/25 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto">
          <p className="inline-flex px-3 py-1 rounded-full bg-white/12 text-snow text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">{h.holiday.kicker}</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-snow leading-tight tracking-wide">{h.holiday.h2}</h2>
          <p className="text-snow/90 text-base sm:text-lg mt-4 leading-relaxed">{h.holiday.lead}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {h.holiday.links.map((l) =>
              l.external ? (
                <a key={l.href} href={l.href} target="_blank" rel="noopener" className="lv-tap inline-flex items-center gap-1.5 px-4 py-2.5 min-h-11 rounded-full bg-[#DB2777] hover:bg-[#BE185D] text-white text-sm font-semibold transition-colors" data-umami-event="housing_out" data-umami-event-page="home" data-umami-event-target="laplandstays">
                  {l.label}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ) : (
                <Link key={l.href} to={localePath(l.href)} className="lv-tap inline-flex items-center gap-1.5 px-4 py-2.5 min-h-11 rounded-full bg-white/10 border border-white/25 text-snow text-sm font-semibold hover:bg-white/20 transition-colors">
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
          <div className="mt-9 mb-3"><KickerChip tone="gold">{ui.sources}</KickerChip></div>
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
          <PhotoCreditList credits={photoCredits} heading={ui.photosHeading} lead={ui.photosLead} />
        </div>
      </section>

      <Newsletter />
    </>
  );
}
