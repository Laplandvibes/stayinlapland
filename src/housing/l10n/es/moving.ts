/**
 * Espanja (es) · moving. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/moving.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'dvv', 'traficom', 'tkSahko', 'tkPolttoaine', 'kuntaliitto', 'perusopetuslaki', 'fmi', 'foreca',
  'lvDrive', 'lapha', 'laplandwork', 'ahvl', 'rakli',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Mudarse a Laponia: guía práctica del primer mes',
  metaDescription:
    'Cambio de domicilio, neumáticos de invierno, guardería, electricidad y noche polar: qué resolver en su primer mes en la Laponia finlandesa.',
  breadcrumb: 'Mudarse a Laponia',
  hero: {
    eyebrow: 'Mudarse a Laponia: los primeros 30 días',
    title: 'Mudarse a Laponia.',
    subtitle:
      'Cambio de domicilio, neumáticos de invierno, guardería, contrato de electricidad y noche polar: qué resolver en el primer mes y en qué orden.',
  },
  authorNote:
    'Plazos de DVV, Traficom y la Asociación de Municipios de Finlandia, duración de la noche polar del Instituto Meteorológico Finlandés, distancias de las rutas en coche de LaplandVibes. Comprobado el 15 de noviembre de 2026.',
  intro: [
    'Los trámites de mudarse a Laponia son los mismos que en cualquier parte de Finlandia, pero tres cosas pesan aquí más que en el sur: el invierno dura medio año, las distancias se miden en cientos de kilómetros y, en los municipios pequeños, los servicios están concentrados en un solo lugar. Esta página es una lista de comprobación en el orden en que hay que hacer las cosas.',
    'Si se muda a Finlandia desde el extranjero, los permisos de residencia, el número de identificación personal, la tarjeta fiscal y la cuenta bancaria se explican en nuestro sitio hermano <a href="https://laplandwork.com/es/moving-to-finland/" target="_blank" rel="noopener">laplandwork.com</a>. Esta página empieza cuando ya tiene las llaves en la mano.',
  ],
  sections: [
    {
      id: 'week-one',
      kicker: 'La primera semana',
      h2: 'Cuatro notificaciones, un plazo.',
      bullets: [
        '<strong>Notificación de cambio de domicilio a DVV</strong>: como pronto un mes antes del día de la mudanza y como tarde una semana después (DVV). La misma notificación llega a Posti. Los servicios municipales (guardería, escuela, centro de salud) dependen del municipio en el que esté registrado su domicilio, así que hágala enseguida.',
        '<strong>Contrato de electricidad.</strong> El precio total de la electricidad para un hogar con un consumo de 2500–4999 kWh al año fue de media 23,7 céntimos por kWh en toda Finlandia en junio de 2026, y de 14,9 céntimos en la clase de más de 15 000 kWh, a la que pertenece una casa con calefacción eléctrica (Statistics Finland). La temporada de calefacción de Laponia es larga, así que estime su consumo por lo alto.',
        '<strong>La atención sanitaria</strong> corre a cargo del condado de servicios de bienestar de Laponia (Lapha). La atención no urgente pasa por su centro de salud local; busque el más cercano en la web del condado y regístrese en Omakanta.',
        '<strong>Internet.</strong> Antes de firmar, pregunte a la administración del edificio o al arrendador si hay fibra. En las zonas poco pobladas un router móvil suele ser la única opción, y quien trabaje a distancia debería probar antes la conexión en el apartamento.',
      ],
    },
    {
      id: 'car',
      kicker: 'Coche e invierno',
      h2: 'En Rovaniemi se puede vivir sin coche. En otros sitios, no.',
      bullets: [
        '<strong>Neumáticos de invierno:</strong> en Finlandia deben usarse del 1 de noviembre al 31 de marzo si lo exigen el tiempo o el estado de la carretera. Los neumáticos con clavos se permiten en el mismo periodo y en otras épocas cuando las condiciones lo requieran. Las ranuras principales de un neumático de invierno deben tener al menos 3,0 mm de profundidad (Traficom).',
        '<strong>Combustible:</strong> la gasolina 95E10 costó de media 2,09 € el litro en toda Finlandia en junio de 2026 y el diésel 2,15 € (Statistics Finland). Las grandes distancias hacen que este sea un gasto mayor en Laponia que en el sur.',
        '<strong>Distancias</strong> de las rutas en coche de LaplandVibes: Oulu–Kemi 105 km, Kemi–Rovaniemi 118 km, Rovaniemi–Ylläs (Äkäslompolo) 175 km, Sodankylä–Saariselkä 130 km, Levi–Kilpisjärvi 258 km. Laponia es más grande de lo que parece en el mapa.',
        '<strong>Calentador del motor y del habitáculo.</strong> Con helada fuerte el coche se calienta antes de salir; un poste de calefacción en el aparcamiento es equipamiento estándar en Laponia. Haga constar en el contrato una plaza de aparcamiento con poste.',
      ],
      image: {
        src: '/images/housing-kittila-airport.webp',
        alt: 'La terminal del aeropuerto de Kittilä un día de verano',
        caption: 'Aeropuerto de Kittilä, julio de 2026. Levi y Ylläs cuentan con el aeropuerto de Kittilä, Rovaniemi con el suyo propio y Saariselkä con el de Ivalo. Foto: LaplandVibes.',
        ratio: '16/9',
      },
    },
    {
      id: 'children',
      kicker: 'Niños',
      h2: 'La guardería se paga según los ingresos; la escuela es gratuita.',
      bullets: [
        '<strong>Las tarifas de educación infantil</strong> dependen de los ingresos familiares: desde el 1 de agosto de 2026 la tarifa máxima es de 335 € al mes por niño y la mínima que se cobra, de 32 €. El segundo hijo paga como máximo el 40 % de la tarifa del más pequeño, es decir, como máximo 134 € (Asociación de Municipios de Finlandia).',
        '<strong>La educación preprimaria y básica</strong> son gratuitas, con material escolar y comidas incluidos (Ley de educación básica, artículo 31). El transporte escolar se organiza cuando el trayecto supera los cinco kilómetros (artículo 32), y en los municipios pequeños forma parte de la vida cotidiana.',
        'La plaza de guardería se solicita al municipio, y el municipio lo determina la dirección registrada en DVV. Por eso la notificación de domicilio va primero, no al final.',
      ],
    },
    {
      id: 'light',
      kicker: 'Luz y oscuridad',
      h2: 'La noche polar es más corta de lo que cree. Salvo en Utsjoki.',
      paras: [
        'El kaamos, la noche polar, significa que el sol no se eleva por encima del horizonte. Según el Instituto Meteorológico Finlandés, dura casi dos meses en Nuorgam, Utsjoki, del 25 de noviembre al 17 de enero, y solo cuatro días justo antes de Navidad en Sodankylä. La línea de la noche polar pasa ligeramente al norte del Círculo Polar Ártico, así que Rovaniemi no tiene una noche polar propiamente dicha (Foreca): en invierno el sol se mantiene bajo, pero sale.',
        'El verano invierte la situación. En Rovaniemi se alcanza la línea del sol de medianoche en el Círculo Polar Ártico, y en Nuorgam el sol no se pone del 16 de mayo al 29 de julio (Instituto Meteorológico Finlandés). Las cortinas opacas son la compra clave del verano, y una lámpara de luz diurna la del invierno.',
      ],
    },
    {
      id: 'before-signing',
      kicker: 'Antes de firmar',
      h2: 'Pregunte esto al arrendador.',
      bullets: [
        'Tipo de calefacción y quién la paga: la calefacción urbana suele estar incluida en el alquiler; la calefacción eléctrica va en su propia factura.',
        'Una plaza de aparcamiento con poste de calefacción y un trastero para el equipo de invierno: esquís, trineo, neumáticos de invierno.',
        'Distancia a la tienda, al centro de salud y a la escuela más cercanos, y si en invierno hay autobús hasta allí.',
        'La fianza y su devolución: como máximo tres meses de alquiler (Ley de arrendamientos de vivienda, artículo 8) y, desde el 1 de octubre de 2026, devolución en un plazo de 14 días desde el fin del contrato (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: '¿Cuándo debo notificar el cambio de domicilio?',
      a: 'Como pronto un mes antes del día de la mudanza y como tarde una semana después (DVV). Una sola notificación llega tanto a la Agencia de Servicios de Datos Digitales y de Población como a Posti.',
    },
    {
      q: '¿Cuándo son obligatorios los neumáticos de invierno en Laponia?',
      a: 'La ley dice del 1 de noviembre al 31 de marzo si lo exigen el tiempo o el estado de la carretera, y los clavos se permiten en el mismo periodo y en otras épocas cuando las condiciones lo requieran (Traficom). Por tanto, los neumáticos se cambian según las condiciones, no según el calendario.',
    },
    {
      q: '¿Tiene Rovaniemi noche polar?',
      a: 'No propiamente: la línea de la noche polar pasa ligeramente al norte del Círculo Polar Ártico (Foreca). En Sodankylä el sol permanece bajo el horizonte cuatro días antes de Navidad y en Nuorgam casi dos meses (Instituto Meteorológico Finlandés).',
    },
  ],
  cta: {
    partner: 'cars',
    kicker: 'Un coche para las primeras semanas',
    h2: 'Visitas, mudanza, compras.',
    lead:
      'Su propio coche suele llegar más tarde. Un coche de alquiler desde el aeropuerto cubre las visitas y las primeras semanas; el buscador de nuestro socio compara las empresas de alquiler de una sola vez.',
    chips: [
      { label: 'Rovaniemi (RVN)', destination: 'RVN', sid: 'moving_car_rvn' },
      { label: 'Kittilä (KTT)', destination: 'KTT', sid: 'moving_car_ktt' },
      { label: 'Kemi-Tornio (KEM)', destination: 'KEM', sid: 'moving_car_kem' },
      { label: 'Ivalo (IVL)', destination: 'IVL', sid: 'moving_car_ivl' },
    ],
  },
  sources: pickSources('es', SOURCES, common.sourceLabels),
};

export default copy;
