/**
 * Saksa (de) · town-kittila-levi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/kittila-levi.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'kittila', 'yle2023', 'yle2017', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Mieten in Kittilä und Levi: kommunale Wohnungen, Saisonmiete',
  metaDescription:
    'Mieten in Kittilä und Levi: die kommunale Kittilän Vuokratalot Oy, Saisonmieten für Ferienwohnungen, Personalunterkunft für Saisonkräfte und Wohngeld von Kela.',
  breadcrumb: 'Kittilä und Levi',
  hero: {
    eyebrow: 'Kittilä, 6.973 Einwohner',
    title: 'Mietwohnungen in Kittilä und Levi.',
    subtitle:
      'Eine der am schnellsten wachsenden Gemeinden Lapplands und ihr Skigebiet, wo dieselbe Wohnung im Sommer eine Monatsmiete und im Winter einen Wochenpreis kostet. Wo Sie sich bewerben und wann.',
  },
  authorNote:
    'Einwohnerzahl und Wachstum von Statistik Finnland, Kittilän Vuokratalot Oy von den eigenen Seiten der Gemeinde und der Gesellschaft, Saisonpreise in Levi von Yle, 25. Mai 2023. Geprüft am 15. November 2026.',
  intro: [
    'Kittilä hatte Ende 2025 6.973 Einwohner und wuchs binnen eines Jahres um 2,0 Prozent, die zweitschnellste Entwicklung unter den Gemeinden Lapplands: Nur Pelkosenniemi wuchs schneller, mit 2,4 Prozent (Statistik Finnland). Der Motor ist Levi: 2017 schätzte Levin Matkailu Oy, dass das Skigebiet für die Wintersaison gut 2.000 Saisonkräfte einstellen würde (Yle, 25. Oktober 2017).',
    'Levis Mietmarkt folgt der Saison: Eine Wohnung von 80 m² in einem Haus im Alpenstil nahe dem Zentrum kostete von Mai bis November 750 € im Monat, in der Hochsaison 2.000 € pro Woche und ganzjährig 1.650 € im Monat (Yle, 25. Mai 2023). Außerdem können Sie in einer Ferienwohnung womöglich keine amtliche Adresse anmelden.',
    'Eine dauerhafte Mietwohnung findet man eher im Dorf Kittilä als im Zentrum von Levi. Die Wohnungen der Gemeinde vermietet Kittilän Vuokratalot Oy, und Sie bewerben sich online über die Seite der Gesellschaft (kittila.fi, Kittilän Vuokratalot).',
  ],
  sections: [
    {
      id: 'channels',
      kicker: 'Bei wem Sie sich bewerben',
      h2: 'Die kommunale Gesellschaft, die Portale und die Levi-Gruppe.',
      band: true,
      cards: [
        {
          title: 'Kittilän Vuokratalot Oy',
          body: 'Vermietet die eigenen Mietwohnungen der Gemeinde. Das Büro liegt im Erdgeschoss des Gemeindehauses (Valtatie 15, 99100 Kittilä). Die Gesellschaft bearbeitet nur Online-Bewerbungen über ihre Website, denen die erforderlichen Anlagen beiliegen. Auf ihren Seiten steht nicht, wie lange eine Bewerbung gültig bleibt, fragen Sie also bei der Gesellschaft nach.',
          href: 'https://kittila.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot',
          linkLabel: 'kittila.fi: Mietwohnungen',
          event: 'kittila_city',
        },
        {
          title: 'Oikotie, Vuokraovi und TA-Asunnot',
          body: 'Private und Agentur-Inserate unter der Gemeinde Kittilä. Wohnungen in Levi sind in derselben Suche. TA-Asunnot hat in Kittilä eigene freie Mietwohnungen.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kittil%C3%A4',
          linkLabel: 'Oikotie: Mietwohnungen in Kittilä',
          event: 'oikotie',
        },
        {
          title: 'Personalunterkunft',
          body: 'Arbeitgeber im Skigebiet mieten Reihenhäuser und Ferienwohnungen für das Personal für die ganze Saison und ziehen die Miete vom Lohn ab. Klären Sie die Unterkunft schriftlich zusammen mit dem Jobangebot. Mehr dazu auf der Seite für Saisonkräfte.',
          href: '/seasonal-worker-housing',
          linkLabel: 'Wohnen für Saisonkräfte',
          event: 'seasonal_page',
        },
        {
          title: 'Die Levi-Wohnungsgruppe auf Facebook',
          body: 'Der schnellste Kanal im Fjäll-Dorf, und dort finden Saisonkräfte oft ihre Wohnung. Niemand bürgt dafür: Zahlen Sie nie eine Kaution vor einer Besichtigung und lassen Sie sich den Vertrag schriftlich geben.',
        },
      ],
    },
    {
      id: 'prices',
      kicker: 'Was Miete kostet',
      h2: 'Der regionale Wert und die Ausnahme Levi.',
      table: {
        caption: 'Durchschnittsmiete in €/m²/Monat, frei finanzierte Mietwohnungen, 2026Q3',
        head: ['', 'Lappland (Region)', 'Ganz Finnland'],
        rows: [
          ['Studios', '17,25', '20,49'],
          ['Zweizimmerwohnungen', '12,87', '15,07'],
          ['Drei Zimmer und mehr', '11,08', '13,98'],
          ['Alle Wohnungen', '13,14', '15,99'],
        ],
        foot: 'Statistik Finnland, Mieten 2026Q3, Tabelle 15fa. Für Kittilä wird kein eigener Wert veröffentlicht, und Levis Saisonmieten stehen gar nicht in der Statistik.',
      },
      paras: [
        '<strong>Das Beispiel Levi (Yle, 25. Mai 2023):</strong> eine Wohnung von 80 m² in einem Haus im Alpenstil zu 750 € im Monat von Mai bis November = 9,38 € pro m², 2.000 € pro Woche in der Hochsaison, 1.650 € im Monat ganzjährig = 20,63 € pro m². Dieselbe Wohnung ist im Sommer günstiger als der regionale Durchschnitt und ganzjährig teurer als der landesweite Preis für Studios.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Wohngeld von Kela',
      h2: 'Kittilä gehört zu Kelas „übrigen Gemeinden“.',
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
        foot: 'Kela, allgemeines Wohngeld 2026. Das Wohngeld beträgt höchstens 70 % der anerkannten Wohnkosten. In einer Ferienwohnung ohne gemeldete Adresse sind die Voraussetzungen nicht erfüllt.',
      },
    },
    {
      id: 'when',
      kicker: 'Wann Sie sich bewerben',
      h2: 'Im Sommer, bevor die Wochenpreise beginnen.',
      bullets: [
        'Monatsmieten für Ferienwohnungen gibt es nur von Mai bis November, und in der Hochsaison gilt ein Wochenpreis (Yle, 25. Mai 2023). Eine Wohnung für die Wintersaison suchen Sie also am besten schon im Sommer.',
        'Reichen Sie die Bewerbung bei der kommunalen Gesellschaft vor der Saison ein und fragen Sie die Gesellschaft, wie lange sie gültig bleibt.',
        'Die Kaution beträgt höchstens drei Monatsmieten (Wohnraummietgesetz, § 8), und ab dem 1. Oktober 2026 wird sie binnen 14 Tagen nach Ende des Mietverhältnisses zurückgezahlt (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Wo finde ich eine Winterwohnung in Levi?',
      a: 'Höchstwahrscheinlich über Ihren Arbeitgeber: Unternehmen im Skigebiet mieten Reihenhäuser und Ferienwohnungen für das Personal für die ganze Saison. Auf dem freien Markt werden Wohnungen in Levi im Winter wochenweise vermietet (Yle, 25. Mai 2023), eine Monatsmiete ist also hauptsächlich von Mai bis November möglich. Die kommunale Gesellschaft hat Wohnungen sowohl im Dorf Kittilä als auch in Sirkka bei Levi (Kittilän Vuokratalot).',
    },
    {
      q: 'Wie bewerbe ich mich um eine kommunale Wohnung in Kittilä?',
      a: 'Mit der Online-Bewerbung von Kittilän Vuokratalot Oy auf der Seite der Gesellschaft. Unvollständige Bewerbungen ohne die erforderlichen Anlagen werden nicht bearbeitet. Das Büro liegt im Erdgeschoss des Gemeindehauses, Valtatie 15 (kittila.fi, Kittilän Vuokratalot).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Die ersten Nächte',
    h2: 'Bevor die Wohnung frei ist.',
    lead: 'Die Suche unseres Partners zeigt freie Zimmer und Apartments in Levi und in Kittilä zu den heutigen Preisen.',
    chips: [
      { label: 'Levi', destination: 'Levi', sid: 'rentals_levi_first_weeks' },
      { label: 'Kittilä', destination: 'Kittilä', sid: 'rentals_kittila_first_weeks' },
    ],
  },
  sources: pickSources('de', SOURCES, common.sourceLabels),
};

export default copy;
