import type { Faq, FactTable, HousingLang, Source } from './types';

/**
 * Lapin vuosi kuukausittain (/when-to-go), fi/en natiivi.
 *
 * 🔴 Kirjoitettu uudelleen 23.9.2026. Vesa: *"tätä sivua varmasti tullaan katsomaan mutta se on aivan poor ja
 * onko faktat tarkistettu? ja miksi kesää ei ole ollenkaan mainittu?"* Vanha sivu kattoi 8 kuukautta
 * (syys–huhti), ja 59 väitteestä 4 oli lähteiden mukaan väärin (tammikuu "revontulet aktiivisimmillaan",
 * syyskuu "ei vielä lunta", marraskuu "talven kylmin alku", lumihotellit auki marraskuussa), loput pääosin
 * lähteettömiä ("viikot jotka paikalliset varaavat itselleen" on Tilastokeskuksen luvuilla päinvastoin).
 * Faktapohja: scratchpad whentogo_facts.md 23.9.2026 (Ilmatieteen laitos 1991–2020, Metsähallitus,
 * Tilastokeskus 11ix/11iz/11lm, Opetushallitus, timeanddate 2027 toissijaisena, järjestäjien sivut).
 *
 * Kysyntä (OpenSEO 23.9.2026): fi "milloin lappiin" 0, mutta ilmiöt: kaamos 3 600, räkkä 1 300, yötön yö
 * 1 300, ruska lapissa 390, lappi kesällä 210 /kk. en (UK): best time to visit lapland 590, lapland in
 * summer 390, lapland in december / february 390, november 320, january 260, march 210, october 170.
 *
 * Muut kymmenen kieltä näyttävät englannin ja kanonisoituvat englantiin (routes.json nativeLocales).
 */

export interface WhenMonth {
  name: string;
  pitch: string;
  body: string;
  good: string[];
  note: string[];
}

export interface WhenToGoCopy {
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  hero: { eyebrow: string; title: string; subtitle: string };
  intro: string[];
  tableKicker: string;
  tableH2: string;
  table: FactTable;
  months: WhenMonth[];
  goodLabel: string;
  noteLabel: string;
  monthsNav: string;
  living: { kicker: string; h2: string; items: string[] };
  links: { label: string; href: string }[];
  faqKicker: string;
  faqH2: string;
  faqs: Faq[];
  authorNote: string;
  sources: Source[];
}

const SRC = {
  fmi1991: { url: 'https://helda.helsinki.fi/handle/10138/336063' },
  fmiLumi: { url: 'https://www.ilmatieteenlaitos.fi/lumitilastot' },
  fmiVuodenajat: { url: 'https://www.ilmatieteenlaitos.fi/tahtitieteelliset-vuodenajat' },
  fmiRevontulet: { url: 'https://www.ilmatieteenlaitos.fi/revontulet-kysymyksia-ja-vastauksia' },
  fmiRevontuletMissa: { url: 'https://www.ilmatieteenlaitos.fi/missa-ja-milloin' },
  fmiJoulu: { url: 'https://www.ilmatieteenlaitos.fi/joulunaika' },
  fmiPilvi: { url: 'https://www.ilmatieteenlaitos.fi/ajankohtaista/35940895' },
  timeanddate: { url: 'https://www.timeanddate.com/sun/finland/rovaniemi' },
  utsjoki: { url: 'https://exploreutsjoki.fi/de/sehen-und-erleben/kaamos-de' },
  mhMaasto: { url: 'https://www.luontoon.fi/fi/artikkelit/pohjois-suomen-maasto-olosuhteiden-vuodenkierto' },
  mhMarjat: { url: 'https://www.luontoon.fi/fi/artikkelit/marjastusajat-ja-syotavat-marjat' },
  traficom: { url: 'https://traficom.fi/fi/liikenne/autoilijat/vinkkeja-liikenteeseen/auton-kesa-ja-talvirenkaat' },
  paliskunnat: { url: 'https://paliskunnat.fi/py/porovahingot/liikennevahingot/' },
  tkMajoitus: { url: 'https://pxdata.stat.fi/PXWeb/pxweb/fi/StatFin/StatFin__matk/statfin_matk_pxt_11ix.px' },
  oph: { url: 'https://www.oph.fi/fi/uutiset/2026/koulujen-tyo-ja-loma-ajat-lukuvuonna-2026-2027' },
  visitFinland: { url: 'https://www.visitfinland.com/en/articles/the-best-times-to-see-northern-lights/' },
  das: { url: 'https://das.fi/fi/hakeminen/usein-kysyttya' },
  yleAsunnot: { url: 'https://yle.fi/a/74-20238146' },
  yleKausi: { url: 'https://yle.fi/a/74-20155386' },
  yleRekry: { url: 'https://yle.fi/a/74-20094545' },
  levi: { url: 'https://www.levi.fi/' },
  arcticRally: { url: 'https://www.arcticrally.fi/' },
  msff: { url: 'https://msfilmfestival.fi/en/' },
  jutajaiset: { url: 'https://jutajaiset.fi/' },
  simerock: { url: 'https://simerock.com/' },
  arcticSnowHotel: { url: 'https://arcticsnowhotel.fi/' },
} as const;

type SrcId = keyof typeof SRC;

