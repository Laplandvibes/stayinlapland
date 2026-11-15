/**
 * Ruotsi (sv) · town-rovaniemi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/rovaniemi.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'rovaniemi', 'das', 'yle2025das', 'yle2026rovaniemi', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Hyra bostad i Rovaniemi: hyror, hyresvärdar och ansökan',
  metaDescription:
    'Hyra lägenhet i Rovaniemi: hyra per m² (Statistikcentralen 2026), stadens hyresvärdar, DAS för studerande, bostadsbidrag från Kela och när du ska söka.',
  breadcrumb: 'Rovaniemi',
  hero: {
    eyebrow: 'Rovaniemi, 66 191 invånare',
    title: 'Hyra bostad i Rovaniemi.',
    subtitle:
      'Lapplands största stad, 66 191 invånare. Vad hyran kostar, vem du ansöker hos och när.',
  },
  authorNote:
    'Hyror per m² från Statistikcentralen (juli–september 2026), hyresvärdar från Rovaniemi stads egen bostadssida, siffror om bristen från Yle. Kontrollerat den 15 november 2026.',
  intro: [
    'Rovaniemi har 66 191 invånare (Statistikcentralen, 31 dec 2025) och hård konkurrens om ettorna: studentbostadsstiftelsen DAS fick omkring 550 brådskande ansökningar sommaren 2026, 15 procent fler än ett år tidigare, nästan 90 procent av de sökande ville ha en etta, och stadens ettor hyrs ut kortvarigt till turister för vintersäsongen (Yle, 27 juli 2026). Enligt DAS verkställande direktör kan stiftelsen inte erbjuda bostad åt alla sökande i augusti och september.',
    'Ett rekryteringsföretag som tog omkring 250 arbetare till Lappland inkvarterade dem på ett tiotal olika ställen i Rovaniemi (Yle, 9 mars 2026). Säsongsarbetare, studerande och turister är alla ute efter samma små lägenheter.',
    'Det goda är priset: Rovaniemis genomsnittliga hyra på 14,63 € per m² ligger under riksgenomsnittet på 15,99 € (Statistikcentralen 2026Q3). Nedan finns siffrorna efter bostadsstorlek och kanalerna du kan ansöka genom.',
  ],
  sections: [
    {
      id: 'prices',
      kicker: 'Vad hyran kostar',
      h2: 'Hyror per m² i Rovaniemi, juli–september 2026.',
      table: {
        caption: 'Genomsnittlig hyra €/m²/månad, fritt finansierade hyresbostäder, Rovaniemi 2026Q3',
        head: ['', 'Alla hyror', 'Nya hyror', 'Hela landet'],
        rows: [
          ['Ettor', '18,63', '20,14', '20,49'],
          ['Tvåor', '14,40', '16,40', '15,07'],
          ['Treor och större', '12,29', '13,66', '13,98'],
          ['Alla bostäder', '14,63', '15,93', '15,99'],
        ],
        foot: 'Statistikcentralen, hyror 2026Q3, tabell 15fa. Nya hyresavtal = avtal som började under kvartalet, alltså vad som begärs för lediga bostäder just nu.',
      },
      paras: [
        '<strong>Exempel:</strong> en etta på 30 m² cirka 560 € i månaden (18,63 × 30), i ett nytt hyresavtal cirka 600 € (20,14 × 30); en tvåa på 50 m² cirka 720 € (14,40 × 50); en trea på 75 m² cirka 920 € (12,29 × 75). Vatten och el tillkommer oftast.',
        'Priset för en etta i ett nytt hyresavtal, 20,14 € per m², ligger 1,51 € (8 %) över genomsnittet för alla ettor i Rovaniemi, 18,63 €: en etta som blir ledig just nu kostar mer än en som redan är uthyrd. Jämfört med riksgenomsnittet är Rovaniemi billigare för alla bostadsstorlekar.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Bostadsbidrag från Kela',
      h2: 'Rovaniemi har ett högre tak.',
      lead:
        'Det allmänna bostadsbidraget är högst 70 % av de godtagbara boendeutgifterna. I Rovaniemi är taket för godtagbara utgifter högre än i de andra kommunerna i Lappland, eftersom staden hör till Kelas grupp med de 24 större kommunerna (Kela 2026).',
      table: {
        caption: 'Högsta boendeutgifter 2026, €/månad, Kelas grupp med de 24 större kommunerna',
        head: ['Hushållets storlek', 'Högsta boendeutgifter'],
        rows: [
          ['1 person', '447'],
          ['2 personer', '652'],
          ['3 personer', '828'],
          ['4 personer', '981'],
          ['Varje ytterligare person', '+134'],
        ],
        foot: 'Kela, allmänt bostadsbidrag 2026. Ett bidrag under 15 € betalas inte ut. Inkomsterna minskar bidraget genom grundomkostnaden.',
      },
    },
    {
      id: 'channels',
      kicker: 'Vem du ansöker hos',
      h2: 'Stadens lista, studentstiftelsen och portalerna.',
      lead: 'Rovaniemi stads bostadssida listar hyresvärdar och söktjänster; den nämner inget eget kommunalt hyresbolag.',
      band: true,
      cards: [
        {
          title: 'Rovaniemi stad: hyresvärdar',
          body: 'Stadens sida pekar på de företagsägda hyresvärdarna KAS asunnot, M2-Kodit, Tarveasunnot, Avara och Lumo samt på söktjänsterna Oikotie, Vuokraovi och Qasa. Varje hyresvärd har sin egen webbansökan; ansök hos flera samtidigt.',
          href: 'https://www.rovaniemi.fi/Asuminen-ja-ymparisto/Asuminen',
          linkLabel: 'rovaniemi.fi: Boende',
          event: 'rovaniemi_city',
        },
        {
          title: 'DAS: för studerande',
          body: 'Domus Arctica-stiftelsen har omkring 1 700 bostäder, 700 av dem ettor och 460 tvåor, med en genomsnittlig hyra på 12,50 € per m² (Yle, 27 juli 2026). Ansökningarna är löpande och gäller i tre månader, och nya studerande har förtur i augusti och september. Du kan ansöka om du studerar i Rovaniemi på andra stadiet eller högre.',
          href: 'https://www.das.fi/en/apply/applying-info',
          linkLabel: 'das.fi: Information om ansökan',
          event: 'das',
        },
        {
          title: 'KAS asunnot',
          body: 'Hyresbostäder i flera stadsdelar i Rovaniemi (stadens lista). Webbansökan.',
          href: 'https://kas.fi/rovaniemen-vuokrattavat-kas-kodit/',
          linkLabel: 'kas.fi: Rovaniemi',
          event: 'kas',
        },
        {
          title: 'Lumo',
          body: 'En företagsägd hyresvärd med hus i Rovaniemi. Standardavtal, webbansökan, snabb inflyttning.',
          href: 'https://lumo.fi/en/rental-apartments',
          linkLabel: 'lumo.fi: hyresbostäder',
          event: 'lumo',
        },
        {
          title: 'Oikotie och Vuokraovi',
          body: 'De nationella portalerna har de flesta privata annonserna och förmedlarannonserna. Filtrera på kommunen Rovaniemi, inte på stadsdel, så att Ounasvaara, Saarenkylä och bostäder utanför centrum också syns.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/rovaniemi',
          linkLabel: 'Oikotie: hyresbostäder i Rovaniemi',
          event: 'oikotie',
        },
        {
          title: 'NAL Rovaniemi: under 30 år',
          body: 'Nuorisoasuntoliittos lokalförening i Rovaniemi (Finlands ungdomsbostadsförbund) erbjuder ungdomsbostäder för personer under 30 år (stadens lista). Ett alternativ när DAS inte är möjligt och du inte studerar.',
          href: 'https://www.rovaniemi.fi/Asuminen-ja-ymparisto/Asuminen',
          linkLabel: 'rovaniemi.fi: ungdomsbostäder',
          event: 'nal',
        },
      ],
    },
    {
      id: 'when',
      kicker: 'När du ska söka',
      h2: 'Två rusningar om året.',
      bullets: [
        '<strong>Augusti–september</strong> är trängst: DAS kan inte ge bostad åt alla sökande, och fritt finansierade ettor är ont om (Yle, 27 juli 2026).',
        '<strong>November–december:</strong> vissa ettor hyrs ut kortvarigt till turister för vintersäsongen. Tidsbundna avtal tar ofta slut i slutet av oktober (Yle, 27 juli 2026).',
        '<strong>På våren</strong> kommer ettor som hyrts ut för vintersäsongen tillbaka.',
        '<strong>Depositionen</strong> är högst tre månadshyror (lagen om hyra av bostadslägenhet, 8 §), och från och med 1 oktober 2026 ska den betalas tillbaka inom 14 dagar efter att hyresförhållandet upphört (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Hur mycket kostar en etta i Rovaniemi?',
      a: 'Enligt Statistikcentralen 18,63 € per m² för alla hyresavtal och 20,14 € per m² för nya (2026Q3). En etta på 30 m² kostar därmed cirka 560–600 € i månaden före el.',
    },
    {
      q: 'Är det svårt att hitta en hyresbostad i Rovaniemi?',
      a: 'Ettor är svåra att få i augusti–september: DAS kan inte ge bostad åt alla sökande (Yle, 27 juli 2026), och fritt finansierade ettor är ont om. Tvåor och treor är lättare.',
    },
    {
      q: 'Kan jag ansöka utan att besöka Rovaniemi?',
      a: 'Du kan ansöka på nätet hos alla hyresvärdar som staden listar och hos DAS. Titta ändå på bostaden själv eller be om en videovisning, och betala depositionen först när avtalet är undertecknat.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'De första veckorna',
    h2: 'Hotell eller apartmenthotell medan du tittar på bostäder.',
    lead: 'Se bostäderna på plats innan du skriver under. Partnersökningen visar lediga rum i Rovaniemi till dagens priser.',
    chips: [
      { label: 'Rovaniemi', destination: 'Rovaniemi', sid: 'rentals_rovaniemi_first_weeks' },
    ],
  },
  sources: pickSources('sv', SOURCES, common.sourceLabels),
};

export default copy;
