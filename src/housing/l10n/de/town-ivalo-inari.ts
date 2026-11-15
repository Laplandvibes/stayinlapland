/**
 * Saksa (de) · town-ivalo-inari. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/ivalo-inari.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'inari', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Mieten in Ivalo und Inari: kommunale und private Vermieter',
  metaDescription:
    'Mieten in Ivalo, Inari und Saariselkä: über 500 kommunale Wohnungen (Inarin Vuokra-asunnot Oy), private Vermieter laut Gemeinde und Wohngeld von Kela.',
  breadcrumb: 'Ivalo und Inari',
  hero: {
    eyebrow: 'Gemeinde Inari, 7.244 Einwohner',
    title: 'Mietwohnungen in Ivalo und Inari.',
    subtitle:
      'Finnlands nördlichster Mietmarkt: eine kommunale Gesellschaft, ein paar private Vermieter und die Saison in Saariselkä. Wo Sie am besten anfangen.',
  },
  authorNote:
    'Inarin Vuokra-asunnot Oy und die privaten Vermieter von der eigenen Wohnungsseite der Gemeinde Inari, Einwohnerzahl von Statistik Finnland, Mieten pro m² von Statistik Finnland (Region Lappland 2026Q3). Geprüft am 15. November 2026.',
  intro: [
    'Die Gemeinde Inari hat 7.244 Einwohner (Statistik Finnland, 31. Dezember 2025), und laut der Gemeinde ist das Interesse am Wohnen dort gewachsen. Deshalb hat sie auf ihrer Seite eine Liste von Vermietern zusammengestellt (inari.fi).',
    'Die kommunale Gesellschaft Inarin Vuokra-asunnot Oy vermietet über 500 Wohnungen in Ivalo, Inari, Saariselkä, Nellim und Sevettijärvi, von Studios bis zu Familienwohnungen. Die privaten Vermieter auf der Liste der Gemeinde sind Bilto Oy, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg Oy und Uni Kodit (inari.fi).',
    'Statistik Finnland veröffentlicht keinen eigenen Mietwert für Inari, deshalb steht unten der Wert für die Region Lappland. Die Unterkunft für Saisonkräfte in Saariselkä hat eine eigene Seite.',
  ],
  sections: [
    {
      id: 'channels',
      kicker: 'Bei wem Sie sich bewerben',
      h2: 'Die kommunale Gesellschaft und die Liste der Gemeinde.',
      band: true,
      cards: [
        {
          title: 'Inarin Vuokra-asunnot Oy',
          body: 'Die kommunale Wohnungsgesellschaft: über 500 Wohnungen in Ivalo, Inari, Saariselkä, Nellim und Sevettijärvi, in bequemer Reichweite der Grundversorgung. Freie Wohnungen und Bewerbung auf der eigenen Seite der Gesellschaft.',
          href: 'https://inarinvuokra-asunnot.fi/',
          linkLabel: 'inarinvuokra-asunnot.fi',
          event: 'inari_company',
        },
        {
          title: 'Gemeinde Inari: private Vermieter',
          body: 'Die Wohnungsseite der Gemeinde führt Bilto Oy, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg Oy und Uni Kodit mit Kontaktdaten auf, dazu die Mietgruppe Sodankylä–Inari–Utsjoki auf Facebook. Weitere Informationen unter inari@inari.fi.',
          href: 'https://www.inari.fi/fi/palvelut/asuminen.html',
          linkLabel: 'inari.fi: Wohnen',
          event: 'inari_city',
        },
        {
          title: 'Oikotie und Vuokraovi',
          body: 'Private Inserate unter der Gemeinde Inari. Wohnungen in Ivalo und Saariselkä sind in derselben Suche. Es gibt nur wenige Inserate, richten Sie also einen Such-Alarm ein.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/inari',
          linkLabel: 'Oikotie: Mietwohnungen in Inari',
          event: 'oikotie',
        },
        {
          title: 'Für Saisonkräfte in Saariselkä',
          body: 'Arbeitgeber in Saariselkä bringen ihr Personal auch selbst unter, und die kommunale Gesellschaft hat Wohnungen in Saariselkä. Fragen Sie im Vorstellungsgespräch nach der Unterkunft. Mehr dazu auf der Seite für Saisonkräfte.',
          href: '/seasonal-worker-housing',
          linkLabel: 'Wohnen für Saisonkräfte',
          event: 'seasonal_page',
        },
      ],
    },
    {
      id: 'prices',
      kicker: 'Was Miete kostet',
      h2: 'Mieten in der Region Lappland pro m², Juli–September 2026.',
      table: {
        caption: 'Durchschnittsmiete in €/m²/Monat, frei finanzierte Mietwohnungen, 2026Q3',
        head: ['', 'Lappland (Region)', 'Ganz Finnland'],
        rows: [
          ['Studios', '17,25', '20,49'],
          ['Zweizimmerwohnungen', '12,87', '15,07'],
          ['Drei Zimmer und mehr', '11,08', '13,98'],
          ['Alle Wohnungen', '13,14', '15,99'],
        ],
        foot: 'Statistik Finnland, Mieten 2026Q3, Tabelle 15fa. Für Inari wird kein eigener Wert veröffentlicht.',
      },
    },
    {
      id: 'housing-allowance',
      kicker: 'Wohngeld von Kela',
      h2: 'Inari gehört zu Kelas „übrigen Gemeinden“.',
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
      id: 'contract',
      kicker: 'Der Vertrag',
      h2: 'Die Kaution und ihre Rückzahlung.',
      bullets: [
        'Die Kaution beträgt höchstens drei Monatsmieten (Wohnraummietgesetz, § 8).',
        'Ab dem 1. Oktober 2026 muss die Kaution binnen 14 Tagen nach Ende des Mietverhältnisses zurückgezahlt oder ihr Einbehalt schriftlich begründet werden (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Wo finde ich eine Mietwohnung in Ivalo?',
      a: 'Bei der kommunalen Gesellschaft Inarin Vuokra-asunnot Oy, die über 500 Wohnungen in Ivalo, Inari und Saariselkä hat, oder bei den privaten Vermietern, die die Gemeinde aufführt (Bilto, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg, Uni Kodit). Auf den Portalen gibt es nur wenige Inserate.',
    },
    {
      q: 'Gibt es Mietwohnungen in Saariselkä?',
      a: 'Die kommunale Gesellschaft hat auch Wohnungen in Saariselkä, und Arbeitgeber bringen Saisonpersonal selbst unter. Auf dem freien Markt sind Wohnungen in Saariselkä meist Ferienhäuser.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Die ersten Nächte',
    h2: 'Bevor Sie die Schlüssel haben.',
    lead: 'Die Suche unseres Partners zeigt freie Zimmer in Ivalo und Saariselkä zu den heutigen Preisen.',
    chips: [
      { label: 'Ivalo', destination: 'Ivalo', sid: 'rentals_ivalo_first_weeks' },
      { label: 'Saariselkä', destination: 'Saariselkä', sid: 'rentals_saariselka_first_weeks' },
    ],
  },
  sources: pickSources('de', SOURCES, common.sourceLabels),
};

export default copy;
