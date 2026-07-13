// 2026-05-21: Locale-aware head augmentation — emits hreflang × 11 + og:locale
// + og:locale:alternate × 10 + html lang on every route change. Sits inside
// <BrowserRouter> alongside ScrollToTop. Pages still emit their own
// <title>/<meta description>/<link canonical> inline (React 19 head hoisting).
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLang, type Lang } from '../i18n/useLang';

const SITE_URL = 'https://stayinlapland.com';

const SUPPORTED: Lang[] = ['en', 'fi', 'de', 'ja', 'es', 'pt-BR', 'zh-CN', 'ko', 'fr', 'it', 'nl', 'sv'];
const URL_PREFIX_OF: Record<Lang, string> = {
  en: '', fi: '/fi', de: '/de', ja: '/ja', es: '/es',
  'pt-BR': '/br', 'zh-CN': '/cn', ko: '/kr', fr: '/fr', it: '/it', nl: '/nl', sv: '/sv',
};
const BCP47: Record<Lang, string> = {
  en: 'en-US', fi: 'fi-FI', de: 'de-DE', ja: 'ja-JP', es: 'es-ES',
  'pt-BR': 'pt-BR', 'zh-CN': 'zh-CN', ko: 'ko-KR', fr: 'fr-FR', it: 'it-IT', nl: 'nl-NL', sv: 'sv-SE',
};
const OG_LOCALE: Record<Lang, string> = {
  en: 'en_US', fi: 'fi_FI', de: 'de_DE', ja: 'ja_JP', es: 'es_ES',
  'pt-BR': 'pt_BR', 'zh-CN': 'zh_CN', ko: 'ko_KR', fr: 'fr_FR', it: 'it_IT', nl: 'nl_NL', sv: 'sv_SE',
};

function stripLocalePath(path: string): string {
  return path.replace(/^\/(fi|de|ja|es|br|cn|kr|fr|it|nl|sv)(?=\/|$)/, '') || '/';
}

export default function LocaleHead() {
  const lang = useLang();
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.lang = BCP47[lang];
    const cleanPath = stripLocalePath(pathname);

    // hreflang × 11 + x-default
    document.head.querySelectorAll('link[rel="alternate"][data-seo-hreflang]').forEach((el) => el.remove());
    SUPPORTED.forEach((l) => {
      const lnk = document.createElement('link');
      lnk.setAttribute('rel', 'alternate');
      // Short hreflang codes (en, fi, pt-BR, …) + trailing-slash hrefs: must match
      // the prerendered HTML and sitemap.xml (no-slash URLs 308-redirect on CF Pages).
      lnk.setAttribute('hreflang', l);
      lnk.setAttribute('href', (SITE_URL + URL_PREFIX_OF[l] + (cleanPath === '/' ? '' : cleanPath)).replace(/\/?$/, '/'));
      lnk.setAttribute('data-seo-hreflang', 'true');
      document.head.appendChild(lnk);
    });
    const xd = document.createElement('link');
    xd.setAttribute('rel', 'alternate');
    xd.setAttribute('hreflang', 'x-default');
    // x-default = the page's own EN URL, trailing-slash form.
    xd.setAttribute('href', (SITE_URL + (cleanPath === '/' ? '' : cleanPath)).replace(/\/?$/, '/'));
    xd.setAttribute('data-seo-hreflang', 'true');
    document.head.appendChild(xd);

    // og:locale (current)
    let og = document.head.querySelector<HTMLMetaElement>('meta[property="og:locale"]:not([data-seo-alt])');
    if (!og) {
      og = document.createElement('meta');
      og.setAttribute('property', 'og:locale');
      document.head.appendChild(og);
    }
    og.setAttribute('content', OG_LOCALE[lang]);

    // og:locale:alternate × 10
    document.head.querySelectorAll('meta[property="og:locale:alternate"][data-seo-alt]').forEach((el) => el.remove());
    SUPPORTED.filter((l) => l !== lang).forEach((l) => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'og:locale:alternate');
      m.setAttribute('content', OG_LOCALE[l]);
      m.setAttribute('data-seo-alt', 'true');
      document.head.appendChild(m);
    });
  }, [lang, pathname]);

  return null;
}
