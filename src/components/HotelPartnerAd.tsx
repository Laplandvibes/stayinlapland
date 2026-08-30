import { useEffect, useRef, useState } from 'react';
import { ArrowRight, BedDouble, CalendarCheck, Globe2, Sparkles } from 'lucide-react';
import AffiliateDisclosure from './AffiliateDisclosure';
import { useLang, type Lang } from '../i18n/useLang';

/**
 * Affiliate ad — hotel partner card (via the go.laplandvibes.com redirect Worker).
 *
 * CJ-EXIT 2026-07-24: the Worker now routes go/hotels by locale — `fi_FI` goes
 * to Sembo (Adtraction), every other locale to Trip.com. This card is skinned
 * per locale to match: FI visitors see a Sembo unit, everyone else a Trip.com
 * unit. The href already carries `locale=<code>` per language, so brand and
 * landing page always agree.
 *
 * The hotel partner is the broad inventory side of this site: where Lomarengas
 * covers privately-owned weekly cottages, the partner covers the design hotels,
 * resort cabins and apartment-hotels in the Lapland towns. The site already
 * routes its inline "check prices" CTAs through the same Worker; this is the
 * one framed, brand-skinned placement that names the partner and explains why
 * it is the right tool for a hotel stay.
 *
 * Skinned in the ADVERTISER's OWN brand (premium_design_standard §6: "mainos
 * pitää olla heidän brändin mukainen, ei meidän"): Sembo sky blue on white,
 * Trip.com blue on white — a distinct "Mainos / Ad" block on the cream page.
 *
 * Logo note: no licensed logo assets in the repo, and fabricating/AI-generating
 * a real trademark is a legal risk (premium_design_standard §1c). The wordmark
 * is rendered as clean styled TEXT in the brand colours (a typographic
 * wordmark, not a copied logo).
 *
 * Offer hooks — compliance-safe, EVERGREEN only (no fake/stale % — brand rule):
 * live prices and availability, instant confirmation, breadth of stay types.
 * No partner-programme perks are claimed (those change).
 *
 * Required affiliate attributes (LV spec): target="_blank"
 * rel="sponsored nofollow noopener" — NO `noreferrer` (the Worker reads Referer
 * to resolve the per-site Website ID for attribution).
 *
 * Animation is pure CSS/Tailwind (one-shot scroll reveal). No Framer Motion.
 */

/** Per-locale partner brand: FI → Sembo, all other locales → Trip.com. */
const BRAND_SEMBO = { name: 'Sembo', accent: '#0EA5E9', deep: '#0369A1' } as const;
const BRAND_TRIP = { name: 'Trip.com', accent: '#3264FF', deep: '#2449B8' } as const;

const REDIRECT_BASE = 'https://go.laplandvibes.com/go/hotels';
const HOTELS_LOCALE: Record<Lang, string> = {
  en: 'en_US', fi: 'fi_FI', de: 'de_DE', ja: 'ja_JP',
  es: 'es_ES', 'pt-BR': 'pt_BR', 'zh-CN': 'zh_CN',
  ko: 'ko_KR', fr: 'fr_FR', it: 'it_IT', nl: 'nl_NL', sv: 'sv_SE',
};

/** Force ", Finland" onto any hotels query lacking a country — a bare "Lapland"
 *  geocodes to Lapland, Indiana in partner search (Vesa 2026-07-08). */
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

// Reveal-support probes. Both answers are fixed properties of the environment,
// not state that changes over time, so they are read once in the lazy useState
// initialisers below rather than pushed in with a setState from inside an
// effect (which cascades an extra render — react-hooks/set-state-in-effect).

