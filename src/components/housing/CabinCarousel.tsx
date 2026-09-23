import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, ArrowUpRight, BedDouble, Ruler, Users } from 'lucide-react';
import type { HousingLang } from '../../housing/types';

/**
 * Lomarenkaan mökit kuvineen pitkät jaksot -sivulle.
 *
 * Vesa 23.9.2026 vanhasta tekstimainoksesta: *"tähän tietenkin karuselli kuvineen ja kohteesta ainakin
 * useampi kuva että voi valita"*. Portattu laplandstaysin `CabinShowcase.tsx`:stä: sama Workerin
 * `/_cabins`-rajapinta (Adtraction-tuotesyöte pfid 375, KV-välimuisti, päivitys vuorokauden välein, joten
 * poistuneet mökit putoavat pois itsestään). Lomarenkaan ohjelma sallii kuvien käytön; Lomarenkaan
 * sanamerkki pysyy näkyvissä (ohjelman ehto).
 *
 * 🔴 Yksi kuva per mökki: syöte antaa vain pääkuvan. Useampi kuva vaatisi Workerin muutoksen, joka
 * koskee koko verkostoa, joten se on erillinen päätös.
 *
 * Muutokset lähteeseen: vaalea asumissivujen tyyli, ei GA-seurantaa (affiliate-klikit kirjataan
 * Workerin D1-lokiin sidillä, ei kahdesti), Ruka pois (Kuusamo ei ole Lapin maakuntaa, verkoston
 * sääntö), "Muu Lappi" -välilehti mukaan. Linkit Workerin kautta, rel ilman noreferreriä.
 */

type GroupKey = 'levi' | 'yllas' | 'saariselka' | 'lapland';

type ApiCabin = {
  id: string;
  name: string;
  img: string;
  slug: string;
  place: string;
  muni: string;
  p: number | null;
  pe: number;
  sqm: number | null;
  br: number | null;
  stars: number | null;
  weeklyFrom: number | null;
};

type ApiData = { updatedAt: string; totals: Record<string, number>; groups: Record<string, ApiCabin[]> };

const REDIRECT = 'https://go.laplandvibes.com';
const CABINS_API = `${REDIRECT}/_cabins`;
const TABS: GroupKey[] = ['levi', 'yllas', 'saariselka', 'lapland'];
const CARDS_SHOWN = 6;

/** Lomarenkaan aluehaku; ei koskaan etusivu (verkoston sääntö: syvin tunnettu parametri). */
const AREA_URL: Record<GroupKey, { fi: string; intl: string }> = {
  lapland: { fi: 'https://www.lomarengas.fi/mokkihaku/lappi', intl: 'https://www.lomarengas.fi/en/cottage-search/lappi' },
  levi: { fi: 'https://www.lomarengas.fi/mokkihaku/lappi/hiihtokeskus/levi', intl: 'https://www.lomarengas.fi/en/cottage-search/lappi/ski-resort/levi' },
  yllas: { fi: 'https://www.lomarengas.fi/mokkihaku/lappi/hiihtokeskus/yllas', intl: 'https://www.lomarengas.fi/en/cottage-search/lappi/ski-resort/yllas' },
  saariselka: { fi: 'https://www.lomarengas.fi/mokkihaku/lappi/hiihtokeskus/saariselka', intl: 'https://www.lomarengas.fi/en/cottage-search/lappi/ski-resort/saariselka' },
};

const goLomarengas = (dest: string, sid: string) =>
  `${REDIRECT}/go/lomarengas?sid=${encodeURIComponent(sid)}&dest=${encodeURIComponent(dest)}`;

/** Mökin oma sivu syötteen slugista (kunta-kylä-nimi-id); fi /mokit/, muut /en/cottages/. */
const cabinUrl = (slug: string, sid: string, hl: HousingLang) =>
  goLomarengas(hl === 'fi' ? `https://www.lomarengas.fi/mokit/${slug}` : `https://www.lomarengas.fi/en/cottages/${slug}`, sid);

