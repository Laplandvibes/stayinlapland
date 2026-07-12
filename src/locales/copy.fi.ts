import type { SectionCopy } from './copy';

export const copyFI: SectionCopy = {
  nav: {
    longStays: 'Pitkät jaksot',
    hotels: 'Hotellit',
    glassIgloos: 'Lasi-iglut',
    wilderness: 'Erämaa',
    whenToGo: 'Milloin matkustaa',
    bookingGuide: 'Varausopas',
    browseStays: 'Selaa majoituksia',
    homeAria: 'StayInLapland, etusivu',
    openMenu: 'Avaa valikko',
    closeMenu: 'Sulje valikko',
  },
  hero: {
    eyebrow: 'Suomen Lappi · Toimituksellinen opas',
    h1Line1: 'Lappi on enemmän',
    h1Line2: 'kuin viikon loma.',
    lead:
      'Mökkejä viikoittaisilla hinnoilla, design-hotelleja Rovaniemellä, lasi-iglut bucket-list-öihin, ja erämaalodget viimeisen tien jälkeen. Varmistetut hinnat alkaen',
    leadPriceRange: '140 € – 2 800 €',
    liveLabel: 'Reaaliaikainen saatavuus · Hotels.com-haku',
    browseLongStays: 'Katso pitkät jaksot',
    seeHotels: 'Katso hotellit',
  },
  newsletter: {
    eyebrow: 'Pitkät jaksot · kausialennukset',
    h2: 'Majoitukset, joita et voi vielä varata.',
    lead:
      'Suurin osa tämän sivuston pitkän jakson kohteista vapauttaa talvikauden varauksensa elokuun lopussa ja ne menevät neljässä viikossa. Tilaajat saavat vinkin ensin. Kerromme myös matalakausiviikot (marraskuu, huhtikuun loppu), jolloin yöhinnat tippuvat 50 % mutta revontulet näkyvät yhä.',
    placeholder: 'Sähköpostiosoitteesi',
    subscribe: 'Tilaa',
    subscribing: 'Tilataan…',
    success:
      'Tervetuloa mukaan. Vahvista tilaus sähköpostista, ensimmäinen pitkän jakson ilmoitus saapuu, kun seuraava varausikkuna avautuu.',
    errorPrefix: 'Tilaus ei onnistunut, ',
    pleaseTryAgain: 'yritä uudelleen',
    footnotePart1: 'Emme lähetä roskapostia. Peruuta yhdellä klikkauksella. Katso ',
    footnoteLink: 'tietosuojaseloste',
    footnotePart2: '.',
  },
  authorByline: {
    reviewed: 'Tarkastettu LaplandVibesin toimitusverkostossa',
    defaultNote:
      'Kirjoitettu Suomesta ja faktatarkastettu paikallisten kumppaneiden kanssa eri puolilla Lappia. Saamme komission varauksista, mutta se ei vaikuta siihen, mitä kohteita suosittelemme. Lähteet ovat näkyvillä.',
  },
  affiliateDisclosure:
    'Osa tämän sivun linkeistä on kumppanilinkkejä. Jos varaat niiden kautta, saamme komission ilman lisäkustannusta sinulle. Kohteet on valittu käsin ansioiden perusteella, ei komission.',
  langSwitchAria: { en: 'In English', fi: 'Suomeksi', de: 'Auf Deutsch', ja: '日本語で', es: 'En español', 'pt-BR': 'Em português', 'zh-CN': '简体中文', ko: '한국어로', fr: 'En français', it: 'In italiano', nl: 'In het Nederlands' },
  marginNoteDefault: 'Sivuhuomio',
  comparison: {
    property: 'Kohde',
    verdict: 'Tuomio',
    nOutOf5: (n) => `${n} / 5`,
  },
  editorsPick: {
    kicker: 'Toimituksen valinta',
    perNight: '/ yö',
    note: 'Huom',
    cta: 'Tarkista hinnat ja varaa',
  },
  propertyCard: {
    short: '1–3 yötä',
    medium: '3–6 yötä',
    long: '7+ yötä',
    minPrefix: 'Min',
    perNight: '/ yö',
    cta: 'Tarkista hinnat ja varaa',
  },
  workInLaplandPromo: {
    inlineEyebrow: 'Kiinnostaako työskentely Suomen Lapissa?',
    inlineBodyPrefix:
      'Kausityöt, etätyökohteet ja hiihtokeskusten avoimet työpaikat löytyvät sisarsivustoltamme ',
    inlineBodyBrand: 'laplandwork.com',
    inlineBodySuffix: '.',
    inlineCta: 'Selaa työpaikkoja',
    fullEyebrow: 'Sisarsivusto · laplandwork.com',
    fullH2A: 'Kiinnostaako työskentely',
    fullH2B: 'Suomen Lapissa?',
    fullP1:
      'Monet näistä pitkän jakson kohteista varaa ihminen, joka tuli alun perin hiihtokaudeksi, arktiselle insinöörikeikalle tai etätyökuukaudeksi ja jäi sitten rakastumaan paikkaan. Jos olet siksi täällä, työpuolella on oma sivustonsa.',
    fullP2A: 'LaplandWork.com',
    fullP2B:
      ' on Suomen Lapin keskitetty työpaikkahubi, kausimajoitustyöt, hiihtokeskusten paikat, huskytarhojen vakanssit, sairaala- ja insinöörityöt Rovaniemellä, Levillä, Saariselällä ja Inarissa. Ilmainen työnhakijoille, kolme hintatasoa työnantajille.',
    fullCta: 'Selaa työpaikkoja',
    blocks: [
      { label: 'Kausimajoitustyöt', tag: 'Levi · Ylläs · Saariselkä' },
      { label: 'Huskytarhat', tag: 'Marras–huhtikuu kausityö' },
      { label: 'Etätyökohteet', tag: 'Ympäri vuoden, kuitu' },
      { label: 'Terveydenhuolto + tekniikka', tag: 'Vakituiset paikat' },
    ],
  },
  longTermRentals: {
    eyebrow: 'Muutto Lappiin · 6 kk ja pidempään',
    h2A: 'Etsitkö oikeaa asuntoa,',
    h2B: 'et lyhytaikaista vuokrausta?',
    lead:
      'Tämän sivuston kohteet ovat lyhyt- tai keskipitkän aikavälin vuokrauksia Hotels.comin kautta, oikea ratkaisu enintään neljän viikon matkoille. 6 kuukauden, vuoden tai pysyvän muuton kohdalla tarvitset suomalaisia vuokraportaaleja. Tässä Lapin osalta aktiivisimmat kuusi.',
    process: {
      title: 'Tyypillinen prosessi',
      body:
        'Sähköposti vuokranantajalle/välittäjälle → asuntonäyttö paikan päällä → hakemuslomake (palkkatodistus + luottotiedot) → 1–2 kuukauden vuokravakuus + ensimmäisen kuukauden vuokra → avaimet. 2–6 viikon valmisteluaika on realistinen.',
    },
    cost: {
      title: 'Mitä maksaa',
      body:
        'Rovaniemellä yksiö: 600–900 €/kk. Levillä/Saariselällä yksiö (talvikausi): 900–1 400 €. Hiihtokeskuksissa ulkona talvihuipusta hinnat tippuvat 30–40 %. Kaikki summat sisältävät veden; sähkö + lämmitys ovat yleensä erikseen.',
    },
    abroad: {
      title: 'Tuletko ulkomailta?',
      body:
        'EU/ETA-kansalaiset voivat vuokrata vapaasti. Muut maat tarvitsevat oleskeluluvan (Migrin käsittely 1–4 kuukautta). Työhubi osoitteessa laplandwork.com kattaa Migrin, Kelan rekisteröinnin, suomalaisen pankkitilin avaamisen, verokortin ja koko Lappiin muuton tarkistuslistan.',
    },
    tags: {
      national: 'VALTAKUNNALLINEN',
      rentalOnly: 'VAIN VUOKRAT',
      corporate: 'YRITYSVUOKRAUS',
      classifieds: 'SUORAAN VUOKRANANTAJALTA',
    },
  },
  tripRecommender: {
    weBook: 'Varaisimme',
    items: [
      {
        forWho: 'Ensimmäinen reissu · 4–6 yötä · lasten kanssa',
        recommendation: 'Boutique-hotelli Rovaniemellä',
        rationale:
          'Design-hotelli kuten Arctic Light tai Arctic TreeHouse antaa lentokenttäläheisyyden, oikean ravintolatarjonnan ja Joulupukin pajakylän logistiikan, ilman että perhe joutuu syrjäiseen mökkiin, jossa lämmitys muodostuu iltaprojektiksi.',
        ctaLabel: 'Katso hotellit',
      },
      {
        forWho: 'Toistuva kävijä · 7–14 yötä · yksi tukikohta',
        recommendation: 'Pitkän jakson mökki Levillä tai Saariselällä',
        rationale:
          'Asetu viikoksi. Kaksio Levi Spiritissä tai harjamökki Saariselän liepeillä antaa viikkohinnat, oman saunan ja riittävästi aikaa todella sukeltaa Lappiin, sen sijaan että ravaisi bucket-list-öiden välillä.',
        ctaLabel: 'Katso pitkät jaksot',
      },
      {
        forWho: 'Hääpäivä · eläköityminen · ryhmän koko vuokraus',
        recommendation: 'Erämaalodge',
        rationale:
          'Erämaalodge on eksklusiivisin tapa juhlistaa tilaisuutta. Iso-Syötteen Eagle View -sviitti tarjoaa tunturin laelta eristystä puurajan yläpuolella, ja Wilderness Hotel Nangun huvila täydentää sen saamelaisvetoisilla aktiviteeteilla Inarinjärvellä, molemmat tarpeeksi yksityisiä, jotta koko maisema tuntuu omalta, ilman koko vuokrauksen hintalappua.',
        ctaLabel: 'Katso erämaalodget',
      },
    ],
  },
  home: {
    metaTitle: 'Majoitus Suomen Lapissa | StayInLapland',
    metaDescription:
      'Asetu Suomen Lappiin, mökit viikoittain, design-hotellit Rovaniemellä ja Saariselällä, ikoniset lasi-iglut ja erämaalodget viimeisen tien jälkeen.',
    schemaName: 'StayInLapland, Pitkät jaksot ja boutique-hotellit Suomen Lapissa',
    breadcrumbHome: 'Etusivu',
    intro: {
      p1: '"Lapin parhaat majoitukset" -listat alkavat lähes aina lasi-iglulla, ja jatkavat samalla kaavalla. Tämä opas on tehty toisin: itse koeasutut yöt, paikalliset suositukset, ja vain ne kohteet jotka pitää matkan jälkeen muistissa.',
      p2: 'Olemme jakaneet Lapin majoitukset neljään selkeään kategoriaan: pitkät jaksot, hotellit, lasi-iglut ja erämaalodget. 17 valittua kohdetta, kaikki itse käytyjä. Suosittu reitti: viikko mökillä Levillä, kaksi yötä design-hotellissa Rovaniemellä, viimeinen yö lasi-iglussa. Näin yhdistettynä syntyy se Lappi, jonka takia tänne palataan.',
      p3: 'Tämä opas ei aggregoi hintoja eikä kierrätä arvosteluja. Lähteet näkyvissä, kumppanuussuhteet avoinna.',
    },
    authorNote:
      'Käsin valittu lyhytlista, kirjoitettu Suomesta ja faktatarkastettu paikallisten kumppaneiden kanssa eri puolilla Lappia.',
    fourWays: {
      kicker: 'Neljä tapaa majoittua',
      h2A: 'Valitse yksi.',
      h2B: 'Tai yhdistä kaksi.',
      lead:
        'Valitse kategoria, joka vastaa todella haluamaasi matkaa. Sitten valitse kohde. Pitkän jakson lukijat yhdistävät useimmin kaksi, viikon mökkitukikohta ja kaksi yötä erilaisessa paikassa.',
    },
    propertyWord: 'kohde',
    propertiesWord: 'kohdetta',
    explore: 'Tutustu',
    pullQuote: {
      text:
        'Lappi on isompi kuin ihmiset luulevat, ja tie Rovaniemen ja Saariselän välillä syö puoli päivää kumpaankin suuntaan. Ensimmäisen reissun isoin virhe on kolme eri tukikohtaa viidessä yössä.',
      attr: 'Lapin majoitusraportti · Lapin Liitto, 2024',
    },
    tripKicker: 'Tiedätkö jo karkeasti mitä haluat?',
    tripH2: 'Paikalliset oikoreitit.',
    destKicker: 'Viisi tukikohtaa Lapissa',
    destH2: 'Missä päin Lappia?',
    destLead:
      'Jokaisella kohteella on oma pitkän jakson logiikkansa. Klikkaa sisään saadaksesi kohdesuositukset ja perustelun, miksi valita juuri tämä tukikohta muiden sijaan.',
    readGuide: 'Lue',
    faqKicker: 'Oikeita kysymyksiä, oikeita vastauksia',
    faqH2: 'Ennen kuin klikkaat mitään.',
    faqs: [
      {
        q: 'Mikä on “pitkä jakso” tällä sivustolla?',
        a: 'Pitkäksi jaksoksi luokitellaan kaikki neljästä yöstä ylöspäin, se on raja, jossa useimmat Lapin kohteet tarjoavat viikkohintoja ja kunnon keittiöllä alkaa olla merkitystä. Listatut pitkän jakson kohteet vaativat yksiköstä riippuen 5 yöstä 4 viikkoon minimissään; jokainen kortti näyttää minimin.',
      },
      {
        q: 'Miksi etusivu painottaa pitkiä jaksoja eikä lasi-igluja?',
        a: 'Lasi-iglu on Lapin ikoninen muoto ja sille on oma sivunsa. Mutta pidempään rakastetuimmat Lapin-reissut eivät ole kolmen yön bucket-list-vierailuja lasikupoleissa, ne ovat viikon tukikohtia mökissä tai design-hotellissa, joihin lisätään yksi tai kaksi yötä muualla. Sivusto heijastaa sitä, miten Lappi todella palkitsee toistuvia kävijöitä.',
      },
      {
        q: 'Onko Kakslauttanen oikeasti hintansa arvoinen?',
        a: 'Kyllä, mutta vain Kelo-Glass-iglut, eivät klassiset lasi-iglut. Kelo-Glass yhdistää panoraamalasikaton lämmitettyyn hirsirakenteeseen, keittiötilaan ja takkaan. Kahden yön minimi saa kohteesta eniten irti. Parhaat revontuli-ikkunat: helmikuun alku ja maaliskuun loppu.',
      },
      {
        q: 'Mihin sijoittautua, jos pitkä jakso sisältää etätyötä?',
        a: 'Rovaniemi. Se on ainoa Lapin kaupunki, jossa on luotettava kuitu, päivittäiset Helsingin ja Tukholman lennot ja oikea talviravintolaskene, joka pysyy auki välikausina. Arctic TreeHouse Resort ja Ounasvaaran chaletit tarjoavat molemmat viikkohintoja ja kunnon työpisteet.',
      },
    ],
    fullGuideCta: 'Lue koko varausopas',
    categoryDescriptions: {
      longStays: 'Viikko- ja kuukausivuokraukset, huvilat, design-mökit, hiihtoasunnot.',
      hotels: 'Boutique-, design- ja klassiset Lapin hotellit lyhyisiin jaksoihin.',
      glassIgloos: 'Lapin ikoninen muoto, neljä lomakohdetta, jotka ansaitsevat nimen.',
      wilderness: 'Viimeisen tien jälkeen, kolme retreatia vakaville matkaajille.',
    },
    categoryNames: {
      longStays: 'Pitkät jaksot',
      hotels: 'Hotellit',
      glassIgloos: 'Lasi-iglut',
      wilderness: 'Erämaalodget',
    },
  },
  hotels: {
    metaTitle: 'Boutique- ja design-hotellit Suomen Lapissa | StayInLapland',
    metaDescription:
      'Viisi käsin valittua Lapin hotellia, Arctic TreeHouse, Arctic Light, Levi Spirit, Lapland Hotels Saaga ja Star Arctic. Lyhyihin jaksoihin ja työreissuihin.',
    breadcrumb: 'Hotellit',
    pageHero: {
      eyebrow: 'Viisi käsin valittua hotellia',
      title: 'Hotellit Lapissa.',
      subtitle:
        'Boutique-, design- ja klassiset Lapin hotellit, lyhyihin jaksoihin, työreissuihin ja kahden yön kaupunkihetkiin pidemmän mökkireissun ympärille.',
    },
    authorNote:
      'Viisi kohdetta ristiintarkistettu kohteiden julkaisemista tiedoista ja tuoreista vieraspalautteista kaudella 2025/26.',
    introP1:
      'Lapissa on paljon keskitason ketjuhotelleja, Scandic, Cumulus, Sokos, jotka tekevät perusasiat hyvin hintaan 90–140 €/yö. Niitä ei ole listattu tässä; niiden varauspäätös on suurelta osin ”lähimpänä lentokenttää, halvin viikko.”',
    introP2:
      'Alla olevat viisi hotellia ansaitsevat paikkansa toisesta syystä: design, arkkitehtuuri, näkymä tai palvelumix. Ne ovat oikea vastaus kun haluat hotellin, joka on osa matkan syytä, ei pelkkä tukikohta.',
    picksKicker: 'Viisi valintaa',
    picksH2: 'Käsin valittu, ei aggregoitu.',
    pullQuote: {
      text:
        'Rovaniemi rakennettiin vuoden 1944 jälkeen kolme kertaa, kolmannella kerralla Alvar Aalto piirsi kaavan poron sarven muotoiseksi. Arctic Light Hotel istuu sarven sisällä, vuoden 1939 rakennuksessa, joka selvisi kaikista kolmesta jälleenrakennuksesta.',
      attr: 'Architectural Record · Arctic Light Hotel -juttu',
    },
    glanceKicker: 'Kaikki viisi yhdellä silmäyksellä',
    glanceH2: 'Mielipiteellinen vertailu.',
    rubric:
      'Viisi pistettä on paras. Design = sisustuksen tyyli ja materiaalit. Arkkitehtuuri = itse rakennus. Aktiviteetit = ski-in/out, huskytarhat, paikallinen kulttuuri 15 min sisällä.',
    axes: ['Design', 'Arkkitehtuuri', 'Spa / sauna', 'Aktiviteetit', 'Ravintola'],
    rows: [
      { name: 'Arctic TreeHouse', verdict: 'Rovaniemen paras design-hotelli.' },
      { name: 'Arctic Light', verdict: 'Arkkitehtuurisesti kiinnostavin rakennus.' },
      { name: 'Levi Spirit', verdict: 'Aikuisten tunnelma. Spa + ski-in.' },
      { name: 'Lapland Hotels Saaga', verdict: 'Luotettava keskitason luksus Kittilän lentokentän lähellä.' },
      { name: 'Star Arctic', verdict: 'Harjun päällä · pimein taivas · mökki/hotelli-yhdistelmä.' },
    ],
    marginLabel: 'Sisäpiirin vinkki',
    marginBody:
      'Arctic TreeHouse ja Levi Spirit pyörittävät molemmat omia ravintoloitaan, Rakas (TreeHouse) ja Spirit Kitchen (Levi). Molemmat käyttävät paikallista raaka-ainetta. Jos varaat jommankumman, varaa pöytä samana päivänä kun varaat huoneen, ne myydään loppuun nopeammin kuin hotelli viikonloppuisin.',
    counterKicker: 'Rehellinen vastasuositus',
    counterH2: 'Kun hotelli ei ole vastaus.',
    counterP1:
      'Jos vietät 5+ yötä samalla matkarytmillä, hiihto, ruoanlaitto, sauna, toisto, pitkän jakson mökki tai asunto voittaa nämä hotellit yöhintansa ja elämänlaadun suhteen. Hotellit ovat oikea ratkaisu kun päivät eroavat toisistaan.',
    counterP2:
      'Yhteen revontuli-bucket-list-yöhön lasi-iglut voittavat. Yhdelläkään ylläolevista hotelleista ei ole lasikattoa.',
    seeLong: 'Katso pitkät jaksot',
    seeIgloos: 'Katso lasi-iglut',
    browseAll: 'Selaa Hotels.comin tarjontaa',
  },
  glassIgloos: {
    metaTitle: 'Lasi-iglut Suomen Lapissa | StayInLapland',
    metaDescription:
      'Suomen Lapin lasi-igluresortit, jotka ansaitsevat nimen, Kakslauttanen, Levin Iglut, Aurora Village ja Aurora Pyramids. Järjestys taivaan mukaan.',
    breadcrumb: 'Lasi-iglut',
    pageHero: {
      eyebrow: 'Lapin ikoninen muoto',
      title: 'Lasi-iglut Suomen Lapissa.',
      subtitle:
        'Suomalainen lasikattoinen kupoli keksittiin Saariselällä 1973. Neljä kohdetta ansaitsee nimen tänään, ja niiden välillä on todellinen ero.',
    },
    authorNote:
      'Neljä resorttia ristiintarkistettu kohteiden julkaisemista tiedoista ja tuoreista vieraspalautteista. Hinnat tarkistettu viimeksi: helmikuu 2026.',
    pickWhy: [
      'Kakslauttanen on jokaisella listalla, koska se ansaitsee paikan siellä. Resortti keksi modernin lasi-iglun 1973, aikana, jolloin ”matkailumajoitus Saariselällä” tarkoitti puurakenteista hostellia ja revontulia katseltiin parkkipaikalta.',
      'On kuitenkin haarukka: varaa Kelo-Glass-iglut, älä klassisia lasi-igluja. Kelo-Glass yhdistää panoraamalasikaton lämmitettyyn hirsirakenteeseen, omaan keittiötilaan ja takkaan. Klassiset lasi-iglut ovat pienempiä, ruuhkaisempia, ja kylpyhuone on 50 metrin kävelyn päässä -25°C:ssa.',
      'Hintaero on noin 200 €/yö. Kolmen yön aikana Kelo-Glass ansaitsee preemionsa takaisin sillä, ettei tarvitse vetää lumikenkiä jalkaan klo 4 aamulla.',
    ],
    pickCaveat:
      'Klassiset lasi-iglut ovat noin 30 % halvempia, mutta kokemus on selvästi heikompi. Jos budjetti on enintään 400 €/yö, katso Aurora Villagea tai Aurora Pyramidsia, sama taivas, usein parempi järvi- tai erämaaympäristö.',
    pullQuote: {
      text:
        'Ensimmäinen lasi-iglu rakennettiin, jotta vieraat näkisivät revontulet ilman seisomista ulkona -30°C:ssa. Viisikymmentä vuotta myöhemmin se on yhä koko pointti, ja jokaisen jäljittelijän epäonnistumispiste on se, mitä tapahtuu, kun revontulet ovat menneet.',
      attr: 'Kakslauttasen alkuperätarina · 1973',
    },
    runnersKicker: 'Kolme muuta',
    runnersH2: 'Kun Kakslauttanen ei ole oikea vastaus.',
    glanceKicker: 'Kaikki neljä yhdellä silmäyksellä',
    glanceH2: 'Mielipiteellinen vertailu.',
    rubric:
      'Viisi pistettä on paras. Saavutettavuus = helppous lähimmältä lentokentältä. Taivas = pimeys + katseluasento. Yksityisyys = eristys naapuriyksiköistä. Mukavuus = kylpyhuone, keittiö, ääneneristys. Maine = miten resortti vastaa esitettä.',
    axes: ['Saavutettavuus', 'Taivas', 'Yksityisyys', 'Mukavuus', 'Maine'],
    rows: [
      { name: 'Kakslauttanen', verdict: 'Alkuperäinen. Kallis. Vaivan arvoinen vain Kelo-Glassin osalta.' },
      { name: 'Levin Iglut', verdict: 'Paras tekniikka. Moottoroidut revontulisängyt.' },
      { name: 'Aurora Village', verdict: 'Eristynein tunnelma. 30 min Ivalosta.' },
      { name: 'Aurora Pyramids', verdict: 'Järvi heijastaa revontulet kaksinkertaisina.' },
    ],
    marginLabel: 'Kompromissi',
    marginBody:
      'Mikään kohde ei voita kaikilla viidellä akselilla. Aurora Pyramids voittaa kaikki taivasheijastuksessa mutta häviää saavutettavuudessa (40 min Ivalosta). Levin Iglut voittaa tekniikassa, mutta sijaitsee vilkkaassa hiihtokylässä. Valitse tärkein prioriteetti.',
    counterKicker: 'Rehellinen vastasuositus',
    counterH2: 'Milloin ohittaa lasi-iglut kokonaan.',
    counterP1:
      '4+ yön oleskeluihin kaksi lasi-igluyötä ja pitkän jakson mökkijakso on parempi matka kuin neljä lasi-igluyötä. Uutuus haalistuu kakkosyön jälkeen; hirsimökki omalla saunalla tarjoaa sen Lapin osuuden, jota lasikupoli ei pysty.',
    counterP2:
      'Jouluna (22.12. → 2.1.) hinnat kolminkertaistuvat ja 90 % tarjonnasta menee brittiläisten pakettimatkoihin kevääseen mennessä. Siirrä päiviä mahdollisuuksien mukaan tammikuun jälkipuoliskolle, kylmempi, pimeämpi, puolet hinnasta, paremmat revontulet.',
    seeLong: 'Katso pitkät jaksot',
    bookingGuideBtn: 'Varausopas',
    browseAll: 'Selaa Hotels.comin tarjontaa',
  },
  wilderness: {
    metaTitle: 'Erämaalodget Suomen Lapissa | StayInLapland',
    metaDescription:
      'Erämaalodget viimeisen tien jälkeen, Iso-Syöte Eagle View -sviitit ja Wilderness Hotel Muotka. Revontulikatselu puurajan yltä ja revontulien herätyspalvelu.',
    breadcrumb: 'Erämaa',
    pageHero: {
      eyebrow: 'Viimeisen tien jälkeen',
      title: 'Erämaalodget.',
      subtitle:
        'Lapin uusi perinne, arkkitehtuurikohteita 2010-luvulta paikoissa, joissa turistitie loppuu. Kaksi lodgea, kaksi erilaista määritelmää erämaalle.',
    },
    authorNote:
      'Molempien kohteiden tiedot on tarkistettu kohteiden julkaisemista tiedoista ja tuoreista vieraspalautteista.',
    pickWhy: [
      'Iso-Syötteen Eagle View -sviitit sijaitsevat 432 metrissä Lapin eteläisimmällä oikealla tunturilla, kuusirakenteiset sviitit, joista revontulia katsellaan puurajan yläpuolelta ilman pitkää lentoa pohjoiseen.',
      'Lasiseinät avautuvat avoimelle taivaalle, joten revontulikaari näkyy kirkkaana yönä suoraan vuoteelta. Revontulia katsellaan omasta tunturin laen sviitistä eikä yhteisestä katoksesta, yksityisyyttä ilman koko vuokrauksen sitoumusta.',
      'Se on myös helpoiten saavutettava vakava erämaalodge: 90 minuuttia Oulun lentokentältä, mikä tekee siitä harvinaisen retreatin, joka toimii lyhyelläkin matkalla.',
    ],
    pickCaveat:
      'Tämän sivuston ”tarkista hinnat” -nappi reitittää Hotels.com-hakuun lähimpään varattavissa olevaan tarjontaan. Eagle View -sviitit täyttyvät nopeimmin kirkkaina viikonloppuina, varaa päivät, älä sääennustetta.',
    pullQuote: {
      text:
        'Sana ”syrjäinen” on yleensä markkinointikieltä. Täällä ylhäällä se on totta. Tie loppuu, puuraja jää allesi, ja ainoa valo on se, minkä taivas päättää tehdä. Tällaiseen paikkaan ei vain pörhälletä, siihen sitoudutaan.',
      attr: 'Iso-Syötteen tunturitiellä, katsoen ylöspäin',
    },
    runnersKicker: 'Se toinen',
    runnersH2: 'Kun kokonainen tunturin laen sviitti on liikaa.',
    glanceKicker: 'Kaksi määritelmää erämaalle',
    glanceH2: 'Yhdellä silmäyksellä.',
    rubric:
      'Eristys = miten yksin todella tuntuu olevan. Palvelu = henkilökunta–vieras-suhde. Aktiviteetit = sisältyvät tai saatavilla olevat opastetut kokemukset.',
    axes: ['Saavutettavuus', 'Eristys', 'Palvelu', 'Aktiviteetit', 'Kerran elämässä -tekijä'],
    rows: [
      { name: 'Iso-Syöte Eagle View', verdict: 'Tunturilatvalla. Helpoin Etelä-Suomesta.' },
      { name: 'Hotel Muotka', verdict: 'Paikan päällä toimiva revontulien herätyspalvelu. Hotellin mukavuudet.' },
    ],
    marginLabel: 'Revontulien herätys Muotkalla',
    marginBody:
      'Wilderness Hotel Muotkassa on vuorollaan päivystävä revontuli­metsästäjä, joka tarkkailee Kp-indeksiä ja fyysisesti koputtaa oville, kun revontulet aukeavat. Se on ainoa paras yksittäinen ominaisuus tämän oppaan kohteissa ja maksaa hintaeron yhden yön matkoihin.',
    counterKicker: 'Rehellinen vastasuositus',
    counterH2: 'Erämaalodget eivät sovi kaikille.',
    counterP1:
      'Molemmat lodget sijaitsevat 1–3 tunnin transfer-matkan päässä lähimmästä lentokentästä. Alle kolmen yön matkoille kuljetukseen käytetty aika on suhteellisesti liian iso.',
    counterP2:
      'Ensimmäistä kertaa arktiselle matkaaville: tee Rovaniemen tai Saariselän matka ensin. Koko vuokrauksena varattava erämaalodge menee hukkaan jollekulle, joka opettelee vielä -25°C:n vaatetusta.',
    seeLong: 'Katso pitkät jaksot',
    browseAll: 'Selaa Hotels.comin tarjontaa',
  },
  longStays: {
    metaTitle: 'Pitkät jaksot Suomen Lapissa | StayInLapland',
    metaDescription:
      'Viisi pitkän jakson Lapin kohdetta viikon+ vuokrauksiin, Arctic TreeHouse, Levin penthouset, Ounasvaaran chaletit, Pyhän hirsimökit ja Inarinjärven huvilat.',
    breadcrumb: 'Pitkät jaksot',
    pageHero: {
      eyebrow: 'Viisi pitkän jakson kohdetta',
      title: 'Asetu viikoksi. Tai kuukaudeksi.',
      subtitle:
        'Oikea vastaus toistuville kävijöille, etätyöläisille, perheille ja kaikille, joiden Lapin-matka on yli kolme yötä. Viikkohinnat, omat saunat, oikeat keittiöt, designsviiteistä ski-in-asuntoihin.',
    },
    authorNote:
      'Viisi kohdetta ristiintarkistettu paikallisten kumppaneiden ja viikkohintakalentereiden kanssa kaudella 2025/26.',
    pickWhy: [
      'Arctic TreeHouse Resort on vastaus, kun kysymys kuuluu ”miten teen kunnon pitkän jakson Rovaniemellä vuokraamatta paljasta mökkiä?” Designsviittejä, jotka on rakennettu mäntymetsään Santa Parkin laidalle, jokaisessa keittiönurkkaus ja panoraamalasiseinä metsään päin.',
      'Viikkohinta laskee noin 25 % yöhinnasta, ja jokaisesta sviitistä on pääsy resortin saunakylään, viikko täällä maksaa siis yöltä vähemmän kuin sarja yhden yön varauksia, ja tilaa on paljon enemmän todella asettua.',
      'Se on myös tämän listan joustavin tukikohta: Rovaniemen lentokenttä, ravintolat ja designkulttuuri ovat kymmenen minuutin päässä, kun taas itse sviitti avautuu pelkkään metsään. Alla oleva ”Tarkista hinnat” -nappi vie sinut suoraan viikkotarjontaan.',
    ],
    pickCaveat:
      'Viikkoalennus elää varausjärjestelmässä, kun valitset 7+ yötä, se ei aina näy julkaistussa yöhinnassa. Joulun huippuviikot ovat täynnä kuukausia etukäteen; marraskuun puoliväli ja huhtikuun loppu ovat selvästi edullisempia.',
    pullQuote: {
      text:
        'Tehtävänanto oli kadota harjuun. Käytä puuta, joka tulee tontilta, lasia vain pohjoiseen, äläkä koskaan nosta kattolinjaa puurajan yläpuolelle. Mitä näet, oli jo siellä, me vain teimme sen mahdolliseksi asua sisällä.',
      attr: 'Studio Puisto · arkkitehdin lausunto',
    },
    runnersKicker: 'Neljä muuta',
    runnersH2: 'Ski-in-asunnoista järvenrantahuviloihin.',
    runnersLead:
      'Jokaisella alla olevista neljästä on erilainen pitkän jakson logiikka: läheisyys hissijärjestelmään, etätyöhön sopiva arkiviikko-infrastruktuuri, perheystävällinen keittiö tai kulttuurisesti rikas järvitukikohta.',
    weeklyKicker: 'Miten viikkohinnat toimivat',
    weeklyH2: 'Hinta laskee nopeammin kuin ihmiset odottavat.',
    weeklyP1:
      'Tämän sivun kohteiden kesken viikkohinta on keskimäärin <strong>23 % halvempi per yö</strong> kuin julkaistu yöhinta. Levi Residences laskee 30 %, Pyhän Bear’s Lodge 18 %, Arctic TreeHouse 25 %. Useimmat kohteet eivät mainosta tätä, alennus elää varausjärjestelmässä, kun valitset 7+ yötä.',
    weeklyP2:
      'Välikausiviikot, <strong>marraskuun puoliväli</strong> (juuri ennen kuin lumi tasoittuu) ja <strong>huhtikuun loppu</strong> (juuri kun lumi sulaa), laskevat lisäksi 30–50 % päälle. Revontulet ovat aktiivisia molemmissa ikkunoissa. Tämä on pitkien jaksojen sweet spot joustavalla työkalenterilla.',
    marginLabel: 'Varausstrategia',
    marginBody:
      'Neljän viikon jakson kohdalla sen jakaminen kahteen kohteeseen voi voittaa yhden kohteen varauksen, vältät ”huippuviikon” piikin, joka osuu jouluun ja laskiaiseen, ja näet aidosti kaksi Lapin osaa. Siirtopäivä vie puoli päivää; säästetty raha maksaa yleensä kaksi ylimääräistä yötä muualla.',
    counterKicker: 'Rehellinen vastasuositus',
    counterH2: 'Milloin EI kannata varata pitkää jaksoa.',
    counterP1:
      '2–3 yön ensimatkaa varten ohita pitkät jaksot. Sisäänkirjautumis-, ruokakauppa- ja lieden-opettelu-vero syö säästön. Varaa hotelli sen sijaan.',
    counterP2:
      'Yhteen bucket-list-revontuliyöhön lasi-iglut ovat parempi vastaus. Lasinen katto on se kokemus, jonka takia tulit; pitkän jakson mökki antaa ikkunan.',
    counterP3:
      'Liikkuvuudeltaan eritasoisille ryhmille soita kohteeseen suoraan ennen varausta, useimmat pitkän jakson mökit eivät ole esteettömiä, ja erityisesti saunat sijaitsevat kellaritasossa puulattialla.',
    seeHotels: 'Katso hotellit',
    seeIgloos: 'Katso lasi-iglut',
    browseAll: 'Selaa Hotels.comin tarjontaa',
  },
  bookingGuide: {
    metaTitle: 'Lapin varausopas, milloin, miten, mitä pakata',
    metaDescription:
      'Käytännöllinen Lapin varausopas, milloin tulla parhaiden revontulien aikaan, miten päästä perille, mitä pakata, mitä se maksaa ja sisäpiirivinkit.',
    breadcrumb: 'Varausopas',
    pageHero: {
      eyebrow: 'Suunnittele oikea reissu',
      title: 'Lapin varausopas.',
      subtitle:
        'Käytännöllistä, mielipiteellistä neuvontaa. Milloin tulla, miten päästä perille, mitä pakata, mitä se oikeasti maksaa.',
    },
    sections: [
      {
        title: 'Milloin tulla',
        body: [
          'Revontulikausi on elokuun lopusta huhtikuun alkuun. Vahvimmat ikkunat ovat syys–lokakuu ja helmi–maaliskuu, jolloin pitkät pimeät yöt limittyvät aktiivisen aurinkosään kanssa.',
          'Vältä marraskuun loppua ja joulukuun puoliväliä: pimeää, mutta lumi on usein laikukasta ja moni aktiviteetti ei ole vielä alkanut.',
          'Joulu ja uusivuosi myydään loppuun 9 kuukautta etukäteen ja hinnat kolminkertaistuvat. Paikallisten valinta on tammikuun jälkipuolisko, rauhallisempi, kylmempi, paremmat revontulet.',
        ],
      },
      {
        title: 'Miten päästä perille',
        body: [
          'Kolme Lapin lentokenttää kattaa suurimman osan varauksista. Rovaniemi (RVN) Joulupukin pajakylän ja etelän osalta, Kittilä (KTT) Leville ja Yllässeudulle, Ivalo (IVL) Saariselälle, Inariin ja pohjoiseen.',
          'Helsinki (HEL) → Lappi on 90 minuutin kotimaanlento. Suorat lennot Lontoosta, Berliinistä ja Pariisista myös joulu–maaliskuussa.',
          'Junat: Helsinki–Rovaniemi-yövuoro on hidas, mutta Tornion aamunkoitto on aidosti kaunis ja vaunu on täynnä paikallisia samalla matkalla.',
        ],
      },
      {
        title: 'Mitä pakata',
        body: [
          'Useimmat kohteet tarjoavat arktiset ulkoiluvaatteet (-30°C-haalarit, kengät, hanskat, pipot) joko sisältyvinä tai pienellä päivämaksulla. Varmista ennen lentoa täydellä matkalaukulla hiihtotavaraa.',
          'Kerrokset ratkaisevat enemmän kuin paksuus, merinopohja + fleece + tuulenpitävä kuori. Puuvilla tappaa.',
          'Kamerat: pidä vara-akut takin sisällä. Pakkanen tyhjentää ne nopeasti.',
        ],
      },
      {
        title: 'Budjetin realiteetti',
        body: [
          'Pitkän jakson mökki (viikoittain): 140–280 €/yö, nukkuu 4–6.',
          'Boutique-hotelli: 140–420 €/yö, aamupala yleensä sisältyy.',
          'Lasi-iglu, huippukausi: 400–1500 €/yö kahdelle.',
          'Erämaalodgen koko vuokraus: 2 800+ €/yö kymmenelle.',
          'Aktiviteetit (huskysafari, moottorikelkka, revontulijahti) tyypillisesti 120–200 € hengeltä per kerta päälle.',
        ],
      },
      {
        title: 'Peruutusehdot',
        body: [
          'Useimmat Lapin kohteet ovat siirtyneet ei-palautuviin hintoihin huippuviikoiksi. Lue pieni printti ennen ”varaa”-painalluksen klikkausta.',
          'Matkavakuutus, jossa peru-mistä-syystä-tahansa-kattavuus, on aidosti hintansa arvoinen yli 2 000 € matkoilla. Revontulen­metsästäjät peruuttavat sään takia jatkuvasti.',
          'Hotels.com ja Booking.com noudattavat molemmat julkisia peruutusehtojaan, varaa tämän sivuston uudelleenohjauksen kautta pitääksesi hinnan näkyvänä ja yhdenmukaisena.',
        ],
      },
      {
        title: 'Sisäpiirivinkit',
        body: [
          'Saariselkä ja Inari ovat kylmempiä, pimeämpiä ja niillä on vahvemmat revontulet kuin Rovaniemellä, mutta Rovaniemellä on lentokenttä, aktiviteetit ja Joulupukin pajakylä. Yhdistele tukikohtia.',
          'Jos sinulla on vain 3 yötä, tee ne yhdessä paikassa. Lappi on isompi kuin ihmiset luulevat ja siirtymät syövät päiviä.',
          'Revontuliennusteet (NOAA, Aurora Service Europe) ovat tarkkoja 30–90 minuuttia eteenpäin, ei päiviä. Pysy joustavana.',
        ],
      },
    ],
    readyTitle: 'Valmis varaamaan?',
    readyLead:
      'Selaa käsin valittuja kohteita kategorioittain tai siirry suoraan reaaliaikaiseen saatavuuteen Hotels.comissa.',
    browseAll: 'Selaa kaikkia Lapin majoituksia',
  },
  whenToGo: {
    metaTitle: 'Milloin Lappiin, kuukausi kerrallaan -opas | StayInLapland',
    metaDescription:
      'Kuukausi kerrallaan -opas Suomen Lapissa vierailuun, milloin revontulet ovat vahvimpia, milloin lumi tasoittuu ja mitkä viikot paikalliset varaavat itselleen.',
    breadcrumb: 'Milloin matkustaa',
    pageHero: {
      eyebrow: 'Kuukausi kerrallaan',
      title: 'Milloin Lappiin?',
      subtitle:
        'Lapin sää muuttuu kahdessa viikossa täysin toiseksi. Tämä opas kertoo mihin kuukauteen kannattaa varata, revontulille, hiihdolle, joululle vai pitkälle rauhaan vetäytymiselle. Kuukausi kerrallaan, ilman markkinapuhetta.',
    },
    authorNote:
      'Koottu paikallisten kumppaneiden raporteista eri puolilta Suomen Lappia.',
    pullQuote: {
      text:
        'Useimmat revontulet näkyvät Suomen Lapissa illan ja aamuyön välillä, ja pitkät pimeät kuukaudet syksystä alkukevääseen antavat parhaat mahdollisuudet. Kirkas taivas ja hieman kärsivällisyyttä ratkaisevat enemmän kuin tarkka päivämäärä.',
      attr: 'LaplandVibes, kumppaneidemme revontulihavainnot eri puolilta Suomen Lappia',
    },
    months: [
      {
        name: 'Syyskuu',
        pitch: 'Revontulikausi avautuu',
        body:
          'Pitkät pimeät yöt alkavat. Lunta ei ole vielä satanut, tämä on ”ruska”-aika, jolloin koivu muuttuu punaiseksi ja kullaksi. Revontulet näkyvät paljaata maata vasten, ja värit ovat eniten kuvattuja yhdestäkään kuukaudesta.',
        bestFor: ['Valokuvaajat', 'Revontulet edellä, lyhyet jaksot', 'Vaellus + revontulet -yhdistelmä'],
        avoidIf: ['Tulit nimenomaan lumen takia'],
      },
      {
        name: 'Lokakuu',
        pitch: 'Rauhallinen välikausi',
        body:
          'Ensimmäiset lumikuurot, mutta maa pysyy harvoin valkoisena ennen kuun loppua. Hotellit pyörittävät välikaushintoja (-30 % huipusta), revontulet aktiivisia, hyvin vähän turisteja. Halvin revontuli-ikkuna täydellä aktiviteetti­infrastruktuurilla.',
        bestFor: ['Revontulen­metsästäjät budjetilla', 'Pitkän jakson saapuminen ennen huippua'],
        avoidIf: ['Haluat hiihto- tai moottorikelkka­takuita'],
      },
      {
        name: 'Marraskuu',
        pitch: 'Kaamos alkaa, lumi tasoittuu',
        body:
          'Lapin talven kylmin alku. Kaamos käynnistyy Sodankylän pohjoispuolella kuun puolivälissä. Lumi alkaa pysyä marraskuun lopussa, kuun loppuun mennessä useimmat lomakohteet ja lumihotellit avautuvat. Marraskuun loppu on ehdoton paras arvo pitkille jaksoille.',
        bestFor: ['Pitkät jaksot -50 % hinnoilla', 'Toistuvat kävijät, jotka tuntevat kylmän'],
        avoidIf: ['Ensikertalaiset (lumen epäsäännöllisyys)'],
      },
      {
        name: 'Joulukuu',
        pitch: 'Joulun huippu',
        body:
          'Joulu uudenvuoteen on huippu kaikessa, huippuhinnat, huippukysyntä, Joulupukki-matkailun huippu Rovaniemellä. Lasi-iglut kolminkertaistuvat hinnaltaan, lumihotellit täysin auki. Revontulet vielä aktiivisia mutta sää usein pilvisempi.',
        bestFor: ['Joulu-teemaiset perheretket', 'Ensikertalaiset, jotka haluavat varman lumen'],
        avoidIf: ['Budjettiherkkä matkailu', 'Revontulet edellä -jaksot'],
      },
      {
        name: 'Tammikuu',
        pitch: 'Paikallisten valinta',
        body:
          'Tammikuun jälkipuolisko on rauhallinen sweet spot, huippuhinnat ovat laskeneet, päivät pidentyvät selvästi, lumi on vakaa, revontulet aktiivisimmillaan. Joulun ruuhka on poistunut eikä helmikuun talvilomien ruuhka ole vielä alkanut.',
        bestFor: ['Pitkät jaksot', 'Häämatkalaiset', 'Revontulivalokuvaus'],
        avoidIf: ['Tarvitset minkäänlaista lämmintä säätä'],
      },
      {
        name: 'Helmikuu',
        pitch: 'Vahvimmat revontulet',
        body:
          'Helmikuun puolivälistä maaliskuun puoliväliin on tilastollisesti vuoden vahvin revontuli-ikkuna, pimeän taivaan ja aktiivisen aurinkosään yhdistelmä. Pitkät jaksot taas huippuhinnoilla eurooppalaisten talvilomien takia; varaa 6 kuukautta etukäteen.',
        bestFor: ['Lasi-iglut', 'Revontuli-bucket-list-matkat'],
        avoidIf: ['Lyhyellä varoitusajalla suunnittelijat'],
      },
      {
        name: 'Maaliskuu',
        pitch: 'Valo palaa',
        body:
          'Päivät pidentyvät nopeasti, kuun loppuun mennessä päivänvaloa on 13 tuntia. Revontulet vielä vahvoja pimeinä aamuina ja iltoina. Kevätlasku etelään suuntautuvilla tuntureilla. Valokuvallisesti komein laskukuukausi.',
        bestFor: ['Ski-in-pitkät jaksot', 'Kuka tahansa, joka haluaa valoa + revontulia'],
        avoidIf: ['Valokuvaajat, jotka tulivat kaamoksen tunnelman takia'],
      },
      {
        name: 'Huhtikuu',
        pitch: 'Kevätlumi + valo',
        body:
          'Lumi vielä syvää ja hiihto huipputasoa tuntureilla. Revontulikausi loppuu huhtikuun puolivälissä yöt muuttuessa liian valoisiksi. Huhtikuun loppu on jälleen välikautta, hinnat tippuvat 30 %, kohteet vielä auki, aurinko horisontin yläpuolella 16+ tuntia.',
        bestFor: ['Loppukauden hiihtopitkät jaksot', 'Maastohiihto'],
        avoidIf: ['Revontulet edellä -matkat'],
      },
    ],
    bestForLabel: 'Parhaiten sopii',
    skipIfLabel: 'Ohita jos',
    cheatKicker: 'Paikallisten huijauslapppu',
    cheatH2: 'Kolme viikkoa, jotka paikalliset varaavat itselleen.',
    cheatP1:
      '<strong class="text-charcoal">Marraskuun loppu (viikko 47–48).</strong> Lumi juuri tasoittunut, kaamos huipussaan, revontulikausi täydessä aktiivisuudessa. Pitkän jakson hinnat 40–50 % huipun alla. Osa kohteista ei ole vielä täysin auki, varmista ennen varausta.',
    cheatP2:
      '<strong class="text-charcoal">Tammikuun jälkipuolisko (viikko 3–4).</strong> Kauden ainoa paras revontulet-vs-hinta-viikko. Joulun ruuhka mennyt, helmikuun talviloma ei alkanut, päivät pitenevät, lumi täysin asettunut. Tähän aikaan toimittajamme lomailee.',
    cheatP3:
      '<strong class="text-charcoal">Huhtikuun loppu (viikko 16–17).</strong> Kevätlaskun huippu, aurinko horisontin yläpuolella 16h/päivä, lumi vielä syvää pohjoisrinteillä. Revontuli-ikkuna on sulkeutunut mutta pelkkä valo on matkan arvoinen. Hinnat laskevat 30 % pääsiäisen jälkeen.',
    marginLabel: 'Varausajoitus',
    marginBody:
      'Helmikuun huippu: varaa 6 kuukautta etukäteen. Tammikuun loppuosa: 3 kuukautta. Välikausi (marras, huhtikuun loppu): 6–8 viikkoa riittää. Joulu / uusivuosi: 9 kuukautta minimi, ja varaa varapäiviä, sillä huippukauden tarjonta katoaa keväällä.',
    readGuide: 'Lue varausopas',
    seeLong: 'Katso pitkät jaksot',
  },
  destinationPage: {
    metaTitleSuffix: 'Missä yöpyä | StayInLapland',
    pageHeroEyebrow: 'Lapin kohde',
    notFoundKicker: 'Sivua ei löytynyt',
    notFoundTitle: 'Kohde ei ole listalla.',
    notFoundBody: 'Käsittelemme tällä hetkellä Rovaniemen, Levin, Saariselän, Inarin ja Yllässeudun.',
    backHome: 'Takaisin etusivulle',
    authorNoteFor: (n) => `Pitkän jakson näkökulma kohteeseen ${n}, kirjoitettu Suomesta ja faktatarkastettu paikallisten kumppaneiden kanssa.`,
    recommendedIn: (n) => `Suositukset kohteessa ${n}`,
    whereToStay: 'Missä todella yöpyä.',
    minStayLabel: 'Min jakso:',
    perNight: '/ yö',
    checkRates: 'Tarkista hinnat',
    seeAll: 'Katso kaikki',
    liveAvailabilityIn: (n) => `Etsitkö reaaliaikaista saatavuutta kohteesta ${n}?`,
    networkLeadA: 'Verkostomme luokittelee vain 17 kohdetta. Hotels.com listaa kaiken muun, mikä toimii kohteessa ',
    networkLeadB: ' tänä talvena, joustavat päivät, suodatus varustelun mukaan, koko tarjonta.',
    browseInDest: (n) => `Selaa Hotels.com, ${n}`,
    bucketLabels: {
      'long-stays': 'pitkät jaksot',
      'hotels': 'hotellit',
      'glass-igloos': 'lasi-iglut',
      'wilderness': 'erämaa',
    },
  },
  hotelsData: [
    {
      name: 'Arctic TreeHouse Resort',
      location: 'Rovaniemi',
      highlight: 'Design-hotelli · metsän reunaan rakennetut sviitit',
      description:
        '70 sviitin design-hotelli, joka on rakennettu Santa Parkin takaiseen mäntymetsään Rovaniemellä. Jokaisessa sviitissä on panoraamalasinen etupinta puiden suuntaan ja pohjoismaisen minimalistinen sisustus. Vahva oma ravintola, Rakas, paikallisia raaka-aineita, ja resortin saunakylä on avoinna kaikille vieraille.',
    },
    {
      name: 'Arctic Light Hotel',
      location: 'Rovaniemen keskusta',
      highlight: 'Boutique 57 huonetta · vuoden 1939 funktionalistinen rakennus',
      description:
        'Boutique 57 huoneen hotelli vuoden 1939 funktionalistisessa rakennuksessa, entinen paikallisen sanomalehden toimitus, jälleenrakennettu vuoden 1944 Lapin sodan tuhottua Rovaniemen. Jokaisella kerroksella on eri sisustusteema; kattokerroksen sviitissä on oma sauna. Arkkitehtuurisesti vakavin hotelli kaupungissa.',
    },
    {
      name: 'Levi Spirit',
      location: 'Levi',
      highlight: 'Design-huvilat · spa · ski-in/out',
      description:
        'Korkealuokkainen huvilahotelli Levitunturin juurella. Yksityiset ulkoporeammet, sisätilan sauna jokaisessa huvilassa, ski-in/out-yhteys hisseille ja täysmittainen spa. Suunniteltu aikuisille, ei lasten ohjelmaa, vain hiljaisia huoneita ja hyvää ruokaa.',
    },
    {
      name: 'Lapland Hotels SnowVillage Saaga',
      location: 'Kittilä',
      highlight: 'Lapin klassikko · omat saunat · lentokenttäläheinen',
      description:
        'Luotettava keskitason luksus-Lapin hotelli kymmenen minuutin päässä Kittilän lentokentästä. Jokaisessa huoneessa on oma sauna; ravintola tarjoaa paikallista poroa ja nieriää. Vähemmän kuuluisa kuin igluresortit, mutta jatkuvasti hyvin arvioitu ja perustaltaan hotelli, ei resortti.',
    },
    {
      name: 'Star Arctic Hotel',
      location: 'Saariselkä',
      highlight: 'Harjun päällä · pimein taivas · sviittien ja lasimökkien yhdistelmä',
      description:
        'Hybridikohde, perinteiset hotellihuoneet sekä lasikattomökit korkeimmalla pisteellä Saariselän yläpuolella. Käytännössä nollavalosaaste. Hotellihuoneet saavat saman harjunäkymän ylisuurella ikkunalla ja maksavat noin 40 % vähemmän kuin mökit.',
    },
  ],
  longStaysData: [
    {
      name: 'Arctic TreeHouse Resort, Pitkä jakso',
      location: 'Rovaniemi',
      highlight: 'Designsviitit · viikkohinnat · saunakylä',
      description:
        'Designsviitit, joiden ikkunoista mäntymetsä Santa Parkin reunassa. Viikkohinta tippuu 25 % yöhinnasta. Jokaisessa sviitissä on keittiötila, panoraamalasinen etupinta ja pääsy resortin saunakylään, yksi harvoista tavoista tehdä kunnon pitkä jakso Rovaniemellä ilman raa’an mökin vuokraamista.',
    },
    {
      name: 'Levi Residences, Penthouse-sviitit',
      location: 'Levin kylä',
      highlight: '2 makuuhuonetta · ski-in · oma sauna · viikkohinnat',
      description:
        'Kahden makuuhuoneen asuntoja Levitunturin juurella, kävelymatkan päässä hisseistä ja kylästä. Jokaisessa yksikössä on oma puulämmitteinen sauna, oikea keittiö ja neljän yön minimi joulukuusta maaliskuuhun. Valinta perheille, jotka viettävät viikon hiihtäen ilman että luopuvat kaupunkimukavuuksista.',
    },
    {
      name: 'Lapland Hotels Ounasvaaran chaletit',
      location: 'Rovaniemi · Ounasvaara',
      highlight: 'Ski-in/out · kävely Rovaniemen keskustaan',
      description:
        'Täysvarustellut chaletit Ounasvaaralla. Ski-in/ski-out talvella, kymmenen minuutin kävely Rovaniemen keskustaan. Joustavin pitkän jakson vaihtoehto, jos haluat kaupunkimukavuuden ja arktisen aamun yhdistelmän.',
    },
    {
      name: "Lapland Hotels Bear's Lodge",
      location: 'Pyhä-Luoston kansallispuisto',
      highlight: 'Kansallispuiston kynnyksellä · oma sauna · perheille',
      description:
        'Perinteisiä hirsimökkejä Pyhä-Luoston kansallispuiston vieressä. Täysmittaiset keittiöt, omat puulämmitteiset saunat, järvirannan käyttö. Oikea vastaus monen viikon perheoleskeluun, jossa päivät kulkevat lumikenkäilyn ja maastohiihtoreittien ympärillä, ei nähtävyyksien.',
    },
    {
      name: 'Wilderness Hotel Nangu, Järvenrannan huvilat',
      location: 'Inarinjärven eteläranta',
      highlight: 'Saamenkielisiä aktiviteetteja · järvinäkymät · pitkän jakson hinnat',
      description:
        'Järvenrannan huvilat Inarinjärvellä, huoneet vedelle päin. Saamenohjattua pilkkimistä, opastettua erämaahiihtoa, Saamelaismuseo Siida 20 minuutin päässä. Pitkän jakson hinnat neljästä yöstä, kulttuurisesti rikkain järvitukikohdan pitkä jakso.',
    },
  ],
  glassIgloosData: [
    {
      name: 'Kakslauttanen Arctic Resort',
      location: 'Saariselkä',
      highlight: 'Alkuperäinen lasi-iglu · 1973 · Kelo-Glass saatavilla',
      description:
        'Resortti, joka keksi modernin lasi-iglun 1973. Valitse Kelo-Glass klassisten lasi-iglujen sijaan, Kelo yhdistää panoraamalasikaton lämmitettyyn hirsirakenteeseen, keittiötilaan ja takkaan. Kahden yön minimi saa kohteesta eniten irti.',
    },
    {
      name: 'Levin Iglut',
      location: 'Levitunturi',
      highlight: 'Moottoroidut revontulisängyt · tunturilatva-asema',
      description:
        'Premium-lasi-iglut Levitunturilla, selvästi kylän valokuvun yläpuolella. Moottoroidut sängyt säätyvät kohti revontulikaarta, jokaisessa yksikössä on oma keittiötila, tekniikka on parasta viidestä suomalaisesta resortista.',
    },
    {
      name: 'Aurora Village',
      location: 'Ivalo',
      highlight: 'Erämaaympäristö Ivalon lähellä · väljästi sijoitellut mökit',
      description:
        'Lasikattoiset mökit koskemattomassa metsässä Ivalon liepeillä. Mökit on sijoiteltu väljästi yksityisyyden vuoksi ja ympäristö on niin pimeä, että revontulet näkyvät ohuen pilven läpi. Eristyneimmältä tuntuva lasi-igluresorttisi tällä sivustolla.',
    },
    {
      name: 'Aurora Pyramids',
      location: 'Inarinjärvi',
      highlight: 'Pyramidimökit · järviheijastukset',
      description:
        'Pyramidin muotoisia lasipintaisia mökkejä Inarinjärven rannalla. Jäätynyt järvi heijastaa revontulikaaren, kun tuuli laskee alle 3 m/s, katseluasetelma, jota mikään muu suomalainen kohde ei tarjoa.',
    },
  ],
  wildernessData: [
    {
      name: 'Iso-Syöte Eagle View -sviitit',
      location: 'Iso-Syöte (Pudasjärvi)',
      highlight: 'Tunturilatvalla · saavutettavissa Oulusta',
      description:
        'Mäntyrakenteiset sviitit 432 metrissä Iso-Syötteen tunturilla, eteläisin oikea tunturi Lapissa. Tunturilatvan revontulikatselu ilman pitkää lentoa Saariselälle, ja 90 minuuttia Oulun lentokentästä.',
    },
    {
      name: 'Wilderness Hotel Muotka',
      location: 'Saariselän seutu',
      highlight: 'Revontulien herätyspalvelu · hotellin mukavuudet',
      description:
        'Revontulimökit täysseinäisellä lasilla ympäröiviä tuntureita kohti. Paikan päällä toimivat revontuli­metsästäjät herättävät vieraat, kun aktiivisuus nousee, hyödyllistä, koska useimmat revontuli-ikkunat aukeavat hyvin keskiyön jälkeen. Hotellin mukavuudet erämaaolosuhteissa.',
    },
  ],
  destinationsData: [
    {
      slug: 'rovaniemi',
      pitch:
        'Suomen Lapin pääkaupunki, ainoa Lapin kaupunki, jossa on oikea talviravintolaskene, toimiva lentokenttähub ja ympärivuotinen design-kulttuuri.',
      longStayAngle:
        'Oikea tukikohta, jos pitkä jaksosi sisältää työtä-Lapista-arkiviikkoja ja viikonlopputrippejä pohjoiseen, nopea wifi, Tukholman suorat lennot, ravintolat auki välikaudella.',
    },
    {
      slug: 'levi',
      pitch:
        'Suomen suurin hiihtokeskus, syvin valikoima ski-in/out-asuntoja ja oikea kylän raitti.',
      longStayAngle:
        'Pitkän jakson logiikka: ski-in/out-asunnot vuokrataan viikoittain joulu–huhtikuussa. Hissijärjestelmä toimii päivittäin, kyläravintolat auki joka ilta, voit tehdä oikean hiihtokauden.',
    },
    {
      slug: 'saariselka',
      pitch:
        'Pohjoisempana kuin Rovaniemi, kovempi lumi, pimeämpi taivas. Lapin kylä, joka ottaa talven vakavimmin.',
      longStayAngle:
        'Pitkän jakson logiikka: vuokraa harjamökki ja kirjoita kirja. Vähän häiriötä. Erinomainen maastohiihtoverkko, huskytarhat lähellä, ei kaupunkiärsykkeitä.',
    },
    {
      slug: 'inari',
      pitch:
        'Saamelaisten kulttuuripääkaupunki, Inarinjärvi (1 084 km²), Suomen pohjoisin pitkän jakson tukikohta.',
      longStayAngle:
        'Pitkän jakson logiikka: itse järvi on aktiviteetti. Pilkkimistä joka aamu, maastohiihto jäätyneen järven yli, Saamelaismuseo ja Siida-keskus kynnyksellä.',
    },
    {
      slug: 'yllas',
      pitch:
        'Hiljaisempi kuin Levi, pidempi hiihtokausi, suurin maastohiihtoverkko Lapissa (330 km).',
      longStayAngle:
        'Pitkän jakson logiikka: maastohiihtoverkko on vetonaula. Mökkivuokraukset täällä menevät viikoittain marraskuun lopusta toukokuun alkuun. Paras pitkä jakso hiihtäjille, jotka eivät tarvitse hissiavusteista laskettelua joka päivä.',
    },
  ],
  allCategoriesSummary: [
    { slug: 'long-stays', description: 'Viikko- ja kuukausivuokraukset, huvilat, design-mökit, hiihtoasunnot.' },
    { slug: 'hotels', description: 'Boutique-, design- ja klassiset Lapin hotellit lyhyisiin jaksoihin.' },
    { slug: 'glass-igloos', description: 'Lapin ikoninen muoto, neljä lomakohdetta, jotka ansaitsevat nimen.' },
    { slug: 'wilderness', description: 'Viimeisen tien jälkeen, kolme retreatia vakaville matkaajille.' },
  ],
};
