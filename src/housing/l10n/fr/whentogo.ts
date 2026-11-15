/**
 * Ranska (fr) · milloin-sivu (/when-to-go). Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/whentogo.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import { whenToGoSources, type WhenToGoCopy } from '../../whentogo';
import common from './common';

const copy: WhenToGoCopy = {
  metaTitle: 'Quand partir en Laponie : le guide mois par mois',
  metaDescription:
    'Quand partir en Laponie, mois par mois : températures, lumière, neige, aurores boréales, soleil de minuit, couleurs d’automne et moustiques.',
  breadcrumb: 'Quand venir',
  hero: {
    eyebrow: 'De janvier à décembre',
    title: 'La Laponie, mois par mois.',
    subtitle:
      'Ce que chaque mois apporte en météo, en lumière et en neige, ce que l’on y fait et ce que cela change si l’on habite ici. Chiffres de l’Institut météorologique finlandais et de Statistics Finland.',
  },
  intro: [
    'L’année en Laponie, ce sont deux mondes différents. De novembre à avril, il y a la neige, le gel et les jours courts ; de mai à septembre, il y a la lumière, qui dans l’extrême nord ne se couche pas du tout. Entre les deux viennent deux courtes phases que les habitants connaissent bien : le dégel du printemps et les couleurs d’automne, la ruska.',
    'Voici d’abord toute l’année dans un tableau, puis mois par mois. Les chiffres sont des moyennes de long terme : une année donnée peut différer nettement, et selon Metsähallitus, la neige permanente arrive aujourd’hui souvent plus tard que la moyenne statistique.',
  ],
  tableKicker: 'Toute l’année',
  tableH2: 'L’année en Laponie en chiffres.',
  table: {
    caption: 'Durée du jour à Rovaniemi le 15, température moyenne à Rovaniemi et à Sodankylä, épaisseur de neige à Rovaniemi le 15',
    head: ['Mois', 'Durée du jour', 'Température moyenne (Rovaniemi / Sodankylä)', 'Neige (Rovaniemi)', 'Ce qui se passe'],
    rows: [
      ['Janvier', '4 h 15 min', '−10,3 / −12,5 °C', '47 cm', 'Le mois le plus froid'],
      ['Février', '8 h 10 min', '−10,3 / −12,1 °C', '66 cm', 'Vacances d’hiver'],
      ['Mars', '11 h 37 min', '−5,6 / −7,1 °C', '77 cm', 'Aurores boréales, neige la plus épaisse'],
      ['Avril', '15 h 25 min', '0,1 / −0,8 °C', '64 cm', 'Neige croûtée'],
      ['Mai', '19 h 24 min', '6,5 / 5,6 °C', '–', 'La neige fond, le dégel'],
      ['Juin', '24 h (sans coucher)', '12,5 / 11,9 °C', '–', 'Soleil de minuit'],
      ['Juillet', '21 h 29 min', '15,6 / 15,0 °C', '–', 'Le mois le plus chaud, moustiques'],
      ['Août', '17 h 02 min', '13,1 / 12,4 °C', '–', 'Les nuits sombres reviennent'],
      ['Septembre', '13 h 13 min', '7,7 / 7,0 °C', '–', 'Couleurs d’automne'],
      ['Octobre', '9 h 37 min', '0,8 / 0,0 °C', '–', 'Neige sur les fjelds'],
      ['Novembre', '5 h 45 min', '−4,4 / −5,8 °C', '9 cm', 'Nuit polaire dans l’extrême nord'],
      ['Décembre', '2 h 27 min', '−7,7 / −9,6 °C', '28 cm', 'Le jour le plus court : 2 h 14 min'],
    ],
    foot: 'Températures et neige : Institut météorologique finlandais, période de référence 1991–2020 ; l’épaisseur de neige est la médiane. Durée du jour : timeanddate.com pour 2027 (source secondaire ; les années diffèrent d’environ un jour). En juin, le soleil ne se couche pas à Rovaniemi du 7 juin au 6 juillet.',
  },
  months: [
    {
      name: 'Janvier',
      pitch: 'Le mois le plus froid, la lumière revient',
      body: 'Janvier est le mois le plus froid à Sodankylä et à Utsjoki, avec −12,5 et −13,3 °C en moyenne ; Rovaniemi est à −10,3. À Rovaniemi, le jour s’allonge au fil du mois de 2 h 44 min à plus de six heures, et à Utsjoki, le soleil se lève de nouveau après la nuit polaire le 17 janvier. La neige atteint en moyenne environ un demi-mètre d’épaisseur.',
      good: ['Ski et sports de neige sur neige stabilisée', 'Arctic Lapland Rally à Rovaniemi, 28–30 janvier 2027'],
      note: ['Rennes sur les routes : de novembre à janvier, c’est la période de pointe des collisions avec les rennes', 'Les hôtels de Rovaniemi étaient encore remplis à 86 % en janvier 2025'],
    },
    {
      name: 'Février',
      pitch: 'La neige et les vacances d’hiver',
      body: 'Avec décembre, février est le mois le plus chargé de l’année : le taux d’occupation de la Laponie était de 77,6 % en février 2025, mais le prix moyen d’une chambre est resté inférieur à celui de décembre. À Rovaniemi, la neige atteint en moyenne 66 cm le 15 février, et le jour dure déjà huit heures.',
      good: ['Aurores boréales de fin d’hiver : l’Institut météorologique finlandais qualifie la fin de l’hiver et le début de l’automne de meilleures périodes statistiquement', 'Ski et longues excursions à la journée'],
      note: ['Réservez tôt, février est l’un des mois les plus chargés', 'Les écoles de la région d’Helsinki et de Turku ont leurs vacances de ski en semaine 8 (22–26 février 2027)'],
    },
    {
      name: 'Mars',
      pitch: 'Les aurores boréales et la neige la plus épaisse',
      body: 'L’Institut météorologique finlandais recommande mars pour observer les aurores boréales, car le printemps est en moyenne moins nuageux. La neige est à son maximum, 77 cm en moyenne à Rovaniemi, et le jour dépasse 13 heures. Sodankylä reçoit 141 heures d’ensoleillement en mars contre 59 en février.',
      good: ['Aurores boréales', 'Ski par temps ensoleillé', 'Pâques, 26–29 mars 2027'],
      note: ['Les écoles de Rovaniemi ont leurs vacances de ski en semaine 10 (8–12 mars 2027), et Pâques amène des voyageurs finlandais', 'Les pneus hiver sont obligatoires jusqu’au 31 mars dès que les conditions l’exigent'],
    },
    {
      name: 'Avril',
      pitch: 'Neige croûtée et longues soirées',
      body: 'Il reste beaucoup de neige, 64 cm en moyenne à Rovaniemi le 15 avril, et selon Metsähallitus, les conditions de neige croûtée durent de la mi-avril jusqu’à la mi-mai. On peut encore voir des aurores boréales en début de mois : à Rovaniemi, les nuits restent sombres jusqu’au 21 avril environ, à Utsjoki jusqu’au 10 avril environ. Le prix moyen d’une chambre en Laponie était de 139–141 € en avril contre 200–225 € en mars (2024–2025).',
      good: ['Ski sur la neige croûtée et excursions sur les fjelds', 'Soleil de printemps : le 20 avril, le jour dure plus de 16 heures à Rovaniemi'],
      note: ['Certaines stations de ski ferment en avril : la saison d’Ounasvaara se termine le 17 avril 2027, tandis qu’Ylläs prévoit de fermer début mai', 'Les emplois saisonniers prennent fin : à Saariselkä, les derniers jours de travail de l’hiver sont à la mi-avril (Yle)'],
    },
    {
      name: 'Mai',
      pitch: 'La neige fond, le mois le plus calme',
      body: 'La neige permanente fond en général autour de Rovaniemi entre le 30 avril et le 10 mai, et dans la Laponie des fjelds entre le 10 et le 20 mai. Le terrain est en plein dégel : trop humide pour skier et trop enneigé pour marcher. Mai est le mois le plus calme pour le tourisme, avec environ 65 000 nuitées contre 430 000–620 000 pendant les mois d’hiver, et beaucoup d’entreprises font une pause. Dans l’extrême nord, le soleil de minuit commence déjà : à Nuorgam le 16 mai.',
      good: ['Chercher un logement à Rovaniemi : selon DAS, c’est au printemps et au début de l’été que le plus de logements se libèrent par rapport au nombre de demandeurs', 'Paysages calmes et lumière du printemps'],
      note: ['Beaucoup de services touristiques sont fermés ou ouverts à horaires réduits', 'La crue de printemps varie de la mi-mai à la mi-juin'],
    },
    {
      name: 'Juin',
      pitch: 'Le soleil de minuit',
      body: 'Le soleil ne se couche pas à Rovaniemi du 7 juin au 6 juillet, à Sodankylä du 31 mai au 13 juillet et à Utsjoki du 18 mai au 27 juillet. La température moyenne à Rovaniemi est de 12,5 °C. La saison de randonnée commence quand la neige quitte les fjelds ; à Kilpisjärvi, il peut encore y avoir de la neige en juin.',
      good: ['Festival du film du soleil de minuit à Sodankylä, 16–20 juin 2027', 'La Saint-Jean (juhannus), 25–26 juin 2027'],
      note: ['La saison des moustiques, la räkkä, commence en général autour de la Saint-Jean', 'Des rideaux occultants pour la chambre : une nuit claire est belle, mais pas pour dormir'],
    },
    {
      name: 'Juillet',
      pitch: 'Le mois le plus chaud, le préféré des Finlandais',
      body: 'Juillet est le mois le plus chaud de l’année : 15,6 °C en moyenne à Rovaniemi, avec des maximales quotidiennes autour de 20. C’est aussi le mois le plus populaire de Laponie pour les voyageurs finlandais, et juin à août sont les mois les moins chers : la chambre moyenne des établissements d’hébergement de la Laponie coûtait environ 96–102 € (2024–2025). Les mûres des marais (lakka) mûrissent de la mi-juillet au début d’août.',
      good: ['Randonnée et sorties dans la nature', 'Cueillette de baies : mûres des marais dès la mi-juillet, myrtilles dès la fin de juillet'],
      note: ['Les moustiques sont à leur pire, jusqu’au début ou à la mi-août', 'Juillet est aussi le mois le plus pluvieux, 81 mm à Rovaniemi'],
    },
    {
      name: 'Août',
      pitch: 'Les nuits sombres reviennent',
      body: 'Les nuits redeviennent sombres à Rovaniemi vers le 24 août, et selon Visit Finland, on voit des aurores boréales en Laponie de la fin août à avril. La première neige tombe en général sur les sommets des fjelds en août ou en septembre. À Rovaniemi, la rentrée scolaire a lieu à la mi-août (le 12 août en 2026), et la recherche de logement des étudiants atteint son pic.',
      good: ['La saison des myrtilles et de la randonnée continue', 'Simerock à Rovaniemi, 13–14 août 2027'],
      note: ['À Rovaniemi, DAS a le plus de demandeurs en août et en septembre, et les logements libérés sont loués vite', 'Le recrutement pour la saison d’hiver s’accélère dès août (Yle)'],
    },
    {
      name: 'Septembre',
      pitch: 'Couleurs d’automne et aurores d’automne',
      body: 'La ruska, les couleurs d’automne, atteint le nord de la Finlande dans la première moitié de septembre : semaines 36–38 à Kilpisjärvi, Pallas-Ylläs et Utsjoki, semaines 37–39 dans le parc national Urho Kekkonen. Autour de l’équinoxe d’automne, les orages magnétiques sont en moyenne plus fréquents, et à la latitude de Sodankylä, des aurores boréales apparaissent en moyenne une nuit claire et sombre sur deux. Septembre est le second pic des voyageurs finlandais.',
      good: ['Randonnées dans les couleurs d’automne', 'Aurores boréales avant l’hiver', 'Airelles rouges dès le début de septembre'],
      note: ['Il peut déjà neiger sur les fjelds en septembre', 'Les semaines de la ruska remplissent les stations de fjeld de voyageurs finlandais'],
    },
    {
      name: 'Octobre',
      pitch: 'La neige atteint les fjelds',
      body: 'Dans la période de référence 1991–2020 de l’Institut météorologique finlandais, la neige permanente a commencé dans la Laponie des fjelds entre le 17 et le 27 octobre et à Sodankylä le 29 octobre. Selon Metsähallitus, elle ne se forme aujourd’hui souvent que fin novembre, parfois en décembre. À l’automne 2026, les pistes de Levi ont ouvert dès le début d’octobre. Octobre est, après mai, le deuxième mois le plus calme pour l’hébergement.',
      good: ['Aurores boréales d’automne avant la neige', 'Festival folklorique Jutajaiset à Rovaniemi en octobre'],
      note: ['À Rovaniemi, beaucoup de baux à durée déterminée se terminent fin octobre parce que les logements sont loués aux touristes pour l’hiver (Yle, 27 juillet 2026)', 'En 2026, les vacances scolaires d’automne ont eu lieu en semaine 42 (12–16 octobre), par exemple à Rovaniemi et à Helsinki'],
    },
    {
      name: 'Novembre',
      pitch: 'La nuit polaire commence dans l’extrême nord',
      body: 'À Utsjoki, la nuit polaire commence le 26 novembre et dure en moyenne 51 jours. À Rovaniemi, le soleil se lève tous les jours, mais le 15 novembre, le jour dure tout juste moins de six heures. Les stations de ski ouvrent : pour la saison 2026–2027, Ounasvaara le 11 novembre, Ylläs le 21 novembre et Luosto avec un objectif au 28 novembre.',
      good: ['Les slaloms de la Coupe du monde à Levi à la mi-novembre', 'L’hiver avant les prix de Noël : une chambre dans les établissements d’hébergement de la Laponie coûtait en moyenne 192–209 € en novembre et 285–313 € en décembre (2024–2025)'],
      note: ['Rovaniemi n’est pas calme en novembre : taux d’occupation des hôtels de 72–82 % (2023–2025)', 'Pneus hiver dès le 1er novembre dès que les conditions l’exigent. L’Arctic SnowHotel n’ouvre qu’en décembre'],
    },
    {
      name: 'Décembre',
      pitch: 'Noël, le mois le plus chargé',
      body: 'Décembre est le mois touristique le plus chargé et le plus cher de la Laponie : 622 449 nuitées et un prix moyen de 313 € la chambre en décembre 2025. Le jour le plus court de Rovaniemi dure 2 h 14 min, mais le soleil se lève ; la nuit polaire ne dure que quatre jours à Sodankylä, juste avant Noël, et du 14 au 29 décembre à Kittilä. Sodankylä a eu de la neige au sol chaque veille de Noël depuis le début des relevés.',
      good: ['Noël : le village du Père Noël est ouvert tous les jours', 'Hôtels de neige : l’Arctic SnowHotel ouvre le 15 décembre 2026'],
      note: ['Réservez bien à l’avance : les hôtels de Rovaniemi étaient remplis à 93,5–97 % en décembre (2023–2025)', 'La fin de l’automne et le début de l’hiver sont la période la plus nuageuse de l’année selon l’Institut météorologique finlandais, ce qui rend les aurores boréales plus difficiles à voir'],
    },
  ],
  goodLabel: 'Idéal pour',
  noteLabel: 'À savoir',
  monthsNav: 'Mois',
  living: {
    kicker: 'Si vous habitez ici',
    h2: 'Ce que l’année change pour qui vit ici.',
    items: [
      '<strong>Un logement en location à Rovaniemi :</strong> selon DAS, c’est au printemps et au début de l’été que le plus de logements se libèrent par rapport au nombre de demandeurs, et août et septembre comptent le plus de demandeurs. Les baux à durée déterminée se terminent fin octobre parce que les logements sont loués aux touristes pour l’hiver (Yle, 27 juillet 2026).',
      '<strong>Le travail saisonnier :</strong> le recrutement d’hiver s’accélère dès août (Yle), et les stations de ski ouvrent en octobre ou en novembre et ferment en avril ou en mai selon la station.',
      '<strong>La conduite :</strong> les pneus hiver sont obligatoires du 1er novembre au 31 mars dès que les conditions l’exigent, et les clous peuvent être utilisés à d’autres moments si les conditions l’exigent (Traficom). Les collisions avec les rennes culminent de novembre à janvier (Association des éleveurs de rennes).',
      '<strong>La lumière :</strong> des rideaux occultants et une moustiquaire l’été, une lampe de luminothérapie et un réflecteur l’hiver. À Rovaniemi, la nuit polaire n’est qu’un nom : le soleil se lève tous les jours.',
    ],
  },
  links: [
    { label: 'Louer commune par commune', href: '/rentals' },
    { label: 'S’installer en Laponie', href: '/moving-to-lapland' },
    { label: 'Le logement des saisonniers', href: '/seasonal-worker-housing' },
    { label: 'Un mois en Laponie', href: '/long-stays' },
  ],
  faqKicker: 'Les questions les plus posées',
  faqH2: 'Questions sur l’année en Laponie.',
  faqs: [
    {
      q: 'Quand peut-on voir les aurores boréales en Laponie ?',
      a: 'Chaque fois que les nuits sont sombres, de la fin août à avril. Selon l’Institut météorologique finlandais, les orages magnétiques sont en moyenne plus fréquents à l’automne et au printemps qu’en été et en hiver, et il recommande mars parce que le printemps est en moyenne moins nuageux. À la latitude de Sodankylä, elles apparaissent en moyenne une nuit claire et sombre sur deux.',
    },
    {
      q: 'Y a-t-il une nuit polaire à Rovaniemi ?',
      a: 'Non. À Rovaniemi, le soleil se lève tous les jours, et le jour le plus court dure 2 h 14 min. La nuit polaire dure quatre jours à Sodankylä, 16 jours à Kittilä, environ cinq semaines à Ivalo et 51 jours en moyenne à Utsjoki.',
    },
    {
      q: 'Quand y a-t-il de la neige en Laponie ?',
      a: 'Dans la période de référence 1991–2020, la neige permanente a commencé fin octobre dans la Laponie des fjelds et début novembre autour de Rovaniemi, mais selon Metsähallitus, elle ne se forme aujourd’hui souvent que fin novembre. La neige est la plus épaisse en mars et début avril et fond en général autour de Rovaniemi entre le 30 avril et le 10 mai.',
    },
    {
      q: 'Quand est la saison des moustiques en Laponie ?',
      a: 'Selon Metsähallitus, la saison des moustiques, la räkkä, commence en général autour de la Saint-Jean et dure jusqu’au début ou à la mi-août.',
    },
  ],
  authorNote:
    'Températures, neige et aurores boréales de l’Institut météorologique finlandais, calendrier de la nature de Metsähallitus, chiffres mensuels du tourisme de Statistics Finland, vacances scolaires de l’Agence nationale finlandaise de l’éducation, événements de leurs organisateurs. Vérifié le 15 novembre 2026.',
  sources: whenToGoSources(common.whenToGoSourceLabels),
};

export default copy;
