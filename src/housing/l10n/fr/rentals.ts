/**
 * Ranska (fr) · rentals. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/rentals.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'tkVuokrat', 'kela', 'ahvl', 'rakli', 'kuluttajaliittoVuokra', 'yle2025das', 'yle2023', 'rovaniemi', 'das',
  'kittila', 'kemi', 'keminmaa', 'tornio', 'kemijarvi', 'kemijarviHaku', 'kemijarviVuostimo', 'kemijarviTalousarvio',
  'sodankyla', 'asentopuulaaki', 'asentopuulaakiVapaat', 'inari',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Louer un logement en Laponie : Rovaniemi, Levi, Kemi–Tornio',
  metaDescription:
    'Louer en Laponie finlandaise, de Rovaniemi à Inari : loyer au m² (Statistics Finland), dépôt de garantie et allocation logement de Kela.',
  breadcrumb: 'Locations',
  hero: {
    eyebrow: 'Louer en Laponie',
    title: 'Louer un logement en Laponie.',
    subtitle:
      'Où trouver un appartement à louer, ce qu’il coûte et ce que Kela prend en charge. Commune par commune.',
  },
  authorNote:
    'Loyers au m² : statistiques des loyers de Statistics Finland, logements locatifs du marché libre, juillet–septembre 2026. Sociétés de logement communales vérifiées sur les sites des communes et des sociétés elles-mêmes le 15 novembre 2026.',
  intro: [
    'En Laponie, un appartement à louer vient de l’une de ces trois sources : la société de logement de la commune, les portails nationaux ou les groupes locaux. Commencez par la commune. Ses sociétés possèdent des centaines de logements, par exemple un peu plus de 300 à Keminmaa, environ 720 à Sodankylä, 560 à Kemijärvi et plus de 500 à Inari, et vous pouvez déposer un dossier même quand rien n’est libre pour le moment.',
    'Le prix dépend de l’endroit où vous vous installez. À Rovaniemi, un studio de 30 m² coûte en moyenne environ 560 € par mois, et moins ailleurs en Laponie. Dans les villages de fjeld, le loyer suit la saison : pour l’hiver, demandez d’abord à votre employeur s’il propose un logement pour le personnel.',
  ],
  sections: [
    {
      id: 'towns',
      kicker: 'Où sont les logements',
      h2: 'Commune par commune.',
      lead: 'Chaque commune a sa propre page : la société de logement communale et la marche à suivre pour déposer un dossier, le niveau des loyers et le plafond de Kela. Le logement du personnel à Ylläs est traité sur la page des saisonniers.',
      band: true,
      cards: [
        {
          title: 'Rovaniemi',
          image: { src: '/images/housing-rovaniemi-card-talvikatu.webp', alt: 'Immeubles d’habitation et passants dans une rue enneigée de Rovaniemi, en janvier' },
          body:
            'La page de la ville renvoie vers les bailleurs KAS asunnot, M2-Kodit, Tarveasunnot, Avara et Lumo, et vers les services de recherche Oikotie, Vuokraovi et Qasa. Les étudiants s’adressent à la fondation Domus Arctica DAS (environ 1 700 logements, dont 700 studios) ; les moins de 30 ans, à NAL Rovaniemi. Une demande DAS est valable trois mois, et les nouveaux étudiants sont prioritaires en août et en septembre.',
          href: '/rentals/rovaniemi',
          linkLabel: 'Louer à Rovaniemi',
        },
        {
          title: 'Kemi, Keminmaa et Tornio',
          image: { src: '/images/housing-kemi-card-kaupungintalo.webp', alt: 'L’hôtel de ville de Kemi par un matin de janvier enneigé' },
          body:
            'Les logements communaux de Kemi sont gérés par Kiinteistö Oy Itätuuli, le plus grand bailleur de logements locatifs de la ville, avec des appartements à moins de cinq kilomètres du centre. Keminmaan Vuokra-asunnot Oy possède un peu plus de 300 logements, et chaque société a sa propre demande en ligne. À Tornio, les logements de la ville sont gérés par Tornion Krunni Oy (Tornion Vuokra-asunnot Oy).',
          href: '/rentals/kemi-tornio',
          linkLabel: 'Louer à Kemi, Tornio et Keminmaa',
        },
        {
          title: 'Kemijärvi',
          image: { src: '/images/housing-kemijarvi-card-kerrostalo.webp', alt: 'Un immeuble et un vieux pin à Kemijärvi, un soir de juillet' },
          body:
            'Les deux sociétés immobilières de la ville possèdent 560 logements locatifs, et le budget vise un taux d’occupation de 80–85 %, il y a donc bien des logements vacants. Une demande est valable quatre mois. Les maisons en bande de Vuostimo sont à 14 km de Pyhätunturi.',
          href: '/rentals/kemijarvi',
          linkLabel: 'Louer à Kemijärvi',
        },
        {
          title: 'Sodankylä',
          image: { src: '/images/housing-sodankyla-jaamerentie.webp', alt: 'Jäämerentie, la rue principale du village de Sodankylä, en septembre' },
          body:
            'Asentopuulaaki Oy loue les quelque 720 logements de la commune, et sa recherche de logements indique ceux qui sont libres ou sur le point de l’être. Les immeubles anciens se louent environ 9–12,50 € le m², et Käpyriihi, achevé en 2025, 18 €.',
          href: '/rentals/sodankyla',
          linkLabel: 'Louer à Sodankylä',
        },
        {
          title: 'Kittilä et Levi',
          image: { src: '/images/housing-kittila-levi-card-kyla.webp', alt: 'Le village de Levi vu du sommet du fjeld Levi en novembre, avec un lac et des fjelds au loin' },
          body:
            'Kittilän Vuokratalot Oy loue les logements locatifs de la commune ; ses bureaux sont au rez-de-chaussée de la mairie (Valtatie 15). La demande se dépose en ligne sur le site de la société. Les appartements de vacances de Levi passent à la location mensuelle surtout de mai à novembre ; l’hiver, le même appartement se loue à la semaine.',
          href: '/rentals/kittila-levi',
          linkLabel: 'Louer à Kittilä et Levi',
        },
        {
          title: 'Inari, Ivalo et Saariselkä',
          image: { src: '/images/housing-ivalo-joki.webp', alt: 'Ivalo vu de l’autre côté de la rivière Ivalo, un soir d’été' },
          body:
            'Inarin Vuokra-asunnot Oy possède plus de 500 logements à Ivalo, Inari, Saariselkä, Nellim et Sevettijärvi. La page de la commune recense aussi les bailleurs privés (Bilto, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg, Uni Kodit) et le groupe Facebook de location Sodankylä–Inari–Utsjoki.',
          href: '/rentals/ivalo-inari',
          linkLabel: 'Louer à Ivalo et Inari',
        },
      ],
    },
    {
      id: 'portals',
      kicker: 'Portails et groupes',
      h2: 'Les mêmes canaux que dans le reste de la Finlande.',
      bullets: [
        '<a href="https://asunnot.oikotie.fi/vuokra-asunnot/rovaniemi" target="_blank" rel="noopener">Oikotie</a> : portail national. Filtrez par commune, pas seulement par village.',
        '<a href="https://www.vuokraovi.com/vuokra-asunnot/rovaniemi" target="_blank" rel="noopener">Vuokraovi</a> : uniquement des locations.',
        '<a href="https://qasa.fi" target="_blank" rel="noopener">Qasa</a> : cité par la ville de Rovaniemi ; le contrat se signe électroniquement sur la plateforme.',
        '<a href="https://www.tori.fi" target="_blank" rel="noopener">Tori</a> : un site de petites annonces qui propose aussi des appartements à louer. Lisez plus bas ce qu’il faut vérifier avant de payer.',
        'Groupes Facebook : recherche de logement à Levi, Kemi–Keminmaa et Sodankylä–Inari–Utsjoki. Le canal le plus rapide dans les villages de fjeld, mais personne ne garantit les annonces.',
      ],
    },
    {
      id: 'prices',
      kicker: 'Ce que coûte un loyer',
      h2: 'Au mètre carré, pas à l’intuition.',
      lead:
        'Statistics Finland publie les loyers chaque trimestre. Ci-dessous, le loyer moyen des logements locatifs du marché libre en juillet–septembre 2026, en euros par mètre carré et par mois.',
      table: {
        caption: 'Loyer moyen en €/m²/mois, logements locatifs du marché libre, 2026T3',
        head: ['', 'Rovaniemi', 'Laponie (région)', 'Ensemble du pays'],
        rows: [
          ['Studios', '18,63', '17,25', '20,49'],
          ['Deux-pièces', '14,40', '12,87', '15,07'],
          ['Trois pièces et plus', '12,29', '11,08', '13,98'],
          ['Tous logements', '14,63', '13,14', '15,99'],
          ['Nouveaux baux, tous logements', '15,93', '13,39', '16,72'],
        ],
        foot: 'Statistics Finland, loyers 2026T3, tableau 15fa. Nouveau bail = contrats commencés pendant le trimestre ; ils montrent ce qui est demandé en ce moment.',
      },
      paras: [
        '<strong>Comment calculer :</strong> multipliez le loyer au m² par la surface. À Rovaniemi, un studio de 30 m² coûte en moyenne environ 560 € par mois (18,63 × 30) et environ 600 € dans un nouveau bail (20,14 × 30, le chiffre des studios en nouveau bail à Rovaniemi). Un deux-pièces de 50 m² : environ 720 € par mois (14,40 × 50). L’eau et l’électricité s’ajoutent en général.',
        'Les loyers au mètre carré de la Laponie sont inférieurs à la moyenne nationale pour toutes les tailles de logement, et l’écart est le plus faible pour les deux-pièces.',
      ],
      note: {
        label: 'Ce que les statistiques ne voient pas',
        body:
          'Les locations saisonnières dans les stations de ski et les locations meublées de courte durée ne figurent pas dans ces chiffres. Près du centre de Levi, un appartement de 80 m² dans une maison alpine coûtait 750 € par mois de mai à novembre, 2 000 € par semaine en haute saison et 1 650 € par mois à l’année (Yle, 25 mai 2023) : le même appartement, à trois prix.',
      },
    },
    {
      id: 'housing-allowance',
      kicker: 'Allocation logement de Kela',
      h2: 'Le plafond dépend de la commune.',
      lead:
        'L’allocation logement générale couvre au maximum 70 % des frais de logement admis, et ces frais ont un plafond qui dépend de la commune et de la taille du foyer. Kela classe les communes en trois groupes : Rovaniemi fait partie du groupe des 24 grandes communes, et toutes les autres communes de Laponie relèvent des « autres communes », dont le plafond est plus bas.',
      table: {
        caption: 'Frais de logement maximaux 2026, €/mois',
        head: ['Taille du foyer', 'Rovaniemi', 'Autres communes de Laponie'],
        rows: [
          ['1 personne', '447', '394'],
          ['2 personnes', '652', '574'],
          ['3 personnes', '828', '734'],
          ['4 personnes', '981', '875'],
          ['Par personne supplémentaire', '+134', '+129'],
        ],
        foot: 'Kela, allocation logement générale 2026. Une allocation inférieure à 15 € n’est pas versée.',
      },
      paras: [
        'Le plafond signifie qu’à Rovaniemi, le loyer d’une personne seule est pris en compte jusqu’à 447 €, même si le loyer est de 600 €. Le reste est à votre charge. Les revenus réduisent l’allocation par la franchise de base ; le simulateur de Kela calcule votre cas.',
      ],
    },
    {
      id: 'contract',
      kicker: 'Le contrat de location',
      h2: 'Cinq points avant de signer.',
      bullets: [
        '<strong>Le dépôt de garantie est de trois mois de loyer au maximum</strong> (loi sur les baux d’habitation, article 8). Un ou deux mois est l’usage.',
        '<strong>À partir du 1er octobre 2026, le dépôt doit être restitué</strong>, ou sa retenue expliquée par écrit, dans les 14 jours suivant la fin du bail ou la remise du logement (réforme en vigueur le 1er octobre 2026, Rakli).',
        '<strong>Le préavis du locataire est d’un mois.</strong> Pour les contrats conclus à partir du 1er octobre 2026, le préavis du bailleur est de trois mois, et de quatre mois si le bail dure sans interruption depuis au moins deux ans (Rakli). Les contrats conclus avant le 1er octobre 2026 conservent les anciens préavis (Kuluttajaliitto).',
        '<strong>Un contrat à durée déterminée engage les deux parties jusqu’au terme.</strong> Dans le travail saisonnier, le logement de l’employeur est souvent lié au poste : lisez ce qui se passe si l’emploi s’arrête avant la fin de la saison.',
        '<strong>Le fichier de crédit est presque toujours consulté.</strong> Une inscription pour impayé n’interdit pas de louer, mais une société de logement communale ou un bailleur privé a alors plus de chances de convenir que les grandes chaînes.',
      ],
    },
    {
      id: 'before-paying',
      kicker: 'Avant de payer quoi que ce soit',
      h2: 'Trois règles qui protègent votre dépôt.',
      bullets: [
        'Ne versez jamais de dépôt avant une visite, ou une visite en vidéo où l’on voit le logement et les clés dans le même plan.',
        'Contrat écrit, avec le nom du bailleur et son numéro d’entreprise ou son numéro d’identité personnel. Une société de logement communale est le départ le plus sûr si vous ne connaissez pas le marché.',
        'Une location meublée de courte durée n’est pas un bail : un appartement de vacances peut ne pas obtenir d’adresse officielle, et l’absence d’adresse complique les démarches auprès des entreprises, par exemple lors d’une vérification de crédit (Yle, 25 mai 2023).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Combien coûte un studio à Rovaniemi ?',
      a: 'Selon Statistics Finland, le loyer moyen d’un studio du marché libre à Rovaniemi était de 18,63 € par m² en juillet–septembre 2026 et de 20,14 € par m² dans les nouveaux baux. Un studio de 30 m² revient donc à environ 560–600 € par mois, électricité non comprise.',
    },
    {
      q: 'Peut-on louer en Laponie sans historique de crédit en Finlande ?',
      a: 'Oui, mais avec moins de choix. Les sociétés de logement communales et les bailleurs privés décident au cas par cas, et un dépôt plus élevé (la loi autorise jusqu’à trois mois de loyer) ou un garant aide. Les grandes chaînes de location consultent toujours le fichier de crédit.',
    },
    {
      q: 'Quand chercher un logement à Rovaniemi ?',
      a: 'Mieux vaut éviter août et septembre. DAS ne peut alors pas loger tous les demandeurs, et les studios du marché libre se font rares (Yle, 27 juillet 2026). Les studios loués à court terme pour la saison d’hiver reviennent sur le marché au printemps.',
    },
    {
      q: 'Pourquoi un loyer à Levi est-il plusieurs fois plus élevé en hiver ?',
      a: 'Parce qu’en haute saison, le même appartement se loue à la semaine. Dans l’exemple de Yle (25 mai 2023), un appartement de 80 m² dans une maison alpine coûtait 750 € par mois en été et 2 000 € par semaine en hiver. La location mensuelle est possible de mai à novembre ; pour l’hiver, demandez à votre employeur un logement pour le personnel, ou à la société communale de Kittilä.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Les premières semaines',
    h2: 'Visitez le logement sur place.',
    lead:
      'Réservez un hôtel ou un appart-hôtel pour les premières semaines et visitez les logements vous-même avant de signer. Notre moteur partenaire affiche les chambres libres aux prix du jour.',
    chips: [
      { label: 'Rovaniemi', destination: 'Rovaniemi', sid: 'rentals_first_weeks_rovaniemi' },
      { label: 'Levi', destination: 'Levi', sid: 'rentals_first_weeks_levi' },
      { label: 'Tornio', destination: 'Tornio', sid: 'rentals_first_weeks_tornio' },
      { label: 'Ivalo', destination: 'Ivalo', sid: 'rentals_first_weeks_ivalo' },
    ],
  },
  sources: pickSources('fr', SOURCES, common.sourceLabels),
};

export default copy;
