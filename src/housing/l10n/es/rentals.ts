/**
 * Espanja (es) · rentals. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/rentals.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'tkVuokrat', 'kela', 'ahvl', 'rakli', 'kuluttajaliittoVuokra', 'yle2025das', 'yle2023', 'rovaniemi', 'das',
  'kittila', 'kemi', 'keminmaa', 'tornio', 'kemijarvi', 'kemijarviHaku', 'kemijarviVuostimo', 'kemijarviTalousarvio',
  'sodankyla', 'asentopuulaaki', 'asentopuulaakiVapaat', 'inari',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Alquiler en Laponia finlandesa: Rovaniemi, Levi, Kemi–Tornio',
  metaDescription:
    'Alquiler de larga duración en la Laponia finlandesa, de Rovaniemi a Levi e Inari: precio por m² (Statistics Finland), fianza y ayuda a la vivienda de Kela.',
  breadcrumb: 'Alquiler',
  hero: {
    eyebrow: 'Alquilar en Laponia',
    title: 'Alquilar una vivienda en Laponia.',
    subtitle:
      'Dónde encontrar un piso de alquiler, cuánto cuesta y qué parte cubre Kela. Localidad por localidad.',
  },
  authorNote:
    'Alquileres por m²: estadística de alquileres de Statistics Finland, viviendas de alquiler del mercado libre, julio–septiembre de 2026. Empresas municipales de vivienda comprobadas en las páginas de los municipios y de las propias empresas el 15 de noviembre de 2026.',
  intro: [
    'En Laponia un piso de alquiler sale de una de tres fuentes: la empresa de vivienda del propio municipio, los portales nacionales o los grupos locales. Empiece por el municipio. Sus empresas poseen cientos de viviendas, por ejemplo algo más de 300 en Keminmaa, unas 720 en Sodankylä, 560 en Kemijärvi y más de 500 en Inari, y se puede solicitar una incluso cuando ahora mismo no hay ninguna libre.',
    'El precio depende de dónde se mude. En Rovaniemi un estudio de 30 m² cuesta de media unos 560 € al mes; en el resto de Laponia, menos. En los pueblos de montaña el alquiler sigue a la temporada, así que para el invierno pregunte primero a su empleador por el alojamiento para el personal.',
  ],
  sections: [
    {
      id: 'towns',
      kicker: 'Dónde están las viviendas',
      h2: 'Localidad por localidad.',
      lead: 'Cada localidad tiene su propia página: la empresa municipal de vivienda y cómo solicitar, el nivel de los alquileres y el límite de Kela. El alojamiento para el personal en Ylläs se explica en la página de los trabajadores de temporada.',
      band: true,
      cards: [
        {
          title: 'Rovaniemi',
          image: { src: '/images/housing-rovaniemi-card-talvikatu.webp', alt: 'Bloques de pisos y gente caminando por una calle nevada de Rovaniemi en enero' },
          body:
            'La página de la ciudad remite a los arrendadores KAS asunnot, M2-Kodit, Tarveasunnot, Avara y Lumo, y a los servicios de búsqueda Oikotie, Vuokraovi y Qasa. Los estudiantes solicitan a la Fundación Domus Arctica DAS (unas 1700 viviendas, 700 de ellas estudios) y los menores de 30 años a NAL Rovaniemi. La solicitud a DAS es válida durante tres meses, y los estudiantes nuevos tienen prioridad en agosto y septiembre.',
          href: '/rentals/rovaniemi',
          linkLabel: 'Alquiler en Rovaniemi',
        },
        {
          title: 'Kemi, Keminmaa y Tornio',
          image: { src: '/images/housing-kemi-card-kaupungintalo.webp', alt: 'El ayuntamiento de Kemi en una mañana nevada de enero' },
          body:
            'Las viviendas municipales de Kemi las gestiona Kiinteistö Oy Itätuuli, el mayor proveedor de vivienda de alquiler de la ciudad, con pisos a menos de cinco kilómetros del centro. Keminmaan Vuokra-asunnot Oy tiene algo más de 300 viviendas, y cada empresa tiene su propia solicitud en línea. En Tornio las viviendas de la ciudad las administra Tornion Krunni Oy (Tornion Vuokra-asunnot Oy).',
          href: '/rentals/kemi-tornio',
          linkLabel: 'Alquiler en Kemi, Tornio y Keminmaa',
        },
        {
          title: 'Kemijärvi',
          image: { src: '/images/housing-kemijarvi-card-kerrostalo.webp', alt: 'Un bloque de pisos y un viejo pino en Kemijärvi una tarde de julio' },
          body:
            'Las dos empresas inmobiliarias de la ciudad poseen 560 viviendas de alquiler, y el presupuesto apunta a que entre el 80 y el 85 por ciento estén alquiladas, de modo que sí hay pisos vacíos. La solicitud es válida durante cuatro meses. Las casas adosadas de Vuostimo están a 14 km de Pyhätunturi.',
          href: '/rentals/kemijarvi',
          linkLabel: 'Alquiler en Kemijärvi',
        },
        {
          title: 'Sodankylä',
          image: { src: '/images/housing-sodankyla-jaamerentie.webp', alt: 'Jäämerentie, la calle principal del pueblo de Sodankylä, en septiembre' },
          body:
            'Asentopuulaaki Oy alquila las unas 720 viviendas del municipio, y el buscador de pisos de la empresa muestra los que están libres o van a quedar libres en cada momento. Los edificios más antiguos se alquilan por entre 9 y 12,50 € por m², y Käpyriihi, terminado en 2025, por 18 €.',
          href: '/rentals/sodankyla',
          linkLabel: 'Alquiler en Sodankylä',
        },
        {
          title: 'Kittilä y Levi',
          image: { src: '/images/housing-kittila-levi-card-kyla.webp', alt: 'El pueblo de Levi visto desde la cima del fjäll de Levi en noviembre, con un lago y más fjälls al fondo' },
          body:
            'Kittilän Vuokratalot Oy alquila las viviendas del propio municipio; la oficina está en la planta baja del ayuntamiento (Valtatie 15). La solicitud se presenta en línea en la web de la empresa. Los apartamentos vacacionales de Levi pasan a alquiler mensual sobre todo de mayo a noviembre; en invierno el mismo piso se alquila por semanas.',
          href: '/rentals/kittila-levi',
          linkLabel: 'Alquiler en Kittilä y Levi',
        },
        {
          title: 'Inari, Ivalo y Saariselkä',
          image: { src: '/images/housing-ivalo-joki.webp', alt: 'Ivalo visto al otro lado del río Ivalo una tarde de verano' },
          body:
            'Inarin Vuokra-asunnot Oy tiene más de 500 viviendas en Ivalo, Inari, Saariselkä, Nellim y Sevettijärvi. La página del municipio recoge también a los arrendadores privados (Bilto, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg, Uni Kodit) y el grupo de alquiler Sodankylä–Inari–Utsjoki en Facebook.',
          href: '/rentals/ivalo-inari',
          linkLabel: 'Alquiler en Ivalo e Inari',
        },
      ],
    },
    {
      id: 'portals',
      kicker: 'Portales y grupos',
      h2: 'Los mismos canales que en el resto de Finlandia.',
      bullets: [
        '<a href="https://asunnot.oikotie.fi/vuokra-asunnot/rovaniemi" target="_blank" rel="noopener">Oikotie</a>: de alcance nacional. Filtre por municipio, no solo por pueblo.',
        '<a href="https://www.vuokraovi.com/vuokra-asunnot/rovaniemi" target="_blank" rel="noopener">Vuokraovi</a>: solo alquileres.',
        '<a href="https://qasa.fi" target="_blank" rel="noopener">Qasa</a>: figura en la lista de la ciudad de Rovaniemi; el contrato se firma electrónicamente en la plataforma.',
        '<a href="https://www.tori.fi" target="_blank" rel="noopener">Tori</a>: un sitio de anuncios clasificados que también publica pisos de alquiler. Más abajo se explica qué comprobar antes de pagar.',
        'Grupos de Facebook: búsqueda de vivienda en Levi, Kemi–Keminmaa y Sodankylä–Inari–Utsjoki. Es el canal más rápido en los pueblos de montaña, pero nadie responde de los anuncios.',
      ],
    },
    {
      id: 'prices',
      kicker: 'Cuánto cuesta el alquiler',
      h2: 'Por metro cuadrado, no a ojo.',
      lead:
        'Statistics Finland publica los alquileres cada trimestre. A continuación, el alquiler medio de las viviendas del mercado libre en julio–septiembre de 2026, en euros por metro cuadrado al mes.',
      table: {
        caption: 'Alquiler medio en €/m² al mes, viviendas de alquiler del mercado libre, 3.er trimestre de 2026',
        head: ['', 'Rovaniemi', 'Laponia (región)', 'Todo el país'],
        rows: [
          ['Estudios', '18,63', '17,25', '20,49'],
          ['Pisos de dos habitaciones', '14,40', '12,87', '15,07'],
          ['Tres habitaciones o más', '12,29', '11,08', '13,98'],
          ['Todas las viviendas', '14,63', '13,14', '15,99'],
          ['Contratos nuevos, todas las viviendas', '15,93', '13,39', '16,72'],
        ],
        foot: 'Statistics Finland, alquileres del 3.er trimestre de 2026, tabla 15fa. Contrato nuevo = contratos iniciados durante el trimestre; muestran lo que se pide ahora mismo.',
      },
      paras: [
        '<strong>Cómo calcularlo:</strong> multiplique el alquiler por m² por la superficie. En Rovaniemi un estudio de 30 m² cuesta de media unos 560 € al mes (18,63 × 30) y unos 600 € en un contrato nuevo (20,14 × 30, la cifra de estudios en contratos nuevos de Rovaniemi). Un piso de dos habitaciones de 50 m²: unos 720 € al mes (14,40 × 50). El agua y la electricidad suelen ir aparte.',
        'Los alquileres por metro cuadrado de Laponia están por debajo de la media nacional en todos los tamaños de vivienda, y la diferencia es menor en los pisos de dos habitaciones.',
      ],
      note: {
        label: 'Lo que la estadística no ve',
        body:
          'Los alquileres de temporada en las estaciones de esquí y los alquileres amueblados de corta duración no figuran en estas cifras. Cerca del centro de Levi, un piso de 80 m² en una casa alpina costaba 750 € al mes de mayo a noviembre, 2000 € por semana en temporada alta y 1650 € al mes todo el año (Yle, 25 may 2023): el mismo piso con tres precios.',
      },
    },
    {
      id: 'housing-allowance',
      kicker: 'Ayuda a la vivienda de Kela',
      h2: 'El límite depende del municipio.',
      lead:
        'La ayuda general a la vivienda (asumistuki) cubre como máximo el 70 % de los gastos de vivienda aceptados, y esos gastos tienen un límite que depende del municipio y del tamaño del hogar. Kela clasifica los municipios en tres grupos: Rovaniemi está en el grupo de los 24 municipios mayores, y todos los demás municipios de Laponia pertenecen a «otros municipios», con un límite más bajo.',
      table: {
        caption: 'Gastos máximos de vivienda en 2026, €/mes',
        head: ['Tamaño del hogar', 'Rovaniemi', 'Otros municipios de Laponia'],
        rows: [
          ['1 persona', '447', '394'],
          ['2 personas', '652', '574'],
          ['3 personas', '828', '734'],
          ['4 personas', '981', '875'],
          ['Cada persona adicional', '+134', '+129'],
        ],
        foot: 'Kela, ayuda general a la vivienda 2026. No se paga una ayuda inferior a 15 €.',
      },
      paras: [
        'El límite significa que en Rovaniemi el alquiler de un hogar de una persona cuenta hasta 447 €, aunque el alquiler sea de 600 €. El resto lo paga usted. Los ingresos reducen la ayuda a través de la deducción básica; la calculadora de Kela muestra su caso concreto.',
      ],
    },
    {
      id: 'contract',
      kicker: 'El contrato de alquiler',
      h2: 'Cinco cosas antes de firmar.',
      bullets: [
        '<strong>La fianza es como máximo de tres meses de alquiler</strong> (Ley de arrendamientos de vivienda, sección 8). Lo habitual es uno o dos meses.',
        '<strong>Desde el 1 de octubre de 2026 la fianza debe devolverse</strong>, o justificarse por escrito su retención, en un plazo de 14 días desde el fin del contrato o la entrega de la vivienda (reforma en vigor el 1 oct 2026, Rakli).',
        '<strong>El preaviso del inquilino es de un mes.</strong> En los contratos firmados a partir del 1 de octubre de 2026, el preaviso del arrendador es de tres meses, y de cuatro si el contrato ha durado de forma continuada al menos dos años (Rakli). Los contratos firmados antes del 1 de octubre de 2026 conservan los preavisos anteriores (Kuluttajaliitto).',
        '<strong>Un contrato de duración determinada obliga a ambas partes hasta el final.</strong> En el trabajo de temporada, la vivienda del empleador suele estar ligada al empleo: lea qué ocurre si el trabajo termina antes que la temporada.',
        '<strong>Casi siempre se consulta el historial crediticio.</strong> Una anotación por impago no impide alquilar, pero entonces una empresa municipal de vivienda o un arrendador particular es una opción más probable que las grandes cadenas.',
      ],
    },
    {
      id: 'before-paying',
      kicker: 'Antes de pagar nada',
      h2: 'Tres reglas que protegen su fianza.',
      bullets: [
        'No pague nunca una fianza antes de una visita o de un recorrido en vídeo en el que se vean la vivienda y las llaves en la misma imagen.',
        'Contrato por escrito, con el nombre del arrendador y su número de identificación empresarial o personal. Una empresa municipal de vivienda es el punto de partida más seguro si no conoce el mercado.',
        'Un alquiler amueblado de corta duración no es un arrendamiento de vivienda: puede que un apartamento vacacional no obtenga una dirección oficial, y esa falta de dirección complica los trámites con empresas, por ejemplo en las consultas de crédito (Yle, 25 may 2023).',
      ],
    },
  ],
  faqs: [
    {
      q: '¿Cuánto cuesta un estudio en Rovaniemi?',
      a: 'Según Statistics Finland, el alquiler medio de un estudio del mercado libre en Rovaniemi fue de 18,63 € por m² en julio–septiembre de 2026 y de 20,14 € por m² en los contratos nuevos. Un estudio de 30 m² cuesta, por tanto, entre 560 y 600 € al mes, sin la electricidad.',
    },
    {
      q: '¿Se puede alquilar en Laponia sin historial crediticio en Finlandia?',
      a: 'Sí, pero con menos opciones. Las empresas municipales de vivienda y los arrendadores particulares deciden caso por caso, y ayuda ofrecer una fianza mayor (la ley permite hasta tres meses de alquiler) o un avalista. Las grandes cadenas de alquiler siempre consultan el historial crediticio.',
    },
    {
      q: '¿Cuándo es mejor buscar piso en Rovaniemi?',
      a: 'En cualquier mes que no sea agosto o septiembre. En esos meses DAS no puede alojar a todos los solicitantes y los estudios del mercado libre escasean (Yle, 27 jul 2026). Los estudios alquilados por temporada de invierno vuelven al mercado en primavera.',
    },
    {
      q: '¿Por qué el alquiler en Levi es varias veces más alto en invierno?',
      a: 'Porque en temporada alta el mismo piso se alquila por semanas. En el ejemplo de Yle (25 may 2023), un piso de 80 m² en una casa alpina costaba 750 € al mes en verano y 2000 € por semana en invierno. El alquiler mensual es posible de mayo a noviembre; para el invierno, pregunte a su empleador por el alojamiento para el personal o a la empresa municipal de Kittilä.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Las primeras semanas',
    h2: 'Vea el piso en persona.',
    lead:
      'Reserve un hotel o un aparthotel para las primeras semanas y visite usted mismo los pisos antes de firmar. Nuestro buscador de socios muestra las habitaciones libres a los precios de hoy.',
    chips: [
      { label: 'Rovaniemi', destination: 'Rovaniemi', sid: 'rentals_first_weeks_rovaniemi' },
      { label: 'Levi', destination: 'Levi', sid: 'rentals_first_weeks_levi' },
      { label: 'Tornio', destination: 'Tornio', sid: 'rentals_first_weeks_tornio' },
      { label: 'Ivalo', destination: 'Ivalo', sid: 'rentals_first_weeks_ivalo' },
    ],
  },
  sources: pickSources('es', SOURCES, common.sourceLabels),
};

export default copy;
