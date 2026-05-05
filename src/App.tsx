import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav';
import CookieBanner from './components/CookieBanner';
import Footer from '../../shared/Footer';
import NewsletterPopup from '../../shared/NewsletterPopup';

import Home from './pages/Home';
import LongStays from './pages/LongStays';
import Hotels from './pages/Hotels';
import GlassIgloos from './pages/GlassIgloos';
import WildernessLodges from './pages/WildernessLodges';
import BookingGuide from './pages/BookingGuide';
import WhenToGo from './pages/WhenToGo';
import DestinationPage from './pages/DestinationPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import CookiePolicy from './pages/CookiePolicy';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const SIDE_STRIPE_BG =
  'linear-gradient(to right, #002F6C 0 30%, #F8FAFC 30% 70%, #002F6C 70% 100%)';

const pillarLinks = [
  { name: 'Long Stays', href: '/long-stays' },
  { name: 'Hotels', href: '/hotels' },
  { name: 'Glass Igloos', href: '/glass-igloos' },
  { name: 'Wilderness', href: '/wilderness' },
  { name: 'When to Go', href: '/when-to-go' },
  { name: 'Booking Guide', href: '/booking-guide' },
];

const SUPABASE_URL = (import.meta.env.VITE_SUPABASE_URL as string) ?? '';
const SUPABASE_ANON_KEY = (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string) ?? '';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

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

      <Nav />
      <main className="pt-16 bg-cream">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/long-stays" element={<LongStays />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/glass-igloos" element={<GlassIgloos />} />
          <Route path="/wilderness" element={<WildernessLodges />} />
          <Route path="/when-to-go" element={<WhenToGo />} />
          <Route path="/booking-guide" element={<BookingGuide />} />
          <Route path="/destinations/:slug" element={<DestinationPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </main>
      <Footer pillarLinks={pillarLinks} />

      <CookieBanner consentKey="stayinlapland_cookie_consent" />
      {SUPABASE_URL && SUPABASE_ANON_KEY && (
        <NewsletterPopup
          siteId="stayinlapland"
          brandWord="LAPLAND"
          headline="Long-stay openings, off-season rates, design-hotel inventory."
          description="Subscribers get the heads-up when our most-booked Lapland properties release multi-week inventory — and the off-season weeks (November, late April) when nightly rates drop 50% but the aurora is still active."
          supabaseUrl={SUPABASE_URL}
          supabaseAnonKey={SUPABASE_ANON_KEY}
        />
      )}
    </BrowserRouter>
  );
}
