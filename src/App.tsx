import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useReducer, lazy, Suspense, type ReactNode } from 'react';
import Nav from './components/Nav';
import CookieBanner from './shared/CookieBanner';
import Footer from './shared/Footer';
import NewsletterPopup from './shared/NewsletterPopup';

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
/**
 * 🔴 The app layout's landmark, EXCEPT on /terms.
 *
 * shared/Legal/TermsContent opens its own <main>; nesting it inside this one is
 * invalid HTML and gives a screen reader two "main" regions. Its siblings
 * PrivacyContent/CookieContent open a <div>, so only /terms is affected.
 * Measured from the rendered DOM 2026-08-13 (12 network sites) -- the raw HTML
 * has zero <main> elements, so this is invisible to grep.
 *
 * Do NOT "simplify" this back to a plain <main>.
 */
function MainOrDiv({ children }: { children?: ReactNode }) {
  const { pathname } = useLocation();
  const Tag = /(^|\/)terms\/?$/.test(pathname) ? 'div' : 'main';
  return <Tag className="pt-16 bg-cream">{children}</Tag>;
}

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
      <MainOrDiv>
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
      </MainOrDiv>
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
      {/*
        Signup goes through the same-origin Pages Function `/api/newsletter`
        (functions/api/newsletter.ts), which proxies server-side to Supabase.
        Two reasons, both load-bearing:

        1. The shared `send-welcome-email` CORS allowlist only has
           laplandvibes.com — a direct browser → Supabase call from
           stayinlapland.com dies with "Failed to fetch".
        2. No client-side Supabase keys. This is why the popup used to be
           gated on `VITE_SUPABASE_URL && VITE_SUPABASE_PUBLISHABLE_KEY`:
           the repo has no .env, so both were '' and the popup NEVER
           rendered in production (verified live 2026-08-16). Do not
           reintroduce an env gate here — the endpoint needs no secrets.

        `brandWord="VIBES"` on purpose: the shared popup renders a fixed
        `#LAPLAND<brandWord>` lockup, which cannot spell this site's own
        `#STAYINLAPLAND` mark. The list and the welcome email are the one
        network-wide #LaplandVibes list, so that is the honest wordmark here
        (Vesa 2026-08-16). The previous `"LAPLAND"` would render
        `#LAPLANDLAPLAND`.
      */}
      <NewsletterPopup
        siteId="stayinlapland"
        brandWord="VIBES"
        lang={lang}
        endpoint="/api/newsletter"
      />
    </>
  );
}
