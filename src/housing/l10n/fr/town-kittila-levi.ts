/**
 * Ranska (fr) · town-kittila-levi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/rentals.ts RENTAL_TOWNS.kittila-levi (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'kittila', 'yle2023', 'yle2017', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Louer à Kittilä et Levi : logements communaux et saisonniers',
  metaDescription:
    'Louer à Kittilä et Levi : la société communale Kittilän Vuokratalot Oy, loyers saisonniers, logement des saisonniers et aides de Kela.',
  breadcrumb: 'Kittilä et Levi',
  hero: {
    eyebrow: 'Kittilä, 6 973 habitants',
    title: 'Louer à Kittilä et Levi.',
    subtitle:
      'L’une des communes de Laponie dont la population croît le plus vite, et sa station de ski, où le même appartement se loue au mois l’été et à la semaine l’hiver. Où déposer un dossier et quand.',
  },
  authorNote:
    'Population et croissance de Statistics Finland, Kittilän Vuokratalot Oy tiré des pages de la commune et de la société elles-mêmes, prix saisonniers de Levi tirés de Yle, 25 mai 2023. Vérifié le 15 novembre 2026.',
  intro: [
    'Kittilä comptait 6 973 habitants fin 2025 et sa population a augmenté de 2,0 % en un an, la deuxième plus forte hausse des communes de Laponie : seule Pelkosenniemi a crû plus vite, de 2,4 % (Statistics Finland). Le moteur, c’est Levi : en 2017, Levin Matkailu Oy estimait que la zone de la station embaucherait un peu plus de 2 000 saisonniers pour la saison d’hiver (Yle, 25 octobre 2017).',
    'Le marché locatif de Levi suit la saison : un appartement de 80 m² de style alpin près du centre coûtait 750 € par mois de mai à novembre, 2 000 € par semaine en haute saison et 1 650 € par mois à l’année (Yle, 25 mai 2023). Il se peut aussi que vous ne puissiez pas obtenir d’adresse officielle dans un appartement de vacances.',
    'Une location à l’année est plus probable dans le village de Kittilä qu’au centre de Levi. Les logements de la commune sont loués par Kittilän Vuokratalot Oy, et la demande se dépose par voie électronique sur le site de la société (kittila.fi, Kittilän Vuokratalot).',
  ],
  sections: [
    {
      id: 'channels',
      kicker: 'À qui s’adresser',
      h2: 'La société communale, les portails et le groupe de Levi.',
      band: true,
      cards: [
        {
          title: 'Kittilän Vuokratalot Oy',
          body: 'Loue les logements locatifs de la commune. Les bureaux sont au rez-de-chaussée de la mairie (Valtatie 15, 99100 Kittilä). La société ne traite que les demandes électroniques faites par son site, avec les pièces jointes requises. Ses pages ne précisent pas combien de temps une demande reste valable : demandez-le à la société.',
          href: 'https://kittila.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot',
          linkLabel: 'kittila.fi : logements à louer',
          event: 'kittila_city',
        },
        {
          title: 'Oikotie, Vuokraovi et TA-Asunnot',
          body: 'Annonces de particuliers et d’agences pour la commune de Kittilä ; les logements de Levi sont dans la même recherche. TA-Asunnot a ses propres logements locatifs vacants à Kittilä.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kittil%C3%A4',
          linkLabel: 'Oikotie : locations à Kittilä',
          event: 'oikotie',
        },
        {
          title: 'Le logement de l’employeur',
          body: 'Les employeurs de la station louent des maisons mitoyennes et des appartements de vacances pour le personnel pendant toute la saison et retiennent le loyer sur votre salaire. Posez la question du logement par écrit avec l’offre d’emploi. Le tableau complet est sur la page des saisonniers.',
          href: '/seasonal-worker-housing',
          linkLabel: 'Le logement des saisonniers',
          event: 'seasonal_page',
        },
        {
          title: 'Le groupe Facebook sur le logement à Levi',
          body: 'Le canal le plus rapide dans le village de fjeld, et là où les saisonniers trouvent souvent leur logement. Personne ne garantit les annonces : ne versez jamais de dépôt avant une visite, et obtenez le contrat par écrit.',
        },
      ],
    },
    {
      id: 'prices',
      kicker: 'Ce que coûte un loyer',
      h2: 'Le chiffre régional et l’exception de Levi.',
      table: {
        caption: 'Loyer moyen en €/m²/mois, logements locatifs du parc privé, 2026T3',
        head: ['', 'Laponie (région)', 'Ensemble du pays'],
        rows: [
          ['Studios', '17,25', '20,49'],
          ['Deux-pièces', '12,87', '15,07'],
          ['Trois pièces et plus', '11,08', '13,98'],
          ['Tous logements', '13,14', '15,99'],
        ],
        foot: 'Statistics Finland, loyers 2026T3, tableau 15fa. Aucun chiffre distinct n’est publié pour Kittilä, et les loyers saisonniers de Levi ne figurent pas du tout dans les statistiques.',
      },
      paras: [
        '<strong>L’exemple de Levi (Yle, 25 mai 2023) :</strong> un appartement de 80 m² de style alpin à 750 € par mois de mai à novembre = 9,38 € par m², 2 000 € par semaine en haute saison, 1 650 € par mois à l’année = 20,63 € par m². Le même appartement est moins cher que la moyenne régionale l’été et plus cher que le prix national d’un studio à l’année.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Allocation logement de Kela',
      h2: 'Kittilä relève des « autres communes » de Kela.',
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
        foot: 'Kela, allocation logement générale 2026. L’allocation est de 70 % au maximum des frais de logement admis. Dans un appartement de vacances sans adresse enregistrée, les conditions ne sont pas remplies.',
      },
    },
    {
      id: 'when',
      kicker: 'Quand déposer un dossier',
      h2: 'En été, avant le début des tarifs à la semaine.',
      bullets: [
        'La location mensuelle des appartements de vacances n’est possible que de mai à novembre, et en haute saison le prix est un tarif à la semaine (Yle, 25 mai 2023). Pour la saison d’hiver, trouvez le logement en été.',
        'Déposez la demande de la société communale avant la saison et demandez à la société combien de temps elle reste valable.',
        'Le dépôt de garantie est de trois mois de loyer au maximum (loi sur les baux d’habitation, article 8), et à partir du 1er octobre 2026, il est restitué dans les 14 jours suivant la fin du bail (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Où trouver une location pour l’hiver à Levi ?',
      a: 'Très probablement auprès de votre employeur : les entreprises de la station louent des maisons mitoyennes et des appartements de vacances pour le personnel pendant toute la saison. Sur le marché libre, les appartements de Levi se louent à la semaine l’hiver (Yle, 25 mai 2023) ; la location au mois se pratique donc surtout de mai à novembre. La société communale a des logements à la fois dans le village de Kittilä et à Sirkka, à Levi (Kittilän Vuokratalot).',
    },
    {
      q: 'Comment demander un logement communal à Kittilä ?',
      a: 'Avec la demande électronique de Kittilän Vuokratalot Oy sur le site de la société. Les demandes incomplètes, sans les pièces jointes requises, ne sont pas traitées. Les bureaux sont au rez-de-chaussée de la mairie, Valtatie 15 (kittila.fi, Kittilän Vuokratalot).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Les premières nuits',
    h2: 'Avant que le logement soit libre.',
    lead: 'Le moteur de réservation de notre partenaire affiche les chambres et les appartements libres à Levi et à Kittilä aux prix du jour.',
    chips: [
      { label: 'Levi', destination: 'Levi', sid: 'rentals_levi_first_weeks' },
      { label: 'Kittilä', destination: 'Kittilä', sid: 'rentals_kittila_first_weeks' },
    ],
  },
  sources: pickSources('fr', SOURCES, common.sourceLabels),
};

export default copy;
