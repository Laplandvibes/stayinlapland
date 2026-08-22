import { useLang, useLocalePath } from '../i18n/useLang';
import { getCopy } from '../locales/copy';
import SharedNotFound from '../shared/NotFound';

// Thin wrapper around the shared LV-network 404 (see ../../../shared/NotFound.tsx
// for the design contract). This site is the cream/Playfair editorial variant
// (see index.css --color-cream, App.tsx `bg-cream`), so it overrides
// variant="light" rather than the network default deep-night. Supplies this
// site's language, home path, and a handful of its own pillar pages — reusing
// the localized nav copy already loaded by <CopyGate> in App.tsx — so an
// unknown URL still routes the visitor back into #StayInLapland instead of a
// dead end.
export default function NotFound() {
  const lang = useLang();
  const to = useLocalePath();
  const nav = getCopy(lang).nav;
  // landmark={false} because this site's app layout already renders the
  // page's <main>. Without it the 404 route shipped two nested landmarks --
  // measured from the rendered DOM 2026-08-13, invisible to grep.
  return (
    <SharedNotFound
      landmark={false}
      lang={lang}
      siteName="StayInLapland"
      homeHref={to('/')}
      variant="light"
      links={[
        { href: to('/long-stays'), label: nav.longStays },
        { href: to('/hotels'), label: nav.hotels },
        { href: to('/wilderness'), label: nav.wilderness },
      ]}
    />
  );
}
