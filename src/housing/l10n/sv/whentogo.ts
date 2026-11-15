/**
 * Ruotsi (sv) · milloin-sivu (/when-to-go). Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/whentogo.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import { whenToGoSources, type WhenToGoCopy } from '../../whentogo';
import common from './common';

const copy: WhenToGoCopy = {
  metaTitle: 'Finska Lappland månad för månad: bästa tiden att åka',
  metaDescription:
    'När du ska åka till finska Lappland, månad för månad: temperatur, dagsljus, snö, norrsken, midnattssol, höstfärger och myggor, med officiella siffror.',
  breadcrumb: 'När du ska åka',
  hero: {
    eyebrow: 'Januari till december',
    title: 'Lappland, månad för månad.',
    subtitle:
      'Hur varje månad är i fråga om väder, ljus och snö, vad man gör då och vad det betyder om du bor här. Siffror från Meteorologiska institutet och Statistikcentralen.',
  },
  intro: [
    'Lapplands år är två olika världar. Från november till april finns snö, kyla och korta dagar; från maj till september finns ljus, som längst i norr inte går ned alls. Mellan dem kommer två korta skeden som de som bor här känner väl: vårens tö och höstfärgerna, ruska.',
    'Nedan finns först hela året i en tabell, sedan månad för månad. Siffrorna är långtidsmedelvärden: ett enskilt år kan skilja sig tydligt, och enligt Forststyrelsen kommer den bestående snön numera ofta senare än det statistiska genomsnittet.',
  ],
  tableKicker: 'Hela året',
  tableH2: 'Lapplands år i siffror.',
  table: {
    caption: 'Dagens längd i Rovaniemi den 15:e, medeltemperatur i Rovaniemi och Sodankylä, snödjup i Rovaniemi den 15:e',
    head: ['Månad', 'Dagens längd', 'Medeltemperatur (Rovaniemi / Sodankylä)', 'Snö (Rovaniemi)', 'Vad som händer'],
    rows: [
      ['Januari', '4 h 15 min', '−10,3 / −12,5 °C', '47 cm', 'Årets kallaste månad'],
      ['Februari', '8 h 10 min', '−10,3 / −12,1 °C', '66 cm', 'Sportlov'],
      ['Mars', '11 h 37 min', '−5,6 / −7,1 °C', '77 cm', 'Norrsken, djupast snö'],
      ['April', '15 h 25 min', '0,1 / −0,8 °C', '64 cm', 'Skare'],
      ['Maj', '19 h 24 min', '6,5 / 5,6 °C', '–', 'Snön smälter, tö'],
      ['Juni', '24 h (ingen solnedgång)', '12,5 / 11,9 °C', '–', 'Midnattssol'],
      ['Juli', '21 h 29 min', '15,6 / 15,0 °C', '–', 'Årets varmaste månad, myggor'],
      ['Augusti', '17 h 02 min', '13,1 / 12,4 °C', '–', 'De mörka nätterna återvänder'],
      ['September', '13 h 13 min', '7,7 / 7,0 °C', '–', 'Höstfärger'],
      ['Oktober', '9 h 37 min', '0,8 / 0,0 °C', '–', 'Snö på fjällen'],
      ['November', '5 h 45 min', '−4,4 / −5,8 °C', '9 cm', 'Polarnatt längst i norr'],
      ['December', '2 h 27 min', '−7,7 / −9,6 °C', '28 cm', 'Årets kortaste dag 2 h 14 min'],
    ],
    foot: 'Temperaturer och snö: Meteorologiska institutet, referensperioden 1991–2020; snödjupet är medianen. Dagens längd: timeanddate.com för 2027 (sekundär källa; åren skiljer sig med omkring en dag). I juni går solen inte ned i Rovaniemi från 7 juni till 6 juli.',
  },
  months: [
    {
      name: 'Januari',
      pitch: 'Den kallaste månaden, ljuset återvänder',
      body: 'Januari är den kallaste månaden i Sodankylä och Utsjoki, med ett genomsnitt på −12,5 och −13,3 °C; Rovaniemi har i genomsnitt −10,3. I Rovaniemi växer dagen under månaden från 2 h 44 min till över sex timmar, och i Utsjoki stiger solen igen efter polarnatten den 17 januari. Snön är i genomsnitt omkring en halv meter djup.',
      good: ['Skidåkning och vintersport på fast snö', 'Arctic Lapland Rally i Rovaniemi, 28–30 januari 2027'],
      note: ['Renar på vägarna: november till januari är den värsta tiden för renkollisioner', 'Rovaniemis hotell var fortfarande till 86 % fulla i januari 2025'],
    },
    {
      name: 'Februari',
      pitch: 'Snö och sportlov',
      body: 'Tillsammans med december är februari årets fullaste månad: Lapplands beläggning var 77,6 % i februari 2025, men det genomsnittliga rumspriset förblev lägre än decembers. Snön i Rovaniemi är i genomsnitt 66 cm den 15 februari, och dagen är redan åtta timmar lång.',
      good: ['Norrsken i senvintern: Meteorologiska institutet kallar senvintern och tidig höst statistiskt de bästa tiderna', 'Skidåkning och långa dagsutflykter'],
      note: ['Boka tidigt, februari är en av de fullaste månaderna', 'Skolorna i Helsingforsregionen och Åbo har sitt sportlov vecka 8 (22–26 februari 2027)'],
    },
    {
      name: 'Mars',
      pitch: 'Norrsken och det djupaste snötäcket',
      body: 'Meteorologiska institutet rekommenderar mars för norrskensskådning, eftersom våren i genomsnitt är mindre molnig. Snön är som djupast, 77 cm i genomsnitt i Rovaniemi, och dagen växer förbi 13 timmar. Sodankylä får 141 soltimmar i mars mot 59 i februari.',
      good: ['Norrsken', 'Skidåkning i soligt väder', 'Påsk, 26–29 mars 2027'],
      note: ['Skolorna i Rovaniemi har sitt sportlov vecka 10 (8–12 mars 2027), och påsken för med sig inhemska resenärer', 'Vinterdäck är obligatoriska till 31 mars så fort förhållandena kräver det'],
    },
    {
      name: 'April',
      pitch: 'Skare och långa kvällar',
      body: 'Det finns fortfarande gott om snö, i genomsnitt 64 cm i Rovaniemi den 15 april, och enligt Forststyrelsen varar skareförhållandena från mitten av april till så sent som mitten av maj. Norrsken kan ännu ses tidigt under månaden: nätterna i Rovaniemi är mörka till omkring 21 april, i Utsjoki till omkring 10 april. Lapplands genomsnittliga rumspris var 139–141 € i april mot 200–225 € i mars (2024–2025).',
      good: ['Skidåkning på skaren och fjällturer', 'Vårsol: den 20 april är dagen i Rovaniemi över 16 timmar lång'],
      note: ['Vissa skidorter stänger i april: Ounasvaaras säsong tar slut den 17 april 2027, medan Ylläs räknar med att stänga i början av maj', 'Säsongsjobben tar slut: i Saariselkä är de sista vintriga arbetsdagarna i mitten av april (Yle)'],
    },
    {
      name: 'Maj',
      pitch: 'Snön smälter, den lugnaste månaden',
      body: 'Den bestående snön smälter typiskt omkring Rovaniemi mellan 30 april och 10 maj och på fjällen i Lappland mellan 10 och 20 maj. Terrängen är i sitt tö: för blöt för att åka skidor och för snöig för att vandra. Maj är turismens lugnaste månad, omkring 65 000 övernattningar mot 430 000–620 000 under vintermånaderna, och många företag tar en paus. Längst i norr börjar midnattssolen redan: i Nuorgam den 16 maj.',
      good: ['Att söka bostad i Rovaniemi: DAS säger att flest bostäder blir lediga i förhållande till antalet sökande på våren och försommaren', 'Lugna landskap och vårljus'],
      note: ['Många turisttjänster är stängda eller har kortare öppettider', 'Vårfloden varierar från mitten av maj till mitten av juni'],
    },
    {
      name: 'Juni',
      pitch: 'Midnattssolen',
      body: 'Solen går inte ned i Rovaniemi från 7 juni till 6 juli, i Sodankylä från 31 maj till 13 juli och i Utsjoki från 18 maj till 27 juli. Medeltemperaturen i Rovaniemi är 12,5 °C. Vandringssäsongen börjar när snön lämnar fjällen; i Kilpisjärvi kan det fortfarande finnas snö i juni.',
      good: ['Midnattssolens filmfestival i Sodankylä, 16–20 juni 2027', 'Midsommar, 25–26 juni 2027'],
      note: ['Myggsäsongen, räkkä, börjar oftast omkring midsommar', 'Mörkläggningsgardiner för sovrummet: en ljus natt är vacker men inte för att sova'],
    },
    {
      name: 'Juli',
      pitch: 'Den varmaste månaden, finländarnas favorit',
      body: 'Juli är årets varmaste månad: i genomsnitt 15,6 °C i Rovaniemi, med dagstemperaturer kring 20. Det är också den populäraste månaden i Lappland för finländska resenärer, och juni till augusti är de billigaste månaderna: ett genomsnittligt rum på Lapplands logiföretag kostade omkring 96–102 € (2024–2025). Hjortronen mognar från mitten av juli till början av augusti.',
      good: ['Vandring och naturutflykter', 'Bärplockning: hjortron från mitten av juli, blåbär från slutet av juli'],
      note: ['Myggorna är som värst och finns kvar till början eller mitten av augusti', 'Juli är också den regnigaste månaden, 81 mm i Rovaniemi'],
    },
    {
      name: 'Augusti',
      pitch: 'De mörka nätterna återvänder',
      body: 'Nätterna blir mörka igen i Rovaniemi omkring 24 augusti, och enligt Visit Finland syns norrsken i Lappland från slutet av augusti till april. Den första snön faller vanligtvis på fjälltopparna i augusti eller september. I Rovaniemi börjar skolan i mitten av augusti (den 12 augusti 2026), och de studerandes bostadssökande når sin topp.',
      good: ['Blåbärs- och vandringssäsongen fortsätter', 'Simerock i Rovaniemi, 13–14 augusti 2027'],
      note: ['I Rovaniemi har DAS flest sökande i augusti och september, och bostäder som blir lediga hyrs ut snabbt', 'Rekryteringen till vintersäsongen tar fart från augusti (Yle)'],
    },
    {
      name: 'September',
      pitch: 'Höstfärger och höstnorrsken',
      body: 'Ruska, höstfärgerna, når norra Finland under första hälften av september: vecka 36–38 i Kilpisjärvi, Pallas-Ylläs och Utsjoki, vecka 37–39 i Urho Kekkonens nationalpark. Kring höstdagjämningen är magnetiska stormar i genomsnitt vanligare, och på Sodankyläs breddgrad syns norrsken i genomsnitt varannan klar, mörk natt. September är de finländska resenärernas andra topp.',
      good: ['Vandringar bland höstfärgerna', 'Norrsken före vintern', 'Lingon från början av september'],
      note: ['Det kan redan snöa på fjällen i september', 'Ruska-veckorna fyller fjällorterna med inhemska resenärer'],
    },
    {
      name: 'Oktober',
      pitch: 'Snön når fjällen',
      body: 'Under Meteorologiska institutets referensperiod 1991–2020 började den bestående snön på fjällen i Lappland mellan 17 och 27 oktober och i Sodankylä den 29 oktober. Enligt Forststyrelsen bildas den numera ofta först i slutet av november, ibland i december. Hösten 2026 öppnade Levis backar redan i början av oktober. Oktober är den näst lugnaste månaden för logi efter maj.',
      good: ['Höstnorrsken före snön', 'Folkmusikfestivalen Jutajaiset i Rovaniemi i oktober'],
      note: ['I Rovaniemi tar många tidsbundna hyresavtal slut i slutet av oktober eftersom bostäder hyrs ut till turister för vintern (Yle, 27 juli 2026)', '2026 var höstlovet vecka 42 (12–16 oktober), till exempel i Rovaniemi och Helsingfors'],
    },
    {
      name: 'November',
      pitch: 'Polarnatten börjar längst i norr',
      body: 'I Utsjoki börjar polarnatten den 26 november och varar i genomsnitt 51 dagar. I Rovaniemi går solen upp varje dag, men den 15 november är dagen bara strax under sex timmar. Skidorterna öppnar: säsongen 2026–2027 Ounasvaara den 11 november, Ylläs den 21 november och Luosto med målet 28 november.',
      good: ['Världscupens slalomtävlingar i Levi i mitten av november', 'Vinter före jul till lägre priser: ett rum på Lapplands logiföretag kostade i genomsnitt 192–209 € i november och 285–313 € i december (2024–2025)'],
      note: ['Rovaniemi är inte lugnt i november: hotellens beläggning 72–82 % (2023–2025)', 'Vinterdäck från 1 november så fort förhållandena kräver det. Arctic SnowHotel öppnar först i december'],
    },
    {
      name: 'December',
      pitch: 'Jul, den hektiskaste månaden',
      body: 'December är Lapplands hektiskaste och dyraste turismmånad: 622 449 övernattningar och ett genomsnittligt rumspris på 313 € i december 2025. Rovaniemis kortaste dag är 2 h 14 min, men solen går upp; polarnatten varar bara fyra dagar i Sodankylä strax före jul och från 14 till 29 december i Kittilä. Sodankylä har haft snö på marken varje julafton som finns i registren.',
      good: ['Jul: Jultomtens by har öppet varje dag', 'Snöhotell: Arctic SnowHotel öppnar den 15 december 2026'],
      note: ['Boka i god tid: Rovaniemis hotell var 93,5–97 % fulla i december (2023–2025)', 'Senhösten och tidig vinter är enligt Meteorologiska institutet årets molnigaste tid, vilket gör norrsken svårare att se'],
    },
  ],
  goodLabel: 'Bra för',
  noteLabel: 'Tänk på',
  monthsNav: 'Månader',
  living: {
    kicker: 'Om du bor här',
    h2: 'Vad året betyder för boendet.',
    items: [
      '<strong>En hyresbostad i Rovaniemi:</strong> enligt DAS blir flest bostäder lediga i förhållande till antalet sökande på våren och försommaren, och augusti och september har flest sökande. Tidsbundna avtal tar slut i slutet av oktober eftersom bostäder hyrs ut till turister för vintern (Yle, 27 juli 2026).',
      '<strong>Säsongsarbete:</strong> rekryteringen till vintern tar fart från augusti (Yle), och skidorterna öppnar i oktober eller november och stänger i april eller maj beroende på ort.',
      '<strong>Bilkörning:</strong> vinterdäck är obligatoriska från 1 november till 31 mars så fort förhållandena kräver det, och dubbar får användas vid andra tider om förhållandena kräver det (Traficom). Renkollisionerna är som flest från november till januari (Renbeteslagsföreningen).',
      '<strong>Ljus:</strong> mörkläggningsgardiner och myggnät på sommaren, en ljusterapilampa och en reflex på vintern. I Rovaniemi är polarnatten bara ett namn: solen går upp varje dag.',
    ],
  },
  links: [
    { label: 'Hyresbostäder stad för stad', href: '/rentals' },
    { label: 'Flytta till Lappland', href: '/moving-to-lapland' },
    { label: 'Boende för säsongsarbetare', href: '/seasonal-worker-housing' },
    { label: 'En månad i Lappland', href: '/long-stays' },
  ],
  faqKicker: 'Vanligaste frågorna',
  faqH2: 'Frågor om Lapplands år.',
  faqs: [
    {
      q: 'När kan man se norrsken i Lappland?',
      a: 'Så fort nätterna är mörka, från slutet av augusti till april. Enligt Meteorologiska institutet är magnetiska stormar i genomsnitt vanligare på hösten och våren än på sommaren och vintern, och institutet rekommenderar mars eftersom våren i genomsnitt är mindre molnig. På Sodankyläs breddgrad syns de i genomsnitt varannan klar, mörk natt.',
    },
    {
      q: 'Har Rovaniemi polarnatt?',
      a: 'Nej. I Rovaniemi går solen upp varje dag, och den kortaste dagen är 2 h 14 min. Polarnatten varar fyra dagar i Sodankylä, 16 dagar i Kittilä, omkring fem veckor i Ivalo och i genomsnitt 51 dagar i Utsjoki.',
    },
    {
      q: 'När är det snö i Lappland?',
      a: 'Under referensperioden 1991–2020 började den bestående snön i slutet av oktober på fjällen i Lappland och i början av november omkring Rovaniemi, men enligt Forststyrelsen bildas den numera ofta först i slutet av november. Snön är djupast i mars och början av april och smälter typiskt omkring Rovaniemi mellan 30 april och 10 maj.',
    },
    {
      q: 'När är myggsäsongen i Lappland?',
      a: 'Enligt Forststyrelsen börjar myggsäsongen, räkkä, oftast omkring midsommar och varar till början eller mitten av augusti.',
    },
  ],
  authorNote:
    'Temperaturer, snö och norrsken från Meteorologiska institutet, naturens kalender från Forststyrelsen, månadsvisa turismsiffror från Statistikcentralen, lov från Utbildningsstyrelsen, evenemang från arrangörerna. Kontrollerat den 15 november 2026.',
  sources: whenToGoSources(common.whenToGoSourceLabels),
};

export default copy;
