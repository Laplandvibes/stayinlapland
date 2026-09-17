/**
 * Asumissisällön (rooli §23, Vesa 16.9.2026) tyypit.
 *
 * Sivut kirjoitetaan suomeksi ja englanniksi (Vesan linja: käännetty suomi ei ole
 * suomea; muut kielet vasta mitatun kysynnän mukaan, lv_permanent_rules §25).
 * Muut kymmenen lokaalia näyttävät englannin ja kanonisoituvat englanninkieliseen
 * osoitteeseen (routes.json `nativeLocales`), joten Google ei näe kymmentä kopiota.
 *
 * 🔴 Numeroportti: jokainen luku tekstissä on `sources`-listan lähteestä, ja
 * laskettu luku näyttää kaavansa ("18,66 × 30"). Ei arvioita.
 */
export type HousingLang = 'en' | 'fi';

export interface Source {
  /** Lyhyt tunniste, esim. "tk-vuokrat". */
  id: string;
  label: string;
  url: string;
}

export interface FactTable {
  caption?: string;
  head: string[];
  rows: string[][];
  foot?: string;
}

export interface Card {
  title: string;
  /** Saa sisältää <strong> ja <a> — oma copy, ei käyttäjäsyötettä. */
  body: string;
  href?: string;
  linkLabel?: string;
  /** Umami-eventin data-arvo linkille (link-CTA-sääntö, _jobs/06). */
  event?: string;
}

export interface Section {
  id: string;
  kicker?: string;
  h2: string;
  lead?: string;
  /** Kappaleet; sallittu HTML: <strong>, <a href target rel>. */
  paras?: string[];
  bullets?: string[];
  table?: FactTable;
  cards?: Card[];
  note?: { label: string; body: string };
  image?: { src: string; alt: string; caption: string; ratio?: '16/9' | '4/3' };
  band?: boolean;
}

export interface Faq {
  q: string;
  a: string;
}

export interface AffiliateChip {
  label: string;
  /** hotels: ss-hakusana · cars: IATA. */
  destination: string;
  sid: string;
}

export interface HousingPageCopy {
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  hero: { eyebrow: string; title: string; subtitle: string };
  authorNote: string;
  intro: string[];
  sections: Section[];
  faqs?: Faq[];
  cta?: {
    partner: 'hotels' | 'cars';
    kicker: string;
    h2: string;
    lead: string;
    chips: AffiliateChip[];
  };
  sources: Source[];
}

export type HousingCopyMap = Record<HousingLang, HousingPageCopy>;
