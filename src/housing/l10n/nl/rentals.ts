/**
 * Hollanti (nl) · rentals. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
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
  metaTitle: 'Huurwoning in Lapland: Rovaniemi, Levi, Kemi–Tornio',
  metaDescription:
    'Langdurig huren in Fins Lapland, van Rovaniemi en Kemi–Tornio tot Levi en Inari: huur per m² (Statistics Finland), waarborgsom en de huurtoeslag van Kela.',
  breadcrumb: 'Huurwoningen',
  hero: {
    eyebrow: 'Huren in Lapland',
    title: 'Een woning huren in Lapland.',
    subtitle:
      'Waar u een huurwoning vindt, wat die kost en hoeveel Kela vergoedt. Plaats voor plaats.',
  },
  authorNote:
    'Huren per m²: huurstatistiek van Statistics Finland, vrije-sectorhuurwoningen, juli–september 2026. De gemeentelijke woningbedrijven zijn op 15 november 2026 gecontroleerd op de eigen sites van de gemeenten en bedrijven.',
  intro: [
    'In Lapland komt een huurwoning uit een van drie bronnen: het woningbedrijf van de gemeente zelf, de landelijke portalen of lokale groepen. Begin bij de gemeente. Haar bedrijven bezitten honderden woningen, bijvoorbeeld ruim 300 in Keminmaa, ongeveer 720 in Sodankylä, 560 in Kemijärvi en meer dan 500 in Inari, en u kunt zich aanmelden ook als er nu niets vrij is.',
    'De prijs hangt af van waar u gaat wonen. In Rovaniemi kost een studio van 30 m² gemiddeld ongeveer € 560 per maand, elders in Lapland minder. In de fjelddorpen volgt de huur het seizoen, dus vraag voor de winter eerst uw werkgever naar personeelshuisvesting.',
  ],
  sections: [
    {
      id: 'towns',
      kicker: 'Waar de woningen zijn',
      h2: 'Plaats voor plaats.',
      lead: 'Elke plaats heeft een eigen pagina: het gemeentelijke woningbedrijf en hoe u zich aanmeldt, het huurniveau en het plafond van Kela. Personeelshuisvesting in Ylläs staat op de pagina voor seizoenswerkers.',
      band: true,
      cards: [
        {
          title: 'Rovaniemi',
          image: { src: '/images/housing-rovaniemi-card-talvikatu.webp', alt: 'Flatgebouwen en wandelaars in een besneeuwde straat in Rovaniemi in januari' },
          body:
            'De pagina van de stad zelf verwijst naar de verhuurders KAS asunnot, M2-Kodit, Tarveasunnot, Avara en Lumo en naar de zoekdiensten Oikotie, Vuokraovi en Qasa. Studenten melden zich aan bij de stichting Domus Arctica DAS (ongeveer 1.700 woningen, waarvan 700 studio’s); jongeren onder de 30 bij NAL Rovaniemi. Een aanvraag bij DAS is drie maanden geldig, en nieuwe studenten hebben in augustus en september voorrang.',
          href: '/rentals/rovaniemi',
          linkLabel: 'Huren in Rovaniemi',
        },
        {
          title: 'Kemi, Keminmaa en Tornio',
          image: { src: '/images/housing-kemi-card-kaupungintalo.webp', alt: 'Het stadhuis van Kemi op een besneeuwde ochtend in januari' },
          body:
            'De gemeentelijke woningen van Kemi worden beheerd door Kiinteistö Oy Itätuuli, de grootste verhuurder van huurwoningen in de stad, met woningen binnen vijf kilometer van het centrum. Keminmaan Vuokra-asunnot Oy heeft ruim 300 woningen, en elk bedrijf heeft een eigen onlineaanvraag. In Tornio worden de woningen van de stad beheerd door Tornion Krunni Oy (Tornion Vuokra-asunnot Oy).',
          href: '/rentals/kemi-tornio',
          linkLabel: 'Huren in Kemi, Tornio en Keminmaa',
        },
        {
          title: 'Kemijärvi',
          image: { src: '/images/housing-kemijarvi-card-kerrostalo.webp', alt: 'Een flatgebouw en een oude den in Kemijärvi op een juli-avond' },
          body:
            'De twee vastgoedbedrijven van de stad bezitten 560 huurwoningen, en de begroting streeft ernaar dat 80–85 procent daarvan verhuurd is, dus er staan echt woningen leeg. Een aanvraag is vier maanden geldig. De rijtjeshuizen van Vuostimo liggen 14 km van Pyhätunturi.',
          href: '/rentals/kemijarvi',
          linkLabel: 'Huren in Kemijärvi',
        },
        {
          title: 'Sodankylä',
          image: { src: '/images/housing-sodankyla-jaamerentie.webp', alt: 'Jäämerentie, de hoofdstraat van het dorp Sodankylä, in september' },
          body:
            'Asentopuulaaki Oy verhuurt de ongeveer 720 woningen van de gemeente, en de woningzoeker van het bedrijf toont welke woningen op dat moment vrij zijn of binnenkort vrijkomen. Oudere gebouwen worden verhuurd voor ongeveer € 9–12,50 per m², en Käpyriihi, opgeleverd in 2025, voor € 18.',
          href: '/rentals/sodankyla',
          linkLabel: 'Huren in Sodankylä',
        },
        {
          title: 'Kittilä en Levi',
          image: { src: '/images/housing-kittila-levi-card-kyla.webp', alt: 'Het dorp Levi vanaf de top van de Levi-fjell in november, met een meer en fjelden erachter' },
          body:
            'Kittilän Vuokratalot Oy verhuurt de eigen huurwoningen van de gemeente; het kantoor zit op de begane grond van het gemeentehuis (Valtatie 15). De aanvraag dient u online in op de website van het bedrijf. De vakantieappartementen in Levi gaan vooral van mei tot november op maandhuur; in de winter wordt dezelfde woning per week verhuurd.',
          href: '/rentals/kittila-levi',
          linkLabel: 'Huren in Kittilä en Levi',
        },
        {
          title: 'Inari, Ivalo en Saariselkä',
          image: { src: '/images/housing-ivalo-joki.webp', alt: 'Ivalo gezien over de rivier Ivalojoki op een zomeravond' },
          body:
            'Inarin Vuokra-asunnot Oy heeft meer dan 500 woningen in Ivalo, Inari, Saariselkä, Nellim en Sevettijärvi. De pagina van de gemeente noemt ook de particuliere verhuurders (Bilto, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg, Uni Kodit) en de Facebookgroep voor huurwoningen in Sodankylä–Inari–Utsjoki.',
          href: '/rentals/ivalo-inari',
          linkLabel: 'Huren in Ivalo en Inari',
        },
      ],
    },
    {
      id: 'portals',
      kicker: 'Portalen en groepen',
      h2: 'Dezelfde kanalen als in de rest van Finland.',
      bullets: [
        '<a href="https://asunnot.oikotie.fi/vuokra-asunnot/rovaniemi" target="_blank" rel="noopener">Oikotie</a>: landelijk. Filter op gemeente, niet alleen op dorp.',
        '<a href="https://www.vuokraovi.com/vuokra-asunnot/rovaniemi" target="_blank" rel="noopener">Vuokraovi</a>: uitsluitend huurwoningen.',
        '<a href="https://qasa.fi" target="_blank" rel="noopener">Qasa</a>: genoemd door de stad Rovaniemi; het contract wordt op het platform elektronisch ondertekend.',
        '<a href="https://www.tori.fi" target="_blank" rel="noopener">Tori</a>: een advertentiesite waar ook huurwoningen op staan. Lees hieronder wat u moet controleren voordat u betaalt.',
        'Facebookgroepen: woningzoekers in Levi, Kemi–Keminmaa en Sodankylä–Inari–Utsjoki. Het snelste kanaal in de fjelddorpen, maar niemand staat garant voor de advertenties.',
      ],
    },
    {
      id: 'prices',
      kicker: 'Wat huur kost',
      h2: 'Per vierkante meter, niet op gevoel.',
      lead:
        'Statistics Finland publiceert elk kwartaal de huren. Hieronder staat de gemiddelde huur van vrije-sectorhuurwoningen in juli–september 2026, in euro per vierkante meter per maand.',
      table: {
        caption: 'Gemiddelde huur €/m²/maand, vrije-sectorhuurwoningen, 2026Q3',
        head: ['', 'Rovaniemi', 'Lapland (regio)', 'Heel Finland'],
        rows: [
          ['Studio’s', '18,63', '17,25', '20,49'],
          ['Tweekamerwoningen', '14,40', '12,87', '15,07'],
          ['Drie kamers en groter', '12,29', '11,08', '13,98'],
          ['Alle woningen', '14,63', '13,14', '15,99'],
          ['Nieuwe huurcontracten, alle woningen', '15,93', '13,39', '16,72'],
        ],
        foot: 'Statistics Finland, huren 2026Q3, tabel 15fa. Een nieuw huurcontract is een contract dat in het kwartaal is begonnen; die cijfers tonen wat er nu wordt gevraagd.',
      },
      paras: [
        '<strong>Zo rekent u:</strong> vermenigvuldig de huur per m² met de vloeroppervlakte. In Rovaniemi kost een studio van 30 m² gemiddeld ongeveer € 560 per maand (18,63 × 30) en ongeveer € 600 bij een nieuw huurcontract (20,14 × 30, het cijfer voor een studio met nieuw huurcontract in Rovaniemi). Een tweekamerwoning van 50 m²: ongeveer € 720 per maand (14,40 × 50). Water en elektriciteit komen meestal erbovenop.',
        'De huren per vierkante meter in Lapland liggen bij elke woninggrootte onder het landelijke gemiddelde, en het verschil is het kleinst bij tweekamerwoningen.',
      ],
      note: {
        label: 'Wat de statistiek niet ziet',
        body:
          'Seizoensverhuur in de skigebieden en gemeubileerde kortetermijnverhuur zitten niet in deze cijfers. Vlak bij het centrum van Levi kostte een appartement van 80 m² in een alpine huis € 750 per maand van mei tot november, € 2.000 per week in het hoogseizoen en € 1.650 per maand het hele jaar door (Yle, 25 mei 2023): dezelfde woning tegen drie prijzen.',
      },
    },
    {
      id: 'housing-allowance',
      kicker: 'Huurtoeslag van Kela',
      h2: 'Het plafond hangt af van de gemeente.',
      lead:
        'De algemene huurtoeslag (yleinen asumistuki) dekt hoogstens 70 % van de erkende woonkosten, en voor die erkende kosten geldt een plafond dat afhangt van de gemeente en de grootte van het huishouden. Kela deelt gemeenten in drie groepen in: Rovaniemi behoort tot de groep van 24 grotere gemeenten, en elke andere gemeente in Lapland valt onder “overige gemeenten”, met een lager plafond.',
      table: {
        caption: 'Maximale woonkosten 2026, €/maand',
        head: ['Grootte van het huishouden', 'Rovaniemi', 'Overige gemeenten in Lapland'],
        rows: [
          ['1 persoon', '447', '394'],
          ['2 personen', '652', '574'],
          ['3 personen', '828', '734'],
          ['4 personen', '981', '875'],
          ['Elke extra persoon', '+134', '+129'],
        ],
        foot: 'Kela, algemene huurtoeslag 2026. Een toeslag van minder dan € 15 wordt niet uitbetaald.',
      },
      paras: [
        'Het plafond betekent dat in Rovaniemi de huur van een eenpersoonshuishouden tot € 447 meetelt, ook als de huur € 600 is. De rest betaalt u zelf. Inkomen verlaagt de toeslag via het basisbedrag dat u zelf draagt; de rekenmodule van Kela toont uw eigen situatie.',
      ],
    },
    {
      id: 'contract',
      kicker: 'De huurovereenkomst',
      h2: 'Vijf dingen voordat u tekent.',
      bullets: [
        '<strong>De waarborgsom bedraagt hoogstens drie maanden huur</strong> (Wet op de woninghuur, paragraaf 8). Een of twee maanden is gebruikelijk.',
        '<strong>Vanaf 1 oktober 2026 moet de waarborgsom worden teruggegeven</strong>, of moet schriftelijk worden uitgelegd waarom ze wordt ingehouden, binnen 14 dagen nadat de huur is geëindigd of de woning is opgeleverd (hervorming van kracht sinds 1 oktober 2026, Rakli).',
        '<strong>De opzegtermijn voor de huurder is één maand.</strong> Voor contracten die op of na 1 oktober 2026 zijn gesloten, is de opzegtermijn voor de verhuurder drie maanden, en vier maanden als de huur ten minste twee jaar ononderbroken heeft geduurd (Rakli). Contracten van vóór 1 oktober 2026 behouden de oude opzegtermijnen (Kuluttajaliitto).',
        '<strong>Een contract voor bepaalde tijd bindt beide partijen tot het einde.</strong> Bij seizoenswerk is een woning van de werkgever vaak aan de baan gekoppeld: lees wat er gebeurt als de baan eindigt voordat het seizoen voorbij is.',
        '<strong>De kredietgegevens worden bijna altijd gecontroleerd.</strong> Een registratie van betalingsachterstanden sluit huren niet uit, maar dan is een gemeentelijk woningbedrijf of een particuliere verhuurder een waarschijnlijker match dan de grote verhuurketens.',
      ],
    },
    {
      id: 'before-paying',
      kicker: 'Voordat u iets betaalt',
      h2: 'Drie regels die uw waarborgsom redden.',
      bullets: [
        'Betaal nooit een waarborgsom vóór een bezichtiging of een videotour waarin u de woning en de sleutels in hetzelfde beeld ziet.',
        'Een schriftelijk contract, met de naam van de verhuurder en het bedrijfsnummer of persoonsnummer erop. Een gemeentelijk woningbedrijf is de veiligste start als u de markt niet kent.',
        'Gemeubileerde kortetermijnverhuur is geen huurovereenkomst: een vakantieappartement kan geen officieel adres krijgen, en door dat ontbrekende adres verloopt het contact met bedrijven moeizamer, bijvoorbeeld bij kredietchecks (Yle, 25 mei 2023).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Hoeveel kost een studio in Rovaniemi?',
      a: 'Volgens Statistics Finland was de gemiddelde huur van een studio op de vrije markt in Rovaniemi € 18,63 per m² in juli–september 2026 en € 20,14 per m² bij nieuwe huurcontracten. Een studio van 30 m² kost dus ongeveer € 560–600 per maand, exclusief elektriciteit.',
    },
    {
      q: 'Kan ik in Lapland huren zonder Finse kredietgegevens?',
      a: 'Ja, maar met minder keuze. Gemeentelijke woningbedrijven en particuliere verhuurders beslissen per geval, en een hogere waarborgsom (de wet staat maximaal drie maanden huur toe) of een borg helpt. De grote verhuurketens voeren altijd een kredietcheck uit.',
    },
    {
      q: 'Wanneer kunt u het best een woning zoeken in Rovaniemi?',
      a: 'In elke andere maand dan augustus en september. Dan kan DAS niet alle aanvragers huisvesten en zijn studio’s op de vrije markt schaars (Yle, 27 juli 2026). Studio’s die voor het winterseizoen kortdurend worden verhuurd, komen in het voorjaar weer op de markt.',
    },
    {
      q: 'Waarom is een huur in Levi in de winter een veelvoud hoger?',
      a: 'Omdat dezelfde woning in het hoogseizoen per week wordt verhuurd. In het voorbeeld van Yle (25 mei 2023) kostte een appartement van 80 m² in een alpine huis € 750 per maand in de zomer en € 2.000 per week in de winter. Maandhuur is mogelijk van mei tot november; vraag voor de winter uw werkgever naar personeelshuisvesting of informeer bij het gemeentelijke bedrijf van Kittilä.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'De eerste weken',
    h2: 'Bekijk de woning in persoon.',
    lead:
      'Boek een hotel of aparthotel voor de eerste weken en bekijk de woningen zelf voordat u tekent. Onze partnerzoekmachine toont vrije kamers tegen de prijzen van vandaag.',
    chips: [
      { label: 'Rovaniemi', destination: 'Rovaniemi', sid: 'rentals_first_weeks_rovaniemi' },
      { label: 'Levi', destination: 'Levi', sid: 'rentals_first_weeks_levi' },
      { label: 'Tornio', destination: 'Tornio', sid: 'rentals_first_weeks_tornio' },
      { label: 'Ivalo', destination: 'Ivalo', sid: 'rentals_first_weeks_ivalo' },
    ],
  },
  sources: pickSources('nl', SOURCES, common.sourceLabels),
};

export default copy;
