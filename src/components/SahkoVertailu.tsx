/**
 * Sähkösopimusten vertailu: kolme kumppania rinnakkain (Vesa 19.11.2026: "Kyllä, sähkövertailu";
 * 18.11.: "stayinlapland sivulla saa olla mainontaa enemmänkin … nämä on kuitenkin hyödykkeitä joita jokainen
 * muuttaja tarvitsee"). Korvaa yksittäisen Fortum-kortin asumissivujen sähkökohdissa.
 *
 * Lukijan kysymys ei ole "kuka myy sähköä" vaan "minkälainen sopimus sopii, kun asun vuokralla tai kauden":
 * siksi ingressi kertoo irtisanomisen säännöt ja rivit näyttävät pörssisähkön ja kiinteän hinnan vierekkäin.
 * Tarjoukset ja lähteet: src/data/sahkosopimukset.ts. Hinnat näkyvät vain viikon lukuhetkestä.
 *
 * Linkit Workerin kautta (/go/<kumppani>), rel ilman noreferreriä. sid sama kuin entisellä Fortum-kortilla
 * (`<sivu>_electricity`), joten klikit ovat vertailukelpoisia; kumppani näkyy reitistä.
 */
import { ArrowRight, Zap } from "lucide-react";
import { useLang, type Lang } from "../i18n/useLang";
import { SAHKO_LUETTU, SAHKO_TARJOUKSET, sahkoHinnatNakyvat, type SahkoTarjous } from "../data/sahkosopimukset";
import { SAHKO_COPY, type SahkoCopy } from "./sahkoVertailuCopy";

const LOCALE: Record<Lang, string> = {
  en: "en-GB", fi: "fi-FI", de: "de-DE", ja: "ja-JP", es: "es-ES", "pt-BR": "pt-BR", "zh-CN": "zh-CN",
  ko: "ko-KR", fr: "fr-FR", it: "it-IT", nl: "nl-NL", sv: "sv-SE",
};

function fill(s: string, v: Record<string, string>): string {
  return s.replace(/\{(\w+)\}/g, (m, k: string) => (k in v ? v[k] : m));
}

function Rivi({ o, t, lang, sid, hinnat }: { o: SahkoTarjous; t: SahkoCopy; lang: Lang; sid: string; hinnat: boolean }) {
  const loc = LOCALE[lang];
  const num = (n: number) => new Intl.NumberFormat(loc, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
  const eur = (n: number) =>
    new Intl.NumberFormat(loc, { style: "currency", currency: "EUR", minimumFractionDigits: n === 0 ? 0 : 2, maximumFractionDigits: 2 }).format(n);
  const href = `https://go.laplandvibes.com/go/${o.key}?sid=${encodeURIComponent(sid)}`;
  const hinta = o.tyyppi === "spot" ? fill(t.priceSpot, { m: num(o.snt) }) : fill(t.priceFixed, { p: num(o.snt) });
  const maksu = fill(t.fee, { zero: eur(0), n: String(o.etuKk), f: eur(o.perusmaksu) });
  return (
    <li
      className="flex h-full flex-col gap-2 rounded-xl bg-white p-4 ring-1 ring-slate-200"
      style={{ borderLeft: `4px solid ${o.accent}` }}
    >
      {/* Logot rajattu tyhjästä reunasta 19.11.2026 (Adtractionin 300 × 100 -kuvissa merkki oli pieni keskellä). */}
      <img src={o.logo} alt={o.yhtio} width={140} height={24} loading="lazy" decoding="async" className="h-6 w-auto max-w-[9rem] object-contain object-left" />
      <span className="w-fit rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold leading-tight text-slate-700">
        {o.tyyppi === "spot" ? t.typeSpot : t.typeFixed24}
      </span>
      <p className="font-semibold text-slate-900">{o.tuote}</p>
      {hinnat ? (
        <>
          <p className="text-sm text-slate-800">{hinta}</p>
          <p className="text-sm leading-snug text-slate-600">{maksu}</p>
        </>
      ) : (
        <p className="text-sm leading-snug text-slate-600">{t.noPrice}</p>
      )}
      <a
        href={href}
        target="_blank"
        rel="sponsored nofollow noopener"
        aria-label={`${o.yhtio}: ${t.cta}`}
        className="group mt-auto inline-flex w-fit items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white no-underline transition-transform duration-200 hover:-translate-y-0.5"
        style={{ backgroundColor: o.cta }}
      >
        {t.cta}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </a>
    </li>
  );
}

export default function SahkoVertailu({
  sid = "stay_electricity",
  lang: langProp,
  layout = "stack",
  now,
}: {
  sid?: string;
  lang?: Lang;
  /** stack = kortti ruudukossa (rivit allekkain), row = palstan levyinen (rivit rinnakkain tabletista ylöspäin). */
  layout?: "stack" | "row";
  /** Testejä varten. */
  now?: number;
}) {
  const ctxLang = useLang();
  const lang = langProp ?? ctxLang;
  const t = SAHKO_COPY[lang];
  const hinnat = sahkoHinnatNakyvat(now);
  const pvm = new Intl.DateTimeFormat(LOCALE[lang], { day: "numeric", month: "numeric", year: "numeric", timeZone: "Europe/Helsinki" }).format(SAHKO_LUETTU);
  return (
    <article
      className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-slate-50 text-slate-900 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.55)] ring-1 ring-black/5"
      aria-label={t.title}
      data-sahkovertailu
    >
      <div className="flex h-full flex-col p-5 sm:p-6">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-200/70">
            <Zap className="h-5 w-5 text-slate-800" aria-hidden="true" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="inline-flex w-fit items-center rounded-full bg-slate-200/70 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-800">
              {t.adLabel}
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-700">{t.eyebrow}</p>
          </div>
        </div>
        <h3 className="mb-2 font-heading text-2xl leading-tight tracking-wide text-slate-900 sm:text-[1.7rem] [text-wrap:balance]">{t.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-700 [text-wrap:pretty]">{t.lead}</p>
        <ul className={`grid gap-3 ${layout === "row" ? "md:grid-cols-3" : ""}`}>
          {SAHKO_TARJOUKSET.map((o) => (
            <Rivi key={o.key} o={o} t={t} lang={lang} sid={sid} hinnat={hinnat} />
          ))}
        </ul>
        <div className="mt-4 space-y-1.5 text-[12px] leading-relaxed text-slate-600">
          {hinnat && <p>{fill(t.source, { date: pvm })}</p>}
          {t.idNote && <p>{t.idNote}</p>}
          <p className="text-[11px] uppercase tracking-[0.12em]">{t.poweredBy}</p>
        </div>
      </div>
    </article>
  );
}
