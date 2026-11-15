/**
 * Saksa (de) · milloin-sivu (/when-to-go). Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/whentogo.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import { whenToGoSources, type WhenToGoCopy } from '../../whentogo';
import common from './common';

const copy: WhenToGoCopy = {
  metaTitle: 'Beste Reisezeit für Lappland: Monat für Monat',
  metaDescription:
    'Beste Reisezeit für Lappland, Monat für Monat: Lappland im Winter und im Sommer, Temperaturen, Licht, Schnee, Polarlichter, Mitternachtssonne, Ruska.',
  breadcrumb: 'Reisezeit',
  hero: {
    eyebrow: 'Von Januar bis Dezember',
    title: 'Lappland, Monat für Monat.',
    subtitle:
      'Wie jeder Monat bei Wetter, Licht und Schnee ist, was man dann unternimmt und was es bedeutet, wenn Sie hier wohnen. Zahlen vom Finnischen Meteorologischen Institut und von Statistik Finnland.',
  },
  intro: [
    'Lapplands Jahr besteht aus zwei verschiedenen Welten. Von November bis April gibt es Schnee, Frost und kurze Tage, von Mai bis September Licht, das im hohen Norden gar nicht untergeht. Dazwischen liegen zwei kurze Phasen, die Einheimische gut kennen: das Tauwetter im Frühjahr und die Herbstfärbung, Ruska.',
    'Unten steht zuerst das ganze Jahr in einer Tabelle, dann Monat für Monat. Die Zahlen sind langjährige Mittelwerte: Ein einzelnes Jahr kann deutlich abweichen, und laut Metsähallitus kommt der dauerhafte Schnee heute oft später als im statistischen Durchschnitt.',
  ],
  tableKicker: 'Das ganze Jahr',
  tableH2: 'Lapplands Jahr in Zahlen.',
  table: {
    caption: 'Tageslänge in Rovaniemi am 15., Mitteltemperatur in Rovaniemi und Sodankylä, Schneehöhe in Rovaniemi am 15.',
    head: ['Monat', 'Tageslänge', 'Mitteltemperatur (Rovaniemi / Sodankylä)', 'Schnee (Rovaniemi)', 'Was passiert'],
    rows: [
      ['Januar', '4 Std. 15 Min.', '−10,3 / −12,5 °C', '47 cm', 'Kältester Monat'],
      ['Februar', '8 Std. 10 Min.', '−10,3 / −12,1 °C', '66 cm', 'Winterferien'],
      ['März', '11 Std. 37 Min.', '−5,6 / −7,1 °C', '77 cm', 'Polarlichter, tiefster Schnee'],
      ['April', '15 Std. 25 Min.', '0,1 / −0,8 °C', '64 cm', 'Harschschnee'],
      ['Mai', '19 Std. 24 Min.', '6,5 / 5,6 °C', '–', 'Schneeschmelze, Tauwetter'],
      ['Juni', '24 Std. (die Sonne geht nicht unter)', '12,5 / 11,9 °C', '–', 'Mitternachtssonne'],
      ['Juli', '21 Std. 29 Min.', '15,6 / 15,0 °C', '–', 'Wärmster Monat, Mücken'],
      ['August', '17 Std. 02 Min.', '13,1 / 12,4 °C', '–', 'Die dunklen Nächte kehren zurück'],
      ['September', '13 Std. 13 Min.', '7,7 / 7,0 °C', '–', 'Herbstfärbung'],
      ['Oktober', '9 Std. 37 Min.', '0,8 / 0,0 °C', '–', 'Schnee auf den Fjälls'],
      ['November', '5 Std. 45 Min.', '−4,4 / −5,8 °C', '9 cm', 'Polarnacht im hohen Norden'],
      ['Dezember', '2 Std. 27 Min.', '−7,7 / −9,6 °C', '28 cm', 'Kürzester Tag 2 Std. 14 Min.'],
    ],
    foot: 'Temperaturen und Schnee: Finnisches Meteorologisches Institut, Referenzzeitraum 1991–2020. Die Schneehöhe ist der Median. Tageslänge: timeanddate.com für 2027 (Sekundärquelle, die Jahre unterscheiden sich um etwa einen Tag). Im Juni geht die Sonne in Rovaniemi vom 7. Juni bis zum 6. Juli nicht unter.',
  },
  months: [
    {
      name: 'Januar',
      pitch: 'Der kälteste Monat, das Licht kehrt zurück',
      body: 'Der Januar ist in Sodankylä und Utsjoki der kälteste Monat mit durchschnittlich −12,5 und −13,3 °C, in Rovaniemi sind es −10,3. In Rovaniemi wächst der Tag im Lauf des Monats von 2 Std. 44 Min. auf über sechs Stunden, und in Utsjoki geht die Sonne nach der Polarnacht am 17. Januar wieder auf. Der Schnee liegt im Durchschnitt etwa einen halben Meter hoch.',
      good: ['Skifahren und Wintersport auf festem Schnee', 'Arctic Lapland Rally in Rovaniemi, 28.–30. Januar 2027'],
      note: ['Rentiere auf den Straßen: Von November bis Januar ist die Hauptzeit für Zusammenstöße mit Rentieren', 'Rovaniemis Hotels waren im Januar 2025 noch zu 86 % belegt'],
    },
    {
      name: 'Februar',
      pitch: 'Schnee und Winterferien',
      body: 'Zusammen mit dem Dezember ist der Februar der volleste Monat des Jahres: Lapplands Belegung lag im Februar 2025 bei 77,6 %, der durchschnittliche Zimmerpreis blieb aber unter dem des Dezembers. Der Schnee in Rovaniemi ist am 15. Februar im Durchschnitt 66 cm hoch, und der Tag ist schon acht Stunden lang.',
      good: ['Polarlichter im Spätwinter: Das Finnische Meteorologische Institut nennt Spätwinter und Frühherbst statistisch die besten Zeiten', 'Skifahren und lange Tagesausflüge'],
      note: ['Buchen Sie früh, der Februar ist einer der vollsten Monate', 'Die Schulen im Raum Helsinki und in Turku haben ihre Skiferien in Woche 8 (22.–26. Februar 2027)'],
    },
    {
      name: 'März',
      pitch: 'Polarlichter und der tiefste Schnee',
      body: 'Das Finnische Meteorologische Institut empfiehlt den März zur Polarlichtbeobachtung, weil das Frühjahr im Durchschnitt weniger bewölkt ist. Der Schnee liegt am höchsten, in Rovaniemi im Durchschnitt 77 cm, und der Tag wächst über 13 Stunden. Sodankylä hat im März 141 Sonnenstunden gegenüber 59 im Februar.',
      good: ['Polarlichter', 'Skifahren bei sonnigem Wetter', 'Ostern, 26.–29. März 2027'],
      note: ['Die Schulen in Rovaniemi haben ihre Skiferien in Woche 10 (8.–12. März 2027), und Ostern bringt Reisende aus dem Inland', 'Winterreifen sind bis zum 31. März vorgeschrieben, wenn die Bedingungen es erfordern'],
    },
    {
      name: 'April',
      pitch: 'Harschschnee und lange Abende',
      body: 'Es liegt noch reichlich Schnee, in Rovaniemi am 15. April im Durchschnitt 64 cm, und laut Metsähallitus dauern die Harschschnee-Bedingungen von Mitte April bis teils Mitte Mai. Polarlichter sind Anfang des Monats noch zu sehen: Die Nächte in Rovaniemi werden bis etwa 21. April dunkel, in Utsjoki bis etwa 10. April. Der durchschnittliche Zimmerpreis in Lappland lag im April bei 139–141 € gegenüber 200–225 € im März (2024–2025).',
      good: ['Skifahren auf Harsch und Fjäll-Touren', 'Frühlingssonne: Am 20. April ist der Tag in Rovaniemi über 16 Stunden lang'],
      note: ['Manche Skiresorts schließen im April: Die Saison am Ounasvaara endet am 17. April 2027, Ylläs rechnet mit dem Saisonende Anfang Mai', 'Saisonjobs enden: In Saariselkä liegen die letzten Arbeitstage des Winters Mitte April (Yle)'],
    },
    {
      name: 'Mai',
      pitch: 'Der Schnee schmilzt, der ruhigste Monat',
      body: 'Der dauerhafte Schnee schmilzt rund um Rovaniemi typischerweise zwischen dem 30. April und dem 10. Mai und im Fjäll-Lappland zwischen dem 10. und 20. Mai. Das Gelände ist im Tauwetter: zu nass zum Skifahren und zu verschneit zum Wandern. Der Mai ist der ruhigste Monat für den Tourismus, mit etwa 65.000 Übernachtungen gegenüber 430.000–620.000 in den Wintermonaten, und viele Betriebe machen Pause. Im hohen Norden beginnt schon die Mitternachtssonne: in Nuorgam am 16. Mai.',
      good: ['Wohnungssuche in Rovaniemi: Laut DAS werden im Verhältnis zu den Bewerbern im Frühjahr und Frühsommer die meisten Wohnungen frei', 'Ruhige Landschaften und Frühlingslicht'],
      note: ['Viele touristische Angebote sind geschlossen oder haben verkürzte Öffnungszeiten', 'Das Frühjahrshochwasser schwankt von Mitte Mai bis Mitte Juni'],
    },
    {
      name: 'Juni',
      pitch: 'Die Mitternachtssonne',
      body: 'Die Sonne geht in Rovaniemi vom 7. Juni bis zum 6. Juli nicht unter, in Sodankylä vom 31. Mai bis zum 13. Juli und in Utsjoki vom 18. Mai bis zum 27. Juli. Die Mitteltemperatur in Rovaniemi beträgt 12,5 °C. Die Wandersaison beginnt, wenn der Schnee die Fjälls verlässt, in Kilpisjärvi kann im Juni noch Schnee liegen.',
      good: ['Midnight Sun Film Festival in Sodankylä, 16.–20. Juni 2027', 'Mittsommer, 25.–26. Juni 2027'],
      note: ['Die Mückensaison, Räkkä, beginnt meist um Mittsommer', 'Verdunkelungsvorhänge fürs Schlafzimmer: Eine helle Nacht ist schön, aber nicht zum Schlafen'],
    },
    {
      name: 'Juli',
      pitch: 'Der wärmste Monat, der Liebling der Finnen',
      body: 'Der Juli ist der wärmste Monat des Jahres: in Rovaniemi im Durchschnitt 15,6 °C, mit Tageshöchstwerten um 20. Er ist auch der beliebteste Monat in Lappland für finnische Reisende, und Juni bis August sind die günstigsten Monate: Das durchschnittliche Zimmer in Lapplands Beherbergungsbetrieben kostete etwa 96–102 € (2024–2025). Moltebeeren reifen von Mitte Juli bis Anfang August.',
      good: ['Wandern und Ausflüge in die Natur', 'Beerenpflücken: Moltebeeren ab Mitte Juli, Heidelbeeren ab Ende Juli'],
      note: ['Die Mücken sind am schlimmsten und bleiben bis Anfang oder Mitte August', 'Der Juli ist auch der regenreichste Monat, 81 mm in Rovaniemi'],
    },
    {
      name: 'August',
      pitch: 'Die dunklen Nächte kehren zurück',
      body: 'In Rovaniemi werden die Nächte um den 24. August wieder dunkel, und laut Visit Finland sind Polarlichter in Lappland von Ende August bis April sichtbar. Der erste Schnee fällt meist im August oder September auf die Gipfel der Fjälls. In Rovaniemi beginnt die Schule Mitte August (2026 am 12. August), und die Wohnungssuche der Studierenden erreicht ihren Höhepunkt.',
      good: ['Die Heidelbeer- und Wandersaison geht weiter', 'Simerock in Rovaniemi, 13.–14. August 2027'],
      note: ['In Rovaniemi hat DAS im August und September die meisten Bewerber, und freigewordene Wohnungen sind schnell vermietet', 'Die Anwerbung für die Wintersaison zieht ab August an (Yle)'],
    },
    {
      name: 'September',
      pitch: 'Herbstfärbung und Polarlichter im Herbst',
      body: 'Ruska, die Herbstfärbung, erreicht Nordfinnland in der ersten Septemberhälfte: in den Wochen 36–38 in Kilpisjärvi, Pallas-Ylläs und Utsjoki, in den Wochen 37–39 im Urho-Kekkonen-Nationalpark. Um die Herbst-Tagundnachtgleiche sind magnetische Stürme im Durchschnitt häufiger, und auf der Breite von Sodankylä erscheinen Polarlichter im Durchschnitt in jeder zweiten klaren, dunklen Nacht. Der September ist der zweite Höhepunkt der finnischen Reisenden.',
      good: ['Wanderungen zur Herbstfärbung', 'Polarlichter vor dem Winter', 'Preiselbeeren ab Anfang September'],
      note: ['Im September kann es auf den Fjälls schon schneien', 'In den Ruska-Wochen füllen Reisende aus dem Inland die Fjäll-Resorts'],
    },
    {
      name: 'Oktober',
      pitch: 'Der Schnee erreicht die Fjälls',
      body: 'Im Referenzzeitraum 1991–2020 des Finnischen Meteorologischen Instituts begann der dauerhafte Schnee im Fjäll-Lappland zwischen dem 17. und 27. Oktober und in Sodankylä am 29. Oktober. Laut Metsähallitus bildet er sich heute oft erst Ende November, manchmal im Dezember. Im Herbst 2026 öffneten Levis Pisten schon Anfang Oktober. Der Oktober ist nach dem Mai der zweitruhigste Monat für Unterkünfte.',
      good: ['Polarlichter im Herbst vor dem Schnee', 'Volksmusikfestival Jutajaiset in Rovaniemi im Oktober'],
      note: ['In Rovaniemi enden viele befristete Mietverträge Ende Oktober, weil Wohnungen für den Winter an Touristen vermietet werden (Yle, 27. Juli 2026)', '2026 lagen die Herbstferien der Schulen in Woche 42 (12.–16. Oktober), zum Beispiel in Rovaniemi und Helsinki'],
    },
    {
      name: 'November',
      pitch: 'Im hohen Norden beginnt die Polarnacht',
      body: 'In Utsjoki beginnt die Polarnacht am 26. November und dauert im Durchschnitt 51 Tage. In Rovaniemi geht die Sonne jeden Tag auf, aber am 15. November ist der Tag knapp unter sechs Stunden lang. Die Skiresorts öffnen: in der Saison 2026–2027 der Ounasvaara am 11. November, Ylläs am 21. November und Luosto mit dem Ziel 28. November.',
      good: ['Die Weltcup-Slaloms in Levi Mitte November', 'Winter zu Preisen vor Weihnachten: Ein Zimmer in Lapplands Beherbergungsbetrieben kostete im Durchschnitt 192–209 € im November und 285–313 € im Dezember (2024–2025)'],
      note: ['Rovaniemi ist im November nicht ruhig: Hotelbelegung 72–82 % (2023–2025)', 'Winterreifen ab dem 1. November, wenn die Bedingungen es erfordern. Das Arctic SnowHotel öffnet erst im Dezember'],
    },
    {
      name: 'Dezember',
      pitch: 'Weihnachten, der betriebsamste Monat',
      body: 'Der Dezember ist Lapplands betriebsamster und teuerster Tourismusmonat: 622.449 Übernachtungen und ein durchschnittlicher Zimmerpreis von 313 € im Dezember 2025. Rovaniemis kürzester Tag dauert 2 Std. 14 Min., aber die Sonne geht auf. Die Polarnacht dauert in Sodankylä nur vier Tage kurz vor Weihnachten und in Kittilä vom 14. bis 29. Dezember. In Sodankylä lag seit Beginn der Aufzeichnungen an jedem Heiligabend Schnee.',
      good: ['Weihnachten: Das Santa Claus Village ist jeden Tag geöffnet', 'Schneehotels: Das Arctic SnowHotel öffnet am 15. Dezember 2026'],
      note: ['Buchen Sie lange im Voraus: Rovaniemis Hotels waren im Dezember zu 93,5–97 % belegt (2023–2025)', 'Spätherbst und Frühwinter sind laut dem Finnischen Meteorologischen Institut die bewölkteste Zeit des Jahres, was Polarlichter schwerer sichtbar macht'],
    },
  ],
  goodLabel: 'Gut für',
  noteLabel: 'Zu beachten',
  monthsNav: 'Monate',
  living: {
    kicker: 'Wenn Sie hier wohnen',
    h2: 'Was das Jahr für das Wohnen bedeutet.',
    items: [
      '<strong>Eine Mietwohnung in Rovaniemi:</strong> Laut DAS werden im Verhältnis zu den Bewerbern im Frühjahr und Frühsommer die meisten Wohnungen frei, und im August und September gibt es die meisten Bewerber. Befristete Mietverträge enden Ende Oktober, weil Wohnungen für den Winter an Touristen vermietet werden (Yle, 27. Juli 2026).',
      '<strong>Saisonarbeit:</strong> Die Anwerbung für den Winter zieht ab August an (Yle), und die Skiresorts öffnen im Oktober oder November und schließen je nach Resort im April oder Mai.',
      '<strong>Autofahren:</strong> Winterreifen sind vom 1. November bis 31. März vorgeschrieben, wenn die Bedingungen es erfordern, und Spikes dürfen zu anderen Zeiten benutzt werden, wenn die Bedingungen es verlangen (Traficom). Zusammenstöße mit Rentieren häufen sich von November bis Januar (Verband der Rentierzüchter).',
      '<strong>Licht:</strong> Verdunkelungsvorhänge und ein Moskitonetz im Sommer, eine Tageslichtlampe und ein Reflektor im Winter. In Rovaniemi ist die Polarnacht nur ein Name: Die Sonne geht jeden Tag auf.',
    ],
  },
  links: [
    { label: 'Mietwohnungen Ort für Ort', href: '/rentals' },
    { label: 'Umzug nach Lappland', href: '/moving-to-lapland' },
    { label: 'Wohnen bei Saisonarbeit', href: '/seasonal-worker-housing' },
    { label: 'Ein Monat in Lappland', href: '/long-stays' },
  ],
  faqKicker: 'Häufig gefragt',
  faqH2: 'Fragen zu Lapplands Jahr.',
  faqs: [
    {
      q: 'Wann kann man in Lappland Polarlichter sehen?',
      a: 'Immer, wenn die Nächte dunkel sind, von Ende August bis April. Laut dem Finnischen Meteorologischen Institut sind magnetische Stürme im Herbst und Frühjahr im Durchschnitt häufiger als im Sommer und Winter, und es empfiehlt den März, weil das Frühjahr im Durchschnitt weniger bewölkt ist. Auf der Breite von Sodankylä erscheinen sie im Durchschnitt in jeder zweiten klaren, dunklen Nacht.',
    },
    {
      q: 'Gibt es in Rovaniemi eine Polarnacht?',
      a: 'Nein. In Rovaniemi geht die Sonne jeden Tag auf, und der kürzeste Tag dauert 2 Std. 14 Min. Die Polarnacht dauert in Sodankylä vier Tage, in Kittilä 16 Tage, in Ivalo etwa fünf Wochen und in Utsjoki im Durchschnitt 51 Tage.',
    },
    {
      q: 'Wann liegt in Lappland Schnee?',
      a: 'Im Referenzzeitraum 1991–2020 begann der dauerhafte Schnee im Fjäll-Lappland Ende Oktober und rund um Rovaniemi Anfang November, aber laut Metsähallitus bildet er sich heute oft erst Ende November. Der Schnee ist im März und Anfang April am tiefsten und schmilzt rund um Rovaniemi typischerweise zwischen dem 30. April und dem 10. Mai.',
    },
    {
      q: 'Wann ist in Lappland Mückensaison?',
      a: 'Laut Metsähallitus beginnt die Mückensaison, Räkkä, meist um Mittsommer und dauert bis Anfang oder Mitte August.',
    },
  ],
  authorNote:
    'Temperaturen, Schnee und Polarlichter vom Finnischen Meteorologischen Institut, der Naturkalender von Metsähallitus, monatliche Tourismuszahlen von Statistik Finnland, Ferien von der Finnischen Nationalen Bildungsagentur, Veranstaltungen von ihren Veranstaltern. Geprüft am 15. November 2026.',
  sources: whenToGoSources(common.whenToGoSourceLabels),
};

export default copy;
