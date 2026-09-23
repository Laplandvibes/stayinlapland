import type { HousingCopyMap } from './types';
import { pickSources } from './sources';

const SOURCES = [
  'dvv', 'traficom', 'tkSahko', 'tkPolttoaine', 'kuntaliitto', 'perusopetuslaki', 'fmi', 'foreca',
  'lvDrive', 'lapha', 'laplandwork', 'ahvl', 'rakli',
] as const;

export const MOVING: HousingCopyMap = {
  fi: {
    metaTitle: 'Muutto Lappiin: käytännön opas ensimmäiseen kuukauteen',
    metaDescription:
      'Muuttoilmoitus, talvirenkaat, päiväkotimaksut, sähkö ja kaamos: mitä Lappiin muuttavan pitää hoitaa ensimmäisen kuukauden aikana. Määräajat ja luvut viranomaisilta.',
    breadcrumb: 'Muutto Lappiin',
    hero: {
      eyebrow: 'Muutto Lappiin · Ensimmäiset 30 päivää',
      title: 'Muutto Lappiin.',
      subtitle:
        'Muuttoilmoitus, talvirenkaat, päiväkoti, sähkösopimus ja kaamos: mitä hoidetaan ensimmäisen kuukauden aikana ja missä järjestyksessä.',
    },
    authorNote:
      'Määräajat DVV:ltä, Traficomilta ja Kuntaliitolta, kaamoksen kesto Ilmatieteen laitokselta, välimatkat LaplandVibesin ajoreiteiltä. Tarkistettu 17.9.2026.',
    intro: [
      'Muutto Lappiin ei eroa paperitöiltään muusta Suomesta, mutta kolme asiaa on täällä painavampia kuin etelässä: talvi kestää puoli vuotta, välimatkat mitataan sadoissa kilometreissä ja pienissä kunnissa palvelut ovat yhdessä paikassa. Tämä sivu on tarkistuslista siinä järjestyksessä, jossa asiat pitää hoitaa.',
      'Jos muutat Suomeen ulkomailta, oleskelulupa, henkilötunnus, verokortti ja pankkitili käydään läpi sisarsivustollamme <a href="https://laplandwork.com/moving-to-finland" target="_blank" rel="noopener">laplandwork.com</a>. Tämä sivu alkaa siitä, kun avaimet ovat kädessä.',
    ],
    sections: [
      {
        id: 'viikko',
        kicker: 'Ensimmäinen viikko',
        h2: 'Neljä ilmoitusta, yksi määräaika.',
        bullets: [
          '<strong>Muuttoilmoitus DVV:lle</strong> aikaisintaan kuukautta ennen muuttopäivää ja viimeistään viikon kuluttua muutosta (DVV). Sama ilmoitus menee Postille. Kunnan palvelut (päiväkoti, koulu, terveysasema) seuraavat kotikuntaa, joten ilmoitus kannattaa tehdä heti.',
          '<strong>Sähkösopimus.</strong> Sähkön kokonaishinta kotitaloudelle, joka kuluttaa 2 500–4 999 kWh vuodessa, oli maaliskuussa 2026 koko maassa keskimäärin 22,9 senttiä kilowattitunnilta ja yli 15 000 kWh:n luokassa, johon sähkölämmitteinen omakotitalo kuuluu, 14,1 senttiä (Tilastokeskus). Lapissa lämmityskausi on pitkä, joten kulutusarvio kannattaa tehdä yläkanttiin.',
          '<strong>Terveyspalvelut</strong> järjestää Lapin hyvinvointialue. Kiireetön hoito haetaan oman alueen terveysasemalta; katso lähin asema hyvinvointialueen sivuilta ja kirjaudu Omakantaan.',
          '<strong>Netti.</strong> Kysy kuidun saatavuutta taloyhtiöltä tai vuokranantajalta ennen sopimusta. Haja-asutusalueella mobiilireititin on usein ainoa vaihtoehto, ja etätyötä tekevän kannattaa testata yhteys asunnossa ennen allekirjoitusta.',
        ],
      },
      {
        id: 'auto',
        kicker: 'Auto ja talvi',
        h2: 'Ilman autoa pärjää Rovaniemellä. Muualla ei.',
        bullets: [
          '<strong>Talvirenkaat:</strong> Suomessa on käytettävä talvirenkaita 1.11.–31.3., jos sää tai keli sitä vaatii. Nastarenkaat ovat sallittuja samana aikana ja muulloinkin, jos olosuhteet sitä vaativat. Talvirenkaan pääurien syvyyden on oltava vähintään 3,0 mm (Traficom). Lapissa ”jos keli vaatii” tarkoittaa käytännössä lokakuun lopusta huhtikuuhun.',
          '<strong>Polttoaine:</strong> 95E10-bensiini maksoi maaliskuussa 2026 koko maassa keskimäärin 1,93 €/l ja diesel 2,08 €/l (Tilastokeskus). Pitkät välimatkat tekevät tästä Lapissa suuremman menoerän kuin etelässä.',
          '<strong>Välimatkat</strong> LaplandVibesin ajoreiteiltä: Oulu–Kemi 105 km, Kemi–Rovaniemi 118 km, Rovaniemi–Ylläs (Äkäslompolo) 175 km, Sodankylä–Saariselkä 130 km, Levi–Kilpisjärvi 258 km. Lappi on isompi kuin kartalta näyttää.',
          '<strong>Lohkolämmitin ja sisätilanlämmitin.</strong> Pakkasella auto lämmitetään ennen lähtöä; taloyhtiön lämmitystolppa on Lapissa vakiovaruste. Kysy autopaikka tolpalla vuokrasopimukseen.',
        ],
        image: {
          src: '/images/housing-kittila-airport.webp',
          alt: 'Kittilän lentoaseman terminaali kesäpäivänä',
          caption: 'Kittilän lentoasema, heinäkuu 2026. Leville ja Ylläkselle lennetään Kittilään, Rovaniemelle omalle kentälle ja Saariselälle Ivaloon. Kuva: LaplandVibes.',
          ratio: '16/9',
        },
      },
      {
        id: 'lapset',
        kicker: 'Lapset',
        h2: 'Päiväkoti maksaa tulojen mukaan, koulu ei mitään.',
        bullets: [
          '<strong>Varhaiskasvatuksen asiakasmaksu</strong> määräytyy perheen tuloista: 1.8.2026 alkaen ylin maksu on 335 €/kk lasta kohti ja alin perittävä 32 €. Toisesta lapsesta peritään enintään 40 % nuorimman lapsen maksusta eli enintään 134 € (Kuntaliitto).',
          '<strong>Esiopetus ja perusopetus</strong> ovat maksuttomia oppimateriaaleineen ja kouluaterioineen (perusopetuslaki 31 §). Koulukuljetus järjestetään, kun koulumatka on yli viisi kilometriä (perusopetuslaki 32 §), ja pienissä kunnissa se on osa arkea.',
          'Päiväkotipaikka haetaan kunnalta, ja kunta määräytyy DVV:lle ilmoitetun osoitteen mukaan. Siksi muuttoilmoitus on ensimmäinen asia, ei viimeinen.',
        ],
      },
      {
        id: 'valo',
        kicker: 'Valo ja pimeä',
        h2: 'Kaamos on lyhyempi kuin luulet. Paitsi Utsjoella.',
        paras: [
          'Kaamos tarkoittaa, ettei aurinko nouse horisontin yläpuolelle. Ilmatieteen laitoksen mukaan se kestää Nuorgamissa Utsjoella lähes kaksi kuukautta, 25.11.–17.1., ja Sodankylässä vain neljä päivää juuri ennen joulua. Kaamoksen raja kulkee hieman napapiirin pohjoispuolella, joten Rovaniemellä varsinaista kaamosta ei ole (Foreca): aurinko käy talvella matalalla, mutta käy.',
          'Kesällä tilanne kääntyy. Yöttömän yön raja saavutetaan napapiirillä Rovaniemen kohdalla, ja Nuorgamissa yötön yö kestää 16.5.–29.7. (Ilmatieteen laitos). Pimennysverhot ovat kesän tärkein hankinta, kirkasvalolamppu talven.',
        ],
      },
      {
        id: 'ennen',
        kicker: 'Ennen kuin allekirjoitat',
        h2: 'Kysy nämä vuokranantajalta.',
        bullets: [
          'Lämmitysmuoto ja kuka sen maksaa: kaukolämpö sisältyy yleensä vuokraan, sähkölämmitys tulee omaan laskuun.',
          'Autopaikka lämmitystolpalla ja varasto talvivarusteille: suksille, kelkalle ja talvirenkaille.',
          'Matka lähimpään kauppaan, terveysasemaan ja kouluun, ja onko sinne bussia talvella.',
          'Vakuus ja sen palautus: enintään kolmen kuukauden vuokra (laki asuinhuoneiston vuokrauksesta 8 §), ja 1.10.2026 alkaen palautus viimeistään 14 päivässä vuokrasuhteen päättymisestä (Rakli).',
        ],
      },
    ],
    faqs: [
      {
        q: 'Milloin muuttoilmoitus pitää tehdä?',
        a: 'Aikaisintaan kuukautta ennen muuttopäivää ja viimeistään viikon kuluttua muutosta (DVV). Sama ilmoitus menee sekä Digi- ja väestötietovirastolle että Postille.',
      },
      {
        q: 'Milloin Lapissa tarvitsee talvirenkaat?',
        a: 'Laki sanoo 1.11.–31.3., jos sää tai keli vaatii, ja nastat ovat sallittuja samana aikana ja muulloinkin olosuhteiden vaatiessa (Traficom). Lapissa lumi tulee usein ennen marraskuuta ja lähtee huhtikuussa, joten renkaat vaihdetaan kelin, ei kalenterin mukaan.',
      },
      {
        q: 'Onko Rovaniemellä kaamos?',
        a: 'Ei varsinaista kaamosta: sen raja kulkee hieman napapiirin pohjoispuolella (Foreca). Sodankylässä aurinko ei nouse neljänä päivänä ennen joulua ja Nuorgamissa lähes kahteen kuukauteen (Ilmatieteen laitos).',
      },
    ],
    cta: {
      partner: 'cars',
      kicker: 'Auto ensimmäisiksi viikoiksi',
      h2: 'Asuntonäytöt, muuttokuorma, kauppa.',
      lead:
        'Oma auto tulee usein perässä. Vuokra-auto lentokentältä hoitaa näytöt ja ensimmäiset viikot; kumppanihaku vertailee vuokraamot yhdellä haulla.',
      chips: [
        { label: 'Rovaniemi (RVN)', destination: 'RVN', sid: 'moving_car_rvn' },
        { label: 'Kittilä (KTT)', destination: 'KTT', sid: 'moving_car_ktt' },
        { label: 'Kemi-Tornio (KEM)', destination: 'KEM', sid: 'moving_car_kem' },
        { label: 'Ivalo (IVL)', destination: 'IVL', sid: 'moving_car_ivl' },
      ],
    },
    sources: pickSources('fi', SOURCES),
  },
  en: {
    metaTitle: 'Moving to Lapland: A Practical Guide to the First Month',
    metaDescription:
      'Address notification, winter tyres, daycare fees, electricity and the polar night: what to sort out in your first month in Finnish Lapland, with deadlines and figures from the authorities.',
    breadcrumb: 'Moving to Lapland',
    hero: {
      eyebrow: 'Moving to Lapland · The first 30 days',
      title: 'Moving to Lapland.',
      subtitle:
        'Change of address, winter tyres, daycare, the electricity contract and the polar night: what to sort out in the first month, and in what order.',
    },
    authorNote:
      'Deadlines from DVV, Traficom and the Association of Finnish Municipalities, polar-night lengths from the Finnish Meteorological Institute, distances from LaplandVibes driving routes. Checked 17 September 2026.',
    intro: [
      'The paperwork of moving to Lapland is the same as anywhere in Finland, but three things weigh more here than in the south: winter lasts half the year, distances are measured in hundreds of kilometres, and in small municipalities the services sit in one place. This page is a checklist in the order things need doing.',
      'If you are moving to Finland from abroad, residence permits, the personal identity code, the tax card and a bank account are covered on our sister site <a href="https://laplandwork.com/moving-to-finland" target="_blank" rel="noopener">laplandwork.com</a>. This page starts when the keys are in your hand.',
    ],
    sections: [
      {
        id: 'week-one',
        kicker: 'The first week',
        h2: 'Four notifications, one deadline.',
        bullets: [
          '<strong>Change-of-address notification to DVV</strong>: at the earliest one month before moving day and at the latest one week after the move (DVV). The same notification goes to Posti. Municipal services (daycare, school, health centre) follow your registered home municipality, so file it right away.',
          '<strong>Electricity contract.</strong> The total price of electricity for a household using 2,500–4,999 kWh a year averaged 22.9 cents per kWh across Finland in March 2026, and 14.1 cents in the class above 15,000 kWh, where an electrically heated house belongs (Statistics Finland). Lapland’s heating season is long, so estimate your consumption on the high side.',
          '<strong>Health care</strong> is run by the wellbeing services county of Lapland (Lapha). Non-urgent care goes through your local health centre; find the nearest one on the county’s site and register with Omakanta.',
          '<strong>Internet.</strong> Ask the housing company or landlord about fibre before you sign. In sparsely populated areas a mobile router is often the only option, and anyone working remotely should test the connection in the flat first.',
        ],
      },
      {
        id: 'car',
        kicker: 'Car and winter',
        h2: 'You can manage without a car in Rovaniemi. Not elsewhere.',
        bullets: [
          '<strong>Winter tyres:</strong> in Finland winter tyres must be used from 1 November to 31 March if weather or road conditions require it. Studded tyres are allowed in the same period and at other times when conditions demand. The main grooves of a winter tyre must be at least 3.0 mm deep (Traficom). In Lapland “if conditions require” means, in practice, from late October to April.',
          '<strong>Fuel:</strong> 95E10 petrol averaged €1.93 a litre across Finland in March 2026 and diesel €2.08 (Statistics Finland). Long distances make this a bigger line in Lapland than in the south.',
          '<strong>Distances</strong> from the LaplandVibes driving routes: Oulu–Kemi 105 km, Kemi–Rovaniemi 118 km, Rovaniemi–Ylläs (Äkäslompolo) 175 km, Sodankylä–Saariselkä 130 km, Levi–Kilpisjärvi 258 km. Lapland is bigger than it looks on the map.',
          '<strong>Engine block heater and cabin heater.</strong> In hard frost the car is warmed before you leave; a heating post in the car park is standard equipment in Lapland. Get a parking space with a post written into the lease.',
        ],
        image: {
          src: '/images/housing-kittila-airport.webp',
          alt: 'The terminal of Kittilä Airport on a summer day',
          caption: 'Kittilä Airport, July 2026. Levi and Ylläs are served by Kittilä, Rovaniemi by its own airport and Saariselkä by Ivalo. Photo: LaplandVibes.',
          ratio: '16/9',
        },
      },
      {
        id: 'children',
        kicker: 'Children',
        h2: 'Daycare is priced by income, school costs nothing.',
        bullets: [
          '<strong>Early childhood education fees</strong> follow family income: from 1 August 2026 the highest fee is €335 a month per child and the lowest charged €32. The second child pays at most 40 % of the youngest child’s fee, so at most €134 (Association of Finnish Municipalities).',
          '<strong>Pre-primary and basic education</strong> are free, learning materials and school meals included (Basic Education Act, section 31). School transport is arranged when the journey exceeds five kilometres (section 32), and in small municipalities it is part of everyday life.',
          'You apply for a daycare place from the municipality, and the municipality is decided by the address registered with DVV. That is why the address notification comes first, not last.',
        ],
      },
      {
        id: 'light',
        kicker: 'Light and dark',
        h2: 'The polar night is shorter than you think. Except in Utsjoki.',
        paras: [
          'Kaamos, the polar night, means the sun does not rise above the horizon. According to the Finnish Meteorological Institute it lasts almost two months in Nuorgam, Utsjoki, from 25 November to 17 January, and only four days just before Christmas in Sodankylä. The polar-night line runs slightly north of the Arctic Circle, so Rovaniemi has no true polar night (Foreca): in winter the sun stays low, but it rises.',
          'Summer turns the tables. The midnight-sun line is reached at the Arctic Circle at Rovaniemi, and in Nuorgam the sun does not set from 16 May to 29 July (Finnish Meteorological Institute). Blackout curtains are the key summer purchase, a daylight lamp the winter one.',
        ],
      },
      {
        id: 'before-signing',
        kicker: 'Before you sign',
        h2: 'Ask the landlord these.',
        bullets: [
          'Heating type and who pays for it: district heating is usually included in the rent, electric heating lands on your own bill.',
          'A parking space with a heating post and storage for winter gear: skis, sledge, winter tyres.',
          'Distance to the nearest shop, health centre and school, and whether a bus runs there in winter.',
          'Deposit and its return: at most three months’ rent (Act on Residential Leases, section 8), and from 1 October 2026 a return within 14 days of the tenancy ending (Rakli).',
        ],
      },
    ],
    faqs: [
      {
        q: 'When do I have to file the change of address?',
        a: 'At the earliest one month before moving day and at the latest one week after the move (DVV). One notification covers both the Digital and Population Data Services Agency and Posti.',
      },
      {
        q: 'When are winter tyres required in Lapland?',
        a: 'The law says 1 November to 31 March if weather or road conditions require it, and studs are allowed in the same period and at other times when conditions demand (Traficom). In Lapland snow often arrives before November and leaves in April, so tyres are changed by the conditions, not the calendar.',
      },
      {
        q: 'Does Rovaniemi have a polar night?',
        a: 'Not a true one: the polar-night line runs slightly north of the Arctic Circle (Foreca). In Sodankylä the sun stays down for four days before Christmas and in Nuorgam for almost two months (Finnish Meteorological Institute).',
      },
    ],
    cta: {
      partner: 'cars',
      kicker: 'A car for the first weeks',
      h2: 'Viewings, the moving load, the shop.',
      lead:
        'Your own car often arrives later. A rental from the airport covers the viewings and the first weeks; the partner search compares the rental companies in one go.',
      chips: [
        { label: 'Rovaniemi (RVN)', destination: 'RVN', sid: 'moving_car_rvn' },
        { label: 'Kittilä (KTT)', destination: 'KTT', sid: 'moving_car_ktt' },
        { label: 'Kemi-Tornio (KEM)', destination: 'KEM', sid: 'moving_car_kem' },
        { label: 'Ivalo (IVL)', destination: 'IVL', sid: 'moving_car_ivl' },
      ],
    },
    sources: pickSources('en', SOURCES),
  },
};
