// Italian overlay, formal Lei. Overrides all keys flagged by validator
// (banned terms: "Lapponia"→"Lapponia", "baita"→"baita") + above-the-fold copy.
import { copyEN } from './copy.en';
import type { SectionCopy } from './copy';

export const copyIT: SectionCopy = {
  ...copyEN,
  hero: {
    ...copyEN.hero,
    eyebrow: 'Lapponia finlandese · Guida editoriale',
    h1Line1: 'La Lapponia è più',
    h1Line2: 'di una settimana di vacanza.',
    lead:
      'Baite a settimana, design hotel a Rovaniemi, igloo di vetro per le notti da non perdere, e i lodge nella natura selvaggia oltre l’ultima strada. Tariffe verificate da',
    leadPriceRange: '140 € a 1 500 €',
    liveLabel: 'Disponibilità in tempo reale · Ricerca Trip.com',
    browseLongStays: 'Sfogli i soggiorni lunghi',
    seeHotels: 'Veda gli hotel',
  },
  newsletter: {
    ...copyEN.newsletter,
    eyebrow: 'Aperture soggiorni lunghi · tariffe bassa stagione',
    h2: 'Le strutture che non può ancora prenotare.',
    lead:
      'La maggior parte delle strutture per soggiorni lunghi di questo sito libera l\'inventario invernale a fine agosto, e va a ruba. Raccontiamo quando si aprono le finestre di prenotazione, e le settimane di bassa stagione (novembre, fine aprile) quando i prezzi scendono mentre le aurore restano visibili.',
    placeholder: 'Il Suo indirizzo email',
    subscribe: 'Si iscriva',
    subscribing: 'Iscrizione in corso…',
    success:
      'Ci siamo quasi: confermi l\'iscrizione dall\'e-mail che Le abbiamo appena inviato.',
    errorPrefix: 'Iscrizione non riuscita, ',
    pleaseTryAgain: 'riprovi',
    footnotePart1: 'Niente spam. Disiscrizione con un clic. Veda la nostra ',
    footnoteLink: 'Informativa sulla privacy',
  },
  authorByline: {
    reviewed: 'Verificato dalla rete editoriale di LaplandVibes',
    defaultNote:
      'Scritto e verificato con partner locali in tutta la Lapponia finlandese. Riceviamo commissioni di affiliazione sulle prenotazioni, ma non influenzano mai le strutture che consigliamo.',
  },
  affiliateDisclosure:
    'Alcuni link in questa pagina sono link di affiliazione. Se prenota tramite essi riceviamo una commissione, senza costi aggiuntivi per Lei. Le strutture sono scelte per merito, non per commissione.',
  workInLaplandPromo: {
    ...copyEN.workInLaplandPromo,
    inlineEyebrow: 'Viene in Lapponia per lavoro?',
    inlineBodyPrefix:
      'Lavori stagionali, basi per remote working e posizioni nelle stazioni sciistiche sono sul nostro sito gemello ',
    inlineCta: 'Sfogli le offerte',
    fullEyebrow: 'Sito gemello · laplandwork.com',
    fullH2A: 'Viene in Lapponia',
    fullH2B: 'per lavoro?',
    fullP1:
      'Molti dei soggiorni lunghi su questo sito vengono prenotati da chi è arrivato per una stagione sciistica, un contratto di ingegneria artica o un mese di remote work, e si è innamorato del posto. Se è questo il Suo caso, c’è un sito dedicato al lavoro.',
    fullP2B:
      ' è l’hub centralizzato per il lavoro nella Lapponia finlandese, ospitalità stagionale, ruoli nelle stazioni sciistiche, posizioni nei canili di husky, lavori in ospedale e ingegneria a Rovaniemi, Levi, Saariselkä e Inari. Gratuito per chi cerca lavoro, tre fasce di prezzo per i datori di lavoro.',
    fullCta: 'Vedi i lavori in Lapponia',
    blocks: [
      { label: 'Ospitalità stagionale', tag: 'Levi · Ylläs · Saariselkä' },
      { label: 'Canili di husky', tag: 'Stagionale nov–apr' },
      { label: 'Basi remote-work', tag: 'Tutto l’anno, fibra' },
      { label: 'Sanità + tech', tag: 'Posizioni permanenti' },
    ],
  },
  longTermRentals: {
    ...copyEN.longTermRentals,
    tags: {
      ...copyEN.longTermRentals.tags,
      national: 'NAZIONALE',
      rentalOnly: 'SOLO AFFITTI',
      corporate: 'AZIENDALE',
      classifieds: 'DIRETTO DAL PROPRIETARIO',
    },
    eyebrow: 'Trasferirsi in Lapponia · 6 mesi e oltre',
    h2A: 'In cerca di un vero appartamento,',
    h2B: 'non un affitto turistico?',
    lead:
      'Le strutture su questo sito sono affitti a breve-medio termine prenotati tramite il nostro partner di prenotazione, la risposta giusta per soggiorni fino a quattro settimane. Per 6 mesi, un anno o un trasferimento permanente, servono i portali immobiliari nazionali finlandesi. Questi sono i sei più attivi per l’inventario in Lapponia.',
    process: {
      title: 'Processo tipico',
      body:
        'Email al proprietario/agente → visita di persona → modulo di richiesta (palkkatodistus + luottotiedot) → deposito di 1–2 mesi + primo mese di affitto → chiavi. Sono realistiche 2–6 settimane di anticipo.',
    },
    cost: {
      title: 'Quanto costa',
      body:
        'Rovaniemi monolocale: 600–900 €/mese. Levi/Saariselkä monolocale (stagione invernale): 900–1 400 €. Fuori dal picco invernale nei villaggi sciistici, i prezzi scendono del 30–40%. Tutti i valori includono l’acqua; elettricità e riscaldamento sono di solito separati.',
    },
    abroad: {
      title: 'Viene dall’estero?',
      body:
        'I cittadini UE/SEE possono affittare liberamente. Per i non UE serve un permesso di soggiorno (Migri richiede 1–4 mesi di elaborazione). L’hub di lavoro su laplandwork.com copre Migri, registrazione Kela, apertura conto bancario finlandese, tessera fiscale e l’intera checklist per il trasferimento in Lapponia.',
    },
  },
  tripRecommender: {
    weBook: 'Noi prenoteremmo',
    items: [
      {
        forWho: 'Primo viaggio · 4–6 notti · con bambini',
        recommendation: 'Hotel boutique a Rovaniemi',
        rationale:
          'Un design hotel come Arctic Light o Arctic TreeHouse offre comodità dall’aeroporto, una vera scena gastronomica e la logistica per il Villaggio di Babbo Natale, senza costringere la famiglia in una baita remota dove il riscaldamento diventa un progetto serale.',
        ctaLabel: 'Veda gli hotel',
      },
      {
        forWho: 'Visitatore di ritorno · 7–14 notti · base in un solo posto',
        recommendation: 'Baita a soggiorno lungo a Levi o Saariselkä',
        rationale:
          'Si fermi per una settimana. Un appartamento con due camere a Levi Spirit o una baita in collina vicino a Saariselkä offre tariffe settimanali, sauna privata e tempo sufficiente per stabilirsi davvero in Lapponia, invece di correre tra notti da bucket list.',
        ctaLabel: 'Veda i soggiorni lunghi',
      },
      {
        forWho: 'Anniversario · pensione · gruppo in esclusiva',
        recommendation: 'Un lodge nella natura',
        rationale:
          'Un lodge nella natura è il modo più esclusivo di celebrare l’occasione. Una Iso-Syöte Eagle View Suite offre isolamento sopra la linea degli alberi, e una villa al Wilderness Hotel Nangu aggiunge attività guidate dai Sami sul Lago Inari, entrambe abbastanza private da far sembrare l’intero paesaggio Suo, senza il prezzo di un’esclusiva totale.',
        ctaLabel: 'Veda i lodge nella natura',
      },
    ],
  },
  home: {
    ...copyEN.home,
    metaTitle: 'Dove alloggiare in Lapponia 2026, 16 strutture verificate',
    metaDescription:
      'Pianifichi il soggiorno 2026 in Lapponia: 16 strutture verificate, baite da 140 €/notte, design hotel a Rovaniemi, igloo di vetro da 280 €, lodge nella natura.',
    schemaName: 'StayInLapland, Soggiorni lunghi e hotel boutique nella Lapponia finlandese',
    breadcrumbHome: 'Home',
    stats: { stays: 'Strutture scelte', bases: 'Basi in Lapponia', categories: 'Modi di soggiornare', months: 'Mesi valutati' },
    intro: {
      p1: 'La maggior parte delle liste "migliori alloggi in Lapponia" mette un igloo di vetro in cima, venti altri igloo di vetro più o meno nello stesso ordine, e neanche una frase sul fatto che chi scrive abbia mai passato più di due notti in uno di essi. Questa guida è l’opposto.',
      p2: 'L’alloggio in Lapponia si divide in quattro categorie, affitti a soggiorno lungo, hotel, igloo di vetro e lodge nella natura, e le sedici strutture che meritano il loro posto sono elencate qui sotto. Tra esse può costruire un viaggio che inizia con una settimana in una baita base vicino a Levi, prosegue con due notti in un design hotel a Rovaniemi e finisce con una notte in igloo di vetro prima del volo di ritorno. Così la Lapponia premia davvero un soggiorno più lungo.',
      p3: 'Tre cose che questa guida non fa: aggregare prezzi, riciclare recensioni, o fingere di coprire luoghi dove nessun partner della rete ha mai trascorso una vera notte.',
    },
    authorNote: 'Una breve lista curata, scritta e verificata con partner locali in tutta la Lapponia finlandese.',
    fourWays: {
      kicker: 'Quattro modi di alloggiare',
      h2A: 'Si stabilisca in uno.',
      h2B: 'O ne combini due.',
      lead:
        'Scelga la categoria che corrisponde al viaggio che vuole davvero. Poi scelga una destinazione. I lettori di soggiorni lunghi spesso ne combinano due, una settimana di base in baita, due notti di contrasto.',
    },
    propertyWord: 'struttura',
    propertiesWord: 'strutture',
    explore: 'Esplori',
    pullQuote: {
      text:
        'La Lapponia è più grande di quanto la gente si aspetti, e la strada tra Rovaniemi e Saariselkä richiede mezza giornata in ciascuna direzione. Il più grande errore al primo viaggio è prenotare tre basi diverse in cinque notti.',
      attr: 'Rapporto alloggi Lapponia · Lapin Liitto, 2024',
    },
    tripKicker: 'Ha già un’idea di cosa vuole?',
    tripH2: 'Le scorciatoie dei locali.',
    destKicker: 'Cinque basi in Lapponia',
    destH2: 'Dove in Lapponia?',
    destLead:
      'Ogni destinazione ha una logica diversa per il soggiorno lungo. Clicchi per i consigli sulle strutture e per la ragione di scegliere quella base sulle altre.',
    readGuide: 'Legga la',
    faqKicker: 'Domande vere, risposte vere',
    faqH2: 'Prima di cliccare qualsiasi cosa.',
    faqs: [
      {
        q: 'Quanto dura un "soggiorno lungo" su questo sito?',
        a: 'Tutto a partire da quattro notti conta come soggiorno lungo, è la soglia alla quale la maggior parte delle strutture in Lapponia offre tariffe settimanali e una vera cucina inizia ad avere importanza. Le strutture proposte per soggiorni lunghi hanno minimi da 3 fino a 7 notti a seconda dell’unità; ogni scheda indica il minimo.',
      },
      {
        q: 'Perché la home è focalizzata sui soggiorni lunghi e non sugli igloo di vetro?',
        a: 'Gli igloo di vetro sono il formato iconico della Lapponia e hanno una pagina dedicata. Ma i viaggi in Lapponia più amati a lungo termine non sono soggiorni di tre notti in una cupola di vetro, sono settimane base-camp in una baita o in un design hotel, con una o due notti altrove. Il sito riflette come la Lapponia premia davvero chi torna.',
      },
      {
        q: 'Kakslauttanen vale davvero il prezzo da copertina?',
        a: 'Sì, ma solo gli igloo Kelo-Glass, non i classici Glass Igloos. I Kelo-Glass combinano il tetto panoramico di vetro con una struttura in tronchi riscaldata, un angolo cottura e un caminetto privato. Un minimo di due notti permette di sfruttarli al meglio. Migliori finestre per l’aurora boreale: inizio febbraio e fine marzo.',
      },
      {
        q: 'Dove dovrei stabilirmi se il mio soggiorno lungo prevede remote working?',
        a: 'Rovaniemi. È l’unica città della Lapponia con fibra affidabile, voli giornalieri per Helsinki e Stoccolma, e una vera scena gastronomica invernale che resta aperta anche in bassa stagione. Arctic TreeHouse Resort e Ounasvaara Chalets offrono entrambi tariffe settimanali e veri scrittoi.',
      },
    ],
    fullGuideCta: 'Legga la guida completa alle prenotazioni',
    categoryDescriptions: {
      longStays: 'Affitti settimanali + mensili, ville, baite design, appartamenti sci.',
      hotels: 'Hotel boutique, design e classici della Lapponia per soggiorni brevi.',
      glassIgloos: 'Il formato iconico della Lapponia, quattro resort che meritano il nome.',
      wilderness: 'Oltre l’ultima strada, due rifugi per viaggiatori seri.',
    },
    categoryNames: {
      longStays: 'Soggiorni lunghi',
      hotels: 'Hotel',
      glassIgloos: 'Igloo di vetro',
      wilderness: 'Lodge nella natura',
    },
  },
  hotels: {
    ...copyEN.hotels,
    metaTitle: 'Hotel boutique e design nella Lapponia finlandese',
    metaDescription:
      'Cinque hotel in Lapponia che vale la pena prenotare, Arctic TreeHouse, Arctic Light, Levi Spirit, Lapland Hotels Saaga e Star Arctic. Per soggiorni brevi.',
    breadcrumb: 'Hotel',
    pageHero: {
      eyebrow: 'Cinque hotel che vale la pena prenotare',
      title: 'Hotel in Lapponia.',
      subtitle:
        'Hotel boutique, design e classici affidabili della Lapponia, per i soggiorni brevi, i viaggi di lavoro e le due notti in città che si costruiscono intorno a una base più lunga in baita.',
    },
    authorNote:
      'Cinque strutture verificate con le informazioni pubblicate dai gestori e le recensioni recenti degli ospiti durante la stagione 2025/26.',
    introP1:
      'La Lapponia ha numerose catene di hotel di fascia media, Scandic, Sokos, che coprono bene l’essenziale a 90–140 €/notte. Non sono elencate qui; la loro scelta è in gran parte "il più vicino all’aeroporto, la settimana più economica".',
    introP2:
      'I cinque hotel qui sotto si guadagnano il loro posto per un motivo diverso, design, architettura, vista o mix di servizi. Sono la risposta giusta quando si vuole un hotel che sia parte del motivo per cui si è venuti, non solo una base.',
    picksKicker: 'Cinque selezioni',
    picksH2: 'Curate, non aggregate.',
    pullQuote: {
      text:
        'Rovaniemi è stata ricostruita tre volte dopo il 1944, la terza volta da Alvar Aalto, che disegnò la pianta della città a forma di corna di renna. L’Arctic Light Hotel si trova dentro le corna, in un edificio del 1939 sopravvissuto a tutte e tre le ricostruzioni.',
      attr: 'Architectural Record · servizio Arctic Light Hotel',
    },
    glanceKicker: 'Tutti e cinque a colpo d’occhio',
    glanceH2: 'Confronto con un punto di vista.',
    rubric:
      'Cinque punti è il massimo. Design = stile degli interni e qualità dei materiali. Architettura = l’edificio in sé. Attività = ski-in/out, canili di husky, cultura locale a 15 minuti.',
    axes: ['Design', 'Architettura', 'Spa / sauna', 'Attività', 'Ristorante'],
    rows: [
      { name: 'Arctic TreeHouse', verdict: 'Miglior design hotel a Rovaniemi.' },
      { name: 'Arctic Light', verdict: 'Edificio architettonicamente più interessante.' },
      { name: 'Levi Spirit', verdict: 'Atmosfera per adulti. Spa + ski-in.' },
      { name: 'Lapland Hotels Saaga', verdict: 'Classico ski-in/out a Ylläs. Spa inclusa.' },
      { name: 'Star Arctic', verdict: 'In collina · cielo più scuro · mix baita/hotel.' },
    ],
    marginLabel: 'Dritta',
    marginBody:
      'Arctic TreeHouse e Levi Spirit gestiscono entrambi i propri ristoranti, Rakas (TreeHouse) e Spirit Kitchen (Levi). Entrambi puntano su materie prime locali. Se prenota uno dei due, prenoti il tavolo lo stesso giorno della camera, il sabato e la domenica si esauriscono prima dell’hotel.',
    counterKicker: 'Controproposta onesta',
    counterH2: 'Quando un hotel non è la risposta.',
    counterP1:
      'Per 5+ notti con lo stesso ritmo di viaggio, sci, cucina, sauna e si ricomincia, una baita o un appartamento a soggiorno lungo batte qualsiasi di questi hotel per costo a notte e qualità della vita. Gli hotel hanno senso quando le giornate sono diverse l’una dall’altra.',
    counterP2:
      'Per una singola notte da bucket list sotto l’aurora, vincono gli igloo di vetro. Nessuno degli hotel qui sopra ha un tetto di vetro.',
    seeLong: 'Veda i soggiorni lunghi',
    seeIgloos: 'Veda gli igloo di vetro',
    browseAll: 'Sfogli l’inventario di Trip.com',
  },
  glassIgloos: {
    ...copyEN.glassIgloos,
    metaTitle: 'Igloo di vetro nella Lapponia finlandese | StayInLapland',
    metaDescription:
      'I resort di igloo di vetro in Lapponia che meritano il nome, Kakslauttanen, Levin Iglut, Aurora Village e Aurora Pyramids. Classificati per cielo e accesso.',
    breadcrumb: 'Igloo di vetro',
    pageHero: {
      ...copyEN.glassIgloos.pageHero,
      eyebrow: 'Il formato iconico della Lapponia',
      title: 'Igloo di vetro nella Lapponia finlandese.',
      subtitle:
        'La cupola di vetro finlandese è stata inventata a Saariselkä. Oggi quattro strutture meritano davvero il nome, e tra loro la differenza si sente.',
    },
    authorNote:
      'Quattro resort verificati con le informazioni pubblicate dai gestori e le recensioni recenti degli ospiti. Prezzi verificati l\'ultima volta: febbraio 2026.',
    pickWhy: [
      'Kakslauttanen è in ogni elenco perché se lo merita. Il resort ha aperto a Saariselkä nel 1973, quando “alloggi turistici a Saariselkä” voleva dire un ostello di legno e l’aurora boreale si guardava dal parcheggio, e più tardi ha inventato l’igloo di vetro moderno.',
      'C’è un bivio: prenoti gli igloo Kelo-Glass, non i classici Glass Igloos. I Kelo-Glass combinano il tetto panoramico di vetro con una struttura in tronchi riscaldata, un angolo cottura privato e un caminetto. I classici Glass Igloos sono più piccoli, più affollati e il bagno è a 50 metri a -25°C.',
      'La differenza di prezzo è di circa 200 €/notte. Su tre notti, il Kelo-Glass si ripaga nel non dover infilare i doposci alle 4 di mattina.',
    ],
    pickCaveat:
      'I classici Glass Igloos costano circa il 30% in meno ma l’esperienza è chiaramente inferiore. Se il Suo budget si ferma a 400 €/notte, valuti Aurora Village o Aurora Pyramids, stesso cielo, spesso con una cornice migliore di lago o natura selvaggia.',
    pullQuote: {
      text:
        'Il primo igloo di vetro fu costruito perché gli ospiti potessero vedere l’aurora senza stare fuori a -30°C. Decenni dopo questo è ancora tutto il concept, e la parte che ogni imitatore sbaglia è cosa succede quando l’aurora se ne va.',
      attr: 'Storia delle origini di Kakslauttanen · resort fondato nel 1973',
    },
    runnersKicker: 'Gli altri tre',
    runnersH2: 'Quando Kakslauttanen non è la risposta giusta.',
    glanceKicker: 'Tutti e quattro a colpo d’occhio',
    glanceH2: 'Il confronto con un punto di vista.',
    rubric:
      'Cinque punti è il massimo. Accesso = facilità dall’aeroporto più vicino. Cielo = oscurità + geometria di osservazione. Privacy = isolamento dalle unità vicine. Comfort = bagno, cucina, isolamento acustico. Reputazione = quanto il resort mantiene ciò che promette la brochure.',
    axes: ['Accesso', 'Cielo', 'Privacy', 'Comfort', 'Reputazione'],
    rows: [
      { name: 'Kakslauttanen', verdict: 'L’originale. Caro. Vale solo per i Kelo-Glass.' },
      { name: 'Levin Iglut', verdict: 'Migliore ingegneria. Letti motorizzati per l’aurora.' },
      { name: 'Aurora Village', verdict: 'Atmosfera più remota. 30 min da Ivalo.' },
      { name: 'Aurora Pyramids', verdict: 'I riflessi sul lago raddoppiano l’aurora.' },
    ],
    marginLabel: 'Compromesso',
    marginBody:
      'Nessun resort vince su tutti e cinque gli assi. Aurora Pyramids batte tutti per riflessi sul cielo ma perde sull’accesso (40 min da Ivalo). Levin Iglut vince in ingegneria ma si trova dentro un villaggio sciistico animato. Scelga la priorità che conta di più.',
    counterKicker: 'Controproposta onesta',
    counterH2: 'Quando saltare del tutto gli igloo di vetro.',
    counterP1:
      'Per soggiorni di quattro o più notti, due notti in igloo di vetro più un blocco in baita per soggiorno lungo è un viaggio migliore di quattro notti in igloo di vetro. La novità svanisce dopo la seconda notte; una hirsimökki con sauna privata regala la parte di Lapponia che una cupola di vetro non può.',
    counterP2:
      'Per Natale (22 dic → 2 gen) i prezzi triplicano e il 90% dell’inventario va ai pacchetti turistici britannici entro primavera. Sposti le date alla seconda metà di gennaio se possibile, più freddo, più buio, metà prezzo, aurora migliore.',
    seeLong: 'Veda i soggiorni lunghi',
    bookingGuideBtn: 'Guida alla prenotazione',
    browseAll: 'Sfogli l’inventario di Trip.com',
  },
  wilderness: {
    ...copyEN.wilderness,
    metaTitle: 'Lodge nella natura in Lapponia | StayInLapland',
    metaDescription:
      'Lodge nella natura oltre l’ultima strada, Iso-Syöte Eagle View Suites e Wilderness Hotel Muotka. Aurora sopra la linea degli alberi e sveglia aurora in loco.',
    breadcrumb: 'Natura selvaggia',
    pageHero: {
      ...copyEN.wilderness.pageHero,
      eyebrow: 'Oltre l’ultima strada',
      title: 'Lodge nella natura.',
      subtitle:
        'La nuova tradizione della Lapponia, rifugi disegnati da architetti, costruiti dagli anni 2010 in luoghi dove finisce la strada turistica. Due lodge, due diverse definizioni di natura selvaggia.',
    },
    authorNote:
      'I dettagli di entrambe le strutture sono verificati sulle informazioni pubblicate dai gestori e sulle recensioni recenti degli ospiti.',
    pickWhy: [
      'Le Iso-Syöte Eagle View Suites si trovano a 432 m sul vero fjell più meridionale della Finlandia, suite in legno di pino, con osservazione dell’aurora sopra la linea degli alberi e senza il lungo volo verso nord.',
      'Le vetrate guardano il cielo aperto, così nelle notti limpide l’arco aurorale si legge dal letto. L’aurora si osserva dalla propria suite in cima al crinale anziché da un riparo condiviso, privacy senza l’impegno di un’esclusiva totale.',
      'Ed è il lodge nella natura serio più facile da raggiungere: 90 minuti dall’aeroporto di Oulu, il che lo rende il raro rifugio che funziona anche per un viaggio breve.',
    ],
    pickCaveat:
      'Il pulsante "Verifichi le tariffe" su questo sito reindirizza alla ricerca Trip.com per la disponibilità prenotabile più vicina. Le Eagle View Suites si esauriscono prima nei fine settimana di cielo sereno, prenoti le date, non le previsioni.',
    pullQuote: {
      text:
        'La parola "remoto" è di solito un termine di marketing. Quassù è vero. La strada finisce, la linea degli alberi scende sotto di Lei, e l’unica luce che resta è quella che il cielo decide di fare. In un posto così non si capita per caso, ci si impegna.',
      attr: 'Sulla strada del fjell di Iso-Syöte, alzando lo sguardo',
    },
    runnersKicker: 'L’altro',
    runnersH2: 'Quando un’intera suite in cima al crinale è troppo.',
    glanceKicker: 'Due definizioni di natura selvaggia',
    glanceH2: 'A colpo d’occhio.',
    rubric:
      'Isolamento = quanto ci si sente davvero soli. Servizio = rapporto staff-ospiti. Attività = esperienze guidate incluse o disponibili.',
    axes: ['Accesso', 'Isolamento', 'Servizio', 'Attività', 'Fattore unico'],
    rows: [
      { name: 'Iso-Syöte Eagle View', verdict: 'Sopra la linea degli alberi. Il più facile dalla Finlandia meridionale.' },
      { name: 'Hotel Muotka', verdict: 'Servizio sveglia aurora in loco. Comfort da hotel.' },
    ],
    marginLabel: 'Sveglia aurora a Muotka',
    marginBody:
      'Il Wilderness Hotel Muotka ha un cacciatore di aurore di turno che monitora l’indice Kp e bussa fisicamente alle porte quando l’aurora si apre. È la caratteristica migliore di qualsiasi struttura in questa guida e da sola giustifica la differenza di prezzo per le notti singole.',
    counterKicker: 'Controproposta onesta',
    counterH2: 'I lodge nella natura non sono per tutti.',
    counterP1:
      'Entrambi i lodge sono a 1–3 ore di transfer dall’aeroporto più vicino. Per viaggi sotto le tre notti il tempo speso in trasferimenti è sproporzionato.',
    counterP2:
      'Per chi viene la prima volta nell’Artico: faccia prima un viaggio a Rovaniemi o Saariselkä. Un lodge nella natura da prenotare in esclusiva totale è sprecato su chi sta ancora capendo cosa sono i -25°C.',
    seeLong: 'Veda i soggiorni lunghi',
    browseAll: 'Sfogli l’inventario di Trip.com',
  },
  longStays: {
    ...copyEN.longStays,
    metaTitle: 'Soggiorni lunghi nella Lapponia finlandese | StayInLapland',
    metaDescription:
      'Cinque strutture in Lapponia per soggiorni di una settimana o più, suite Arctic TreeHouse, attici a Levi, chalet di Ounasvaara, baite a Pyhä e ville a Inari.',
    breadcrumb: 'Soggiorni lunghi',
    pageHero: {
      ...copyEN.longStays.pageHero,
      eyebrow: 'Cinque strutture per soggiorni lunghi',
      title: 'Si fermi una settimana. O un mese.',
      subtitle:
        'La risposta giusta per chi torna, lavoratori in remoto, famiglie e chiunque abbia un viaggio in Lapponia più lungo di tre notti. Tariffe settimanali, saune private, vere cucine, dalle suite design agli appartamenti ski-in.',
    },
    authorNote:
      'Cinque strutture verificate con partner sul territorio e con calendari a tariffa settimanale lungo la stagione 2025/26.',
    pickWhy: [
      'L’Arctic TreeHouse Resort è la risposta quando la domanda è "come faccio un vero soggiorno lungo a Rovaniemi senza affittare una baita spoglia?" Suite design costruite nella pineta ai margini del Santa Park, ciascuna con angolo cottura e una vetrata panoramica rivolta verso gli alberi.',
      'La tariffa settimanale scende di circa il 25% rispetto a quella giornaliera, e ogni suite dà accesso al villaggio di saune del resort, una settimana qui costa quindi meno a notte di una serie di prenotazioni di una notte, con molto più spazio per ambientarsi davvero.',
      'È anche la base più flessibile di questo elenco: aeroporto, ristoranti e cultura del design di Rovaniemi sono a dieci minuti, mentre la suite stessa guarda solo la foresta. Il pulsante "Verifichi le tariffe" qui sotto La porta direttamente alla disponibilità settimanale.',
    ],
    pickCaveat:
      'Lo sconto settimanale vive nel sistema di prenotazione una volta selezionate 7+ notti, non sempre compare nella tariffa giornaliera mostrata. Le settimane di punta intorno a Natale si esauriscono con mesi di anticipo; metà novembre e fine aprile sono molto più economiche.',
    pullQuote: {
      text:
        'Il brief era scomparire dentro il crinale. Usare legname proveniente dalla proprietà, vetri rivolti solo a nord e non alzare mai il colmo del tetto sopra la linea degli alberi. Ciò che vede era già lì, abbiamo solo reso possibile viverci dentro.',
      attr: 'Studio Puisto · dichiarazione dell’architetto',
    },
    runnersKicker: 'Le altre quattro',
    runnersH2: 'Dagli appartamenti ski-in alle ville sul lago.',
    runnersLead:
      'Ciascuna delle quattro qui sotto ha una logica diversa per il soggiorno lungo, vicinanza agli impianti di risalita, infrastruttura per giorni lavorativi da remoto in Lapponia, cucina adatta alle famiglie, o una base culturale sul lago.',
    weeklyKicker: 'Come funzionano le tariffe settimanali',
    weeklyH2: 'Il prezzo cala più rapidamente di quanto si pensi.',
    weeklyP1:
      'Sulle strutture di questa pagina, la tariffa settimanale è in media <strong>23% più economica a notte</strong> rispetto alla tariffa giornaliera ufficiale. Levi Residences scende del 30%, Pyhä Bear’s Lodge del 18%, Arctic TreeHouse del 25%. La maggior parte delle strutture non pubblicizza questo, lo sconto vive nel sistema di prenotazione una volta selezionate 7+ notti.',
    weeklyP2:
      'Le settimane di spalla, <strong>metà novembre</strong> (appena prima che la neve si stabilizzi) e <strong>fine aprile</strong> (appena dopo che la neve si scioglie), calano di un ulteriore 30–50%. L’aurora è ancora attiva in entrambe le finestre. È il punto dolce per i soggiorni lunghi con un calendario di lavoro flessibile.',
    marginLabel: 'Tattica di prenotazione',
    marginBody:
      'Per un soggiorno di 4 settimane, dividere il periodo tra due strutture può battere una prenotazione singola, si evita il picco delle "settimane di punta" a Natale e durante le vacanze sciistiche di febbraio, e si vedono davvero due parti della Lapponia. Il giorno di trasferimento richiede mezza giornata; il risparmio di solito paga due notti in più altrove.',
    counterKicker: 'Controproposta onesta',
    counterH2: 'Quando NON prenotare un soggiorno lungo.',
    counterP1:
      'Per un primo viaggio di 2–3 notti, salti gli affitti a soggiorno lungo. Il check-in, la spesa al supermercato e il tempo di imparare a usare la cucina cancellano il risparmio. Prenoti un hotel.',
    counterP2:
      'Per una singola notte aurora da bucket list, gli igloo di vetro sono la risposta migliore. Il tetto di vetro è l’esperienza per cui si viene; una baita per soggiorno lungo offre solo una finestra.',
    counterP3:
      'Per gruppi con mobilità mista, chiami la struttura direttamente prima di prenotare, la maggior parte delle baite a soggiorno lungo non è priva di gradini e in particolare le saune si trovano in seminterrato su pavimento di legno.',
    seeHotels: 'Veda gli hotel',
    seeIgloos: 'Veda gli igloo di vetro',
    browseAll: 'Sfogli l’inventario di Trip.com',
  },
  bookingGuide: {
    ...copyEN.bookingGuide,
    breadcrumb: 'Guida alla prenotazione',
    metaTitle: 'Guida alle prenotazioni in Lapponia, quando e come',
    metaDescription:
      'Guida pratica alle prenotazioni in Lapponia, quando venire per la migliore aurora, come arrivare, cosa portare, quanto costa e i suggerimenti dei locali.',
    pageHero: {
      ...copyEN.bookingGuide.pageHero,
      eyebrow: 'Pianifichi un viaggio vero',
      title: 'La guida alle prenotazioni in Lapponia.',
      subtitle: 'Consigli pratici e schietti. Quando venire, come arrivare, cosa mettere in valigia, quanto costa davvero.',
    },
    sections: [
      {
        title: 'Quando venire',
        body: [
          'La stagione dell’aurora va da fine agosto a inizio aprile. Le finestre più forti sono settembre-ottobre e febbraio-marzo, quando le lunghe notti buie coincidono con un clima solare attivo.',
          'Eviti da fine novembre a metà dicembre: buio, ma la neve è spesso a chiazze e molte attività non sono ancora partite.',
          'Natale e Capodanno si esauriscono con 9 mesi di anticipo e i prezzi triplicano. La scelta dei locali è la seconda metà di gennaio, più tranquilla, più fredda, aurora migliore.',
        ],
      },
      {
        title: 'Come arrivare',
        body: [
          'Tre aeroporti in Lapponia coprono la maggior parte di ciò che si prenota. Rovaniemi (RVN) per il Villaggio di Babbo Natale e il sud, Kittilä (KTT) per Levi e Ylläs, Ivalo (IVL) per Saariselkä, Inari e il nord.',
          'Helsinki (HEL) → Lapponia è un volo domestico di 90 minuti. Esistono anche voli diretti da Londra, Berlino e Parigi tra dicembre e marzo.',
          'Treni: il notturno Helsinki–Rovaniemi è lento ma il tratto lungo la costa del golfo di Botnia passando per Kemi è genuinamente bello e la carrozza è piena di locali che fanno lo stesso viaggio.',
        ],
      },
      {
        title: 'Cosa mettere in valigia',
        body: [
          'La maggior parte delle strutture fornisce l’abbigliamento artico (tute -30°C, stivali, guanti, cappelli) incluso o a una piccola tariffa giornaliera. Confermi prima di volare con un bagaglio pieno di attrezzatura da sci.',
          'Gli strati contano più dello spessore, base in merino + pile intermedio + guscio antivento. Il cotone è da evitare.',
          'Fotocamere: porti batterie di scorta a contatto con il corpo, dentro la giacca. Il freddo le scarica in fretta.',
        ],
      },
      {
        title: 'Verifica del budget',
        body: [
          'Baita per soggiorno lungo (settimanale): 140–280 €/notte, può ospitare 4–6 persone.',
          'Hotel boutique: 140–420 €/notte, di solito colazione inclusa.',
          'Igloo di vetro, alta stagione: 400–1 500 €/notte per due.',
          'Suite in lodge nella natura: 220–950 €/notte a seconda della struttura.',
          'Attività (safari con gli husky, motoslitta, caccia all’aurora) di solito 120–200 € per persona per uscita in aggiunta.',
        ],
      },
      {
        title: 'Politiche di cancellazione',
        body: [
          'La maggior parte delle strutture in Lapponia è passata a tariffe non rimborsabili per le settimane di picco. Legga le clausole prima di cliccare "prenota".',
          'L’assicurazione di viaggio con copertura "cancella per qualsiasi motivo" vale davvero per viaggi sopra i 2 000 €. I cacciatori di aurora cancellano per maltempo di continuo.',
          'I nostri partner di prenotazione rispettano le condizioni di cancellazione mostrate al momento della prenotazione, prenoti tramite il reindirizzamento di questo sito per mantenere visibili e coerenti le tariffe.',
        ],
      },
      {
        title: 'Suggerimenti dei locali',
        body: [
          'Saariselkä e Inari sono più fredde, più scure e hanno aurora più forte di Rovaniemi, ma Rovaniemi ha l’aeroporto, le attività, il Villaggio di Babbo Natale. Combini le basi.',
          'Se ha solo 3 notti, le faccia in un solo luogo. La Lapponia è più grande di quanto la gente si aspetti e i trasferimenti consumano giorni interi.',
          'Le previsioni dell’aurora boreale (NOAA, Aurora Service Europe) sono accurate da 30 a 90 minuti in anticipo, non giorni. Mantenga flessibilità.',
        ],
      },
    ],
    readyTitle: 'Tutto pronto per prenotare?',
    readyLead:
      'Sfogli strutture selezionate per categoria, oppure salti dritto alla disponibilità in tempo reale su Trip.com.',
    browseAll: 'Esplori tutti gli alloggi in Lapponia',
  },
  whenToGo: {
    ...copyEN.whenToGo,
    metaTitle: 'Quando visitare la Lapponia, guida mese per mese',
    metaDescription:
      'Guida mese per mese per visitare la Lapponia, quando l’aurora è più forte, quando la neve si stabilizza e le settimane che i locali prenotano per sé.',
    breadcrumb: 'Quando andare',
    pageHero: {
      ...copyEN.whenToGo.pageHero,
      eyebrow: 'Mese per mese',
      title: 'Quando visitare la Lapponia.',
      subtitle:
        'Il mese giusto dipende dal viaggio. Priorità aurora, priorità sci, valore per soggiorno lungo, picco di Natale, ognuno ha il suo punto dolce. Ecco la guida editoriale mese per mese.',
    },
    authorNote:
      'Elaborata sulla base dei rapporti dei nostri partner sul territorio in tutta la Lapponia finlandese.',
    pullQuote: {
      text:
        'La maggior parte delle aurore sopra la Lapponia finlandese compare tra la sera e le prime ore del mattino, e i lunghi mesi bui dall’autunno all’inizio della primavera offrono le probabilità migliori. Un cielo limpido e un po’ di pazienza contano più della data esatta.',
      attr: 'LaplandVibes, dai registri delle aurore dei nostri partner in tutta la Lapponia finlandese',
    },
    bestForLabel: 'Ideale per',
    skipIfLabel: 'Da evitare se',
    cheatKicker: 'Il foglietto dei locali',
    cheatH2: 'Tre settimane che i locali prenotano per sé.',
    cheatP1:
      '<strong class="text-charcoal">Fine novembre (settimane 47–48).</strong> La neve si è appena stabilizzata, cominciano le settimane più buie dell’anno, la stagione dell’aurora è in piena attività. Tariffe per soggiorni lunghi al 40–50% di sconto sul picco. Alcune strutture non sono ancora completamente aperte, confermi prima di prenotare.',
    cheatP2:
      '<strong class="text-charcoal">Seconda metà di gennaio (settimane 3–4).</strong> La singola migliore settimana per rapporto aurora/costo della stagione. Le folle natalizie sono andate, la pausa scolastica di febbraio non è ancora iniziata, le giornate si allungano, la neve è ben assestata. È quando l’editor va in vacanza.',
    cheatP3:
      '<strong class="text-charcoal">Fine aprile (settimane 16–17).</strong> Picco dello sci di primavera, sole sopra l’orizzonte 16 ore al giorno, neve ancora profonda sui versanti a nord. La finestra dell’aurora si è chiusa ma la luce da sola vale il viaggio. Le tariffe scendono del 30% dopo Pasqua.',
    marginLabel: 'Tempistica di prenotazione',
    marginBody:
      'Per il picco di febbraio: prenoti con 6 mesi di anticipo. Per fine gennaio: 3 mesi. Per la spalla (novembre, fine aprile): 6–8 settimane bastano. Natale / Capodanno: minimo 9 mesi, e tenga date di riserva perché l’inventario di picco sparisce in primavera.',
    readGuide: 'Legga la guida alla prenotazione',
    seeLong: 'Veda i soggiorni lunghi',
    months: [
      {
        name: 'Settembre',
        pitch: 'Si apre la stagione dell’aurora',
        body:
          'Iniziano le lunghe notti buie. La neve non è ancora caduta, è il periodo della "ruska", quando le betulle virano al rosso e all’oro. L’aurora si staglia sul terreno spoglio e i colori sono i più fotografati di tutti i mesi.',
        bestFor: ['Fotografi', 'Soggiorni brevi incentrati sull’aurora', 'Combinazione trekking + aurora'],
        avoidIf: ['Viene appositamente per la neve'],
      },
      {
        name: 'Ottobre',
        pitch: 'Spalla tranquilla',
        body:
          'Prime nevicate, ma il terreno resta bianco di rado prima di fine mese. Gli hotel applicano tariffe di spalla (-30% rispetto al picco), l’aurora è attiva, pochissimi turisti. La finestra di aurora più economica con tutta l’infrastruttura di attività in funzione.',
        bestFor: ['Cacciatori di aurora con budget contenuto', 'Arrivo per soggiorno lungo prima del picco'],
        avoidIf: ['Vuole garanzie di sci o motoslitta'],
      },
      {
        name: 'Novembre',
        pitch: 'Inizia la notte polare, la neve si stabilizza',
        body:
          'Inizio più freddo dell’inverno in Lapponia. Nell’estremo nord (Utsjoki) la notte polare arriva negli ultimi giorni del mese. La neve inizia a tenere a fine novembre, entro fine mese la maggior parte dei resort e degli snow hotel apre. Fine novembre è in assoluto il miglior rapporto qualità-prezzo per soggiorni lunghi.',
        bestFor: ['Soggiorni lunghi a -50% di tariffa', 'Chi torna e conosce il freddo'],
        avoidIf: ['Chi viene per la prima volta (neve incostante)'],
      },
      {
        name: 'Dicembre',
        pitch: 'Picco di Natale',
        body:
          'Da Natale a Capodanno è tutto al picco, prezzi al picco, domanda al picco, turismo di Babbo Natale al picco a Rovaniemi. Gli igloo di vetro triplicano di prezzo, gli snow hotel aprono del tutto. L’aurora è ancora attiva ma il cielo è spesso più nuvoloso.',
        bestFor: ['Viaggi in famiglia a tema natalizio', 'Esordienti che vogliono neve garantita'],
        avoidIf: ['Viaggio sensibile al budget', 'Soggiorni incentrati sull’aurora'],
      },
      {
        name: 'Gennaio',
        pitch: 'La scelta dei locali',
        body:
          'La seconda metà di gennaio è il punto dolce tranquillo, i prezzi di picco sono rientrati, le giornate si allungano in modo percepibile, la neve è stabile, l’aurora al massimo dell’attività. Le folle natalizie se ne sono andate e quelle delle vacanze scolastiche di febbraio non sono ancora arrivate.',
        bestFor: ['Soggiorni lunghi', 'Lune di miele', 'Fotografia dell’aurora'],
        avoidIf: ['Le serve caldo in qualsiasi forma'],
      },
      {
        name: 'Febbraio',
        pitch: 'Il mese di aurora più forte',
        body:
          'Da metà febbraio a metà marzo è, statisticamente, la finestra di aurora più forte dell’anno, sovrapposizione tra cielo scuro e clima solare attivo. I soggiorni lunghi tornano a tariffa di picco per le vacanze scolastiche europee; prenoti con 6 mesi di anticipo.',
        bestFor: ['Igloo di vetro', 'Viaggi aurora da bucket list'],
        avoidIf: ['Chi pianifica all’ultimo momento'],
      },
      {
        name: 'Marzo',
        pitch: 'La luce torna',
        body:
          'Le giornate si allungano in fretta, a fine mese si hanno 13 ore di luce. L’aurora è ancora forte nelle albe buie e nelle tarde serate. Sci di primavera sui fjell esposti a sud. Il mese di sci più fotogenico.',
        bestFor: ['Soggiorni lunghi ski-in', 'Chi vuole luce + aurora'],
        avoidIf: ['Fotografi venuti per l’atmosfera da notte polare'],
      },
      {
        name: 'Aprile',
        pitch: 'Neve di primavera + luce',
        body:
          'Neve ancora profonda e sci eccellente sui fjell. La stagione dell’aurora finisce a inizio aprile, quando le notti diventano troppo chiare. Fine aprile è di nuovo spalla, le tariffe calano del 30%, le strutture restano aperte, il sole sopra l’orizzonte per oltre 16 ore.',
        bestFor: ['Soggiorni lunghi sci di fine stagione', 'Sci di fondo'],
        avoidIf: ['Viaggi incentrati sull’aurora'],
      },
    ],
  },
  destinationPage: {
    metaTitleSuffix: 'Dove alloggiare | StayInLapland',
    pageHeroEyebrow: 'Destinazione in Lapponia',
    notFoundKicker: 'Pagina non trovata',
    notFoundTitle: 'Destinazione non in elenco.',
    notFoundBody: 'Al momento copriamo Rovaniemi, Levi, Saariselkä, Inari e Ylläs.',
    backHome: 'Torni alla home',
    authorNoteFor: (n) => `La prospettiva del soggiorno lungo per ${n}, scritta e verificata con i partner sul territorio.`,
    recommendedIn: (n) => `Consigliati a ${n}`,
    whereToStay: 'Dove alloggiare davvero.',
    minStayLabel: 'Soggiorno min.:',
    perNight: '/ notte',
    checkRates: 'Verifichi le tariffe',
    seeAll: 'Veda tutto',
    liveAvailabilityIn: (n) => `In cerca di disponibilità in tempo reale a ${n}?`,
    networkLeadA: 'La nostra rete classifica solo 16 strutture. Trip.com elenca tutto il resto che opera a ',
    networkLeadB: ' quest’inverno, date flessibili, filtri per servizio, l’offerta completa.',
    browseInDest: (n) => `Sfogli Trip.com, ${n}`,
    imageNote:
      'Le immagini sono illustrative: mostrano il tipo di alloggio e il paesaggio della zona, non le stanze della struttura.',
    landscapeAlt: (n) => `Paesaggio invernale a ${n}, Lapponia finlandese`,
    bucketLabels: {
      'long-stays': 'soggiorni lunghi',
      'hotels': 'hotel',
      'glass-igloos': 'igloo di vetro',
      'wilderness': 'natura selvaggia',
    },
  },
  nav: {
    longStays: 'Soggiorni lunghi',
    hotels: 'Hotel',
    glassIgloos: 'Igloo di vetro',
    wilderness: 'Natura selvaggia',
    whenToGo: 'Quando andare',
    bookingGuide: 'Guida alla prenotazione',
    browseStays: 'Sfogli gli alloggi',
    homeAria: 'StayInLapland, pagina iniziale',
    openMenu: 'Apra il menu',
    closeMenu: 'Chiuda il menu',
  },
  langSwitchAria: { en: 'English', fi: 'Suomeksi', de: 'Auf Deutsch', ja: '日本語で', es: 'En español', 'pt-BR': 'Em português', 'zh-CN': '简体中文', ko: '한국어', fr: 'En français', it: 'In italiano', nl: 'In het Nederlands', sv: 'På svenska' },
  marginNoteDefault: 'A margine',
  comparison: {
    property: 'Struttura',
    verdict: 'Giudizio',
    nOutOf5: (n) => `${n} su 5`,
  },
  editorsPick: {
    kicker: 'Scelta della redazione',
    perNight: '/ notte',
    note: 'Nota',
    cta: 'Verifichi le tariffe e prenoti',
  },
  propertyCard: {
    short: '1–3 notti',
    medium: '3–6 notti',
    long: '7+ notti',
    nights: (n) => `${n} ${n === 1 ? 'notte' : 'notti'}`,
    minPrefix: 'Min',
    perNight: '/ notte',
    cta: 'Verifichi le tariffe e prenoti',
  },
  hotelsData: [
    {
      name: 'Arctic TreeHouse Resort',
      location: 'Rovaniemi',
      highlight: 'Hotel design · suite al margine del bosco',
      description:
        'Un hotel design di 70 suite incastonato nella pineta dietro Santa Park, a Rovaniemi. Ogni suite ha una vetrata panoramica rivolta agli alberi e interni di minimalismo nordico. Forte ristorante interno, Rakas, con materie prime locali, e il villaggio sauna del resort è aperto a tutti gli ospiti.',
    },
    {
      name: 'Arctic Light Hotel',
      location: 'Centro di Rovaniemi',
      highlight: 'Boutique 57 camere · edificio funzionalista del 1939',
      description:
        'Un hotel boutique di 57 camere in un edificio funzionalista del 1939, un tempo sede del giornale locale, ricostruito dopo che la Guerra di Lapponia del 1944 distrusse Rovaniemi. Ogni piano ha un tema interno diverso; la suite sul tetto ha la propria sauna. L’hotel architettonicamente più serio della città.',
    },
    {
      name: 'Levi Spirit',
      location: 'Levi',
      highlight: 'Ville design · spa · ski-in/out',
      description:
        'Hotel di ville di alto livello ai piedi del fjell di Levi. Vasche idromassaggio private all’aperto, una sauna in ogni villa, accesso ski-in/out agli impianti e una spa completa. Pensato per adulti, nessun programma per bambini, solo camere silenziose e buona cucina.',
    },
    {
      name: 'Lapland Hotels Saaga',
      location: 'Ylläsjärvi (Ylläs)',
      highlight: 'Classico dell’Ylläs · ski-in/out · spa e piscina',
      description:
        'L’hotel classico sul versante più tranquillo dell’Ylläs, nel villaggio di Ylläsjärvi, a un centinaio di metri dall’impianto Iso-Ylläs, ski-in/ski-out in inverno. Piscina, spa e palestra sono incluse per le camere standard e superior; gli appartamenti aggiungono la sauna privata. Il buffet del ristorante Biegga guarda il fjell e il lago Ylläsjärvi.',
    },
    {
      name: 'Star Arctic Hotel',
      location: 'Saariselkä',
      highlight: 'In collina · cielo più scuro · mix suite e baita di vetro',
      description:
        'Una struttura ibrida, camere d’hotel classiche più baite con tetto di vetro sul punto più alto sopra Saariselkä. Inquinamento luminoso praticamente nullo. Le camere d’hotel godono della stessa vista dall’alto attraverso un finestrone e costano circa il 40% in meno delle baite.',
    },
  ],
  longStaysData: [
    {
      name: 'Arctic TreeHouse Resort, soggiorno lungo',
      location: 'Rovaniemi',
      highlight: 'Suite design · tariffe settimanali · villaggio sauna',
      description:
        'Suite design affacciate sulla pineta al margine di Santa Park. La tariffa settimanale scende del 25% rispetto a quella giornaliera. Ogni suite ha un angolo cottura, una vetrata panoramica e accesso al villaggio sauna del resort, uno dei pochi modi per fare un vero soggiorno lungo a Rovaniemi senza affittare una baita grezza.',
    },
    {
      name: 'Levi Residences, suite attico',
      location: 'Villaggio di Levi',
      highlight: '2 camere · ski-in · sauna privata · tariffe settimanali',
      description:
        'Appartamenti di due camere ai piedi del fjell di Levi, a pochi passi dagli impianti e dal villaggio. Ogni unità ha una sauna privata a legna, una vera cucina e un minimo di quattro notti da dicembre a marzo. La scelta per le famiglie che passano una settimana sugli sci senza rinunciare ai comfort urbani.',
    },
    {
      name: 'Lapland Hotels Ounasvaara Chalets',
      location: 'Rovaniemi · fjell di Ounasvaara',
      highlight: 'Ski-in/out · a piedi dal centro di Rovaniemi',
      description:
        'Chalet completamente attrezzati sul fjell di Ounasvaara. Ski-in/ski-out in inverno, dieci minuti a piedi dal centro di Rovaniemi. L’opzione di soggiorno lungo più flessibile se vuole unire comodità urbana e mattine artiche.',
    },
    {
      name: "Lapland Hotels Bear's Lodge",
      location: 'Parco nazionale di Pyhä-Luosto',
      highlight: 'Parco nazionale sull’uscio · sauna privata · famiglie',
      description:
        'Baite tradizionali in tronchi accanto al parco nazionale di Pyhä-Luosto. Cucine complete, saune private a legna, accesso al lago. La risposta giusta per un soggiorno di famiglia di più settimane in cui le giornate ruotano attorno alle ciaspole e alle piste di fondo, non alle visite turistiche.',
    },
    {
      name: 'Wilderness Hotel Nangu, ville sul lago',
      location: 'Sponda sud del Lago Inari',
      highlight: 'Attività guidate dai sami · vista lago · tariffe soggiorno lungo',
      description:
        'Ville sul Lago Inari con camere rivolte all’acqua. Pesca sul ghiaccio guidata dai sami, sci nella natura con guardaparco, il Museo Sami di Inari a venti minuti. Tariffe per soggiorni lunghi da quattro notti, il più culturale dei soggiorni lunghi sul lago.',
    },
  ],
  glassIgloosData: [
    {
      name: 'Kakslauttanen Arctic Resort',
      location: 'Saariselkä',
      highlight: 'L’igloo di vetro originale · Kelo-Glass disponibile',
      description:
        'Il resort che ha inventato l’igloo di vetro moderno. Scelga i Kelo-Glass invece dei classici Glass Igloos, i Kelo abbinano il tetto panoramico di vetro a una struttura in tronchi riscaldata, un angolo cottura e un caminetto. Un minimo di due notti per sfruttarli al meglio.',
    },
    {
      name: 'Levin Iglut',
      location: 'Fjell di Levi',
      highlight: 'Letti aurora motorizzati · posizione sulla sommità del fjell',
      description:
        'Igloo di vetro premium sul fjell di Levi, ben sopra la cupola di luce del villaggio. I letti motorizzati si orientano verso l’arco aurorale, ogni unità ha un angolo cottura privato, l’ingegneria meglio riuscita dei cinque resort finlandesi.',
    },
    {
      name: 'Aurora Village',
      location: 'Ivalo',
      highlight: 'Ambiente selvaggio vicino a Ivalo · baite ben distanziate',
      description:
        'Baite con tetto di vetro in foresta intatta vicino a Ivalo. Le baite sono ben distanziate per la privacy e l’ambiente è abbastanza buio da far leggere l’aurora attraverso una nuvola sottile. La struttura di igloo di vetro dall’atmosfera più remota del sito.',
    },
    {
      name: 'Aurora Pyramids',
      location: 'Lago Inari',
      highlight: 'Baite a piramide · riflessi sul lago',
      description:
        'Baite a forma di piramide con fronte di vetro sulla riva del Lago Inari. Il lago ghiacciato riflette l’arco aurorale appena il vento scende sotto i 3 m/s, una geometria di osservazione che nessun’altra struttura finlandese offre.',
    },
  ],
  wildernessData: [
    {
      name: 'Iso-Syöte Eagle View Suites',
      location: 'Iso-Syöte (Pudasjärvi, appena a sud della Lapponia)',
      highlight: 'Sopra la linea degli alberi · raggiungibile da Oulu',
      description:
        'Suite in pino a 432 m sul monte Iso-Syöte, il vero fjell più meridionale della Finlandia. Osservazione dell’aurora sopra la linea degli alberi senza il lungo volo per Saariselkä, e a 90 minuti dall’aeroporto di Oulu.',
    },
    {
      name: 'Wilderness Hotel Muotka',
      location: 'Zona di Saariselkä',
      highlight: 'Servizio sveglia aurora · comfort da hotel',
      description:
        'Baite aurora con vetrata a tutta parete rivolta ai fjell circostanti. I cacciatori di aurora della struttura svegliano gli ospiti quando l’attività cresce, utile, dato che la maggior parte delle finestre di aurora arriva ben dopo la mezzanotte. Comfort da hotel in una location nella natura.',
    },
  ],
  destinationsData: [
    {
      slug: 'rovaniemi',
      pitch:
        'La capitale della Lapponia finlandese, l’unica città della Lapponia con una vera scena gastronomica invernale, un hub aeroportuale funzionante e una cultura del design tutto l’anno.',
      longStayAngle:
        'La base giusta se il Suo soggiorno lungo prevede giornate lavorative da remoto in Lapponia e weekend a nord, wifi veloce, voli diretti per Stoccolma, ristoranti aperti in bassa stagione.',
    },
    {
      slug: 'levi',
      pitch:
        'La più grande stazione sciistica della Finlandia per vendita di skipass, con 25 000 posti letto, appartamenti ski-in/out e una vera via principale di villaggio.',
      longStayAngle:
        'Logica del soggiorno lungo: gli appartamenti ski-in/out si affittano a settimana da dicembre ad aprile. Gli impianti vanno ogni giorno, i ristoranti del villaggio aprono ogni sera, qui si può fare una vera stagione.',
    },
    {
      slug: 'saariselka',
      pitch:
        'Latitudine più alta di Rovaniemi, neve più dura, cielo più scuro. Il villaggio della Lapponia che prende l’inverno più sul serio.',
      longStayAngle:
        'Logica del soggiorno lungo: affitti una baita su una collina e scriva un libro. Poche distrazioni. Eccellente rete di sci di fondo, canili di husky vicini, nessuna distrazione urbana.',
    },
    {
      slug: 'inari',
      pitch: 'Capitale culturale sami, Lago Inari (terzo lago della Finlandia per grandezza), la nostra base per soggiorni lunghi più a nord.',
      longStayAngle:
        'Logica del soggiorno lungo: il lago stesso è l’attività. Pesca sul ghiaccio ogni mattina, sci di fondo attraverso il lago ghiacciato, il Museo Sami di Inari e il centro culturale SIIDA sull’uscio.',
    },
    {
      slug: 'yllas',
      pitch:
        'Più tranquillo di Levi, stagione sciistica più lunga, circa 300 km di piste da fondo battute attraverso un parco nazionale.',
      longStayAngle:
        'Logica del soggiorno lungo: la rete di sci di fondo è l’attrattiva. Gli affitti di baite qui vanno a settimana da fine novembre a inizio maggio. La migliore scelta per sciatori che non hanno bisogno di discesa con impianti tutti i giorni.',
    },
  ],
  allCategoriesSummary: [
    { slug: 'long-stays', description: 'Affitti settimanali + mensili, ville, baite design, appartamenti sci.' },
    { slug: 'hotels', description: 'Hotel boutique, design e classici della Lapponia per soggiorni brevi.' },
    { slug: 'glass-igloos', description: 'Il formato iconico della Lapponia, quattro resort che meritano il nome.' },
    { slug: 'wilderness', description: 'Oltre l’ultima strada, due rifugi per viaggiatori seri.' },
  ],
};
