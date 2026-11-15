/**
 * Ranska (fr) · moving. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/moving.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'dvv', 'traficom', 'tkSahko', 'tkPolttoaine', 'kuntaliitto', 'perusopetuslaki', 'fmi', 'foreca',
  'lvDrive', 'lapha', 'laplandwork', 'ahvl', 'rakli',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'S’installer en Laponie : guide pratique du premier mois',
  metaDescription:
    'Déclaration d’adresse, pneus hiver, frais de crèche, électricité et nuit polaire : ce qu’il faut régler pendant le premier mois en Laponie finlandaise.',
  breadcrumb: 'S’installer en Laponie',
  hero: {
    eyebrow: 'S’installer en Laponie : les 30 premiers jours',
    title: 'S’installer en Laponie.',
    subtitle:
      'Changement d’adresse, pneus hiver, crèche, contrat d’électricité et nuit polaire : ce qu’il faut régler pendant le premier mois, et dans quel ordre.',
  },
  authorNote:
    'Délais du DVV, de Traficom et de l’Association des communes de Finlande, durées de la nuit polaire de l’Institut météorologique finlandais, distances tirées des itinéraires routiers de LaplandVibes. Vérifié le 15 novembre 2026.',
  intro: [
    'Les formalités pour s’installer en Laponie sont les mêmes que partout en Finlande, mais trois choses pèsent plus ici que dans le sud : l’hiver dure la moitié de l’année, les distances se comptent en centaines de kilomètres, et dans les petites communes, les services sont réunis en un seul endroit. Cette page est une liste de contrôle, dans l’ordre où les choses doivent être faites.',
    'Si vous venez vous installer en Finlande depuis l’étranger, les titres de séjour, le numéro d’identité finlandais, la carte d’impôt et le compte bancaire sont traités sur notre site jumeau <a href="https://laplandwork.com/fr/moving-to-finland/" target="_blank" rel="noopener">laplandwork.com</a>. Cette page commence quand vous avez les clés en main.',
  ],
  sections: [
    {
      id: 'week-one',
      kicker: 'La première semaine',
      h2: 'Quatre démarches, une échéance.',
      bullets: [
        '<strong>Déclaration de changement d’adresse auprès du DVV</strong> : au plus tôt un mois avant le jour du déménagement et au plus tard une semaine après (DVV). La même déclaration est transmise à Posti. Les services communaux (crèche, école, centre de santé) suivent votre commune de résidence enregistrée : faites donc la déclaration tout de suite.',
        '<strong>Contrat d’électricité.</strong> Le prix total de l’électricité pour un foyer consommant 2 500–4 999 kWh par an s’élevait en moyenne à 23,7 cents le kWh dans toute la Finlande en juin 2026, et à 14,9 cents dans la tranche au-dessus de 15 000 kWh, où se range une maison chauffée à l’électricité (Statistics Finland). La saison de chauffage est longue en Laponie : estimez votre consommation plutôt à la hausse.',
        '<strong>Les soins de santé</strong> relèvent du comté de services de bien-être de Laponie (Lapha). Les soins non urgents passent par votre centre de santé local ; trouvez le plus proche sur le site du comté et inscrivez-vous sur Omakanta.',
        '<strong>Internet.</strong> Demandez à la copropriété ou au bailleur s’il y a la fibre avant de signer. Dans les zones peu peuplées, un routeur mobile est souvent la seule solution, et quiconque télétravaille devrait d’abord tester la connexion dans le logement.',
      ],
    },
    {
      id: 'car',
      kicker: 'Voiture et hiver',
      h2: 'On peut se passer de voiture à Rovaniemi. Pas ailleurs.',
      bullets: [
        '<strong>Pneus hiver :</strong> en Finlande, les pneus hiver sont obligatoires du 1er novembre au 31 mars si la météo ou l’état des routes l’exigent. Les pneus cloutés sont autorisés pendant la même période et à d’autres moments si les conditions l’exigent. Les rainures principales d’un pneu hiver doivent avoir au moins 3,0 mm de profondeur (Traficom).',
        '<strong>Carburant :</strong> l’essence 95E10 coûtait en moyenne 2,09 € le litre dans toute la Finlande en juin 2026 et le diesel 2,15 € (Statistics Finland). Avec les longues distances, ce poste pèse plus en Laponie que dans le sud.',
        '<strong>Distances</strong> tirées des itinéraires routiers de LaplandVibes : Oulu–Kemi 105 km, Kemi–Rovaniemi 118 km, Rovaniemi–Ylläs (Äkäslompolo) 175 km, Sodankylä–Saariselkä 130 km, Levi–Kilpisjärvi 258 km. La Laponie est plus grande qu’elle n’en a l’air sur la carte.',
        '<strong>Chauffe-moteur et chauffage de l’habitacle.</strong> Par grand froid, on réchauffe la voiture avant de partir ; une borne de préchauffage sur le parking est un équipement standard en Laponie. Faites inscrire dans le bail une place de parking avec borne.',
      ],
      image: {
        src: '/images/housing-kittila-airport.webp',
        alt: 'Le terminal de l’aéroport de Kittilä, un jour d’été',
        caption: 'Aéroport de Kittilä, juillet 2026. Levi et Ylläs sont desservis par Kittilä, Rovaniemi par son propre aéroport et Saariselkä par Ivalo. Photo : LaplandVibes.',
        ratio: '16/9',
      },
    },
    {
      id: 'children',
      kicker: 'Les enfants',
      h2: 'La crèche est facturée selon les revenus, l’école est gratuite.',
      bullets: [
        '<strong>Les frais d’éducation de la petite enfance</strong> suivent le revenu de la famille : à partir du 1er août 2026, le tarif le plus élevé est de 335 € par mois et par enfant, et le plus bas facturé de 32 €. Le deuxième enfant paie au plus 40 % du tarif du plus jeune, soit au plus 134 € (Association des communes de Finlande).',
        '<strong>L’enseignement préscolaire et l’enseignement de base</strong> sont gratuits, matériel scolaire et repas compris (loi sur l’enseignement de base, article 31). Le transport scolaire est organisé quand le trajet dépasse cinq kilomètres (article 32), et dans les petites communes, il fait partie du quotidien.',
        'Vous demandez une place en crèche à la commune, et la commune est déterminée par l’adresse enregistrée auprès du DVV. C’est pourquoi la déclaration d’adresse vient en premier, pas en dernier.',
      ],
    },
    {
      id: 'light',
      kicker: 'Lumière et obscurité',
      h2: 'La nuit polaire est plus courte qu’on ne le croit. Sauf à Utsjoki.',
      paras: [
        'Le kaamos, la nuit polaire, signifie que le soleil ne se lève pas au-dessus de l’horizon. D’après l’Institut météorologique finlandais, elle dure presque deux mois à Nuorgam, dans la commune d’Utsjoki, du 25 novembre au 17 janvier, et seulement quatre jours juste avant Noël à Sodankylä. La limite de la nuit polaire passe un peu au nord du cercle polaire, si bien que Rovaniemi n’a pas de véritable nuit polaire (Foreca) : l’hiver, le soleil reste bas, mais il se lève.',
        'L’été renverse la situation. La limite du soleil de minuit est atteinte au cercle polaire, à Rovaniemi, et à Nuorgam le soleil ne se couche pas du 16 mai au 29 juillet (Institut météorologique finlandais). Les rideaux occultants sont l’achat clé de l’été, la lampe de luminothérapie celui de l’hiver.',
      ],
    },
    {
      id: 'before-signing',
      kicker: 'Avant de signer',
      h2: 'Posez ces questions au bailleur.',
      bullets: [
        'Le type de chauffage et qui le paie : le chauffage urbain est en général compris dans le loyer, le chauffage électrique arrive sur votre propre facture.',
        'Une place de parking avec borne de préchauffage et un espace de rangement pour le matériel d’hiver : skis, traîneau, pneus hiver.',
        'La distance jusqu’au magasin, au centre de santé et à l’école les plus proches, et si un bus y va en hiver.',
        'Le dépôt de garantie et sa restitution : trois mois de loyer au maximum (loi sur les baux d’habitation, article 8), et à partir du 1er octobre 2026, une restitution dans les 14 jours suivant la fin du bail (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Quand dois-je déclarer mon changement d’adresse ?',
      a: 'Au plus tôt un mois avant le jour du déménagement et au plus tard une semaine après (DVV). Une seule déclaration vaut à la fois pour l’Agence des services numériques et des données de population et pour Posti.',
    },
    {
      q: 'Quand les pneus hiver sont-ils obligatoires en Laponie ?',
      a: 'La loi dit du 1er novembre au 31 mars si la météo ou l’état des routes l’exigent, et les clous sont autorisés pendant la même période et à d’autres moments si les conditions l’exigent (Traficom). Les pneus se changent donc selon les conditions, pas selon le calendrier.',
    },
    {
      q: 'Rovaniemi a-t-elle une nuit polaire ?',
      a: 'Pas une vraie : la limite de la nuit polaire passe un peu au nord du cercle polaire (Foreca). À Sodankylä, le soleil reste sous l’horizon quatre jours avant Noël, et à Nuorgam presque deux mois (Institut météorologique finlandais).',
    },
  ],
  cta: {
    partner: 'cars',
    kicker: 'Une voiture pour les premières semaines',
    h2: 'Visites, déménagement, courses.',
    lead:
      'Votre propre voiture arrive souvent plus tard. Une location depuis l’aéroport couvre les visites et les premières semaines ; le moteur de notre partenaire compare les loueurs en une seule recherche.',
    chips: [
      { label: 'Rovaniemi (RVN)', destination: 'RVN', sid: 'moving_car_rvn' },
      { label: 'Kittilä (KTT)', destination: 'KTT', sid: 'moving_car_ktt' },
      { label: 'Kemi-Tornio (KEM)', destination: 'KEM', sid: 'moving_car_kem' },
      { label: 'Ivalo (IVL)', destination: 'IVL', sid: 'moving_car_ivl' },
    ],
  },
  sources: pickSources('fr', SOURCES, common.sourceLabels),
};

export default copy;
