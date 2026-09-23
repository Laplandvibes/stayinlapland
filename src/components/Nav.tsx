import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import AffiliateCTA from './AffiliateCTA';
import { useLang, useLocalePath, type Lang } from '../i18n/useLang';
import { getCopy } from '../locales/copy';
import { destinations } from '../data/properties';
import EcosystemMenu from '../shared/EcosystemMenu';
import LanguageSwitcher from '../i18n/LanguageSwitcher';
import { HOUSING_NAV, HOUSING_NAV_SHORT, HOUSING_ROUTES } from '../housing/labels';
import { staysHome } from '../lib/movedToStays';

/** Sama sivu loppukauttaviivasta riippumatta: sisääntulo on `/x/`, linkki voi olla `/x` (18.9.2026). */
const samePath = (a: string, b: string) => a.replace(/\/+$/, '') === b.replace(/\/+$/, '');

/** Navin linkkivärit kermalla: charcoal 14,9:1, #BE185D 5,4:1 (#EC4899 olisi 3,5:1).
 *  Aktiivinen sivu = tumma pinkki + alleviivaus, jotta tila ei ole pelkän värin varassa. */
const NAV_IDLE = 'text-charcoal hover:text-[#BE185D]';
const NAV_ACTIVE = 'text-[#BE185D] underline decoration-2 decoration-[#DB2777] underline-offset-[10px]';

// Destination pages had no entry point in the nav at all — the only way in was
// the grid halfway down the home page, so /destinations/* was effectively a
// dead end (Vesa 2026-07-26: "miten sinne navigoidaan?"). Label lives here
// rather than in the 12 copy files: one new string, one file.
const DESTINATIONS_LABEL: Record<Lang, string> = {
  en: 'Destinations', fi: 'Kohteet', sv: 'Destinationer', de: 'Reiseziele',
  fr: 'Destinations', es: 'Destinos', it: 'Destinazioni', nl: 'Bestemmingen',
  'pt-BR': 'Destinos', ja: 'エリア', ko: '지역', 'zh-CN': '目的地',
};

// 🔴 MITATTU 2026-08-17 (live, 1280 px, `header > div` slack CTA:n oikeaan reunaan):
// fi/de/nl/es = +24 px eli TASAN container-paddingin verran — rivi on rajalla.
// it = −21 px, fr = −186 px ("Parcourir les hébergements" + pisimmät navilabelit).
// Ranskan rivi ei siis mahdu 1280:een millään gap-viilauksella. Nama kaksi lokaalia
// saavat desktop-navin vasta 2xl:ssa (1536) ja siihen asti saman toimivan
// laatikkovalikon kuin mobiili — rikkinaisen, palkin ulkopuolelle vuotavan rivin
// sijaan. Lista on mittaustulos, ei arvaus: jos labelit lyhenevat, mittaa uudelleen.
//
// 2026-09-18 (rooli §23): ylätaso = neljä asumissivua (lyhyet nimikkeet,
// HOUSING_NAV_SHORT) + "Majoitus"-valikko, johon entiset kuusi lomasivua
// siirtyivät. Mitattu buildista 1280 px:ssä (logo↔rivi-rako, piilotetut pakotettu
// näkyviin): en 248, fi 181, sv 210, es 228, br 211, ja 359, kr 380, cn 431 px;
// de 26, nl 24, it 75 px ja fr vuotaa yli. fr/de/nl/it laatikkoon 2xl:ään asti:
// alle 100 px:n rako ei kestä fonttien varafontteja.
const WIDE_NAV_LOCALES: ReadonlySet<Lang> = new Set(['fr', 'it', 'nl', 'de']);

const STORAGE_KEY = 'lv_locale_choice';

const PREFIX_FOR: Record<Lang, string> = {
  en: '', fi: 'fi', de: 'de', ja: 'ja',
  es: 'es', 'pt-BR': 'br', 'zh-CN': 'cn',
  ko: 'kr', fr: 'fr', it: 'it', nl: 'nl', sv: 'sv',
};

const KNOWN_PREFIXES = ['/fi', '/de', '/ja', '/es', '/br', '/cn', '/kr', '/fr', '/it', '/nl', '/sv'];

