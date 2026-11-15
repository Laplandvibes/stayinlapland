/**
 * Espanja (es) · milloin-sivu (/when-to-go). Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/whentogo.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import { whenToGoSources, type WhenToGoCopy } from '../../whentogo';
import common from './common';

const copy: WhenToGoCopy = {
  metaTitle: 'Mejor época para viajar a Laponia: guía mes a mes',
  metaDescription:
    'Cuándo ir a la Laponia finlandesa, mes a mes: temperaturas, luz, nieve, auroras, sol de medianoche, colores del otoño y mosquitos, con cifras oficiales.',
  breadcrumb: 'Cuándo ir',
  hero: {
    eyebrow: 'De enero a diciembre',
    title: 'Laponia, mes a mes.',
    subtitle:
      'Cómo es cada mes en cuanto a tiempo, luz y nieve, qué hace la gente entonces y qué significa si vive aquí. Cifras del Instituto Meteorológico Finlandés y de Statistics Finland.',
  },
  intro: [
    'El año de Laponia son dos mundos distintos. De noviembre a abril hay nieve, helada y días cortos; de mayo a septiembre hay luz, que en el extremo norte no se pone en absoluto. Entre ambos llegan dos fases breves que los lugareños conocen bien: el deshielo primaveral y los colores del otoño, la ruska.',
    'A continuación está primero el año entero en una tabla y después mes a mes. Las cifras son medias a largo plazo: un año concreto puede diferir claramente y, según Metsähallitus, la nieve permanente llega ahora a menudo más tarde que la media estadística.',
  ],
  tableKicker: 'El año entero',
  tableH2: 'El año de Laponia en cifras.',
  table: {
    caption: 'Duración del día en Rovaniemi el día 15, temperatura media en Rovaniemi y Sodankylä, espesor de la nieve en Rovaniemi el día 15',
    head: ['Mes', 'Duración del día', 'Temperatura media (Rovaniemi / Sodankylä)', 'Nieve (Rovaniemi)', 'Qué ocurre'],
    rows: [
      ['Enero', '4 h 15 min', '−10,3 / −12,5 °C', '47 cm', 'El mes más frío'],
      ['Febrero', '8 h 10 min', '−10,3 / −12,1 °C', '66 cm', 'Vacaciones de invierno'],
      ['Marzo', '11 h 37 min', '−5,6 / −7,1 °C', '77 cm', 'Auroras, la nieve más profunda'],
      ['Abril', '15 h 25 min', '0,1 / −0,8 °C', '64 cm', 'Nieve con costra'],
      ['Mayo', '19 h 24 min', '6,5 / 5,6 °C', '–', 'La nieve se derrite, el deshielo'],
      ['Junio', '24 h (sin puesta de sol)', '12,5 / 11,9 °C', '–', 'Sol de medianoche'],
      ['Julio', '21 h 29 min', '15,6 / 15,0 °C', '–', 'El mes más cálido, mosquitos'],
      ['Agosto', '17 h 02 min', '13,1 / 12,4 °C', '–', 'Vuelven las noches oscuras'],
      ['Septiembre', '13 h 13 min', '7,7 / 7,0 °C', '–', 'Colores del otoño'],
      ['Octubre', '9 h 37 min', '0,8 / 0,0 °C', '–', 'Nieve en los fjälls'],
      ['Noviembre', '5 h 45 min', '−4,4 / −5,8 °C', '9 cm', 'Noche polar en el extremo norte'],
      ['Diciembre', '2 h 27 min', '−7,7 / −9,6 °C', '28 cm', 'El día más corto, 2 h 14 min'],
    ],
    foot: 'Temperaturas y nieve: Instituto Meteorológico Finlandés, periodo de referencia 1991–2020; el espesor de la nieve es la mediana. Duración del día: timeanddate.com para 2027 (fuente secundaria; los años difieren en torno a un día). En junio el sol no se pone en Rovaniemi del 7 de junio al 6 de julio.',
  },
  months: [
    {
      name: 'Enero',
      pitch: 'El mes más frío, vuelve la luz',
      body: 'Enero es el mes más frío en Sodankylä y Utsjoki, con una media de −12,5 y −13,3 °C; Rovaniemi tiene una media de −10,3. En Rovaniemi el día crece durante el mes de 2 h 44 min a más de seis horas, y en Utsjoki el sol vuelve a salir tras la noche polar el 17 de enero. La nieve tiene de media alrededor de medio metro de espesor.',
      good: ['Esquí y deportes de nieve sobre nieve asentada', 'Arctic Lapland Rally en Rovaniemi, 28–30 de enero de 2027'],
      note: ['Renos en las carreteras: de noviembre a enero es la época de mayor número de colisiones con renos', 'Los hoteles de Rovaniemi seguían ocupados al 86 % en enero de 2025'],
    },
    {
      name: 'Febrero',
      pitch: 'Nieve y vacaciones de invierno',
      body: 'Junto con diciembre, febrero es el mes más lleno del año: la ocupación de Laponia fue del 77,6 % en febrero de 2025, pero el precio medio de la habitación se mantuvo por debajo del de diciembre. La nieve en Rovaniemi tiene de media 66 cm el 15 de febrero, y el día ya dura ocho horas.',
      good: ['Auroras de finales del invierno: el Instituto Meteorológico Finlandés considera estadísticamente mejores el final del invierno y el principio del otoño', 'Esquí y excursiones largas de un día'],
      note: ['Reserve con antelación: febrero es uno de los meses más llenos', 'Los colegios de la región de Helsinki y de Turku tienen sus vacaciones de esquí en la semana 8 (22–26 de febrero de 2027)'],
    },
    {
      name: 'Marzo',
      pitch: 'Auroras y la nieve más profunda',
      body: 'El Instituto Meteorológico Finlandés recomienda marzo para observar auroras, porque la primavera es de media menos nubosa. La nieve está en su máximo espesor, 77 cm de media en Rovaniemi, y el día crece por encima de las 13 horas. Sodankylä tiene 141 horas de sol en marzo frente a 59 en febrero.',
      good: ['Auroras', 'Esquí con tiempo soleado', 'Semana Santa, 26–29 de marzo de 2027'],
      note: ['Los colegios de Rovaniemi tienen sus vacaciones de esquí en la semana 10 (8–12 de marzo de 2027), y la Semana Santa trae viajeros finlandeses', 'Los neumáticos de invierno son obligatorios hasta el 31 de marzo siempre que las condiciones lo requieran'],
    },
    {
      name: 'Abril',
      pitch: 'Nieve con costra y tardes largas',
      body: 'Aún hay mucha nieve, 64 cm de media en Rovaniemi el 15 de abril, y según Metsähallitus las condiciones de nieve con costra duran desde mediados de abril hasta mediados de mayo. Todavía pueden verse auroras a principios de mes: las noches en Rovaniemi son oscuras hasta alrededor del 21 de abril, y en Utsjoki hasta alrededor del 10 de abril. El precio medio de la habitación en Laponia fue de 139–141 € en abril frente a 200–225 € en marzo (2024–2025).',
      good: ['Esquí sobre la costra y excursiones a los fjälls', 'Sol primaveral: el 20 de abril el día en Rovaniemi dura más de 16 horas'],
      note: ['Algunas estaciones de esquí cierran en abril: la temporada de Ounasvaara termina el 17 de abril de 2027, mientras que Ylläs espera cerrar a principios de mayo', 'Terminan los empleos de temporada: en Saariselkä los últimos días laborables del invierno son a mediados de abril (Yle)'],
    },
    {
      name: 'Mayo',
      pitch: 'La nieve se derrite, el mes más tranquilo',
      body: 'La nieve permanente suele derretirse alrededor de Rovaniemi entre el 30 de abril y el 10 de mayo, y en la Laponia de los fjälls entre el 10 y el 20 de mayo. El terreno está en pleno deshielo: demasiado húmedo para esquiar y demasiado nevado para caminar. Mayo es el mes más tranquilo del turismo, con unas 65 000 pernoctaciones frente a 430 000–620 000 en los meses de invierno, y muchos negocios hacen una pausa. En el extremo norte el sol de medianoche ya empieza: en Nuorgam, el 16 de mayo.',
      good: ['Buscar apartamento en Rovaniemi: según DAS, en primavera y a principios del verano es cuando más viviendas quedan libres en relación con los solicitantes', 'Paisajes tranquilos y luz primaveral'],
      note: ['Muchos servicios turísticos están cerrados o abren con horario reducido', 'La crecida primaveral varía desde mediados de mayo hasta mediados de junio'],
    },
    {
      name: 'Junio',
      pitch: 'El sol de medianoche',
      body: 'El sol no se pone en Rovaniemi del 7 de junio al 6 de julio, en Sodankylä del 31 de mayo al 13 de julio y en Utsjoki del 18 de mayo al 27 de julio. La temperatura media en Rovaniemi es de 12,5 °C. La temporada de senderismo empieza cuando la nieve abandona los fjälls; en Kilpisjärvi todavía puede haber nieve en junio.',
      good: ['Midnight Sun Film Festival en Sodankylä, 16–20 de junio de 2027', 'Juhannus (la fiesta del solsticio de verano), 25–26 de junio de 2027'],
      note: ['La temporada de mosquitos, la räkkä, suele empezar hacia el Juhannus', 'Cortinas opacas para el dormitorio: una noche luminosa es preciosa, pero no para dormir'],
    },
    {
      name: 'Julio',
      pitch: 'El mes más cálido, el favorito de los finlandeses',
      body: 'Julio es el mes más cálido del año: 15,6 °C de media en Rovaniemi, con máximas diarias en torno a 20. Es también el mes más popular de Laponia entre los viajeros finlandeses, y de junio a agosto son los meses más baratos: la habitación media de los establecimientos de alojamiento de Laponia costó unos 96–102 € (2024–2025). Las moras árticas maduran de mediados de julio a principios de agosto.',
      good: ['Senderismo y excursiones por la naturaleza', 'Recolección de bayas: moras árticas desde mediados de julio, arándanos desde finales de julio'],
      note: ['Los mosquitos están en su peor momento y duran hasta principios o mediados de agosto', 'Julio es también el mes más lluvioso, con 81 mm en Rovaniemi'],
    },
    {
      name: 'Agosto',
      pitch: 'Vuelven las noches oscuras',
      body: 'Las noches vuelven a oscurecer en Rovaniemi hacia el 24 de agosto y, según Visit Finland, las auroras son visibles en Laponia desde finales de agosto hasta abril. La primera nieve suele caer en las cumbres de los fjälls en agosto o septiembre. En Rovaniemi las clases empiezan a mediados de agosto (el 12 de agosto en 2026) y la búsqueda de vivienda de los estudiantes alcanza su máximo.',
      good: ['Continúa la temporada de arándanos y senderismo', 'Simerock en Rovaniemi, 13–14 de agosto de 2027'],
      note: ['En Rovaniemi, DAS tiene más solicitantes en agosto y septiembre, y los apartamentos que quedan libres se alquilan enseguida', 'La contratación para la temporada de invierno se acelera desde agosto (Yle)'],
    },
    {
      name: 'Septiembre',
      pitch: 'Colores del otoño y auroras otoñales',
      body: 'La ruska, los colores del otoño, llega al norte de Finlandia en la primera mitad de septiembre: semanas 36–38 en Kilpisjärvi, Pallas-Ylläs y Utsjoki, semanas 37–39 en el Parque Nacional Urho Kekkonen. En torno al equinoccio de otoño las tormentas magnéticas son de media más frecuentes, y a la latitud de Sodankylä las auroras aparecen de media una de cada dos noches despejadas y oscuras. Septiembre es el segundo pico de los viajeros finlandeses.',
      good: ['Excursiones para ver los colores del otoño', 'Auroras antes del invierno', 'Arándanos rojos desde principios de septiembre'],
      note: ['Ya puede nevar en los fjälls en septiembre', 'Las semanas de la ruska llenan las estaciones de montaña de viajeros finlandeses'],
    },
    {
      name: 'Octubre',
      pitch: 'La nieve llega a los fjälls',
      body: 'En el periodo de referencia 1991–2020 del Instituto Meteorológico Finlandés, la nieve permanente empezó en la Laponia de los fjälls entre el 17 y el 27 de octubre y en Sodankylä el 29 de octubre. Según Metsähallitus, ahora a menudo se forma solo a finales de noviembre, a veces en diciembre. En el otoño de 2026 las pistas de Levi abrieron ya a principios de octubre. Octubre es el segundo mes más tranquilo para el alojamiento, después de mayo.',
      good: ['Auroras otoñales antes de la nieve', 'Festival de música folclórica Jutajaiset en Rovaniemi, en octubre'],
      note: ['En Rovaniemi muchos contratos de duración determinada terminan a finales de octubre porque los apartamentos se alquilan a turistas para el invierno (Yle, 27 de julio de 2026)', 'En 2026 las vacaciones escolares de otoño fueron en la semana 42 (12–16 de octubre), por ejemplo en Rovaniemi y Helsinki'],
    },
    {
      name: 'Noviembre',
      pitch: 'Empieza la noche polar en el extremo norte',
      body: 'En Utsjoki la noche polar empieza el 26 de noviembre y dura 51 días de media. En Rovaniemi el sol sale todos los días, pero el 15 de noviembre el día dura algo menos de seis horas. Abren las estaciones de esquí: en la temporada 2026–2027, Ounasvaara el 11 de noviembre, Ylläs el 21 de noviembre, mientras que Luosto prevé abrir el 28 de noviembre.',
      good: ['Los eslálones de la Copa del Mundo de Levi a mediados de noviembre', 'Invierno antes de los precios de Navidad: una habitación en los establecimientos de alojamiento de Laponia costó de media 192–209 € en noviembre y 285–313 € en diciembre (2024–2025)'],
      note: ['Rovaniemi no está tranquila en noviembre: ocupación hotelera del 72–82 % (2023–2025)', 'Neumáticos de invierno desde el 1 de noviembre siempre que las condiciones lo requieran. El Arctic SnowHotel abre solo en diciembre'],
    },
    {
      name: 'Diciembre',
      pitch: 'Navidad, el mes de mayor afluencia',
      body: 'Diciembre es el mes turístico de mayor afluencia y más caro de Laponia: 622 449 pernoctaciones y un precio medio de la habitación de 313 € en diciembre de 2025. El día más corto de Rovaniemi dura 2 h 14 min, pero el sol sí sale; la noche polar dura solo cuatro días en Sodankylä, justo antes de Navidad, y del 14 al 29 de diciembre en Kittilä. Sodankylä ha tenido nieve en el suelo todas las Nochebuenas desde que hay registros.',
      good: ['Navidad: el Pueblo de Papá Noel (Santa Claus Village) está abierto todos los días', 'Hoteles de nieve: el Arctic SnowHotel abre el 15 de diciembre de 2026'],
      note: ['Reserve con mucha antelación: los hoteles de Rovaniemi estuvieron ocupados al 93,5–97 % en diciembre (2023–2025)', 'El final del otoño y el principio del invierno son la época más nublada del año según el Instituto Meteorológico Finlandés, lo que dificulta ver auroras'],
    },
  ],
  goodLabel: 'Ideal para',
  noteLabel: 'Tenga en cuenta',
  monthsNav: 'Meses',
  living: {
    kicker: 'Si vive aquí',
    h2: 'Qué significa el año para vivir aquí.',
    items: [
      '<strong>Un apartamento de alquiler en Rovaniemi:</strong> según DAS, en primavera y a principios del verano es cuando más viviendas quedan libres en relación con los solicitantes, y agosto y septiembre son los meses con más solicitantes. Los contratos de duración determinada terminan a finales de octubre porque los apartamentos se alquilan a turistas para el invierno (Yle, 27 de julio de 2026).',
      '<strong>Trabajo de temporada:</strong> la contratación de invierno se acelera desde agosto (Yle), y las estaciones de esquí abren en octubre o noviembre y cierran en abril o mayo, según la estación.',
      '<strong>Conducción:</strong> los neumáticos de invierno son obligatorios del 1 de noviembre al 31 de marzo siempre que las condiciones lo requieran, y pueden usarse clavos en otras épocas si las condiciones lo exigen (Traficom). Las colisiones con renos alcanzan su máximo de noviembre a enero (Asociación de Pastores de Renos).',
      '<strong>Luz:</strong> cortinas opacas y mosquitera en verano; lámpara de fototerapia y reflectante en invierno. En Rovaniemi la noche polar es solo un nombre: el sol sale todos los días.',
    ],
  },
  links: [
    { label: 'Alquiler localidad por localidad', href: '/rentals' },
    { label: 'Mudarse a Laponia', href: '/moving-to-lapland' },
    { label: 'Vivienda para trabajadores de temporada', href: '/seasonal-worker-housing' },
    { label: 'Un mes en Laponia', href: '/long-stays' },
  ],
  faqKicker: 'Lo más preguntado',
  faqH2: 'Preguntas sobre el año de Laponia.',
  faqs: [
    {
      q: '¿Cuándo se pueden ver las auroras boreales en Laponia?',
      a: 'Siempre que las noches son oscuras, desde finales de agosto hasta abril. Según el Instituto Meteorológico Finlandés, las tormentas magnéticas son de media más frecuentes en otoño y primavera que en verano e invierno, y recomienda marzo porque la primavera es de media menos nubosa. A la latitud de Sodankylä las auroras aparecen de media una de cada dos noches despejadas y oscuras.',
    },
    {
      q: '¿Hay noche polar en Rovaniemi?',
      a: 'No. En Rovaniemi el sol sale todos los días, y el día más corto dura 2 h 14 min. La noche polar dura cuatro días en Sodankylä, 16 días en Kittilä, unas cinco semanas en Ivalo y 51 días de media en Utsjoki.',
    },
    {
      q: '¿Cuándo hay nieve en Laponia?',
      a: 'En el periodo de referencia 1991–2020, la nieve permanente empezó a finales de octubre en la Laponia de los fjälls y a principios de noviembre alrededor de Rovaniemi, pero según Metsähallitus ahora a menudo se forma solo a finales de noviembre. La nieve es más profunda en marzo y a principios de abril, y suele derretirse alrededor de Rovaniemi entre el 30 de abril y el 10 de mayo.',
    },
    {
      q: '¿Cuándo es la temporada de mosquitos en Laponia?',
      a: 'Según Metsähallitus, la temporada de mosquitos, la räkkä, suele empezar hacia el Juhannus, la fiesta del solsticio de verano, y dura hasta principios o mediados de agosto.',
    },
  ],
  authorNote:
    'Temperaturas, nieve y auroras del Instituto Meteorológico Finlandés; calendario de la naturaleza de Metsähallitus; cifras turísticas mensuales de Statistics Finland; vacaciones de la Agencia Nacional Finlandesa de Educación; eventos de sus organizadores. Comprobado el 15 de noviembre de 2026.',
  sources: whenToGoSources(common.whenToGoSourceLabels),
};

export default copy;
