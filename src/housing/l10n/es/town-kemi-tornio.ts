/**
 * Espanja (es) · town-kemi-tornio. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/kemi-tornio.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'kemi', 'itatuuli', 'keminmaa', 'keminmaaVuokra', 'tornio', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Alquiler en Kemi, Tornio y Keminmaa: viviendas municipales',
  metaDescription:
    'Alquilar en Kemi, Tornio y Keminmaa, en la costa de Laponia: empresas municipales como Itätuuli y Tornion Krunni, agencias privadas y ayudas de Kela.',
  breadcrumb: 'Kemi y Tornio',
  hero: {
    eyebrow: 'La costa de la Laponia del mar',
    title: 'Alquiler en Kemi, Tornio y Keminmaa.',
    subtitle:
      'Las ciudades gemelas de la costa, donde las empresas municipales de vivienda tienen cientos de apartamentos y las solicitudes se presentan en línea. Por dónde empezar y cuánto cuesta el alquiler.',
  },
  authorNote:
    'Número de viviendas de las empresas municipales según las propias páginas de los municipios de Kemi, Tornio y Keminmaa; condiciones de solicitud de las páginas de las empresas; alquileres por m² de Statistics Finland (región de Laponia, 3.er trimestre de 2026). Comprobado el 15 de noviembre de 2026.',
  intro: [
    'Kemi tiene 19 339 habitantes, Tornio 20 823 y Keminmaa 7576 (Statistics Finland, 31 de diciembre de 2025). Los tres municipios son colindantes, así que la vivienda puede estar en un municipio distinto de aquel en el que está el trabajo.',
    'Las empresas municipales de vivienda son la primera dirección: las viviendas municipales de Kemi las gestiona Kiinteistö Oy Itätuuli (kemi.fi), el mayor proveedor de vivienda de alquiler de la ciudad, con apartamentos a menos de cinco kilómetros del centro (itatuuli.fi). Keminmaan Vuokra-asunnot Oy tiene 18 inmuebles con algo más de 300 viviendas (keminmaa.fi). Cada empresa tiene su propia solicitud en línea. En Tornio las viviendas de la ciudad las administra Tornion Krunni Oy, que incluye a Tornion Vuokra-asunnot Oy (tornio.fi).',
    'La tabla actual de alquileres de Statistics Finland no tiene una fila aparte para Kemi ni para Tornio, por lo que a continuación se muestra la cifra regional de Laponia. Las cifras de Rovaniemi están en su propia página.',
  ],
  sections: [
    {
      id: 'prices',
      kicker: 'Cuánto cuesta el alquiler',
      h2: 'Alquileres regionales de Laponia por m², julio–septiembre de 2026.',
      table: {
        caption: 'Alquiler medio en €/m² al mes, viviendas de alquiler del mercado libre, 3.er trimestre de 2026',
        head: ['', 'Laponia (región)', 'Rovaniemi', 'Todo el país'],
        rows: [
          ['Estudios', '17,25', '18,63', '20,49'],
          ['Apartamentos de un dormitorio', '12,87', '14,40', '15,07'],
          ['Dos dormitorios o más', '11,08', '12,29', '13,98'],
          ['Todas las viviendas', '13,14', '14,63', '15,99'],
        ],
        foot: 'Statistics Finland, alquileres del 3.er trimestre de 2026, tabla 15fa. La cifra regional incluye Rovaniemi, por lo que el nivel de Kemi–Tornio probablemente es inferior; la tabla actual no lo muestra por separado.',
      },
      paras: [
        '<strong>Ejemplos con la media regional:</strong> un estudio de 30 m², unos 520 € al mes (17,25 × 30); un apartamento de un dormitorio de 50 m², unos 640 € (12,87 × 50); un apartamento de dos dormitorios de 75 m², unos 830 € (11,08 × 75).',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Ayuda a la vivienda de Kela',
      h2: 'Kemi, Tornio y Keminmaa pertenecen a los «otros municipios» de Kela.',
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
      id: 'channels',
      kicker: 'A quién solicitar',
      h2: 'Primero la empresa municipal, después las agencias.',
      band: true,
      cards: [
        {
          title: 'Kemi: Kiinteistö Oy Itätuuli',
          body: 'Las viviendas de alquiler de la ciudad. Itätuuli es el mayor proveedor de vivienda de alquiler de Kemi, y sus apartamentos están a menos de cinco kilómetros del centro. Su solicitud en línea es válida durante cuatro meses y no se cobra fianza. La página de información empresarial de Visit Kemi recoge además las agencias privadas: Forenom, Habita Kemi, HVC Group, Kiinteistömaailma, KVP Group, OP Koti Kemi, Pihlajaniemi & Co, Solecco y AJK Asunnot.',
          href: 'https://www.kemi.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
          linkLabel: 'kemi.fi: viviendas de alquiler',
          event: 'kemi_city',
        },
        {
          title: 'Keminmaan Vuokra-asunnot Oy',
          body: 'La empresa de vivienda propiedad del municipio: 18 inmuebles con algo más de 300 viviendas, con el agua y la calefacción incluidas en el alquiler. Su solicitud en línea es válida durante tres meses y la fianza es de un mes de alquiler.',
          href: 'https://www.keminmaanvuokra-asunnot.fi/asunnonhaku.html',
          linkLabel: 'Keminmaan Vuokra-asunnot: cómo solicitar',
          event: 'keminmaa',
        },
        {
          title: 'Tornio: Tornion Krunni Oy',
          body: 'Gestiona Tornion Vuokra-asunnot Oy, Tornion Oppilasasuntola Oy y Tornion Palveluasunnot Oy; la unidad de instalaciones de la ciudad se ocupa además de las viviendas que la ciudad posee directamente. Consultas sobre vivienda por teléfono, y la página de la ciudad remite también a arrendadores y agencias privados.',
          href: 'https://www.tornio.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
          linkLabel: 'tornio.fi: viviendas de alquiler',
          event: 'tornio_city',
        },
        {
          title: 'Oikotie y Vuokraovi',
          body: 'Anuncios de particulares y de agencias. Busque Kemi, Tornio y Keminmaa de uno en uno: en los portales cada municipio es una búsqueda aparte.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kemi',
          linkLabel: 'Oikotie: alquileres en Kemi',
          event: 'oikotie',
        },
      ],
    },
    {
      id: 'contract',
      kicker: 'El contrato',
      h2: 'Dos artículos de la ley que conviene conocer.',
      bullets: [
        'La fianza es como máximo de tres meses de alquiler (Ley de arrendamientos de vivienda, artículo 8).',
        'Desde el 1 de octubre de 2026 la fianza debe devolverse, o justificarse por escrito su retención, en un plazo de 14 días desde el fin del contrato (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: '¿Cómo solicito una vivienda municipal en Kemi?',
      a: 'Con la solicitud en línea de Kiinteistö Oy Itätuuli, válida durante cuatro meses. Itätuuli es el mayor proveedor de vivienda de alquiler de Kemi, con apartamentos a menos de cinco kilómetros del centro, y alquila todos ellos sin fianza (itatuuli.fi). Keminmaan Vuokra-asunnot Oy tiene su propia solicitud.',
    },
    {
      q: '¿Cuánto cuesta el alquiler en Kemi y Tornio?',
      a: 'La tabla actual de Statistics Finland no tiene una fila aparte para las ciudades. La media regional de Laponia fue de 13,14 € por m² en julio–septiembre de 2026 (estudios 17,25, apartamentos de un dormitorio 12,87), y esa cifra incluye a Rovaniemi, más cara.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Las primeras semanas',
    h2: 'Visitas en persona.',
    lead: 'Reserve alojamiento para las visitas y vea el apartamento antes de firmar.',
    chips: [
      { label: 'Kemi', destination: 'Kemi', sid: 'rentals_kemi_first_weeks' },
      { label: 'Tornio', destination: 'Tornio', sid: 'rentals_tornio_first_weeks' },
    ],
  },
  sources: pickSources('es', SOURCES, common.sourceLabels),
};

export default copy;
