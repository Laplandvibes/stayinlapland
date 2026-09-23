import { Fragment, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Banknote,
  Briefcase,
  Building2,
  CalendarDays,
  Car,
  Check,
  GraduationCap,
  ClipboardCheck,
  FileSignature,
  HandCoins,
  Home,
  Info,
  KeyRound,
  ListChecks,
  MapPin,
  Scale,
  School,
  Search,
  ShieldAlert,
  Sun,
  SunMoon,
  Truck,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import PageHero from '../PageHero';
import SourcesDisclosure from '../SourcesDisclosure';
import Newsletter from '../Newsletter';
import AffiliateCTA from '../AffiliateCTA';
import HousingWorkPromo from './HousingWorkPromo';
import PlaceGraphic from './PlaceGraphic';
import { TwoTone } from './ui';
import PhotoCredit, { uniqueCredits } from '../PhotoCredit';
import { creditFor } from '../../data/photoCredits';
import { pageUrl } from '../../lib/meta';
import { useLang, useLocalePath, useLocalPageUrl } from '../../i18n/useLang';
import { getCopy } from '../../locales/copy';
import {
  HOME,
  HOUSING_LANG_NOTICE,
  HOUSING_NAV,
  HOUSING_ROUTES,
  HOUSING_UI,
  housingLang,
  isHousingLang,
  pickHousing,
  type Card,
  type FactTable,
  type HousingCopyMap,
  type HousingRouteKey,
  type Section,
} from '../../housing';

/**
 * Asumissivujen yhteinen runko (rooli §23). Sisältö tulee `src/housing/*.ts`-
 * tiedostoista suomeksi ja englanniksi; muut kymmenen kieltä näkevät englannin
 * ja ilmoituksen, ja sivu kanonisoituu englanninkieliseen osoitteeseen, jotta
 * Google ei näe kymmentä kopiota (routes.json `nativeLocales` tekee saman
 * prerenderiin).
 *
 * 🎨 ILME (Vesa 18.9.2026: "saisi eloa vähän, liian vaaleaa kaikkialla, jotain
 * korostusvärejä"): sivu ei ole valkoista valkoisella. Osiot vuorottelevat
 * kolmea sävyä (kerma → sävytetty → tumma yökaista korttiosioille), jokaisella
 * osiolla on väriaksentti (pinkki → Suomen sininen → kulta) kuvakkeessa,
 * otsikkolapussa ja luettelomerkeissä, taulukon otsikkorivi on tumma, kortit
 * saavat värillisen yläreunan, numeron tai kuvan, ja kumppani-CTA on sininen
 * kaista. Värit ovat sivuston omista tokeneista (index.css @theme), ei uusia.
 * Pieni teksti vaalealla pohjalla käyttää pinkin tummaa porrasta (#BE185D) ja
 * kullan tummaa porrasta (#7A5C1E), tummalla pohjalla vaaleaa pinkkiä (#F9A8D4),
 * jotta kontrasti on yli 4,5:1. #EC4899 vain isoissa otsikoissa (3:1 raja).
 * Älä palauta valkoisia tekstilaatikoita kermapohjalle.
 *
 * Tarkistusmerkintä (AuthorByline) on lähteiden yhteydessä sivun lopussa, ei
 * heron alla (Vesa 17.8. ja 18.9.2026: sivun kärki kuuluu sisällölle).
 *
 * Mittaus (_jobs/06): sivulla ei ole omaa lomaketta, joten pageview riittää;
 * ulos vievät linkit kantavat `data-umami-event="housing_out"` -attribuutin,
 * jotta näemme mihin lukija lähtee (kunnan sivu, portaali, laplandwork).
 * Affiliate-klikit mitataan Worker-D1:stä sid:llä, ei Umamiin.
 */
interface HousingPageProps {
  route: string;
  copy: HousingCopyMap;
  /** Tyhjä = PageHeron graafinen tausta (paikasta ei ole rehellistä valokuvaa). */
  heroImage?: string;
  current: HousingRouteKey;
  /** Paikkakuntasivut: murupolun välitaso. */
  parent?: { route: string; key: HousingRouteKey };
  workPromo?: 'inline' | 'full' | 'none';
  /**
   * Osion perään tuleva lisälohko osion tunnisteen mukaan (esim. mainos sähköosion perään).
   * Tunnisteet ovat kielikohtaisia (fi `sahko`, en `electricity`), joten lohko osuu vain
   * sille kielelle, jonka osiota se koskee.
   */
  inserts?: Record<string, ReactNode>;
}

type Tone = 'plain' | 'tint' | 'night';
type AccentKey = 'pink' | 'blue' | 'gold';

const ACCENT_ORDER: AccentKey[] = ['pink', 'blue', 'gold'];

/** Aksentin luokat vaalealla pohjalla. Tummalla kaistalla käytetään NIGHT_BARS-värejä. */
const ACCENT: Record<AccentKey, { bar: string; icon: string; chip: string; dot: string }> = {
  pink: { bar: 'bg-vibe-pink', icon: 'bg-[#DB2777] text-white', chip: 'bg-vibe-pink/10 text-[#BE185D]', dot: 'bg-vibe-pink' },
  blue: { bar: 'bg-finland-blue', icon: 'bg-finland-blue text-white', chip: 'bg-finland-blue/10 text-finland-blue', dot: 'bg-finland-blue' },
  gold: { bar: 'bg-gold', icon: 'bg-gold text-night', chip: 'bg-gold-soft/70 text-[#7A5C1E]', dot: 'bg-gold' },
};
const NIGHT_BARS = ['bg-vibe-pink', 'bg-arctic-cyan', 'bg-gold'];

const SECTION_ICON: Record<string, LucideIcon> = {
  hinnat: Banknote, prices: Banknote, vuokra: Banknote, rent: Banknote,
  asumistuki: HandCoins, 'housing-allowance': HandCoins,
  sopimus: FileSignature, contract: FileSignature,
  kysy: ClipboardCheck, ask: ClipboardCheck, ennen: ClipboardCheck, 'before-signing': ClipboardCheck,
  'ennen-maksua': ShieldAlert, 'before-paying': ShieldAlert,
  paikkakunnat: MapPin, towns: MapPin, places: MapPin,
  kanavat: Building2, channels: Building2,
  portaalit: Search, portals: Search,
  milloin: CalendarDays, when: CalendarDays,
  viikko: ListChecks, 'week-one': ListChecks,
  auto: Car, car: Car, liikkuminen: Car, 'getting-around': Car,
  lapset: School, children: School,
  valo: SunMoon, light: SunMoon,
  kesa: Sun, summer: Sun,
  sahko: Zap, electricity: Zap,
  yhteenveto: Scale, summary: Scale,
  'kolme-tapaa': KeyRound, 'three-ways': KeyRound,
  tyo: Briefcase, work: Briefcase,
  arki: SunMoon, everyday: SunMoon,
  opintolaina: GraduationCap, 'student-loan': GraduationCap,
};

/**
 * Muiden asumissivujen linkit: kuvake, ei valokuvaa.
 * 🔴 Vesa 23.9.2026: *"käytät liikaa samoja kuvia useaan kertaan"*. Mitattu: tämän rivin viisi
 * pikkukuvaa toistuivat 7–8 sivulla eli 35 kertaa, enemmän kuin mikään muu sivuston kuva.
 */
const SIBLING_ICON: Record<HousingRouteKey | 'home', LucideIcon> = {
  home: Home,
  rentals: KeyRound,
  seasonal: Briefcase,
  moving: Truck,
  cost: Banknote,
  longStays: CalendarDays,
};

const OUT_ATTRS = (page: string, target?: string) => ({
  'data-umami-event': 'housing_out',
  'data-umami-event-page': page,
  'data-umami-event-target': target ?? 'link',
});

const LINK_LIGHT = '[&_a]:text-[#BE185D] [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-[#9D174D]';

function Html({ html, className }: { html: string; className?: string }) {
  return <p className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

function Table({ t }: { t: FactTable }) {
  return (
    <div className="mt-7">
      {t.caption && <p className="pb-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-graphite">{t.caption}</p>}
      <div className="overflow-x-auto -mx-5 sm:mx-0 border-y sm:border border-charcoal/10 sm:rounded-2xl bg-white shadow-sm">
        <table className="w-full border-collapse text-[13px] sm:text-[15px] table-auto">
          <thead>
            <tr className="bg-night">
              {t.head.map((h, i) => (
                <th
                  key={i}
                  scope="col"
                  className={`px-2 sm:px-4 py-3 text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.08em] sm:tracking-[0.12em] text-snow align-bottom ${i === 0 ? 'text-left pl-5 sm:pl-5' : 'text-right'} ${i === t.head.length - 1 ? 'pr-5 sm:pr-5' : ''}`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {t.rows.map((r, ri) => (
              <tr key={ri} className="border-t border-charcoal/8 odd:bg-white even:bg-cream-2/55 hover:bg-vibe-pink/5 transition-colors">
                {r.map((c, ci) => (
                  <td
                    key={ci}
                    className={`px-2 sm:px-4 py-3 ${ci === 0 ? 'text-left text-charcoal font-semibold pl-5 sm:pl-5' : 'text-right text-charcoal tabular-nums'} ${ci === r.length - 1 ? 'pr-5 sm:pr-5' : ''}`}
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {t.foot && <p className="mt-2.5 text-stone text-[12px] leading-relaxed">{t.foot}</p>}
    </div>
  );
}

function CardGrid({ cards, page, tone, photoLabel }: { cards: Card[]; page: string; tone: Tone; photoLabel: string }) {
  const localePath = useLocalePath();
  const night = tone === 'night';
  const anyImage = cards.some((c) => c.image);
  return (
    <div className="relative max-w-6xl mx-auto mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
      {cards.map((c, i) => {
        const internal = !!c.href && c.href.startsWith('/');
        const numbered = c.title.match(/^(\d+)\.\s+(.+)$/);
        const title = numbered ? numbered[2] : c.title;
        const accent = ACCENT[ACCENT_ORDER[i % 3]];
        const bar = night ? NIGHT_BARS[i % 3] : accent.bar;
        const body = (
          <>
            {anyImage ? (
              <div className="relative aspect-[4/3] overflow-hidden bg-night">
                {c.image ? (
                  <img
                    src={c.image.src}
                    alt={c.image.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <PlaceGraphic />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/10 to-transparent" />
                {/* Kortti on linkki ⇒ merkintä tekstinä; linkit sivun lopun kuvaluettelossa.
                    Merkintä aina oikeaan alakulmaan (Vesa 23.9.2026: "kuvatiedot pitää olla aina
                    oikea alalaita, ei me mainosteta sitä") — otsikko nostettu sen yläpuolelle. */}
                <PhotoCredit credit={creditFor(c.image?.src)} label={photoLabel} linked={!c.href} />
                <h3 className="absolute bottom-5 left-5 right-5 font-heading text-2xl sm:text-[28px] text-snow leading-tight tracking-wide drop-shadow">{title}</h3>
              </div>
            ) : (
              <div className={`h-1.5 w-full ${bar}`} aria-hidden="true" />
            )}
            <div className="flex flex-col flex-1 p-6">
              {!anyImage && (
                <div className="flex items-start gap-3 mb-3">
                  {numbered && (
                    <span className={`inline-flex w-10 h-10 shrink-0 items-center justify-center rounded-full font-heading text-2xl leading-none ${night ? 'bg-white/10 text-vibe-pink' : accent.icon}`}>
                      {numbered[1]}
                    </span>
                  )}
                  <h3 className={`font-heading text-2xl leading-tight tracking-wide ${numbered ? 'pt-1.5' : ''} ${night ? 'text-snow' : 'text-charcoal'}`}>{title}</h3>
                </div>
              )}
              <p
                className={`text-[14.5px] leading-relaxed flex-1 ${night ? 'text-snow/80 [&_a]:text-[#F9A8D4] [&_a]:underline [&_strong]:text-snow' : `text-graphite ${LINK_LIGHT}`}`}
                dangerouslySetInnerHTML={{ __html: c.body }}
              />
              {c.href && c.linkLabel && (
                <span className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all ${night ? 'text-[#F9A8D4]' : 'text-[#BE185D]'}`}>
                  {c.linkLabel}
                  {internal ? <ArrowRight className="w-4 h-4 shrink-0" /> : <ArrowUpRight className="w-4 h-4 shrink-0" />}
                </span>
              )}
            </div>
          </>
        );
        const cls = `group flex flex-col h-full overflow-hidden rounded-2xl border transition-all duration-300 ${
          night
            ? 'bg-white/[0.06] border-white/12 hover:bg-white/[0.1] hover:border-white/25'
            : 'bg-white border-charcoal/10 shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border-charcoal/20'
        }`;
        if (c.href && internal) {
          return (
            <Link key={c.title} to={localePath(c.href)} className={cls}>
              {body}
            </Link>
          );
        }
        if (c.href) {
          return (
            <a key={c.title} href={c.href} target="_blank" rel="noopener" className={cls} {...OUT_ATTRS(page, c.event)}>
              {body}
            </a>
          );
        }
        return (
          <div key={c.title} className={cls}>
            {body}
          </div>
        );
      })}
    </div>
  );
}

function SectionBlock({ s, page, tone, accentKey, photoLabel }: { s: Section; page: string; tone: Tone; accentKey: AccentKey; photoLabel: string }) {
  const night = tone === 'night';
  const accent = ACCENT[accentKey];
  const Icon = SECTION_ICON[s.id] ?? Home;
  const bg = night ? 'bg-night text-snow' : tone === 'tint' ? 'bg-cream-2/70' : '';
  return (
    <section id={s.id} className={`relative overflow-hidden scroll-mt-24 py-14 sm:py-20 px-5 sm:px-6 ${bg}`}>
      {night && (
        <>
          <div className="pointer-events-none absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-vibe-pink/20 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-40 -right-24 w-[32rem] h-[32rem] rounded-full bg-arctic-cyan/10 blur-3xl" aria-hidden="true" />
        </>
      )}
      <div className={`relative mx-auto ${s.cards ? 'max-w-6xl' : 'max-w-3xl'}`}>
        <div className="flex items-center gap-3 mb-4">
          <span className={`inline-flex w-10 h-10 shrink-0 items-center justify-center rounded-xl shadow-sm ${night ? 'bg-[#DB2777] text-white' : accent.icon}`} aria-hidden="true">
            <Icon className="w-5 h-5" />
          </span>
          {s.kicker && (
            <p className={`inline-flex px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.18em] uppercase ${night ? 'bg-white/10 text-[#F9A8D4]' : accent.chip}`}>
              {s.kicker}
            </p>
          )}
        </div>
        <h2 className={`font-heading text-3xl sm:text-4xl md:text-5xl leading-tight tracking-wide ${night ? 'text-snow' : 'text-charcoal'}`}>
          <TwoTone text={s.h2} />
        </h2>
        <div className={`mt-4 h-1 w-14 rounded-full ${night ? 'bg-vibe-pink' : accent.bar}`} aria-hidden="true" />
        {s.lead && <p className={`max-w-3xl text-base sm:text-lg mt-5 leading-relaxed ${night ? 'text-snow/85' : 'text-graphite'}`}>{s.lead}</p>}
        {s.table && <Table t={s.table} />}
        {s.paras && (
          <div className={`mt-6 space-y-4 text-[16px] leading-relaxed ${night ? 'text-snow/85 [&_a]:text-[#F9A8D4] [&_a]:underline' : `text-graphite ${LINK_LIGHT}`}`}>
            {s.paras.map((p, i) => (
              <Html key={i} html={p} />
            ))}
          </div>
        )}
        {s.bullets && (
          <ul className={`mt-7 rounded-2xl border p-5 sm:p-7 space-y-4 ${night ? 'bg-white/[0.06] border-white/12' : 'bg-white border-charcoal/10 shadow-sm'}`}>
            {s.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3.5">
                <span className={`mt-0.5 inline-flex w-6 h-6 shrink-0 items-center justify-center rounded-full ${night ? 'bg-[#DB2777] text-white' : accent.icon}`} aria-hidden="true">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </span>
                <span
                  className={`text-[16px] leading-relaxed ${night ? 'text-snow/85 [&_a]:text-[#F9A8D4] [&_a]:underline' : `text-graphite [&_strong]:text-charcoal ${LINK_LIGHT}`}`}
                  dangerouslySetInnerHTML={{ __html: b }}
                />
              </li>
            ))}
          </ul>
        )}
        {s.note && (
          <aside className="mt-8 flex gap-3.5 px-5 py-4 sm:px-6 sm:py-5 bg-gold-soft/45 border-l-4 border-gold rounded-r-xl">
            <Info className="w-5 h-5 shrink-0 mt-0.5 text-[#7A5C1E]" aria-hidden="true" />
            <div>
              <p className="text-[#7A5C1E] text-[11px] font-semibold tracking-[0.18em] uppercase mb-1.5">{s.note.label}</p>
              <p className="text-charcoal text-[15px] leading-relaxed">{s.note.body}</p>
            </div>
          </aside>
        )}
      </div>
      {s.cards && <CardGrid cards={s.cards} page={page} tone={tone} photoLabel={photoLabel} />}
      {s.image && (
        <figure className="relative max-w-3xl mx-auto mt-9">
          <div className={`relative overflow-hidden rounded-2xl bg-night shadow-md ${s.image.ratio === '4/3' ? 'aspect-[4/3]' : 'aspect-[16/9]'}`}>
            <img src={s.image.src} alt={s.image.alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
            <PhotoCredit credit={creditFor(s.image.src)} label={photoLabel} />
          </div>
          {/* Kuvateksti on virke ja lähdeviite ("Kesko 17.6.2026") ⇒ leipätekstiä: 16 px ja muste /80
              kummallakin pohjalla, ei 12–14 px snow/70 tai stone (§33, Vesa 20.9.2026). */}
          <figcaption className={`mt-3 text-base italic leading-relaxed ${night ? 'text-snow/80' : 'text-charcoal/80'}`}>{s.image.caption}</figcaption>
        </figure>
      )}
    </section>
  );
}

export default function HousingPage({ route, copy, heroImage, current, parent, workPromo = 'inline', inserts }: HousingPageProps) {
  const lang = useLang();
  const hl = housingLang(lang);
  const c = pickHousing(copy, lang);
  const ui = HOUSING_UI[hl];
  const localePath = useLocalePath();
  const localUrl = useLocalPageUrl();
  const native = isHousingLang(lang);
  // Kanoninen: oma kieli, kun sivu on kirjoitettu sillä; muuten englanti
  // (sama päätös kuin prerenderin nativeLocales), jotta 12 osoitetta ei ole 12 kopiota.
  const canonical = native ? localUrl(route) : pageUrl(route);
  const t = getCopy(lang);
  const page = current;

  const crumbs = [
    { '@type': 'ListItem', position: 1, name: t.home.breadcrumbHome, item: localUrl('/') },
    ...(parent
      ? [{ '@type': 'ListItem', position: 2, name: HOUSING_NAV[parent.key][lang], item: localUrl(parent.route) }]
      : []),
    { '@type': 'ListItem', position: parent ? 3 : 2, name: c.breadcrumb, item: localUrl(route) },
  ];

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Article',
      headline: c.metaTitle,
      description: c.metaDescription,
      publisher: { '@id': `${pageUrl('/')}#organization` },
      mainEntityOfPage: canonical,
      inLanguage: hl,
      dateModified: '2026-09-18',
    },
    { '@type': 'BreadcrumbList', itemListElement: crumbs },
  ];
  if (c.faqs && c.faqs.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: c.faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    });
  }

  const siblings = (Object.keys(HOUSING_ROUTES) as HousingRouteKey[]).filter((k) => k !== current);
  // Kaikki sivun avoimen lisenssin kuvat (hero, kortit, osiokuvat) ⇒ luettelo lähteiden alle.
  const photoCredits = uniqueCredits(
    [heroImage, ...c.sections.flatMap((s) => [...(s.cards ?? []).map((k) => k.image?.src), s.image?.src])],
    creditFor,
  );

  // Sävyrytmi: korttikaista (band) on tumma, muut vuorottelevat sävytettyä ja kermaa.
  const tones: Tone[] = [];
  c.sections.forEach((s, i) => {
    const prev: Tone = i === 0 ? 'plain' : tones[i - 1];
    tones.push(s.cards && s.band ? 'night' : prev === 'tint' ? 'plain' : 'tint');
  });

  return (
    <>
      <title>{c.metaTitle}</title>
      <meta name="description" content={c.metaDescription} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }) }} />

      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} subtitle={c.hero.subtitle} imageSrc={heroImage} />

      {!native && (
        <div className="bg-finland-blue text-snow px-5 sm:px-6 py-3">
          <p className="max-w-4xl mx-auto text-sm leading-relaxed">
            {HOUSING_LANG_NOTICE[lang]}{' '}
            <a href={route} className="underline underline-offset-2 font-semibold">English</a>
            {' · '}
            <a href={`/fi${route}`} className="underline underline-offset-2 font-semibold">Suomi</a>
          </p>
        </div>
      )}

      {/* Johdanto + sisällysnavigaatio. Ei tarkistusmerkintää eikä sivuston itsepuhetta kärjessä. */}
      <section className="py-12 sm:py-16 px-5 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className={`space-y-5 text-graphite text-base sm:text-[17px] leading-relaxed [&>p:first-child]:text-charcoal [&>p:first-child]:text-lg sm:[&>p:first-child]:text-xl [&>p:first-child]:leading-relaxed ${LINK_LIGHT}`}>
            {c.intro.map((p, i) => (
              <Html key={i} html={p} />
            ))}
          </div>
          <nav aria-label={ui.onThisPage} className="mt-9">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-graphite mb-3">{ui.onThisPage}</p>
            <div className="flex flex-wrap gap-2">
              {c.sections.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="lv-tap inline-flex items-center gap-2 px-3.5 py-2 min-h-11 rounded-full bg-white border border-charcoal/12 text-charcoal text-[13px] font-semibold shadow-sm hover:border-vibe-pink hover:text-[#BE185D] transition-colors"
                >
                  <span className={`w-2.5 h-2.5 rounded-full ${ACCENT[ACCENT_ORDER[i % 3]].dot}`} aria-hidden="true" />
                  {s.kicker ?? s.h2}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </section>

      {c.sections.map((s, i) => (
        <Fragment key={s.id}>
          <SectionBlock s={s} page={page} tone={tones[i]} accentKey={ACCENT_ORDER[i % 3]} photoLabel={ui.photo} />
          {inserts?.[s.id]}
        </Fragment>
      ))}

      {c.cta && (
        <section className="relative overflow-hidden py-14 sm:py-20 px-5 sm:px-6 bg-finland-blue text-snow">
          <div className="pointer-events-none absolute -top-24 -right-16 w-[26rem] h-[26rem] rounded-full bg-vibe-pink/25 blur-3xl" aria-hidden="true" />
          <div className="relative max-w-3xl mx-auto">
            <p className="inline-flex px-3 py-1 rounded-full bg-white/12 text-snow text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">{c.cta.kicker}</p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-snow leading-tight tracking-wide">
              <TwoTone text={c.cta.h2} />
            </h2>
            <p className="text-snow/90 text-base sm:text-lg mt-4 leading-relaxed">{c.cta.lead}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {c.cta.chips.map((chip) => (
                <AffiliateCTA
                  key={chip.sid}
                  partner={c.cta!.partner}
                  sid={chip.sid}
                  destination={chip.destination}
                  className="inline-flex items-center gap-2 px-5 py-3 min-h-11 bg-[#DB2777] hover:bg-[#BE185D] text-white rounded-full text-sm font-semibold transition-colors shadow-md shadow-night/30"
                >
                  {chip.label}
                  <ArrowUpRight className="w-4 h-4" />
                </AffiliateCTA>
              ))}
            </div>
            <p className="mt-5 text-snow/75 text-[12px]">{ui.affiliateNote}</p>
          </div>
        </section>
      )}

      {/* Työlinkki sisällön JÄLKEEN, ei johdannon alla (Vesa 23.9.2026: vuokrasivu "poukkoilee"). */}
      {workPromo === 'inline' && <HousingWorkPromo copy={HOME[hl].work} placement={`housing_${current}`} variant="strip" />}

      {c.faqs && c.faqs.length > 0 && (
        <section className="py-14 sm:py-20 px-5 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="inline-flex px-3 py-1 rounded-full bg-vibe-pink/10 text-[#BE185D] text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">{ui.faqKicker}</p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight tracking-wide mb-8">
              <TwoTone text={ui.faqH2} />
            </h2>
            <div className="space-y-3">
              {c.faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl bg-white border border-charcoal/10 shadow-sm open:border-vibe-pink/50 open:shadow-md transition-all">
                  <summary className="cursor-pointer list-none px-6 py-5 flex items-start justify-between gap-4 min-h-11">
                    <span className="font-heading text-xl sm:text-2xl text-charcoal leading-tight tracking-wide group-hover:text-[#BE185D] transition-colors">{f.q}</span>
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
      )}

      {workPromo === 'full' && <HousingWorkPromo copy={HOME[hl].work} placement={`housing_${current}_full`} />}

      {/* Muut asumisen sivut: kuvakkeelliset linkit (ei toistuvia valokuvia) */}
      <section className="py-12 sm:py-16 px-5 sm:px-6 bg-cream-2/70">
        <div className="max-w-6xl mx-auto">
          <p className="inline-flex px-3 py-1 rounded-full bg-finland-blue/10 text-finland-blue text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">{ui.siblingsKicker}</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-charcoal leading-tight tracking-wide mb-7">
            <TwoTone text={ui.siblingsH2} />
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {(['home', ...siblings] as (HousingRouteKey | 'home')[]).map((k) => (
              <Link
                key={k}
                to={localePath(k === 'home' ? '/' : HOUSING_ROUTES[k])}
                className="group flex items-center gap-4 p-3 pr-4 min-h-11 rounded-2xl bg-white border border-charcoal/10 shadow-sm hover:shadow-md hover:border-vibe-pink/50 transition-all"
              >
                {(() => {
                  const Icon = SIBLING_ICON[k];
                  return (
                    <span className="inline-flex w-12 h-12 shrink-0 items-center justify-center rounded-xl bg-finland-blue/10 text-finland-blue group-hover:bg-[#DB2777] group-hover:text-white transition-colors" aria-hidden="true">
                      <Icon className="w-5 h-5" />
                    </span>
                  );
                })()}
                <span className="flex-1 font-semibold text-charcoal text-[15px] leading-snug group-hover:text-[#BE185D] transition-colors">
                  {k === 'home' ? HOUSING_NAV.housingHome[lang] : HOUSING_NAV[k][lang]}
                </span>
                <ArrowRight className="w-4 h-4 shrink-0 text-[#BE185D] group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lähteet, tarkistusmerkintä ja kuvien tekijät: yksi suljettu rivi sivun lopussa
          (Vesa 23.9.2026: "ei kait ainakaan näin selkeästi tulisi olla nämä"). */}
      <SourcesDisclosure
        summary={ui.sourcesSummary}
        updated={ui.updated}
        note={c.authorNote}
        sourcesLead={ui.sourcesLead}
        sources={c.sources}
        photoCredits={photoCredits}
        photosHeading={ui.photosHeading}
        photosLead={ui.photosLead}
        page={page}
      />

      <Newsletter />
    </>
  );
}
