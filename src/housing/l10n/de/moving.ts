/**
 * Saksa (de) · moving. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/moving.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'dvv', 'traficom', 'tkSahko', 'tkPolttoaine', 'kuntaliitto', 'perusopetuslaki', 'fmi', 'foreca',
  'lvDrive', 'lapha', 'laplandwork', 'ahvl', 'rakli',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Umzug nach Lappland: Leitfaden für den ersten Monat',
  metaDescription:
    'Adressänderung, Winterreifen, Kita-Gebühren, Strom und Polarnacht: Was Sie in Ihrem ersten Monat in Finnisch-Lappland erledigen sollten.',
  breadcrumb: 'Umzug nach Lappland',
  hero: {
    eyebrow: 'Umzug nach Lappland: die ersten 30 Tage',
    title: 'Umzug nach Lappland.',
    subtitle:
      'Adressänderung, Winterreifen, Kita, Stromvertrag und Polarnacht: Was Sie im ersten Monat erledigen sollten, und in welcher Reihenfolge.',
  },
  authorNote:
    'Fristen von DVV, Traficom und dem Verband der finnischen Kommunen, Länge der Polarnacht vom Finnischen Meteorologischen Institut, Entfernungen aus den Fahrtrouten von LaplandVibes. Geprüft am 15. November 2026.',
  intro: [
    'Der Papierkram beim Umzug nach Lappland ist derselbe wie überall in Finnland, aber drei Dinge wiegen hier schwerer als im Süden: Der Winter dauert ein halbes Jahr, Entfernungen werden in Hunderten Kilometern gemessen, und in kleinen Gemeinden konzentrieren sich die Dienstleistungen an einem Ort. Diese Seite ist eine Checkliste in der Reihenfolge, in der die Dinge anstehen.',
    'Wenn Sie aus dem Ausland nach Finnland ziehen, finden Sie Aufenthaltsgenehmigungen, Personenkennzahl, Steuerkarte und Bankkonto auf unserer Schwesterseite <a href="https://laplandwork.com/de/moving-to-finland/" target="_blank" rel="noopener">laplandwork.com</a>. Diese Seite beginnt, wenn Sie den Schlüssel in der Hand halten.',
  ],
  sections: [
    {
      id: 'week-one',
      kicker: 'Die erste Woche',
      h2: 'Vier Meldungen, eine Frist.',
      bullets: [
        '<strong>Meldung der Adressänderung an DVV</strong>: frühestens einen Monat vor dem Umzugstag und spätestens eine Woche nach dem Umzug (DVV). Dieselbe Meldung geht an Posti. Die kommunalen Dienste (Kita, Schule, Gesundheitszentrum) richten sich nach Ihrer gemeldeten Wohnsitzgemeinde, melden Sie sich also sofort an.',
        '<strong>Stromvertrag.</strong> Der Gesamtpreis für Strom lag bei einem Haushalt mit 2.500–4.999 kWh Jahresverbrauch im Juni 2026 im finnischen Durchschnitt bei 23,7 Cent pro kWh, in der Klasse über 15.000 kWh, in die ein elektrisch beheiztes Haus gehört, bei 14,9 Cent (Statistik Finnland). Die Heizsaison in Lappland ist lang, schätzen Sie Ihren Verbrauch also lieber hoch.',
        '<strong>Die Gesundheitsversorgung</strong> liegt beim Wohlfahrtsbereich Lappland (Lapha). Nicht dringende Behandlung läuft über Ihr örtliches Gesundheitszentrum. Das nächstgelegene finden Sie auf der Seite des Wohlfahrtsbereichs. Registrieren Sie sich außerdem bei Omakanta.',
        '<strong>Internet.</strong> Fragen Sie die Hausverwaltung oder den Vermieter vor der Unterschrift nach Glasfaser. In dünn besiedelten Gebieten ist ein mobiler Router oft die einzige Möglichkeit, und wer im Homeoffice arbeitet, sollte die Verbindung zuerst in der Wohnung testen.',
      ],
    },
    {
      id: 'car',
      kicker: 'Auto und Winter',
      h2: 'In Rovaniemi geht es ohne Auto. Anderswo nicht.',
      bullets: [
        '<strong>Winterreifen:</strong> In Finnland müssen Winterreifen vom 1. November bis 31. März verwendet werden, wenn Wetter oder Straßenzustand es erfordern. Spikereifen sind im selben Zeitraum erlaubt und zu anderen Zeiten, wenn die Bedingungen es verlangen. Die Hauptrillen eines Winterreifens müssen mindestens 3,0 mm tief sein (Traficom).',
        '<strong>Kraftstoff:</strong> Benzin 95E10 kostete im Juni 2026 im finnischen Durchschnitt 2,09 € pro Liter und Diesel 2,15 € (Statistik Finnland). Die langen Strecken machen das in Lappland zu einem größeren Posten als im Süden.',
        '<strong>Entfernungen</strong> aus den Fahrtrouten von LaplandVibes: Oulu–Kemi 105 km, Kemi–Rovaniemi 118 km, Rovaniemi–Ylläs (Äkäslompolo) 175 km, Sodankylä–Saariselkä 130 km, Levi–Kilpisjärvi 258 km. Lappland ist größer, als es auf der Karte aussieht.',
        '<strong>Motorvorwärmung und Innenraumheizung.</strong> Bei strengem Frost wird das Auto vor der Abfahrt vorgewärmt, und eine Stromsäule auf dem Parkplatz gehört in Lappland zur Standardausstattung. Lassen Sie sich einen Stellplatz mit Stromsäule in den Mietvertrag schreiben.',
      ],
      image: {
        src: '/images/housing-kittila-airport.webp',
        alt: 'Das Terminal des Flughafens Kittilä an einem Sommertag',
        caption: 'Flughafen Kittilä, Juli 2026. Levi und Ylläs werden von Kittilä aus angeflogen, Rovaniemi hat einen eigenen Flughafen und Saariselkä wird über Ivalo angeflogen. Foto: LaplandVibes.',
        ratio: '16/9',
      },
    },
    {
      id: 'children',
      kicker: 'Kinder',
      h2: 'Die Kita kostet je nach Einkommen, die Schule nichts.',
      bullets: [
        '<strong>Die Gebühren der frühkindlichen Bildung</strong> richten sich nach dem Familieneinkommen: Ab dem 1. August 2026 beträgt die höchste Gebühr 335 € im Monat pro Kind und die niedrigste erhobene 32 €. Das zweite Kind zahlt höchstens 40 % der Gebühr des jüngsten Kindes, also höchstens 134 € (Verband der finnischen Kommunen).',
        '<strong>Vorschule und Grundbildung</strong> sind kostenlos, Lernmaterial und Schulessen eingeschlossen (Grundbildungsgesetz, § 31). Die Schulbeförderung wird organisiert, wenn der Schulweg länger als fünf Kilometer ist (§ 32), und in kleinen Gemeinden gehört sie zum Alltag.',
        'Den Kita-Platz beantragen Sie bei der Gemeinde, und die Gemeinde richtet sich nach der bei DVV gemeldeten Adresse. Deshalb kommt die Adressmeldung zuerst und nicht erst zum Schluss.',
      ],
    },
    {
      id: 'light',
      kicker: 'Licht und Dunkelheit',
      h2: 'Die Polarnacht ist kürzer, als Sie denken. Außer in Utsjoki.',
      paras: [
        'Kaamos, die Polarnacht, bedeutet, dass die Sonne nicht über den Horizont steigt. Laut dem Finnischen Meteorologischen Institut dauert sie in Nuorgam in Utsjoki fast zwei Monate, vom 25. November bis zum 17. Januar, und in Sodankylä nur vier Tage kurz vor Weihnachten. Die Grenze der Polarnacht verläuft etwas nördlich des Polarkreises, Rovaniemi hat also keine echte Polarnacht (Foreca): Im Winter bleibt die Sonne niedrig, aber sie geht auf.',
        'Im Sommer kehrt sich das um. Die Grenze der Mitternachtssonne liegt in Rovaniemi am Polarkreis, und in Nuorgam geht die Sonne vom 16. Mai bis zum 29. Juli nicht unter (Finnisches Meteorologisches Institut). Verdunkelungsvorhänge sind die wichtigste Sommeranschaffung, eine Tageslichtlampe die für den Winter.',
      ],
    },
    {
      id: 'before-signing',
      kicker: 'Vor der Unterschrift',
      h2: 'Das sollten Sie den Vermieter fragen.',
      bullets: [
        'Heizungsart und wer sie bezahlt: Fernwärme ist meist in der Miete enthalten, Elektroheizung landet auf Ihrer eigenen Rechnung.',
        'Ein Stellplatz mit Stromsäule und ein Lagerplatz für Wintersachen: Ski, Schlitten, Winterreifen.',
        'Entfernung zum nächsten Laden, Gesundheitszentrum und zur Schule, und ob im Winter ein Bus dorthin fährt.',
        'Kaution und ihre Rückzahlung: höchstens drei Monatsmieten (Wohnraummietgesetz, § 8), und ab dem 1. Oktober 2026 Rückzahlung binnen 14 Tagen nach Ende des Mietverhältnisses (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Wann muss ich die Adressänderung melden?',
      a: 'Frühestens einen Monat vor dem Umzugstag und spätestens eine Woche nach dem Umzug (DVV). Eine Meldung gilt sowohl für die Agentur für Digitalisierung und Bevölkerungsdaten als auch für Posti.',
    },
    {
      q: 'Wann sind in Lappland Winterreifen vorgeschrieben?',
      a: 'Das Gesetz nennt den Zeitraum vom 1. November bis 31. März, wenn Wetter oder Straßenzustand es erfordern, und Spikes sind im selben Zeitraum erlaubt, außerdem zu anderen Zeiten, wenn die Bedingungen es verlangen (Traficom). Die Reifen werden also nach den Bedingungen gewechselt, nicht nach dem Kalender.',
    },
    {
      q: 'Hat Rovaniemi eine Polarnacht?',
      a: 'Keine echte: Die Grenze der Polarnacht verläuft etwas nördlich des Polarkreises (Foreca). In Sodankylä bleibt die Sonne vier Tage vor Weihnachten unter dem Horizont, in Nuorgam fast zwei Monate (Finnisches Meteorologisches Institut).',
    },
  ],
  cta: {
    partner: 'cars',
    kicker: 'Ein Auto für die ersten Wochen',
    h2: 'Besichtigungen, die Umzugsladung, der Laden.',
    lead:
      'Das eigene Auto kommt oft später. Ein Mietwagen vom Flughafen deckt die Besichtigungen und die ersten Wochen ab. Die Suche unseres Partners vergleicht die Autovermietungen in einem Zug.',
    chips: [
      { label: 'Rovaniemi (RVN)', destination: 'RVN', sid: 'moving_car_rvn' },
      { label: 'Kittilä (KTT)', destination: 'KTT', sid: 'moving_car_ktt' },
      { label: 'Kemi-Tornio (KEM)', destination: 'KEM', sid: 'moving_car_kem' },
      { label: 'Ivalo (IVL)', destination: 'IVL', sid: 'moving_car_ivl' },
    ],
  },
  sources: pickSources('de', SOURCES, common.sourceLabels),
};

export default copy;
