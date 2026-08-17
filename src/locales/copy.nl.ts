// Dutch overlay, u-form. Overrides all keys flagged by validator
// (banned terms: "aurora"→"noorderlicht", "hut"→"hut", "Kerstman"→"Kerstman") + above-the-fold copy.
import { copyEN } from './copy.en';
import type { SectionCopy } from './copy';

export const copyNL: SectionCopy = {
  ...copyEN,
  nav: {
    ...copyEN.nav,
    longStays: 'Lange verblijven',
    glassIgloos: 'Glazen iglo’s',
    wilderness: 'Wildernis',
    whenToGo: 'Wanneer gaan',
    bookingGuide: 'Boekingsgids',
    browseStays: 'Verblijven bekijken',
    homeAria: 'StayInLapland startpagina',
    openMenu: 'Menu openen',
    closeMenu: 'Menu sluiten',
  },
  hero: {
    ...copyEN.hero,
    eyebrow: 'Fins Lapland · Redactionele gids',
    h1Line1: 'Lapland is meer dan',
    h1Line2: 'een weekje vakantie.',
    lead:
      'Hutten per week, design hotels in Rovaniemi, glasiglo’s voor de bucketlist-nachten, en de wildernislodges voorbij de laatste weg. Geverifieerde tarieven van',
    leadPriceRange: '€140 tot €1 500',
    liveLabel: 'Live beschikbaarheid · Trip.com-zoekopdracht',
    browseLongStays: 'Lange verblijven bekijken',
    seeHotels: 'Hotels bekijken',
  },
  newsletter: {
    ...copyEN.newsletter,
    eyebrow: 'Lange-verblijfsopeningen · laagseizoentarieven',
    h2: 'De verblijven die u nog niet kunt boeken.',
    lead:
      'De meeste langverblijfadressen op deze site geven hun winterinventaris eind augustus vrij, en die is snel weg. We vertellen wanneer de boekingsvensters opengaan, plus de laagseizoenweken (november, eind april) waarin de prijzen dalen terwijl het noorderlicht nog te zien is.',
    placeholder: 'Uw e-mailadres',
    subscribe: 'Inschrijven',
    subscribing: 'Bezig met inschrijven…',
    success:
      'Welkom aan boord. Controleer uw inbox om te bevestigen, de eerste lange-verblijfmelding komt zodra wij het volgende inventarisvenster openen.',
    errorPrefix: 'Inschrijven niet gelukt, ',
    pleaseTryAgain: 'probeer het opnieuw',
    footnotePart1: 'Wij sturen nooit spam. Met één klik uitschrijven. Zie ons ',
    footnoteLink: 'Privacybeleid',
  },
  authorByline: {
    reviewed: 'Beoordeeld door het redactienetwerk van LaplandVibes',
    defaultNote:
      'Geschreven en geverifieerd met lokale partners in heel Fins Lapland. Wij verdienen affiliate-commissie op boekingen, maar dit bepaalt nooit welke accommodaties wij aanbevelen.',
  },
  workInLaplandPromo: {
    ...copyEN.workInLaplandPromo,
    inlineEyebrow: 'Geïnteresseerd in werken in Fins Lapland?',
    inlineBodyPrefix:
      'Seizoenwerk, plekken voor remote werken en openstaande functies in skigebieden vindt u op onze zustersite ',
    inlineBodyBrand: 'laplandwork.com',
    inlineBodySuffix: '.',
    inlineCta: 'Bekijk vacatures',
    fullEyebrow: 'Zustersite · laplandwork.com',
    fullH2A: 'Geïnteresseerd in werken',
    fullH2B: 'in Fins Lapland?',
    fullP1:
      'Veel langere verblijven op deze site worden geboekt door mensen die oorspronkelijk voor een skiseizoen kwamen, een arctisch ingenieurscontract of een maand remote werken, en die uiteindelijk verliefd werden op de plek. Bent u daarom hier, dan heeft de werkzijde een eigen site.',
    fullP2A: 'LaplandWork.com',
    fullP2B:
      ' is de centrale vacaturehub voor Fins Lapland, seizoensgebonden horeca, banen in skigebieden, vacatures bij huskykennels, ziekenhuis- en ingenieursbanen in Rovaniemi, Levi, Saariselkä en Inari. Gratis voor werkzoekenden, drie prijsniveaus voor werkgevers.',
    fullCta: 'Bekijk vacatures',
    blocks: [
      { label: 'Seizoenswerk horeca', tag: 'Levi · Ylläs · Saariselkä' },
      { label: 'Huskykennels', tag: 'Seizoen nov–apr' },
      { label: 'Plekken voor remote werken', tag: 'Het hele jaar, glasvezel' },
      { label: 'Zorg + techniek', tag: 'Vaste functies' },
    ],
  },
  longTermRentals: {
    ...copyEN.longTermRentals,
    eyebrow: 'Verhuizen naar Lapland · 6 maanden en langer',
    h2A: 'Zoekt u een echte woning,',
    h2B: 'geen kortetermijnhuur?',
    lead:
      'De accommodaties op deze site zijn korte- tot middellange-termijnhuur, geboekt via onze boekingspartner, het juiste antwoord voor reizen tot vier weken. Voor 6 maanden, een jaar of een permanente verhuizing heeft u de Finse landelijke verhuurportalen nodig. Dit zijn de zes meest actieve voor het aanbod in Lapland.',
    process: {
      title: 'Gebruikelijk proces',
      body:
        'E-mail naar verhuurder/makelaar → bezichtiging ter plaatse → aanvraagformulier (palkkatodistus + luottotiedot, loonstrook + kredietoverzicht) → 1–2 maanden waarborg + eerste maand huur → sleutels. Houd realistisch 2–6 weken voorbereidingstijd aan.',
    },
    cost: {
      title: 'Wat kost het',
      body:
        'Rovaniemi 1-kamerwoning: €600–900/maand. Levi/Saariselkä 1-kamerwoning (winterseizoen): €900–1 400. Buiten de winterpiek in skidorpen dalen de prijzen met 30–40%. Alle bedragen zijn inclusief water; elektriciteit en verwarming zijn doorgaans apart.',
    },
    abroad: {
      title: 'Komt u uit het buitenland?',
      body:
        'EU/EER-burgers kunnen vrij huren. Niet-EU-burgers hebben een verblijfsvergunning nodig (Migri-behandeling 1–4 maanden). De vacaturehub op laplandwork.com behandelt Migri, Kela-registratie, het openen van een Finse bankrekening, de belastingkaart en de volledige checklist voor verhuizen naar Lapland.',
    },
    tags: {
      national: 'LANDELIJK',
      rentalOnly: 'ALLEEN HUUR',
      corporate: 'ZAKELIJK',
      classifieds: 'RECHTSTREEKS VAN VERHUURDER',
    },
  },
  tripRecommender: {
    weBook: 'Wij zouden boeken',
    items: [
      {
        forWho: 'Eerste reis · 4–6 nachten · met kinderen',
        recommendation: 'Boutiquehotel in Rovaniemi',
        rationale:
          'Een design hotel als Arctic Light of Arctic TreeHouse biedt nabijheid van het vliegveld, een echte restaurantscene en de logistiek van het Kerstmandorp, zonder het gezin in een afgelegen hut te dwingen waar verwarmen een avondproject wordt.',
        ctaLabel: 'Hotels bekijken',
      },
      {
        forWho: 'Terugkerende gast · 7–14 nachten · één vaste basis',
        recommendation: 'Lange-verblijfhut in Levi of Saariselkä',
        rationale:
          'Vestig u voor een week. Een tweekamerappartement bij Levi Spirit of een hut op een heuveltop bij Saariselkä geeft u weektarieven, een privésauna en genoeg tijd om u echt in Lapland te vestigen, in plaats van te rennen tussen bucketlist-nachten.',
        ctaLabel: 'Lange verblijven bekijken',
      },
      {
        forWho: 'Jubileum · pensioen · groepsboeking',
        recommendation: 'Een wildernislodge',
        rationale:
          'Een wildernislodge is de meest exclusieve manier om de gelegenheid te markeren. Een Iso-Syöte Eagle View Suite biedt afzondering boven de boomgrens, en een villa bij Wilderness Hotel Nangu voegt door Sami geleide activiteiten op het Inarimeer toe, beide privé genoeg om het hele landschap als het uwe te laten voelen, zonder de prijs van een volledige buyout.',
        ctaLabel: 'Wildernislodges bekijken',
      },
    ],
  },
  home: {
    ...copyEN.home,
    metaTitle: 'Waar te verblijven in Lapland 2026, 16 adressen',
    metaDescription:
      'Plan uw verblijf Lapland 2026, 16 geverifieerde accommodaties: hutten vanaf €140/nacht, designhotels in Rovaniemi, glasiglo’s €280+ en wildernislodges.',
    schemaName: 'StayInLapland, Lange verblijven en boutique-hotels in Fins Lapland',
    breadcrumbHome: 'Home',
    stats: { stays: 'Gekozen verblijven', bases: 'Bases in Lapland', categories: 'Manieren van verblijven', months: 'Beoordeelde maanden' },
    intro: {
      p1: 'De meeste lijstjes met "beste accommodatie in Lapland" beginnen met een glasiglo bovenaan, zetten daaronder twintig andere glasiglo’s in ongeveer dezelfde volgorde, en bevatten geen enkele zin over de vraag of de schrijver er ooit meer dan twee nachten heeft doorgebracht. Deze gids is het tegenovergestelde.',
      p2: 'Lapland-accommodatie valt uiteen in vier categorieën, lange-verblijfshuur, hotels, glasiglo’s en wildernislodges, en de zestien accommodaties die hun plek verdienen, staan hieronder. Daarmee kunt u een reis bouwen die begint met een week in een hut bij Levi, doorgaat naar een design hotel in Rovaniemi voor twee stadse nachten, en eindigt met één glasiglonacht voor de terugvlucht. Zo beloont Lapland een langer verblijf.',
      p3: 'Drie dingen die deze gids niet doet: prijzen aggregeren, beoordelingen recyclen, of doen alsof we plekken behandelen waar geen partner in het netwerk ooit een echte nacht heeft doorgebracht.',
    },
    authorNote:
      'Een handmatig samengestelde shortlist, geschreven en gecontroleerd met lokale partners in heel Fins Lapland.',
    fourWays: {
      kicker: 'Vier manieren om te verblijven',
      h2A: 'Kies er een.',
      h2B: 'Of combineer er twee.',
      lead:
        'Kies de categorie die past bij de reis die u écht wilt. Kies daarna een bestemming. Lezers van lange verblijven combineren er vaak twee, een week als basis in een hut, twee nachten contrast.',
    },
    propertyWord: 'accommodatie',
    propertiesWord: 'accommodaties',
    explore: 'Bekijken',
    pullQuote: {
      ...copyEN.home.pullQuote,
      text:
        'Lapland is groter dan mensen denken, en de weg tussen Rovaniemi en Saariselkä kost in elke richting een halve dag. De grootste fout van een eerste reis is drie verschillende bases boeken in vijf nachten.',
      attr: 'Accommodatieverslag Lapland · Lapin Liitto, 2024',
    },
    tripKicker: 'Weet u ongeveer wat u wilt?',
    tripH2: 'De snelroutes van de locals.',
    destKicker: 'Vijf bases in Lapland',
    destH2: 'Waar in Lapland?',
    destLead:
      'Elke bestemming heeft zijn eigen logica voor een lang verblijf. Klik door voor aanbevelingen en het argument om juist die basis te kiezen.',
    readGuide: 'Lees de',
    faqKicker: 'Echte vragen, echte antwoorden',
    faqH2: 'Voordat u op iets klikt.',
    faqs: [
      {
        q: 'Wat geldt op deze site als een "lang verblijf"?',
        a: 'Alles vanaf vier nachten geldt als een lang verblijf, dat is de drempel waarbij de meeste Lapland-accommodaties weektarieven aanbieden en een echte keuken belangrijk wordt. De uitgelichte lange-verblijfsaccommodaties hanteren een minimum van 3 tot 7 nachten, afhankelijk van de unit; bij elke kaart staat het minimum vermeld.',
      },
      {
        q: 'Waarom richt de homepage zich op lange verblijven in plaats van glasiglo’s?',
        a: 'Glasiglo’s zijn het iconische Lapland-formaat en hebben een aparte pagina. Maar de meest geliefde Lapland-reizen zijn geen driedaagse bucketlistnachten in een glaskoepel, het zijn weeklange base-camp-verblijven in een hut of design hotel, met een of twee nachten elders ingebouwd. De site weerspiegelt hoe Lapland terugkerende gasten echt beloont.',
      },
      {
        q: 'Is Kakslauttanen werkelijk de hoofdprijs waard?',
        a: 'Ja, maar alleen de Kelo-Glass-iglo’s, niet de klassieke Glass Igloos. Kelo-Glass combineert het panoramische glazen dak met een verwarmde houten structuur, een kitchenette en een privéhaard. Een minimum van twee nachten haalt er het meeste uit. Beste noorderlichtvensters: begin februari en eind maart.',
      },
      {
        q: 'Waar kan ik me het best baseren als mijn lange verblijf remote werk omvat?',
        a: 'Rovaniemi. Het is de enige stad in Lapland met betrouwbare glasvezel, dagelijkse vluchten op Helsinki en Stockholm en een echte winterse restaurantscene die ook in de tussenseizoenen open blijft. Arctic TreeHouse Resort en de Ounasvaara-chalets bieden allebei weektarieven en goede werkplekken.',
      },
    ],
    fullGuideCta: 'Lees de volledige boekingsgids',
    categoryDescriptions: {
      longStays: 'Week- en maandverhuur, villa\'s, designhutten, ski-appartementen.',
      hotels: 'Boutique-, design- en klassieke Lapland-hotels voor korte verblijven.',
      glassIgloos: 'Het iconische Lapland-formaat, vier resorts die de naam verdienen.',
      wilderness: 'Voorbij de laatste weg, twee retreats voor serieuze reizigers.',
    },
    categoryNames: {
      longStays: 'Lange verblijven',
      hotels: 'Hotels',
      glassIgloos: 'Glasiglo’s',
      wilderness: 'Wildernislodges',
    },
  },
  hotels: {
    metaTitle: 'Boutique- en designhotels in Fins Lapland | StayInLapland',
    metaDescription:
      'Vijf Lapland-hotels die de boeking waard zijn, Arctic TreeHouse, Arctic Light, Levi Spirit, Lapland Hotels Saaga en Star Arctic. Voor korte verblijven.',
    breadcrumb: 'Hotels',
    pageHero: {
      eyebrow: 'Vijf zorgvuldig gekozen hotels',
      title: 'Hotels in Lapland.',
      subtitle:
        'Boutique, design en betrouwbaar klassieke Lapland-hotels, voor de korte verblijven, de werkreizen en de tweedaagse stadsbezoeken die u rond een langere basis in een hut bouwt.',
    },
    authorNote:
      'Vijf accommodaties dubbel gecheckt met gepubliceerde informatie van de exploitanten en recente gastbeoordelingen in het seizoen 2025/26.',
    introP1:
      'Lapland heeft genoeg ketenhotels in het middensegment, Scandic, Cumulus, Sokos, die de basis goed doen voor €90–140/nacht. Die staan hier niet vermeld; de boekingsbeslissing daar is grotendeels "dichtst bij de luchthaven, goedkoopste week".',
    introP2:
      'De vijf hotels hieronder verdienen hun plek om een andere reden, design, architectuur, uitzicht of dienstenmix. Ze zijn het juiste antwoord wanneer u een hotel wilt dat onderdeel is van de reden van uw reis, niet alleen een basis.',
    picksKicker: 'Vijf keuzes',
    picksH2: 'Gekozen, niet geaggregeerd.',
    pullQuote: {
      text:
        'Rovaniemi werd na 1944 drie keer herbouwd, de derde keer door Alvar Aalto, die het stadsplan tekende in de vorm van een rendiergewei. Het Arctic Light Hotel ligt binnen dat gewei, in een gebouw uit 1939 dat alle drie de herbouwen overleefde.',
      attr: 'Architectural Record · reportage Arctic Light Hotel',
    },
    glanceKicker: 'Alle vijf in één oogopslag',
    glanceH2: 'Vergelijking met een mening.',
    rubric:
      'Vijf bolletjes is de hoogste score. Design = interieurstijl en materiaalkwaliteit. Architectuur = het gebouw zelf. Activiteiten = ski-in/out, huskykennels en lokale cultuur binnen 15 minuten.',
    axes: ['Design', 'Architectuur', 'Spa / sauna', 'Activiteiten', 'Restaurant'],
    rows: [
      { name: 'Arctic TreeHouse', verdict: 'Beste design hotel in Rovaniemi.' },
      { name: 'Arctic Light', verdict: 'Architectonisch meest interessante gebouw.' },
      { name: 'Levi Spirit', verdict: 'Volwassenensfeer. Spa + ski-in.' },
      { name: 'Lapland Hotels Saaga', verdict: 'Ski-in/out-klassieker bij Ylläs. Spa inbegrepen.' },
      { name: 'Star Arctic', verdict: 'Heuveltop · donkerste hemel · mix hut/hotel.' },
    ],
    marginLabel: 'Insider',
    marginBody:
      'Arctic TreeHouse en Levi Spirit hebben allebei een eigen restaurant, Rakas (TreeHouse) en Spirit Kitchen (Levi). Allebei werken ze met lokale producten. Als u een van beide boekt, reserveer dan dezelfde dag ook een tafel, ze raken in het weekend sneller volgeboekt dan het hotel zelf.',
    counterKicker: 'Eerlijke tegenaanbeveling',
    counterH2: 'Wanneer een hotel niet het antwoord is.',
    counterP1:
      'Voor 5+ nachten met hetzelfde ritme, skiën, koken, sauna, herhalen, verslaat een lange-verblijfshut of -appartement elk van deze hotels qua kosten per nacht en levenskwaliteit. Hotels zijn juist als de dagen onderling verschillen.',
    counterP2: 'Voor één noorderlicht-bucketlistnacht winnen glasiglo’s. Geen van de hotels hierboven heeft een glazen dak.',
    seeLong: 'Bekijk lange verblijven',
    seeIgloos: 'Bekijk glasiglo’s',
    browseAll: 'Bekijk Trip.com-aanbod',
  },
  glassIgloos: {
    metaTitle: 'Glasiglo’s in Fins Lapland | StayInLapland',
    metaDescription:
      'Glasigloo-resorts in Fins Lapland die hun naam waarmaken, Kakslauttanen, Levin Iglut, Aurora Village en Aurora Pyramids. Gerangschikt op hemelzicht.',
    breadcrumb: 'Glasiglo’s',
    pageHero: {
      eyebrow: 'Het iconische Lapland-formaat',
      title: 'Glasiglo’s in Fins Lapland.',
      subtitle:
        'De Finse koepel met glazen dak werd in 1973 uitgevonden in Saariselkä. Vier accommodaties maken die naam vandaag waar, en het verschil tussen hen is reëel.',
    },
    authorNote:
      'Vier resorts dubbel gecheckt met gepubliceerde informatie van de exploitanten en recente gastbeoordelingen. Prijzen laatst gecontroleerd: februari 2026.',
    pickWhy: [
      'Kakslauttanen staat op elke lijst omdat het die plek verdient. Het resort vond de moderne glasiglo uit in 1973, toen "toeristenaccommodatie in Saariselkä" nog een houten hostel betekende en het noorderlicht iets was dat u vanaf de parkeerplaats bekeek.',
      'Er is een tweesprong: boek de Kelo-Glass-iglo’s, niet de klassieke Glass Igloos. Kelo-Glass combineert het panoramische glazen dak met een verwarmde houten structuur, een eigen kitchenette en een open haard. De klassieke zijn kleiner, drukker, en de badkamer ligt op 50 meter lopen, bij -25°C.',
      'Het prijsverschil bedraagt zo’n €200/nacht. Over drie nachten verdient de Kelo-Glass die meerprijs terug, alleen al doordat u om 4 uur ’s nachts geen sneeuwlaarzen hoeft aan te trekken.',
    ],
    pickCaveat:
      'De klassieke Glass Igloos zijn ongeveer 30% goedkoper, maar de ervaring is duidelijk minder. Past uw budget op €400/nacht, kijk dan naar Aurora Village of Aurora Pyramids, dezelfde hemel, vaak met een mooiere meer- of wildernislocatie.',
    pullQuote: {
      text:
        'De eerste glasiglo werd gebouwd zodat gasten het noorderlicht konden zien zonder buiten te staan bij -30°C. Vijftig jaar later is dat nog steeds de hele propositie, en wat elke nabootser verkeerd doet, is wat er gebeurt nadat het noorderlicht verdwijnt.',
      attr: 'Ontstaansverhaal Kakslauttanen · 1973',
    },
    runnersKicker: 'De andere drie',
    runnersH2: 'Wanneer Kakslauttanen niet het juiste antwoord is.',
    glanceKicker: 'Alle vier in één oogopslag',
    glanceH2: 'De vergelijking met een mening.',
    rubric:
      'Vijf bolletjes is de hoogste score. Bereikbaarheid = gemak vanaf de dichtstbijzijnde luchthaven. Hemel = duisternis + kijkgeometrie. Privacy = afzondering van naburige units. Comfort = badkamer, keuken, geluidsisolatie. Reputatie = hoe goed het resort de brochure waarmaakt.',
    axes: ['Bereikbaarheid', 'Hemel', 'Privacy', 'Comfort', 'Reputatie'],
    rows: [
      { name: 'Kakslauttanen', verdict: 'Het origineel. Prijzig. Alleen Kelo-Glass de moeite waard.' },
      { name: 'Levin Iglut', verdict: 'Beste engineering. Gemotoriseerde noorderlichtbedden.' },
      { name: 'Noorderlichtdorp (Aurora Village)', verdict: 'Meest afgelegen gevoel. 30 min van Ivalo.' },
      { name: 'Noorderlichtpiramides (Aurora Pyramids)', verdict: 'Meerreflecties verdubbelen het noorderlicht.' },
    ],
    marginLabel: 'Afweging',
    marginBody:
      'Geen resort wint op alle vijf assen. Aurora Pyramids verslaat iedereen op hemelreflectie maar verliest op bereikbaarheid (40 min van Ivalo). Levin Iglut wint op engineering maar ligt in een drukke skidorp. Kies de prioriteit die voor u het belangrijkst is.',
    counterKicker: 'Eerlijke tegenaanbeveling',
    counterH2: 'Wanneer u glasiglo’s helemaal overslaat.',
    counterP1:
      'Bij verblijven van vier of meer nachten is twee glasiglonachten plus een blok in een lange-verblijfshut een betere reis dan vier glasiglonachten. De nieuwigheid slijt na de tweede nacht; een hirsimökki met privésauna levert het deel van Lapland dat een glaskoepel niet kan.',
    counterP2:
      'Voor Kerstmis (22 dec → 2 jan) verdrievoudigen de prijzen en gaat 90% van het aanbod tegen het voorjaar naar Britse pakketreizen. Verschuif uw data zo mogelijk naar de tweede helft van januari, kouder, donkerder, half zo duur, beter noorderlicht.',
    seeLong: 'Bekijk lange verblijven',
    bookingGuideBtn: 'Boekingsgids',
    browseAll: 'Bekijk Trip.com-aanbod',
  },
  wilderness: {
    metaTitle: 'Wildernislodges in Fins Lapland | StayInLapland',
    metaDescription:
      'Wildernislodges voorbij de laatste weg, Iso-Syöte Eagle View Suites en Wilderness Hotel Muotka. Noorderlicht boven de boomgrens en noorderlicht-wekservice.',
    breadcrumb: 'Wildernis',
    pageHero: {
      eyebrow: 'Voorbij de laatste weg',
      title: 'Wildernislodges.',
      subtitle:
        'De nieuwe Lapland-traditie, door architecten ontworpen retreats, sinds de jaren 2010 gebouwd op plekken waar de toeristenweg ophoudt. Twee lodges, twee verschillende definities van wildernis.',
    },
    authorNote:
      'De gegevens van beide accommodaties zijn geverifieerd aan de hand van gepubliceerde informatie van de exploitanten en recente gastbeoordelingen.',
    pickWhy: [
      'De Iso-Syöte Eagle View Suites liggen op 432 m op de zuidelijkste echte fjell van Finland, in grenenhout gebouwde suites met noorderlicht-kijken boven de boomgrens en zonder de lange vlucht naar het noorden.',
      'De glasgevels kijken uit op de open hemel, zodat de noorderlichtboog op een heldere nacht vanuit het bed te zien is. U bekijkt het noorderlicht vanuit uw eigen suite op de bergkam in plaats van een gedeelde schuilplaats, privacy zonder de verplichting van een volledige buyout.',
      'En het is de makkelijkst bereikbare serieuze wildernislodge: 90 minuten van de luchthaven van Oulu, wat het de zeldzame retreat maakt die zelfs voor een korte reis werkt.',
    ],
    pickCaveat:
      'De knop "tarieven bekijken" op deze site verwijst naar een Trip.com-zoekopdracht voor het dichtstbijzijnde boekbare aanbod. De Eagle View Suites zijn het snelst uitverkocht in weekenden met heldere lucht, boek de data, niet de weersvoorspelling.',
    pullQuote: {
      text:
        'Het woord "afgelegen" is meestal marketingtaal. Hierboven is het waar. De weg houdt op, de boomgrens zakt onder u weg, en het enige licht dat overblijft is wat de hemel besluit te maken. Op zo’n plek val je niet zomaar binnen, je verbindt je eraan.',
      attr: 'Op de fjellweg van Iso-Syöte, omhoogkijkend',
    },
    runnersKicker: 'De andere',
    runnersH2: 'Wanneer een hele suite op de bergkam te veel is.',
    glanceKicker: 'Twee definities van wildernis',
    glanceH2: 'In één oogopslag.',
    rubric:
      'Afzondering = hoe alleen u zich werkelijk voelt. Service = verhouding personeel per gast. Activiteiten = begeleide ervaringen inbegrepen of beschikbaar.',
    axes: ['Bereikbaarheid', 'Afzondering', 'Service', 'Activiteiten', 'Once-in-a-lifetime-factor'],
    rows: [
      { name: 'Iso-Syöte Eagle View', verdict: 'Boven de boomgrens. Eenvoudigst vanuit zuid-Finland.' },
      { name: 'Hotel Muotka', verdict: 'On-site noorderlicht-wekservice. Hotelcomfort.' },
    ],
    marginLabel: 'Noorderlicht-wekservice bij Muotka',
    marginBody:
      'Wilderness Hotel Muotka heeft een dienstdoende noorderlicht-jager die de Kp-index volgt en fysiek op deuren klopt zodra de noorderlichten verschijnen. Het is de beste functie van welke accommodatie dan ook in deze gids en het prijsverschil waard voor reizen van slechts één nacht.',
    counterKicker: 'Eerlijke tegenaanbeveling',
    counterH2: 'Wildernislodges zijn niet voor iedereen.',
    counterP1:
      'Beide lodges liggen 1–3 uur per transfer van de dichtstbijzijnde luchthaven. Voor reizen onder drie nachten is de reistijd onevenredig.',
    counterP2:
      'Voor wie voor het eerst naar het noordpoolgebied reist: doe eerst een reis naar Rovaniemi of Saariselkä. Een wildernislodge als volledige buyout is verspild aan iemand die nog uitvindt wat -25°C is.',
    seeLong: 'Bekijk lange verblijven',
    browseAll: 'Bekijk Trip.com-aanbod',
  },
  longStays: {
    metaTitle: 'Lange verblijven in Fins Lapland | StayInLapland',
    metaDescription:
      'Vijf lange-verblijfsaccommodaties in Lapland voor een week of langer, Arctic TreeHouse, Levi penthouses, Ounasvaara-chalets, Pyhä-hutten en Inari-villa’s.',
    breadcrumb: 'Lange verblijven',
    pageHero: {
      eyebrow: 'Vijf lange-verblijfsaccommodaties',
      title: 'Blijf een week. Of een maand.',
      subtitle:
        'Het juiste antwoord voor terugkerende gasten, remote werkers, gezinnen en iedereen wiens Lapland-reis langer is dan drie nachten. Weektarieven, privésauna’s, echte keukens, van designsuites tot ski-in-appartementen.',
    },
    authorNote:
      'Vijf accommodaties dubbel gecheckt met lokale partners en weektariefkalenders in het seizoen 2025/26.',
    pickWhy: [
      'Het Arctic TreeHouse Resort is het antwoord als de vraag is "hoe doe ik een echt lang verblijf in Rovaniemi zonder een kale hut te huren?" Designsuites gebouwd in het dennenbos aan de rand van Santa Park, elk met een kitchenette en een panoramische glasgevel die uitkijkt op de bomen.',
      'Het weektarief daalt ongeveer 25% ten opzichte van het nachttarief, en elke suite heeft toegang tot het saunadorp van het resort, een week hier kost dus per nacht minder dan een reeks losse overnachtingen, met veel meer ruimte om echt te settelen.',
      'Het is ook de flexibelste uitvalsbasis in deze lijst: de luchthaven, restaurants en designcultuur van Rovaniemi liggen op tien minuten, terwijl de suite zelf op niets dan bos uitkijkt. De knop "Tarieven bekijken" hieronder brengt u rechtstreeks naar het weekaanbod.',
    ],
    pickCaveat:
      'De weekkorting verschijnt in het boekingssysteem zodra u 7+ nachten kiest, hij staat niet altijd bij het getoonde nachttarief. Piekweken rond Kerst zijn maanden vooruit volgeboekt; half november en eind april zijn veel goedkoper.',
    pullQuote: {
      text:
        'De opdracht was te verdwijnen in de bergkam. Gebruik hout dat van het terrein zelf kwam, glas alleen op het noorden, en til de daklijn nooit boven de boomtoppen uit. Wat u ziet was er al, wij maakten het slechts mogelijk om erin te wonen.',
      attr: 'Studio Puisto · verklaring van de architect',
    },
    runnersKicker: 'De andere vier',
    runnersH2: 'Van ski-in-appartementen tot villa’s aan het meer.',
    runnersLead:
      'Elk van de vier hieronder heeft een eigen logica voor een lang verblijf, nabijheid van een liftsysteem, weekinfrastructuur voor werken vanuit Lapland, een gezinsvriendelijke keuken, of een cultureel rijke basis aan een meer.',
    weeklyKicker: 'Hoe weektarieven werken',
    weeklyH2: 'De prijs daalt sneller dan mensen verwachten.',
    weeklyP1:
      'Over de accommodaties op deze pagina is het weektarief gemiddeld <strong>23% goedkoper per nacht</strong> dan het nachttarief van de prijslijst. Levi Residences daalt 30%, Pyhä Bear’s Lodge daalt 18%, Arctic TreeHouse daalt 25%. De meeste adverteren dit niet, de korting zit in het boekingssysteem zodra u 7+ nachten selecteert.',
    weeklyP2:
      'De schouderweken, <strong>half november</strong> (vlak voordat de sneeuw stabiliseert) en <strong>eind april</strong> (vlak nadat de sneeuw smelt), zakken nog eens 30–50% extra. Noorderlicht is in beide vensters nog actief. Dit is het zoete punt voor lange verblijven met een flexibele werkkalender.',
    marginLabel: 'Boekingstactiek',
    marginBody:
      'Voor een verblijf van 4 weken kan het opsplitsen over twee accommodaties een enkele boeking verslaan, u vermijdt de "piekweek"-piek rond Kerst en carnaval, en u ziet meteen twee delen van Lapland. De transferdag kost een halve dag; de besparing betaalt doorgaans twee extra nachten elders.',
    counterKicker: 'Eerlijke tegenaanbeveling',
    counterH2: 'Wanneer u GEEN lang verblijf boekt.',
    counterP1:
      'Voor een eerste reis van 2–3 nachten slaat u lange-verblijfshuur over. De check-in, boodschappen en de "leer-het-fornuis"-belasting vegen de besparing weg. Boek dan een hotel.',
    counterP2:
      'Voor één bucketlist-noorderlichtnacht zijn glasiglo’s het betere antwoord. Het glazen dak is de ervaring waarvoor u kwam; een lange-verblijfshut geeft u een raam.',
    counterP3:
      'Voor groepen met gemengde mobiliteit belt u de accommodatie vooraf rechtstreeks, de meeste lange-verblijfshutten zijn niet drempelvrij, en juist de sauna ligt vaak in de kelder op een houten vloer.',
    seeHotels: 'Bekijk hotels',
    seeIgloos: 'Bekijk glasiglo’s',
    browseAll: 'Bekijk Trip.com-aanbod',
  },
  bookingGuide: {
    metaTitle: 'Lapland-boekingsgids, wanneer, hoe, wat in te pakken',
    metaDescription:
      'Praktische Lapland-boekingsgids, wanneer komen voor het beste noorderlicht, hoe er te komen, wat in te pakken, wat het werkelijk kost en insidertips.',
    breadcrumb: 'Boekingsgids',
    pageHero: {
      eyebrow: 'Plan een echte reis',
      title: 'De Lapland-boekingsgids.',
      subtitle:
        'Praktisch advies met een mening. Wanneer komen, hoe er te komen, wat in te pakken, wat het werkelijk kost.',
    },
    sections: [
      {
        title: 'Wanneer komen',
        body: [
          'Het noorderlichtseizoen loopt van eind augustus tot begin april. De sterkste vensters zijn september–oktober en februari–maart, wanneer lange donkere nachten samenvallen met actief zonneweer.',
          'Vermijd eind november tot half december: donker, maar de sneeuw ligt vaak in plukken en veel activiteiten zijn nog niet begonnen.',
          'Kerst en Oud-en-Nieuw zijn 9 maanden vooruit uitverkocht en de prijzen verdrievoudigen. De lokale keuze is de tweede helft van januari, rustiger, kouder, beter noorderlicht.',
        ],
      },
      {
        title: 'Hoe komt u er',
        body: [
          'Drie Lapland-vliegvelden dekken het meeste van wat u zou boeken. Rovaniemi (RVN) voor het Kerstmandorp en het zuiden, Kittilä (KTT) voor Levi en Ylläs, Ivalo (IVL) voor Saariselkä, Inari en het noorden.',
          'Helsinki (HEL) → Lapland is een binnenlandse vlucht van 90 minuten. Directe vluchten vanuit Londen, Berlijn en Parijs bestaan ook van december tot maart.',
          'Treinen: de nachttrein Helsinki–Rovaniemi is langzaam maar de dageraad bij Tornio is werkelijk prachtig en de coupé zit vol locals die dezelfde reis maken.',
        ],
      },
      {
        title: 'Wat in te pakken',
        body: [
          'De meeste accommodaties leveren arctische bovenkleding (-30°C-pakken, laarzen, handschoenen, mutsen) inbegrepen of tegen een kleine dagvergoeding. Bevestig dit voordat u met een ruimbagage vol skikleding vliegt.',
          'Lagen tellen meer dan dikte, merino-onderlaag + fleece-middenlaag + winddichte shell. Katoen is dodelijk.',
          'Camera’s: neem reservebatterijen mee tegen het lichaam, binnen uw jas. De kou put ze snel uit.',
        ],
      },
      {
        title: 'Realiteitscheck van het budget',
        body: [
          'Lange-verblijfshut (weektarief): €140–280/nacht, slaapt 4–6.',
          'Boutique hotel: €140–420/nacht, ontbijt meestal inbegrepen.',
          'Glasiglo, hoogseizoen: €400–1 500/nacht voor twee.',
          'Wildernislodge-suite: €220–950/nacht afhankelijk van de accommodatie.',
          'Activiteiten (husky-safari, sneeuwscooter, noorderlichtjacht) doorgaans €120–200 per persoon per uitstap erbovenop.',
        ],
      },
      {
        title: 'Annuleringsvoorwaarden',
        body: [
          'De meeste Lapland-accommodaties zijn voor de piekweken overgestapt op niet-restitueerbare tarieven. Lees de kleine lettertjes voordat u op "boeken" klikt.',
          'Een reisverzekering met "annuleer-om-elke-reden"-dekking is écht de moeite waard voor reizen boven €2 000. Noorderlichtjagers annuleren voortdurend om het weer.',
          'Onze boekingspartners respecteren de annuleringsvoorwaarden die bij het boeken worden getoond, boek via de redirect op deze site om het tarief zichtbaar en consistent te houden.',
        ],
      },
      {
        title: 'Insidertips',
        body: [
          'Saariselkä en Inari zijn kouder, donkerder en hebben sterker noorderlicht dan Rovaniemi, maar Rovaniemi heeft het vliegveld, de activiteiten, het Kerstmandorp. Combineer bases.',
          'Heeft u maar 3 nachten, doe ze dan op één plek. Lapland is groter dan mensen denken en transfers vreten dagen.',
          'Noorderlicht-prognoses (NOAA, Aurora Service Europe) zijn 30–90 minuten vooruit nauwkeurig, niet dagen. Blijf flexibel.',
        ],
      },
    ],
    readyTitle: 'Klaar om te boeken?',
    readyLead:
      'Bekijk zorgvuldig gekozen accommodaties per categorie, of spring direct naar live beschikbaarheid op Trip.com.',
    browseAll: 'Bekijk alle Lapland-accommodaties',
  },
  whenToGo: {
    metaTitle: 'Wanneer Lapland bezoeken, maand-voor-maand-gids',
    metaDescription:
      'Maand-voor-maand-gids voor Fins Lapland, wanneer het noorderlicht het sterkst is, wanneer de sneeuw stabiliseert en welke weken de locals voor zichzelf boeken.',
    breadcrumb: 'Wanneer gaan',
    pageHero: {
      eyebrow: 'Maand voor maand',
      title: 'Wanneer Lapland bezoeken.',
      subtitle:
        'De juiste maand hangt af van de reis. Noorderlicht-first, ski-first, lange-verblijfwaarde, kerstpiek, elk heeft een eigen sweet spot. Hier is het redactionele maand-voor-maand-overzicht.',
    },
    authorNote:
      'Samengesteld op basis van rapporten van lokale partners in heel Fins Lapland.',
    pullQuote: {
      text:
        'De meeste noorderlichten boven Fins Lapland verschijnen tussen de avond en de vroege ochtenduren, en de lange, donkere maanden van de herfst tot het vroege voorjaar geven de beste kansen. Een heldere hemel en een beetje geduld tellen zwaarder dan de exacte datum.',
      attr: 'LaplandVibes, uit de noorderlichtlogboeken van onze partners in heel Fins Lapland',
    },
    months: [
      {
        name: 'September',
        pitch: 'Noorderlichtseizoen opent',
        body:
          'Lange donkere nachten beginnen. Er ligt nog geen sneeuw, dit is de "ruska"-periode wanneer de berken rood en goud kleuren. Het noorderlicht tekent zich af tegen kale grond, de kleuren zijn van alle maanden het meest gefotografeerd.',
        bestFor: ['Fotografen', 'Korte verblijven gericht op noorderlicht', 'Wandelen + noorderlicht-combo'],
        avoidIf: ['U kwam specifiek voor sneeuw'],
      },
      {
        name: 'Oktober',
        pitch: 'Stille schouder',
        body:
          'Eerste sneeuwbuien, maar de grond blijft zelden wit voor eind van de maand. Hotels hanteren schoudertarieven (-30% t.o.v. piek), het noorderlicht is actief, zeer weinig toeristen. Het goedkoopste noorderlichtvenster met volledige activiteiteninfrastructuur.',
        bestFor: ['Noorderlichtjagers met een budget', 'Aankomst lange verblijven vóór de piek'],
        avoidIf: ['U wilt garanties op skiën of sneeuwscooter'],
      },
      {
        name: 'November',
        pitch: 'Poolnacht begint, sneeuw stabiliseert',
        body:
          'Het koudste begin van een Lapland-winter. De poolnacht zet halverwege de maand in ten noorden van Sodankylä. De sneeuw begint eind november te blijven liggen, tegen het eind van de maand openen de meeste resorts en sneeuwhotels. Eind november is veruit de beste prijs-kwaliteit voor lange verblijven.',
        bestFor: ['Lange verblijven tegen -50% tarief', 'Terugkerende gasten die de kou kennen'],
        avoidIf: ['Eerste-keer-reizigers (sneeuw is wisselvallig)'],
      },
      {
        name: 'December',
        pitch: 'Kerstpiek',
        body:
          'Kerst tot Oud-en-Nieuw is piek-alles, pieksprijzen, piekvraag, piek-Kerstman-toerisme in Rovaniemi. Glasiglo’s verdrievoudigen in prijs, snow hotels volledig open. Noorderlicht nog actief maar het weer is vaak bewolkter.',
        bestFor: ['Gezinsreizen met kerstthema', 'Eerste-keer-gasten die gegarandeerde sneeuw willen'],
        avoidIf: ['Budgetgevoelig reizen', 'Verblijven gericht op noorderlicht'],
      },
      {
        name: 'Januari',
        pitch: 'De keuze van de locals',
        body:
          'De tweede helft van januari is de stille sweet spot, pieksprijzen zijn afgenomen, dagen lengen merkbaar, sneeuw is stabiel, noorderlicht het meest actief. De kerstdrukte is weg en de februari-schoolvakantiedrukte nog niet begonnen.',
        bestFor: ['Lange verblijven', 'Huwelijksreizen', 'Noorderlicht-fotografie'],
        avoidIf: ['U heeft warm weer in welke vorm dan ook nodig'],
      },
      {
        name: 'Februari',
        pitch: 'Sterkste noorderlichtmaand',
        body:
          'Half feb tot half maart is statistisch het sterkste noorderlichtvenster van het jaar, donkere hemel valt samen met actief zonneweer. Lange verblijven weer op pieksprijs door Europese schoolvakanties; boek 6 maanden vooruit.',
        bestFor: ['Glasiglo’s', 'Bucketlist-noorderlichtreizen'],
        avoidIf: ['Last-minute-planners'],
      },
      {
        name: 'Maart',
        pitch: 'Het licht keert terug',
        body:
          'Dagen lengen snel, eind maand heeft u 13 uur daglicht. Noorderlicht nog sterk in donkere ochtenden en late avonden. Lenteskiën op zuidgerichte fjelden. De meest fotogenieke skimaand.',
        bestFor: ['Ski-in lange verblijven', 'Iedereen die licht + noorderlicht wil'],
        avoidIf: ['Fotografen die voor de poolnachtsfeer kwamen'],
      },
      {
        name: 'April',
        pitch: 'Lentesneeuw + licht',
        body:
          'Sneeuw nog diep en skiën uitmuntend op de fjelden. Noorderlichtseizoen eindigt half april als nachten te licht worden. Eind april is weer schouder, tarieven dalen 30%, accommodaties nog open, zon boven de horizon voor 16+ uur.',
        bestFor: ['Lange ski-verblijven aan het eind van het seizoen', 'Langlaufen'],
        avoidIf: ['Reizen gericht op noorderlicht'],
      },
    ],
    bestForLabel: 'Beste voor',
    skipIfLabel: 'Sla over als',
    cheatKicker: 'Het spiekbriefje van de locals',
    cheatH2: 'Drie weken die de locals voor zichzelf boeken.',
    cheatP1:
      '<strong class="text-charcoal">Eind november (week 47–48).</strong> Sneeuw is net stabiel, poolnacht piekt, noorderlichtseizoen op volle activiteit. Lange-verblijftarieven 40–50% onder de piek. Sommige accommodaties zijn nog niet volledig open, controleer vóór het boeken.',
    cheatP2:
      '<strong class="text-charcoal">Tweede helft januari (week 3–4).</strong> Dé beste noorderlicht-vs-kosten-week van het seizoen. Kerstdrukte weg, februari-schoolvakantie nog niet begonnen, dagen lengen, sneeuw volledig vast. Dit is wanneer de redacteur op vakantie gaat.',
    cheatP3:
      '<strong class="text-charcoal">Eind april (week 16–17).</strong> Lente-ski-piek, zon boven de horizon 16u/dag, sneeuw nog diep op noordhellingen. Noorderlichtvenster is gesloten maar het licht alleen is de reis waard. Tarieven dalen 30% na Pasen.',
    marginLabel: 'Boekingstiming',
    marginBody:
      'Voor de piek in februari: boek 6 maanden vooruit. Eind januari: 3 maanden. Schouder (november, eind april): 6–8 weken volstaat. Kerst / Oud-en-Nieuw: minimaal 9 maanden, met reservedata, het piekaanbod verdwijnt in het voorjaar.',
    readGuide: 'Lees de boekingsgids',
    seeLong: 'Bekijk lange verblijven',
  },
  destinationPage: {
    metaTitleSuffix: 'Waar te verblijven | StayInLapland',
    pageHeroEyebrow: 'Lapland-bestemming',
    notFoundKicker: 'Pagina niet gevonden',
    notFoundTitle: 'Bestemming niet in de lijst.',
    notFoundBody: 'We behandelen momenteel Rovaniemi, Levi, Saariselkä, Inari en Ylläs.',
    backHome: 'Terug naar home',
    authorNoteFor: (n) => `De lange-verblijfsinvalshoek voor ${n}, geschreven en gecontroleerd met lokale partners.`,
    recommendedIn: (n) => `Aanbevolen in ${n}`,
    whereToStay: 'Waar u echt verblijft.',
    minStayLabel: 'Min. verblijf:',
    perNight: '/ nacht',
    checkRates: 'Tarieven bekijken',
    seeAll: 'Alles bekijken',
    liveAvailabilityIn: (n) => `Live beschikbaarheid in ${n} zoeken?`,
    networkLeadA: 'Ons netwerk rangschikt slechts 16 accommodaties. Trip.com toont al het overige dat deze winter opereert in ',
    networkLeadB: ', flexibele data, filter op voorziening, het volledige aanbod.',
    browseInDest: (n) => `Bekijk Trip.com, ${n}`,
    imageNote:
      'De beelden zijn illustratief: ze tonen het type verblijf en het landschap van de streek, niet de kamers van het huis zelf.',
    landscapeAlt: (n) => `Winterlandschap bij ${n}, Fins Lapland`,
    bucketLabels: {
      'long-stays': 'lange verblijven',
      'hotels': 'hotels',
      'glass-igloos': 'glasiglo’s',
      'wilderness': 'wildernis',
    },
  },
  affiliateDisclosure:
    'Sommige links op deze pagina zijn affiliate-links. Boekt u via deze links, dan verdienen wij een commissie, zonder extra kosten voor u. De accommodaties zijn gekozen op verdienste, niet op commissie.',
  langSwitchAria: { en: 'English', fi: 'Suomeksi', de: 'Auf Deutsch', ja: '日本語で', es: 'En español', 'pt-BR': 'Em português', 'zh-CN': '简体中文', ko: '한국어', fr: 'En français', it: 'In italiano', nl: 'In het Nederlands', sv: 'På svenska' },
  marginNoteDefault: 'Terzijde',
  comparison: {
    property: 'Accommodatie',
    verdict: 'Oordeel',
    nOutOf5: (n) => `${n} van de 5`,
  },
  editorsPick: {
    kicker: 'Keuze van de redactie',
    perNight: '/ nacht',
    note: 'Noot',
    cta: 'Tarieven bekijken & boeken',
  },
  propertyCard: {
    short: '1–3 nachten',
    medium: '3–6 nachten',
    long: '7+ nachten',
    nights: (n) => `${n} ${n === 1 ? 'nacht' : 'nachten'}`,
    minPrefix: 'Min.',
    perNight: '/ nacht',
    cta: 'Tarieven bekijken & boeken',
  },
  allCategoriesSummary: [
    { slug: 'long-stays', description: 'Week- en maandverhuur, villa\'s, designhutten, ski-appartementen.' },
    { slug: 'hotels', description: 'Boutique-, design- en klassieke Lapland-hotels voor korte verblijven.' },
    { slug: 'glass-igloos', description: 'Het iconische Lapland-formaat, vier resorts die de naam verdienen.' },
    { slug: 'wilderness', description: 'Voorbij de laatste weg, twee retreats voor serieuze reizigers.' },
  ],
  hotelsData: [
    {
      name: 'Arctic TreeHouse Resort',
      location: 'Rovaniemi',
      highlight: 'Design hotel · suites aan de bosrand',
      description:
        'Een design hotel met 70 suites, weggewerkt in het dennenbos achter Santa Park in Rovaniemi. Elke suite heeft een panoramische glasvoorzijde naar de bomen en een Noords-minimalistisch interieur. Sterk eigen restaurant, Rakas, met lokale producten, en het saunadorp van het resort staat open voor alle gasten.',
    },
    {
      name: 'Arctic Light Hotel',
      location: 'Centrum Rovaniemi',
      highlight: 'Boutique 57 kamers · functionalistisch gebouw uit 1939',
      description:
        'Een boutique-hotel met 57 kamers in een functionalistisch gebouw uit 1939, ooit het kantoor van de lokale krant, herbouwd nadat de Lapland-oorlog van 1944 Rovaniemi verwoestte. Elke verdieping heeft een eigen interieurthema; de daksuite heeft een eigen sauna. Het architectonisch serieuste hotel van de stad.',
    },
    {
      name: 'Levi Spirit',
      location: 'Levi',
      highlight: 'Designvilla’s · spa · ski-in/out',
      description:
        'Hoogwaardig villahotel aan de voet van de Levi-fjeld. Privé-buitenhottubs, een sauna in elke villa, ski-in/out-toegang tot de liften en een volledige spa. Gebouwd voor volwassenen, geen kinderprogramma, alleen rustige kamers en goed eten.',
    },
    {
      name: 'Lapland Hotels Saaga',
      location: 'Ylläsjärvi (Ylläs)',
      highlight: 'Ylläs-klassieker · ski-in/out · spa en zwembad',
      description:
        'Het klassieke hotel aan de rustigere Ylläsjärvi-kant van de Ylläs, op zo’n honderd meter van de Iso-Ylläs-lift, ski-in/ski-out in de winter. Zwembad, spa en fitness zijn inbegrepen bij standard- en superiorkamers; de appartementen hebben bovendien een privésauna. Buffetrestaurant Biegga kijkt uit over het fjell en het meer Ylläsjärvi.',
    },
    {
      name: 'Star Arctic Hotel',
      location: 'Saariselkä',
      highlight: 'Heuveltop · donkerste hemel · mix suite & glashut',
      description:
        'Een hybride accommodatie, klassieke hotelkamers plus hutten met glazen dak op het hoogste punt boven Saariselkä. Vrijwel geen lichtvervuiling. De hotelkamers krijgen hetzelfde heuveltopuitzicht door een groot raam en zijn zo’n 40% goedkoper dan de hutten.',
    },
  ],
  longStaysData: [
    {
      name: 'Arctic TreeHouse Resort, lang verblijf',
      location: 'Rovaniemi',
      highlight: 'Designsuites · weektarieven · saunadorp',
      description:
        'Designsuites met uitzicht op het dennenbos aan de rand van Santa Park. Het weektarief daalt 25% t.o.v. het nachttarief. Elke suite heeft een kitchenette, panoramische glasvoorzijde en toegang tot het saunadorp van het resort, een van de weinige manieren om een echt lang verblijf in Rovaniemi te doen zonder een kale hut te huren.',
    },
    {
      name: 'Levi Residences, penthouse-suites',
      location: 'Dorp Levi',
      highlight: '2 slaapkamers · ski-in · privésauna · weektarieven',
      description:
        'Tweekamerappartementen aan de voet van de Levi-fjeld, op loopafstand van de liften en het dorp. Elke unit heeft een eigen houtgestookte sauna, een echte keuken en een minimum van vier nachten van december tot maart. De keuze voor gezinnen die een week skiën zonder de stedelijke voorzieningen op te geven.',
    },
    {
      name: 'Lapland Hotels Ounasvaara Chalets',
      location: 'Rovaniemi · Ounasvaara-fjeld',
      highlight: 'Ski-in/out · te voet naar centrum Rovaniemi',
      description:
        'Volledig uitgeruste chalets op de Ounasvaara-fjeld. In de winter ski-in/ski-out, tien minuten lopen naar het centrum van Rovaniemi. De flexibelste lange-verblijfsoptie als u stedelijk gemak met arctische ochtenden wilt combineren.',
    },
    {
      name: "Lapland Hotels Bear's Lodge",
      location: 'Nationaal park Pyhä-Luosto',
      highlight: 'Nationaal park voor de deur · privésauna · gezinnen',
      description:
        'Traditionele houten hutten naast het nationale park Pyhä-Luosto. Volledige keukens, eigen houtgestookte sauna’s, toegang tot het meer. Het juiste antwoord voor een gezinsverblijf van meerdere weken waarin de dagen draaien om sneeuwschoenwandelen en langlaufloipes, niet om bezienswaardigheden.',
    },
    {
      name: 'Wilderness Hotel Nangu, villa’s aan het meer',
      location: 'Zuidoever Inarimeer',
      highlight: 'Samische activiteiten · uitzicht op het meer · lange-verblijftarieven',
      description:
        'Villa’s aan het Inarimeer met kamers gericht op het water. Samisch begeleid ijsvissen, door rangers begeleid wildernisskiën, het Samische museum van Inari op twintig minuten. Lange-verblijftarieven vanaf vier nachten, het meest culturele van de lange verblijven aan een meer.',
    },
  ],
  glassIgloosData: [
    {
      name: 'Kakslauttanen Arctic Resort',
      location: 'Saariselkä',
      highlight: 'De originele glasiglo · 1973 · Kelo-Glass beschikbaar',
      description:
        'Het resort dat de moderne glasiglo uitvond in 1973. Kies Kelo-Glass boven de klassieke Glass Igloos, Kelo combineert het panoramische glazen dak met een verwarmde houten structuur, een kitchenette en een open haard. Een minimum van twee nachten haalt er het meeste uit.',
    },
    {
      name: 'Levin Iglut',
      location: 'Levi-fjeld',
      highlight: 'Gemotoriseerde noorderlichtbedden · positie op de fjeld',
      description:
        'Premium glasiglo’s op de Levi-fjeld, ruim boven de lichtkoepel van het dorp. Gemotoriseerde bedden draaien naar de noorderlichtboog toe, elke unit heeft een eigen kitchenette, de best uitgewerkte engineering van de vijf Finse resorts.',
    },
    {
      name: 'Noorderlichtdorp (Aurora Village)',
      location: 'Ivalo',
      highlight: 'Wildernislocatie nabij Ivalo · hutten ver uit elkaar',
      description:
        'Glasdak-hutten in ongerept bos nabij Ivalo. Hutten staan ver uit elkaar voor privacy en de omgeving is donker genoeg dat noorderlicht door dunne wolken doorkomt. De glasiglo-accommodatie op deze site met het meest afgelegen gevoel.',
    },
    {
      name: 'Noorderlichtpiramides (Aurora Pyramids)',
      location: 'Inarimeer',
      highlight: 'Piramidehutten · meerreflecties',
      description:
        'Piramidevormige hutten met glasvoorzijde aan de oever van het Inarimeer. Het bevroren meer weerspiegelt de noorderlichtboog zodra de wind onder 3 m/s zakt, een kijkgeometrie die geen enkele andere Finse accommodatie biedt.',
    },
  ],
  wildernessData: [
    {
      name: 'Iso-Syöte Eagle View Suites',
      location: 'Iso-Syöte (Pudasjärvi, net ten zuiden van Lapland)',
      highlight: 'Boven de boomgrens · bereikbaar vanuit Oulu',
      description:
        'Pijnboomsuites op 432 m op de Iso-Syöte-fjeld, de zuidelijkste echte fjeld in Finland. Noorderlicht-kijken boven de boomgrens zonder de lange vlucht naar Saariselkä, en 90 minuten van vliegveld Oulu.',
    },
    {
      name: 'Wilderness Hotel Muotka',
      location: 'Regio Saariselkä',
      highlight: 'Noorderlicht-wekservice · hotelcomfort',
      description:
        'Noorderlichthutten met glaswanden gericht op de omliggende fjelden. On-site noorderlicht-jagers wekken gasten als de activiteit stijgt, nuttig omdat de meeste noorderlichtvensters ruim na middernacht vallen. Hotelcomfort op een wildernislocatie.',
    },
  ],
  destinationsData: [
    {
      slug: 'rovaniemi',
      pitch:
        'De hoofdstad van Fins Lapland, de enige Lapland-stad met een echte winterse restaurantscene, een werkende luchthavenhub en een designcultuur het hele jaar door.',
      longStayAngle:
        'De juiste basis als uw lange verblijf doordeweeks remote werken en weekendtrips naar het noorden omvat, snelle wifi, directe vluchten op Stockholm, restaurants ook in het tussenseizoen open.',
    },
    {
      slug: 'levi',
      pitch:
        'Het grootste skigebied van Finland gemeten in liftkaartverkoop, met 25 000 bedden, ski-in/out-appartementen en een echte dorpsstraat.',
      longStayAngle:
        'Logica van het lange verblijf: ski-in/out-appartementen worden van december tot april per week verhuurd. Het liftsysteem draait dagelijks, de dorpsrestaurants openen elke avond, u kunt hier een echt seizoen doen.',
    },
    {
      slug: 'saariselka',
      pitch:
        'Hogere breedtegraad dan Rovaniemi, hardere sneeuw, donkerdere hemel. Het Lapland-dorp dat de winter het serieust neemt.',
      longStayAngle:
        'Logica van het lange verblijf: huur een hut op een heuveltop en schrijf een boek. Weinig afleiding. Uitstekend langlaufnetwerk, husky-kennels in de buurt, geen stadse afleiding.',
    },
    {
      slug: 'inari',
      pitch: 'Samische culturele hoofdstad, Inarimeer (op twee na grootste meer van Finland), onze noordelijkste lange-verblijfbasis.',
      longStayAngle:
        'Logica van het lange verblijf: het meer zelf is de activiteit. Elke ochtend ijsvissen, langlaufen over het bevroren meer, het Samische museum van Inari en het cultuurcentrum SIIDA voor de deur.',
    },
    {
      slug: 'yllas',
      pitch:
        'Rustiger dan Levi, langer skiseizoen, zo’n 300 km geprepareerde langlaufloipes door een nationaal park.',
      longStayAngle:
        'Logica van het lange verblijf: het langlaufnetwerk is de trekker. Hutverhuur loopt hier per week van eind november tot begin mei. De beste lange-verblijfskeuze voor skiërs die geen alpine met liften elke dag nodig hebben.',
    },
  ],
};
