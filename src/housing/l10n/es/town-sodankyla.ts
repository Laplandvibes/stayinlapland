/**
 * Espanja (es) · town-sodankyla. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/sodankyla.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
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
  metaTitle: 'Alquiler en Sodankylä: 720 viviendas municipales y su precio',
  metaDescription:
    'Alquilar en Sodankylä: unas 720 viviendas municipales de Asentopuulaaki Oy, alquileres de unos 7,40–18 € por m², solicitud en línea y ayudas de Kela.',
  breadcrumb: 'Sodankylä',
  hero: {
    eyebrow: 'Sodankylä, 8095 habitantes',
    title: 'Alquiler en Sodankylä.',
    subtitle:
      'Una guarnición, una mina y una comunidad científica en un solo municipio, donde la larga escasez de vivienda del pueblo principal se ha aliviado con los edificios nuevos. Dónde solicitar y cuánto cuesta.',
  },
  authorNote:
    'Población de Statistics Finland; número de viviendas de la página del municipio; alquileres, condiciones y apartamentos libres de las páginas de Asentopuulaaki Oy; empleos del Ejército finlandés, Yle y las empresas. Comprobado el 15 de noviembre de 2026.',
  intro: [
    'Sodankylä tenía 8095 habitantes a finales de 2025 (Statistics Finland). El municipio posee unas 720 viviendas de alquiler, que gestiona su filial Asentopuulaaki Oy (sodankyla.fi). Casi todos los apartamentos de la lista de la empresa están en el pueblo principal; el resto, en Aska, Orajärvi, Riipi, Torvinen y Vaalajärvi.',
    'Según el municipio, la escasez de vivienda que arrastró Sodankylä durante años se ha aliviado: en el verano de 2025 se terminó Käpyriihi, con 36 viviendas nuevas, junto al río Jeesiöjoki (Municipio de Sodankylä, 2 de julio de 2025). El buscador de apartamentos de la empresa muestra los apartamentos libres o que van a quedar libres en cada momento, con su alquiler y la fecha en que quedan libres (Asentopuulaaki).',
    'La escasez no ha desaparecido del todo. En septiembre de 2025 el director técnico del municipio dijo a Yle que sigue dificultando traer trabajadores a Sodankylä, aunque haya empleos (Yle, 11 de septiembre de 2025).',
  ],
  sections: [
    {
      id: 'prices',
      kicker: 'Cuánto cuesta el alquiler',
      h2: 'Unos 10 € por m² en un edificio antiguo, 18 € en uno nuevo.',
      table: {
        caption: 'Alquileres de Asentopuulaaki Oy, €/m² al mes, lista de inmuebles del 15 de noviembre de 2026',
        head: ['Edificios', '€/m² al mes'],
        rows: [
          ['Käpyriihi, terminado en 2025', '18,00'],
          ['Peuranpalas 2013 y Kehtoranta 2015', '12,80–13,00'],
          ['Casas adosadas, edificios de corredor exterior y de apartamentos 1977–1998', '8,80–12,50'],
          ['Edificios de apartamentos del centro, 1968–1970', '10,20'],
          ['Casas adosadas de los pueblos periféricos', '7,40–10,90'],
        ],
        foot: 'Calculado a partir del alquiler de cada apartamento de la lista de inmuebles de Asentopuulaaki Oy, 15 de noviembre de 2026: 42 edificios, 597 viviendas. La fianza es de un mes de alquiler, el agua se cobra por adelantado y el inquilino paga la electricidad doméstica. En las casas de los pueblos con calefacción eléctrica, el inquilino paga además la calefacción, que la empresa calcula en unos 100 € al mes en verano y 200 € en invierno.',
      },
      paras: [
        '<strong>Ejemplos:</strong> un apartamento de un dormitorio de 55 m² en un edificio del centro, 632 € al mes; un apartamento de un dormitorio de 42 m² en Käpyriihi, 756 €; una casa adosada de dos dormitorios de 80 m² en Kaanaanmaa, 800 €.',
        '<strong>Alquileres privados:</strong> los apartamentos de un dormitorio del mercado libre costaron de media 11,73 € por m² en el distrito postal del centro de Sodankylä en octubre–diciembre de 2025 (Statistics Finland, tabla 13eb). No hay una cifra municipal más reciente: Sodankylä no figura en la tabla actual de alquileres de Statistics Finland.',
      ],
    },
    {
      id: 'channels',
      kicker: 'A quién solicitar',
      h2: 'Primero la empresa municipal, después los portales.',
      band: true,
      cards: [
        {
          title: 'Asentopuulaaki Oy',
          body: 'La filial municipal que alquila las cerca de 720 viviendas del municipio. Se solicita en línea y se adjunta un justificante de ingresos. Se consulta el historial crediticio, y los impagos cuentan en contra.',
          href: 'https://www.asentopuulaaki.fi/asunnon-hakeminen/',
          linkLabel: 'asentopuulaaki.fi: solicitar una vivienda',
          event: 'asentopuulaaki',
        },
        {
          title: 'Apartamentos libres',
          body: 'El buscador de apartamentos de la empresa muestra los apartamentos libres y los que van a quedar libres, con su alquiler y la fecha en que quedan libres. La lista se actualiza en la web de la propia empresa, así que consúltela antes de solicitar.',
          href: 'https://www.asentopuulaaki.fi/asuntohaku/',
          linkLabel: 'asentopuulaaki.fi: buscador de apartamentos',
          event: 'asentopuulaaki_vapaat',
        },
        {
          title: 'Oikotie y Vuokraovi',
          body: 'Anuncios de particulares en el municipio de Sodankylä. La página de vivienda del municipio no nombra más arrendador que su propia empresa, así que los apartamentos privados se encuentran en los portales.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/sodankyl%C3%A4',
          linkLabel: 'Oikotie: alquileres en Sodankylä',
          event: 'oikotie',
        },
      ],
    },
    {
      id: 'student-loan',
      kicker: 'Para los recién llegados',
      h2: 'Hasta 5800 € para los recién graduados.',
      paras: [
        'Sodankylä, Inari y Utsjoki compensan los préstamos de estudios de los recién graduados que se mudan allí y trabajan al menos el 50 por ciento de la jornada completa o como autónomos. La compensación es de 5800 € como máximo, pagada con carácter retroactivo durante un máximo de tres años en periodos de 12 meses (Municipio de Sodankylä).',
        'Cubre los préstamos de estudios de una titulación de formación profesional de grado medio o de un título de una universidad de ciencias aplicadas o de una universidad, y es necesario haberse graduado en los dos años anteriores. Las solicitudes se tramitan por primera vez en enero de 2027 y, según Yle, el formulario de solicitud se abre el 1 de diciembre de 2026 (Yle, 1 de septiembre de 2026).',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Ayuda a la vivienda de Kela',
      h2: 'Sodankylä pertenece a los «otros municipios» de Kela.',
      table: {
        caption: 'Gastos máximos de vivienda en 2026, €/mes, grupo de Kela «otros municipios»',
        head: ['Tamaño del hogar', 'Gastos máximos de vivienda'],
        rows: [
          ['1 persona', '394'],
          ['2 personas', '574'],
          ['3 personas', '734'],
          ['4 personas', '875'],
          ['Cada persona adicional', '+129'],
        ],
        foot: 'Kela, ayuda general a la vivienda 2026. La ayuda es como máximo el 70 % de los gastos de vivienda aceptados; no se paga una ayuda inferior a 15 €.',
      },
    },
    {
      id: 'work',
      kicker: 'Trabajo',
      h2: 'La guarnición crece; la mina cierra en 2034.',
      bullets: [
        'La Brigada Jaeger emplea a unas 400 personas e instruye a unos 2200 conscriptos al año (Ejército finlandés). En la guarnición de Sodankylä se construye un cuartel para casi 700 conscriptos, que debe estar listo a principios de 2028 (Yle, 2 de abril de 2026).',
        'La mina de Kevitsa, de Boliden, anunció 77 despidos en mayo de 2026, y está previsto que la mina cierre en 2034 (Yle, 26 de mayo de 2026).',
        'La mina de Sakatti proyectada por Anglo American debería empezar a operar hacia 2032, pero el proyecto sigue en fase de permisos, y la sección de Laponia de la Asociación Finlandesa para la Conservación de la Naturaleza ha recurrido ante los tribunales la decisión sobre Sakatti (Anglo American; Yle, 18 de junio de 2026).',
        'El municipio cita también la comunidad científica de Tähtelä y la estación de montaña de Luosto (sodankyla.fi). Luosto está a 38 km del pueblo principal (OpenStreetMap).',
      ],
    },
    {
      id: 'everyday',
      kicker: 'La vida cotidiana',
      h2: 'Aquí la noche polar dura cuatro días.',
      bullets: [
        'En Sodankylä la noche polar dura solo cuatro días, justo antes de Navidad (Instituto Meteorológico Finlandés).',
        'El aeropuerto más cercano es el de Kittilä, a 93 km, y el centro de Rovaniemi está a 130 km (OpenStreetMap).',
        'Para estudiantes: REDU tiene una residencia de estudiantes en Sodankylä, y en marzo de 2026 el municipio anunció una residencia para estudiantes de bachillerato y de educación de adultos en grandes apartamentos de Asentopuulaaki (redu.fi; Municipio de Sodankylä, 5 de marzo de 2026).',
      ],
    },
    {
      id: 'contract',
      kicker: 'El contrato',
      h2: 'Un mes de preaviso.',
      bullets: [
        'En Asentopuulaaki el preaviso es de un mes natural, y la fianza se devuelve unas dos semanas después de que usted se vaya (Asentopuulaaki).',
        'La fianza es como máximo de tres meses de alquiler (Ley de arrendamientos de vivienda, artículo 8).',
        'Desde el 1 de octubre de 2026 la fianza debe devolverse, o justificarse por escrito su retención, en un plazo de 14 días desde el fin del contrato (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: '¿Cómo solicito una vivienda municipal en Sodankylä?',
      a: 'Con la solicitud en línea de Asentopuulaaki Oy, adjuntando un justificante de ingresos, como una nómina. Se consulta el historial crediticio en Suomen Asiakastieto, y los impagos cuentan en contra (Asentopuulaaki).',
    },
    {
      q: '¿Cuánto cuesta un apartamento de alquiler en Sodankylä?',
      a: 'En los edificios antiguos de la empresa municipal, unos 10 € por m²; en las casas adosadas y de corredor exterior, sobre todo entre 10 y 12,50 €; y en Käpyriihi, terminado en 2025, 18 €, lo que supone 756 € al mes por un apartamento de un dormitorio de 42 m² (Asentopuulaaki, 15 de noviembre de 2026). Los apartamentos de un dormitorio del mercado libre en el centro costaron de media 11,73 € por m² en octubre–diciembre de 2025 (Statistics Finland).',
    },
    {
      q: '¿Hay escasez de vivienda en Sodankylä?',
      a: 'La hubo durante años. Según el municipio se ha aliviado al terminarse edificios nuevos (2 de julio de 2025), y el buscador de apartamentos de la empresa municipal muestra los apartamentos libres y los que van a quedar libres (Asentopuulaaki).',
    },
    {
      q: '¿Quién puede recibir la compensación del préstamo de estudios?',
      a: 'Un recién graduado que se muda a Sodankylä, Inari o Utsjoki y trabaja al menos el 50 por ciento de la jornada completa o como autónomo. La compensación es de 5800 € como máximo durante tres años, y las solicitudes se tramitan por primera vez en enero de 2027 (Municipio de Sodankylä).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Las primeras noches',
    h2: 'Visitas en persona.',
    lead: 'El buscador de nuestro socio muestra habitaciones y apartamentos libres en Sodankylä y en Luosto a los precios de hoy.',
    chips: [
      { label: 'Sodankylä', destination: 'Sodankylä', sid: 'rentals_sodankyla_first_weeks' },
      { label: 'Luosto', destination: 'Luosto', sid: 'rentals_luosto_first_weeks' },
    ],
  },
  sources: pickSources('es', SOURCES, common.sourceLabels),
};

export default copy;
