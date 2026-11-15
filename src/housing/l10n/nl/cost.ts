/**
 * Hollanti (nl) · cost. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/cost.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'tkVuokrat', 'tkSahko', 'tkPolttoaine', 'kela', 'kuntaliitto', 'perusopetuslaki', 'lvDrive', 'yle2023',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Kosten van levensonderhoud in Lapland 2026: huur, stroom',
  metaDescription:
    'Wat wonen in Fins Lapland kost: huur per m² (Statistics Finland 2026), stroom, brandstof, huurtoeslag van Kela en kinderopvang, met rekenvoorbeelden.',
  breadcrumb: 'Kosten van levensonderhoud',
  hero: {
    eyebrow: 'Kosten van levensonderhoud in Lapland',
    title: 'Wat kost wonen in Lapland?',
    subtitle:
      'Huren zijn in Lapland goedkoper dan in de rest van Finland; de auto en de verwarming zijn duurder. Zo telt een maandbudget op.',
  },
  authorNote:
    'Elk cijfer komt van Statistics Finland, Kela of de Vereniging van Finse gemeenten; de voorbeelden zijn uit die cijfers berekend en tonen hun formule. Geen schattingen.',
  intro: [
    'Als het om kosten gaat, zijn er twee Laplanden. Rovaniemi is een universiteitsstad waar studenten en toeristen om de studio’s strijden; in de skigebieden volgt de prijs het seizoen. Aan de kust en in de kleine gemeenten is de meeste woonruimte beschikbaar en is wonen het goedkoopst, maar een auto is verplicht.',
    'Hieronder staan de vier posten waaruit een maandbudget echt bestaat: huur, elektriciteit, vervoer en kinderen. Er is geen statistiek voor Lapland over voedselprijzen, dus we raden er niet naar.',
  ],
  sections: [
    {
      id: 'rent',
      kicker: 'Huur',
      h2: 'Goedkoper dan het landelijke gemiddelde, behalve wanneer dat niet zo is.',
      table: {
        caption: 'Gemiddelde huur €/m²/maand, vrije-sectorhuurwoningen, 2026Q3',
        head: ['', 'Rovaniemi', 'Lapland (regio)', 'Heel Finland'],
        rows: [
          ['Studio’s', '18,63', '17,25', '20,49'],
          ['Tweekamerwoningen', '14,40', '12,87', '15,07'],
          ['Drie kamers en groter', '12,29', '11,08', '13,98'],
          ['Alle woningen', '14,63', '13,14', '15,99'],
        ],
        foot: 'Statistics Finland, huren 2026Q3, tabel 15fa.',
      },
      paras: [
        '<strong>Voorbeelden:</strong> een studio van 30 m² in Rovaniemi ongeveer € 560 per maand (18,63 × 30); een tweekamerwoning van 50 m² in Rovaniemi ongeveer € 720 (14,40 × 50); een driekamerwoning van 75 m² tegen het regionale gemiddelde van Lapland ongeveer € 830 (11,08 × 75).',
        'De uitzondering is de winter in de skigebieden: vlak bij het centrum van Levi kostte een appartement van 80 m² in een alpine huis € 750 per maand van mei tot november, maar € 2.000 per week in het hoogseizoen (Yle, 25 mei 2023). Een jaarcontract voor dezelfde woning kostte € 1.650 per maand. De prijs in een skigebied is niet de prijs voor Lapland.',
      ],
    },
    {
      id: 'electricity',
      kicker: 'Elektriciteit en verwarming',
      h2: 'Een kilowattuur kost hetzelfde, u gebruikt er alleen meer van.',
      table: {
        caption: 'Totaalprijs van elektriciteit voor huishoudens, cent/kWh, juni 2026, heel Finland',
        head: ['Jaarverbruik', 'Totaalprijs'],
        rows: [
          ['1.000–2.499 kWh (klein appartement)', '28,2'],
          ['2.500–4.999 kWh (appartement of rijtjeshuis)', '23,7'],
          ['5.000–15.000 kWh (vrijstaand huis, geen elektrische verwarming)', '17,9'],
          ['meer dan 15.000 kWh (elektrisch verwarmd huis)', '14,9'],
        ],
        foot: 'Statistics Finland, elektriciteitsprijs per type verbruiker, tabel 13rb. De prijs omvat energie, transport en belastingen.',
      },
      paras: [
        '<strong>Voorbeelden:</strong> een tweekamerwoning met een verbruik van 3.500 kWh per jaar: 3.500 × 0,237 = ongeveer € 830 per jaar, oftewel € 69 per maand; een elektrisch verwarmd vrijstaand huis met een verbruik van 18.000 kWh: 18.000 × 0,149 = ongeveer € 2.680 per jaar, oftewel € 223 per maand.',
        'De prijs is een landelijk gemiddelde. Het stookseizoen in Lapland is langer dan in het zuiden, dus hetzelfde huis verbruikt hier meer kilowattuur; vraag de vorige huurder of de verhuurder naar het verbruik van vorig jaar, want een betere schatting krijgt u niet.',
      ],
    },
    {
      id: 'getting-around',
      kicker: 'Vervoer',
      h2: 'Dit is de post die in Lapland groter is.',
      paras: [
        'Benzine 95E10 kostte in juni 2026 gemiddeld € 2,09 per liter in heel Finland en diesel € 2,15 (Statistics Finland). Afstanden uit de autoroutes van LaplandVibes: Kemi–Rovaniemi 118 km, Rovaniemi–Ylläs 175 km, Sodankylä–Saariselkä 130 km.',
        '<strong>Voorbeeld:</strong> een dagelijks woon-werktraject van 40 km, 22 werkdagen, 7 l/100 km: 880 km × 0,07 l/km × € 2,09 = ongeveer € 129 per maand aan benzine. In het centrum van Rovaniemi kunt u zonder auto leven; in een fjelddorp hoort de auto bij de huur, ook als het huurcontract dat niet zegt.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Huurtoeslag van Kela',
      h2: 'Hoeveel van de huur meetelt.',
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
        foot: 'Kela, algemene huurtoeslag 2026. De toeslag bedraagt hoogstens 70 % van de erkende woonkosten, en een toeslag van minder dan € 15 wordt niet uitbetaald.',
      },
      paras: [
        '<strong>Voorbeeld:</strong> alleenwonend in Rovaniemi met een huur van € 600. Hoogstens € 447 telt mee, en de toeslag bedraagt hoogstens 70 % daarvan, dus € 313 per maand (447 × 0,70), voordat het inkomen de toeslag via het basisbedrag verlaagt. De rekenmodule van Kela houdt rekening met uw eigen inkomen.',
      ],
    },
    {
      id: 'children',
      kicker: 'Kinderen',
      h2: 'Kinderopvang naar inkomen, school gratis.',
      bullets: [
        'Vanaf 1 augustus 2026 bedraagt de hoogste bijdrage voor kinderopvang € 335 per maand per kind, de laagste in rekening gebrachte € 32, en het tweede kind betaalt hoogstens € 134 (Vereniging van Finse gemeenten). De bijdrage volgt het gezinsinkomen, dus bij een laag inkomen kan ze nul zijn.',
        'Voorschools en basisonderwijs zijn gratis, inclusief leermiddelen en schoolmaaltijden (Wet op het basisonderwijs, paragraaf 31). Bij een schoolreis van meer dan vijf kilometer regelt de gemeente het vervoer (paragraaf 32).',
      ],
    },
    {
      id: 'summary',
      kicker: 'Samenvatting',
      h2: 'Wat goedkoper is, wat duurder.',
      band: true,
      cards: [
        {
          title: 'Goedkoper: huur',
          body: 'De gemiddelde huur in Lapland is € 13,14 per m² tegenover € 15,99 landelijk (Statistics Finland 2026Q3). Rovaniemi met € 14,63 zit ertussen.',
        },
        {
          title: 'Duurder: vervoer en verwarming',
          body: 'Afstanden van honderd kilometer en een lang stookseizoen. De prijs van een kilowattuur en een liter is dezelfde als in het zuiden; de hoeveelheid niet.',
        },
        {
          title: 'Hetzelfde: kinderopvang en school',
          body: 'De kosten van kinderopvang en het gratis onderwijs gelden landelijk. Voor een gezin met kinderen is de grootste besparing in Lapland de huur.',
        },
      ],
    },
  ],
  faqs: [
    {
      q: 'Is Rovaniemi een dure stad om in te wonen?',
      a: 'Niet qua huur: het gemiddelde van € 14,63 per m² ligt onder het landelijke € 15,99 (Statistics Finland 2026Q3), en Rovaniemi is bij elke woninggrootte goedkoper dan het hele land, studio’s inbegrepen (18,63 tegenover 20,49). Bij nieuwe huurcontracten kost een studio in Rovaniemi € 20,14 per m²: een studio die nu vrijkomt kost ongeveer 8 % meer dan een die al verhuurd is, maar nog steeds minder dan een studio met een nieuw huurcontract landelijk, € 21,11 per m².',
    },
    {
      q: 'Hoeveel heeft een alleenstaande per maand nodig in Rovaniemi?',
      a: 'We berekenen alleen wat een bron heeft: een studio van 30 m² ongeveer € 560 per maand (18,63 × 30) en elektriciteit bij 1.800 kWh per jaar ongeveer € 42 per maand (1.800 × 0,282 / 12). Eten, internet, verzekeringen en vervoer komen erbovenop, afhankelijk van uw eigen gewoonten.',
    },
    {
      q: 'Kan ik in Lapland huurtoeslag krijgen?',
      a: 'Onder dezelfde voorwaarden als overal in Finland. In Rovaniemi tellen de woonkosten van een eenpersoonshuishouden mee tot € 447 per maand, in andere gemeenten in Lapland tot € 394, en de toeslag bedraagt hoogstens 70 % daarvan (Kela 2026).',
    },
  ],
  sources: pickSources('nl', SOURCES, common.sourceLabels),
};

export default copy;
