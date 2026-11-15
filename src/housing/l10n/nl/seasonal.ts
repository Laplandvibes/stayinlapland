/**
 * Hollanti (nl) · seasonal. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/seasonal.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'yle2017', 'yle2023', 'yle2026yllas', 'kesko2026', 'yle2026rovaniemi', 'yle2025das',
  'tkVaesto', 'kittila', 'inari', 'sodankyla', 'rakli', 'dvv',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Huisvesting voor seizoenswerkers in Lapland: Levi, Ylläs',
  metaDescription:
    'Waar seizoenswerkers wonen in Levi, Ylläs, Saariselkä en Rovaniemi: personeelshuisvesting, seizoenshuur of gemeentewoning, en wat u vraagt voordat u tekent.',
  breadcrumb: 'Seizoenswerkers',
  hero: {
    eyebrow: 'Seizoenswerk, winter en zomer',
    title: 'Waar wonen seizoenswerkers?',
    subtitle:
      'Een gedeelde personeelswoning, een vakantieappartement op seizoenshuur of een gemeentelijke huurwoning. De woningnood in de skigebieden is echt, en zo gaan mensen ermee om.',
  },
  authorNote:
    'Cijfers over het tekort uit het nieuws van Yle en Kesko 2017–2026, zoekkanalen van de eigen pagina’s van de gemeenten. Onze zustersite laplandwork.com behandelt de banen zelf.',
  intro: [
    'Het toeristengebied Levi neemt voor het winterseizoen ruim 2.000 seizoenswerkers aan, schatte Kristiina Kukkohovi, directeur van Levin Matkailu Oy, al in 2017, en volgens haar werd de woningnood in elk skigebied van Lapland een groot probleem (Yle, 25 oktober 2017). Het is niet beter geworden: in het voorjaar van 2023 berichtte Yle over werknemers in Levi en Ylläs die in vakantieappartementen wonen waar ze geen adres kunnen laten registreren.',
    'In juni 2026 besloten de eigenaren van K-Market Jounin Kauppa in Äkäslompolo drie rijtjeshuizen te bouwen voor hun eigen personeel, omdat er te weinig woningen zijn en de huren hoog zijn opgelopen (Yle, 16 juni 2026). De winkel heeft ongeveer 20 seizoenswerkers per jaar, en ruwweg de helft van hen heeft een huurwoning nodig (Kesko, 17 juni 2026).',
    'In Rovaniemi bracht het wervingsbureau Career.fi ongeveer 250 werknemers naar Lapland en bracht ze onder op een tiental verschillende plekken; twee Estse werknemers woonden twee winters bij het gezin van de groeidirecteur nadat hun huurwoning een leidingrenovatie inging. Woonruimte vinden is “elk jaar een hele toestand” (Yle, 9 maart 2026).',
  ],
  sections: [
    {
      id: 'three-ways',
      kicker: 'Drie manieren om een seizoen te wonen',
      h2: 'Personeelshuisvesting, een seizoenshuur of een gemeentelijke woning.',
      cards: [
        {
          title: '1. Personeelshuisvesting',
          body:
            'Het meest gegeven antwoord in de skigebieden: de werkgever huurt rijtjeshuizen, huisjes en vakantieappartementen voor het personeel voor het hele seizoen en houdt de huur in op uw loon. In Ruka huurde een restaurantgroep in 2017 al vier vakantieobjecten van november tot mei voor haar personeel (Yle, 25 oktober 2017). Het voordeel: er is een dak als u aankomt. Het risico: de woning eindigt zodra de baan eindigt.',
        },
        {
          title: '2. Een vakantieappartement op seizoenshuur',
          body:
            'Een appartement van 80 m² in een alpine huis in Levi: € 750 per maand van mei tot november, € 2.000 per week in het hoogseizoen, € 1.650 per maand het hele jaar door (Yle, 25 mei 2023). Goedkoop in de zomer, onbetaalbaar in de winter. Bij een vakantieappartement kunt u bovendien geen officieel adres krijgen (Yle, 25 mei 2023).',
        },
        {
          title: '3. Een gemeentelijke huurwoning',
          body:
            'Kittilän Vuokratalot Oy, Inarin Vuokra-asunnot Oy (meer dan 500 woningen in Ivalo, Inari en Saariselkä) en Asentopuulaaki in Sodankylä (ongeveer 720 woningen). Meld u in de zomer aan voordat het seizoen begint; vraag het bedrijf hoe lang een aanvraag geldig blijft.',
        },
      ],
    },
    {
      id: 'places',
      kicker: 'Plaatsen',
      h2: 'Dezelfde woningnood, verschillende oplossingen.',
      band: true,
      cards: [
        {
          title: 'Levi en Kittilä',
          image: { src: '/images/housing-levi-keskusta-card.webp', alt: 'Houten gebouwen in het centrum van Levi op een zomerse dag' },
          body:
            'De bevolking van Kittilä groeide in 2025 met 2,0 procent, na Pelkosenniemi (2,4 procent) de sterkste groei van alle gemeenten in Lapland (Statistics Finland). Werkgevers huren rijtjeshuizen voor personeel voor het hele seizoen, en alle anderen zoeken in de Facebookgroep voor woningen in Levi. Kittilän Vuokratalot Oy biedt woningen aan in het dorp Kittilä en in Levi, in Sirkka.',
          href: 'https://kittila.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot',
          linkLabel: 'Kittilän Vuokratalot Oy',
          event: 'kittila',
        },
        {
          title: 'Ylläs: Äkäslompolo en Ylläsjärvi',
          image: { src: '/images/housing-seasonal-card-yllas-tunturi.webp', alt: 'Ylläs gezien over het meer bij Äkäslompolo op een septemberochtend' },
          body:
            'Winkeliers bouwen voor zichzelf: de drie rijtjeshuizen van Jounin Kauppa worden volgens de huidige planning in november–december 2026 opgeleverd, met studio’s, tweeslaapkamerwoningen om te delen en gezinswoningen met drie slaapkamers, elk met een sauna (Kesko, 17 juni 2026). Het eerste modulaire gebouw van het dorp was in oktober 2025 bijna klaar (Yle, 16 juni 2026).',
          href: 'https://www.kesko.fi/media/uutiset-ja-tiedotteet/uutiset/2026/lapin-asuntopulaa-ratkomassa-k-market-jounin-kaupan-kauppiaat-rakennuttavat-kolme-rivitaloa-tyontekijoilleen/',
          linkLabel: 'Kesko, 17 juni 2026',
          event: 'yllas',
        },
        {
          title: 'Saariselkä en Ivalo',
          image: { src: '/images/housing-saariselka-hirsitalot.webp', alt: 'Blokhutten in Saariselkä in november' },
          body:
            'Het gemeentelijke bedrijf Inarin Vuokra-asunnot Oy heeft woningen in zowel Saariselkä als Ivalo, en de pagina van de gemeente noemt particuliere verhuurders en de Facebookgroep Sodankylä–Inari–Utsjoki. Vraag tijdens het gesprek of de werkgever huisvesting biedt.',
          href: 'https://www.inari.fi/fi/palvelut/asuminen.html',
          linkLabel: 'inari.fi: wonen',
          event: 'inari',
        },
        {
          title: 'Rovaniemi',
          image: { src: '/images/housing-rovaniemi-lappia-card.webp', alt: 'Lappia-huis in het centrum van Rovaniemi' },
          body:
            'Studenten, toeristen en seizoenswerkers strijden tegelijk om dezelfde studio’s: in de zomer van 2026 ontving de studentenhuisvestingsstichting DAS ongeveer 550 spoedaanvragen, 15 procent meer dan een jaar eerder, en bijna 90 procent van de aanvragers wilde een studio (Yle, 27 juli 2026).',
          href: 'https://yle.fi/a/74-20213937',
          linkLabel: 'Yle, 9 maart 2026: woningnood in Rovaniemi',
          event: 'rovaniemi',
        },
        {
          title: 'Ruka en Kuusamo',
          image: { src: '/images/housing-ruka-kyla-card.webp', alt: 'Het plein en de rode uitkijktoren in het autovrije dorp Ruka in de zomer' },
          body:
            'Ruka ligt in Noord-Österbotten, niet in Lapland, maar het seizoen en de woningnood zijn dezelfde. In 2017 groeide de restaurantgroep van Ruka van ruim 20 vaste medewerkers naar meer dan 80 in de winter en huurde ze van november tot mei vier vakantieobjecten voor personeel (Yle, 25 oktober 2017).',
          href: 'https://yle.fi/a/3-9895965',
          linkLabel: 'Yle, 25 oktober 2017',
          event: 'ruka',
        },
      ],
    },
    {
      id: 'summer',
      kicker: 'Het zomerseizoen',
      h2: 'De zomer is niet stil.',
      paras: [
        'Zomerwerk in Lapland is een seizoen op zich: het toerisme in Rovaniemi dat het hele jaar doorgaat, de wandelgebieden, de bouwplaatsen en de zomerpiek van de winkels. In de zomer worden vakantieappartementen per maand verhuurd (€ 750 per maand van mei tot november in het voorbeeld van Levi, Yle, 25 mei 2023).',
        'In Rovaniemi hoopt de groeidirecteur van een wervingsbureau seizoenswerkers in de winter onder één dak te brengen, en bouwvakkers en sportteams in de zomer (Yle, 9 maart 2026). Voor wie in de zomer aankomt is dat goed nieuws: personeelshuisvesting die voor de winter is gebouwd, staat in de zomer leeg.',
      ],
      image: {
        src: '/images/housing-jouninkauppa.webp',
        alt: 'De voorkant van de winkel K-Market Jounin Kauppa in Äkäslompolo in de zomer',
        caption:
          'K-Market Jounin Kauppa, Äkäslompolo, juli 2026. De eigenaren bouwen drie rijtjeshuizen voor hun personeel (Kesko, 17 juni 2026). Foto: LaplandVibes.',
        ratio: '4/3',
      },
    },
    {
      id: 'ask',
      kicker: 'Voordat u tekent',
      h2: 'Vraag uw werkgever dit.',
      bullets: [
        'Maakt de woning deel uit van het arbeidspakket of is het een apart huurcontract? Hoeveel wordt er van uw loon ingehouden, en staat het op de loonstrook?',
        'Een eigen kamer of gedeeld? Hoeveel mensen wonen er in de woning, en zit er een slot op uw deur?',
        'Wat gebeurt er met het huurcontract als de baan eindigt voordat het seizoen voorbij is, of er langer doorloopt?',
        'Kunt u zich daar laten inschrijven? De adreswijziging bij DVV moet binnen een week na de verhuizing worden doorgegeven, en een vakantieappartement komt daar vaak niet voor in aanmerking.',
        'Wie betaalt de elektriciteit, het water en het internet?',
        'Hoe komt u zonder auto op uw werk: afstand, bus, skibus?',
        'Is er een waarborgsom, en wanneer krijgt u die terug? De wet: vanaf 1 oktober 2026 binnen 14 dagen nadat de huur is geëindigd (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Zorgt de werkgever in Levi voor huisvesting van seizoenswerkers?',
      a: 'Vaak wel, maar niet altijd en niet gratis. Werkgevers huren rijtjeshuizen en vakantieappartementen voor personeel voor het hele seizoen en houden de huur in op uw loon. Laat het aanbod schriftelijk vastleggen en controleer wat er met de woning gebeurt als de baan eindigt.',
    },
    {
      q: 'Wanneer moet ik beginnen met zoeken naar huisvesting voor het winterseizoen?',
      a: 'In de zomer. Meld u vóór het seizoen aan bij de gemeentelijke woningbedrijven (Kittilä, Inari, Sodankylä), en in het voorbeeld van Levi kon een vakantieappartement alleen van mei tot november per maand worden gehuurd (Yle, 25 mei 2023).',
    },
    {
      q: 'Kan ik het hele seizoen in een vakantieappartement wonen?',
      a: 'Ja, als de eigenaar een seizoenshuur aanbiedt, maar bij een vakantieappartement kunt u geen officieel adres krijgen (Yle, 25 mei 2023).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'De eerste nachten',
    h2: 'Voordat u de sleutels in handen hebt.',
    lead:
      'Het seizoen begint vaak voordat de woning vrij is. Onze partnerzoekmachine toont beschikbare kamers en appartementen tegen de prijzen van vandaag.',
    chips: [
      { label: 'Levi', destination: 'Levi', sid: 'seasonal_first_nights_levi' },
      { label: 'Ylläs', destination: 'Äkäslompolo', sid: 'seasonal_first_nights_yllas' },
      { label: 'Saariselkä', destination: 'Saariselkä', sid: 'seasonal_first_nights_saariselka' },
      { label: 'Rovaniemi', destination: 'Rovaniemi', sid: 'seasonal_first_nights_rovaniemi' },
    ],
  },
  sources: pickSources('nl', SOURCES, common.sourceLabels),
};

export default copy;
