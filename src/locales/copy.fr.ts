// French overlay, falls back to copyEN content but overrides the most visible
// surfaces (nav, hero, intro, "four ways", author notes, work-in-Lapland promo,
// newsletter, comparison labels, property cards, trip recommender) so /fr/ ships
// as native French rather than English fallback.
import { copyEN } from './copy.en';
import type { SectionCopy } from './copy';

export const copyFR: SectionCopy = {
  ...copyEN,
  nav: {
    ...copyEN.nav,
    longStays: 'Séjours longue durée',
    hotels: 'Hôtels',
    glassIgloos: 'Igloos de verre',
    wilderness: 'Cabanes en pleine nature',
    whenToGo: 'Quand venir',
    bookingGuide: 'Guide de réservation',
    browseStays: 'Parcourir les hébergements',
    homeAria: 'Accueil StayInLapland',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
  },
  hero: {
    ...copyEN.hero,
    eyebrow: 'Laponie finlandaise · Guide éditorial',
    h1Line1: 'La Laponie, c’est',
    h1Line2: 'bien plus qu’une semaine de vacances.',
    lead: 'Des chalets à la semaine, des hôtels design à Rovaniemi, des igloos de verre pour les nuits inoubliables, et les lodges en pleine nature au-delà de la dernière route. Tarifs vérifiés à partir de',
    leadPriceRange: '140 € à 1 500 €',
    liveLabel: 'Disponibilité en direct · recherche Trip.com',
    browseLongStays: 'Voir les séjours longue durée',
    seeHotels: 'Voir les hôtels',
  },
  newsletter: {
    ...copyEN.newsletter,
    eyebrow: 'Ouvertures longue durée · tarifs basse saison',
    h2: 'Les hébergements que vous ne pouvez pas encore réserver.',
    lead: 'La plupart des chalets longue durée de ce site libèrent leur stock hiver fin août et se revendent en quatre semaines. Nos abonnés reçoivent l’information en avance, ainsi que les semaines de basse saison (novembre, fin avril) où les tarifs chutent de 50 % et où les aurores sont encore actives.',
    placeholder: 'Votre adresse e-mail',
    subscribe: 'S’abonner',
    subscribing: 'Inscription…',
    success: 'Bienvenue. Vérifiez votre boîte mail pour confirmer, la première alerte longue durée arrivera dès la prochaine ouverture des stocks.',
    errorPrefix: 'Inscription impossible, ',
    pleaseTryAgain: 'merci de réessayer',
    footnotePart1: 'Pas de spam. Désinscription en un clic. Voir notre ',
    footnoteLink: 'Politique de confidentialité',
    footnotePart2: '.',
  },
  authorByline: {
    reviewed: 'Relu par le réseau éditorial LaplandVibes',
    defaultNote:
      'Rédigé et vérifié sur place avec nos partenaires en Laponie finlandaise. Nous percevons une commission d’affiliation sur les réservations, mais elle n’influence jamais le choix des hébergements que nous recommandons.',
  },
  affiliateDisclosure:
    'Certains liens de cette page sont des liens d’affiliation. Si vous réservez à travers eux, nous percevons une commission, sans surcoût pour vous. Les hébergements sont choisis au mérite, pas à la commission.',
  langSwitchAria: copyEN.langSwitchAria,
  marginNoteDefault: 'À noter',
  comparison: {
    property: 'Hébergement',
    verdict: 'Verdict',
    nOutOf5: (n) => `${n} sur 5`,
  },
  editorsPick: {
    kicker: 'Coup de cœur de la rédaction',
    perNight: '/ nuit',
    note: 'À noter',
    cta: 'Voir les tarifs et réserver',
  },
  propertyCard: {
    short: '1 à 3 nuits',
    medium: '3 à 6 nuits',
    long: '7 nuits et plus',
    minPrefix: 'Min.',
    perNight: '/ nuit',
    cta: 'Voir les tarifs et réserver',
  },
  workInLaplandPromo: {
    inlineEyebrow: 'Vous venez travailler en Laponie ?',
    inlineBodyPrefix: 'Les emplois saisonniers, les bases de télétravail et les postes en hôtellerie de stations de ski sont sur notre site partenaire ',
    inlineBodyBrand: 'laplandwork.com',
    inlineBodySuffix: '.',
    inlineCta: 'Voir les offres',
    fullEyebrow: 'Site partenaire · laplandwork.com',
    fullH2A: 'Vous venez en Laponie',
    fullH2B: 'pour travailler ?',
    fullP1:
      'Beaucoup des séjours longue durée de ce site sont réservés par des personnes venues pour une saison de ski, un contrat d’ingénierie arctique ou un mois de télétravail, et qui ont fini par tomber amoureuses de la région. Si c’est votre cas, le volet emploi a son propre site.',
    fullP2A: 'LaplandWork.com',
    fullP2B:
      ' est la plateforme centralisée pour l’emploi en Laponie finlandaise, postes saisonniers en hôtellerie, emplois en stations de ski, postes en chenils, postes hospitaliers et techniques à Rovaniemi, Levi, Saariselkä et Inari. Gratuit pour les candidats, trois formules pour les employeurs.',
    fullCta: 'Voir les emplois',
    blocks: [
      { label: 'Hôtellerie saisonnière', tag: 'Levi · Ylläs · Saariselkä' },
      { label: 'Chenils de huskies', tag: 'Saisonnier nov.–avr.' },
      { label: 'Bases de télétravail', tag: 'Toute l’année, fibre' },
      { label: 'Santé + tech', tag: 'Postes permanents' },
    ],
  },
  longTermRentals: {
    eyebrow: 'S’installer en Laponie · 6 mois et plus',
    h2A: 'Vous cherchez un vrai appartement,',
    h2B: 'pas une location touristique ?',
    lead:
      'Les hébergements de ce site sont des locations courtes à moyennes via notre partenaire de réservation, la bonne réponse pour des séjours jusqu’à quatre semaines. Pour 6 mois, un an ou une installation définitive, il vous faut les portails de location finlandais. Voici les six plus actifs pour les annonces en Laponie.',
    process: {
      title: 'Processus type',
      body:
        'E-mail au propriétaire/agent → visite sur place → formulaire de candidature (palkkatodistus + luottotiedot) → caution 1 à 2 mois + premier mois de loyer → clés. Comptez 2 à 6 semaines de délai.',
    },
    cost: {
      title: 'Le budget',
      body:
        'Rovaniemi, T2 : 600 à 900 €/mois. Levi/Saariselkä, T2 (saison d’hiver) : 900 à 1 400 €. Hors saison hivernale dans les villages de ski, les prix baissent de 30 à 40 %. Toutes les sommes incluent l’eau ; l’électricité et le chauffage sont en général en sus.',
    },
    abroad: {
      title: 'Vous venez de l’étranger ?',
      body:
        'Les citoyens de l’UE/EEE peuvent louer librement. Hors UE, il faut un titre de séjour (Migri, traitement 1 à 4 mois). La plateforme emploi laplandwork.com couvre Migri, l’inscription Kela, l’ouverture d’un compte bancaire finlandais, la carte fiscale et toute la checklist d’installation en Laponie.',
    },
    tags: {
      national: 'NATIONAL',
      rentalOnly: 'LOCATION UNIQUEMENT',
      corporate: 'ENTREPRISES',
      classifieds: 'DIRECT PROPRIÉTAIRE',
    },
  },
  tripRecommender: {
    weBook: 'Nous réserverions',
    items: [
      {
        forWho: 'Première fois · 4 à 6 nuits · en famille',
        recommendation: 'Hôtel boutique à Rovaniemi',
        rationale:
          'Un hôtel design comme Arctic Light ou Arctic TreeHouse vous donne la proximité de l’aéroport, une vraie scène gastronomique et la logistique du village du père Noël, sans imposer à la famille un chalet isolé où le chauffage devient un chantier du soir.',
        ctaLabel: 'Voir les hôtels',
      },
      {
        forWho: 'Visiteur régulier · 7 à 14 nuits · une seule base',
        recommendation: 'Chalet longue durée à Levi ou Saariselkä',
        rationale:
          'Posez-vous une semaine. Un appartement deux chambres au Levi Spirit ou un chalet de hauteur près de Saariselkä offre des tarifs hebdomadaires, un sauna privatif et le temps de vraiment s’installer dans la Laponie, au lieu de courir entre les nuits emblématiques.',
        ctaLabel: 'Voir les séjours longue durée',
      },
      {
        forWho: 'Anniversaire · retraite · privatisation de groupe',
        recommendation: 'Un lodge en pleine nature',
        rationale:
          'Un lodge en pleine nature est la façon la plus exclusive de marquer l’occasion. Une suite Eagle View à Iso-Syöte offre un isolement au-dessus de la limite des arbres, et une villa Wilderness Hotel Nangu y ajoute des activités menées par les Samis sur le lac Inari, toutes deux assez privées pour donner l’impression que tout le paysage vous appartient, sans le prix d’une privatisation complète.',
        ctaLabel: 'Voir les lodges en pleine nature',
      },
    ],
  },
  home: {
    ...copyEN.home,
    metaTitle: 'Où loger en Laponie 2026, 16 adresses vérifiées',
    metaDescription:
      'Préparez votre séjour Laponie 2026, 16 adresses vérifiées : chalets dès 140 €/nuit, hôtels design à Rovaniemi, igloos de verre dès 280 € et lodges nature.',
    schemaName: 'StayInLapland, Séjours longue durée et hôtels boutique en Laponie finlandaise',
    breadcrumbHome: 'Accueil',
    stats: { stays: 'Adresses choisies', bases: 'Bases en Laponie', categories: 'Façons de séjourner', months: 'Mois évalués' },
    intro: {
      p1: 'La plupart des classements « meilleurs hébergements de Laponie » placent un igloo de verre en tête, puis vingt autres igloos de verre dans à peu près le même ordre, sans une seule phrase indiquant si l’auteur y a déjà passé plus de deux nuits. Ce guide fait l’inverse.',
      p2: 'Les hébergements de Laponie se répartissent en quatre catégories, locations longue durée, hôtels, igloos de verre et lodges en pleine nature, et les seize adresses qui méritent leur place sont listées ci-dessous. On peut construire à partir d’elles un voyage qui commence par une semaine en chalet près de Levi, se poursuit par deux nuits en hôtel design à Rovaniemi, puis se termine par une seule nuit en igloo de verre avant le retour. C’est ainsi que la Laponie récompense vraiment un séjour prolongé.',
      p3: 'Trois choses que ce guide ne fait pas : agréger des prix, recycler des avis, ni prétendre couvrir des lieux où aucun partenaire du réseau n’a réellement passé la nuit.',
    },
    authorNote: 'Une sélection éditoriale, rédigée et vérifiée sur place avec nos partenaires en Laponie finlandaise.',
    fourWays: {
      kicker: 'Quatre façons de loger',
      h2A: 'Installez-vous quelque part.',
      h2B: 'Ou enchaînez deux étapes.',
      lead:
        'Choisissez la catégorie qui correspond vraiment au voyage que vous voulez faire. Puis choisissez une destination. Nos lecteurs longue durée combinent le plus souvent deux étapes, une semaine de chalet en base, deux nuits ailleurs pour le contraste.',
    },
    propertyWord: 'hébergement',
    propertiesWord: 'hébergements',
    explore: 'Découvrir',
    pullQuote: {
      text:
        'La Laponie est plus vaste que la plupart le pensent, et la route entre Rovaniemi et Saariselkä mange une demi-journée dans chaque sens. L’erreur la plus fréquente d’un premier voyage : réserver trois bases différentes en cinq nuits.',
      attr: 'Rapport hébergement Laponie · Lapin Liitto, 2024',
    },
    tripKicker: 'Vous savez déjà à peu près ce que vous voulez ?',
    tripH2: 'Les raccourcis des locaux.',
    destKicker: 'Cinq bases en Laponie',
    destH2: 'Où en Laponie ?',
    destLead:
      'Chaque destination a sa propre logique pour un séjour prolongé. Cliquez pour voir les hébergements recommandés et l’argumentaire qui défend cette base par rapport aux autres.',
    readGuide: 'Lire le',
    faqKicker: 'Vraies questions, vraies réponses',
    faqH2: 'Avant de cliquer sur quoi que ce soit.',
    faqs: [
      {
        q: 'Qu’est-ce qu’un « séjour longue durée » sur ce site ?',
        a: 'Tout séjour de quatre nuits ou plus compte comme un séjour longue durée, c’est le seuil à partir duquel la plupart des hébergements de Laponie proposent des tarifs hebdomadaires et où une vraie cuisine commence à compter. Les hébergements longue durée mis en avant ici imposent un minimum de 3 à 7 nuits selon l’unité ; chaque fiche l’indique.',
      },
      {
        q: 'Pourquoi la page d’accueil met-elle l’accent sur les longs séjours plutôt que sur les igloos de verre ?',
        a: 'Les igloos de verre sont la forme emblématique de la Laponie et ils ont leur page dédiée. Mais les voyages en Laponie dont on se souvient le plus longtemps ne sont pas trois nuits dans un dôme de verre, ce sont des séjours d’une semaine dans un chalet ou un hôtel design, avec une ou deux nuits ailleurs en complément. Le site reflète la manière dont la Laponie récompense vraiment les visiteurs réguliers.',
      },
      {
        q: 'Kakslauttanen vaut-il vraiment son prix ?',
        a: 'Oui, mais seulement les Kelo-Glass, pas les Glass Igloos classiques. Le Kelo-Glass associe le toit de verre panoramique à une structure en bois chauffée, une kitchenette et une cheminée privée. Deux nuits minimum permettent d’en tirer le meilleur. Meilleures fenêtres aurores : début février et fin mars.',
      },
      {
        q: 'Où loger si mon séjour longue durée inclut du télétravail ?',
        a: 'Rovaniemi. C’est la seule ville de Laponie avec une fibre fiable, des vols quotidiens vers Helsinki et Stockholm, et une vraie scène de restaurants d’hiver qui reste ouverte en demi-saison. Arctic TreeHouse Resort et les Ounasvaara Chalets proposent tous deux des tarifs hebdomadaires et de vrais bureaux.',
      },
    ],
    fullGuideCta: 'Lire le guide de réservation complet',
    categoryDescriptions: {
      longStays: 'Locations à la semaine et au mois, villas, chalets design, appartements de ski.',
      hotels: 'Hôtels boutique, design et grands classiques de Laponie pour des séjours courts.',
      glassIgloos: 'La forme emblématique de la Laponie, quatre adresses qui méritent ce nom.',
      wilderness: 'Au-delà de la dernière route, deux retraites pour voyageurs avertis.',
    },
    categoryNames: {
      longStays: 'Séjours longue durée',
      hotels: 'Hôtels',
      glassIgloos: 'Igloos de verre',
      wilderness: 'Lodges en pleine nature',
    },
  },
  hotels: {
    metaTitle: 'Hôtels boutique et design en Laponie finlandaise',
    metaDescription:
      'Cinq hôtels de Laponie qui valent la réservation, Arctic TreeHouse, Arctic Light, Levi Spirit, Lapland Hotels Saaga et Star Arctic. Pour séjours courts.',
    breadcrumb: 'Hôtels',
    pageHero: {
      eyebrow: 'Cinq hôtels qui valent la réservation',
      title: 'Les hôtels de Laponie.',
      subtitle:
        'Des hôtels boutique, design et résolument classiques, pour les séjours courts, les voyages d’affaires et les deux nuits en ville que l’on greffe autour d’un séjour plus long en chalet.',
    },
    authorNote: 'Cinq adresses recoupées avec les informations publiées par les exploitants et des avis récents de voyageurs au fil de la saison 2025/26.',
    introP1:
      'La Laponie ne manque pas de chaînes de milieu de gamme, Scandic, Cumulus, Sokos, qui font correctement l’essentiel entre 90 et 140 €/nuit. Elles ne figurent pas ici : on les choisit surtout pour « la plus proche de l’aéroport, la moins chère cette semaine-là ».',
    introP2:
      'Les cinq hôtels ci-dessous gagnent leur place pour une autre raison, le design, l’architecture, la vue ou l’équilibre du service. Ce sont les bonnes adresses quand on veut un hôtel qui fait partie des raisons du voyage, pas seulement un point de chute.',
    picksKicker: 'Cinq choix',
    picksH2: 'Sélectionnés, pas agrégés.',
    pullQuote: {
      text:
        'Rovaniemi a été reconstruite trois fois après 1944, la troisième par Alvar Aalto, qui dessina le plan de la ville en forme de bois de renne. L’Arctic Light Hotel se trouve à l’intérieur de ces bois, dans un bâtiment de 1939 qui a survécu aux trois reconstructions.',
      attr: 'Architectural Record · dossier Arctic Light Hotel',
    },
    glanceKicker: 'Les cinq d’un coup d’œil',
    glanceH2: 'Comparatif assumé.',
    rubric:
      'Cinq points, c’est le mieux. Design = style intérieur et qualité des matériaux. Architecture = le bâtiment lui-même. Activités = ski aux pieds, chenils de huskies, culture locale à moins de 15 min.',
    axes: ['Design', 'Architecture', 'Spa / sauna', 'Activités', 'Restaurant'],
    rows: [
      { name: 'Arctic TreeHouse', verdict: 'Le meilleur hôtel design de Rovaniemi.' },
      { name: 'Arctic Light', verdict: 'Le bâtiment le plus intéressant sur le plan architectural.' },
      { name: 'Levi Spirit', verdict: 'Esprit réservé aux adultes. Spa + ski aux pieds.' },
      { name: 'Lapland Hotels Saaga', verdict: 'Milieu-luxe fiable près de l’aéroport de Kittilä.' },
      { name: 'Star Arctic', verdict: 'En haut de colline · ciel le plus sombre · mix chalet/hôtel.' },
    ],
    marginLabel: 'D’initié',
    marginBody:
      'Arctic TreeHouse et Levi Spirit ont chacun leur restaurant, Rakas (TreeHouse) et Spirit Kitchen (Levi). Tous deux travaillent en circuit local. Si vous réservez l’un ou l’autre, réservez la table le jour même où vous réservez la chambre : le week-end, ils affichent complet avant l’hôtel.',
    counterKicker: 'Contre-recommandation honnête',
    counterH2: 'Quand un hôtel n’est pas la réponse.',
    counterP1:
      'Pour 5 nuits ou plus au même rythme, ski, cuisine, sauna, on recommence, un chalet ou un appartement longue durée bat n’importe lequel de ces hôtels sur le coût par nuit et la qualité de vie. L’hôtel s’impose quand les journées diffèrent les unes des autres.',
    counterP2: 'Pour une seule nuit aurore en mode liste de rêves, les igloos de verre gagnent. Aucun des hôtels ci-dessus n’a de toit en verre.',
    seeLong: 'Voir les séjours longue durée',
    seeIgloos: 'Voir les igloos de verre',
    browseAll: 'Parcourir l’offre Trip.com',
  },
  glassIgloos: {
    metaTitle: 'Igloos de verre en Laponie finlandaise | StayInLapland',
    metaDescription:
      'Les igloos de verre de Laponie qui méritent ce nom, Kakslauttanen, Levin Iglut, Aurora Village et Aurora Pyramids. Classés selon le ciel et l’accès.',
    breadcrumb: 'Igloos de verre',
    pageHero: {
      eyebrow: 'La forme emblématique de la Laponie',
      title: 'Les igloos de verre de Laponie finlandaise.',
      subtitle:
        'Le dôme finlandais à toit de verre est né à Saariselkä en 1973. Quatre adresses méritent ce nom aujourd’hui, et la différence entre elles est réelle.',
    },
    authorNote: 'Quatre adresses recoupées avec les informations publiées par les exploitants et des avis récents de voyageurs. Tarifs vérifiés pour la dernière fois : février 2026.',
    pickWhy: [
      'Kakslauttanen figure sur toutes les listes parce qu’elle le mérite. C’est ici qu’est né l’igloo de verre moderne, en 1973, à une époque où « hébergement touristique à Saariselkä » voulait dire une auberge en bois et où l’aurore se regardait depuis le parking.',
      'Il y a un embranchement : réservez les igloos Kelo-Glass, pas les igloos de verre classiques. Le Kelo-Glass marie le toit panoramique en verre à une structure en rondins chauffée, une kitchenette privée et une cheminée. Les classiques sont plus petits, plus fréquentés, et la salle de bain est à 50 mètres à pied, par −25 °C.',
      'L’écart de prix tourne autour de 200 €/nuit. Sur trois nuits, le Kelo-Glass rembourse son supplément rien qu’en vous évitant d’enfiler les bottes de neige à 4 h du matin.',
    ],
    pickCaveat:
      'Les igloos de verre classiques coûtent environ 30 % de moins, mais l’expérience est nettement en dessous. Si votre budget plafonne à 400 €/nuit, regardez Aurora Village ou Aurora Pyramids, même ciel, souvent un cadre lac ou nature mieux placé.',
    pullQuote: {
      text:
        'Le premier igloo de verre fut bâti pour que l’on voie l’aurore sans rester dehors par −30 °C. Cinquante ans plus tard, c’est toujours tout l’argumentaire, et ce que chaque imitateur rate, c’est ce qui se passe une fois l’aurore partie.',
      attr: 'Récit des origines de Kakslauttanen · 1973',
    },
    runnersKicker: 'Les trois autres',
    runnersH2: 'Quand Kakslauttanen n’est pas la bonne réponse.',
    glanceKicker: 'Les quatre d’un coup d’œil',
    glanceH2: 'Le comparatif assumé.',
    rubric:
      'Cinq points, c’est le mieux. Accès = facilité depuis l’aéroport le plus proche. Ciel = obscurité + géométrie d’observation. Intimité = isolement vis-à-vis des unités voisines. Confort = salle de bain, cuisine, isolation phonique. Réputation = à quel point l’adresse tient les promesses de la brochure.',
    axes: ['Accès', 'Ciel', 'Intimité', 'Confort', 'Réputation'],
    rows: [
      { name: 'Kakslauttanen', verdict: 'L’originale. Chère. Justifiée pour le Kelo-Glass seulement.' },
      { name: 'Levin Iglut', verdict: 'Meilleure ingénierie. Lits aurore motorisés.' },
      { name: 'Aurora Village', verdict: 'L’ambiance la plus reculée. À 30 min d’Ivalo.' },
      { name: 'Aurora Pyramids', verdict: 'Les reflets du lac dédoublent l’aurore.' },
    ],
    marginLabel: 'Arbitrage',
    marginBody:
      'Aucune adresse ne gagne sur les cinq axes. Aurora Pyramids surpasse tout le monde sur le reflet du ciel mais perd sur l’accès (40 min d’Ivalo). Levin Iglut domine sur l’ingénierie mais se trouve au cœur d’une station de ski animée. Choisissez la priorité qui compte le plus.',
    counterKicker: 'Contre-recommandation honnête',
    counterH2: 'Quand renoncer entièrement aux igloos de verre.',
    counterP1:
      'Pour des séjours de quatre nuits et plus, deux nuits en igloo de verre suivies d’un bloc en chalet longue durée font un meilleur voyage que quatre nuits en igloo. La nouveauté s’émousse après la deuxième nuit ; un hirsimökki avec sauna privé offre la part de Laponie qu’un dôme de verre ne peut pas donner.',
    counterP2:
      'Pour Noël (22 déc. → 2 janv.), les prix triplent et 90 % des disponibilités partent vers les voyages organisés britanniques avant le printemps. Décalez vos dates sur la seconde quinzaine de janvier si possible, plus froid, plus sombre, moitié prix, meilleure aurore.',
    seeLong: 'Voir les séjours longue durée',
    bookingGuideBtn: 'Guide de réservation',
    browseAll: 'Parcourir l’offre Trip.com',
  },
  wilderness: {
    metaTitle: 'Lodges en pleine nature en Laponie | StayInLapland',
    metaDescription:
      'Des lodges au-delà de la dernière route, suites Iso-Syöte Eagle View et Wilderness Hotel Muotka. Aurore au-dessus des arbres et réveil aurore sur place.',
    breadcrumb: 'Pleine nature',
    pageHero: {
      eyebrow: 'Au-delà de la dernière route',
      title: 'Lodges en pleine nature.',
      subtitle:
        'La nouvelle tradition lapone, des retraites signées par des architectes, bâties depuis les années 2010 là où la route touristique s’arrête. Deux lodges, deux définitions de la nature sauvage.',
    },
    authorNote: 'Les informations des deux adresses sont vérifiées à partir des données publiées par les exploitants et d\'avis récents de voyageurs.',
    pickWhy: [
      'Les suites Iso-Syöte Eagle View se trouvent à 432 m sur le vrai fjell le plus au sud de Finlande, des suites en pin, avec observation de l’aurore au-dessus de la ligne des arbres et sans le long vol vers le nord.',
      'Les façades vitrées donnent sur le ciel ouvert : par nuit claire, l’arc auroral se lit depuis le lit. On observe l’aurore depuis sa propre suite au sommet de la crête, et non depuis un abri partagé, l’intimité sans l’engagement d’une privatisation complète.',
      'C’est aussi le lodge en pleine nature sérieux le plus facile d’accès : 90 minutes de l’aéroport d’Oulu, ce qui en fait la rare retraite envisageable même pour un court séjour.',
    ],
    pickCaveat:
      'Le bouton « voir les tarifs » de ce site renvoie vers une recherche Trip.com pour l’offre réservable la plus proche. Les suites Eagle View partent le plus vite les week-ends de ciel dégagé, réservez les dates, pas la météo.',
    pullQuote: {
      text:
        'Le mot « reculé » relève d’habitude du langage marketing. Ici, en haut, c’est vrai. La route s’arrête, la ligne des arbres passe en dessous de vous, et la seule lumière qui reste est celle que le ciel décide de faire. On ne passe pas à l’improviste dans un endroit pareil, on s’y engage.',
      attr: 'Sur la route du fjell d’Iso-Syöte, le regard vers le haut',
    },
    runnersKicker: 'L’autre',
    runnersH2: 'Quand une suite entière au sommet de la crête, c’est trop.',
    glanceKicker: 'Deux définitions de la nature sauvage',
    glanceH2: 'D’un coup d’œil.',
    rubric:
      'Isolement = à quel point on se sent réellement seul. Service = ratio personnel/clients. Activités = expériences guidées incluses ou disponibles.',
    axes: ['Accès', 'Isolement', 'Service', 'Activités', 'Facteur unique'],
    rows: [
      { name: 'Iso-Syöte Eagle View', verdict: 'Au-dessus de la ligne des arbres. Le plus simple depuis le sud de la Finlande.' },
      { name: 'Hotel Muotka', verdict: 'Service de réveil aurore sur place. Confort hôtelier.' },
    ],
    marginLabel: 'Réveil aurore à Muotka',
    marginBody:
      'Le Wilderness Hotel Muotka emploie un chasseur d’aurores de garde qui surveille l’indice Kp et frappe physiquement aux portes quand les aurores s’ouvrent. C’est la meilleure prestation de toutes les adresses de ce guide, et elle vaut la différence de prix pour les voyages d’une seule nuit.',
    counterKicker: 'Contre-recommandation honnête',
    counterH2: 'Les lodges en pleine nature ne sont pas pour tout le monde.',
    counterP1:
      'Les deux lodges sont à 1 à 3 heures de transfert de l’aéroport le plus proche. Pour des voyages de moins de trois nuits, le temps passé en transit est disproportionné.',
    counterP2:
      'Pour qui découvre l’Arctique : faites d’abord un séjour à Rovaniemi ou Saariselkä. Un lodge en pleine nature à privatiser entièrement est du gâchis pour quelqu’un qui apprend encore ce qu’est le −25 °C.',
    seeLong: 'Voir les séjours longue durée',
    browseAll: 'Parcourir l’offre Trip.com',
  },
  longStays: {
    metaTitle: 'Séjours longue durée en Laponie finlandaise | StayInLapland',
    metaDescription:
      'Cinq adresses longue durée en Laponie pour une semaine ou plus, Arctic TreeHouse, penthouses de Levi, chalets d’Ounasvaara, chalets de Pyhä et villas d’Inari.',
    breadcrumb: 'Séjours longue durée',
    pageHero: {
      eyebrow: 'Cinq adresses longue durée',
      title: 'Restez une semaine. Ou un mois.',
      subtitle:
        'La bonne réponse pour les habitués, les télétravailleurs, les familles et tous ceux dont le voyage en Laponie dépasse trois nuits. Tarifs hebdomadaires, saunas privés, vraies cuisines, des suites design aux appartements ski aux pieds.',
    },
    authorNote:
      'Cinq adresses recoupées avec nos partenaires sur place et les calendriers de tarifs hebdomadaires de la saison 2025/26.',
    pickWhy: [
      'L’Arctic TreeHouse Resort est la réponse quand la question est « comment faire un vrai séjour longue durée à Rovaniemi sans louer un chalet brut ? » Des suites design bâties dans la forêt de pins à la lisière du Santa Park, chacune avec kitchenette et une façade vitrée panoramique tournée vers les arbres.',
      'Le tarif hebdomadaire baisse d’environ 25 % par rapport au tarif à la nuit, et chaque suite donne accès au village de saunas du resort, une semaine ici coûte donc moins cher par nuit qu’une série de réservations d’une nuit, avec bien plus de place pour vraiment s’installer.',
      'C’est aussi la base la plus flexible de cette liste : l’aéroport, les restaurants et la culture design de Rovaniemi sont à dix minutes, alors que la suite elle-même ne donne que sur la forêt. Le bouton « Voir les tarifs » ci-dessous vous mène directement à l’offre hebdomadaire.',
    ],
    pickCaveat:
      'La remise hebdomadaire apparaît dans le système de réservation une fois 7 nuits ou plus sélectionnées, elle ne figure pas toujours dans le tarif à la nuit affiché. Les semaines de pointe autour de Noël sont complètes des mois à l’avance ; la mi-novembre et la fin avril sont bien moins chères.',
    pullQuote: {
      text:
        'La commande était de disparaître dans la crête. Utiliser le bois venu du domaine, du verre orienté uniquement au nord, et ne jamais élever la toiture au-dessus de la cime des arbres. Ce que vous voyez était déjà là, nous avons seulement rendu possible d’habiter dedans.',
      attr: 'Studio Puisto · note de l’architecte',
    },
    runnersKicker: 'Les quatre autres',
    runnersH2: 'Des appartements ski aux pieds aux villas au bord du lac.',
    runnersLead:
      'Chacune des quatre adresses ci-dessous a sa propre logique longue durée, proximité d’un domaine skiable, infrastructure de télétravail en semaine, cuisine adaptée aux familles, ou base culturelle au bord d’un lac.',
    weeklyKicker: 'Comment fonctionnent les tarifs hebdomadaires',
    weeklyH2: 'Le prix baisse plus vite qu’on ne le croit.',
    weeklyP1:
      'Sur les adresses de cette page, le tarif hebdomadaire revient en moyenne à <strong>23 % moins cher par nuit</strong> que le tarif affiché à la nuit. Levi Residences baisse de 30 %, le Pyhä Bear’s Lodge de 18 %, Arctic TreeHouse de 25 %. La plupart ne l’affichent pas, la remise apparaît dans le moteur de réservation dès que vous sélectionnez 7 nuits ou plus.',
    weeklyP2:
      'Les semaines charnières, <strong>mi-novembre</strong> (juste avant que la neige se stabilise) et <strong>fin avril</strong> (juste après la fonte), retirent encore 30 à 50 % par-dessus. L’aurore reste active sur ces deux fenêtres. C’est le point idéal pour un long séjour avec un calendrier de travail souple.',
    marginLabel: 'Tactique de réservation',
    marginBody:
      'Pour un séjour de 4 semaines, le répartir sur deux adresses peut battre une réservation unique, vous évitez le pic de la « semaine de pointe » qui frappe à Noël et au Mardi gras, et vous découvrez réellement deux facettes de la Laponie. Le jour de transfert prend une demi-journée ; l’économie réalisée paie en général deux nuits supplémentaires ailleurs.',
    counterKicker: 'Contre-recommandation honnête',
    counterH2: 'Quand NE PAS réserver un séjour longue durée.',
    counterP1:
      'Pour un premier voyage de 2 à 3 nuits, oubliez les locations longue durée. L’arrivée, les courses et l’impôt « apprendre à allumer la cuisinière » effacent les économies. Réservez plutôt un hôtel.',
    counterP2:
      'Pour une unique nuit aurore en mode liste de rêves, les igloos de verre sont la meilleure réponse. Le toit de verre est l’expérience pour laquelle vous êtes venu ; un chalet longue durée vous offre une fenêtre.',
    counterP3:
      'Pour les groupes à mobilité mixte, appelez directement l’adresse avant de réserver, la plupart des chalets longue durée ne sont pas de plain-pied, et le sauna en particulier se trouve souvent au sous-sol, sur un plancher en bois.',
    seeHotels: 'Voir les hôtels',
    seeIgloos: 'Voir les igloos de verre',
    browseAll: 'Parcourir l’offre Trip.com',
  },
  bookingGuide: {
    metaTitle: 'Guide de réservation Laponie, quand, comment, quoi emporter',
    metaDescription:
      'Guide pratique de réservation pour la Laponie, quand venir pour la meilleure aurore, comment s’y rendre, quoi emporter, le coût réel et les conseils d’initiés.',
    breadcrumb: 'Guide de réservation',
    pageHero: {
      eyebrow: 'Préparer un vrai voyage',
      title: 'Le guide de réservation Laponie.',
      subtitle:
        'Des conseils pratiques et assumés. Quand venir, comment s’y rendre, quoi emporter, ce que ça coûte vraiment.',
    },
    sections: [
      {
        title: 'Quand venir',
        body: [
          'La saison des aurores court de fin août à début avril. Les fenêtres les plus fortes sont septembre-octobre et février-mars, quand les longues nuits noires recoupent une météo solaire active.',
          'Évitez de fin novembre à mi-décembre : sombre, mais la neige est souvent irrégulière et beaucoup d’activités n’ont pas commencé.',
          'Noël et le Nouvel An affichent complet 9 mois à l’avance et les prix triplent. Le choix des locaux : la seconde quinzaine de janvier, plus calme, plus froid, meilleure aurore.',
        ],
      },
      {
        title: 'Comment s’y rendre',
        body: [
          'Trois aéroports lapons couvrent l’essentiel de ce que vous réserverez. Rovaniemi (RVN) pour le village du père Noël et le sud, Kittilä (KTT) pour Levi et Ylläs, Ivalo (IVL) pour Saariselkä, Inari et le nord.',
          'Helsinki (HEL) → Laponie, c’est un vol intérieur de 90 minutes. Des vols directs depuis Londres, Berlin et Paris existent aussi de décembre à mars.',
          'Trains : le train de nuit Helsinki–Rovaniemi est lent, mais l’aube sur Tornio est franchement belle et la voiture est pleine de locaux qui font le même trajet.',
        ],
      },
      {
        title: 'Quoi emporter',
        body: [
          'La plupart des adresses fournissent l’équipement arctique (combinaisons −30 °C, bottes, gants, bonnets) inclus ou contre un petit supplément journalier. Confirmez avant de partir avec une valise pleine de matériel de ski en soute.',
          'Les couches comptent plus que l’épaisseur, sous-vêtement mérinos + polaire + coupe-vent. Le coton est à proscrire.',
          'Appareils photo : emportez des batteries de rechange contre vous, à l’intérieur de la veste. Le froid les vide vite.',
        ],
      },
      {
        title: 'Budget, le point honnête',
        body: [
          'Chalet longue durée (à la semaine) : 140–280 €/nuit, peut coucher 4 à 6 personnes.',
          'Hôtel boutique : 140–420 €/nuit, petit-déjeuner généralement inclus.',
          'Igloo de verre, haute saison : 400–1 500 €/nuit pour deux.',
          'Suite en lodge nature : 220–950 €/nuit selon l’adresse.',
          'Activités (safari en traîneau de huskies, motoneige, chasse à l’aurore) : en général 120–200 € par personne et par sortie, en plus.',
        ],
      },
      {
        title: 'Conditions d’annulation',
        body: [
          'La plupart des adresses lapones sont passées à des tarifs non remboursables pour les semaines de pointe. Lisez les petites lignes avant de cliquer sur « réserver ».',
          'Une assurance voyage avec annulation pour motif libre vaut vraiment le coup pour les voyages au-delà de 2 000 €. Les chasseurs d’aurores annulent sans cesse pour la météo.',
          'Nos partenaires de réservation respectent les conditions d’annulation affichées au moment de la réservation, réservez via la redirection de ce site pour garder un tarif visible et cohérent.',
        ],
      },
      {
        title: 'Conseils d’initiés',
        body: [
          'Saariselkä et Inari sont plus froids, plus sombres et offrent une aurore plus forte que Rovaniemi, mais Rovaniemi a l’aéroport, les activités, le village du père Noël. Combinez vos bases.',
          'Si vous n’avez que 3 nuits, faites-les au même endroit. La Laponie est plus grande qu’on ne le pense et les transferts grignotent les journées.',
          'Les prévisions d’aurore (NOAA, Aurora Service Europe) sont fiables à 30–90 minutes, pas à plusieurs jours. Restez souple.',
        ],
      },
    ],
    readyTitle: 'Prêt à réserver ?',
    readyLead:
      'Parcourez nos adresses triées sur le volet par catégorie, ou passez directement aux disponibilités en direct sur Trip.com.',
    browseAll: 'Parcourir tous les hébergements de Laponie',
  },
  whenToGo: {
    metaTitle: 'Quand visiter la Laponie, guide mois par mois',
    metaDescription:
      'Guide mois par mois pour visiter la Laponie, quand l’aurore est la plus forte, quand la neige se stabilise et les semaines que les locaux réservent pour eux.',
    breadcrumb: 'Quand partir',
    pageHero: {
      eyebrow: 'Mois par mois',
      title: 'Quand visiter la Laponie.',
      subtitle:
        'Le bon mois dépend du voyage. Aurore avant tout, ski avant tout, valeur longue durée, pic de Noël, chacun a son point idéal. Voici l’éditorial mois par mois.',
    },
    authorNote:
      'Compilé à partir des rapports de nos partenaires sur place dans toute la Laponie finlandaise.',
    pullQuote: {
      text:
        'La plupart des aurores au-dessus de la Laponie finlandaise apparaissent entre le soir et le petit matin, et les longs mois sombres de l’automne au début du printemps offrent les meilleures chances. Un ciel dégagé et un peu de patience comptent plus que la date exacte.',
      attr: 'LaplandVibes, d’après les carnets d’aurores de nos partenaires dans toute la Laponie finlandaise',
    },
    months: [
      {
        name: 'Septembre',
        pitch: 'Ouverture de la saison des aurores',
        body:
          'Les longues nuits noires commencent. La neige n’est pas encore tombée, c’est la période de la « ruska », quand le bouleau vire au rouge et à l’or. L’aurore se détache sur le sol nu, et les couleurs sont les plus photographiées de tous les mois.',
        bestFor: ['Photographes', 'Courts séjours aurore avant tout', 'Combo randonnée + aurore'],
        avoidIf: ['Vous êtes venu spécialement pour la neige'],
      },
      {
        name: 'Octobre',
        pitch: 'Saison charnière tranquille',
        body:
          'Premières averses de neige, mais le sol reste rarement blanc avant la fin du mois. Les hôtels passent en tarif charnière (−30 % par rapport au pic), l’aurore est active, très peu de touristes. La fenêtre aurore la moins chère avec une infrastructure d’activités complète.',
        bestFor: ['Chasseurs d’aurores à petit budget', 'Arrivée longue durée avant le pic'],
        avoidIf: ['Vous voulez la garantie du ski ou de la motoneige'],
      },
      {
        name: 'Novembre',
        pitch: 'La nuit polaire commence, la neige se stabilise',
        body:
          'Le début d’hiver lapon le plus froid. La nuit polaire s’installe au nord de Sodankylä à la mi-mois. La neige commence à tenir fin novembre, d’ici la fin du mois, la plupart des stations et hôtels de neige ouvrent. Fin novembre, c’est le meilleur rapport qualité-prix absolu pour un long séjour.',
        bestFor: ['Longs séjours à −50 % du tarif', 'Habitués qui connaissent le froid'],
        avoidIf: ['Premier voyage (neige irrégulière)'],
      },
      {
        name: 'Décembre',
        pitch: 'Pic de Noël',
        body:
          'De Noël au Nouvel An, tout est au pic, prix au pic, demande au pic, tourisme père Noël au pic à Rovaniemi. Les igloos de verre triplent de prix, les hôtels de neige ouvrent pleinement. L’aurore est toujours active mais le ciel est souvent plus nuageux.',
        bestFor: ['Voyages familiaux sur le thème de Noël', 'Premières fois qui veulent la neige garantie'],
        avoidIf: ['Voyage sensible au budget', 'Séjours aurore avant tout'],
      },
      {
        name: 'Janvier',
        pitch: 'Le choix des locaux',
        body:
          'La seconde quinzaine de janvier est le point idéal tranquille, les prix de pointe ont reflué, les jours rallongent sensiblement, la neige est stable, l’aurore au plus actif. Les foules de Noël sont parties et celles des vacances de février ne sont pas encore là.',
        bestFor: ['Longs séjours', 'Voyages de noces', 'Photographie d’aurores'],
        avoidIf: ['Vous avez besoin de chaleur, sous quelque forme que ce soit'],
      },
      {
        name: 'Février',
        pitch: 'Le mois aux aurores les plus fortes',
        body:
          'De mi-février à mi-mars, c’est statistiquement la fenêtre aurore la plus forte de l’année, recouvrement entre ciel noir et météo solaire active. Les longs séjours repassent en tarif de pointe à cause des vacances scolaires européennes ; réservez 6 mois à l’avance.',
        bestFor: ['Igloos de verre', 'Voyages aurore en mode liste de rêves'],
        avoidIf: ['Planificateurs de dernière minute'],
      },
      {
        name: 'Mars',
        pitch: 'La lumière revient',
        body:
          'Les jours rallongent vite, à la fin du mois, vous avez 13 heures de jour. L’aurore reste forte aux aubes sombres et en soirée tardive. Ski de printemps sur les fjells exposés au sud. Le mois de ski le plus photogénique.',
        bestFor: ['Longs séjours ski aux pieds', 'Qui veut lumière + aurore'],
        avoidIf: ['Photographes venus pour l’ambiance nuit polaire'],
      },
      {
        name: 'Avril',
        pitch: 'Neige de printemps + lumière',
        body:
          'La neige est encore épaisse et le ski sur les fjells excellent. La saison des aurores se termine à la mi-avril, quand les nuits deviennent trop claires. Fin avril, c’est de nouveau la charnière, les tarifs baissent de 30 %, les adresses restent ouvertes, le soleil reste au-dessus de l’horizon plus de 16 heures.',
        bestFor: ['Longs séjours ski de fin de saison', 'Ski de fond'],
        avoidIf: ['Voyages aurore avant tout'],
      },
    ],
    bestForLabel: 'Idéal pour',
    skipIfLabel: 'À éviter si',
    cheatKicker: 'L’antisèche des locaux',
    cheatH2: 'Trois semaines que les locaux réservent pour eux-mêmes.',
    cheatP1:
      '<strong class="text-charcoal">Fin novembre (semaines 47–48).</strong> La neige vient de se stabiliser, la nuit polaire culmine, la saison des aurores bat son plein. Tarifs longue durée à −40 à −50 % du pic. Certaines adresses ne sont pas encore tout à fait ouvertes, confirmez avant de réserver.',
    cheatP2:
      '<strong class="text-charcoal">Seconde quinzaine de janvier (semaines 3–4).</strong> La meilleure semaine de la saison sur le rapport aurore/coût. Foules de Noël parties, vacances de février pas commencées, jours qui rallongent, neige bien posée. C’est là que notre rédacteur prend ses congés.',
    cheatP3:
      '<strong class="text-charcoal">Fin avril (semaines 16–17).</strong> Pic du ski de printemps, soleil 16 h/jour au-dessus de l’horizon, neige encore épaisse sur les versants nord. La fenêtre aurore est close, mais la lumière à elle seule vaut le voyage. Les tarifs baissent de 30 % après Pâques.',
    marginLabel: 'Calendrier de réservation',
    marginBody:
      'Pour le pic de février : réservez 6 mois à l’avance. Fin janvier : 3 mois. Charnière (novembre, fin avril) : 6 à 8 semaines suffisent. Noël / Nouvel An : 9 mois minimum, avec des dates de repli, les disponibilités de pointe disparaissent dès le printemps.',
    readGuide: 'Lire le guide de réservation',
    seeLong: 'Voir les séjours longue durée',
  },
  destinationPage: {
    metaTitleSuffix: 'Où loger | StayInLapland',
    pageHeroEyebrow: 'Destination Laponie',
    notFoundKicker: 'Page introuvable',
    notFoundTitle: 'Destination absente de la liste.',
    notFoundBody: 'Nous couvrons actuellement Rovaniemi, Levi, Saariselkä, Inari et Ylläs.',
    backHome: 'Retour à l’accueil',
    authorNoteFor: (n) => `L’angle longue durée pour ${n}, rédigé et vérifié avec nos partenaires sur place.`,
    recommendedIn: (n) => `Nos recommandations à ${n}`,
    whereToStay: 'Où loger pour de vrai.',
    minStayLabel: 'Séjour min. :',
    perNight: '/ nuit',
    checkRates: 'Voir les tarifs',
    seeAll: 'Voir tout',
    liveAvailabilityIn: (n) => `Chercher les disponibilités en direct à ${n} ?`,
    networkLeadA: 'Notre réseau ne classe que 16 adresses. Trip.com référence tout le reste de ce qui ouvre à ',
    networkLeadB: ' cet hiver, dates flexibles, filtres par équipement, l’offre complète.',
    browseInDest: (n) => `Parcourir Trip.com, ${n}`,
    bucketLabels: {
      'long-stays': 'séjours longue durée',
      'hotels': 'hôtels',
      'glass-igloos': 'igloos de verre',
      'wilderness': 'pleine nature',
    },
  },
  hotelsData: [
    {
      name: 'Arctic TreeHouse Resort',
      location: 'Rovaniemi',
      highlight: 'Hôtel design · suites en lisière de forêt',
      description:
        'Un hôtel design de 70 suites niché dans la pinède derrière le Santa Park, à Rovaniemi. Chaque suite a une façade panoramique en verre tournée vers les arbres et un intérieur d’un minimalisme nordique. Restaurant maison solide, Rakas, en circuit local, et le village sauna du resort est ouvert à tous les hôtes.',
    },
    {
      name: 'Arctic Light Hotel',
      location: 'Centre de Rovaniemi',
      highlight: 'Boutique 57 chambres · bâtiment fonctionnaliste de 1939',
      description:
        'Un hôtel boutique de 57 chambres dans un bâtiment fonctionnaliste de 1939, ancien siège du journal local, reconstruit après la destruction de Rovaniemi lors de la guerre de Laponie en 1944. Chaque étage a son thème d’intérieur ; la suite sur le toit a son propre sauna. L’hôtel le plus sérieux de la ville sur le plan architectural.',
    },
    {
      name: 'Levi Spirit',
      location: 'Levi',
      highlight: 'Villas design · spa · ski aux pieds',
      description:
        'Hôtel-villas haut de gamme au pied du fjell de Levi. Bains nordiques privés en extérieur, sauna dans chaque villa, accès ski aux pieds aux remontées et spa complet. Conçu pour les adultes, pas de programme enfants, juste des chambres calmes et une bonne table.',
    },
    {
      name: 'Lapland Hotels SnowVillage Saaga',
      location: 'Kittilä',
      highlight: 'Classique lapon · saunas privés · proche aéroport',
      description:
        'Un hôtel lapon de milieu-luxe fiable, à dix minutes de l’aéroport de Kittilä. Chaque chambre a son sauna privé ; le restaurant sert du renne local et de l’omble arctique. Moins célèbre que les resorts d’igloos en une, mais constamment bien noté et, au fond, un hôtel, pas un resort.',
    },
    {
      name: 'Star Arctic Hotel',
      location: 'Saariselkä',
      highlight: 'En haut de colline · ciel le plus sombre · mix suites & cabanes de verre',
      description:
        'Une adresse hybride, chambres d’hôtel classiques et cabanes à toit de verre sur le point le plus haut au-dessus de Saariselkä. Pollution lumineuse quasi nulle. Les chambres d’hôtel offrent la même vue de hauteur par une fenêtre surdimensionnée et coûtent environ 40 % de moins que les cabanes.',
    },
  ],
  longStaysData: [
    {
      name: 'Arctic TreeHouse Resort, longue durée',
      location: 'Rovaniemi',
      highlight: 'Suites design · tarifs hebdomadaires · village sauna',
      description:
        'Suites design avec vue sur la pinède, en lisière du Santa Park. Le tarif hebdomadaire baisse de 25 % par rapport à la nuit. Chaque suite a une kitchenette, une façade panoramique en verre et l’accès au village sauna du resort, l’un des rares moyens de faire un vrai long séjour à Rovaniemi sans louer un chalet brut.',
    },
    {
      name: 'Levi Residences, suites penthouse',
      location: 'Village de Levi',
      highlight: '2 chambres · ski aux pieds · sauna privé · tarifs hebdomadaires',
      description:
        'Appartements de deux chambres au pied du fjell de Levi, à distance de marche des remontées et du village. Chaque unité a un sauna privé au feu de bois, une vraie cuisine et un minimum de quatre nuits de décembre à mars. Le choix des familles qui passent une semaine à skier sans renoncer aux commodités urbaines.',
    },
    {
      name: 'Lapland Hotels Ounasvaara Chalets',
      location: 'Rovaniemi · fjell d’Ounasvaara',
      highlight: 'Ski aux pieds · à pied du centre de Rovaniemi',
      description:
        'Chalets tout équipés sur le fjell d’Ounasvaara. Ski aux pieds en hiver, dix minutes à pied du centre de Rovaniemi. L’option longue durée la plus souple si vous voulez mêler commodité urbaine et matins arctiques.',
    },
    {
      name: "Lapland Hotels Bear's Lodge",
      location: 'Parc national de Pyhä-Luosto',
      highlight: 'Parc national au seuil · sauna privé · familles',
      description:
        'Chalets traditionnels en rondins en bordure du parc national de Pyhä-Luosto. Cuisines complètes, saunas privés au feu de bois, accès au lac. La bonne réponse pour un séjour familial de plusieurs semaines où les journées tournent autour de la raquette et des pistes de fond, pas du tourisme.',
    },
    {
      name: 'Wilderness Hotel Nangu, villas au bord du lac',
      location: 'Rive sud du lac Inari',
      highlight: 'Activités menées par les Samis · vue sur le lac · tarifs longue durée',
      description:
        'Villas au bord du lac Inari, chambres face à l’eau. Pêche blanche guidée par des Samis, ski sauvage encadré par un ranger, le musée sami d’Inari à vingt minutes. Tarifs longue durée à partir de quatre nuits, le plus culturel des longs séjours au bord d’un lac.',
    },
  ],
  glassIgloosData: [
    {
      name: 'Kakslauttanen Arctic Resort',
      location: 'Saariselkä',
      highlight: 'L’igloo de verre originel · 1973 · Kelo-Glass disponible',
      description:
        'Le resort qui a inventé l’igloo de verre moderne en 1973. Choisissez le Kelo-Glass plutôt que les igloos de verre classiques, le Kelo marie le toit panoramique en verre à une structure en rondins chauffée, une kitchenette et une cheminée. Deux nuits minimum pour en tirer le meilleur.',
    },
    {
      name: 'Levin Iglut',
      location: 'Fjell de Levi',
      highlight: 'Lits aurore motorisés · position en haut du fjell',
      description:
        'Igloos de verre haut de gamme sur le fjell de Levi, bien au-dessus du halo lumineux du village. Les lits motorisés s’orientent vers l’arc auroral, chaque unité a sa kitchenette privée, l’ingénierie la mieux aboutie des cinq resorts finlandais.',
    },
    {
      name: 'Aurora Village',
      location: 'Ivalo',
      highlight: 'Cadre sauvage près d’Ivalo · cabanes largement espacées',
      description:
        'Cabanes à toit de verre dans une forêt intacte près d’Ivalo. Les cabanes sont largement espacées pour l’intimité et les environs sont assez sombres pour que l’aurore se lise à travers une fine couche de nuages. L’adresse igloo de verre à l’ambiance la plus reculée du site.',
    },
    {
      name: 'Aurora Pyramids',
      location: 'Lac Inari',
      highlight: 'Cabanes pyramides · reflets du lac',
      description:
        'Cabanes en forme de pyramide à façade de verre sur la rive du lac Inari. Le lac gelé reflète l’arc auroral dès que le vent tombe sous 3 m/s, une géométrie d’observation qu’aucune autre adresse finlandaise n’offre.',
    },
  ],
  wildernessData: [
    {
      name: 'Iso-Syöte Eagle View Suites',
      location: 'Iso-Syöte (Pudasjärvi, juste au sud de la Laponie)',
      highlight: 'Au-dessus de la ligne des arbres · accessible depuis Oulu',
      description:
        'Suites en pin à 432 m sur le fjell d’Iso-Syöte, le vrai fjell le plus méridional de Finlande. Observation de l’aurore au-dessus de la ligne des arbres sans le long vol jusqu’à Saariselkä, et à 90 minutes de l’aéroport d’Oulu.',
    },
    {
      name: 'Wilderness Hotel Muotka',
      location: 'Région de Saariselkä',
      highlight: 'Service de réveil aurore · confort hôtelier',
      description:
        'Cabanes aurore avec baie vitrée toute hauteur face aux fjells environnants. Les chasseurs d’aurores sur place réveillent les hôtes quand l’activité monte, utile, puisque la plupart des fenêtres aurore se produisent bien après minuit. Le confort hôtelier en pleine nature.',
    },
  ],
  destinationsData: [
    {
      slug: 'rovaniemi',
      pitch:
        'La capitale de la Laponie finlandaise, la seule ville lapone à avoir une vraie scène gastronomique hivernale, un hub aéroportuaire en activité et une culture du design toute l’année.',
      longStayAngle:
        'La bonne base si votre long séjour mêle télétravail en semaine et escapades vers le nord le week-end, wifi rapide, vols directs vers Stockholm, restaurants ouverts en saison charnière.',
    },
    {
      slug: 'levi',
      pitch:
        'La plus grande station de ski de Finlande, avec le plus large choix d’appartements ski aux pieds et une vraie rue de village.',
      longStayAngle:
        'Logique longue durée : les appartements ski aux pieds se louent à la semaine de décembre à avril. Les remontées tournent tous les jours, les restaurants du village ouvrent chaque soir, on peut y faire une vraie saison.',
    },
    {
      slug: 'saariselka',
      pitch:
        'Latitude plus haute que Rovaniemi, neige plus dure, ciel plus sombre. Le village lapon qui prend l’hiver le plus au sérieux.',
      longStayAngle:
        'Logique longue durée : louez un chalet en haut de colline et écrivez un livre. Peu de distractions. Excellent réseau de ski de fond, chenils de huskies à proximité, aucune distraction urbaine.',
    },
    {
      slug: 'inari',
      pitch: 'Capitale culturelle sami, lac Inari (1 084 km²), la base longue durée la plus septentrionale de Finlande.',
      longStayAngle:
        'Logique longue durée : le lac lui-même est l’activité. Pêche blanche chaque matin, ski de fond en travers du lac gelé, musée sami d’Inari et centre culturel SIIDA au pas de la porte.',
    },
    {
      slug: 'yllas',
      pitch:
        'Plus calme que Levi, saison de ski plus longue, le plus grand réseau de pistes de fond de Laponie (330 km).',
      longStayAngle:
        'Logique longue durée : le réseau de ski de fond est l’attrait. Les locations de chalets s’y font à la semaine de fin novembre à début mai. Le meilleur choix longue durée pour les skieurs qui n’ont pas besoin de descente sur remontées tous les jours.',
    },
  ],
  allCategoriesSummary: [
    { slug: 'long-stays', description: 'Locations à la semaine et au mois, villas, chalets design, appartements de ski.' },
    { slug: 'hotels', description: 'Hôtels boutique, design et grands classiques de Laponie pour des séjours courts.' },
    { slug: 'glass-igloos', description: 'La forme emblématique de la Laponie, quatre adresses qui méritent ce nom.' },
    { slug: 'wilderness', description: 'Au-delà de la dernière route, deux retraites pour voyageurs avertis.' },
  ],
};
