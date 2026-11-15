/**
 * Italia (it) · town-kemi-tornio. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/kemi-tornio.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'kemi', 'itatuuli', 'keminmaa', 'keminmaaVuokra', 'tornio', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Affitti a Kemi, Tornio e Keminmaa: appartamenti comunali',
  metaDescription:
    'Affittare a Kemi, Tornio e Keminmaa sulla costa della Lapponia: società comunali di alloggi come Itätuuli e Tornion Krunni, agenzie private e sostegno di Kela.',
  breadcrumb: 'Kemi e Tornio',
  hero: {
    eyebrow: 'La costa della Lapponia marittima',
    title: 'Affitti a Kemi, Tornio e Keminmaa.',
    subtitle:
      'Le città gemelle della costa, dove le società comunali di alloggi possiedono centinaia di appartamenti e le domande si presentano online. Da dove cominciare e quanto costa l’affitto.',
  },
  authorNote:
    'Numero di appartamenti delle società di alloggi dalle pagine dei comuni di Kemi, Tornio e Keminmaa, condizioni di domanda dalle pagine delle società, affitti al m² da Statistics Finland (regione della Lapponia 2026T3). Verificato il 15 novembre 2026.',
  intro: [
    'Kemi ha 19.339 abitanti, Tornio 20.823 e Keminmaa 7.576 (Statistics Finland, 31 dicembre 2025). I tre comuni confinano tra loro, quindi l’appartamento può trovarsi in un comune diverso da quello del lavoro.',
    'Le società comunali di alloggi sono il primo indirizzo: gli appartamenti comunali di Kemi sono gestiti da Kiinteistö Oy Itätuuli (kemi.fi), il maggiore fornitore di alloggi in affitto della città, con appartamenti entro cinque chilometri dal centro (itatuuli.fi). Keminmaan Vuokra-asunnot Oy ha 18 immobili con poco più di 300 appartamenti (keminmaa.fi). Ogni società ha la propria domanda online. A Tornio gli appartamenti della città sono gestiti da Tornion Krunni Oy, che comprende Tornion Vuokra-asunnot Oy (tornio.fi).',
    'L’attuale tabella degli affitti di Statistics Finland non ha una riga separata per Kemi o Tornio, quindi qui sotto è riportato il dato regionale della Lapponia. I dati di Rovaniemi sono nella sua pagina.',
  ],
  sections: [
    {
      id: 'prices',
      kicker: 'Quanto costa l’affitto',
      h2: 'Affitti regionali della Lapponia al m², luglio–settembre 2026.',
      table: {
        caption: 'Affitto medio €/m²/mese, appartamenti in affitto a libero mercato, 2026T3',
        head: ['', 'Lapponia (regione)', 'Rovaniemi', 'Intero paese'],
        rows: [
          ['Monolocali', '17,25', '18,63', '20,49'],
          ['Bilocali', '12,87', '14,40', '15,07'],
          ['Trilocali e più grandi', '11,08', '12,29', '13,98'],
          ['Tutti gli appartamenti', '13,14', '14,63', '15,99'],
        ],
        foot: 'Statistics Finland, affitti 2026T3, tabella 15fa. Il dato regionale include Rovaniemi, quindi il livello di Kemi–Tornio è probabilmente inferiore; la tabella attuale non lo mostra separatamente.',
      },
      paras: [
        '<strong>Esempi alla media regionale:</strong> un monolocale di 30 m² circa 520 € al mese (17,25 × 30); un bilocale di 50 m² circa 640 € (12,87 × 50); un trilocale di 75 m² circa 830 € (11,08 × 75).',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Sussidio abitativo Kela',
      h2: 'Kemi, Tornio e Keminmaa rientrano negli «altri comuni» di Kela.',
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
      id: 'channels',
      kicker: 'A chi rivolgersi',
      h2: 'Prima la società comunale, poi le agenzie.',
      band: true,
      cards: [
        {
          title: 'Kemi: Kiinteistö Oy Itätuuli',
          body: 'Gli appartamenti in affitto della città. Itätuuli è il maggiore fornitore di alloggi in affitto di Kemi, e i suoi appartamenti sono entro cinque chilometri dal centro. La sua domanda online ha una validità di quattro mesi e non si chiede alcun deposito. La pagina di informazioni per le imprese di Visit Kemi elenca anche le agenzie private: Forenom, Habita Kemi, HVC Group, Kiinteistömaailma, KVP Group, OP Koti Kemi, Pihlajaniemi & Co, Solecco e AJK Asunnot.',
          href: 'https://www.kemi.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
          linkLabel: 'kemi.fi: Alloggi in affitto',
          event: 'kemi_city',
        },
        {
          title: 'Keminmaan Vuokra-asunnot Oy',
          body: 'La società di alloggi di proprietà del comune: 18 immobili con poco più di 300 appartamenti, e acqua e riscaldamento sono compresi nell’affitto. La sua domanda online ha una validità di tre mesi, e il deposito è pari a una mensilità.',
          href: 'https://www.keminmaanvuokra-asunnot.fi/asunnonhaku.html',
          linkLabel: 'Keminmaan Vuokra-asunnot: come fare domanda',
          event: 'keminmaa',
        },
        {
          title: 'Tornio: Tornion Krunni Oy',
          body: 'Gestisce Tornion Vuokra-asunnot Oy, Tornion Oppilasasuntola Oy e Tornion Palveluasunnot Oy; l’unità dei servizi immobiliari della città si occupa anche degli appartamenti che la città possiede direttamente. Richieste sull’alloggio per telefono, e la pagina della città rimanda anche a locatori privati e agenzie.',
          href: 'https://www.tornio.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
          linkLabel: 'tornio.fi: Alloggi in affitto',
          event: 'tornio_city',
        },
        {
          title: 'Oikotie e Vuokraovi',
          body: 'Annunci di privati e agenzie. Cerchi Kemi, Tornio e Keminmaa uno alla volta: sui portali ogni comune è una ricerca a sé.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kemi',
          linkLabel: 'Oikotie: affitti a Kemi',
          event: 'oikotie',
        },
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
      q: 'Come si fa domanda per un appartamento comunale a Kemi?',
      a: 'Con la domanda online di Kiinteistö Oy Itätuuli, valida quattro mesi. Itätuuli è il maggiore fornitore di alloggi in affitto di Kemi, con appartamenti entro cinque chilometri dal centro, e li affitta tutti senza deposito (itatuuli.fi). Keminmaan Vuokra-asunnot Oy ha una propria domanda.',
    },
    {
      q: 'Quanto costa l’affitto a Kemi e Tornio?',
      a: 'L’attuale tabella di Statistics Finland non ha una riga separata per le città. La media regionale della Lapponia era di 13,14 € al m² a luglio–settembre 2026 (monolocali 17,25, bilocali 12,87), e quel dato include la più cara Rovaniemi.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Le prime settimane',
    h2: 'Visite di persona.',
    lead: 'Prenoti un posto dove stare per le visite e veda l’appartamento prima di firmare.',
    chips: [
      { label: 'Kemi', destination: 'Kemi', sid: 'rentals_kemi_first_weeks' },
      { label: 'Tornio', destination: 'Tornio', sid: 'rentals_tornio_first_weeks' },
    ],
  },
  sources: pickSources('it', SOURCES, common.sourceLabels),
};

export default copy;