const LABELS: Record<SrcId, Record<HousingLang, string>> = {
  fmi1991: { fi: 'Ilmatieteen laitos: Tilastoja Suomen ilmastosta ja merestä 1991–2020 (Raportteja 2021:8), Rovaniemen, Sodankylän ja Utsjoen Kevon asemat', en: 'Finnish Meteorological Institute: Climate statistics of Finland 1991–2020 (Reports 2021:8), Rovaniemi, Sodankylä and Utsjoki Kevo stations' },
  fmiLumi: { fi: 'Ilmatieteen laitos: Lumitilastot (pysyvän lumipeitteen alkaminen ja päättyminen 1991–2020)', en: 'Finnish Meteorological Institute: Snow statistics (start and end of permanent snow cover 1991–2020)' },
  fmiVuodenajat: { fi: 'Ilmatieteen laitos: Tähtitieteelliset vuodenajat (kaamos ja yötön yö)', en: 'Finnish Meteorological Institute: Astronomical seasons (polar night and midnight sun)' },
  fmiRevontulet: { fi: 'Ilmatieteen laitos: Revontulet, kysymyksiä ja vastauksia', en: 'Finnish Meteorological Institute: Auroras, questions and answers' },
  fmiRevontuletMissa: { fi: 'Ilmatieteen laitos: Missä ja milloin revontulia havaitaan?', en: 'Finnish Meteorological Institute: Where and when are auroras seen?' },
  fmiJoulu: { fi: 'Ilmatieteen laitos: Joulunaika (lumi jouluaattona, 1991–2020)', en: 'Finnish Meteorological Institute: Christmas time (snow on Christmas Eve, 1991–2020)' },
  fmiPilvi: { fi: 'Ilmatieteen laitos: Jälleen lähestymme vuoden synkintä pimeyttä (5.12.2014)', en: 'Finnish Meteorological Institute: The year’s darkest time approaches again (5 Dec 2014)' },
  timeanddate: { fi: 'timeanddate.com: auringon nousu ja lasku 2027 (Rovaniemi, Sodankylä, Kittilä, Ivalo, Utsjoki; toissijainen lähde)', en: 'timeanddate.com: sunrise and sunset 2027 (Rovaniemi, Sodankylä, Kittilä, Ivalo, Utsjoki; secondary source)' },
  utsjoki: { fi: 'Explore Utsjoki (Utsjoen kunta): kaamos', en: 'Explore Utsjoki (Municipality of Utsjoki): the polar night' },
  mhMaasto: { fi: 'Metsähallitus, luontoon.fi: Pohjois-Suomen maasto-olosuhteiden vuodenkierto (ruska, räkkä, hankikanto, kelirikko)', en: 'Metsähallitus, luontoon.fi: The year of terrain conditions in northern Finland (autumn colours, mosquitoes, crust snow, thaw)' },
  mhMarjat: { fi: 'Metsähallitus, luontoon.fi: Marjastusajat ja syötävät marjat', en: 'Metsähallitus, luontoon.fi: Berry-picking seasons and edible berries' },
  traficom: { fi: 'Traficom: Auton kesä- ja talvirenkaat', en: 'Traficom (Finnish Transport and Communications Agency): Summer and winter tyres' },
  paliskunnat: { fi: 'Paliskuntain yhdistys: Porojen liikennevahingot', en: 'Reindeer Herders’ Association: Reindeer traffic accidents' },
  tkMajoitus: { fi: 'Tilastokeskus: Majoitustilasto, Lappi ja Rovaniemen hotellit kuukausittain 2023–2025 (taulukot 11ix, 11iz, 11lm; vähintään 20 vuodepaikan liikkeet)', en: 'Statistics Finland: Accommodation statistics, Lapland and Rovaniemi hotels by month 2023–2025 (tables 11ix, 11iz, 11lm; establishments with at least 20 beds)' },
  oph: { fi: 'Opetushallitus: Koulujen työ- ja loma-ajat lukuvuonna 2026–2027 (10.4.2026)', en: 'Finnish National Agency for Education: School terms and holidays 2026–2027 (10 Apr 2026)' },
  visitFinland: { fi: 'Visit Finland: Best times to see the Northern Lights (päivitetty 4/2026)', en: 'Visit Finland: Best times to see the Northern Lights (updated April 2026)' },
  das: { fi: 'DAS (Rovaniemen opiskelija-asunnot): Usein kysyttyä', en: 'DAS (student housing in Rovaniemi): Frequently asked questions' },
  yleAsunnot: { fi: 'Yle 27.7.2026: Rovaniemen opiskelija-asunnot ja talveksi matkailijoille vuokrattavat asunnot', en: 'Yle 27 Jul 2026: Student housing in Rovaniemi and flats let to tourists for the winter' },
  yleKausi: { fi: 'Yle 16.4.2025: kausityöntekijöiden määrä ja kauden loppu', en: 'Yle 16 Apr 2025: seasonal worker numbers and the end of the season' },
  yleRekry: { fi: 'Yle 18.6.2024: talven kausityöntekijöiden rekrytointi on vilkkainta elokuussa', en: 'Yle 18 Jun 2024: winter seasonal recruitment peaks in August' },
  levi: { fi: 'Levi: hiihtokauden ja kesäkauden avaus 2026', en: 'Levi: ski season and summer season openings 2026' },
  arcticRally: { fi: 'Arctic Lapland Rally 28.–30.1.2027', en: 'Arctic Lapland Rally 28–30 Jan 2027' },
  msff: { fi: 'Midnight Sun Film Festival 16.–20.6.2027', en: 'Midnight Sun Film Festival 16–20 Jun 2027' },
  jutajaiset: { fi: 'Jutajaiset 22.–25.10.2026', en: 'Jutajaiset folk festival 22–25 Oct 2026' },
  simerock: { fi: 'Simerock 13.–14.8.2027', en: 'Simerock 13–14 Aug 2027' },
  arcticSnowHotel: { fi: 'Arctic SnowHotel: avaus 15.12.2026', en: 'Arctic SnowHotel: opening 15 Dec 2026' },
};

const sources = (hl: HousingLang): Source[] =>
  (Object.keys(SRC) as SrcId[]).map((id) => ({ id, label: LABELS[id][hl], url: SRC[id].url }));

