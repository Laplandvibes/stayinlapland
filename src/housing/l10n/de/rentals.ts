/**
 * Saksa (de) · rentals. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/rentals.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'tkVuokrat', 'kela', 'ahvl', 'rakli', 'kuluttajaliittoVuokra', 'yle2025das', 'yle2023', 'rovaniemi', 'das',
  'kittila', 'kemi', 'keminmaa', 'tornio', 'kemijarvi', 'kemijarviHaku', 'kemijarviVuostimo', 'kemijarviTalousarvio',
  'sodankyla', 'asentopuulaaki', 'asentopuulaakiVapaat', 'inari',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Wohnung mieten in Lappland: Rovaniemi, Levi, Kemi–Tornio',
  metaDescription:
    'Langzeitmiete in Finnisch-Lappland, von Rovaniemi und Kemi–Tornio bis Levi und Inari: Miete pro m² (Statistik Finnland), Kaution und Wohngeld von Kela.',
  breadcrumb: 'Mietwohnungen',
  hero: {
    eyebrow: 'Mieten in Lappland',
    title: 'Eine Wohnung in Lappland mieten.',
    subtitle:
      'Wo Sie eine Mietwohnung finden, was sie kostet und wie viel Kela übernimmt. Ort für Ort.',
  },
  authorNote:
    'Mieten pro m²: Mietstatistik von Statistik Finnland, frei finanzierte Mietwohnungen, Juli–September 2026. Angaben zu den kommunalen Wohnungsgesellschaften am 15. November 2026 auf den eigenen Seiten der Gemeinden und Gesellschaften geprüft.',
  intro: [
    'In Lappland kommt eine Mietwohnung aus einer von drei Quellen: von der kommunalen Wohnungsgesellschaft, von den landesweiten Portalen oder aus lokalen Gruppen. Beginnen Sie bei der Gemeinde. Deren Gesellschaften besitzen Hunderte Wohnungen, etwa gut 300 in Keminmaa, rund 720 in Sodankylä, 560 in Kemijärvi und über 500 in Inari, und Sie können sich auch bewerben, wenn gerade nichts frei ist.',
    'Der Preis hängt davon ab, wohin Sie ziehen. In Rovaniemi kostet ein Studio von 30 m² im Durchschnitt etwa 560 € im Monat, im übrigen Lappland weniger. In den Fjäll-Dörfern folgt die Miete der Saison. Fragen Sie für den Winter deshalb zuerst Ihren Arbeitgeber nach einer Personalunterkunft.',
  ],
  sections: [
    {
      id: 'towns',
      kicker: 'Wo die Wohnungen sind',
      h2: 'Ort für Ort.',
      lead: 'Jeder Ort hat seine eigene Seite: die kommunale Wohnungsgesellschaft und die Bewerbung, das Mietniveau und die Obergrenze von Kela. Personalunterkünfte in Ylläs behandelt die Seite für Saisonkräfte.',
      band: true,
      cards: [
        {
          title: 'Rovaniemi',
          image: { src: '/images/housing-rovaniemi-card-talvikatu.webp', alt: 'Wohnblöcke und Fußgänger auf einer verschneiten Straße in Rovaniemi im Januar' },
          body:
            'Die Seite der Stadt verweist auf die Vermieter KAS asunnot, M2-Kodit, Tarveasunnot, Avara und Lumo sowie auf die Suchdienste Oikotie, Vuokraovi und Qasa. Studierende bewerben sich bei der Stiftung Domus Arctica DAS (etwa 1.700 Wohnungen, davon 700 Studios), Unter-30-Jährige bei NAL Rovaniemi. Eine DAS-Bewerbung gilt drei Monate, und neue Studierende haben im August und September Vorrang.',
          href: '/rentals/rovaniemi',
          linkLabel: 'Mietwohnungen in Rovaniemi',
        },
        {
          title: 'Kemi, Keminmaa und Tornio',
          image: { src: '/images/housing-kemi-card-kaupungintalo.webp', alt: 'Das Rathaus von Kemi an einem verschneiten Januarmorgen' },
          body:
            'Die kommunalen Wohnungen in Kemi betreibt Kiinteistö Oy Itätuuli, der größte Anbieter von Mietwohnungen der Stadt, mit Wohnungen im Umkreis von fünf Kilometern um das Zentrum. Keminmaan Vuokra-asunnot Oy hat gut 300 Wohnungen, und jede Gesellschaft hat ihre eigene Online-Bewerbung. In Tornio verwaltet Tornion Krunni Oy (Tornion Vuokra-asunnot Oy) die städtischen Wohnungen.',
          href: '/rentals/kemi-tornio',
          linkLabel: 'Mietwohnungen in Kemi, Tornio und Keminmaa',
        },
        {
          title: 'Kemijärvi',
          image: { src: '/images/housing-kemijarvi-card-kerrostalo.webp', alt: 'Ein Mehrfamilienhaus und eine alte Kiefer in Kemijärvi an einem Juliabend' },
          body:
            'Die beiden Immobiliengesellschaften der Stadt besitzen 560 Mietwohnungen, und der Haushalt strebt eine Vermietung von 80–85 Prozent an, es gibt also tatsächlich leere Wohnungen. Eine Bewerbung gilt vier Monate. Die Reihenhäuser von Vuostimo liegen 14 km vom Pyhätunturi entfernt.',
          href: '/rentals/kemijarvi',
          linkLabel: 'Mietwohnungen in Kemijärvi',
        },
        {
          title: 'Sodankylä',
          image: { src: '/images/housing-sodankyla-jaamerentie.webp', alt: 'Die Jäämerentie, die Hauptstraße des Dorfes Sodankylä, im September' },
          body:
            'Asentopuulaaki Oy vermietet die rund 720 Wohnungen der Gemeinde, und die Wohnungssuche der Gesellschaft zeigt, welche Wohnungen gerade frei sind oder bald frei werden. Ältere Gebäude kosten etwa 9–12,50 € pro m², das 2025 fertiggestellte Käpyriihi 18 €.',
          href: '/rentals/sodankyla',
          linkLabel: 'Mietwohnungen in Sodankylä',
        },
        {
          title: 'Kittilä und Levi',
          image: { src: '/images/housing-kittila-levi-card-kyla.webp', alt: 'Das Dorf Levi vom Gipfel des Levi-Fjälls im November, dahinter ein See und Fjälls' },
          body:
            'Kittilän Vuokratalot Oy vermietet die eigenen Mietwohnungen der Gemeinde. Das Büro liegt im Erdgeschoss des Gemeindehauses (Valtatie 15). Die Bewerbung läuft online über die Website der Gesellschaft. Die Ferienwohnungen in Levi werden hauptsächlich von Mai bis November monatsweise vermietet, im Winter wird dieselbe Wohnung wochenweise vergeben.',
          href: '/rentals/kittila-levi',
          linkLabel: 'Mietwohnungen in Kittilä und Levi',
        },
        {
          title: 'Inari, Ivalo und Saariselkä',
          image: { src: '/images/housing-ivalo-joki.webp', alt: 'Ivalo, über den Fluss Ivalojoki hinweg gesehen, an einem Sommerabend' },
          body:
            'Inarin Vuokra-asunnot Oy hat über 500 Wohnungen in Ivalo, Inari, Saariselkä, Nellim und Sevettijärvi. Die Seite der Gemeinde führt auch die privaten Vermieter auf (Bilto, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg, Uni Kodit) sowie die Mietgruppe Sodankylä–Inari–Utsjoki auf Facebook.',
          href: '/rentals/ivalo-inari',
          linkLabel: 'Mietwohnungen in Ivalo und Inari',
        },
      ],
    },
    {
      id: 'portals',
      kicker: 'Portale und Gruppen',
      h2: 'Dieselben Kanäle wie im Rest von Finnland.',
      bullets: [
        '<a href="https://asunnot.oikotie.fi/vuokra-asunnot/rovaniemi" target="_blank" rel="noopener">Oikotie</a>: landesweit. Filtern Sie nach Gemeinde, nicht nur nach Dorf.',
        '<a href="https://www.vuokraovi.com/vuokra-asunnot/rovaniemi" target="_blank" rel="noopener">Vuokraovi</a>: nur Mietwohnungen.',
        '<a href="https://qasa.fi" target="_blank" rel="noopener">Qasa</a>: von der Stadt Rovaniemi aufgeführt. Der Vertrag wird elektronisch auf der Plattform unterzeichnet.',
        '<a href="https://www.tori.fi" target="_blank" rel="noopener">Tori</a>: eine Kleinanzeigenseite, die auch Mietwohnungen enthält. Was Sie vor der Zahlung prüfen sollten, lesen Sie weiter unten.',
        'Facebook-Gruppen: Levi-Wohnungssuche, Kemi–Keminmaa und Sodankylä–Inari–Utsjoki. In den Fjäll-Dörfern der schnellste Kanal, aber niemand bürgt für die Inserate.',
      ],
    },
    {
      id: 'prices',
      kicker: 'Was Miete kostet',
      h2: 'Pro Quadratmeter, nicht nach Gefühl.',
      lead:
        'Statistik Finnland veröffentlicht die Mieten jedes Quartal. Unten steht die Durchschnittsmiete frei finanzierter Mietwohnungen im Zeitraum Juli–September 2026, in Euro pro Quadratmeter und Monat.',
      table: {
        caption: 'Durchschnittsmiete in €/m²/Monat, frei finanzierte Mietwohnungen, 2026Q3',
        head: ['', 'Rovaniemi', 'Lappland (Region)', 'Ganz Finnland'],
        rows: [
          ['Studios', '18,63', '17,25', '20,49'],
          ['Zweizimmerwohnungen', '14,40', '12,87', '15,07'],
          ['Drei Zimmer und mehr', '12,29', '11,08', '13,98'],
          ['Alle Wohnungen', '14,63', '13,14', '15,99'],
          ['Neuvermietungen, alle Wohnungen', '15,93', '13,39', '16,72'],
        ],
        foot: 'Statistik Finnland, Mieten 2026Q3, Tabelle 15fa. Neuvermietung = Verträge, die im Quartal begonnen haben. Sie zeigen, was gerade verlangt wird.',
      },
      paras: [
        '<strong>So rechnen Sie:</strong> Multiplizieren Sie die Miete pro m² mit der Wohnfläche. In Rovaniemi kostet ein Studio von 30 m² im Durchschnitt etwa 560 € im Monat (18,63 × 30) und bei einer Neuvermietung etwa 600 € (20,14 × 30, der Wert für Studios bei Neuvermietung in Rovaniemi). Eine Zweizimmerwohnung von 50 m²: etwa 720 € im Monat (14,40 × 50). Wasser und Strom kommen meist hinzu.',
        'Lapplands Mieten pro Quadratmeter liegen in jeder Wohnungsgröße unter dem Landesdurchschnitt, und der Abstand ist bei Zweizimmerwohnungen am kleinsten.',
      ],
      note: {
        label: 'Was die Statistik nicht erfasst',
        body:
          'Saisonvermietungen in den Skigebieten und möblierte Kurzzeitmieten sind in diesen Zahlen nicht enthalten. Nahe dem Zentrum von Levi kostete eine Wohnung von 80 m² in einem Haus im Alpenstil von Mai bis November 750 € im Monat, in der Hochsaison 2.000 € pro Woche und ganzjährig 1.650 € im Monat (Yle, 25. Mai 2023): dieselbe Wohnung zu drei Preisen.',
      },
    },
    {
      id: 'housing-allowance',
      kicker: 'Wohngeld von Kela',
      h2: 'Die Obergrenze hängt von der Gemeinde ab.',
      lead:
        'Das allgemeine Wohngeld deckt höchstens 70 % der anerkannten Wohnkosten, und für die anerkannten Kosten gilt eine Obergrenze, die von der Gemeinde und der Haushaltsgröße abhängt. Kela ordnet die Gemeinden drei Gruppen zu: Rovaniemi gehört zur Gruppe der 24 größeren Gemeinden, alle übrigen Gemeinden Lapplands fallen unter „übrige Gemeinden“ mit niedrigerer Obergrenze.',
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
        foot: 'Kela, allgemeines Wohngeld 2026. Ein Wohngeld unter 15 € wird nicht ausgezahlt.',
      },
      paras: [
        'Die Obergrenze bedeutet: In Rovaniemi wird die Miete eines Einpersonenhaushalts nur bis 447 € angerechnet, auch wenn sie 600 € beträgt. Den Rest zahlen Sie selbst. Das Einkommen mindert das Wohngeld über den Grundselbstbehalt. Der Rechner von Kela zeigt Ihren eigenen Fall.',
      ],
    },
    {
      id: 'contract',
      kicker: 'Der Mietvertrag',
      h2: 'Fünf Dinge vor der Unterschrift.',
      bullets: [
        '<strong>Die Kaution beträgt höchstens drei Monatsmieten</strong> (Wohnraummietgesetz, § 8). Üblich sind ein oder zwei Monate.',
        '<strong>Ab dem 1. Oktober 2026 muss die Kaution zurückgezahlt werden</strong>, oder ihr Einbehalt muss schriftlich begründet werden, und zwar binnen 14 Tagen nach Ende des Mietverhältnisses oder nach der Rückgabe der Wohnung (Reform in Kraft seit 1. Oktober 2026, Rakli).',
        '<strong>Die Kündigungsfrist des Mieters beträgt einen Monat.</strong> Bei Verträgen, die am oder nach dem 1. Oktober 2026 geschlossen werden, beträgt die Kündigungsfrist des Vermieters drei Monate, und vier Monate, wenn das Mietverhältnis ununterbrochen mindestens zwei Jahre bestanden hat (Rakli). Für Verträge, die vor dem 1. Oktober 2026 geschlossen wurden, gelten weiter die alten Fristen (Kuluttajaliitto).',
        '<strong>Ein befristeter Vertrag bindet beide Seiten bis zum Ende.</strong> Bei Saisonarbeit ist die Wohnung des Arbeitgebers oft an die Stelle gekoppelt: Lesen Sie nach, was geschieht, wenn der Job endet, bevor die Saison vorbei ist.',
        '<strong>Die Bonität wird fast immer geprüft.</strong> Ein Eintrag wegen Zahlungsausfalls schließt das Mieten nicht aus, aber dann passen eine kommunale Wohnungsgesellschaft oder ein privater Vermieter eher als die großen Ketten.',
      ],
    },
    {
      id: 'before-paying',
      kicker: 'Bevor Sie etwas zahlen',
      h2: 'Drei Regeln, die Ihre Kaution schützen.',
      bullets: [
        'Zahlen Sie niemals eine Kaution vor einer Besichtigung oder einem Video-Rundgang, bei dem Sie die Wohnung und die Schlüssel im selben Bild sehen.',
        'Der Vertrag muss schriftlich sein, mit Namen und Unternehmenskennung (Y-Tunnus) oder Personenkennzahl des Vermieters. Eine kommunale Wohnungsgesellschaft ist der sicherste Einstieg, wenn Sie den Markt nicht kennen.',
        'Eine möblierte Kurzzeitmiete ist kein Mietverhältnis: Eine Ferienwohnung bekommt womöglich keine amtliche Adresse, und die fehlende Adresse erschwert den Umgang mit Firmen, zum Beispiel bei Bonitätsprüfungen (Yle, 25. Mai 2023).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Wie viel kostet ein Studio in Rovaniemi?',
      a: 'Laut Statistik Finnland lag die Durchschnittsmiete eines frei finanzierten Studios in Rovaniemi im Zeitraum Juli–September 2026 bei 18,63 € pro m², bei Neuvermietungen bei 20,14 € pro m². Ein Studio von 30 m² kostet also etwa 560–600 € im Monat, ohne Strom.',
    },
    {
      q: 'Kann ich in Lappland ohne finnische Bonitätsauskunft mieten?',
      a: 'Ja, aber mit weniger Auswahl. Kommunale Wohnungsgesellschaften und private Vermieter entscheiden im Einzelfall, und eine höhere Kaution (das Gesetz erlaubt bis zu drei Monatsmieten) oder ein Bürge hilft. Die großen Vermietungsketten führen immer eine Bonitätsprüfung durch.',
    },
    {
      q: 'Wann sucht man am besten eine Wohnung in Rovaniemi?',
      a: 'Am besten in jedem Monat außer August und September. Dann kann DAS nicht alle Bewerber unterbringen, und frei finanzierte Studios sind knapp (Yle, 27. Juli 2026). Studios, die für die Wintersaison kurzzeitig vermietet wurden, kommen im Frühjahr zurück auf den Markt.',
    },
    {
      q: 'Warum ist die Miete in Levi im Winter um ein Vielfaches höher?',
      a: 'Weil in der Hochsaison dieselbe Wohnung wochenweise vermietet wird. In Yles Beispiel (25. Mai 2023) kostete eine Wohnung von 80 m² in einem Haus im Alpenstil im Sommer 750 € im Monat und im Winter 2.000 € pro Woche. Eine Monatsmiete ist von Mai bis November möglich. Fragen Sie für den Winter Ihren Arbeitgeber nach einer Personalunterkunft oder bei der kommunalen Gesellschaft in Kittilä.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Die ersten Wochen',
    h2: 'Die Wohnung vor Ort ansehen.',
    lead:
      'Buchen Sie für die ersten Wochen ein Hotel oder Apartmenthotel und sehen Sie sich die Wohnungen selbst an, bevor Sie unterschreiben. Die Suche unseres Partners zeigt freie Zimmer zu den heutigen Preisen.',
    chips: [
      { label: 'Rovaniemi', destination: 'Rovaniemi', sid: 'rentals_first_weeks_rovaniemi' },
      { label: 'Levi', destination: 'Levi', sid: 'rentals_first_weeks_levi' },
      { label: 'Tornio', destination: 'Tornio', sid: 'rentals_first_weeks_tornio' },
      { label: 'Ivalo', destination: 'Ivalo', sid: 'rentals_first_weeks_ivalo' },
    ],
  },
  sources: pickSources('de', SOURCES, common.sourceLabels),
};

export default copy;
