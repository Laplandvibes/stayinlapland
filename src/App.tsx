import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useReducer, lazy, Suspense, type ReactNode } from 'react';
import Nav from './components/Nav';
import CookieBanner from '../../shared/CookieBanner';
import Footer from '../../shared/Footer';
import NewsletterPopup from '../../shared/NewsletterPopup';

const Home = lazy(() => import('./pages/Home'))
const LongStays = lazy(() => import('./pages/LongStays'))
const Hotels = lazy(() => import('./pages/Hotels'))
const GlassIgloos = lazy(() => import('./pages/GlassIgloos'))
const WildernessLodges = lazy(() => import('./pages/WildernessLodges'))
const BookingGuide = lazy(() => import('./pages/BookingGuide'))
const WhenToGo = lazy(() => import('./pages/WhenToGo'))
const DestinationPage = lazy(() => import('./pages/DestinationPage'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Terms = lazy(() => import('./pages/Terms'))
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'))
const NotFound = lazy(() => import('./pages/NotFound'))
import LocaleAutoRedirect from './i18n/LocaleAutoRedirect';
import { useHtmlLang, useLang, type Lang } from './i18n/useLang';
import { getCopy, isCopyLoaded, loadCopy } from './locales/copy';
import LocaleHead from './components/LocaleHead';

/**
 * Non-EN copy lives in per-language lazy chunks (see locales/copy.ts).
 * Gate the chrome + route tree until the active language's chunk is
 * registered, so getCopy(lang) returns the right language everywhere.
 * EN is bundled eagerly — English visitors never hit the gate.
 */
function CopyGate({ children }: { children: ReactNode }) {
  const lang = useLang();
  const [, bump] = useReducer((x: number) => x + 1, 0);
  useEffect(() => {
    let alive = true;
    if (!isCopyLoaded(lang)) loadCopy(lang).then(() => { if (alive) bump(); });
    return () => { alive = false; };
  }, [lang]);
  if (!isCopyLoaded(lang)) return <div className="min-h-screen bg-cream" />;
  return <>{children}</>;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function LocaleSync() {
  const lang = useHtmlLang();
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}

function LocalisedCookieBanner() {
  const lang = useLang();
  return <CookieBanner consentKey="stayinlapland_cookie_consent" lang={lang} />;
}

const SIDE_STRIPE_BG =
  'linear-gradient(to right, #002F6C 0 30%, #F8FAFC 30% 70%, #002F6C 70% 100%)';

// Footer pillar links — labels are sourced from the site's localized nav copy
// (copy.<lang>.ts → nav.*) so the shared Footer renders in the active locale
// instead of hardcoded English on /fi /de /ja … routes.
function buildPillarLinks(lang: Lang) {
  const nav = getCopy(lang).nav;
  return [
    { name: nav.longStays, href: '/long-stays' },
    { name: nav.hotels, href: '/hotels' },
    { name: nav.glassIgloos, href: '/glass-igloos' },
    { name: nav.wilderness, href: '/wilderness' },
    { name: nav.whenToGo, href: '/when-to-go' },
    { name: nav.bookingGuide, href: '/booking-guide' },
  ];
}

// Site-specific newsletter popup copy (long-stay angle), translated natively for
// all 11 locales. Replaces the previously hardcoded-English headline/description
// that surfaced on every locale.
const POPUP_COPY: Record<Lang, { headline: string; description: string }> = {
  'en': {
    headline: 'Long-stay openings, off-season rates, design-hotel inventory.',
    description: 'Subscribers get the heads-up when our most-booked Lapland properties release multi-week inventory, plus the off-season weeks (November, late April) when nightly rates drop 50% but the aurora is still active.',
  },
  'fi': {
    headline: 'Pitkien oleskelujen paikat, sesongin ulkopuoliset hinnat, designhotellit.',
    description: 'Tilaajat saavat vinkin, kun varatuimmat Lapin kohteemme vapauttavat monen viikon majoitusta. Kerromme myös sesongin ulkopuoliset viikot (marraskuu, huhtikuun loppu), jolloin yöhinnat putoavat 50 % mutta revontulet näkyvät yhä.',
  },
  'de': {
    headline: 'Langzeit-Verfügbarkeiten, Nebensaison-Preise, Designhotels.',
    description: 'Abonnenten erfahren als Erste, wenn unsere meistgebuchten Lappland-Unterkünfte mehrwöchige Kontingente freigeben. Dazu nennen wir die Nebensaison-Wochen (November, Ende April), in denen die Übernachtungspreise um 50 % sinken, während die Polarlichter noch aktiv sind.',
  },
  'ja': {
    headline: '長期滞在の空き、オフシーズン料金、デザインホテルの在庫。',
    description: '人気の高いラップランドの宿が数週間単位の在庫を出すタイミングを、購読者にいち早くお知らせします。さらに、宿泊料金が50%下がりながらもオーロラが見られるオフシーズンの週（11月、4月下旬）も。',
  },
  'es': {
    headline: 'Plazas para estancias largas, tarifas de temporada baja, hoteles de diseño.',
    description: 'Los suscriptores reciben el aviso cuando nuestros alojamientos más reservados de Laponia liberan disponibilidad de varias semanas, además de las semanas de temporada baja (noviembre, finales de abril) en las que las tarifas por noche bajan un 50 % pero la aurora sigue activa.',
  },
  'pt-BR': {
    headline: 'Vagas para estadias longas, tarifas de baixa temporada, hotéis de design.',
    description: 'Os assinantes são avisados primeiro quando nossas acomodações mais procuradas da Lapônia liberam disponibilidade de várias semanas, além das semanas de baixa temporada (novembro, fim de abril) em que as diárias caem 50% mas a aurora continua ativa.',
  },
  'zh-CN': {
    headline: '长住空房、淡季房价、设计酒店房源。',
    description: '当我们预订最热门的拉普兰住宿放出数周连住房源时，订阅者会第一时间收到通知；还有淡季时段（11 月、4 月下旬），每晚房价下降 50%，但极光依然活跃。',
  },
  'ko': {
    headline: '장기 숙박 가능 객실, 비수기 요금, 디자인 호텔 정보.',
    description: '예약이 가장 많은 라플란드 숙소가 몇 주 단위 객실을 풀 때 구독자가 가장 먼저 소식을 받습니다. 더불어 1박 요금이 50% 떨어지지만 오로라는 여전히 활발한 비수기 주간(11월, 4월 말)도 안내해 드립니다.',
  },
  'fr': {
    headline: 'Disponibilités longue durée, tarifs hors saison, hôtels de design.',
    description: 'Les abonnés sont prévenus en premier lorsque nos hébergements lapons les plus réservés libèrent des disponibilités de plusieurs semaines, ainsi que les semaines hors saison (novembre, fin avril) où les tarifs à la nuit chutent de 50 % alors que les aurores restent actives.',
  },
  'it': {
    headline: 'Disponibilità per soggiorni lunghi, tariffe di bassa stagione, hotel di design.',
    description: 'Gli iscritti vengono avvisati per primi quando le nostre strutture più prenotate della Lapponia rilasciano disponibilità di più settimane, oltre alle settimane di bassa stagione (novembre, fine aprile) in cui le tariffe per notte calano del 50% ma l’aurora è ancora attiva.',
  },
  'nl': {
    headline: 'Beschikbaarheid voor langere verblijven, laagseizoentarieven, designhotels.',
    description: 'Abonnees krijgen als eersten bericht wanneer onze meest geboekte accommodaties in Lapland beschikbaarheid voor meerdere weken vrijgeven, plus de laagseizoenweken (november, eind april) waarin de overnachtingsprijzen 50% dalen terwijl het noorderlicht nog actief is.',
  },
  'sv': {
    headline: 'Lediga långtidsvistelser, lågsäsongspriser, designhotell.',
    description: 'Prenumeranter får veta först när våra mest bokade boenden i Lappland släpper flerveckorsplatser, plus lågsäsongsveckorna (november, slutet av april) då dygnspriserna sjunker 50 % men norrskenet fortfarande är aktivt.',
  },
};

const LOCALE_PREFIXES = ['', '/fi', '/de', '/ja', '/es', '/br', '/cn', '/kr', '/fr', '/it', '/nl', '/sv'] as const;

const SUPABASE_URL = (import.meta.env.VITE_SUPABASE_URL as string) ?? '';
const SUPABASE_ANON_KEY = (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string) ?? '';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LocaleAutoRedirect />
      <LocaleSync />
      <LocaleHead />

      {/* Finnish-flag side stripes (LV spec §11b) */}
      <div
        className="fixed left-0 top-0 h-full w-[5px] sm:w-[7px] z-50 pointer-events-none"
        style={{ background: SIDE_STRIPE_BG }}
        aria-hidden="true"
      />
      <div
        className="fixed right-0 top-0 h-full w-[5px] sm:w-[7px] z-50 pointer-events-none"
        style={{ background: SIDE_STRIPE_BG }}
        aria-hidden="true"
      />

      <CopyGate>
      <Nav />
      <main className="pt-16 bg-cream">
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
          {LOCALE_PREFIXES.map((prefix) => (
            <Route key={`${prefix}-root`} path={prefix || '/'} element={<Home />} />
          ))}
          {LOCALE_PREFIXES.flatMap((prefix) => [
            <Route key={`${prefix}-ls`} path={`${prefix}/long-stays`} element={<LongStays />} />,
            <Route key={`${prefix}-ht`} path={`${prefix}/hotels`} element={<Hotels />} />,
            <Route key={`${prefix}-gi`} path={`${prefix}/glass-igloos`} element={<GlassIgloos />} />,
            <Route key={`${prefix}-wd`} path={`${prefix}/wilderness`} element={<WildernessLodges />} />,
            <Route key={`${prefix}-wt`} path={`${prefix}/when-to-go`} element={<WhenToGo />} />,
            <Route key={`${prefix}-bg`} path={`${prefix}/booking-guide`} element={<BookingGuide />} />,
            <Route key={`${prefix}-ds`} path={`${prefix}/destinations/:slug`} element={<DestinationPage />} />,
            <Route key={`${prefix}-pr`} path={`${prefix}/privacy`} element={<PrivacyPolicy />} />,
            <Route key={`${prefix}-tm`} path={`${prefix}/terms`} element={<Terms />} />,
            <Route key={`${prefix}-ck`} path={`${prefix}/cookie-policy`} element={<CookiePolicy />} />,
          ])}
          {/* Catch-all — unknown URLs get the shared network 404 instead of a blank page. */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </main>
      <SiteChrome />
      </CopyGate>
    </BrowserRouter>
  );
}

// Locale-aware site chrome. Lives inside <BrowserRouter> so it can read the
// active locale via useLang() and feed localized strings to the shared Footer
// and NewsletterPopup (both previously received hardcoded English).
function SiteChrome() {
  const lang = useLang();
  const popup = POPUP_COPY[lang];
  return (
    <>
      <Footer pillarLinks={buildPillarLinks(lang)} />

      <LocalisedCookieBanner />
      {SUPABASE_URL && SUPABASE_ANON_KEY && (
        <NewsletterPopup
          siteId="stayinlapland"
          brandWord="LAPLAND"
          lang={lang}
          headline={popup.headline}
          description={popup.description}
          supabaseUrl={SUPABASE_URL}
          supabaseAnonKey={SUPABASE_ANON_KEY}
        />
      )}
    </>
  );
}