function buildLink(pathname: string, target: Lang): string {
  // strip any known locale prefix
  let rest = pathname;
  for (const p of KNOWN_PREFIXES) {
    if (rest === p) { rest = '/'; break; }
    if (rest.startsWith(p + '/')) { rest = rest.slice(p.length); break; }
  }

  const prefix = PREFIX_FOR[target];
  if (!prefix) return rest === '' ? '/' : rest;
  if (rest === '/') return `/${prefix}`;
  return `/${prefix}${rest}`;
}

/** Suljettava pudotusvalikko (Kohteet, Majoitus). Sama toteutus molemmille. */
function useDismissable(open: boolean, close: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) close();
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
    }
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open, close]);
  return ref;
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);
  const [staysOpen, setStaysOpen] = useState(false);
  const destRef = useDismissable(destOpen, () => setDestOpen(false));
  const staysRef = useDismissable(staysOpen, () => setStaysOpen(false));

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const lang = useLang();
  const localePath = useLocalePath();
  const t = getCopy(lang);
  const wideNav = WIDE_NAV_LOCALES.has(lang);

  // Ylätaso: asuminen (rooli §23). Lomamajoitus on "Majoitus"-valikossa.
  const links = [
    { to: HOUSING_ROUTES.rentals, label: HOUSING_NAV.rentals[lang], short: HOUSING_NAV_SHORT.rentals[lang] },
    { to: HOUSING_ROUTES.seasonal, label: HOUSING_NAV.seasonal[lang], short: HOUSING_NAV_SHORT.seasonal[lang] },
    { to: HOUSING_ROUTES.moving, label: HOUSING_NAV.moving[lang], short: HOUSING_NAV_SHORT.moving[lang] },
    { to: HOUSING_ROUTES.cost, label: HOUSING_NAV.cost[lang], short: HOUSING_NAV_SHORT.cost[lang] },
  ];
  // Vaihe 2 (18.9.2026): hotellit, iglut ja erämaalodget siirtyivät laplandstays.comiin
  // (public/_redirects 301). Valikossa yksi ulkoinen linkki niiden tilalla.
  const stayLinks: { to?: string; href?: string; label: string }[] = [
    { to: '/long-stays', label: t.nav.longStays },
    { href: staysHome(lang), label: HOUSING_NAV.staysSite[lang] },
    { to: '/when-to-go', label: t.nav.whenToGo },
    { to: '/booking-guide', label: t.nav.bookingGuide },
  ];
  const staysActive = stayLinks.some(({ to }) => !!to && samePath(pathname, localePath(to)));

  function setLocale(target: Lang) {
    try {
      window.localStorage?.setItem(STORAGE_KEY, target);
    } catch {
      /* ignore */
    }
    navigate(buildLink(pathname, target));
    setOpen(false);
  }

  const langButtons: { code: Lang; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'fi', label: 'FI' },
    { code: 'de', label: 'DE' },
    { code: 'ja', label: 'JA' },
    { code: 'es', label: 'ES' },
    { code: 'pt-BR', label: 'BR' },
    { code: 'zh-CN', label: 'CN' },
    { code: 'ko', label: 'KR' },
    { code: 'fr', label: 'FR' },
    { code: 'it', label: 'IT' },
    { code: 'nl', label: 'NL' },
    { code: 'sv', label: 'SV' },
  ];

  const dropdownItemCls = (active: boolean) =>
    `block px-4 py-2.5 min-h-11 text-sm transition-colors ${active ? 'bg-vibe-pink/10 text-[#BE185D] font-semibold' : 'text-charcoal hover:bg-charcoal/5 hover:text-[#BE185D]'}`;

  return (
    // 🔴 Kiinteä tausta (Vesa 23.9.2026: "navigaation värimaailma ei toimi, erottuvuus tosi huono"):
    // bg-cream/85 + blur muuttui tumman osion päällä harmaaksi (~#D7D8D9), ja pinkki aktiivilinkki
    // jäi siinä noin 2,5:1:een. Kiinteä kerma + varjo pitää palkin samana joka osion päällä.
    <header className="fixed top-0 left-0 right-0 z-40 bg-cream border-b border-charcoal/10 shadow-[0_2px_12px_rgba(15,23,42,0.08)]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <EcosystemMenu lang={lang} currentDomain="stayinlapland.com" variant="light" />
          <Link to={localePath('/')} className="shrink-0 mr-2 inline-flex items-center min-h-11" aria-label={t.nav.homeAria}>
            <Logo size="sm" />
          </Link>
        </div>

        <nav className={`hidden ${wideNav ? '2xl:flex' : 'xl:flex'} items-center gap-3`}>
          {links.map(({ to, short }) => {
            const localized = localePath(to);
            const active = samePath(pathname, localized) || pathname.startsWith(`${localized}/`);
            return (
              <Link
                key={to}
                to={localized}
                // 🔴 Kosketuskorkeus 44 px: linkit olivat 20 px korkeita (pelkka tekstirivi),
                // 12 kielta x 3 leveytta = 112 loydosta. Logolinkki kaytti jo min-h-11:ta.
                className={`inline-flex items-center min-h-11 whitespace-nowrap text-[13px] font-medium transition-colors ${
                  active ? NAV_ACTIVE : NAV_IDLE
                }`}
              >
                {short}
              </Link>
            );
          })}

          {/* Majoitus-valikko: pitkät jaksot, ajoitus, varausopas + linkki staysille (vaihe 2, 18.9.2026) */}
          <div ref={staysRef} className="relative">
            <button
              type="button"
              onClick={() => setStaysOpen((o) => !o)}
              aria-haspopup="true"
              aria-expanded={staysOpen}
              className={`inline-flex items-center min-h-11 gap-1 whitespace-nowrap text-[13px] font-medium transition-colors ${
                staysActive ? NAV_ACTIVE : NAV_IDLE
              }`}
            >
              {HOUSING_NAV.stays[lang]}
              <ChevronDown size={12} className={staysOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
            </button>
            {staysOpen && (
              <ul className="absolute left-0 mt-2 min-w-[210px] w-max rounded-xl border border-charcoal/15 bg-white shadow-2xl py-1 z-50">
                {stayLinks.map(({ to, href, label }) => {
                  if (href) {
                    return (
                      <li key={href}>
                        <a href={href} target="_blank" rel="noopener" onClick={() => setStaysOpen(false)} className={`${dropdownItemCls(false)} flex items-center gap-1.5 whitespace-nowrap`} data-umami-event="housing_out" data-umami-event-page="nav" data-umami-event-target="laplandstays">
                          {label}
                          <ArrowUpRight size={13} className="shrink-0" />
                        </a>
                      </li>
                    );
                  }
                  const localized = localePath(to!);
                  return (
                    <li key={to}>
                      <Link to={localized} onClick={() => setStaysOpen(false)} className={dropdownItemCls(samePath(pathname, localized))}>
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* Destinations dropdown */}
          <div ref={destRef} className="relative">
            <button
              type="button"
              onClick={() => setDestOpen((o) => !o)}
              aria-haspopup="true"
              aria-expanded={destOpen}
              className={`inline-flex items-center min-h-11 gap-1 whitespace-nowrap text-[13px] font-medium transition-colors ${
                pathname.includes('/destinations/') ? NAV_ACTIVE : NAV_IDLE
              }`}
            >
              {DESTINATIONS_LABEL[lang]}
              <ChevronDown size={12} className={destOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
            </button>
            {destOpen && (
              <ul className="absolute left-0 mt-2 min-w-[190px] rounded-xl border border-charcoal/15 bg-white shadow-2xl py-1 z-50">
                {destinations.map((d) => {
                  const to = localePath(`/destinations/${d.slug}`);
                  return (
                    <li key={d.slug}>
                      <Link to={to} onClick={() => setDestOpen(false)} className={dropdownItemCls(samePath(pathname, to))}>
                        {d.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* Kielivalitsin — kanoninen LanguageMenu (koko verkosto) */}
          <div className="ml-1">
            <LanguageSwitcher tone={'light'} />
          </div>

          {/* 🔴 whitespace-nowrap + shrink-0 are load-bearing. Every nav LINK
              already had nowrap but this pill did not, so once the xl row got
              tight (Finnish "Selaa majoituksia", German "Unterkünfte ansehen")
              flex shrank the button and the label broke onto two lines inside a
              py-2 pill — the CTA rendered taller than the 64 px header row and
              read as broken. Same defect class as the 2026-08-09 network CTA
              sweep. The row buys the space back from the container gaps below. */}
          <AffiliateCTA
            partner="hotels"
            sid="nav_browse_stays"
            destination="Lapland Finland"
            className="ml-1 shrink-0 whitespace-nowrap px-4 py-2 bg-[#DB2777] hover:bg-[#BE185D] text-white text-sm font-semibold rounded-full transition-colors shadow-sm shadow-vibe-pink/30"
          >
            {t.nav.browseStays}
          </AffiliateCTA>
        </nav>

        <div className={`${wideNav ? '2xl:hidden' : 'xl:hidden'} flex items-center gap-2`}>
          <LanguageSwitcher tone={'light'} />
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-charcoal/80 inline-flex items-center justify-center min-h-11 min-w-11"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className={`${wideNav ? '2xl:hidden' : 'xl:hidden'} bg-cream border-t border-charcoal/10 px-4 py-4 flex flex-col gap-1 max-h-[calc(100svh-4rem)] overflow-y-auto`}>
          {links.map(({ to, label }) => {
            const localized = localePath(to);
            const active = samePath(pathname, localized) || pathname.startsWith(`${localized}/`);
            return (
              <Link
                key={to}
                to={localized}
                onClick={() => setOpen(false)}
                className={`block px-3 py-3 text-base font-medium rounded-lg transition-colors ${
                  active
                    ? 'text-vibe-pink bg-charcoal/[0.04]'
                    : 'text-charcoal/85 hover:text-vibe-pink hover:bg-charcoal/[0.04]'
                }`}
              >
                {label}
              </Link>
            );
          })}

          <p className="px-3 pt-4 pb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-stone">
            {HOUSING_NAV.stays[lang]}
          </p>
          {stayLinks.map(({ to, href, label }) => {
            if (href) {
              return (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-1.5 px-3 py-2.5 text-base font-medium rounded-lg transition-colors text-charcoal/85 hover:text-vibe-pink hover:bg-charcoal/[0.04]"
                  data-umami-event="housing_out"
                  data-umami-event-page="nav"
                  data-umami-event-target="laplandstays"
                >
                  {label}
                  <ArrowUpRight size={15} className="shrink-0" />
                </a>
              );
            }
            const localized = localePath(to!);
            const active = samePath(pathname, localized);
            return (
              <Link
                key={to}
                to={localized}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2.5 text-base font-medium rounded-lg transition-colors ${
                  active
                    ? 'text-vibe-pink bg-charcoal/[0.04]'
                    : 'text-charcoal/85 hover:text-vibe-pink hover:bg-charcoal/[0.04]'
                }`}
              >
                {label}
              </Link>
            );
          })}

          {/* Destinations, grouped so the pages are reachable on mobile too */}
          <p className="px-3 pt-4 pb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-stone">
            {DESTINATIONS_LABEL[lang]}
          </p>
          {destinations.map((d) => {
            const to = localePath(`/destinations/${d.slug}`);
            const active = samePath(pathname, to);
            return (
              <Link
                key={d.slug}
                to={to}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2.5 text-base font-medium rounded-lg transition-colors ${
                  active
                    ? 'text-vibe-pink bg-charcoal/[0.04]'
                    : 'text-charcoal/85 hover:text-vibe-pink hover:bg-charcoal/[0.04]'
                }`}
              >
                {d.name}
              </Link>
            );
          })}

          <div className="flex flex-wrap items-center gap-2 px-3 py-3 mt-2 border-t border-charcoal/10" role="group" aria-label="Language">
            {langButtons.map((b) => {
              const active = lang === b.code;
              return (
                <button
                  key={b.code}
                  type="button"
                  onClick={() => setLocale(b.code)}
                  aria-label={t.langSwitchAria[b.code]}
                  aria-pressed={active}
                  className={`px-3 py-1.5 min-h-11 rounded-full text-xs font-semibold tracking-wider border transition-colors ${
                    active
                      ? 'bg-vibe-pink text-snow border-vibe-pink'
                      : 'text-charcoal/70 border-charcoal/20'
                  }`}
                >
                  {b.label}
                </button>
              );
            })}
          </div>

          <AffiliateCTA
            partner="hotels"
            sid="nav_browse_stays_mobile"
            destination="Lapland Finland"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-3 bg-[#DB2777] text-white text-base font-semibold rounded-full text-center"
          >
            {t.nav.browseStays}
          </AffiliateCTA>
        </nav>
      )}
    </header>
  );
}
