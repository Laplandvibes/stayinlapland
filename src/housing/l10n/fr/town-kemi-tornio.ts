/**
 * Ranska (fr) · town-kemi-tornio. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/rentals.ts RENTAL_TOWNS.kemi-tornio (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'kemi', 'itatuuli', 'keminmaa', 'keminmaaVuokra', 'tornio', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Louer à Kemi, Tornio et Keminmaa : logements communaux',
  metaDescription:
    'Louer à Kemi, Tornio et Keminmaa, sur la côte de la Laponie : sociétés communales (Itätuuli, Tornion Krunni), agences privées et aides de Kela.',
  breadcrumb: 'Kemi et Tornio',
  hero: {
    eyebrow: 'La côte de la Laponie maritime',
    title: 'Louer à Kemi, Tornio et Keminmaa.',
    subtitle:
      'Les villes jumelles de la côte, où les sociétés de logement communales détiennent des centaines de logements et où les demandes se déposent en ligne. Par où commencer et ce que coûte un loyer.',
  },
  authorNote:
    'Nombre de logements des sociétés tiré des pages des communes de Kemi, de Tornio et de Keminmaa, conditions de demande tirées des pages des sociétés elles-mêmes, loyers au m² de Statistics Finland (région de Laponie 2026T3). Vérifié le 15 novembre 2026.',
  intro: [
    'Kemi compte 19 339 habitants, Tornio 20 823 et Keminmaa 7 576 (Statistics Finland, 31 décembre 2025). Les trois communes sont voisines : le logement peut donc se trouver dans une autre commune que l’emploi.',
    'Les sociétés de logement communales sont la première adresse : les logements communaux de Kemi sont gérés par Kiinteistö Oy Itätuuli (kemi.fi), le plus grand bailleur de logements locatifs de la ville, avec des appartements à moins de cinq kilomètres du centre (itatuuli.fi). Keminmaan Vuokra-asunnot Oy compte 18 immeubles et un peu plus de 300 logements (keminmaa.fi). Chaque société a sa propre demande en ligne. À Tornio, les logements de la ville sont gérés par Tornion Krunni Oy, qui regroupe Tornion Vuokra-asunnot Oy (tornio.fi).',
    'Le tableau actuel des loyers de Statistics Finland n’a pas de ligne distincte pour Kemi ou Tornio ; le chiffre régional de la Laponie est donc affiché ci-dessous. Les chiffres de Rovaniemi sont sur sa propre page.',
  ],
  sections: [
    {
      id: 'prices',
      kicker: 'Ce que coûte un loyer',
      h2: 'Les loyers régionaux de la Laponie au m², juillet–septembre 2026.',
      table: {
        caption: 'Loyer moyen en €/m²/mois, logements locatifs du parc privé, 2026T3',
        head: ['', 'Laponie (région)', 'Rovaniemi', 'Ensemble du pays'],
        rows: [
          ['Studios', '17,25', '18,63', '20,49'],
          ['Deux-pièces', '12,87', '14,40', '15,07'],
          ['Trois pièces et plus', '11,08', '12,29', '13,98'],
          ['Tous logements', '13,14', '14,63', '15,99'],
        ],
        foot: 'Statistics Finland, loyers 2026T3, tableau 15fa. Le chiffre régional inclut Rovaniemi ; le niveau de Kemi–Tornio lui est donc probablement inférieur, mais le tableau actuel ne l’indique pas séparément.',
      },
      paras: [
        '<strong>Exemples à la moyenne régionale :</strong> un studio de 30 m² environ 520 € par mois (17,25 × 30) ; un deux-pièces de 50 m² environ 640 € (12,87 × 50) ; un trois-pièces de 75 m² environ 830 € (11,08 × 75).',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Allocation logement de Kela',
      h2: 'Kemi, Tornio et Keminmaa relèvent des « autres communes » de Kela.',
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
      id: 'channels',
      kicker: 'À qui s’adresser',
      h2: 'D’abord la société communale, puis les agences.',
      band: true,
      cards: [
        {
          title: 'Kemi : Kiinteistö Oy Itätuuli',
          body: 'Les logements locatifs de la ville. Itätuuli est le plus grand bailleur de logements locatifs de Kemi, et ses appartements sont à moins de cinq kilomètres du centre. Sa demande en ligne est valable quatre mois, et aucun dépôt n’est demandé. La page d’informations pour les entreprises de Visit Kemi recense aussi les agences privées : Forenom, Habita Kemi, HVC Group, Kiinteistömaailma, KVP Group, OP Koti Kemi, Pihlajaniemi & Co, Solecco et AJK Asunnot.',
          href: 'https://www.kemi.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
          linkLabel: 'kemi.fi : logements à louer',
          event: 'kemi_city',
        },
        {
          title: 'Keminmaan Vuokra-asunnot Oy',
          body: 'La société de logement appartenant à la commune : 18 immeubles et un peu plus de 300 logements, avec l’eau et le chauffage compris dans le loyer. Sa demande en ligne est valable trois mois, et le dépôt de garantie est d’un mois de loyer.',
          href: 'https://www.keminmaanvuokra-asunnot.fi/asunnonhaku.html',
          linkLabel: 'Keminmaan Vuokra-asunnot : comment faire une demande',
          event: 'keminmaa',
        },
        {
          title: 'Tornio : Tornion Krunni Oy',
          body: 'Gère Tornion Vuokra-asunnot Oy, Tornion Oppilasasuntola Oy et Tornion Palveluasunnot Oy ; le service des locaux de la ville s’occupe aussi des logements que la ville possède directement. Renseignements sur le logement par téléphone, et la page de la ville renvoie aussi vers des bailleurs et des agences privés.',
          href: 'https://www.tornio.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
          linkLabel: 'tornio.fi : logements à louer',
          event: 'tornio_city',
        },
        {
          title: 'Oikotie et Vuokraovi',
          body: 'Annonces de particuliers et d’agences. Cherchez Kemi, Tornio et Keminmaa l’une après l’autre : sur les portails, chaque commune est une recherche à part.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kemi',
          linkLabel: 'Oikotie : locations à Kemi',
          event: 'oikotie',
        },
      ],
    },
    {
      id: 'contract',
      kicker: 'Le contrat',
      h2: 'Deux articles de loi à connaître.',
      bullets: [
        'Le dépôt de garantie est de trois mois de loyer au maximum (loi sur les baux d’habitation, article 8).',
        'À partir du 1er octobre 2026, le dépôt doit être restitué, ou sa retenue expliquée par écrit, dans les 14 jours suivant la fin du bail (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Comment demander un logement communal à Kemi ?',
      a: 'Avec la demande en ligne de Kiinteistö Oy Itätuuli, valable quatre mois. Itätuuli est le plus grand bailleur de logements locatifs de Kemi, avec des appartements à moins de cinq kilomètres du centre, et les loue tous sans dépôt (itatuuli.fi). Keminmaan Vuokra-asunnot Oy a sa propre demande.',
    },
    {
      q: 'Que coûte un loyer à Kemi et à Tornio ?',
      a: 'Le tableau actuel de Statistics Finland n’a pas de ligne distincte pour ces villes. La moyenne régionale de la Laponie était de 13,14 € par m² en juillet–septembre 2026 (studios 17,25, deux-pièces 12,87), et ce chiffre inclut Rovaniemi, plus chère.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Les premières semaines',
    h2: 'Des visites sur place.',
    lead: 'Réservez un hébergement pour les visites et voyez le logement avant de signer.',
    chips: [
      { label: 'Kemi', destination: 'Kemi', sid: 'rentals_kemi_first_weeks' },
      { label: 'Tornio', destination: 'Tornio', sid: 'rentals_tornio_first_weeks' },
    ],
  },
  sources: pickSources('fr', SOURCES, common.sourceLabels),
};

export default copy;
