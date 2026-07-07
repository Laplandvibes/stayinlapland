import Breadcrumbs from '../../../shared/Breadcrumbs';
import { useLang, useLocalePath } from '../i18n/useLang';
import { getCopy } from '../locales/copy';

/**
 * Ecosystem breadcrumb, rendered BELOW the hero (mounted once inside PageHero)
 * so it reads as the first line of page content instead of a bar wedged between
 * the nav and the hero. Self-hides on home + unmapped routes (shared/Breadcrumbs
 * returns null there), so PageHero can mount it unconditionally.
 */
export default function PageBreadcrumb() {
  const lang = useLang();
  const to = useLocalePath();
  const c = getCopy(lang);
  const labelMap: Record<string, string> = {
    '/long-stays': c.nav.longStays,
    '/hotels': c.nav.hotels,
    '/glass-igloos': c.nav.glassIgloos,
    '/wilderness': c.nav.wilderness,
    '/when-to-go': c.nav.whenToGo,
    '/booking-guide': c.nav.bookingGuide,
    // Dynamic /destinations/:slug → static place names (locale-invariant proper nouns).
    '/destinations/rovaniemi': 'Rovaniemi',
    '/destinations/levi': 'Levi',
    '/destinations/saariselka': 'Saariselkä',
    '/destinations/inari': 'Inari',
    '/destinations/yllas': 'Ylläs',
  };
  return (
    <Breadcrumbs
      lang={lang}
      to={to}
      labelMap={labelMap}
      className="bg-cream text-charcoal border-b border-deep-night/10"
      accentClassName="hover:text-vibe-pink hover:opacity-100"
    />
  );
}
