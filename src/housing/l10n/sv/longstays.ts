/**
 * Ruotsi (sv) · longstays. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/longstays.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['ahvl531', 'kuluttajaliittoVuokra', 'rakli', 'dvvTilapainen', 'dvv'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Bo en månad eller en vinter i finska Lappland',
  metaDescription:
    'Bo en månad eller en vinter i finska Lappland: en möblerad hyreslägenhet, en stuga per vecka eller personalbostad.',
  breadcrumb: 'Långa vistelser',
  hero: {
    eyebrow: 'Från en månad till en vinter',
    title: 'En månad i finska Lappland.',
    subtitle:
      'En möblerad hyreslägenhet, en stuga per vecka eller boende från din arbetsgivare: tre sätt att bo i Lappland från en månad till en hel vinter, och vad varje avtal kräver av dig.',
  },
  authorNote:
    'Lagstiftning från Finlex (lagen om hyra av bostadslägenhet 481/1995, ändring 531/2026), adressanmälan från Digitaliserings- och befolkningsdatabyrån, stugornas uppgifter från Lomarengas produktflöde. Kontrollerat den 15 november 2026.',
  intro: [
    'En månads distansarbete i Levi, en vinter i Rovaniemi eller en säsong i en skidort: en längre vistelse i Lappland handlar oftast om ett av tre alternativ. De skiljer sig i pris, men ännu mer i vilket slags avtal du får och vad lagen då skyddar.',
    'Om du kommer på semester och inte för att bo finns hotell och stugor på vår systersajt <a href="https://laplandstays.com/" target="_blank" rel="noopener">laplandstays.com</a> och villor på <a href="https://laplandluxuryvillas.com/" target="_blank" rel="noopener">laplandluxuryvillas.com</a>.',
  ],
  sections: [
    {
      id: 'three-ways',
      kicker: 'Tre sätt',
      h2: 'En lägenhet, en stuga eller personalbostad.',
      cards: [
        {
          title: 'Möblerad hyreslägenhet',
          body: 'Ett <strong>hyresavtal för bostad</strong>, vid en längre vistelse oftast tidsbundet. Hyreslagen skyddar dig: depositionen är högst tre månadshyror, och från och med 1 oktober 2026 ska den betalas tillbaka inom 14 dagar.',
          href: '/rentals',
          linkLabel: 'Hyresbostäder stad för stad',
        },
        {
          title: 'Stuga per vecka',
          body: 'Semesterstugor hyrs ut per vecka via en förmedlare, och villkoren är oftast förmedlarens boknings- och avbokningsvillkor. Hyreslagen gäller en lägenhet som hyrs för boende, inte logiföretagens verksamhet. Lediga stugor med bilder finns nedan.',
        },
        {
          title: 'Personalbostad',
          body: 'I säsongsarbete ingår boendet ofta i jobbet. Fråga innan du skriver under om bostaden är en del av anställningen och vad som händer med den om jobbet tar slut mitt i säsongen.',
          href: '/seasonal-worker-housing',
          linkLabel: 'Boende för säsongsarbetare',
        },
      ],
    },
    {
      id: 'contract',
      kicker: 'Avtalet',
      h2: 'Ett tidsbundet avtal kan inte sägas upp i förtid.',
      bullets: [
        '<strong>Ett tidsbundet hyresavtal gäller till det datum som står i det.</strong> Hyresgästen kan inte säga upp det under avtalstiden. Det kan upphöra tidigare bara genom överenskommelse med hyresvärden eller i de särskilda situationer som anges i lagen (Konsumentförbundet, hyreslagen).',
        '<strong>Om du inte vet hur länge du stannar</strong> bör du be om ett tillsvidareavtal i stället. Hyresgästen kan säga upp det, och hyresgästens uppsägningstid ändras inte i reformen den 1 oktober 2026 (Rakli).',
        '<strong>Korta avtal efter varandra:</strong> om samma hyresgäst får ett tidsbundet avtal på tre månader eller kortare mer än två gånger i följd, räknas avtalet som ett tillsvidareavtal, oavsett vilket slutdatum det har.',
        '<strong>Hyreslagen täcker inte allt.</strong> Den gäller en lägenhet som hyrs för boende, men inte logiföretagens verksamhet (lagen om hyra av bostadslägenhet, 1 och 2 §). Fråga innan du skriver under om du får ett hyresavtal för bostad eller ett logiavtal.',
        '<strong>Depositionen</strong> är högst tre månadshyror. Från och med 1 oktober 2026 ska den betalas tillbaka, eller så ska det meddelas att den hålls kvar, inom 14 dagar efter att hyresförhållandet upphört.',
      ],
    },
    {
      id: 'address',
      kicker: 'Adressanmälan',
      h2: 'Tre månader eller mer: anmäl din adress.',
      paras: [
        'Enligt Digitaliserings- och befolkningsdatabyrån ska du alltid göra flyttanmälan när din bostadsadress ändras och vistelsen varar minst tre månader. Om du återvänder till samma permanenta adress inom ett år är flytten tillfällig och din permanenta adress gäller fortfarande.',
        'Anmälan görs tidigast en månad före flyttdagen och senast en vecka efter flytten. Vid en permanent flytt finns resten, som vinterdäck, elavtal och din hälsocentral, i <a href="/moving-to-lapland/">flyttchecklistan</a>.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Kan jag hyra en lägenhet i Lappland för en månad?',
      a: 'Ja. Ett tidsbundet hyresavtal kan också vara kort, och semesterstugor hyrs ut per vecka. Sök på hyresportalerna med ordet ”kalustettu” (möblerad). Fråga innan du skriver under om det är ett hyresavtal för bostad eller logi, eftersom hyreslagen bara skyddar det förra.',
    },
    {
      q: 'Måste jag anmäla min adress om jag tillbringar vintern i Lappland?',
      a: 'Ja, om vistelsen varar minst tre månader. Om du återvänder till samma permanenta adress inom ett år är flytten tillfällig och din permanenta adress gäller fortfarande (Digitaliserings- och befolkningsdatabyrån).',
    },
    {
      q: 'Kan jag säga upp ett tidsbundet hyresavtal om mitt jobb tar slut?',
      a: 'Oftast inte. Ett tidsbundet hyresavtal gäller till det datum som står i det. Kom överens med hyresvärden om ett tidigare slut, eller välj ett tillsvidareavtal från början, som hyresgästen kan säga upp.',
    },
  ],
  sources: pickSources('sv', SOURCES, common.sourceLabels),
};

export default copy;
