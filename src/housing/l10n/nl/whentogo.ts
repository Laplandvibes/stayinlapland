/**
 * Hollanti (nl) · milloin-sivu (/when-to-go). Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/whentogo.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import { whenToGoSources, type WhenToGoCopy } from '../../whentogo';
import common from './common';

const copy: WhenToGoCopy = {
  metaTitle: 'Beste reistijd voor Lapland: maand voor maand',
  metaDescription:
    'Wanneer naar Fins Lapland? Maand voor maand: weer, temperatuur, daglicht, sneeuw, noorderlicht, middernachtzon, herfstkleuren en muggen, met officiële cijfers.',
  breadcrumb: 'Wanneer gaan',
  hero: {
    eyebrow: 'Van januari tot december',
    title: 'Lapland, maand voor maand.',
    subtitle:
      'Hoe elke maand eruitziet qua weer, licht en sneeuw, wat mensen dan doen en wat het betekent als u hier woont. Cijfers van het Fins Meteorologisch Instituut en Statistics Finland.',
  },
  intro: [
    'Het jaar in Lapland bestaat uit twee verschillende werelden. Van november tot april zijn er sneeuw, vorst en korte dagen; van mei tot september is er licht, dat in het uiterste noorden helemaal niet ondergaat. Daartussen liggen twee korte fasen die de bewoners goed kennen: de dooi in het voorjaar en de herfstkleuren, ruska.',
    'Hieronder staat eerst het hele jaar in één tabel, daarna maand voor maand. De cijfers zijn langjarige gemiddelden: een afzonderlijk jaar kan duidelijk afwijken, en volgens Metsähallitus komt blijvende sneeuw nu vaak later dan het statistische gemiddelde.',
  ],
  tableKicker: 'Het hele jaar',
  tableH2: 'Het jaar in Lapland in cijfers.',
  table: {
    caption: 'Daglengte in Rovaniemi op de 15e, gemiddelde temperatuur in Rovaniemi en Sodankylä, sneeuwdikte in Rovaniemi op de 15e',
    head: ['Maand', 'Daglengte', 'Gemiddelde temperatuur (Rovaniemi / Sodankylä)', 'Sneeuw (Rovaniemi)', 'Wat er gebeurt'],
    rows: [
      ['Januari', '4 u 15 min', '−10,3 / −12,5 °C', '47 cm', 'Koudste maand'],
      ['Februari', '8 u 10 min', '−10,3 / −12,1 °C', '66 cm', 'Wintervakantie'],
      ['Maart', '11 u 37 min', '−5,6 / −7,1 °C', '77 cm', 'Noorderlicht, diepste sneeuw'],
      ['April', '15 u 25 min', '0,1 / −0,8 °C', '64 cm', 'Sneeuwkorst'],
      ['Mei', '19 u 24 min', '6,5 / 5,6 °C', '–', 'Sneeuw smelt, de dooi'],
      ['Juni', '24 u (geen zonsondergang)', '12,5 / 11,9 °C', '–', 'Middernachtzon'],
      ['Juli', '21 u 29 min', '15,6 / 15,0 °C', '–', 'Warmste maand, muggen'],
      ['Augustus', '17 u 02 min', '13,1 / 12,4 °C', '–', 'Donkere nachten keren terug'],
      ['September', '13 u 13 min', '7,7 / 7,0 °C', '–', 'Herfstkleuren'],
      ['Oktober', '9 u 37 min', '0,8 / 0,0 °C', '–', 'Sneeuw op de fjelden'],
      ['November', '5 u 45 min', '−4,4 / −5,8 °C', '9 cm', 'Poolnacht in het uiterste noorden'],
      ['December', '2 u 27 min', '−7,7 / −9,6 °C', '28 cm', 'Kortste dag 2 u 14 min'],
    ],
    foot: 'Temperaturen en sneeuw: Fins Meteorologisch Instituut, referentieperiode 1991–2020; de sneeuwdikte is de mediaan. Daglengte: timeanddate.com voor 2027 (secundaire bron; de jaren verschillen ongeveer een dag). In juni gaat de zon in Rovaniemi van 7 juni tot 6 juli niet onder.',
  },
  months: [
    {
      name: 'Januari',
      pitch: 'De koudste maand, het licht keert terug',
      body: 'Januari is de koudste maand in Sodankylä en Utsjoki, met gemiddeld −12,5 en −13,3 °C; Rovaniemi komt gemiddeld op −10,3. In Rovaniemi neemt de dag in de loop van de maand toe van 2 u 44 min tot meer dan zes uur, en in Utsjoki komt de zon na de poolnacht op 17 januari weer op. De sneeuw ligt gemiddeld ongeveer een halve meter diep.',
      good: ['Skiën en wintersport op vaste sneeuw', 'Arctic Lapland Rally in Rovaniemi, 28–30 januari 2027'],
      note: ['Rendieren op de weg: van november tot januari is de piekperiode voor aanrijdingen met rendieren', 'De hotels in Rovaniemi waren in januari 2025 nog 86 % vol'],
    },
    {
      name: 'Februari',
      pitch: 'Sneeuw en wintervakanties',
      body: 'Samen met december is februari de drukste maand van het jaar: de bezetting in Lapland was 77,6 % in februari 2025, maar de gemiddelde kamerprijs bleef onder die van december. De sneeuw in Rovaniemi is op 15 februari gemiddeld 66 cm dik, en de dag duurt al acht uur.',
      good: ['Noorderlicht aan het einde van de winter: het Fins Meteorologisch Instituut noemt het einde van de winter en het begin van de herfst statistisch de beste tijden', 'Skiën en lange dagtochten'],
      note: ['Boek vroeg: februari is een van de drukste maanden', 'Scholen in de regio Helsinki en in Turku hebben hun skivakantie in week 8 (22–26 februari 2027)'],
    },
    {
      name: 'Maart',
      pitch: 'Noorderlicht en de diepste sneeuw',
      body: 'Het Fins Meteorologisch Instituut beveelt maart aan om noorderlicht te zien, omdat het voorjaar gemiddeld minder bewolkt is. De sneeuw is het diepst, gemiddeld 77 cm in Rovaniemi, en de dag wordt langer dan 13 uur. Sodankylä krijgt in maart 141 uur zonneschijn tegenover 59 in februari.',
      good: ['Noorderlicht', 'Skiën bij zonnig weer', 'Pasen, 26–29 maart 2027'],
      note: ['Scholen in Rovaniemi hebben hun skivakantie in week 10 (8–12 maart 2027), en Pasen brengt reizigers uit eigen land', 'Winterbanden zijn verplicht tot 31 maart als de omstandigheden daarom vragen'],
    },
    {
      name: 'April',
      pitch: 'Sneeuwkorst en lange avonden',
      body: 'Er ligt nog veel sneeuw, gemiddeld 64 cm in Rovaniemi op 15 april, en volgens Metsähallitus duren de omstandigheden met sneeuwkorst van half april tot wel half mei. Noorderlicht is vroeg in de maand nog te zien: de nachten in Rovaniemi blijven donker tot ongeveer 21 april, in Utsjoki tot ongeveer 10 april. De gemiddelde kamerprijs in Lapland was € 139–141 in april tegenover € 200–225 in maart (2024–2025).',
      good: ['Skiën op de korst en fjelltochten', 'Voorjaarszon: op 20 april is de dag in Rovaniemi meer dan 16 uur lang'],
      note: ['Sommige skigebieden sluiten in april: het seizoen van Ounasvaara eindigt op 17 april 2027, terwijl Ylläs verwacht begin mei te sluiten', 'Seizoensbanen eindigen: in Saariselkä zijn de laatste werkdagen van de winter half april (Yle)'],
    },
    {
      name: 'Mei',
      pitch: 'De sneeuw smelt, de rustigste maand',
      body: 'Blijvende sneeuw smelt rond Rovaniemi doorgaans tussen 30 april en 10 mei en in fjell-Lapland tussen 10 en 20 mei. Het terrein ontdooit: te nat om te skiën en te sneeuwrijk om te wandelen. Mei is de rustigste maand voor het toerisme, ongeveer 65.000 overnachtingen tegenover 430.000–620.000 in de wintermaanden, en veel bedrijven nemen een pauze. In het uiterste noorden begint de middernachtzon al: in Nuorgam op 16 mei.',
      good: ['Een woning zoeken in Rovaniemi: volgens DAS komen in verhouding tot het aantal aanvragers de meeste woningen vrij in het voorjaar en het begin van de zomer', 'Rustige landschappen en voorjaarslicht'],
      note: ['Veel toeristische diensten zijn gesloten of hebben beperkte openingstijden', 'Het hoogwater in het voorjaar valt ergens tussen half mei en half juni'],
    },
    {
      name: 'Juni',
      pitch: 'De middernachtzon',
      body: 'De zon gaat in Rovaniemi van 7 juni tot 6 juli niet onder, in Sodankylä van 31 mei tot 13 juli en in Utsjoki van 18 mei tot 27 juli. De gemiddelde temperatuur in Rovaniemi is 12,5 °C. Het wandelseizoen begint zodra de sneeuw van de fjelden verdwijnt; bij Kilpisjärvi kan er in juni nog sneeuw liggen.',
      good: ['Midnight Sun Film Festival in Sodankylä, 16–20 juni 2027', 'Midzomer, 25–26 juni 2027'],
      note: ['Het muggenseizoen, räkkä, begint meestal rond Midzomer', 'Verduisterende gordijnen voor de slaapkamer: een lichte nacht is mooi, maar niet om in te slapen'],
    },
    {
      name: 'Juli',
      pitch: 'De warmste maand, de favoriet van de Finnen',
      body: 'Juli is de warmste maand van het jaar: gemiddeld 15,6 °C in Rovaniemi, met dagmaxima rond 20. Het is ook de populairste maand in Lapland voor Finse reizigers, en juni tot augustus zijn de goedkoopste maanden: de gemiddelde kamer in de accommodaties in Lapland kostte ongeveer € 96–102 (2024–2025). Moltebessen rijpen van half juli tot begin augustus.',
      good: ['Wandelen en tochten door de natuur', 'Bessen plukken: moltebessen vanaf half juli, blauwe bessen vanaf eind juli'],
      note: ['De muggen zijn op hun ergst en blijven tot begin of half augustus', 'Juli is ook de natste maand, 81 mm in Rovaniemi'],
    },
    {
      name: 'Augustus',
      pitch: 'Donkere nachten keren terug',
      body: 'De nachten worden in Rovaniemi rond 24 augustus weer donker, en volgens Visit Finland is het noorderlicht in Lapland van eind augustus tot april te zien. De eerste sneeuw valt meestal in augustus of september op de toppen van de fjelden. In Rovaniemi begint de school half augustus (op 12 augustus in 2026), en dan bereikt de woningzoektocht van studenten een hoogtepunt.',
      good: ['Het seizoen van blauwe bessen en wandelen gaat door', 'Simerock in Rovaniemi, 13–14 augustus 2027'],
      note: ['In Rovaniemi heeft DAS in augustus en september de meeste aanvragers, en vrijgekomen woningen worden snel verhuurd', 'De werving voor het winterseizoen versnelt vanaf augustus (Yle)'],
    },
    {
      name: 'September',
      pitch: 'Herfstkleuren en herfstnoorderlicht',
      body: 'Ruska, de herfstkleuren, bereikt Noord-Finland in de eerste helft van september: in week 36–38 bij Kilpisjärvi, Pallas-Ylläs en Utsjoki, in week 37–39 in het nationaal park Urho Kekkonen. Rond de herfstequinox zijn magnetische stormen gemiddeld frequenter, en op de breedtegraad van Sodankylä verschijnt het noorderlicht gemiddeld op elke tweede heldere, donkere nacht. September is de tweede piek voor Finse reizigers.',
      good: ['Wandelingen in herfstkleuren', 'Noorderlicht vóór de winter', 'Vossenbessen vanaf begin september'],
      note: ['In september kan het op de fjelden al sneeuwen', 'In de ruska-weken zitten de fjellgebieden vol reizigers uit eigen land'],
    },
    {
      name: 'Oktober',
      pitch: 'De sneeuw bereikt de fjelden',
      body: 'In de referentieperiode 1991–2020 van het Fins Meteorologisch Instituut begon blijvende sneeuw in fjell-Lapland tussen 17 en 27 oktober en in Sodankylä op 29 oktober. Volgens Metsähallitus ontstaat ze nu vaak pas eind november, soms in december. In de herfst van 2026 gingen de pistes van Levi al begin oktober open. Oktober is na mei de op één na rustigste maand voor accommodaties.',
      good: ['Herfstnoorderlicht vóór de sneeuw', 'Het folkfestival Jutajaiset in Rovaniemi in oktober'],
      note: ['In Rovaniemi eindigen veel contracten voor bepaalde tijd eind oktober omdat woningen voor de winter aan toeristen worden verhuurd (Yle, 27 juli 2026)', 'In 2026 viel de herfstvakantie in week 42 (12–16 oktober), bijvoorbeeld in Rovaniemi en Helsinki'],
    },
    {
      name: 'November',
      pitch: 'In het uiterste noorden begint de poolnacht',
      body: 'In Utsjoki begint de poolnacht op 26 november en duurt gemiddeld 51 dagen. In Rovaniemi komt de zon elke dag op, maar op 15 november duurt de dag net geen zes uur. De skigebieden gaan open: in het seizoen 2026–2027 Ounasvaara op 11 november, Ylläs op 21 november en Luosto met 28 november als streefdatum.',
      good: ['De slaloms van de wereldbeker in Levi half november', 'Winter vóór de kerstprijzen: een kamer in de accommodaties in Lapland kostte gemiddeld € 192–209 in november en € 285–313 in december (2024–2025)'],
      note: ['Rovaniemi is in november niet rustig: hotelbezetting 72–82 % (2023–2025)', 'Winterbanden vanaf 1 november als de omstandigheden daarom vragen. Arctic SnowHotel opent pas in december'],
    },
    {
      name: 'December',
      pitch: 'Kerstmis, de drukste maand',
      body: 'December is de drukste en duurste toerismemaand van Lapland: 622.449 overnachtingen en een gemiddelde kamerprijs van € 313 in december 2025. De kortste dag in Rovaniemi duurt 2 u 14 min, maar de zon komt wel op; de poolnacht duurt in Sodankylä maar vier dagen vlak voor Kerstmis en in Kittilä van 14 tot 29 december. In Sodankylä lag er op elke Kerstavond sinds het begin van de metingen sneeuw.',
      good: ['Kerstmis: Santa Claus Village is elke dag open', 'Sneeuwhotels: Arctic SnowHotel opent op 15 december 2026'],
      note: ['Boek ruim van tevoren: de hotels in Rovaniemi waren in december 93,5–97 % vol (2023–2025)', 'Het late najaar en het begin van de winter zijn volgens het Fins Meteorologisch Instituut de meest bewolkte tijd van het jaar, waardoor noorderlicht moeilijker te zien is'],
    },
  ],
  goodLabel: 'Goed voor',
  noteLabel: 'Houd rekening met',
  monthsNav: 'Maanden',
  living: {
    kicker: 'Als u hier woont',
    h2: 'Wat het jaar betekent voor het wonen.',
    items: [
      '<strong>Een huurwoning in Rovaniemi:</strong> volgens DAS komen in verhouding tot het aantal aanvragers de meeste woningen vrij in het voorjaar en het begin van de zomer, en zijn er in augustus en september de meeste aanvragers. Contracten voor bepaalde tijd eindigen eind oktober omdat woningen voor de winter aan toeristen worden verhuurd (Yle, 27 juli 2026).',
      '<strong>Seizoenswerk:</strong> de werving voor de winter versnelt vanaf augustus (Yle), en de skigebieden openen in oktober of november en sluiten in april of mei, afhankelijk van het skigebied.',
      '<strong>Autorijden:</strong> winterbanden zijn verplicht van 1 november tot 31 maart als de omstandigheden daarom vragen, en spijkerbanden mogen op andere momenten worden gebruikt als de omstandigheden erom vragen (Traficom). Aanrijdingen met rendieren pieken van november tot januari (Vereniging van rendierhouders).',
      '<strong>Licht:</strong> verduisterende gordijnen en een muggennet in de zomer, een lichttherapielamp en een reflector in de winter. In Rovaniemi is de poolnacht slechts een naam: de zon komt elke dag op.',
    ],
  },
  links: [
    { label: 'Huurwoningen plaats voor plaats', href: '/rentals' },
    { label: 'Verhuizen naar Lapland', href: '/moving-to-lapland' },
    { label: 'Huisvesting voor seizoenswerkers', href: '/seasonal-worker-housing' },
    { label: 'Een maand in Lapland', href: '/long-stays' },
  ],
  faqKicker: 'Meest gesteld',
  faqH2: 'Vragen over het jaar in Lapland.',
  faqs: [
    {
      q: 'Wanneer ziet u het noorderlicht in Lapland?',
      a: 'Zodra de nachten donker zijn, van eind augustus tot april. Volgens het Fins Meteorologisch Instituut zijn magnetische stormen in de herfst en het voorjaar gemiddeld frequenter dan in de zomer en de winter, en het beveelt maart aan omdat het voorjaar gemiddeld minder bewolkt is. Op de breedtegraad van Sodankylä verschijnt het gemiddeld op elke tweede heldere, donkere nacht.',
    },
    {
      q: 'Is er een poolnacht in Rovaniemi?',
      a: 'Nee. In Rovaniemi komt de zon elke dag op, en de kortste dag duurt 2 u 14 min. De poolnacht duurt vier dagen in Sodankylä, 16 dagen in Kittilä, ongeveer vijf weken in Ivalo en gemiddeld 51 dagen in Utsjoki.',
    },
    {
      q: 'Wanneer ligt er sneeuw in Lapland?',
      a: 'In de referentieperiode 1991–2020 begon blijvende sneeuw eind oktober in fjell-Lapland en begin november rond Rovaniemi, maar volgens Metsähallitus ontstaat ze nu vaak pas eind november. De sneeuw ligt het diepst in maart en begin april en smelt rond Rovaniemi doorgaans tussen 30 april en 10 mei.',
    },
    {
      q: 'Wanneer is het muggenseizoen in Lapland?',
      a: 'Volgens Metsähallitus begint het muggenseizoen, räkkä, meestal rond Midzomer en duurt het tot begin of half augustus.',
    },
  ],
  authorNote:
    'Temperaturen, sneeuw en noorderlicht van het Fins Meteorologisch Instituut, de kalender van de natuur van Metsähallitus, maandelijkse toerismecijfers van Statistics Finland, vakanties van het Finse nationale agentschap voor onderwijs, evenementen van de organisatoren. Gecontroleerd op 15 november 2026.',
  sources: whenToGoSources(common.whenToGoSourceLabels),
};

export default copy;
