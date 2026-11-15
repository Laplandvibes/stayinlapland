/**
 * Ranska (fr) · town-ivalo-inari. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/rentals.ts RENTAL_TOWNS.ivalo-inari (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'inari', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Louer à Ivalo et Inari : bailleurs communaux et privés',
  metaDescription:
    'Louer à Ivalo, Inari et Saariselkä : plus de 500 logements communaux (Inarin Vuokra-asunnot Oy), bailleurs privés recensés par la commune et aides de Kela.',
  breadcrumb: 'Ivalo et Inari',
  hero: {
    eyebrow: 'Commune d’Inari, 7 244 habitants',
    title: 'Louer à Ivalo et Inari.',
    subtitle:
      'Le marché locatif le plus septentrional de Finlande : une société communale, quelques bailleurs privés et la saison de Saariselkä. Par où commencer.',
  },
  authorNote:
    'Inarin Vuokra-asunnot Oy et les bailleurs privés tirés de la page logement de la commune d’Inari, population de Statistics Finland, loyers au m² de Statistics Finland (région de Laponie 2026T3). Vérifié le 15 novembre 2026.',
  intro: [
    'La commune d’Inari compte 7 244 habitants (Statistics Finland, 31 décembre 2025), et selon la commune, l’intérêt pour s’y installer a augmenté, ce qui l’a conduite à dresser sur sa page une liste de prestataires de location (inari.fi).',
    'La société communale Inarin Vuokra-asunnot Oy loue plus de 500 logements à Ivalo, Inari, Saariselkä, Nellim et Sevettijärvi, du studio au logement familial. Les bailleurs privés de la liste de la commune sont Bilto Oy, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg Oy et Uni Kodit (inari.fi).',
    'Statistics Finland ne publie pas de chiffre de loyer distinct pour Inari ; le chiffre régional de la Laponie est donc affiché ci-dessous. Le logement des saisonniers de Saariselkä a sa propre page.',
  ],
  sections: [
    {
      id: 'channels',
      kicker: 'À qui s’adresser',
      h2: 'La société communale et la liste de la commune.',
      band: true,
      cards: [
        {
          title: 'Inarin Vuokra-asunnot Oy',
          body: 'La société de logement communale : plus de 500 logements à Ivalo, Inari, Saariselkä, Nellim et Sevettijärvi, à proximité des services de base. Logements vacants et demandes sur le site de la société.',
          href: 'https://inarinvuokra-asunnot.fi/',
          linkLabel: 'inarinvuokra-asunnot.fi',
          event: 'inari_company',
        },
        {
          title: 'Commune d’Inari : les bailleurs privés',
          body: 'La page logement de la commune recense Bilto Oy, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg Oy et Uni Kodit avec leurs coordonnées, ainsi que le groupe Facebook de location Sodankylä–Inari–Utsjoki. Plus d’informations : inari@inari.fi.',
          href: 'https://www.inari.fi/fi/palvelut/asuminen.html',
          linkLabel: 'inari.fi : se loger',
          event: 'inari_city',
        },
        {
          title: 'Oikotie et Vuokraovi',
          body: 'Annonces de particuliers pour la commune d’Inari ; les logements d’Ivalo et de Saariselkä sont dans la même recherche. Les annonces sont peu nombreuses : créez donc une alerte de recherche.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/inari',
          linkLabel: 'Oikotie : locations à Inari',
          event: 'oikotie',
        },
        {
          title: 'Pour les saisonniers de Saariselkä',
          body: 'Les employeurs de Saariselkä logent aussi eux-mêmes leur personnel, et la société communale a des logements à Saariselkä. Posez la question du logement lors de l’entretien ; le tableau complet est sur la page des saisonniers.',
          href: '/seasonal-worker-housing',
          linkLabel: 'Le logement des saisonniers',
          event: 'seasonal_page',
        },
      ],
    },
    {
      id: 'prices',
      kicker: 'Ce que coûte un loyer',
      h2: 'Les loyers régionaux de la Laponie au m², juillet–septembre 2026.',
      table: {
        caption: 'Loyer moyen en €/m²/mois, logements locatifs du parc privé, 2026T3',
        head: ['', 'Laponie (région)', 'Ensemble du pays'],
        rows: [
          ['Studios', '17,25', '20,49'],
          ['Deux-pièces', '12,87', '15,07'],
          ['Trois pièces et plus', '11,08', '13,98'],
          ['Tous logements', '13,14', '15,99'],
        ],
        foot: 'Statistics Finland, loyers 2026T3, tableau 15fa. Aucun chiffre distinct n’est publié pour Inari.',
      },
    },
    {
      id: 'housing-allowance',
      kicker: 'Allocation logement de Kela',
      h2: 'Inari relève des « autres communes » de Kela.',
      table: {
        caption: 'Frais de logement maximaux 2026, €/mois, groupe « autres communes » de Kela',
        head: ['Taille du foyer', 'Frais de logement maximaux'],
        rows: [
          ['1 personne', '394'],
          ['2 personnes', '574'],
          ['3 personnes', '734'],
          ['4 personnes', '875'],
          ['Par personne supplémentaire', '+129'],
        ],
        foot: 'Kela, allocation logement générale 2026. L’allocation est de 70 % au maximum des frais de logement admis ; une allocation inférieure à 15 € n’est pas versée.',
      },
    },
    {
      id: 'contract',
      kicker: 'Le contrat',
      h2: 'Le dépôt de garantie et sa restitution.',
      bullets: [
        'Le dépôt de garantie est de trois mois de loyer au maximum (loi sur les baux d’habitation, article 8).',
        'À partir du 1er octobre 2026, le dépôt doit être restitué, ou sa retenue expliquée par écrit, dans les 14 jours suivant la fin du bail (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Où trouver un logement à louer à Ivalo ?',
      a: 'Auprès de la société communale Inarin Vuokra-asunnot Oy, qui a plus de 500 logements à Ivalo, Inari et Saariselkä, ou auprès des bailleurs privés que la commune recense (Bilto, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg, Uni Kodit). Les portails comptent peu d’annonces.',
    },
    {
      q: 'Y a-t-il des locations à Saariselkä ?',
      a: 'La société communale a aussi des logements à Saariselkä, et les employeurs logent eux-mêmes leur personnel saisonnier. Sur le marché libre, les logements de Saariselkä sont surtout des résidences de vacances.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Les premières nuits',
    h2: 'En attendant les clés.',
    lead: 'Le moteur de réservation de notre partenaire affiche les chambres libres à Ivalo et à Saariselkä aux prix du jour.',
    chips: [
      { label: 'Ivalo', destination: 'Ivalo', sid: 'rentals_ivalo_first_weeks' },
      { label: 'Saariselkä', destination: 'Saariselkä', sid: 'rentals_saariselka_first_weeks' },
    ],
  },
  sources: pickSources('fr', SOURCES, common.sourceLabels),
};

export default copy;
