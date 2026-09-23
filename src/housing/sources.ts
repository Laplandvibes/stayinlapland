import type { HousingLang, Source } from './types';

/**
 * Nimetyt lähteet. Jokainen luku asumissivuilla osoittaa yhteen näistä
 * (numeroportti). Päivitä `label`in päivämäärä, kun luku päivitetään.
 */
type SourceDef = Record<HousingLang, string> & { url: string };

const DEFS = {
  tkVuokrat: {
    fi: 'Tilastokeskus: Vuokrat, vapaarahoitteiset vuokra-asunnot, keskineliövuokra 2026Q2 (taulukko 15fa, luettu 17.9.2026)',
    en: 'Statistics Finland: Rents of dwellings, free-market rental flats, average rent per m² 2026Q2 (table 15fa, read 17 Sep 2026)',
    url: 'https://pxdata.stat.fi/PxWeb/pxweb/fi/StatFin/StatFin__asvu/statfin_asvu_pxt_15fa.px/',
  },
  tkVaesto: {
    fi: 'Tilastokeskus: Väestörakenne, väestö 31.12.2025 kunnittain (taulukko 11ra)',
    en: 'Statistics Finland: Population structure, population on 31 Dec 2025 by municipality (table 11ra)',
    url: 'https://pxdata.stat.fi/PxWeb/pxweb/fi/StatFin/StatFin__vaerak/statfin_vaerak_pxt_11ra.px/',
  },
  tkSahko: {
    fi: 'Tilastokeskus: Sähkön hinta kuluttajatyypeittäin, kokonaishinta maaliskuu 2026 (taulukko 13rb)',
    en: 'Statistics Finland: Price of electricity by type of consumer, total price March 2026 (table 13rb)',
    url: 'https://pxdata.stat.fi/PxWeb/pxweb/fi/StatFin/StatFin__ehi/statfin_ehi_pxt_13rb.px/',
  },
  tkPolttoaine: {
    fi: 'Tilastokeskus: Polttonesteiden kuluttajahinnat, maaliskuu 2026 (taulukko 12ge)',
    en: 'Statistics Finland: Consumer prices of liquid fuels, March 2026 (table 12ge)',
    url: 'https://pxdata.stat.fi/PxWeb/pxweb/fi/StatFin/StatFin__ehi/statfin_ehi_pxt_12ge.px/',
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

export function pickSources(lang: HousingLang, ids: readonly SourceId[]): Source[] {
  return ids.map((id) => ({ id, label: DEFS[id][lang], url: DEFS[id].url }));
}
