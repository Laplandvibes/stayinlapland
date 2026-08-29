export type StayLength = 'short' | 'medium' | 'long';

export interface Property {
  slug: string;
  name: string;
  location: string;
  /** Hotel partner search query (defaults to name). */
  searchQuery?: string;
  /** Nightly rate range, formatted. */
  priceRange: string;
  /** Typical minimum stay in nights — omitted when there is no minimum.
   *  A number, not a string: '4 nights' rendered literally on every locale
   *  (Finnish pages read "Min jakso: 4 nights" until 2026-08-17). */
  minStayNights?: number;
  /** Stay length the property is best at. */
  bestFor: StayLength;
  /** One-line tag shown on cards. */
  highlight: string;
  /** Body description (1-2 short paragraphs). */
  description: string;
  /** Optional card image. 🔴 Left EMPTY on purpose since 2026-08-17: every one of
   *  the 16 properties now has its own image via `stayCardImages`, and the old
   *  values here pointed at GENERIC reused files (a long stay showing the hotels
   *  hero, two different properties sharing one photo). If the map ever misses,
   *  PropertyCard's neutral gradient is a better failure than the wrong photo. */
  imageSrc?: string;
}

/* ─── LONG STAYS ─── 1+ week rentals: villas, design cabins, apartments. ─── */
/** Build a partner-resolvable destination from a property location. Property NAMES must
 *  NEVER be used as the ss= search (the partner fuzzy-matches lodge names to unrelated US towns).
 *  Always resolve to a real Lapland city + ", Finland". */
export function searchDest(location: string, searchQuery?: string): string {
  if (searchQuery && searchQuery.trim()) return searchQuery;
  let c = (location || '').split('(')[0].split(' · ')[0].split(',')[0];
  c = c.replace(/\b(village|fell|National Park|area|city centre|southern shore|district)\b/gi, '').trim();
  c = c.replace(/^Lake\s+/i, '').trim();
  return c ? `${c}, Finland` : 'Lapland, Finland';
}

export const longStays: Property[] = [
  {
    slug: 'arctic-treehouse-suite',
    name: 'Arctic TreeHouse Resort: Long Stay',
    location: 'Rovaniemi',
    priceRange: '€280–520',
    minStayNights: 7,
    bestFor: 'long',
    highlight: 'Design suites · weekly rates · sauna village',
    description:
      'Design suites overlooking pine forest at the edge of Santa Park. Weekly rate drops 25% from nightly. Each suite has a kitchenette, panoramic glass front and access to the resort sauna village, making this one of the few ways to do a proper long stay in Rovaniemi without renting raw cabin.',
  },
  {
    slug: 'levi-residences',
    name: 'Levi Residences: Penthouse Suites',
    location: 'Levi village',
    priceRange: '€220–480',
    minStayNights: 4,
    bestFor: 'long',
    highlight: '2-bedroom · ski-in · private sauna · weekly rates',
    description:
      'Two-bedroom apartments at the foot of Levi fell, walking distance to lifts and the village. Each unit has a private wood-fired sauna, a real kitchen and a four-night minimum from December through March. The choice for families spending a week skiing without giving up urban amenities.',
  },
  {
    slug: 'ounasvaara-chalets',
    name: 'Lapland Hotels Ounasvaara Chalets',
    location: 'Rovaniemi · Ounasvaara fell',
    priceRange: '€140–260',
    minStayNights: 3,
    bestFor: 'medium',
    highlight: 'Ski-in/out · walk to Rovaniemi centre',
    description:
      'Fully equipped chalets on Ounasvaara fell. Ski-in/ski-out in winter, ten-minute walk to Rovaniemi centre. The most flexible long-stay option if you want a mix of urban convenience and Arctic mornings.',
  },
  {
    slug: 'pyha-bears-lodge',
    name: 'Lapland Hotels Bear\'s Lodge',
    location: 'Pyhä-Luosto National Park',
    priceRange: '€150–280',
    minStayNights: 5,
    bestFor: 'long',
    highlight: 'National park doorstep · private sauna · families',
    description:
      'Traditional log cabins beside Pyhä-Luosto National Park. Full kitchens, private wood-fired saunas, lake access. The right answer for a multi-week family stay where the days revolve around snowshoeing and cross-country trails, not sightseeing.',
  },
  {
    slug: 'inari-lakeside-villa',
    name: 'Wilderness Hotel Nangu: Lakeside Villas',
    location: 'Lake Inari southern shore',
    priceRange: '€220–460',
    minStayNights: 4,
    bestFor: 'long',
    highlight: 'Sami-led activities · lake views · long-stay rates',
    description:
      'Lakeside villas on Lake Inari with rooms facing the water. Sami-led ice fishing, ranger-guided wilderness skiing, Inari Sami Museum twenty minutes away. Long-stay rates from four nights. The most cultural of the lake-based long-stays.',
  },
];

