/**
 * Italia (it) · rentals. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
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
  metaTitle: 'Affittare casa in Lapponia: Rovaniemi, Levi, Kemi–Tornio',
  metaDescription:
    'Affitti nella Lapponia finlandese: appartamento a Rovaniemi, Kemi–Tornio, Levi e Inari, affitto al m² (Statistics Finland), deposito e sussidio Kela.',
  breadcrumb: 'Affitti',
  hero: {
    eyebrow: 'Affittare in Lapponia',
    title: 'Affittare casa in Lapponia.',
    subtitle:
      'Dove trovare un appartamento in affitto, quanto costa e quanto copre Kela. Città per città.',
  },
  authorNote:
    'Affitti al m²: statistiche sugli affitti di Statistics Finland, appartamenti in affitto a libero mercato, luglio–settembre 2026. Le società comunali di alloggi sono state verificate sui siti dei comuni e delle società stesse il 15 novembre 2026.',
  intro: [
    'In Lapponia un appartamento in affitto arriva da una di tre fonti: la società di alloggi del comune, i portali nazionali o i gruppi locali. Si parta dal comune. Le sue società possiedono centinaia di appartamenti, per esempio poco più di 300 a Keminmaa, circa 720 a Sodankylä, 560 a Kemijärvi e oltre 500 a Inari, e si può presentare domanda anche quando al momento non c’è nulla di libero.',
    'Il prezzo dipende da dove ci si trasferisce. A Rovaniemi un monolocale di 30 m² costa in media circa 560 € al mese, nel resto della Lapponia meno. Nei villaggi ai piedi dei fjäll l’affitto segue la stagione, quindi per l’inverno chieda prima al datore di lavoro dell’alloggio per il personale.',
  ],
  sections: [
    {
      id: 'towns',
      kicker: 'Dove sono gli appartamenti',
      h2: 'Città per città.',
      lead: 'Ogni città ha la sua pagina: la società comunale di alloggi e come fare domanda, il livello degli affitti e il massimale di Kela. L’alloggio per il personale a Ylläs è trattato nella pagina dei lavoratori stagionali.',
      band: true,
      cards: [
        {
          title: 'Rovaniemi',
          image: { src: '/images/housing-rovaniemi-card-talvikatu.webp', alt: 'Condomini e persone che camminano su una strada innevata di Rovaniemi a gennaio' },
          body:
            'La pagina della città indica i proprietari KAS asunnot, M2-Kodit, Tarveasunnot, Avara e Lumo, e i servizi di ricerca Oikotie, Vuokraovi e Qasa. Gli studenti si rivolgono alla Fondazione Domus Arctica DAS (circa 1.700 appartamenti, 700 dei quali monolocali); gli under 30 a NAL Rovaniemi. La domanda alla DAS vale tre mesi, e ad agosto e settembre hanno la precedenza i nuovi studenti.',
          href: '/rentals/rovaniemi',
          linkLabel: 'Affitti a Rovaniemi',
        },
        {
          title: 'Kemi, Keminmaa e Tornio',
          image: { src: '/images/housing-kemi-card-kaupungintalo.webp', alt: 'Il municipio di Kemi in una mattina innevata di gennaio' },
          body:
            'Gli appartamenti comunali di Kemi sono gestiti da Kiinteistö Oy Itätuuli, il maggiore fornitore di alloggi in affitto della città, con appartamenti entro cinque chilometri dal centro. Keminmaan Vuokra-asunnot Oy ha poco più di 300 appartamenti, e ciascuna società ha la propria domanda online. A Tornio gli appartamenti della città sono gestiti da Tornion Krunni Oy (Tornion Vuokra-asunnot Oy).',
          href: '/rentals/kemi-tornio',
          linkLabel: 'Affitti a Kemi, Tornio e Keminmaa',
        },
        {
          title: 'Kemijärvi',
          image: { src: '/images/housing-kemijarvi-card-kerrostalo.webp', alt: 'Un condominio e un vecchio pino a Kemijärvi in una sera di luglio' },
          body:
            'Le due società immobiliari della città possiedono 560 appartamenti in affitto, e il bilancio punta a darne in locazione l’80–85 percento, quindi appartamenti vuoti ce ne sono. La domanda ha una validità di quattro mesi. Le case a schiera di Vuostimo distano 14 km da Pyhätunturi.',
          href: '/rentals/kemijarvi',
          linkLabel: 'Affitti a Kemijärvi',
        },
        {
          title: 'Sodankylä',
          image: { src: '/images/housing-sodankyla-jaamerentie.webp', alt: 'Jäämerentie, la via principale del villaggio di Sodankylä, a settembre' },
          body:
            'Asentopuulaaki Oy affitta i circa 720 appartamenti del comune, e la ricerca appartamenti della società mostra quelli liberi o in via di liberarsi in ogni momento. Gli edifici più vecchi si affittano a circa 9–12,50 € al m², e Käpyriihi, completato nel 2025, a 18 €.',
          href: '/rentals/sodankyla',
          linkLabel: 'Affitti a Sodankylä',
        },
        {
          title: 'Kittilä e Levi',
          image: { src: '/images/housing-kittila-levi-card-kyla.webp', alt: 'Il villaggio di Levi visto dalla cima del fjäll Levi a novembre, con un lago e altri fjäll sullo sfondo' },
          body:
            'Kittilän Vuokratalot Oy affitta gli appartamenti comunali di proprietà del comune; l’ufficio è al piano terra del municipio (Valtatie 15). La domanda si presenta online sul sito della società. Gli appartamenti vacanza di Levi passano all’affitto mensile soprattutto da maggio a novembre; in inverno lo stesso appartamento si affitta a settimana.',
          href: '/rentals/kittila-levi',
          linkLabel: 'Affitti a Kittilä e Levi',
        },
        {
          title: 'Inari, Ivalo e Saariselkä',
          image: { src: '/images/housing-ivalo-joki.webp', alt: 'Ivalo vista dall’altra sponda del fiume Ivalo in una sera d’estate' },
          body:
            'Inarin Vuokra-asunnot Oy ha oltre 500 appartamenti a Ivalo, Inari, Saariselkä, Nellim e Sevettijärvi. La pagina del comune elenca anche i proprietari privati (Bilto, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg, Uni Kodit) e il gruppo Facebook degli affitti Sodankylä–Inari–Utsjoki.',
          href: '/rentals/ivalo-inari',
          linkLabel: 'Affitti a Ivalo e Inari',
        },
      ],
    },
    {
      id: 'portals',
      kicker: 'Portali e gruppi',
      h2: 'Gli stessi canali del resto della Finlandia.',
      bullets: [
        '<a href="https://asunnot.oikotie.fi/vuokra-asunnot/rovaniemi" target="_blank" rel="noopener">Oikotie</a>: nazionale. Filtri per comune, non solo per villaggio.',
        '<a href="https://www.vuokraovi.com/vuokra-asunnot/rovaniemi" target="_blank" rel="noopener">Vuokraovi</a>: solo affitti.',
        '<a href="https://qasa.fi" target="_blank" rel="noopener">Qasa</a>: indicato dalla Città di Rovaniemi; il contratto si firma elettronicamente sulla piattaforma.',
        '<a href="https://www.tori.fi" target="_blank" rel="noopener">Tori</a>: un sito di annunci che ospita anche appartamenti in affitto. Più sotto trova che cosa controllare prima di pagare.',
        'Gruppi Facebook: ricerca alloggi a Levi, Kemi–Keminmaa e Sodankylä–Inari–Utsjoki. Il canale più rapido nei villaggi ai piedi dei fjäll, ma nessuno garantisce per gli annunci.',
      ],
    },
    {
      id: 'prices',
      kicker: 'Quanto costa l’affitto',
      h2: 'Al metro quadro, non a occhio.',
      lead:
        'Statistics Finland pubblica gli affitti ogni trimestre. Qui sotto, l’affitto medio degli appartamenti in affitto a libero mercato a luglio–settembre 2026, in euro al metro quadro al mese.',
      table: {
        caption: 'Affitto medio €/m²/mese, appartamenti in affitto a libero mercato, 2026T3',
        head: ['', 'Rovaniemi', 'Lapponia (regione)', 'Intero paese'],
        rows: [
          ['Monolocali', '18,63', '17,25', '20,49'],
          ['Bilocali', '14,40', '12,87', '15,07'],
          ['Trilocali e più grandi', '12,29', '11,08', '13,98'],
          ['Tutti gli appartamenti', '14,63', '13,14', '15,99'],
          ['Nuovi contratti, tutti gli appartamenti', '15,93', '13,39', '16,72'],
        ],
        foot: 'Statistics Finland, affitti 2026T3, tabella 15fa. Nuovo contratto = contratti iniziati nel corso del trimestre; mostrano quanto si chiede in questo momento.',
      },
      paras: [
        '<strong>Come calcolare:</strong> si moltiplica l’affitto al m² per la superficie. A Rovaniemi un monolocale di 30 m² costa in media circa 560 € al mese (18,63 × 30) e circa 600 € in un nuovo contratto (20,14 × 30, il dato dei monolocali in nuovo contratto a Rovaniemi). Un bilocale di 50 m²: circa 720 € al mese (14,40 × 50). Acqua ed elettricità di solito si aggiungono.',
        'Gli affitti al metro quadro della Lapponia sono inferiori alla media nazionale in ogni taglio di appartamento, e il divario è minimo nei bilocali.',
      ],
      note: {
        label: 'Ciò che le statistiche non vedono',
        body:
          'Gli affitti stagionali nelle stazioni sciistiche e gli affitti brevi ammobiliati non rientrano in questi dati. Vicino al centro di Levi un appartamento di 80 m² in una casa in stile alpino costava 750 € al mese da maggio a novembre, 2.000 € a settimana in alta stagione e 1.650 € al mese tutto l’anno (Yle, 25 maggio 2023): lo stesso appartamento a tre prezzi.',
      },
    },
    {
      id: 'housing-allowance',
      kicker: 'Sussidio abitativo Kela',
      h2: 'Il massimale dipende dal comune.',
      lead:
        'Il sussidio abitativo generale copre al massimo il 70% delle spese abitative riconosciute, e le spese riconosciute hanno un massimale che dipende dal comune e dalla dimensione del nucleo familiare. Kela divide i comuni in tre gruppi: Rovaniemi rientra nel gruppo dei 24 comuni maggiori, e ogni altro comune della Lapponia ricade negli «altri comuni», con un massimale più basso.',
      table: {
        caption: 'Spese abitative massime 2026, €/mese',
        head: ['Dimensione del nucleo', 'Rovaniemi', 'Altri comuni della Lapponia'],
        rows: [
          ['1 persona', '447', '394'],
          ['2 persone', '652', '574'],
          ['3 persone', '828', '734'],
          ['4 persone', '981', '875'],
          ['Ogni persona in più', '+134', '+129'],
        ],
        foot: 'Kela, sussidio abitativo generale 2026. Un sussidio inferiore a 15 € non viene versato.',
      },
      paras: [
        'Il massimale significa che a Rovaniemi per un nucleo di una persona l’affitto viene considerato fino a 447 €, anche se l’affitto è di 600 €. Il resto lo paga Lei. Il reddito riduce il sussidio attraverso la franchigia di base; il calcolatore di Kela mostra il Suo caso.',
      ],
    },
    {
      id: 'contract',
      kicker: 'Il contratto d’affitto',
      h2: 'Cinque cose prima di firmare.',
      bullets: [
        '<strong>Il deposito cauzionale è al massimo di tre mensilità</strong> (Legge sugli affitti abitativi, art. 8). Una o due mensilità sono la norma.',
        '<strong>Dal 1° ottobre 2026 il deposito deve essere restituito</strong>, o la sua trattenuta motivata per iscritto, entro 14 giorni dalla fine del contratto o dalla riconsegna dell’appartamento (riforma in vigore dal 1° ott 2026, Rakli).',
        '<strong>Il preavviso dell’inquilino è di un mese.</strong> Per i contratti stipulati dal 1° ottobre 2026 il preavviso del locatore è di tre mesi, e di quattro mesi se il contratto dura ininterrottamente da almeno due anni (Rakli). I contratti stipulati prima del 1° ottobre 2026 mantengono i vecchi termini di preavviso (Kuluttajaliitto).',
        '<strong>Un contratto a tempo determinato vincola entrambe le parti fino alla scadenza.</strong> Nel lavoro stagionale l’appartamento del datore di lavoro è spesso legato all’impiego: legga che cosa succede se il lavoro finisce prima della stagione.',
        '<strong>La solvibilità (luottotiedot) viene quasi sempre controllata.</strong> Una segnalazione di insolvenza non esclude l’affitto, ma in quel caso una società comunale di alloggi o un locatore privato è più probabile delle grandi catene.',
      ],
    },
    {
      id: 'before-paying',
      kicker: 'Prima di pagare qualsiasi cosa',
      h2: 'Tre regole che salvano la cauzione.',
      bullets: [
        'Non versi mai un deposito prima di una visita o di una visita in video in cui si vedano nella stessa inquadratura l’appartamento e le chiavi.',
        'Contratto scritto, con il nome del locatore e il suo codice aziendale (Y-tunnus) o codice personale di identità. Una società comunale di alloggi è il punto di partenza più sicuro se non si conosce il mercato.',
        'Un affitto breve ammobiliato non è un contratto d’affitto: a un appartamento vacanza può non essere assegnato un indirizzo ufficiale, e la mancanza dell’indirizzo complica i rapporti con le aziende, per esempio nei controlli di solvibilità (Yle, 25 maggio 2023).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Quanto costa un monolocale a Rovaniemi?',
      a: 'Secondo Statistics Finland l’affitto medio di un monolocale a libero mercato a Rovaniemi è stato di 18,63 € al m² a luglio–settembre 2026 e di 20,14 € al m² nei nuovi contratti. Un monolocale di 30 m² costa quindi circa 560–600 € al mese, elettricità esclusa.',
    },
    {
      q: 'Posso affittare in Lapponia senza una storia creditizia finlandese?',
      a: 'Sì, ma con meno possibilità. Le società comunali di alloggi e i locatori privati decidono caso per caso, e aiutano un deposito più alto (la legge consente fino a tre mensilità) o un garante. Le grandi catene di affitto fanno sempre un controllo di solvibilità.',
    },
    {
      q: 'Qual è il momento migliore per cercare un appartamento a Rovaniemi?',
      a: 'Qualsiasi mese tranne agosto e settembre. In quei mesi la DAS non riesce ad alloggiare tutti i richiedenti e i monolocali a libero mercato scarseggiano (Yle, 27 lug 2026). I monolocali affittati per breve periodo durante la stagione invernale tornano sul mercato in primavera.',
    },
    {
      q: 'Perché un affitto a Levi in inverno è molte volte più alto?',
      a: 'Perché in alta stagione lo stesso appartamento si affitta a settimana. Nell’esempio di Yle (25 maggio 2023) un appartamento di 80 m² in una casa in stile alpino costava 750 € al mese in estate e 2.000 € a settimana in inverno. L’affitto mensile è possibile da maggio a novembre; per l’inverno chieda al datore di lavoro dell’alloggio per il personale o alla società comunale di Kittilä.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Le prime settimane',
    h2: 'Veda l’appartamento di persona.',
    lead:
      'Prenoti un hotel o un aparthotel per le prime settimane e veda gli appartamenti con i Suoi occhi prima di firmare. La ricerca del nostro partner mostra le camere libere ai prezzi di oggi.',
    chips: [
      { label: 'Rovaniemi', destination: 'Rovaniemi', sid: 'rentals_first_weeks_rovaniemi' },
      { label: 'Levi', destination: 'Levi', sid: 'rentals_first_weeks_levi' },
      { label: 'Tornio', destination: 'Tornio', sid: 'rentals_first_weeks_tornio' },
      { label: 'Ivalo', destination: 'Ivalo', sid: 'rentals_first_weeks_ivalo' },
    ],
  },
  sources: pickSources('it', SOURCES, common.sourceLabels),
};

export default copy;
