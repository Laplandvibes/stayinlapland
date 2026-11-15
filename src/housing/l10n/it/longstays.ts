/**
 * Italia (it) · longstays. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/longstays.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['ahvl531', 'kuluttajaliittoVuokra', 'rakli', 'dvvTilapainen', 'dvv'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Un mese o un inverno in Lapponia: casa, baita o alloggio',
  metaDescription:
    'Restare un mese o un inverno nella Lapponia finlandese: un appartamento arredato in affitto, una baita a settimana o l’alloggio del datore di lavoro.',
  breadcrumb: 'Soggiorni lunghi',
  hero: {
    eyebrow: 'Da un mese a un inverno',
    title: 'Un mese in Lapponia.',
    subtitle:
      'Un appartamento arredato in affitto, una baita a settimana o l’alloggio del datore di lavoro: tre modi di vivere in Lapponia da un mese a un intero inverno, e che cosa chiede ciascun contratto.',
  },
  authorNote:
    'Normativa da Finlex (Legge sugli affitti abitativi 481/1995, modifica 531/2026), comunicazione dell’indirizzo dall’Agenzia per i servizi digitali e i dati sulla popolazione, dettagli delle baite dal feed prodotti di Lomarengas. Verificato il 15 novembre 2026.',
  intro: [
    'Un mese di lavoro da remoto a Levi, un inverno a Rovaniemi o una stagione in una stazione sciistica: un soggiorno più lungo in Lapponia si riduce di solito a una di tre opzioni. Differiscono per prezzo, ma ancora di più per il tipo di contratto che si ottiene e per ciò che la legge tutela in quel caso.',
    'Se viene in vacanza e non per viverci, gli hotel e le baite si trovano sul nostro sito gemello <a href="https://laplandstays.com/it/" target="_blank" rel="noopener">laplandstays.com</a> e le ville su <a href="https://laplandluxuryvillas.com/it/" target="_blank" rel="noopener">laplandluxuryvillas.com</a>.',
  ],
  sections: [
    {
      id: 'three-ways',
      kicker: 'Tre modi',
      h2: 'Un appartamento, una baita o l’alloggio del personale.',
      cards: [
        {
          title: 'Appartamento arredato in affitto',
          body: 'Un <strong>contratto d’affitto abitativo</strong>, per un soggiorno più lungo di solito a tempo determinato. La legge sugli affitti La tutela: il deposito è al massimo di tre mensilità e dal 1° ottobre 2026 deve essere restituito entro 14 giorni.',
          href: '/rentals',
          linkLabel: 'Affitti città per città',
        },
        {
          title: 'Baita a settimana',
          body: 'Le baite vacanza si affittano a settimana tramite un’agenzia, e le condizioni sono di solito quelle di prenotazione e cancellazione dell’agenzia. La legge sugli affitti riguarda un appartamento affittato per abitarci, non l’attività delle imprese ricettive. Qui sotto le baite disponibili, con foto.',
        },
        {
          title: 'Alloggio del personale',
          body: 'Nel lavoro stagionale l’alloggio spesso arriva con l’impiego. Prima di firmare, chieda se l’appartamento fa parte del rapporto di lavoro e che cosa gli succede se il lavoro finisce a stagione in corso.',
          href: '/seasonal-worker-housing',
          linkLabel: 'Alloggio per lavoratori stagionali',
        },
      ],
    },
    {
      id: 'contract',
      kicker: 'Il contratto',
      h2: 'Un contratto a tempo determinato non si può chiudere in anticipo.',
      bullets: [
        '<strong>Un contratto a tempo determinato dura fino alla data scritta al suo interno.</strong> L’inquilino non può dare disdetta durante il periodo. Può finire prima solo per accordo con il locatore o nelle situazioni specifiche previste dalla legge (Unione finlandese dei consumatori, legge sugli affitti).',
        '<strong>Se non sa quanto resterà,</strong> chieda invece un contratto a tempo indeterminato. L’inquilino può dare disdetta, e il preavviso dell’inquilino non cambia con la riforma del 1° ottobre 2026 (Rakli).',
        '<strong>Contratti brevi uno dopo l’altro:</strong> se allo stesso inquilino viene dato più di due volte di seguito un contratto a tempo determinato di tre mesi o meno, il contratto si considera a tempo indeterminato, qualunque data di scadenza porti.',
        '<strong>La legge sugli affitti non copre tutto.</strong> Si applica a un appartamento affittato per abitarci, ma non all’attività delle imprese ricettive (Legge sugli affitti abitativi, artt. 1 e 2). Prima di firmare, chieda se riceve un contratto d’affitto abitativo o un contratto di alloggio.',
        '<strong>Il deposito</strong> è al massimo di tre mensilità. Dal 1° ottobre 2026 deve essere restituito, o la sua trattenuta comunicata, entro 14 giorni dalla fine del contratto.',
      ],
    },
    {
      id: 'address',
      kicker: 'Comunicazione dell’indirizzo',
      h2: 'Tre mesi o più: comunichi l’indirizzo.',
      paras: [
        'Secondo l’Agenzia per i servizi digitali e i dati sulla popolazione, un trasferimento va comunicato ogni volta che cambia l’indirizzo di residenza e il soggiorno dura almeno tre mesi. Se ritorna allo stesso indirizzo permanente entro un anno, il trasferimento è temporaneo e il Suo indirizzo permanente resta in vigore.',
        'La comunicazione si fa al più presto un mese prima del giorno del trasloco e al più tardi una settimana dopo il trasloco. Per un trasferimento definitivo, il resto, come gli pneumatici invernali, il contratto di elettricità e il centro sanitario, è nella <a href="/moving-to-lapland/">lista di controllo del trasloco</a>.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Posso affittare un appartamento in Lapponia per un mese?',
      a: 'Sì. Un contratto a tempo determinato può essere anche breve, e le baite vacanza si affittano a settimana. Cerchi sui portali di affitto la parola «kalustettu» (arredato). Prima di firmare, chieda se si tratta di un contratto d’affitto abitativo o di alloggio, perché la legge sugli affitti tutela solo il primo.',
    },
    {
      q: 'Devo comunicare l’indirizzo se passo l’inverno in Lapponia?',
      a: 'Sì, se il soggiorno dura almeno tre mesi. Se ritorna allo stesso indirizzo permanente entro un anno, il trasferimento è temporaneo e il Suo indirizzo permanente resta in vigore (Agenzia per i servizi digitali e i dati sulla popolazione).',
    },
    {
      q: 'Posso chiudere un contratto a tempo determinato se finisce il mio lavoro?',
      a: 'Di solito no. Un contratto a tempo determinato dura fino alla data scritta al suo interno. Concordi con il locatore una fine anticipata, oppure scelga fin dall’inizio un contratto a tempo indeterminato, che l’inquilino può disdire.',
    },
  ],
  sources: pickSources('it', SOURCES, common.sourceLabels),
};

export default copy;
