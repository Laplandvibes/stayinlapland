/**
 * Ranska (fr) · cost. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/cost.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'tkVuokrat', 'tkSahko', 'tkPolttoaine', 'kela', 'kuntaliitto', 'perusopetuslaki', 'lvDrive', 'yle2023',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Coût de la vie en Laponie 2026 : loyer, électricité, carburant',
  metaDescription:
    'Ce que coûte la vie en Laponie finlandaise : loyer au m² (Statistics Finland 2026), électricité, carburant, allocation de Kela et crèche, avec des exemples.',
  breadcrumb: 'Coût de la vie',
  hero: {
    eyebrow: 'Le coût de la vie en Laponie',
    title: 'Que coûte la vie en Laponie ?',
    subtitle:
      'Le loyer est moins cher en Laponie que dans le reste de la Finlande ; la voiture et le chauffage coûtent plus. Voici comment se compose un budget mensuel.',
  },
  authorNote:
    'Chaque chiffre vient de Statistics Finland, de Kela ou de l’Association des communes de Finlande ; les exemples sont calculés à partir de ces chiffres et montrent leur formule. Aucune estimation.',
  intro: [
    'Pour les coûts, il y a deux Laponies. Rovaniemi est une ville universitaire où étudiants et touristes se disputent les studios ; dans les stations de ski, le prix suit la saison. Sur la côte et dans les petites communes, les logements sont les plus spacieux et les moins chers, mais la voiture est obligatoire.',
    'Voici les quatre postes dont un budget mensuel est réellement fait : le loyer, l’électricité, les déplacements et les enfants. Il n’existe pas de statistique propre à la Laponie sur le prix de l’alimentation, nous n’en devinons donc pas une.',
  ],
  sections: [
    {
      id: 'rent',
      kicker: 'Le loyer',
      h2: 'Moins cher que la moyenne nationale, sauf quand ce ne l’est pas.',
      table: {
        caption: 'Loyer moyen en €/m²/mois, logements locatifs du marché libre, 2026T3',
        head: ['', 'Rovaniemi', 'Laponie (région)', 'Ensemble du pays'],
        rows: [
          ['Studios', '18,63', '17,25', '20,49'],
          ['Deux-pièces', '14,40', '12,87', '15,07'],
          ['Trois pièces et plus', '12,29', '11,08', '13,98'],
          ['Tous logements', '14,63', '13,14', '15,99'],
        ],
        foot: 'Statistics Finland, loyers 2026T3, tableau 15fa.',
      },
      paras: [
        '<strong>Exemples :</strong> un studio de 30 m² à Rovaniemi, environ 560 € par mois (18,63 × 30) ; un deux-pièces de 50 m² à Rovaniemi, environ 720 € (14,40 × 50) ; un trois-pièces de 75 m² au loyer moyen régional de la Laponie, environ 830 € (11,08 × 75).',
        'L’exception, c’est l’hiver dans les stations de ski : près du centre de Levi, un appartement de 80 m² dans une maison alpine coûtait 750 € par mois de mai à novembre, mais 2 000 € par semaine en haute saison (Yle, 25 mai 2023). Un bail à l’année pour le même appartement était de 1 650 € par mois. Le prix de la station n’est pas le prix de la Laponie.',
      ],
    },
    {
      id: 'electricity',
      kicker: 'Électricité et chauffage',
      h2: 'Un kilowattheure coûte pareil, mais on en consomme plus.',
      table: {
        caption: 'Prix total de l’électricité pour les ménages, cents/kWh, juin 2026, ensemble du pays',
        head: ['Consommation annuelle', 'Prix total'],
        rows: [
          ['1 000–2 499 kWh (petit appartement)', '28,2'],
          ['2 500–4 999 kWh (appartement ou maison en bande)', '23,7'],
          ['5 000–15 000 kWh (maison individuelle, sans chauffage électrique)', '17,9'],
          ['plus de 15 000 kWh (maison chauffée à l’électricité)', '14,9'],
        ],
        foot: 'Statistics Finland, prix de l’électricité par type de consommateur, tableau 13rb. Le prix comprend l’énergie, l’acheminement et les taxes.',
      },
      paras: [
        '<strong>Exemples :</strong> un deux-pièces consommant 3 500 kWh par an : 3 500 × 0,237 = environ 830 € par an, soit 69 € par mois ; une maison individuelle chauffée à l’électricité consommant 18 000 kWh : 18 000 × 0,149 = environ 2 680 € par an, soit 223 € par mois.',
        'Le prix est une moyenne nationale. La saison de chauffage est plus longue en Laponie que dans le sud, et la même maison y consomme donc plus de kilowattheures ; demandez au locataire précédent ou au bailleur la consommation de l’an dernier, c’est la meilleure estimation que vous aurez.',
      ],
    },
    {
      id: 'getting-around',
      kicker: 'Les déplacements',
      h2: 'C’est le poste qui est plus lourd en Laponie.',
      paras: [
        'L’essence 95E10 coûtait en moyenne 2,09 € le litre dans toute la Finlande en juin 2026 et le diesel 2,15 € (Statistics Finland). Distances tirées des itinéraires routiers de LaplandVibes : Kemi–Rovaniemi 118 km, Rovaniemi–Ylläs 175 km, Sodankylä–Saariselkä 130 km.',
        '<strong>Exemple :</strong> un trajet quotidien de 40 km, 22 jours ouvrés, 7 l/100 km : 880 km × 0,07 l/km × 2,09 € = environ 129 € d’essence par mois. Dans le centre de Rovaniemi, on peut vivre sans voiture ; dans un village de fjeld, la voiture fait partie du loyer même si le bail ne le dit pas.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Allocation logement de Kela',
      h2: 'Quelle part du loyer est prise en compte.',
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
        foot: 'Kela, allocation logement générale 2026. L’allocation est de 70 % au maximum des frais de logement admis, et une allocation inférieure à 15 € n’est pas versée.',
      },
      paras: [
        '<strong>Exemple :</strong> une personne seule à Rovaniemi, avec un loyer de 600 €. Au plus 447 € sont pris en compte, et l’allocation est de 70 % au maximum de ce montant, soit 313 € par mois (447 × 0,70) avant que les revenus ne la réduisent par la franchise de base. Le simulateur de Kela applique vos propres revenus.',
      ],
    },
    {
      id: 'children',
      kicker: 'Les enfants',
      h2: 'La crèche selon les revenus, l’école gratuite.',
      bullets: [
        'À partir du 1er août 2026, le tarif le plus élevé de l’éducation de la petite enfance est de 335 € par mois et par enfant, le plus bas facturé de 32 €, et le deuxième enfant paie au plus 134 € (Association des communes de Finlande). Le tarif suit le revenu de la famille, et avec un faible revenu, il peut être nul.',
        'L’enseignement préscolaire et l’enseignement de base sont gratuits, matériel scolaire et repas compris (loi sur l’enseignement de base, article 31). Pour un trajet scolaire de plus de cinq kilomètres, la commune organise le transport (article 32).',
      ],
    },
    {
      id: 'summary',
      kicker: 'En résumé',
      h2: 'Ce qui coûte moins, ce qui coûte plus.',
      band: true,
      cards: [
        {
          title: 'Moins cher : le loyer',
          body: 'Le loyer moyen de la Laponie est de 13,14 € par m², contre 15,99 € pour l’ensemble du pays (Statistics Finland 2026T3). Rovaniemi, à 14,63 €, se situe entre les deux.',
        },
        {
          title: 'Plus cher : les déplacements et le chauffage',
          body: 'Des distances de cent kilomètres et une longue saison de chauffage. Le prix d’un kilowattheure et d’un litre est le même que dans le sud ; la quantité, non.',
        },
        {
          title: 'Pareil : la crèche et l’école',
          body: 'Les tarifs de l’éducation de la petite enfance et la gratuité de l’école sont nationaux. Pour une famille avec enfants, la plus grosse économie en Laponie, c’est le loyer.',
        },
      ],
    },
  ],
  faqs: [
    {
      q: 'Rovaniemi est-elle une ville chère pour y vivre ?',
      a: 'Pas par les loyers : la moyenne de 14,63 € par m² est inférieure à celle du pays, 15,99 € (Statistics Finland 2026T3), et Rovaniemi est moins chère que l’ensemble du pays pour toutes les tailles de logement, studios compris (18,63 contre 20,49). Dans les nouveaux baux, un studio à Rovaniemi coûte 20,14 € par m² : un studio qui se libère maintenant coûte environ 8 % de plus qu’un studio déjà loué, mais reste moins cher qu’un studio en nouveau bail à l’échelle du pays, 21,11 € par m².',
    },
    {
      q: 'De combien une personne seule a-t-elle besoin par mois à Rovaniemi ?',
      a: 'Nous ne calculons que ce qui a une source : un studio de 30 m² environ 560 € par mois (18,63 × 30) et l’électricité à 1 800 kWh par an environ 42 € par mois (1 800 × 0,282 / 12). L’alimentation, internet, l’assurance et les transports s’y ajoutent selon vos habitudes.',
    },
    {
      q: 'Peut-on percevoir l’allocation logement en Laponie ?',
      a: 'Aux mêmes conditions que partout en Finlande. À Rovaniemi, les frais de logement d’une personne seule sont pris en compte jusqu’à 447 € par mois, dans les autres communes de Laponie jusqu’à 394 €, et l’allocation est de 70 % au maximum de ce montant (Kela 2026).',
    },
  ],
  sources: pickSources('fr', SOURCES, common.sourceLabels),
};

export default copy;
