/**
 * Espanja (es) · seasonal. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
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
  metaTitle: 'Vivienda para trabajadores de temporada en Laponia',
  metaDescription:
    'Dónde viven los trabajadores de temporada en Levi, Ylläs, Saariselkä y Rovaniemi: alojamiento del empleador, alquiler de temporada o apartamento municipal.',
  breadcrumb: 'Trabajadores de temporada',
  hero: {
    eyebrow: 'Trabajo de temporada, en invierno y en verano',
    title: '¿Dónde viven los trabajadores de temporada?',
    subtitle:
      'Un apartamento compartido del personal, un apartamento vacacional con contrato de temporada o un alquiler municipal. La escasez de vivienda en las estaciones de esquí es real, y así es como la gente convive con ella.',
  },
  authorNote:
    'Cifras de escasez de las noticias de Yle y Kesko de 2017–2026, canales de búsqueda de las propias páginas de los municipios. Nuestro sitio hermano laplandwork.com se ocupa de los empleos en sí.',
  intro: [
    'La zona turística de Levi contrata a algo más de 2000 trabajadores de temporada para la temporada de invierno, calculaba ya en 2017 Kristiina Kukkohovi, directora gerente de Levin Matkailu Oy, y decía que la escasez de vivienda se estaba convirtiendo en un gran problema en todas las estaciones de Laponia (Yle, 25 de octubre de 2017). No ha mejorado: en la primavera de 2023 Yle informó de trabajadores de Levi y Ylläs que vivían en apartamentos vacacionales donde no podían registrar su dirección.',
    'En junio de 2026 los propietarios del K-Market Jounin Kauppa de Äkäslompolo decidieron construir tres casas adosadas para su propio personal, porque hay pocos apartamentos y los alquileres se han disparado (Yle, 16 de junio de 2026). La tienda emplea a unos 20 trabajadores de temporada al año, y aproximadamente la mitad necesita una vivienda de alquiler (Kesko, 17 de junio de 2026).',
    'En Rovaniemi la empresa de contratación Career.fi llevó a unos 250 trabajadores a Laponia y los alojó en una decena de lugares distintos; dos trabajadores estonios pasaron dos inviernos viviendo con la familia del director de crecimiento después de que su apartamento de alquiler entrara en obras de renovación de tuberías. Encontrar alojamiento es «todo un circo cada año» (Yle, 9 de marzo de 2026).',
  ],
  sections: [
    {
      id: 'three-ways',
      kicker: 'Tres formas de vivir una temporada',
      h2: 'Alojamiento del empleador, alquiler de temporada o apartamento municipal.',
      cards: [
        {
          title: '1. Alojamiento del empleador',
          body:
            'La respuesta más habitual en las estaciones de esquí: el empleador alquila casas adosadas, cabañas y apartamentos vacacionales para el personal durante toda la temporada y descuenta el alquiler de su salario. En Ruka, un grupo de restaurantes ya alquilaba en 2017 cuatro propiedades vacacionales de noviembre a mayo para su personal (Yle, 25 de octubre de 2017). La ventaja: al llegar ya hay un techo. El riesgo: la vivienda se acaba cuando se acaba el trabajo.',
        },
        {
          title: '2. Un apartamento vacacional con contrato de temporada',
          body:
            'Un apartamento de 80 m² de estilo alpino en Levi: 750 € al mes de mayo a noviembre, 2000 € por semana en temporada alta, 1650 € al mes todo el año (Yle, 25 de mayo de 2023). Barato en verano, imposible en invierno. Además, en un apartamento vacacional no se puede obtener una dirección oficial (Yle, 25 de mayo de 2023).',
        },
        {
          title: '3. Un alquiler municipal',
          body:
            'Kittilän Vuokratalot Oy, Inarin Vuokra-asunnot Oy (más de 500 viviendas en Ivalo, Inari y Saariselkä) y Asentopuulaaki en Sodankylä (unas 720 viviendas). Solicite en verano, antes de que empiece la temporada; pregunte a la empresa cuánto tiempo sigue vigente una solicitud.',
        },
      ],
    },
    {
      id: 'places',
      kicker: 'Lugares',
      h2: 'La misma escasez, soluciones distintas.',
      band: true,
      cards: [
        {
          title: 'Levi y Kittilä',
          image: { src: '/images/housing-levi-keskusta-card.webp', alt: 'Edificios de madera en el centro de Levi un día de verano' },
          body:
            'La población de Kittilä creció un 2,0 por ciento en 2025, la segunda mayor subida de los municipios de Laponia tras el 2,4 por ciento de Pelkosenniemi (Statistics Finland). Los empleadores alquilan casas adosadas para el personal durante toda la temporada, y todos los demás buscan en el grupo de vivienda de Levi en Facebook. Kittilän Vuokratalot Oy publica apartamentos tanto en el pueblo de Kittilä como en Sirkka, en Levi.',
          href: 'https://kittila.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot',
          linkLabel: 'Kittilän Vuokratalot Oy',
          event: 'kittila',
        },
        {
          title: 'Ylläs: Äkäslompolo y Ylläsjärvi',
          image: { src: '/images/housing-seasonal-card-yllas-tunturi.webp', alt: 'Ylläs visto al otro lado del lago de Äkäslompolo una mañana de septiembre' },
          body:
            'Los comerciantes construyen para sí mismos: las tres casas adosadas de Jounin Kauppa están previstas, según el calendario actual, para noviembre–diciembre de 2026, con estudios, apartamentos de dos dormitorios pensados para compartir y apartamentos familiares de tres dormitorios, todos con sauna (Kesko, 17 de junio de 2026). El primer edificio modular del pueblo estaba casi terminado en octubre de 2025 (Yle, 16 de junio de 2026).',
          href: 'https://www.kesko.fi/media/uutiset-ja-tiedotteet/uutiset/2026/lapin-asuntopulaa-ratkomassa-k-market-jounin-kaupan-kauppiaat-rakennuttavat-kolme-rivitaloa-tyontekijoilleen/',
          linkLabel: 'Kesko, 17 de junio de 2026',
          event: 'yllas',
        },
        {
          title: 'Saariselkä e Ivalo',
          image: { src: '/images/housing-saariselka-hirsitalot.webp', alt: 'Edificios de troncos en Saariselkä en noviembre' },
          body:
            'La empresa municipal Inarin Vuokra-asunnot Oy tiene viviendas tanto en Saariselkä como en Ivalo, y la página del municipio recoge a los arrendadores privados y el grupo de Facebook Sodankylä–Inari–Utsjoki. Pregunte en la entrevista si el empleador ofrece vivienda.',
          href: 'https://www.inari.fi/fi/palvelut/asuminen.html',
          linkLabel: 'inari.fi: vivienda',
          event: 'inari',
        },
        {
          title: 'Rovaniemi',
          image: { src: '/images/housing-rovaniemi-lappia-card.webp', alt: 'La Casa Lappia en el centro de Rovaniemi' },
          body:
            'Estudiantes, turistas y trabajadores de temporada compiten a la vez por los mismos estudios: en el verano de 2026 la fundación de vivienda estudiantil DAS recibió unas 550 solicitudes urgentes, un 15 por ciento más que un año antes, y casi el 90 por ciento de los solicitantes quería un estudio (Yle, 27 de julio de 2026).',
          href: 'https://yle.fi/a/74-20213937',
          linkLabel: 'Yle, 9 de marzo de 2026: escasez de vivienda en Rovaniemi',
          event: 'rovaniemi',
        },
        {
          title: 'Ruka y Kuusamo',
          image: { src: '/images/housing-ruka-kyla-card.webp', alt: 'La plaza y la torre mirador roja en el pueblo peatonal de Ruka en verano' },
          body:
            'Ruka está en Ostrobotnia del Norte, no en Laponia, pero la temporada y la escasez son las mismas. En 2017 el grupo de restaurantes de Ruka pasó de poco más de 20 empleados fijos a más de 80 en invierno y alquiló cuatro propiedades vacacionales para el personal de noviembre a mayo (Yle, 25 de octubre de 2017).',
          href: 'https://yle.fi/a/3-9895965',
          linkLabel: 'Yle, 25 de octubre de 2017',
          event: 'ruka',
        },
      ],
    },
    {
      id: 'summer',
      kicker: 'La temporada de verano',
      h2: 'El verano no es tranquilo.',
      paras: [
        'El trabajo de verano en Laponia es una temporada propia: el turismo de todo el año de Rovaniemi, las zonas de senderismo, las obras y el pico veraniego de las tiendas. En verano los apartamentos vacacionales se alquilan por meses (750 € al mes de mayo a noviembre en el ejemplo de Levi, Yle, 25 de mayo de 2023).',
        'En Rovaniemi, el director de crecimiento de una empresa de contratación espera alojar bajo un mismo techo a trabajadores de temporada en invierno y a obreros de la construcción y equipos deportivos en verano (Yle, 9 de marzo de 2026). Para quien llega en verano es una buena noticia: el alojamiento de personal construido para el invierno está vacío en verano.',
      ],
      image: {
        src: '/images/housing-jouninkauppa.webp',
        alt: 'La fachada de la tienda K-Market Jounin Kauppa en Äkäslompolo en verano',
        caption:
          'K-Market Jounin Kauppa, Äkäslompolo, julio de 2026. Los propietarios construyen tres casas adosadas para su personal (Kesko, 17 de junio de 2026). Foto: LaplandVibes.',
        ratio: '4/3',
      },
    },
    {
      id: 'ask',
      kicker: 'Antes de firmar',
      h2: 'Pregunte esto a su empleador.',
      bullets: [
        '¿La vivienda forma parte del contrato de trabajo o es un contrato de alquiler aparte? ¿Cuánto se descuenta del salario y consta en la nómina?',
        '¿Habitación propia o compartida? ¿Cuántas personas viven en el apartamento y hay cerradura en su puerta?',
        '¿Qué ocurre con el contrato de alquiler si el empleo termina antes que la temporada, o continúa más allá de ella?',
        '¿Puede registrar allí su dirección? La notificación de cambio de domicilio a DVV debe hacerse en el plazo de una semana desde la mudanza, y un apartamento vacacional a menudo no lo permite.',
        '¿Quién paga la electricidad, el agua y el internet?',
        '¿Cómo llega al trabajo sin coche: distancia, autobús, autobús de esquí?',
        '¿Hay fianza y cuándo se devuelve? Según la ley: desde el 1 de octubre de 2026, en un plazo de 14 días desde el fin del contrato (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: '¿El empleador ofrece vivienda a los trabajadores de temporada en Levi?',
      a: 'A menudo, pero no siempre ni gratis. Los empleadores alquilan casas adosadas y apartamentos vacacionales para el personal durante toda la temporada y descuentan el alquiler del salario. Pida la oferta por escrito y compruebe qué pasa con el apartamento si el trabajo termina.',
    },
    {
      q: '¿Cuándo debo empezar a buscar vivienda para la temporada de invierno?',
      a: 'En verano. Solicite a las empresas municipales de vivienda (Kittilä, Inari, Sodankylä) antes de la temporada; en el ejemplo de Levi, un apartamento vacacional solo se podía alquilar por meses de mayo a noviembre (Yle, 25 de mayo de 2023).',
    },
    {
      q: '¿Puedo vivir en un apartamento vacacional durante toda la temporada?',
      a: 'Sí, si el propietario ofrece un contrato de temporada, pero en un apartamento vacacional no se puede obtener una dirección oficial (Yle, 25 de mayo de 2023).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Las primeras noches',
    h2: 'Antes de tener las llaves en la mano.',
    lead:
      'La temporada suele empezar antes de que el apartamento esté libre. El buscador de nuestro socio muestra habitaciones y apartamentos disponibles a los precios de hoy.',
    chips: [
      { label: 'Levi', destination: 'Levi', sid: 'seasonal_first_nights_levi' },
      { label: 'Ylläs', destination: 'Äkäslompolo', sid: 'seasonal_first_nights_yllas' },
      { label: 'Saariselkä', destination: 'Saariselkä', sid: 'seasonal_first_nights_saariselka' },
      { label: 'Rovaniemi', destination: 'Rovaniemi', sid: 'seasonal_first_nights_rovaniemi' },
    ],
  },
  sources: pickSources('es', SOURCES, common.sourceLabels),
};

export default copy;
