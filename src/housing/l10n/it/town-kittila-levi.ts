/**
 * Italia (it) · town-kittila-levi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/kittila-levi.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'kittila', 'yle2023', 'yle2017', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Affitti a Kittilä e Levi: alloggi comunali, affitti stagionali',
  metaDescription:
    'Affittare a Kittilä e Levi: la società comunale Kittilän Vuokratalot Oy, affitti stagionali di appartamenti vacanza, alloggio per il personale e sussidio Kela.',
  breadcrumb: 'Kittilä e Levi',
  hero: {
    eyebrow: 'Kittilä, 6.973 abitanti',
    title: 'Affitti a Kittilä e Levi.',
    subtitle:
      'Uno dei comuni a più rapida crescita della Lapponia e la sua stazione sciistica, dove lo stesso appartamento costa un affitto mensile in estate e una tariffa settimanale in inverno. Dove fare domanda e quando.',
  },
  authorNote:
    'Popolazione e crescita da Statistics Finland, Kittilän Vuokratalot Oy dalle pagine del comune e della società, prezzi stagionali di Levi da Yle, 25 maggio 2023. Verificato il 15 novembre 2026.',
  intro: [
    'Kittilä aveva 6.973 abitanti alla fine del 2025 ed è cresciuta del 2,0 percento in un anno, la seconda più rapida tra i comuni della Lapponia: solo Pelkosenniemi è cresciuto di più, del 2,4 percento (Statistics Finland). Il motore è Levi: nel 2017 Levin Matkailu Oy stimava che l’area della stazione avrebbe assunto poco più di 2.000 lavoratori stagionali per la stagione invernale (Yle, 25 ottobre 2017).',
    'Il mercato degli affitti di Levi segue la stagione: un appartamento di 80 m² in stile alpino vicino al centro costava 750 € al mese da maggio a novembre, 2.000 € a settimana in alta stagione e 1.650 € al mese tutto l’anno (Yle, 25 maggio 2023). Inoltre, in un appartamento vacanza potrebbe non riuscire a ottenere un indirizzo ufficiale.',
    'Un affitto a lungo termine è più probabile nel villaggio di Kittilä che nel centro di Levi. Gli appartamenti del comune sono affittati da Kittilän Vuokratalot Oy, e la domanda si presenta in via elettronica sul sito della società (kittila.fi, Kittilän Vuokratalot).',
  ],
  sections: [
    {
      id: 'channels',
      kicker: 'A chi rivolgersi',
      h2: 'La società comunale, i portali e il gruppo di Levi.',
      band: true,
      cards: [
        {
          title: 'Kittilän Vuokratalot Oy',
          body: 'Affitta gli appartamenti di proprietà del comune. L’ufficio è al piano terra del municipio (Valtatie 15, 99100 Kittilä). La società tratta solo domande elettroniche presentate tramite il suo sito, con gli allegati richiesti. Le sue pagine non dicono per quanto tempo resta valida una domanda, quindi lo chieda alla società.',
          href: 'https://kittila.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot',
          linkLabel: 'kittila.fi: Alloggi in affitto',
          event: 'kittila_city',
        },
        {
          title: 'Oikotie, Vuokraovi e TA-Asunnot',
          body: 'Annunci di privati e agenzie nel comune di Kittilä; le case di Levi sono nella stessa ricerca. TA-Asunnot ha propri appartamenti in affitto liberi a Kittilä.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kittil%C3%A4',
          linkLabel: 'Oikotie: affitti a Kittilä',
          event: 'oikotie',
        },
        {
          title: 'Alloggio del personale',
          body: 'I datori di lavoro della stazione sciistica affittano case a schiera e appartamenti vacanza per il personale per tutta la stagione e trattengono l’affitto dallo stipendio. Chieda per iscritto dell’alloggio insieme all’offerta di lavoro. Il quadro completo è nella pagina dei lavoratori stagionali.',
          href: '/seasonal-worker-housing',
          linkLabel: 'Alloggio per lavoratori stagionali',
          event: 'seasonal_page',
        },
        {
          title: 'Il gruppo Facebook sugli alloggi di Levi',
          body: 'Il canale più rapido nel villaggio ai piedi del fjäll e dove i lavoratori stagionali trovano spesso il loro appartamento. Nessuno garantisce per gli annunci: non versi mai un deposito prima di una visita e si faccia dare il contratto per iscritto.',
        },
      ],
    },
    {
      id: 'prices',
      kicker: 'Quanto costa l’affitto',
      h2: 'Il dato regionale e l’eccezione di Levi.',
      table: {
        caption: 'Affitto medio €/m²/mese, appartamenti in affitto a libero mercato, 2026T3',
        head: ['', 'Lapponia (regione)', 'Intero paese'],
        rows: [
          ['Monolocali', '17,25', '20,49'],
          ['Bilocali', '12,87', '15,07'],
          ['Trilocali e più grandi', '11,08', '13,98'],
          ['Tutti gli appartamenti', '13,14', '15,99'],
        ],
        foot: 'Statistics Finland, affitti 2026T3, tabella 15fa. Per Kittilä non viene pubblicato un dato separato, e gli affitti stagionali di Levi non rientrano affatto nelle statistiche.',
      },
      paras: [
        '<strong>L’esempio di Levi (Yle, 25 maggio 2023):</strong> un appartamento di 80 m² in stile alpino a 750 € al mese da maggio a novembre = 9,38 € al m², 2.000 € a settimana in alta stagione, 1.650 € al mese tutto l’anno = 20,63 € al m². Lo stesso appartamento costa meno della media regionale in estate e più del prezzo nazionale dei monolocali tutto l’anno.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Sussidio abitativo Kela',
      h2: 'Kittilä rientra negli «altri comuni» di Kela.',
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
        foot: 'Kela, sussidio abitativo generale 2026. Il sussidio è al massimo il 70% delle spese abitative riconosciute. In un appartamento vacanza senza indirizzo registrato le condizioni non sono soddisfatte.',
      },
    },
    {
      id: 'when',
      kicker: 'Quando fare domanda',
      h2: 'In estate, prima che inizino le tariffe settimanali.',
      bullets: [
        'Gli affitti mensili degli appartamenti vacanza sono disponibili solo da maggio a novembre, e in alta stagione il prezzo è una tariffa settimanale (Yle, 25 maggio 2023). Per la stagione invernale, trovi l’appartamento in estate.',
        'Presenti la domanda alla società comunale prima della stagione e chieda alla società per quanto tempo resta valida.',
        'Il deposito è al massimo di tre mensilità (Legge sugli affitti abitativi, art. 8), e dal 1° ottobre 2026 viene restituito entro 14 giorni dalla fine del contratto (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Dove trovo un affitto invernale a Levi?',
      a: 'Molto probabilmente dal datore di lavoro: le aziende della stazione sciistica affittano case a schiera e appartamenti vacanza per il personale per tutta la stagione. Sul mercato libero gli appartamenti di Levi in inverno si affittano a settimana (Yle, 25 maggio 2023), quindi l’affitto mensile è possibile soprattutto da maggio a novembre. La società comunale ha appartamenti sia nel villaggio di Kittilä sia a Sirkka, a Levi (Kittilän Vuokratalot).',
    },
    {
      q: 'Come si fa domanda per un appartamento comunale a Kittilä?',
      a: 'Con la domanda elettronica di Kittilän Vuokratalot Oy sul sito della società. Le domande incomplete, senza gli allegati richiesti, non vengono trattate. L’ufficio è al piano terra del municipio, Valtatie 15 (kittila.fi, Kittilän Vuokratalot).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Le prime notti',
    h2: 'Prima che l’appartamento sia libero.',
    lead: 'La ricerca del nostro partner mostra camere e appartamenti liberi a Levi e a Kittilä ai prezzi di oggi.',
    chips: [
      { label: 'Levi', destination: 'Levi', sid: 'rentals_levi_first_weeks' },
      { label: 'Kittilä', destination: 'Kittilä', sid: 'rentals_kittila_first_weeks' },
    ],
  },
  sources: pickSources('it', SOURCES, common.sourceLabels),
};

export default copy;
