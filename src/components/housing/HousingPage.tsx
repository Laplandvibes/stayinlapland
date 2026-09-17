import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import PageHero from '../PageHero';
import AuthorByline from '../AuthorByline';
import FinnishDivider from '../FinnishDivider';
import Newsletter from '../Newsletter';
import AffiliateCTA from '../AffiliateCTA';
import WorkInLaplandPromo from '../WorkInLaplandPromo';
import { pageUrl } from '../../lib/meta';
import { useLang, useLocalePath, useLocalPageUrl } from '../../i18n/useLang';
import { getCopy } from '../../locales/copy';
import {
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
 * Mittaus (_jobs/06): sivulla ei ole omaa lomaketta, joten pageview riittää;
 * ulos vievät linkit kantavat `data-umami-event="housing_out"` -attribuutin,
 * jotta näemme mihin lukija lähtee (kunnan sivu, portaali, laplandwork).
 * Affiliate-klikit mitataan Worker-D1:stä sid:llä, ei Umamiin.
 */
interface HousingPageProps {
  route: string;
  copy: HousingCopyMap;
  heroImage: string;
  current: HousingRouteKey;
  /** Paikkakuntasivut: murupolun välitaso. */
  parent?: { route: string; key: HousingRouteKey };
  workPromo?: 'inline' | 'full' | 'none';
}

const OUT_ATTRS = (page: string, target?: string) => ({
  'data-umami-event': 'housing_out',
  'data-umami-event-page': page,
  'data-umami-event-target': target ?? 'link',
});

function Html({ html, className }: { html: string; className?: string }) {
  return <p className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

function Table({ t }: { t: FactTable }) {
  return (
    <div className="mt-6">
      <div className="overflow-x-auto -mx-5 sm:mx-0">
        <table className="w-full border-collapse text-[13px] sm:text-[15px] table-auto">
          {t.caption && (
            <caption className="text-left px-5 sm:px-0 pb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone">
              {t.caption}
            </caption>
          )}
          <thead>
            <tr>
              {t.head.map((h, i) => (
                <th
                  key={i}
                  scope="col"
                  className={`px-2 sm:px-3 py-2 text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.08em] sm:tracking-[0.12em] text-stone border-b border-charcoal/15 align-bottom ${i === 0 ? 'text-left pl-5 sm:pl-3' : 'text-right'} ${i === t.head.length - 1 ? 'pr-5 sm:pr-3' : ''}`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {t.rows.map((r, ri) => (
              <tr key={ri} className="border-b border-charcoal/10">
                {r.map((c, ci) => (
                  <td
                    key={ci}
                    className={`px-2 sm:px-3 py-2.5 ${ci === 0 ? 'text-left text-charcoal font-semibold pl-5 sm:pl-3' : 'text-right text-graphite tabular-nums'} ${ci === r.length - 1 ? 'pr-5 sm:pr-3' : ''}`}
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {t.foot && <p className="mt-2 text-stone text-[12px] leading-relaxed">{t.foot}</p>}
    </div>
  );
}

function CardGrid({ cards, page }: { cards: Card[]; page: string }) {
  const localePath = useLocalePath();
  return (
    <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
      {cards.map((c) => {
        const internal = !!c.href && c.href.startsWith('/');
        const body = (
          <>
            <h3 className="font-heading text-2xl text-charcoal leading-tight tracking-wide mb-2">{c.title}</h3>
            <p className="text-graphite text-[14px] leading-relaxed flex-1" dangerouslySetInnerHTML={{ __html: c.body }} />
            {c.href && c.linkLabel && (
              <span className="mt-4 inline-flex items-center gap-1.5 text-vibe-pink text-sm font-semibold">
                {c.linkLabel}
                {internal ? <ArrowRight className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
              </span>
            )}
          </>
        );
        const cls = 'group flex flex-col h-full p-6 bg-white border border-charcoal/8 rounded-2xl hover:border-charcoal/20 hover:shadow-md transition-all';
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

function SectionBlock({ s, page }: { s: Section; page: string }) {
  return (
    <section id={s.id} className={`py-12 sm:py-16 px-5 sm:px-6 ${s.band ? 'bg-cream-2/60' : ''}`}>
      <div className="max-w-3xl mx-auto">
        {s.kicker && (
          <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">{s.kicker}</p>
        )}
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight tracking-wide">{s.h2}</h2>
        {s.lead && <p className="text-graphite text-base sm:text-lg mt-4 leading-relaxed">{s.lead}</p>}
        {s.table && <Table t={s.table} />}
        {s.paras && (
          <div className="mt-6 space-y-4 text-graphite text-[16px] leading-relaxed [&_a]:text-vibe-pink [&_a]:underline [&_a]:underline-offset-2">
            {s.paras.map((p, i) => (
              <Html key={i} html={p} />
            ))}
          </div>
        )}
        {s.bullets && (
          <ul className="mt-6 space-y-3 text-graphite text-[16px] leading-relaxed list-disc pl-5 marker:text-vibe-pink [&_a]:text-vibe-pink [&_a]:underline [&_a]:underline-offset-2">
            {s.bullets.map((b, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
            ))}
          </ul>
        )}
        {s.note && (
          <aside className="mt-8 px-5 py-4 sm:px-6 sm:py-5 bg-cream-2 border-l-2 border-gold rounded-r-md">
            <p className="text-gold text-[11px] font-semibold tracking-[0.2em] uppercase mb-2">{s.note.label}</p>
            <p className="text-graphite text-[15px] leading-relaxed italic">{s.note.body}</p>
          </aside>
        )}
      </div>
      {s.cards && <CardGrid cards={s.cards} page={page} />}
      {s.image && (
        <figure className="max-w-3xl mx-auto mt-8">
          <div className={`relative overflow-hidden rounded-2xl bg-night ${s.image.ratio === '4/3' ? 'aspect-[4/3]' : 'aspect-[16/9]'}`}>
            <img src={s.image.src} alt={s.image.alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
          </div>
          <figcaption className="mt-3 text-stone text-xs sm:text-sm italic leading-relaxed">{s.image.caption}</figcaption>
        </figure>
      )}
    </section>
  );
}

export default function HousingPage({ route, copy, heroImage, current, parent, workPromo = 'inline' }: HousingPageProps) {
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

      <section className="py-12 sm:py-16 px-5 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <AuthorByline note={c.authorNote} />
          <div className="mt-8 space-y-5 text-graphite text-base sm:text-[17px] leading-relaxed [&_a]:text-vibe-pink [&_a]:underline [&_a]:underline-offset-2">
            {c.intro.map((p, i) => (
              <Html key={i} html={p} />
            ))}
          </div>
          {workPromo === 'inline' && (
            <div className="mt-10">
              <WorkInLaplandPromo placement={`housing_${current}`} variant="inline" />
            </div>
          )}
        </div>
      </section>

      {c.sections.map((s, i) => (
        <div key={s.id}>
          {i > 0 && <FinnishDivider />}
          <SectionBlock s={s} page={page} />
        </div>
      ))}

      {c.cta && (
        <>
          <FinnishDivider />
          <section className="py-14 sm:py-20 px-5 sm:px-6 bg-cream-2/60">
            <div className="max-w-3xl mx-auto">
              <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">{c.cta.kicker}</p>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight tracking-wide">{c.cta.h2}</h2>
              <p className="text-graphite text-base sm:text-lg mt-4 leading-relaxed">{c.cta.lead}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {c.cta.chips.map((chip) => (
                  <AffiliateCTA
                    key={chip.sid}
                    partner={c.cta!.partner}
                    sid={chip.sid}
                    destination={chip.destination}
                    className="inline-flex items-center gap-2 px-5 py-3 min-h-11 bg-vibe-pink hover:bg-vibe-pink/90 text-white rounded-full text-sm font-semibold transition-colors shadow-sm shadow-vibe-pink/30"
                  >
                    {chip.label}
                    <ArrowUpRight className="w-4 h-4" />
                  </AffiliateCTA>
                ))}
              </div>
              <p className="mt-4 text-stone text-[12px]">{ui.affiliateNote}</p>
            </div>
          </section>
        </>
      )}

      {c.faqs && c.faqs.length > 0 && (
        <>
          <FinnishDivider />
          <section className="py-14 sm:py-20 px-5 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">{ui.faqKicker}</p>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight tracking-wide mb-8">{ui.faqH2}</h2>
              <div className="space-y-3">
                {c.faqs.map((f) => (
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
        </>
      )}

      {workPromo === 'full' && (
        <>
          <FinnishDivider />
          <WorkInLaplandPromo placement={`housing_${current}_full`} />
        </>
      )}

      <FinnishDivider />
      <section className="py-12 sm:py-16 px-5 sm:px-6 bg-cream-2/60">
        <div className="max-w-3xl mx-auto">
          <p className="text-gold text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">{ui.sources}</p>
          <p className="text-graphite text-[15px] leading-relaxed mb-4">{ui.sourcesLead}</p>
          <ol className="space-y-2 text-[14px] leading-relaxed list-decimal pl-5 marker:text-stone">
            {c.sources.map((s) => (
              <li key={s.id} className="text-graphite">
                <a href={s.url} target="_blank" rel="noopener" className="text-charcoal underline underline-offset-2 hover:text-vibe-pink" {...OUT_ATTRS(page, `source_${s.id}`)}>
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-stone text-[12px]">{ui.updated}</p>
        </div>
      </section>

      <FinnishDivider />
      <section className="py-12 sm:py-16 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">{ui.siblingsKicker}</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-charcoal leading-tight tracking-wide mb-6">{ui.siblingsH2}</h2>
          <div className="flex flex-wrap gap-3">
            <Link to={localePath('/')} className="lv-tap inline-flex items-center gap-1.5 px-4 py-2.5 min-h-11 rounded-full bg-white border border-charcoal/15 text-charcoal text-sm font-semibold hover:border-vibe-pink hover:text-vibe-pink transition-colors">
              {HOUSING_NAV.housingHome[lang]}
              <ArrowRight className="w-4 h-4" />
            </Link>
            {siblings.map((k) => (
              <Link key={k} to={localePath(HOUSING_ROUTES[k])} className="lv-tap inline-flex items-center gap-1.5 px-4 py-2.5 min-h-11 rounded-full bg-white border border-charcoal/15 text-charcoal text-sm font-semibold hover:border-vibe-pink hover:text-vibe-pink transition-colors">
                {HOUSING_NAV[k][lang]}
                <ArrowRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