const TEXT: Record<HousingLang, {
  ad: string; kicker: string; h2: string; lead: string; tabs: Record<GroupKey, string>; weekFrom: string;
  guests: string; bedrooms: string; size: string; view: string; browseAll: string; note: string; updated: string;
}> = {
  fi: {
    ad: 'Mainos',
    kicker: 'Mökki viikoiksi',
    h2: 'Vapaat mökit kuvineen.',
    lead: 'Mökin voi vuokrata viikko kerrallaan, myös useaksi viikoksi. Tiedot tulevat Lomarenkaan tuotesyötteestä ja päivittyvät vuorokauden välein.',
    tabs: { levi: 'Levi', yllas: 'Ylläs', saariselka: 'Saariselkä', lapland: 'Muu Lappi' },
    weekFrom: 'viikko alkaen {price} €',
    guests: 'Hengille',
    bedrooms: 'Makuuhuoneita',
    size: 'Pinta-ala',
    view: 'Katso mökki',
    browseAll: 'Kaikki {count} mökkiä: {area}',
    note: 'Kumppanilinkkejä: jos varaat Lomarenkaan kautta, saamme pienen palkkion. Sinulle hinta on sama. Hinta on viikon alkaen-hinta, ja varsinainen hinta riippuu viikosta.',
    updated: 'Syöte päivitetty',
  },
  en: {
    ad: 'Ad',
    kicker: 'A cabin by the week',
    h2: 'Available cabins with photos.',
    lead: 'Cabins are let a week at a time, also for several weeks in a row. The details come from the Lomarengas product feed and refresh every day.',
    tabs: { levi: 'Levi', yllas: 'Ylläs', saariselka: 'Saariselkä', lapland: 'Rest of Lapland' },
    weekFrom: 'week from €{price}',
    guests: 'Guests',
    bedrooms: 'Bedrooms',
    size: 'Size',
    view: 'View cabin',
    browseAll: 'All {count} cabins: {area}',
    note: 'Affiliate links: if you book through Lomarengas we earn a small commission. Your price is the same. The price is a from-price for one week; the actual price depends on the week.',
    updated: 'Feed updated',
  },
};

let cache: ApiData | null = null;
let pending: Promise<ApiData | null> | null = null;
function loadCabins(): Promise<ApiData | null> {
  if (cache) return Promise.resolve(cache);
  if (!pending) {
    pending = fetch(CABINS_API)
      .then((r) => (r.ok ? (r.json() as Promise<ApiData>) : null))
      .then((d) => {
        if (d && d.groups && d.totals) cache = d;
        return cache;
      })
      .catch(() => null);
  }
  return pending;
}

