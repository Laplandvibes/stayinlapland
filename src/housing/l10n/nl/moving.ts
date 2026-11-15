/**
 * Hollanti (nl) · moving. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
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
  metaTitle: 'Verhuizen naar Lapland: praktische gids voor de eerste maand',
  metaDescription:
    'Adreswijziging, winterbanden, kinderopvang, elektriciteit en de poolnacht: wat u in de eerste maand in Fins Lapland moet regelen.',
  breadcrumb: 'Verhuizen naar Lapland',
  hero: {
    eyebrow: 'Verhuizen naar Lapland: de eerste 30 dagen',
    title: 'Verhuizen naar Lapland.',
    subtitle:
      'Adreswijziging, winterbanden, kinderopvang, het energiecontract en de poolnacht: wat u in de eerste maand moet regelen, en in welke volgorde.',
  },
  authorNote:
    'Termijnen van DVV, Traficom en de Vereniging van Finse gemeenten, duur van de poolnacht van het Fins Meteorologisch Instituut, afstanden uit de autoroutes van LaplandVibes. Gecontroleerd op 15 november 2026.',
  intro: [
    'De papierwinkel bij een verhuizing naar Lapland is dezelfde als overal in Finland, maar drie dingen wegen hier zwaarder dan in het zuiden: de winter duurt het halve jaar, afstanden worden in honderden kilometers gemeten, en in kleine gemeenten zitten de voorzieningen op één plek. Deze pagina is een checklist in de volgorde waarin dingen geregeld moeten worden.',
    'Verhuist u vanuit het buitenland naar Finland, dan staan verblijfsvergunningen, het persoonsnummer, de belastingkaart en een bankrekening op onze zustersite <a href="https://laplandwork.com/nl/moving-to-finland/" target="_blank" rel="noopener">laplandwork.com</a>. Deze pagina begint op het moment dat u de sleutels in handen hebt.',
  ],
  sections: [
    {
      id: 'week-one',
      kicker: 'De eerste week',
      h2: 'Vier meldingen, één deadline.',
      bullets: [
        '<strong>Adreswijziging bij DVV</strong>: ten vroegste een maand vóór de verhuisdag en uiterlijk een week na de verhuizing (DVV). Dezelfde melding gaat ook naar Posti. Gemeentelijke diensten (kinderopvang, school, gezondheidscentrum) volgen uw geregistreerde woongemeente, dus doe de melding meteen.',
        '<strong>Energiecontract.</strong> De totaalprijs van elektriciteit voor een huishouden met een verbruik van 2.500–4.999 kWh per jaar bedroeg in juni 2026 gemiddeld 23,7 cent per kWh in heel Finland, en 14,9 cent in de klasse boven 15.000 kWh, waartoe een elektrisch verwarmd huis behoort (Statistics Finland). Het stookseizoen in Lapland is lang, dus schat uw verbruik aan de hoge kant in.',
        '<strong>De gezondheidszorg</strong> wordt verzorgd door het welzijnsgebied Lapland (Lapha). Niet-spoedeisende zorg loopt via uw plaatselijke gezondheidscentrum; zoek het dichtstbijzijnde op de site van het welzijnsgebied en schrijf u in bij Omakanta.',
        '<strong>Internet.</strong> Vraag het woningbedrijf of de verhuurder naar glasvezel voordat u tekent. In dunbevolkte gebieden is een mobiele router vaak de enige optie, en wie thuiswerkt, moet de verbinding eerst in de woning testen.',
      ],
    },
    {
      id: 'car',
      kicker: 'Auto en winter',
      h2: 'In Rovaniemi redt u het zonder auto. Elders niet.',
      bullets: [
        '<strong>Winterbanden:</strong> in Finland moeten winterbanden worden gebruikt van 1 november tot 31 maart als het weer of de wegomstandigheden dat vereisen. Spijkerbanden zijn in dezelfde periode toegestaan, en op andere momenten als de omstandigheden erom vragen. De hoofdgroeven van een winterband moeten minstens 3,0 mm diep zijn (Traficom).',
        '<strong>Brandstof:</strong> benzine 95E10 kostte in juni 2026 gemiddeld € 2,09 per liter in heel Finland en diesel € 2,15 (Statistics Finland). Door de grote afstanden is dit in Lapland een grotere post dan in het zuiden.',
        '<strong>Afstanden</strong> uit de autoroutes van LaplandVibes: Oulu–Kemi 105 km, Kemi–Rovaniemi 118 km, Rovaniemi–Ylläs (Äkäslompolo) 175 km, Sodankylä–Saariselkä 130 km, Levi–Kilpisjärvi 258 km. Lapland is groter dan het op de kaart lijkt.',
        '<strong>Motorverwarming en interieurverwarming.</strong> Bij strenge vorst wordt de auto voor vertrek voorverwarmd; een verwarmingspaal op de parkeerplaats is in Lapland standaarduitrusting. Laat een parkeerplaats met paal in het huurcontract opnemen.',
      ],
      image: {
        src: '/images/housing-kittila-airport.webp',
        alt: 'De terminal van de luchthaven van Kittilä op een zomerse dag',
        caption: 'Luchthaven Kittilä, juli 2026. Levi en Ylläs worden bediend door Kittilä, Rovaniemi door de eigen luchthaven en Saariselkä door Ivalo. Foto: LaplandVibes.',
        ratio: '16/9',
      },
    },
    {
      id: 'children',
      kicker: 'Kinderen',
      h2: 'De prijs van de kinderopvang hangt af van het inkomen, school kost niets.',
      bullets: [
        '<strong>De kosten van kinderopvang</strong> volgen het gezinsinkomen: vanaf 1 augustus 2026 bedraagt de hoogste bijdrage € 335 per maand per kind en de laagste in rekening gebrachte € 32. Het tweede kind betaalt hoogstens 40 % van de bijdrage voor het jongste kind, dus hoogstens € 134 (Vereniging van Finse gemeenten).',
        '<strong>Voorschools en basisonderwijs</strong> zijn gratis, inclusief leermiddelen en schoolmaaltijden (Wet op het basisonderwijs, paragraaf 31). Leerlingenvervoer wordt geregeld als de schoolweg langer is dan vijf kilometer (paragraaf 32), en in kleine gemeenten hoort dat bij het dagelijks leven.',
        'U vraagt een plaats in de kinderopvang aan bij de gemeente, en de gemeente wordt bepaald door het adres dat bij DVV is geregistreerd. Daarom komt de adreswijziging eerst, niet als laatste.',
      ],
    },
    {
      id: 'light',
      kicker: 'Licht en donker',
      h2: 'De poolnacht is korter dan u denkt. Behalve in Utsjoki.',
      paras: [
        'Kaamos, de poolnacht, betekent dat de zon niet boven de horizon uitkomt. Volgens het Fins Meteorologisch Instituut duurt die in Nuorgam, Utsjoki, bijna twee maanden, van 25 november tot 17 januari, en in Sodankylä maar vier dagen vlak voor Kerstmis. De grens van de poolnacht loopt iets ten noorden van de poolcirkel, dus Rovaniemi kent geen echte poolnacht (Foreca): in de winter blijft de zon laag, maar hij komt op.',
        'In de zomer is het omgekeerd. De grens van de middernachtzon ligt bij Rovaniemi op de poolcirkel, en in Nuorgam gaat de zon van 16 mei tot 29 juli niet onder (Fins Meteorologisch Instituut). Verduisterende gordijnen zijn de belangrijkste aankoop voor de zomer, een daglichtlamp die voor de winter.',
      ],
    },
    {
      id: 'before-signing',
      kicker: 'Voordat u tekent',
      h2: 'Dit vraagt u de verhuurder.',
      bullets: [
        'Het type verwarming en wie die betaalt: stadsverwarming zit meestal in de huur, elektrische verwarming komt op uw eigen rekening.',
        'Een parkeerplaats met verwarmingspaal en opslagruimte voor winteruitrusting: ski’s, slee, winterbanden.',
        'De afstand tot de dichtstbijzijnde winkel, het gezondheidscentrum en de school, en of daar in de winter een bus naartoe rijdt.',
        'De waarborgsom en de teruggave: hoogstens drie maanden huur (Wet op de woninghuur, paragraaf 8), en vanaf 1 oktober 2026 teruggave binnen 14 dagen nadat de huur is geëindigd (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Wanneer moet ik de adreswijziging doorgeven?',
      a: 'Ten vroegste een maand vóór de verhuisdag en uiterlijk een week na de verhuizing (DVV). Eén melding geldt zowel voor het Finse agentschap voor digitale en bevolkingsgegevens als voor Posti.',
    },
    {
      q: 'Wanneer zijn winterbanden verplicht in Lapland?',
      a: 'Volgens de wet zijn ze verplicht van 1 november tot 31 maart als het weer of de wegomstandigheden dat vereisen, en spijkerbanden zijn in dezelfde periode toegestaan en op andere momenten als de omstandigheden erom vragen (Traficom). De banden worden dus gewisseld naar de omstandigheden, niet naar de kalender.',
    },
    {
      q: 'Heeft Rovaniemi een poolnacht?',
      a: 'Geen echte: de grens van de poolnacht loopt iets ten noorden van de poolcirkel (Foreca). In Sodankylä blijft de zon vier dagen voor Kerstmis onder de horizon en in Nuorgam bijna twee maanden (Fins Meteorologisch Instituut).',
    },
  ],
  cta: {
    partner: 'cars',
    kicker: 'Een auto voor de eerste weken',
    h2: 'Bezichtigingen, de verhuislading, de winkel.',
    lead:
      'Uw eigen auto komt vaak later. Een huurauto vanaf de luchthaven dekt de bezichtigingen en de eerste weken; de partnerzoekmachine vergelijkt de verhuurbedrijven in één keer.',
    chips: [
      { label: 'Rovaniemi (RVN)', destination: 'RVN', sid: 'moving_car_rvn' },
      { label: 'Kittilä (KTT)', destination: 'KTT', sid: 'moving_car_ktt' },
      { label: 'Kemi-Tornio (KEM)', destination: 'KEM', sid: 'moving_car_kem' },
      { label: 'Ivalo (IVL)', destination: 'IVL', sid: 'moving_car_ivl' },
    ],
  },
  sources: pickSources('nl', SOURCES, common.sourceLabels),
};

export default copy;
