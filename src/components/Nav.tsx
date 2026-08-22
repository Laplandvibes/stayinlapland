import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown, Check } from 'lucide-react';
import Logo from './Logo';
import AffiliateCTA from './AffiliateCTA';
import { useLang, useLocalePath, type Lang } from '../i18n/useLang';
import { getCopy } from '../locales/copy';
import { destinations } from '../data/properties';
import EcosystemMenu from '../shared/EcosystemMenu';

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
const WIDE_NAV_LOCALES: ReadonlySet<Lang> = new Set(['fr', 'it']);

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

const LANG_NAMES: Record<Lang, string> = {
  en: 'English', fi: 'Suomi', de: 'Deutsch', ja: '日本語', es: 'Español',
  'pt-BR': 'Português', 'zh-CN': '中文', ko: '한국어', fr: 'Français', it: 'Italiano', nl: 'Nederlands', sv: 'Svenska',
};

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const destRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!destOpen) return;
    function onClick(e: MouseEvent) {
      if (destRef.current && !destRef.current.contains(e.target as Node)) setDestOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setDestOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [destOpen]);

  useEffect(() => {
    if (!langOpen) return;
    function onClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setLangOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [langOpen]);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const lang = useLang();
  const localePath = useLocalePath();
  const t = getCopy(lang);
  const wideNav = WIDE_NAV_LOCALES.has(lang);

  const links = [
    { to: '/long-stays', label: t.nav.longStays },
    { to: '/hotels', label: t.nav.hotels },
    { to: '/glass-igloos', label: t.nav.glassIgloos },
    { to: '/wilderness', label: t.nav.wilderness },
    { to: '/when-to-go', label: t.nav.whenToGo },
    { to: '/booking-guide', label: t.nav.bookingGuide },
  ];

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

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-cream/85 backdrop-blur-md border-b border-charcoal/10">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <EcosystemMenu lang={lang} currentDomain="stayinlapland.com" variant="light" />
          <Link to={localePath('/')} className="shrink-0 mr-2" aria-label={t.nav.homeAria}>
            <Logo size="sm" />
          </Link>
        </div>

        <nav className={`hidden ${wideNav ? '2xl:flex' : 'xl:flex'} items-center gap-3`}>
          {links.map(({ to, label }) => {
            const localized = localePath(to);
            const active = pathname === localized;
            return (
              <Link
                key={to}
                to={localized}
                className={`whitespace-nowrap text-[13px] font-medium transition-colors ${
                  active ? 'text-vibe-pink' : 'text-charcoal/75 hover:text-vibe-pink'
                }`}
              >
                {label}
              </Link>
            );
          })}

          {/* Destinations dropdown */}
          <div ref={destRef} className="relative">
            <button
              type="button"
              onClick={() => setDestOpen((o) => !o)}
              aria-haspopup="true"
              aria-expanded={destOpen}
              className={`inline-flex items-center gap-1 whitespace-nowrap text-[13px] font-medium transition-colors ${
                pathname.includes('/destinations/') ? 'text-vibe-pink' : 'text-charcoal/75 hover:text-vibe-pink'
              }`}
            >
              {DESTINATIONS_LABEL[lang]}
              <ChevronDown size={12} className={destOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
            </button>
            {destOpen && (
              <ul className="absolute left-0 mt-2 min-w-[190px] rounded-xl border border-charcoal/15 bg-white shadow-2xl py-1 z-50">
                {destinations.map((d) => {
                  const to = localePath(`/destinations/${d.slug}`);
                  const active = pathname === to;
                  return (
                    <li key={d.slug}>
                      <Link
                        to={to}
                        onClick={() => setDestOpen(false)}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          active ? 'bg-vibe-pink/10 text-vibe-pink font-semibold' : 'text-charcoal hover:bg-charcoal/5'
                        }`}
                      >
                        {d.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* Globe-dropdown language switcher */}
          <div ref={langRef} className="relative ml-1">
            <button
              type="button"
              onClick={() => setLangOpen(o => !o)}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label="Language"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider border border-charcoal/25 text-charcoal/85 hover:border-vibe-pink hover:text-vibe-pink transition-colors"
            >
              <Globe size={14} />
              <span>{langButtons.find(b => b.code === lang)?.label}</span>
              <ChevronDown size={12} className={langOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
            </button>
            {langOpen && (
              <ul
                role="listbox"
                aria-label="Language"
                className="absolute right-0 mt-2 min-w-[180px] rounded-xl border border-charcoal/15 bg-white shadow-2xl py-1 z-50"
              >
                {langButtons.map((b) => {
                  const active = lang === b.code;
                  return (
                    <li key={b.code}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={active}
                        onClick={() => { setLocale(b.code); setLangOpen(false); }}
                        className={`w-full flex items-center justify-between gap-3 px-4 py-2 text-sm transition-colors ${
                          active ? 'bg-vibe-pink/10 text-vibe-pink font-semibold' : 'text-charcoal hover:bg-charcoal/5'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="font-mono text-[10px] uppercase tracking-wider w-6 text-charcoal/60">{b.label}</span>
                          <span>{LANG_NAMES[b.code]}</span>
                        </span>
                        {active && <Check size={14} className="text-vibe-pink" />}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
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
            className="ml-1 shrink-0 whitespace-nowrap px-4 py-2 bg-vibe-pink hover:bg-vibe-pink/90 text-white text-sm font-semibold rounded-full transition-colors shadow-sm shadow-vibe-pink/30"
          >
            {t.nav.browseStays}
          </AffiliateCTA>
        </nav>

        <div className={`${wideNav ? '2xl:hidden' : 'xl:hidden'} flex items-center gap-2`}>
          <select
            value={lang}
            onChange={(e) => setLocale(e.target.value as Lang)}
            aria-label="Language"
            className="bg-transparent border border-charcoal/30 rounded px-2 py-1 text-xs font-semibold uppercase text-charcoal"
          >
            {langButtons.map((b) => (
              <option key={b.code} value={b.code}>
                {b.label}
              </option>
            ))}
          </select>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-charcoal/80"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className={`${wideNav ? '2xl:hidden' : 'xl:hidden'} bg-cream border-t border-charcoal/10 px-4 py-4 flex flex-col gap-1`}>
          {links.map(({ to, label }) => {
            const localized = localePath(to);
            const active = pathname === localized;
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

          {/* Destinations, grouped so the pages are reachable on mobile too */}
          <p className="px-3 pt-4 pb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-stone">
            {DESTINATIONS_LABEL[lang]}
          </p>
          {destinations.map((d) => {
            const to = localePath(`/destinations/${d.slug}`);
            const active = pathname === to;
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
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider border transition-colors ${
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
            className="mt-2 px-5 py-3 bg-vibe-pink text-white text-base font-semibold rounded-full text-center"
          >
            {t.nav.browseStays}
          </AffiliateCTA>
        </nav>
      )}
    </header>
  );
}
