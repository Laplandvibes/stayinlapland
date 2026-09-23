import { Link } from 'react-router-dom';
import { ArrowRight, Plus } from 'lucide-react';
import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import SourcesDisclosure from '../components/SourcesDisclosure';
import { pageUrl } from '../lib/meta';
import { useLang, useLocalePath, useLocalPageUrl } from '../i18n/useLang';
import { getCopy } from '../locales/copy';
import { WHEN_TO_GO, type WhenMonth } from '../housing/whentogo';
import { HOUSING_LANG_NOTICE, HOUSING_UI, housingLang, isHousingLang } from '../housing/labels';

/**
 * Lapin vuosi kuukausittain.
 *
 * 🔴 Vesa 23.9.2026 (toinen kierros): *"tätä sivua varmasti tullaan katsomaan mutta se on aivan poor ja onko
 * faktat tarkistettu? ja miksi kesää ei ole ollenkaan mainittu?"* Sivu kattoi 8 kuukautta (syys–huhti) ja
 * neljä väitettä oli lähteiden mukaan väärin. Nyt 12 kuukautta tammikuusta joulukuuhun, koko vuoden taulukko
 * Ilmatieteen laitoksen 1991–2020 luvuista, asujan osio (vuokra-asunto, kausityö, auto, valo) ja lähteet
 * suljettuna rivinä. Sisältö `src/housing/whentogo.ts`, fi/en natiivi; muut kielet näyttävät englannin ja
 * kanonisoituvat englantiin kuten asumissivut (routes.json nativeLocales).
 *
 * Ensimmäisen kierroksen rakenne säilyy: kuukausipillerit hyppylinkkeinä, kuukaudet pareittain (parilla oma
 * <h2>, kuukaudella <h3>), kaksi palstaa ≥ 768 px, ei sitaattikorttia.
 */