/* ─── HOTELS ─── boutique + design + classic Lapland hotels for shorter stays. ─── */
export const hotels: Property[] = [
  {
    slug: 'arctic-treehouse-resort',
    name: 'Arctic TreeHouse Resort',
    location: 'Rovaniemi',
    priceRange: '€220–420',
    bestFor: 'short',
    highlight: 'Design hotel · forest-edge suites',
    description:
      'A 70-suite design hotel built into the pine forest behind Santa Park, Rovaniemi. Each suite has a panoramic glass front facing the trees and a Nordic-minimal interior. Strong restaurant on site, Rakas, locally sourced, and the resort sauna village is open to all guests.',
  },
  {
    slug: 'arctic-light-hotel',
    name: 'Arctic Light Hotel',
    location: 'Rovaniemi city centre',
    priceRange: '€140–260',
    bestFor: 'short',
    highlight: 'Boutique 57 rooms · 1939 functionalist building',
    description:
      'A boutique 57-room hotel in a 1939 functionalist building, formerly the local newspaper office, rebuilt after the 1944 Lapland War destroyed Rovaniemi. Each floor has a different interior theme; the rooftop suite has its own sauna. The most architecturally serious hotel in the city.',
  },
  {
    slug: 'levi-spirit',
    name: 'Levi Spirit',
    location: 'Levi',
    priceRange: '€480–950',
    bestFor: 'short',
    highlight: 'Design villas · spa · ski-in/out',
    description:
      'High-end villa hotel at the base of Levi fell. Private outdoor hot tubs, an in-suite sauna in every villa, ski-in/out access to the lifts and a full-service spa. Built for adults: no kids\' programme, just quiet rooms and good food.',
  },
  {
    slug: 'lapland-hotels-saaga',
    name: 'Lapland Hotels Saaga',
    location: 'Ylläsjärvi (Ylläs)',
    priceRange: '€180–340',
    bestFor: 'short',
    highlight: 'Ski-in/out at Ylläs · spa & pool · fell-view dining',
    description:
      'The classic hotel on the quieter Ylläsjärvi side of Ylläs, about a hundred metres from the Iso-Ylläs lift, ski-in/ski-out in winter. Pool, spa and gym use is included with standard and superior rooms; the self-catering apartments add private saunas. The Biegga buffet restaurant looks over both the fell and Ylläsjärvi lake.',
  },
  {
    slug: 'star-arctic-saariselka',
    name: 'Star Arctic Hotel',
    location: 'Saariselkä',
    priceRange: '€350–600',
    bestFor: 'short',
    highlight: 'Hilltop · darkest sky · suite & glass cabin mix',
    description:
      'A hybrid property: classic hotel rooms plus glass-roofed cabins on the highest point above Saariselkä. Effectively zero light pollution. The hotel rooms get the same hilltop view through an oversized window and run roughly 40% cheaper than the cabins.',
  },
];

/* ─── GLASS IGLOOS ─── kept as iconic Lapland category ─── */
export const glassIgloos: Property[] = [
  {
    slug: 'kakslauttanen',
    name: 'Kakslauttanen Arctic Resort',
    location: 'Saariselkä',
    priceRange: '€400–1500',
    bestFor: 'short',
    highlight: 'The original glass igloo · 1973 · Kelo-Glass available',
    description:
      'The resort that invented the modern glass igloo. Choose Kelo-Glass over the classic Glass Igloos: Kelo pairs the panoramic glass roof with a heated log structure, kitchenette and fireplace. Two-night minimum gets the most out of it.',
  },
  {
    slug: 'levin-iglut',
    name: 'Levin Iglut',
    location: 'Levi fell',
    priceRange: '€350–700',
    bestFor: 'short',
    highlight: 'Motorised aurora beds · fell-top position',
    description:
      'Premium glass igloos on Levi fell, well above the village light bowl. Motorised beds adjust toward the auroral arc, every unit has a private kitchenette, the engineering is the best of the five Finnish resorts.',
  },
  {
    slug: 'aurora-village-ivalo',
    name: 'Aurora Village',
    location: 'Ivalo',
    priceRange: '€300–550',
    bestFor: 'short',
    highlight: 'Wilderness setting near Ivalo · widely spaced cabins',
    description:
      'Glass-roofed cabins in untouched forest near Ivalo. Cabins are widely spaced for privacy and the surroundings are dark enough that aurora reads through thin cloud. The most remote-feeling glass igloo property on this site.',
  },
  {
    slug: 'aurora-pyramids-inari',
    name: 'Aurora Pyramids',
    location: 'Lake Inari',
    priceRange: '€280–520',
    bestFor: 'short',
    highlight: 'Pyramid cabins · lake reflections',
    description:
      'Pyramid-shaped glass-front cabins on the shore of Lake Inari. The frozen lake reflects the auroral arc when wind drops below 3 m/s, a viewing geometry no other Finnish property delivers.',
  },
];