export const WHEN_TO_GO: Record<HousingLang, WhenToGoCopy> = {
  fi: {
    metaTitle: 'Lapin vuosi kuukausittain: kaamos, yötön yö ja ruska',
    metaDescription:
      'Lapin vuosi kuukausi kerrallaan: lämpötilat, päivän pituus, lumi, revontulet, yötön yö, ruska ja räkkä Ilmatieteen laitoksen ja Tilastokeskuksen luvuilla.',
    breadcrumb: 'Lapin vuosi',
    hero: {
      eyebrow: 'Tammikuusta joulukuuhun',
      title: 'Lapin vuosi kuukausittain.',
      subtitle:
        'Mitä kukin kuukausi on sään, valon ja lumen puolesta, mitä silloin tehdään ja mitä se tarkoittaa asumiselle. Luvut Ilmatieteen laitokselta ja Tilastokeskukselta.',
    },
    intro: [
      'Lapin vuosi on kaksi eri maailmaa. Marraskuusta huhtikuuhun lunta, pakkasta ja lyhyitä päiviä; toukokuusta syyskuuhun valoa, joka pohjoisessa ei laske lainkaan. Välissä on kaksi lyhyttä vaihetta, kevään kelirikko ja syksyn ruska, jotka paikalliset tuntevat hyvin.',
      'Alla ensin koko vuosi yhdessä taulukossa, sitten kuukausi kerrallaan. Luvut ovat pitkän ajan keskiarvoja: yksittäinen vuosi voi poiketa niistä selvästi, ja Metsähallituksen mukaan pysyvä lumi tulee nykyään usein myöhemmin kuin tilastojen keskiarvo.',
    ],
    tableKicker: 'Koko vuosi',
    tableH2: 'Lapin vuosi lukuina.',
    table: {
      caption: 'Päivän pituus Rovaniemellä kuun 15. päivä, keskilämpötila Rovaniemellä ja Sodankylässä, lumensyvyys Rovaniemellä kuun 15. päivä',
      head: ['Kuukausi', 'Päivän pituus', 'Keskilämpötila (Rovaniemi / Sodankylä)', 'Lunta (Rovaniemi)', 'Ilmiö'],
      rows: [
        ['Tammikuu', '4 h 15 min', '−10,3 / −12,5 °C', '47 cm', 'Kylmin kuukausi'],
        ['Helmikuu', '8 h 10 min', '−10,3 / −12,1 °C', '66 cm', 'Talvilomat'],
        ['Maaliskuu', '11 h 37 min', '−5,6 / −7,1 °C', '77 cm', 'Revontulet, eniten lunta'],
        ['Huhtikuu', '15 h 25 min', '0,1 / −0,8 °C', '64 cm', 'Hankikanto'],
        ['Toukokuu', '19 h 24 min', '6,5 / 5,6 °C', '–', 'Lumet lähtevät, kelirikko'],
        ['Kesäkuu', '24 h (ei laske)', '12,5 / 11,9 °C', '–', 'Yötön yö'],
        ['Heinäkuu', '21 h 29 min', '15,6 / 15,0 °C', '–', 'Lämpimin kuukausi, räkkä'],
        ['Elokuu', '17 h 02 min', '13,1 / 12,4 °C', '–', 'Pimeät yöt palaavat'],
        ['Syyskuu', '13 h 13 min', '7,7 / 7,0 °C', '–', 'Ruska'],
        ['Lokakuu', '9 h 37 min', '0,8 / 0,0 °C', '–', 'Lumi tuntureille'],
        ['Marraskuu', '5 h 45 min', '−4,4 / −5,8 °C', '9 cm', 'Kaamos pohjoisessa'],
        ['Joulukuu', '2 h 27 min', '−7,7 / −9,6 °C', '28 cm', 'Lyhin päivä 2 h 14 min'],
      ],
      foot: 'Lämpötilat ja lumi: Ilmatieteen laitos, vertailukausi 1991–2020, lumensyvyys on mediaani. Päivän pituus: timeanddate.com vuodelle 2027 (toissijainen lähde, vuosien välillä noin päivän ero). Kesäkuussa aurinko ei laske Rovaniemellä 7.6.–6.7.',
    },
    months: [
      {
        name: 'Tammikuu',
        pitch: 'Kylmin kuukausi, valo palaa',
        body: 'Tammikuu on Sodankylässä ja Utsjoella vuoden kylmin kuukausi, keskimäärin −12,5 ja −13,3 astetta; Rovaniemellä −10,3. Päivä pitenee Rovaniemellä kuun aikana 2 tunnista 44 minuutista yli kuuteen tuntiin, ja Utsjoella aurinko nousee kaamoksen jälkeen 17.1. Lunta on keskimäärin noin puoli metriä.',
        good: ['Hiihto ja lumilajit vakaalla lumella', 'Arctic Lapland Rally Rovaniemellä 28.–30.1.2027'],
        note: ['Poroja liikkuu teillä: marras–tammikuu on porokolareiden huippuaikaa', 'Rovaniemen hotellit olivat tammikuussa 2025 yhä 86 % täynnä'],
      },
      {
        name: 'Helmikuu',
        pitch: 'Lunta ja talvilomia',
        body: 'Helmikuu on joulukuun ohella vuoden täysin kuukausi: Lapin majoitusliikkeiden käyttöaste oli helmikuussa 2025 77,6 %, mutta huoneen keskihinta jäi joulukuun alle. Lunta on 15.2. Rovaniemellä keskimäärin 66 cm, ja päivä on jo kahdeksan tuntia pitkä.',
        good: ['Kevättalven revontulet: Ilmatieteen laitoksen mukaan kevättalvi ja alkusyksy ovat tilastollisesti edullisimmat ajat', 'Hiihto ja pitkät retket'],
        note: ['Varaa majoitus ajoissa, helmikuu on vuoden täysimpiä kuukausia', 'Pääkaupunkiseudun ja Turun koulujen hiihtoloma on viikolla 8 (22.–26.2.2027)'],
      },
      {
        name: 'Maaliskuu',
        pitch: 'Revontulet ja eniten lunta',
        body: 'Ilmatieteen laitos suosittelee maaliskuuta ja huhtikuun alkua revontulien katseluun Pohjois-Suomessa, koska kevät on syksyä vähemmän pilvinen. Lunta on vuoden eniten, Rovaniemellä keskimäärin 77 cm, ja päivä pitenee kuun aikana yli 13 tuntiin. Aurinkoa on Sodankylässä 141 tuntia, kun helmikuussa sitä oli 59.',
        good: ['Revontulet', 'Hiihto aurinkoisilla keleillä', 'Pääsiäinen 26.–29.3.2027'],
        note: ['Rovaniemen, Kittilän, Inarin ja Sodankylän koulujen hiihtoloma on viikolla 10 (8.–12.3.2027), ja pääsiäinen tuo kotimaiset matkailijat', 'Talvirenkaat ovat pakolliset 31.3. asti, kun keli sitä vaatii'],
      },
      {
        name: 'Huhtikuu',
        pitch: 'Hankikanto ja pitkät illat',
        body: 'Lunta on yhä paljon, Rovaniemellä keskimäärin 64 cm 15.4., ja Metsähallituksen mukaan hankikantokeli kestää huhtikuun puolivälistä jopa toukokuun puoliväliin. Revontulia voi vielä nähdä kuun alkupuolella: Rovaniemellä yöt pimenevät noin 21.4. asti, Utsjoella noin 10.4. asti. Lapin hotellihuoneen keskihinta oli huhtikuussa 139–141 euroa, maaliskuussa 200–225 (2024–2025).',
        good: ['Hankihiihto ja tunturiretket', 'Kevätaurinko: 20.4. päivä on Rovaniemellä yli 16 tuntia'],
        note: ['Osa hiihtokeskuksista sulkee jo huhtikuussa: Luosto 10.4. ja Ounasvaara 17.4.2027, Ylläs ja Saariselkä ovat auki 2.5. asti', 'Kausityöt loppuvat: Saariselällä talven viimeiset työpäivät ovat huhtikuun puolivälissä (Yle)'],
      },
      {
        name: 'Toukokuu',
        pitch: 'Lumet lähtevät, hiljaisin kuukausi',
        body: 'Pysyvä lumi lähtee Rovaniemen seudulta tyypillisesti 30.4.–10.5. ja tunturi-Lapista 10.–20.5. Maasto on kelirikossa: liian märkä hiihtää ja liian luminen kävellä. Toukokuu on matkailun hiljaisin kuukausi, noin 65 000 yöpymistä, kun talvikuukausina niitä on 430 000–620 000, ja moni yritys pitää taukoa. Pohjoisessa yötön yö alkaa jo: Nuorgamissa 16.5.',
        good: ['Asunnon etsiminen Rovaniemeltä: DAS:n mukaan asuntoja vapautuu keväällä ja alkukesällä hakijoihin nähden eniten', 'Hiljaiset maisemat ja kevään valo'],
        note: ['Monet matkailupalvelut ovat kiinni tai auki rajoitetusti', 'Kevättulva vaihtelee toukokuun puolivälistä kesäkuun puoliväliin'],
      },
      {
        name: 'Kesäkuu',
        pitch: 'Yötön yö',
        body: 'Aurinko ei laske Rovaniemellä 7.6.–6.7., Sodankylässä 31.5.–13.7. ja Utsjoella 18.5.–27.7. Keskilämpötila on Rovaniemellä 12,5 astetta, mutta hallaöitäkin voi vielä olla. Vaelluskausi alkaa, kun lumet lähtevät tuntureilta; Kilpisjärvellä lunta on kesäkuun puoliväliin.',
        good: ['Midnight Sun Film Festival Sodankylässä 16.–20.6.2027', 'Juhannus 25.–26.6.2027'],
        note: ['Räkkä eli hyttysaika alkaa yleensä juhannuksen korvilla', 'Pimennysverhot makuuhuoneeseen: valoisa yö on kaunis mutta ei nukuttava'],
      },
      {
        name: 'Heinäkuu',
        pitch: 'Lämpimin kuukausi, suomalaisten suosikki',
        body: 'Heinäkuu on vuoden lämpimin kuukausi: Rovaniemellä keskimäärin 15,6 astetta ja päivän ylin noin 20. Se on myös suomalaisten matkailijoiden suosituin kuukausi Lapissa, ja heinä- ja elokuu ovat vuoden edullisimmat: hotellihuoneen keskihinta oli noin 96–100 euroa (2024–2025). Hilla kypsyy heinäkuun puolivälistä elokuun alkuun.',
        good: ['Vaellus ja retkeily', 'Marjastus: hilla heinäkuun puolivälistä, mustikka heinäkuun jälkipuoliskolta'],
        note: ['Räkkä on pahimmillaan, se kestää elokuun alkuun tai puoliväliin', 'Heinäkuu on myös vuoden sateisin kuukausi, Rovaniemellä 81 mm'],
      },
      {
        name: 'Elokuu',
        pitch: 'Pimeät yöt palaavat',
        body: 'Yöt pimenevät Rovaniemellä taas noin 24.8., ja Visit Finlandin mukaan revontulet näkyvät Lapissa elokuun lopusta huhtikuuhun. Ensimmäiset lumisateet osuvat tunturien huipuille tavallisesti elo–syyskuussa. Rovaniemellä koulut alkavat 12.8.2026, ja opiskelijoiden asunnonhaku on huipussaan.',
        good: ['Mustikka- ja retkeilykausi jatkuu', 'Simerock Rovaniemellä 13.–14.8.2027'],
        note: ['Rovaniemellä DAS:n asuntoihin on elo–syyskuussa eniten hakijoita, ja vapautuvat asunnot vuokrataan nopeasti', 'Talven kausitöiden rekrytointi kiihtyy elokuusta (Yle)'],
      },
      {
        name: 'Syyskuu',
        pitch: 'Ruska ja syksyn revontulet',
        body: 'Ruska saapuu Pohjois-Suomeen syyskuun alkupuoliskolla: Kilpisjärvellä, Pallas-Ylläksellä ja Utsjoella viikoilla 36–38, Urho Kekkosen kansallispuistossa viikoilla 37–39. Syyspäiväntasauksen aikaan magneettisia myrskyjä on keskimäärin enemmän, ja Sodankylän korkeudella revontulia näkyy keskimäärin joka toinen kirkas ja pimeä yö. Syyskuu on suomalaisten toinen matkailuhuippu.',
        good: ['Ruskaretket', 'Revontulet ennen talvea', 'Puolukka syyskuun alusta'],
        note: ['Tuntureilla voi sataa lunta jo syyskuussa', 'Ruskaviikot täyttävät tunturikohteet kotimaisilla matkailijoilla'],
      },
      {
        name: 'Lokakuu',
        pitch: 'Lumi tulee tuntureille',
        body: 'Ilmatieteen laitoksen vertailukaudella 1991–2020 pysyvä lumi alkoi tunturi-Lapissa 17.–27.10. ja Sodankylässä 29.10. Metsähallituksen mukaan se muodostuu nykyään usein vasta marraskuun lopulla, joskus joulukuussa. Levin rinteet aukeavat 2.10.2026. Lokakuu on majoituksessa toiseksi hiljaisin kuukausi toukokuun jälkeen.',
        good: ['Syksyn revontulet ennen lumen tuloa', 'Jutajaiset Rovaniemellä 22.–25.10.2026'],
        note: ['Rovaniemellä moni määräaikainen vuokrasopimus päättyy lokakuun lopussa, koska asuntoja vuokrataan talveksi matkailijoille (Yle 27.7.2026)', 'Syysloma viikolla 42 (12.–16.10.2026) muun muassa Rovaniemellä, Kittilässä, Inarissa ja Sodankylässä'],
      },
      {
        name: 'Marraskuu',
        pitch: 'Kaamos alkaa pohjoisessa',
        body: 'Utsjoella kaamos alkaa 26.11. ja kestää keskimäärin 51 vuorokautta. Rovaniemellä aurinko nousee joka päivä, mutta 15.11. päivä on enää vajaa kuusi tuntia. Hiihtokeskukset avautuvat: Ounasvaara 11.11., Ylläs ja Saariselkä tavoitteena 21.11.2026, ja kausityöntekijät saapuvat.',
        good: ['Levin maailmancupin pujottelut 14.–15.11.2026', 'Talvi ennen joulun hintoja: Lapin hotellihuone maksoi marraskuussa keskimäärin 192–209 euroa, joulukuussa 285–313 (2024–2025)'],
        note: ['Rovaniemi ei ole marraskuussa hiljainen: hotellien käyttöaste 72–82 % (2023–2025)', 'Talvirenkaat 1.11. alkaen, kun keli sitä vaatii. Lumihotellit avautuvat vasta joulukuussa'],
      },
      {
        name: 'Joulukuu',
        pitch: 'Joulu, vuoden vilkkain kuukausi',
        body: 'Joulukuu on Lapin matkailun vilkkain ja kallein kuukausi: 622 449 yöpymistä ja hotellihuoneen keskihinta 313 euroa joulukuussa 2025. Rovaniemellä lyhin päivä on 2 tuntia 14 minuuttia, mutta aurinko nousee; kaamos kestää Sodankylässä vain neljä päivää ennen joulua ja Kittilässä 14.–29.12. Sodankylässä maassa on ollut lunta joka jouluaattona.',
        good: ['Joulu: Joulupukin Pajakylä on auki joka päivä', 'Lumihotellit: Arctic SnowHotel avautuu 15.12.2026'],
        note: ['Varaa hyvissä ajoin: Rovaniemen hotellit olivat joulukuussa 93,5–97 % täynnä (2023–2025)', 'Loppusyksy ja alkutalvi ovat Ilmatieteen laitoksen mukaan vuoden pilvisintä aikaa, mikä haittaa revontulien näkemistä'],
      },
    ],
    goodLabel: 'Hyvä aika',
    noteLabel: 'Huomioi',
    monthsNav: 'Kuukaudet',
    living: {
      kicker: 'Asujalle',
      h2: 'Mitä vuosi tarkoittaa asumiselle.',
      items: [
        '<strong>Vuokra-asunto Rovaniemeltä:</strong> DAS:n mukaan asuntoja vapautuu keväällä ja alkukesällä hakijoihin nähden eniten, ja elo–syyskuussa hakijoita on eniten. Lokakuun lopussa päättyy määräaikaisia sopimuksia, koska asuntoja vuokrataan talveksi matkailijoille (Yle 27.7.2026).',
        '<strong>Kausityö:</strong> talven rekrytointi kiihtyy elokuusta, työntekijät saapuvat marraskuussa, ja kausi loppuu maalis–toukokuussa kohteen mukaan (Yle).',
        '<strong>Auto:</strong> talvirenkaat ovat pakolliset 1.11.–31.3., kun keli sitä vaatii, ja nastoja saa käyttää muulloinkin, jos olosuhteet vaativat (Traficom). Porokolareita sattuu eniten marras–tammikuussa (Paliskuntain yhdistys).',
        '<strong>Valo:</strong> kesällä pimennysverhot ja hyttysverkko, talvella kirkasvalolamppu ja heijastin. Kaamos koskee Rovaniemellä vain nimeä: aurinko nousee joka päivä.',
      ],
    },
    links: [
      { label: 'Vuokra-asunnot paikkakunnittain', href: '/rentals' },
      { label: 'Muutto Lappiin', href: '/moving-to-lapland' },
      { label: 'Kausityöntekijän asuminen', href: '/seasonal-worker-housing' },
      { label: 'Kuukaudeksi Lappiin', href: '/long-stays' },
    ],
    faqKicker: 'Kysytyimmät',
    faqH2: 'Lapin vuodesta kysytään.',
    faqs: [
      {
        q: 'Milloin Lapissa näkee revontulia?',
        a: 'Kun yöt ovat pimeät, eli elokuun lopusta huhtikuuhun. Ilmatieteen laitoksen mukaan revontulia esiintyy syksyllä ja keväällä hieman enemmän kuin keskitalvella, ja se suosittelee Pohjois-Suomessa maaliskuuta ja huhtikuun alkua, koska kevät on vähemmän pilvinen. Sodankylän korkeudella niitä näkyy keskimäärin joka toinen kirkas ja pimeä yö.',
      },
      {
        q: 'Onko Rovaniemellä kaamosta?',
        a: 'Ei. Rovaniemellä aurinko nousee joka päivä, ja lyhin päivä on 2 tuntia 14 minuuttia. Kaamos kestää Sodankylässä neljä päivää, Kittilässä 16 päivää, Ivalossa noin viisi viikkoa ja Utsjoella keskimäärin 51 vuorokautta.',
      },
      {
        q: 'Milloin Lapissa on lunta?',
        a: 'Vertailukaudella 1991–2020 pysyvä lumi alkoi tunturi-Lapissa lokakuun lopulla ja Rovaniemen seudulla marraskuun alkupuolella, mutta Metsähallituksen mukaan se muodostuu nykyään usein vasta marraskuun lopulla. Lunta on eniten maaliskuussa ja huhtikuun alussa, ja se lähtee Rovaniemen seudulta tyypillisesti 30.4.–10.5.',
      },
      {
        q: 'Milloin on räkkä-aika?',
        a: 'Metsähallituksen mukaan räkkä alkaa yleensä juhannuksen korvilla ja kestää elokuun alkuun tai puoliväliin.',
      },
    ],
    authorNote:
      'Lämpötilat, lumi ja revontulet Ilmatieteen laitokselta, luonnon vuodenkierto Metsähallitukselta, matkailun kuukausiluvut Tilastokeskukselta, lomat Opetushallitukselta, tapahtumat järjestäjiltä. Tarkistettu 23.9.2026.',
    sources: sources('fi'),
  },
  en: {
    metaTitle: 'Best Time to Visit Lapland: Month-by-Month Guide',
    metaDescription:
      'When to visit Finnish Lapland, month by month: temperatures, daylight, snow, auroras, midnight sun, autumn colours and mosquitoes, with official figures.',
    breadcrumb: 'When to Go',
    hero: {
      eyebrow: 'January to December',
      title: 'Lapland, month by month.',
      subtitle:
        'What each month is like for weather, light and snow, what people do then and what it means if you live here. Figures from the Finnish Meteorological Institute and Statistics Finland.',
    },
    intro: [
      'Lapland’s year is two different worlds. From November to April there is snow, frost and short days; from May to September there is light, which in the far north does not set at all. In between come two short phases locals know well: the spring thaw and the autumn colours, ruska.',
      'Below is the whole year in one table first, then month by month. The figures are long-term averages: a single year can differ clearly, and according to Metsähallitus, permanent snow now often arrives later than the statistical average.',
    ],
    tableKicker: 'The whole year',
    tableH2: 'Lapland’s year in numbers.',
    table: {
      caption: 'Day length in Rovaniemi on the 15th, mean temperature in Rovaniemi and Sodankylä, snow depth in Rovaniemi on the 15th',
      head: ['Month', 'Day length', 'Mean temperature (Rovaniemi / Sodankylä)', 'Snow (Rovaniemi)', 'What happens'],
      rows: [
        ['January', '4 h 15 min', '−10.3 / −12.5 °C', '47 cm', 'Coldest month'],
        ['February', '8 h 10 min', '−10.3 / −12.1 °C', '66 cm', 'Winter holidays'],
        ['March', '11 h 37 min', '−5.6 / −7.1 °C', '77 cm', 'Auroras, deepest snow'],
        ['April', '15 h 25 min', '0.1 / −0.8 °C', '64 cm', 'Crust snow'],
        ['May', '19 h 24 min', '6.5 / 5.6 °C', '–', 'Snow melts, the thaw'],
        ['June', '24 h (no sunset)', '12.5 / 11.9 °C', '–', 'Midnight sun'],
        ['July', '21 h 29 min', '15.6 / 15.0 °C', '–', 'Warmest month, mosquitoes'],
        ['August', '17 h 02 min', '13.1 / 12.4 °C', '–', 'Dark nights return'],
        ['September', '13 h 13 min', '7.7 / 7.0 °C', '–', 'Autumn colours'],
        ['October', '9 h 37 min', '0.8 / 0.0 °C', '–', 'Snow on the fells'],
        ['November', '5 h 45 min', '−4.4 / −5.8 °C', '9 cm', 'Polar night in the far north'],
        ['December', '2 h 27 min', '−7.7 / −9.6 °C', '28 cm', 'Shortest day 2 h 14 min'],
      ],
      foot: 'Temperatures and snow: Finnish Meteorological Institute, reference period 1991–2020; snow depth is the median. Day length: timeanddate.com for 2027 (secondary source; years differ by about a day). In June the sun does not set in Rovaniemi from 7 June to 6 July.',
    },
    months: [
      {
        name: 'January',
        pitch: 'The coldest month, the light returns',
        body: 'January is the coldest month in Sodankylä and Utsjoki, averaging −12.5 and −13.3 °C; Rovaniemi averages −10.3. In Rovaniemi the day grows during the month from 2 h 44 min to over six hours, and in Utsjoki the sun rises again after the polar night on 17 January. Snow is on average about half a metre deep.',
        good: ['Skiing and snow sports on settled snow', 'Arctic Lapland Rally in Rovaniemi, 28–30 January 2027'],
        note: ['Reindeer on the roads: November to January is the peak time for reindeer collisions', 'Rovaniemi’s hotels were still 86 % full in January 2025'],
      },
      {
        name: 'February',
        pitch: 'Snow and winter holidays',
        body: 'Along with December, February is the fullest month of the year: Lapland’s occupancy was 77.6 % in February 2025, but the average room price stayed below December’s. Snow in Rovaniemi averages 66 cm on 15 February, and the day is already eight hours long.',
        good: ['Late-winter auroras: the Finnish Meteorological Institute calls late winter and early autumn the statistically best times', 'Skiing and long day trips'],
        note: ['Book early, February is one of the fullest months', 'Schools in the Helsinki region and Turku have their ski holiday in week 8 (22–26 February 2027)'],
      },
      {
        name: 'March',
        pitch: 'Auroras and the deepest snow',
        body: 'The Finnish Meteorological Institute recommends March and early April for auroras in northern Finland, because spring is less cloudy than autumn. Snow is at its deepest, 77 cm on average in Rovaniemi, and the day grows past 13 hours. Sodankylä gets 141 hours of sunshine in March against 59 in February.',
        good: ['Auroras', 'Skiing in sunny weather', 'Easter, 26–29 March 2027'],
        note: ['Schools in Rovaniemi, Kittilä, Inari and Sodankylä have their ski holiday in week 10 (8–12 March 2027), and Easter brings domestic travellers', 'Winter tyres are compulsory until 31 March whenever conditions require them'],
      },
      {
        name: 'April',
        pitch: 'Crust snow and long evenings',
        body: 'There is still plenty of snow, 64 cm on average in Rovaniemi on 15 April, and according to Metsähallitus crust-snow conditions last from mid-April to as late as mid-May. Auroras can still be seen early in the month: nights in Rovaniemi get dark until about 21 April, in Utsjoki until about 10 April. Lapland’s average room price was €139–141 in April against €200–225 in March (2024–2025).',
        good: ['Skiing on the crust and fell trips', 'Spring sun: on 20 April the day in Rovaniemi is over 16 hours'],
        note: ['Some ski resorts close in April: Luosto on 10 April and Ounasvaara on 17 April 2027, while Ylläs and Saariselkä stay open until 2 May', 'Seasonal jobs end: in Saariselkä the last winter workdays are in mid-April (Yle)'],
      },
      {
        name: 'May',
        pitch: 'The snow melts, the quietest month',
        body: 'Permanent snow typically melts around Rovaniemi between 30 April and 10 May and in fell Lapland between 10 and 20 May. The terrain is in its thaw: too wet to ski and too snowy to walk. May is the quietest month for tourism, about 65,000 overnight stays against 430,000–620,000 in the winter months, and many businesses take a break. In the far north the midnight sun already begins: in Nuorgam on 16 May.',
        good: ['Looking for a flat in Rovaniemi: DAS says the most flats free up relative to applicants in spring and early summer', 'Quiet landscapes and spring light'],
        note: ['Many tourism services are closed or open on reduced hours', 'The spring flood varies from mid-May to mid-June'],
      },
      {
        name: 'June',
        pitch: 'The midnight sun',
        body: 'The sun does not set in Rovaniemi from 7 June to 6 July, in Sodankylä from 31 May to 13 July and in Utsjoki from 18 May to 27 July. The mean temperature in Rovaniemi is 12.5 °C, and there can still be frosty nights. The hiking season starts as the snow leaves the fells; at Kilpisjärvi snow lasts until mid-June.',
        good: ['Midnight Sun Film Festival in Sodankylä, 16–20 June 2027', 'Midsummer, 25–26 June 2027'],
        note: ['The mosquito season, räkkä, usually starts around Midsummer', 'Blackout curtains for the bedroom: a bright night is beautiful but not for sleeping'],
      },
      {
        name: 'July',
        pitch: 'The warmest month, Finns’ favourite',
        body: 'July is the warmest month of the year: 15.6 °C on average in Rovaniemi, with daily highs around 20. It is also the most popular month in Lapland for Finnish travellers, and July and August are the cheapest months: the average hotel room cost about €96–100 (2024–2025). Cloudberries ripen from mid-July to early August.',
        good: ['Hiking and trips into nature', 'Berry picking: cloudberries from mid-July, bilberries from late July'],
        note: ['Mosquitoes are at their worst, lasting until early or mid-August', 'July is also the wettest month, 81 mm in Rovaniemi'],
      },
      {
        name: 'August',
        pitch: 'Dark nights return',
        body: 'Nights get dark again in Rovaniemi around 24 August, and according to Visit Finland auroras are visible in Lapland from the end of August to April. The first snow usually falls on the fell tops in August or September. In Rovaniemi school starts on 12 August 2026, and students’ search for housing peaks.',
        good: ['The bilberry and hiking season continues', 'Simerock in Rovaniemi, 13–14 August 2027'],
        note: ['In Rovaniemi, DAS has the most applicants in August and September, and freed flats are let quickly', 'Recruitment for the winter season speeds up from August (Yle)'],
      },
      {
        name: 'September',
        pitch: 'Autumn colours and autumn auroras',
        body: 'Ruska, the autumn colours, reaches northern Finland in the first half of September: weeks 36–38 at Kilpisjärvi, Pallas-Ylläs and Utsjoki, weeks 37–39 in Urho Kekkonen National Park. Around the autumn equinox magnetic storms are more frequent on average, and at Sodankylä’s latitude auroras appear on average on every second clear, dark night. September is Finnish travellers’ second peak.',
        good: ['Autumn-colour hikes', 'Auroras before winter', 'Lingonberries from early September'],
        note: ['It can already snow on the fells in September', 'The ruska weeks fill the fell resorts with domestic travellers'],
      },
      {
        name: 'October',
        pitch: 'Snow reaches the fells',
        body: 'In the Finnish Meteorological Institute’s 1991–2020 reference period, permanent snow began in fell Lapland between 17 and 27 October and in Sodankylä on 29 October. According to Metsähallitus it now often forms only in late November, sometimes in December. Levi’s slopes open on 2 October 2026. October is the second-quietest month for accommodation after May.',
        good: ['Autumn auroras before the snow', 'Jutajaiset folk festival in Rovaniemi, 22–25 October 2026'],
        note: ['In Rovaniemi many fixed-term leases end in late October because flats are let to tourists for the winter (Yle, 27 July 2026)', 'Autumn school break in week 42 (12–16 October 2026), among others in Rovaniemi, Kittilä, Inari and Sodankylä'],
      },
      {
        name: 'November',
        pitch: 'The polar night begins in the far north',
        body: 'In Utsjoki the polar night begins on 26 November and lasts 51 days on average. In Rovaniemi the sun rises every day, but on 15 November the day is just under six hours. The ski resorts open: Ounasvaara on 11 November, with Ylläs and Saariselkä aiming for 21 November 2026, and seasonal workers arrive.',
        good: ['The Levi World Cup slaloms, 14–15 November 2026', 'Winter before Christmas prices: a hotel room in Lapland averaged €192–209 in November and €285–313 in December (2024–2025)'],
        note: ['Rovaniemi is not quiet in November: hotel occupancy 72–82 % (2023–2025)', 'Winter tyres from 1 November whenever conditions require. Snow hotels open only in December'],
      },
      {
        name: 'December',
        pitch: 'Christmas, the busiest month',
        body: 'December is Lapland’s busiest and most expensive tourism month: 622,449 overnight stays and an average hotel room price of €313 in December 2025. Rovaniemi’s shortest day is 2 h 14 min, but the sun does rise; the polar night lasts only four days in Sodankylä just before Christmas and from 14 to 29 December in Kittilä. Sodankylä has had snow on the ground every Christmas Eve on record.',
        good: ['Christmas: Santa Claus Village is open every day', 'Snow hotels: Arctic SnowHotel opens on 15 December 2026'],
        note: ['Book well ahead: Rovaniemi’s hotels were 93.5–97 % full in December (2023–2025)', 'Late autumn and early winter are the cloudiest time of year according to the Finnish Meteorological Institute, which makes auroras harder to see'],
      },
    ],
    goodLabel: 'Good for',
    noteLabel: 'Keep in mind',
    monthsNav: 'Months',
    living: {
      kicker: 'If you live here',
      h2: 'What the year means for living.',
      items: [
        '<strong>A rental flat in Rovaniemi:</strong> according to DAS, the most flats free up relative to applicants in spring and early summer, and August and September have the most applicants. Fixed-term leases end in late October because flats are let to tourists for the winter (Yle, 27 July 2026).',
        '<strong>Seasonal work:</strong> winter recruitment speeds up from August, workers arrive in November and the season ends between March and May depending on the resort (Yle).',
        '<strong>Driving:</strong> winter tyres are compulsory from 1 November to 31 March whenever conditions require, and studs may be used at other times if conditions demand (Traficom). Reindeer collisions peak from November to January (Reindeer Herders’ Association).',
        '<strong>Light:</strong> blackout curtains and a mosquito net in summer, a light-therapy lamp and a reflector in winter. In Rovaniemi the polar night is only a name: the sun rises every day.',
      ],
    },
    links: [
      { label: 'Rentals town by town', href: '/rentals' },
      { label: 'Moving to Lapland', href: '/moving-to-lapland' },
      { label: 'Seasonal worker housing', href: '/seasonal-worker-housing' },
      { label: 'A month in Lapland', href: '/long-stays' },
    ],
    faqKicker: 'Most asked',
    faqH2: 'Questions about Lapland’s year.',
    faqs: [
      {
        q: 'When can you see the northern lights in Lapland?',
        a: 'Whenever the nights are dark, from the end of August to April. According to the Finnish Meteorological Institute, auroras are slightly more frequent in autumn and spring than in midwinter, and it recommends March and early April in northern Finland because spring is less cloudy. At Sodankylä’s latitude they appear on average on every second clear, dark night.',
      },
      {
        q: 'Is there a polar night in Rovaniemi?',
        a: 'No. In Rovaniemi the sun rises every day, and the shortest day is 2 h 14 min. The polar night lasts four days in Sodankylä, 16 days in Kittilä, about five weeks in Ivalo and 51 days on average in Utsjoki.',
      },
      {
        q: 'When is there snow in Lapland?',
        a: 'In the 1991–2020 reference period, permanent snow began in late October in fell Lapland and in early November around Rovaniemi, but according to Metsähallitus it now often forms only in late November. Snow is deepest in March and early April and typically melts around Rovaniemi between 30 April and 10 May.',
      },
      {
        q: 'When is mosquito season in Lapland?',
        a: 'According to Metsähallitus, the mosquito season, räkkä, usually starts around Midsummer and lasts until early or mid-August.',
      },
    ],
    authorNote:
      'Temperatures, snow and auroras from the Finnish Meteorological Institute, nature’s calendar from Metsähallitus, monthly tourism figures from Statistics Finland, holidays from the Finnish National Agency for Education, events from their organisers. Checked 23 September 2026.',
    sources: sources('en'),
  },
};
