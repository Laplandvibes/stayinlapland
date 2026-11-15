/**
 * Ranska (fr) · longstays. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/longstays.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['ahvl531', 'kuluttajaliittoVuokra', 'rakli', 'dvvTilapainen', 'dvv'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Un mois ou un hiver en Laponie : appartement ou chalet',
  metaDescription:
    'Séjourner un mois ou un hiver en Laponie finlandaise : appartement meublé en location, chalet à la semaine ou logement fourni par l’employeur.',
  breadcrumb: 'Séjours longue durée',
  hero: {
    eyebrow: 'D’un mois à tout un hiver',
    title: 'Un mois en Laponie.',
    subtitle:
      'Un appartement meublé en location, un chalet à la semaine ou un logement fourni par l’employeur : trois façons de vivre en Laponie d’un mois à tout un hiver, et ce que chaque contrat exige de vous.',
  },
  authorNote:
    'Législation tirée de Finlex (loi sur les baux d’habitation 481/1995, modification 531/2026), déclaration d’adresse tirée de l’Agence des services numériques et des données de population, détails des chalets tirés du flux de produits de Lomarengas. Vérifié le 15 novembre 2026.',
  intro: [
    'Un mois de télétravail à Levi, un hiver à Rovaniemi ou une saison dans une station de ski : un séjour plus long en Laponie se résume en général à l’une de trois options. Elles diffèrent par le prix, mais plus encore par le type de contrat auquel vous aboutissez et par ce que la loi protège alors.',
    'Si vous venez en vacances plutôt que pour vivre ici, les hôtels et les chalets sont sur notre site jumeau <a href="https://laplandstays.com/" target="_blank" rel="noopener">laplandstays.com</a> et les villas sur <a href="https://laplandluxuryvillas.com/" target="_blank" rel="noopener">laplandluxuryvillas.com</a>.',
  ],
  sections: [
    {
      id: 'three-ways',
      kicker: 'Trois façons',
      h2: 'Un appartement, un chalet ou le logement de l’employeur.',
      cards: [
        {
          title: 'Appartement meublé en location',
          body: 'Un <strong>bail d’habitation</strong>, en général à durée déterminée pour un séjour plus long. La loi sur les baux vous protège : le dépôt de garantie est de trois mois de loyer au maximum, et à partir du 1er octobre 2026, il doit être restitué dans les 14 jours.',
          href: '/rentals',
          linkLabel: 'Louer commune par commune',
        },
        {
          title: 'Chalet à la semaine',
          body: 'Les chalets de vacances se louent à la semaine par l’intermédiaire d’une agence, et les conditions sont en général celles de réservation et d’annulation de l’agence. La loi sur les baux couvre un logement loué pour y habiter, pas l’activité des entreprises d’hébergement. Les chalets disponibles, avec photos, sont ci-dessous.',
        },
        {
          title: 'Logement de l’employeur',
          body: 'Dans le travail saisonnier, le logement vient souvent avec le poste. Avant de signer, demandez si le logement fait partie du contrat de travail et ce qu’il devient si l’emploi s’arrête en cours de saison.',
          href: '/seasonal-worker-housing',
          linkLabel: 'Le logement des saisonniers',
        },
      ],
    },
    {
      id: 'contract',
      kicker: 'Le contrat',
      h2: 'Un bail à durée déterminée ne peut pas être résilié avant le terme.',
      bullets: [
        '<strong>Un bail à durée déterminée court jusqu’à la date qui y est inscrite.</strong> Le locataire ne peut pas donner congé en cours de bail. Il ne peut prendre fin plus tôt que d’un commun accord avec le bailleur ou dans les situations précises prévues par la loi (Union finlandaise des consommateurs, loi sur les baux).',
        '<strong>Si vous ne savez pas combien de temps vous resterez,</strong> demandez plutôt un bail à durée indéterminée. Le locataire peut y donner congé, et le préavis du locataire ne change pas avec la réforme du 1er octobre 2026 (Rakli).',
        '<strong>Des baux courts enchaînés :</strong> si un même locataire se voit proposer plus de deux fois de suite un bail à durée déterminée de trois mois ou moins, le bail est réputé à durée indéterminée, quelle que soit la date de fin qu’il porte.',
        '<strong>La loi sur les baux ne couvre pas tout.</strong> Elle s’applique à un logement loué pour y habiter, mais pas à l’activité des entreprises d’hébergement (loi sur les baux d’habitation, articles 1 et 2). Avant de signer, demandez si vous obtenez un bail d’habitation ou un contrat d’hébergement.',
        '<strong>Le dépôt de garantie</strong> est de trois mois de loyer au maximum. À partir du 1er octobre 2026, il doit être restitué, ou sa retenue notifiée, dans les 14 jours suivant la fin du bail.',
      ],
    },
    {
      id: 'address',
      kicker: 'Déclaration d’adresse',
      h2: 'Trois mois ou plus : déclarez votre adresse.',
      paras: [
        'Selon l’Agence des services numériques et des données de population, vous déclarez un déménagement chaque fois que votre adresse de résidence change et que le séjour dure au moins trois mois. Si vous revenez à la même adresse permanente dans l’année, le déménagement est temporaire et votre adresse permanente reste en vigueur.',
        'La déclaration se fait au plus tôt un mois avant le jour du déménagement et au plus tard une semaine après. Pour un déménagement définitif, le reste, comme les pneus hiver, le contrat d’électricité et votre centre de santé, figure dans la <a href="/moving-to-lapland/">liste de contrôle de l’installation</a>.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Peut-on louer un appartement en Laponie pour un mois ?',
      a: 'Oui. Un bail à durée déterminée peut aussi être court, et les chalets de vacances se louent à la semaine. Cherchez sur les portails de location le mot « kalustettu » (meublé). Avant de signer, demandez s’il s’agit d’un bail d’habitation ou d’un hébergement, car la loi sur les baux ne protège que le premier.',
    },
    {
      q: 'Dois-je déclarer mon adresse si je passe l’hiver en Laponie ?',
      a: 'Oui, si le séjour dure au moins trois mois. Si vous revenez à la même adresse permanente dans l’année, le déménagement est temporaire et votre adresse permanente reste en vigueur (Agence des services numériques et des données de population).',
    },
    {
      q: 'Puis-je résilier un bail à durée déterminée si mon emploi s’arrête ?',
      a: 'En général non. Un bail à durée déterminée court jusqu’à la date qui y est inscrite. Convenez d’une fin anticipée avec le bailleur, ou choisissez dès le départ un bail à durée indéterminée, auquel le locataire peut donner congé.',
    },
  ],
  sources: pickSources('fr', SOURCES, common.sourceLabels),
};

export default copy;