/* ─── WILDERNESS ─── high-end remote retreats ─── */
export const wilderness: Property[] = [
  {
    slug: 'iso-syote-eagle',
    name: 'Iso-Syöte Eagle View Suites',
    location: 'Iso-Syöte (Pudasjärvi, just south of Lapland)',
    priceRange: '€500–950',
    bestFor: 'short',
    highlight: 'Above-treeline · accessible from Oulu',
    description:
      'Pine-built suites at 432 m on the Iso-Syöte fell, the southernmost real fell in Finland. Above-the-treeline aurora viewing without the long flight to Saariselkä, and 90 minutes from Oulu airport.',
  },
  {
    slug: 'wilderness-hotel-muotka',
    name: 'Wilderness Hotel Muotka',
    location: 'Saariselkä area',
    priceRange: '€220–450',
    bestFor: 'short',
    highlight: 'Aurora wake-up service · hotel comforts',
    description:
      'Aurora cabins with full-wall glass facing the surrounding fells. On-site aurora hunters wake guests when activity rises, useful since most aurora windows happen well after midnight. Hotel comforts in a wilderness location.',
  },
];

/* ─── DESTINATIONS ─── for destination-specific pages ─── */
export interface DestinationInfo {
  slug: string;
  name: string;
  /** Override for the hotels ?ss= search when the display name is a weak
   *  Sembo polygon (e.g. "Ylläs" = 3 properties vs village Äkäslompolo = 13). */
  searchQuery?: string;
  /** Quick description used as page hero subtitle. */
  pitch: string;
  /** Why long-stay specifically here. */
  longStayAngle: string;
  /** Properties best matched to this destination (cross-references the four arrays). */
  propertyNames: string[];
  /** Small 16:10 card image for the Home destination grid. The full-size hero on
   *  /destinations/{slug} is derived from the slug instead (`dest-{slug}-hero`) so
   *  the two sizes can never drift apart. */
  imageSrc: string;
}

export const destinations: DestinationInfo[] = [
  {
    slug: 'rovaniemi',
    name: 'Rovaniemi',
    pitch: 'The capital of Finnish Lapland, the only Lapland city with a real winter restaurant scene, a working airport hub and a year-round design culture.',
    longStayAngle:
      'The right base if your long stay involves work-from-Lapland weekdays and weekend trips north: fast wifi, Stockholm-direct flights, restaurants open in shoulder season.',
    propertyNames: ['Arctic TreeHouse Resort', 'Arctic Light Hotel', 'Lapland Hotels Ounasvaara Chalets'],
    imageSrc: '/images/dest-rovaniemi-card.webp',
  },
  {
    slug: 'levi',
    name: 'Levi',
    pitch: 'Finland\'s biggest ski resort by lift ticket sales, with 25 000 beds, ski-in/out apartments and a real village high street.',
    longStayAngle:
      'Long-stay sense: ski-in/out apartments rent by the week from December through April. The lift system runs daily, the village restaurants open every night, you can do a proper season here.',
    propertyNames: ['Levi Spirit', 'Levi Residences: Penthouse Suites', 'Levin Iglut'],
    imageSrc: '/images/dest-levi-card.webp',
  },
  {
    slug: 'saariselka',
    name: 'Saariselkä',
    pitch: 'Higher latitude than Rovaniemi, harder snow, darker sky. The Lapland village that takes winter most seriously.',
    longStayAngle:
      'Long-stay sense: rent a hilltop cabin and write a book. Few distractions. Excellent cross-country network, husky kennels nearby, no urban distractions.',
    propertyNames: ['Star Arctic Hotel', 'Kakslauttanen Arctic Resort', 'Wilderness Hotel Muotka'],
    imageSrc: '/images/dest-saariselka-card.webp',
  },
  {
    slug: 'inari',
    name: 'Inari',
    pitch: 'Sami cultural capital, Lake Inari (Finland’s third-largest lake), our northernmost long-stay base.',
    longStayAngle:
      'Long-stay sense: the lake itself is the activity. Ice fishing every morning, cross-country across the frozen lake, Inari Sami Museum and SIIDA cultural centre on doorstep.',
    propertyNames: ['Wilderness Hotel Nangu: Lakeside Villas', 'Aurora Pyramids', 'Aurora Village'],
    imageSrc: '/images/dest-inari-card.webp',
  },
  {
    slug: 'yllas',
    name: 'Ylläs',
    searchQuery: 'Äkäslompolo',
    // "Largest in Lapland (330 km)" was neither operator-published nor
    // consistent with ski.yllas.fi / yllas.fi, which state around 300 km and
    // make no such superlative (verified 2026-07-23, re-checked 2026-07-26).
    pitch: 'Quieter than Levi, longer ski season, around 300 km of maintained cross-country tracks through a national park.',
    longStayAngle:
      'Long-stay sense: the cross-country network is the draw. Cabin rentals here run by the week from late November to early May. The best long-stay choice for skiers who do not need lift-served downhill every day.',
    propertyNames: ['Lapland Hotels Saaga'],
    imageSrc: '/images/dest-yllas-card.webp',
  },
];