export default function CabinCarousel({ hl, sidPrefix, id }: { hl: HousingLang; sidPrefix: string; id?: string }) {
  const t = TEXT[hl];
  const [data, setData] = useState<ApiData | null>(cache);
  const [failed, setFailed] = useState(false);
  const [tab, setTab] = useState<GroupKey>('levi');

  useEffect(() => {
    let alive = true;
    loadCabins().then((d) => {
      if (!alive) return;
      if (d) setData(d);
      else setFailed(true);
    });
    return () => {
      alive = false;
    };
  }, []);

  const nf = useMemo(() => new Intl.NumberFormat(hl === 'fi' ? 'fi-FI' : 'en-GB', { maximumFractionDigits: 0 }), [hl]);
  const updated = useMemo(() => {
    if (!data?.updatedAt) return '';
    const d = new Date(data.updatedAt);
    return Number.isNaN(d.getTime()) ? '' : d.toLocaleDateString(hl === 'fi' ? 'fi-FI' : 'en-GB', { day: 'numeric', month: 'numeric', year: 'numeric' });
  }, [data, hl]);

  // Syöte ei vastaa (mainosesto, verkko): osio piiloutuu, ei tyhjää laatikkoa.
  if (failed) return null;

  // 🔴 Sisarmökeillä (esim. Levi Star West A ja B) on syötteessä täsmälleen sama kuva: näytetään kuva vain kerran
  // (Vesa 23.9.2026: "käytät liikaa samoja kuvia").
  const seenImg = new Set<string>();
  const cabins = data
    ? (data.groups[tab] ?? []).filter((c) => (seenImg.has(c.img) ? false : (seenImg.add(c.img), true))).slice(0, CARDS_SHOWN)
    : [];
  const total = data?.totals[tab] ?? 0;
  const moreHref = goLomarengas(hl === 'fi' ? AREA_URL[tab].fi : AREA_URL[tab].intl, `${sidPrefix}_more_${tab}`);

  return (
    <section id={id} className="scroll-mt-24 py-14 sm:py-20 px-5 sm:px-6 bg-white border-y border-charcoal/[0.06]" aria-label={t.h2}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
          <div className="min-w-0">
            <p className="mb-3 inline-flex rounded-full bg-charcoal/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-graphite">
              {t.ad} · {t.kicker}
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight tracking-wide [text-wrap:balance]">{t.h2}</h2>
          </div>
          {/* Lomarenkaan sanamerkki näkyvissä sijoittelussa (ohjelman ehto). */}
          <img src="/images/partners/lomarengas.png" alt="Lomarengas" width={472} height={150} loading="lazy" decoding="async" className="h-8 sm:h-10 w-auto shrink-0" />
        </div>
        <p className="text-graphite text-base sm:text-lg leading-relaxed mb-7 max-w-3xl [text-wrap:pretty]">{t.lead}</p>

        <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label={t.h2}>
          {TABS.map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={tab === key}
              onClick={() => setTab(key)}
              className={`px-4 py-2 min-h-11 rounded-full text-sm font-semibold transition-colors ${
                tab === key ? 'bg-charcoal text-snow' : 'bg-cream-2 text-charcoal hover:bg-charcoal/10'
              }`}
            >
              {t.tabs[key]}
            </button>
          ))}
        </div>

        {/* Puhelin: yksi vieritettävä rivi, oikea reuna häivytetty; sm+: ruudukko. */}
        <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory [mask-image:linear-gradient(to_right,#000_calc(100%_-_44px),transparent_100%)] sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 sm:overflow-visible sm:pb-0 sm:[mask-image:none]">
          {!data
            ? Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="snap-start shrink-0 w-[78%] sm:w-auto sm:shrink rounded-2xl bg-cream-2 animate-pulse aspect-[4/5]" />
              ))
            : cabins.map((c) => {
                const sid = `${sidPrefix}_card_${tab}`;
                return (
                  <a
                    key={c.id}
                    href={cabinUrl(c.slug, sid, hl)}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    className="relative snap-start shrink-0 w-[78%] sm:w-auto sm:shrink bg-white rounded-2xl overflow-hidden group border border-charcoal/10 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-cream-2">
                      <img
                        src={c.img}
                        alt={`${c.name}, ${c.place}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-baseline justify-between gap-2 mb-0.5">
                        <h3 className="font-heading text-xl text-charcoal tracking-wide truncate min-w-0">{c.name}</h3>
                        {c.stars ? (
                          <span className="text-[#B45309] text-[11px] shrink-0" aria-label={`${c.stars}/5`}>
                            {'★'.repeat(c.stars)}
                          </span>
                        ) : null}
                      </div>
                      <p className="text-stone text-[13px] mb-3 truncate">{c.place === c.muni ? c.place : `${c.place}, ${c.muni}`}</p>
                      <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1 text-[13px] text-graphite mb-3.5">
                        {c.p != null && (
                          <span className="inline-flex items-center gap-1.5">
                            <Users className="w-3.5 h-3.5 text-[#BE185D]" aria-hidden="true" />
                            <span className="sr-only">{t.guests}: </span>
                            {c.p}
                            {c.pe ? `+${c.pe}` : ''}
                          </span>
                        )}
                        {c.br != null && c.br > 0 && (
                          <span className="inline-flex items-center gap-1.5">
                            <BedDouble className="w-3.5 h-3.5 text-[#BE185D]" aria-hidden="true" />
                            <span className="sr-only">{t.bedrooms}: </span>
                            {c.br}
                          </span>
                        )}
                        {c.sqm != null && (
                          <span className="inline-flex items-center gap-1.5">
                            <Ruler className="w-3.5 h-3.5 text-[#BE185D]" aria-hidden="true" />
                            <span className="sr-only">{t.size}: </span>
                            {nf.format(Math.round(c.sqm))} m²
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 border-t border-charcoal/10 pt-3">
                        {c.weeklyFrom ? (
                          <p className="text-[13px] text-graphite">
                            {t.weekFrom.split('{price}')[0]}
                            <span className="font-semibold text-charcoal">
                              {nf.format(Math.round(c.weeklyFrom))}
                              {t.weekFrom.split('{price}')[1] ?? ''}
                            </span>
                          </p>
                        ) : (
                          <span />
                        )}
                        <span className="inline-flex items-center gap-1 text-[#BE185D] text-[13px] font-semibold">
                          {t.view}
                          <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                        </span>
                      </div>
                    </div>
                  </a>
                );
              })}
        </div>

        {data && total > 0 && (
          <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between">
            <a
              href={moreHref}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="inline-flex max-w-full items-center justify-center gap-1.5 text-sm px-5 py-2.5 min-h-11 rounded-full border border-charcoal/20 text-charcoal font-semibold hover:border-[#BE185D] hover:text-[#BE185D] transition-colors"
            >
              <span className="truncate">{t.browseAll.replace('{count}', nf.format(total)).replace('{area}', t.tabs[tab])}</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </a>
            {updated && <p className="text-[12px] text-stone">{t.updated} {updated}</p>}
          </div>
        )}
        <p className="mt-5 max-w-3xl text-[13px] leading-relaxed text-graphite">{t.note}</p>
      </div>
    </section>
  );
}
