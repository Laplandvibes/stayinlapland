import Breadcrumbs from '../shared/Breadcrumbs';
import { useLang, useLocalePath } from '../i18n/useLang';
import { getCopy } from '../locales/copy';
import { HOUSING_NAV, HOUSING_ROUTES } from '../housing/labels';

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
    '/when-to-go': c.nav.whenToGo,
    '/booking-guide': c.nav.bookingGuide,
    // Asumissivut (rooli §23): otsikot 12 kielellä labels.ts:stä.
    [HOUSING_ROUTES.rentals]: HOUSING_NAV.rentals[lang],
    [HOUSING_ROUTES.seasonal]: HOUSING_NAV.seasonal[lang],
    [HOUSING_ROUTES.moving]: HOUSING_NAV.moving[lang],
    [HOUSING_ROUTES.cost]: HOUSING_NAV.cost[lang],
    // Paikkakuntasivut → paikannimet (samat kaikilla kielillä).
    [`${HOUSING_ROUTES.rentals}/rovaniemi`]: 'Rovaniemi',
    [`${HOUSING_ROUTES.rentals}/kemi-tornio`]: 'Kemi – Tornio',
    [`${HOUSING_ROUTES.rentals}/kemijarvi`]: 'Kemijärvi',
    [`${HOUSING_ROUTES.rentals}/sodankyla`]: 'Sodankylä',
    [`${HOUSING_ROUTES.rentals}/kittila-levi`]: 'Kittilä – Levi',
    [`${HOUSING_ROUTES.rentals}/ivalo-inari`]: 'Ivalo – Inari',
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
