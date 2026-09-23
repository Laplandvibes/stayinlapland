import { useEffect, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useLang, useLocalePath, type Lang } from '../i18n/useLang';

/**
 * Kanibalisaation purku, vaihe 2 (lv_permanent_rules §23, Vesa 16.9.2026):
 * stayinlaplandin lomasivut hotellit, lasi-iglut ja erämaalodget siirtyivät
 * laplandstays.comiin, joka on verkoston virallinen hotellien ja mökkien
 * hakupaikka. stayinlapland = asuminen, vuokraus, työntekijät.
 *
 * Mitattu ennen ohjausta (GSC 18.6.–16.9.2026, kaikki kielet):
 *   /hotels/        5 169 näyttöä, 0 klikkiä (lapland hotels @41)
 *   /glass-igloos/  3 234 näyttöä, 0 klikkiä (glass igloo finland @73)
 *   /wilderness/      778 näyttöä, 0 klikkiä (wilderness lodge finland @28)
 * Samoilla hauilla staysilla näkyvät etusivu (hotellit, iglut) ja
 * /property-types/ (erämaa), joten ohjaus vie niihin.
 *
 * 🔴 Palvelin ohjaa `public/_redirects`-tiedostolla (301, kaikki 12 kieltä,
 * vinoviivalla ja ilman). Tämä moduuli on SAMA kartta sovelluksen sisällä:
 * sisäiset linkit osoittavat suoraan staysille, ja jos lukija päätyy vanhaan
 * reittiin sovelluksen sisäisellä navigoinnilla (ei palvelinpyyntöä),
 * `MovedToStays` vaihtaa sivun. Jos muutat kohteita, muuta molemmat.
 */
export const STAYS_ORIGIN = 'https://laplandstays.com';

const PREFIX: Record<Lang, string> = {
  en: '', fi: '/fi', de: '/de', ja: '/ja', es: '/es', 'pt-BR': '/br',
  'zh-CN': '/cn', ko: '/kr', fr: '/fr', it: '/it', nl: '/nl', sv: '/sv',
};

export type MovedPath = '/hotels' | '/glass-igloos' | '/wilderness';
export const MOVED_TO_STAYS: readonly MovedPath[] = ['/hotels', '/glass-igloos', '/wilderness'];

export function isMovedToStays(path: string): path is MovedPath {
  const p = path.replace(/\/$/, '') || '/';
  return (MOVED_TO_STAYS as readonly string[]).includes(p);
}

/** Staysin etusivu = verkoston hotelli- ja mökkihaku, samalla kielellä. */
export function staysHome(lang: Lang): string {
  return `${STAYS_ORIGIN}${PREFIX[lang]}/`;
}

/** Siirtyneen sivun vastine staysilla samalla kielellä. */
export function staysUrl(path: MovedPath, lang: Lang): string {
  if (path === '/hotels') return staysHome(lang);
  if (path === '/glass-igloos') {
    // Staysilla oma iglusivu on vain suomeksi ja japaniksi; muilla kielillä
    // majoitustyyppisivu, jonka ensimmäinen osio on lasi-iglut.
    if (lang === 'fi') return `${STAYS_ORIGIN}/fi/iglumajoitus/`;
    if (lang === 'ja') return `${STAYS_ORIGIN}/ja/glass-igloos/`;
  }
  return `${STAYS_ORIGIN}${PREFIX[lang]}/property-types/`;
}

/** Vanhan reitin elementti: sovelluksen sisäinen navigointi ohjataan staysille. */
export function MovedToStays({ path }: { path: MovedPath }) {
  const lang = useLang();
  useEffect(() => {
    window.location.replace(staysUrl(path, lang));
  }, [path, lang]);
  return <div className="min-h-screen bg-cream" />;
}

/**
 * Sisäinen linkki, joka osaa siirtyneet sivut: siirtynyt polku (hotellit, iglut,
 * erämaa) vie suoraan staysille uuteen välilehteen, muut polut pysyvät sivustolla.
 * Käytä vanhoissa lomasivujen linkeissä, jotta ne eivät kulje 301:n kautta.
 */
export function SiteLink({
  path,
  className,
  children,
  onClick,
}: {
  path: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  const lang = useLang();
  const localePath = useLocalePath();
  if (isMovedToStays(path)) {
    return (
      <a
        href={staysUrl(path, lang)}
        target="_blank"
        rel="noopener"
        className={className}
        onClick={onClick}
        data-umami-event="housing_out"
        data-umami-event-page="moved"
        data-umami-event-target="laplandstays"
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={localePath(path)} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
