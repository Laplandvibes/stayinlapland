import type { HousingCopyMap } from './types';
import { pickSources } from './sources';

const SOURCES = [
  'tkVuokrat', 'kela', 'ahvl', 'rakli', 'yle2025das', 'lapinKansaDas', 'yle2023', 'rovaniemi', 'das',
  'kittila', 'yle2026yllas', 'kesko2026', 'kemi', 'keminmaa', 'tornio', 'sodankyla', 'inari',
] as const;

export const RENTALS: HousingCopyMap = {
  fi: {
    metaTitle: 'Vuokra-asunnot Lapissa: Rovaniemi, Levi, Kemi–Tornio, Inari',
    metaDescription:
      'Vuokra-asunto Rovaniemeltä, Leviltä, Ylläkseltä, Kemi–Torniosta, Sodankylästä tai Inarista: kuntien vuokrayhtiöt, portaalit, Tilastokeskuksen neliövuokrat ja Kelan tuki.',
    breadcrumb: 'Vuokra-asunnot',
    hero: {
      eyebrow: 'Vuokra-asunnot · Rovaniemi · Levi · Ylläs · Kemi–Tornio · Sodankylä · Inari',
      title: 'Vuokra-asunnot Lapissa.',
      subtitle:
        'Mistä asunnot oikeasti löytyvät, mitä ne maksavat ja kenelle ne menevät. Neliövuokrat Tilastokeskukselta, hakukanavat kunnilta itseltään.',
    },
    authorNote:
      'Neliövuokrat: Tilastokeskuksen vuokratilasto, vapaarahoitteiset vuokra-asunnot, huhti–kesäkuu 2026. Kuntien vuokrayhtiöt tarkistettu kuntien omilta sivuilta 17.9.2026.',
    intro: [
      'Lapin vuokramarkkina on kaksi eri markkinaa. Rovaniemellä yksiöistä kilpaillaan opiskelijoiden ja matkailijoiden kanssa: opiskelija-asuntosäätiö DAS sai kesällä 2025 noin 550 kiireellistä hakemusta, lähes 90 prosenttia hakijoista halusi yksiön, ja kaupungin yksiöitä lyhytvuokrataan talvisesongiksi matkailijoille (Yle 27.7.2025).',
      'Tunturikylissä markkina elää kauden mukaan. Levillä 80 neliön alppimökki lähellä keskustaa maksoi Ylen (25.5.2023) mukaan 750 euroa kuukaudessa touko–marraskuussa ja 2 000 euroa viikossa sesongissa; ympärivuotinen vuokra oli 1 650 euroa kuukaudessa. Sama asunto, kolme hintaa.',
      'Rannikolla ja jokivarsissa on väljempää, ja kuntien omat vuokrayhtiöt ovat ensimmäinen osoite: Kemissä Kiinteistö Oy Itätuulella on reilut 600 asuntoa, Sodankylän Asentopuulaakilla noin 720 ja Inarin Vuokra-asunnoilla yli 500.',
    ],
    sections: [
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
            'Tunturikeskusten kausivuokrat ja kalustetut lyhytvuokrat eivät ole tässä luvussa. Siksi Levin talvihinta voi olla aivan muuta kuin Lapin keskiarvo, kuten Ylen esimerkki yllä näyttää.',
        },
      },
      {
        id: 'asumistuki',
        kicker: 'Kelan asumistuki',
        h2: 'Katto on kunnan mukaan.',
        lead:
          'Yleinen asumistuki on enintään 70 % hyväksyttävistä asumismenoista, ja hyväksyttävillä menoilla on yläraja, joka riippuu kunnasta ja ruokakunnan koosta. Rovaniemi kuuluu kuntaryhmään II, kaikki muut Lapin kunnat ryhmään III.',
        table: {
          caption: 'Enimmäisasumismenot 2026, €/kk',
          head: ['Ruokakunnan koko', 'Rovaniemi, ryhmä II', 'Muut Lapin kunnat, ryhmä III'],
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
        h2: 'Neljä asiaa, jotka laki sanoo.',
        bullets: [
          '<strong>Vakuus on enintään kolmen kuukauden vuokra</strong> (laki asuinhuoneiston vuokrauksesta 8 §). Yksi tai kaksi kuukautta on tavallinen.',
          '<strong>1.10.2026 alkaen vakuus on palautettava</strong> tai sen pidättämisestä on ilmoitettava kirjallisesti viimeistään 14 päivän kuluessa vuokrasuhteen päättymisestä tai asunnon luovuttamisesta (lakimuutos 1.10.2026, Rakli).',
          '<strong>Vuokralaisen irtisanomisaika on yksi kuukausi.</strong> Vuokranantajan irtisanomisaika on lakimuutoksen jälkeen kolme kuukautta ja neljä kuukautta, jos vuokrasuhde on kestänyt yhtäjaksoisesti vähintään kaksi vuotta (Rakli).',
          '<strong>Määräaikainen sopimus sitoo molempia sen loppuun.</strong> Kausityössä työnantajan asunnon sopimus on usein sidottu työsuhteeseen: lue, mitä tapahtuu, jos työ loppuu ennen kautta.',
          '<strong>Luottotiedot tarkistetaan lähes aina.</strong> Maksuhäiriömerkintä ei estä vuokraamista, mutta kunnan vuokrayhtiö ja suora vuokranantaja ovat silloin todennäköisempiä kuin isot ketjut.',
        ],
      },
      {
        id: 'paikkakunnat',
        kicker: 'Mistä asunto löytyy',
        h2: 'Paikkakunta kerrallaan.',
        lead: 'Ensin kunnan oma vuokrayhtiö, sitten portaalit, sitten ryhmät. Linkit vievät kuntien omille sivuille.',
        band: true,
        cards: [
          {
            title: 'Rovaniemi',
            image: { src: '/images/housing-rovaniemi-lappia-card.webp', alt: 'Lappia-talo Rovaniemen keskustassa' },
            body:
              'Kaupungin oma sivu ohjaa KAS asunnoille, M2-Kodeille, Tarveasunnoille, Avaralle ja Lumolle sekä hakupalveluihin Oikotie, Vuokraovi ja Qasa. Opiskelijalle Domus Arctica -säätiö DAS (noin 1 700 asuntoa, joista 700 yksiötä) ja 18–29-vuotiaille NAL Rovaniemi. DAS-hakemus on voimassa kolme kuukautta, ja uudet opiskelijat ovat etusijalla elo–syyskuussa.',
            href: 'https://www.rovaniemi.fi/Asuminen-ja-ymparisto/Asuminen',
            linkLabel: 'rovaniemi.fi: Asuminen',
            event: 'rovaniemi',
          },
          {
            title: 'Kittilä ja Levi',
            image: { src: '/images/housing-levi-uudet-talot.webp', alt: 'Uusia taloja rakenteilla Levillä, taustalla Levitunturi' },
            body:
              'Kittilän Vuokratalot Oy välittää kunnan omistamia vuokra-asuntoja; toimisto on kunnantalon ala-aulassa (Valtatie 15). Hakemus on voimassa kolme kuukautta, ja sen voi jättää, vaikka vapaita asuntoja ei juuri nyt olisi. Levin vapaa-ajan asuntoja saa kuukausivuokralle lähinnä touko–marraskuussa; talvella sama asunto myydään viikoittain.',
            href: 'https://kittila.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot',
            linkLabel: 'kittila.fi: Vuokra-asunnot',
            event: 'kittila',
          },
          {
            title: 'Kolari ja Ylläs',
            image: { src: '/images/housing-jouninkauppa.webp', alt: 'Jounin Kauppa Äkäslompolossa' },
            body:
              'Äkäslompolossa K-Market Jounin Kaupan kauppiaat rakennuttavat kolme rivitaloa vakituisille ja kausityöntekijöilleen; talot valmistuvat marras–joulukuussa 2026 (Kesko 17.6.2026). Kunta vauhditti hanketta nopealla kaavoituksella, ja kylän ensimmäinen modulitalo valmistui lokakuussa 2025 (Yle 16.6.2026). Vapaat asunnot: Oikotie ja Vuokraovi hakusanalla Kolari.',
            href: 'https://yle.fi/a/74-20231905',
            linkLabel: 'Yle 16.6.2026: Ylläksen asuntohankkeet',
            event: 'yllas',
          },
          {
            title: 'Kemi, Keminmaa ja Tornio',
            image: { src: '/images/housing-tornio-kerrostalo-card.webp', alt: 'Kerrostalo Tornion keskustassa' },
            body:
              'Kemin kaupungin vuokra-asunnoista vastaa Kiinteistö Oy Itätuuli, jolla on reilut 600 asuntoa keskustassa ja viiden kilometrin säteellä. Keminmaan Vuokra-asunnot Oy:llä on 162 kerrostalo- ja 146 rivitaloasuntoa, ja molempiin haetaan samalla sähköisellä hakemuksella. Torniossa kaupungin asuntoja hallinnoi Tornion Krunni Oy (Tornion Vuokra-asunnot Oy).',
            href: 'https://www.kemi.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
            linkLabel: 'kemi.fi: Vuokra-asunnot',
            event: 'kemi',
          },
          {
            title: 'Sodankylä',
            image: { src: '/images/housing-sodankyla-jaamerentie.webp', alt: 'Jäämerentie, Sodankylän kirkonkylän pääkatu, syyskuussa' },
            body:
              'Kunta omistaa noin 720 vuokra-asuntoa, joita hallinnoi kunnan tytäryhtiö Asentopuulaaki Oy. Vapaat asunnot ja hakemus yhtiön omilla sivuilla; yksityiset ilmoitukset Oikotiellä ja Vuokraovella.',
            href: 'https://www.sodankyla.fi/en/environment/municipal-rental-housing/',
            linkLabel: 'sodankyla.fi: Kunnan vuokra-asunnot',
            event: 'sodankyla',
          },
          {
            title: 'Inari, Ivalo ja Saariselkä',
            image: { src: '/images/housing-ivalo-joki.webp', alt: 'Ivalo Ivalojoen yli kesäiltana' },
            body:
              'Inarin Vuokra-asunnot Oy:llä on yli 500 asuntoa Ivalossa, Inarissa, Saariselällä, Nellimissä ja Sevettijärvellä. Kunnan sivu listaa myös yksityiset vuokranantajat (Bilto, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg, Uni Kodit) ja Sodankylä–Inari–Utsjoki-alueen vuokra-asuntoryhmän Facebookissa.',
            href: 'https://www.inari.fi/fi/palvelut/asuminen.html',
            linkLabel: 'inari.fi: Asuminen',
            event: 'inari',
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
      'Long-term rentals in Finnish Lapland: where the flats are in Rovaniemi, Levi, Ylläs, Kemi–Tornio, Sodankylä and Inari, what they cost per m² (Statistics Finland), deposits and Kela housing allowance.',
    breadcrumb: 'Rentals',
    hero: {
      eyebrow: 'Rentals · Rovaniemi · Levi · Ylläs · Kemi–Tornio · Sodankylä · Inari',
      title: 'Renting a home in Lapland.',
      subtitle:
        'Where the flats really are, what they cost and who gets them. Rents per square metre from Statistics Finland, the search channels from the municipalities themselves.',
    },
    authorNote:
      'Rents per m²: Statistics Finland rent statistics, free-market rental flats, April–June 2026. Municipal housing companies checked on the municipalities’ own sites on 17 September 2026.',
    intro: [
      'Lapland has two rental markets. In Rovaniemi you compete for studios with students and tourists: the student housing foundation DAS received about 550 urgent applications in summer 2025, nearly 90 percent of applicants wanted a studio, and the city’s studios are let short-term to tourists for the winter season (Yle, 27 Jul 2025).',
      'In the fell villages the market follows the season. At Levi an 80 m² alpine cabin near the centre cost €750 a month from May to November and €2,000 a week in high season; the year-round rent was €1,650 a month (Yle, 25 May 2023). Same flat, three prices.',
      'On the coast and along the rivers there is more room, and the municipal housing companies are the first address: Kiinteistö Oy Itätuuli in Kemi has over 600 flats, Asentopuulaaki in Sodankylä about 720 and Inarin Vuokra-asunnot over 500.',
    ],
    sections: [
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
            'Seasonal lets in the ski resorts and furnished short-term rentals are not in these figures. That is why a winter rent at Levi can be nothing like the Lapland average, as the Yle example above shows.',
        },
      },
      {
        id: 'housing-allowance',
        kicker: 'Kela housing allowance',
        h2: 'The ceiling depends on the municipality.',
        lead:
          'General housing allowance covers at most 70 % of accepted housing costs, and accepted costs have a ceiling that depends on the municipality and household size. Rovaniemi is in municipality group II; every other Lapland municipality is in group III.',
        table: {
          caption: 'Maximum housing costs 2026, €/month',
          head: ['Household size', 'Rovaniemi, group II', 'Other Lapland municipalities, group III'],
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
        h2: 'Four things the law says.',
        bullets: [
          '<strong>The deposit is at most three months’ rent</strong> (Act on Residential Leases, section 8). One or two months is usual.',
          '<strong>From 1 October 2026 the deposit must be returned</strong>, or its retention explained in writing, within 14 days of the tenancy ending or the flat being handed back (reform in force 1 Oct 2026, Rakli).',
          '<strong>The tenant’s notice period is one month.</strong> After the reform the landlord’s notice period is three months, and four months if the tenancy has lasted continuously for at least two years (Rakli).',
          '<strong>A fixed-term contract binds both sides to the end.</strong> In seasonal work an employer’s flat is often tied to the job: read what happens if the job ends before the season does.',
          '<strong>Credit records are almost always checked.</strong> A default entry does not rule out renting, but a municipal housing company or a private landlord is then a likelier match than the large chains.',
        ],
      },
      {
        id: 'towns',
        kicker: 'Where the flats are',
        h2: 'Town by town.',
        lead: 'First the municipal housing company, then the portals, then the groups. Links go to the municipalities’ own pages.',
        band: true,
        cards: [
          {
            title: 'Rovaniemi',
            image: { src: '/images/housing-rovaniemi-lappia-card.webp', alt: 'Lappia House in the centre of Rovaniemi' },
            body:
              'The city’s own page points to the landlords KAS asunnot, M2-Kodit, Tarveasunnot, Avara and Lumo, and to the search services Oikotie, Vuokraovi and Qasa. Students apply to the Domus Arctica Foundation DAS (about 1,700 flats, 700 of them studios); 18–29-year-olds to NAL Rovaniemi. A DAS application is valid for three months, and new students have priority in August and September.',
            href: 'https://www.rovaniemi.fi/Asuminen-ja-ymparisto/Asuminen',
            linkLabel: 'rovaniemi.fi: Housing',
            event: 'rovaniemi',
          },
          {
            title: 'Kittilä and Levi',
            image: { src: '/images/housing-levi-uudet-talot.webp', alt: 'New houses under construction in Levi with Levi fell behind' },
            body:
              'Kittilän Vuokratalot Oy lets the municipality’s own rental flats; the office is on the ground floor of the municipal hall (Valtatie 15). An application is valid for three months and can be filed even when nothing is free right now. Levi’s holiday apartments go on monthly rent mainly from May to November; in winter the same flat is sold by the week.',
            href: 'https://kittila.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot',
            linkLabel: 'kittila.fi: Rental housing',
            event: 'kittila',
          },
          {
            title: 'Kolari and Ylläs',
            image: { src: '/images/housing-jouninkauppa.webp', alt: 'The Jounin Kauppa grocery store in Äkäslompolo' },
            body:
              'In Äkäslompolo the owners of K-Market Jounin Kauppa are building three row houses for their permanent and seasonal staff, due in November–December 2026 (Kesko, 17 Jun 2026). The municipality sped the project up with fast zoning, and the village’s first modular building was completed in October 2025 (Yle, 16 Jun 2026). Vacancies: Oikotie and Vuokraovi, search term Kolari.',
            href: 'https://yle.fi/a/74-20231905',
            linkLabel: 'Yle, 16 Jun 2026: housing projects at Ylläs',
            event: 'yllas',
          },
          {
            title: 'Kemi, Keminmaa and Tornio',
            image: { src: '/images/housing-tornio-kerrostalo-card.webp', alt: 'An apartment block in the centre of Tornio' },
            body:
              'Kemi’s municipal flats are run by Kiinteistö Oy Itätuuli, which has over 600 flats in the centre and within five kilometres of it. Keminmaan Vuokra-asunnot Oy has 162 flats in apartment blocks and 146 in row houses, and one online application covers both companies. In Tornio the city’s flats are managed by Tornion Krunni Oy (Tornion Vuokra-asunnot Oy).',
            href: 'https://www.kemi.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
            linkLabel: 'kemi.fi: Rental housing',
            event: 'kemi',
          },
          {
            title: 'Sodankylä',
            image: { src: '/images/housing-sodankyla-jaamerentie.webp', alt: 'Jäämerentie, the main street of Sodankylä village, in September' },
            body:
              'The municipality owns about 720 rental flats, managed by its subsidiary Asentopuulaaki Oy. Vacancies and applications on the company’s own site; private listings on Oikotie and Vuokraovi.',
            href: 'https://www.sodankyla.fi/en/environment/municipal-rental-housing/',
            linkLabel: 'sodankyla.fi: Municipal rental housing',
            event: 'sodankyla',
          },
          {
            title: 'Inari, Ivalo and Saariselkä',
            image: { src: '/images/housing-ivalo-joki.webp', alt: 'Ivalo seen across the Ivalo river on a summer evening' },
            body:
              'Inarin Vuokra-asunnot Oy has over 500 flats in Ivalo, Inari, Saariselkä, Nellim and Sevettijärvi. The municipality’s page also lists the private landlords (Bilto, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg, Uni Kodit) and the Sodankylä–Inari–Utsjoki rental group on Facebook.',
            href: 'https://www.inari.fi/fi/palvelut/asuminen.html',
            linkLabel: 'inari.fi: Housing',
            event: 'inari',
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
