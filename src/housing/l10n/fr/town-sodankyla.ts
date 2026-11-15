/**
 * Ranska (fr) · town-sodankyla. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/rentals.ts RENTAL_TOWNS.sodankyla (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'tkVaesto', 'sodankyla', 'asentopuulaaki', 'asentopuulaakiHaku', 'asentopuulaakiVapaat', 'asentopuulaakiMuutto',
  'sodankyla2025', 'yle2025sodankyla', 'tkVuokratPostinumero', 'sodankylaOpintolaina', 'yle2026opintolaina', 'kela',
  'maavoimat', 'yle2026kasarmi', 'yle2026kevitsa', 'angloSakatti', 'yle2026sakatti', 'sodankylaMuuttajalle', 'fmi',
  'osrm', 'redu', 'sodankylaAsuntola', 'ahvl', 'rakli',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Louer à Sodankylä : 720 logements communaux et leurs prix',
  metaDescription:
    'Louer à Sodankylä : les quelque 720 logements d’Asentopuulaaki Oy, loyers de 7,40–18 € le m², demande en ligne, prêts étudiants et aides de Kela.',
  breadcrumb: 'Sodankylä',
  hero: {
    eyebrow: 'Sodankylä, 8 095 habitants',
    title: 'Louer à Sodankylä.',
    subtitle:
      'Une garnison, une mine et une communauté scientifique dans une même commune, où la longue pénurie de logements du bourg principal s’est atténuée avec la construction de nouveaux immeubles. Où déposer un dossier et ce que cela coûte.',
  },
  authorNote:
    'Population de Statistics Finland, nombre de logements tiré de la page de la commune, loyers, conditions et logements libres tirés des pages d’Asentopuulaaki Oy, emplois tirés de l’armée de terre finlandaise, de Yle et des entreprises. Vérifié le 15 novembre 2026.',
  intro: [
    'Sodankylä comptait 8 095 habitants fin 2025 (Statistics Finland). La commune possède environ 720 logements locatifs, loués par sa filiale Asentopuulaaki Oy (sodankyla.fi). Presque tous les logements de la liste de la société sont dans le bourg principal ; les autres sont à Aska, Orajärvi, Riipi, Torvinen et Vaalajärvi.',
    'Selon la commune, la pénurie de logements qui a longtemps pesé sur Sodankylä s’est atténuée : à l’été 2025, Käpyriihi, avec 36 logements neufs, a été achevé au bord de la rivière Jeesiöjoki (commune de Sodankylä, 2 juillet 2025). La recherche de logements de la société tient à jour la liste des logements libres ou sur le point de l’être, avec leur loyer et la date de disponibilité (Asentopuulaaki).',
    'La pénurie n’a pas entièrement disparu. En septembre 2025, le directeur technique de la commune a déclaré à Yle qu’elle complique encore l’arrivée de travailleurs à Sodankylä, bien qu’il y ait des emplois (Yle, 11 septembre 2025).',
  ],
  sections: [
    {
      id: 'prices',
      kicker: 'Ce que coûte un loyer',
      h2: 'Environ 10 € le m² dans un immeuble ancien, 18 € dans un neuf.',
      table: {
        caption: 'Loyers d’Asentopuulaaki Oy, €/m²/mois, liste des biens du 15 novembre 2026',
        head: ['Immeubles', '€/m²/mois'],
        rows: [
          ['Käpyriihi, achevé en 2025', '18,00'],
          ['Peuranpalas 2013 et Kehtoranta 2015', '12,80–13,00'],
          ['Maisons mitoyennes, immeubles à coursive et immeubles collectifs 1977–1998', '8,80–12,50'],
          ['Immeubles du centre, 1968–1970', '10,20'],
          ['Maisons mitoyennes des villages périphériques', '7,40–10,90'],
        ],
        foot: 'Calculé à partir du loyer de chaque logement de la liste des biens d’Asentopuulaaki Oy au 15 novembre 2026 : 42 immeubles, 597 logements. Le dépôt de garantie est d’un mois de loyer, l’eau est facturée d’avance et le locataire paie l’électricité domestique. Dans les maisons de village chauffées à l’électricité, le locataire paie aussi le chauffage, que la société estime à environ 100 € par mois en été et 200 € en hiver.',
      },
      paras: [
        '<strong>Exemples :</strong> un deux-pièces de 55 m² dans un immeuble du centre, 632 € par mois ; un deux-pièces de 42 m² à Käpyriihi, 756 € ; une maison mitoyenne de trois pièces de 80 m² à Kaanaanmaa, 800 €.',
        '<strong>Loyers privés :</strong> les deux-pièces du parc privé coûtaient en moyenne 11,73 € par m² dans la zone postale du centre de Sodankylä en octobre–décembre 2025 (Statistics Finland, tableau 13eb). Il n’existe pas de chiffre communal plus récent : Sodankylä ne figure pas dans le tableau actuel des loyers de Statistics Finland.',
      ],
    },
    {
      id: 'channels',
      kicker: 'À qui s’adresser',
      h2: 'D’abord la société communale, puis les portails.',
      band: true,
      cards: [
        {
          title: 'Asentopuulaaki Oy',
          body: 'La filiale communale qui loue les quelque 720 logements de la commune. Vous déposez votre demande en ligne et joignez un justificatif de revenus. Le fichier de crédit est consulté, et les impayés jouent contre vous.',
          href: 'https://www.asentopuulaaki.fi/asunnon-hakeminen/',
          linkLabel: 'asentopuulaaki.fi : demander un logement',
          event: 'asentopuulaaki',
        },
        {
          title: 'Logements libres',
          body: 'La recherche de logements de la société indique les logements libres ou sur le point de l’être, avec leur loyer et la date de disponibilité. La liste est mise à jour sur le site de la société : consultez-la donc avant de déposer votre demande.',
          href: 'https://www.asentopuulaaki.fi/asuntohaku/',
          linkLabel: 'asentopuulaaki.fi : recherche de logements',
          event: 'asentopuulaaki_vapaat',
        },
        {
          title: 'Oikotie et Vuokraovi',
          body: 'Annonces de particuliers pour la commune de Sodankylä. La page logement de la commune ne nomme aucun bailleur autre que sa propre société : les logements privés se trouvent donc sur les portails.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/sodankyl%C3%A4',
          linkLabel: 'Oikotie : locations à Sodankylä',
          event: 'oikotie',
        },
      ],
    },
    {
      id: 'student-loan',
      kicker: 'Pour les nouveaux arrivants',
      h2: 'Jusqu’à 5 800 € pour les jeunes diplômés.',
      paras: [
        'Sodankylä, Inari et Utsjoki compensent les prêts étudiants des jeunes diplômés qui s’y installent et travaillent au moins à 50 % d’un temps plein ou comme entrepreneur. La compensation est de 5 800 € au maximum, versée rétroactivement sur trois ans au plus par périodes de 12 mois (commune de Sodankylä).',
        'Elle couvre les prêts étudiants d’un diplôme professionnel de niveau lycée ou d’un diplôme d’école supérieure de sciences appliquées ou d’université, et vous devez avoir obtenu votre diplôme au cours des deux dernières années. Les demandes sont traitées pour la première fois en janvier 2027, et selon Yle, le formulaire ouvre le 1er décembre 2026 (Yle, 1er septembre 2026).',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Allocation logement de Kela',
      h2: 'Sodankylä relève des « autres communes » de Kela.',
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
      kicker: 'Le travail',
      h2: 'La garnison grandit ; la mine ferme en 2034.',
      bullets: [
        'La brigade des chasseurs emploie environ 400 personnes et forme environ 2 200 conscrits par an (armée de terre finlandaise). Une caserne pour près de 700 conscrits est en construction à la garnison de Sodankylä et doit être prête début 2028 (Yle, 2 avril 2026).',
        'La mine de Kevitsa, de Boliden, a annoncé 77 suppressions d’emplois en mai 2026, et la mine doit fermer en 2034 (Yle, 26 mai 2026).',
        'La mine de Sakatti prévue par Anglo American doit entrer en exploitation vers 2032, mais le projet est encore en phase d’autorisation, et la section de Laponie de l’Association finlandaise pour la protection de la nature a saisi la justice contre la décision sur Sakatti (Anglo American ; Yle, 18 juin 2026).',
        'La commune cite aussi la communauté scientifique de Tähtelä et la station de fjeld de Luosto (sodankyla.fi). Luosto est à 38 km du bourg principal (OpenStreetMap).',
      ],
    },
    {
      id: 'everyday',
      kicker: 'Le quotidien',
      h2: 'Ici, la nuit polaire dure quatre jours.',
      bullets: [
        'À Sodankylä, la nuit polaire ne dure que quatre jours, juste avant Noël (Institut météorologique finlandais).',
        'L’aéroport le plus proche est celui de Kittilä, à 93 km, et le centre de Rovaniemi est à 130 km (OpenStreetMap).',
        'Pour les étudiants : REDU a un foyer d’étudiants à Sodankylä, et en mars 2026, la commune a annoncé un foyer pour les élèves de lycée et les étudiants adultes dans de grands logements d’Asentopuulaaki (redu.fi ; commune de Sodankylä, 5 mars 2026).',
      ],
    },
    {
      id: 'contract',
      kicker: 'Le contrat',
      h2: 'Un mois de préavis.',
      bullets: [
        'Chez Asentopuulaaki, le préavis est d’un mois civil, et le dépôt de garantie est restitué environ deux semaines après votre départ (Asentopuulaaki).',
        'Le dépôt de garantie est de trois mois de loyer au maximum (loi sur les baux d’habitation, article 8).',
        'À partir du 1er octobre 2026, le dépôt doit être restitué, ou sa retenue expliquée par écrit, dans les 14 jours suivant la fin du bail (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Comment demander un logement communal à Sodankylä ?',
      a: 'Avec la demande en ligne d’Asentopuulaaki Oy, accompagnée d’un justificatif de revenus, comme une fiche de paie. Le fichier de crédit est consulté auprès de Suomen Asiakastieto, et les impayés jouent contre vous (Asentopuulaaki).',
    },
    {
      q: 'Que coûte un logement à louer à Sodankylä ?',
      a: 'Dans les anciens immeubles de la société communale, environ 10 € le m², dans les maisons mitoyennes et les immeubles à coursive surtout 10–12,50 €, et à Käpyriihi, achevé en 2025, 18 €, ce qui fait 756 € par mois pour un deux-pièces de 42 m² (Asentopuulaaki, 15 novembre 2026). Les deux-pièces du parc privé au centre coûtaient en moyenne 11,73 € le m² en octobre–décembre 2025 (Statistics Finland).',
    },
    {
      q: 'Y a-t-il une pénurie de logements à Sodankylä ?',
      a: 'Il y en a eu une pendant des années. Selon la commune, elle s’est atténuée avec l’achèvement de nouveaux immeubles (2 juillet 2025), et la recherche de logements de la société communale indique les logements libres ou sur le point de l’être (Asentopuulaaki).',
    },
    {
      q: 'Qui peut obtenir la compensation des prêts étudiants ?',
      a: 'Un jeune diplômé qui s’installe à Sodankylä, Inari ou Utsjoki et travaille au moins à 50 % d’un temps plein ou comme entrepreneur. La compensation est de 5 800 € au maximum sur trois ans, et les demandes sont traitées pour la première fois en janvier 2027 (commune de Sodankylä).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Les premières nuits',
    h2: 'Des visites sur place.',
    lead: 'Le moteur de réservation de notre partenaire affiche les chambres et les appartements libres à Sodankylä et à Luosto aux prix du jour.',
    chips: [
      { label: 'Sodankylä', destination: 'Sodankylä', sid: 'rentals_sodankyla_first_weeks' },
      { label: 'Luosto', destination: 'Luosto', sid: 'rentals_luosto_first_weeks' },
    ],
  },
  sources: pickSources('fr', SOURCES, common.sourceLabels),
};

export default copy;
