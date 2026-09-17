import { useLocation } from 'react-router-dom';
import { pageUrl } from '../lib/meta';

export type Lang = 'en' | 'fi' | 'de' | 'ja' | 'es' | 'pt-BR' | 'zh-CN' | 'ko' | 'fr' | 'it' | 'nl' | 'sv';

export function useLang(): Lang {
  const { pathname } = useLocation();
  if (pathname === '/fi' || pathname.startsWith('/fi/')) return 'fi';
  if (pathname === '/de' || pathname.startsWith('/de/')) return 'de';
  if (pathname === '/ja' || pathname.startsWith('/ja/')) return 'ja';
  if (pathname === '/es' || pathname.startsWith('/es/')) return 'es';
  if (pathname === '/br' || pathname.startsWith('/br/')) return 'pt-BR';
  if (pathname === '/cn' || pathname.startsWith('/cn/')) return 'zh-CN';
  if (pathname === '/kr' || pathname.startsWith('/kr/')) return 'ko';
  if (pathname === '/fr' || pathname.startsWith('/fr/')) return 'fr';
  if (pathname === '/it' || pathname.startsWith('/it/')) return 'it';
  if (pathname === '/nl' || pathname.startsWith('/nl/')) return 'nl';
  if (pathname === '/sv' || pathname.startsWith('/sv/')) return 'sv';
  return 'en';
}

const LANG_TO_PREFIX: Record<Lang, string> = {
  en: '', fi: 'fi', de: 'de', ja: 'ja',
  es: 'es', 'pt-BR': 'br', 'zh-CN': 'cn',
  ko: 'kr', fr: 'fr', it: 'it', nl: 'nl', sv: 'sv',
};

export function useLocalePath() {
  const lang = useLang();
  return (path: string): string => {
    if (lang === 'en') return path;
    const prefix = `/${LANG_TO_PREFIX[lang]}`;
    if (path === '/') return prefix;
    return `${prefix}${path.startsWith('/') ? path : `/${path}`}`;
  };
}

/**
 * Sivun OMA absoluuttinen osoite nykyisellä kielellä: kanoninen, murupolku,
 * mainEntityOfPage. 🔴 Älä käytä pelkkää `pageUrl('/x')` näihin: se antaa aina
 * englanninkielisen osoitteen. 17.9.2026 asti jokainen ei-englanninkielinen sivu
 * sai renderöinnissä KAKSI kanonista (prerenderin oikea + Reactin englanninkielinen),
 * ja ristiriitaiset kanoniset Google jättää huomiotta. Organisaation ja
 * sivuston @id:t pysyvät kielettöminä, koska ne ovat sama olio kaikilla kielillä.
 */
export function useLocalPageUrl() {
  const localePath = useLocalePath();
  return (path: string): string => pageUrl(localePath(path));
}

export type Bcp47 ='en-US' | 'fi-FI' | 'de-DE' | 'ja-JP' | 'es-ES' | 'pt-BR' | 'zh-CN' | 'ko-KR' | 'fr-FR' | 'it-IT' | 'nl-NL' | 'sv-SE';

export function useHtmlLang(): Bcp47 {
  const lang = useLang();
  if (lang === 'fi') return 'fi-FI';
  if (lang === 'de') return 'de-DE';
  if (lang === 'ja') return 'ja-JP';
  if (lang === 'es') return 'es-ES';
  if (lang === 'pt-BR') return 'pt-BR';
  if (lang === 'zh-CN') return 'zh-CN';
  if (lang === 'ko') return 'ko-KR';
  if (lang === 'fr') return 'fr-FR';
  if (lang === 'it') return 'it-IT';
  if (lang === 'nl') return 'nl-NL';
  if (lang === 'sv') return 'sv-SE';
  return 'en-US';
}
