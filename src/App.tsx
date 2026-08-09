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
import { AppPromoNudge } from './components/AppPromo';

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
    {/* App promo: engagement-triggered, never on arrival. */}
      <AppPromoNudge />
      </BrowserRouter>
  );
}

// Locale-aware site chrome. Lives inside <BrowserRouter> so it can read the
// active locale via useLang() and feed localized strings to the shared Footer
// and NewsletterPopup (both previously received hardcoded English).
function SiteChrome() {
  const lang = useLang();
  return (
    <>
      <Footer pillarLinks={buildPillarLinks(lang)} />

      <LocalisedCookieBanner />
      {SUPABASE_URL && SUPABASE_ANON_KEY && (
        <NewsletterPopup
          siteId="stayinlapland"
          brandWord="LAPLAND"
          lang={lang}
          supabaseUrl={SUPABASE_URL}
          supabaseAnonKey={SUPABASE_ANON_KEY}
        />
      )}
    </>
  );
}
