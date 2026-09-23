import type { HousingCopyMap } from './types';
import { pickSources } from './sources';

const SOURCES = [
  'yle2017', 'yle2023', 'yle2026yllas', 'kesko2026', 'yle2026rovaniemi', 'yle2025das', 'lapinKansaDas',
  'tkVaesto', 'kittila', 'inari', 'sodankyla', 'rakli', 'dvv',
] as const;

export const SEASONAL: HousingCopyMap = {
  fi: {
    metaTitle: 'Kausityö Lapissa: asuminen Levillä, Ylläksellä, Saariselällä',
    metaDescription:
      'Mihin kausityöntekijä asuu Levillä, Ylläksellä, Saariselällä ja Rovaniemellä: työnantajan asunto, kausivuokra vai kunnan asunto, ja mitä kysyä ennen sopimusta.',
    breadcrumb: 'Kausityöntekijälle',
    hero: {
      eyebrow: 'Kausityö talvella ja kesällä',
      title: 'Mihin kausityöntekijä\u00a0asuu?',
      subtitle:
        'Työnantajan solu, vapaa-ajan asunto kausivuokralla tai kunnan vuokra-asunto. Tunturikeskusten asuntopula on tosiasia, ja tästä näet, miten sen kanssa eletään.',
    },
    authorNote:
      'Asuntopulan luvut Ylen ja Keskon uutisista 2017–2026, hakukanavat kuntien omilta sivuilta. Sisarsivusto laplandwork.com hoitaa itse työpaikat.',
    intro: [
      'Levin matkailualueelle palkataan talvikaudeksi runsaat 2 000 kausityöntekijää, arvioi Levin Matkailu Oy:n toimitusjohtaja Kristiina Kukkohovi jo vuonna 2017, ja asuntopula oli silloinkin hänen sanoin iso ongelma kaikissa Lapin matkailukeskuksissa (Yle 25.10.2017). Tilanne ei ole helpottunut: keväällä 2023 Yle kertoi Levin ja Ylläksen työntekijöistä, jotka asuvat vapaa-ajan asunnoissa eivätkä voi rekisteröidä sinne osoitettaan.',
      'Kesäkuussa 2026 Äkäslompolon K-Market Jounin Kaupan kauppiaat päättivät rakennuttaa kolme rivitaloa omille työntekijöilleen, koska asuntoja on liian vähän ja vuokrat ovat nousseet korkeiksi (Yle 16.6.2026). Kauppa työllistää noin 20 kausityöntekijää vuodessa, ja heistä noin puolet tarvitsee vuokra-asunnon (Kesko 17.6.2026).',
      'Rovaniemellä rekrytointiyhtiö Career.fi toi Lappiin noin 250 työntekijää ja majoitti heitä kymmeneen eri paikkaan; kaksi virolaista työntekijää asui kahtena talvena yhtiön kasvujohtajan perheen luona, kun heidän vuokra-asuntonsa meni putkiremonttiin. Asuntojen löytäminen on ”aikamoinen show joka vuosi” (Yle 9.3.2026).',
    ],
    sections: [
      {
        id: 'kolme-tapaa',
        kicker: 'Kolme tapaa asua kausi',
        h2: 'Työnantajan asunto, kausivuokra vai kunnan asunto.',
        cards: [
          {
            title: '1. Työnantajan asunto',
            body:
              'Yleisin ratkaisu hiihtokeskuksissa: työnantaja vuokraa rivitaloasuntoja, mökkejä ja vapaa-ajan asuntoja henkilökunnalle koko kaudeksi, ja vuokra peritään palkasta. Rukalla ravintolayhtiö vuokrasi jo 2017 neljä vapaa-ajan kohdetta marraskuusta toukokuuhun henkilökunnalleen (Yle 25.10.2017). Etu: katto on valmiina, kun saavut. Riski: asunto loppuu, kun työ loppuu.',
          },
          {
            title: '2. Vapaa-ajan asunto kausivuokralla',
            body:
              'Levin 80 neliön alppimökki: 750 €/kk touko–marraskuussa, sesongissa 2 000 €/viikko, ympärivuotisena 1 650 €/kk (Yle 25.5.2023). Halpaa kesällä, mahdotonta talvella. Majoituskäyttöön kaavoitettuun asuntoon et myöskään voi rekisteröidä osoitetta, ja se vaikuttaa Kelaan ja kunnan palveluihin.',
          },
          {
            title: '3. Kunnan vuokra-asunto',
            body:
              'Kittilän Vuokratalot Oy, Inarin Vuokra-asunnot Oy (yli 500 asuntoa Ivalossa, Inarissa ja Saariselällä) ja Sodankylän Asentopuulaaki (noin 720 asuntoa). Hakemus kannattaa jättää kesällä ennen kauden alkua; Kittilässä hakemus on voimassa kolme kuukautta ja jonoon pääsee, vaikka vapaata ei juuri nyt olisi.',
          },
        ],
      },
      {
        id: 'paikkakunnat',
        kicker: 'Paikkakunnat',
        h2: 'Sama pula, eri ratkaisut.',
        band: true,
        cards: [
          {
            title: 'Levi ja Kittilä',
            image: { src: '/images/housing-levi-keskusta-card.webp', alt: 'Levin keskustan puurakennuksia kesäpäivänä' },
            body:
              'Kittilän väkiluku kasvoi 2,0 prosenttia vuonna 2025, eniten Lapin kunnista (Tilastokeskus). Työnantajat vuokraavat rivitaloja henkilökunnalle koko kaudeksi, ja loput hakevat Levin asuntohaun Facebook-ryhmästä. Kittilän kirkonkylässä on kunnan vuokra-asuntoja niille, joilla on auto.',
            href: 'https://kittila.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot',
            linkLabel: 'Kittilän Vuokratalot Oy',
            event: 'kittila',
          },
          {
            title: 'Ylläs: Äkäslompolo ja Ylläsjärvi',
            image: { src: '/images/housing-seasonal-card-yllas-tunturi.webp', alt: 'Ylläs Äkäslompolon järven takaa syyskuun aamuna' },
            body:
              'Kauppiaat rakennuttavat itse: Jounin Kaupan kolme rivitaloa valmistuvat marras–joulukuussa 2026, ja niissä on yksiöitä, soluasunnoiksi suunniteltuja kaksioita ja perheille kolmioita, jokaisessa sauna (Kesko 17.6.2026). Kylän ensimmäinen modulitalo valmistui lokakuussa 2025 (Yle 16.6.2026).',
            href: 'https://www.kesko.fi/media/uutiset-ja-tiedotteet/uutiset/2026/lapin-asuntopulaa-ratkomassa-k-market-jounin-kaupan-kauppiaat-rakennuttavat-kolme-rivitaloa-tyontekijoilleen/',
            linkLabel: 'Kesko 17.6.2026',
            event: 'yllas',
          },
          {
            title: 'Saariselkä ja Ivalo',
            image: { src: '/images/housing-saariselka-hirsitalot.webp', alt: 'Hirsirakennuksia Saariselällä marraskuussa' },
            body:
              'Kunnan Inarin Vuokra-asunnot Oy:llä on asuntoja sekä Saariselällä että Ivalossa, ja kunnan sivu listaa yksityiset vuokranantajat ja Sodankylä–Inari–Utsjoki-alueen Facebook-ryhmän. Saariselän työnantajat majoittavat henkilökuntaa myös itse; kysy jo haastattelussa.',
            href: 'https://www.inari.fi/fi/palvelut/asuminen.html',
            linkLabel: 'inari.fi: Asuminen',
            event: 'inari',
          },
          {
            title: 'Rovaniemi',
            image: { src: '/images/housing-rovaniemi-lappia-card.webp', alt: 'Lappia-talo Rovaniemen keskustassa' },
            body:
              'Yksiöistä kilpailevat opiskelijat, matkailijat ja kausityöntekijät samaan aikaan: DAS:lle tuli noin 1 300 hakemusta ja se teki noin 550 sopimusta, eli asunnon sai noin 30 prosenttia hakijoista (Lapin Kansa). Joulupukin pajakylän ja safariyritysten työntekijät asuvat usein työnantajan vuokraamissa asunnoissa kaupungin laidoilla.',
            href: 'https://yle.fi/a/74-20213937',
            linkLabel: 'Yle 9.3.2026: Rovaniemen asuntopula',
            event: 'rovaniemi',
          },
          {
            title: 'Ruka ja Kuusamo',
            image: { src: '/images/housing-ruka-kyla-card.webp', alt: 'Rukan kävelykylän aukio ja punainen näkötorni kesällä' },
            body:
              'Ruka on Pohjois-Pohjanmaata, ei Lappia, mutta kausi ja pula ovat samat. Rukan ravintolayhtiö kasvaa talveksi noin 20 vakituisesta yli 80 työntekijään ja vuokrasi jo 2017 neljä vapaa-ajan kohdetta henkilökunnalleen marraskuusta toukokuuhun (Yle 25.10.2017).',
            href: 'https://yle.fi/a/3-9895965',
            linkLabel: 'Yle 25.10.2017',
            event: 'ruka',
          },
        ],
      },
      {
        id: 'kesa',
        kicker: 'Kesäkausi',
        h2: 'Kesä ei ole hiljainen.',
        paras: [
          'Kesätyö Lapissa on oma kautensa: Rovaniemen ympärivuotinen matkailu, retkeilyalueet, rakennustyömaat ja kauppojen kesäsesonki. Asunnon saa kesällä helpommin, koska talvikauden vapaa-ajan asunnot vapautuvat kuukausivuokralle (Levin esimerkissä 750 €/kk touko–marraskuussa, Yle 25.5.2023) ja opiskelija-asunnot tyhjenevät.',
          'Rovaniemellä rekrytointiyhtiö suunnittelee saman katon alle talvella kausityöntekijöitä ja kesällä rakennustyöntekijöitä ja urheilujoukkueita (Yle 9.3.2026). Kesätyöhön tulevalle se on hyvä uutinen: talveksi rakennettu henkilöstöasunto on kesällä tyhjä.',
        ],
        image: {
          src: '/images/housing-jouninkauppa.webp',
          alt: 'K-Market Jounin Kaupan julkisivu Äkäslompolossa kesällä',
          caption:
            'K-Market Jounin Kauppa, Äkäslompolo, heinäkuu 2026. Kauppiaat rakennuttavat kolme rivitaloa työntekijöilleen (Kesko 17.6.2026). Kuva: LaplandVibes.',
          ratio: '4/3',
        },
      },
      {
        id: 'kysy',
        kicker: 'Ennen allekirjoitusta',
        h2: 'Kysy nämä työnantajalta.',
        bullets: [
          'Sisältyykö asunto työsuhteeseen vai vuokraatko sen erikseen? Paljonko palkasta lähtee, ja näkyykö se palkkalaskelmassa?',
          'Oma huone vai jaettu? Montako ihmistä samassa asunnossa, ja onko oma lukko?',
          'Mitä sopimukselle tapahtuu, jos työsuhde päättyy ennen kautta tai jatkuu sen yli?',
          'Voitko rekisteröidä osoitteen asuntoon? Muuttoilmoitus DVV:lle on tehtävä viimeistään viikon kuluttua muutosta, ja vapaa-ajan asuntoon se ei usein onnistu.',
          'Kuka maksaa sähkön, veden ja netin?',
          'Miten pääset töihin ilman autoa: matka, bussi, hiihtobussi?',
          'Onko vakuus, ja milloin se palautetaan? Laki: 1.10.2026 alkaen viimeistään 14 päivän kuluessa vuokrasuhteen päättymisestä (Rakli).',
        ],
      },
    ],
    faqs: [
      {
        q: 'Järjestääkö työnantaja kausityöntekijälle asunnon Levillä?',
        a: 'Usein, mutta ei aina eikä ilmaiseksi. Työnantajat vuokraavat rivitaloja ja vapaa-ajan asuntoja henkilökunnalle koko kaudeksi ja perivät vuokran palkasta. Pyydä tarjous kirjallisena ja katso, mitä asunnolle tapahtuu, jos työsuhde päättyy.',
      },
      {
        q: 'Milloin asuntoa kannattaa alkaa etsiä talvikaudelle?',
        a: 'Kesällä. Kunnan vuokrayhtiöiden hakemus (Kittilä, Inari, Sodankylä) on voimassa kuukausia, ja vapaa-ajan asuntojen kuukausivuokraus loppuu marraskuussa, kun viikkomyynti alkaa (Yle 25.5.2023).',
      },
      {
        q: 'Voinko asua vapaa-ajan asunnossa koko kauden?',
        a: 'Voit, jos omistaja vuokraa sen kausivuokralla, mutta majoituskäyttöön kaavoitettuun asuntoon et voi rekisteröidä osoitetta (Yle 25.5.2023). Ilman kotikuntaa Kelan tuet ja kunnan palvelut eivät seuraa perässä.',
      },
    ],
    cta: {
      partner: 'hotels',
      kicker: 'Ensimmäiset yöt',
      h2: 'Ennen kuin avaimet ovat kädessä.',
      lead:
        'Kausi alkaa usein ennen kuin asunto vapautuu. Kumppanihaku näyttää vapaat huoneet ja huoneistot päivän hinnoin.',
      chips: [
        { label: 'Levi', destination: 'Levi', sid: 'seasonal_first_nights_levi' },
        { label: 'Ylläs', destination: 'Äkäslompolo', sid: 'seasonal_first_nights_yllas' },
        { label: 'Saariselkä', destination: 'Saariselkä', sid: 'seasonal_first_nights_saariselka' },
        { label: 'Rovaniemi', destination: 'Rovaniemi', sid: 'seasonal_first_nights_rovaniemi' },
      ],
    },
    sources: pickSources('fi', SOURCES),
  },
  en: {
    metaTitle: 'Seasonal Worker Housing in Lapland: Levi, Ylläs, Saariselkä',
    metaDescription:
      'Where seasonal workers live at Levi, Ylläs, Saariselkä and Rovaniemi: staff housing, a holiday apartment on a seasonal lease or a municipal flat, and what to ask before you sign.',
    breadcrumb: 'Seasonal workers',
    hero: {
      eyebrow: 'Seasonal work, winter and summer',
      title: 'Where do seasonal workers live?',
      subtitle:
        'A shared staff flat, a holiday apartment on a seasonal lease or a municipal rental. The housing shortage in the ski resorts is real, and this is how people live with it.',
    },
    authorNote:
      'Shortage figures from Yle and Kesko news 2017–2026, search channels from the municipalities’ own pages. Our sister site laplandwork.com handles the jobs themselves.',
    intro: [
      'The Levi tourist area hires well over 2,000 seasonal workers for the winter season, estimated Kristiina Kukkohovi, managing director of Levin Matkailu Oy, back in 2017, and even then she called the housing shortage a big problem in every Lapland resort (Yle, 25 Oct 2017). It has not eased: in spring 2023 Yle reported on Levi and Ylläs workers living in holiday apartments where they cannot register an address.',
      'In June 2026 the owners of K-Market Jounin Kauppa in Äkäslompolo decided to build three row houses for their own staff, because there are too few flats and rents have climbed high (Yle, 16 Jun 2026). The shop employs about 20 seasonal workers a year, and roughly half of them need a rented home (Kesko, 17 Jun 2026).',
      'In Rovaniemi the recruitment company Career.fi brought about 250 workers to Lapland and housed them in some ten different places; two Estonian workers spent two winters living with the growth director’s family after their rental flat went into pipe renovation. Finding housing is “quite a show every year” (Yle, 9 Mar 2026).',
    ],
    sections: [
      {
        id: 'three-ways',
        kicker: 'Three ways to live a season',
        h2: 'Staff housing, a seasonal lease or a municipal flat.',
        cards: [
          {
            title: '1. Staff housing',
            body:
              'The most common answer in the ski resorts: the employer rents row houses, cabins and holiday apartments for staff for the whole season and takes the rent from your pay. At Ruka a restaurant group was already renting four holiday properties from November to May for its staff in 2017 (Yle, 25 Oct 2017). The upside: a roof is ready when you arrive. The risk: the flat ends when the job ends.',
          },
          {
            title: '2. A holiday apartment on a seasonal lease',
            body:
              'An 80 m² alpine cabin at Levi: €750 a month from May to November, €2,000 a week in high season, €1,650 a month year-round (Yle, 25 May 2023). Cheap in summer, impossible in winter. You also cannot register your address at a flat zoned for accommodation, which affects Kela benefits and municipal services.',
          },
          {
            title: '3. A municipal rental',
            body:
              'Kittilän Vuokratalot Oy, Inarin Vuokra-asunnot Oy (over 500 flats in Ivalo, Inari and Saariselkä) and Asentopuulaaki in Sodankylä (about 720 flats). Apply in summer before the season starts; in Kittilä an application stays valid for three months and you can queue even when nothing is free right now.',
          },
        ],
      },
      {
        id: 'places',
        kicker: 'Places',
        h2: 'Same shortage, different fixes.',
        band: true,
        cards: [
          {
            title: 'Levi and Kittilä',
            image: { src: '/images/housing-levi-keskusta-card.webp', alt: 'Wooden buildings in the centre of Levi on a summer day' },
            body:
              'Kittilä’s population grew 2.0 percent in 2025, the most of any Lapland municipality (Statistics Finland). Employers rent row houses for staff for the whole season, and everyone else searches the Levi housing group on Facebook. Kittilä village has municipal flats for those with a car.',
            href: 'https://kittila.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot',
            linkLabel: 'Kittilän Vuokratalot Oy',
            event: 'kittila',
          },
          {
            title: 'Ylläs: Äkäslompolo and Ylläsjärvi',
            image: { src: '/images/housing-seasonal-card-yllas-tunturi.webp', alt: 'Ylläs seen across the lake at Äkäslompolo on a September morning' },
            body:
              'Shopkeepers are building for themselves: Jounin Kauppa’s three row houses are due in November–December 2026 with studios, two-room flats designed for sharing and three-room family flats, each with a sauna (Kesko, 17 Jun 2026). The village’s first modular building was completed in October 2025 (Yle, 16 Jun 2026).',
            href: 'https://www.kesko.fi/media/uutiset-ja-tiedotteet/uutiset/2026/lapin-asuntopulaa-ratkomassa-k-market-jounin-kaupan-kauppiaat-rakennuttavat-kolme-rivitaloa-tyontekijoilleen/',
            linkLabel: 'Kesko, 17 Jun 2026',
            event: 'yllas',
          },
          {
            title: 'Saariselkä and Ivalo',
            image: { src: '/images/housing-saariselka-hirsitalot.webp', alt: 'Log buildings in Saariselkä in November' },
            body:
              'The municipal company Inarin Vuokra-asunnot Oy has flats in both Saariselkä and Ivalo, and the municipality’s page lists private landlords and the Sodankylä–Inari–Utsjoki Facebook group. Saariselkä employers also house staff themselves; ask at the interview.',
            href: 'https://www.inari.fi/fi/palvelut/asuminen.html',
            linkLabel: 'inari.fi: Housing',
            event: 'inari',
          },
          {
            title: 'Rovaniemi',
            image: { src: '/images/housing-rovaniemi-lappia-card.webp', alt: 'Lappia House in the centre of Rovaniemi' },
            body:
              'Students, tourists and seasonal workers compete for the same studios at the same time: DAS received about 1,300 applications and made about 550 contracts, so roughly 30 percent of applicants got a flat (Lapin Kansa). Santa Claus Village and safari company staff often live in flats their employer rents on the edge of town.',
            href: 'https://yle.fi/a/74-20213937',
            linkLabel: 'Yle, 9 Mar 2026: Rovaniemi housing shortage',
            event: 'rovaniemi',
          },
          {
            title: 'Ruka and Kuusamo',
            image: { src: '/images/housing-ruka-kyla-card.webp', alt: 'The square and red lookout tower in Ruka pedestrian village in summer' },
            body:
              'Ruka is in Northern Ostrobothnia, not Lapland, but the season and the shortage are the same. Ruka’s restaurant group grows from about 20 permanent staff to over 80 in winter and was already renting four holiday properties for staff from November to May in 2017 (Yle, 25 Oct 2017).',
            href: 'https://yle.fi/a/3-9895965',
            linkLabel: 'Yle, 25 Oct 2017',
            event: 'ruka',
          },
        ],
      },
      {
        id: 'summer',
        kicker: 'The summer season',
        h2: 'Summer is not quiet.',
        paras: [
          'Summer work in Lapland is a season of its own: Rovaniemi’s year-round tourism, the hiking areas, construction sites and the shops’ summer peak. Housing is easier to find in summer because the winter holiday apartments come back onto monthly rent (€750 a month from May to November in the Levi example, Yle, 25 May 2023) and student flats empty out.',
          'In Rovaniemi a recruitment company plans to put seasonal workers under one roof in winter and construction workers and sports teams there in summer (Yle, 9 Mar 2026). For a summer arrival that is good news: staff housing built for winter stands empty in summer.',
        ],
        image: {
          src: '/images/housing-jouninkauppa.webp',
          alt: 'The front of the K-Market Jounin Kauppa store in Äkäslompolo in summer',
          caption:
            'K-Market Jounin Kauppa, Äkäslompolo, July 2026. The owners are building three row houses for their staff (Kesko, 17 Jun 2026). Photo: LaplandVibes.',
          ratio: '4/3',
        },
      },
      {
        id: 'ask',
        kicker: 'Before you sign',
        h2: 'Ask your employer these.',
        bullets: [
          'Is the flat part of the employment package or a separate lease? How much comes off your pay, and does it show on the payslip?',
          'Your own room or shared? How many people in the flat, and is there a lock on your door?',
          'What happens to the lease if the job ends before the season does, or continues past it?',
          'Can you register your address there? The change-of-address notification to DVV is due within a week of moving, and a holiday apartment often will not qualify.',
          'Who pays for electricity, water and the internet?',
          'How do you get to work without a car: distance, bus, ski bus?',
          'Is there a deposit, and when is it returned? The law: from 1 October 2026 within 14 days of the tenancy ending (Rakli).',
        ],
      },
    ],
    faqs: [
      {
        q: 'Does the employer provide housing for seasonal workers at Levi?',
        a: 'Often, but not always and not for free. Employers rent row houses and holiday apartments for staff for the whole season and take the rent from your pay. Get the offer in writing and check what happens to the flat if the job ends.',
      },
      {
        q: 'When should I start looking for winter-season housing?',
        a: 'In summer. Municipal housing applications (Kittilä, Inari, Sodankylä) stay valid for months, and monthly lets of holiday apartments end in November when weekly sales begin (Yle, 25 May 2023).',
      },
      {
        q: 'Can I live in a holiday apartment for the whole season?',
        a: 'Yes, if the owner offers a seasonal lease, but you cannot register your address at a flat zoned for accommodation (Yle, 25 May 2023). Without a home municipality, Kela benefits and municipal services do not follow you.',
      },
    ],
    cta: {
      partner: 'hotels',
      kicker: 'The first nights',
      h2: 'Before the keys are in your hand.',
      lead:
        'The season often starts before the flat is free. Our partner search shows available rooms and apartments at today’s prices.',
      chips: [
        { label: 'Levi', destination: 'Levi', sid: 'seasonal_first_nights_levi' },
        { label: 'Ylläs', destination: 'Äkäslompolo', sid: 'seasonal_first_nights_yllas' },
        { label: 'Saariselkä', destination: 'Saariselkä', sid: 'seasonal_first_nights_saariselka' },
        { label: 'Rovaniemi', destination: 'Rovaniemi', sid: 'seasonal_first_nights_rovaniemi' },
      ],
    },
    sources: pickSources('en', SOURCES),
  },
};
