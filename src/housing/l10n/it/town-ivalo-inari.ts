/**
 * Italia (it) · town-ivalo-inari. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/ivalo-inari.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'inari', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Affitti a Ivalo e Inari: società comunale e locatori privati',
  metaDescription:
    'Affittare a Ivalo, Inari e Saariselkä: oltre 500 appartamenti comunali (Inarin Vuokra-asunnot Oy), locatori privati elencati dal comune e sostegno di Kela.',
  breadcrumb: 'Ivalo e Inari',
  hero: {
    eyebrow: 'Comune di Inari, 7.244 abitanti',
    title: 'Affitti a Ivalo e Inari.',
    subtitle:
      'Il mercato degli affitti più settentrionale della Finlandia: una società comunale, pochi locatori privati e la stagione di Saariselkä. Da dove cominciare.',
  },
  authorNote:
    'Inarin Vuokra-asunnot Oy e i locatori privati dalla pagina sull’abitare del Comune di Inari, popolazione da Statistics Finland, affitti al m² da Statistics Finland (regione della Lapponia 2026T3). Verificato il 15 novembre 2026.',
  intro: [
    'Il comune di Inari ha 7.244 abitanti (Statistics Finland, 31 dicembre 2025), e secondo il comune l’interesse a viverci è cresciuto, per cui ha compilato sulla sua pagina un elenco dei fornitori di alloggi in affitto (inari.fi).',
    'La società comunale Inarin Vuokra-asunnot Oy affitta oltre 500 appartamenti a Ivalo, Inari, Saariselkä, Nellim e Sevettijärvi, dai monolocali agli appartamenti per famiglie. I locatori privati dell’elenco del comune sono Bilto Oy, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg Oy e Uni Kodit (inari.fi).',
    'Statistics Finland non pubblica un dato separato sugli affitti per Inari, quindi qui sotto è riportato il dato regionale della Lapponia. L’alloggio per i lavoratori stagionali di Saariselkä ha una pagina a parte.',
  ],
  sections: [
    {
      id: 'channels',
      kicker: 'A chi rivolgersi',
      h2: 'La società comunale e l’elenco del comune.',
      band: true,
      cards: [
        {
          title: 'Inarin Vuokra-asunnot Oy',
          body: 'La società comunale di alloggi: oltre 500 appartamenti a Ivalo, Inari, Saariselkä, Nellim e Sevettijärvi, a breve distanza dai servizi di base. Appartamenti liberi e domande sul sito della società.',
          href: 'https://inarinvuokra-asunnot.fi/',
          linkLabel: 'inarinvuokra-asunnot.fi',
          event: 'inari_company',
        },
        {
          title: 'Comune di Inari: locatori privati',
          body: 'La pagina del comune sull’abitare elenca Bilto Oy, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg Oy e Uni Kodit con i recapiti, oltre al gruppo Facebook degli affitti Sodankylä–Inari–Utsjoki. Altre informazioni da inari@inari.fi.',
          href: 'https://www.inari.fi/fi/palvelut/asuminen.html',
          linkLabel: 'inari.fi: Abitare',
          event: 'inari_city',
        },
        {
          title: 'Oikotie e Vuokraovi',
          body: 'Annunci di privati nel comune di Inari; le case di Ivalo e Saariselkä sono nella stessa ricerca. Gli annunci sono pochi, quindi imposti un avviso di ricerca.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/inari',
          linkLabel: 'Oikotie: affitti a Inari',
          event: 'oikotie',
        },
        {
          title: 'Per i lavoratori stagionali di Saariselkä',
          body: 'Anche i datori di lavoro di Saariselkä alloggiano da sé il personale, e la società comunale ha appartamenti a Saariselkä. Chieda dell’alloggio al colloquio; il quadro completo è nella pagina dei lavoratori stagionali.',
          href: '/seasonal-worker-housing',
          linkLabel: 'Alloggio per lavoratori stagionali',
          event: 'seasonal_page',
        },
      ],
    },
    {
      id: 'prices',
      kicker: 'Quanto costa l’affitto',
      h2: 'Affitti regionali della Lapponia al m², luglio–settembre 2026.',
      table: {
        caption: 'Affitto medio €/m²/mese, appartamenti in affitto a libero mercato, 2026T3',
        head: ['', 'Lapponia (regione)', 'Intero paese'],
        rows: [
          ['Monolocali', '17,25', '20,49'],
          ['Bilocali', '12,87', '15,07'],
          ['Trilocali e più grandi', '11,08', '13,98'],
          ['Tutti gli appartamenti', '13,14', '15,99'],
        ],
        foot: 'Statistics Finland, affitti 2026T3, tabella 15fa. Per Inari non viene pubblicato un dato separato.',
      },
    },
    {
      id: 'housing-allowance',
      kicker: 'Sussidio abitativo Kela',
      h2: 'Inari rientra negli «altri comuni» di Kela.',
      table: {
        caption: 'Spese abitative massime 2026, €/mese, gruppo Kela «altri comuni»',
        head: ['Dimensione del nucleo', 'Spese abitative massime'],
        rows: [
          ['1 persona', '394'],
          ['2 persone', '574'],
          ['3 persone', '734'],
          ['4 persone', '875'],
          ['Ogni persona in più', '+129'],
        ],
        foot: 'Kela, sussidio abitativo generale 2026. Il sussidio è al massimo il 70% delle spese abitative riconosciute; un sussidio inferiore a 15 € non viene versato.',
      },
    },
    {
      id: 'contract',
      kicker: 'Il contratto',
      h2: 'Il deposito e la sua restituzione.',
      bullets: [
        'Il deposito è al massimo di tre mensilità (Legge sugli affitti abitativi, art. 8).',
        'Dal 1° ottobre 2026 il deposito deve essere restituito, o la sua trattenuta motivata per iscritto, entro 14 giorni dalla fine del contratto (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Dove trovo un affitto a Ivalo?',
      a: 'Dalla società comunale Inarin Vuokra-asunnot Oy, che ha oltre 500 appartamenti a Ivalo, Inari e Saariselkä, oppure dai locatori privati elencati dal comune (Bilto, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg, Uni Kodit). I portali hanno pochi annunci.',
    },
    {
      q: 'Ci sono affitti a Saariselkä?',
      a: 'Anche la società comunale ha appartamenti a Saariselkä, e i datori di lavoro alloggiano da sé il personale stagionale. Sul mercato libero gli appartamenti di Saariselkä sono per lo più case vacanza.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Le prime notti',
    h2: 'In attesa delle chiavi.',
    lead: 'La ricerca del nostro partner mostra le camere libere a Ivalo e Saariselkä ai prezzi di oggi.',
    chips: [
      { label: 'Ivalo', destination: 'Ivalo', sid: 'rentals_ivalo_first_weeks' },
      { label: 'Saariselkä', destination: 'Saariselkä', sid: 'rentals_saariselka_first_weeks' },
    ],
  },
  sources: pickSources('it', SOURCES, common.sourceLabels),
};

export default copy;
