/**
 * Italia (it) · moving. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/moving.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'dvv', 'traficom', 'tkSahko', 'tkPolttoaine', 'kuntaliitto', 'perusopetuslaki', 'fmi', 'foreca',
  'lvDrive', 'lapha', 'laplandwork', 'ahvl', 'rakli',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Trasferirsi in Lapponia: guida pratica al primo mese',
  metaDescription:
    'Cambio di indirizzo, pneumatici invernali, rette dell’asilo, elettricità e notte polare: che cosa sistemare nel primo mese nella Lapponia finlandese.',
  breadcrumb: 'Trasferirsi in Lapponia',
  hero: {
    eyebrow: 'Trasferirsi in Lapponia: i primi 30 giorni',
    title: 'Trasferirsi in Lapponia.',
    subtitle:
      'Cambio di indirizzo, pneumatici invernali, asilo, contratto di elettricità e notte polare: che cosa sistemare nel primo mese, e in quale ordine.',
  },
  authorNote:
    'Scadenze di DVV, Traficom e dell’Associazione dei comuni finlandesi, durata della notte polare dell’Istituto meteorologico finlandese, distanze dai percorsi in auto di LaplandVibes. Verificato il 15 novembre 2026.',
  intro: [
    'Le pratiche per trasferirsi in Lapponia sono le stesse di qualsiasi altro posto in Finlandia, ma tre cose pesano più qui che al sud: l’inverno dura metà dell’anno, le distanze si misurano in centinaia di chilometri e nei piccoli comuni i servizi sono concentrati in un solo posto. Questa pagina è una lista di controllo nell’ordine in cui le cose vanno fatte.',
    'Se si trasferisce in Finlandia dall’estero, permessi di soggiorno, codice personale di identità, tessera fiscale e conto bancario sono trattati sul nostro sito gemello <a href="https://laplandwork.com/moving-to-finland" target="_blank" rel="noopener">laplandwork.com</a>. Questa pagina comincia quando ha le chiavi in mano.',
  ],
  sections: [
    {
      id: 'week-one',
      kicker: 'La prima settimana',
      h2: 'Quattro comunicazioni, una scadenza.',
      bullets: [
        '<strong>Comunicazione del cambio di indirizzo al DVV</strong>: al più presto un mese prima del giorno del trasloco e al più tardi una settimana dopo il trasloco (DVV). La stessa comunicazione arriva a Posti. I servizi comunali (asilo, scuola, centro sanitario) seguono il comune di residenza registrato, quindi la presenti subito.',
        '<strong>Contratto di elettricità.</strong> Il prezzo totale dell’elettricità per una famiglia che consuma 2.500–4.999 kWh all’anno era in media di 23,7 centesimi per kWh in tutta la Finlandia a giugno 2026, e di 14,9 centesimi nella fascia oltre i 15.000 kWh, a cui appartiene una casa con riscaldamento elettrico (Statistics Finland). La stagione di riscaldamento in Lapponia è lunga, quindi stimi il consumo per eccesso.',
        '<strong>L’assistenza sanitaria</strong> è gestita dalla contea del benessere della Lapponia (Lapha). Le cure non urgenti passano dal centro sanitario locale; trovi quello più vicino sul sito della contea e si registri su Omakanta.',
        '<strong>Internet.</strong> Prima di firmare, chieda alla società condominiale o al locatore se c’è la fibra. Nelle zone poco popolate un router mobile è spesso l’unica opzione, e chi lavora da remoto dovrebbe prima provare la connessione nell’appartamento.',
      ],
    },
    {
      id: 'car',
      kicker: 'Auto e inverno',
      h2: 'A Rovaniemi si può fare a meno dell’auto. Altrove no.',
      bullets: [
        '<strong>Pneumatici invernali:</strong> in Finlandia gli pneumatici invernali vanno usati dal 1° novembre al 31 marzo se lo richiedono il meteo o le condizioni della strada. I chiodati sono consentiti nello stesso periodo e in altri momenti quando le condizioni lo richiedono. Le scanalature principali di un pneumatico invernale devono avere una profondità di almeno 3,0 mm (Traficom).',
        '<strong>Carburante:</strong> la benzina 95E10 è costata in media 2,09 € al litro in tutta la Finlandia a giugno 2026 e il diesel 2,15 € (Statistics Finland). Le lunghe distanze ne fanno una voce più grossa in Lapponia che al sud.',
        '<strong>Distanze</strong> dai percorsi in auto di LaplandVibes: Oulu–Kemi 105 km, Kemi–Rovaniemi 118 km, Rovaniemi–Ylläs (Äkäslompolo) 175 km, Sodankylä–Saariselkä 130 km, Levi–Kilpisjärvi 258 km. La Lapponia è più grande di come appare sulla mappa.',
        '<strong>Preriscaldatore del motore e riscaldatore dell’abitacolo.</strong> Con il gelo intenso l’auto si scalda prima di partire; una colonnina di riscaldamento nel parcheggio è una dotazione standard in Lapponia. Faccia scrivere nel contratto un posto auto con colonnina.',
      ],
      image: {
        src: '/images/housing-kittila-airport.webp',
        alt: 'Il terminal dell’aeroporto di Kittilä in una giornata d’estate',
        caption: 'Aeroporto di Kittilä, luglio 2026. Levi e Ylläs sono serviti da Kittilä, Rovaniemi dal proprio aeroporto e Saariselkä da Ivalo. Foto: LaplandVibes.',
        ratio: '16/9',
      },
    },
    {
      id: 'children',
      kicker: 'Bambini',
      h2: 'L’asilo si paga in base al reddito, la scuola è gratuita.',
      bullets: [
        '<strong>Le rette dell’educazione della prima infanzia</strong> seguono il reddito familiare: dal 1° agosto 2026 la retta massima è di 335 € al mese per bambino e la minima applicata è di 32 €. Il secondo figlio paga al massimo il 40% della retta del figlio più piccolo, quindi al massimo 134 € (Associazione dei comuni finlandesi).',
        '<strong>L’educazione prescolare e l’istruzione di base</strong> sono gratuite, materiali didattici e pasti scolastici compresi (Legge sull’istruzione di base, art. 31). Il trasporto scolastico è organizzato quando il tragitto supera i cinque chilometri (art. 32), e nei piccoli comuni fa parte della vita quotidiana.',
        'Il posto all’asilo si richiede al comune, e il comune è determinato dall’indirizzo registrato presso il DVV. Per questo la comunicazione dell’indirizzo viene per prima, non per ultima.',
      ],
    },
    {
      id: 'light',
      kicker: 'Luce e buio',
      h2: 'La notte polare è più breve di quanto si pensi. Tranne a Utsjoki.',
      paras: [
        'Il kaamos, la notte polare, significa che il sole non sale sopra l’orizzonte. Secondo l’Istituto meteorologico finlandese dura quasi due mesi a Nuorgam, Utsjoki, dal 25 novembre al 17 gennaio, e solo quattro giorni appena prima di Natale a Sodankylä. La linea della notte polare passa un po’ a nord del Circolo polare artico, quindi Rovaniemi non ha una vera notte polare (Foreca): in inverno il sole resta basso, ma sorge.',
        'L’estate ribalta le cose. La linea del sole di mezzanotte si raggiunge al Circolo polare artico a Rovaniemi, e a Nuorgam il sole non tramonta dal 16 maggio al 29 luglio (Istituto meteorologico finlandese). Le tende oscuranti sono l’acquisto chiave dell’estate, una lampada a luce diurna quello dell’inverno.',
      ],
    },
    {
      id: 'before-signing',
      kicker: 'Prima di firmare',
      h2: 'Chieda questo al locatore.',
      bullets: [
        'Tipo di riscaldamento e chi lo paga: il teleriscaldamento di solito è compreso nell’affitto, il riscaldamento elettrico finisce nella Sua bolletta.',
        'Un posto auto con colonnina di riscaldamento e un deposito per l’attrezzatura invernale: sci, slittino, pneumatici invernali.',
        'Distanza dal negozio, dal centro sanitario e dalla scuola più vicini, e se in inverno c’è un autobus che ci arriva.',
        'Deposito e sua restituzione: al massimo tre mensilità (Legge sugli affitti abitativi, art. 8), e dal 1° ottobre 2026 la restituzione entro 14 giorni dalla fine del contratto (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Entro quando devo comunicare il cambio di indirizzo?',
      a: 'Al più presto un mese prima del giorno del trasloco e al più tardi una settimana dopo il trasloco (DVV). Una sola comunicazione vale sia per l’Agenzia per i servizi digitali e i dati sulla popolazione sia per Posti.',
    },
    {
      q: 'Quando sono obbligatori gli pneumatici invernali in Lapponia?',
      a: 'La legge indica dal 1° novembre al 31 marzo se lo richiedono il meteo o le condizioni della strada, e i chiodi sono consentiti nello stesso periodo e in altri momenti quando le condizioni lo richiedono (Traficom). Quindi gli pneumatici si cambiano secondo le condizioni, non secondo il calendario.',
    },
    {
      q: 'Rovaniemi ha una notte polare?',
      a: 'Non una vera: la linea della notte polare passa un po’ a nord del Circolo polare artico (Foreca). A Sodankylä il sole resta sotto l’orizzonte per quattro giorni prima di Natale e a Nuorgam per quasi due mesi (Istituto meteorologico finlandese).',
    },
  ],
  cta: {
    partner: 'cars',
    kicker: 'Un’auto per le prime settimane',
    h2: 'Visite, trasloco, spesa.',
    lead:
      'La Sua auto spesso arriva più tardi. Un’auto a noleggio dall’aeroporto copre le visite e le prime settimane; la ricerca del nostro partner confronta le società di noleggio in un colpo solo.',
    chips: [
      { label: 'Rovaniemi (RVN)', destination: 'RVN', sid: 'moving_car_rvn' },
      { label: 'Kittilä (KTT)', destination: 'KTT', sid: 'moving_car_ktt' },
      { label: 'Kemi-Tornio (KEM)', destination: 'KEM', sid: 'moving_car_kem' },
      { label: 'Ivalo (IVL)', destination: 'IVL', sid: 'moving_car_ivl' },
    ],
  },
  sources: pickSources('it', SOURCES, common.sourceLabels),
};

export default copy;
