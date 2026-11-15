/**
 * Saksa (de) · cost. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
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
  metaTitle: 'Lebenshaltungskosten Lappland 2026: Miete, Strom, Kraftstoff',
  metaDescription:
    'Was das Leben in Finnisch-Lappland kostet: Miete pro m² (Statistik Finnland 2026), Strom, Kraftstoff, Wohngeld von Kela und Kita-Gebühren, mit Rechenbeispielen.',
  breadcrumb: 'Lebenshaltungskosten',
  hero: {
    eyebrow: 'Lebenshaltungskosten in Lappland',
    title: 'Was kostet das Leben in Lappland?',
    subtitle:
      'Die Miete ist in Lappland niedriger als im Rest Finnlands, Auto und Heizung sind teurer. So setzt sich ein Monatsbudget zusammen.',
  },
  authorNote:
    'Jede Zahl stammt von Statistik Finnland, Kela oder dem Verband der finnischen Kommunen. Die Beispiele sind aus diesen Zahlen berechnet und zeigen ihre Formel. Keine Schätzungen.',
  intro: [
    'Bei den Kosten gibt es zwei Lapplands. Rovaniemi ist eine Universitätsstadt, in der Studierende und Touristen um die Studios konkurrieren. In den Skiresorts folgt der Preis der Saison. An der Küste und in den kleinen Gemeinden ist das Wohnen am geräumigsten und günstigsten, aber ein Auto ist Pflicht.',
    'Unten stehen die vier Posten, aus denen ein Monatsbudget wirklich besteht: Miete, Strom, Fortbewegung und Kinder. Für Lebensmittelpreise gibt es keine Statistik speziell für Lappland, deshalb raten wir nicht.',
  ],
  sections: [
    {
      id: 'rent',
      kicker: 'Miete',
      h2: 'Günstiger als der Landesdurchschnitt, außer wenn nicht.',
      table: {
        caption: 'Durchschnittsmiete in €/m²/Monat, frei finanzierte Mietwohnungen, 2026Q3',
        head: ['', 'Rovaniemi', 'Lappland (Region)', 'Ganz Finnland'],
        rows: [
          ['Studios', '18,63', '17,25', '20,49'],
          ['Zweizimmerwohnungen', '14,40', '12,87', '15,07'],
          ['Drei Zimmer und mehr', '12,29', '11,08', '13,98'],
          ['Alle Wohnungen', '14,63', '13,14', '15,99'],
        ],
        foot: 'Statistik Finnland, Mieten 2026Q3, Tabelle 15fa.',
      },
      paras: [
        '<strong>Beispiele:</strong> ein Studio von 30 m² in Rovaniemi etwa 560 € im Monat (18,63 × 30), eine Zweizimmerwohnung von 50 m² in Rovaniemi etwa 720 € (14,40 × 50), eine Dreizimmerwohnung von 75 m² zum Durchschnitt der Region Lappland etwa 830 € (11,08 × 75).',
        'Die Ausnahme ist der Winter in den Skiresorts: Nahe dem Zentrum von Levi kostete eine Wohnung von 80 m² in einem Alpenhaus von Mai bis November 750 € im Monat, in der Hochsaison aber 2.000 € pro Woche (Yle, 25. Mai 2023). Ein ganzjähriger Mietvertrag für dieselbe Wohnung lag bei 1.650 € im Monat. Der Resortpreis ist nicht der Lappland-Preis.',
      ],
    },
    {
      id: 'electricity',
      kicker: 'Strom und Heizung',
      h2: 'Eine Kilowattstunde kostet dasselbe, Sie verbrauchen nur mehr davon.',
      table: {
        caption: 'Gesamtpreis für Strom in Haushalten, Cent/kWh, Juni 2026, ganz Finnland',
        head: ['Jahresverbrauch', 'Gesamtpreis'],
        rows: [
          ['1.000–2.499 kWh (kleine Wohnung)', '28,2'],
          ['2.500–4.999 kWh (Wohnung oder Reihenhaus)', '23,7'],
          ['5.000–15.000 kWh (Einfamilienhaus ohne Elektroheizung)', '17,9'],
          ['über 15.000 kWh (elektrisch beheiztes Haus)', '14,9'],
        ],
        foot: 'Statistik Finnland, Strompreis nach Verbrauchertyp, Tabelle 13rb. Der Preis enthält Energie, Übertragung und Steuern.',
      },
      paras: [
        '<strong>Beispiele:</strong> eine Zweizimmerwohnung mit 3.500 kWh Jahresverbrauch: 3.500 × 0,237 = etwa 830 € im Jahr, also 69 € im Monat. Ein elektrisch beheiztes Einfamilienhaus mit 18.000 kWh: 18.000 × 0,149 = etwa 2.680 € im Jahr, also 223 € im Monat.',
        'Der Preis ist ein landesweiter Durchschnitt. Lapplands Heizsaison ist länger als die im Süden, dasselbe Haus verbraucht hier also mehr Kilowattstunden. Fragen Sie den Vormieter oder den Vermieter nach dem Verbrauch des letzten Jahres, es ist die beste Schätzung, die Sie bekommen.',
      ],
    },
    {
      id: 'getting-around',
      kicker: 'Fortbewegung',
      h2: 'Dieser Posten ist in Lappland größer.',
      paras: [
        'Benzin 95E10 kostete im Juni 2026 im finnischen Durchschnitt 2,09 € pro Liter und Diesel 2,15 € (Statistik Finnland). Entfernungen aus den Fahrtrouten von LaplandVibes: Kemi–Rovaniemi 118 km, Rovaniemi–Ylläs 175 km, Sodankylä–Saariselkä 130 km.',
        '<strong>Beispiel:</strong> ein täglicher Arbeitsweg von 40 km, 22 Arbeitstage, 7 l/100 km: 880 km × 0,07 l/km × 2,09 € = etwa 129 € im Monat für Benzin. Im Zentrum von Rovaniemi kommen Sie ohne Auto aus. In einem Fjäll-Dorf gehört das Auto zur Miete, auch wenn der Vertrag es nicht sagt.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Wohngeld von Kela',
      h2: 'Wie viel der Miete angerechnet wird.',
      table: {
        caption: 'Höchstgrenze der Wohnkosten 2026, €/Monat',
        head: ['Haushaltsgröße', 'Rovaniemi', 'Übrige Gemeinden Lapplands'],
        rows: [
          ['1 Person', '447', '394'],
          ['2 Personen', '652', '574'],
          ['3 Personen', '828', '734'],
          ['4 Personen', '981', '875'],
          ['Jede weitere Person', '+134', '+129'],
        ],
        foot: 'Kela, allgemeines Wohngeld 2026. Das Wohngeld beträgt höchstens 70 % der anerkannten Wohnkosten, und ein Wohngeld unter 15 € wird nicht ausgezahlt.',
      },
      paras: [
        '<strong>Beispiel:</strong> Sie leben allein in Rovaniemi bei einer Miete von 600 €. Angerechnet werden höchstens 447 €, und das Wohngeld beträgt höchstens 70 % davon, also 313 € im Monat (447 × 0,70), bevor das Einkommen es über den Grundselbstbehalt mindert. Der Rechner von Kela berücksichtigt Ihr eigenes Einkommen.',
      ],
    },
    {
      id: 'children',
      kicker: 'Kinder',
      h2: 'Kita nach Einkommen, Schule kostenlos.',
      bullets: [
        'Ab dem 1. August 2026 beträgt die höchste Gebühr der frühkindlichen Bildung 335 € im Monat pro Kind, die niedrigste erhobene 32 €, und das zweite Kind zahlt höchstens 134 € (Verband der finnischen Kommunen). Die Gebühr richtet sich nach dem Familieneinkommen, bei niedrigem Einkommen kann sie also null betragen.',
        'Vorschule und Grundbildung sind kostenlos, Lernmaterial und Schulessen eingeschlossen (Grundbildungsgesetz, § 31). Bei einem Schulweg von über fünf Kilometern organisiert die Gemeinde die Beförderung (§ 32).',
      ],
    },
    {
      id: 'summary',
      kicker: 'Zusammenfassung',
      h2: 'Was günstiger ist, was teurer.',
      band: true,
      cards: [
        {
          title: 'Günstiger: die Miete',
          body: 'Lapplands Durchschnittsmiete liegt bei 13,14 € pro m², landesweit bei 15,99 € (Statistik Finnland 2026Q3). Rovaniemi liegt mit 14,63 € dazwischen.',
        },
        {
          title: 'Teurer: Fortbewegung und Heizung',
          body: 'Entfernungen von hundert Kilometern und eine lange Heizsaison. Der Preis einer Kilowattstunde und eines Liters ist derselbe wie im Süden, die Menge nicht.',
        },
        {
          title: 'Gleich: Kita und Schule',
          body: 'Die Gebühren der frühkindlichen Bildung und der kostenlose Schulbesuch gelten landesweit. Für eine Familie mit Kindern ist die größte Ersparnis in Lappland die Miete.',
        },
      ],
    },
  ],
  faqs: [
    {
      q: 'Ist Rovaniemi eine teure Stadt zum Leben?',
      a: 'Nicht bei den Mieten: Die Durchschnittsmiete von 14,63 € pro m² liegt unter den 15,99 € des Landes (Statistik Finnland 2026Q3), und Rovaniemi ist in jeder Wohnungsgröße günstiger als das ganze Land, Studios eingeschlossen (18,63 gegenüber 20,49). Bei Neuvermietungen kostet ein Studio in Rovaniemi 20,14 € pro m²: Ein Studio, das jetzt frei wird, kostet etwa 8 % mehr als ein bereits vermietetes, aber immer noch weniger als ein Studio bei Neuvermietung im Landesschnitt, 21,11 € pro m².',
    },
    {
      q: 'Wie viel braucht eine Einzelperson pro Monat in Rovaniemi?',
      a: 'Wir rechnen nur, was eine Quelle hat: ein Studio von 30 m² etwa 560 € im Monat (18,63 × 30) und Strom bei 1.800 kWh im Jahr etwa 42 € im Monat (1.800 × 0,282 / 12). Lebensmittel, Internet, Versicherung und Verkehr kommen je nach Ihren eigenen Gewohnheiten hinzu.',
    },
    {
      q: 'Kann ich in Lappland Wohngeld bekommen?',
      a: 'Zu denselben Bedingungen wie überall in Finnland. In Rovaniemi werden die Wohnkosten eines Einpersonenhaushalts bis zu 447 € im Monat angerechnet, in den übrigen Gemeinden Lapplands bis zu 394 €, und das Wohngeld beträgt höchstens 70 % davon (Kela 2026).',
    },
  ],
  sources: pickSources('de', SOURCES, common.sourceLabels),
};

export default copy;
