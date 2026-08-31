import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ShieldCheck, BadgeCheck, Home, Headset } from 'lucide-react';
import AffiliateDisclosure from './AffiliateDisclosure';
import { useLang, type Lang } from '../i18n/useLang';
import { buildLomarengasUrl } from '../lib/lomarengas';

/**
 * FLAGSHIP affiliate ad — Lomarengas (Adtraction), Finland's largest holiday-
 * home booking service (since 1967). This is the natural primary partner for a
 * long-stay accommodation site: where the hotel partner covers hotels and resort
 * cabins, Lomarengas covers privately-owned cottages and cabins rented by the
 * week — exactly the "rent a cabin for a week and settle in" gap this site is
 * about.
 *
 * Skinned in the ADVERTISER's OWN brand (premium_design_standard §6: "mainos
 * pitää olla heidän brändin mukainen, ei meidän"). Lomarengas's identity is a
 * golden-yellow sun mark + a deep navy-blue wordmark on white. So the card is a
 * warm, light, sunny unit that sits as a distinct framed "Mainos / Ad" block on
 * the cream page, with their real logo and brand-coloured CTA.
 *
 * Offer hook — compliance-safe, EVERGREEN only:
 *   • 4,400+ handpicked, personally-inspected holiday homes across Finland
 *     (structural, published on lomarengas.fi — never goes stale).
 *   • Every booking includes free cancellation insurance (IF) — a standing,
 *     always-true Lomarengas product feature, not a time-limited promo.
 *   • Real human customer service; trusted since 1967.
 * NO discount-% / sale claim is shown (would be time-limited = stale = against
 * the brand "no fake data" rule, and discount-code marketing isn't enabled for
 * us on this program). The only numbers are Lomarengas's own published facts.
 *
 * Required affiliate attributes (LV spec): target="_blank"
 * rel="sponsored nofollow noopener" — NO `noreferrer` (the Worker reads Referer
 * for attribution; this Adtraction t/t link already carries the channel).
 *
 * Animation is pure CSS/Tailwind (one-shot scroll reveal + soft sun-ray glow),
 * fully disabled under prefers-reduced-motion. No Framer Motion / GSAP.
 */

/** Lomarengas brand: deep navy-blue wordmark + golden-yellow sun mark. */
const LOMA_NAVY = '#1E3A8A';
const LOMA_NAVY_DEEP = '#172E6E';
const LOMA_SUN = '#F4C20D';

// [LV-PERM-5 2026-08-09] Vanha vakio LOMA_LINK (sid=sil_lomarengas, ei destiä)
// ohitti sid-propin JA pudotti lomarengas.fi:n ETUSIVULLE — href rakennetaan
// nyt lib/lomarengas.ts:n verifioidulla aluesyvälinkillä (lappi) ja sid tulee
// kutsupaikasta (LongStays: long_stays_cottages).

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

