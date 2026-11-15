/**
 * Saksa (de) · town-kemi-tornio. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/kemi-tornio.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'kemi', 'itatuuli', 'keminmaa', 'keminmaaVuokra', 'tornio', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Mieten in Kemi, Tornio und Keminmaa: kommunale Wohnungen',
  metaDescription:
    'Mieten in Kemi, Tornio und Keminmaa an Lapplands Küste: kommunale Gesellschaften wie Itätuuli und Tornion Krunni, private Agenturen und Wohngeld von Kela.',
  breadcrumb: 'Kemi und Tornio',
  hero: {
    eyebrow: 'Die Küste von Meri-Lappi (Meereslappland)',
    title: 'Mietwohnungen in Kemi, Tornio und Keminmaa.',
    subtitle:
      'Die Zwillingsstädte an der Küste, in denen die kommunalen Wohnungsgesellschaften Hunderte Wohnungen halten und Bewerbungen online eingereicht werden. Wo Sie anfangen und was Miete kostet.',
  },
  authorNote:
    'Wohnungszahlen der Wohnungsgesellschaften von den eigenen Seiten der Gemeinden Kemi, Tornio und Keminmaa, Bewerbungsbedingungen von den eigenen Seiten der Gesellschaften, Mieten pro m² von Statistik Finnland (Region Lappland 2026Q3). Geprüft am 15. November 2026.',
  intro: [
    'Kemi hat 19.339 Einwohner, Tornio 20.823 und Keminmaa 7.576 (Statistik Finnland, 31. Dezember 2025). Die drei Gemeinden grenzen aneinander, die Wohnung kann also in einer anderen Gemeinde liegen als der Arbeitsplatz.',
    'Die kommunalen Wohnungsgesellschaften sind die erste Adresse: Die kommunalen Wohnungen in Kemi betreibt Kiinteistö Oy Itätuuli (kemi.fi), der größte Anbieter von Mietwohnungen der Stadt, mit Wohnungen im Umkreis von fünf Kilometern um das Zentrum (itatuuli.fi). Keminmaan Vuokra-asunnot Oy hat 18 Objekte mit gut 300 Wohnungen (keminmaa.fi). Jede Gesellschaft hat ihre eigene Online-Bewerbung. In Tornio verwaltet Tornion Krunni Oy die städtischen Wohnungen, zu der auch Tornion Vuokra-asunnot Oy gehört (tornio.fi).',
    'In der aktuellen Mietentabelle von Statistik Finnland gibt es keine eigene Zeile für Kemi oder Tornio, deshalb steht unten der Wert für die Region Lappland. Die Zahlen für Rovaniemi stehen auf der eigenen Seite.',
  ],
  sections: [
    {
      id: 'prices',
      kicker: 'Was Miete kostet',
      h2: 'Mieten in der Region Lappland pro m², Juli–September 2026.',
      table: {
        caption: 'Durchschnittsmiete in €/m²/Monat, frei finanzierte Mietwohnungen, 2026Q3',
        head: ['', 'Lappland (Region)', 'Rovaniemi', 'Ganz Finnland'],
        rows: [
          ['Studios', '17,25', '18,63', '20,49'],
          ['Zweizimmerwohnungen', '12,87', '14,40', '15,07'],
          ['Drei Zimmer und mehr', '11,08', '12,29', '13,98'],
          ['Alle Wohnungen', '13,14', '14,63', '15,99'],
        ],
        foot: 'Statistik Finnland, Mieten 2026Q3, Tabelle 15fa. Der regionale Wert schließt Rovaniemi ein, das Niveau in Kemi–Tornio liegt also wahrscheinlich darunter. Die aktuelle Tabelle zeigt es nicht gesondert.',
      },
      paras: [
        '<strong>Beispiele zum regionalen Durchschnitt:</strong> ein Studio von 30 m² etwa 520 € im Monat (17,25 × 30), eine Zweizimmerwohnung von 50 m² etwa 640 € (12,87 × 50), eine Dreizimmerwohnung von 75 m² etwa 830 € (11,08 × 75).',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Wohngeld von Kela',
      h2: 'Kemi, Tornio und Keminmaa gehören zu Kelas „übrigen Gemeinden“.',
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
      id: 'channels',
      kicker: 'Bei wem Sie sich bewerben',
      h2: 'Zuerst die kommunale Gesellschaft, dann die Agenturen.',
      band: true,
      cards: [
        {
          title: 'Kemi: Kiinteistö Oy Itätuuli',
          body: 'Die städtischen Mietwohnungen. Itätuuli ist Kemis größter Anbieter von Mietwohnungen, und die Wohnungen liegen im Umkreis von fünf Kilometern um das Zentrum. Die eigene Online-Bewerbung ist vier Monate gültig, und es wird keine Kaution erhoben. Die Unternehmensinfo-Seite von Visit Kemi führt auch die privaten Agenturen auf: Forenom, Habita Kemi, HVC Group, Kiinteistömaailma, KVP Group, OP Koti Kemi, Pihlajaniemi & Co, Solecco und AJK Asunnot.',
          href: 'https://www.kemi.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
          linkLabel: 'kemi.fi: Mietwohnungen',
          event: 'kemi_city',
        },
        {
          title: 'Keminmaa: Keminmaan Vuokra-asunnot Oy',
          body: 'Die Wohnungsgesellschaft im Besitz der Gemeinde: 18 Objekte mit gut 300 Wohnungen, Wasser und Heizung sind in der Miete enthalten. Die eigene Online-Bewerbung ist drei Monate gültig, und die Kaution beträgt eine Monatsmiete.',
          href: 'https://www.keminmaanvuokra-asunnot.fi/asunnonhaku.html',
          linkLabel: 'Keminmaan Vuokra-asunnot: So bewerben Sie sich',
          event: 'keminmaa',
        },
        {
          title: 'Tornio: Wohnungsgesellschaft Tornion Krunni Oy',
          body: 'Verwaltet Tornion Vuokra-asunnot Oy, Tornion Oppilasasuntola Oy und Tornion Palveluasunnot Oy. Die Liegenschaftseinheit der Stadt betreut außerdem Wohnungen, die der Stadt direkt gehören. Wohnungsanfragen telefonisch, und die Seite der Stadt verweist auch auf private Vermieter und Agenturen.',
          href: 'https://www.tornio.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
          linkLabel: 'tornio.fi: Mietwohnungen',
          event: 'tornio_city',
        },
        {
          title: 'Oikotie und Vuokraovi',
          body: 'Private und Agentur-Inserate. Suchen Sie Kemi, Tornio und Keminmaa als getrennte Gemeinden: Es sind drei getrennte kommunale Suchen.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kemi',
          linkLabel: 'Oikotie: Mietwohnungen in Kemi',
          event: 'oikotie',
        },
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
      q: 'Wie bewerbe ich mich um eine kommunale Wohnung in Kemi?',
      a: 'Mit der eigenen Online-Bewerbung von Kiinteistö Oy Itätuuli, die vier Monate gültig ist. Itätuuli ist Kemis größter Anbieter von Mietwohnungen mit Wohnungen im Umkreis von fünf Kilometern um das Zentrum und vermietet alle ohne Kaution (itatuuli.fi). Keminmaan Vuokra-asunnot Oy hat eine eigene Bewerbung.',
    },
    {
      q: 'Was kostet die Miete in Kemi und Tornio?',
      a: 'Die aktuelle Tabelle von Statistik Finnland hat keine eigene Zeile für die Städte. Der Durchschnitt der Region Lappland lag im Juli–September 2026 bei 13,14 € pro m² (Studios 17,25, Zweizimmerwohnungen 12,87), und dieser Wert schließt das teurere Rovaniemi ein.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Die ersten Wochen',
    h2: 'Besichtigungen vor Ort.',
    lead: 'Buchen Sie eine Unterkunft für die Besichtigungen und sehen Sie sich die Wohnung an, bevor Sie unterschreiben.',
    chips: [
      { label: 'Kemi', destination: 'Kemi', sid: 'rentals_kemi_first_weeks' },
      { label: 'Tornio', destination: 'Tornio', sid: 'rentals_tornio_first_weeks' },
    ],
  },
  sources: pickSources('de', SOURCES, common.sourceLabels),
};

export default copy;
