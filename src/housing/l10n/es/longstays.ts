/**
 * Espanja (es) · longstays. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/longstays.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['ahvl531', 'kuluttajaliittoVuokra', 'rakli', 'dvvTilapainen', 'dvv'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Un mes o un invierno en Laponia: dónde alojarse',
  metaDescription:
    'Pasar un mes o un invierno en la Laponia finlandesa: un apartamento de alquiler amueblado, una cabaña por semanas o el alojamiento del empleador.',
  breadcrumb: 'Estancias largas',
  hero: {
    eyebrow: 'De un mes a un invierno',
    title: 'Un mes en Laponia.',
    subtitle:
      'Un apartamento de alquiler amueblado, una cabaña por semanas o la vivienda de su empleador: tres formas de vivir en Laponia desde un mes hasta un invierno entero, y qué le exige cada contrato.',
  },
  authorNote:
    'Legislación de Finlex (Ley de arrendamientos de vivienda 481/1995, modificación 531/2026), notificación de domicilio de la Agencia de Servicios de Datos Digitales y de Población, datos de las cabañas del catálogo de productos de Lomarengas. Comprobado el 15 de noviembre de 2026.',
  intro: [
    'Un mes de teletrabajo en Levi, un invierno en Rovaniemi o una temporada en una estación de esquí: una estancia larga en Laponia suele reducirse a una de tres opciones. Se diferencian en el precio, pero más aún en el tipo de contrato que acaba firmando y en lo que la ley protege entonces.',
    'Si viene de vacaciones y no a vivir, los hoteles y las cabañas están en nuestro sitio hermano <a href="https://laplandstays.com/" target="_blank" rel="noopener">laplandstays.com</a> y las villas en <a href="https://laplandluxuryvillas.com/" target="_blank" rel="noopener">laplandluxuryvillas.com</a>.',
  ],
  sections: [
    {
      id: 'three-ways',
      kicker: 'Tres formas',
      h2: 'Un apartamento, una cabaña o alojamiento laboral.',
      cards: [
        {
          title: 'Apartamento de alquiler amueblado',
          body: 'Un <strong>contrato de arrendamiento de vivienda</strong>, para una estancia larga normalmente de duración determinada. La ley de arrendamientos le protege: la fianza es como máximo de tres meses de alquiler y, desde el 1 de octubre de 2026, debe devolverse en un plazo de 14 días.',
          href: '/rentals',
          linkLabel: 'Alquiler localidad por localidad',
        },
        {
          title: 'Cabaña por semanas',
          body: 'Las cabañas vacacionales se alquilan por semanas a través de una agencia, y las condiciones suelen ser las de reserva y cancelación de la agencia. La ley de arrendamientos cubre una vivienda alquilada para residir en ella, no la actividad de las empresas de alojamiento. Más abajo, las cabañas disponibles con fotos.',
        },
        {
          title: 'Alojamiento laboral',
          body: 'En el trabajo de temporada la vivienda suele ir con el empleo. Antes de firmar, pregunte si el apartamento forma parte del contrato de trabajo y qué pasa con él si el empleo termina a mitad de temporada.',
          href: '/seasonal-worker-housing',
          linkLabel: 'Vivienda para trabajadores de temporada',
        },
      ],
    },
    {
      id: 'contract',
      kicker: 'El contrato',
      h2: 'Un contrato de duración determinada no se puede terminar antes de tiempo.',
      bullets: [
        '<strong>Un contrato de duración determinada dura hasta la fecha que figura en él.</strong> El inquilino no puede dar preaviso durante ese plazo. Solo puede terminar antes por acuerdo con el arrendador o en las situaciones concretas que establece la ley (Unión de Consumidores de Finlandia, ley de arrendamientos).',
        '<strong>Si no sabe cuánto tiempo se quedará,</strong> pida un contrato de duración indefinida. El inquilino puede rescindirlo con preaviso, y el plazo de preaviso del inquilino no cambia con la reforma del 1 de octubre de 2026 (Rakli).',
        '<strong>Contratos cortos seguidos:</strong> si al mismo inquilino se le hacen más de dos contratos de duración determinada seguidos de tres meses o menos, el contrato se considera de duración indefinida, sea cual sea la fecha de fin que lleve.',
        '<strong>La ley de arrendamientos no lo cubre todo.</strong> Se aplica a una vivienda alquilada para residir en ella, pero no a la actividad de las empresas de alojamiento (Ley de arrendamientos de vivienda, artículos 1 y 2). Antes de firmar, pregunte si le ofrecen un contrato de arrendamiento de vivienda o un contrato de alojamiento.',
        '<strong>La fianza</strong> es como máximo de tres meses de alquiler. Desde el 1 de octubre de 2026 debe devolverse, o notificarse su retención, en un plazo de 14 días desde el fin del contrato.',
      ],
    },
    {
      id: 'address',
      kicker: 'Notificación de domicilio',
      h2: 'Tres meses o más: notifique su domicilio.',
      paras: [
        'Según la Agencia de Servicios de Datos Digitales y de Población, hay que notificar una mudanza siempre que cambie su domicilio de residencia y la estancia dure al menos tres meses. Si vuelve al mismo domicilio permanente en el plazo de un año, la mudanza es temporal y su domicilio permanente sigue vigente.',
        'La notificación se hace como pronto un mes antes del día de la mudanza y como tarde una semana después. Para una mudanza permanente, el resto, como los neumáticos de invierno, el contrato de electricidad y su centro de salud, está en la <a href="/moving-to-lapland/">lista de comprobación de la mudanza</a>.',
      ],
    },
  ],
  faqs: [
    {
      q: '¿Puedo alquilar un apartamento en Laponia por un mes?',
      a: 'Sí. Un contrato de duración determinada también puede ser corto, y las cabañas vacacionales se alquilan por semanas. Busque en los portales de alquiler la palabra «kalustettu» (amueblado). Antes de firmar, pregunte si es un contrato de arrendamiento de vivienda o un alojamiento, porque la ley de arrendamientos solo protege el primero.',
    },
    {
      q: '¿Tengo que notificar mi domicilio si paso el invierno en Laponia?',
      a: 'Sí, si la estancia dura al menos tres meses. Si vuelve al mismo domicilio permanente en el plazo de un año, la mudanza es temporal y su domicilio permanente sigue vigente (Agencia de Servicios de Datos Digitales y de Población).',
    },
    {
      q: '¿Puedo terminar un contrato de duración determinada si se acaba mi empleo?',
      a: 'Normalmente no. Un contrato de duración determinada dura hasta la fecha que figura en él. Acuerde con el arrendador una terminación anticipada, o elija desde el principio un contrato de duración indefinida, que el inquilino puede rescindir con preaviso.',
    },
  ],
  sources: pickSources('es', SOURCES, common.sourceLabels),
};

export default copy;
