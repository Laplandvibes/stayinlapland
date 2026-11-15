/**
 * Saksa (de) · town-kemijarvi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
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
  metaTitle: 'Mieten in Kemijärvi: 560 städtische Wohnungen und Bewerbung',
  metaDescription:
    'Mieten in Kemijärvi: 560 städtische Mietwohnungen, Online-Bewerbung, Mieterhöhungen 2026, die Reihenhäuser von Vuostimo nahe Pyhä und Wohngeld von Kela.',
  breadcrumb: 'Kemijärvi',
  hero: {
    eyebrow: 'Kemijärvi, 6.919 Einwohner',
    title: 'Mietwohnungen in Kemijärvi.',
    subtitle:
      'Finnlands nördlichste Stadt, in der die Stadt 560 Mietwohnungen besitzt und manche davon leer stehen. Wo Sie sich bewerben und was Sie vor dem Umzug wissen sollten.',
  },
  authorNote:
    'Einwohnerzahl von Statistik Finnland, Wohnungszahlen und Bewerbung von den Seiten der Stadt Kemijärvi, Mieterhöhungen und Belegungsziele aus dem Haushalt der Stadt für 2026. Geprüft am 15. November 2026.',
  intro: [
    'Kemijärvi hatte Ende 2025 6.919 Einwohner, 35 weniger als ein Jahr zuvor (Statistik Finnland). Die Stadt nennt sich selbst Finnlands nördlichste Stadt und sagt, die Dienste im Zentrum seien zu Fuß erreichbar (kemijarvi.fi).',
    'Die beiden Immobiliengesellschaften der Stadt, Kemijärven Vuokratalot und Kemijärven Töveli, besitzen 560 Mietwohnungen (kemijarvi.fi). Der Haushalt der Stadt sieht es als realistisches Ziel an, 80–85 Prozent dieser Wohnungen zu vermieten, es gibt also tatsächlich leere Wohnungen.',
    'Die Mieten steigen: Kemijärven Vuokratalot erhöhte seine Mieten am 1. Februar 2026 um 4,5 Prozent und Töveli am 1. Juli 2026 um 5 Prozent. Dieselben Erhöhungen stehen im Plan für 2027 und 2028 (Haushalt 2026).',
  ],
  sections: [
    {
      id: 'channels',
      kicker: 'Bei wem Sie sich bewerben',
      h2: 'Zuerst die Gesellschaften der Stadt, dann die Portale.',
      band: true,
      cards: [
        {
          title: 'Die Mietwohnungen der Stadt',
          body: 'Die 560 Wohnungen der Stadt liegen im Zentrum, in Särkikangas, Sipovaara, Isokylä, Halosenranta und Vuostimo. Bewerben Sie sich online oder mit einem Papierformular bei Sortteeri (Vapaudenkatu 8). Eine Bewerbung ist vier Monate gültig und kann erneuert werden.',
          href: 'https://kemijarvi.fi/asuminen-ja-ymparisto/asuminen/kemijarven-kaupungin-vuokratalot/asunnon-hakeminen/',
          linkLabel: 'kemijarvi.fi: Bewerbung um eine Wohnung',
          event: 'kemijarvi_city',
        },
        {
          title: 'Vuostimo, 14 km von Pyhä',
          body: 'Reihenhäuser im Besitz der Stadt aus dem Jahr 1987 in Vuostimo, etwa 35 Kilometer nördlich des Zentrums. Das Skiresort Pyhätunturi ist 14 Kilometer entfernt, damit sind es die städtischen Mietwohnungen, die Pyhä am nächsten liegen.',
          href: 'https://kemijarvi.fi/asuminen-ja-ymparisto/asuminen/kemijarven-kaupungin-vuokratalot/vuokratalokohteet/vuostimo/',
          linkLabel: 'kemijarvi.fi: Vuostimo',
          event: 'kemijarvi_vuostimo',
        },
        {
          title: 'Oikotie und Vuokraovi',
          body: 'Private und Agentur-Inserate unter der Gemeinde Kemijärvi. Die Wohnungsseiten der Stadt führen keine privaten Vermieter auf, deren Wohnungen finden Sie also auf den Portalen.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kemij%C3%A4rvi',
          linkLabel: 'Oikotie: Mietwohnungen in Kemijärvi',
          event: 'oikotie',
        },
      ],
    },
    {
      id: 'prices',
      kicker: 'Was Miete kostet',
      h2: 'Die Gesellschaften der Stadt veröffentlichen ihre Mieten nicht.',
      table: {
        caption: 'Durchschnittsmiete in €/m²/Monat, frei finanzierte Mietwohnungen, 2026Q3',
        head: ['', 'Lappland (Region)', 'Ganz Finnland'],
        rows: [
          ['Studios', '17,25', '20,49'],
          ['Zweizimmerwohnungen', '12,87', '15,07'],
          ['Drei Zimmer und mehr', '11,08', '13,98'],
          ['Alle Wohnungen', '13,14', '15,99'],
        ],
        foot: 'Statistik Finnland, Mieten 2026Q3, Tabelle 15fa. Für Kemijärvi wird kein eigener Wert veröffentlicht, und der regionale Wert schließt das teurere Rovaniemi ein.',
      },
      paras: [
        '<strong>Kemijärvis eigener Wert stammt aus dem Jahr 2022.</strong> Im Postleitzahlgebiet 98100 im Stadtzentrum lagen frei finanzierte Studios im Januar–März 2022 im Durchschnitt bei 12,15 € pro m² und Zweizimmerwohnungen bei 9,10 € pro m². Jedes Quartal seither ist unterdrückt: Statistik Finnland veröffentlicht den Wert eines Postleitzahlgebiets nicht, wenn zu wenige Beobachtungen vorliegen (Tabelle 13eb).',
        'Die Mieten der städtischen Gesellschaften stehen nicht online. Fragen Sie die Wohnungssekretärin oder den Wohnungssekretär nach der Miete, bevor Sie ein Angebot annehmen, und denken Sie daran, dass die Mieten 2026 gestiegen sind: um 4,5 Prozent bei Vuokratalot und um 5 Prozent bei Töveli.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Wohngeld von Kela',
      h2: 'Kemijärvi gehört zu Kelas „übrigen Gemeinden“.',
      table: {
        caption: 'Höchstgrenze der Wohnkosten 2026, €/Monat, Kela-Gruppe „übrige Gemeinden“',
        head: ['Haushaltsgröße', 'Höchstgrenze der Wohnkosten'],
        rows: [
          ['1 Person', '394'],
          ['2 Personen', '574'],
          ['3 Personen', '734'],
          ['4 Personen', '875'],
          ['Jede weitere Person', '+129'],
        ],
        foot: 'Kela, allgemeines Wohngeld 2026. Das Wohngeld beträgt höchstens 70 % der anerkannten Wohnkosten. Ein Wohngeld unter 15 € wird nicht ausgezahlt.',
      },
    },
    {
      id: 'work',
      kicker: 'Arbeit und Verbindungen',
      h2: 'Klären Sie den Job vor dem Umzug.',
      bullets: [
        'Laut der Stadt sind ihre großen Arbeitgeber neben der Stadt selbst die Keitele Group, die Festivo Porkka Group und das Kontaktcenter von Kela, dazu Handels-, Dienstleistungs- und Tourismusbetriebe (Haushalt 2026).',
        'Die Arbeitslosen machten 2024 15,6 Prozent der Erwerbspersonen aus, gegenüber 11,7 Prozent in ganz Finnland (Statistik Finnland).',
        'Suomutunturi liegt 46 km vom Zentrum entfernt und Pyhätunturi 50 km (OpenStreetMap). Suomu liegt in Kemijärvi. Pyhä gehört zur Nachbargemeinde Pelkosenniemi.',
        'Der Flughafen Rovaniemi ist 80 km entfernt (OpenStreetMap), und laut der Stadt führt eine Direktverbindung per Bahn bis nach Helsinki (kemijarvi.fi).',
      ],
    },
    {
      id: 'contract',
      kicker: 'Der Vertrag',
      h2: 'Zwei Regelungen des Gesetzes, die Sie kennen sollten.',
      bullets: [
        'Die Kaution beträgt höchstens drei Monatsmieten (Wohnraummietgesetz, § 8).',
        'Ab dem 1. Oktober 2026 muss die Kaution binnen 14 Tagen nach Ende des Mietverhältnisses zurückgezahlt oder ihr Einbehalt schriftlich begründet werden (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Wie bewerbe ich mich um eine städtische Wohnung in Kemijärvi?',
      a: 'Mit der Online-Bewerbung auf der Seite der Stadt oder mit einem Papierformular bei Sortteeri (Vapaudenkatu 8). Die Bewerbung ist vier Monate gültig und kann um weitere vier Monate erneuert werden. Die Bonität wird geprüft, und die Bewerbung wird erst bearbeitet, wenn die Anlagen eingegangen sind. Die Sitzungen zur Mieterauswahl finden in der Regel jeden zweiten Mittwoch statt (kemijarvi.fi).',
    },
    {
      q: 'Gibt es in Kemijärvi freie Mietwohnungen?',
      a: 'Höchstwahrscheinlich. Der Haushalt der Stadt sieht es als realistisches Ziel an, 80–85 Prozent der Wohnungen der Gesellschaften zu vermieten (Haushalt 2026). Fragen Sie die Wohnungssekretärin oder den Wohnungssekretär, welche Wohnungen frei sind.',
    },
    {
      q: 'Was kostet eine Mietwohnung in Kemijärvi?',
      a: 'Ein aktueller Durchschnitt wird nicht veröffentlicht. Der jüngste Wert für das Postleitzahlgebiet im Stadtzentrum stammt von Anfang 2022: Studios 12,15 € pro m² und Zweizimmerwohnungen 9,10 € pro m². Der Durchschnitt Lapplands lag im Juli–September 2026 bei 13,14 € pro m², und er schließt das teurere Rovaniemi ein (Statistik Finnland).',
    },
    {
      q: 'Gibt es in Kemijärvi Studierendenwohnungen?',
      a: 'Das Bildungszentrum Lappland REDU hat in Kemijärvi ein Studierendenwohnheim. Für Studierende, die noch der Schulpflicht unterliegen, ist das Wohnen kostenlos, und freie Plätze werden zum ausgewiesenen Preis an andere Studierende vermietet (redu.fi).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Die ersten Nächte',
    h2: 'Besichtigungen vor Ort.',
    lead: 'Die Suche unseres Partners zeigt freie Zimmer und Apartments in Kemijärvi und in Pyhä zu den heutigen Preisen.',
    chips: [
      { label: 'Kemijärvi', destination: 'Kemijärvi', sid: 'rentals_kemijarvi_first_weeks' },
      { label: 'Pyhä', destination: 'Pyhä', sid: 'rentals_pyha_first_weeks' },
    ],
  },
  sources: pickSources('de', SOURCES, common.sourceLabels),
};

export default copy;
