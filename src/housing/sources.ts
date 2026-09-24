import type { HomeLang, HousingLang, Source } from './types';

/**
 * Nimetyt lähteet. Jokainen luku asumissivuilla osoittaa yhteen näistä
 * (numeroportti). Päivitä `label`in päivämäärä, kun luku päivitetään.
 */
type SourceDef = Record<HousingLang, string> & { url: string };

const DEFS = {
  tkVuokrat: {
    fi: 'Tilastokeskus: Vuokrat, vapaarahoitteiset vuokra-asunnot, keskineliövuokra 2026Q2 (taulukko 15fa, luettu 17.9.2026)',
    en: 'Statistics Finland: Rents of dwellings, free-market rental flats, average rent per m² 2026Q2 (table 15fa, read 17 Sep 2026)',
    url: 'https://pxdata.stat.fi/PxWeb/pxweb/fi/StatFin/StatFin__asvu/15fa.px/',
  },
  tkVaesto: {
    fi: 'Tilastokeskus: Väestörakenne, väestö 31.12.2025 kunnittain (taulukko 11ra)',
    en: 'Statistics Finland: Population structure, population on 31 Dec 2025 by municipality (table 11ra)',
    url: 'https://pxdata.stat.fi/PxWeb/pxweb/fi/StatFin/StatFin__vaerak/11ra.px/',
  },
  tkSahko: {
    fi: 'Tilastokeskus: Sähkön hinta kuluttajatyypeittäin, kokonaishinta maaliskuu 2026 (taulukko 13rb)',
    en: 'Statistics Finland: Price of electricity by type of consumer, total price March 2026 (table 13rb)',
    url: 'https://pxdata.stat.fi/PxWeb/pxweb/fi/StatFin/StatFin__ehi/13rb.px/',
  },
  tkPolttoaine: {
    fi: 'Tilastokeskus: Polttonesteiden kuluttajahinnat, maaliskuu 2026 (taulukko 12ge)',
    en: 'Statistics Finland: Consumer prices of liquid fuels, March 2026 (table 12ge)',
    url: 'https://pxdata.stat.fi/PxWeb/pxweb/fi/StatFin/StatFin__ehi/12ge.px/',
  },
  kela: {
    fi: 'Kela: Yleinen asumistuki, enimmäisasumismenot ja kuntaryhmät 2026',
    en: 'Kela (Social Insurance Institution): General housing allowance, maximum housing costs and municipality groups 2026',
    url: 'https://www.kela.fi/miten-tulot-ja-menot-vaikuttavat',
  },
  ahvl: {
    fi: 'Laki asuinhuoneiston vuokrauksesta (481/1995), 8 § vakuus ja 52 § irtisanomisajat',
    en: 'Act on Residential Leases (481/1995), section 8 on deposits and section 52 on notice periods',
    url: 'https://www.finlex.fi/fi/laki/ajantasa/1995/19950481',
  },
  ahvl531: {
    fi: 'Laki asuinhuoneiston vuokrauksesta (481/1995), ajantasainen teksti muutoksineen 531/2026 (voimaan 1.10.2026): soveltamisala, määräaikainen sopimus, vakuus; luettu 23.9.2026',
    en: 'Act on Residential Leases (481/1995), consolidated text incl. amendment 531/2026 (in force 1 Oct 2026): scope, fixed-term leases, deposit; read 23 Sep 2026',
    url: 'https://www.finlex.fi/fi/lainsaadanto/1995/481',
  },
  kuluttajaliittoVuokra: {
    fi: 'Kuluttajaliitto: Vuokra-asunnon irtisanominen ja pois muuttaminen',
    en: 'Finnish Consumers’ Union (Kuluttajaliitto): Ending a lease and moving out',
    url: 'https://www.kuluttajaliitto.fi/fis/materiaalit/vuokra-asunnon-irtisanominen-ja-pois-muuttaminen/',
  },
  dvvTilapainen: {
    fi: 'Digi- ja väestötietovirasto: Usein kysyttyä Suomessa muuttamisesta (tilapäinen muutto, kolmen kuukauden sääntö)',
    en: 'Digital and Population Data Services Agency (DVV): FAQ on moving in Finland (temporary moves, the three-month rule)',
    url: 'https://dvv.fi/usein-kysyttya-muutoista',
  },
  rakli: {
    fi: 'Rakli: Laki asuinhuoneiston vuokrauksesta uudistuu 1.10.2026: vakuuden 14 päivän palautusaika ja irtisanomisajat',
    en: 'Rakli (Finnish property owners’ association): Residential Leases Act reform on 1 Oct 2026: 14-day deposit return and notice periods',
    url: 'https://www.rakli.fi/rakli-tiedottaa/laki-asuinhuoneiston-vuokrauksesta-uudistuu-mika-muuttuu/',
  },
  traficom: {
    fi: 'Traficom: Auton kesä- ja talvirenkaat (talvirengasaika, nastat, urasyvyys)',
    en: 'Traficom (Finnish Transport and Communications Agency): Summer and winter tyres',
    url: 'https://traficom.fi/fi/liikenne/autoilijat/vinkkeja-liikenteeseen/auton-kesa-ja-talvirenkaat',
  },
  dvv: {
    fi: 'Digi- ja väestötietovirasto: Muuttoilmoitus',
    en: 'Digital and Population Data Services Agency (DVV): Notification of change of address',
    url: 'https://dvv.fi/muutot_uusi',
  },
  kuntaliitto: {
    fi: 'Kuntaliitto: Muutoksia varhaiskasvatuksen asiakasmaksuihin 1.8.2026 alkaen',
    en: 'Association of Finnish Municipalities: Early childhood education fees from 1 Aug 2026',
    url: 'https://www.kuntaliitto.fi/yleiskirjeet/2025/muutoksia-varhaiskasvatuksen-asiakasmaksuihin-182026-alkaen',
  },
  perusopetuslaki: {
    fi: 'Perusopetuslaki (628/1998): opetuksen maksuttomuus 31 § ja koulumatkat 32 §',
    en: 'Basic Education Act (628/1998): free education (section 31) and school transport (section 32)',
    url: 'https://www.finlex.fi/fi/laki/ajantasa/1998/19980628',
  },
  fmi: {
    fi: 'Ilmatieteen laitos: Tähtitieteelliset vuodenajat (kaamos ja yötön yö)',
    en: 'Finnish Meteorological Institute: Astronomical seasons (polar night and midnight sun)',
    url: 'https://www.ilmatieteenlaitos.fi/tahtitieteelliset-vuodenajat',
  },
  ounasvaara: {
    fi: 'Ounasvaara: Rinteet ja ladut (noin 100 km latuja, joista 50 km valaistu; luettu 23.9.2026)',
    en: 'Ounasvaara: Slopes and trails (about 100 km of ski trails, 50 km of them lit; read 23 Sep 2026)',
    url: 'https://ounasvaara.fi/en/slopes/',
  },
  foreca: {
    fi: 'Foreca, Sääpedia: Kaamos, aika jolloin aurinko ei nouse',
    en: 'Foreca weather encyclopaedia: Polar night in Finland',
    url: 'https://www.foreca.fi/s%C3%A4%C3%A4pedia/rcx1rpir',
  },
  yle2017: {
    fi: 'Yle 25.10.2017: Lapin turismilla menee hyvin, mutta kausityöntekijöille ei riitä asuntoja',
    en: 'Yle, 25 Oct 2017: Lapland tourism is booming, but there are not enough homes for seasonal workers',
    url: 'https://yle.fi/a/3-9895965',
  },
  yle2023: {
    fi: 'Yle 25.5.2023: Asuntopula pakottaa tunturikeskusten työntekijät vuokralle vapaa-ajan asuntoihin',
    en: 'Yle, 25 May 2023: Housing shortage pushes resort workers into holiday apartments',
    url: 'https://yle.fi/a/74-20033357',
  },
  yle2025das: {
    fi: 'Yle 27.7.2025: Rovaniemellä asuntopula on edelleen paha – sadat opiskelijat etsivät kattoa pään päälle',
    en: 'Yle, 27 Jul 2025: Rovaniemi’s housing shortage is still severe – hundreds of students looking for a home',
    url: 'https://yle.fi/a/74-20238146',
  },
  lapinKansaDas: {
    fi: 'Lapin Kansa: Kilpajuoksu koteihin käynnissä – DAS:lla on tarjota paikka vain 30 prosentille hakijoista',
    en: 'Lapin Kansa: The race for homes is on – DAS can house only 30 percent of applicants',
    url: 'https://www.lapinkansa.fi/kilpajuoksu-koteihin-kaynnissa-opiskelijat-etsivat/87484',
  },
  yle2026yllas: {
    fi: 'Yle 16.6.2026: Ylläksellä kauppiaat ryhtyivät selättämään asuntopulaa',
    en: 'Yle, 16 Jun 2026: At Ylläs, shopkeepers set out to beat the housing shortage',
    url: 'https://yle.fi/a/74-20231905',
  },
  kesko2026: {
    fi: 'Kesko 17.6.2026: K-Market Jounin Kaupan kauppiaat rakennuttavat kolme rivitaloa työntekijöilleen',
    en: 'Kesko, 17 Jun 2026: K-Market Jounin Kauppa’s owners build three row houses for their staff',
    url: 'https://www.kesko.fi/media/uutiset-ja-tiedotteet/uutiset/2026/lapin-asuntopulaa-ratkomassa-k-market-jounin-kaupan-kauppiaat-rakennuttavat-kolme-rivitaloa-tyontekijoilleen/',
  },
  yle2026rovaniemi: {
    fi: 'Yle 9.3.2026: Rovaniemen asuntopula synnytti luovan ratkaisun – sesonkityöntekijät asuivat pomonsa luona',
    en: 'Yle, 9 Mar 2026: Rovaniemi’s housing shortage produced a creative fix – seasonal workers lived with their boss',
    url: 'https://yle.fi/a/74-20213937',
  },
  rovaniemi: {
    fi: 'Rovaniemen kaupunki: Asuminen (vuokranantajat ja hakupalvelut)',
    en: 'City of Rovaniemi: Housing (landlords and search services)',
    url: 'https://www.rovaniemi.fi/Asuminen-ja-ymparisto/Asuminen',
  },
  das: {
    fi: 'Domus Arctica -säätiö (DAS): Tietoa hakemisesta',
    en: 'Domus Arctica Foundation (DAS): Applying for student housing',
    url: 'https://www.das.fi/en/apply/applying-info',
  },
  kittila: {
    fi: 'Kittilän kunta: Vuokra-asunnot (Kittilän Vuokratalot Oy)',
    en: 'Municipality of Kittilä: Rental housing (Kittilän Vuokratalot Oy)',
    url: 'https://kittila.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot',
  },
  kemi: {
    fi: 'Kemin kaupunki: Vuokra-asunnot (Kiinteistö Oy Itätuuli)',
    en: 'City of Kemi: Rental housing (Kiinteistö Oy Itätuuli)',
    url: 'https://www.kemi.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
  },
  itatuuli: {
    fi: 'Kiinteistö Oy Itätuuli: asuntohakemus (voimassa 4 kk) ja vuokraus 0 euron vakuudella (luettu 23.9.2026)',
    en: 'Kiinteistö Oy Itätuuli: housing application (valid 4 months) and lets with a €0 deposit (read 23 Sep 2026)',
    url: 'https://kiinteistoitatuuli.fi/asuntohakemus/',
  },
  keminmaaVuokra: {
    fi: 'Keminmaan Vuokra-asunnot Oy: Asunnonhaku (hakemus voimassa 3 kk, vakuus 1 kk:n vuokra) ja kohdesivut (luettu 23.9.2026)',
    en: 'Keminmaan Vuokra-asunnot Oy: How to apply (application valid 3 months, deposit one month’s rent) and property pages (read 23 Sep 2026)',
    url: 'https://www.keminmaanvuokra-asunnot.fi/asunnonhaku.html',
  },
  keminmaa: {
    fi: 'Keminmaan kunta: Keminmaan Vuokra-asunnot Oy',
    en: 'Municipality of Keminmaa: Keminmaan Vuokra-asunnot Oy',
    url: 'https://www.keminmaa.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
  },
  tornio: {
    fi: 'Tornion kaupunki: Vuokra-asunnot (Tornion Krunni Oy)',
    en: 'City of Tornio: Rental housing (Tornion Krunni Oy)',
    url: 'https://www.tornio.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
  },
  sodankyla: {
    fi: 'Sodankylän kunta: Kunnan vuokra-asunnot (Asentopuulaaki Oy)',
    en: 'Municipality of Sodankylä: Municipal rental housing (Asentopuulaaki Oy)',
    url: 'https://www.sodankyla.fi/en/environment/municipal-rental-housing/',
  },
  tkVuokratPostinumero: {
    fi: 'Tilastokeskus: Vapaarahoitteisten vuokra-asuntojen keskineliövuokrat postinumeroalueittain 2015Q1–2025Q4 (taulukko 13eb, arkisto, luettu 23.9.2026)',
    en: 'Statistics Finland: Average rents of free-market rental flats by postal code area 2015Q1–2025Q4 (table 13eb, archive, read 23 Sep 2026)',
    url: 'https://pxdata.stat.fi/PxWeb/pxweb/fi/StatFin_Passiivi/StatFin_Passiivi__asvu/statfinpas_asvu_pxt_13eb_2025q4.px/',
  },
  tkAvainluvut: {
    fi: 'Tilastokeskus: Kuntien avainluvut (työttömien osuus työvoimasta 2024)',
    en: 'Statistics Finland: Key figures on municipalities (unemployed share of the labour force, 2024)',
    url: 'https://pxdata.stat.fi/PxWeb/pxweb/fi/Kuntien_avainluvut/Kuntien_avainluvut__uusin/kuntien_avainluvut_viimeisin.px/',
  },
  kemijarvi: {
    fi: 'Kemijärven kaupunki: Kemijärven kaupungin vuokratalot (560 vuokra-asuntoa)',
    en: 'City of Kemijärvi: The city’s rental housing (560 flats)',
    url: 'https://kemijarvi.fi/asuminen-ja-ymparisto/asuminen/kemijarven-kaupungin-vuokratalot/',
  },
  kemijarviHaku: {
    fi: 'Kemijärven kaupunki: Asunnon hakeminen (hakemus voimassa neljä kuukautta)',
    en: 'City of Kemijärvi: Applying for a flat (application valid for four months)',
    url: 'https://kemijarvi.fi/asuminen-ja-ymparisto/asuminen/kemijarven-kaupungin-vuokratalot/asunnon-hakeminen/',
  },
  kemijarviVuostimo: {
    fi: 'Kemijärven kaupunki: Vuokratalokohteet, Vuostimo (rivitalot, 14 km Pyhätunturille)',
    en: 'City of Kemijärvi: Rental properties, Vuostimo (row houses, 14 km from Pyhätunturi)',
    url: 'https://kemijarvi.fi/asuminen-ja-ymparisto/asuminen/kemijarven-kaupungin-vuokratalot/vuokratalokohteet/vuostimo/',
  },
  kemijarviToihin: {
    fi: 'Kemijärven kaupunki: Töihin Kemijärvelle',
    en: 'City of Kemijärvi: Working in Kemijärvi',
    url: 'https://kemijarvi.fi/tyo-ja-yrittaminen/toihin-kemijarvelle/',
  },
  kemijarviTietoa: {
    fi: 'Kemijärven kaupunki: Tietoa Kemijärvestä',
    en: 'City of Kemijärvi: About Kemijärvi',
    url: 'https://kemijarvi.fi/kaupunki-ja-hallinto/tietoa-kemijarvesta/',
  },
  kemijarviTalousarvio: {
    fi: 'Kemijärven kaupunki: Talousarvio 2026 ja taloussuunnitelma 2027–2028 (valtuusto 16.12.2025): vuokrankorotukset, käyttöastetavoitteet, työnantajat',
    en: 'City of Kemijärvi: Budget 2026 and financial plan 2027–2028 (council, 16 Dec 2025): rent increases, occupancy targets, employers',
    url: 'https://kemijarvi.fi/wp-content/uploads/2026/05/Kemijarven-kaupungin-talousarvio-2026-ja-taloussuunnitelma-2027-2028.pdf',
  },
  redu: {
    fi: 'Lapin koulutuskeskus REDU: Asuminen (opiskelija-asuntolat Rovaniemellä, Kemijärvellä, Kittilässä ja Sodankylässä)',
    en: 'Lapland Education Centre REDU: Housing (student dormitories in Rovaniemi, Kemijärvi, Kittilä and Sodankylä)',
    url: 'https://redu.fi/fi/opiskelijalle/asuminen',
  },
  osrm: {
    fi: 'OpenStreetMap: ajomatkat OSRM-reitittimellä (laskettu 23.9.2026)',
    en: 'OpenStreetMap: driving distances with the OSRM router (calculated 23 Sep 2026)',
    url: 'https://www.openstreetmap.org/',
  },
  asentopuulaaki: {
    fi: 'Asentopuulaaki Oy: Asunnot, kohdelista ja huoneistojen vuokrat (luettu 23.9.2026)',
    en: 'Asentopuulaaki Oy: Properties, with the rent of every flat (read 23 Sep 2026)',
    url: 'https://www.asentopuulaaki.fi/asunnot/',
  },
  asentopuulaakiHaku: {
    fi: 'Asentopuulaaki Oy: Asunnon hakeminen',
    en: 'Asentopuulaaki Oy: Applying for a flat',
    url: 'https://www.asentopuulaaki.fi/asunnon-hakeminen/',
  },
  asentopuulaakiVapaat: {
    fi: 'Asentopuulaaki Oy: Asuntohaku, vapaat ja vapautuvat asunnot (luettu 23.9.2026)',
    en: 'Asentopuulaaki Oy: Flat search, free and soon-free flats (read 23 Sep 2026)',
    url: 'https://www.asentopuulaaki.fi/asuntohaku/',
  },
  asentopuulaakiMuutto: {
    fi: 'Asentopuulaaki Oy: Muuttaminen (irtisanomisaika ja vakuuden palautus)',
    en: 'Asentopuulaaki Oy: Moving out (notice period and deposit refund)',
    url: 'https://www.asentopuulaaki.fi/muuttaminen/',
  },
  sodankyla2025: {
    fi: 'Sodankylän kunta 2.7.2025: Sodankylään valmistui 36 uutta asuntoa – asuntotarjonta kasvaa ja monipuolistuu',
    en: 'Municipality of Sodankylä, 2 Jul 2025: 36 new flats completed in Sodankylä as the housing supply grows',
    url: 'https://www.sodankyla.fi/ajankohtaista/sodankylaan-valmistui-36-uutta-asuntoa-asuntotarjonta-kasvaa-ja-monipuolistuu/',
  },
  sodankylaAsuntola: {
    fi: 'Sodankylän kunta 5.3.2026: Sodankylän kunta perustaa opiskelija-asuntolan',
    en: 'Municipality of Sodankylä, 5 Mar 2026: The municipality sets up a student dormitory',
    url: 'https://www.sodankyla.fi/ajankohtaista/sodankylan-kunta-perustaa-opiskelija-asuntolan/',
  },
  sodankylaOpintolaina: {
    fi: 'Sodankylän kunta: Alueellinen opintolainan hyvityskokeilu',
    en: 'Municipality of Sodankylä: Regional student loan compensation pilot',
    url: 'https://www.sodankyla.fi/tyo-ja-elinkeinot/alueellinen-opintolainan-hyvityskokeilu/',
  },
  sodankylaMuuttajalle: {
    fi: 'Sodankylän kunta: Muuttajalle',
    en: 'Municipality of Sodankylä: For newcomers',
    url: 'https://www.sodankyla.fi/kunta-ja-paatoksenteko/tietoa-sodankylasta/muuttajalle/',
  },
  yle2025sodankyla: {
    fi: 'Yle 11.9.2025: Harvinainen ratkaisu asuntopulaan: sodankyläläiset saavat uusia omakotitaloja, joihin ei tarvitse lainaa',
    en: 'Yle, 11 Sep 2025: A rare fix for the housing shortage: Sodankylä residents get new houses without a mortgage',
    url: 'https://yle.fi/a/74-20173639',
  },
  yle2026kevitsa: {
    fi: 'Yle 26.5.2026: Toimitusjohtaja Tom Söderman: Kevitsan miljardi-investointi perutaan, kaivos suljetaan, 77 työpaikkaa lähtee jo nyt',
    en: 'Yle, 26 May 2026: Kevitsa’s billion-euro investment is cancelled, the mine will close, and 77 jobs go now',
    url: 'https://yle.fi/a/74-20227970',
  },
  yle2026kasarmi: {
    fi: 'Yle 2.4.2026: Sodankylän uutta jättikasarmia aletaan rakentaa kesällä',
    en: 'Yle, 2 Apr 2026: Construction of Sodankylä’s new giant barracks starts in the summer',
    url: 'https://yle.fi/a/74-20218630',
  },
  yle2026sakatti: {
    fi: 'Yle 18.6.2026: Luonnonsuojeluliiton Lapin piiri valitti Sakatti-päätöksestä oikeuteen',
    en: 'Yle, 18 Jun 2026: The Lapland district of the Finnish Association for Nature Conservation appeals the Sakatti decision',
    url: 'https://yle.fi/a/74-20232387',
  },
  yle2026opintolaina: {
    fi: 'Yle 1.9.2026: Opintolainan hyvitystä voi hakea kolmessa Lapin kunnassa',
    en: 'Yle, 1 Sep 2026: Student loan compensation can be claimed in three Lapland municipalities',
    url: 'https://yle.fi/a/74-20243960',
  },
  maavoimat: {
    fi: 'Maavoimat: Jääkäriprikaati, tietoa meistä',
    en: 'Finnish Army: Jaeger Brigade, about us',
    url: 'https://maavoimat.fi/jaakariprikaati/tietoa-meista',
  },
  angloSakatti: {
    fi: 'Anglo American Finland: Tietoa Sakatista',
    en: 'Anglo American Finland: About Sakatti',
    url: 'https://finland.angloamerican.com/fi-fi/tietoa-sakatista',
  },
  inari: {
    fi: 'Inarin kunta: Asuminen Inarin kunnassa (Inarin Vuokra-asunnot Oy ja yksityiset vuokranantajat)',
    en: 'Municipality of Inari: Housing in Inari (Inarin Vuokra-asunnot Oy and private landlords)',
    url: 'https://www.inari.fi/fi/palvelut/asuminen.html',
  },
  lvDrive: {
    fi: 'LaplandVibes: Ajoreitit Lappiin (osuuksien pituudet)',
    en: 'LaplandVibes: Driving routes to Lapland (leg distances)',
    url: 'https://laplandvibes.com/drive-to-lapland/',
  },
  laplandwork: {
    fi: 'LaplandWork: Muutto Suomeen: luvat, henkilötunnus, verokortti, pankkitili',
    en: 'LaplandWork: Moving to Finland: permits, personal identity code, tax card, bank account',
    url: 'https://laplandwork.com/moving-to-finland',
  },
  lapha: {
    fi: 'Lapin hyvinvointialue (Lapha): sosiaali- ja terveyspalvelut',
    en: 'Wellbeing services county of Lapland (Lapha): health and social services',
    url: 'https://lapha.fi/',
  },
} satisfies Record<string, SourceDef>;

export type SourceId = keyof typeof DEFS;

/**
 * Lähdenimet ovat fi + en. Ranskan- ja hollanninkieliselle lukijalle näytetään
 * ENGLANNINKIELINEN nimi, ei käännöstä: nimi on virallisen julkaisun nimi
 * (Tilastokeskuksen taulukko 15fa, Kelan ohje, Finlexin laki), ja linkin takana
 * oleva dokumentti on suomeksi tai englanniksi. Käännetty nimi ei auttaisi
 * lukijaa löytämään sitä.
 */
export function pickSources(lang: HomeLang, ids: readonly SourceId[]): Source[] {
  const l: HousingLang = lang === 'fi' ? 'fi' : 'en';
  return ids.map((id) => ({ id, label: DEFS[id][l], url: DEFS[id].url }));
}
