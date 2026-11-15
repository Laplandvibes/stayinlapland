/**
 * Italia (it) · seasonal. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/seasonal.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'yle2017', 'yle2023', 'yle2026yllas', 'kesko2026', 'yle2026rovaniemi', 'yle2025das',
  'tkVaesto', 'kittila', 'inari', 'sodankyla', 'rakli', 'dvv',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Alloggio per lavoratori stagionali in Lapponia: Levi, Ylläs',
  metaDescription:
    'Dove vivono i lavoratori stagionali a Levi, Ylläs, Saariselkä e Rovaniemi: alloggio aziendale, affitto stagionale o appartamento comunale, e che cosa chiedere.',
  breadcrumb: 'Lavoratori stagionali',
  hero: {
    eyebrow: 'Lavoro stagionale, in inverno e in estate',
    title: 'Dove vivono i lavoratori stagionali?',
    subtitle:
      'Un appartamento condiviso del personale, un appartamento vacanza con affitto stagionale o un alloggio comunale in affitto. La carenza di alloggi nelle stazioni sciistiche è reale, ed ecco come ci si convive.',
  },
  authorNote:
    'Dati sulla carenza dalle notizie di Yle e Kesko 2017–2026, canali di ricerca dalle pagine dei comuni. Il nostro sito gemello laplandwork.com si occupa dei lavori veri e propri.',
  intro: [
    'L’area turistica di Levi assume poco più di 2.000 lavoratori stagionali per la stagione invernale, stimava già nel 2017 Kristiina Kukkohovi, amministratrice delegata di Levin Matkailu Oy, che diceva che la carenza di alloggi stava diventando un grosso problema in ogni stazione della Lapponia (Yle, 25 ottobre 2017). Non si è attenuata: nella primavera 2023 Yle ha raccontato di lavoratori di Levi e Ylläs che vivevano in appartamenti vacanza dove non potevano registrare un indirizzo.',
    'Nel giugno 2026 i proprietari del K-Market Jounin Kauppa a Äkäslompolo hanno deciso di costruire tre case a schiera per il proprio personale, perché gli appartamenti sono troppo pochi e gli affitti sono saliti molto (Yle, 16 giugno 2026). Il negozio impiega ogni anno circa 20 lavoratori stagionali, e circa la metà ha bisogno di una casa in affitto (Kesko, 17 giugno 2026).',
    'A Rovaniemi la società di reclutamento Career.fi ha portato in Lapponia circa 250 lavoratori e li ha alloggiati in una decina di posti diversi; due lavoratori estoni hanno trascorso due inverni a casa della famiglia del direttore dello sviluppo dopo che il loro appartamento in affitto era finito in ristrutturazione delle tubature. Trovare alloggio è «ogni anno un vero e proprio circo» (Yle, 9 marzo 2026).',
  ],
  sections: [
    {
      id: 'three-ways',
      kicker: 'Tre modi di vivere una stagione',
      h2: 'Alloggio del personale, affitto stagionale o appartamento comunale.',
      cards: [
        {
          title: '1. Alloggio del personale',
          body:
            'La risposta più comune nelle stazioni sciistiche: il datore di lavoro affitta case a schiera, baite e appartamenti vacanza per il personale per tutta la stagione e trattiene l’affitto dalla busta paga. A Ruka un gruppo di ristoranti già nel 2017 affittava quattro immobili vacanza da novembre a maggio per i suoi dipendenti (Yle, 25 ottobre 2017). Il vantaggio: all’arrivo trova già un tetto. Il rischio: l’appartamento finisce quando finisce il lavoro.',
        },
        {
          title: '2. Un appartamento vacanza con affitto stagionale',
          body:
            'Un appartamento di 80 m² in stile alpino a Levi: 750 € al mese da maggio a novembre, 2.000 € a settimana in alta stagione, 1.650 € al mese tutto l’anno (Yle, 25 maggio 2023). Economico in estate, impossibile in inverno. In più in un appartamento vacanza non si può ottenere un indirizzo ufficiale (Yle, 25 maggio 2023).',
        },
        {
          title: '3. Un alloggio comunale in affitto',
          body:
            'Kittilän Vuokratalot Oy, Inarin Vuokra-asunnot Oy (oltre 500 appartamenti a Ivalo, Inari e Saariselkä) e Asentopuulaaki a Sodankylä (circa 720 appartamenti). Faccia domanda in estate, prima dell’inizio della stagione; chieda alla società per quanto tempo resta valida una domanda.',
        },
      ],
    },
    {
      id: 'places',
      kicker: 'Luoghi',
      h2: 'La stessa carenza, soluzioni diverse.',
      band: true,
      cards: [
        {
          title: 'Levi e Kittilä',
          image: { src: '/images/housing-levi-keskusta-card.webp', alt: 'Edifici in legno nel centro di Levi in una giornata d’estate' },
          body:
            'La popolazione di Kittilä è cresciuta del 2,0 percento nel 2025, la seconda crescita più alta tra i comuni della Lapponia dopo il 2,4 percento di Pelkosenniemi (Statistics Finland). I datori di lavoro affittano case a schiera per il personale per tutta la stagione, e tutti gli altri cercano nel gruppo Facebook sugli alloggi di Levi. Kittilän Vuokratalot Oy elenca appartamenti sia nel villaggio di Kittilä sia a Sirkka, a Levi.',
          href: 'https://kittila.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot',
          linkLabel: 'Kittilän Vuokratalot Oy',
          event: 'kittila',
        },
        {
          title: 'Ylläs: Äkäslompolo e Ylläsjärvi',
          image: { src: '/images/housing-seasonal-card-yllas-tunturi.webp', alt: 'Ylläs vista dall’altra sponda del lago a Äkäslompolo in una mattina di settembre' },
          body:
            'I commercianti costruiscono per sé: le tre case a schiera di Jounin Kauppa sono previste per novembre–dicembre 2026 allo stato attuale, con monolocali, appartamenti con due camere da letto pensati per la condivisione e appartamenti familiari con tre camere da letto, ciascuno con sauna (Kesko, 17 giugno 2026). Il primo edificio modulare del villaggio era quasi finito nell’ottobre 2025 (Yle, 16 giugno 2026).',
          href: 'https://www.kesko.fi/media/uutiset-ja-tiedotteet/uutiset/2026/lapin-asuntopulaa-ratkomassa-k-market-jounin-kaupan-kauppiaat-rakennuttavat-kolme-rivitaloa-tyontekijoilleen/',
          linkLabel: 'Kesko, 17 giugno 2026',
          event: 'yllas',
        },
        {
          title: 'Saariselkä e Ivalo',
          image: { src: '/images/housing-saariselka-hirsitalot.webp', alt: 'Edifici in tronchi a Saariselkä a novembre' },
          body:
            'La società comunale Inarin Vuokra-asunnot Oy ha appartamenti sia a Saariselkä sia a Ivalo, e la pagina del comune elenca i proprietari privati e il gruppo Facebook Sodankylä–Inari–Utsjoki. Al colloquio chieda se il datore di lavoro offre l’alloggio.',
          href: 'https://www.inari.fi/fi/palvelut/asuminen.html',
          linkLabel: 'inari.fi: Abitare',
          event: 'inari',
        },
        {
          title: 'Rovaniemi',
          image: { src: '/images/housing-rovaniemi-lappia-card.webp', alt: 'La Lappia House nel centro di Rovaniemi' },
          body:
            'Studenti, turisti e lavoratori stagionali si contendono gli stessi monolocali nello stesso momento: nell’estate 2026 la fondazione per gli alloggi studenteschi DAS ha ricevuto circa 550 domande urgenti, il 15 percento in più di un anno prima, e quasi il 90 percento dei richiedenti voleva un monolocale (Yle, 27 luglio 2026).',
          href: 'https://yle.fi/a/74-20213937',
          linkLabel: 'Yle, 9 marzo 2026: carenza di alloggi a Rovaniemi',
          event: 'rovaniemi',
        },
        {
          title: 'Ruka e Kuusamo',
          image: { src: '/images/housing-ruka-kyla-card.webp', alt: 'La piazza e la torre panoramica rossa nel villaggio pedonale di Ruka in estate' },
          body:
            'Ruka si trova nell’Ostrobotnia settentrionale, non in Lapponia, ma la stagione e la carenza sono le stesse. Nel 2017 il gruppo di ristoranti di Ruka è passato da poco più di 20 dipendenti fissi a oltre 80 in inverno e ha affittato quattro immobili vacanza per il personale da novembre a maggio (Yle, 25 ottobre 2017).',
          href: 'https://yle.fi/a/3-9895965',
          linkLabel: 'Yle, 25 ottobre 2017',
          event: 'ruka',
        },
      ],
    },
    {
      id: 'summer',
      kicker: 'La stagione estiva',
      h2: 'L’estate non è tranquilla.',
      paras: [
        'Il lavoro estivo in Lapponia è una stagione a sé: il turismo di Rovaniemi tutto l’anno, le aree escursionistiche, i cantieri e il picco estivo dei negozi. In estate gli appartamenti vacanza si affittano a mese (750 € al mese da maggio a novembre nell’esempio di Levi, Yle, 25 maggio 2023).',
        'A Rovaniemi il direttore dello sviluppo di una società di reclutamento spera di sistemare i lavoratori stagionali sotto lo stesso tetto in inverno e in estate operai edili e squadre sportive (Yle, 9 marzo 2026). Per chi arriva in estate è una buona notizia: gli alloggi del personale costruiti per l’inverno restano vuoti in estate.',
      ],
      image: {
        src: '/images/housing-jouninkauppa.webp',
        alt: 'La facciata del negozio K-Market Jounin Kauppa a Äkäslompolo in estate',
        caption:
          'K-Market Jounin Kauppa, Äkäslompolo, luglio 2026. I proprietari stanno costruendo tre case a schiera per il personale (Kesko, 17 giugno 2026). Foto: LaplandVibes.',
        ratio: '4/3',
      },
    },
    {
      id: 'ask',
      kicker: 'Prima di firmare',
      h2: 'Chieda questo al datore di lavoro.',
      bullets: [
        'L’appartamento fa parte del contratto di lavoro o è un contratto d’affitto a parte? Quanto viene trattenuto dallo stipendio, e compare in busta paga?',
        'Camera propria o condivisa? Quante persone nell’appartamento, e la Sua porta ha la serratura?',
        'Che cosa succede al contratto d’affitto se il lavoro finisce prima della stagione, o prosegue oltre?',
        'Può registrare lì il Suo indirizzo? La comunicazione del cambio di indirizzo al DVV va fatta entro una settimana dal trasloco, e un appartamento vacanza spesso non è idoneo.',
        'Chi paga elettricità, acqua e internet?',
        'Come si arriva al lavoro senza auto: distanza, autobus, skibus?',
        'C’è un deposito, e quando viene restituito? La legge: dal 1° ottobre 2026 entro 14 giorni dalla fine del contratto (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Il datore di lavoro offre l’alloggio ai lavoratori stagionali a Levi?',
      a: 'Spesso, ma non sempre e non gratis. I datori di lavoro affittano case a schiera e appartamenti vacanza per il personale per tutta la stagione e trattengono l’affitto dallo stipendio. Si faccia dare l’offerta per iscritto e verifichi che cosa succede all’appartamento se il lavoro finisce.',
    },
    {
      q: 'Quando devo iniziare a cercare l’alloggio per la stagione invernale?',
      a: 'In estate. Faccia domanda alle società comunali di alloggi (Kittilä, Inari, Sodankylä) prima della stagione; nell’esempio di Levi un appartamento vacanza si poteva affittare a mese solo da maggio a novembre (Yle, 25 maggio 2023).',
    },
    {
      q: 'Posso vivere in un appartamento vacanza per tutta la stagione?',
      a: 'Sì, se il proprietario offre un affitto stagionale, ma in un appartamento vacanza non si può ottenere un indirizzo ufficiale (Yle, 25 maggio 2023).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Le prime notti',
    h2: 'Prima di avere le chiavi in mano.',
    lead:
      'La stagione spesso comincia prima che l’appartamento sia libero. La ricerca del nostro partner mostra camere e appartamenti disponibili ai prezzi di oggi.',
    chips: [
      { label: 'Levi', destination: 'Levi', sid: 'seasonal_first_nights_levi' },
      { label: 'Ylläs', destination: 'Äkäslompolo', sid: 'seasonal_first_nights_yllas' },
      { label: 'Saariselkä', destination: 'Saariselkä', sid: 'seasonal_first_nights_saariselka' },
      { label: 'Rovaniemi', destination: 'Rovaniemi', sid: 'seasonal_first_nights_rovaniemi' },
    ],
  },
  sources: pickSources('it', SOURCES, common.sourceLabels),
};

export default copy;
