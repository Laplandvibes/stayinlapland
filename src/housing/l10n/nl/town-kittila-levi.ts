/**
 * Hollanti (nl) · town-kittila-levi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/kittila-levi.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'kittila', 'yle2023', 'yle2017', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Huren in Kittilä en Levi: gemeentewoningen, seizoenshuur',
  metaDescription:
    'Huren in Kittilä en Levi: het gemeentelijke Kittilän Vuokratalot Oy, seizoenshuur van vakantieappartementen, personeelshuisvesting en steun van Kela.',
  breadcrumb: 'Kittilä en Levi',
  hero: {
    eyebrow: 'Kittilä, 6.973 inwoners',
    title: 'Huren in Kittilä en Levi.',
    subtitle:
      'Een van de snelstgroeiende gemeenten van Lapland en haar skigebied, waar dezelfde woning in de zomer een maandhuur kost en in de winter een weektarief. Waar u zich aanmeldt en wanneer.',
  },
  authorNote:
    'Bevolking en groei van Statistics Finland, Kittilän Vuokratalot Oy van de eigen pagina’s van de gemeente en het bedrijf, seizoensprijzen in Levi van Yle, 25 mei 2023. Gecontroleerd op 15 november 2026.',
  intro: [
    'Kittilä had eind 2025 6.973 inwoners en groeide in een jaar met 2,0 procent, de op één na snelste van de gemeenten in Lapland: alleen Pelkosenniemi groeide sneller, met 2,4 procent (Statistics Finland). De motor is Levi: in 2017 schatte Levin Matkailu Oy dat het skigebied voor het winterseizoen ruim 2.000 seizoenswerkers zou aannemen (Yle, 25 oktober 2017).',
    'De huurmarkt van Levi volgt het seizoen: een appartement van 80 m² in een gebouw in alpenstijl vlak bij het centrum kostte € 750 per maand van mei tot november, € 2.000 per week in het hoogseizoen en € 1.650 per maand het hele jaar door (Yle, 25 mei 2023). Bovendien krijgt u in een vakantieappartement mogelijk geen officieel adres.',
    'Een vaste huurwoning vindt u eerder in het dorp Kittilä dan in het centrum van Levi. De woningen van de gemeente worden verhuurd door Kittilän Vuokratalot Oy, en u meldt zich online aan via de site van het bedrijf (kittila.fi, Kittilän Vuokratalot).',
  ],
  sections: [
    {
      id: 'channels',
      kicker: 'Bij wie u zich aanmeldt',
      h2: 'Het gemeentelijke bedrijf, de portalen en de groep van Levi.',
      band: true,
      cards: [
        {
          title: 'Kittilän Vuokratalot Oy',
          body: 'Verhuurt de eigen huurwoningen van de gemeente. Het kantoor zit op de begane grond van het gemeentehuis (Valtatie 15, 99100 Kittilä). Het bedrijf behandelt alleen onlineaanvragen via zijn website waarbij de vereiste bijlagen zijn gevoegd. Op de pagina’s staat niet hoe lang een aanvraag geldig blijft, dus vraag dat aan het bedrijf.',
          href: 'https://kittila.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot',
          linkLabel: 'kittila.fi: huurwoningen',
          event: 'kittila_city',
        },
        {
          title: 'Oikotie, Vuokraovi en TA-Asunnot',
          body: 'Advertenties van particulieren en makelaars onder de gemeente Kittilä; woningen in Levi zitten in dezelfde zoekopdracht. TA-Asunnot heeft eigen vrije huurwoningen in Kittilä.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kittil%C3%A4',
          linkLabel: 'Oikotie: huurwoningen in Kittilä',
          event: 'oikotie',
        },
        {
          title: 'Personeelshuisvesting',
          body: 'Werkgevers in het skigebied huren rijtjeshuizen en vakantieappartementen voor personeel voor het hele seizoen en houden de huur in op uw loon. Vraag bij het aanbod schriftelijk hoe de huisvesting geregeld is. Meer daarover op de pagina voor seizoenswerkers.',
          href: '/seasonal-worker-housing',
          linkLabel: 'Huisvesting voor seizoenswerkers',
          event: 'seasonal_page',
        },
        {
          title: 'De Facebookgroep voor woningen in Levi',
          body: 'Het snelste kanaal in het fjelddorp, en daar vinden seizoenswerkers vaak hun woning. Niemand staat er garant voor: betaal nooit een waarborgsom vóór een bezichtiging en laat het contract schriftelijk vastleggen.',
        },
      ],
    },
    {
      id: 'prices',
      kicker: 'Wat huur kost',
      h2: 'Het regionale cijfer en de uitzondering Levi.',
      table: {
        caption: 'Gemiddelde huur €/m²/maand, vrijesectorhuurwoningen, 2026Q3',
        head: ['', 'Lapland (regio)', 'Heel Finland'],
        rows: [
          ['Studio’s', '17,25', '20,49'],
          ['Tweekamerwoningen', '12,87', '15,07'],
          ['Drie kamers en groter', '11,08', '13,98'],
          ['Alle woningen', '13,14', '15,99'],
        ],
        foot: 'Statistics Finland, huren 2026Q3, tabel 15fa. Voor Kittilä wordt geen apart cijfer gepubliceerd, en de seizoenshuren van Levi zitten helemaal niet in de statistiek.',
      },
      paras: [
        '<strong>Het voorbeeld van Levi (Yle, 25 mei 2023):</strong> een appartement van 80 m² in een gebouw in alpenstijl voor € 750 per maand van mei tot november = € 9,38 per m², € 2.000 per week in het hoogseizoen, € 1.650 per maand het hele jaar door = € 20,63 per m². Dezelfde woning is in de zomer goedkoper dan het regionale gemiddelde en het hele jaar door duurder dan de landelijke prijs voor een studio.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Huurtoeslag van Kela',
      h2: 'Kittilä valt onder de “overige gemeenten” van Kela.',
      table: {
        caption: 'Maximale woonkosten 2026, €/maand, Kela-groep “overige gemeenten”',
        head: ['Grootte van het huishouden', 'Maximale woonkosten'],
        rows: [
          ['1 persoon', '394'],
          ['2 personen', '574'],
          ['3 personen', '734'],
          ['4 personen', '875'],
          ['Elke extra persoon', '+129'],
        ],
        foot: 'Kela, algemene huurtoeslag 2026. De toeslag bedraagt hoogstens 70 % van de erkende woonkosten. In een vakantieappartement zonder geregistreerd adres is niet aan de voorwaarden voldaan.',
      },
    },
    {
      id: 'when',
      kicker: 'Wanneer u zich aanmeldt',
      h2: 'In de zomer, voordat de weektarieven beginnen.',
      bullets: [
        'Maandhuur van vakantieappartementen is alleen van mei tot november mogelijk, en in het hoogseizoen is de prijs een weektarief (Yle, 25 mei 2023). Zoek een woning voor het winterseizoen dus al in de zomer.',
        'Dien de aanvraag bij het gemeentelijke bedrijf vóór het seizoen in en vraag het bedrijf hoe lang ze geldig blijft.',
        'De waarborgsom bedraagt hoogstens drie maanden huur (Wet op de woninghuur, paragraaf 8), en vanaf 1 oktober 2026 wordt ze binnen 14 dagen na het einde van de huur teruggegeven (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Waar vind ik in Levi een woning voor de winter?',
      a: 'Hoogstwaarschijnlijk bij uw werkgever: bedrijven in het skigebied huren rijtjeshuizen en vakantieappartementen voor personeel voor het hele seizoen. Op de vrije markt worden de woningen in Levi in de winter per week verhuurd (Yle, 25 mei 2023), dus maandhuur is vooral van mei tot november mogelijk. Het gemeentelijke bedrijf heeft woningen in het dorp Kittilä en in Sirkka bij Levi (Kittilän Vuokratalot).',
    },
    {
      q: 'Hoe vraag ik een gemeentelijke woning aan in Kittilä?',
      a: 'Met de onlineaanvraag van Kittilän Vuokratalot Oy op de site van het bedrijf. Onvolledige aanvragen zonder de vereiste bijlagen worden niet behandeld. Het kantoor zit op de begane grond van het gemeentehuis, Valtatie 15 (kittila.fi, Kittilän Vuokratalot).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'De eerste nachten',
    h2: 'Voordat de woning vrij is.',
    lead: 'De partnerzoekmachine toont vrije kamers en appartementen in Levi en Kittilä tegen de prijzen van vandaag.',
    chips: [
      { label: 'Levi', destination: 'Levi', sid: 'rentals_levi_first_weeks' },
      { label: 'Kittilä', destination: 'Kittilä', sid: 'rentals_kittila_first_weeks' },
    ],
  },
  sources: pickSources('nl', SOURCES, common.sourceLabels),
};

export default copy;