/** Browser present and the reader has not asked for reduced motion. */
function canAnimate(): boolean {
  if (typeof window === 'undefined') return false;
  return !(
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/** Without an observer nothing could ever trigger the reveal. */
function canObserve(): boolean {
  return typeof IntersectionObserver !== 'undefined';
}

export default function HotelPartnerAd({
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
  const brand = lang === 'fi' ? BRAND_SEMBO : BRAND_TRIP;

  // One-shot scroll reveal (progressive enhancement; content never gated).
  // `armed` = the animation runs at all; `revealed` = show the final state.
  // Reduced motion → never armed, so animState stays 'off' and the card renders
  // static. No IntersectionObserver → armed but revealed up front, so animState
  // is 'in' on the first render and the content is never left hidden.
  const rootRef = useRef<HTMLElement | null>(null);
  const [armed] = useState(canAnimate);
  const [revealed, setRevealed] = useState(() => !(canAnimate() && canObserve()));

  useEffect(() => {
    if (!armed || revealed) return;
    const el = rootRef.current;
    if (!el) return;
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
    'pt-BR': 'Anúncio', 'zh-CN': '广告', ko: '광고', fr: 'Annonce', it: 'Annuncio', nl: 'Advertentie', sv: 'Annons',
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
    sv: 'Hotell i Lapplands orter',
  });

  // Two short, human sentences. Warm puhekieli in FI; no em-dash poetry.
  const headline = pick({
    en: 'Want a room you can book tonight, in town, with everything already there?',
    fi: 'Haluatko huoneen jonka voi varata tänään, keskustasta, valmiiksi katettuna?',
    de: 'Lieber ein Zimmer, das Sie heute Abend buchen können, mitten im Ort, mit allem schon da?',
    ja: '今夜そのまま予約できて、町なかで、何もかも揃った部屋がいいですか？',
    es: '¿Prefieres una habitación que puedas reservar esta noche, en el pueblo y con todo ya puesto?',
    'pt-BR': 'Quer um quarto que dá para reservar hoje à noite, na cidade, com tudo já pronto?',
    'zh-CN': '想要一间今晚就能订、在镇上、一切都已备好的房间吗？',
    ko: '오늘 밤 바로 예약할 수 있고, 시내에 있고, 모든 게 갖춰진 방이 좋으세요?',
    fr: 'Vous préférez une chambre réservable ce soir, en ville, avec tout déjà prêt ?',
    it: 'Preferisce una camera prenotabile stasera, in centro, con tutto già pronto?',
    nl: 'Liever een kamer die u vanavond kunt boeken, in het dorp, met alles al klaar?',
    sv: 'Vill du ha ett rum du kan boka i kväll, mitt i byn, med allt redan på plats?',
  });

  const sub = pick({
    en: 'For the hotel nights, the design rooms in Rovaniemi, the ski-in places at Levi and Ylläs, the apartment-hotels, Trip.com lists a wide choice of rooms with live prices. Handy for the start and end of a trip, or any night you just want a desk, a shower and breakfast downstairs.',
    fi: 'Hotelliöitä varten Sembo listaa laajan valikoiman huoneita ajantasaisin hinnoin: design-huoneet Rovaniemellä, rinteeseen pääsevät paikat Levillä ja Ylläksellä, huoneistohotellit. Kätevä matkan alkuun ja loppuun, tai mille tahansa yölle kun haluat vain työpöydän, suihkun ja aamupalan alakerrasta.',
    de: 'Für die Hotelnächte listet Trip.com eine große Auswahl an Zimmern mit Live-Preisen: die Designzimmer in Rovaniemi, die Ski-in-Häuser in Levi und Ylläs, die Apartmenthotels. Praktisch für Anfang und Ende einer Reise, oder jede Nacht, in der Sie einfach Schreibtisch, Dusche und Frühstück unten wollen.',
    ja: 'ホテルに泊まる夜には。ロヴァニエミのデザインルーム、レヴィやウッラスのスキーイン、アパートメントホテルまで、Trip.com は幅広い部屋を最新価格で載せています。旅の始めと終わり、あるいは机とシャワーと朝食さえあればいい夜に便利です。',
    es: 'Para las noches de hotel: las habitaciones de diseño de Rovaniemi, los alojamientos a pie de pista en Levi y Ylläs, los apartahoteles. En Trip.com encuentras una amplia selección de habitaciones con precios al momento. Va bien para el principio y el final del viaje, o cualquier noche en que solo quieras un escritorio, una ducha y desayuno abajo.',
    'pt-BR': 'Para as noites de hotel: os quartos de design em Rovaniemi, os lugares com acesso à pista em Levi e Ylläs, os apart-hotéis. Na Trip.com aparece uma ampla seleção de quartos com preços na hora. Bom para o começo e o fim da viagem, ou qualquer noite em que você só quer uma mesa, um chuveiro e café da manhã embaixo.',
    'zh-CN': '要在酒店过夜时，罗瓦涅米的设计房、列维和 Ylläs 的滑雪即达住宿、公寓式酒店，Trip.com 提供丰富的房源选择，价格实时更新。适合旅程的开头和结尾，或任何只想要一张书桌、一个淋浴和楼下早餐的夜晚。',
    ko: '호텔에서 묵는 밤을 위해. 로바니에미의 디자인 객실, 레비와 윌라스의 스키인 숙소, 아파트형 호텔까지 Trip.com에 다양한 객실이 실시간 가격으로 올라옵니다. 여행의 처음과 끝, 또는 책상과 샤워, 아래층 조식만 있으면 되는 어떤 밤에도 편합니다.',
    fr: 'Pour les nuits à l’hôtel : les chambres design de Rovaniemi, les adresses au pied des pistes à Levi et Ylläs, les apparthôtels. Trip.com propose un large choix de chambres aux prix du moment. Pratique au début et à la fin d’un voyage, ou n’importe quelle nuit où vous voulez juste un bureau, une douche et le petit-déjeuner en bas.',
    it: 'Per le notti in hotel: le camere di design a Rovaniemi, gli alloggi ski-in a Levi e Ylläs, gli aparthotel. Su Trip.com trova un’ampia scelta di camere con prezzi aggiornati. Comodo per l’inizio e la fine di un viaggio, o per qualsiasi notte in cui Le basta una scrivania, una doccia e la colazione di sotto.',
    nl: 'Voor de hotelnachten: de designkamers in Rovaniemi, de ski-in adressen in Levi en Ylläs, de aparthotels. Op Trip.com vindt u een ruime keuze aan kamers met actuele prijzen. Handig voor het begin en eind van een reis, of elke nacht dat u gewoon een bureau, een douche en ontbijt beneden wilt.',
    sv: 'För hotellnätterna: designrummen i Rovaniemi, ski-in-boendena i Levi och Ylläs, lägenhetshotellen. Trip.com listar ett brett urval rum med aktuella priser. Bra för början och slutet av en resa, eller vilken natt som helst då du bara vill ha ett skrivbord, en dusch och frukost en trappa ner.',
  });

  const trust: { icon: typeof BedDouble; label: string }[] = [
    {
      icon: Globe2,
      label: pick({
        en: 'Live prices and availability',
        fi: 'Ajantasaiset hinnat ja saatavuus',
        de: 'Live-Preise und Verfügbarkeit',
        ja: '最新価格と空室状況',
        es: 'Precios y disponibilidad al momento',
        'pt-BR': 'Preços e disponibilidade na hora',
        'zh-CN': '实时价格与空房',
        ko: '실시간 가격과 예약 가능 여부',
        fr: 'Prix et disponibilités en direct',
        it: 'Prezzi e disponibilità aggiornati',
        nl: 'Actuele prijzen en beschikbaarheid',
        sv: 'Aktuella priser och tillgänglighet',
      }),
    },
    {
      icon: CalendarCheck,
      label: pick({
        en: 'Instant booking confirmation',
        fi: 'Varausvahvistus heti',
        de: 'Sofortige Buchungsbestätigung',
        ja: '予約確認がすぐ届く',
        es: 'Confirmación inmediata de la reserva',
        'pt-BR': 'Confirmação imediata da reserva',
        'zh-CN': '预订即时确认',
        ko: '즉시 예약 확인',
        fr: 'Confirmation immédiate de la réservation',
        it: 'Conferma immediata della prenotazione',
        nl: 'Directe boekingsbevestiging',
        sv: 'Omedelbar bokningsbekräftelse',
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
        sv: 'Hotell, stugor och lägenheter',
      }),
    },
  ];

  const cta = pick({
    en: 'Check prices on Trip.com',
    fi: 'Katso hinnat Sembosta',
    de: 'Preise auf Trip.com ansehen',
    ja: 'Trip.com で料金を見る',
    es: 'Ver precios en Trip.com',
    'pt-BR': 'Ver preços na Trip.com',
    'zh-CN': '在 Trip.com 查看价格',
    ko: 'Trip.com에서 가격 확인',
    fr: 'Voir les prix sur Trip.com',
    it: 'Veda i prezzi su Trip.com',
    nl: 'Bekijk prijzen op Trip.com',
    sv: 'Se priser på Trip.com',
  });

  const poweredBy = pick({
    en: 'Booking with Trip.com',
    fi: 'Varaus Sembon kautta',
    de: 'Buchung über Trip.com',
    ja: '予約は Trip.com 経由',
    es: 'Reserva con Trip.com',
    'pt-BR': 'Reserva com a Trip.com',
    'zh-CN': '由 Trip.com 提供预订',
    ko: 'Trip.com을 통한 예약',
    fr: 'Réservation via Trip.com',
    it: 'Prenotazione con Trip.com',
    nl: 'Boeking via Trip.com',
    sv: 'Bokning via Trip.com',
  });

  return (
    <section
      ref={rootRef}
      data-anim={animState}
      className={`sl-hp-ad group/ad relative overflow-hidden rounded-3xl bg-white text-charcoal shadow-[0_24px_70px_-30px_rgba(19,35,79,0.42)] ring-1 ring-charcoal/5 ${className}`}
      style={{ borderTop: `3px solid ${brand.accent}` }}
      aria-label={headline}
    >
      <style>{`
        .sl-hp-ad[data-anim='pending'] .sl-rise { opacity: 0; transform: translateY(14px); }
        .sl-hp-ad[data-anim='in'] .sl-rise {
          opacity: 1; transform: none;
          transition: opacity .6s ease, transform .6s cubic-bezier(.22,.61,.36,1);
        }
        .sl-hp-ad[data-anim='in'] .sl-rise-1 { transition-delay: .05s; }
        .sl-hp-ad[data-anim='in'] .sl-rise-2 { transition-delay: .14s; }
        .sl-hp-ad[data-anim='in'] .sl-rise-3 { transition-delay: .23s; }
        @media (prefers-reduced-motion: reduce) {
          .sl-hp-ad .sl-rise { opacity: 1 !important; transform: none !important; transition: none !important; }
        }
      `}</style>

      {/* Soft brand-tint wash, top-right — keeps the white card cool, on-brand. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full"
        style={{ background: `radial-gradient(closest-side, ${brand.accent}14, transparent)` }}
      />

      <div className="relative p-6 sm:p-8 lg:p-10">
        {/* Header row: icon badge + Ad label + eyebrow + brand wordmark */}
        <div className="sl-rise sl-rise-1 mb-5 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
              style={{ background: `${brand.accent}12`, boxShadow: `inset 0 0 0 1px ${brand.accent}33` }}
            >
              <BedDouble className="h-5 w-5" style={{ color: brand.deep }} aria-hidden="true" />
            </div>
            <div className="flex flex-col gap-1">
              <span
                className="inline-flex w-fit items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em]"
                style={{ background: `${brand.accent}12`, color: brand.deep }}
              >
                {adLabel}
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: brand.deep }}>
                {eyebrow}
              </p>
            </div>
          </div>
          {/* Brand wordmark — typographic (no licensed logo asset; see header note). */}
          <span
            className="shrink-0 font-body text-xl sm:text-2xl font-extrabold tracking-tight leading-none select-none"
            style={{ color: brand.deep }}
            aria-label={brand.name}
          >
            {brand.name}
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
                  <tp.icon className="h-4 w-4 shrink-0" style={{ color: brand.deep }} aria-hidden="true" />
                  <span>{tp.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA — partner-brand pill so the unit reads as their own placement. */}
          <div className="sl-rise sl-rise-3 lg:text-right shrink-0">
            <a
              href={buildHref(sid, ss, lang)}
              target="_blank"
              rel="sponsored nofollow noopener"
              data-sid={sid}
              className="group/cta inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-white font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 no-underline whitespace-nowrap"
              style={{ backgroundColor: brand.deep, boxShadow: `0 14px 30px -12px ${brand.deep}99` }}
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
