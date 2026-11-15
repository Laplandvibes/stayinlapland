/**
 * Italia (it) · town-rovaniemi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/rovaniemi.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'rovaniemi', 'das', 'yle2025das', 'yle2026rovaniemi', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Affitti a Rovaniemi: prezzi, locatori e come fare domanda',
  metaDescription:
    'Appartamento in affitto a Rovaniemi: affitto al m² (Statistics Finland 2026), locatori della città, DAS per gli studenti, sussidio Kela e quando fare domanda.',
  breadcrumb: 'Rovaniemi',
  hero: {
    eyebrow: 'Rovaniemi, 66.191 abitanti',
    title: 'Affitti a Rovaniemi.',
    subtitle:
      'La città più grande della Lapponia, 66.191 abitanti. Quanto costa l’affitto, a chi si fa domanda e quando.',
  },
  authorNote:
    'Affitti al m² da Statistics Finland (luglio–settembre 2026), locatori dalla pagina sull’abitare della Città di Rovaniemi, dati sulla carenza da Yle. Verificato il 15 novembre 2026.',
  intro: [
    'Rovaniemi ha 66.191 abitanti (Statistics Finland, 31 dic 2025) e una concorrenza feroce per i monolocali: la fondazione per gli alloggi studenteschi DAS ha ricevuto circa 550 domande urgenti nell’estate 2026, il 15 percento in più di un anno prima, quasi il 90 percento dei richiedenti voleva un monolocale, e i monolocali della città vengono affittati a breve termine ai turisti per la stagione invernale (Yle, 27 lug 2026). Secondo l’amministratore delegato della DAS, in agosto e settembre non può offrire un appartamento a ogni richiedente.',
    'Una società di reclutamento che ha portato in Lapponia circa 250 lavoratori li ha alloggiati in una decina di posti diversi a Rovaniemi (Yle, 9 mar 2026). Lavoratori stagionali, studenti e turisti cercano tutti gli stessi piccoli appartamenti.',
    'La buona notizia è il prezzo: l’affitto medio di Rovaniemi, 14,63 € al m², è inferiore alla media nazionale di 15,99 € (Statistics Finland 2026T3). Qui sotto, i dati per taglio di appartamento e i canali a cui rivolgersi.',
  ],
  sections: [
    {
      id: 'prices',
      kicker: 'Quanto costa l’affitto',
      h2: 'Affitti di Rovaniemi al m², luglio–settembre 2026.',
      table: {
        caption: 'Affitto medio €/m²/mese, appartamenti in affitto a libero mercato, Rovaniemi 2026T3',
        head: ['', 'Tutti gli affitti', 'Nuovi affitti', 'Intero paese'],
        rows: [
          ['Monolocali', '18,63', '20,14', '20,49'],
          ['Bilocali', '14,40', '16,40', '15,07'],
          ['Trilocali e più grandi', '12,29', '13,66', '13,98'],
          ['Tutti gli appartamenti', '14,63', '15,93', '15,99'],
        ],
        foot: 'Statistics Finland, affitti 2026T3, tabella 15fa. Nuovi contratti = contratti iniziati nel corso del trimestre, cioè ciò che si chiede adesso per gli appartamenti liberi.',
      },
      paras: [
        '<strong>Esempi:</strong> un monolocale di 30 m² circa 560 € al mese (18,63 × 30), in un nuovo contratto circa 600 € (20,14 × 30); un bilocale di 50 m² circa 720 € (14,40 × 50); un trilocale di 75 m² circa 920 € (12,29 × 75). Acqua ed elettricità di solito si aggiungono.',
        'Il prezzo dei monolocali in nuovo contratto, 20,14 € al m², è superiore di 1,51 € (8%) alla media di tutti i monolocali di Rovaniemi, 18,63 €: un monolocale che si libera adesso costa più di uno già affittato. Rispetto alla media nazionale Rovaniemi costa meno in ogni taglio di appartamento.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Sussidio abitativo Kela',
      h2: 'Rovaniemi ha un massimale più alto.',
      lead:
        'Il sussidio abitativo generale è al massimo il 70% delle spese abitative riconosciute. A Rovaniemi il massimale delle spese riconosciute è più alto che negli altri comuni della Lapponia, perché la città rientra nel gruppo di Kela dei 24 comuni maggiori (Kela 2026).',
      table: {
        caption: 'Spese abitative massime 2026, €/mese, gruppo Kela dei 24 comuni maggiori',
        head: ['Dimensione del nucleo', 'Spese abitative massime'],
        rows: [
          ['1 persona', '447'],
          ['2 persone', '652'],
          ['3 persone', '828'],
          ['4 persone', '981'],
          ['Ogni persona in più', '+134'],
        ],
        foot: 'Kela, sussidio abitativo generale 2026. Un sussidio inferiore a 15 € non viene versato. Il reddito riduce il sussidio attraverso la franchigia di base.',
      },
    },
    {
      id: 'channels',
      kicker: 'A chi rivolgersi',
      h2: 'L’elenco della città, la fondazione studentesca e i portali.',
      lead: 'La pagina sull’abitare della Città di Rovaniemi elenca i locatori e i servizi di ricerca; non indica una propria società comunale di alloggi.',
      band: true,
      cards: [
        {
          title: 'Città di Rovaniemi: locatori',
          body: 'La pagina della città indica i locatori societari KAS asunnot, M2-Kodit, Tarveasunnot, Avara e Lumo, e i servizi di ricerca Oikotie, Vuokraovi e Qasa. Ogni locatore ha la propria domanda online; faccia domanda a più di uno insieme.',
          href: 'https://www.rovaniemi.fi/Asuminen-ja-ymparisto/Asuminen',
          linkLabel: 'rovaniemi.fi: Abitare',
          event: 'rovaniemi_city',
        },
        {
          title: 'DAS: per gli studenti',
          body: 'La Fondazione Domus Arctica ha circa 1.700 appartamenti, 700 dei quali monolocali e 460 bilocali, a un affitto medio di 12,50 € al m² (Yle, 27 lug 2026). Le domande sono continue, valide tre mesi, e ad agosto e settembre hanno la precedenza i nuovi studenti. Può fare domanda se studia a Rovaniemi in un istituto di livello successivo alla scuola dell’obbligo.',
          href: 'https://www.das.fi/en/apply/applying-info',
          linkLabel: 'das.fi: Informazioni per la domanda',
          event: 'das',
        },
        {
          title: 'KAS asunnot',
          body: 'Case in affitto in vari quartieri di Rovaniemi (elenco della città). Domanda online.',
          href: 'https://kas.fi/rovaniemen-vuokrattavat-kas-kodit/',
          linkLabel: 'kas.fi: Rovaniemi',
          event: 'kas',
        },
        {
          title: 'Lumo',
          body: 'Un locatore societario con edifici a Rovaniemi. Contratto standard, domanda online, ingresso rapido.',
          href: 'https://lumo.fi/en/rental-apartments',
          linkLabel: 'lumo.fi: appartamenti in affitto',
          event: 'lumo',
        },
        {
          title: 'Oikotie e Vuokraovi',
          body: 'I portali nazionali ospitano la maggior parte degli annunci di privati e agenzie. Filtri per il comune di Rovaniemi, non per quartiere, in modo che compaiano anche Ounasvaara, Saarenkylä e le case fuori dal centro.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/rovaniemi',
          linkLabel: 'Oikotie: affitti a Rovaniemi',
          event: 'oikotie',
        },
        {
          title: 'NAL Rovaniemi: under 30',
          body: 'La sezione di Rovaniemi dell’Associazione finlandese per gli alloggi giovanili offre alloggi per giovani under 30 (elenco della città). Un’opzione quando la DAS non è possibile e non si è studenti.',
          href: 'https://www.rovaniemi.fi/Asuminen-ja-ymparisto/Asuminen',
          linkLabel: 'rovaniemi.fi: alloggi per giovani',
          event: 'nal',
        },
      ],
    },
    {
      id: 'when',
      kicker: 'Quando fare domanda',
      h2: 'Due corse all’anno.',
      bullets: [
        '<strong>Agosto–settembre</strong> è il periodo più difficile: la DAS non riesce ad alloggiare tutti i richiedenti e i monolocali a libero mercato scarseggiano (Yle, 27 lug 2026).',
        '<strong>Novembre–dicembre:</strong> alcuni monolocali vengono affittati a breve termine ai turisti per la stagione invernale. I contratti a tempo determinato spesso finiscono a fine ottobre (Yle, 27 lug 2026).',
        '<strong>In primavera</strong> i monolocali affittati per la stagione invernale tornano disponibili.',
        '<strong>Il deposito</strong> è al massimo di tre mensilità (Legge sugli affitti abitativi, art. 8), e dal 1° ottobre 2026 deve essere restituito entro 14 giorni dalla fine del contratto (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Quanto costa un monolocale a Rovaniemi?',
      a: 'Secondo Statistics Finland, 18,63 € al m² in tutti i contratti e 20,14 € al m² in quelli nuovi (2026T3). Un monolocale di 30 m² costa quindi circa 560–600 € al mese, elettricità esclusa.',
    },
    {
      q: 'È difficile trovare un affitto a Rovaniemi?',
      a: 'I monolocali sono difficili da ottenere ad agosto–settembre: la DAS non riesce ad alloggiare tutti i richiedenti (Yle, 27 lug 2026) e i monolocali a libero mercato scarseggiano. Bilocali e trilocali sono più facili.',
    },
    {
      q: 'Posso fare domanda senza andare a Rovaniemi?',
      a: 'Può fare domanda online a ogni locatore elencato dalla città e alla DAS. Veda comunque l’appartamento di persona o chieda una visita in video, e versi il deposito solo dopo la firma del contratto.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Le prime settimane',
    h2: 'Un hotel o un aparthotel mentre visita gli appartamenti.',
    lead: 'Veda gli appartamenti di persona prima di firmare. La ricerca del partner mostra le camere libere di Rovaniemi ai prezzi di oggi.',
    chips: [
      { label: 'Rovaniemi', destination: 'Rovaniemi', sid: 'rentals_rovaniemi_first_weeks' },
    ],
  },
  sources: pickSources('it', SOURCES, common.sourceLabels),
};

export default copy;
