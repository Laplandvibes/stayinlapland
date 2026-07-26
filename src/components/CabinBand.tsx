import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, BedDouble, Ruler, Users } from 'lucide-react';
import {
  buildLomarengasCabinUrl,
  buildLomarengasUrl,
  getCachedCabins,
  loadCabins,
  type CabinArea,
  type CabinsApiData,
} from '../lib/lomarengas';
import { useLang, type Lang } from '../i18n/useLang';

/**
 * Real, bookable cabins for one destination — the only imagery on this site
 * that is photography rather than AI generation, because the Lomarengas
 * programme explicitly permits re-hosting its product photos.
 *
 * Data comes from the affiliate Worker's /_cabins endpoint (Lomarengas product
 * feed, KV-cached, refreshed daily, delisted cabins drop out automatically).
 * If the fetch fails (adblock, offline) the whole band hides itself rather
 * than rendering an empty shell.
 */

const CARDS_SHOWN = 6;

type BandCopy = {
  eyebrow: string;
  h2: (dest: string) => string;
  lead: string;
  weekFrom: string;
  guestsLabel: string;
  bedroomsLabel: string;
  sizeLabel: string;
  viewCabin: string;
  browseAll: string;
  dataNote: string;
};

const COPY: Record<Lang, BandCopy> = {
  en: {
    eyebrow: 'Straight from the inventory',
    h2: (d) => `Real cabins in ${d}, real photos.`,
    lead: 'A live pick from what Lomarengas currently rents out around the village. These are privately-owned cabins, booked by the week, and every photo below is of the actual property.',
    weekFrom: 'week from {price} €',
    guestsLabel: 'guests',
    bedroomsLabel: 'bedrooms',
    sizeLabel: 'size',
    viewCabin: 'View cabin',
    browseAll: 'Browse all {count} cabins in the area',
    dataNote: 'Photos and prices from Lomarengas product data, refreshed daily. Weekly from-prices; the final price depends on the week.',
  },
  fi: {
    eyebrow: 'Suoraan valikoimasta',
    // Colon construction on purpose: Finnish would need the place name in a
    // local case ("Ylläkseltä", "Leviltä", "Saariselältä") and those cannot be
    // built from the nominative, so the name stays uninflected before the colon.
    h2: (d) => `${d}: aitoja mökkejä, aidot kuvat.`,
    lead: 'Poimintoja siitä, mitä Lomarenkaalla on juuri nyt vuokralla kylän ympäriltä. Nämä ovat yksityisten omistamia mökkejä, jotka vuokrataan viikoksi kerrallaan, ja jokainen kuva on itse kohteesta.',
    weekFrom: 'vko alkaen {price} €',
    guestsLabel: 'henkilöä',
    bedroomsLabel: 'makuuhuonetta',
    sizeLabel: 'koko',
    viewCabin: 'Katso mökki',
    browseAll: 'Selaa alueen kaikkia {count} mökkiä',
    dataNote: 'Kuvat ja hinnat Lomarenkaan tuotetiedoista, päivittyvät päivittäin. Viikkohinnat alkaen; lopullinen hinta riippuu viikosta.',
  },
  sv: {
    eyebrow: 'Direkt ur utbudet',
    h2: (d) => `Riktiga stugor i ${d}, riktiga bilder.`,
    lead: 'Ett urval av det Lomarengas hyr ut runt byn just nu. Det här är privatägda stugor som hyrs veckovis, och varje bild är på det faktiska objektet.',
    weekFrom: 'vecka från {price} €',
    guestsLabel: 'personer',
    bedroomsLabel: 'sovrum',
    sizeLabel: 'storlek',
    viewCabin: 'Se stugan',
    browseAll: 'Bläddra bland områdets alla {count} stugor',
    dataNote: 'Bilder och priser från Lomarengas produktdata, uppdateras dagligen. Veckopriser från; slutpriset beror på veckan.',
  },
  de: {
    eyebrow: 'Direkt aus dem Angebot',
    h2: (d) => `Echte Hütten in ${d}, echte Fotos.`,
    lead: 'Eine Auswahl aus dem, was Lomarengas rund um das Dorf gerade vermietet. Es sind privat geführte Hütten, wochenweise gebucht, und jedes Foto zeigt das tatsächliche Objekt.',
    weekFrom: 'Woche ab {price} €',
    guestsLabel: 'Personen',
    bedroomsLabel: 'Schlafzimmer',
    sizeLabel: 'Größe',
    viewCabin: 'Hütte ansehen',
    browseAll: 'Alle {count} Hütten der Region ansehen',
    dataNote: 'Fotos und Preise aus den Lomarengas-Produktdaten, täglich aktualisiert. Wochenpreise ab; der Endpreis hängt von der Woche ab.',
  },
  fr: {
    eyebrow: 'Directement du catalogue',
    h2: (d) => `De vrais chalets à ${d}, de vraies photos.`,
    lead: 'Une sélection de ce que Lomarengas loue actuellement autour du village. Ce sont des chalets de propriétaires particuliers, loués à la semaine, et chaque photo montre le bien réel.',
    weekFrom: 'semaine à partir de {price} €',
    guestsLabel: 'personnes',
    bedroomsLabel: 'chambres',
    sizeLabel: 'surface',
    viewCabin: 'Voir le chalet',
    browseAll: 'Voir les {count} chalets de la région',
    dataNote: 'Photos et prix issus des données produit Lomarengas, actualisés chaque jour. Prix hebdomadaires à partir de ; le prix final dépend de la semaine.',
  },
  es: {
    eyebrow: 'Directo del catálogo',
    h2: (d) => `Cabañas reales en ${d}, fotos reales.`,
    lead: 'Una selección de lo que Lomarengas alquila ahora mismo alrededor del pueblo. Son cabañas de propietarios particulares, alquiladas por semanas, y cada foto es del alojamiento real.',
    weekFrom: 'semana desde {price} €',
    guestsLabel: 'personas',
    bedroomsLabel: 'dormitorios',
    sizeLabel: 'tamaño',
    viewCabin: 'Ver cabaña',
    browseAll: 'Ver las {count} cabañas de la zona',
    dataNote: 'Fotos y precios de los datos de producto de Lomarengas, actualizados a diario. Precios semanales desde; el precio final depende de la semana.',
  },
  it: {
    eyebrow: 'Direttamente dal catalogo',
    h2: (d) => `Chalet veri a ${d}, foto vere.`,
    lead: 'Una selezione di ciò che Lomarengas affitta in questo momento intorno al villaggio. Sono chalet di proprietari privati, affittati a settimana, e ogni foto ritrae la struttura reale.',
    weekFrom: 'settimana da {price} €',
    guestsLabel: 'persone',
    bedroomsLabel: 'camere',
    sizeLabel: 'dimensione',
    viewCabin: 'Vedi lo chalet',
    browseAll: 'Sfoglia tutti i {count} chalet della zona',
    dataNote: 'Foto e prezzi dai dati di prodotto Lomarengas, aggiornati ogni giorno. Prezzi settimanali a partire da; il prezzo finale dipende dalla settimana.',
  },
  nl: {
    eyebrow: 'Rechtstreeks uit het aanbod',
    h2: (d) => `Echte huisjes in ${d}, echte foto’s.`,
    lead: 'Een greep uit wat Lomarengas op dit moment rond het dorp verhuurt. Dit zijn particuliere huisjes die per week worden verhuurd, en elke foto is van het werkelijke object.',
    weekFrom: 'week vanaf {price} €',
    guestsLabel: 'personen',
    bedroomsLabel: 'slaapkamers',
    sizeLabel: 'oppervlakte',
    viewCabin: 'Bekijk huisje',
    browseAll: 'Bekijk alle {count} huisjes in de omgeving',
    dataNote: 'Foto’s en prijzen uit de Lomarengas-productgegevens, dagelijks bijgewerkt. Weekprijzen vanaf; de uiteindelijke prijs hangt af van de week.',
  },
  'pt-BR': {
    eyebrow: 'Direto do catálogo',
    h2: (d) => `Chalés de verdade em ${d}, fotos de verdade.`,
    lead: 'Uma seleção do que a Lomarengas aluga agora em torno do vilarejo. São chalés de proprietários particulares, alugados por semana, e cada foto é do imóvel real.',
    weekFrom: 'semana a partir de {price} €',
    guestsLabel: 'pessoas',
    bedroomsLabel: 'quartos',
    sizeLabel: 'tamanho',
    viewCabin: 'Ver chalé',
    browseAll: 'Ver todos os {count} chalés da região',
    dataNote: 'Fotos e preços dos dados de produto da Lomarengas, atualizados diariamente. Preços semanais a partir de; o valor final depende da semana.',
  },
  ja: {
    eyebrow: '取扱い在庫から',
    h2: (d) => `${d}の本物のコテージ、本物の写真。`,
    lead: 'Lomarengas が今この村の周辺で貸し出している物件からのセレクションです。個人所有のコテージを1週間単位で借りるかたちで、以下の写真はすべて実際の物件のものです。',
    weekFrom: '1週間 {price} € から',
    guestsLabel: '定員',
    bedroomsLabel: '寝室',
    sizeLabel: '広さ',
    viewCabin: 'コテージを見る',
    browseAll: 'このエリアの{count}軒すべてを見る',
    dataNote: '写真と料金は Lomarengas の商品データより、毎日更新。週料金は「〜から」の表示で、最終料金は週によって異なります。',
  },
  ko: {
    eyebrow: '보유 물량에서 바로',
    h2: (d) => `${d}의 진짜 통나무집, 진짜 사진.`,
    lead: 'Lomarengas가 지금 이 마을 주변에서 임대 중인 물건 가운데 고른 것들입니다. 개인이 소유한 통나무집을 주 단위로 빌리는 방식이며, 아래 사진은 모두 실제 숙소의 사진입니다.',
    weekFrom: '주 {price} € 부터',
    guestsLabel: '인원',
    bedroomsLabel: '침실',
    sizeLabel: '면적',
    viewCabin: '통나무집 보기',
    browseAll: '이 지역의 {count}곳 모두 보기',
    dataNote: '사진과 요금은 Lomarengas 상품 데이터 기준이며 매일 갱신됩니다. 주간 요금은 최저가 표시이고, 최종 요금은 주에 따라 달라집니다.',
  },
  'zh-CN': {
    eyebrow: '直接来自在租房源',
    h2: (d) => `${d}的真实木屋，真实照片。`,
    lead: 'Lomarengas 目前在村庄周边出租的房源精选。这些都是私人所有的木屋，按周出租，下面每一张照片拍的都是房源本身。',
    weekFrom: '每周 {price} € 起',
    guestsLabel: '可住人数',
    bedroomsLabel: '卧室',
    sizeLabel: '面积',
    viewCabin: '查看木屋',
    browseAll: '浏览本区域全部 {count} 处木屋',
    dataNote: '照片与价格来自 Lomarengas 商品数据，每日更新。周价为起价，最终价格视具体周次而定。',
  },
};

