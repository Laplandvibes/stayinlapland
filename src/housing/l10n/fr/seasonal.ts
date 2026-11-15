/**
 * Ranska (fr) · seasonal. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/seasonal.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'yle2017', 'yle2023', 'yle2026yllas', 'kesko2026', 'yle2026rovaniemi', 'yle2025das',
  'tkVaesto', 'kittila', 'inari', 'sodankyla', 'rakli', 'dvv',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Logement des saisonniers en Laponie : Levi, Ylläs, Saariselkä',
  metaDescription:
    'Où logent les saisonniers à Levi, Ylläs, Saariselkä et Rovaniemi : logement de l’employeur, bail saisonnier ou communal ; que demander avant de signer.',
  breadcrumb: 'Saisonniers',
  hero: {
    eyebrow: 'Travail saisonnier, l’hiver et l’été',
    title: 'Où logent les saisonniers ?',
    subtitle:
      'Un appartement partagé fourni par l’employeur, un appartement de vacances en bail saisonnier ou un logement communal. La pénurie de logements dans les stations de ski est bien réelle, et voici comment on s’en accommode.',
  },
  authorNote:
    'Chiffres de la pénurie tirés des articles de Yle et de Kesko, 2017–2026 ; canaux de recherche tirés des pages des communes elles-mêmes. Notre site jumeau laplandwork.com traite les emplois eux-mêmes.',
  intro: [
    'La zone touristique de Levi embauche un peu plus de 2 000 saisonniers pour la saison d’hiver, estimait dès 2017 Kristiina Kukkohovi, directrice générale de Levin Matkailu Oy, qui jugeait que la pénurie de logements devenait un gros problème dans toutes les stations de Laponie (Yle, 25 octobre 2017). Elle ne s’est pas résorbée : au printemps 2023, Yle racontait que des travailleurs de Levi et d’Ylläs vivaient dans des appartements de vacances où ils ne pouvaient pas déclarer leur adresse.',
    'En juin 2026, les propriétaires du K-Market Jounin Kauppa à Äkäslompolo ont décidé de construire trois maisons mitoyennes pour leur propre personnel, car les logements sont trop peu nombreux et les loyers ont beaucoup grimpé (Yle, 16 juin 2026). Le magasin emploie environ 20 saisonniers par an, et environ la moitié d’entre eux ont besoin d’un logement en location (Kesko, 17 juin 2026).',
    'À Rovaniemi, l’entreprise de recrutement Career.fi a fait venir environ 250 travailleurs en Laponie et les a logés dans une dizaine d’endroits différents ; deux travailleurs estoniens ont passé deux hivers dans la famille du directeur du développement après que leur appartement locatif est passé en rénovation des canalisations. Trouver un logement, c’est « tout un cirque chaque année » (Yle, 9 mars 2026).',
  ],
  sections: [
    {
      id: 'three-ways',
      kicker: 'Trois façons de vivre une saison',
      h2: 'Logement de l’employeur, bail saisonnier ou appartement communal.',
      cards: [
        {
          title: '1. Le logement de l’employeur',
          body:
            'La réponse la plus courante dans les stations de ski : l’employeur loue des maisons mitoyennes, des chalets et des appartements de vacances pour le personnel pendant toute la saison et retient le loyer sur votre salaire. À Ruka, un groupe de restaurants louait déjà en 2017 quatre biens de vacances de novembre à mai pour son personnel (Yle, 25 octobre 2017). L’avantage : un toit vous attend à l’arrivée. Le risque : le logement s’arrête avec l’emploi.',
        },
        {
          title: '2. Un appartement de vacances en bail saisonnier',
          body:
            'Un appartement de 80 m² de style alpin à Levi : 750 € par mois de mai à novembre, 2 000 € par semaine en haute saison, 1 650 € par mois à l’année (Yle, 25 mai 2023). Bon marché l’été, hors de portée l’hiver. De plus, on ne peut pas obtenir d’adresse officielle dans un appartement de vacances (Yle, 25 mai 2023).',
        },
        {
          title: '3. Un logement communal',
          body:
            'Kittilän Vuokratalot Oy, Inarin Vuokra-asunnot Oy (plus de 500 logements à Ivalo, Inari et Saariselkä) et Asentopuulaaki à Sodankylä (environ 720 logements). Déposez votre dossier en été, avant le début de la saison ; demandez à la société combien de temps une demande reste valable.',
        },
      ],
    },
    {
      id: 'places',
      kicker: 'Les lieux',
      h2: 'La même pénurie, des solutions différentes.',
      band: true,
      cards: [
        {
          title: 'Levi et Kittilä',
          image: { src: '/images/housing-levi-keskusta-card.webp', alt: 'Bâtiments en bois au centre de Levi, un jour d’été' },
          body:
            'La population de Kittilä a augmenté de 2,0 % en 2025, soit la deuxième plus forte hausse des communes de Laponie après Pelkosenniemi et ses 2,4 % (Statistics Finland). Les employeurs louent des maisons mitoyennes pour le personnel pendant toute la saison, et tous les autres cherchent dans le groupe Facebook sur le logement à Levi. Kittilän Vuokratalot Oy propose des logements à la fois dans le village de Kittilä et à Sirkka, à Levi.',
          href: 'https://kittila.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot',
          linkLabel: 'Kittilän Vuokratalot Oy',
          event: 'kittila',
        },
        {
          title: 'Ylläs : Äkäslompolo et Ylläsjärvi',
          image: { src: '/images/housing-seasonal-card-yllas-tunturi.webp', alt: 'Le fjeld Ylläs vu de l’autre côté du lac à Äkäslompolo, un matin de septembre' },
          body:
            'Les commerçants construisent pour eux-mêmes : les trois maisons mitoyennes de Jounin Kauppa sont prévues pour novembre–décembre 2026 en l’état actuel des choses, avec des studios, des appartements de deux chambres prévus pour la colocation et des trois-chambres pour les familles, chacun avec un sauna (Kesko, 17 juin 2026). Le premier bâtiment modulaire du village était presque terminé en octobre 2025 (Yle, 16 juin 2026).',
          href: 'https://www.kesko.fi/media/uutiset-ja-tiedotteet/uutiset/2026/lapin-asuntopulaa-ratkomassa-k-market-jounin-kaupan-kauppiaat-rakennuttavat-kolme-rivitaloa-tyontekijoilleen/',
          linkLabel: 'Kesko, 17 juin 2026',
          event: 'yllas',
        },
        {
          title: 'Saariselkä et Ivalo',
          image: { src: '/images/housing-saariselka-hirsitalot.webp', alt: 'Bâtiments en rondins à Saariselkä en novembre' },
          body:
            'La société communale Inarin Vuokra-asunnot Oy a des logements à Saariselkä comme à Ivalo, et la page de la commune recense les bailleurs privés et le groupe Facebook Sodankylä–Inari–Utsjoki. Demandez lors de l’entretien si l’employeur fournit un logement.',
          href: 'https://www.inari.fi/fi/palvelut/asuminen.html',
          linkLabel: 'inari.fi : se loger',
          event: 'inari',
        },
        {
          title: 'Rovaniemi',
          image: { src: '/images/housing-rovaniemi-lappia-card.webp', alt: 'Le bâtiment Lappia (Lappia-talo), au centre de Rovaniemi' },
          body:
            'Étudiants, touristes et saisonniers se disputent les mêmes studios en même temps : à l’été 2026, la fondation de logement étudiant DAS a reçu environ 550 demandes urgentes, soit 15 % de plus qu’un an plus tôt, et près de 90 % des demandeurs voulaient un studio (Yle, 27 juillet 2026).',
          href: 'https://yle.fi/a/74-20213937',
          linkLabel: 'Yle, 9 mars 2026 : la pénurie de logements à Rovaniemi',
          event: 'rovaniemi',
        },
        {
          title: 'Ruka et Kuusamo',
          image: { src: '/images/housing-ruka-kyla-card.webp', alt: 'La place et la tour de guet rouge du village piéton de Ruka, en été' },
          body:
            'Ruka est en Ostrobotnie du Nord, pas en Laponie, mais la saison et la pénurie sont les mêmes. En 2017, le groupe de restaurants de Ruka est passé d’un peu plus de 20 employés permanents à plus de 80 en hiver et a loué quatre biens de vacances pour son personnel de novembre à mai (Yle, 25 octobre 2017).',
          href: 'https://yle.fi/a/3-9895965',
          linkLabel: 'Yle, 25 octobre 2017',
          event: 'ruka',
        },
      ],
    },
    {
      id: 'summer',
      kicker: 'La saison d’été',
      h2: 'L’été n’est pas calme.',
      paras: [
        'Le travail d’été en Laponie est une saison à part entière : le tourisme de Rovaniemi à l’année, les zones de randonnée, les chantiers et le pic estival des commerces. En été, les appartements de vacances se louent au mois (750 € par mois de mai à novembre dans l’exemple de Levi, Yle, 25 mai 2023).',
        'À Rovaniemi, le directeur du développement d’une entreprise de recrutement espère loger les saisonniers sous un même toit l’hiver, et les ouvriers du bâtiment et les équipes sportives l’été (Yle, 9 mars 2026). Pour qui arrive en été, c’est une bonne nouvelle : les logements du personnel construits pour l’hiver sont vides l’été.',
      ],
      image: {
        src: '/images/housing-jouninkauppa.webp',
        alt: 'La façade du magasin K-Market Jounin Kauppa à Äkäslompolo, en été',
        caption:
          'K-Market Jounin Kauppa, Äkäslompolo, juillet 2026. Les propriétaires construisent trois maisons mitoyennes pour leur personnel (Kesko, 17 juin 2026). Photo : LaplandVibes.',
        ratio: '4/3',
      },
    },
    {
      id: 'ask',
      kicker: 'Avant de signer',
      h2: 'Posez ces questions à votre employeur.',
      bullets: [
        'Le logement fait-il partie du contrat de travail ou est-ce un bail distinct ? Combien est retenu sur votre salaire, et cela apparaît-il sur la fiche de paie ?',
        'Une chambre pour vous seul ou partagée ? Combien de personnes dans l’appartement, et votre porte ferme-t-elle à clé ?',
        'Que devient le bail si l’emploi s’arrête avant la fin de la saison, ou se poursuit au-delà ?',
        'Pouvez-vous y déclarer votre adresse ? La déclaration de changement d’adresse auprès du DVV est à faire dans la semaine suivant le déménagement, et un appartement de vacances n’y donne souvent pas droit.',
        'Qui paie l’électricité, l’eau et internet ?',
        'Comment aller au travail sans voiture : distance, bus, ski-bus ?',
        'Y a-t-il un dépôt de garantie, et quand est-il restitué ? Ce que dit la loi : à partir du 1er octobre 2026, dans les 14 jours suivant la fin du bail (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'L’employeur loge-t-il les saisonniers à Levi ?',
      a: 'Souvent, mais pas toujours et pas gratuitement. Les employeurs louent des maisons mitoyennes et des appartements de vacances pour le personnel pendant toute la saison et retiennent le loyer sur votre salaire. Demandez l’offre par écrit et vérifiez ce que devient le logement si l’emploi s’arrête.',
    },
    {
      q: 'Quand commencer à chercher un logement pour la saison d’hiver ?',
      a: 'En été. Déposez votre dossier auprès des sociétés de logement communales (Kittilä, Inari, Sodankylä) avant la saison ; dans l’exemple de Levi, un appartement de vacances ne se louait au mois que de mai à novembre (Yle, 25 mai 2023).',
    },
    {
      q: 'Peut-on habiter un appartement de vacances toute la saison ?',
      a: 'Oui, si le propriétaire propose un bail saisonnier, mais on ne peut pas obtenir d’adresse officielle dans un appartement de vacances (Yle, 25 mai 2023).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Les premières nuits',
    h2: 'Avant d’avoir les clés en main.',
    lead:
      'La saison commence souvent avant que le logement soit libre. Le moteur de réservation de notre partenaire affiche les chambres et les appartements disponibles aux prix du jour.',
    chips: [
      { label: 'Levi', destination: 'Levi', sid: 'seasonal_first_nights_levi' },
      { label: 'Ylläs', destination: 'Äkäslompolo', sid: 'seasonal_first_nights_yllas' },
      { label: 'Saariselkä', destination: 'Saariselkä', sid: 'seasonal_first_nights_saariselka' },
      { label: 'Rovaniemi', destination: 'Rovaniemi', sid: 'seasonal_first_nights_rovaniemi' },
    ],
  },
  sources: pickSources('fr', SOURCES, common.sourceLabels),
};

export default copy;
