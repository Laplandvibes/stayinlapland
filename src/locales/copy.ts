import type { Lang } from '../i18n/useLang';

export type SectionCopy = {
  nav: {
    longStays: string;
    hotels: string;
    glassIgloos: string;
    wilderness: string;
    whenToGo: string;
    bookingGuide: string;
    browseStays: string;
    homeAria: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    eyebrow: string;
    h1Line1: string;
    h1Line2: string;
    lead: string;
    leadPriceRange: string;
    liveLabel: string;
    browseLongStays: string;
    seeHotels: string;
  };
  newsletter: {
    eyebrow: string;
    h2: string;
    lead: string;
    placeholder: string;
    subscribe: string;
    subscribing: string;
    success: string;
    errorPrefix: string;
    pleaseTryAgain: string;
    footnotePart1: string;
    footnoteLink: string;
    footnotePart2: string;
  };
  authorByline: {
    reviewed: string;
    defaultNote: string;
  };
  affiliateDisclosure: string;
  langSwitchAria: { en: string; fi: string; de: string; ja: string; es: string; 'pt-BR': string; 'zh-CN': string; ko: string; fr: string; it: string; nl: string; sv: string };
  marginNoteDefault: string;
  comparison: { property: string; verdict: string; nOutOf5: (n: number) => string };
  editorsPick: { kicker: string; perNight: string; note: string; cta: string };
  propertyCard: {
    short: string;
    medium: string;
    long: string;
    /** Localized minimum-stay unit, e.g. "4 yötä" / "4 nights" / "4泊". */
    nights: (n: number) => string;
    minPrefix: string;
    perNight: string;
    cta: string;
  };
  workInLaplandPromo: {
    inlineEyebrow: string;
    inlineBodyPrefix: string;
    inlineBodyBrand: string;
    inlineBodySuffix: string;
    inlineCta: string;
    fullEyebrow: string;
    fullH2A: string;
    fullH2B: string;
    fullP1: string;
    fullP2A: string;
    fullP2B: string;
    fullCta: string;
    blocks: { label: string; tag: string }[];
  };
  longTermRentals: {
    eyebrow: string;
    h2A: string;
    h2B: string;
    lead: string;
    process: { title: string; body: string };
    cost: { title: string; body: string };
    abroad: { title: string; body: string };
    tags: { national: string; rentalOnly: string; corporate: string; classifieds: string };
  };
  tripRecommender: {
    weBook: string;
    items: { forWho: string; recommendation: string; rationale: string; ctaLabel: string }[];
  };
  home: {
    metaTitle: string;
    metaDescription: string;
    schemaName: string;
    breadcrumbHome: string;
    /** Hero stat-band labels; numbers come from the data layer (real counts only). */
    stats: { stays: string; bases: string; categories: string; months: string };
    intro: { p1: string; p2: string; p3: string };
    authorNote: string;
    fourWays: { kicker: string; h2A: string; h2B: string; lead: string };
    propertyWord: string;
    propertiesWord: string;
    explore: string;
    pullQuote: { text: string; attr: string };
    tripKicker: string;
    tripH2: string;
    destKicker: string;
    destH2: string;
    destLead: string;
    readGuide: string;
    faqKicker: string;
    faqH2: string;
    faqs: { q: string; a: string }[];
    fullGuideCta: string;
    categoryDescriptions: { longStays: string; hotels: string; glassIgloos: string; wilderness: string };
    categoryNames: { longStays: string; hotels: string; glassIgloos: string; wilderness: string };
  };
  hotels: {
    metaTitle: string;
    metaDescription: string;
    breadcrumb: string;
    pageHero: { eyebrow: string; title: string; subtitle: string };
    authorNote: string;
    introP1: string;
    introP2: string;
    picksKicker: string;
    picksH2: string;
    pullQuote: { text: string; attr: string };
    glanceKicker: string;
    glanceH2: string;
    rubric: string;
    axes: string[];
    rows: { name: string; verdict: string }[];
    marginLabel: string;
    marginBody: string;
    counterKicker: string;
    counterH2: string;
    counterP1: string;
    counterP2: string;
    seeLong: string;
    seeIgloos: string;
    browseAll: string;
  };
  glassIgloos: {
    metaTitle: string;
    metaDescription: string;
    breadcrumb: string;
    pageHero: { eyebrow: string; title: string; subtitle: string };
    authorNote: string;
    pickWhy: string[];
    pickCaveat: string;
    pullQuote: { text: string; attr: string };
    runnersKicker: string;
    runnersH2: string;
    glanceKicker: string;
    glanceH2: string;
    rubric: string;
    axes: string[];
    rows: { name: string; verdict: string }[];
    marginLabel: string;
    marginBody: string;
    counterKicker: string;
    counterH2: string;
    counterP1: string;
    counterP2: string;
    seeLong: string;
    bookingGuideBtn: string;
    browseAll: string;
  };
  wilderness: {
    metaTitle: string;
    metaDescription: string;
    breadcrumb: string;
    pageHero: { eyebrow: string; title: string; subtitle: string };
    authorNote: string;
    pickWhy: string[];
    pickCaveat: string;
    pullQuote: { text: string; attr: string };
    runnersKicker: string;
    runnersH2: string;
    glanceKicker: string;
    glanceH2: string;
    rubric: string;
    axes: string[];
    rows: { name: string; verdict: string }[];
    marginLabel: string;
    marginBody: string;
    counterKicker: string;
    counterH2: string;
    counterP1: string;
    counterP2: string;
    seeLong: string;
    browseAll: string;
  };
  longStays: {
    metaTitle: string;
    metaDescription: string;
    breadcrumb: string;
    pageHero: { eyebrow: string; title: string; subtitle: string };
    authorNote: string;
    pickWhy: string[];
    pickCaveat: string;
    pullQuote: { text: string; attr: string };
    runnersKicker: string;
    runnersH2: string;
    runnersLead: string;
    weeklyKicker: string;
    weeklyH2: string;
    weeklyP1: string;
    weeklyP2: string;
    marginLabel: string;
    marginBody: string;
    counterKicker: string;
    counterH2: string;
    counterP1: string;
    counterP2: string;
    counterP3: string;
    seeHotels: string;
    seeIgloos: string;
    browseAll: string;
  };
  bookingGuide: {
    metaTitle: string;
    metaDescription: string;
    breadcrumb: string;
    pageHero: { eyebrow: string; title: string; subtitle: string };
    sections: { title: string; body: string[] }[];
    readyTitle: string;
    readyLead: string;
    browseAll: string;
  };
  whenToGo: {
    metaTitle: string;
    metaDescription: string;
    breadcrumb: string;
    pageHero: { eyebrow: string; title: string; subtitle: string };
    authorNote: string;
    pullQuote: { text: string; attr: string };
    months: { name: string; pitch: string; body: string; bestFor: string[]; avoidIf: string[] }[];
    bestForLabel: string;
    skipIfLabel: string;
    cheatKicker: string;
    cheatH2: string;
    cheatP1: string;
    cheatP2: string;
    cheatP3: string;
    marginLabel: string;
    marginBody: string;
    readGuide: string;
    seeLong: string;
  };
  destinationPage: {
    metaTitleSuffix: string;
    pageHeroEyebrow: string;
    notFoundKicker: string;
    notFoundTitle: string;
    notFoundBody: string;
    backHome: string;
    authorNoteFor: (n: string) => string;
    recommendedIn: (n: string) => string;
    whereToStay: string;
    minStayLabel: string;
    perNight: string;
    checkRates: string;
    seeAll: string;
    liveAvailabilityIn: (n: string) => string;
    networkLeadA: string;
    networkLeadB: string;
    browseInDest: (n: string) => string;
    bucketLabels: Record<string, string>;
    /** Says out loud that the card images show a stay type, not the named property. */
    imageNote: string;
    /** Alt text for the hero + wide landscape band. */
    landscapeAlt: (n: string) => string;
  };
  hotelsData: { name: string; highlight: string; description: string; location: string }[];
  longStaysData: { name: string; highlight: string; description: string; location: string }[];
  glassIgloosData: { name: string; highlight: string; description: string; location: string }[];
  wildernessData: { name: string; highlight: string; description: string; location: string }[];
  destinationsData: { slug: string; pitch: string; longStayAngle: string }[];
  allCategoriesSummary: { slug: string; description: string }[];
};