export default function WhenToGo() {
  const lang = useLang();
  const hl = housingLang(lang);
  const native = isHousingLang(lang);
  const w = WHEN_TO_GO[hl];
  const ui = HOUSING_UI[hl];
  const t = getCopy(lang);
  const localUrl = useLocalPageUrl();
  const localePath = useLocalePath();
  // Kanoninen: oma kieli, kun sivu on kirjoitettu sillä; muuten englanti (sama kuin prerenderin nativeLocales).
  const canonical = native ? localUrl('/when-to-go') : pageUrl('/when-to-go');
  const checked = hl === 'fi' ? 'Tarkistettu 23.9.2026' : 'Checked 23 September 2026';

  const groups: { start: number; months: WhenMonth[] }[] = [];
  for (let i = 0; i < w.months.length; i += 2) groups.push({ start: i, months: w.months.slice(i, i + 2) });

  const renderMonth = (m: WhenMonth, i: number) => (
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
      <p className="text-graphite text-[16px] leading-relaxed mb-5 [text-wrap:pretty]">{m.body}</p>
      <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-[15px] border-t border-charcoal/8 pt-4">
        <div>
          <p className="text-[#047857] text-[11px] font-semibold tracking-[0.18em] uppercase mb-2">{w.goodLabel}</p>
          <ul className="space-y-1.5 text-graphite">
            {m.good.map((g) => (
              <li key={g} className="flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-aurora-green" aria-hidden="true" />
                {g}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-graphite text-[11px] font-semibold tracking-[0.18em] uppercase mb-2">{w.noteLabel}</p>
          <ul className="space-y-1.5 text-graphite">
            {m.note.map((n) => (
              <li key={n} className="flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full border border-stone" aria-hidden="true" />
                {n}
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
      <link rel="canonical" href={canonical} />
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
                description: w.metaDescription,
                publisher: { '@id': `${pageUrl('/')}#organization` },
                mainEntityOfPage: canonical,
                inLanguage: hl,
                dateModified: '2026-09-23',
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: t.home.breadcrumbHome, item: localUrl('/') },
                  { '@type': 'ListItem', position: 2, name: w.breadcrumb, item: localUrl('/when-to-go') },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: w.faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
              },
            ],
          }),
        }}
      />

      <PageHero eyebrow={w.hero.eyebrow} title={w.hero.title} subtitle={w.hero.subtitle} imageSrc="/images/whentogo-hero-tykky.webp" />

      {!native && (
        <div className="bg-finland-blue text-snow px-5 sm:px-6 py-3">
          <p className="max-w-4xl mx-auto text-sm leading-relaxed">
            {HOUSING_LANG_NOTICE[lang]}{' '}
            <a href="/when-to-go" className="underline underline-offset-2 font-semibold">English</a>
            {' · '}
            <a href="/fi/when-to-go" className="underline underline-offset-2 font-semibold">Suomi</a>
          </p>
        </div>
      )}

      {/* Johdanto + kuukaudet hyppylinkkeinä. */}
      <section className="px-5 sm:px-6 pt-12 sm:pt-16 pb-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-5 text-graphite text-base sm:text-[17px] leading-relaxed [&>p:first-child]:text-charcoal [&>p:first-child]:text-lg sm:[&>p:first-child]:text-xl">
            {w.intro.map((p, i) => (
              <p key={i} className="[text-wrap:pretty]">{p}</p>
            ))}
          </div>
          <nav aria-label={w.monthsNav} className="mt-9">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-graphite mb-3">{w.monthsNav}</p>
            <ul className="flex flex-wrap gap-2">
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
        </div>
      </section>

      {/* Koko vuosi yhdessä taulukossa (Ilmatieteen laitos 1991–2020 + päivän pituus). */}
      <section className="px-5 sm:px-6 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto">
          <p className="inline-flex px-3 py-1 rounded-full bg-finland-blue/10 text-finland-blue text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">{w.tableKicker}</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight tracking-wide">{w.tableH2}</h2>
          <div className="mt-4 h-1 w-14 rounded-full bg-finland-blue" aria-hidden="true" />
          <p className="mt-6 pb-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-graphite">{w.table.caption}</p>
          {/* Puhelimessa taulukko vierii sivusuunnassa: oikean reunan häivytys kertoo, että sitä voi vierittää
              (asetteluportti mobile_wrap_audit: vieritysrivi ilman häivytystä = katkaistu rivi). */}
          <div className="overflow-x-auto -mx-5 sm:mx-0 border-y sm:border border-charcoal/10 sm:rounded-2xl bg-white shadow-sm [mask-image:linear-gradient(to_right,#000_calc(100%_-_40px),transparent_100%)] sm:[mask-image:none]">
            <table className="w-full min-w-[660px] border-collapse text-[14px] sm:text-[15px]">
              <thead>
                <tr className="bg-night">
                  {w.table.head.map((h, i) => (
                    <th
                      key={h}
                      scope="col"
                      className={`px-3 sm:px-4 py-3 text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.08em] text-snow align-bottom ${
                        i === 0 || i === w.table.head.length - 1 ? 'text-left' : 'text-right'
                      } ${i === 0 ? 'pl-5' : ''}`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {w.table.rows.map((r, ri) => (
                  <tr key={r[0]} className="border-t border-charcoal/8 odd:bg-white even:bg-cream-2/55">
                    {r.map((c, ci) =>
                      ci === 0 ? (
                        <th key={ci} scope="row" className="px-3 sm:px-4 pl-5 py-3 text-left text-charcoal font-semibold whitespace-nowrap">
                          <a href={`#kk-${ri + 1}`} className="hover:text-[#BE185D]">{c}</a>
                        </th>
                      ) : (
                        <td
                          key={ci}
                          className={`px-3 sm:px-4 py-3 text-charcoal ${ci === r.length - 1 ? 'text-left text-graphite' : 'text-right tabular-nums whitespace-nowrap'}`}
                        >
                          {c}
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {w.table.foot && <p className="mt-3 text-[13px] leading-relaxed text-graphite max-w-4xl">{w.table.foot}</p>}
        </div>
      </section>

      {groups.map((g, gi) => {
        const first = g.months[0];
        const last = g.months[g.months.length - 1];
        return (
          <section key={g.start} className={`px-5 sm:px-6 py-12 sm:py-16 ${gi % 2 === 0 ? 'bg-cream-2/70' : ''}`}>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">{g.months.map((m, j) => renderMonth(m, g.start + j))}</div>
            </div>
          </section>
        );
      })}

      {/* Asujalle: mitä vuosi tarkoittaa asumiselle (sivuston rooli §23). */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 bg-night text-snow relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-vibe-pink/20 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto">
          <p className="inline-flex px-3 py-1 rounded-full bg-white/10 text-[#F9A8D4] text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">{w.living.kicker}</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-snow mb-7 leading-tight tracking-wide">{w.living.h2}</h2>
          <ul className="space-y-5 text-snow/85 text-[16px] leading-relaxed [&_strong]:text-snow">
            {w.living.items.map((it, i) => (
              <li key={i} className="[text-wrap:pretty]" dangerouslySetInnerHTML={{ __html: it }} />
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            {w.links.map((l) => (
              <Link
                key={l.href}
                to={localePath(l.href)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 min-h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-snow text-sm font-semibold transition-colors"
              >
                {l.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Usein kysytyt */}
      <section className="py-14 sm:py-20 px-5 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <p className="inline-flex px-3 py-1 rounded-full bg-vibe-pink/10 text-[#BE185D] text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">{w.faqKicker}</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight tracking-wide mb-8">{w.faqH2}</h2>
          <div className="space-y-3">
            {w.faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-white border border-charcoal/10 shadow-sm open:border-vibe-pink/50 open:shadow-md transition-all">
                <summary className="cursor-pointer list-none px-6 py-5 flex items-start justify-between gap-4 min-h-11">
                  <span className="font-heading text-xl sm:text-2xl text-charcoal leading-snug tracking-wide">{f.q}</span>
                  <span className="mt-1 inline-flex w-7 h-7 shrink-0 items-center justify-center rounded-full bg-vibe-pink/10 text-[#BE185D] group-open:rotate-45 transition-transform" aria-hidden="true">
                    <Plus className="w-4 h-4" />
                  </span>
                </summary>
                <p className="px-6 pb-6 -mt-1 text-graphite text-[16px] leading-relaxed [text-wrap:pretty]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <SourcesDisclosure
        summary={ui.sources}
        updated={checked}
        note={w.authorNote}
        sourcesLead={ui.sourcesLead}
        sources={w.sources}
        page="when_to_go"
      />

      <Newsletter />
    </>
  );
}
