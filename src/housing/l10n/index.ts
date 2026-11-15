import type { HousingPageCopy } from '../types';
import type { WhenToGoCopy } from '../whentogo';
import type { HousingCommonCopy, HousingPageKey, L10nLang } from './types';

export * from './types';

/**
 * Käännöskielten sisältö ladataan vasta kun sitä tarvitaan: yksi tiedosto = yksi sivu yhdellä kielellä
 * (`./<kieli>/<sivu>.ts`, Vite tekee jokaisesta oman palan). Englanti ja suomi ovat sivupalassa valmiina,
 * joten niiden lukija ei lataa mitään lisää. Kymmenen kieltä samaan palaan olisi kuusinkertaistanut
 * jokaisen asumissivun JavaScriptin (≈ 1,3 Mt tekstiä) puhelimella.
 *
 * Lataus käyttää Reactin `use()`-kutsua (komponentissa): sivu odottaa reitin Suspense-rajalla (sama varjo kuin
 * laiskasti ladatulla sivulla), ja välimuisti pitää lupauksen, joten kieli ladataan kerran.
 */
const MODULES = import.meta.glob<{ default: unknown }>('./*/*.ts');

const cache = new Map<string, Promise<unknown>>();

function load<T>(lang: L10nLang, file: string): Promise<T | null> {
  const key = `./${lang}/${file}.ts`;
  let p = cache.get(key);
  if (!p) {
    const loader = MODULES[key];
    p = loader
      ? loader().then((m) => m.default)
      : Promise.resolve(null).then(() => {
          // Puuttuva käännös ei saa kaataa sivua: kutsuja näyttää englannin. scripts/generate-prerender-meta.mjs
          // kaataa buildin, jos tiedosto puuttuu, joten tähän ei pitäisi koskaan päätyä tuotannossa.
          console.error(`[housing-l10n] missing ${key}`);
          return null;
        });
    cache.set(key, p);
  }
  return p as Promise<T | null>;
}

/*
 * Komponentti kutsuu näitä Reactin `use()`-kutsulla: `use(l10nPage(lang, 'rentals'))`. `use` saa olla ehdon
 * sisällä (React 19), toisin kuin tavallinen hook, joten englannin ja suomen lukija ei odota mitään.
 */
export function l10nPage(lang: L10nLang, key: HousingPageKey): Promise<HousingPageCopy | null> {
  return load<HousingPageCopy>(lang, key);
}

export function l10nWhenToGo(lang: L10nLang): Promise<WhenToGoCopy | null> {
  return load<WhenToGoCopy>(lang, 'whentogo');
}

export function l10nCommon(lang: L10nLang): Promise<HousingCommonCopy | null> {
  return load<HousingCommonCopy>(lang, 'common');
}
