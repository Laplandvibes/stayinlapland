/**
 * Espanja (es) · town-kittila-levi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/kittila-levi.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'kittila', 'yle2023', 'yle2017', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Alquiler en Kittilä y Levi: vivienda municipal y de temporada',
  metaDescription:
    'Alquilar en Kittilä y Levi: la empresa municipal Kittilän Vuokratalot Oy, alquileres de temporada, vivienda laboral y ayudas de Kela.',
  breadcrumb: 'Kittilä y Levi',
  hero: {
    eyebrow: 'Kittilä, 6973 habitantes',
    title: 'Alquiler en Kittilä y Levi.',
    subtitle:
      'Uno de los municipios de Laponia que más crece y su estación de esquí, donde el mismo apartamento cuesta un alquiler mensual en verano y una tarifa semanal en invierno. Dónde solicitar y cuándo.',
  },
  authorNote:
    'Población y crecimiento de Statistics Finland; Kittilän Vuokratalot Oy según las páginas del municipio y de la propia empresa; precios de temporada de Levi de Yle, 25 de mayo de 2023. Comprobado el 15 de noviembre de 2026.',
  intro: [
    'Kittilä tenía 6973 habitantes a finales de 2025 y creció un 2,0 por ciento en un año, el segundo mayor crecimiento de los municipios de Laponia: solo Pelkosenniemi creció más, un 2,4 por ciento (Statistics Finland). El motor es Levi: en 2017 Levin Matkailu Oy calculaba que la zona turística contrataría a algo más de 2000 trabajadores de temporada para la temporada de invierno (Yle, 25 de octubre de 2017).',
    'El mercado de alquiler de Levi sigue a la temporada: un apartamento de 80 m² de estilo alpino cerca del centro costaba 750 € al mes de mayo a noviembre, 2000 € por semana en temporada alta y 1650 € al mes todo el año (Yle, 25 de mayo de 2023). Además, puede que en un apartamento vacacional no consiga una dirección oficial.',
    'Un alquiler permanente es más probable en el pueblo de Kittilä que en el centro de Levi. Las viviendas del municipio las alquila Kittilän Vuokratalot Oy, y la solicitud se presenta electrónicamente en la web de la empresa (kittila.fi, Kittilän Vuokratalot).',
  ],
  sections: [
    {
      id: 'channels',
      kicker: 'A quién solicitar',
      h2: 'La empresa municipal, los portales y el grupo de Levi.',
      band: true,
      cards: [
        {
          title: 'Kittilän Vuokratalot Oy',
          body: 'Alquila las viviendas del propio municipio. La oficina está en la planta baja del ayuntamiento (Valtatie 15, 99100 Kittilä). La empresa solo tramita solicitudes electrónicas hechas a través de su web, con los anexos exigidos. Sus páginas no indican cuánto tiempo sigue vigente una solicitud, así que pregúntelo a la empresa.',
          href: 'https://kittila.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot',
          linkLabel: 'kittila.fi: viviendas de alquiler',
          event: 'kittila_city',
        },
        {
          title: 'Oikotie, Vuokraovi y TA-Asunnot',
          body: 'Anuncios de particulares y de agencias en el municipio de Kittilä; las viviendas de Levi aparecen en la misma búsqueda. TA-Asunnot tiene sus propios apartamentos de alquiler libres en Kittilä.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kittil%C3%A4',
          linkLabel: 'Oikotie: alquileres en Kittilä',
          event: 'oikotie',
        },
        {
          title: 'Alojamiento del empleador',
          body: 'Los empleadores de la estación alquilan casas adosadas y apartamentos vacacionales para el personal durante toda la temporada y descuentan el alquiler del salario. Pregunte por la vivienda por escrito junto con la oferta de trabajo. El panorama completo está en la página de los trabajadores de temporada.',
          href: '/seasonal-worker-housing',
          linkLabel: 'Vivienda para trabajadores de temporada',
          event: 'seasonal_page',
        },
        {
          title: 'El grupo de vivienda de Levi en Facebook',
          body: 'El canal más rápido en el pueblo de montaña y donde los trabajadores de temporada suelen encontrar su apartamento. Nadie responde de los anuncios: no pague nunca una fianza antes de una visita y exija el contrato por escrito.',
        },
      ],
    },
    {
      id: 'prices',
      kicker: 'Cuánto cuesta el alquiler',
      h2: 'La cifra regional y la excepción de Levi.',
      table: {
        caption: 'Alquiler medio en €/m² al mes, viviendas de alquiler del mercado libre, 3.er trimestre de 2026',
        head: ['', 'Laponia (región)', 'Todo el país'],
        rows: [
          ['Estudios', '17,25', '20,49'],
          ['Apartamentos de dos habitaciones', '12,87', '15,07'],
          ['Tres habitaciones o más', '11,08', '13,98'],
          ['Todas las viviendas', '13,14', '15,99'],
        ],
        foot: 'Statistics Finland, alquileres del 3.er trimestre de 2026, tabla 15fa. No se publica una cifra aparte para Kittilä, y los alquileres de temporada de Levi no figuran en la estadística.',
      },
      paras: [
        '<strong>El ejemplo de Levi (Yle, 25 de mayo de 2023):</strong> un apartamento de 80 m² de estilo alpino a 750 € al mes de mayo a noviembre = 9,38 € por m², 2000 € por semana en temporada alta, 1650 € al mes todo el año = 20,63 € por m². El mismo apartamento es más barato que la media regional en verano y más caro que el precio nacional de un estudio durante todo el año.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Ayuda a la vivienda de Kela',
      h2: 'Kittilä pertenece a los «otros municipios» de Kela.',
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
        foot: 'Kela, ayuda general a la vivienda 2026. La ayuda es como máximo el 70 % de los gastos de vivienda aceptados. En un apartamento vacacional sin dirección registrada no se cumplen las condiciones.',
      },
    },
    {
      id: 'when',
      kicker: 'Cuándo solicitar',
      h2: 'En verano, antes de que empiecen las tarifas semanales.',
      bullets: [
        'Los alquileres mensuales de apartamentos vacacionales solo están disponibles de mayo a noviembre, y en temporada alta el precio es una tarifa semanal (Yle, 25 de mayo de 2023). Para la temporada de invierno, busque el apartamento en verano.',
        'Presente la solicitud a la empresa municipal antes de la temporada y pregúntele cuánto tiempo sigue vigente.',
        'La fianza es como máximo de tres meses de alquiler (Ley de arrendamientos de vivienda, artículo 8) y, desde el 1 de octubre de 2026, se devuelve en un plazo de 14 días desde el fin del contrato (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: '¿Dónde encuentro un alquiler de invierno en Levi?',
      a: 'Lo más probable es que a través de su empleador: las empresas de la estación alquilan casas adosadas y apartamentos vacacionales para el personal durante toda la temporada. En el mercado libre, los apartamentos de Levi se alquilan por semanas en invierno (Yle, 25 de mayo de 2023), así que el alquiler mensual es posible sobre todo de mayo a noviembre. La empresa municipal tiene viviendas tanto en el pueblo de Kittilä como en Sirkka, en Levi (Kittilän Vuokratalot).',
    },
    {
      q: '¿Cómo solicito una vivienda municipal en Kittilä?',
      a: 'Con la solicitud electrónica de Kittilän Vuokratalot Oy en la web de la empresa. Las solicitudes incompletas, sin los anexos exigidos, no se tramitan. La oficina está en la planta baja del ayuntamiento, Valtatie 15 (kittila.fi, Kittilän Vuokratalot).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Las primeras noches',
    h2: 'Antes de que el apartamento esté libre.',
    lead: 'El buscador de nuestro socio muestra habitaciones y apartamentos libres en Levi y en Kittilä a los precios de hoy.',
    chips: [
      { label: 'Levi', destination: 'Levi', sid: 'rentals_levi_first_weeks' },
      { label: 'Kittilä', destination: 'Kittilä', sid: 'rentals_kittila_first_weeks' },
    ],
  },
  sources: pickSources('es', SOURCES, common.sourceLabels),
};

export default copy;
