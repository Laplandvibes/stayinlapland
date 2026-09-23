import type { HousingCopyMap } from './types';
import { pickSources } from './sources';

const SOURCES = [
  'tkVuokrat', 'tkSahko', 'tkPolttoaine', 'kela', 'kuntaliitto', 'perusopetuslaki', 'lvDrive', 'yle2023',
] as const;

export const COST: HousingCopyMap = {
  fi: {
    metaTitle: 'Elinkustannukset Lapissa 2026: vuokra, sähkö, bensa, tuet',
    metaDescription:
      'Mitä eläminen Lapissa maksaa: neliövuokrat Rovaniemellä ja Lapissa (Tilastokeskus 2026), sähkö ja polttoaine, Kelan asumistuen katot ja päiväkotimaksut. Lasketut esimerkit kaavoineen.',
    breadcrumb: 'Elinkustannukset',
    hero: {
      eyebrow: 'Elinkustannukset Lapissa',
      title: 'Mitä eläminen Lapissa maksaa?',
      subtitle:
        'Vuokra on Lapissa halvempaa kuin muualla Suomessa, auto ja lämmitys kalliimpaa. Näin kuukauden menot koostuvat.',
    },
    authorNote:
      'Kaikki luvut Tilastokeskuksen, Kelan ja Kuntaliiton julkaisuista; esimerkkilaskelmat on laskettu näistä luvuista ja kaava näkyy. Ei arvioita.',
    intro: [
      'Elinkustannuksissa on kaksi Lappia. Rovaniemi on yliopistokaupunki, jonka yksiöistä kilpailevat opiskelijat ja matkailijat; tunturikeskuksissa hinta seuraa kautta. Rannikolla ja pienissä kunnissa asuminen on väljintä ja halvinta, mutta auto on pakollinen.',
      'Alla ovat neljä erää, joista kuukauden budjetti käytännössä koostuu: vuokra, sähkö, liikkuminen ja lapset. Ruoan hinnasta ei ole Lappi-kohtaista tilastoa, joten sitä ei tässä arvata.',
    ],
    sections: [
      {
        id: 'vuokra',
        kicker: 'Vuokra',
        h2: 'Halvempaa kuin koko maassa, paitsi kun ei ole.',
        table: {
          caption: 'Keskineliövuokra €/m²/kk, vapaarahoitteiset vuokra-asunnot, 2026Q2',
          head: ['', 'Rovaniemi', 'Lappi (maakunta)', 'Koko maa'],
          rows: [
            ['Yksiöt', '18,66', '17,30', '20,46'],
            ['Kaksiot', '14,35', '12,85', '15,04'],
            ['Kolmiot ja isommat', '12,09', '10,97', '13,92'],
            ['Kaikki asunnot', '14,55', '13,10', '15,94'],
          ],
          foot: 'Tilastokeskus, vuokrat 2026Q2, taulukko 15fa.',
        },
        paras: [
          '<strong>Esimerkit:</strong> 30 m²:n yksiö Rovaniemellä noin 560 €/kk (18,66 × 30) · 50 m²:n kaksio Rovaniemellä noin 720 €/kk (14,35 × 50) · 75 m²:n kolmio Lapin maakunnan keskihinnalla noin 820 €/kk (10,97 × 75).',
          'Poikkeus on tunturikeskusten talvi: Levillä 80 m²:n alppimökki maksoi 750 €/kk touko–marraskuussa mutta 2 000 €/viikko sesongissa (Yle 25.5.2023). Ympärivuotinen sopimus samaan asuntoon oli 1 650 €/kk. Mökkikylän hinta ei ole Lapin hinta.',
        ],
      },
      {
        id: 'sahko',
        kicker: 'Sähkö ja lämmitys',
        h2: 'Kilowattitunti maksaa saman, mutta niitä kuluu enemmän.',
        table: {
          caption: 'Sähkön kokonaishinta kotitalouksille, snt/kWh, maaliskuu 2026, koko maa',
          head: ['Vuosikulutus', 'Kokonaishinta'],
          rows: [
            ['1 000–2 499 kWh (pieni kerrostaloasunto)', '27,0'],
            ['2 500–4 999 kWh (kerrostalo- tai rivitaloasunto)', '22,9'],
            ['5 000–15 000 kWh (omakotitalo, ei sähkölämmitystä)', '17,1'],
            ['yli 15 000 kWh (sähkölämmitteinen talo)', '14,1'],
          ],
          foot: 'Tilastokeskus, sähkön hinta kuluttajatyypeittäin, taulukko 13rb. Hinta sisältää energian, siirron ja verot.',
        },
        paras: [
          '<strong>Esimerkit:</strong> kerrostalokaksio 3 500 kWh/v: 3 500 × 0,229 = noin 800 €/v eli 67 €/kk · sähkölämmitteinen omakotitalo 18 000 kWh/v: 18 000 × 0,141 = noin 2 540 €/v eli 212 €/kk.',
          'Hinta on valtakunnallinen keskiarvo. Lapin lämmityskausi on etelää pidempi, joten sama talo kuluttaa täällä enemmän kilowattitunteja; kysy edelliseltä asukkaalta tai vuokranantajalta viime vuoden kulutus, se on paras arvio.',
        ],
      },
      {
        id: 'liikkuminen',
        kicker: 'Liikkuminen',
        h2: 'Tämä on se erä, joka Lapissa on isompi.',
        paras: [
          '95E10-bensiini maksoi maaliskuussa 2026 koko maassa keskimäärin 1,93 €/l ja diesel 2,08 €/l (Tilastokeskus). Välimatkat LaplandVibesin ajoreiteiltä: Kemi–Rovaniemi 118 km, Rovaniemi–Ylläs 175 km, Sodankylä–Saariselkä 130 km.',
          '<strong>Esimerkki:</strong> työmatka 40 km päivässä, 22 työpäivää, kulutus 7 l/100 km: 880 km × 0,07 l/km × 1,93 €/l = noin 119 €/kk bensiiniä. Rovaniemen keskustassa asuva pärjää ilman autoa; tunturikylässä auto on osa vuokraa, vaikka se ei sopimuksessa lue.',
        ],
      },
      {
        id: 'asumistuki',
        kicker: 'Kelan asumistuki',
        h2: 'Mikä osa vuokrasta lasketaan mukaan.',
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
          foot: 'Kela, yleinen asumistuki 2026. Tuki on enintään 70 % hyväksyttävistä asumismenoista, ja alle 15 euron tukea ei makseta.',
        },
        paras: [
          '<strong>Esimerkki:</strong> yksin asuva Rovaniemellä, vuokra 600 €. Tukeen kelpaa enintään 447 €, ja tuki on enintään 70 % siitä eli 313 €/kk (447 × 0,70) ennen kuin tulot pienentävät sitä perusomavastuun kautta. Kelan laskuri laskee omat tulosi mukaan.',
        ],
      },
      {
        id: 'lapset',
        kicker: 'Lapset',
        h2: 'Päiväkoti tulojen mukaan, koulu ilmaiseksi.',
        bullets: [
          'Varhaiskasvatuksen ylin maksu on 1.8.2026 alkaen 335 €/kk lasta kohti, alin perittävä 32 €, ja toisesta lapsesta enintään 134 € (Kuntaliitto). Maksu määräytyy perheen tuloista, joten pienituloisella se voi olla nolla.',
          'Esiopetus ja perusopetus ovat maksuttomia oppimateriaaleineen ja kouluaterioineen (perusopetuslaki 31 §). Yli viiden kilometrin koulumatkalle kunta järjestää kuljetuksen (32 §).',
        ],
      },
      {
        id: 'yhteenveto',
        kicker: 'Yhteenveto',
        h2: 'Mikä on halvempaa, mikä kalliimpaa.',
        band: true,
        cards: [
          {
            title: 'Halvempaa: vuokra',
            body: 'Lapin keskineliövuokra 13,10 €/m² vastaan koko maan 15,94 €/m² (Tilastokeskus 2026Q2). Rovaniemi 14,55 on näiden välissä.',
          },
          {
            title: 'Kalliimpaa: liikkuminen ja lämmitys',
            body: 'Sadan kilometrin välimatkat ja pitkä lämmityskausi. Kilowattitunnin ja litran hinta on sama kuin etelässä, määrä ei.',
          },
          {
            title: 'Samaa: päiväkoti ja koulu',
            body: 'Varhaiskasvatuksen maksut ja koulun maksuttomuus ovat valtakunnallisia. Lapsiperheen suurin säästö Lapissa on vuokrassa.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Onko Rovaniemi kallis kaupunki asua?',
        a: 'Vuokrilla mitattuna ei: keskineliövuokra 14,55 €/m² on alle koko maan keskiarvon 15,94 (Tilastokeskus 2026Q2). Yksiöissä ero on pieni (18,66 vastaan 20,46), ja uusissa vuokrasuhteissa Rovaniemen yksiö maksaa 21,17 €/m² eli koko maan tasoa.',
      },
      {
        q: 'Paljonko yksin asuva tarvitsee kuukaudessa Rovaniemellä?',
        a: 'Laskemme vain sen, mihin on lähde: 30 m²:n yksiö noin 560 €/kk (18,66 × 30) ja sähkö 1 800 kWh:n vuosikulutuksella noin 41 €/kk (1 800 × 0,270 / 12). Ruoka, netti, vakuutukset ja liikkuminen tulevat päälle omien tottumustesi mukaan.',
      },
      {
        q: 'Saanko asumistukea Lapissa?',
        a: 'Samoin ehdoin kuin muualla Suomessa. Rovaniemellä yhden hengen ruokakunnan asumismenoista huomioidaan enintään 447 €/kk, muissa Lapin kunnissa 394 €/kk, ja tuki on enintään 70 % siitä (Kela 2026).',
      },
    ],
    sources: pickSources('fi', SOURCES),
  },
  en: {
    metaTitle: 'Cost of Living in Lapland 2026: Rent, Electricity, Fuel, Benefits',
    metaDescription:
      'What it costs to live in Finnish Lapland: rent per m² in Rovaniemi and Lapland (Statistics Finland 2026), electricity and fuel, Kela housing allowance ceilings and daycare fees, with worked examples.',
    breadcrumb: 'Cost of living',
    hero: {
      eyebrow: 'Cost of living in Lapland',
      title: 'What does living in Lapland cost?',
      subtitle:
        'Rent is cheaper in Lapland than in the rest of Finland; the car and the heating are dearer. This is how a monthly budget adds up.',
    },
    authorNote:
      'Every figure is from Statistics Finland, Kela or the Association of Finnish Municipalities; the examples are calculated from those figures and show their formula. No estimates.',
    intro: [
      'There are two Laplands when it comes to costs. Rovaniemi is a university city where students and tourists compete for the studios; in the ski resorts the price follows the season. On the coast and in the small municipalities housing is roomiest and cheapest, but a car is compulsory.',
      'Below are the four lines a monthly budget is really made of: rent, electricity, getting around and children. There is no Lapland-specific statistic on food prices, so we do not guess at one.',
    ],
    sections: [
      {
        id: 'rent',
        kicker: 'Rent',
        h2: 'Cheaper than the national average, except when it is not.',
        table: {
          caption: 'Average rent €/m²/month, free-market rental flats, 2026Q2',
          head: ['', 'Rovaniemi', 'Lapland (region)', 'Whole country'],
          rows: [
            ['Studios', '18.66', '17.30', '20.46'],
            ['Two-room flats', '14.35', '12.85', '15.04'],
            ['Three rooms and larger', '12.09', '10.97', '13.92'],
            ['All flats', '14.55', '13.10', '15.94'],
          ],
          foot: 'Statistics Finland, rents 2026Q2, table 15fa.',
        },
        paras: [
          '<strong>Examples:</strong> a 30 m² studio in Rovaniemi about €560 a month (18.66 × 30) · a 50 m² two-room flat in Rovaniemi about €720 (14.35 × 50) · a 75 m² three-room flat at the Lapland regional average about €820 (10.97 × 75).',
          'The exception is winter in the ski resorts: at Levi an 80 m² alpine cabin cost €750 a month from May to November but €2,000 a week in high season (Yle, 25 May 2023). A year-round lease on the same flat was €1,650 a month. The resort price is not the Lapland price.',
        ],
      },
      {
        id: 'electricity',
        kicker: 'Electricity and heating',
        h2: 'A kilowatt-hour costs the same, you just use more of them.',
        table: {
          caption: 'Total price of electricity for households, cents/kWh, March 2026, whole country',
          head: ['Annual consumption', 'Total price'],
          rows: [
            ['1,000–2,499 kWh (small flat)', '27.0'],
            ['2,500–4,999 kWh (flat or row house)', '22.9'],
            ['5,000–15,000 kWh (detached house, no electric heating)', '17.1'],
            ['over 15,000 kWh (electrically heated house)', '14.1'],
          ],
          foot: 'Statistics Finland, price of electricity by type of consumer, table 13rb. Price includes energy, transmission and taxes.',
        },
        paras: [
          '<strong>Examples:</strong> a two-room flat using 3,500 kWh a year: 3,500 × 0.229 = about €800 a year, or €67 a month · an electrically heated detached house using 18,000 kWh: 18,000 × 0.141 = about €2,540 a year, or €212 a month.',
          'The price is a national average. Lapland’s heating season is longer than the south’s, so the same house burns more kilowatt-hours here; ask the previous tenant or the landlord for last year’s consumption, it is the best estimate you will get.',
        ],
      },
      {
        id: 'getting-around',
        kicker: 'Getting around',
        h2: 'This is the line that is bigger in Lapland.',
        paras: [
          '95E10 petrol averaged €1.93 a litre across Finland in March 2026 and diesel €2.08 (Statistics Finland). Distances from the LaplandVibes driving routes: Kemi–Rovaniemi 118 km, Rovaniemi–Ylläs 175 km, Sodankylä–Saariselkä 130 km.',
          '<strong>Example:</strong> a 40 km daily commute, 22 working days, 7 l/100 km: 880 km × 0.07 l/km × €1.93 = about €119 a month in petrol. In central Rovaniemi you can live without a car; in a fell village the car is part of the rent even if the lease does not say so.',
        ],
      },
      {
        id: 'housing-allowance',
        kicker: 'Kela housing allowance',
        h2: 'How much of the rent counts.',
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
          foot: 'Kela, general housing allowance 2026. The allowance is at most 70 % of accepted housing costs, and an allowance below €15 is not paid.',
        },
        paras: [
          '<strong>Example:</strong> living alone in Rovaniemi on a rent of €600. At most €447 counts, and the allowance is at most 70 % of that, so €313 a month (447 × 0.70) before income reduces it through the basic deductible. Kela’s calculator applies your own income.',
        ],
      },
      {
        id: 'children',
        kicker: 'Children',
        h2: 'Daycare by income, school for free.',
        bullets: [
          'From 1 August 2026 the highest early childhood education fee is €335 a month per child, the lowest charged €32, and the second child pays at most €134 (Association of Finnish Municipalities). The fee follows family income, so on a low income it can be zero.',
          'Pre-primary and basic education are free, learning materials and school meals included (Basic Education Act, section 31). For a school journey over five kilometres the municipality arranges transport (section 32).',
        ],
      },
      {
        id: 'summary',
        kicker: 'Summary',
        h2: 'What is cheaper, what is dearer.',
        band: true,
        cards: [
          {
            title: 'Cheaper: rent',
            body: 'Lapland’s average rent is €13.10 per m² against €15.94 nationally (Statistics Finland 2026Q2). Rovaniemi at €14.55 sits between the two.',
          },
          {
            title: 'Dearer: getting around and heating',
            body: 'Hundred-kilometre distances and a long heating season. The price of a kilowatt-hour and a litre is the same as in the south; the quantity is not.',
          },
          {
            title: 'The same: daycare and school',
            body: 'Early childhood education fees and free schooling are national. For a family with children the biggest saving in Lapland is the rent.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Is Rovaniemi an expensive city to live in?',
        a: 'Not by rents: the average €14.55 per m² is below the national €15.94 (Statistics Finland 2026Q2). In studios the gap is small (18.66 against 20.46), and in new tenancies a Rovaniemi studio costs €21.17 per m², roughly the national level.',
      },
      {
        q: 'How much does a single person need per month in Rovaniemi?',
        a: 'We only calculate what has a source: a 30 m² studio about €560 a month (18.66 × 30) and electricity at 1,800 kWh a year about €41 a month (1,800 × 0.270 / 12). Food, internet, insurance and transport come on top according to your own habits.',
      },
      {
        q: 'Can I get housing allowance in Lapland?',
        a: 'On the same terms as anywhere in Finland. In Rovaniemi a single-person household’s housing costs count up to €447 a month, in other Lapland municipalities up to €394, and the allowance is at most 70 % of that (Kela 2026).',
      },
    ],
    sources: pickSources('en', SOURCES),
  },
};
