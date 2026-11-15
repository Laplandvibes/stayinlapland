/**
 * Saksa (de) · town-rovaniemi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/rovaniemi.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'rovaniemi', 'das', 'yle2025das', 'yle2026rovaniemi', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Wohnung mieten in Rovaniemi: Mieten, Vermieter, Bewerbung',
  metaDescription:
    'Wohnung in Rovaniemi mieten: Miete pro m² (Statistik Finnland 2026), Vermieter laut Stadt, DAS für Studierende, Wohngeld von Kela und wann Sie sich bewerben.',
  breadcrumb: 'Rovaniemi',
  hero: {
    eyebrow: 'Rovaniemi, 66.191 Einwohner',
    title: 'Mietwohnungen in Rovaniemi.',
    subtitle:
      'Die größte Stadt Lapplands, 66.191 Einwohner. Was Miete kostet, bei wem Sie sich bewerben und wann.',
  },
  authorNote:
    'Mieten pro m² von Statistik Finnland (Juli–September 2026), Vermieter von der Wohnungsseite der Stadt Rovaniemi, Zahlen zum Wohnungsmangel von Yle. Geprüft am 15. November 2026.',
  intro: [
    'Rovaniemi hat 66.191 Einwohner (Statistik Finnland, 31. Dezember 2025) und einen harten Wettbewerb um Studios: Die Studierendenwohnstiftung DAS erhielt im Sommer 2026 rund 550 dringende Bewerbungen, 15 Prozent mehr als ein Jahr zuvor, fast 90 Prozent der Bewerber wollten ein Studio, und die Studios der Stadt werden für die Wintersaison kurzzeitig an Touristen vermietet (Yle, 27. Juli 2026). Laut dem Geschäftsführer von DAS kann die Stiftung im August und September nicht jedem Bewerber eine Wohnung anbieten.',
    'Ein Personalvermittler, der rund 250 Arbeitskräfte nach Lappland holte, brachte sie in Rovaniemi an etwa zehn verschiedenen Orten unter (Yle, 9. März 2026). Saisonkräfte, Studierende und Touristen suchen alle dieselben kleinen Wohnungen.',
    'Die gute Nachricht ist der Preis: Rovaniemis Durchschnittsmiete von 14,63 € pro m² liegt unter dem Landesdurchschnitt von 15,99 € (Statistik Finnland 2026Q3). Unten stehen die Zahlen nach Wohnungsgröße und die Kanäle für die Bewerbung.',
  ],
  sections: [
    {
      id: 'prices',
      kicker: 'Was Miete kostet',
      h2: 'Mieten in Rovaniemi pro m², Juli–September 2026.',
      table: {
        caption: 'Durchschnittsmiete in €/m²/Monat, frei finanzierte Mietwohnungen, Rovaniemi 2026Q3',
        head: ['', 'Alle Mieten', 'Neue Mieten', 'Ganz Finnland'],
        rows: [
          ['Studios', '18,63', '20,14', '20,49'],
          ['Zweizimmerwohnungen', '14,40', '16,40', '15,07'],
          ['Drei Zimmer und mehr', '12,29', '13,66', '13,98'],
          ['Alle Wohnungen', '14,63', '15,93', '15,99'],
        ],
        foot: 'Statistik Finnland, Mieten 2026Q3, Tabelle 15fa. Neuvermietungen = Verträge, die im Quartal begonnen haben, also das, was für freie Wohnungen gerade verlangt wird.',
      },
      paras: [
        '<strong>Beispiele:</strong> ein Studio von 30 m² etwa 560 € im Monat (18,63 × 30), bei einer Neuvermietung etwa 600 € (20,14 × 30), eine Zweizimmerwohnung von 50 m² etwa 720 € (14,40 × 50), eine Dreizimmerwohnung von 75 m² etwa 920 € (12,29 × 75). Wasser und Strom kommen meist hinzu.',
        'Der Preis für Studios bei Neuvermietung von 20,14 € pro m² liegt 1,51 € (8 %) über dem Durchschnitt aller Studios in Rovaniemi von 18,63 €: Ein Studio, das gerade frei wird, kostet mehr als ein bereits vermietetes. Gegenüber dem Landesdurchschnitt ist Rovaniemi in jeder Wohnungsgröße günstiger.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Wohngeld von Kela',
      h2: 'Rovaniemi hat eine höhere Obergrenze.',
      lead:
        'Das allgemeine Wohngeld beträgt höchstens 70 % der anerkannten Wohnkosten. In Rovaniemi liegt die Obergrenze für die anerkannten Kosten höher als in den übrigen Gemeinden Lapplands, weil die Stadt zu Kelas Gruppe der 24 größeren Gemeinden gehört (Kela 2026).',
      table: {
        caption: 'Höchstgrenze der Wohnkosten 2026, €/Monat, Kelas Gruppe der 24 größeren Gemeinden',
        head: ['Haushaltsgröße', 'Höchstgrenze der Wohnkosten'],
        rows: [
          ['1 Person', '447'],
          ['2 Personen', '652'],
          ['3 Personen', '828'],
          ['4 Personen', '981'],
          ['Jede weitere Person', '+134'],
        ],
        foot: 'Kela, allgemeines Wohngeld 2026. Ein Wohngeld unter 15 € wird nicht ausgezahlt. Das Einkommen mindert das Wohngeld über den Grundselbstbehalt.',
      },
    },
    {
      id: 'channels',
      kicker: 'Bei wem Sie sich bewerben',
      h2: 'Die Liste der Stadt, die Studierendenstiftung und die Portale.',
      lead: 'Die Wohnungsseite der Stadt Rovaniemi listet die Vermieter und Suchdienste auf. Eine eigene kommunale Wohnungsgesellschaft nennt sie nicht.',
      band: true,
      cards: [
        {
          title: 'Stadt Rovaniemi: Vermieter',
          body: 'Die Seite der Stadt verweist auf die gewerblichen Vermieter KAS asunnot, M2-Kodit, Tarveasunnot, Avara und Lumo sowie auf die Suchdienste Oikotie, Vuokraovi und Qasa. Jeder Vermieter hat seine eigene Online-Bewerbung. Bewerben Sie sich bei mehreren gleichzeitig.',
          href: 'https://www.rovaniemi.fi/Asuminen-ja-ymparisto/Asuminen',
          linkLabel: 'rovaniemi.fi: Wohnen',
          event: 'rovaniemi_city',
        },
        {
          title: 'DAS: für Studierende',
          body: 'Die Stiftung Domus Arctica hat etwa 1.700 Wohnungen, davon 700 Studios und 460 Zweizimmerwohnungen, bei einer Durchschnittsmiete von 12,50 € pro m² (Yle, 27. Juli 2026). Bewerbungen sind laufend möglich und drei Monate gültig, und neue Studierende haben im August und September Vorrang. Bewerben können Sie sich, wenn Sie in Rovaniemi nach der Gesamtschule an einer Schule oder Hochschule studieren.',
          href: 'https://www.das.fi/en/apply/applying-info',
          linkLabel: 'das.fi: Hinweise zur Bewerbung',
          event: 'das',
        },
        {
          title: 'KAS asunnot',
          body: 'Mietwohnungen in mehreren Stadtteilen von Rovaniemi (Verzeichnis der Stadt). Online-Bewerbung.',
          href: 'https://kas.fi/rovaniemen-vuokrattavat-kas-kodit/',
          linkLabel: 'kas.fi: Rovaniemi',
          event: 'kas',
        },
        {
          title: 'Lumo',
          body: 'Ein gewerblicher Vermieter mit Gebäuden in Rovaniemi. Standardvertrag, Online-Bewerbung, schneller Einzug.',
          href: 'https://lumo.fi/en/rental-apartments',
          linkLabel: 'lumo.fi: Mietwohnungen',
          event: 'lumo',
        },
        {
          title: 'Oikotie und Vuokraovi',
          body: 'Die landesweiten Portale führen die meisten privaten und Agentur-Inserate. Filtern Sie nach der Gemeinde Rovaniemi, nicht nach Stadtteil, damit auch Ounasvaara, Saarenkylä und Wohnungen außerhalb des Zentrums erscheinen.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/rovaniemi',
          linkLabel: 'Oikotie: Mietwohnungen in Rovaniemi',
          event: 'oikotie',
        },
        {
          title: 'NAL Rovaniemi: unter 30',
          body: 'Die Regionalstelle Rovaniemi des Finnischen Jugendwohnungsverbands bietet Jugendwohnungen für Unter-30-Jährige an (Verzeichnis der Stadt). Eine Möglichkeit, wenn DAS nicht infrage kommt und Sie nicht studieren.',
          href: 'https://www.rovaniemi.fi/Asuminen-ja-ymparisto/Asuminen',
          linkLabel: 'rovaniemi.fi: Jugendwohnungen',
          event: 'nal',
        },
      ],
    },
    {
      id: 'when',
      kicker: 'Wann Sie sich bewerben',
      h2: 'Zweimal im Jahr wird es eng.',
      bullets: [
        '<strong>August–September</strong> ist die knappste Zeit: DAS kann nicht jeden Bewerber unterbringen, und frei finanzierte Studios sind rar (Yle, 27. Juli 2026).',
        '<strong>November–Dezember:</strong> Manche Studios werden für die Wintersaison kurzzeitig an Touristen vermietet. Befristete Verträge enden oft Ende Oktober (Yle, 27. Juli 2026).',
        '<strong>Im Frühjahr</strong> kommen die für die Wintersaison vermieteten Studios wieder auf den Markt.',
        '<strong>Die Kaution</strong> beträgt höchstens drei Monatsmieten (Wohnraummietgesetz, § 8), und ab dem 1. Oktober 2026 muss sie binnen 14 Tagen nach Ende des Mietverhältnisses zurückgezahlt werden (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Wie viel kostet ein Studio in Rovaniemi?',
      a: 'Laut Statistik Finnland 18,63 € pro m² über alle Mietverhältnisse und 20,14 € pro m² bei neuen (2026Q3). Ein Studio von 30 m² kostet also etwa 560–600 € im Monat, ohne Strom.',
    },
    {
      q: 'Ist es schwer, in Rovaniemi eine Mietwohnung zu finden?',
      a: 'Studios sind im August und September schwer zu bekommen: DAS kann nicht jeden Bewerber unterbringen (Yle, 27. Juli 2026), und frei finanzierte Studios sind rar. Zwei- und Dreizimmerwohnungen sind leichter zu finden.',
    },
    {
      q: 'Kann ich mich bewerben, ohne nach Rovaniemi zu reisen?',
      a: 'Sie können sich online bei jedem Vermieter bewerben, den die Stadt aufführt, und bei DAS. Sehen Sie sich die Wohnung trotzdem selbst an oder bitten Sie um einen Video-Rundgang, und zahlen Sie die Kaution erst nach Unterzeichnung des Vertrags.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'Die ersten Wochen',
    h2: 'Ein Hotel oder Apartmenthotel, während Sie Wohnungen besichtigen.',
    lead: 'Sehen Sie sich die Wohnungen persönlich an, bevor Sie unterschreiben. Die Suche unseres Partners zeigt freie Zimmer in Rovaniemi zu den heutigen Preisen.',
    chips: [
      { label: 'Rovaniemi', destination: 'Rovaniemi', sid: 'rentals_rovaniemi_first_weeks' },
    ],
  },
  sources: pickSources('de', SOURCES, common.sourceLabels),
};

export default copy;