/** Template like 'week from {price} €' → text before + bolded price tail. */
function PriceLine({ tpl, price }: { tpl: string; price: string }) {
  const [before, after = ''] = tpl.split('{price}');
  return (
    <p className="text-[13px] text-stone">
      {before}
      <span className="font-semibold text-charcoal">{price}{after}</span>
    </p>
  );
}

export default function CabinBand({ area, destName }: { area: CabinArea; destName: string }) {
  const lang = useLang();
  const c = COPY[lang];
  const [data, setData] = useState<CabinsApiData | null>(getCachedCabins());
  const [failed, setFailed] = useState(false);

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

  const nf = useMemo(() => {
    try {
      return new Intl.NumberFormat(lang, { maximumFractionDigits: 0 });
    } catch {
      return new Intl.NumberFormat('en', { maximumFractionDigits: 0 });
    }
  }, [lang]);

  if (failed) return null;

  const cabins = data ? (data.groups[area] ?? []).slice(0, CARDS_SHOWN) : [];
  const total = data?.totals[area] ?? 0;
  if (data && cabins.length === 0) return null;

  const moreHref = buildLomarengasUrl(area, `cabin_more_${area}`, lang);

  return (
    <section className="py-16 sm:py-24 px-5 sm:px-6 bg-cream-2/60">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
          <div className="min-w-0">
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
              {c.eyebrow}
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight tracking-tight">
              {c.h2(destName)}
            </h2>
          </div>
          {/* Lomarengas wordmark stays visible at the placement (programme term) */}
          <span className="inline-flex items-center bg-white rounded-lg px-3 py-1.5 shrink-0 border border-charcoal/8">
            <img
              src="/images/partners/lomarengas.png"
              alt="Lomarengas"
              width={472}
              height={150}
              loading="lazy"
              decoding="async"
              className="h-5 sm:h-6 w-auto"
            />
          </span>
        </div>
        <p className="text-graphite text-[16px] leading-relaxed mb-9 max-w-3xl">{c.lead}</p>

        {/* Mobile: one-row swipe; sm+: grid */}
        <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 sm:overflow-visible sm:pb-0">
          {!data
            ? Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="snap-start shrink-0 w-[78%] sm:w-auto sm:shrink rounded-2xl bg-charcoal/5 animate-pulse aspect-[4/5]"
                />
              ))
            : cabins.map((cab) => {
                const sid = `cabin_card_${area}`;
                const href = buildLomarengasCabinUrl(cab.slug, sid, lang);
                // 'relative' is load-bearing: the sr-only spans below are
                // position:absolute, and with no positioned ancestor they
                // anchor to the initial containing block — inside this
                // horizontally scrolled row that widens the document and
                // mobile Chrome then inflates the layout viewport (a real
                // 375px horizontal-scroll bug on laplandstays, 2026-07-25).
                return (
                  <a
                    key={cab.id}
                    href={href}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    className="relative snap-start shrink-0 w-[78%] sm:w-auto sm:shrink bg-white rounded-2xl overflow-hidden group border border-charcoal/8 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-cream-2">
                      <img
                        src={cab.img}
                        alt={`${cab.name}, ${cab.place}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-baseline justify-between gap-2 mb-0.5">
                        <h3 className="font-heading text-xl text-charcoal truncate min-w-0">{cab.name}</h3>
                        {cab.stars ? (
                          <span className="text-gold text-[11px] shrink-0" aria-label={`${cab.stars}/5`}>
                            {'★'.repeat(cab.stars)}
                          </span>
                        ) : null}
                      </div>
                      <p className="text-stone text-[13px] mb-3 truncate">
                        {cab.place === cab.muni ? cab.place : `${cab.place}, ${cab.muni}`}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1 text-[13px] text-graphite mb-3.5">
                        {cab.p != null && (
                          <span className="inline-flex items-center gap-1.5">
                            <Users className="w-3.5 h-3.5 text-vibe-pink" aria-hidden="true" />
                            <span className="sr-only">{c.guestsLabel}: </span>
                            {cab.p}
                            {cab.pe ? `+${cab.pe}` : ''}
                          </span>
                        )}
                        {cab.br != null && cab.br > 0 && (
                          <span className="inline-flex items-center gap-1.5">
                            <BedDouble className="w-3.5 h-3.5 text-vibe-pink" aria-hidden="true" />
                            <span className="sr-only">{c.bedroomsLabel}: </span>
                            {cab.br}
                          </span>
                        )}
                        {cab.sqm != null && (
                          <span className="inline-flex items-center gap-1.5">
                            <Ruler className="w-3.5 h-3.5 text-vibe-pink" aria-hidden="true" />
                            <span className="sr-only">{c.sizeLabel}: </span>
                            {nf.format(Math.round(cab.sqm))} m²
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 border-t border-charcoal/8 pt-3">
                        {cab.weeklyFrom ? (
                          <PriceLine tpl={c.weekFrom} price={nf.format(Math.round(cab.weeklyFrom))} />
                        ) : (
                          <span />
                        )}
                        <span className="inline-flex items-center gap-1 text-vibe-pink text-[13px] font-semibold">
                          {c.viewCabin}
                          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                        </span>
                      </div>
                    </div>
                  </a>
                );
              })}
        </div>

        {data && total > 0 && (
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
            <a
              href={moreHref}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="inline-flex max-w-full items-center justify-center gap-1.5 text-sm px-5 py-2.5 rounded-full bg-charcoal hover:bg-vibe-pink text-snow font-semibold transition-colors"
            >
              <span className="truncate">{c.browseAll.replace('{count}', nf.format(total))}</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </a>
            <p className="text-stone text-[12px] leading-relaxed">{c.dataNote}</p>
          </div>
        )}
      </div>
    </section>
  );
}
