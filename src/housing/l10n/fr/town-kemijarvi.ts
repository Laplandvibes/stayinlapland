/**
 * Ranska (fr) · town-kemijarvi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/rentals.ts RENTAL_TOWNS.kemijarvi (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'tkVaesto', 'kemijarvi', 'kemijarviHaku', 'kemijarviVuostimo', 'kemijarviTalousarvio', 'kemijarviTietoa',
  'kemijarviToihin', 'tkVuokrat', 'tkVuokratPostinumero', 'kela', 'tkAvainluvut', 'osrm', 'redu', 'ahvl', 'rakli',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Louer à Kemijärvi : les 560 logements de la ville',
  metaDescription:
    'Louer à Kemijärvi : les 560 logements de la ville, la demande en ligne, les hausses de loyer 2026, les maisons de Vuostimo près de Pyhä et l’allocation de Kela.',
  breadcrumb: 'Kemijärvi',
  hero: {
    eyebrow: 'Kemijärvi, 6 919 habitants',
    title: 'Louer à Kemijärvi.',
    subtitle:
      'La ville la plus septentrionale de Finlande, où la commune possède 560 logements locatifs et où certains sont vacants. Où déposer un dossier et ce qu’il faut savoir avant de s’installer.',
  },
  authorNote:
    'Population de Statistics Finland, nombre de logements et marche à suivre tirés des pages de la ville de Kemijärvi, hausses de loyer et objectifs d’occupation tirés du budget 2026 de la ville. Vérifié le 15 novembre 2026.',
  intro: [
    'Kemijärvi comptait 6 919 habitants fin 2025, soit 35 de moins qu’un an plus tôt (Statistics Finland). La ville se présente comme la plus septentrionale de Finlande et indique que les services du centre sont accessibles à pied (kemijarvi.fi).',
    'Les deux sociétés immobilières de la ville, Kemijärven Vuokratalot et Kemijärven Töveli, possèdent 560 logements locatifs (kemijarvi.fi). Le budget de la ville considère comme réaliste un objectif de 80–85 % de ces logements loués : il y a donc bien des logements vacants.',
    'Les loyers augmentent : Kemijärven Vuokratalot a relevé ses loyers de 4,5 % le 1er février 2026 et Töveli de 5 % le 1er juillet 2026. Les mêmes hausses sont inscrites dans le plan pour 2027 et 2028 (budget 2026).',
  ],
  sections: [
    {
      id: 'channels',
      kicker: 'À qui s’adresser',
      h2: 'D’abord les sociétés de la ville, puis les portails.',
      band: true,
      cards: [
        {
          title: 'Les logements locatifs de la ville',
          body: 'Les 560 logements de la ville sont au centre, à Särkikangas, Sipovaara, Isokylä, Halosenranta et Vuostimo. Déposez votre demande en ligne ou sur un formulaire papier auprès de Sortteeri (Vapaudenkatu 8). Une demande est valable quatre mois et peut être renouvelée.',
          href: 'https://kemijarvi.fi/asuminen-ja-ymparisto/asuminen/kemijarven-kaupungin-vuokratalot/asunnon-hakeminen/',
          linkLabel: 'kemijarvi.fi : demander un logement',
          event: 'kemijarvi_city',
        },
        {
          title: 'Vuostimo, à 14 km de Pyhä',
          body: 'Des maisons mitoyennes de 1987 appartenant à la ville, à Vuostimo, à environ 35 kilomètres au nord du centre. La station de ski de Pyhätunturi est à 14 kilomètres, ce qui en fait les logements locatifs de la ville les plus proches de Pyhä.',
          href: 'https://kemijarvi.fi/asuminen-ja-ymparisto/asuminen/kemijarven-kaupungin-vuokratalot/vuokratalokohteet/vuostimo/',
          linkLabel: 'kemijarvi.fi : Vuostimo',
          event: 'kemijarvi_vuostimo',
        },
        {
          title: 'Oikotie et Vuokraovi',
          body: 'Annonces de particuliers et d’agences pour la commune de Kemijärvi. Les pages logement de la ville ne recensent aucun bailleur privé : leurs logements se trouvent donc sur les portails.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kemij%C3%A4rvi',
          linkLabel: 'Oikotie : locations à Kemijärvi',
          event: 'oikotie',
        },
      ],
    },
    {
      id: 'prices',
      kicker: 'Ce que coûte un loyer',
      h2: 'Les sociétés de la ville ne publient pas leurs loyers.',
      table: {
        caption: 'Loyer moyen en €/m²/mois, logements locatifs du parc privé, 2026T3',
        head: ['', 'Laponie (région)', 'Ensemble du pays'],
        rows: [
          ['Studios', '17,25', '20,49'],
          ['Deux-pièces', '12,87', '15,07'],
          ['Trois pièces et plus', '11,08', '13,98'],
          ['Tous logements', '13,14', '15,99'],
        ],
        foot: 'Statistics Finland, loyers 2026T3, tableau 15fa. Aucun chiffre distinct n’est publié pour Kemijärvi, et le chiffre régional inclut Rovaniemi, plus chère.',
      },
      paras: [
        '<strong>Le chiffre propre à Kemijärvi date de 2022.</strong> Dans la zone postale du centre-ville, 98100, les studios du parc privé coûtaient en moyenne 12,15 € par m² et les deux-pièces 9,10 € par m² en janvier–mars 2022. Depuis, chaque trimestre est masqué : Statistics Finland ne publie pas le chiffre d’une zone postale quand les observations sont trop peu nombreuses (tableau 13eb).',
        'Les loyers des sociétés de la ville ne sont pas en ligne. Demandez le loyer au secrétaire du logement avant d’accepter une proposition, et rappelez-vous que les loyers ont augmenté en 2026 : de 4,5 % chez Vuokratalot et de 5 % chez Töveli.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Allocation logement de Kela',
      h2: 'Kemijärvi relève des « autres communes » de Kela.',
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
      id: 'work',
      kicker: 'Travail et liaisons',
      h2: 'Réglez la question de l’emploi avant de déménager.',
      bullets: [
        'Selon la ville, ses principaux employeurs, outre la ville elle-même, sont Keitele Group, Festivo Porkka Group et le centre de contact de Kela, ainsi que des commerces, des entreprises de services et de tourisme (budget 2026).',
        'Les chômeurs représentaient 15,6 % de la population active en 2024, contre 11,7 % pour l’ensemble de la Finlande (Statistics Finland).',
        'Suomutunturi est à 46 km du centre et Pyhätunturi à 50 km (OpenStreetMap). Suomu se trouve dans Kemijärvi ; Pyhä appartient à la commune voisine de Pelkosenniemi.',
        'L’aéroport de Rovaniemi est à 80 km (OpenStreetMap), et la ville indique qu’une liaison ferroviaire directe va jusqu’à Helsinki (kemijarvi.fi).',
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
      q: 'Comment demander un logement appartenant à la ville de Kemijärvi ?',
      a: 'Avec la demande en ligne sur le site de la ville, ou sur un formulaire papier auprès de Sortteeri (Vapaudenkatu 8). La demande est valable quatre mois et peut être renouvelée pour quatre mois de plus. Le fichier de crédit est consulté, et la demande n’est pas traitée tant que ses pièces jointes ne sont pas arrivées. Les réunions de sélection des locataires ont en général lieu un mercredi sur deux (kemijarvi.fi).',
    },
    {
      q: 'Y a-t-il des logements à louer disponibles à Kemijärvi ?',
      a: 'Très probablement. Le budget de la ville considère comme réaliste un objectif de 80–85 % de logements loués parmi ceux des sociétés (budget 2026). Demandez au secrétaire du logement quels logements sont libres.',
    },
    {
      q: 'Que coûte un logement à louer à Kemijärvi ?',
      a: 'Aucune moyenne actuelle n’est publiée. Le dernier chiffre pour la zone postale du centre-ville date du début de 2022 : studios 12,15 € par m² et deux-pièces 9,10 € par m². La moyenne de la Laponie était de 13,14 € par m² en juillet–septembre 2026, et elle inclut Rovaniemi, plus chère (Statistics Finland).',
    },
    {
      q: 'Y a-t-il des logements étudiants à Kemijärvi ?',
      a: 'Le centre de formation de Laponie REDU dispose d’un foyer d’étudiants à Kemijärvi. Le logement est gratuit pour les étudiants encore soumis à la scolarité obligatoire, et les places libres sont louées à d’autres étudiants au prix affiché (redu.fi).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Les premières nuits',
    h2: 'Des visites sur place.',
    lead: 'Le moteur de réservation de notre partenaire affiche les chambres et les appartements libres à Kemijärvi et à Pyhä aux prix du jour.',
    chips: [
      { label: 'Kemijärvi', destination: 'Kemijärvi', sid: 'rentals_kemijarvi_first_weeks' },
      { label: 'Pyhä', destination: 'Pyhä', sid: 'rentals_pyha_first_weeks' },
    ],
  },
  sources: pickSources('fr', SOURCES, common.sourceLabels),
};

export default copy;
