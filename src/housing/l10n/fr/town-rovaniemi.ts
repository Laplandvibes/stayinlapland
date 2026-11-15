/**
 * Ranska (fr) · town-rovaniemi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/rentals.ts RENTAL_TOWNS.rovaniemi (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'rovaniemi', 'das', 'yle2025das', 'yle2026rovaniemi', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Louer à Rovaniemi : loyers, bailleurs et marche à suivre',
  metaDescription:
    'Louer à Rovaniemi : loyer au m² (Statistics Finland 2026), bailleurs recensés par la ville, DAS pour les étudiants, allocation de Kela et quand déposer.',
  breadcrumb: 'Rovaniemi',
  hero: {
    eyebrow: 'Rovaniemi, 66 191 habitants',
    title: 'Louer à Rovaniemi.',
    subtitle:
      'La plus grande ville de Laponie, 66 191 habitants. Ce que coûte un loyer, à qui s’adresser et quand.',
  },
  authorNote:
    'Loyers au m² de Statistics Finland (juillet–septembre 2026), bailleurs tirés de la page logement de la ville de Rovaniemi, chiffres de la pénurie de Yle. Vérifié le 15 novembre 2026.',
  intro: [
    'Rovaniemi compte 66 191 habitants (Statistics Finland, 31 décembre 2025) et une concurrence acharnée pour les studios : la fondation de logement étudiant DAS a reçu environ 550 demandes urgentes à l’été 2026, soit 15 % de plus qu’un an plus tôt, près de 90 % des demandeurs voulaient un studio, et les studios de la ville sont loués à court terme aux touristes pour la saison d’hiver (Yle, 27 juillet 2026). Selon la directrice générale de DAS, elle ne peut pas proposer un logement à chaque demandeur en août et en septembre.',
    'Une entreprise de recrutement qui a fait venir environ 250 travailleurs en Laponie les a logés dans une dizaine d’endroits différents à Rovaniemi (Yle, 9 mars 2026). Saisonniers, étudiants et touristes recherchent tous les mêmes petits logements.',
    'La bonne nouvelle, c’est le prix : le loyer moyen de Rovaniemi, 14,63 € par m², est inférieur à la moyenne nationale de 15,99 € (Statistics Finland 2026T3). Voici les chiffres par taille de logement et les canaux pour déposer un dossier.',
  ],
  sections: [
    {
      id: 'prices',
      kicker: 'Ce que coûte un loyer',
      h2: 'Les loyers de Rovaniemi au m², juillet–septembre 2026.',
      table: {
        caption: 'Loyer moyen en €/m²/mois, logements locatifs du marché libre, Rovaniemi 2026T3',
        head: ['', 'Tous les loyers', 'Nouveaux loyers', 'Ensemble du pays'],
        rows: [
          ['Studios', '18,63', '20,14', '20,49'],
          ['Deux-pièces', '14,40', '16,40', '15,07'],
          ['Trois pièces et plus', '12,29', '13,66', '13,98'],
          ['Tous logements', '14,63', '15,93', '15,99'],
        ],
        foot: 'Statistics Finland, loyers 2026T3, tableau 15fa. Nouveaux baux = contrats commencés pendant le trimestre, c’est-à-dire ce que demandent les logements libres en ce moment.',
      },
      paras: [
        '<strong>Exemples :</strong> un studio de 30 m² environ 560 € par mois (18,63 × 30), dans un nouveau bail environ 600 € (20,14 × 30) ; un deux-pièces de 50 m² environ 720 € (14,40 × 50) ; un trois-pièces de 75 m² environ 920 € (12,29 × 75). L’eau et l’électricité s’ajoutent en général.',
        'Le prix d’un studio en nouveau bail, 20,14 € par m², dépasse de 1,51 € (8 %) la moyenne de tous les studios de Rovaniemi, 18,63 € : un studio qui se libère en ce moment coûte plus qu’un studio déjà loué. Par rapport à la moyenne nationale, Rovaniemi est moins chère pour toutes les tailles de logement.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Allocation logement de Kela',
      h2: 'Rovaniemi a un plafond plus élevé.',
      lead:
        'L’allocation logement générale est de 70 % au maximum des frais de logement admis. À Rovaniemi, le plafond des frais admis est plus élevé que dans les autres communes de Laponie, car la ville fait partie du groupe de 24 grandes communes de Kela (Kela 2026).',
      table: {
        caption: 'Frais de logement maximaux 2026, €/mois, groupe de 24 grandes communes de Kela',
        head: ['Taille du foyer', 'Frais de logement maximaux'],
        rows: [
          ['1 personne', '447'],
          ['2 personnes', '652'],
          ['3 personnes', '828'],
          ['4 personnes', '981'],
          ['Par personne supplémentaire', '+134'],
        ],
        foot: 'Kela, allocation logement générale 2026. Une allocation inférieure à 15 € n’est pas versée. Les revenus réduisent l’allocation par la franchise de base.',
      },
    },
    {
      id: 'channels',
      kicker: 'À qui s’adresser',
      h2: 'La liste de la ville, la fondation étudiante et les portails.',
      lead: 'La page logement de la ville de Rovaniemi recense les bailleurs et les services de recherche ; elle ne nomme pas de société de logement communale propre.',
      band: true,
      cards: [
        {
          title: 'Ville de Rovaniemi : les bailleurs',
          body: 'La page de la ville renvoie vers les bailleurs institutionnels KAS asunnot, M2-Kodit, Tarveasunnot, Avara et Lumo, et vers les services de recherche Oikotie, Vuokraovi et Qasa. Chaque bailleur a sa propre demande en ligne ; déposez-en plusieurs à la fois.',
          href: 'https://www.rovaniemi.fi/Asuminen-ja-ymparisto/Asuminen',
          linkLabel: 'rovaniemi.fi : logement',
          event: 'rovaniemi_city',
        },
        {
          title: 'DAS : pour les étudiants',
          body: 'La fondation Domus Arctica possède environ 1 700 logements, dont 700 studios et 460 deux-pièces, à un loyer moyen de 12,50 € par m² (Yle, 27 juillet 2026). Les demandes se font en continu, sont valables trois mois, et les nouveaux étudiants sont prioritaires en août et en septembre. Vous pouvez déposer une demande si vous étudiez à Rovaniemi dans un établissement postérieur à la scolarité obligatoire.',
          href: 'https://www.das.fi/en/apply/applying-info',
          linkLabel: 'das.fi : infos sur la demande',
          event: 'das',
        },
        {
          title: 'KAS asunnot',
          body: 'Des logements locatifs dans plusieurs quartiers de Rovaniemi (liste de la ville). Demande en ligne.',
          href: 'https://kas.fi/rovaniemen-vuokrattavat-kas-kodit/',
          linkLabel: 'kas.fi : Rovaniemi',
          event: 'kas',
        },
        {
          title: 'Lumo',
          body: 'Un bailleur institutionnel avec des immeubles à Rovaniemi. Contrat standard, demande en ligne, emménagement rapide.',
          href: 'https://lumo.fi/en/rental-apartments',
          linkLabel: 'lumo.fi : appartements à louer',
          event: 'lumo',
        },
        {
          title: 'Oikotie et Vuokraovi',
          body: 'Les portails nationaux regroupent la plupart des annonces de particuliers et d’agences. Filtrez par la commune de Rovaniemi, pas par quartier, pour que Ounasvaara, Saarenkylä et les logements hors du centre apparaissent aussi.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/rovaniemi',
          linkLabel: 'Oikotie : locations à Rovaniemi',
          event: 'oikotie',
        },
        {
          title: 'NAL Rovaniemi : moins de 30 ans',
          body: 'L’antenne de Rovaniemi de l’Association finlandaise du logement des jeunes propose des logements pour les moins de 30 ans (liste de la ville). Une option quand DAS n’est pas possible et que vous n’êtes pas étudiant.',
          href: 'https://www.rovaniemi.fi/Asuminen-ja-ymparisto/Asuminen',
          linkLabel: 'rovaniemi.fi : logement des jeunes',
          event: 'nal',
        },
      ],
    },
    {
      id: 'when',
      kicker: 'Quand déposer un dossier',
      h2: 'Deux pics par an.',
      bullets: [
        '<strong>Août–septembre</strong> est la période la plus tendue : DAS ne peut pas loger tous les demandeurs, et les studios du marché libre se font rares (Yle, 27 juillet 2026).',
        '<strong>Novembre–décembre :</strong> certains studios sont loués à court terme aux touristes pour la saison d’hiver. Les contrats à durée déterminée se terminent souvent fin octobre (Yle, 27 juillet 2026).',
        '<strong>Au printemps</strong>, les studios loués pour la saison d’hiver reviennent sur le marché.',
        '<strong>Le dépôt de garantie</strong> est de trois mois de loyer au maximum (loi sur les baux d’habitation, article 8), et à partir du 1er octobre 2026, il doit être restitué dans les 14 jours suivant la fin du bail (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Combien coûte un studio à Rovaniemi ?',
      a: 'Selon Statistics Finland, 18,63 € par m² pour l’ensemble des baux et 20,14 € par m² pour les nouveaux (2026T3). Un studio de 30 m² revient donc à environ 560–600 € par mois, électricité non comprise.',
    },
    {
      q: 'Est-il difficile de trouver un logement à louer à Rovaniemi ?',
      a: 'Les studios sont difficiles à obtenir en août–septembre : DAS ne peut pas loger tous les demandeurs (Yle, 27 juillet 2026), et les studios du marché libre se font rares. Les deux et trois-pièces sont plus faciles.',
    },
    {
      q: 'Peut-on déposer un dossier sans se rendre à Rovaniemi ?',
      a: 'Vous pouvez déposer une demande en ligne auprès de chaque bailleur recensé par la ville et auprès de DAS. Visitez quand même le logement ou demandez une visite en vidéo, et ne versez le dépôt qu’après la signature du contrat.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Les premières semaines',
    h2: 'Un hôtel ou un appart-hôtel pendant vos visites.',
    lead: 'Visitez les logements sur place avant de signer. Le moteur partenaire affiche les chambres libres de Rovaniemi aux prix du jour.',
    chips: [
      { label: 'Rovaniemi', destination: 'Rovaniemi', sid: 'rentals_rovaniemi_first_weeks' },
    ],
  },
  sources: pickSources('fr', SOURCES, common.sourceLabels),
};

export default copy;
