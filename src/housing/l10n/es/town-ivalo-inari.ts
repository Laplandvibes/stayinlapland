/**
 * Espanja (es) · town-ivalo-inari. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/ivalo-inari.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'inari', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Alquiler en Ivalo e Inari: arrendadores municipales y privados',
  metaDescription:
    'Alquilar en Ivalo, Inari y Saariselkä: más de 500 viviendas municipales (Inarin Vuokra-asunnot Oy), arrendadores privados del municipio y ayudas de Kela.',
  breadcrumb: 'Ivalo e Inari',
  hero: {
    eyebrow: 'Municipio de Inari, 7244 habitantes',
    title: 'Alquiler en Ivalo e Inari.',
    subtitle:
      'El mercado de alquiler más septentrional de Finlandia: una empresa municipal, unos pocos arrendadores privados y la temporada de Saariselkä. Por dónde empezar.',
  },
  authorNote:
    'Inarin Vuokra-asunnot Oy y los arrendadores privados, según la propia página de vivienda del municipio de Inari; población de Statistics Finland; alquileres por m² de Statistics Finland (región de Laponia, 3.er trimestre de 2026). Comprobado el 15 de noviembre de 2026.',
  intro: [
    'El municipio de Inari tiene 7244 habitantes (Statistics Finland, 31 dic 2025) y, según el municipio, el interés por vivir allí ha crecido, por lo que ha elaborado en su página una lista de proveedores de alquiler (inari.fi).',
    'La empresa municipal Inarin Vuokra-asunnot Oy alquila más de 500 viviendas en Ivalo, Inari, Saariselkä, Nellim y Sevettijärvi, desde estudios hasta pisos familiares. Los arrendadores privados de la lista del municipio son Bilto Oy, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg Oy y Uni Kodit (inari.fi).',
    'Statistics Finland no publica una cifra de alquiler aparte para Inari, por lo que a continuación se muestra la cifra regional de Laponia. La vivienda para los trabajadores de temporada de Saariselkä tiene su propia página.',
  ],
  sections: [
    {
      id: 'channels',
      kicker: 'A quién solicitar',
      h2: 'La empresa municipal y la lista del municipio.',
      band: true,
      cards: [
        {
          title: 'Inarin Vuokra-asunnot Oy',
          body: 'La empresa municipal de vivienda: más de 500 viviendas en Ivalo, Inari, Saariselkä, Nellim y Sevettijärvi, a poca distancia de los servicios básicos. Viviendas libres y solicitudes en la web de la propia empresa.',
          href: 'https://inarinvuokra-asunnot.fi/',
          linkLabel: 'inarinvuokra-asunnot.fi',
          event: 'inari_company',
        },
        {
          title: 'Municipio de Inari: arrendadores privados',
          body: 'La página de vivienda del municipio recoge a Bilto Oy, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg Oy y Uni Kodit con sus datos de contacto, además del grupo de alquiler Sodankylä–Inari–Utsjoki en Facebook. Más información en inari@inari.fi.',
          href: 'https://www.inari.fi/fi/palvelut/asuminen.html',
          linkLabel: 'inari.fi: vivienda',
          event: 'inari_city',
        },
        {
          title: 'Oikotie y Vuokraovi',
          body: 'Anuncios privados bajo el municipio de Inari; las viviendas de Ivalo y Saariselkä aparecen en la misma búsqueda. Los anuncios son pocos, así que active una alerta de búsqueda.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/inari',
          linkLabel: 'Oikotie: alquileres en Inari',
          event: 'oikotie',
        },
        {
          title: 'Para los trabajadores de temporada de Saariselkä',
          body: 'Los empleadores de Saariselkä también alojan ellos mismos al personal, y la empresa municipal tiene pisos en Saariselkä. Pregunte por la vivienda en la entrevista; el panorama completo está en la página de los trabajadores de temporada.',
          href: '/seasonal-worker-housing',
          linkLabel: 'Vivienda para trabajadores de temporada',
          event: 'seasonal_page',
        },
      ],
    },
    {
      id: 'prices',
      kicker: 'Cuánto cuesta el alquiler',
      h2: 'Alquileres regionales de Laponia por m², julio–septiembre de 2026.',
      table: {
        caption: 'Alquiler medio en €/m² al mes, viviendas de alquiler del mercado libre, 3.er trimestre de 2026',
        head: ['', 'Laponia (región)', 'Todo el país'],
        rows: [
          ['Estudios', '17,25', '20,49'],
          ['Pisos de dos habitaciones', '12,87', '15,07'],
          ['Tres habitaciones o más', '11,08', '13,98'],
          ['Todas las viviendas', '13,14', '15,99'],
        ],
        foot: 'Statistics Finland, alquileres del 3.er trimestre de 2026, tabla 15fa. No se publica una cifra aparte para Inari.',
      },
    },
    {
      id: 'housing-allowance',
      kicker: 'Ayuda a la vivienda de Kela',
      h2: 'Inari pertenece a los «otros municipios» de Kela.',
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
      id: 'contract',
      kicker: 'El contrato',
      h2: 'La fianza y su devolución.',
      bullets: [
        'La fianza es como máximo de tres meses de alquiler (Ley de arrendamientos de vivienda, sección 8).',
        'Desde el 1 de octubre de 2026 la fianza debe devolverse, o justificarse por escrito su retención, en un plazo de 14 días desde el fin del contrato (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: '¿Dónde encuentro un alquiler en Ivalo?',
      a: 'En la empresa municipal Inarin Vuokra-asunnot Oy, que tiene más de 500 viviendas en Ivalo, Inari y Saariselkä, o con los arrendadores privados que figuran en la lista del municipio (Bilto, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg, Uni Kodit). Los portales publican pocos anuncios.',
    },
    {
      q: '¿Hay alquileres en Saariselkä?',
      a: 'La empresa municipal tiene pisos también en Saariselkä, y los empleadores alojan ellos mismos al personal de temporada. En el mercado libre, las viviendas de Saariselkä son sobre todo casas de vacaciones.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Las primeras noches',
    h2: 'Antes de las llaves.',
    lead: 'El buscador de socios muestra las habitaciones libres en Ivalo y Saariselkä a los precios de hoy.',
    chips: [
      { label: 'Ivalo', destination: 'Ivalo', sid: 'rentals_ivalo_first_weeks' },
      { label: 'Saariselkä', destination: 'Saariselkä', sid: 'rentals_saariselka_first_weeks' },
    ],
  },
  sources: pickSources('es', SOURCES, common.sourceLabels),
};

export default copy;
