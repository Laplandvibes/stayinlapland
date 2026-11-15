/**
 * Italia (it) · town-kemijarvi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/kemijarvi.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'tkVaesto', 'kemijarvi', 'kemijarviHaku', 'kemijarviVuostimo', 'kemijarviTalousarvio', 'kemijarviTietoa',
  'kemijarviToihin', 'tkVuokrat', 'tkVuokratPostinumero', 'kela', 'tkAvainluvut', 'osrm', 'redu', 'ahvl', 'rakli',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Affitti a Kemijärvi: 560 appartamenti comunali e domanda',
  metaDescription:
    'Affittare a Kemijärvi: i 560 appartamenti della città, la domanda online, gli aumenti del 2026, le case a schiera di Vuostimo vicino a Pyhä e il sussidio Kela.',
  breadcrumb: 'Kemijärvi',
  hero: {
    eyebrow: 'Kemijärvi, 6.919 abitanti',
    title: 'Affitti a Kemijärvi.',
    subtitle:
      'La città più settentrionale della Finlandia, dove il comune possiede 560 appartamenti in affitto e alcuni restano vuoti. Dove fare domanda e che cosa sapere prima di trasferirsi.',
  },
  authorNote:
    'Popolazione da Statistics Finland, numero di appartamenti e modalità di domanda dalle pagine della Città di Kemijärvi, aumenti degli affitti e obiettivi di occupazione dal bilancio 2026 della città. Verificato il 15 novembre 2026.',
  intro: [
    'Kemijärvi aveva 6.919 abitanti alla fine del 2025, 35 in meno di un anno prima (Statistics Finland). La città si definisce la città più settentrionale della Finlandia e dice che i servizi del centro sono raggiungibili a piedi (kemijarvi.fi).',
    'Le due società immobiliari della città, Kemijärven Vuokratalot e Kemijärven Töveli, possiedono 560 appartamenti in affitto (kemijarvi.fi). Il bilancio comunale considera realistico un obiettivo dell’80–85 percento di quegli appartamenti dati in locazione, quindi appartamenti vuoti ce ne sono.',
    'Gli affitti salgono: Kemijärven Vuokratalot ha aumentato gli affitti del 4,5 percento il 1° febbraio 2026 e Töveli del 5 percento il 1° luglio 2026. Gli stessi aumenti sono scritti nel piano per il 2027 e il 2028 (bilancio 2026).',
  ],
  sections: [
    {
      id: 'channels',
      kicker: 'A chi rivolgersi',
      h2: 'Prima le società della città, poi i portali.',
      band: true,
      cards: [
        {
          title: 'Gli alloggi in affitto della città',
          body: 'I 560 appartamenti della città sono nel centro, a Särkikangas, Sipovaara, Isokylä, Halosenranta e Vuostimo. Si fa domanda online o con un modulo cartaceo presso Sortteeri (Vapaudenkatu 8). La domanda ha una validità di quattro mesi e si può rinnovare.',
          href: 'https://kemijarvi.fi/asuminen-ja-ymparisto/asuminen/kemijarven-kaupungin-vuokratalot/asunnon-hakeminen/',
          linkLabel: 'kemijarvi.fi: Fare domanda per un appartamento',
          event: 'kemijarvi_city',
        },
        {
          title: 'Vuostimo, a 14 km da Pyhä',
          body: 'Case a schiera di proprietà della città, del 1987, a Vuostimo, a circa 35 chilometri a nord del centro. La stazione sciistica di Pyhätunturi dista 14 chilometri, il che ne fa gli appartamenti in affitto della città più vicini a Pyhä.',
          href: 'https://kemijarvi.fi/asuminen-ja-ymparisto/asuminen/kemijarven-kaupungin-vuokratalot/vuokratalokohteet/vuostimo/',
          linkLabel: 'kemijarvi.fi: Vuostimo',
          event: 'kemijarvi_vuostimo',
        },
        {
          title: 'Oikotie e Vuokraovi',
          body: 'Annunci di privati e agenzie sotto il comune di Kemijärvi. Le pagine della città sull’abitare non elencano locatori privati, quindi i loro appartamenti si trovano sui portali.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kemij%C3%A4rvi',
          linkLabel: 'Oikotie: affitti a Kemijärvi',
          event: 'oikotie',
        },
      ],
    },
    {
      id: 'prices',
      kicker: 'Quanto costa l’affitto',
      h2: 'Le società della città non pubblicano i propri affitti.',
      table: {
        caption: 'Affitto medio €/m²/mese, appartamenti in affitto a libero mercato, 2026T3',
        head: ['', 'Lapponia (regione)', 'Intero paese'],
        rows: [
          ['Monolocali', '17,25', '20,49'],
          ['Bilocali', '12,87', '15,07'],
          ['Trilocali e più grandi', '11,08', '13,98'],
          ['Tutti gli appartamenti', '13,14', '15,99'],
        ],
        foot: 'Statistics Finland, affitti 2026T3, tabella 15fa. Per Kemijärvi non viene pubblicato un dato separato, e il dato regionale include la più cara Rovaniemi.',
      },
      paras: [
        '<strong>Il dato proprio di Kemijärvi risale al 2022.</strong> Nell’area postale del centro, 98100, i monolocali a libero mercato costavano in media 12,15 € al m² e i bilocali 9,10 € al m² a gennaio–marzo 2022. Ogni trimestre da allora è stato soppresso: Statistics Finland non pubblica il dato di un’area postale quando le osservazioni sono troppo poche (tabella 13eb).',
        'Gli affitti delle società della città non sono online. Chieda l’affitto al segretario degli alloggi prima di accettare un’offerta, e ricordi che nel 2026 gli affitti sono saliti: del 4,5 percento a Vuokratalot e del 5 percento a Töveli.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Sussidio abitativo Kela',
      h2: 'Kemijärvi rientra negli «altri comuni» di Kela.',
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
      kicker: 'Lavoro e collegamenti',
      h2: 'Si accordi sul lavoro prima di trasferirsi.',
      bullets: [
        'Secondo la città, i suoi principali datori di lavoro oltre alla città stessa sono Keitele Group, Festivo Porkka Group e il centro contatti di Kela, insieme alle attività del commercio, dei servizi e del turismo (bilancio 2026).',
        'I disoccupati rappresentavano il 15,6 percento della forza lavoro nel 2024, contro l’11,7 percento della Finlandia nel suo insieme (Statistics Finland).',
        'Suomutunturi dista 46 km dal centro e Pyhätunturi 50 km (OpenStreetMap). Suomu si trova nel territorio di Kemijärvi; Pyhä appartiene al comune confinante di Pelkosenniemi.',
        'L’aeroporto di Rovaniemi dista 80 km (OpenStreetMap), e la città dice che un collegamento ferroviario diretto arriva fino a Helsinki (kemijarvi.fi).',
      ],
    },
    {
      id: 'contract',
      kicker: 'Il contratto',
      h2: 'Due articoli di legge da conoscere.',
      bullets: [
        'Il deposito è al massimo di tre mensilità (Legge sugli affitti abitativi, art. 8).',
        'Dal 1° ottobre 2026 il deposito deve essere restituito, o la sua trattenuta motivata per iscritto, entro 14 giorni dalla fine del contratto (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Come si fa domanda per un appartamento di proprietà della città a Kemijärvi?',
      a: 'Con la domanda online sul sito della città, o con un modulo cartaceo presso Sortteeri (Vapaudenkatu 8). La domanda ha una validità di quattro mesi e si può rinnovare per altri quattro. La solvibilità viene controllata, e la domanda non viene trattata finché non sono arrivati gli allegati. Le riunioni per la scelta degli inquilini si tengono di solito un mercoledì sì e uno no (kemijarvi.fi).',
    },
    {
      q: 'Ci sono appartamenti in affitto liberi a Kemijärvi?',
      a: 'Molto probabilmente sì. Il bilancio della città considera realistico un obiettivo dell’80–85 percento degli appartamenti delle società dati in locazione (bilancio 2026). Chieda al segretario degli alloggi quali appartamenti sono liberi.',
    },
    {
      q: 'Quanto costa un appartamento in affitto a Kemijärvi?',
      a: 'Non viene pubblicata una media attuale. L’ultimo dato per l’area postale del centro risale all’inizio del 2022: monolocali 12,15 € al m² e bilocali 9,10 € al m². La media della Lapponia era di 13,14 € al m² a luglio–settembre 2026, e include la più cara Rovaniemi (Statistics Finland).',
    },
    {
      q: 'C’è un alloggio per studenti a Kemijärvi?',
      a: 'Il Centro di formazione della Lapponia REDU ha una residenza studentesca a Kemijärvi. L’alloggio è gratuito per gli studenti ancora soggetti all’obbligo scolastico, e i posti liberi vengono affittati ad altri studenti al prezzo indicato (redu.fi).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Le prime notti',
    h2: 'Visite di persona.',
    lead: 'La ricerca del partner mostra camere e appartamenti liberi a Kemijärvi e a Pyhä ai prezzi di oggi.',
    chips: [
      { label: 'Kemijärvi', destination: 'Kemijärvi', sid: 'rentals_kemijarvi_first_weeks' },
      { label: 'Pyhä', destination: 'Pyhä', sid: 'rentals_pyha_first_weeks' },
    ],
  },
  sources: pickSources('it', SOURCES, common.sourceLabels),
};

export default copy;
