/**
 * Espanja (es) · town-kemijarvi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/kemijarvi.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'tkVaesto', 'kemijarvi', 'kemijarviHaku', 'kemijarviVuostimo', 'kemijarviTalousarvio', 'kemijarviTietoa',
  'kemijarviToihin', 'tkVuokrat', 'tkVuokratPostinumero', 'kela', 'tkAvainluvut', 'osrm', 'redu', 'ahvl', 'rakli',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Alquiler en Kemijärvi: las 560 viviendas de la ciudad',
  metaDescription:
    'Alquilar en Kemijärvi: las 560 viviendas de la ciudad, la solicitud en línea, las subidas de 2026, las casas adosadas de Vuostimo y la ayuda de Kela.',
  breadcrumb: 'Kemijärvi',
  hero: {
    eyebrow: 'Kemijärvi, 6919 habitantes',
    title: 'Alquiler en Kemijärvi.',
    subtitle:
      'La ciudad más septentrional de Finlandia, donde el ayuntamiento posee 560 viviendas de alquiler y algunas están vacías. Dónde solicitar y qué saber antes de mudarse.',
  },
  authorNote:
    'Población de Statistics Finland; número de viviendas y cómo solicitar, de las páginas de la ciudad de Kemijärvi; subidas de alquiler y objetivos de ocupación, del presupuesto de 2026 de la ciudad. Comprobado el 15 de noviembre de 2026.',
  intro: [
    'Kemijärvi tenía 6919 habitantes a finales de 2025, 35 menos que un año antes (Statistics Finland). La ciudad se define como la ciudad más septentrional de Finlandia y dice que los servicios del centro están a poca distancia a pie (kemijarvi.fi).',
    'Las dos empresas inmobiliarias de la ciudad, Kemijärven Vuokratalot y Kemijärven Töveli, poseen 560 viviendas de alquiler (kemijarvi.fi). El presupuesto municipal considera realista un objetivo de que entre el 80 y el 85 por ciento de esas viviendas estén alquiladas, de modo que sí hay pisos vacíos.',
    'Los alquileres suben: Kemijärven Vuokratalot los subió un 4,5 por ciento el 1 de febrero de 2026 y Töveli un 5 por ciento el 1 de julio de 2026. Las mismas subidas figuran en el plan para 2027 y 2028 (presupuesto 2026).',
  ],
  sections: [
    {
      id: 'channels',
      kicker: 'A quién solicitar',
      h2: 'Primero las empresas de la ciudad, después los portales.',
      band: true,
      cards: [
        {
          title: 'Las viviendas de alquiler de la ciudad',
          body: 'Las 560 viviendas de la ciudad están en el centro, Särkikangas, Sipovaara, Isokylä, Halosenranta y Vuostimo. Se solicita en línea o con un formulario en papel en Sortteeri (Vapaudenkatu 8). La solicitud es válida durante cuatro meses y se puede renovar.',
          href: 'https://kemijarvi.fi/asuminen-ja-ymparisto/asuminen/kemijarven-kaupungin-vuokratalot/asunnon-hakeminen/',
          linkLabel: 'kemijarvi.fi: solicitar una vivienda',
          event: 'kemijarvi_city',
        },
        {
          title: 'Vuostimo, a 14 km de Pyhä',
          body: 'Casas adosadas de la ciudad, de 1987, en Vuostimo, a unos 35 kilómetros al norte del centro. La estación de esquí de Pyhätunturi está a 14 kilómetros, lo que las convierte en las viviendas de alquiler de la ciudad más cercanas a Pyhä.',
          href: 'https://kemijarvi.fi/asuminen-ja-ymparisto/asuminen/kemijarven-kaupungin-vuokratalot/vuokratalokohteet/vuostimo/',
          linkLabel: 'kemijarvi.fi: Vuostimo',
          event: 'kemijarvi_vuostimo',
        },
        {
          title: 'Oikotie y Vuokraovi',
          body: 'Anuncios de particulares y de agencias bajo el municipio de Kemijärvi. Las páginas de vivienda de la ciudad no recogen arrendadores privados, así que sus pisos se encuentran en los portales.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kemij%C3%A4rvi',
          linkLabel: 'Oikotie: alquileres en Kemijärvi',
          event: 'oikotie',
        },
      ],
    },
    {
      id: 'prices',
      kicker: 'Cuánto cuesta el alquiler',
      h2: 'Las empresas de la ciudad no publican sus alquileres.',
      table: {
        caption: 'Alquiler medio en €/m² al mes, viviendas de alquiler del mercado libre, 3.er trimestre de 2026',
        head: ['', 'Laponia (región)', 'Todo el país'],
        rows: [
          ['Estudios', '17,25', '20,49'],
          ['Pisos de dos habitaciones', '12,87', '15,07'],
          ['Tres habitaciones o más', '11,08', '13,98'],
          ['Todas las viviendas', '13,14', '15,99'],
        ],
        foot: 'Statistics Finland, alquileres del 3.er trimestre de 2026, tabla 15fa. No se publica una cifra aparte para Kemijärvi, y la cifra regional incluye a Rovaniemi, más cara.',
      },
      paras: [
        '<strong>La cifra propia de Kemijärvi es de 2022.</strong> En el distrito postal del centro, 98100, los estudios del mercado libre costaban de media 12,15 € por m² y los pisos de dos habitaciones 9,10 € por m² en enero–marzo de 2022. Todos los trimestres posteriores se han suprimido: Statistics Finland no publica la cifra de un distrito postal cuando hay muy pocas observaciones (tabla 13eb).',
        'Los alquileres de las empresas de la ciudad no están en internet. Pregunte el alquiler a la secretaria de vivienda antes de aceptar una oferta, y recuerde que los alquileres subieron en 2026: un 4,5 por ciento en Vuokratalot y un 5 por ciento en Töveli.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Ayuda a la vivienda de Kela',
      h2: 'Kemijärvi pertenece a los «otros municipios» de Kela.',
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
      kicker: 'Trabajo y conexiones',
      h2: 'Acuerde el empleo antes de mudarse.',
      bullets: [
        'Según la ciudad, sus grandes empleadores, además del propio ayuntamiento, son Keitele Group, Festivo Porkka Group y el centro de contacto de Kela, junto con negocios de comercio, servicios y turismo (presupuesto 2026).',
        'Los desempleados representaban el 15,6 por ciento de la población activa en 2024, frente al 11,7 por ciento del conjunto de Finlandia (Statistics Finland).',
        'Suomutunturi está a 46 km del centro y Pyhätunturi a 50 km (OpenStreetMap). Suomu se encuentra dentro de Kemijärvi; Pyhä pertenece al municipio vecino de Pelkosenniemi.',
        'El aeropuerto de Rovaniemi está a 80 km (OpenStreetMap), y la ciudad indica que hay una conexión ferroviaria directa hasta Helsinki (kemijarvi.fi).',
      ],
    },
    {
      id: 'contract',
      kicker: 'El contrato',
      h2: 'Dos secciones de la ley que conviene conocer.',
      bullets: [
        'La fianza es como máximo de tres meses de alquiler (Ley de arrendamientos de vivienda, sección 8).',
        'Desde el 1 de octubre de 2026 la fianza debe devolverse, o justificarse por escrito su retención, en un plazo de 14 días desde el fin del contrato (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: '¿Cómo solicito una vivienda de la ciudad en Kemijärvi?',
      a: 'Con la solicitud en línea de la web de la ciudad, o con un formulario en papel en Sortteeri (Vapaudenkatu 8). La solicitud es válida durante cuatro meses y se puede renovar otros cuatro. Se consulta el historial crediticio, y la solicitud no se tramita hasta que han llegado sus anexos. Las reuniones de selección de inquilinos suelen celebrarse un miércoles de cada dos (kemijarvi.fi).',
    },
    {
      q: '¿Hay viviendas de alquiler libres en Kemijärvi?',
      a: 'Lo más probable es que sí. El presupuesto municipal considera realista un objetivo de que entre el 80 y el 85 por ciento de las viviendas de las empresas estén alquiladas (presupuesto 2026). Pregunte a la secretaria de vivienda cuáles están libres.',
    },
    {
      q: '¿Cuánto cuesta un piso de alquiler en Kemijärvi?',
      a: 'No se publica una media actual. La última cifra del distrito postal del centro es de principios de 2022: estudios a 12,15 € por m² y pisos de dos habitaciones a 9,10 € por m². La media de Laponia fue de 13,14 € por m² en julio–septiembre de 2026, e incluye a Rovaniemi, más cara (Statistics Finland).',
    },
    {
      q: '¿Hay vivienda para estudiantes en Kemijärvi?',
      a: 'El Centro de Educación de Laponia REDU tiene una residencia de estudiantes en Kemijärvi. El alojamiento es gratuito para los estudiantes que aún están en la enseñanza obligatoria, y las plazas sobrantes se alquilan a otros estudiantes al precio indicado (redu.fi).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Las primeras noches',
    h2: 'Visitas en persona.',
    lead: 'El buscador de socios muestra habitaciones y apartamentos libres en Kemijärvi y en Pyhä a los precios de hoy.',
    chips: [
      { label: 'Kemijärvi', destination: 'Kemijärvi', sid: 'rentals_kemijarvi_first_weeks' },
      { label: 'Pyhä', destination: 'Pyhä', sid: 'rentals_pyha_first_weeks' },
    ],
  },
  sources: pickSources('es', SOURCES, common.sourceLabels),
};

export default copy;
