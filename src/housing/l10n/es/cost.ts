/**
 * Espanja (es) · cost. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/cost.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'tkVuokrat', 'tkSahko', 'tkPolttoaine', 'kela', 'kuntaliitto', 'perusopetuslaki', 'lvDrive', 'yle2023',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Coste de vida en Laponia 2026: alquiler, luz y combustible',
  metaDescription:
    'Cuánto cuesta vivir en la Laponia finlandesa: alquiler por m² (Statistics Finland 2026), electricidad, combustible, ayuda de Kela y guardería, con ejemplos.',
  breadcrumb: 'Coste de vida',
  hero: {
    eyebrow: 'Coste de vida en Laponia',
    title: '¿Cuánto cuesta vivir en Laponia?',
    subtitle:
      'El alquiler es más barato en Laponia que en el resto de Finlandia; el coche y la calefacción, más caros. Así se compone un presupuesto mensual.',
  },
  authorNote:
    'Todas las cifras proceden de Statistics Finland, Kela o la Asociación de Municipios de Finlandia; los ejemplos se calculan a partir de esas cifras y muestran su fórmula. Nada de estimaciones.',
  intro: [
    'En cuanto a costes, hay dos Laponias. Rovaniemi es una ciudad universitaria donde estudiantes y turistas compiten por los estudios; en las estaciones de esquí el precio sigue a la temporada. En la costa y en los municipios pequeños la vivienda es más amplia y barata, pero el coche es imprescindible.',
    'A continuación están las cuatro partidas de las que realmente se compone un presupuesto mensual: alquiler, electricidad, desplazamientos y niños. No existe una estadística específica de Laponia sobre los precios de la comida, así que no la inventamos.',
  ],
  sections: [
    {
      id: 'rent',
      kicker: 'Alquiler',
      h2: 'Más barato que la media nacional, salvo cuando no lo es.',
      table: {
        caption: 'Alquiler medio en €/m² al mes, viviendas de alquiler del mercado libre, 3.er trimestre de 2026',
        head: ['', 'Rovaniemi', 'Laponia (región)', 'Todo el país'],
        rows: [
          ['Estudios', '18,63', '17,25', '20,49'],
          ['Pisos de dos habitaciones', '14,40', '12,87', '15,07'],
          ['Tres habitaciones o más', '12,29', '11,08', '13,98'],
          ['Todas las viviendas', '14,63', '13,14', '15,99'],
        ],
        foot: 'Statistics Finland, alquileres del 3.er trimestre de 2026, tabla 15fa.',
      },
      paras: [
        '<strong>Ejemplos:</strong> un estudio de 30 m² en Rovaniemi, unos 560 € al mes (18,63 × 30); un piso de dos habitaciones de 50 m² en Rovaniemi, unos 720 € (14,40 × 50); un piso de tres habitaciones de 75 m² con el alquiler medio regional de Laponia, unos 830 € (11,08 × 75).',
        'La excepción es el invierno en las estaciones de esquí: cerca del centro de Levi, un piso de 80 m² en una casa alpina costaba 750 € al mes de mayo a noviembre, pero 2000 € por semana en temporada alta (Yle, 25 may 2023). Un contrato anual del mismo piso costaba 1650 € al mes. El precio de la estación de esquí no es el precio de Laponia.',
      ],
    },
    {
      id: 'electricity',
      kicker: 'Electricidad y calefacción',
      h2: 'Un kilovatio hora cuesta lo mismo; lo que pasa es que se gastan más.',
      table: {
        caption: 'Precio total de la electricidad para hogares, céntimos/kWh, junio de 2026, todo el país',
        head: ['Consumo anual', 'Precio total'],
        rows: [
          ['1000–2499 kWh (piso pequeño)', '28,2'],
          ['2500–4999 kWh (piso o casa adosada)', '23,7'],
          ['5000–15 000 kWh (casa unifamiliar sin calefacción eléctrica)', '17,9'],
          ['más de 15 000 kWh (casa con calefacción eléctrica)', '14,9'],
        ],
        foot: 'Statistics Finland, precio de la electricidad por tipo de consumidor, tabla 13rb. El precio incluye energía, transporte e impuestos.',
      },
      paras: [
        '<strong>Ejemplos:</strong> un piso de dos habitaciones con un consumo de 3500 kWh al año: 3500 × 0,237 = unos 830 € al año, o 69 € al mes; una casa unifamiliar con calefacción eléctrica y un consumo de 18 000 kWh: 18 000 × 0,149 = unos 2680 € al año, o 223 € al mes.',
        'El precio es una media nacional. La temporada de calefacción de Laponia es más larga que la del sur, así que la misma casa consume aquí más kilovatios hora; pregunte al inquilino anterior o al arrendador por el consumo del año pasado, es la mejor estimación que obtendrá.',
      ],
    },
    {
      id: 'getting-around',
      kicker: 'Desplazamientos',
      h2: 'Esta es la partida que es mayor en Laponia.',
      paras: [
        'La gasolina 95E10 costó de media 2,09 € el litro en toda Finlandia en junio de 2026 y el diésel 2,15 € (Statistics Finland). Distancias de las rutas en coche de LaplandVibes: Kemi–Rovaniemi 118 km, Rovaniemi–Ylläs 175 km, Sodankylä–Saariselkä 130 km.',
        '<strong>Ejemplo:</strong> un trayecto diario de 40 km, 22 días laborables, 7 l/100 km: 880 km × 0,07 l/km × 2,09 € = unos 129 € al mes en gasolina. En el centro de Rovaniemi se puede vivir sin coche; en un pueblo de montaña el coche forma parte del alquiler aunque el contrato no lo diga.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Ayuda a la vivienda de Kela',
      h2: 'Qué parte del alquiler cuenta.',
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
        foot: 'Kela, ayuda general a la vivienda 2026. La ayuda es como máximo el 70 % de los gastos de vivienda aceptados, y no se paga una ayuda inferior a 15 €.',
      },
      paras: [
        '<strong>Ejemplo:</strong> una persona que vive sola en Rovaniemi con un alquiler de 600 €. Cuenta como máximo 447 €, y la ayuda es como máximo el 70 % de esa cantidad, es decir, 313 € al mes (447 × 0,70) antes de que los ingresos la reduzcan mediante la deducción básica. La calculadora de Kela aplica sus propios ingresos.',
      ],
    },
    {
      id: 'children',
      kicker: 'Niños',
      h2: 'Guardería según los ingresos, escuela gratuita.',
      bullets: [
        'Desde el 1 de agosto de 2026 la tarifa máxima de educación infantil es de 335 € al mes por niño, la mínima que se cobra es de 32 €, y el segundo hijo paga como máximo 134 € (Asociación de Municipios de Finlandia). La tarifa sigue los ingresos familiares, así que con ingresos bajos puede ser cero.',
        'La educación preprimaria y básica son gratuitas, con material escolar y comidas incluidos (Ley de educación básica, sección 31). Si el trayecto escolar supera los cinco kilómetros, el municipio organiza el transporte (sección 32).',
      ],
    },
    {
      id: 'summary',
      kicker: 'Resumen',
      h2: 'Qué es más barato y qué es más caro.',
      band: true,
      cards: [
        {
          title: 'Más barato: el alquiler',
          body: 'El alquiler medio de Laponia es de 13,14 € por m² frente a 15,99 € a nivel nacional (Statistics Finland, 3.er trimestre de 2026). Rovaniemi, con 14,63 €, queda entre ambos.',
        },
        {
          title: 'Más caro: desplazamientos y calefacción',
          body: 'Distancias de cien kilómetros y una larga temporada de calefacción. El precio de un kilovatio hora y de un litro es el mismo que en el sur; la cantidad, no.',
        },
        {
          title: 'Igual: guardería y escuela',
          body: 'Las tarifas de educación infantil y la escolarización gratuita son nacionales. Para una familia con hijos, el mayor ahorro en Laponia es el alquiler.',
        },
      ],
    },
  ],
  faqs: [
    {
      q: '¿Es Rovaniemi una ciudad cara para vivir?',
      a: 'No por los alquileres: la media de 14,63 € por m² está por debajo de los 15,99 € nacionales (Statistics Finland, 3.er trimestre de 2026), y Rovaniemi es más barata que el conjunto del país en todos los tamaños de vivienda, estudios incluidos (18,63 frente a 20,49). En los contratos nuevos un estudio de Rovaniemi cuesta 20,14 € por m²: un estudio que queda libre ahora cuesta alrededor de un 8 % más que uno ya alquilado, pero aun así menos que un estudio de contrato nuevo a nivel nacional, 21,11 € por m².',
    },
    {
      q: '¿Cuánto necesita al mes una persona sola en Rovaniemi?',
      a: 'Solo calculamos lo que tiene una fuente: un estudio de 30 m² cuesta unos 560 € al mes (18,63 × 30) y la electricidad con 1800 kWh al año, unos 42 € al mes (1800 × 0,282 / 12). La comida, el internet, los seguros y el transporte se suman según sus propios hábitos.',
    },
    {
      q: '¿Puedo recibir la ayuda a la vivienda en Laponia?',
      a: 'En las mismas condiciones que en cualquier parte de Finlandia. En Rovaniemi los gastos de vivienda de un hogar de una persona cuentan hasta 447 € al mes, en otros municipios de Laponia hasta 394 €, y la ayuda es como máximo el 70 % de esa cantidad (Kela 2026).',
    },
  ],
  sources: pickSources('es', SOURCES, common.sourceLabels),
};

export default copy;