export default function LomarengasAd({
  sid = 'long_stays_cottages',
  className = '',
}: {
  sid?: string;
  className?: string;
}) {
  const lang = useLang();
  const href = buildLomarengasUrl('lapland', sid, lang);

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
    en: 'Finnish holiday cottages',
    fi: 'Suomalaiset lomamökit',
    de: 'Finnische Ferienhäuser',
    ja: 'フィンランドのコテージ',
    es: 'Cabañas de vacaciones en Finlandia',
    'pt-BR': 'Chalés de férias na Finlândia',
    'zh-CN': '芬兰度假小屋',
    ko: '핀란드 휴가용 코티지',
    fr: 'Chalets de vacances finlandais',
    it: 'Baite per vacanze in Finlandia',
    nl: 'Finse vakantiehuisjes',
    sv: 'Finska semesterstugor',
  });

  // Two short, human sentences. Warm puhekieli in FI; no em-dash poetry.
  const headline = pick({
    en: 'Want a whole cabin to yourselves for the week? Lomarengas rents out privately-owned Finnish cottages.',
    fi: 'Haluatko oman mökin koko viikoksi? Lomarengas vuokraa yksityisten omistamia suomalaisia lomamökkejä.',
    de: 'Lieber ein ganzes Häuschen für die Woche ganz für Sie allein? Lomarengas vermietet privat geführte finnische Ferienhäuser.',
    ja: '一週間、まるごと一棟を自分たちだけで。Lomarengas は個人所有のフィンランドのコテージを貸し出しています。',
    es: '¿Queréis una cabaña entera para vosotros toda la semana? Lomarengas alquila cabañas finlandesas de propietarios particulares.',
    'pt-BR': 'Quer um chalé inteiro só para vocês a semana toda? A Lomarengas aluga chalés finlandeses de proprietários particulares.',
    'zh-CN': '想整周独享一整栋小屋吗？Lomarengas 出租芬兰私人业主的度假小屋。',
    ko: '일주일 동안 통째로 빌리고 싶으세요? Lomarengas는 개인 소유의 핀란드 코티지를 빌려드립니다.',
    fr: 'Envie d’un chalet entier rien qu’à vous pour la semaine ? Lomarengas loue des chalets finlandais de propriétaires privés.',
    it: 'Vuole una baita intera tutta per sé per una settimana? Lomarengas affitta baite finlandesi di proprietari privati.',
    nl: 'Een heel huisje voor jezelf de hele week? Lomarengas verhuurt particuliere Finse vakantiehuisjes.',
    sv: 'Vill ni ha en hel stuga för er själva hela veckan? Lomarengas hyr ut privatägda finska semesterstugor.',
  });

  const sub = pick({
    en: 'Lomarengas has been the home of Finnish holiday homes since 1967: over 4,400 handpicked cottages, every owner verified and every place personally checked. The proper lakeside or fell cabin with its own sauna that the big hotel sites just don’t list.',
    fi: 'Lomarengas on ollut suomalaisten lomamökkien koti vuodesta 1967: yli 4 400 käsin valittua mökkiä, jokainen omistaja tarkistettu ja jokainen kohde käyty läpi. Juuri se järven- tai tunturinrantamökki omalla saunalla, jollaista isot hotellisivut eivät listaa.',
    de: 'Lomarengas ist seit 1967 die Heimat finnischer Ferienhäuser: über 4 400 handverlesene Häuschen, jeder Eigentümer geprüft, jedes Objekt persönlich kontrolliert. Genau das Häuschen am See oder Fjell mit eigener Sauna, das die großen Hotelseiten einfach nicht führen.',
    ja: 'Lomarengas は 1967 年からフィンランドのコテージの拠点。4,400 軒以上の厳選された物件は、オーナーも一軒一軒も確認済みです。大手ホテルサイトには載らない、湖畔やフェルのサウナ付きの一棟まるごとが見つかります。',
    es: 'Lomarengas es el hogar de las cabañas finlandesas desde 1967: más de 4400 cabañas seleccionadas a mano, con cada propietario verificado y cada alojamiento revisado en persona. La cabaña junto al lago o la montaña, con su propia sauna, que las grandes webs de hoteles no incluyen.',
    'pt-BR': 'A Lomarengas é a casa dos chalés finlandeses desde 1967: mais de 4.400 chalés escolhidos a dedo, cada proprietário verificado e cada lugar conferido pessoalmente. O chalé à beira do lago ou da montanha, com sauna própria, que os grandes sites de hotéis simplesmente não listam.',
    'zh-CN': '自 1967 年以来，Lomarengas 一直是芬兰度假小屋的大本营，4,400 多套精选小屋，每位业主都经过核实，每处都亲自查验。那种带私人桑拿、靠湖或靠山的整栋小屋，大型酒店网站根本没有。',
    ko: 'Lomarengas는 1967년부터 핀란드 코티지의 본거지입니다. 4,400채가 넘는 엄선된 코티지는 모든 집주인을 확인하고 모든 숙소를 직접 점검합니다. 대형 호텔 사이트에는 없는, 전용 사우나가 딸린 호숫가나 산속 코티지를 만나보세요.',
    fr: 'Lomarengas est la maison des chalets finlandais depuis 1967 : plus de 4 400 chalets sélectionnés à la main, chaque propriétaire vérifié et chaque logement contrôlé en personne. Le vrai chalet au bord du lac ou de la colline, avec son propre sauna, que les grands sites d’hôtels ne référencent pas.',
    it: 'Lomarengas è la casa delle baite finlandesi dal 1967: oltre 4 400 baite scelte a mano, ogni proprietario verificato e ogni alloggio controllato di persona. Proprio la baita sul lago o sul fjell, con la sua sauna, che i grandi siti di hotel non elencano.',
    nl: 'Lomarengas is sinds 1967 het thuis van Finse vakantiehuisjes: ruim 4.400 met de hand geselecteerde huisjes, elke eigenaar geverifieerd en elke plek persoonlijk gecontroleerd. Precies het huisje aan het meer of de heuvel, met eigen sauna, dat de grote hotelsites gewoon niet hebben.',
    sv: 'Lomarengas har varit de finska semesterstugornas hem sedan 1967: över 4 400 handplockade stugor, varje ägare kontrollerad och varje ställe personligen besiktigat. Just den där stugan vid sjön eller fjället med egen bastu som de stora hotellsajterna helt enkelt inte listar.',
  });

  const trust: { icon: typeof ShieldCheck; label: string }[] = [
    {
      icon: BadgeCheck,
      label: pick({
        en: '4,400+ verified cottages',
        fi: 'Yli 4 400 tarkistettua mökkiä',
        de: 'Über 4 400 geprüfte Häuschen',
        ja: '4,400 軒以上の確認済み物件',
        es: 'Más de 4400 cabañas verificadas',
        'pt-BR': 'Mais de 4.400 chalés verificados',
        'zh-CN': '4,400+ 套已核实小屋',
        ko: '4,400채 이상 검증된 코티지',
        fr: 'Plus de 4 400 chalets vérifiés',
        it: 'Oltre 4 400 baite verificate',
        nl: 'Ruim 4.400 geverifieerde huisjes',
        sv: 'Över 4 400 kontrollerade stugor',
      }),
    },
    {
      icon: ShieldCheck,
      label: pick({
        en: 'Cancellation insurance on every booking',
        fi: 'Peruutusturva joka varaukseen',
        de: 'Stornoversicherung bei jeder Buchung',
        ja: '全予約にキャンセル保険付き',
        es: 'Seguro de cancelación en cada reserva',
        'pt-BR': 'Seguro de cancelamento em toda reserva',
        'zh-CN': '每笔预订均含取消保险',
        ko: '모든 예약에 취소 보험 포함',
        fr: 'Assurance annulation sur chaque réservation',
        it: 'Assicurazione annullamento su ogni prenotazione',
        nl: 'Annuleringsverzekering bij elke boeking',
        sv: 'Avbokningsskydd på varje bokning',
      }),
    },
    {
      icon: Headset,
      label: pick({
        en: 'Real people, since 1967',
        fi: 'Oikeita ihmisiä, jo vuodesta 1967',
        de: 'Echte Menschen, seit 1967',
        ja: '1967 年から、人による対応',
        es: 'Personas de verdad, desde 1967',
        'pt-BR': 'Gente de verdade, desde 1967',
        'zh-CN': '真人服务，始于 1967 年',
        ko: '사람이 직접, 1967년부터',
        fr: 'De vraies personnes, depuis 1967',
        it: 'Persone vere, dal 1967',
        nl: 'Echte mensen, sinds 1967',
        sv: 'Riktiga människor, sedan 1967',
      }),
    },
  ];

  const cta = pick({
    en: 'Find a cottage on Lomarengas',
    fi: 'Etsi mökki Lomarengasista',
    de: 'Häuschen bei Lomarengas finden',
    ja: 'Lomarengas でコテージを探す',
    es: 'Buscar cabaña en Lomarengas',
    'pt-BR': 'Buscar chalé na Lomarengas',
    'zh-CN': '在 Lomarengas 找小屋',
    ko: 'Lomarengas에서 코티지 찾기',
    fr: 'Trouver un chalet sur Lomarengas',
    it: 'Trovi una baita su Lomarengas',
    nl: 'Zoek een huisje op Lomarengas',
    sv: 'Hitta en stuga på Lomarengas',
  });

  const poweredBy = pick({
    en: 'Booking with Lomarengas',
    fi: 'Varaus Lomarengasin kautta',
    de: 'Buchung über Lomarengas',
    ja: '予約は Lomarengas 経由',
    es: 'Reserva con Lomarengas',
    'pt-BR': 'Reserva com a Lomarengas',
    'zh-CN': '由 Lomarengas 提供预订',
    ko: 'Lomarengas를 통한 예약',
    fr: 'Réservation via Lomarengas',
    it: 'Prenotazione con Lomarengas',
    nl: 'Boeking via Lomarengas',
    sv: 'Bokning via Lomarengas',
  });

  return (
    <section
      ref={rootRef}
      data-anim={animState}
      className={`sl-loma-ad group/ad relative overflow-hidden rounded-3xl bg-white text-charcoal shadow-[0_24px_70px_-30px_rgba(23,46,110,0.4)] ring-1 ring-charcoal/5 ${className}`}
      style={{ borderTop: `3px solid ${LOMA_SUN}` }}
      aria-label={headline}
    >
      <style>{`
        .sl-loma-ad[data-anim='pending'] .sl-rise { opacity: 0; transform: translateY(14px); }
        .sl-loma-ad[data-anim='in'] .sl-rise {
          opacity: 1; transform: none;
          transition: opacity .6s ease, transform .6s cubic-bezier(.22,.61,.36,1);
        }
        .sl-loma-ad[data-anim='in'] .sl-rise-1 { transition-delay: .05s; }
        .sl-loma-ad[data-anim='in'] .sl-rise-2 { transition-delay: .14s; }
        .sl-loma-ad[data-anim='in'] .sl-rise-3 { transition-delay: .23s; }

        /* Sun mark: gentle scale-in + slow continuous pulse of its glow. */
        .sl-loma-ad[data-anim='pending'] .sl-sun { opacity: 0; transform: scale(.9); }
        .sl-loma-ad[data-anim='in'] .sl-sun {
          opacity: 1; transform: none;
          transition: opacity .7s ease, transform .8s cubic-bezier(.22,.61,.36,1);
        }
        .sl-loma-ad .sl-sunglow { opacity: 0; }
        .sl-loma-ad[data-anim='in'] .sl-sunglow { animation: sl-sun 7s ease-in-out 1s infinite; }
        @keyframes sl-sun {
          0%,100% { opacity: .5; transform: scale(1); }
          50%     { opacity: .85; transform: scale(1.08); }
        }
        @media (prefers-reduced-motion: reduce) {
          .sl-loma-ad .sl-rise,
          .sl-loma-ad .sl-sun { opacity: 1 !important; transform: none !important; transition: none !important; }
          .sl-loma-ad .sl-sunglow { animation: none !important; opacity: .55 !important; }
        }
      `}</style>

      {/* Soft sunny wash, top-right — keeps the white card warm, on-brand. */}
      <div
        aria-hidden="true"
        className="sl-sunglow pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full"
        style={{ background: `radial-gradient(closest-side, ${LOMA_SUN}33, transparent)` }}
      />

      <div className="relative p-6 sm:p-8 lg:p-10">
        {/* Header row: sun badge + Ad label + eyebrow + real partner logo */}
        <div className="sl-rise sl-rise-1 mb-5 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="sl-sun flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
              style={{ background: `${LOMA_SUN}22`, boxShadow: `inset 0 0 0 1px ${LOMA_SUN}55` }}
            >
              <Home className="h-5 w-5" style={{ color: LOMA_NAVY }} aria-hidden="true" />
            </div>
            <div className="flex flex-col gap-1">
              <span
                className="inline-flex w-fit items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em]"
                style={{ background: `${LOMA_NAVY}14`, color: LOMA_NAVY }}
              >
                {adLabel}
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: LOMA_NAVY }}>
                {eyebrow}
              </p>
            </div>
          </div>
          <img
            src="/images/partners/lomarengas.png"
            alt="Lomarengas"
            width={300}
            height={100}
            loading="lazy"
            decoding="async"
            className="h-8 w-auto shrink-0 sm:h-9"
          />
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
                  <tp.icon className="h-4 w-4 shrink-0" style={{ color: LOMA_NAVY }} aria-hidden="true" />
                  <span>{tp.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA — Lomarengas navy pill so the unit reads as their own placement. */}
          <div className="sl-rise sl-rise-3 lg:text-right shrink-0">
            <a
              href={href}
              target="_blank"
              rel="sponsored nofollow noopener"
              data-sid={sid}
              className="group/cta inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-white font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 no-underline whitespace-nowrap"
              style={{ backgroundColor: LOMA_NAVY, boxShadow: `0 14px 30px -12px ${LOMA_NAVY_DEEP}99` }}
            >
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
