/**
 * Italia (it) · milloin-sivu (/when-to-go). Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/whentogo.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import { whenToGoSources, type WhenToGoCopy } from '../../whentogo';
import common from './common';

const copy: WhenToGoCopy = {
  metaTitle: 'Quando andare in Lapponia: guida mese per mese',
  metaDescription:
    'Quando visitare la Lapponia finlandese, mese per mese: temperature, luce, neve, aurora boreale, sole di mezzanotte, colori d’autunno e zanzare. Dati ufficiali.',
  breadcrumb: 'Quando andare',
  hero: {
    eyebrow: 'Da gennaio a dicembre',
    title: 'La Lapponia, mese per mese.',
    subtitle:
      'Com’è ogni mese per meteo, luce e neve, che cosa si fa in quel periodo e che cosa significa se ci si vive. Dati dell’Istituto meteorologico finlandese e di Statistics Finland.',
  },
  intro: [
    'L’anno della Lapponia è fatto di due mondi diversi. Da novembre ad aprile ci sono neve, gelo e giornate corte; da maggio a settembre c’è la luce, che nell’estremo nord non tramonta affatto. In mezzo ci sono due brevi fasi che la gente del posto conosce bene: il disgelo primaverile e i colori d’autunno, la ruska.',
    'Qui sotto c’è prima l’intero anno in una tabella, poi mese per mese. I dati sono medie di lungo periodo: un singolo anno può differire in modo evidente, e secondo Metsähallitus la neve permanente ora arriva spesso più tardi della media statistica.',
  ],
  tableKicker: 'L’intero anno',
  tableH2: 'L’anno della Lapponia in numeri.',
  table: {
    caption: 'Durata del giorno a Rovaniemi il 15 del mese, temperatura media a Rovaniemi e Sodankylä, altezza della neve a Rovaniemi il 15 del mese',
    head: ['Mese', 'Durata del giorno', 'Temperatura media (Rovaniemi / Sodankylä)', 'Neve (Rovaniemi)', 'Che cosa succede'],
    rows: [
      ['Gennaio', '4 h 15 min', '−10,3 / −12,5 °C', '47 cm', 'Il mese più freddo'],
      ['Febbraio', '8 h 10 min', '−10,3 / −12,1 °C', '66 cm', 'Vacanze invernali'],
      ['Marzo', '11 h 37 min', '−5,6 / −7,1 °C', '77 cm', 'Aurore boreali, neve più alta'],
      ['Aprile', '15 h 25 min', '0,1 / −0,8 °C', '64 cm', 'Neve crostosa'],
      ['Maggio', '19 h 24 min', '6,5 / 5,6 °C', '–', 'La neve si scioglie, il disgelo'],
      ['Giugno', '24 h (senza tramonto)', '12,5 / 11,9 °C', '–', 'Sole di mezzanotte'],
      ['Luglio', '21 h 29 min', '15,6 / 15,0 °C', '–', 'Il mese più caldo, zanzare'],
      ['Agosto', '17 h 02 min', '13,1 / 12,4 °C', '–', 'Tornano le notti buie'],
      ['Settembre', '13 h 13 min', '7,7 / 7,0 °C', '–', 'Colori d’autunno'],
      ['Ottobre', '9 h 37 min', '0,8 / 0,0 °C', '–', 'Neve sui fjäll'],
      ['Novembre', '5 h 45 min', '−4,4 / −5,8 °C', '9 cm', 'Notte polare nell’estremo nord'],
      ['Dicembre', '2 h 27 min', '−7,7 / −9,6 °C', '28 cm', 'Giorno più corto: 2 h 14 min'],
    ],
    foot: 'Temperature e neve: Istituto meteorologico finlandese, periodo di riferimento 1991–2020; l’altezza della neve è la mediana. Durata del giorno: timeanddate.com per il 2027 (fonte secondaria; gli anni differiscono di circa un giorno). A giugno il sole non tramonta a Rovaniemi dal 7 giugno al 6 luglio.',
  },
  months: [
    {
      name: 'Gennaio',
      pitch: 'Il mese più freddo, la luce ritorna',
      body: 'Gennaio è il mese più freddo a Sodankylä e Utsjoki, con medie di −12,5 e −13,3 °C; Rovaniemi ha una media di −10,3. A Rovaniemi il giorno cresce nel corso del mese da 2 h 44 min a oltre sei ore, e a Utsjoki il sole risorge dopo la notte polare il 17 gennaio. La neve è in media alta circa mezzo metro.',
      good: ['Sci e sport sulla neve consolidata', 'Arctic Lapland Rally a Rovaniemi, 28–30 gennaio 2027'],
      note: ['Renne sulle strade: da novembre a gennaio è il periodo di punta degli incidenti con le renne', 'Gli hotel di Rovaniemi erano ancora pieni all’86% a gennaio 2025'],
    },
    {
      name: 'Febbraio',
      pitch: 'Neve e vacanze invernali',
      body: 'Insieme a dicembre, febbraio è il mese più pieno dell’anno: l’occupazione della Lapponia era del 77,6% a febbraio 2025, ma il prezzo medio delle camere è rimasto inferiore a quello di dicembre. La neve a Rovaniemi è in media alta 66 cm il 15 febbraio, e il giorno dura già otto ore.',
      good: ['Aurore boreali di fine inverno: l’Istituto meteorologico finlandese definisce fine inverno e inizio autunno i periodi statisticamente migliori', 'Sci e lunghe gite in giornata'],
      note: ['Prenoti presto: febbraio è uno dei mesi più pieni', 'Le scuole della regione di Helsinki e di Turku hanno la settimana bianca nella settimana 8 (22–26 febbraio 2027)'],
    },
    {
      name: 'Marzo',
      pitch: 'Aurore boreali e la neve più alta',
      body: 'L’Istituto meteorologico finlandese consiglia marzo per osservare le aurore boreali, perché la primavera è in media meno nuvolosa. La neve è al massimo, in media 77 cm a Rovaniemi, e il giorno supera le 13 ore. Sodankylä ha 141 ore di sole a marzo contro 59 a febbraio.',
      good: ['Aurore boreali', 'Sci con il bel tempo', 'Pasqua, 26–29 marzo 2027'],
      note: ['Le scuole di Rovaniemi hanno la settimana bianca nella settimana 10 (8–12 marzo 2027), e la Pasqua porta i viaggiatori finlandesi', 'Gli pneumatici invernali sono obbligatori fino al 31 marzo ogni volta che le condizioni lo richiedono'],
    },
    {
      name: 'Aprile',
      pitch: 'Neve crostosa e lunghe sere',
      body: 'C’è ancora molta neve, in media 64 cm a Rovaniemi il 15 aprile, e secondo Metsähallitus le condizioni di neve crostosa durano da metà aprile fino a metà maggio. Le aurore boreali si possono ancora vedere all’inizio del mese: a Rovaniemi le notti restano buie fino al 21 aprile circa, a Utsjoki fino al 10 aprile circa. Il prezzo medio delle camere in Lapponia era di 139–141 € ad aprile contro 200–225 € a marzo (2024–2025).',
      good: ['Sci sulla crosta e gite sui fjäll', 'Sole primaverile: il 20 aprile il giorno a Rovaniemi supera le 16 ore'],
      note: ['Alcune stazioni sciistiche chiudono ad aprile: la stagione di Ounasvaara finisce il 17 aprile 2027, mentre Ylläs prevede di chiudere all’inizio di maggio', 'I lavori stagionali finiscono: a Saariselkä gli ultimi giorni lavorativi invernali sono a metà aprile (Yle)'],
    },
    {
      name: 'Maggio',
      pitch: 'La neve si scioglie, il mese più tranquillo',
      body: 'La neve permanente di solito si scioglie intorno a Rovaniemi tra il 30 aprile e il 10 maggio e nella Lapponia dei fjäll tra il 10 e il 20 maggio. Il terreno è in pieno disgelo: troppo bagnato per sciare e troppo innevato per camminare. Maggio è il mese più tranquillo per il turismo, con circa 65.000 pernottamenti contro 430.000–620.000 nei mesi invernali, e molte attività fanno una pausa. Nell’estremo nord inizia già il sole di mezzanotte: a Nuorgam il 16 maggio.',
      good: ['Cercare un appartamento a Rovaniemi: secondo la DAS è in primavera e all’inizio dell’estate che si liberano più appartamenti rispetto ai richiedenti', 'Paesaggi tranquilli e luce primaverile'],
      note: ['Molti servizi turistici sono chiusi o a orario ridotto', 'La piena primaverile varia da metà maggio a metà giugno'],
    },
    {
      name: 'Giugno',
      pitch: 'Il sole di mezzanotte',
      body: 'Il sole non tramonta a Rovaniemi dal 7 giugno al 6 luglio, a Sodankylä dal 31 maggio al 13 luglio e a Utsjoki dal 18 maggio al 27 luglio. La temperatura media a Rovaniemi è di 12,5 °C. La stagione escursionistica inizia quando la neve lascia i fjäll; a Kilpisjärvi a giugno può esserci ancora neve.',
      good: ['Midnight Sun Film Festival a Sodankylä, 16–20 giugno 2027', 'La festa di mezza estate (juhannus), 25–26 giugno 2027'],
      note: ['La stagione delle zanzare, räkkä, di solito inizia intorno alla festa di mezza estate', 'Tende oscuranti per la camera da letto: una notte luminosa è bella ma non per dormire'],
    },
    {
      name: 'Luglio',
      pitch: 'Il mese più caldo, il preferito dei finlandesi',
      body: 'Luglio è il mese più caldo dell’anno: 15,6 °C in media a Rovaniemi, con massime giornaliere intorno ai 20. È anche il mese più popolare in Lapponia per i viaggiatori finlandesi, e i mesi da giugno ad agosto sono i più economici: la camera media nelle strutture ricettive della Lapponia costava circa 96–102 € (2024–2025). Le more artiche maturano da metà luglio a inizio agosto.',
      good: ['Escursioni e gite nella natura', 'Raccolta di bacche: more artiche da metà luglio, mirtilli da fine luglio'],
      note: ['Le zanzare sono al massimo, e durano fino a inizio o metà agosto', 'Luglio è anche il mese più piovoso, 81 mm a Rovaniemi'],
    },
    {
      name: 'Agosto',
      pitch: 'Tornano le notti buie',
      body: 'Le notti tornano buie a Rovaniemi intorno al 24 agosto, e secondo Visit Finland le aurore boreali sono visibili in Lapponia da fine agosto ad aprile. La prima neve cade di solito sulle cime dei fjäll in agosto o settembre. A Rovaniemi la scuola inizia a metà agosto (il 12 agosto nel 2026), e la ricerca di alloggio degli studenti raggiunge il picco.',
      good: ['Continua la stagione dei mirtilli e delle escursioni', 'Simerock a Rovaniemi, 13–14 agosto 2027'],
      note: ['A Rovaniemi la DAS ha il maggior numero di richiedenti ad agosto e settembre, e gli appartamenti liberati si affittano in fretta', 'Le assunzioni per la stagione invernale accelerano da agosto (Yle)'],
    },
    {
      name: 'Settembre',
      pitch: 'Colori d’autunno e aurore boreali autunnali',
      body: 'La ruska, i colori d’autunno, arriva nella Finlandia settentrionale nella prima metà di settembre: settimane 36–38 a Kilpisjärvi, Pallas-Ylläs e Utsjoki, settimane 37–39 nel Parco nazionale Urho Kekkonen. Intorno all’equinozio d’autunno le tempeste magnetiche sono in media più frequenti, e alla latitudine di Sodankylä le aurore boreali compaiono in media una notte serena e buia su due. Settembre è il secondo picco dei viaggiatori finlandesi.',
      good: ['Escursioni tra i colori d’autunno', 'Aurore boreali prima dell’inverno', 'Mirtilli rossi da inizio settembre'],
      note: ['A settembre può già nevicare sui fjäll', 'Le settimane della ruska riempiono le stazioni sui fjäll di viaggiatori finlandesi'],
    },
    {
      name: 'Ottobre',
      pitch: 'La neve arriva sui fjäll',
      body: 'Nel periodo di riferimento 1991–2020 dell’Istituto meteorologico finlandese la neve permanente è comparsa nella Lapponia dei fjäll tra il 17 e il 27 ottobre e a Sodankylä il 29 ottobre. Secondo Metsähallitus ora si forma spesso solo a fine novembre, a volte a dicembre. Nell’autunno 2026 le piste di Levi hanno aperto già all’inizio di ottobre. Ottobre è il secondo mese più tranquillo per le strutture ricettive dopo maggio.',
      good: ['Aurore boreali autunnali prima della neve', 'Festival di musica popolare Jutajaiset a Rovaniemi a ottobre'],
      note: ['A Rovaniemi molti contratti a tempo determinato finiscono a fine ottobre perché gli appartamenti vengono affittati ai turisti per l’inverno (Yle, 27 luglio 2026)', 'Nel 2026 la pausa scolastica autunnale era nella settimana 42 (12–16 ottobre), per esempio a Rovaniemi e a Helsinki'],
    },
    {
      name: 'Novembre',
      pitch: 'Nell’estremo nord inizia la notte polare',
      body: 'A Utsjoki la notte polare inizia il 26 novembre e dura in media 51 giorni. A Rovaniemi il sole sorge ogni giorno, ma il 15 novembre il giorno dura poco meno di sei ore. Le stazioni sciistiche aprono: nella stagione 2026–2027 Ounasvaara l’11 novembre, Ylläs il 21 novembre, mentre Luosto punta al 28 novembre.',
      good: ['Gli slalom della Coppa del Mondo a Levi a metà novembre', 'Inverno a prezzi pre-natalizi: una camera nelle strutture ricettive della Lapponia costava in media 192–209 € a novembre e 285–313 € a dicembre (2024–2025)'],
      note: ['Rovaniemi non è tranquilla a novembre: occupazione degli hotel del 72–82% (2023–2025)', 'Pneumatici invernali dal 1° novembre ogni volta che le condizioni lo richiedono. L’Arctic SnowHotel apre solo a dicembre'],
    },
    {
      name: 'Dicembre',
      pitch: 'Natale, il mese più affollato',
      body: 'Dicembre è il mese turistico più affollato e più caro della Lapponia: 622.449 pernottamenti e un prezzo medio della camera di 313 € a dicembre 2025. Il giorno più corto di Rovaniemi dura 2 h 14 min, ma il sole sorge; la notte polare dura solo quattro giorni a Sodankylä appena prima di Natale e dal 14 al 29 dicembre a Kittilä. Da quando esistono le misurazioni, a Sodankylä c’è sempre stata neve al suolo alla vigilia di Natale.',
      good: ['Natale: il Villaggio di Babbo Natale è aperto ogni giorno', 'Hotel di neve: l’Arctic SnowHotel apre il 15 dicembre 2026'],
      note: ['Prenoti con largo anticipo: gli hotel di Rovaniemi erano pieni al 93,5–97% a dicembre (2023–2025)', 'Secondo l’Istituto meteorologico finlandese, tardo autunno e inizio inverno sono il periodo più nuvoloso dell’anno, il che rende più difficile vedere le aurore boreali'],
    },
  ],
  goodLabel: 'Ideale per',
  noteLabel: 'Da tenere presente',
  monthsNav: 'Mesi',
  living: {
    kicker: 'Per chi vive qui',
    h2: 'Che cosa significa l’anno per chi ci vive.',
    items: [
      '<strong>Un appartamento in affitto a Rovaniemi:</strong> secondo la DAS è in primavera e all’inizio dell’estate che si liberano più appartamenti rispetto ai richiedenti, e agosto e settembre hanno il maggior numero di richiedenti. I contratti a tempo determinato finiscono a fine ottobre perché gli appartamenti vengono affittati ai turisti per l’inverno (Yle, 27 luglio 2026).',
      '<strong>Lavoro stagionale:</strong> le assunzioni invernali accelerano da agosto (Yle), e le stazioni sciistiche aprono a ottobre o novembre e chiudono ad aprile o maggio a seconda della stazione.',
      '<strong>Guida:</strong> gli pneumatici invernali sono obbligatori dal 1° novembre al 31 marzo ogni volta che le condizioni lo richiedono, e i chiodi si possono usare in altri periodi se le condizioni lo richiedono (Traficom). Gli incidenti con le renne raggiungono il picco da novembre a gennaio (Associazione degli allevatori di renne).',
      '<strong>Luce:</strong> tende oscuranti e una zanzariera in estate, una lampada per la terapia della luce e un catarifrangente in inverno. A Rovaniemi la notte polare è solo un nome: il sole sorge ogni giorno.',
    ],
  },
  links: [
    { label: 'Affitti città per città', href: '/rentals' },
    { label: 'Trasferirsi in Lapponia', href: '/moving-to-lapland' },
    { label: 'Alloggio per lavoratori stagionali', href: '/seasonal-worker-housing' },
    { label: 'Un mese in Lapponia', href: '/long-stays' },
  ],
  faqKicker: 'Le più richieste',
  faqH2: 'Domande sull’anno della Lapponia.',
  faqs: [
    {
      q: 'Quando si può vedere l’aurora boreale in Lapponia?',
      a: 'Ogni volta che le notti sono buie, da fine agosto ad aprile. Secondo l’Istituto meteorologico finlandese le tempeste magnetiche sono in media più frequenti in autunno e in primavera che in estate e in inverno, e consiglia marzo perché la primavera è in media meno nuvolosa. Alla latitudine di Sodankylä le aurore boreali compaiono in media una notte serena e buia su due.',
    },
    {
      q: 'A Rovaniemi c’è la notte polare?',
      a: 'No. A Rovaniemi il sole sorge ogni giorno, e il giorno più corto dura 2 h 14 min. La notte polare dura quattro giorni a Sodankylä, 16 giorni a Kittilä, circa cinque settimane a Ivalo e in media 51 giorni a Utsjoki.',
    },
    {
      q: 'Quando c’è la neve in Lapponia?',
      a: 'Nel periodo di riferimento 1991–2020 la neve permanente è comparsa a fine ottobre nella Lapponia dei fjäll e a inizio novembre intorno a Rovaniemi, ma secondo Metsähallitus ora si forma spesso solo a fine novembre. La neve è più alta a marzo e all’inizio di aprile e di solito si scioglie intorno a Rovaniemi tra il 30 aprile e il 10 maggio.',
    },
    {
      q: 'Quando c’è la stagione delle zanzare in Lapponia?',
      a: 'Secondo Metsähallitus la stagione delle zanzare, räkkä, di solito inizia intorno alla festa di mezza estate e dura fino a inizio o metà agosto.',
    },
  ],
  authorNote:
    'Temperature, neve e aurore boreali dall’Istituto meteorologico finlandese, calendario della natura da Metsähallitus, dati turistici mensili da Statistics Finland, vacanze dall’Agenzia nazionale finlandese per l’istruzione, eventi dai loro organizzatori. Verificato il 15 novembre 2026.',
  sources: whenToGoSources(common.whenToGoSourceLabels),
};

export default copy;
