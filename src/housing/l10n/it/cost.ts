/**
 * Italia (it) · cost. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
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
  metaTitle: 'Costo della vita in Lapponia 2026: affitto, luce e carburante',
  metaDescription:
    'Quanto costa vivere nella Lapponia finlandese: affitto al m² (Statistics Finland 2026), elettricità, carburante, sussidio Kela e rette dell’asilo.',
  breadcrumb: 'Costo della vita',
  hero: {
    eyebrow: 'Costo della vita in Lapponia',
    title: 'Quanto costa vivere in Lapponia?',
    subtitle:
      'L’affitto in Lapponia costa meno che nel resto della Finlandia; l’auto e il riscaldamento costano di più. Ecco come si compone un budget mensile.',
  },
  authorNote:
    'Ogni dato proviene da Statistics Finland, Kela o dall’Associazione dei comuni finlandesi; gli esempi sono calcolati a partire da quei dati e mostrano la formula. Nessuna stima.',
  intro: [
    'Per i costi esistono due Lapponie. Rovaniemi è una città universitaria dove studenti e turisti si contendono i monolocali; nelle stazioni sciistiche il prezzo segue la stagione. Sulla costa e nei piccoli comuni gli alloggi sono i più ampi e i più economici, ma l’auto è obbligatoria.',
    'Qui sotto ci sono le quattro voci di cui è fatto davvero un budget mensile: affitto, elettricità, spostamenti e figli. Non esiste una statistica specifica della Lapponia sui prezzi del cibo, quindi non ne azzardiamo una.',
  ],
  sections: [
    {
      id: 'rent',
      kicker: 'Affitto',
      h2: 'Meno della media nazionale, tranne quando non è così.',
      table: {
        caption: 'Affitto medio €/m²/mese, appartamenti in affitto a libero mercato, 2026T3',
        head: ['', 'Rovaniemi', 'Lapponia (regione)', 'Intero paese'],
        rows: [
          ['Monolocali', '18,63', '17,25', '20,49'],
          ['Bilocali', '14,40', '12,87', '15,07'],
          ['Trilocali e più grandi', '12,29', '11,08', '13,98'],
          ['Tutti gli appartamenti', '14,63', '13,14', '15,99'],
        ],
        foot: 'Statistics Finland, affitti 2026T3, tabella 15fa.',
      },
      paras: [
        '<strong>Esempi:</strong> un monolocale di 30 m² a Rovaniemi circa 560 € al mese (18,63 × 30); un bilocale di 50 m² a Rovaniemi circa 720 € (14,40 × 50); un trilocale di 75 m² alla media regionale della Lapponia circa 830 € (11,08 × 75).',
        'L’eccezione è l’inverno nelle stazioni sciistiche: vicino al centro di Levi un appartamento di 80 m² in una casa in stile alpino costava 750 € al mese da maggio a novembre ma 2.000 € a settimana in alta stagione (Yle, 25 maggio 2023). Un contratto annuale per lo stesso appartamento costava 1.650 € al mese. Il prezzo di una stazione sciistica non è il prezzo della Lapponia.',
      ],
    },
    {
      id: 'electricity',
      kicker: 'Elettricità e riscaldamento',
      h2: 'Un chilowattora costa uguale, ma se ne consumano di più.',
      table: {
        caption: 'Prezzo totale dell’elettricità per le famiglie, centesimi/kWh, giugno 2026, intero paese',
        head: ['Consumo annuo', 'Prezzo totale'],
        rows: [
          ['1.000–2.499 kWh (piccolo appartamento)', '28,2'],
          ['2.500–4.999 kWh (appartamento o casa a schiera)', '23,7'],
          ['5.000–15.000 kWh (casa indipendente, senza riscaldamento elettrico)', '17,9'],
          ['oltre 15.000 kWh (casa con riscaldamento elettrico)', '14,9'],
        ],
        foot: 'Statistics Finland, prezzo dell’elettricità per tipo di consumatore, tabella 13rb. Il prezzo comprende energia, trasmissione e imposte.',
      },
      paras: [
        '<strong>Esempi:</strong> un bilocale che consuma 3.500 kWh all’anno: 3.500 × 0,237 = circa 830 € all’anno, cioè 69 € al mese; una casa indipendente con riscaldamento elettrico che consuma 18.000 kWh: 18.000 × 0,149 = circa 2.680 € all’anno, cioè 223 € al mese.',
        'Il prezzo è una media nazionale. La stagione di riscaldamento della Lapponia è più lunga di quella del sud, quindi la stessa casa qui brucia più chilowattora; chieda all’inquilino precedente o al locatore il consumo dell’anno scorso, è la stima migliore che potrà ottenere.',
      ],
    },
    {
      id: 'getting-around',
      kicker: 'Spostamenti',
      h2: 'È la voce che in Lapponia pesa di più.',
      paras: [
        'La benzina 95E10 è costata in media 2,09 € al litro in tutta la Finlandia a giugno 2026 e il diesel 2,15 € (Statistics Finland). Distanze dai percorsi in auto di LaplandVibes: Kemi–Rovaniemi 118 km, Rovaniemi–Ylläs 175 km, Sodankylä–Saariselkä 130 km.',
        '<strong>Esempio:</strong> un tragitto quotidiano di 40 km, 22 giorni lavorativi, 7 l/100 km: 880 km × 0,07 l/km × 2,09 € = circa 129 € al mese di benzina. Nel centro di Rovaniemi si può vivere senza auto; in un villaggio ai piedi dei fjäll l’auto fa parte dell’affitto anche se il contratto non lo dice.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Sussidio abitativo Kela',
      h2: 'Quanto dell’affitto viene riconosciuto.',
      table: {
        caption: 'Spese abitative massime 2026, €/mese',
        head: ['Dimensione del nucleo', 'Rovaniemi', 'Altri comuni della Lapponia'],
        rows: [
          ['1 persona', '447', '394'],
          ['2 persone', '652', '574'],
          ['3 persone', '828', '734'],
          ['4 persone', '981', '875'],
          ['Ogni persona in più', '+134', '+129'],
        ],
        foot: 'Kela, sussidio abitativo generale 2026. Il sussidio è al massimo il 70% delle spese abitative riconosciute, e un sussidio inferiore a 15 € non viene versato.',
      },
      paras: [
        '<strong>Esempio:</strong> chi vive da solo a Rovaniemi con un affitto di 600 €. Vengono riconosciuti al massimo 447 €, e il sussidio è al massimo il 70% di tale importo, quindi 313 € al mese (447 × 0,70) prima che il reddito lo riduca attraverso la franchigia di base. Il calcolatore di Kela applica il Suo reddito.',
      ],
    },
    {
      id: 'children',
      kicker: 'Bambini',
      h2: 'Asilo in base al reddito, scuola gratuita.',
      bullets: [
        'Dal 1° agosto 2026 la retta massima dell’educazione della prima infanzia è di 335 € al mese per bambino, la minima applicata è di 32 €, e il secondo figlio paga al massimo 134 € (Associazione dei comuni finlandesi). La retta segue il reddito familiare, quindi con un reddito basso può essere zero.',
        'L’educazione prescolare e l’istruzione di base sono gratuite, materiali didattici e pasti scolastici compresi (Legge sull’istruzione di base, art. 31). Per un tragitto scolastico superiore ai cinque chilometri il comune organizza il trasporto (art. 32).',
      ],
    },
    {
      id: 'summary',
      kicker: 'In sintesi',
      h2: 'Che cosa costa meno, che cosa costa di più.',
      band: true,
      cards: [
        {
          title: 'Costa meno: l’affitto',
          body: 'L’affitto medio della Lapponia è di 13,14 € al m² contro 15,99 € a livello nazionale (Statistics Finland 2026T3). Rovaniemi, con 14,63 €, sta nel mezzo.',
        },
        {
          title: 'Costa di più: spostamenti e riscaldamento',
          body: 'Distanze di cento chilometri e una lunga stagione di riscaldamento. Il prezzo di un chilowattora e di un litro è lo stesso del sud; la quantità no.',
        },
        {
          title: 'Uguale: asilo e scuola',
          body: 'Le rette dell’educazione della prima infanzia e la scuola gratuita sono nazionali. Per una famiglia con figli il risparmio maggiore in Lapponia è l’affitto.',
        },
      ],
    },
  ],
  faqs: [
    {
      q: 'Rovaniemi è una città cara in cui vivere?',
      a: 'Non per gli affitti: la media di 14,63 € al m² è inferiore ai 15,99 € nazionali (Statistics Finland 2026T3), e Rovaniemi costa meno del paese nel suo insieme in ogni taglio di appartamento, monolocali compresi (18,63 contro 20,49). Nei nuovi contratti un monolocale a Rovaniemi costa 20,14 € al m²: un monolocale che si libera adesso costa circa l’8% in più di uno già affittato, ma comunque meno di un monolocale in nuovo contratto a livello nazionale, 21,11 € al m².',
    },
    {
      q: 'Di quanto ha bisogno al mese una persona sola a Rovaniemi?',
      a: 'Calcoliamo solo ciò che ha una fonte: un monolocale di 30 m² circa 560 € al mese (18,63 × 30) e l’elettricità a 1.800 kWh all’anno circa 42 € al mese (1.800 × 0,282 / 12). Cibo, internet, assicurazioni e trasporti si aggiungono secondo le Sue abitudini.',
    },
    {
      q: 'Posso ottenere il sussidio abitativo in Lapponia?',
      a: 'Alle stesse condizioni che in tutta la Finlandia. A Rovaniemi le spese abitative di un nucleo di una persona vengono riconosciute fino a 447 € al mese, negli altri comuni della Lapponia fino a 394 €, e il sussidio è al massimo il 70% di tale importo (Kela 2026).',
    },
  ],
  sources: pickSources('it', SOURCES, common.sourceLabels),
};

export default copy;
