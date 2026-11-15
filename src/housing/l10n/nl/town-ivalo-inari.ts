/**
 * Hollanti (nl) · town-ivalo-inari. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/ivalo-inari.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'inari', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Huren in Ivalo en Inari: gemeente en particulieren',
  metaDescription:
    'Huren in Ivalo, Inari en Saariselkä: ruim 500 gemeentewoningen (Inarin Vuokra-asunnot Oy), particuliere verhuurders van de gemeente en steun van Kela.',
  breadcrumb: 'Ivalo en Inari',
  hero: {
    eyebrow: 'Gemeente Inari, 7.244 inwoners',
    title: 'Huren in Ivalo en Inari.',
    subtitle:
      'De noordelijkste huurmarkt van Finland: één gemeentelijk bedrijf, een paar particuliere verhuurders en het seizoen in Saariselkä. Waar u begint.',
  },
  authorNote:
    'Inarin Vuokra-asunnot Oy en de particuliere verhuurders van de eigen woonpagina van de gemeente Inari, bevolking van Statistics Finland, huren per m² van Statistics Finland (regio Lapland 2026Q3). Gecontroleerd op 15 november 2026.',
  intro: [
    'De gemeente Inari heeft 7.244 inwoners (Statistics Finland, 31 december 2025), en volgens de gemeente is de belangstelling om er te wonen gegroeid, waarom ze op haar pagina een lijst met verhuurders heeft samengesteld (inari.fi).',
    'Het gemeentelijke bedrijf Inarin Vuokra-asunnot Oy verhuurt meer dan 500 woningen in Ivalo, Inari, Saariselkä, Nellim en Sevettijärvi, van studio’s tot gezinswoningen. De particuliere verhuurders op de lijst van de gemeente zijn Bilto Oy, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg Oy en Uni Kodit (inari.fi).',
    'Statistics Finland publiceert geen apart huurcijfer voor Inari, dus hieronder staat het regionale cijfer voor Lapland. Huisvesting voor seizoenswerkers in Saariselkä heeft een eigen pagina.',
  ],
  sections: [
    {
      id: 'channels',
      kicker: 'Bij wie u zich aanmeldt',
      h2: 'Het gemeentelijke bedrijf en de lijst van de gemeente.',
      band: true,
      cards: [
        {
          title: 'Inarin Vuokra-asunnot Oy',
          body: 'Het gemeentelijke woningbedrijf: meer dan 500 woningen in Ivalo, Inari, Saariselkä, Nellim en Sevettijärvi, met basisvoorzieningen op korte afstand. Vacatures en aanvragen op de eigen site van het bedrijf.',
          href: 'https://inarinvuokra-asunnot.fi/',
          linkLabel: 'inarinvuokra-asunnot.fi',
          event: 'inari_company',
        },
        {
          title: 'Gemeente Inari: particuliere verhuurders',
          body: 'De woonpagina van de gemeente noemt Bilto Oy, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg Oy en Uni Kodit met contactgegevens, plus de Facebookgroep voor huurwoningen in Sodankylä–Inari–Utsjoki. Meer informatie via inari@inari.fi.',
          href: 'https://www.inari.fi/fi/palvelut/asuminen.html',
          linkLabel: 'inari.fi: wonen',
          event: 'inari_city',
        },
        {
          title: 'Oikotie en Vuokraovi',
          body: 'Advertenties van particulieren onder de gemeente Inari; woningen in Ivalo en Saariselkä zitten in dezelfde zoekopdracht. Er zijn weinig advertenties, dus stel een zoekmelding in.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/inari',
          linkLabel: 'Oikotie: huurwoningen in Inari',
          event: 'oikotie',
        },
        {
          title: 'Voor seizoenswerkers in Saariselkä',
          body: 'Werkgevers in Saariselkä huisvesten hun personeel ook zelf, en het gemeentelijke bedrijf heeft woningen in Saariselkä. Vraag tijdens het gesprek naar huisvesting; het hele plaatje staat op de pagina voor seizoenswerkers.',
          href: '/seasonal-worker-housing',
          linkLabel: 'Huisvesting voor seizoenswerkers',
          event: 'seasonal_page',
        },
      ],
    },
    {
      id: 'prices',
      kicker: 'Wat huur kost',
      h2: 'Regionale huren in Lapland per m², juli–september 2026.',
      table: {
        caption: 'Gemiddelde huur €/m²/maand, vrije-sectorhuurwoningen, 2026Q3',
        head: ['', 'Lapland (regio)', 'Heel Finland'],
        rows: [
          ['Studio’s', '17,25', '20,49'],
          ['Tweekamerwoningen', '12,87', '15,07'],
          ['Drie kamers en groter', '11,08', '13,98'],
          ['Alle woningen', '13,14', '15,99'],
        ],
        foot: 'Statistics Finland, huren 2026Q3, tabel 15fa. Voor Inari wordt geen apart cijfer gepubliceerd.',
      },
    },
    {
      id: 'housing-allowance',
      kicker: 'Huurtoeslag van Kela',
      h2: 'Inari valt onder de “overige gemeenten” van Kela.',
      table: {
        caption: 'Maximale woonkosten 2026, €/maand, Kela-groep “overige gemeenten”',
        head: ['Grootte van het huishouden', 'Maximale woonkosten'],
        rows: [
          ['1 persoon', '394'],
          ['2 personen', '574'],
          ['3 personen', '734'],
          ['4 personen', '875'],
          ['Elke extra persoon', '+129'],
        ],
        foot: 'Kela, algemene huurtoeslag 2026. De toeslag bedraagt hoogstens 70 % van de erkende woonkosten; een toeslag van minder dan € 15 wordt niet uitbetaald.',
      },
    },
    {
      id: 'contract',
      kicker: 'Het contract',
      h2: 'De waarborgsom en de teruggave.',
      bullets: [
        'De waarborgsom bedraagt hoogstens drie maanden huur (Wet op de woninghuur, paragraaf 8).',
        'Vanaf 1 oktober 2026 moet de waarborgsom worden teruggegeven, of moet schriftelijk worden uitgelegd waarom ze wordt ingehouden, binnen 14 dagen nadat de huur is geëindigd (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Waar vind ik een huurwoning in Ivalo?',
      a: 'Bij het gemeentelijke bedrijf Inarin Vuokra-asunnot Oy, dat meer dan 500 woningen heeft in Ivalo, Inari en Saariselkä, of bij de particuliere verhuurders die de gemeente noemt (Bilto, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg, Uni Kodit). De portalen bevatten weinig advertenties.',
    },
    {
      q: 'Zijn er huurwoningen in Saariselkä?',
      a: 'Het gemeentelijke bedrijf heeft ook woningen in Saariselkä, en werkgevers huisvesten seizoenspersoneel zelf. Op de vrije markt zijn de woningen in Saariselkä vooral vakantiehuizen.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'De eerste nachten',
    h2: 'Voordat u de sleutels hebt.',
    lead: 'De partnerzoekmachine toont vrije kamers in Ivalo en Saariselkä tegen de prijzen van vandaag.',
    chips: [
      { label: 'Ivalo', destination: 'Ivalo', sid: 'rentals_ivalo_first_weeks' },
      { label: 'Saariselkä', destination: 'Saariselkä', sid: 'rentals_saariselka_first_weeks' },
    ],
  },
  sources: pickSources('nl', SOURCES, common.sourceLabels),
};

export default copy;
