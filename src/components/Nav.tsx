import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown, Check } from 'lucide-react';
import Logo from './Logo';
import AffiliateCTA from './AffiliateCTA';
import { useLang, useLocalePath, type Lang } from '../i18n/useLang';
import { getCopy } from '../locales/copy';
import EcosystemMenu from '../../../shared/EcosystemMenu';

const STORAGE_KEY = 'lv_locale_choice';

const PREFIX_FOR: Record<Lang, string> = {
  en: '', fi: 'fi', de: 'de', ja: 'ja',
  es: 'es', 'pt-BR': 'br', 'zh-CN': 'cn',
  ko: 'kr', fr: 'fr', it: 'it', nl: 'nl',
};

const KNOWN_PREFIXES = ['/fi', '/de', '/ja', '/es', '/br', '/cn', '/kr', '/fr', '/it', '/nl'];

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
  'pt-BR': 'Português', 'zh-CN': '中文', ko: '한국어', fr: 'Français', it: 'Italiano', nl: 'Nederlands',
};

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

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
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-cream/85 backdrop-blur-md border-b border-charcoal/10">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        <div className="flex items-center gap-3 sm:gap-5 shrink-0">
          <EcosystemMenu lang={lang} currentDomain="stayinlapland.com" variant="light" />
          <Link to={localePath('/')} className="shrink-0 mr-2" aria-label={t.nav.homeAria}>
            <Logo size="sm" />
          </Link>
        </div>

        <nav className="hidden xl:flex items-center gap-4">
          {links.map(({ to, label }) => {
            const localized = localePath(to);
            const active = pathname === localized;
            return (
              <Link
                key={to}
                to={localized}
                className={`whitespace-nowrap text-[14px] font-medium transition-colors ${
                  active ? 'text-vibe-pink' : 'text-charcoal/75 hover:text-vibe-pink'
                }`}
              >
                {label}
              </Link>
            );
          })}

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

          <AffiliateCTA
            partner="hotels"
            sid="nav_browse_stays"
            destination="Lapland Finland"
            className="ml-2 px-5 py-2 bg-vibe-pink hover:bg-vibe-pink/90 text-white text-sm font-semibold rounded-full transition-colors shadow-sm shadow-vibe-pink/30"
          >
            {t.nav.browseStays}
          </AffiliateCTA>
        </nav>

        <div className="xl:hidden flex items-center gap-2">
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
        <nav className="xl:hidden bg-cream border-t border-charcoal/10 px-4 py-4 flex flex-col gap-1">
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

          <div className="flex flex-wrap items-center gap-2 px-3 py-3" role="group" aria-label="Language">
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