/** Context image for each accommodation card on a destination page, keyed by the
 *  canonical (English) property name in `propertyNames`.
 *
 *  These are NOT photographs of the named property — we have neither shot nor
 *  licensed those. Each one shows the *kind* of stay in the *kind* of landscape
 *  the destination has, which is what a reader is actually choosing between at
 *  this point in the page. `destinationPage.imageNote` says so in every locale,
 *  and the alt text names the category rather than the hotel. One image per card
 *  slot so no destination page ever shows the same picture twice (Vesa 2026-08-17).
 */
/** Resolve a card image from the canonical (English) property name.
 *
 *  Callers must pass the CANONICAL name, not the localized one: the pages swap
 *  in translated names before rendering, and a localized name misses on all 11
 *  non-EN locales. Every page that needs this already keeps the canonical array
 *  around, so read the name from there by index. */
export function stayCardImage(canonicalName: string): string | undefined {
  const base = stayCardImages[canonicalName];
  return base ? `/images/${base}.webp` : undefined;
}

export const stayCardImages: Record<string, string> = {
  // Rovaniemi
  'Arctic TreeHouse Resort': 'stay-rovaniemi-treehouse',
  'Arctic Light Hotel': 'stay-rovaniemi-boutique',
  'Lapland Hotels Ounasvaara Chalets': 'stay-rovaniemi-chalet',
  // Levi
  'Levi Spirit': 'stay-levi-villa',
  'Levi Residences: Penthouse Suites': 'stay-levi-apartment',
  'Levin Iglut': 'stay-levi-iglut',
  // Saariselkä
  'Star Arctic Hotel': 'stay-saariselka-hilltop',
  'Kakslauttanen Arctic Resort': 'stay-saariselka-domes',
  'Wilderness Hotel Muotka': 'stay-saariselka-wilderness',
  // Inari
  'Wilderness Hotel Nangu: Lakeside Villas': 'stay-inari-lakeside',
  'Aurora Pyramids': 'stay-inari-pyramid',
  'Aurora Village': 'stay-inari-aurora',
  // Ylläs
  'Lapland Hotels Saaga': 'stay-yllas-spa',
  // Pillar-sivujen EditorsPick-paikat: nämä kaksi eivät esiinny millään
  // kohdesivulla, joten ne puuttuivat 17.8. ensimmäiseltä kierrokselta.
  // TreeHouse saa oman kuvan pitkälle jaksolle (keittiönurkkaus + työpiste),
  // jotta /long-stays ja /hotels eivät näytä samaa kuvaa saman nimen alla.
  'Arctic TreeHouse Resort: Long Stay': 'stay-treehouse-longstay',
  'Iso-Syöte Eagle View Suites': 'stay-isosyote-eagle',
  "Lapland Hotels Bear's Lodge": 'stay-pyha-bearslodge',
};

export const allCategoriesSummary = [
  { slug: 'long-stays',   name: 'Long Stays',        count: longStays.length,   description: 'Weekly + monthly rentals: villas, design cabins, ski apartments.', imageSrc: '/images/pillar-long-stays-card.webp' },
  { slug: 'hotels',       name: 'Hotels',            count: hotels.length,      description: 'Boutique, design and classic Lapland hotels for short stays.',     imageSrc: '/images/pillar-hotels-card.webp' },
  { slug: 'glass-igloos', name: 'Glass Igloos',      count: glassIgloos.length, description: 'The iconic Lapland format: four resorts that earn the name.',     imageSrc: '/images/pillar-glass-igloos-card.webp' },
  { slug: 'wilderness',   name: 'Wilderness Lodges', count: wilderness.length,  description: 'Past the last road: remote retreats for serious travellers.',      imageSrc: '/images/pillar-wilderness-card.webp' },
] as const;
