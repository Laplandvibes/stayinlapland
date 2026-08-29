import type { SectionCopy } from './copy';

export const copyEN: SectionCopy = {
  nav: {
    longStays: 'Long Stays',
    hotels: 'Hotels',
    glassIgloos: 'Glass Igloos',
    wilderness: 'Wilderness',
    whenToGo: 'When to Go',
    bookingGuide: 'Booking Guide',
    browseStays: 'Browse stays',
    homeAria: 'StayInLapland home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    eyebrow: 'Finnish Lapland · Editorial guide',
    h1Line1: 'Settle into Lapland.',
    h1Line2: "Don’t just visit.",
    lead: 'Cabins by the week, design hotels in Rovaniemi, glass igloos for the bucket-list nights, and the wilderness lodges past the last road. Verified rates from',
    leadPriceRange: '€140 to €1 500',
    liveLabel: 'Live availability · Trip.com search',
    browseLongStays: 'Browse long stays',
    seeHotels: 'See hotels',
  },
  newsletter: {
    eyebrow: 'Long-stay openings · off-season rates',
    h2: "The stays you can’t book yet.",
    lead: 'Most long-stay places on this site release their winter inventory in late August, and it goes fast. We cover when the booking windows open, plus the low-season weeks (November, late April) when nightly rates drop while the auroras still show.',
    placeholder: 'Your email address',
    subscribe: 'Subscribe',
    subscribing: 'Subscribing…',
    success: 'Almost there: confirm your subscription from the email we just sent you.',
    errorPrefix: 'Could not subscribe, ',
    pleaseTryAgain: 'please try again',
    footnotePart1: 'We never spam. Unsubscribe with one click. See our ',
    footnoteLink: 'Privacy Policy',
    footnotePart2: '.',
  },
  authorByline: {
    reviewed: 'Reviewed by the LaplandVibes editorial network',
    defaultNote:
      'Written and fact-checked with on-the-ground partners across Finnish Lapland. We earn affiliate commission on bookings, but it never shapes which properties we recommend.',
  },
  affiliateDisclosure:
    'Some links on this page are affiliate links. If you book through them we earn a commission, at no extra cost to you. The properties are chosen on merit, not on commission.',
  langSwitchAria: { en: 'English', fi: 'Suomeksi', de: 'Auf Deutsch', ja: '日本語で', es: 'En español', 'pt-BR': 'Em português', 'zh-CN': '简体中文', ko: '한국어', fr: 'En français', it: 'In italiano', nl: 'In het Nederlands', sv: 'På svenska' },
  marginNoteDefault: 'Aside',
  comparison: {
    property: 'Property',
    verdict: 'Verdict',
    nOutOf5: (n) => `${n} out of 5`,
  },
  editorsPick: {
    kicker: "Editor’s pick",
    perNight: '/ night',
    note: 'Note',
    cta: 'Check rates & book',
  },
  propertyCard: {
    short: '1–3 nights',
    medium: '3–6 nights',
    long: '7+ nights',
    nights: (n) => `${n} ${n === 1 ? 'night' : 'nights'}`,
    minPrefix: 'Min',
    perNight: '/ night',
    cta: 'Check rates & book',
  },
  workInLaplandPromo: {
    inlineEyebrow: 'Coming to Lapland for work?',
    inlineBodyPrefix: 'Seasonal jobs, remote-work bases and ski-resort hospitality openings live on our sister site ',
    inlineBodyBrand: 'laplandwork.com',
    inlineBodySuffix: '.',
    inlineCta: 'Browse jobs',
    fullEyebrow: 'Sister site · laplandwork.com',
    fullH2A: 'Coming to Lapland',
    fullH2B: 'for work?',
    fullP1:
      'Many long-stays on this site are booked by people who came up for a ski season, an Arctic-engineering contract or a remote-work month, and ended up loving it. If that’s why you’re here, the work side has its own site.',
    fullP2A: 'LaplandWork.com',
    fullP2B:
      ' is the centralised job hub for Finnish Lapland: seasonal hospitality, ski-resort roles, husky-kennel openings, hospital and engineering jobs across Rovaniemi, Levi, Saariselkä and Inari. Free for jobseekers, three pricing tiers for employers.',
    fullCta: 'Browse Lapland jobs',
    blocks: [
      { label: 'Seasonal hospitality', tag: 'Levi · Ylläs · Saariselkä' },
      { label: 'Husky kennels', tag: 'Nov–Apr seasonal' },
      { label: 'Remote-work bases', tag: 'Year-round, fibre' },
      { label: 'Healthcare + tech', tag: 'Permanent positions' },
    ],
  },
  longTermRentals: {
    eyebrow: 'Moving to Lapland · 6 months and longer',
    h2A: 'Looking for a real apartment,',
    h2B: 'not a rental?',
    lead:
      'The properties on this site are short-to-medium-term rentals booked through our booking partner, the right answer for trips up to four weeks. For 6 months, a year, or a permanent move, you want the Finnish national rental portals. These are the six most active for Lapland inventory.',
    process: {
      title: 'Typical process',
      body:
        'Email landlord/agent → in-person viewing → application form (palkkatodistus + luottotiedot) → 1–2 month deposit + first month’s rent → keys. 2–6 weeks lead time is realistic.',
    },
    cost: {
      title: 'What it costs',
      body:
        'Rovaniemi 1-bedroom: €600–900/month. Levi/Saariselkä 1-bedroom (winter season): €900–1 400. Outside winter peak in ski villages, prices drop 30–40%. All figures include water; electricity + heating are usually separate.',
    },
    abroad: {
      title: 'Coming from abroad?',
      body:
        'EU/EEA citizens can rent freely. Non-EU need a residence permit (Migri processing 1–4 months). The job hub at laplandwork.com covers Migri, Kela registration, Finnish bank account opening, tax card and the full moving-to-Lapland checklist.',
    },
    tags: {
      national: 'NATIONAL',
      rentalOnly: 'RENTAL ONLY',
      corporate: 'CORPORATE',
      classifieds: 'DIRECT FROM LANDLORD',
    },
  },
  tripRecommender: {
    weBook: "We’d book",
    items: [
      {
        forWho: 'First trip · 4–6 nights · with kids',
        recommendation: 'Boutique hotel in Rovaniemi',
        rationale:
          'A design hotel like Arctic Light or Arctic TreeHouse gives airport convenience, a real restaurant scene and the Santa Claus Village logistics, without forcing the family into a remote cabin where heating becomes an evening project.',
        ctaLabel: 'See hotels',
      },
      {
        forWho: 'Repeat visitor · 7–14 nights · base in one place',
        recommendation: 'Long-stay cabin in Levi or Saariselkä',
        rationale:
          'Settle in for a week. A two-bedroom apartment at Levi Spirit or a hilltop cabin near Saariselkä gives weekly rates, a private sauna and enough time to actually settle into Lapland, instead of running between bucket-list nights.',
        ctaLabel: 'See long stays',
      },
      {
        forWho: 'Anniversary · retirement · group buyout',
        recommendation: 'A wilderness lodge',
        rationale:
          'A wilderness lodge is the most exclusive way to mark the occasion. An Iso-Syöte Eagle View Suite delivers above-treeline isolation, and a Wilderness Hotel Nangu villa adds Sami-led activities on Lake Inari, both private enough to feel like the whole landscape is yours, without a full-buyout price tag.',
        ctaLabel: 'See wilderness lodges',
      },
    ],
  },
  home: {
    metaTitle: '16 Verified Lapland Stays 2026: Boutique, Wild, Igloos',
    metaDescription:
      'Plan your 2026 Lapland stay, 16 verified properties: weekly cabins from €140/night, design hotels in Rovaniemi, glass igloos from €280 and wilderness lodges.',
    schemaName: 'StayInLapland, Long Stays & Boutique Hotels in Finnish Lapland',
    breadcrumbHome: 'Home',
    stats: { stays: 'Hand-picked stays', bases: 'Lapland bases', categories: 'Ways to stay', months: 'Months rated' },
    intro: {
      p1: 'Most “best Lapland accommodation” lists put a glass igloo at the top, twenty other glass igloos in roughly the same order, and not a single sentence about whether the writer has ever spent more than two nights at any of them. This guide is the opposite.',
      p2: 'Lapland accommodation splits into four buckets: long-stay rentals, hotels, glass igloos and wilderness lodges. The sixteen properties that earn their place are listed below. Across them you can build a trip that starts with a week-long cabin base near Levi, moves to a design hotel in Rovaniemi for two nights of city, then ends with a single glass-igloo night before flying home. That is how Lapland actually rewards a longer stay.',
      p3: 'Three things this guide does not do: aggregate prices, recycle reviews, or pretend to cover places where no partner in the network has spent a real night.',
    },
    authorNote: 'A curated short-list, written and fact-checked with on-the-ground partners across Finnish Lapland.',
    fourWays: {
      kicker: 'Four ways to stay',
      h2A: 'Settle into one.',
      h2B: 'Or string two together.',
      lead:
        'Pick the category that matches the trip you actually want. Then pick a destination. Long-stay readers most often combine two, a week of cabin base, two nights of contrast.',
    },
    propertyWord: 'property',
    propertiesWord: 'properties',
    explore: 'Explore',
    pullQuote: {
      text:
        'Lapland is bigger than people expect, and the road between Rovaniemi and Saariselkä eats half a day in each direction. The biggest first-trip mistake is booking three different bases in five nights.',
      attr: 'Lapland accommodation report · Lapin Liitto, 2024',
    },
    tripKicker: 'Already know roughly what you want?',
    tripH2: 'The local short-cuts.',
    destKicker: 'Five Lapland bases',
    destH2: 'Where in Lapland?',
    destLead:
      'Each destination has a different long-stay rationale. Click through for property recommendations and the case for picking that base over the others.',
    readGuide: 'Read the',
    faqKicker: 'Real questions, real answers',
    faqH2: 'Before you click anything.',
    faqs: [
      {
        q: 'How long is a "long stay" on this site?',
        a: 'Anything from four nights upwards counts as a long stay, it is the threshold at which most Lapland properties offer weekly rates and a real kitchen starts to matter. The featured long-stay properties run 3-night to 7-night minimums depending on the unit; each card lists the minimum.',
      },
      {
        q: 'Why is the homepage focused on long stays rather than glass igloos?',
        a: 'Glass igloos are the iconic Lapland format and they have a dedicated page. But the longest-loved Lapland trips are not three-night bucket-list stays in a glass dome, they are weeklong base-camp stays in a cabin or design hotel, with one or two nights elsewhere built in. The site reflects how Lapland actually rewards repeat visitors.',
      },
      {
        q: 'Is Kakslauttanen really worth the headline price?',
        a: 'Yes, but only the Kelo-Glass igloos, not the classic Glass Igloos. Kelo-Glass pairs the panoramic glass roof with a heated log structure, a kitchenette and a private fireplace. Two-night minimum gets the most out of it. Best aurora windows: early February and late March.',
      },
      {
        q: 'Where should I base if my long stay involves remote work?',
        a: 'Rovaniemi. It is the only Lapland city with reliable fibre, daily Helsinki and Stockholm flights, and a real winter restaurant scene that stays open in shoulder seasons. Arctic TreeHouse Resort and the Ounasvaara Chalets both offer weekly rates and proper desks.',
      },
    ],
    fullGuideCta: 'Read the full booking guide',
    categoryDescriptions: {
      longStays: 'Weekly + monthly rentals, villas, design cabins, ski apartments.',
      hotels: 'Boutique, design and classic Lapland hotels for short stays.',
      glassIgloos: 'The iconic Lapland format, four resorts that earn the name.',
      wilderness: 'Past the last road, two retreats for serious travellers.',
    },
    categoryNames: {
      longStays: 'Long Stays',
      hotels: 'Hotels',
      glassIgloos: 'Glass Igloos',
      wilderness: 'Wilderness Lodges',
    },
  },
  hotels: {
    metaTitle: 'Boutique & Design Hotels in Finnish Lapland | StayInLapland',
    metaDescription:
      'Five Lapland hotels worth booking, Arctic TreeHouse, Arctic Light, Levi Spirit, Lapland Hotels Saaga and Star Arctic. Curated for short stays and work trips.',
    breadcrumb: 'Hotels',
    pageHero: {
      eyebrow: 'Five hotels worth booking',
      title: 'Hotels in Lapland.',
      subtitle:
        'Boutique, design and reliably classic Lapland hotels. The right pick for the short stays, the work trips, and the two-night cities you build around a longer cabin base.',
    },
    authorNote: 'Five properties cross-checked against operator-published details and recent guest reviews across the 2025/26 season.',
    introP1:
      'Lapland has plenty of mid-tier chain hotels (Scandic, Sokos) that do the basics well at €90–140/night. They are not listed here; their booking decision is largely “closest to airport, cheapest week.”',
    introP2:
      'The five hotels below earn their spot for a different reason: design, architecture, view, or service mix. They are the right answer when you want a hotel that is part of why you came, not just a base.',
    picksKicker: 'Five picks',
    picksH2: 'Curated, not aggregated.',
    pullQuote: {
      text:
        'Rovaniemi was rebuilt three times after 1944, the third time by Alvar Aalto, who drew the city plan in the shape of a reindeer’s antlers. The Arctic Light Hotel sits inside the antlers, in a 1939 building that survived all three rebuilds.',
      attr: 'Architectural Record · Arctic Light Hotel feature',
    },
    glanceKicker: 'All five at a glance',
    glanceH2: 'Opinionated comparison.',
    rubric:
      'Five dots is best. Design = interior styling and material quality. Architecture = the building itself. Activities = ski-in/out, husky kennels, local culture within 15 min.',
    axes: ['Design', 'Architecture', 'Spa / sauna', 'Activities', 'Restaurant'],
    rows: [
      { name: 'Arctic TreeHouse', verdict: 'Best design hotel in Rovaniemi.' },
      { name: 'Arctic Light', verdict: 'Most architecturally interesting building.' },
      { name: 'Levi Spirit', verdict: 'Adults-only feel. Spa + ski-in.' },
      { name: 'Lapland Hotels Saaga', verdict: 'Ski-in/out classic at Ylläs. Spa included.' },
      { name: 'Star Arctic', verdict: 'Hilltop · darkest sky · cabin/hotel mix.' },
    ],
    marginLabel: 'Insider',
    marginBody:
      'Arctic TreeHouse and Levi Spirit both run their own restaurants, Rakas (TreeHouse) and Spirit Kitchen (Levi). Both source local. If you book either, book a table the same day you book the room, they sell out faster than the hotel does on weekends.',
    counterKicker: 'Honest counter-recommendation',
    counterH2: 'When a hotel is not the answer.',
    counterP1:
      'For 5+ nights with the same trip rhythm, skiing, cooking, sauna, repeat, a long-stay cabin or apartment beats any of these hotels on cost-per-night and quality of life. Hotels are right when the days are different from each other.',
    counterP2: 'For a single aurora-bucket-list night, glass igloos win. None of the hotels above have a glass roof.',
    seeLong: 'See long stays',
    seeIgloos: 'See glass igloos',
    browseAll: 'Browse Trip.com inventory',
  },
  glassIgloos: {
    metaTitle: 'Glass Igloos in Finnish Lapland | StayInLapland',
    metaDescription:
      'A guide to Finnish Lapland glass igloo resorts that earn the name, Kakslauttanen, Levin Iglut, Aurora Village, Aurora Pyramids. Ranked by sky and access.',
    breadcrumb: 'Glass Igloos',
    pageHero: {
      eyebrow: 'The iconic Lapland format',
      title: 'Glass Igloos in Finnish Lapland.',
      subtitle:
        'The Finnish glass-roofed dome was invented in Saariselkä. Four properties earn the name today, and there is a meaningful difference between them.',
    },
    authorNote: 'Four resorts cross-checked against operator-published details and recent guest reviews. Prices last checked: February 2026.',
    pickWhy: [
      'Kakslauttanen is on every list because it deserves to be there. The resort started in Saariselkä in 1973, at a time when “tourist accommodation in Saariselkä” meant a wooden hostel and the aurora was something you watched from the parking lot, and went on to invent the modern glass igloo.',
      "There is a fork: book the Kelo-Glass igloos, not the classic Glass Igloos. Kelo-Glass pairs a panoramic glass roof with a heated log structure, a private kitchenette and a fireplace. The classic Glass Igloos are smaller, busier, and the bathroom is a 50-metre walk in -25°C.",
      "The price difference is roughly €200/night. Across three nights, the Kelo-Glass earns its premium back in not having to put on snow boots at 4 AM.",
    ],
    pickCaveat:
      "The classic Glass Igloos run about 30% cheaper but the experience is meaningfully worse. If your budget caps at €400/night, look at Aurora Village or Aurora Pyramids, same sky, often a better lake or wilderness setting.",
    pullQuote: {
      text:
        'The first glass igloo was built so guests could see the aurora without standing outside in -30°C. Fifty years later that is still the entire pitch, and the part every imitator gets wrong is what happens after the aurora goes away.',
      attr: 'Kakslauttanen origin story · 1973',
    },
    runnersKicker: 'The other three',
    runnersH2: "When Kakslauttanen isn’t the right answer.",
    glanceKicker: 'All four at a glance',
    glanceH2: 'The opinionated comparison.',
    rubric:
      'Five dots is best. Access = ease from the nearest airport. Sky = darkness + viewing geometry. Privacy = isolation from neighbouring units. Comfort = bathroom, kitchen, sound insulation. Reputation = how well the resort delivers on the brochure.',
    axes: ['Access', 'Sky', 'Privacy', 'Comfort', 'Reputation'],
    rows: [
      { name: 'Kakslauttanen', verdict: 'The original. Pricey. Worth it for Kelo-Glass only.' },
      { name: 'Levin Iglut', verdict: 'Best engineering. Motorised aurora beds.' },
      { name: 'Aurora Village', verdict: 'Most remote feel. 30 min from Ivalo.' },
      { name: 'Aurora Pyramids', verdict: 'Lake reflections double the aurora.' },
    ],
    marginLabel: 'Trade-off',
    marginBody:
      'No resort wins all five axes. Aurora Pyramids beats everyone on sky reflection but loses on access (40 min from Ivalo). Levin Iglut wins on engineering but sits inside a busy ski village. Pick the priority that matters most.',
    counterKicker: 'Honest counter-recommendation',
    counterH2: 'When to skip glass igloos entirely.',
    counterP1:
      'For four-plus-night stays, two glass-igloo nights and a long-stay cabin block is a better trip than four glass-igloo nights. The novelty wears off after night two; a hirsimökki with a private sauna delivers the part of Lapland a glass dome cannot.',
    counterP2:
      'For Christmas (Dec 22 → Jan 2), prices triple and 90% of inventory goes to UK package tours by spring. Move dates to the second half of January if possible, colder, darker, half the price, better aurora.',
    seeLong: 'See long stays',
    bookingGuideBtn: 'Booking guide',
    browseAll: 'Browse Trip.com inventory',
  },
  wilderness: {
    metaTitle: 'Wilderness Lodges in Finnish Lapland | StayInLapland',
    metaDescription:
      'Wilderness lodges past the last road, Iso-Syöte Eagle View Suites and Wilderness Hotel Muotka. Above-treeline aurora viewing and on-site wake-up service.',
    breadcrumb: 'Wilderness',
    pageHero: {
      eyebrow: 'Past the last road',
      title: 'Wilderness Lodges.',
      subtitle:
        'The new Lapland tradition, architect-designed retreats built since the 2010s in places where the tourist road ends. Two lodges, two different definitions of wilderness.',
    },
    authorNote: 'Details for both properties verified against the operators\' published information and recent guest reviews.',
    pickWhy: [
      'Iso-Syöte Eagle View Suites sit at 432 m on the southernmost real fell in Finland, pine-built suites with above-the-treeline aurora viewing and none of the long flight north.',
      'The glass fronts face open sky, so the auroral arc reads from the bed on a clear night. Aurora viewing is from your own ridge-top suite rather than a shared shelter, privacy without a full-buyout commitment.',
      'And it is the easiest serious wilderness lodge to reach: 90 minutes from Oulu airport, which makes it the rare retreat that works even for a short trip.',
    ],
    pickCaveat:
      "The ‘check rates’ button on this site routes to Trip.com search for the nearest bookable inventory. Eagle View Suites sell out fastest on clear-sky weekends, book the dates, not the forecast.",
    pullQuote: {
      text:
        'The word “remote” is usually marketing language. It is true up here. The road runs out, the treeline drops below you, and the only light left is whatever the sky decides to make. You do not drop in to a place like this, you commit to it.',
      attr: 'On the Iso-Syöte fell road, looking up',
    },
    runnersKicker: 'The other one',
    runnersH2: 'When a full ridge-top suite is too much.',
    glanceKicker: 'Two definitions of wilderness',
    glanceH2: 'At a glance.',
    rubric:
      'Isolation = how alone you actually feel. Service = staff-to-guest ratio. Activities = guided experiences included or available.',
    axes: ['Access', 'Isolation', 'Service', 'Activities', 'Once-in-life factor'],
    rows: [
      { name: 'Iso-Syöte Eagle View', verdict: 'Above-treeline. Easiest from southern Finland.' },
      { name: 'Hotel Muotka', verdict: 'On-site aurora wake-up service. Hotel comforts.' },
    ],
    marginLabel: 'Aurora wake-up at Muotka',
    marginBody:
      'Wilderness Hotel Muotka runs an on-duty aurora hunter who watches the Kp index and physically knocks on doors when the auroras open. It is the single best feature of any property in this guide and worth the price difference for one-night-only trips.',
    counterKicker: 'Honest counter-recommendation',
    counterH2: 'Wilderness lodges are not for everyone.',
    counterP1:
      'Both lodges sit 1–3 hours by transfer from the nearest airport. For trips under three nights, the time spent in transit is disproportionate.',
    counterP2:
      'For first-time Arctic travellers: do a Rovaniemi or Saariselkä trip first. A full-buyout wilderness lodge is wasted on someone still figuring out -25°C.',
    seeLong: 'See long stays',
    browseAll: 'Browse Trip.com inventory',
  },
  longStays: {
    metaTitle: 'Long Stays in Finnish Lapland | StayInLapland',
    metaDescription:
      'Five long-stay Lapland properties for week-plus rentals, Arctic TreeHouse suites, Levi penthouses, Ounasvaara chalets, Pyhä cabins and Lake Inari villas.',
    breadcrumb: 'Long Stays',
    pageHero: {
      eyebrow: 'Five long-stay properties',
      title: 'Stay a week. Or a month.',
      subtitle:
        'The right answer for repeat visitors, remote workers, families and anyone whose Lapland trip is longer than three nights. Weekly rates, private saunas, real kitchens, from design suites to ski-in apartments.',
    },
    authorNote:
      'Five properties cross-checked with on-the-ground partners and weekly-rate calendars across the 2025/26 season.',
    pickWhy: [
      'The Arctic TreeHouse Resort is the answer when the question is “how do I do a proper long stay in Rovaniemi without renting a raw cabin?” Design suites built into the pine forest at the edge of Santa Park, each with a kitchenette and a panoramic glass front facing the trees.',
      'The weekly rate drops about 25% from the nightly rate, and every suite has access to the resort sauna village, so a week here costs less per night than a string of one-night bookings, with far more room to actually settle in.',
      'It is also the most flexible base in this list: Rovaniemi’s airport, restaurants and design culture are ten minutes away, while the suite itself faces nothing but forest. The “Check rates” button below routes you straight to the weekly inventory.',
    ],
    pickCaveat:
      'The weekly discount lives in the booking system once you select 7+ nights, it is not always shown on the headline nightly price. Peak weeks around Christmas book out months ahead; mid-November and late April open up far cheaper.',
    pullQuote: {
      text:
        'The brief was to disappear into the ridge. Use timber that came from the property, glass facing only north, and never raise the roofline above the tree line. What you see is what was already there, we just made it possible to live inside it.',
      attr: 'Studio Puisto · architect statement',
    },
    runnersKicker: 'The other four',
    runnersH2: 'From ski-in apartments to lakeside villas.',
    runnersLead:
      'Each of the four below has a different long-stay rationale, proximity to a lift system, work-from-Lapland weekday infrastructure, family-friendly kitchen, or culturally rich lake-side base.',
    weeklyKicker: 'How weekly rates work',
    weeklyH2: 'The price drops faster than people expect.',
    weeklyP1:
      'Across the properties on this page, the weekly rate is on average <strong>23% cheaper per night</strong> than the headline nightly rate. Levi Residences drops 30%, Pyhä Bear’s Lodge drops 18%, Arctic TreeHouse drops 25%. Most properties don’t advertise this, the discount lives in the booking system once you select 7+ nights.',
    weeklyP2:
      'The shoulder weeks, <strong>mid-November</strong> (right before snow stabilises) and <strong>late April</strong> (right after the snow melts), drop a further 30–50% on top. Aurora is still active in both windows. This is the sweet spot for long stays with a flexible work calendar.',
    marginLabel: 'Booking tactic',
    marginBody:
      'For a 4-week stay, splitting it across two properties can beat a single-property booking, you avoid the “peak week” spikes around Christmas and the February ski holidays, and you actually see two parts of Lapland. The transfer day takes half a day; the money saved usually pays for two extra nights elsewhere.',
    counterKicker: 'Honest counter-recommendation',
    counterH2: 'When NOT to book a long stay.',
    counterP1:
      'For a 2–3 night first trip, skip long-stay rentals. The check-in, grocery shopping and learning-the-stove tax wipes out the savings. Book a hotel instead.',
    counterP2:
      'For a single bucket-list aurora night, glass igloos are the better answer. The roof of glass is the experience you came for; a long-stay cabin gives you a window.',
    counterP3:
      'For mixed-mobility groups, call the property directly before booking, most long-stay cabins are not step-free and the saunas in particular sit in the basement on a wood floor.',
    seeHotels: 'See hotels',
    seeIgloos: 'See glass igloos',
    browseAll: 'Browse Trip.com inventory',
  },
  bookingGuide: {
    metaTitle: 'Lapland Booking Guide | StayInLapland',
    metaDescription:
      'Practical Lapland booking guide, when to come for the best aurora, how to get there, what to pack, what it costs, and cancellation tips.',
    breadcrumb: 'Booking Guide',
    pageHero: {
      eyebrow: 'Plan a real trip',
      title: 'The Lapland Booking Guide.',
      subtitle:
        'Practical, opinionated advice. When to come, how to get there, what to pack, what it actually costs.',
    },
    sections: [
      {
        title: 'When to come',
        body: [
          'Aurora season is late August through early April. The strongest windows are September–October and February–March, when long dark nights overlap with active solar weather.',
          'Avoid late November to mid-December: dark, but the snow is often patchy and many activities have not started.',
          'Christmas and New Year sell out 9 months ahead and prices triple. The local pick is the second half of January, quieter, colder, better aurora.',
        ],
      },
      {
        title: 'How to get there',
        body: [
          'Three Lapland airports cover most of what you would book. Rovaniemi (RVN) for Santa Claus Village and the south, Kittilä (KTT) for Levi and Ylläs, Ivalo (IVL) for Saariselkä, Inari and the north.',
          'Helsinki (HEL) → Lapland is a 90-minute domestic flight. Direct flights from London, Berlin and Paris also exist December–March.',
          'Trains: the Helsinki–Rovaniemi overnight sleeper is slow, but the run up the Bothnian Bay coast through Kemi is genuinely beautiful and the cabin is full of locals doing the same trip.',
        ],
      },
      {
        title: 'What to pack',
        body: [
          'Most properties supply Arctic outerwear (-30°C suits, boots, gloves, hats) included or for a small daily fee. Confirm before flying with a checked bag full of ski gear.',
          'Layers matter more than thickness, merino base + fleece mid + windproof shell. Cotton kills.',
          'Cameras: bring spare batteries inside your jacket. Cold drains them fast.',
        ],
      },
      {
        title: 'Budget reality check',
        body: [
          'Long-stay cabin (weekly): €140–280/night, can sleep 4–6.',
          'Boutique hotel: €140–420/night, breakfast usually included.',
          'Glass igloo, peak season: €400–1500/night for two.',
          'Wilderness lodge suite: €220–950/night depending on the property.',
          'Activities (husky safari, snowmobile, aurora hunt) typically €120–200 per person per outing on top.',
        ],
      },
      {
        title: 'Cancellation policies',
        body: [
          'Most Lapland properties have moved to non-refundable rates for peak weeks. Read the fine print before clicking “book”.',
          'Travel insurance with cancel-for-any-reason coverage is genuinely worth it for trips over €2 000. Aurora chasers cancel for weather all the time.',
          'Our booking partners honour the cancellation terms shown at checkout, book through the redirect on this site to keep the rate visible and consistent.',
        ],
      },
      {
        title: 'Insider tips',
        body: [
          'Saariselkä and Inari are colder, darker and have stronger aurora than Rovaniemi, but Rovaniemi has the airport, the activities, the Santa Claus Village. Mix bases.',
          'If you only have 3 nights, do them in one location. Lapland is bigger than people expect and transfers eat days.',
          'Aurora forecasts (NOAA, Aurora Service Europe) are accurate 30–90 minutes ahead, not days. Stay flexible.',
        ],
      },
    ],
    readyTitle: 'Ready to book?',
    readyLead:
      'Browse hand-picked properties by category, or jump straight to live availability on Trip.com.',
    browseAll: 'Browse all Lapland accommodation',
  },
  whenToGo: {
    metaTitle: 'When to Visit Lapland, month-by-month guide | StayInLapland',
    metaDescription:
      'Month-by-month guide to visiting Finnish Lapland, when aurora is strongest, when snow stabilises, peak vs shoulder rates, and which weeks locals book.',
    breadcrumb: 'When to Go',
    pageHero: {
      eyebrow: 'Month-by-month',
      title: 'When to visit Lapland.',
      subtitle:
        'The right month depends on the trip. Aurora-first, ski-first, long-stay value, Christmas peak, each has a different sweet spot. Here is the editorial month-by-month.',
    },
    authorNote:
      'Compiled from on-the-ground reports across Finnish Lapland.',
    pullQuote: {
      text:
        'Most auroras over Finnish Lapland appear between the evening and the small hours, and the long, dark months from autumn to early spring give the best odds. Clear skies and a little patience matter more than the exact date.',
      attr: 'LaplandVibes, from our partners’ aurora logs across Finnish Lapland',
    },
    months: [
      {
        name: 'September',
        pitch: 'Aurora season opens',
        body:
          'Long dark nights begin. Snow has not yet fallen, this is the “ruska” period when birch turns red and gold. Aurora reads against bare ground, the colours are the most photographed of any month.',
        bestFor: ['Photographers', 'Aurora-first short stays', 'Hiking + aurora combo'],
        avoidIf: ['You came specifically for snow'],
      },
      {
        name: 'October',
        pitch: 'Quiet shoulder',
        body:
          'First snow flurries, but ground rarely stays white before late month. Hotels run shoulder rates (-30% from peak), aurora active, very few tourists. The cheapest aurora window with full activity infrastructure.',
        bestFor: ['Aurora hunters on a budget', 'Long-stay arrival before peak'],
        avoidIf: ['You want skiing or snowmobile guarantees'],
      },
      {
        name: 'November',
        pitch: 'Polar night begins, snow stabilises',
        body:
          'Coldest start to a Lapland winter. In the far north (Utsjoki), the polar night begins in the last days of the month. Snow starts holding in late November, and by month-end most resorts and snow hotels open. Late November is the absolute best value for long stays.',
        bestFor: ['Long stays at -50% rates', 'Repeat visitors who know the cold'],
        avoidIf: ['First-time travellers (snow inconsistency)'],
      },
      {
        name: 'December',
        pitch: 'Christmas peak',
        body:
          'Christmas through New Year is peak everything, peak prices, peak demand, peak Santa Claus tourism in Rovaniemi. Glass igloos triple in price, snow hotels fully open. Aurora still active but weather often cloudier.',
        bestFor: ['Christmas-themed family trips', 'First-timers who want guaranteed snow'],
        avoidIf: ['Budget-sensitive travel', 'Aurora-first stays'],
      },
      {
        name: 'January',
        pitch: 'The local pick',
        body:
          'Second half of January is the quiet sweet spot, peak prices have receded, days lengthen perceptibly, snow is stable, aurora most active. Christmas crowds have left and February school-break crowds have not arrived.',
        bestFor: ['Long stays', 'Honeymooners', 'Aurora photography'],
        avoidIf: ['You need warm weather of any kind'],
      },
      {
        name: 'February',
        pitch: 'Strongest aurora month',
        body:
          'Mid-Feb to mid-March is statistically the strongest aurora window of the year, dark sky overlap with active solar weather. Long stays at peak rates again because of European school breaks; book 6 months ahead.',
        bestFor: ['Glass igloos', 'Aurora bucket-list trips'],
        avoidIf: ['Short-notice planners'],
      },
      {
        name: 'March',
        pitch: 'Light returns',
        body:
          'Days lengthen rapidly, by month-end you have 13 hours of daylight. Aurora still strong on dark mornings and late evenings. Spring skiing on south-facing fells. The most photogenic skiing month.',
        bestFor: ['Ski-in long stays', 'Anyone who wants light + aurora'],
        avoidIf: ['Photographers who came for the polar night vibe'],
      },
      {
        name: 'April',
        pitch: 'Spring snow + light',
        body:
          'Snow still deep and the fell skiing excellent. Aurora season ends in early April as nights become too light. Late April is shoulder again, rates drop 30%, properties still open, sun above horizon for 16+ hours.',
        bestFor: ['Late-season ski long stays', 'Cross-country skiing'],
        avoidIf: ['Aurora-first trips'],
      },
    ],
    bestForLabel: 'Best for',
    skipIfLabel: 'Skip if',
    cheatKicker: 'The local cheat-sheet',
    cheatH2: 'Three weeks the locals book for themselves.',
    cheatP1:
      '<strong class="text-charcoal">Late November (week 47–48).</strong> Snow has just stabilised, the darkest weeks of the year begin, aurora season at full activity. Long-stay rates 40–50% off peak. Some properties not fully open yet, confirm before booking.',
    cheatP2:
      '<strong class="text-charcoal">Second half of January (week 3–4).</strong> The single best aurora-vs-cost week of the season. Christmas crowds gone, February school break has not started, days lengthening, snow fully set. This is when the editor takes vacation.',
    cheatP3:
      '<strong class="text-charcoal">Late April (week 16–17).</strong> Spring skiing peak, sun above horizon 16h/day, snow still deep on north-facing slopes. Aurora window has closed but the light alone is worth the trip. Rates drop 30% after Easter.',
    marginLabel: 'Booking timing',
    marginBody:
      'For peak February: book 6 months out. For late January: 3 months. For shoulder (Nov, late Apr): 6–8 weeks works. Christmas / NYE: 9 months minimum, and have backup dates because peak inventory disappears in spring.',
    readGuide: 'Read the booking guide',
    seeLong: 'See long stays',
  },
  destinationPage: {
    metaTitleSuffix: 'Where to Stay | StayInLapland',
    pageHeroEyebrow: 'Lapland destination',
    notFoundKicker: 'Page not found',
    notFoundTitle: 'Destination not on the list.',
    notFoundBody: 'We currently cover Rovaniemi, Levi, Saariselkä, Inari and Ylläs.',
    backHome: 'Back home',
    authorNoteFor: (n) => `Long-stay angle for ${n}, written and fact-checked with on-the-ground partners.`,
    recommendedIn: (n) => `Recommended in ${n}`,
    whereToStay: 'Where to actually stay.',
    minStayLabel: 'Min stay:',
    perNight: '/ night',
    checkRates: 'Check rates',
    seeAll: 'See all',
    liveAvailabilityIn: (n) => `Searching live availability in ${n}?`,
    networkLeadA: 'The network ranks only 16 properties. Trip.com lists everything else operating in ',
    networkLeadB: ' this winter, flex dates, filter by amenity, see the full inventory.',
    browseInDest: (n) => `Browse Trip.com, ${n}`,
    imageNote:
      'The pictures are illustrative: they show the type of stay and the surrounding landscape, not the property’s own rooms.',
    landscapeAlt: (n) => `Winter landscape around ${n}, Finnish Lapland`,
    bucketLabels: {
      'long-stays': 'long stays',
      'hotels': 'hotels',
      'glass-igloos': 'glass igloos',
      'wilderness': 'wilderness',
    },
  },
  hotelsData: [
    {
      name: 'Arctic TreeHouse Resort',
      location: 'Rovaniemi',
      highlight: 'Design hotel · forest-edge suites',
      description:
        'A 70-suite design hotel built into the pine forest behind Santa Park, Rovaniemi. Each suite has a panoramic glass front facing the trees and a Nordic-minimal interior. The on-site restaurant Rakas cooks locally sourced, and the resort sauna village is open to all guests.',
    },
    {
      name: 'Arctic Light Hotel',
      location: 'Rovaniemi city centre',
      highlight: 'Boutique 57 rooms · 1939 functionalist building',
      description:
        "A boutique 57-room hotel in a 1939 functionalist building, formerly the local newspaper office, rebuilt after the 1944 Lapland War destroyed Rovaniemi. Each floor has a different interior theme; the rooftop suite has its own sauna. The most architecturally serious hotel in the city.",
    },
    {
      name: 'Levi Spirit',
      location: 'Levi',
      highlight: 'Design villas · spa · ski-in/out',
      description:
        "High-end villa hotel at the base of Levi fell. Private outdoor hot tubs, an in-suite sauna in every villa, ski-in/out access to the lifts and a full-service spa. Built for adults, no kids’ programme, just quiet rooms and good food.",
    },
    {
      name: 'Lapland Hotels Saaga',
      location: 'Ylläsjärvi (Ylläs)',
      highlight: 'Ski-in/out at Ylläs · spa & pool · fell-view dining',
      description:
        'The classic hotel on the quieter Ylläsjärvi side of Ylläs, about a hundred metres from the Iso-Ylläs lift, ski-in/ski-out in winter. Pool, spa and gym use is included with standard and superior rooms; the self-catering apartments add private saunas. The Biegga buffet restaurant looks over both the fell and Ylläsjärvi lake.',
    },
    {
      name: 'Star Arctic Hotel',
      location: 'Saariselkä',
      highlight: 'Hilltop · darkest sky · suite & glass cabin mix',
      description:
        'A hybrid property, classic hotel rooms plus glass-roofed cabins on the highest point above Saariselkä. Effectively zero light pollution. The hotel rooms get the same hilltop view through an oversized window and run roughly 40% cheaper than the cabins.',
    },
  ],
  longStaysData: [
    {
      name: 'Arctic TreeHouse Resort, Long Stay',
      location: 'Rovaniemi',
      highlight: 'Design suites · weekly rates · sauna village',
      description:
        'Design suites overlooking pine forest at the edge of Santa Park. Weekly rate drops 25% from nightly. Each suite has a kitchenette, panoramic glass front and access to the resort sauna village, one of the few ways to do a proper long stay in Rovaniemi without renting raw cabin.',
    },
    {
      name: 'Levi Residences, Penthouse Suites',
      location: 'Levi village',
      highlight: '2-bedroom · ski-in · private sauna · weekly rates',
      description:
        'Two-bedroom apartments at the foot of Levi fell, walking distance to lifts and the village. Each unit has a private wood-fired sauna, a real kitchen and a four-night minimum from December through March. The choice for families spending a week skiing without giving up urban amenities.',
    },
    {
      name: 'Lapland Hotels Ounasvaara Chalets',
      location: 'Rovaniemi · Ounasvaara fell',
      highlight: 'Ski-in/out · walk to Rovaniemi centre',
      description:
        'Fully equipped chalets on Ounasvaara fell. Ski-in/ski-out in winter, ten-minute walk to Rovaniemi centre. The most flexible long-stay option if you want a mix of urban convenience and Arctic mornings.',
    },
    {
      name: "Lapland Hotels Bear's Lodge",
      location: 'Pyhä-Luosto National Park',
      highlight: 'National park doorstep · private sauna · families',
      description:
        'Traditional log cabins beside Pyhä-Luosto National Park. Full kitchens, private wood-fired saunas, lake access. The right answer for a multi-week family stay where the days revolve around snowshoeing and cross-country trails, not sightseeing.',
    },
    {
      name: 'Wilderness Hotel Nangu, Lakeside Villas',
      location: 'Lake Inari southern shore',
      highlight: 'Sami-led activities · lake views · long-stay rates',
      description:
        'Lakeside villas on Lake Inari with rooms facing the water. Sami-led ice fishing, ranger-guided wilderness skiing, the Inari Sami Museum twenty minutes away. Long-stay rates from four nights, the most cultural of the lake-based long-stays.',
    },
  ],
  glassIgloosData: [
    {
      name: 'Kakslauttanen Arctic Resort',
      location: 'Saariselkä',
      highlight: 'The original glass igloo · Kelo-Glass available',
      description:
        'The resort that invented the modern glass igloo. Choose Kelo-Glass over the classic Glass Igloos, Kelo pairs the panoramic glass roof with a heated log structure, kitchenette and fireplace. Two-night minimum gets the most out of it.',
    },
    {
      name: 'Levin Iglut',
      location: 'Levi fell',
      highlight: 'Motorised aurora beds · fell-top position',
      description:
        'Premium glass igloos on Levi fell, well above the village light bowl. Motorised beds adjust toward the auroral arc, every unit has a private kitchenette, the engineering is the best of the five Finnish resorts.',
    },
    {
      name: 'Aurora Village',
      location: 'Ivalo',
      highlight: 'Wilderness setting near Ivalo · widely spaced cabins',
      description:
        'Glass-roofed cabins in untouched forest near Ivalo. Cabins are widely spaced for privacy and the surroundings are dark enough that aurora reads through thin cloud. The most remote-feeling glass igloo property on this site.',
    },
    {
      name: 'Aurora Pyramids',
      location: 'Lake Inari',
      highlight: 'Pyramid cabins · lake reflections',
      description:
        'Pyramid-shaped glass-front cabins on the shore of Lake Inari. The frozen lake reflects the auroral arc when wind drops below 3 m/s, a viewing geometry no other Finnish property delivers.',
    },
  ],
  wildernessData: [
    {
      name: 'Iso-Syöte Eagle View Suites',
      location: 'Iso-Syöte (Pudasjärvi, just south of Lapland)',
      highlight: 'Above-treeline · accessible from Oulu',
      description:
        'Pine-built suites at 432 m on the Iso-Syöte fell, the southernmost real fell in Finland. Above-the-treeline aurora viewing without the long flight to Saariselkä, and 90 minutes from Oulu airport.',
    },
    {
      name: 'Wilderness Hotel Muotka',
      location: 'Saariselkä area',
      highlight: 'Aurora wake-up service · hotel comforts',
      description:
        'Aurora cabins with full-wall glass facing the surrounding fells. On-site aurora hunters wake guests when activity rises, useful since most aurora windows happen well after midnight. Hotel comforts in a wilderness location.',
    },
  ],
  destinationsData: [
    {
      slug: 'rovaniemi',
      pitch:
        'The capital of Finnish Lapland, the only Lapland city with a real winter restaurant scene, a working airport hub and a year-round design culture.',
      longStayAngle:
        'The right base if your long stay involves work-from-Lapland weekdays and weekend trips north, fast wifi, Stockholm-direct flights, restaurants open in shoulder season.',
    },
    {
      slug: 'levi',
      pitch:
        "Finland’s biggest ski resort by lift ticket sales, with 25 000 beds, ski-in/out apartments and a real village high street.",
      longStayAngle:
        'Long-stay sense: ski-in/out apartments rent by the week from December through April. The lift system runs daily, the village restaurants open every night, you can do a proper season here.',
    },
    {
      slug: 'saariselka',
      pitch:
        'Higher latitude than Rovaniemi, harder snow, darker sky. The Lapland village that takes winter most seriously.',
      longStayAngle:
        'Long-stay sense: rent a hilltop cabin and write a book. Few distractions. Excellent cross-country network, husky kennels nearby, no urban distractions.',
    },
    {
      slug: 'inari',
      pitch: 'Sami cultural capital, Lake Inari (Finland’s third-largest lake), our northernmost long-stay base.',
      longStayAngle:
        'Long-stay sense: the lake itself is the activity. Ice fishing every morning, cross-country across the frozen lake, Inari Sami Museum and SIIDA cultural centre on the doorstep.',
    },
    {
      slug: 'yllas',
      pitch:
        'Quieter than Levi, longer ski season, around 300 km of maintained cross-country tracks through a national park.',
      longStayAngle:
        'Long-stay sense: the cross-country network is the draw. Cabin rentals here run by the week from late November to early May. The best long-stay choice for skiers who do not need lift-served downhill every day.',
    },
  ],
  allCategoriesSummary: [
    { slug: 'long-stays', description: 'Weekly + monthly rentals, villas, design cabins, ski apartments.' },
    { slug: 'hotels', description: 'Boutique, design and classic Lapland hotels for short stays.' },
    { slug: 'glass-igloos', description: 'The iconic Lapland format, four resorts that earn the name.' },
    { slug: 'wilderness', description: 'Past the last road, two retreats for serious travellers.' },
  ],
};
