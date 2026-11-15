/**
 * Espanja (es) · town-rovaniemi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/rovaniemi.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'rovaniemi', 'das', 'yle2025das', 'yle2026rovaniemi', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Alquiler en Rovaniemi: precios, arrendadores y cómo solicitar',
  metaDescription:
    'Alquilar en Rovaniemi: precio por m² (Statistics Finland 2026), arrendadores de la ciudad, DAS para estudiantes, ayuda de Kela y cuándo solicitar.',
  breadcrumb: 'Rovaniemi',
  hero: {
    eyebrow: 'Rovaniemi, 66 191 habitantes',
    title: 'Alquiler en Rovaniemi.',
    subtitle:
      'La mayor ciudad de Laponia, con 66 191 habitantes. Cuánto cuesta el alquiler, a quién solicitar y cuándo.',
  },
  authorNote:
    'Alquileres por m² de Statistics Finland (julio–septiembre de 2026); arrendadores de la propia página de vivienda de la ciudad de Rovaniemi; cifras de escasez de Yle. Comprobado el 15 de noviembre de 2026.',
  intro: [
    'Rovaniemi tiene 66 191 habitantes (Statistics Finland, 31 de diciembre de 2025) y una dura competencia por los estudios: la fundación de vivienda estudiantil DAS recibió unas 550 solicitudes urgentes en el verano de 2026, un 15 por ciento más que un año antes, y casi el 90 por ciento de los solicitantes quería un estudio. Además, los estudios de la ciudad se alquilan a corto plazo a turistas durante la temporada de invierno (Yle, 27 de julio de 2026). Según el director gerente de DAS, en agosto y septiembre la fundación no puede ofrecer vivienda a todos los solicitantes.',
    'Una empresa de contratación que llevó a unos 250 trabajadores a Laponia los alojó en una decena de lugares distintos de Rovaniemi (Yle, 9 de marzo de 2026). Trabajadores de temporada, estudiantes y turistas buscan los mismos apartamentos pequeños.',
    'La buena noticia es el precio: el alquiler medio de Rovaniemi, 14,63 € por m², está por debajo de la media nacional de 15,99 € (Statistics Finland, 3.er trimestre de 2026). A continuación, las cifras por tamaño de vivienda y los canales para solicitar.',
  ],
  sections: [
    {
      id: 'prices',
      kicker: 'Cuánto cuesta el alquiler',
      h2: 'Alquileres de Rovaniemi por m², julio–septiembre de 2026.',
      table: {
        caption: 'Alquiler medio en €/m² al mes, viviendas de alquiler del mercado libre, Rovaniemi, 3.er trimestre de 2026',
        head: ['', 'Todos los alquileres', 'Alquileres nuevos', 'Todo el país'],
        rows: [
          ['Estudios', '18,63', '20,14', '20,49'],
          ['Apartamentos de un dormitorio', '14,40', '16,40', '15,07'],
          ['Dos dormitorios o más', '12,29', '13,66', '13,98'],
          ['Todas las viviendas', '14,63', '15,93', '15,99'],
        ],
        foot: 'Statistics Finland, alquileres del 3.er trimestre de 2026, tabla 15fa. Contratos nuevos = contratos iniciados durante el trimestre, es decir, lo que se pide ahora mismo por los apartamentos libres.',
      },
      paras: [
        '<strong>Ejemplos:</strong> un estudio de 30 m², unos 560 € al mes (18,63 × 30) y, en un contrato nuevo, unos 600 € (20,14 × 30); un apartamento de un dormitorio de 50 m², unos 720 € (14,40 × 50); un apartamento de dos dormitorios de 75 m², unos 920 € (12,29 × 75). El agua y la electricidad suelen ir aparte.',
        'El precio de un estudio en contrato nuevo, 20,14 € por m², está 1,51 € (un 8 %) por encima de la media de todos los estudios de Rovaniemi, 18,63 €: un estudio que queda libre ahora cuesta más que uno ya alquilado. Frente a la media nacional, Rovaniemi es más barata en todos los tamaños de vivienda.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Ayuda a la vivienda de Kela',
      h2: 'Rovaniemi tiene un límite más alto.',
      lead:
        'La ayuda general a la vivienda es como máximo el 70 % de los gastos de vivienda aceptados. En Rovaniemi el límite de los gastos aceptados es más alto que en los demás municipios de Laponia, porque la ciudad está en el grupo de Kela de los 24 municipios mayores (Kela 2026).',
      table: {
        caption: 'Gastos máximos de vivienda en 2026, €/mes, grupo de Kela de los 24 municipios mayores',
        head: ['Tamaño del hogar', 'Gastos máximos de vivienda'],
        rows: [
          ['1 persona', '447'],
          ['2 personas', '652'],
          ['3 personas', '828'],
          ['4 personas', '981'],
          ['Cada persona adicional', '+134'],
        ],
        foot: 'Kela, ayuda general a la vivienda 2026. No se paga una ayuda inferior a 15 €. Los ingresos reducen la ayuda a través de la deducción básica.',
      },
    },
    {
      id: 'channels',
      kicker: 'A quién solicitar',
      h2: 'La lista de la ciudad, la fundación estudiantil y los portales.',
      lead: 'La página de vivienda de la ciudad de Rovaniemi recoge los arrendadores y los servicios de búsqueda; no nombra una empresa municipal de vivienda propia.',
      band: true,
      cards: [
        {
          title: 'Ciudad de Rovaniemi: arrendadores',
          body: 'La página de la ciudad remite a los arrendadores corporativos KAS asunnot, M2-Kodit, Tarveasunnot, Avara y Lumo, y a los servicios de búsqueda Oikotie, Vuokraovi y Qasa. Cada arrendador tiene su propia solicitud en línea; solicite a varios a la vez.',
          href: 'https://www.rovaniemi.fi/Asuminen-ja-ymparisto/Asuminen',
          linkLabel: 'rovaniemi.fi: vivienda',
          event: 'rovaniemi_city',
        },
        {
          title: 'DAS: para estudiantes',
          body: 'La Fundación Domus Arctica tiene unas 1700 viviendas, 700 de ellas estudios y 460 apartamentos de un dormitorio, con un alquiler medio de 12,50 € por m² (Yle, 27 de julio de 2026). Las solicitudes se aceptan de forma continua, son válidas durante tres meses, y los estudiantes nuevos tienen prioridad en agosto y septiembre. Puede solicitar si estudia en Rovaniemi en un centro de enseñanza posterior a la básica.',
          href: 'https://www.das.fi/en/apply/applying-info',
          linkLabel: 'das.fi: información para solicitar',
          event: 'das',
        },
        {
          title: 'KAS asunnot',
          body: 'Viviendas de alquiler en varios barrios de Rovaniemi (lista de la ciudad). Solicitud en línea.',
          href: 'https://kas.fi/rovaniemen-vuokrattavat-kas-kodit/',
          linkLabel: 'kas.fi: Rovaniemi',
          event: 'kas',
        },
        {
          title: 'Lumo',
          body: 'Un arrendador corporativo con edificios en Rovaniemi. Contrato estándar, solicitud en línea, mudanza rápida.',
          href: 'https://lumo.fi/en/rental-apartments',
          linkLabel: 'lumo.fi: apartamentos de alquiler',
          event: 'lumo',
        },
        {
          title: 'Oikotie y Vuokraovi',
          body: 'Los portales nacionales publican la mayoría de los anuncios de particulares y de agencias. Filtre por el municipio de Rovaniemi, no por barrio, para que aparezcan también Ounasvaara, Saarenkylä y las viviendas fuera del centro.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/rovaniemi',
          linkLabel: 'Oikotie: alquileres en Rovaniemi',
          event: 'oikotie',
        },
        {
          title: 'NAL Rovaniemi: menores de 30 años',
          body: 'La sede de Rovaniemi de la Asociación Finlandesa de Vivienda para Jóvenes ofrece vivienda juvenil a los menores de 30 años (lista de la ciudad). Una opción cuando DAS no es posible y no es usted estudiante.',
          href: 'https://www.rovaniemi.fi/Asuminen-ja-ymparisto/Asuminen',
          linkLabel: 'rovaniemi.fi: vivienda juvenil',
          event: 'nal',
        },
      ],
    },
    {
      id: 'when',
      kicker: 'Cuándo solicitar',
      h2: 'Dos épocas de máxima demanda al año.',
      bullets: [
        '<strong>Agosto–septiembre</strong> es la más difícil: DAS no puede alojar a todos los solicitantes y los estudios del mercado libre escasean (Yle, 27 de julio de 2026).',
        '<strong>Noviembre–diciembre:</strong> algunos estudios se alquilan a corto plazo a turistas durante la temporada de invierno. Los contratos de duración determinada suelen terminar a finales de octubre (Yle, 27 de julio de 2026).',
        '<strong>En primavera</strong> vuelven al mercado los estudios alquilados por la temporada de invierno.',
        '<strong>La fianza</strong> es como máximo de tres meses de alquiler (Ley de arrendamientos de vivienda, artículo 8) y, desde el 1 de octubre de 2026, debe devolverse en un plazo de 14 días desde el fin del contrato (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: '¿Cuánto cuesta un estudio en Rovaniemi?',
      a: 'Según Statistics Finland, 18,63 € por m² en el conjunto de los contratos y 20,14 € por m² en los nuevos (3.er trimestre de 2026). Un estudio de 30 m² cuesta, por tanto, entre 560 y 600 € al mes, sin la electricidad.',
    },
    {
      q: '¿Es difícil encontrar un alquiler en Rovaniemi?',
      a: 'Los estudios son difíciles de conseguir en agosto–septiembre: DAS no puede alojar a todos los solicitantes (Yle, 27 de julio de 2026) y los estudios del mercado libre escasean. Los apartamentos de uno y dos dormitorios son más fáciles de conseguir.',
    },
    {
      q: '¿Puedo solicitar sin visitar Rovaniemi?',
      a: 'Puede solicitar en línea a todos los arrendadores de la lista de la ciudad y a DAS. Aun así, visite usted mismo el apartamento o pida un recorrido en vídeo, y pague la fianza solo después de firmar el contrato.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Las primeras semanas',
    h2: 'Un hotel o aparthotel mientras visita apartamentos.',
    lead: 'Vea los apartamentos en persona antes de firmar. El buscador de nuestro socio muestra las habitaciones libres de Rovaniemi a los precios de hoy.',
    chips: [
      { label: 'Rovaniemi', destination: 'Rovaniemi', sid: 'rentals_rovaniemi_first_weeks' },
    ],
  },
  sources: pickSources('es', SOURCES, common.sourceLabels),
};

export default copy;
