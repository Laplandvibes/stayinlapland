// Swedish overlay, du-form. Plain Swedish, no filler. Northern lights =
// "norrsken", fell = "fjäll", cottage = "stuga". Structural inheritance from
// copyEN, mirroring copy.nl.ts. Place/brand names verbatim.
import { copyEN } from './copy.en';
import type { SectionCopy } from './copy';

export const copySV: SectionCopy = {
  ...copyEN,
  nav: {
    ...copyEN.nav,
    longStays: 'Långtidsvistelser',
    hotels: 'Hotell',
    glassIgloos: 'Glasigloor',
    wilderness: 'Vildmark',
    whenToGo: 'När åka',
    bookingGuide: 'Bokningsguide',
    browseStays: 'Se boenden',
    homeAria: 'StayInLapland startsida',
    openMenu: 'Öppna menyn',
    closeMenu: 'Stäng menyn',
  },
  hero: {
    ...copyEN.hero,
    eyebrow: 'Finska Lappland · Redaktionell guide',
    h1Line1: 'Lappland är mer än',
    h1Line2: 'en veckas semester.',
    lead:
      'Stugor per vecka, designhotell i Rovaniemi, glasigloor för bucketlist-nätterna och vildmarkslodgerna bortom sista vägen. Verifierade priser från',
    leadPriceRange: '140 € till 1 500 €',
    liveLabel: 'Live tillgänglighet · Trip.com-sökning',
    browseLongStays: 'Se långtidsvistelser',
    seeHotels: 'Se hotell',
  },
  newsletter: {
    ...copyEN.newsletter,
    eyebrow: 'Långtidsplatser · lågsäsongspriser',
    h2: 'Boendena du inte kan boka än.',
    lead:
      'De flesta långtidsboenden på den här sajten släpper sitt vinterutbud i slutet av augusti, och det går åt snabbt. Vi berättar när bokningsfönstren öppnar, samt lågsäsongsveckorna (november, slutet av april) då priserna sjunker medan norrskenet fortfarande syns.',
    placeholder: 'Din e-postadress',
    subscribe: 'Prenumerera',
    subscribing: 'Prenumererar…',
    success:
      'Nästan klart: bekräfta din prenumeration i mejlet vi just skickade.',
    errorPrefix: 'Prenumerationen misslyckades, ',
    pleaseTryAgain: 'försök igen',
    footnotePart1: 'Vi skickar aldrig skräppost. Avsluta med ett klick. Se vår ',
      footnotePart2: '.',
    footnoteLink: 'integritetspolicy',
  },
  authorByline: {
    reviewed: 'Granskad av LaplandVibes redaktionsnätverk',
    defaultNote:
      'Skriven och verifierad med lokala partner i hela finska Lappland. Vi tjänar affiliateprovision på bokningar, men det avgör aldrig vilka boenden vi rekommenderar.',
  },
  workInLaplandPromo: {
    ...copyEN.workInLaplandPromo,
    inlineEyebrow: 'Intresserad av att jobba i finska Lappland?',
    inlineBodyPrefix:
      'Säsongsarbete, platser för distansarbete och lediga tjänster på skidorterna hittar du på vår systersajt ',
    inlineBodyBrand: 'laplandwork.com',
    inlineBodySuffix: '.',
    inlineCta: 'Se lediga jobb',
    fullEyebrow: 'Systersajt · laplandwork.com',
    fullH2A: 'Intresserad av att jobba',
    fullH2B: 'i finska Lappland?',
    fullP1:
      'Många längre vistelser på den här sidan bokas av människor som ursprungligen kom för en skidsäsong, ett arktiskt ingenjörskontrakt eller en månads distansarbete, och till slut blev kära i platsen. Är det därför du är här har jobbsidan en egen sajt.',
    fullP2A: 'LaplandWork.com',
    fullP2B:
      ' är den centrala jobbhubben för finska Lappland: säsongsbetonad restaurangbransch, jobb på skidorter, lediga tjänster på huskygårdar, sjukhus- och ingenjörsjobb i Rovaniemi, Levi, Saariselkä och Inari. Gratis för jobbsökande, tre prisnivåer för arbetsgivare.',
    fullCta: 'Se lediga jobb',
    blocks: [
      { label: 'Säsongsarbete restaurang', tag: 'Levi · Ylläs · Saariselkä' },
      { label: 'Huskygårdar', tag: 'Säsong nov–apr' },
      { label: 'Platser för distansarbete', tag: 'Året runt, fiber' },
      { label: 'Vård + teknik', tag: 'Fasta tjänster' },
    ],
  },
  longTermRentals: {
    ...copyEN.longTermRentals,
    eyebrow: 'Flytta till Lappland · 6 månader och längre',
    h2A: 'Söker du ett riktigt hem,',
    h2B: 'inte korttidshyra?',
    lead:
      'Boendena på den här sidan är kort- till medellång hyra, bokade via vår bokningspartner, rätt svar för resor upp till fyra veckor. För 6 månader, ett år eller en permanent flytt behöver du de finska hyresportalerna för landsbygden. Här är de sex mest aktiva för utbudet i Lappland.',
    process: {
      title: 'Vanlig process',
      body:
        'Mejla hyresvärd/mäklare → visning på plats → ansökningsformulär (palkkatodistus + luottotiedot, lönebesked + kreditupplysning) → 1–2 månaders deposition + första månadshyran → nycklar. Räkna realistiskt med 2–6 veckors förberedelsetid.',
    },
    cost: {
      title: 'Vad det kostar',
      body:
        'Rovaniemi etta: 600–900 €/månad. Levi/Saariselkä etta (vintersäsong): 900–1 400 €. Utanför vinterpeaken i skidorterna sjunker priserna 30–40 %. Alla belopp inkluderar vatten; el och värme är oftast separat.',
    },
    abroad: {
      title: 'Kommer du från utlandet?',
      body:
        'EU/EES-medborgare kan hyra fritt. Icke-EU-medborgare behöver uppehållstillstånd (Migri-handläggning 1–4 månader). Jobbhubben på laplandwork.com går igenom Migri, Kela-registrering, att öppna ett finskt bankkonto, skattekortet och hela checklistan för att flytta till Lappland.',
    },
    tags: {
      national: 'RIKSTÄCKANDE',
      rentalOnly: 'ENDAST HYRA',
      corporate: 'FÖRETAG',
      classifieds: 'DIREKT FRÅN HYRESVÄRD',
    },
  },
  tripRecommender: {
    weBook: 'Vi skulle boka',
    items: [
      {
        forWho: 'Första resan · 4–6 nätter · med barn',
        recommendation: 'Boutiquehotell i Rovaniemi',
        rationale:
          'Ett designhotell som Arctic Light eller Arctic TreeHouse ger närhet till flygplatsen, en riktig restaurangscen och logistiken kring Jultomtens by, utan att tvinga in familjen i en avlägsen stuga där uppvärmningen blir ett kvällsprojekt.',
        ctaLabel: 'Se hotell',
      },
      {
        forWho: 'Återkommande gäst · 7–14 nätter · en fast bas',
        recommendation: 'Långtidsstuga i Levi eller Saariselkä',
        rationale:
          'Slå dig ner en vecka. En tvårumslägenhet vid Levi Spirit eller en stuga på en kulle vid Saariselkä ger dig veckopriser, egen bastu och tillräckligt med tid att verkligen landa i Lappland, i stället för att jäkta mellan bucketlist-nätter.',
        ctaLabel: 'Se långtidsvistelser',
      },
      {
        forWho: 'Jubileum · pension · gruppbokning',
        recommendation: 'En vildmarkslodge',
        rationale:
          'En vildmarkslodge är det mest exklusiva sättet att markera tillfället. En Iso-Syöte Eagle View Suite ger avskildhet ovanför trädgränsen, och en villa vid Wilderness Hotel Nangu lägger till samiskt ledda aktiviteter på Inarisjön, båda privata nog att få hela landskapet att kännas som ditt, utan priset för en hel uthyrning.',
        ctaLabel: 'Se vildmarkslodger',
      },
    ],
  },
  home: {
    ...copyEN.home,
    metaTitle: 'Var du bor i Lappland 2026, 16 adresser',
    metaDescription:
      'Planera din vistelse i Lappland 2026, 16 verifierade boenden: stugor från 140 €/natt, designhotell i Rovaniemi, glasigloor 280 €+ och vildmarkslodger.',
    schemaName: 'StayInLapland, långtidsvistelser och boutiquehotell i finska Lappland',
    breadcrumbHome: 'Hem',
    stats: { stays: 'Utvalda boenden', bases: 'Baser i Lappland', categories: 'Sätt att bo', months: 'Betygsatta månader' },
    intro: {
      p1: 'De flesta listor med ”bästa boende i Lappland” börjar med en glasigloo överst, radar upp tjugo andra glasigloor i ungefär samma ordning under den, och innehåller inte en enda mening om huruvida skribenten någonsin tillbringat mer än två nätter där. Den här guiden är motsatsen.',
      p2: 'Boende i Lappland delas in i fyra kategorier, långtidshyra, hotell, glasigloor och vildmarkslodger, och de sexton boenden som förtjänar sin plats står nedan. Med det kan du bygga en resa som börjar med en vecka i en stuga vid Levi, fortsätter till ett designhotell i Rovaniemi för två stadsnätter och avslutas med en glasigloonatt före hemresan. Så belönar Lappland en längre vistelse.',
      p3: 'Tre saker den här guiden inte gör: aggregerar priser, återvinner recensioner eller låtsas täcka platser där ingen partner i nätverket någonsin tillbringat en riktig natt.',
    },
    authorNote:
      'En handplockad slutlista, skriven och kontrollerad med lokala partner i hela finska Lappland.',
    fourWays: {
      kicker: 'Fyra sätt att bo',
      h2A: 'Välj ett.',
      h2B: 'Eller kombinera två.',
      lead:
        'Välj den kategori som passar resan du verkligen vill göra. Välj sedan en destination. Långtidsläsare kombinerar ofta två, en vecka som bas i en stuga, två nätter kontrast.',
    },
    propertyWord: 'boende',
    propertiesWord: 'boenden',
    explore: 'Utforska',
    pullQuote: {
      ...copyEN.home.pullQuote,
      text:
        'Lappland är större än folk tror, och vägen mellan Rovaniemi och Saariselkä tar en halv dag åt vardera hållet. Det största misstaget på en första resa är att boka tre olika baser på fem nätter.',
      attr: 'Boenderapport Lappland · Lapin Liitto, 2024',
    },
    tripKicker: 'Vet du ungefär vad du vill ha?',
    tripH2: 'Lokalbornas genvägar.',
    destKicker: 'Fem baser i Lappland',
    destH2: 'Var i Lappland?',
    destLead:
      'Varje destination har sin egen logik för en lång vistelse. Klicka dig vidare för rekommendationer och argumentet för att välja just den basen.',
    readGuide: 'Läs',
    faqKicker: 'Riktiga frågor, riktiga svar',
    faqH2: 'Innan du klickar på något.',
    faqs: [
      {
        q: 'Vad räknas som en ”lång vistelse” på den här sidan?',
        a: 'Allt från fyra nätter räknas som en lång vistelse, det är tröskeln där de flesta boenden i Lappland erbjuder veckopriser och ett riktigt kök blir viktigt. De utvalda långtidsboendena har ett minimum på 3 upp till 7 nätter, beroende på enhet; varje kort anger sitt minimum.',
      },
      {
        q: 'Varför fokuserar startsidan på långtidsvistelser i stället för glasigloor?',
        a: 'Glasigloor är det ikoniska Lapplandsformatet och har en egen sida. Men de mest omtyckta Lapplandsresorna är inte tre dygns bucketlist-nätter i en glaskupol, det är veckolånga basvistelser i en stuga eller ett designhotell, med en eller två nätter någon annanstans inbyggda. Sidan speglar hur Lappland verkligen belönar återkommande gäster.',
      },
      {
        q: 'Är Kakslauttanen verkligen värt toppriset?',
        a: 'Ja, men bara Kelo-Glass-igloorna, inte de klassiska Glass Igloos. Kelo-Glass kombinerar det panoramiska glastaket med en uppvärmd trästomme, ett pentry och en egen eldstad. Ett minimum på två nätter får ut mest av det. Bästa norrskensfönstren: början av februari och slutet av mars.',
      },
      {
        q: 'Var bör jag helst basera mig om min långa vistelse omfattar distansarbete?',
        a: 'Rovaniemi. Det är den enda staden i Lappland med pålitlig fiber, dagliga flyg till Helsingfors och Stockholm och en riktig restaurangscen på vintern som håller öppet även under mellansäsongerna. Arctic TreeHouse Resort och Ounasvaara-stugorna erbjuder båda veckopriser och bra arbetsplatser.',
      },
    ],
    fullGuideCta: 'Läs hela bokningsguiden',
    categoryDescriptions: {
      longStays: 'Vecko- och månadshyra, villor, designstugor, skidlägenheter.',
      hotels: 'Boutique-, design- och klassiska Lapplandshotell för korta vistelser.',
      glassIgloos: 'Det ikoniska Lapplandsformatet, fyra resorter som förtjänar namnet.',
      wilderness: 'Bortom sista vägen, två retreater för seriösa resenärer.',
    },
    categoryNames: {
      longStays: 'Långtidsvistelser',
      hotels: 'Hotell',
      glassIgloos: 'Glasigloor',
      wilderness: 'Vildmarkslodger',
    },
  },
  hotels: {
    metaTitle: 'Boutique- och designhotell i finska Lappland | StayInLapland',
    metaDescription:
      'Fem Lapplandshotell värda att boka, Arctic TreeHouse, Arctic Light, Levi Spirit, Lapland Hotels Saaga och Star Arctic. För korta vistelser.',
    breadcrumb: 'Hotell',
    pageHero: {
      eyebrow: 'Fem noga utvalda hotell',
      title: 'Hotell i Lappland.',
      subtitle:
        'Boutique, design och pålitligt klassiska Lapplandshotell, för de korta vistelserna, arbetsresorna och tvådagars stadsbesöken som du bygger runt en längre bas i en stuga.',
    },
    authorNote:
      'Fem boenden dubbelkollade mot publicerad information från operatörerna och färska gästrecensioner under säsongen 2025/26.',
    introP1:
      'Lappland har gott om kedjehotell i mellanklass, Scandic, Sokos, som gör grunden bra för 90–140 €/natt. De står inte med här; bokningsbeslutet där handlar mest om ”närmast flygplatsen, billigaste veckan”.',
    introP2:
      'De fem hotellen nedan förtjänar sin plats av ett annat skäl, design, arkitektur, utsikt eller tjänstemix. De är rätt svar när du vill ha ett hotell som är en del av resans syfte, inte bara en bas.',
    picksKicker: 'Fem val',
    picksH2: 'Utvalda, inte aggregerade.',
    pullQuote: {
      text:
        'Rovaniemi byggdes upp tre gånger efter 1944, den tredje gången av Alvar Aalto, som ritade stadsplanen i form av ett renhorn. Arctic Light Hotel ligger inuti det hornet, i en byggnad från 1939 som överlevde alla tre återuppbyggnaderna.',
      attr: 'Architectural Record · reportage Arctic Light Hotel',
    },
    glanceKicker: 'Alla fem i en överblick',
    glanceH2: 'Jämförelse med en åsikt.',
    rubric:
      'Fem prickar är högsta betyg. Design = inredningsstil och materialkvalitet. Arkitektur = själva byggnaden. Aktiviteter = ski-in/out, huskygårdar och lokal kultur inom 15 minuter.',
    axes: ['Design', 'Arkitektur', 'Spa / bastu', 'Aktiviteter', 'Restaurang'],
    rows: [
      { name: 'Arctic TreeHouse', verdict: 'Bästa designhotellet i Rovaniemi.' },
      { name: 'Arctic Light', verdict: 'Arkitektoniskt mest intressanta byggnaden.' },
      { name: 'Levi Spirit', verdict: 'Vuxenstämning. Spa + ski-in.' },
      { name: 'Lapland Hotels Saaga', verdict: 'Ski-in/out-klassiker vid Ylläs. Spa ingår.' },
      { name: 'Star Arctic', verdict: 'Kulle · mörkast himmel · mix stuga/hotell.' },
    ],
    marginLabel: 'Insider',
    marginBody:
      'Arctic TreeHouse och Levi Spirit har båda egen restaurang, Rakas (TreeHouse) och Spirit Kitchen (Levi). Båda jobbar med lokala råvaror. Bokar du något av dem, boka bord samma dag, de blir fullbokade snabbare än hotellet självt på helgerna.',
    counterKicker: 'Ärlig motrekommendation',
    counterH2: 'När ett hotell inte är svaret.',
    counterP1:
      'För 5+ nätter med samma rytm, åka skidor, laga mat, basta, upprepa, slår en långtidsstuga eller -lägenhet vart och ett av dessa hotell på pris per natt och livskvalitet. Hotell passar just när dagarna skiljer sig åt.',
    counterP2: 'För en enda bucketlist-natt med norrsken vinner glasigloor. Inget av hotellen ovan har glastak.',
    seeLong: 'Se långtidsvistelser',
    seeIgloos: 'Se glasigloor',
    browseAll: 'Se utbudet på Trip.com',
  },
  glassIgloos: {
    metaTitle: 'Glasigloor i finska Lappland | StayInLapland',
    metaDescription:
      'Glasiglooresorter i finska Lappland som lever upp till namnet, Kakslauttanen, Levin Iglut, Aurora Village och Aurora Pyramids. Rangordnade efter himmel.',
    breadcrumb: 'Glasigloor',
    pageHero: {
      eyebrow: 'Det ikoniska Lapplandsformatet',
      title: 'Glasigloor i finska Lappland.',
      subtitle:
        'Den finska kupolen med glastak uppfanns i Saariselkä. Fyra boenden lever upp till namnet i dag, och skillnaden mellan dem är verklig.',
    },
    authorNote:
      'Fyra resorter dubbelkollade mot publicerad information från operatörerna och färska gästrecensioner. Priser senast kontrollerade: februari 2026.',
    pickWhy: [
      'Kakslauttanen står på varje lista för att det förtjänar den platsen. Resorten startade i Saariselkä 1973, när ”turistboende i Saariselkä” fortfarande betydde ett vandrarhem i trä och norrskenet var något du tittade på från parkeringen, och uppfann senare den moderna glasigloon.',
      'Här finns ett vägskäl: boka Kelo-Glass-igloorna, inte de klassiska Glass Igloos. Kelo-Glass kombinerar det panoramiska glastaket med en uppvärmd trästomme, ett eget pentry och en öppen spis. De klassiska är mindre, trängre, och badrummet ligger 50 meter bort, i −25 °C.',
      'Prisskillnaden ligger på runt 200 €/natt. Över tre nätter tjänar Kelo-Glass in den merkostnaden, bara genom att du slipper dra på dig snöskorna klockan fyra på natten.',
    ],
    pickCaveat:
      'De klassiska Glass Igloos är ungefär 30 % billigare, men upplevelsen är tydligt sämre. Ligger din budget på 400 €/natt, titta i stället på Aurora Village eller Aurora Pyramids, samma himmel, ofta med ett vackrare läge vid sjö eller vildmark.',
    pullQuote: {
      text:
        'Den första glasigloon byggdes för att gästerna skulle kunna se norrskenet utan att stå ute i −30 °C. Decennier senare är det fortfarande hela poängen, och det varje efterapare gör fel är vad som händer efter att norrskenet försvinner.',
      attr: 'Ursprungsberättelse Kakslauttanen · resortet grundat 1973',
    },
    runnersKicker: 'De andra tre',
    runnersH2: 'När Kakslauttanen inte är rätt svar.',
    glanceKicker: 'Alla fyra i en överblick',
    glanceH2: 'Jämförelsen med en åsikt.',
    rubric:
      'Fem prickar är högsta betyg. Tillgänglighet = hur enkelt det är från närmaste flygplats. Himmel = mörker + siktgeometri. Avskildhet = avstånd till grannenheter. Komfort = badrum, kök, ljudisolering. Rykte = hur väl resorten lever upp till broschyren.',
    axes: ['Tillgänglighet', 'Himmel', 'Avskildhet', 'Komfort', 'Rykte'],
    rows: [
      { name: 'Kakslauttanen', verdict: 'Originalet. Dyrt. Bara Kelo-Glass värt det.' },
      { name: 'Levin Iglut', verdict: 'Bäst konstruktion. Motoriserade norrskensbäddar.' },
      { name: 'Aurora Village', verdict: 'Mest avlägsen känsla. 30 min från Ivalo.' },
      { name: 'Aurora Pyramids', verdict: 'Sjöreflektioner fördubblar norrskenet.' },
    ],
    marginLabel: 'Avvägning',
    marginBody:
      'Ingen resort vinner på alla fem axlar. Aurora Pyramids slår alla på himmelsreflektion men förlorar på tillgänglighet (40 min från Ivalo). Levin Iglut vinner på konstruktion men ligger i en livlig skidort. Välj den prioritet som betyder mest för dig.',
    counterKicker: 'Ärlig motrekommendation',
    counterH2: 'När du hoppar över glasigloor helt.',
    counterP1:
      'Vid vistelser på fyra nätter eller mer är två glasigloonätter plus ett block i en långtidsstuga en bättre resa än fyra glasigloonätter. Nyhetens behag avtar efter andra natten; en timmerstuga med egen bastu ger den del av Lappland som en glaskupol inte kan.',
    counterP2:
      'Kring jul (22 dec → 2 jan) tredubblas priserna och 90 % av utbudet går till brittiska paketresor till våren. Flytta dina datum om möjligt till andra halvan av januari, kallare, mörkare, hälften så dyrt, bättre norrsken.',
    seeLong: 'Se långtidsvistelser',
    bookingGuideBtn: 'Bokningsguide',
    browseAll: 'Se utbudet på Trip.com',
  },
  wilderness: {
    metaTitle: 'Vildmarkslodger i finska Lappland | StayInLapland',
    metaDescription:
      'Vildmarkslodger bortom sista vägen, Iso-Syöte Eagle View Suites och Wilderness Hotel Muotka. Norrsken ovanför trädgränsen och norrskensväckning.',
    breadcrumb: 'Vildmark',
    pageHero: {
      eyebrow: 'Bortom sista vägen',
      title: 'Vildmarkslodger.',
      subtitle:
        'Den nya Lapplandstraditionen, arkitektritade retreater, byggda sedan 2010-talet på platser där turistvägen tar slut. Två lodger, två olika definitioner av vildmark.',
    },
    authorNote:
      'Uppgifterna för båda boendena är verifierade mot publicerad information från operatörerna och färska gästrecensioner.',
    pickWhy: [
      'Iso-Syöte Eagle View Suites ligger på 432 m på Finlands sydligaste riktiga fjäll, sviter byggda i furu med norrskensskådning ovanför trädgränsen och utan den långa flygturen norrut.',
      'Glasfasaderna vetter mot öppen himmel, så att norrskensbågen syns från sängen en klar natt. Du ser norrskenet från din egen svit på fjällryggen i stället för ett gemensamt skydd, avskildhet utan att behöva boka hela stället.',
      'Och det är den lättast nåbara seriösa vildmarkslodgen: 90 minuter från flygplatsen i Uleåborg, vilket gör den till den ovanliga retreat som fungerar även för en kort resa.',
    ],
    pickCaveat:
      'Knappen ”se priser” på den här sidan leder till en Trip.com-sökning för närmaste bokningsbara utbud. Eagle View Suites blir snabbast slutsålda på helger med klar himmel, boka datumen, inte väderprognosen.',
    pullQuote: {
      text:
        'Ordet ”avlägset” är oftast marknadsföring. Häruppe är det sant. Vägen tar slut, trädgränsen sjunker under dig, och det enda ljus som återstår är det himlen väljer att skapa. På en sådan plats tittar man inte bara förbi, man förbinder sig.',
      attr: 'På fjällvägen till Iso-Syöte, med blicken uppåt',
    },
    runnersKicker: 'Den andra',
    runnersH2: 'När en hel svit på fjällryggen är för mycket.',
    glanceKicker: 'Två definitioner av vildmark',
    glanceH2: 'I en överblick.',
    rubric:
      'Avskildhet = hur ensam du verkligen känner dig. Service = personal per gäst. Aktiviteter = guidade upplevelser som ingår eller går att boka.',
    axes: ['Tillgänglighet', 'Avskildhet', 'Service', 'Aktiviteter', 'Once-in-a-lifetime-faktor'],
    rows: [
      { name: 'Iso-Syöte Eagle View', verdict: 'Ovanför trädgränsen. Enklast från södra Finland.' },
      { name: 'Hotel Muotka', verdict: 'Norrskensväckning på plats. Hotellkomfort.' },
    ],
    marginLabel: 'Norrskensväckning vid Muotka',
    marginBody:
      'Wilderness Hotel Muotka har en norrskensjägare i tjänst som följer Kp-index och fysiskt knackar på dörrar så snart norrskenet dyker upp. Det är den bästa funktionen hos något boende i den här guiden och värd prisskillnaden även för resor på bara en natt.',
    counterKicker: 'Ärlig motrekommendation',
    counterH2: 'Vildmarkslodger är inte för alla.',
    counterP1:
      'Båda lodgerna ligger 1–3 timmars transfer från närmaste flygplats. För resor under tre nätter blir restiden oproportionerlig.',
    counterP2:
      'För den som reser till Arktis för första gången: gör en resa till Rovaniemi eller Saariselkä först. En vildmarkslodge bokad i sin helhet är bortkastad på någon som fortfarande försöker förstå vad −25 °C innebär.',
    seeLong: 'Se långtidsvistelser',
    browseAll: 'Se utbudet på Trip.com',
  },
  longStays: {
    metaTitle: 'Långtidsvistelser i finska Lappland | StayInLapland',
    metaDescription:
      'Fem långtidsboenden i Lappland för en vecka eller längre, Arctic TreeHouse, Levi-penthouse, Ounasvaara-stugor, Pyhä-stugor och Inari-villor.',
    breadcrumb: 'Långtidsvistelser',
    pageHero: {
      eyebrow: 'Fem långtidsboenden',
      title: 'Stanna en vecka. Eller en månad.',
      subtitle:
        'Rätt svar för återkommande gäster, distansarbetare, familjer och alla vars Lapplandsresa är längre än tre nätter. Veckopriser, egna bastur, riktiga kök, från designsviter till ski-in-lägenheter.',
    },
    authorNote:
      'Fem boenden dubbelkollade med lokala partner och veckopriskalendrar under säsongen 2025/26.',
    pickWhy: [
      'Arctic TreeHouse Resort är svaret om frågan är ”hur gör jag en riktigt lång vistelse i Rovaniemi utan att hyra en kal stuga?” Designsviter byggda i tallskogen i utkanten av Santa Park, var och en med pentry och en panoramisk glasfasad mot träden.',
      'Veckopriset sjunker ungefär 25 % mot nattpriset, och varje svit har tillgång till resortens bastuby, en vecka här kostar alltså mindre per natt än en rad enstaka övernattningar, med mycket mer utrymme att verkligen landa.',
      'Det är också den mest flexibla basen i den här listan: Rovaniemis flygplats, restauranger och designkultur ligger tio minuter bort, medan själva sviten bara vetter mot skog. Knappen ”se priser” nedan tar dig direkt till veckoutbudet.',
    ],
    pickCaveat:
      'Veckorabatten dyker upp i bokningssystemet så snart du väljer 7+ nätter, den syns inte alltid vid det visade nattpriset. Toppveckorna kring jul är fullbokade månader i förväg; mitten av november och slutet av april är mycket billigare.',
    pullQuote: {
      text:
        'Uppdraget var att försvinna in i fjällryggen. Använd virke som kom från själva tomten, glas bara mot norr, och lyft aldrig taklinjen över trädtopparna. Det du ser fanns redan där, vi gjorde det bara möjligt att bo i det.',
      attr: 'Studio Puisto · arkitektens uttalande',
    },
    runnersKicker: 'De andra fyra',
    runnersH2: 'Från ski-in-lägenheter till villor vid sjön.',
    runnersLead:
      'Var och en av de fyra nedan har sin egen logik för en lång vistelse, närhet till ett liftsystem, veckoinfrastruktur för att jobba från Lappland, ett familjevänligt kök, eller en kulturellt rik bas vid en sjö.',
    weeklyKicker: 'Hur veckopriser fungerar',
    weeklyH2: 'Priset sjunker snabbare än folk tror.',
    weeklyP1:
      'Över boendena på den här sidan är veckopriset i genomsnitt <strong>23 % billigare per natt</strong> än prislistans nattpris. Levi Residences sjunker 30 %, Pyhä Bear’s Lodge sjunker 18 %, Arctic TreeHouse sjunker 25 %. De flesta annonserar inte detta, rabatten ligger i bokningssystemet så snart du väljer 7+ nätter.',
    weeklyP2:
      'Mellansäsongsveckorna, <strong>mitten av november</strong> (precis innan snön stabiliseras) och <strong>slutet av april</strong> (precis efter att snön smält), sjunker ytterligare 30–50 %. Norrskenet är fortfarande aktivt i båda fönstren. Det här är idealläget för långtidsvistelser med en flexibel arbetskalender.',
    marginLabel: 'Bokningstaktik',
    marginBody:
      'För en vistelse på 4 veckor kan det slå en enda bokning att dela upp den på två boenden, du undviker pristoppen kring jul och sportlov, och du ser två delar av Lappland direkt. Transferdagen kostar en halv dag; besparingen betalar oftast två extra nätter någon annanstans.',
    counterKicker: 'Ärlig motrekommendation',
    counterH2: 'När du INTE bokar en lång vistelse.',
    counterP1:
      'För en första resa på 2–3 nätter hoppar du över långtidshyra. Incheckningen, handlingen och ”lär-dig-spisen”-skatten äter upp besparingen. Boka ett hotell då.',
    counterP2:
      'För en enda bucketlist-natt med norrsken är glasigloor det bättre svaret. Glastaket är upplevelsen du kom för; en långtidsstuga ger dig ett fönster.',
    counterP3:
      'För grupper med blandad rörlighet ringer du boendet direkt i förväg, de flesta långtidsstugor är inte tröskelfria, och just bastun ligger ofta i källaren på ett trägolv.',
    seeHotels: 'Se hotell',
    seeIgloos: 'Se glasigloor',
    browseAll: 'Se utbudet på Trip.com',
  },
  bookingGuide: {
    metaTitle: 'Lapplands bokningsguide, när, hur, vad du packar',
    metaDescription:
      'Praktisk bokningsguide för Lappland, när du åker för bäst norrsken, hur du tar dig dit, vad du packar, vad det verkligen kostar och insidertips.',
    breadcrumb: 'Bokningsguide',
    pageHero: {
      eyebrow: 'Planera en riktig resa',
      title: 'Lapplands bokningsguide.',
      subtitle:
        'Praktiska råd med en åsikt. När du åker, hur du tar dig dit, vad du packar, vad det verkligen kostar.',
    },
    sections: [
      {
        title: 'När du åker',
        body: [
          'Norrskenssäsongen löper från slutet av augusti till början av april. De starkaste fönstren är september–oktober och februari–mars, då långa mörka nätter sammanfaller med aktivt rymdväder.',
          'Undvik slutet av november till mitten av december: mörkt, men snön ligger ofta i fläckar och många aktiviteter har inte startat än.',
          'Jul och nyår är slutsålda 9 månader i förväg och priserna tredubblas. Lokalbornas val är andra halvan av januari, lugnare, kallare, bättre norrsken.',
        ],
      },
      {
        title: 'Hur du tar dig dit',
        body: [
          'Tre flygplatser i Lappland täcker det mesta du skulle boka. Rovaniemi (RVN) för Jultomtens by och söder, Kittilä (KTT) för Levi och Ylläs, Ivalo (IVL) för Saariselkä, Inari och norr.',
          'Helsingfors (HEL) → Lappland är ett inrikesflyg på 90 minuter. Direktflyg från London, Berlin och Paris finns också från december till mars.',
          'Tåg: nattåget Helsingfors–Rovaniemi är långsamt men sträckan längs Bottenvikens kust via Kemi är verkligen vacker och kupén är full av lokalbor som gör samma resa.',
        ],
      },
      {
        title: 'Vad du packar',
        body: [
          'De flesta boenden tillhandahåller arktiska ytterkläder (−30 °C-overaller, stövlar, handskar, mössor) inkluderat eller mot en liten dagsavgift. Bekräfta detta innan du flyger med en incheckad väska full av skidkläder.',
          'Lager räknas mer än tjocklek, merinounderställ + fleecemellanlager + vindtätt ytterskal. Bomull är livsfarligt.',
          'Kameror: ta med reservbatterier nära kroppen, innanför jackan. Kylan tömmer dem snabbt.',
        ],
      },
      {
        title: 'Verklighetskoll för budgeten',
        body: [
          'Långtidsstuga (veckopris): 140–280 €/natt, plats för 4–6.',
          'Boutiquehotell: 140–420 €/natt, frukost oftast inkluderad.',
          'Glasigloo, högsäsong: 400–1 500 €/natt för två.',
          'Vildmarkslodge-svit: 220–950 €/natt beroende på boendet.',
          'Aktiviteter (huskysafari, snöskoter, norrskensjakt) oftast 120–200 € per person och tur utöver detta.',
        ],
      },
      {
        title: 'Avbokningsvillkor',
        body: [
          'De flesta boenden i Lappland har för toppveckorna gått över till återbetalningsfria priser. Läs det finstilta innan du klickar på ”boka”.',
          'En reseförsäkring med ”avboka av vilken anledning som helst”-skydd är verkligen värd det för resor över 2 000 €. Norrskensjägare avbokar hela tiden på grund av vädret.',
          'Våra bokningspartner respekterar de avbokningsvillkor som visas vid bokningen, boka via omdirigeringen på den här sidan för att hålla priset synligt och konsekvent.',
        ],
      },
      {
        title: 'Insidertips',
        body: [
          'Saariselkä och Inari är kallare, mörkare och har starkare norrsken än Rovaniemi, men Rovaniemi har flygplatsen, aktiviteterna, Jultomtens by. Kombinera baser.',
          'Har du bara 3 nätter, gör dem på en och samma plats. Lappland är större än folk tror och transfererna slukar dagar.',
          'Norrskensprognoser (NOAA, Aurora Service Europe) är exakta 30–90 minuter i förväg, inte dagar. Var flexibel.',
        ],
      },
    ],
    readyTitle: 'Redo att boka?',
    readyLead:
      'Se noga utvalda boenden per kategori, eller hoppa direkt till live tillgänglighet på Trip.com.',
    browseAll: 'Se alla boenden i Lappland',
  },
  whenToGo: {
    metaTitle: 'När du ska besöka Lappland, guide månad för månad',
    metaDescription:
      'Guide månad för månad för finska Lappland, när norrskenet är som starkast, när snön stabiliseras och vilka veckor lokalborna bokar åt sig själva.',
    breadcrumb: 'När åka',
    pageHero: {
      eyebrow: 'Månad för månad',
      title: 'När du ska besöka Lappland.',
      subtitle:
        'Rätt månad beror på resan. Norrsken först, skidor först, långtidsvärde, julpeak, var och en har sin bästa tidpunkt. Här är den redaktionella översikten månad för månad.',
    },
    authorNote:
      'Sammanställd utifrån rapporter från lokala partner i hela finska Lappland.',
    pullQuote: {
      text:
        'De flesta norrsken över finska Lappland dyker upp mellan kvällen och de tidiga morgontimmarna, och de långa, mörka månaderna från hösten till tidig vår ger de bästa chanserna. En klar himmel och lite tålamod väger tyngre än det exakta datumet.',
      attr: 'LaplandVibes, ur norrskensloggarna från våra partner i hela finska Lappland',
    },
    months: [
      {
        name: 'september',
        pitch: 'Norrskenssäsongen öppnar',
        body:
          'Långa mörka nätter börjar. Det ligger ännu ingen snö, det här är ”ruska”-perioden när björkarna färgas röda och guld. Norrskenet avtecknar sig mot bar mark, färgerna är de mest fotograferade av alla månader.',
        bestFor: ['Fotografer', 'Korta vistelser inriktade på norrsken', 'Vandring + norrsken-kombo'],
        avoidIf: ['Du kom specifikt för snö'],
      },
      {
        name: 'oktober',
        pitch: 'Stilla mellansäsong',
        body:
          'Första snöbyarna, men marken förblir sällan vit före månadens slut. Hotellen tar mellansäsongspriser (−30 % mot peak), norrskenet är aktivt, mycket få turister. Det billigaste norrskensfönstret med full aktivitetsinfrastruktur.',
        bestFor: ['Norrskensjägare med budget', 'Ankomst för långtidsvistelser före peak'],
        avoidIf: ['Du vill ha garantier på skidåkning eller snöskoter'],
      },
      {
        name: 'november',
        pitch: 'Polarnatten börjar, snön stabiliseras',
        body:
          'Den kallaste starten på en Lapplandsvinter. I nordligaste Lappland (Utsjoki) inleds polarnatten under månadens sista dagar. Snön börjar ligga kvar i slutet av november, mot månadens slut öppnar de flesta resorter och snöhotell. Slutet av november är det klart bästa priset för pengarna för långtidsvistelser.',
        bestFor: ['Långtidsvistelser till −50 % pris', 'Återkommande gäster som känner kylan'],
        avoidIf: ['Förstagångsresenärer (snön är ombytlig)'],
      },
      {
        name: 'december',
        pitch: 'Julpeak',
        body:
          'Jul till nyår är peak-allt, toppriser, toppefterfrågan, topp-tomteturism i Rovaniemi. Glasigloor tredubblas i pris, snöhotellen helt öppna. Norrskenet är fortfarande aktivt men vädret är ofta molnigare.',
        bestFor: ['Familjeresor med jultema', 'Förstagångsgäster som vill ha garanterad snö'],
        avoidIf: ['Budgetkänsligt resande', 'Vistelser inriktade på norrsken'],
      },
      {
        name: 'januari',
        pitch: 'Lokalbornas val',
        body:
          'Andra halvan av januari är det lugna idealfönstret, toppriserna har lagt sig, dagarna blir märkbart längre, snön är stabil, norrskenet mest aktivt. Julträngseln är borta och februaris sportlovsträngsel har inte börjat än.',
        bestFor: ['Långtidsvistelser', 'Smekmånader', 'Norrskensfotografi'],
        avoidIf: ['Du behöver varmt väder i någon form'],
      },
      {
        name: 'februari',
        pitch: 'Starkaste norrskensmånaden',
        body:
          'Mitten av februari till mitten av mars är statistiskt det starkaste norrskensfönstret på året, mörk himmel sammanfaller med aktivt rymdväder. Långtidsvistelser åter på toppris på grund av europeiska sportlov; boka 6 månader i förväg.',
        bestFor: ['Glasigloor', 'Bucketlist-resor för norrsken'],
        avoidIf: ['Sistaminutenplanerare'],
      },
      {
        name: 'mars',
        pitch: 'Ljuset återvänder',
        body:
          'Dagarna blir snabbt längre, i slutet av månaden har du 13 timmar dagsljus. Norrskenet är fortfarande starkt under mörka morgnar och sena kvällar. Vårskidåkning på fjällens sydsluttningar. Den mest fotogeniska skidmånaden.',
        bestFor: ['Ski-in långtidsvistelser', 'Alla som vill ha ljus + norrsken'],
        avoidIf: ['Fotografer som kom för polarnattsstämningen'],
      },
      {
        name: 'april',
        pitch: 'Vårsnö + ljus',
        body:
          'Snön är fortfarande djup och skidåkningen utmärkt på fjällen. Norrskenssäsongen tar slut i början av april när nätterna blir för ljusa. Slutet av april är åter mellansäsong, priserna sjunker 30 %, boendena fortfarande öppna, sol över horisonten i 16+ timmar.',
        bestFor: ['Långa skidvistelser i slutet av säsongen', 'Längdskidåkning'],
        avoidIf: ['Resor inriktade på norrsken'],
      },
    ],
    bestForLabel: 'Bäst för',
    skipIfLabel: 'Hoppa över om',
    cheatKicker: 'Lokalbornas fusklapp',
    cheatH2: 'Tre veckor lokalborna bokar åt sig själva.',
    cheatP1:
      '<strong class="text-charcoal">Slutet av november (vecka 47–48).</strong> Snön är precis stabil, årets mörkaste veckor börjar, norrskenssäsongen på full aktivitet. Långtidspriser 40–50 % under peak. Vissa boenden är inte helt öppna än, kontrollera före bokning.',
    cheatP2:
      '<strong class="text-charcoal">Andra halvan av januari (vecka 3–4).</strong> Säsongens bästa vecka räknat i norrsken per euro. Julträngseln borta, februaris sportlov ännu inte börjat, dagarna blir längre, snön helt fast. Det är då redaktören åker på semester.',
    cheatP3:
      '<strong class="text-charcoal">Slutet av april (vecka 16–17).</strong> Vårskidpeak, sol över horisonten 16 tim/dygn, snön fortfarande djup i nordsluttningarna. Norrskensfönstret är stängt men ljuset ensamt är värt resan. Priserna sjunker 30 % efter påsk.',
    marginLabel: 'Bokningstiming',
    marginBody:
      'För peaken i februari: boka 6 månader i förväg. Slutet av januari: 3 månader. Mellansäsong (november, slutet av april): 6–8 veckor räcker. Jul / nyår: minst 9 månader, med reservdatum, topputbudet försvinner på våren.',
    readGuide: 'Läs bokningsguiden',
    seeLong: 'Se långtidsvistelser',
  },
  destinationPage: {
    metaTitleSuffix: 'Var du bor | StayInLapland',
    pageHeroEyebrow: 'Lapplandsdestination',
    notFoundKicker: 'Sidan hittades inte',
    notFoundTitle: 'Destinationen finns inte med i listan.',
    notFoundBody: 'Vi täcker just nu Rovaniemi, Levi, Saariselkä, Inari och Ylläs.',
    backHome: 'Tillbaka till hem',
    authorNoteFor: (n) => `Långtidsperspektivet för ${n}, skrivet och kontrollerat med lokala partner.`,
    recommendedIn: (n) => `Rekommenderas i ${n}`,
    whereToStay: 'Var du verkligen bor.',
    minStayLabel: 'Min. vistelse:',
    perNight: '/ natt',
    checkRates: 'Se priser',
    seeAll: 'Se alla',
    liveAvailabilityIn: (n) => `Söka live tillgänglighet i ${n}?`,
    networkLeadA: 'Vårt nätverk rangordnar bara 16 boenden. Trip.com visar allt annat som är i drift i vinter i ',
    networkLeadB: ', flexibla datum, filtrera på bekvämlighet, hela utbudet.',
    browseInDest: (n) => `Se Trip.com, ${n}`,
    imageNote:
      'Bilderna är illustrationer: de visar boendetypen och landskapet i området, inte husets egna rum.',
    landscapeAlt: (n) => `Vinterlandskap i ${n}, finska Lappland`,
    bucketLabels: {
      'long-stays': 'långtidsvistelser',
      'hotels': 'hotell',
      'glass-igloos': 'glasigloor',
      'wilderness': 'vildmark',
    },
  },
  affiliateDisclosure:
    'Vissa länkar på den här sidan är affiliatelänkar. Bokar du via dem tjänar vi en provision, utan extra kostnad för dig. Boendena väljs på sina meriter, inte efter provision.',
  langSwitchAria: { en: 'English', fi: 'Suomeksi', de: 'Auf Deutsch', ja: '日本語で', es: 'En español', 'pt-BR': 'Em português', 'zh-CN': '简体中文', ko: '한국어', fr: 'En français', it: 'In italiano', nl: 'In het Nederlands', sv: 'På svenska' },
  marginNoteDefault: 'Randanmärkning',
  comparison: {
    property: 'Boende',
    verdict: 'Omdöme',
    nOutOf5: (n) => `${n} av 5`,
  },
  editorsPick: {
    kicker: 'Redaktionens val',
    perNight: '/ natt',
    note: 'Notering',
    cta: 'Se priser & boka',
  },
  propertyCard: {
    short: '1–3 nätter',
    medium: '3–6 nätter',
    long: '7+ nätter',
    nights: (n) => `${n} ${n === 1 ? 'natt' : 'nätter'}`,
    minPrefix: 'Min.',
    perNight: '/ natt',
    cta: 'Se priser & boka',
  },
  allCategoriesSummary: [
    { slug: 'long-stays', description: 'Vecko- och månadshyra, villor, designstugor, skidlägenheter.' },
    { slug: 'hotels', description: 'Boutique-, design- och klassiska Lapplandshotell för korta vistelser.' },
    { slug: 'glass-igloos', description: 'Det ikoniska Lapplandsformatet, fyra resorter som förtjänar namnet.' },
    { slug: 'wilderness', description: 'Bortom sista vägen, två retreater för seriösa resenärer.' },
  ],
  hotelsData: [
    {
      name: 'Arctic TreeHouse Resort',
      location: 'Rovaniemi',
      highlight: 'Designhotell · sviter i skogsbrynet',
      description:
        'Ett designhotell med 70 sviter, inbäddat i tallskogen bakom Santa Park i Rovaniemi. Varje svit har en panoramisk glasfasad mot träden och en nordiskt minimalistisk inredning. Stark egen restaurang, Rakas, med lokala råvaror, och resortens bastuby står öppen för alla gäster.',
    },
    {
      name: 'Arctic Light Hotel',
      location: 'Centrala Rovaniemi',
      highlight: 'Boutique 57 rum · funktionalistisk byggnad från 1939',
      description:
        'Ett boutiquehotell med 57 rum i en funktionalistisk byggnad från 1939, en gång lokaltidningens kontor, återuppbyggt efter att Lapplandskriget 1944 ödelade Rovaniemi. Varje våning har sitt eget inredningstema; taksviten har egen bastu. Stadens arkitektoniskt mest seriösa hotell.',
    },
    {
      name: 'Levi Spirit',
      location: 'Levi',
      highlight: 'Designvillor · spa · ski-in/out',
      description:
        'Villahotell i toppklass vid foten av Levifjället. Egna utomhusbadtunnor, en bastu i varje villa, ski-in/out-tillgång till liftarna och ett fullständigt spa. Byggt för vuxna, inget barnprogram, bara lugna rum och bra mat.',
    },
    {
      name: 'Lapland Hotels Saaga',
      location: 'Ylläsjärvi (Ylläs)',
      highlight: 'Klassiker vid Ylläs · ski-in/out · spa och pool',
      description:
        'Klassikerhotellet på Ylläs lugnare sida i byn Ylläsjärvi, ungefär hundra meter från Iso-Ylläs-liften, ski-in/ski-out på vintern. Pool-, spa- och gymavdelningen ingår för standard- och superiorrum; lägenheterna har dessutom egen bastu. Restaurang Bieggas buffé blickar ut över både fjället och sjön Ylläsjärvi.',
    },
    {
      name: 'Star Arctic Hotel',
      location: 'Saariselkä',
      highlight: 'Kulle · mörkast himmel · mix svit & glasstuga',
      description:
        'Ett hybridboende, klassiska hotellrum plus stugor med glastak på den högsta punkten ovanför Saariselkä. I stort sett ingen ljusförorening. Hotellrummen får samma kullutsikt genom ett stort fönster och är runt 40 % billigare än stugorna.',
    },
  ],
  longStaysData: [
    {
      name: 'Arctic TreeHouse Resort, lång vistelse',
      location: 'Rovaniemi',
      highlight: 'Designsviter · veckopriser · bastuby',
      description:
        'Designsviter med utsikt över tallskogen i utkanten av Santa Park. Veckopriset sjunker 25 % mot nattpriset. Varje svit har ett pentry, panoramisk glasfasad och tillgång till resortens bastuby, ett av få sätt att göra en riktigt lång vistelse i Rovaniemi utan att hyra en kal stuga.',
    },
    {
      name: 'Levi Residences, penthouse-sviter',
      location: 'Byn Levi',
      highlight: '2 sovrum · ski-in · egen bastu · veckopriser',
      description:
        'Tvårumslägenheter vid foten av Levifjället, gångavstånd till liftarna och byn. Varje enhet har en egen vedeldad bastu, ett riktigt kök och ett minimum på fyra nätter från december till mars. Valet för familjer som vill åka skidor en vecka utan att ge upp stadens bekvämligheter.',
    },
    {
      name: 'Lapland Hotels Ounasvaara Chalets',
      location: 'Rovaniemi · Ounasvaarafjället',
      highlight: 'Ski-in/out · gångavstånd till centrala Rovaniemi',
      description:
        'Fullt utrustade stugor på Ounasvaarafjället. På vintern ski-in/ski-out, tio minuters promenad till Rovaniemis centrum. Den mest flexibla långtidsoptionen om du vill kombinera stadsbekvämlighet med arktiska morgnar.',
    },
    {
      name: "Lapland Hotels Bear's Lodge",
      location: 'Nationalparken Pyhä-Luosto',
      highlight: 'Nationalpark utanför dörren · egen bastu · familjer',
      description:
        'Traditionella timmerstugor intill nationalparken Pyhä-Luosto. Fullständiga kök, egna vedeldade bastur, tillgång till sjön. Rätt svar för en flerveckors familjevistelse där dagarna kretsar kring snöskovandring och längdspår, inte sevärdheter.',
    },
    {
      name: 'Wilderness Hotel Nangu, villor vid sjön',
      location: 'Inarisjöns södra strand',
      highlight: 'Samiska aktiviteter · sjöutsikt · långtidspriser',
      description:
        'Villor vid Inarisjön med rum riktade mot vattnet. Samiskt guidat pimpelfiske, rangerledd vildmarksskidåkning, samiska museet i Inari tjugo minuter bort. Långtidspriser från fyra nätter, den mest kulturella av långtidsvistelserna vid en sjö.',
    },
  ],
  glassIgloosData: [
    {
      name: 'Kakslauttanen Arctic Resort',
      location: 'Saariselkä',
      highlight: 'Den ursprungliga glasigloon · Kelo-Glass tillgänglig',
      description:
        'Resorten som uppfann den moderna glasigloon. Välj Kelo-Glass framför de klassiska Glass Igloos, Kelo kombinerar det panoramiska glastaket med en uppvärmd trästomme, ett pentry och en öppen spis. Ett minimum på två nätter får ut mest av det.',
    },
    {
      name: 'Levin Iglut',
      location: 'Levifjället',
      highlight: 'Motoriserade norrskensbäddar · läge på fjället',
      description:
        'Premium-glasigloor på Levifjället, väl ovanför byns ljuskupol. Motoriserade bäddar vrider sig mot norrskensbågen, varje enhet har eget pentry, den mest genomarbetade konstruktionen av de fem finska resorterna.',
    },
    {
      name: 'Aurora Village',
      location: 'Ivalo',
      highlight: 'Vildmarksläge nära Ivalo · stugor långt isär',
      description:
        'Glastaksstugor i orörd skog nära Ivalo. Stugorna står långt isär för avskildhet och omgivningen är mörk nog att norrskenet kommer igenom tunna moln. Glasigloboendet på den här sidan med den mest avlägsna känslan.',
    },
    {
      name: 'Aurora Pyramids',
      location: 'Inarisjön',
      highlight: 'Pyramidstugor · sjöreflektioner',
      description:
        'Pyramidformade stugor med glasfasad vid Inarisjöns strand. Den frusna sjön speglar norrskensbågen så snart vinden sjunker under 3 m/s, en siktgeometri som inget annat finskt boende erbjuder.',
    },
  ],
  wildernessData: [
    {
      name: 'Iso-Syöte Eagle View Suites',
      location: 'Iso-Syöte (Pudasjärvi, strax söder om Lappland)',
      highlight: 'Ovanför trädgränsen · nåbar från Uleåborg',
      description:
        'Furusviter på 432 m på Iso-Syötefjället, det sydligaste riktiga fjället i Finland. Norrskensskådning ovanför trädgränsen utan den långa flygturen till Saariselkä, och 90 minuter från flygplatsen i Uleåborg.',
    },
    {
      name: 'Wilderness Hotel Muotka',
      location: 'Saariselkä-området',
      highlight: 'Norrskensväckning · hotellkomfort',
      description:
        'Norrskensstugor med glasväggar riktade mot de omgivande fjällen. Norrskensjägare på plats väcker gäster när aktiviteten stiger, användbart eftersom de flesta norrskensfönster infaller långt efter midnatt. Hotellkomfort på ett vildmarksläge.',
    },
  ],
  destinationsData: [
    {
      slug: 'rovaniemi',
      pitch:
        'Finska Lapplands huvudort, den enda staden i Lappland med en riktig restaurangscen på vintern, en fungerande flygplatshub och en designkultur året runt.',
      longStayAngle:
        'Rätt bas om din långa vistelse omfattar distansarbete på vardagar och helgturer norrut, snabbt wifi, direktflyg till Stockholm, restauranger öppna även under mellansäsongen.',
    },
    {
      slug: 'levi',
      pitch:
        'Finlands största skidort mätt i liftkortsförsäljning, med 25 000 bäddar, ski-in/out-lägenheter och en riktig bygata.',
      longStayAngle:
        'Långtidslogiken: ski-in/out-lägenheter hyrs ut per vecka från december till april. Liftsystemet går dagligen, byns restauranger öppnar varje kväll, du kan göra en riktig säsong här.',
    },
    {
      slug: 'saariselka',
      pitch:
        'Högre breddgrad än Rovaniemi, hårdare snö, mörkare himmel. Lapplandsbyn som tar vintern mest på allvar.',
      longStayAngle:
        'Långtidslogiken: hyr en stuga på en kulle och skriv en bok. Få distraktioner. Utmärkt längdskidnät, huskygårdar i närheten, ingen stadsdistraktion.',
    },
    {
      slug: 'inari',
      pitch: 'Samisk kulturhuvudstad, Enare träsk (Finlands tredje största sjö), vår nordligaste långtidsbas.',
      longStayAngle:
        'Långtidslogiken: sjön själv är aktiviteten. Pimpelfiske varje morgon, längdskidåkning över den frusna sjön, samiska museet i Inari och kulturcentret SIIDA utanför dörren.',
    },
    {
      slug: 'yllas',
      pitch:
        'Lugnare än Levi, längre skidsäsong, omkring 300 km preparerade längdspår genom en nationalpark.',
      longStayAngle:
        'Långtidslogiken: längdskidnätet är dragplåstret. Stuguthyrning löper här per vecka från slutet av november till början av maj. Det bästa långtidsvalet för skidåkare som inte behöver alpint med liftar varje dag.',
    },
  ],
};
