/**
 * Saksa (de) · town-sodankyla. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/sodankyla.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'tkVaesto', 'sodankyla', 'asentopuulaaki', 'asentopuulaakiHaku', 'asentopuulaakiVapaat', 'asentopuulaakiMuutto',
  'sodankyla2025', 'yle2025sodankyla', 'tkVuokratPostinumero', 'sodankylaOpintolaina', 'yle2026opintolaina', 'kela',
  'maavoimat', 'yle2026kasarmi', 'yle2026kevitsa', 'angloSakatti', 'yle2026sakatti', 'sodankylaMuuttajalle', 'fmi',
  'osrm', 'redu', 'sodankylaAsuntola', 'ahvl', 'rakli',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Mieten in Sodankylä: 720 kommunale Wohnungen und ihre Kosten',
  metaDescription:
    'Mieten in Sodankylä: rund 720 kommunale Wohnungen von Asentopuulaaki Oy, Mieten von etwa 7,40–18 € pro m², Online-Bewerbung, Studienkredit-Pilot und Wohngeld.',
  breadcrumb: 'Sodankylä',
  hero: {
    eyebrow: 'Sodankylä, 8.095 Einwohner',
    title: 'Mietwohnungen in Sodankylä.',
    subtitle:
      'Eine Garnison, eine Mine und ein Forschungsstandort in einer Gemeinde, in der sich der lange Wohnungsmangel im Hauptort mit neuen Gebäuden entspannt hat. Wo Sie sich bewerben und was es kostet.',
  },
  authorNote:
    'Einwohnerzahl von Statistik Finnland, Wohnungszahl von der Seite der Gemeinde, Mieten, Bedingungen und freie Wohnungen von den eigenen Seiten von Asentopuulaaki Oy, Arbeitsplätze vom Finnischen Heer, von Yle und von den Unternehmen. Geprüft am 15. November 2026.',
  intro: [
    'Sodankylä hatte Ende 2025 8.095 Einwohner (Statistik Finnland). Der Gemeinde gehören rund 720 Mietwohnungen, die ihre Tochtergesellschaft Asentopuulaaki Oy vermietet (sodankyla.fi). Fast jede Wohnung auf der Liste der Gesellschaft liegt im Hauptort, die übrigen in Aska, Orajärvi, Riipi, Torvinen und Vaalajärvi.',
    'Laut der Gemeinde hat sich der Wohnungsmangel, der Sodankylä jahrelang plagte, entspannt: Im Sommer 2025 wurde am Fluss Jeesiöjoki Käpyriihi mit 36 neuen Wohnungen fertiggestellt (Gemeinde Sodankylä, 2. Juli 2025). Die Wohnungssuche der Gesellschaft führt die jeweils freien oder bald freien Wohnungen mit Miete und Datum der Verfügbarkeit auf (Asentopuulaaki).',
    'Der Mangel ist nicht ganz vorbei. Im September 2025 sagte der technische Leiter der Gemeinde gegenüber Yle, er erschwere es weiterhin, Arbeitskräfte nach Sodankylä zu holen, obwohl es Arbeit gibt (Yle, 11. September 2025).',
  ],
  sections: [
    {
      id: 'prices',
      kicker: 'Was Miete kostet',
      h2: 'Etwa 10 € pro m² im Altbau, 18 € im Neubau.',
      table: {
        caption: 'Mieten von Asentopuulaaki Oy, €/m²/Monat, Objektliste vom 15. November 2026',
        head: ['Gebäude', '€/m²/Monat'],
        rows: [
          ['Käpyriihi, fertiggestellt 2025', '18,00'],
          ['Peuranpalas 2013 und Kehtoranta 2015', '12,80–13,00'],
          ['Reihenhäuser, Laubenganghäuser und Mehrfamilienhäuser 1977–1998', '8,80–12,50'],
          ['Wohnblöcke im Zentrum, 1968–1970', '10,20'],
          ['Reihenhäuser in den Außendörfern', '7,40–10,90'],
        ],
        foot: 'Berechnet aus der Miete jeder Wohnung auf der Objektliste von Asentopuulaaki Oy, 15. November 2026: 42 Gebäude, 597 Wohnungen. Die Kaution beträgt eine Monatsmiete, Wasser wird im Voraus berechnet, und der Mieter zahlt den Haushaltsstrom. In den elektrisch beheizten Dorfhäusern zahlt der Mieter auch die Heizung, die die Gesellschaft mit etwa 100 € im Monat im Sommer und 200 € im Winter ansetzt.',
      },
      paras: [
        '<strong>Beispiele:</strong> eine Zweizimmerwohnung von 55 m² in einem zentralen Wohnblock 632 € im Monat, eine Zweizimmerwohnung von 42 m² in Käpyriihi 756 €, ein Reihenhaus mit drei Zimmern und 80 m² in Kaanaanmaa 800 €.',
        '<strong>Private Mieten:</strong> Frei finanzierte Zweizimmerwohnungen kosteten im Postleitzahlgebiet Zentrum Sodankylä von Oktober bis Dezember 2025 im Durchschnitt 11,73 € pro m² (Statistik Finnland, Tabelle 13eb). Einen neueren Wert für die Gemeinde gibt es nicht: Sodankylä steht nicht in der aktuellen Mietentabelle von Statistik Finnland.',
      ],
    },
    {
      id: 'channels',
      kicker: 'Bei wem Sie sich bewerben',
      h2: 'Zuerst die kommunale Gesellschaft, dann die Portale.',
      band: true,
      cards: [
        {
          title: 'Asentopuulaaki Oy',
          body: 'Die kommunale Tochtergesellschaft, die die rund 720 Wohnungen der Gemeinde vermietet. Sie bewerben sich online und fügen einen Einkommensnachweis bei. Die Bonität wird geprüft, und Zahlungsstörungen wirken sich negativ aus.',
          href: 'https://www.asentopuulaaki.fi/asunnon-hakeminen/',
          linkLabel: 'asentopuulaaki.fi: Bewerbung um eine Wohnung',
          event: 'asentopuulaaki',
        },
        {
          title: 'Freie Wohnungen',
          body: 'Die Wohnungssuche der Gesellschaft zeigt freie und bald freie Wohnungen mit Miete und Datum der Verfügbarkeit. Die Liste wird auf der eigenen Seite der Gesellschaft aktualisiert, prüfen Sie sie also, bevor Sie sich bewerben.',
          href: 'https://www.asentopuulaaki.fi/asuntohaku/',
          linkLabel: 'asentopuulaaki.fi: Wohnungssuche',
          event: 'asentopuulaaki_vapaat',
        },
        {
          title: 'Oikotie und Vuokraovi',
          body: 'Private Inserate unter der Gemeinde Sodankylä. Die Wohnungsseite der Gemeinde nennt keinen anderen Vermieter als die eigene Gesellschaft, private Wohnungen finden Sie also auf den Portalen.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/sodankyl%C3%A4',
          linkLabel: 'Oikotie: Mietwohnungen in Sodankylä',
          event: 'oikotie',
        },
      ],
    },
    {
      id: 'student-loan',
      kicker: 'Für Zuziehende',
      h2: 'Bis zu 5.800 € für frische Absolventen.',
      paras: [
        'Sodankylä, Inari und Utsjoki erstatten die Studienkredite frischer Absolventen, die dorthin ziehen und mindestens in Teilzeit mit 50 Prozent oder selbstständig arbeiten. Die Erstattung beträgt höchstens 5.800 €, rückwirkend ausgezahlt über höchstens drei Jahre in 12-Monats-Zeiträumen (Gemeinde Sodankylä).',
        'Sie umfasst Studienkredite für einen beruflichen Abschluss der Sekundarstufe II oder einen Abschluss an einer Fachhochschule oder Universität, und Sie müssen Ihren Abschluss in den vorangegangenen zwei Jahren gemacht haben. Anträge werden erstmals im Januar 2027 bearbeitet, und laut Yle wird das Antragsformular am 1. Dezember 2026 freigeschaltet (Yle, 1. September 2026).',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Wohngeld von Kela',
      h2: 'Sodankylä gehört zu Kelas „übrigen Gemeinden“.',
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
      kicker: 'Arbeit',
      h2: 'Die Garnison wächst, die Mine schließt 2034.',
      bullets: [
        'Die Jägerbrigade beschäftigt etwa 400 Menschen und bildet jährlich etwa 2.200 Wehrpflichtige aus (Finnisches Heer). In der Garnison Sodankylä wird eine Kaserne für fast 700 Wehrpflichtige gebaut, die Anfang 2028 fertig sein soll (Yle, 2. April 2026).',
        'Bolidens Mine Kevitsa kündigte im Mai 2026 den Abbau von 77 Stellen an, und die Mine soll 2034 schließen (Yle, 26. Mai 2026).',
        'Die geplante Mine Sakatti von Anglo American soll etwa 2032 den Betrieb aufnehmen, aber das Projekt steckt noch im Genehmigungsverfahren, und der Lappland-Bezirk des Finnischen Naturschutzbundes hat gegen die Sakatti-Entscheidung gerichtlich Beschwerde eingelegt (Anglo American; Yle, 18. Juni 2026).',
        'Die Gemeinde nennt außerdem den Forschungsstandort Tähtelä und das Fjäll-Resort Luosto (sodankyla.fi). Luosto ist 38 km vom Hauptort entfernt (OpenStreetMap).',
      ],
    },
    {
      id: 'everyday',
      kicker: 'Alltag',
      h2: 'Die Polarnacht dauert hier vier Tage.',
      bullets: [
        'In Sodankylä dauert die Polarnacht nur vier Tage, kurz vor Weihnachten (Finnisches Meteorologisches Institut).',
        'Der nächste Flughafen ist Kittilä, 93 km entfernt, und das Zentrum von Rovaniemi liegt 130 km entfernt (OpenStreetMap).',
        'Für Studierende: REDU hat in Sodankylä ein Studierendenwohnheim, und im März 2026 kündigte die Gemeinde ein Wohnheim für Schüler der Sekundarstufe II und Erwachsenenstudierende in großen Wohnungen von Asentopuulaaki an (redu.fi; Gemeinde Sodankylä, 5. März 2026).',
      ],
    },
    {
      id: 'contract',
      kicker: 'Der Vertrag',
      h2: 'Ein Monat Kündigungsfrist.',
      bullets: [
        'Bei Asentopuulaaki beträgt die Kündigungsfrist einen Kalendermonat, und die Kaution wird etwa zwei Wochen nach dem Auszug zurückgezahlt (Asentopuulaaki).',
        'Die Kaution beträgt höchstens drei Monatsmieten (Wohnraummietgesetz, § 8).',
        'Ab dem 1. Oktober 2026 muss die Kaution binnen 14 Tagen nach Ende des Mietverhältnisses zurückgezahlt oder ihr Einbehalt schriftlich begründet werden (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Wie bewerbe ich mich um eine kommunale Wohnung in Sodankylä?',
      a: 'Mit der Online-Bewerbung von Asentopuulaaki Oy, mit beigefügtem Einkommensnachweis, etwa einer Gehaltsabrechnung. Die Bonität wird bei Suomen Asiakastieto geprüft, und Zahlungsstörungen wirken sich negativ aus (Asentopuulaaki).',
    },
    {
      q: 'Was kostet eine Mietwohnung in Sodankylä?',
      a: 'In den älteren Wohnblöcken der kommunalen Gesellschaft etwa 10 € pro m², in Reihen- und Laubenganghäusern meist 10–12,50 €, und in Käpyriihi, fertiggestellt 2025, 18 €, womit eine Zweizimmerwohnung von 42 m² 756 € im Monat kostet (Asentopuulaaki, 15. November 2026). Frei finanzierte Zweizimmerwohnungen im Zentrum kosteten von Oktober bis Dezember 2025 im Durchschnitt 11,73 € pro m² (Statistik Finnland).',
    },
    {
      q: 'Gibt es in Sodankylä Wohnungsmangel?',
      a: 'Jahrelang ja. Laut der Gemeinde hat er sich mit der Fertigstellung neuer Gebäude entspannt (2. Juli 2025), und die Wohnungssuche der kommunalen Gesellschaft führt freie und bald freie Wohnungen auf (Asentopuulaaki).',
    },
    {
      q: 'Wer bekommt die Erstattung des Studienkredits?',
      a: 'Ein frischer Absolvent, der nach Sodankylä, Inari oder Utsjoki zieht und mindestens in Teilzeit mit 50 Prozent oder selbstständig arbeitet. Die Erstattung beträgt höchstens 5.800 € über drei Jahre, und Anträge werden erstmals im Januar 2027 bearbeitet (Gemeinde Sodankylä).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Die ersten Nächte',
    h2: 'Besichtigungen vor Ort.',
    lead: 'Die Suche unseres Partners zeigt freie Zimmer und Apartments in Sodankylä und in Luosto zu den heutigen Preisen.',
    chips: [
      { label: 'Sodankylä', destination: 'Sodankylä', sid: 'rentals_sodankyla_first_weeks' },
      { label: 'Luosto', destination: 'Luosto', sid: 'rentals_luosto_first_weeks' },
    ],
  },
  sources: pickSources('de', SOURCES, common.sourceLabels),
};

export default copy;
