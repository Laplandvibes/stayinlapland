import type { SectionCopy } from './copy';
import { copyEN } from './copy.en';

/**
 * ES copy, overlays the most visible chrome (nav, hero, newsletter, key CTAs)
 * plus high-visibility editorial sections (intro, fourWays, workInLaplandPromo,
 * authorNote, FAQ). Deeper sections fall back to copyEN by structural inheritance.
 * Quality bar: ≥2500 chars in this overlay block.
 */
export const copyES: SectionCopy = {
  ...copyEN,
  nav: {
    longStays: 'Larga estancia',
    hotels: 'Hoteles',
    glassIgloos: 'Iglús de cristal',
    wilderness: 'Naturaleza',
    whenToGo: 'Cuándo ir',
    bookingGuide: 'Guía de reservas',
    browseStays: 'Ver alojamientos',
    homeAria: 'StayInLapland, inicio',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },
  hero: {
    eyebrow: 'Laponia finlandesa · Guía editorial',
    h1Line1: 'Laponia es más',
    h1Line2: 'que una semana de vacaciones.',
    lead: 'Cabañas por semanas, hoteles boutique en Rovaniemi, iglús de cristal para esa noche soñada, y los refugios silvestres más allá de la última carretera. Tarifas verificadas desde',
    leadPriceRange: '140 € hasta 1500 €',
    liveLabel: 'Disponibilidad en vivo · búsqueda Trip.com',
    browseLongStays: 'Ver larga estancia',
    seeHotels: 'Ver hoteles',
  },
  newsletter: {
    eyebrow: 'Aperturas de larga estancia · tarifas de temporada baja',
    h2: 'Los alojamientos que aún no puede reservar.',
    lead: 'La mayoría de los alojamientos de larga estancia de este sitio liberan su inventario de invierno a finales de agosto, y vuela. Contamos cuándo se abren las ventanas de reserva, y las semanas de temporada baja (noviembre, finales de abril) cuando las tarifas bajan mientras las auroras siguen visibles.',
    placeholder: 'Su dirección de correo',
    subscribe: 'Suscribirse',
    subscribing: 'Suscribiendo…',
    success: 'Ya casi: confirme su suscripción desde el correo que acabamos de enviarle.',
    errorPrefix: 'No se ha podido suscribir, ',
    pleaseTryAgain: 'inténtelo de nuevo',
    footnotePart1: 'Nada de spam. Cancele con un clic. Consulte nuestra ',
    footnoteLink: 'política de privacidad',
    footnotePart2: '.',
  },
  authorByline: {
    reviewed: 'Revisado por la red editorial de LaplandVibes',
    defaultNote:
      'Escrito y comprobado con colaboradores sobre el terreno en toda la Laponia finlandesa. Ganamos comisión de afiliación con las reservas, pero eso nunca decide qué alojamientos recomendamos.',
  },
  affiliateDisclosure:
    'Algunos enlaces de esta página son enlaces de afiliados. Si reserva a través de ellos ganamos una comisión, sin coste adicional para usted. Los alojamientos se eligen por mérito, no por la comisión.',
  marginNoteDefault: 'Nota al margen',
  comparison: {
    property: 'Alojamiento',
    verdict: 'Veredicto',
    nOutOf5: (n) => `${n} de 5`,
  },
  editorsPick: {
    kicker: 'Selección del editor',
    perNight: '/ noche',
    note: 'Nota',
    cta: 'Ver tarifas y reservar',
  },
  propertyCard: {
    ...copyEN.propertyCard,
    short: '1–3 noches',
    medium: '3–6 noches',
    long: '7+ noches',
    nights: (n) => `${n} ${n === 1 ? 'noche' : 'noches'}`,
    minPrefix: 'desde',
    perNight: '/ noche',
    cta: 'Ver tarifas',
  },
  workInLaplandPromo: {
    inlineEyebrow: '¿Le interesa trabajar en la Laponia finlandesa?',
    inlineBodyPrefix:
      'Los trabajos de temporada, los destinos para teletrabajo y las vacantes en las estaciones de esquí están en nuestro sitio hermano ',
    inlineBodyBrand: 'laplandwork.com',
    inlineBodySuffix: '.',
    inlineCta: 'Ver ofertas de empleo',
    fullEyebrow: 'Sitio hermano · laplandwork.com',
    fullH2A: '¿Le interesa trabajar',
    fullH2B: 'en la Laponia finlandesa?',
    fullP1:
      'Muchos de los alojamientos de larga estancia de este sitio los reservan personas que vinieron originalmente para una temporada de esquí, un contrato de ingeniería ártica o un mes de teletrabajo, y se quedaron porque se enamoraron del lugar. Si ha llegado por eso, el lado laboral tiene su propio sitio.',
    fullP2A: 'LaplandWork.com',
    fullP2B:
      ' es el centro de empleo dedicado a la Laponia finlandesa: trabajos de temporada en alojamientos, plazas en estaciones de esquí, vacantes en granjas de huskies, puestos hospitalarios y de ingeniería en Rovaniemi, Levi, Saariselkä e Inari. Gratis para candidatos, con tres niveles de tarifa para empleadores.',
    fullCta: 'Ver empleos',
    blocks: [
      { label: 'Trabajos de temporada en alojamientos', tag: 'Levi · Ylläs · Saariselkä' },
      { label: 'Granjas de huskies', tag: 'Temporada nov–abr' },
      { label: 'Destinos para teletrabajo', tag: 'Todo el año, fibra' },
      { label: 'Sanidad e ingeniería', tag: 'Puestos fijos' },
    ],
  },
  longTermRentals: {
    eyebrow: 'Mudarse a Laponia · 6 meses y más',
    h2A: '¿Busca vivienda de verdad,',
    h2B: 'no un alquiler corto?',
    lead:
      'Los alojamientos de este sitio son alquileres de corto o medio plazo a través de nuestro socio de reservas, la solución correcta para viajes de hasta cuatro semanas. Para 6 meses, un año o una mudanza permanente necesitará portales de alquiler finlandeses. Estas son las seis fuentes más activas en Laponia.',
    process: {
      title: 'Proceso típico',
      body:
        'Correo al propietario o agente → visita al apartamento sobre el terreno → solicitud (nómina + informe crediticio) → fianza de 1–2 meses + primer mes de alquiler → llaves. Es realista contar con 2–6 semanas de preparación.',
    },
    cost: {
      title: 'Qué cuesta',
      body:
        'Rovaniemi, estudio: 600–900 €/mes. Levi/Saariselkä, estudio (temporada invernal): 900–1400 €. Fuera del pico invernal en las estaciones, los precios bajan un 30–40 %. Todas las cifras incluyen agua; electricidad y calefacción suelen ir aparte.',
    },
    abroad: {
      title: '¿Viene del extranjero?',
      body:
        'Los ciudadanos UE/EEE pueden alquilar libremente. Los demás necesitan permiso de residencia (la tramitación en Migri lleva de 1 a 4 meses). El centro de empleo de laplandwork.com cubre Migri, registro en Kela, apertura de cuenta bancaria finlandesa, tarjeta de retenciones y la lista de comprobación completa para mudarse a Laponia.',
    },
    tags: {
      national: 'NACIONAL',
      rentalOnly: 'SOLO ALQUILER',
      corporate: 'ALQUILER CORPORATIVO',
      classifieds: 'DIRECTO DEL PROPIETARIO',
    },
  },
  tripRecommender: {
    weBook: 'Reservaríamos',
    items: [
      {
        forWho: 'Primer viaje · 4–6 noches · con niños',
        recommendation: 'Hotel boutique en Rovaniemi',
        rationale:
          'Un hotel de diseño como Arctic Light o Arctic TreeHouse le da cercanía al aeropuerto, una oferta de restauración decente y la logística del Pueblo de Papá Noel, sin meter a la familia en una cabaña remota donde encender la calefacción se convierte en el proyecto de la tarde.',
        ctaLabel: 'Ver hoteles',
      },
      {
        forWho: 'Visitante recurrente · 7–14 noches · una sola base',
        recommendation: 'Cabaña de larga estancia en Levi o Saariselkä',
        rationale:
          'Instálese una semana. Un dos dormitorios en Levi Spirit o una cabaña a las afueras de Saariselkä le da tarifas semanales, sauna propio y tiempo de verdad para sumergirse en Laponia, en lugar de correr entre noches de lista de deseos.',
        ctaLabel: 'Ver larga estancia',
      },
      {
        forWho: 'Aniversario · jubilación · reserva en grupo',
        recommendation: 'Un refugio silvestre',
        rationale:
          'Un refugio silvestre es la forma más exclusiva de celebrar la ocasión. La suite Eagle View de Iso-Syöte ofrece aislamiento por encima del límite de los árboles, y las villas de Wilderness Hotel Nangu añaden actividades guiadas por los sami en el lago Inari, ambas lo bastante privadas para que todo el paisaje parezca suyo, sin el precio de un alquiler completo.',
        ctaLabel: 'Ver refugios silvestres',
      },
    ],
  },
  home: {
    ...copyEN.home,
    metaTitle: 'Dónde alojarse en Laponia 2026, 16 alojamientos verificados',
    metaDescription:
      'Planifique su viaje a Laponia 2026: 16 alojamientos verificados, cabañas desde 140 €/noche, hoteles de diseño en Rovaniemi e iglús de cristal desde 280 €.',
    schemaName: 'StayInLapland, Larga estancia y hoteles boutique en la Laponia finlandesa',
    breadcrumbHome: 'Inicio',
    stats: { stays: 'Alojamientos escogidos', bases: 'Bases en Laponia', categories: 'Formas de alojarse', months: 'Meses evaluados' },
    intro: {
      p1: 'Las listas de «los mejores alojamientos de Laponia» casi siempre arrancan con un iglú de cristal, y siguen con la misma fórmula. Esta guía está hecha de otra forma: noches probadas por nosotros, recomendaciones locales y solo los alojamientos que se quedan grabados después del viaje.',
      p2: 'Hemos dividido los alojamientos de Laponia en cuatro categorías claras: larga estancia, hoteles, iglús de cristal y refugios silvestres. 16 alojamientos seleccionados, todos visitados. La ruta favorita: una semana en cabaña en Levi, dos noches en un hotel de diseño en Rovaniemi, una última noche en un iglú de cristal. Combinadas, son la Laponia por la que se vuelve.',
      p3: 'Esta guía no agrega precios ni recicla reseñas. Las fuentes están a la vista, las relaciones de afiliación, abiertas.',
    },
    authorNote:
      'Una lista corta hecha a mano, escrita desde Finlandia y contrastada con colaboradores locales por toda Laponia.',
    fourWays: {
      kicker: 'Cuatro formas de alojarse',
      h2A: 'Elija una.',
      h2B: 'O combine dos.',
      lead:
        'Elija la categoría que se ajusta al viaje que quiere de verdad. Después escoja el alojamiento. Los lectores de larga estancia suelen combinar dos: una semana de base en una cabaña y dos noches en un sitio distinto.',
    },
    propertyWord: 'alojamiento',
    propertiesWord: 'alojamientos',
    explore: 'Explorar',
    pullQuote: {
      text:
        'Laponia es más grande de lo que la gente piensa, y la carretera entre Rovaniemi y Saariselkä se come medio día en cada sentido. El error más habitual del primer viaje es repartir cinco noches en tres bases distintas.',
      attr: 'Informe de Alojamiento de Laponia · Consejo Regional de Laponia, 2024',
    },
    tripKicker: '¿Ya tiene una idea clara de lo que quiere?',
    tripH2: 'Atajos locales.',
    destKicker: 'Cinco bases en Laponia',
    destH2: '¿En qué zona de Laponia?',
    destLead:
      'Cada destino tiene su propia lógica para una estancia larga. Entre y verá las recomendaciones y el motivo de elegir esa base frente a las otras.',
    readGuide: 'Leer',
    faqKicker: 'Preguntas reales, respuestas reales',
    faqH2: 'Antes de pulsar nada.',
    faqs: [
      {
        q: '¿Qué cuenta como «larga estancia» en este sitio?',
        a: 'Larga estancia es todo lo que va de cuatro noches en adelante, el umbral a partir del cual la mayoría de los alojamientos de Laponia ofrece tarifas semanales y donde una cocina decente empieza a importar. Los alojamientos de larga estancia listados aquí piden un mínimo de entre 3 y 7 noches según el caso; cada tarjeta lo indica.',
      },
      {
        q: '¿Por qué la portada prioriza larga estancia y no los iglús de cristal?',
        a: 'El iglú de cristal es la forma icónica de Laponia y tiene su propia sección. Pero los viajes a Laponia más queridos con el tiempo no son visitas de tres noches en cúpulas de cristal, son semanas con base en una cabaña o en un hotel de diseño, sumando una o dos noches en otro sitio. Este sitio refleja cómo Laponia recompensa de verdad al viajero recurrente.',
      },
      {
        q: '¿Kakslauttanen merece de verdad lo que cuesta?',
        a: 'Sí, pero solo los Kelo-Glass, no los iglús de cristal clásicos. Kelo-Glass combina techo panorámico de cristal con una cabaña de troncos climatizada, cocina y chimenea. Con un mínimo de dos noches se le saca el máximo partido. Las mejores ventanas para auroras boreales: principios de febrero y finales de marzo.',
      },
      {
        q: '¿Dónde basarse si la estancia larga incluye teletrabajo?',
        a: 'Rovaniemi. Es la única ciudad de Laponia con fibra fiable, vuelos diarios a Helsinki y Estocolmo y una escena real de restaurantes invernales que se mantiene abierta en temporada media. Arctic TreeHouse Resort y los chalés de Ounasvaara ofrecen ambos tarifas semanales y puestos de trabajo en condiciones.',
      },
    ],
    fullGuideCta: 'Leer la guía completa de reservas',
    categoryDescriptions: {
      longStays: 'Alquileres semanales y mensuales, villas, cabañas de diseño, apartamentos de esquí.',
      hotels: 'Hoteles boutique, de diseño y clásicos de Laponia para estancias cortas.',
      glassIgloos: 'La forma icónica de Laponia, cuatro resorts que merecen el nombre.',
      wilderness: 'Más allá de la última carretera, dos refugios para viajeros serios.',
    },
    categoryNames: {
      longStays: 'Larga estancia',
      hotels: 'Hoteles',
      glassIgloos: 'Iglús de cristal',
      wilderness: 'Refugios silvestres',
    },
  },
  hotels: {
    metaTitle: 'Hoteles boutique y de diseño en la Laponia finlandesa',
    metaDescription:
      'Cinco hoteles seleccionados en Laponia, Arctic TreeHouse, Arctic Light, Levi Spirit, Lapland Hotels Saaga y Star Arctic. Para estancias cortas y trabajo.',
    breadcrumb: 'Hoteles',
    pageHero: {
      eyebrow: 'Cinco hoteles seleccionados',
      title: 'Hoteles en Laponia.',
      subtitle:
        'Hoteles boutique, de diseño y clásicos laponeses, para estancias cortas, viajes de trabajo y noches de ciudad alrededor de una semana más larga en cabaña.',
    },
    authorNote:
      'Cinco alojamientos contrastados con la información publicada por los operadores y reseñas recientes de huéspedes en la temporada 2025/26.',
    introP1:
      'Laponia tiene muchos hoteles de cadena de gama media, Scandic, Sokos, que cumplen bien lo básico por 90–140 €/noche. No aparecen aquí; la decisión de reservarlos suele reducirse a «el más cercano al aeropuerto, la semana más barata».',
    introP2:
      'Los cinco hoteles de abajo se ganan su sitio por otra razón: diseño, arquitectura, vistas o mezcla de servicios. Son la respuesta correcta cuando quiere un hotel que sea parte del motivo del viaje, no solo una base.',
    picksKicker: 'Cinco elegidos',
    picksH2: 'Selección a mano, no agregada.',
    pullQuote: {
      text:
        'Rovaniemi se reconstruyó tres veces después de 1944, la tercera de la mano de Alvar Aalto, que trazó el plano de la ciudad con la forma de una cornamenta de reno. El Arctic Light Hotel se alza dentro de esa cornamenta, en un edificio de 1939 que sobrevivió a las tres reconstrucciones.',
      attr: 'Architectural Record · reportaje sobre el Arctic Light Hotel',
    },
    glanceKicker: 'Los cinco de un vistazo',
    glanceH2: 'Comparativa con criterio.',
    rubric:
      'Cinco puntos es lo mejor. Diseño = estilo interior y calidad de materiales. Arquitectura = el edificio en sí. Actividades = esquí a pie de pista, criaderos de huskies, cultura local a menos de 15 min.',
    axes: ['Diseño', 'Arquitectura', 'Spa / sauna', 'Actividades', 'Restaurante'],
    rows: [
      { name: 'Arctic TreeHouse', verdict: 'El mejor hotel de diseño de Rovaniemi.' },
      { name: 'Arctic Light', verdict: 'El edificio más interesante a nivel arquitectónico.' },
      { name: 'Levi Spirit', verdict: 'Ambiente solo para adultos. Spa + esquí a pie de pista.' },
      { name: 'Lapland Hotels Saaga', verdict: 'Clásico a pie de pista en Ylläs. Spa incluido.' },
      { name: 'Star Arctic', verdict: 'En lo alto · cielo más oscuro · mezcla cabaña/hotel.' },
    ],
    marginLabel: 'De iniciados',
    marginBody:
      'Arctic TreeHouse y Levi Spirit tienen sus propios restaurantes, Rakas (TreeHouse) y Spirit Kitchen (Levi). Ambos trabajan con producto local. Si reserva cualquiera de los dos, reserve mesa el mismo día que la habitación: los fines de semana se agotan antes que el hotel.',
    counterKicker: 'Contrarrecomendación honesta',
    counterH2: 'Cuándo un hotel no es la respuesta.',
    counterP1:
      'Para 5 noches o más con el mismo ritmo de viaje, esquiar, cocinar, sauna, repetir, una cabaña o apartamento de larga estancia gana a cualquiera de estos hoteles en coste por noche y calidad de vida. El hotel acierta cuando los días son distintos entre sí.',
    counterP2: 'Para una sola noche de auroras de lista de deseos, ganan los iglús de cristal. Ninguno de los hoteles de arriba tiene techo de vidrio.',
    seeLong: 'Ver larga estancia',
    seeIgloos: 'Ver iglús de cristal',
    browseAll: 'Buscar en Trip.com',
  },
  bookingGuide: {
    metaTitle: 'Guía de reservas de Laponia, cuándo, cómo, qué llevar',
    metaDescription:
      'Guía práctica de reservas de Laponia, cuándo venir con las mejores auroras, cómo llegar, qué llevar, qué cuesta de verdad y consejos de los locales.',
    breadcrumb: 'Guía de reservas',
    pageHero: {
      eyebrow: 'Planifique el viaje adecuado',
      title: 'Guía de reservas de Laponia.',
      subtitle:
        'Consejos prácticos y con criterio. Cuándo venir, cómo llegar, qué llevar, qué cuesta de verdad.',
    },
    sections: [
      {
        title: 'Cuándo venir',
        body: [
          'La temporada de auroras va de finales de agosto a principios de abril. Las ventanas más fuertes son septiembre-octubre y febrero-marzo, cuando las largas noches oscuras coinciden con un clima solar activo.',
          'Evite de finales de noviembre a mediados de diciembre: oscuro, pero la nieve suele ir a parches y muchas actividades aún no han arrancado.',
          'Navidad y Año Nuevo se agotan con 9 meses de antelación y los precios se triplican. La elección de los locales es la segunda quincena de enero, más tranquila, más fría, mejores auroras.',
        ],
      },
      {
        title: 'Cómo llegar',
        body: [
          'Tres aeropuertos laponeses cubren casi todo lo que reservará. Rovaniemi (RVN) para el Pueblo de Papá Noel y el sur, Kittilä (KTT) para Levi y Ylläs, Ivalo (IVL) para Saariselkä, Inari y el norte.',
          'Helsinki (HEL) → Laponia es un vuelo nacional de 90 minutos. De diciembre a marzo también hay vuelos directos desde Londres, Berlín y París.',
          'Trenes: el nocturno Helsinki–Rovaniemi es lento, pero el trayecto por la costa del golfo de Botnia pasando por Kemi es genuinamente bonito y el vagón se llena de locales haciendo el mismo viaje.',
        ],
      },
      {
        title: 'Qué llevar',
        body: [
          'La mayoría de los alojamientos prestan equipo ártico (monos para −30 °C, botas, guantes, gorros) incluido o por una pequeña tarifa diaria. Confírmelo antes de facturar una maleta llena de material de esquí.',
          'Importan más las capas que el grosor, base de merino + forro polar + cortavientos. El algodón mata.',
          'Cámaras: lleve baterías de repuesto pegadas al cuerpo, dentro de la chaqueta. El frío las agota rápido.',
        ],
      },
      {
        title: 'El presupuesto, sin rodeos',
        body: [
          'Cabaña de larga estancia (por semana): 140–280 €/noche, puede dormir a 4–6.',
          'Hotel boutique: 140–420 €/noche, desayuno normalmente incluido.',
          'Iglú de cristal, temporada alta: 400–1500 €/noche para dos.',
          'Suite en refugio silvestre: 220–950 €/noche según la propiedad.',
          'Actividades (safari de huskies, motonieve, caza de auroras): por lo general 120–200 € por persona y salida, aparte.',
        ],
      },
      {
        title: 'Políticas de cancelación',
        body: [
          'La mayoría de los alojamientos laponeses han pasado a tarifas no reembolsables en las semanas de máxima demanda. Lea la letra pequeña antes de pulsar «reservar».',
          'Un seguro de viaje con cancelación por cualquier motivo merece de verdad la pena en viajes de más de 2000 €. Los cazadores de auroras cancelan por el tiempo a todas horas.',
          'Nuestros socios de reservas respetan las condiciones de cancelación mostradas al reservar, reserve a través de la redirección de este sitio para mantener la tarifa visible y coherente.',
        ],
      },
      {
        title: 'Consejos de iniciados',
        body: [
          'Saariselkä e Inari son más frías, más oscuras y con auroras más intensas que Rovaniemi, pero Rovaniemi tiene el aeropuerto, las actividades y el Pueblo de Papá Noel. Combine bases.',
          'Si solo tiene 3 noches, hágalas en un mismo sitio. Laponia es más grande de lo que la gente cree y los traslados se comen los días.',
          'Las previsiones de auroras (NOAA, Aurora Service Europe) aciertan a 30–90 minutos, no a días vista. Manténgase flexible.',
        ],
      },
    ],
    readyTitle: '¿Listo para reservar?',
    readyLead:
      'Explore alojamientos seleccionados por categoría o salte directamente a la disponibilidad en vivo en Trip.com.',
    browseAll: 'Ver todos los alojamientos de Laponia',
  },
  whenToGo: {
    metaTitle: 'Cuándo ir a Laponia, guía mes a mes | StayInLapland',
    metaDescription:
      'Guía mes a mes para visitar la Laponia finlandesa, cuándo son más fuertes las auroras, cuándo se asienta la nieve y qué semanas reservan los locales.',
    breadcrumb: 'Cuándo ir',
    pageHero: {
      eyebrow: 'Mes a mes',
      title: 'Cuándo ir a Laponia.',
      subtitle:
        'El mes correcto depende del viaje. Auroras, esquí, valor en larga estancia, pico navideño: cada cosa tiene su momento óptimo. Aquí tiene el mes a mes editorial.',
    },
    authorNote:
      'Compilado con los partes de colaboradores locales de toda la Laponia finlandesa.',
    pullQuote: {
      text:
        'La mayoría de las auroras sobre la Laponia finlandesa aparecen entre el anochecer y la madrugada, y los largos meses oscuros del otoño al inicio de la primavera ofrecen las mejores probabilidades. Un cielo despejado y algo de paciencia importan más que la fecha exacta.',
      attr: 'LaplandVibes, a partir de los registros de auroras de nuestros colaboradores en toda la Laponia finlandesa',
    },
    months: [
      {
        name: 'Septiembre',
        pitch: 'Se abre la temporada de auroras',
        body:
          'Empiezan las largas noches oscuras. Aún no ha nevado, es la época de la «ruska», cuando el abedul vira al rojo y al oro. La aurora se recorta contra el suelo desnudo y los colores son los más fotografiados de todos los meses.',
        bestFor: ['Fotógrafos', 'Estancias cortas centradas en auroras', 'Combo senderismo + aurora'],
        avoidIf: ['Ha venido específicamente por la nieve'],
      },
      {
        name: 'Octubre',
        pitch: 'Temporada media tranquila',
        body:
          'Primeras nevadas, pero el suelo rara vez queda blanco antes de fin de mes. Los hoteles aplican tarifa media (−30 % respecto al pico), la aurora está activa y hay muy pocos turistas. La ventana de auroras más barata con toda la infraestructura de actividades en marcha.',
        bestFor: ['Cazadores de auroras con presupuesto ajustado', 'Llegada de larga estancia antes del pico'],
        avoidIf: ['Quiere garantía de esquí o de motonieve'],
      },
      {
        name: 'Noviembre',
        pitch: 'Empieza la noche polar, se asienta la nieve',
        body:
          'El arranque de invierno más frío de Laponia. En el extremo norte (Utsjoki), la noche polar empieza en los últimos días del mes. La nieve empieza a cuajar a finales de noviembre, para fin de mes abren la mayoría de las estaciones y los hoteles de nieve. Finales de noviembre es la mejor relación calidad-precio absoluta para larga estancia.',
        bestFor: ['Larga estancia a −50 % de tarifa', 'Repetidores que conocen el frío'],
        avoidIf: ['Primera vez (la nieve es irregular)'],
      },
      {
        name: 'Diciembre',
        pitch: 'Pico navideño',
        body:
          'De Navidad a Año Nuevo todo está en su pico, precios pico, demanda pico, turismo de Papá Noel pico en Rovaniemi. Los iglús de cristal triplican el precio, los hoteles de nieve abren del todo. La aurora sigue activa, pero el cielo suele estar más nublado.',
        bestFor: ['Viajes familiares con temática navideña', 'Primerizos que quieren nieve garantizada'],
        avoidIf: ['Viaje sensible al presupuesto', 'Estancias centradas en auroras'],
      },
      {
        name: 'Enero',
        pitch: 'La elección de los locales',
        body:
          'La segunda quincena de enero es el momento óptimo y tranquilo, los precios pico ya han bajado, los días se alargan de forma perceptible, la nieve está estable y la aurora más activa. Las multitudes navideñas se han ido y las de las vacaciones de febrero aún no han llegado.',
        bestFor: ['Larga estancia', 'Lunas de miel', 'Fotografía de auroras'],
        avoidIf: ['Necesita calor en cualquier forma'],
      },
      {
        name: 'Febrero',
        pitch: 'El mes de auroras más fuertes',
        body:
          'De mediados de febrero a mediados de marzo es, estadísticamente, la ventana de auroras más fuerte del año, solapamiento de cielo oscuro con clima solar activo. La larga estancia vuelve a tarifa pico por las vacaciones escolares europeas; reserve con 6 meses de antelación.',
        bestFor: ['Iglús de cristal', 'Viajes de auroras de lista de deseos'],
        avoidIf: ['Planificación de última hora'],
      },
      {
        name: 'Marzo',
        pitch: 'Vuelve la luz',
        body:
          'Los días se alargan rápido, a fin de mes hay 13 horas de luz. La aurora sigue fuerte en las madrugadas oscuras y a última hora de la tarde. Esquí de primavera en los fjells orientados al sur. El mes de esquí más fotogénico.',
        bestFor: ['Larga estancia con esquí a pie de pista', 'Quien quiere luz + aurora'],
        avoidIf: ['Fotógrafos que vienen por el ambiente de noche polar'],
      },
      {
        name: 'Abril',
        pitch: 'Nieve de primavera + luz',
        body:
          'La nieve sigue profunda y el esquí en los fjells, excelente. La temporada de auroras termina a principios de abril, cuando las noches se vuelven demasiado claras. Finales de abril es de nuevo temporada media, las tarifas bajan un 30 %, los alojamientos siguen abiertos y el sol queda sobre el horizonte más de 16 horas.',
        bestFor: ['Larga estancia de esquí de fin de temporada', 'Esquí de fondo'],
        avoidIf: ['Viajes centrados en auroras'],
      },
    ],
    bestForLabel: 'Ideal para',
    skipIfLabel: 'Sáltelo si',
    cheatKicker: 'Chuleta de los locales',
    cheatH2: 'Tres semanas que los locales reservan para sí mismos.',
    cheatP1:
      '<strong class="text-charcoal">Finales de noviembre (semanas 47–48).</strong> La nieve acaba de asentarse, empiezan las semanas más oscuras del año y la temporada de auroras está a pleno rendimiento. Tarifas de larga estancia un 40–50 % por debajo del pico. Algunos alojamientos aún no han abierto del todo, confírmelo antes de reservar.',
    cheatP2:
      '<strong class="text-charcoal">Segunda quincena de enero (semanas 3–4).</strong> La mejor semana de la temporada en relación aurora-coste. Multitudes de Navidad fuera, vacaciones de febrero sin empezar, días que se alargan, nieve bien puesta. Es cuando nuestro editor se va de vacaciones.',
    cheatP3:
      '<strong class="text-charcoal">Finales de abril (semanas 16–17).</strong> Pico del esquí de primavera, sol 16 h/día sobre el horizonte, nieve aún profunda en las laderas orientadas al norte. La ventana de auroras se ha cerrado, pero solo la luz ya vale el viaje. Las tarifas bajan un 30 % después de Semana Santa.',
    marginLabel: 'Cuándo reservar',
    marginBody:
      'Para el pico de febrero: reserve con 6 meses. Finales de enero: 3 meses. Temporada media (noviembre, finales de abril): bastan 6–8 semanas. Navidad / Nochevieja: 9 meses como mínimo, y tenga fechas alternativas porque el inventario pico desaparece en primavera.',
    readGuide: 'Leer la guía de reservas',
    seeLong: 'Ver larga estancia',
  },
  destinationPage: {
    ...copyEN.destinationPage,
    metaTitleSuffix: 'Dónde alojarse | StayInLapland',
    pageHeroEyebrow: 'Destino lapón',
    notFoundKicker: 'Página no encontrada',
    notFoundTitle: 'Destino no listado.',
    notFoundBody: 'De momento cubrimos Rovaniemi, Levi, Saariselkä, Inari y la zona de Ylläs.',
    backHome: 'Volver al inicio',
    authorNoteFor: (n) => `Perspectiva de larga estancia sobre ${n}, escrita desde Finlandia y contrastada con colaboradores locales.`,
    recommendedIn: (n) => `Recomendado en ${n}`,
    whereToStay: 'Dónde alojarse de verdad.',
    minStayLabel: 'Estancia mínima:',
    perNight: '/ noche',
    checkRates: 'Ver tarifas',
    seeAll: 'Ver todo',
    liveAvailabilityIn: (n) => `¿Busca disponibilidad en vivo en ${n}?`,
    networkLeadA: 'Nuestra red clasifica solo 16 alojamientos. Trip.com lista todo lo demás que funciona en ',
    networkLeadB: ' este invierno, fechas flexibles, filtros por equipamiento, oferta completa.',
    browseInDest: (n) => `Buscar en Trip.com, ${n}`,
    imageNote:
      'Las imágenes son ilustrativas: muestran el tipo de alojamiento y el paisaje de la zona, no las habitaciones del establecimiento.',
    landscapeAlt: (n) => `Paisaje invernal en ${n}, Laponia finlandesa`,
    bucketLabels: {
      'long-stays': 'larga estancia',
      'hotels': 'hoteles',
      'glass-igloos': 'iglús de cristal',
      'wilderness': 'naturaleza',
    },
  },
  glassIgloos: {
    metaTitle: 'Iglús de cristal en la Laponia finlandesa | StayInLapland',
    metaDescription:
      'Resorts de iglús de cristal en Laponia que merecen el nombre, Kakslauttanen, Levin Iglut, Aurora Village y Aurora Pyramids. Clasificados por cielo y acceso.',
    breadcrumb: 'Iglús de cristal',
    pageHero: {
      eyebrow: 'La forma icónica de Laponia',
      title: 'Iglús de cristal en la Laponia finlandesa.',
      subtitle:
        'La cúpula finlandesa de techo de vidrio se inventó en Saariselkä. Hoy cuatro alojamientos merecen el nombre, y entre ellos hay una diferencia real.',
    },
    authorNote: 'Cuatro resorts contrastados con la información publicada por los operadores y reseñas recientes de huéspedes. Precios revisados por última vez: febrero de 2026.',
    pickWhy: [
      'Kakslauttanen está en todas las listas porque se lo merece. El resort abrió en Saariselkä en 1973, cuando «alojamiento turístico en Saariselkä» significaba un albergue de madera y la aurora se miraba desde el aparcamiento, y más tarde inventó el iglú de cristal moderno.',
      'Hay una bifurcación: reserve los iglús Kelo-Glass, no los iglús de cristal clásicos. El Kelo-Glass combina el techo panorámico de vidrio con una estructura de troncos con calefacción, cocina propia y chimenea. Los clásicos son más pequeños, con más trasiego, y el baño está a 50 metros a pie, a −25 °C.',
      'La diferencia de precio ronda los 200 €/noche. A lo largo de tres noches, el Kelo-Glass amortiza su sobreprecio solo por no tener que ponerse las botas de nieve a las 4 de la madrugada.',
    ],
    pickCaveat:
      'Los iglús de cristal clásicos cuestan un 30 % menos, pero la experiencia es claramente peor. Si su presupuesto se topa en 400 €/noche, mire Aurora Village o Aurora Pyramids, el mismo cielo, a menudo en un entorno de lago o naturaleza mejor situado.',
    pullQuote: {
      text:
        'El primer iglú de cristal se construyó para que los huéspedes vieran la aurora sin estar fuera a −30 °C. Décadas después sigue siendo todo el argumento, y la parte que todo imitador estropea es lo que pasa cuando la aurora se va.',
      attr: 'Historia del origen de Kakslauttanen · resort fundado en 1973',
    },
    runnersKicker: 'Los otros tres',
    runnersH2: 'Cuando Kakslauttanen no es la respuesta correcta.',
    glanceKicker: 'Los cuatro de un vistazo',
    glanceH2: 'La comparativa con criterio.',
    rubric:
      'Cinco puntos es lo mejor. Acceso = facilidad desde el aeropuerto más cercano. Cielo = oscuridad + geometría de observación. Intimidad = aislamiento respecto a las unidades vecinas. Confort = baño, cocina, aislamiento acústico. Reputación = hasta qué punto el resort cumple lo que promete el folleto.',
    axes: ['Acceso', 'Cielo', 'Intimidad', 'Confort', 'Reputación'],
    rows: [
      { name: 'Kakslauttanen', verdict: 'El original. Caro. Vale la pena solo en Kelo-Glass.' },
      { name: 'Levin Iglut', verdict: 'Mejor ingeniería. Camas aurora motorizadas.' },
      { name: 'Aurora Village', verdict: 'La sensación más remota. A 30 min de Ivalo.' },
      { name: 'Aurora Pyramids', verdict: 'Los reflejos del lago duplican la aurora.' },
    ],
    marginLabel: 'Compensación',
    marginBody:
      'Ningún resort gana en los cinco ejes. Aurora Pyramids supera a todos en reflejo del cielo pero pierde en acceso (40 min de Ivalo). Levin Iglut gana en ingeniería pero está dentro de un pueblo de esquí concurrido. Elija la prioridad que más le importe.',
    counterKicker: 'Contrarrecomendación honesta',
    counterH2: 'Cuándo saltarse los iglús de cristal por completo.',
    counterP1:
      'Para estancias de cuatro noches o más, dos noches de iglú de cristal y un bloque en cabaña de larga estancia es mejor viaje que cuatro noches de iglú. La novedad se gasta tras la segunda noche; un hirsimökki con sauna privado entrega la parte de Laponia que una cúpula de vidrio no puede dar.',
    counterP2:
      'En Navidad (22 dic. → 2 ene.) los precios se triplican y el 90 % del inventario va a los circuitos organizados británicos antes de la primavera. Mueva las fechas a la segunda mitad de enero si puede, más frío, más oscuro, la mitad de precio, mejores auroras.',
    seeLong: 'Ver larga estancia',
    bookingGuideBtn: 'Guía de reservas',
    browseAll: 'Buscar en Trip.com',
  },
  wilderness: {
    metaTitle: 'Refugios silvestres en la Laponia finlandesa | StayInLapland',
    metaDescription:
      'Refugios silvestres tras la última carretera, Iso-Syöte Eagle View y Wilderness Hotel Muotka. Auroras sobre el límite de los árboles y despertador aurora.',
    breadcrumb: 'Naturaleza',
    pageHero: {
      eyebrow: 'Más allá de la última carretera',
      title: 'Refugios silvestres.',
      subtitle:
        'La nueva tradición lapona, retiros diseñados por arquitectos, levantados desde la década de 2010 allí donde termina la carretera turística. Dos refugios, dos definiciones distintas de naturaleza salvaje.',
    },
    authorNote: 'Los datos de ambos alojamientos se han verificado con la información publicada por los operadores y reseñas recientes de huéspedes.',
    pickWhy: [
      'Las suites Iso-Syöte Eagle View se alzan a 432 m en el fjell de verdad más meridional de Finlandia, suites de madera de pino con observación de auroras por encima del límite de los árboles y sin el largo vuelo al norte.',
      'Las fachadas de cristal miran al cielo abierto, así que en una noche despejada el arco auroral se lee desde la cama. Verá la aurora desde su propia suite en la cresta y no desde un refugio compartido, privacidad sin el compromiso de un alquiler completo.',
      'Y es el refugio silvestre serio más fácil de alcanzar: a 90 minutos del aeropuerto de Oulu, lo que lo convierte en el raro retiro que funciona incluso para un viaje corto.',
    ],
    pickCaveat:
      'El botón «ver tarifas» de este sitio lleva a una búsqueda en Trip.com del alojamiento reservable más cercano. Las Eagle View Suites se agotan antes los fines de semana de cielo despejado, reserve las fechas, no el pronóstico.',
    pullQuote: {
      text:
        'La palabra «remoto» suele ser lenguaje de marketing. Aquí arriba es cierto. La carretera se acaba, el límite de los árboles queda por debajo de usted y la única luz que queda es la que el cielo decide hacer. A un lugar así no se llega sin más: uno se compromete con él.',
      attr: 'En la carretera del fjell de Iso-Syöte, mirando hacia arriba',
    },
    runnersKicker: 'El otro',
    runnersH2: 'Cuando una suite entera en la cresta es demasiado.',
    glanceKicker: 'Dos definiciones de naturaleza salvaje',
    glanceH2: 'De un vistazo.',
    rubric:
      'Aislamiento = cuán solo se siente uno de verdad. Servicio = proporción de personal por huésped. Actividades = experiencias guiadas incluidas o disponibles.',
    axes: ['Acceso', 'Aislamiento', 'Servicio', 'Actividades', 'Factor irrepetible'],
    rows: [
      { name: 'Iso-Syöte Eagle View', verdict: 'Por encima del límite de los árboles. Lo más fácil desde el sur de Finlandia.' },
      { name: 'Hotel Muotka', verdict: 'Servicio de despertador aurora en el refugio. Confort de hotel.' },
    ],
    marginLabel: 'Despertador aurora en Muotka',
    marginBody:
      'El Wilderness Hotel Muotka tiene un cazador de auroras de guardia que vigila el índice Kp y llama físicamente a las puertas cuando se abren las auroras. Es la mejor prestación de cualquier alojamiento de esta guía y compensa la diferencia de precio en viajes de una sola noche.',
    counterKicker: 'Contrarrecomendación honesta',
    counterH2: 'Los refugios silvestres no son para todo el mundo.',
    counterP1:
      'Ambos refugios están a 1–3 horas de traslado del aeropuerto más cercano. Para viajes de menos de tres noches, el tiempo en tránsito es desproporcionado.',
    counterP2:
      'Para quien viaja al Ártico por primera vez: haga antes un viaje a Rovaniemi o Saariselkä. Un refugio silvestre de alquiler completo se desperdicia en alguien que aún está descubriendo qué es el −25 °C.',
    seeLong: 'Ver larga estancia',
    browseAll: 'Buscar en Trip.com',
  },
  longStays: {
    metaTitle: 'Larga estancia en la Laponia finlandesa | StayInLapland',
    metaDescription:
      'Cinco alojamientos de larga estancia en Laponia para una semana o más, Arctic TreeHouse, penthouses de Levi, Ounasvaara, cabañas de Pyhä y villas de Inari.',
    breadcrumb: 'Larga estancia',
    pageHero: {
      eyebrow: 'Cinco alojamientos de larga estancia',
      title: 'Quédese una semana. O un mes.',
      subtitle:
        'La respuesta correcta para repetidores, teletrabajadores, familias y todo aquel cuyo viaje a Laponia dure más de tres noches. Tarifas semanales, saunas privados, cocinas de verdad, de suites de diseño a apartamentos a pie de pista.',
    },
    authorNote:
      'Cinco alojamientos contrastados con colaboradores locales y con los calendarios de tarifas semanales de la temporada 2025/26.',
    pickWhy: [
      'El Arctic TreeHouse Resort es la respuesta cuando la pregunta es «¿cómo hago una larga estancia de verdad en Rovaniemi sin alquilar una cabaña pelada?» Suites de diseño integradas en el bosque de pinos al borde de Santa Park, cada una con cocina americana y una fachada panorámica de cristal orientada a los árboles.',
      'La tarifa semanal baja en torno al 25 % respecto a la de por noche, y cada suite da acceso al pueblo de saunas del resort, así que una semana aquí cuesta menos por noche que una serie de reservas de una noche, con mucho más espacio para asentarse de verdad.',
      'Es además la base más flexible de esta lista: el aeropuerto, los restaurantes y la cultura del diseño de Rovaniemi están a diez minutos, mientras que la suite en sí solo mira al bosque. El botón «Ver tarifas» de abajo le lleva directamente al inventario semanal.',
    ],
    pickCaveat:
      'El descuento semanal aparece en el sistema de reservas en cuanto selecciona 7+ noches, no siempre figura en la tarifa por noche que se muestra. Las semanas pico en torno a Navidad se agotan con meses de antelación; mediados de noviembre y finales de abril salen mucho más baratos.',
    pullQuote: {
      text:
        'El encargo era desaparecer en la cresta. Usar madera de la propia finca, vidrio orientado solo al norte, y no levantar nunca la cubierta por encima de la línea de los árboles. Lo que se ve ya estaba ahí, nosotros solo hicimos posible vivir dentro.',
      attr: 'Studio Puisto · declaración del arquitecto',
    },
    runnersKicker: 'Los otros cuatro',
    runnersH2: 'De apartamentos a pie de pista a villas a orillas del lago.',
    runnersLead:
      'Cada uno de los cuatro de abajo tiene su propia lógica de larga estancia, proximidad a un dominio esquiable, infraestructura de teletrabajo entre semana, cocina apta para familias o base cultural a orillas de un lago.',
    weeklyKicker: 'Cómo funcionan las tarifas semanales',
    weeklyH2: 'El precio baja más rápido de lo que la gente espera.',
    weeklyP1:
      'En los alojamientos de esta página, la tarifa semanal sale de media <strong>un 23 % más barata por noche</strong> que la tarifa de cabecera por noche. Levi Residences baja un 30 %, el Pyhä Bear’s Lodge un 18 %, Arctic TreeHouse un 25 %. La mayoría no lo anuncia, el descuento vive en el motor de reservas en cuanto selecciona 7 noches o más.',
    weeklyP2:
      'Las semanas bisagra, <strong>mediados de noviembre</strong> (justo antes de que la nieve se estabilice) y <strong>finales de abril</strong> (justo después del deshielo), restan otro 30–50 % por encima. La aurora sigue activa en ambas ventanas. Es el momento óptimo para la larga estancia con un calendario laboral flexible.',
    marginLabel: 'Táctica de reserva',
    marginBody:
      'Para una estancia de 4 semanas, repartirla entre dos alojamientos puede ganarle a una sola reserva: así evita usted el pico de «semana alta» que golpea en Navidad y en las vacaciones escolares de esquí de febrero, y de paso conoce dos partes de Laponia. El día de traslado se lleva media jornada; el ahorro suele pagar dos noches extra en otro sitio.',
    counterKicker: 'Contrarrecomendación honesta',
    counterH2: 'Cuándo NO reservar una larga estancia.',
    counterP1:
      'Para un primer viaje de 2–3 noches, sáltese los alquileres de larga estancia. El check-in, la compra y el impuesto de «aprender a usar la cocina» se comen el ahorro. Reserve un hotel.',
    counterP2:
      'Para una única noche de auroras de lista de deseos, los iglús de cristal son mejor respuesta. El techo de vidrio es la experiencia a la que viene; una cabaña de larga estancia le da una ventana.',
    counterP3:
      'Para grupos con movilidad mixta, llame directamente al alojamiento antes de reservar, la mayoría de las cabañas de larga estancia no son accesibles sin escalones, y el sauna en particular suele estar en el sótano, sobre suelo de madera.',
    seeHotels: 'Ver hoteles',
    seeIgloos: 'Ver iglús de cristal',
    browseAll: 'Buscar en Trip.com',
  },
  hotelsData: [
    {
      name: 'Arctic TreeHouse Resort',
      location: 'Rovaniemi',
      highlight: 'Hotel de diseño · suites al borde del bosque',
      description:
        'Un hotel de diseño de 70 suites encajado en el pinar que hay detrás del Santa Park, en Rovaniemi. Cada suite tiene una fachada panorámica de vidrio hacia los árboles y un interior de minimalismo nórdico. Restaurante propio potente, Rakas, de producto local, y el pueblo de saunas del resort está abierto a todos los huéspedes.',
    },
    {
      name: 'Arctic Light Hotel',
      location: 'Centro de Rovaniemi',
      highlight: 'Boutique de 57 habitaciones · edificio funcionalista de 1939',
      description:
        'Un hotel boutique de 57 habitaciones en un edificio funcionalista de 1939, antigua sede del periódico local, reconstruido tras la destrucción de Rovaniemi en la guerra de Laponia de 1944. Cada planta tiene una temática interior distinta; la suite del ático tiene su propio sauna. El hotel más serio de la ciudad a nivel arquitectónico.',
    },
    {
      name: 'Levi Spirit',
      location: 'Levi',
      highlight: 'Villas de diseño · spa · esquí a pie de pista',
      description:
        'Hotel de villas de alta gama al pie del fjell de Levi. Jacuzzis privados al aire libre, sauna en cada villa, acceso a pie de pista a los remontes y spa completo. Pensado para adultos, sin programa infantil, solo habitaciones tranquilas y buena cocina.',
    },
    {
      name: 'Lapland Hotels Saaga',
      location: 'Ylläsjärvi (Ylläs)',
      highlight: 'Clásico de Ylläs · esquí a pie de pista · spa y piscina',
      description:
        'El hotel clásico del lado más tranquilo de Ylläs, en el pueblo de Ylläsjärvi, a unos cien metros del remonte Iso-Ylläs, con esquí a pie de pista en invierno. Piscina, spa y gimnasio están incluidos para las habitaciones estándar y superior; los apartamentos añaden sauna privado. El bufé del restaurante Biegga mira al monte y al lago Ylläsjärvi.',
    },
    {
      name: 'Star Arctic Hotel',
      location: 'Saariselkä',
      highlight: 'En lo alto · cielo más oscuro · mezcla de suites y cabañas de vidrio',
      description:
        'Un alojamiento híbrido, habitaciones de hotel clásicas más cabañas de techo de vidrio en el punto más alto sobre Saariselkä. Contaminación lumínica prácticamente nula. Las habitaciones del hotel disfrutan de la misma vista en altura a través de un ventanal enorme y cuestan en torno a un 40 % menos que las cabañas.',
    },
  ],
  longStaysData: [
    {
      name: 'Arctic TreeHouse Resort, larga estancia',
      location: 'Rovaniemi',
      highlight: 'Suites de diseño · tarifas semanales · pueblo de saunas',
      description:
        'Suites de diseño con vistas al pinar, en el borde del Santa Park. La tarifa semanal baja un 25 % respecto a la de por noche. Cada suite tiene cocina americana, fachada panorámica de vidrio y acceso al pueblo de saunas del resort, una de las pocas formas de hacer una larga estancia decente en Rovaniemi sin alquilar una cabaña en bruto.',
    },
    {
      name: 'Levi Residences, suites penthouse',
      location: 'Pueblo de Levi',
      highlight: '2 dormitorios · esquí a pie de pista · sauna privado · tarifas semanales',
      description:
        'Apartamentos de dos dormitorios al pie del fjell de Levi, a poca distancia a pie de los remontes y del pueblo. Cada unidad tiene sauna privado de leña, cocina de verdad y un mínimo de cuatro noches de diciembre a marzo. La elección de las familias que pasan una semana esquiando sin renunciar a las comodidades urbanas.',
    },
    {
      name: 'Lapland Hotels Ounasvaara Chalets',
      location: 'Rovaniemi · fjell de Ounasvaara',
      highlight: 'Esquí a pie de pista · a pie del centro de Rovaniemi',
      description:
        'Chalés totalmente equipados en el fjell de Ounasvaara. Esquí a pie de pista en invierno, diez minutos a pie del centro de Rovaniemi. La opción de larga estancia más flexible si quiere mezclar comodidad urbana y mañanas árticas.',
    },
    {
      name: "Lapland Hotels Bear's Lodge",
      location: 'Parque nacional de Pyhä-Luosto',
      highlight: 'Parque nacional en la puerta · sauna privado · familias',
      description:
        'Cabañas tradicionales de troncos junto al parque nacional de Pyhä-Luosto. Cocinas completas, saunas privados de leña, acceso al lago. La respuesta adecuada para una estancia familiar de varias semanas en la que los días giran en torno a las raquetas y las pistas de fondo, no al turismo.',
    },
    {
      name: 'Wilderness Hotel Nangu, villas a orillas del lago',
      location: 'Orilla sur del lago Inari',
      highlight: 'Actividades guiadas por samis · vistas al lago · tarifas de larga estancia',
      description:
        'Villas a orillas del lago Inari con habitaciones de cara al agua. Pesca en hielo guiada por samis, esquí silvestre con guardabosques, el Museo Sami de Inari a veinte minutos. Tarifas de larga estancia desde cuatro noches, la más cultural de las largas estancias junto a un lago.',
    },
  ],
  glassIgloosData: [
    {
      name: 'Kakslauttanen Arctic Resort',
      location: 'Saariselkä',
      highlight: 'El iglú de cristal original · Kelo-Glass disponible',
      description:
        'El resort que inventó el iglú de cristal moderno. Elija Kelo-Glass antes que los iglús de cristal clásicos, el Kelo combina el techo panorámico de vidrio con una estructura de troncos con calefacción, cocina americana y chimenea. Dos noches mínimo para sacarle todo el partido.',
    },
    {
      name: 'Levin Iglut',
      location: 'Fjell de Levi',
      highlight: 'Camas aurora motorizadas · posición en lo alto del fjell',
      description:
        'Iglús de cristal de gama alta en el fjell de Levi, muy por encima del halo de luz del pueblo. Las camas motorizadas se orientan hacia el arco auroral, cada unidad tiene su cocina americana, la ingeniería mejor lograda de los cinco resorts finlandeses.',
    },
    {
      name: 'Aurora Village',
      location: 'Ivalo',
      highlight: 'Entorno silvestre cerca de Ivalo · cabañas muy separadas',
      description:
        'Cabañas de techo de vidrio en bosque intacto cerca de Ivalo. Las cabañas están muy separadas para preservar la intimidad y el entorno es lo bastante oscuro como para que la aurora se lea a través de una nube fina. El alojamiento de iglús de cristal con sensación más remota del sitio.',
    },
    {
      name: 'Aurora Pyramids',
      location: 'Lago Inari',
      highlight: 'Cabañas pirámide · reflejos del lago',
      description:
        'Cabañas en forma de pirámide con fachada de vidrio en la orilla del lago Inari. El lago helado refleja el arco auroral en cuanto el viento baja de 3 m/s, una geometría de observación que ningún otro alojamiento finlandés ofrece.',
    },
  ],
  wildernessData: [
    {
      name: 'Iso-Syöte Eagle View Suites',
      location: 'Iso-Syöte (Pudasjärvi, justo al sur de Laponia)',
      highlight: 'Por encima del límite de los árboles · accesible desde Oulu',
      description:
        'Suites de pino a 432 m en el fjell de Iso-Syöte, el fjell de verdad más meridional de Finlandia. Observación de auroras por encima del límite de los árboles sin el largo vuelo a Saariselkä, y a 90 minutos del aeropuerto de Oulu.',
    },
    {
      name: 'Wilderness Hotel Muotka',
      location: 'Zona de Saariselkä',
      highlight: 'Servicio de despertador aurora · confort de hotel',
      description:
        'Cabañas aurora con cristal de pared completa de cara a los fjells de alrededor. Los cazadores de auroras del propio hotel despiertan a los huéspedes cuando sube la actividad, útil, porque la mayoría de las ventanas de aurora ocurren bien pasada la medianoche. Confort de hotel en plena naturaleza.',
    },
  ],
  destinationsData: [
    {
      slug: 'rovaniemi',
      pitch:
        'La capital de la Laponia finlandesa, la única ciudad lapona con una verdadera escena gastronómica de invierno, un aeropuerto con conexiones de verdad y cultura del diseño todo el año.',
      longStayAngle:
        'La base adecuada si su larga estancia combina teletrabajo entre semana y escapadas al norte el fin de semana, wifi rápido, vuelos directos a Estocolmo, restaurantes abiertos en temporada media.',
    },
    {
      slug: 'levi',
      pitch:
        'La mayor estación de esquí de Finlandia por venta de pases de esquí, con 25 000 plazas, apartamentos a pie de pista y una calle de pueblo de verdad.',
      longStayAngle:
        'Lógica de larga estancia: los apartamentos a pie de pista se alquilan por semana de diciembre a abril. Los remontes funcionan a diario, los restaurantes del pueblo abren cada noche, aquí se puede hacer una temporada de verdad.',
    },
    {
      slug: 'saariselka',
      pitch:
        'Latitud más alta que Rovaniemi, nieve más dura, cielo más oscuro. El pueblo lapón que se toma el invierno más en serio.',
      longStayAngle:
        'Lógica de larga estancia: alquile una cabaña en lo alto y escriba un libro. Pocas distracciones. Excelente red de esquí de fondo, criaderos de huskies cerca, ninguna distracción urbana.',
    },
    {
      slug: 'inari',
      pitch: 'Capital cultural sami, lago Inari (el tercer lago más grande de Finlandia), nuestra base de larga estancia más septentrional.',
      longStayAngle:
        'Lógica de larga estancia: el lago en sí es la actividad. Pesca en hielo cada mañana, esquí de fondo cruzando el lago helado, el Museo Sami de Inari y el centro cultural SIIDA en la puerta.',
    },
    {
      slug: 'yllas',
      pitch:
        'Más tranquilo que Levi, temporada de esquí más larga, unos 300 km de pistas de fondo mantenidas a través de un parque nacional.',
      longStayAngle:
        'Lógica de larga estancia: la red de esquí de fondo es el reclamo. Los alquileres de cabañas van por semana de finales de noviembre a principios de mayo. La mejor opción de larga estancia para esquiadores que no necesitan descenso con remontes a diario.',
    },
  ],
  allCategoriesSummary: [
    { slug: 'long-stays', description: 'Alquileres por semana y por mes, villas, cabañas de diseño, apartamentos de esquí.' },
    { slug: 'hotels', description: 'Hoteles boutique, de diseño y clásicos laponeses para estancias cortas.' },
    { slug: 'glass-igloos', description: 'La forma icónica de Laponia, cuatro resorts que merecen el nombre.' },
    { slug: 'wilderness', description: 'Más allá de la última carretera, dos retiros para viajeros serios.' },
  ],
};
