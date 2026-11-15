/**
 * Italia (it) · town-sodankyla. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
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
  metaTitle: 'Affitti a Sodankylä: 720 appartamenti comunali e costi',
  metaDescription:
    'Affittare a Sodankylä: i circa 720 appartamenti comunali di Asentopuulaaki Oy, affitti da 7,40 a 18 € al m², domanda online e sussidio Kela.',
  breadcrumb: 'Sodankylä',
  hero: {
    eyebrow: 'Sodankylä, 8.095 abitanti',
    title: 'Affitti a Sodankylä.',
    subtitle:
      'Una guarnigione, una miniera e una comunità scientifica in un solo comune, dove la lunga carenza di alloggi del villaggio principale si è attenuata con la costruzione di nuovi edifici. Dove fare domanda e quanto costa.',
  },
  authorNote:
    'Popolazione da Statistics Finland, numero di appartamenti dalla pagina del comune, affitti, condizioni e appartamenti liberi dalle pagine di Asentopuulaaki Oy, lavori dall’Esercito finlandese, da Yle e dalle aziende. Verificato il 15 novembre 2026.',
  intro: [
    'Sodankylä aveva 8.095 abitanti alla fine del 2025 (Statistics Finland). Il comune possiede circa 720 appartamenti in affitto, affittati dalla sua controllata Asentopuulaaki Oy (sodankyla.fi). Quasi tutti gli appartamenti dell’elenco della società sono nel villaggio principale; gli altri sono ad Aska, Orajärvi, Riipi, Torvinen e Vaalajärvi.',
    'Secondo il comune, la carenza di alloggi che per anni ha afflitto Sodankylä si è attenuata: nell’estate 2025 è stato completato Käpyriihi, con 36 nuovi appartamenti, lungo il fiume Jeesiöjoki (Comune di Sodankylä, 2 luglio 2025). La ricerca appartamenti della società elenca di volta in volta gli appartamenti liberi o che si stanno liberando, con il loro affitto e la data in cui si liberano (Asentopuulaaki).',
    'La carenza non è del tutto finita. Nel settembre 2025 il direttore tecnico del comune ha detto a Yle che rende ancora difficile portare lavoratori a Sodankylä, anche se il lavoro c’è (Yle, 11 settembre 2025).',
  ],
  sections: [
    {
      id: 'prices',
      kicker: 'Quanto costa l’affitto',
      h2: 'Circa 10 € al m² in un edificio vecchio, 18 € in uno nuovo.',
      table: {
        caption: 'Affitti di Asentopuulaaki Oy, €/m²/mese, elenco immobili del 15 novembre 2026',
        head: ['Edifici', '€/m²/mese'],
        rows: [
          ['Käpyriihi, completato nel 2025', '18,00'],
          ['Peuranpalas 2013 e Kehtoranta 2015', '12,80–13,00'],
          ['Case a schiera, a ballatoio e condomini 1977–1998', '8,80–12,50'],
          ['Condomini nel centro, 1968–1970', '10,20'],
          ['Case a schiera nei villaggi periferici', '7,40–10,90'],
        ],
        foot: 'Calcolato dall’affitto di ogni appartamento dell’elenco immobili di Asentopuulaaki Oy, 15 novembre 2026: 42 edifici, 597 appartamenti. Il deposito è pari a una mensilità, l’acqua si paga in anticipo e l’inquilino paga l’elettricità domestica. Nelle case dei villaggi con riscaldamento elettrico l’inquilino paga anche il riscaldamento, che la società stima in circa 100 € al mese in estate e 200 € in inverno.',
      },
      paras: [
        '<strong>Esempi:</strong> un bilocale di 55 m² in un condominio del centro 632 € al mese; un bilocale di 42 m² a Käpyriihi 756 €; una casa a schiera di 80 m² con tre locali a Kaanaanmaa 800 €.',
        '<strong>Affitti privati:</strong> i bilocali a libero mercato costavano in media 11,73 € al m² nell’area postale del centro di Sodankylä a ottobre–dicembre 2025 (Statistics Finland, tabella 13eb). Non esiste un dato comunale più recente: Sodankylä non è nell’attuale tabella degli affitti di Statistics Finland.',
      ],
    },
    {
      id: 'channels',
      kicker: 'A chi rivolgersi',
      h2: 'Prima la società comunale, poi i portali.',
      band: true,
      cards: [
        {
          title: 'Asentopuulaaki Oy',
          body: 'La controllata comunale che affitta i circa 720 appartamenti del comune. Si fa domanda online e si allega la prova del reddito. La solvibilità viene controllata, e le segnalazioni di mancato pagamento pesano a sfavore.',
          href: 'https://www.asentopuulaaki.fi/asunnon-hakeminen/',
          linkLabel: 'asentopuulaaki.fi: Fare domanda per un appartamento',
          event: 'asentopuulaaki',
        },
        {
          title: 'Appartamenti liberi',
          body: 'La ricerca appartamenti della società mostra gli appartamenti liberi e di prossima disponibilità con il loro affitto e la data in cui si liberano. L’elenco è aggiornato sul sito della società, quindi lo controlli prima di fare domanda.',
          href: 'https://www.asentopuulaaki.fi/asuntohaku/',
          linkLabel: 'asentopuulaaki.fi: Ricerca appartamenti',
          event: 'asentopuulaaki_vapaat',
        },
        {
          title: 'Oikotie e Vuokraovi',
          body: 'Annunci di privati nel comune di Sodankylä. La pagina del comune sull’abitare non nomina altri locatori oltre alla propria società, quindi gli appartamenti privati si trovano sui portali.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/sodankyl%C3%A4',
          linkLabel: 'Oikotie: affitti a Sodankylä',
          event: 'oikotie',
        },
      ],
    },
    {
      id: 'student-loan',
      kicker: 'Per chi si trasferisce',
      h2: 'Fino a 5.800 € per neodiplomati e neolaureati.',
      paras: [
        'Sodankylä, Inari e Utsjoki compensano i prestiti per studenti dei neodiplomati e neolaureati che si trasferiscono lì e lavorano almeno al 50 percento del tempo pieno o come imprenditori. La compensazione è al massimo di 5.800 €, versata retroattivamente nell’arco di al massimo tre anni, per periodi di 12 mesi (Comune di Sodankylä).',
        'Copre i prestiti per studenti di una qualifica professionale secondaria superiore o di una laurea di un’università di scienze applicate o di un’università, e ci si deve essere diplomati o laureati negli ultimi due anni. Le domande vengono trattate per la prima volta a gennaio 2027, e secondo Yle il modulo di domanda apre il 1° dicembre 2026 (Yle, 1 settembre 2026).',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Sussidio abitativo Kela',
      h2: 'Sodankylä rientra negli «altri comuni» di Kela.',
      table: {
        caption: 'Spese abitative massime 2026, €/mese, gruppo Kela «altri comuni»',
        head: ['Dimensione del nucleo', 'Spese abitative massime'],
        rows: [
          ['1 persona', '394'],
          ['2 persone', '574'],
          ['3 persone', '734'],
          ['4 persone', '875'],
          ['Ogni persona in più', '+129'],
        ],
        foot: 'Kela, sussidio abitativo generale 2026. Il sussidio è al massimo il 70% delle spese abitative riconosciute; un sussidio inferiore a 15 € non viene versato.',
      },
    },
    {
      id: 'work',
      kicker: 'Lavoro',
      h2: 'La guarnigione cresce; la miniera chiude nel 2034.',
      bullets: [
        'La Brigata Jaeger (Jääkäriprikaati) dà lavoro a circa 400 persone e addestra circa 2.200 militari di leva all’anno (Esercito finlandese). Nella guarnigione di Sodankylä si sta costruendo una caserma per quasi 700 militari di leva, prevista per l’inizio del 2028 (Yle, 2 aprile 2026).',
        'La miniera di Kevitsa di Boliden ha annunciato 77 tagli di posti di lavoro a maggio 2026, e la chiusura della miniera è prevista per il 2034 (Yle, 26 maggio 2026).',
        'La miniera di Sakatti progettata da Anglo American dovrebbe entrare in funzione intorno al 2032, ma il progetto è ancora in fase di autorizzazione, e la sezione della Lapponia dell’Associazione finlandese per la conservazione della natura ha presentato ricorso in tribunale contro la decisione su Sakatti (Anglo American; Yle, 18 giugno 2026).',
        'Il comune cita anche la comunità scientifica di Tähtelä e la stazione sul fjäll di Luosto (sodankyla.fi). Luosto dista 38 km dal villaggio principale (OpenStreetMap).',
      ],
    },
    {
      id: 'everyday',
      kicker: 'La vita quotidiana',
      h2: 'Qui la notte polare dura quattro giorni.',
      bullets: [
        'A Sodankylä la notte polare dura solo quattro giorni, appena prima di Natale (Istituto meteorologico finlandese).',
        'L’aeroporto più vicino è Kittilä, a 93 km, e il centro di Rovaniemi dista 130 km (OpenStreetMap).',
        'Per gli studenti: REDU ha una residenza studentesca a Sodankylä, e a marzo 2026 il comune ha annunciato una residenza per studenti delle superiori e adulti in grandi appartamenti di Asentopuulaaki (redu.fi; Comune di Sodankylä, 5 marzo 2026).',
      ],
    },
    {
      id: 'contract',
      kicker: 'Il contratto',
      h2: 'Un mese di preavviso.',
      bullets: [
        'Da Asentopuulaaki il preavviso è di un mese di calendario, e il deposito viene restituito circa due settimane dopo il trasloco (Asentopuulaaki).',
        'Il deposito è al massimo di tre mensilità (Legge sugli affitti abitativi, art. 8).',
        'Dal 1° ottobre 2026 il deposito deve essere restituito, o la sua trattenuta motivata per iscritto, entro 14 giorni dalla fine del contratto (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Come si fa domanda per un appartamento comunale a Sodankylä?',
      a: 'Con la domanda online di Asentopuulaaki Oy, allegando la prova del reddito, per esempio una busta paga. La solvibilità viene controllata presso Suomen Asiakastieto, e le segnalazioni di mancato pagamento pesano a sfavore (Asentopuulaaki).',
    },
    {
      q: 'Quanto costa un appartamento in affitto a Sodankylä?',
      a: 'Nei vecchi condomini della società comunale circa 10 € al m², nelle case a schiera e a ballatoio per lo più 10–12,50 €, e a Käpyriihi, completato nel 2025, 18 €, quindi un bilocale di 42 m² costa 756 € al mese (Asentopuulaaki, 15 novembre 2026). I bilocali a libero mercato nel centro costavano in media 11,73 € al m² a ottobre–dicembre 2025 (Statistics Finland).',
    },
    {
      q: 'C’è carenza di alloggi a Sodankylä?',
      a: 'C’è stata per anni. Secondo il comune si è attenuata con il completamento di nuovi edifici (2 luglio 2025), e la ricerca appartamenti della società comunale elenca gli appartamenti liberi e di prossima disponibilità (Asentopuulaaki).',
    },
    {
      q: 'Chi può ottenere la compensazione del prestito per studenti?',
      a: 'Un neodiplomato o neolaureato che si trasferisce a Sodankylä, Inari o Utsjoki e lavora almeno al 50 percento del tempo pieno o come imprenditore. La compensazione è al massimo di 5.800 € in tre anni, e le domande vengono trattate per la prima volta a gennaio 2027 (Comune di Sodankylä).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Le prime notti',
    h2: 'Visite di persona.',
    lead: 'La ricerca del nostro partner mostra camere e appartamenti liberi a Sodankylä e a Luosto ai prezzi di oggi.',
    chips: [
      { label: 'Sodankylä', destination: 'Sodankylä', sid: 'rentals_sodankyla_first_weeks' },
      { label: 'Luosto', destination: 'Luosto', sid: 'rentals_luosto_first_weeks' },
    ],
  },
  sources: pickSources('it', SOURCES, common.sourceLabels),
};

export default copy;
