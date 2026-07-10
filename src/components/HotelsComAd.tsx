import { useEffect, useRef, useState } from 'react';
import { ArrowRight, BedDouble, CalendarCheck, Globe2, Sparkles } from 'lucide-react';
import AffiliateDisclosure from './AffiliateDisclosure';
import { useLang, type Lang } from '../i18n/useLang';

/**
 * Affiliate ad — Hotels.com (CJ, via the go.laplandvibes.com redirect Worker).
 *
 * Hotels.com is the broad inventory partner for this site: where Lomarengas
 * covers privately-owned weekly cottages, Hotels.com covers the design hotels,
 * resort cabins and apartment-hotels in the Lapland towns. The site already
 * routes its inline "check prices" CTAs through the same Worker; this is the
 * one framed, brand-skinned placement that names the partner and explains why
 * it is the right tool for a hotel stay.
 *
 * Skinned in the ADVERTISER's OWN brand (premium_design_standard §6: "mainos
 * pitää olla heidän brändin mukainen, ei meidän"). Hotels.com's identity is a
 * deep navy wordmark with a red dot accent on white — so the card is a clean
 * white unit with their navy/red, sitting as a distinct "Mainos / Ad" block on
 * the cream page.
 *
 * Logo note: Hotels.com is a CJ text-link partner — there is no licensed logo
 * asset in the repo, and fabricating/AI-generating a real trademark is a legal
 * risk (premium_design_standard §1c). So the wordmark is rendered as clean
 * styled TEXT in the brand colours (a typographic wordmark, not a copied logo).
 * If an official logo asset is later licensed, drop it in at /images/partners/.
 *
 * Offer hooks — compliance-safe, EVERGREEN only (no fake/stale % — brand rule):
 *   • Real-time availability and prices across the Lapland towns.
 *   • Free cancellation on most rooms (a standing Hotels.com filter/feature).
 *   • One OneKey reward night style loyalty is NOT claimed (programme terms
 *     change) — only structural, always-true facts are shown.
 *
 * Required affiliate attributes (LV spec): target="_blank"
 * rel="sponsored nofollow noopener" — NO `noreferrer` (the Worker reads Referer
 * to resolve the per-site CJ Website ID for attribution).
 *
 * Animation is pure CSS/Tailwind (one-shot scroll reveal). No Framer Motion.
 */

/** Hotels.com brand: deep navy wordmark + red dot accent on white. */
const HC_NAVY = '#1B2C5E';
const HC_NAVY_DEEP = '#13234F';
const HC_RED = '#D32F2F';

const REDIRECT_BASE = 'https://go.laplandvibes.com/go/hotels';
const HOTELS_LOCALE: Record<Lang, string> = {
  en: 'en_US', fi: 'fi_FI', de: 'de_DE', ja: 'ja_JP',
  es: 'es_ES', 'pt-BR': 'pt_BR', 'zh-CN': 'zh_CN',
  ko: 'ko_KR', fr: 'fr_FR', it: 'it_IT', nl: 'nl_NL',
};

/** Force ", Finland" onto any hotels query lacking a country — a bare "Lapland"
 *  geocodes to Lapland, Indiana on Hotels.com (Vesa 2026-07-08). */
function anchorFinland(ss: string): string {
  return /finland|suomi/i.test(ss) ? ss : `${ss.replace(/[\s,]+$/, '')}, Finland`;
}

function buildHref(sid: string, ss: string, lang: Lang): string {
  const params = new URLSearchParams();
  params.set('sid', sid);
  params.set('ss', anchorFinland(ss));
  params.set('locale', HOTELS_LOCALE[lang]);
  return `${REDIRECT_BASE}?${params.toString()}`;
}

