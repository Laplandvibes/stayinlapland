/**
 * Ruotsi (sv) · cost. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
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
  metaTitle: 'Levnadskostnader i finska Lappland 2026: hyra, el, bränsle',
  metaDescription:
    'Vad det kostar att bo i finska Lappland: hyra per m² (Statistikcentralen 2026), el, bränsle, bostadsbidrag från Kela och barnomsorgsavgifter, med räkneexempel.',
  breadcrumb: 'Levnadskostnader',
  hero: {
    eyebrow: 'Levnadskostnader i Lappland',
    title: 'Vad kostar det att bo i Lappland?',
    subtitle:
      'Hyran är lägre i Lappland än i resten av Finland; bilen och uppvärmningen är dyrare. Så här läggs en månadsbudget ihop.',
  },
  authorNote:
    'Varje siffra kommer från Statistikcentralen, Kela eller Finlands Kommunförbund; exemplen är uträknade från de siffrorna och visar sin formel. Inga uppskattningar.',
  intro: [
    'Det finns två Lapplanden när det gäller kostnader. Rovaniemi är en universitetsstad där studerande och turister konkurrerar om ettorna; i skidorterna följer priset säsongen. På kusten och i de små kommunerna är boendet rymligast och billigast, men bil är ett måste.',
    'Nedan finns de fyra poster som en månadsbudget egentligen består av: hyra, el, att ta sig fram och barn. Det finns ingen Lapplandsspecifik statistik över matpriser, så vi gissar inte på någon.',
  ],
  sections: [
    {
      id: 'rent',
      kicker: 'Hyra',
      h2: 'Billigare än riksgenomsnittet, utom när den inte är det.',
      table: {
        caption: 'Genomsnittlig hyra €/m²/månad, fritt finansierade hyresbostäder, 2026Q3',
        head: ['', 'Rovaniemi', 'Lappland (landskapet)', 'Hela landet'],
        rows: [
          ['Ettor', '18,63', '17,25', '20,49'],
          ['Tvåor', '14,40', '12,87', '15,07'],
          ['Treor och större', '12,29', '11,08', '13,98'],
          ['Alla bostäder', '14,63', '13,14', '15,99'],
        ],
        foot: 'Statistikcentralen, hyror 2026Q3, tabell 15fa.',
      },
      paras: [
        '<strong>Exempel:</strong> en etta på 30 m² i Rovaniemi cirka 560 € i månaden (18,63 × 30); en tvåa på 50 m² i Rovaniemi cirka 720 € (14,40 × 50); en trea på 75 m² till Lapplands genomsnittliga hyra cirka 830 € (11,08 × 75).',
        'Undantaget är vintern i skidorterna: nära Levi centrum kostade en lägenhet på 80 m² i ett fjällhus 750 € i månaden från maj till november men 2 000 € i veckan under högsäsong (Yle, 25 maj 2023). Ett hyresavtal året runt på samma lägenhet var 1 650 € i månaden. Skidortens pris är inte Lapplands pris.',
      ],
    },
    {
      id: 'electricity',
      kicker: 'El och uppvärmning',
      h2: 'En kilowattimme kostar lika mycket, du använder bara fler av dem.',
      table: {
        caption: 'Totalpris på el för hushåll, cent/kWh, juni 2026, hela landet',
        head: ['Årsförbrukning', 'Totalpris'],
        rows: [
          ['1 000–2 499 kWh (liten lägenhet)', '28,2'],
          ['2 500–4 999 kWh (lägenhet eller radhus)', '23,7'],
          ['5 000–15 000 kWh (småhus utan eluppvärmning)', '17,9'],
          ['över 15 000 kWh (eluppvärmt hus)', '14,9'],
        ],
        foot: 'Statistikcentralen, elpris efter konsumentgrupp, tabell 13rb. Priset inkluderar energi, överföring och skatter.',
      },
      paras: [
        '<strong>Exempel:</strong> en tvåa som förbrukar 3 500 kWh om året: 3 500 × 0,237 = cirka 830 € om året, eller 69 € i månaden; ett eluppvärmt småhus som förbrukar 18 000 kWh: 18 000 × 0,149 = cirka 2 680 € om året, eller 223 € i månaden.',
        'Priset är ett riksgenomsnitt. Lapplands uppvärmningssäsong är längre än södra Finlands, så samma hus förbrukar fler kilowattimmar här; be den tidigare hyresgästen eller hyresvärden om förra årets förbrukning, det är den bästa uppskattningen du kan få.',
      ],
    },
    {
      id: 'getting-around',
      kicker: 'Att ta sig fram',
      h2: 'Det här är posten som är större i Lappland.',
      paras: [
        'Bensin 95E10 kostade i genomsnitt 2,09 € per liter i hela Finland i juni 2026 och diesel 2,15 € (Statistikcentralen). Avstånd enligt LaplandVibes körrutter: Kemi–Rovaniemi 118 km, Rovaniemi–Ylläs 175 km, Sodankylä–Saariselkä 130 km.',
        '<strong>Exempel:</strong> en daglig arbetsresa på 40 km, 22 arbetsdagar, 7 l/100 km: 880 km × 0,07 l/km × 2,09 € = cirka 129 € i månaden i bensin. I centrala Rovaniemi går det att leva utan bil; i en fjällby är bilen en del av hyran även om avtalet inte säger det.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Bostadsbidrag från Kela',
      h2: 'Hur stor del av hyran som räknas.',
      table: {
        caption: 'Högsta boendeutgifter 2026, €/månad',
        head: ['Hushållets storlek', 'Rovaniemi', 'Övriga kommuner i Lappland'],
        rows: [
          ['1 person', '447', '394'],
          ['2 personer', '652', '574'],
          ['3 personer', '828', '734'],
          ['4 personer', '981', '875'],
          ['Varje ytterligare person', '+134', '+129'],
        ],
        foot: 'Kela, allmänt bostadsbidrag 2026. Bidraget är högst 70 % av de godtagbara boendeutgifterna, och ett bidrag under 15 € betalas inte ut.',
      },
      paras: [
        '<strong>Exempel:</strong> en person som bor ensam i Rovaniemi med en hyra på 600 €. Högst 447 € räknas, och bidraget är högst 70 % av det, alltså 313 € i månaden (447 × 0,70) innan inkomsterna minskar det genom grundomkostnaden. Kelas räknare tar hänsyn till dina egna inkomster.',
      ],
    },
    {
      id: 'children',
      kicker: 'Barn',
      h2: 'Barnomsorg efter inkomst, skola gratis.',
      bullets: [
        'Från och med 1 augusti 2026 är den högsta avgiften för småbarnspedagogik 335 € i månaden per barn, den lägsta som tas ut 32 €, och det andra barnet betalar högst 134 € (Finlands Kommunförbund). Avgiften följer familjens inkomster, så vid låga inkomster kan den vara noll.',
        'Förskola och grundläggande utbildning är avgiftsfria, läromedel och skolmåltider inberäknade (lagen om grundläggande utbildning, 31 §). För en skolväg över fem kilometer ordnar kommunen skjuts (32 §).',
      ],
    },
    {
      id: 'summary',
      kicker: 'Sammanfattning',
      h2: 'Vad som är billigare, vad som är dyrare.',
      band: true,
      cards: [
        {
          title: 'Billigare: hyran',
          body: 'Lapplands genomsnittliga hyra är 13,14 € per m² mot 15,99 € i hela landet (Statistikcentralen 2026Q3). Rovaniemi med 14,63 € ligger mitt emellan.',
        },
        {
          title: 'Dyrare: att ta sig fram och uppvärmningen',
          body: 'Hundrakilometersavstånd och en lång uppvärmningssäsong. Priset på en kilowattimme och en liter är detsamma som i söder; mängden är det inte.',
        },
        {
          title: 'Lika: barnomsorg och skola',
          body: 'Avgifterna för småbarnspedagogik och den avgiftsfria skolgången är nationella. För en barnfamilj är den största besparingen i Lappland hyran.',
        },
      ],
    },
  ],
  faqs: [
    {
      q: 'Är Rovaniemi en dyr stad att bo i?',
      a: 'Inte med tanke på hyrorna: genomsnittet 14,63 € per m² ligger under riksgenomsnittet 15,99 € (Statistikcentralen 2026Q3), och Rovaniemi är billigare än landet som helhet för alla bostadsstorlekar, ettor inräknade (18,63 mot 20,49). I nya hyresavtal kostar en etta i Rovaniemi 20,14 € per m²: en etta som blir ledig nu kostar cirka 8 % mer än en som redan är uthyrd, men ändå mindre än en etta i ett nytt hyresavtal i hela landet, 21,11 € per m².',
    },
    {
      q: 'Hur mycket behöver en ensamstående person i månaden i Rovaniemi?',
      a: 'Vi räknar bara det som har en källa: en etta på 30 m² cirka 560 € i månaden (18,63 × 30) och el vid 1 800 kWh om året cirka 42 € i månaden (1 800 × 0,282 / 12). Mat, internet, försäkringar och resor tillkommer efter dina egna vanor.',
    },
    {
      q: 'Kan jag få bostadsbidrag i Lappland?',
      a: 'På samma villkor som var som helst i Finland. I Rovaniemi räknas ett hushåll med en persons boendeutgifter upp till 447 € i månaden, i övriga kommuner i Lappland upp till 394 €, och bidraget är högst 70 % av det (Kela 2026).',
    },
  ],
  sources: pickSources('sv', SOURCES, common.sourceLabels),
};

export default copy;
