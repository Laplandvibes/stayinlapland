/**
 * Saksa (de) · seasonal. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
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
  metaTitle: 'Wohnen bei Saisonarbeit in Lappland: Levi, Ylläs, Saariselkä',
  metaDescription:
    'Wo Saisonkräfte in Levi, Ylläs, Saariselkä und Rovaniemi wohnen: Personalunterkunft, Saisonmiete oder kommunale Wohnung, und was Sie vorab klären sollten.',
  breadcrumb: 'Saisonkräfte',
  hero: {
    eyebrow: 'Saisonarbeit, Winter und Sommer',
    title: 'Wo wohnen Saisonkräfte?',
    subtitle:
      'In einer gemeinsamen Personalwohnung, in einer Ferienwohnung mit Saisonmietvertrag oder in einer kommunalen Mietwohnung. Der Wohnungsmangel in den Skiresorts ist real, und so kommen die Menschen damit zurecht.',
  },
  authorNote:
    'Zahlen zum Wohnungsmangel aus den Nachrichten von Yle und Kesko 2017–2026, Suchkanäle von den eigenen Seiten der Gemeinden. Unsere Schwesterseite laplandwork.com kümmert sich um die Stellen selbst.',
  intro: [
    'Das Tourismusgebiet Levi stellt für die Wintersaison gut 2.000 Saisonkräfte ein, schätzte schon 2017 Kristiina Kukkohovi, Geschäftsführerin von Levin Matkailu Oy, und sie sagte, der Wohnungsmangel werde in jedem Resort Lapplands zu einem großen Problem (Yle, 25. Oktober 2017). Entspannt hat er sich nicht: Im Frühjahr 2023 berichtete Yle über Beschäftigte in Levi und Ylläs, die in Ferienwohnungen leben, in denen sie keine Adresse anmelden können.',
    'Im Juni 2026 beschlossen die Inhaber des K-Market Jounin Kauppa in Äkäslompolo, drei Reihenhäuser für ihr eigenes Personal zu bauen, weil es zu wenige Wohnungen gibt und die Mieten stark gestiegen sind (Yle, 16. Juni 2026). Der Laden beschäftigt jährlich rund 20 Saisonkräfte, und etwa die Hälfte von ihnen braucht eine Mietwohnung (Kesko, 17. Juni 2026).',
    'In Rovaniemi holte das Personalvermittlungsunternehmen Career.fi rund 250 Arbeitskräfte nach Lappland und brachte sie an etwa zehn verschiedenen Orten unter. Zwei estnische Arbeiter wohnten zwei Winter lang bei der Familie des Wachstumsdirektors, nachdem ihre Mietwohnung in die Rohrsanierung gegangen war. Die Wohnungssuche sei „jedes Jahr ein ziemliches Schauspiel“ (Yle, 9. März 2026).',
  ],
  sections: [
    {
      id: 'three-ways',
      kicker: 'Drei Wege, eine Saison zu wohnen',
      h2: 'Personalunterkunft, Saisonmietvertrag oder kommunale Wohnung.',
      cards: [
        {
          title: '1. Personalunterkunft',
          body:
            'Die häufigste Antwort in den Skiresorts: Der Arbeitgeber mietet Reihenhäuser, Hütten und Ferienwohnungen für das Personal für die ganze Saison und zieht die Miete vom Lohn ab. In Ruka mietete eine Restaurantgruppe 2017 bereits vier Ferienobjekte von November bis Mai für ihr Personal (Yle, 25. Oktober 2017). Der Vorteil: Bei Ihrer Ankunft steht ein Dach bereit. Das Risiko: Mit dem Job endet auch die Wohnung.',
        },
        {
          title: '2. Eine Ferienwohnung mit Saisonmietvertrag',
          body:
            'Eine Wohnung von 80 m² in einem Alpenhaus in Levi: 750 € im Monat von Mai bis November, 2.000 € pro Woche in der Hochsaison, 1.650 € im Monat ganzjährig (Yle, 25. Mai 2023). Im Sommer günstig, im Winter unmöglich. Außerdem erhalten Sie in einer Ferienwohnung keine amtliche Adresse (Yle, 25. Mai 2023).',
        },
        {
          title: '3. Eine kommunale Mietwohnung',
          body:
            'Kittilän Vuokratalot Oy, Inarin Vuokra-asunnot Oy (über 500 Wohnungen in Ivalo, Inari und Saariselkä) und Asentopuulaaki in Sodankylä (rund 720 Wohnungen). Bewerben Sie sich im Sommer vor Saisonbeginn und fragen Sie die Gesellschaft, wie lange eine Bewerbung gültig bleibt.',
        },
      ],
    },
    {
      id: 'places',
      kicker: 'Orte',
      h2: 'Derselbe Mangel, verschiedene Lösungen.',
      band: true,
      cards: [
        {
          title: 'Levi und Kittilä',
          image: { src: '/images/housing-levi-keskusta-card.webp', alt: 'Holzgebäude im Zentrum von Levi an einem Sommertag' },
          body:
            'Die Einwohnerzahl von Kittilä wuchs 2025 um 2,0 Prozent, nach Pelkosenniemi (2,4 Prozent) der zweithöchste Wert aller Gemeinden Lapplands (Statistik Finnland). Arbeitgeber mieten Reihenhäuser für ihr Personal für die ganze Saison, alle anderen suchen in der Levi-Wohnungsgruppe auf Facebook. Kittilän Vuokratalot Oy führt Wohnungen sowohl im Dorf Kittilä als auch in Levi, in Sirkka.',
          href: 'https://kittila.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot',
          linkLabel: 'Kittilän Vuokratalot Oy',
          event: 'kittila',
        },
        {
          title: 'Ylläs: Äkäslompolo und Ylläsjärvi',
          image: { src: '/images/housing-seasonal-card-yllas-tunturi.webp', alt: 'Der Ylläs, über den See bei Äkäslompolo hinweg gesehen, an einem Septembermorgen' },
          body:
            'Ladenbesitzer bauen für sich selbst: Die drei Reihenhäuser von Jounin Kauppa sollen nach heutigem Stand im November–Dezember 2026 fertig sein, mit Studios, Zweizimmerwohnungen für Wohngemeinschaften und Dreizimmerwohnungen für Familien, jeweils mit Sauna (Kesko, 17. Juni 2026). Das erste Modulgebäude des Dorfes war im Oktober 2025 fast fertig (Yle, 16. Juni 2026).',
          href: 'https://www.kesko.fi/media/uutiset-ja-tiedotteet/uutiset/2026/lapin-asuntopulaa-ratkomassa-k-market-jounin-kaupan-kauppiaat-rakennuttavat-kolme-rivitaloa-tyontekijoilleen/',
          linkLabel: 'Kesko, 17. Juni 2026',
          event: 'yllas',
        },
        {
          title: 'Saariselkä und Ivalo',
          image: { src: '/images/housing-saariselka-hirsitalot.webp', alt: 'Blockhäuser in Saariselkä im November' },
          body:
            'Die kommunale Gesellschaft Inarin Vuokra-asunnot Oy hat Wohnungen sowohl in Saariselkä als auch in Ivalo, und die Seite der Gemeinde führt private Vermieter und die Facebook-Gruppe Sodankylä–Inari–Utsjoki auf. Fragen Sie im Vorstellungsgespräch, ob der Arbeitgeber eine Unterkunft stellt.',
          href: 'https://www.inari.fi/fi/palvelut/asuminen.html',
          linkLabel: 'inari.fi: Wohnen',
          event: 'inari',
        },
        {
          title: 'Rovaniemi',
          image: { src: '/images/housing-rovaniemi-lappia-card.webp', alt: 'Das Lappia-Haus im Zentrum von Rovaniemi' },
          body:
            'Studierende, Touristen und Saisonkräfte konkurrieren gleichzeitig um dieselben Studios: Im Sommer 2026 erhielt die Studierendenwohnstiftung DAS rund 550 dringende Bewerbungen, 15 Prozent mehr als ein Jahr zuvor, und fast 90 Prozent der Bewerber wollten ein Studio (Yle, 27. Juli 2026).',
          href: 'https://yle.fi/a/74-20213937',
          linkLabel: 'Yle, 9. März 2026: Wohnungsmangel in Rovaniemi',
          event: 'rovaniemi',
        },
        {
          title: 'Ruka und Kuusamo',
          image: { src: '/images/housing-ruka-kyla-card.webp', alt: 'Der Platz und der rote Aussichtsturm im autofreien Dorf Ruka im Sommer' },
          body:
            'Ruka liegt in Nordösterbotten, nicht in Lappland, aber Saison und Mangel sind dieselben. 2017 wuchs die Restaurantgruppe von Ruka von gut 20 festen Beschäftigten auf über 80 im Winter und mietete von November bis Mai vier Ferienobjekte für das Personal (Yle, 25. Oktober 2017).',
          href: 'https://yle.fi/a/3-9895965',
          linkLabel: 'Yle, 25. Oktober 2017',
          event: 'ruka',
        },
      ],
    },
    {
      id: 'summer',
      kicker: 'Die Sommersaison',
      h2: 'Der Sommer ist nicht ruhig.',
      paras: [
        'Die Sommerarbeit in Lappland ist eine eigene Saison: der ganzjährige Tourismus in Rovaniemi, die Wandergebiete, Baustellen und der Sommerhöhepunkt der Läden. Im Sommer werden Ferienwohnungen monatsweise vermietet (750 € im Monat von Mai bis November im Levi-Beispiel, Yle, 25. Mai 2023).',
        'In Rovaniemi hofft der Wachstumsdirektor eines Personalvermittlers, im Winter Saisonkräfte unter einem Dach unterzubringen und im Sommer Bauarbeiter und Sportmannschaften (Yle, 9. März 2026). Für eine Ankunft im Sommer ist das eine gute Nachricht: Für den Winter gebaute Personalunterkünfte stehen im Sommer leer.',
      ],
      image: {
        src: '/images/housing-jouninkauppa.webp',
        alt: 'Die Fassade des Ladens K-Market Jounin Kauppa in Äkäslompolo im Sommer',
        caption:
          'K-Market Jounin Kauppa, Äkäslompolo, Juli 2026. Die Inhaber bauen drei Reihenhäuser für ihr Personal (Kesko, 17. Juni 2026). Foto: LaplandVibes.',
        ratio: '4/3',
      },
    },
    {
      id: 'ask',
      kicker: 'Vor der Unterschrift',
      h2: 'Fragen Sie Ihren Arbeitgeber das.',
      bullets: [
        'Gehört die Wohnung zum Anstellungspaket oder ist es ein eigener Mietvertrag? Wie viel wird vom Lohn abgezogen, und steht es auf der Gehaltsabrechnung?',
        'Ein eigenes Zimmer oder ein geteiltes? Wie viele Personen wohnen in der Wohnung, und hat Ihre Tür ein Schloss?',
        'Was geschieht mit dem Mietvertrag, wenn der Job endet, bevor die Saison vorbei ist, oder darüber hinaus weiterläuft?',
        'Können Sie dort Ihre Adresse anmelden? Die Meldung der Adressänderung an DVV ist binnen einer Woche nach dem Umzug fällig, und eine Ferienwohnung erfüllt die Voraussetzungen oft nicht.',
        'Wer zahlt Strom, Wasser und Internet?',
        'Wie kommen Sie ohne Auto zur Arbeit: Entfernung, Bus, Skibus?',
        'Gibt es eine Kaution, und wann wird sie zurückgezahlt? Gesetzlich gilt: ab dem 1. Oktober 2026 binnen 14 Tagen nach Ende des Mietverhältnisses (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Stellt der Arbeitgeber Saisonkräften in Levi eine Unterkunft?',
      a: 'Oft, aber nicht immer und nicht kostenlos. Arbeitgeber mieten Reihenhäuser und Ferienwohnungen für das Personal für die ganze Saison und ziehen die Miete vom Lohn ab. Lassen Sie sich das Angebot schriftlich geben und prüfen Sie, was mit der Wohnung geschieht, wenn der Job endet.',
    },
    {
      q: 'Wann sollte ich mit der Suche nach einer Unterkunft für die Wintersaison beginnen?',
      a: 'Im Sommer. Bewerben Sie sich vor der Saison bei den kommunalen Wohnungsgesellschaften (Kittilä, Inari, Sodankylä). Im Levi-Beispiel ließ sich eine Ferienwohnung nur von Mai bis November monatsweise mieten (Yle, 25. Mai 2023).',
    },
    {
      q: 'Kann ich die ganze Saison in einer Ferienwohnung wohnen?',
      a: 'Ja, wenn der Eigentümer einen Saisonmietvertrag anbietet. In einer Ferienwohnung erhalten Sie aber keine amtliche Adresse (Yle, 25. Mai 2023).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Die ersten Nächte',
    h2: 'Bevor Sie den Schlüssel in der Hand halten.',
    lead:
      'Die Saison beginnt oft, bevor die Wohnung frei ist. Die Suche unseres Partners zeigt verfügbare Zimmer und Apartments zu den heutigen Preisen.',
    chips: [
      { label: 'Levi', destination: 'Levi', sid: 'seasonal_first_nights_levi' },
      { label: 'Ylläs', destination: 'Äkäslompolo', sid: 'seasonal_first_nights_yllas' },
      { label: 'Saariselkä', destination: 'Saariselkä', sid: 'seasonal_first_nights_saariselka' },
      { label: 'Rovaniemi', destination: 'Rovaniemi', sid: 'seasonal_first_nights_rovaniemi' },
    ],
  },
  sources: pickSources('de', SOURCES, common.sourceLabels),
};

export default copy;