export default function HotelsComAd({
  sid = 'hotels_partner_card',
  /** Search seed passed to the Worker (city or region). */
  ss = 'Lapland, Finland',
  className = '',
}: {
  sid?: string;
  ss?: string;
  className?: string;
}) {
  const lang = useLang();

  // One-shot scroll reveal (progressive enhancement; content never gated).
  const rootRef = useRef<HTMLElement | null>(null);
  const [armed, setArmed] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setRevealed(true);
      return;
    }
    setArmed(true);
  }, []);

  useEffect(() => {
    if (!armed || revealed) return;
    const el = rootRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setRevealed(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setRevealed(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    const tmr = window.setTimeout(() => setRevealed(true), 2500);
    return () => {
      io.disconnect();
      window.clearTimeout(tmr);
    };
  }, [armed, revealed]);

  const animState = !armed ? 'off' : revealed ? 'in' : 'pending';
  const pick = (m: Record<Lang, string>) => m[lang];

  const adLabel = pick({
    en: 'Ad', fi: 'Mainos', de: 'Anzeige', ja: '広告', es: 'Anuncio',
    'pt-BR': 'Anúncio', 'zh-CN': '广告', ko: '광고', fr: 'Annonce', it: 'Annuncio', nl: 'Advertentie',
  });

  const eyebrow = pick({
    en: 'Hotels in the Lapland towns',
    fi: 'Hotellit Lapin kaupungeissa',
    de: 'Hotels in den Orten Lapplands',
    ja: 'ラップランドの町のホテル',
    es: 'Hoteles en los pueblos de Laponia',
    'pt-BR': 'Hotéis nas cidades da Lapônia',
    'zh-CN': '拉普兰城镇的酒店',
    ko: '라플란드 도시의 호텔',
    fr: 'Hôtels dans les villes de Laponie',
    it: 'Hotel nelle città della Lapponia',
    nl: 'Hotels in de plaatsen van Lapland',
  });

  // Two short, human sentences. Warm puhekieli in FI; no em-dash poetry.
  const headline = pick({
    en: 'Want a room you can book tonight, in town, with everything already there?',
    fi: 'Haluatko huoneen jonka voi varata tänään, keskustasta, valmiiksi katettuna?',
    de: 'Lieber ein Zimmer, das ihr heute Abend buchen könnt, mitten im Ort, mit allem schon da?',
    ja: '今夜そのまま予約できて、町なかで、何もかも揃った部屋がいいですか？',
    es: '¿Prefieres una habitación que puedas reservar esta noche, en el pueblo y con todo ya puesto?',
    'pt-BR': 'Quer um quarto que dá para reservar hoje à noite, na cidade, com tudo já pronto?',
    'zh-CN': '想要一间今晚就能订、在镇上、一切都已备好的房间吗？',
    ko: '오늘 밤 바로 예약할 수 있고, 시내에 있고, 모든 게 갖춰진 방이 좋으세요?',
    fr: 'Vous préférez une chambre réservable ce soir, en ville, avec tout déjà prêt ?',
    it: 'Preferite una camera prenotabile stasera, in centro, con tutto già pronto?',
    nl: 'Liever een kamer die je vanavond kunt boeken, in het dorp, met alles al klaar?',
  });

  const sub = pick({
    en: 'For the hotel nights, the design rooms in Rovaniemi, the ski-in places at Levi and Ylläs, the apartment-hotels, Hotels.com lists the most rooms with live prices, and most of them you can cancel free if your plans move. Handy for the start and end of a trip, or any night you just want a desk, a shower and breakfast downstairs.',
    fi: 'Hotelliöitä varten Hotels.com listaa eniten huoneita ajantasaisin hinnoin: design-huoneet Rovaniemellä, rinteeseen pääsevät paikat Levillä ja Ylläksellä, huoneistohotellit. Useimmat voi perua maksutta, jos suunnitelmat muuttuvat. Kätevä matkan alkuun ja loppuun, tai mille tahansa yölle kun haluat vain työpöydän, suihkun ja aamupalan alakerrasta.',
    de: 'Für die Hotelnächte listet Hotels.com die meisten Zimmer mit Live-Preisen: die Designzimmer in Rovaniemi, die Ski-in-Häuser in Levi und Ylläs, die Apartmenthotels. Die meisten lassen sich kostenlos stornieren, falls sich eure Pläne ändern. Praktisch für Anfang und Ende einer Reise, oder jede Nacht, in der ihr einfach Schreibtisch, Dusche und Frühstück unten wollt.',
    ja: 'ホテルに泊まる夜には。ロヴァニエミのデザインルーム、レヴィやウッラスのスキーイン、アパートメントホテルまで、Hotels.com はいちばん多くの部屋を最新価格で載せていて、その多くは予定が変わっても無料でキャンセルできます。旅の始めと終わり、あるいは机とシャワーと朝食さえあればいい夜に便利です。',
    es: 'Para las noches de hotel: las habitaciones de diseño de Rovaniemi, los alojamientos a pie de pista en Levi y Ylläs, los apartahoteles. Hotels.com es donde más habitaciones encuentras con precios al momento, y la mayoría se cancelan gratis si cambian los planes. Va bien para el principio y el final del viaje, o cualquier noche en que solo quieras un escritorio, una ducha y desayuno abajo.',
    'pt-BR': 'Para as noites de hotel: os quartos de design em Rovaniemi, os lugares com acesso à pista em Levi e Ylläs, os apart-hotéis. A Hotels.com é onde aparecem mais quartos com preços na hora, e a maioria dá para cancelar de graça se os planos mudarem. Bom para o começo e o fim da viagem, ou qualquer noite em que você só quer uma mesa, um chuveiro e café da manhã embaixo.',
    'zh-CN': '要在酒店过夜时，罗瓦涅米的设计房、列维和 Ylläs 的滑雪即达住宿、公寓式酒店，Hotels.com 列出的房间最多、价格实时，而且大多数在计划有变时都能免费取消。适合旅程的开头和结尾，或任何只想要一张书桌、一个淋浴和楼下早餐的夜晚。',
    ko: '호텔에서 묵는 밤을 위해. 로바니에미의 디자인 객실, 레비와 윌라스의 스키인 숙소, 아파트형 호텔까지 Hotels.com에 가장 많은 객실이 실시간 가격으로 올라오고, 대부분은 일정이 바뀌어도 무료로 취소할 수 있어요. 여행의 처음과 끝, 또는 책상과 샤워, 아래층 조식만 있으면 되는 어떤 밤에도 편합니다.',
    fr: 'Pour les nuits à l’hôtel : les chambres design de Rovaniemi, les adresses au pied des pistes à Levi et Ylläs, les apparthôtels. C’est sur Hotels.com qu’on trouve le plus de chambres aux prix du moment, et la plupart s’annulent gratuitement si vos plans changent. Pratique au début et à la fin d’un voyage, ou n’importe quelle nuit où vous voulez juste un bureau, une douche et le petit-déjeuner en bas.',
    it: 'Per le notti in hotel: le camere di design a Rovaniemi, gli alloggi ski-in a Levi e Ylläs, gli aparthotel. Su Hotels.com trovi più camere con prezzi aggiornati, e la maggior parte si cancella gratis se i piani cambiano. Comodo per l’inizio e la fine di un viaggio, o qualsiasi notte in cui ti basta una scrivania, una doccia e la colazione di sotto.',
    nl: 'Voor de hotelnachten: de designkamers in Rovaniemi, de ski-in adressen in Levi en Ylläs, de aparthotels. Op Hotels.com staan de meeste kamers met actuele prijzen, en de meeste kun je gratis annuleren als je plannen wijzigen. Handig voor het begin en eind van een reis, of elke nacht dat je gewoon een bureau, een douche en ontbijt beneden wilt.',
  });

  const trust: { icon: typeof BedDouble; label: string }[] = [
    {
      icon: Globe2,
      label: pick({
        en: 'Live prices, most rooms in town',
        fi: 'Ajantasaiset hinnat, eniten huoneita',
        de: 'Live-Preise, die meisten Zimmer',
        ja: '最新価格・部屋数いちばん',
        es: 'Precios al momento, más habitaciones',
        'pt-BR': 'Preços na hora, mais quartos',
        'zh-CN': '实时价格，房间最多',
        ko: '실시간 가격, 객실 최다',
        fr: 'Prix du moment, le plus de chambres',
        it: 'Prezzi aggiornati, più camere',
        nl: 'Actuele prijzen, meeste kamers',
      }),
    },
    {
      icon: CalendarCheck,
      label: pick({
        en: 'Free cancellation on most rooms',
        fi: 'Maksuton peruutus useimpiin huoneisiin',
        de: 'Kostenlose Stornierung bei den meisten Zimmern',
        ja: '多くの部屋が無料キャンセル可',
        es: 'Cancelación gratis en la mayoría',
        'pt-BR': 'Cancelamento grátis na maioria',
        'zh-CN': '多数房间可免费取消',
        ko: '대부분 객실 무료 취소',
        fr: 'Annulation gratuite sur la plupart',
        it: 'Cancellazione gratis sulla maggior parte',
        nl: 'Gratis annuleren bij de meeste kamers',
      }),
    },
    {
      icon: BedDouble,
      label: pick({
        en: 'Hotels, cabins and apartments',
        fi: 'Hotellit, mökit ja huoneistot',
        de: 'Hotels, Hütten und Apartments',
        ja: 'ホテル・コテージ・アパート',
        es: 'Hoteles, cabañas y apartamentos',
        'pt-BR': 'Hotéis, chalés e apartamentos',
        'zh-CN': '酒店、小屋和公寓',
        ko: '호텔, 코티지, 아파트',
        fr: 'Hôtels, chalets et appartements',
        it: 'Hotel, baite e appartamenti',
        nl: 'Hotels, hutten en appartementen',
      }),
    },
  ];

  const cta = pick({
    en: 'Check prices on Hotels.com',
    fi: 'Katso hinnat Hotels.comista',
    de: 'Preise auf Hotels.com ansehen',
    ja: 'Hotels.com で料金を見る',
    es: 'Ver precios en Hotels.com',
    'pt-BR': 'Ver preços na Hotels.com',
    'zh-CN': '在 Hotels.com 查看价格',
    ko: 'Hotels.com에서 가격 확인',
    fr: 'Voir les prix sur Hotels.com',
    it: 'Vedi i prezzi su Hotels.com',
    nl: 'Bekijk prijzen op Hotels.com',
  });

  const poweredBy = pick({
    en: 'Booking with Hotels.com',
    fi: 'Varaus Hotels.comin kautta',
    de: 'Buchung über Hotels.com',
    ja: '予約は Hotels.com 経由',
    es: 'Reserva con Hotels.com',
    'pt-BR': 'Reserva com a Hotels.com',
    'zh-CN': '由 Hotels.com 提供预订',
    ko: 'Hotels.com을 통한 예약',
    fr: 'Réservation via Hotels.com',
    it: 'Prenotazione con Hotels.com',
    nl: 'Boeking via Hotels.com',
  });

  return (
    <section
      ref={rootRef}
      data-anim={animState}
      className={`sl-hc-ad group/ad relative overflow-hidden rounded-3xl bg-white text-charcoal shadow-[0_24px_70px_-30px_rgba(19,35,79,0.42)] ring-1 ring-charcoal/5 ${className}`}
      style={{ borderTop: `3px solid ${HC_NAVY}` }}
      aria-label={headline}
    >
      <style>{`
        .sl-hc-ad[data-anim='pending'] .sl-rise { opacity: 0; transform: translateY(14px); }
        .sl-hc-ad[data-anim='in'] .sl-rise {
          opacity: 1; transform: none;
          transition: opacity .6s ease, transform .6s cubic-bezier(.22,.61,.36,1);
        }
        .sl-hc-ad[data-anim='in'] .sl-rise-1 { transition-delay: .05s; }
        .sl-hc-ad[data-anim='in'] .sl-rise-2 { transition-delay: .14s; }
        .sl-hc-ad[data-anim='in'] .sl-rise-3 { transition-delay: .23s; }
        @media (prefers-reduced-motion: reduce) {
          .sl-hc-ad .sl-rise { opacity: 1 !important; transform: none !important; transition: none !important; }
        }
      `}</style>

      {/* Soft navy wash, top-right — keeps the white card cool, on-brand. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full"
        style={{ background: `radial-gradient(closest-side, ${HC_NAVY}14, transparent)` }}
      />

      <div className="relative p-6 sm:p-8 lg:p-10">
        {/* Header row: icon badge + Ad label + eyebrow + brand wordmark */}
        <div className="sl-rise sl-rise-1 mb-5 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
              style={{ background: `${HC_NAVY}12`, boxShadow: `inset 0 0 0 1px ${HC_NAVY}33` }}
            >
              <BedDouble className="h-5 w-5" style={{ color: HC_NAVY }} aria-hidden="true" />
            </div>
            <div className="flex flex-col gap-1">
              <span
                className="inline-flex w-fit items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em]"
                style={{ background: `${HC_NAVY}12`, color: HC_NAVY }}
              >
                {adLabel}
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: HC_NAVY }}>
                {eyebrow}
              </p>
            </div>
          </div>
          {/* Brand wordmark — typographic (no licensed logo asset; see header note). */}
          <span
            className="shrink-0 font-body text-xl sm:text-2xl font-extrabold tracking-tight leading-none select-none"
            style={{ color: HC_NAVY }}
            aria-label="Hotels.com"
          >
            Hotels<span style={{ color: HC_RED }}>.</span>com
          </span>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto] lg:items-end gap-6">
          <div>
            <h2 className="sl-rise sl-rise-1 font-heading text-2xl sm:text-3xl text-charcoal leading-tight mb-3 max-w-2xl text-balance">
              {headline}
            </h2>
            <p className="sl-rise sl-rise-2 text-graphite text-sm sm:text-base leading-relaxed max-w-2xl text-pretty">
              {sub}
            </p>

            <ul className="sl-rise sl-rise-2 mt-5 flex flex-wrap gap-x-5 gap-y-2.5">
              {trust.map((tp) => (
                <li key={tp.label} className="flex items-center gap-2 text-graphite text-sm">
                  <tp.icon className="h-4 w-4 shrink-0" style={{ color: HC_NAVY }} aria-hidden="true" />
                  <span>{tp.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA — Hotels.com navy pill so the unit reads as their own placement. */}
          <div className="sl-rise sl-rise-3 lg:text-right shrink-0">
            <a
              href={buildHref(sid, ss, lang)}
              target="_blank"
              rel="sponsored nofollow noopener"
              data-sid={sid}
              className="group/cta inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-white font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 no-underline whitespace-nowrap"
              style={{ backgroundColor: HC_NAVY, boxShadow: `0 14px 30px -12px ${HC_NAVY_DEEP}99` }}
            >
              <Sparkles className="h-4 w-4 opacity-90" aria-hidden="true" />
              {cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-0.5" aria-hidden="true" />
            </a>
            <p className="mt-2.5 text-stone text-[11px] uppercase tracking-[0.12em] lg:text-right">{poweredBy}</p>
          </div>
        </div>

        <AffiliateDisclosure variant="compact" className="mt-6" />
      </div>
    </section>
  );
}
