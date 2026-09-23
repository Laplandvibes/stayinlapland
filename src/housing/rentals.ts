import type { HousingCopyMap } from './types';
import { pickSources } from './sources';

const SOURCES = [
  'tkVuokrat', 'kela', 'ahvl', 'rakli', 'yle2025das', 'lapinKansaDas', 'yle2023', 'rovaniemi', 'das',
  'kittila', 'kemi', 'keminmaa', 'tornio', 'kemijarvi', 'kemijarviHaku', 'kemijarviVuostimo', 'kemijarviTalousarvio',
  'sodankyla', 'asentopuulaaki', 'asentopuulaakiVapaat', 'inari',
] as const;

export const RENTALS: HousingCopyMap = {
  fi: {
    metaTitle: 'Vuokra-asunnot Lapissa: Rovaniemi, Levi, Kemi–Tornio, Inari',
    metaDescription:
      'Vuokra-asunto Rovaniemeltä, Kemi–Torniosta, Kemijärveltä, Sodankylästä, Leviltä tai Inarista: kuntien vuokrayhtiöt, portaalit, Tilastokeskuksen neliövuokrat ja Kelan tuki.',
    breadcrumb: 'Vuokra-asunnot',
    hero: {
      eyebrow: 'Vuokra-asunnot Lapissa',
      title: 'Vuokra-asunnot Lapissa.',
      subtitle:
        'Mistä vuokra-asunnon löytää, mitä se maksaa ja paljonko Kela korvaa. Kunta kerrallaan.',
    },
    authorNote:
      'Neliövuokrat: Tilastokeskuksen vuokratilasto, vapaarahoitteiset vuokra-asunnot, huhti–kesäkuu 2026. Kuntien vuokrayhtiöt tarkistettu kuntien omilta sivuilta 17.9.2026, Kemijärvi ja Sodankylä 23.9.2026.',
    // 🔴 Johdanto kertoo, MISTÄ aloittaa (Vesa 23.9.2026: sivu "poukkoilee"). Aiemmat kolme kappaletta
    // olivat kolme eri aihetta (opiskelijat, Levin kausihinnat, kuntien yhtiöt) ennen kuin sivu kertoi
    // mistä asunto löytyy. Esimerkit asuvat nyt osioissa, joihin ne kuuluvat.
    intro: [
      'Lapissa vuokra-asunto löytyy kolmesta paikasta: kunnan omalta vuokrayhtiöltä, valtakunnallisista portaaleista ja paikallisista ryhmistä. Aloita kunnasta. Kuntien yhtiöillä on satoja asuntoja, esimerkiksi Kemissä reilut 600, Sodankylässä noin 720, Kemijärvellä 560 ja Inarissa yli 500, ja hakemuksen voi jättää, vaikka vapaata asuntoa ei juuri nyt olisi.',
      'Hinta riippuu siitä, minne muutat. Rovaniemellä 30 neliön yksiö maksaa keskimäärin noin 560 euroa kuukaudessa, muualla Lapissa vähemmän. Tunturikylissä vuokra vaihtelee kauden mukaan, joten talveksi kannattaa kysyä ensin työnantajan asuntoa.',
    ],
    sections: [
      {
        id: 'paikkakunnat',
        kicker: 'Mistä asunto löytyy',
        h2: 'Paikkakunta kerrallaan.',
        lead: 'Jokaisesta paikkakunnasta on oma sivu: kunnan vuokrayhtiö ja sen hakemus, vuokrataso ja Kelan katto. Ylläksen työntekijäasunnoista kerrotaan kausityöntekijän sivulla.',
        band: true,
        cards: [
          {
            title: 'Rovaniemi',
            image: { src: '/images/housing-rovaniemi-card-talvikatu.webp', alt: 'Kerrostaloja ja kävelijöitä lumisella kadulla Rovaniemellä tammikuussa' },
            body:
              'Kaupungin oma sivu ohjaa KAS asunnoille, M2-Kodeille, Tarveasunnoille, Avaralle ja Lumolle sekä hakupalveluihin Oikotie, Vuokraovi ja Qasa. Opiskelijalle Domus Arctica -säätiö DAS (noin 1 700 asuntoa, joista 700 yksiötä) ja 18–29-vuotiaille NAL Rovaniemi. DAS-hakemus on voimassa kolme kuukautta, ja uudet opiskelijat ovat etusijalla elo–syyskuussa.',
            href: '/rentals/rovaniemi',
            linkLabel: 'Vuokra-asunnot Rovaniemi',
          },
          {
            title: 'Kemi, Keminmaa ja Tornio',
            image: { src: '/images/housing-kemi-card-kaupungintalo.webp', alt: 'Kemin kaupungintalo lumisena tammikuun aamuna' },
            body:
              'Kemin kaupungin vuokra-asunnoista vastaa Kiinteistö Oy Itätuuli, jolla on reilut 600 asuntoa keskustassa ja viiden kilometrin säteellä. Keminmaan Vuokra-asunnot Oy:llä on reilut 300 asuntoa, ja kumpaankin haetaan omalla sähköisellä hakemuksellaan. Torniossa kaupungin asuntoja hallinnoi Tornion Krunni Oy (Tornion Vuokra-asunnot Oy).',
            href: '/rentals/kemi-tornio',
            linkLabel: 'Vuokra-asunnot Kemi, Tornio ja Keminmaa',
          },
          {
            title: 'Kemijärvi',
            image: { src: '/images/housing-kemijarvi-card-kerrostalo.webp', alt: 'Kerrostalo ja vanha mänty Kemijärvellä heinäkuun iltana' },
            body:
              'Kaupungin kahdella kiinteistöyhtiöllä on 560 vuokra-asuntoa, ja talousarviossa tavoitteena on, että niistä 80–85 prosenttia on vuokrattuna: tyhjiä asuntoja siis on. Hakemus on voimassa neljä kuukautta. Vuostimon rivitaloista on 14 km Pyhätunturille.',
            href: '/rentals/kemijarvi',
            linkLabel: 'Vuokra-asunnot Kemijärvi',
          },
          {
            title: 'Sodankylä',
            image: { src: '/images/housing-sodankyla-jaamerentie.webp', alt: 'Jäämerentie, Sodankylän kirkonkylän pääkatu, syyskuussa' },
            body:
              'Kunnan noin 720 asuntoa vuokraa Asentopuulaaki Oy, ja 23.9.2026 vapaana tai vapautumassa oli 21. Vanhoissa taloissa vuokra on noin 10–12,50 €/m², vuonna 2025 valmistuneessa Käpyriihessä 18 €/m².',
            href: '/rentals/sodankyla',
            linkLabel: 'Vuokra-asunnot Sodankylä',
          },
          {
            title: 'Kittilä ja Levi',
            image: { src: '/images/housing-kittila-levi-card-kyla.webp', alt: 'Levin kylä Levitunturin laelta marraskuussa, taustalla järvi ja tunturit' },
            body:
              'Kittilän Vuokratalot Oy välittää kunnan omistamia vuokra-asuntoja; toimisto on kunnantalon ala-aulassa (Valtatie 15). Hakemus on voimassa kolme kuukautta, ja sen voi jättää, vaikka vapaita asuntoja ei juuri nyt olisi. Levin vapaa-ajan asuntoja saa kuukausivuokralle lähinnä touko–marraskuussa; talvella sama asunto myydään viikoittain.',
            href: '/rentals/kittila-levi',
            linkLabel: 'Vuokra-asunnot Kittilä ja Levi',
          },
          {
            title: 'Inari, Ivalo ja Saariselkä',
            image: { src: '/images/housing-ivalo-joki.webp', alt: 'Ivalo Ivalojoen yli kesäiltana' },
            body:
              'Inarin Vuokra-asunnot Oy:llä on yli 500 asuntoa Ivalossa, Inarissa, Saariselällä, Nellimissä ja Sevettijärvellä. Kunnan sivu listaa myös yksityiset vuokranantajat (Bilto, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg, Uni Kodit) ja Sodankylä–Inari–Utsjoki-alueen vuokra-asuntoryhmän Facebookissa.',
            href: '/rentals/ivalo-inari',
            linkLabel: 'Vuokra-asunnot Ivalo ja Inari',
          },
        ],
      },
      {
        id: 'portaalit',
        kicker: 'Portaalit ja ryhmät',
        h2: 'Samat kanavat kuin muualla Suomessa.',
        bullets: [
          '<a href="https://asunnot.oikotie.fi/vuokra-asunnot/rovaniemi" target="_blank" rel="noopener">Oikotie</a>: valtakunnallinen ja Lapissa laajin. Suodata kunnalla, ei pelkällä kylällä.',
          '<a href="https://www.vuokraovi.com/vuokra-asunnot/rovaniemi" target="_blank" rel="noopener">Vuokraovi</a>: vain vuokra-asunnot, uusia ilmoituksia usein ensin täällä.',
          '<a href="https://qasa.fi" target="_blank" rel="noopener">Qasa</a>: Rovaniemen kaupungin listaama hakupalvelu, jossa sopimus ja vuokranmaksu kulkevat alustan kautta.',
          '<a href="https://www.tori.fi" target="_blank" rel="noopener">Tori</a>: suoraan vuokranantajalta, ei välityspalkkiota. Lue alta, mitä tarkistaa ennen maksua.',
          'Facebook-ryhmät: Levin asuntohaku, Kemi–Keminmaa ja Sodankylä–Inari–Utsjoki. Nopein kanava tunturikylissä, mutta ilman kenenkään takuuta.',
        ],
      },
      {
        id: 'hinnat',
        kicker: 'Mitä vuokra maksaa',
        h2: 'Neliövuokrat, ei mutu.',
        lead:
          'Tilastokeskus julkaisee vuokrat neljännesvuosittain. Alla vapaarahoitteisten vuokra-asuntojen keskineliövuokra huhti–kesäkuussa 2026, euroa neliöltä kuukaudessa.',
        table: {
          caption: 'Keskineliövuokra €/m²/kk, vapaarahoitteiset vuokra-asunnot, 2026Q2',
          head: ['', 'Rovaniemi', 'Lappi (maakunta)', 'Koko maa'],
          rows: [
            ['Yksiöt', '18,66', '17,30', '20,46'],
            ['Kaksiot', '14,35', '12,85', '15,04'],
            ['Kolmiot ja isommat', '12,09', '10,97', '13,92'],
            ['Kaikki asunnot', '14,55', '13,10', '15,94'],
            ['Uudet vuokrasuhteet, kaikki', '15,87', '14,10', '17,26'],
          ],
          foot: 'Tilastokeskus, vuokrat 2026Q2, taulukko 15fa. Uusi vuokrasuhde = neljänneksellä alkaneet sopimukset; ne kertovat, mitä juuri nyt pyydetään.',
        },
        paras: [
          '<strong>Näin lasket:</strong> kerro neliövuokra asunnon pinta-alalla. Rovaniemellä 30 m²:n yksiö maksaa keskimäärin noin 560 €/kk (18,66 × 30) ja uudessa vuokrasuhteessa noin 635 €/kk (21,17 × 30, uusien vuokrasuhteiden yksiöhinta Rovaniemellä). 50 m²:n kaksio: noin 720 €/kk (14,35 × 50). Vesi ja sähkö tulevat yleensä päälle.',
          'Lapin neliövuokrat ovat koko maan keskiarvoa matalammat kaikissa asuntokokoissa, mutta ero on pienin yksiöissä, joissa kysyntä on kovin.',
        ],
        note: {
          label: 'Mitä tilasto ei näe',
          body:
            'Tunturikeskusten kausivuokrat ja kalustetut lyhytvuokrat eivät ole tässä luvussa. Levillä 80 neliön alppimökki maksoi Ylen (25.5.2023) mukaan 750 euroa kuukaudessa touko–marraskuussa, 2 000 euroa viikossa sesongissa ja 1 650 euroa kuukaudessa ympäri vuoden: sama asunto, kolme hintaa.',
        },
      },
      {
        id: 'asumistuki',
        kicker: 'Kelan asumistuki',
        h2: 'Katto on kunnan mukaan.',
        lead:
          'Yleinen asumistuki on enintään 70 % hyväksyttävistä asumismenoista, ja hyväksyttävillä menoilla on yläraja, joka riippuu kunnasta ja ruokakunnan koosta. Kela jakaa kunnat kolmeen ryhmään: Rovaniemi on 24 suuremman kunnan ryhmässä, kaikki muut Lapin kunnat ryhmässä ”muut kunnat”, jossa katto on matalampi.',
        table: {
          caption: 'Enimmäisasumismenot 2026, €/kk',
          head: ['Ruokakunnan koko', 'Rovaniemi', 'Muut Lapin kunnat'],
          rows: [
            ['1 henkilö', '447', '394'],
            ['2 henkilöä', '652', '574'],
            ['3 henkilöä', '828', '734'],
            ['4 henkilöä', '981', '875'],
            ['Jokainen lisähenkilö', '+134', '+129'],
          ],
          foot: 'Kela, yleinen asumistuki 2026. Alle 15 euron tukea ei makseta.',
        },
        paras: [
          'Katto tarkoittaa, että Rovaniemellä yhden hengen ruokakunnan vuokrasta huomioidaan enintään 447 euroa, vaikka vuokra olisi 600. Loput maksat itse. Tulot pienentävät tukea perusomavastuun kautta; Kelan laskuri kertoo oman tilanteesi.',
        ],
      },
      {
        id: 'sopimus',
        kicker: 'Vuokrasopimus',
        h2: 'Viisi asiaa ennen allekirjoitusta.',
        bullets: [
          '<strong>Vakuus on enintään kolmen kuukauden vuokra</strong> (laki asuinhuoneiston vuokrauksesta 8 §). Yksi tai kaksi kuukautta on tavallinen.',
          '<strong>1.10.2026 alkaen vakuus on palautettava</strong> tai sen pidättämisestä on ilmoitettava kirjallisesti viimeistään 14 päivän kuluessa vuokrasuhteen päättymisestä tai asunnon luovuttamisesta (lakimuutos 1.10.2026, Rakli).',
          '<strong>Vuokralaisen irtisanomisaika on yksi kuukausi.</strong> Vuokranantajan irtisanomisaika on lakimuutoksen jälkeen kolme kuukautta ja neljä kuukautta, jos vuokrasuhde on kestänyt yhtäjaksoisesti vähintään kaksi vuotta (Rakli).',
          '<strong>Määräaikainen sopimus sitoo molempia sen loppuun.</strong> Kausityössä työnantajan asunnon sopimus on usein sidottu työsuhteeseen: lue, mitä tapahtuu, jos työ loppuu ennen kautta.',
          '<strong>Luottotiedot tarkistetaan lähes aina.</strong> Maksuhäiriömerkintä ei estä vuokraamista, mutta kunnan vuokrayhtiö ja suora vuokranantaja ovat silloin todennäköisempiä kuin isot ketjut.',
        ],
      },
      {
        id: 'ennen-maksua',
        kicker: 'Ennen kuin maksat mitään',
        h2: 'Kolme sääntöä, jotka säästävät vakuuden.',
        bullets: [
          'Älä maksa vakuutta ennen näyttöä tai videokierrosta, jossa näet asunnon ja avaimet samassa kuvassa.',
          'Sopimus kirjallisesti, vuokranantajan nimi ja y-tunnus tai henkilötunnus näkyvissä. Kunnan vuokrayhtiö on turvallisin lähtökohta, jos et tunne markkinaa.',
          'Kalustettu lyhytvuokraus on eri asia kuin vuokrasopimus: majoituskäyttöön tarkoitettuun vapaa-ajan asuntoon et voi rekisteröidä osoitetta, ja ilman osoitetta kunnan palvelut ja Kelan tuki eivät seuraa perässä (Yle 25.5.2023).',
        ],
      },
    ],
    faqs: [
      {
        q: 'Mitä yksiö maksaa Rovaniemellä?',
        a: 'Tilastokeskuksen mukaan vapaarahoitteisen yksiön keskineliövuokra Rovaniemellä oli 18,66 €/m² huhti–kesäkuussa 2026 ja uusissa vuokrasuhteissa 21,17 €/m². 30 m²:n yksiö on siis noin 560–635 €/kk ilman sähköä.',
      },
      {
        q: 'Saako Lapista vuokra-asunnon ilman luottotietoja?',
        a: 'Kyllä, mutta vaihtoehtoja on vähemmän. Kuntien vuokrayhtiöt ja suorat vuokranantajat harkitsevat tapauskohtaisesti, ja isompi vakuus (laki sallii enintään kolmen kuukauden vuokran) tai takaaja auttaa. Isot vuokrausketjut tarkistavat luottotiedot aina.',
      },
      {
        q: 'Milloin Rovaniemeltä kannattaa hakea asuntoa?',
        a: 'Kaikkina muina kuukausina kuin elo–syyskuussa. Silloin DAS ei pysty tarjoamaan asuntoa kaikille hakijoille ja yksityisiä yksiöitä hakevat samaan aikaan opiskelijat ja kausityöntekijät (Yle 27.7.2025). Talvisesongiksi lyhytvuokratut yksiöt vapautuvat keväällä.',
      },
      {
        q: 'Miksi Levin vuokra on talvella moninkertainen?',
        a: 'Koska sama asunto myydään sesongissa viikoittain matkailijoille. Ylen (25.5.2023) esimerkissä 80 m²:n alppimökki maksoi 750 €/kk kesällä ja 2 000 €/viikko talvella. Kuukausivuokralle pääsee touko–marraskuussa; talveksi kannattaa kysyä työnantajan asuntoa tai kunnan vuokra-asuntoa Kittilästä.',
      },
    ],
    cta: {
      partner: 'hotels',
      kicker: 'Ensimmäiset viikot',
      h2: 'Näyttö tehdään paikan päällä.',
      lead:
        'Varaa ensimmäisiksi viikoiksi hotelli tai huoneistohotelli ja katso asunnot itse ennen kuin allekirjoitat. Kumppanihaku näyttää vapaat huoneet päivän hinnoin.',
      chips: [
        { label: 'Rovaniemi', destination: 'Rovaniemi', sid: 'rentals_first_weeks_rovaniemi' },
        { label: 'Levi', destination: 'Levi', sid: 'rentals_first_weeks_levi' },
        { label: 'Tornio', destination: 'Tornio', sid: 'rentals_first_weeks_tornio' },
        { label: 'Ivalo', destination: 'Ivalo', sid: 'rentals_first_weeks_ivalo' },
      ],
    },
    sources: pickSources('fi', SOURCES),
  },
  en: {
    metaTitle: 'Rent an Apartment in Lapland: Rovaniemi, Levi, Kemi–Tornio, Inari',
    metaDescription:
      'Long-term rentals in Finnish Lapland: where the flats are in Rovaniemi, Kemi–Tornio, Kemijärvi, Sodankylä, Levi and Inari, what they cost per m² (Statistics Finland), deposits and Kela housing allowance.',
    breadcrumb: 'Rentals',
    hero: {
      eyebrow: 'Renting in Lapland',
      title: 'Renting a home in Lapland.',
      subtitle:
        'Where to find a rental flat, what it costs and how much Kela covers. Town by town.',
    },
    authorNote:
      'Rents per m²: Statistics Finland rent statistics, free-market rental flats, April–June 2026. Municipal housing companies checked on the municipalities’ own sites on 17 September 2026, Kemijärvi and Sodankylä on 23 September 2026.',
    intro: [
      'In Lapland a rental flat comes from one of three places: the municipality’s own housing company, the national portals or local groups. Start with the municipality. Their companies own hundreds of flats, for example over 600 in Kemi, about 720 in Sodankylä, 560 in Kemijärvi and over 500 in Inari, and you can apply even when nothing is free right now.',
      'The price depends on where you move. In Rovaniemi a 30 m² studio averages about €560 a month, elsewhere in Lapland less. In the fell villages rent follows the season, so for the winter ask your employer about staff housing first.',
    ],
    sections: [
      {
        id: 'towns',
        kicker: 'Where the flats are',
        h2: 'Town by town.',
        lead: 'Each town has its own page: the municipal housing company and how to apply, the rent level and Kela’s ceiling. Staff housing at Ylläs is covered on the seasonal workers’ page.',
        band: true,
        cards: [
          {
            title: 'Rovaniemi',
            image: { src: '/images/housing-rovaniemi-card-talvikatu.webp', alt: 'Apartment blocks and people walking on a snowy street in Rovaniemi in January' },
            body:
              'The city’s own page points to the landlords KAS asunnot, M2-Kodit, Tarveasunnot, Avara and Lumo, and to the search services Oikotie, Vuokraovi and Qasa. Students apply to the Domus Arctica Foundation DAS (about 1,700 flats, 700 of them studios); 18–29-year-olds to NAL Rovaniemi. A DAS application is valid for three months, and new students have priority in August and September.',
            href: '/rentals/rovaniemi',
            linkLabel: 'Rentals in Rovaniemi',
          },
          {
            title: 'Kemi, Keminmaa and Tornio',
            image: { src: '/images/housing-kemi-card-kaupungintalo.webp', alt: 'Kemi city hall on a snowy January morning' },
            body:
              'Kemi’s municipal flats are run by Kiinteistö Oy Itätuuli, which has over 600 flats in the centre and within five kilometres of it. Keminmaan Vuokra-asunnot Oy has just over 300 flats, and each company has its own online application. In Tornio the city’s flats are managed by Tornion Krunni Oy (Tornion Vuokra-asunnot Oy).',
            href: '/rentals/kemi-tornio',
            linkLabel: 'Rentals in Kemi, Tornio and Keminmaa',
          },
          {
            title: 'Kemijärvi',
            image: { src: '/images/housing-kemijarvi-card-kerrostalo.webp', alt: 'An apartment block and an old pine in Kemijärvi on a July evening' },
            body:
              'The city’s two property companies own 560 rental flats, and the budget aims for 80–85 percent of them to be let, so empty flats do exist. An application is valid for four months. The Vuostimo row houses are 14 km from Pyhätunturi.',
            href: '/rentals/kemijarvi',
            linkLabel: 'Rentals in Kemijärvi',
          },
          {
            title: 'Sodankylä',
            image: { src: '/images/housing-sodankyla-jaamerentie.webp', alt: 'Jäämerentie, the main street of Sodankylä village, in September' },
            body:
              'Asentopuulaaki Oy lets the municipality’s roughly 720 flats, and on 23 September 2026 there were 21 free or coming free. Older buildings rent for about €10–12.50 per m², and Käpyriihi, completed in 2025, for €18.',
            href: '/rentals/sodankyla',
            linkLabel: 'Rentals in Sodankylä',
          },
          {
            title: 'Kittilä and Levi',
            image: { src: '/images/housing-kittila-levi-card-kyla.webp', alt: 'Levi village from the top of Levi fell in November, a lake and fells beyond' },
            body:
              'Kittilän Vuokratalot Oy lets the municipality’s own rental flats; the office is on the ground floor of the municipal hall (Valtatie 15). An application is valid for three months and can be filed even when nothing is free right now. Levi’s holiday apartments go on monthly rent mainly from May to November; in winter the same flat is sold by the week.',
            href: '/rentals/kittila-levi',
            linkLabel: 'Rentals in Kittilä and Levi',
          },
          {
            title: 'Inari, Ivalo and Saariselkä',
            image: { src: '/images/housing-ivalo-joki.webp', alt: 'Ivalo seen across the Ivalo river on a summer evening' },
            body:
              'Inarin Vuokra-asunnot Oy has over 500 flats in Ivalo, Inari, Saariselkä, Nellim and Sevettijärvi. The municipality’s page also lists the private landlords (Bilto, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg, Uni Kodit) and the Sodankylä–Inari–Utsjoki rental group on Facebook.',
            href: '/rentals/ivalo-inari',
            linkLabel: 'Rentals in Ivalo and Inari',
          },
        ],
      },
      {
        id: 'portals',
        kicker: 'Portals and groups',
        h2: 'The same channels as the rest of Finland.',
        bullets: [
          '<a href="https://asunnot.oikotie.fi/vuokra-asunnot/rovaniemi" target="_blank" rel="noopener">Oikotie</a>: national, and the widest in Lapland. Filter by municipality, not just by village.',
          '<a href="https://www.vuokraovi.com/vuokra-asunnot/rovaniemi" target="_blank" rel="noopener">Vuokraovi</a>: rentals only; new listings often appear here first.',
          '<a href="https://qasa.fi" target="_blank" rel="noopener">Qasa</a>: listed by the City of Rovaniemi; contract and rent payments run through the platform.',
          '<a href="https://www.tori.fi" target="_blank" rel="noopener">Tori</a>: straight from the landlord, no agency fee. Read below what to check before you pay.',
          'Facebook groups: Levi housing search, Kemi–Keminmaa and Sodankylä–Inari–Utsjoki. The fastest channel in the fell villages, but nobody vouches for the listings.',
        ],
      },
      {
        id: 'prices',
        kicker: 'What rent costs',
        h2: 'Per square metre, not by feel.',
        lead:
          'Statistics Finland publishes rents every quarter. Below, the average rent of free-market rental flats in April–June 2026, euros per square metre per month.',
        table: {
          caption: 'Average rent €/m²/month, free-market rental flats, 2026Q2',
          head: ['', 'Rovaniemi', 'Lapland (region)', 'Whole country'],
          rows: [
            ['Studios', '18.66', '17.30', '20.46'],
            ['Two-room flats', '14.35', '12.85', '15.04'],
            ['Three rooms and larger', '12.09', '10.97', '13.92'],
            ['All flats', '14.55', '13.10', '15.94'],
            ['New tenancies, all flats', '15.87', '14.10', '17.26'],
          ],
          foot: 'Statistics Finland, rents 2026Q2, table 15fa. New tenancy = contracts that started during the quarter; they show what is being asked right now.',
        },
        paras: [
          '<strong>How to calculate:</strong> multiply the rent per m² by the floor area. In Rovaniemi a 30 m² studio averages about €560 a month (18.66 × 30) and about €635 in a new tenancy (21.17 × 30, the new-tenancy studio figure for Rovaniemi). A 50 m² two-room flat: about €720 a month (14.35 × 50). Water and electricity usually come on top.',
          'Lapland’s rents per square metre are below the national average in every flat size, but the gap is smallest in studios, where demand is fiercest.',
        ],
        note: {
          label: 'What the statistics do not see',
          body:
            'Seasonal lets in the ski resorts and furnished short-term rentals are not in these figures. At Levi an 80 m² alpine cabin cost €750 a month from May to November, €2,000 a week in high season and €1,650 a month year-round (Yle, 25 May 2023): the same flat at three prices.',
        },
      },
      {
        id: 'housing-allowance',
        kicker: 'Kela housing allowance',
        h2: 'The ceiling depends on the municipality.',
        lead:
          'General housing allowance covers at most 70 % of accepted housing costs, and accepted costs have a ceiling that depends on the municipality and household size. Kela sorts municipalities into three groups: Rovaniemi is in the group of 24 larger municipalities, and every other Lapland municipality falls under “other municipalities”, which has a lower ceiling.',
        table: {
          caption: 'Maximum housing costs 2026, €/month',
          head: ['Household size', 'Rovaniemi', 'Other Lapland municipalities'],
          rows: [
            ['1 person', '447', '394'],
            ['2 persons', '652', '574'],
            ['3 persons', '828', '734'],
            ['4 persons', '981', '875'],
            ['Each additional person', '+134', '+129'],
          ],
          foot: 'Kela, general housing allowance 2026. An allowance below €15 is not paid.',
        },
        paras: [
          'The ceiling means that in Rovaniemi a single-person household’s rent counts up to €447, even if the rent is €600. You pay the rest yourself. Income reduces the allowance through the basic deductible; Kela’s calculator shows your own case.',
        ],
      },
      {
        id: 'contract',
        kicker: 'The tenancy agreement',
        h2: 'Five things before you sign.',
        bullets: [
          '<strong>The deposit is at most three months’ rent</strong> (Act on Residential Leases, section 8). One or two months is usual.',
          '<strong>From 1 October 2026 the deposit must be returned</strong>, or its retention explained in writing, within 14 days of the tenancy ending or the flat being handed back (reform in force 1 Oct 2026, Rakli).',
          '<strong>The tenant’s notice period is one month.</strong> After the reform the landlord’s notice period is three months, and four months if the tenancy has lasted continuously for at least two years (Rakli).',
          '<strong>A fixed-term contract binds both sides to the end.</strong> In seasonal work an employer’s flat is often tied to the job: read what happens if the job ends before the season does.',
          '<strong>Credit records are almost always checked.</strong> A default entry does not rule out renting, but a municipal housing company or a private landlord is then a likelier match than the large chains.',
        ],
      },
      {
        id: 'before-paying',
        kicker: 'Before you pay anything',
        h2: 'Three rules that save your deposit.',
        bullets: [
          'Never pay a deposit before a viewing or a video tour in which you see the flat and the keys in the same frame.',
          'Contract in writing, with the landlord’s name and business ID or personal identity code on it. A municipal housing company is the safest start if you do not know the market.',
          'A furnished short-term let is not a tenancy: you cannot register your address at a holiday apartment zoned for accommodation, and without an address municipal services and Kela benefits do not follow you (Yle, 25 May 2023).',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much is a studio in Rovaniemi?',
        a: 'According to Statistics Finland the average rent of a free-market studio in Rovaniemi was €18.66 per m² in April–June 2026 and €21.17 per m² in new tenancies. A 30 m² studio is therefore about €560–635 a month before electricity.',
      },
      {
        q: 'Can I rent in Lapland without a Finnish credit record?',
        a: 'Yes, but with fewer options. Municipal housing companies and private landlords decide case by case, and a larger deposit (the law allows up to three months’ rent) or a guarantor helps. The large rental chains always run a credit check.',
      },
      {
        q: 'When is the best time to look for a flat in Rovaniemi?',
        a: 'Any month except August and September. Then DAS cannot house every applicant, and students and seasonal workers chase the same private studios (Yle, 27 Jul 2025). Studios let short-term for the winter season come back onto the market in spring.',
      },
      {
        q: 'Why is a Levi rent several times higher in winter?',
        a: 'Because the same flat is sold by the week to tourists in high season. In Yle’s example (25 May 2023) an 80 m² alpine cabin cost €750 a month in summer and €2,000 a week in winter. Monthly rent is possible from May to November; for winter, ask your employer about staff housing or the Kittilä municipal company.',
      },
    ],
    cta: {
      partner: 'hotels',
      kicker: 'The first weeks',
      h2: 'View the flat in person.',
      lead:
        'Book a hotel or aparthotel for the first weeks and see the flats yourself before you sign. Our partner search shows free rooms at today’s prices.',
      chips: [
        { label: 'Rovaniemi', destination: 'Rovaniemi', sid: 'rentals_first_weeks_rovaniemi' },
        { label: 'Levi', destination: 'Levi', sid: 'rentals_first_weeks_levi' },
        { label: 'Tornio', destination: 'Tornio', sid: 'rentals_first_weeks_tornio' },
        { label: 'Ivalo', destination: 'Ivalo', sid: 'rentals_first_weeks_ivalo' },
      ],
    },
    sources: pickSources('en', SOURCES),
  },
};
