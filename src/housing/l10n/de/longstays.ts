/**
 * Saksa (de) · longstays. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/longstays.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['ahvl531', 'kuluttajaliittoVuokra', 'rakli', 'dvvTilapainen', 'dvv'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Monat oder Winter in Lappland: Wohnung, Hütte, Personalwohnung',
  metaDescription:
    'Einen Monat oder einen Winter in Finnisch-Lappland bleiben: möblierte Mietwohnung, Hütte zur Wochenmiete oder Personalunterkunft.',
  breadcrumb: 'Langzeitaufenthalte',
  hero: {
    eyebrow: 'Von einem Monat bis zu einem Winter',
    title: 'Ein Monat in Lappland.',
    subtitle:
      'Eine möblierte Mietwohnung, eine Hütte zur Wochenmiete oder eine Unterkunft vom Arbeitgeber: drei Wege, in Lappland von einem Monat bis zu einem ganzen Winter zu wohnen, und was jeder Vertrag von Ihnen verlangt.',
  },
  authorNote:
    'Gesetzestexte von Finlex (Wohnraummietgesetz 481/1995, Änderung 531/2026), Adressmeldung von der Agentur für Digitalisierung und Bevölkerungsdaten, Hüttendaten aus dem Produktfeed von Lomarengas. Geprüft am 15. November 2026.',
  intro: [
    'Ein Monat Remote-Arbeit in Levi, ein Winter in Rovaniemi oder eine Saison in einem Skiresort: Ein längerer Aufenthalt in Lappland läuft meist auf eine von drei Möglichkeiten hinaus. Sie unterscheiden sich im Preis, aber noch mehr darin, welchen Vertrag Sie am Ende haben und was das Gesetz dann schützt.',
    'Wenn Sie zum Urlaub kommen und nicht zum Wohnen, finden Sie Hotels und Hütten auf unserer Schwesterseite <a href="https://laplandstays.com/" target="_blank" rel="noopener">laplandstays.com</a> und Villen auf <a href="https://laplandluxuryvillas.com/" target="_blank" rel="noopener">laplandluxuryvillas.com</a>.',
  ],
  sections: [
    {
      id: 'three-ways',
      kicker: 'Drei Wege',
      h2: 'Eine Wohnung, eine Hütte oder Personalunterkunft.',
      cards: [
        {
          title: 'Möblierte Mietwohnung',
          body: 'Ein <strong>Wohnraummietvertrag</strong>, bei längerem Aufenthalt meist befristet. Das Mietrecht schützt Sie: Die Kaution beträgt höchstens drei Monatsmieten, und ab dem 1. Oktober 2026 muss sie binnen 14 Tagen zurückgezahlt werden.',
          href: '/rentals',
          linkLabel: 'Mietwohnungen Ort für Ort',
        },
        {
          title: 'Hütte zur Wochenmiete',
          body: 'Ferienhütten werden wochenweise über eine Agentur vermietet, und es gelten meist die Buchungs- und Stornobedingungen der Agentur. Das Mietrecht erfasst eine zum Wohnen vermietete Wohnung, nicht die Tätigkeit von Beherbergungsbetrieben. Verfügbare Hütten mit Fotos finden Sie unten.',
        },
        {
          title: 'Personalunterkunft',
          body: 'Bei Saisonarbeit gehört die Unterkunft oft zum Job. Fragen Sie vor der Unterschrift, ob die Wohnung Teil des Arbeitsverhältnisses ist und was mit ihr geschieht, wenn der Job mitten in der Saison endet.',
          href: '/seasonal-worker-housing',
          linkLabel: 'Wohnen bei Saisonarbeit',
        },
      ],
    },
    {
      id: 'contract',
      kicker: 'Der Vertrag',
      h2: 'Ein befristeter Mietvertrag lässt sich nicht vorzeitig beenden.',
      bullets: [
        '<strong>Ein befristeter Mietvertrag läuft bis zu dem Datum, das darin steht.</strong> Der Mieter kann während der Laufzeit nicht kündigen. Er kann nur durch Vereinbarung mit dem Vermieter oder in den im Gesetz genannten besonderen Fällen früher enden (Finnischer Verbraucherverband, Mietrecht).',
        '<strong>Wenn Sie nicht wissen, wie lange Sie bleiben,</strong> bitten Sie stattdessen um einen unbefristeten Vertrag. Den kann der Mieter kündigen, und die Kündigungsfrist des Mieters ändert sich durch die Reform vom 1. Oktober 2026 nicht (Rakli).',
        '<strong>Kurze Verträge hintereinander:</strong> Erhält derselbe Mieter mehr als zweimal nacheinander einen befristeten Vertrag von höchstens drei Monaten, gilt der Vertrag als unbefristet, welches Enddatum er auch trägt.',
        '<strong>Das Mietrecht erfasst nicht alles.</strong> Es gilt für eine zum Wohnen vermietete Wohnung, nicht für die Tätigkeit von Beherbergungsbetrieben (Wohnraummietgesetz, §§ 1 und 2). Fragen Sie vor der Unterschrift, ob Sie einen Wohnraummietvertrag oder einen Beherbergungsvertrag bekommen.',
        '<strong>Die Kaution</strong> beträgt höchstens drei Monatsmieten. Ab dem 1. Oktober 2026 muss sie binnen 14 Tagen nach Ende des Mietverhältnisses zurückgezahlt oder ihr Einbehalt mitgeteilt werden.',
      ],
    },
    {
      id: 'address',
      kicker: 'Adressmeldung',
      h2: 'Drei Monate oder mehr: Melden Sie Ihre Adresse.',
      paras: [
        'Laut der Agentur für Digitalisierung und Bevölkerungsdaten melden Sie einen Umzug, sobald sich Ihre Wohnadresse ändert und der Aufenthalt mindestens drei Monate dauert. Kehren Sie binnen eines Jahres an dieselbe ständige Adresse zurück, gilt der Umzug als vorübergehend, und Ihre ständige Adresse bleibt bestehen.',
        'Die Meldung erfolgt frühestens einen Monat vor dem Umzugstag und spätestens eine Woche nach dem Umzug. Bei einem dauerhaften Umzug steht der Rest, etwa Winterreifen, Stromvertrag und Gesundheitszentrum, in der <a href="/moving-to-lapland/">Umzugs-Checkliste</a>.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Kann ich in Lappland eine Wohnung für einen Monat mieten?',
      a: 'Ja. Ein befristeter Mietvertrag kann auch kurz sein, und Ferienhütten werden wochenweise vermietet. Suchen Sie auf den Mietportalen nach dem Wort „kalustettu“ (möbliert). Fragen Sie vor der Unterschrift, ob es sich um einen Wohnraummietvertrag oder um Beherbergung handelt, denn nur ersterer wird vom Mietrecht geschützt.',
    },
    {
      q: 'Muss ich meine Adresse melden, wenn ich den Winter in Lappland verbringe?',
      a: 'Ja, wenn der Aufenthalt mindestens drei Monate dauert. Kehren Sie binnen eines Jahres an dieselbe ständige Adresse zurück, gilt der Umzug als vorübergehend, und Ihre ständige Adresse bleibt bestehen (Agentur für Digitalisierung und Bevölkerungsdaten).',
    },
    {
      q: 'Kann ich einen befristeten Mietvertrag beenden, wenn mein Job endet?',
      a: 'In der Regel nicht. Ein befristeter Mietvertrag läuft bis zu dem Datum, das darin steht. Vereinbaren Sie mit dem Vermieter ein früheres Ende, oder wählen Sie von Anfang an einen unbefristeten Vertrag, den der Mieter kündigen kann.',
    },
  ],
  sources: pickSources('de', SOURCES, common.sourceLabels),
};

export default copy;