// English ships in the main bundle; every other language is its own lazy
// chunk, fetched by CopyGate in App.tsx before the route tree renders.
// getCopy() falls back to EN until the chunk is registered, so nothing can
// crash even if a consumer renders early.
import { copyEN } from './copy.en';

const REGISTRY: Partial<Record<Lang, SectionCopy>> = { en: copyEN };

const loaders: Record<Lang, () => Promise<SectionCopy>> = {
  en: () => Promise.resolve(copyEN),
  fi: () => import('./copy.fi').then((m) => m.copyFI),
  de: () => import('./copy.de').then((m) => m.copyDE),
  ja: () => import('./copy.ja').then((m) => m.copyJA),
  es: () => import('./copy.es').then((m) => m.copyES),
  'pt-BR': () => import('./copy.pt-BR').then((m) => m.copyPTBR),
  'zh-CN': () => import('./copy.zh-CN').then((m) => m.copyZHCN),
  ko: () => import('./copy.ko').then((m) => m.copyKO),
  fr: () => import('./copy.fr').then((m) => m.copyFR),
  it: () => import('./copy.it').then((m) => m.copyIT),
  nl: () => import('./copy.nl').then((m) => m.copyNL),
  sv: () => import('./copy.sv').then((m) => m.copySV),
};

export function getCopy(lang: Lang): SectionCopy {
  return REGISTRY[lang] ?? copyEN;
}

export function isCopyLoaded(lang: Lang): boolean {
  return !!REGISTRY[lang];
}

export function loadCopy(lang: Lang): Promise<void> {
  if (REGISTRY[lang]) return Promise.resolve();
  return loaders[lang]().then((c) => {
    REGISTRY[lang] = c;
  });
}

export { copyEN };
