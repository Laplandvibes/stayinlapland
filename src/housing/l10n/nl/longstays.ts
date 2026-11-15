/**
 * Hollanti (nl) · longstays. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/longstays.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['ahvl531', 'kuluttajaliittoVuokra', 'rakli', 'dvvTilapainen', 'dvv'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Een maand of een winter in Lapland: woning of huisje',
  metaDescription:
    'Een maand of een winter in Fins Lapland verblijven: een gemeubileerde huurwoning, een huisje per week of personeelshuisvesting.',
  breadcrumb: 'Lange verblijven',
  hero: {
    eyebrow: 'Van een maand tot een winter',
    title: 'Een maand in Lapland.',
    subtitle:
      'Een gemeubileerde huurwoning, een huisje per week of huisvesting van uw werkgever: drie manieren om van een maand tot een hele winter in Lapland te wonen, en wat elk contract van u vraagt.',
  },
  authorNote:
    'Wetgeving van Finlex (Wet op de woninghuur 481/1995, wijziging 531/2026), adresmelding van het Finse agentschap voor digitale en bevolkingsgegevens, gegevens over huisjes uit de productfeed van Lomarengas. Gecontroleerd op 15 november 2026.',
  intro: [
    'Een maand telewerken in Levi, een winter in Rovaniemi of een seizoen in een skigebied: een langer verblijf in Lapland komt meestal neer op een van drie opties. Ze verschillen in prijs, maar nog meer in het soort contract dat u krijgt en wat de wet dan beschermt.',
    'Komt u op vakantie in plaats van om te wonen, dan staan hotels en huisjes op onze zustersite <a href="https://laplandstays.com/" target="_blank" rel="noopener">laplandstays.com</a> en villa’s op <a href="https://laplandluxuryvillas.com/" target="_blank" rel="noopener">laplandluxuryvillas.com</a>.',
  ],
  sections: [
    {
      id: 'three-ways',
      kicker: 'Drie manieren',
      h2: 'Een woning, een huisje of personeelshuisvesting.',
      cards: [
        {
          title: 'Gemeubileerde huurwoning',
          body: 'Een <strong>huurovereenkomst voor woonruimte</strong>, bij een langer verblijf meestal voor bepaalde tijd. De huurwet beschermt u: de waarborgsom bedraagt hoogstens drie maanden huur, en vanaf 1 oktober 2026 moet ze binnen 14 dagen worden teruggegeven.',
          href: '/rentals',
          linkLabel: 'Huurwoningen plaats voor plaats',
        },
        {
          title: 'Huisje per week',
          body: 'Vakantiehuisjes worden per week verhuurd via een bureau, en de voorwaarden zijn meestal de boekings- en annuleringsvoorwaarden van het bureau. De huurwet geldt voor een woning die wordt gehuurd om in te wonen, niet voor de activiteiten van accommodatiebedrijven. Hieronder staan beschikbare huisjes met foto’s.',
        },
        {
          title: 'Personeelshuisvesting',
          body: 'Bij seizoenswerk hoort de huisvesting vaak bij de baan. Vraag voordat u tekent of de woning deel uitmaakt van het dienstverband en wat ermee gebeurt als de baan halverwege het seizoen eindigt.',
          href: '/seasonal-worker-housing',
          linkLabel: 'Huisvesting voor seizoenswerkers',
        },
      ],
    },
    {
      id: 'contract',
      kicker: 'Het contract',
      h2: 'Een huurcontract voor bepaalde tijd kunt u niet eerder beëindigen.',
      bullets: [
        '<strong>Een huurcontract voor bepaalde tijd loopt tot de datum die erin staat.</strong> De huurder kan halverwege niet opzeggen. Het kan alleen eerder eindigen in overleg met de verhuurder of in de specifieke situaties die de wet noemt (Finse consumentenbond, huurwet).',
        '<strong>Als u niet weet hoe lang u blijft,</strong> vraag dan om een huurcontract voor onbepaalde tijd. Daarop kan de huurder opzeggen, en de opzegtermijn van de huurder verandert niet bij de hervorming van 1 oktober 2026 (Rakli).',
        '<strong>Korte contracten achter elkaar:</strong> als dezelfde huurder meer dan twee keer achter elkaar een contract voor bepaalde tijd van drie maanden of korter krijgt, geldt het contract als een contract voor onbepaalde tijd, welke einddatum er ook in staat.',
        '<strong>De huurwet geldt niet voor alles.</strong> Ze is van toepassing op een woning die wordt gehuurd om in te wonen, maar niet op de activiteiten van accommodatiebedrijven (Wet op de woninghuur, paragrafen 1 en 2). Vraag voordat u tekent of u een huurovereenkomst voor woonruimte of een accommodatieovereenkomst krijgt.',
        '<strong>De waarborgsom</strong> bedraagt hoogstens drie maanden huur. Vanaf 1 oktober 2026 moet ze binnen 14 dagen na het einde van de huur worden teruggegeven, of moet de inhouding binnen die termijn worden gemeld.',
      ],
    },
    {
      id: 'address',
      kicker: 'Adresmelding',
      h2: 'Drie maanden of langer: geef uw adres door.',
      paras: [
        'Volgens het Finse agentschap voor digitale en bevolkingsgegevens meldt u een verhuizing telkens wanneer uw woonadres verandert en het verblijf minstens drie maanden duurt. Keert u binnen een jaar terug naar hetzelfde vaste adres, dan is de verhuizing tijdelijk en blijft uw vaste adres van kracht.',
        'De melding doet u ten vroegste een maand vóór de verhuisdag en uiterlijk een week na de verhuizing. Voor een definitieve verhuizing staat de rest, zoals winterbanden, het energiecontract en uw gezondheidscentrum, op de <a href="/moving-to-lapland/">checklist voor verhuizen</a>.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Kan ik in Lapland een woning voor een maand huren?',
      a: 'Ja. Een huurcontract voor bepaalde tijd kan ook kort zijn, en vakantiehuisjes worden per week verhuurd. Zoek op de huurportalen naar het woord “kalustettu” (gemeubileerd). Vraag voordat u tekent of het een huurovereenkomst voor woonruimte of accommodatie is, want de huurwet beschermt alleen het eerste.',
    },
    {
      q: 'Moet ik mijn adres doorgeven als ik de winter in Lapland doorbreng?',
      a: 'Ja, als het verblijf minstens drie maanden duurt. Keert u binnen een jaar terug naar hetzelfde vaste adres, dan is de verhuizing tijdelijk en blijft uw vaste adres van kracht (Fins agentschap voor digitale en bevolkingsgegevens).',
    },
    {
      q: 'Kan ik een huurcontract voor bepaalde tijd beëindigen als mijn baan eindigt?',
      a: 'Meestal niet. Een huurcontract voor bepaalde tijd loopt tot de datum die erin staat. Spreek met de verhuurder een eerdere einddatum af, of kies meteen een contract voor onbepaalde tijd, waarop de huurder kan opzeggen.',
    },
  ],
  sources: pickSources('nl', SOURCES, common.sourceLabels),
};

export default copy;
