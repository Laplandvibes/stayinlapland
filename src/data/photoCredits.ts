/**
 * Avoimella lisenssillä käytettyjen kuvien tekijätiedot JA lisenssikuitti.
 *
 * Vesa 18.9.2026: *"tottakai on lupa kunhan kuva vastaa itse aihetta"* (lupa
 * ladata Wikimedia Commonsista, kun omaa kuvaa ei ole). Heinäkuun 2026
 * ajomatkalla ei käyty Sodankylän kirkonkylässä, Ivalossa eikä Saariselällä
 * (GPS-haku 1 145 puhelinkuvasta, leveys ≥ 68,2°: 0 osumaa), joten niiden
 * paikkakuntakortit ja Ivalo–Inari-sivun hero tulevat Commonsista.
 *
 * Jokainen kuva tarkistettu 18.9.2026:
 *   - Paikka: Commonsin kuvaus + luokka + EXIF-aika. Kuva näyttää juuri sen
 *     paikan, jonka kortti nimeää (Vesan ehto).
 *   - Lisenssi: ei NC eikä ND. CC BY / CC BY-SA sallivat kaupallisen käytön.
 *   - Ei tunnistettavia ihmisiä. Rekisterikilvet zoomattu julkaistavassa
 *     koossa: Sodankylän kuvassa kaksi kilpeä sumennettu (CC0, muokkaus
 *     sallittu ilman velvoitteita); muissa ei näkyvää kilpeä.
 *   - Ei käytössä muilla LV-sivustoilla (laplandwellness photoCredits.ts ja
 *     _reissu-2026-07/KUVA-INVENTAARIO.md §6b tarkistettu). Kirjattu §6b:hen.
 *
 * 🔴 CC BY- ja CC BY-SA -kuvia EI rajata eikä muokata: tiedosto on alkuperäinen
 * teos pienennettynä ja WebP-muotoon muunnettuna. Rajaus tapahtuu vain CSS:n
 * object-coverilla. Rajattu tai muokattu tiedosto olisi muokattu teos, joka
 * pitäisi merkitä ja julkaista samalla lisenssillä (BY-SA).
 *
 * 🔴 Tekijätieto piirtyy kuvan päälle automaattisesti kuvan polun perusteella
 * (`creditFor(src)`), ei kutsupaikassa: sama tiedosto voi päätyä usealle
 * pinnalle, ja yhdestä unohtunut merkintä olisi lisenssirikkomus juuri siellä.
 * Linkitettäviä kortteja ei voi sisäkkäistää linkkiin, joten kortin päällä on
 * teksti (tekijä + lisenssi) ja sivun lopussa lista linkkeineen (kuvan sivu +
 * lisenssi). Hero-kuvassa merkintä on linkki.
 *
 * Kuitti: lähde, tunniste, lisenssi, päivä, hinta 0 €.
 */
import type { Lang } from '../i18n/useLang';

/** Paikan nimi kielittäin; puuttuva kieli käyttää englantia. */
export type PlaceNames = { en: string } & Partial<Record<Lang, string>>;

export type PhotoCredit = {
  /** Tekijä siinä muodossa kuin hän on sen Commonsiin merkinnyt (lyhennettynä). */
  author: string;
  license: 'CC BY 2.0' | 'CC BY 3.0' | 'CC BY-SA 2.0' | 'CC BY-SA 3.0' | 'CC BY-SA 4.0' | 'CC0 1.0';
  licenseUrl: string;
  /** Commonsin tiedostosivu: kuvaus, tekijä ja lisenssi alkuperäisessä muodossa. */
  sourceUrl: string;
  /** Tiedoston nimi Commonsissa. */
  title: string;
  /** Kuvauspäivä Commonsin tai EXIFin mukaan. */
  taken: string;
  /** Mitä kuvalle tehtiin. */
  changes: string;
  fetched: string;
  cost: '0 €';
  /** "Kuvassa: …" -rivi kuvan päällä, vain kun paikka on varmistettu Commonsin GPS:stä, luokista tai kuvauksesta. */
  place?: PlaceNames;
};

export const PHOTO_CREDITS: Record<string, PhotoCredit> = {
  '/images/housing-sodankyla-jaamerentie.webp': {
    author: 'Leonhard Lenz',
    license: 'CC0 1.0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:J%C3%A4%C3%A4merentie_Sodankyl%C3%A4_2022-09-14_05.jpg',
    title: 'Jäämerentie Sodankylä 2022-09-14 05.jpg',
    taken: '2022-09-14 14:29',
    changes: 'Pienennetty 8384 → 1200 px, WebP; kaksi rekisterikilpeä sumennettu (CC0 sallii).',
    fetched: '2026-09-18',
    cost: '0 €',
  },
  '/images/housing-ivalo-joki.webp': {
    author: 'Nemo bis',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:2018-07_Ivalo_088.jpg',
    title: '2018-07 Ivalo 088.jpg',
    taken: '2018-07-27 22:09',
    changes: 'Vain pienennys 4000 → 1200 px ja WebP-muunnos, ei rajausta.',
    fetched: '2026-09-18',
    cost: '0 €',
  },
  '/images/housing-saariselka-hirsitalot.webp': {
    author: 'Ninara',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Saariselk%C3%A4,_Finland_(15620908878).jpg',
    title: 'Saariselkä, Finland (15620908878).jpg',
    taken: '2014-11-13',
    changes: 'Vain pienennys 5142 → 1200 px ja WebP-muunnos, ei rajausta.',
    fetched: '2026-09-18',
    cost: '0 €',
  },
  '/images/housing-ivalo-ilmakuva.webp': {
    author: 'Markus Säynevirta',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ivalo_(Feb_2017)_4.jpg',
    title: 'Ivalo (Feb 2017) 4.jpg',
    taken: '2017-02-22 12:38',
    changes: 'Vain pienennys 4000 → 1920 px ja WebP-muunnos, ei rajausta.',
    fetched: '2026-09-18',
    cost: '0 €',
  },
  // ── 23.9.2026: Vesan palaute ("kuvat ei ole parhaat mahdolliset", "käytät liikaa samoja kuvia").
  // Tarkistettu Commonsin rajapinnasta 23.9.2026 (lisenssi, tekijä, päivä, koko). Vain pienennys.
  '/images/housing-rovaniemi-hero-talvikatu.webp': {
    author: 'JIP',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lapinrinne_in_January.jpg',
    title: 'Lapinrinne in January.jpg',
    taken: '2021-01-16',
    changes: 'Vain pienennys 4608 → 1920 px ja WebP-muunnos, ei rajausta.',
    fetched: '2026-09-23',
    cost: '0 €',
  },
  '/images/housing-rovaniemi-card-talvikatu.webp': {
    author: 'JIP',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lapinrinne_in_January.jpg',
    title: 'Lapinrinne in January.jpg',
    taken: '2021-01-16',
    changes: 'Vain pienennys 4608 → 1000 px ja WebP-muunnos, ei rajausta.',
    fetched: '2026-09-23',
    cost: '0 €',
  },
  '/images/housing-seasonal-card-yllas-tunturi.webp': {
    author: 'Ximonic (Simo Räsänen)',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:%C3%84k%C3%A4slompolo_and_Yll%C3%A4s_in_Kolari,_Lapland,_Finland,_2018_September.jpg',
    title: 'Äkäslompolo and Ylläs in Kolari, Lapland, Finland, 2018 September.jpg',
    taken: '2018-09-19',
    changes: 'Vain pienennys 2800 → 1200 px ja WebP-muunnos, ei rajausta.',
    fetched: '2026-09-23',
    cost: '0 €',
  },
  // ── 23.9.2026 ilta: viisi saman päivän Commons-kuvaa oli jo laplandactivitiesillä / laplandweddingsillä
  // (käytössä 19.9. alkaen) ⇒ vaihdettu näihin. Tarkistettu verkoston sivustokansioista (grep -r, kaikki
  // koodaukset) ja Commonsin rajapinnasta 23.9.2026. CC BY / BY-SA: vain pienennys, ei rajausta.
  '/images/housing-card-rovaniemi-ounasvaara.webp': {
    author: 'Ninara',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Suutarinkorva_bridges_from_Ounasvaara.jpg',
    title: 'Suutarinkorva bridges from Ounasvaara.jpg',
    taken: '2020-06-04 17:21',
    changes: 'Vain pienennys 4467 → 1000 px ja WebP-muunnos, ei rajausta.',
    fetched: '2026-09-23',
    cost: '0 €',
  },
  '/images/housing-kittila-levi-hero-kyla.webp': {
    author: 'Hansjoerg Eberle',
    license: 'CC BY 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kittil%C3%A4,_Finland_-_panoramio_(58).jpg',
    title: 'Kittilä, Finland - panoramio (58).jpg',
    taken: '2015-11-05',
    changes: 'Vain pienennys 5184 → 1920 px ja WebP-muunnos, ei rajausta. Kuvauspaikka Levitunturin laki (Commonsin koordinaatit 67,8002 N, 24,8126 E).',
    fetched: '2026-09-23',
    cost: '0 €',
  },
  '/images/housing-kittila-levi-card-kyla.webp': {
    author: 'Hansjoerg Eberle',
    license: 'CC BY 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kittil%C3%A4,_Finland_-_panoramio_(58).jpg',
    title: 'Kittilä, Finland - panoramio (58).jpg',
    taken: '2015-11-05',
    changes: 'Vain pienennys 5184 → 1200 px ja WebP-muunnos, ei rajausta.',
    fetched: '2026-09-23',
    cost: '0 €',
  },
  '/images/housing-card-inari-juutuanjoki.webp': {
    author: 'Ximonic (Simo Räsänen)',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Buildings_by_partly_frozen_Juutuanjoki_in_Inari,_Lapland,_Finland,_2018_March.jpg',
    title: 'Buildings by partly frozen Juutuanjoki in Inari, Lapland, Finland, 2018 March.jpg',
    taken: '2018-03-24',
    changes: 'Vain pienennys 3600 → 1000 px ja WebP-muunnos, ei rajausta.',
    fetched: '2026-09-23',
    cost: '0 €',
  },
  // Sodankylän paikkakuntasivun hero 23.9.2026. Omaa kuvaa ei ole (heinäkuun ajomatka ei käynyt Sodankylässä).
  // Commonsin oma 1920 px -renderöinti, vain WebP-muunnos, ei rajausta. Ei muilla LV-sivustoilla (grep, 23.9.2026).
  '/images/housing-sodankyla-hero-vanha-kirkko.webp': {
    author: 'EerikLehto',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:The_old_church_of_Sodankyl%C3%A4.jpg',
    title: 'The old church of Sodankylä.jpg',
    taken: '2019-08-10',
    changes: 'Vain pienennys 5400 → 1920 px (Commonsin oma renderöinti) ja WebP-muunnos, ei rajausta.',
    fetched: '2026-09-23',
    cost: '0 €',
  },
  '/images/housing-arki-keskiyo-hetta.webp': {
    author: 'Jussi Heikkilä',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ounasj%C3%A4rvi_and_Ounastunturi_in_midnight_sun.jpg',
    title: 'Ounasjärvi and Ounastunturi in midnight sun.jpg',
    taken: '2009-06-21',
    changes: 'Vain pienennys 3648 → 1200 px ja WebP-muunnos, ei rajausta.',
    fetched: '2026-09-23',
    cost: '0 €',
  },
  // ───────────────────────────────────────────────────────────────────────────────────────────────────────────────
  // Kuvavaihto 9.10.2026 (Vesa 4.10.: tekoälykuvat aidoiksi). Kohteiden herot, bandit, etusivun kortit ja kolme
  // majoituskorttia. Tarkistukset per kuva: katsottu isona (aito valokuva, ei tunnistettavia kasvoja, ei luettavia
  // rekisterikilpiä, ei kolmannen osapuolen logoa pääaiheena); paikka vain Commonsin kuvauksesta, GPS:stä tai
  // luokista; verkoston nimi-, tekijä- ja pikselihaku (claim.mjs) + sisarruututarkistus (sibling_check.mjs):
  // ei muulla LV-sivustolla 9.10.2026. Kuvat ovat vain pienennetty, ei rajausta (BY-SA).
  // ───────────────────────────────────────────────────────────────────────────────────────────────────────────────
  '/images/dest-rovaniemi-hero.webp': {
    author: 'Tejasello',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Salmij%C3%A4rvi.jpg',
    title: 'Salmijärvi.jpg',
    taken: '2010-03-04',
    changes: 'Vain pienennys 3264 → 1920 px ja WebP-muunnos, ei rajausta.',
    fetched: '2026-10-09',
    cost: '0 €',
    place: {
      en: 'Salmijärvi, Rovaniemi',
      ja: 'サルミヤルヴィ、ロヴァニエミ',
      ko: '살미예르비, 로바니에미',
      'zh-CN': '萨尔米耶尔维，罗瓦涅米',
    },
  },
  '/images/dest-rovaniemi-card.webp': {
    author: 'Tejasello',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Salmij%C3%A4rvi.jpg',
    title: 'Salmijärvi.jpg',
    taken: '2010-03-04',
    changes: 'Vain pienennys 3264 → 800 px ja WebP-muunnos, ei rajausta.',
    fetched: '2026-10-09',
    cost: '0 €',
    place: {
      en: 'Salmijärvi, Rovaniemi',
      ja: 'サルミヤルヴィ、ロヴァニエミ',
      ko: '살미예르비, 로바니에미',
      'zh-CN': '萨尔米耶尔维，罗瓦涅米',
    },
  },
  '/images/dest-rovaniemi-band.webp': {
    author: 'Pom\' from France',
    license: 'CC BY-SA 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:P%C3%B6ykk%C3%B6l%C3%A4,_Lapland,_Finland_-_Flickr_-_pom%27..jpg',
    title: 'Pöykkölä, Lapland, Finland - Flickr - pom\'..jpg',
    taken: '2014-02-14',
    changes: 'Vain pienennys 3000 → 1600 px ja WebP-muunnos, ei rajausta.',
    fetched: '2026-10-09',
    cost: '0 €',
    place: {
      en: 'Ounasjoki, Rovaniemi',
      ja: 'オウナス川、ロヴァニエミ',
      ko: '오우나스강, 로바니에미',
      'zh-CN': '奥纳斯河，罗瓦涅米',
    },
  },
  '/images/dest-yllas-hero.webp': {
    author: 'Antti Simonen',
    license: 'CC BY 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sunset_In_Winter_Wonderland_(241499495).jpeg',
    title: 'Sunset In Winter Wonderland (241499495).jpeg',
    taken: '2017-12-26',
    changes: 'Vain pienennys 2048 → 1920 px ja WebP-muunnos, ei rajausta.',
    fetched: '2026-10-09',
    cost: '0 €',
    place: {
      en: 'Äkäslompolo, Kolari',
      ja: 'アカスロンポロ、コラリ',
      ko: '아캬슬롬폴로, 콜라리',
      'zh-CN': '阿卡斯隆波洛，科拉里',
    },
  },
  '/images/dest-yllas-card.webp': {
    author: 'Antti Simonen',
    license: 'CC BY 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sunset_In_Winter_Wonderland_(241499495).jpeg',
    title: 'Sunset In Winter Wonderland (241499495).jpeg',
    taken: '2017-12-26',
    changes: 'Vain pienennys 2048 → 800 px ja WebP-muunnos, ei rajausta.',
    fetched: '2026-10-09',
    cost: '0 €',
    place: {
      en: 'Äkäslompolo, Kolari',
      ja: 'アカスロンポロ、コラリ',
      ko: '아캬슬롬폴로, 콜라리',
      'zh-CN': '阿卡斯隆波洛，科拉里',
    },
  },
  '/images/dest-yllas-band.webp': {
    author: 'Markus Trienke',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Misty_Morning_in_Pallas-Yll%C3%A4stunturi_National_Park_(148429695).jpg',
    title: 'Misty Morning in Pallas-Yllästunturi National Park (148429695).jpg',
    taken: '2016-03-24',
    changes: 'Vain pienennys 2048 → 1800 px ja WebP-muunnos, ei rajausta.',
    fetched: '2026-10-09',
    cost: '0 €',
    place: {
      en: 'Pallas-Yllästunturi National Park',
      fi: 'Pallas-Yllästunturin kansallispuisto',
      sv: 'Pallas-Yllästunturi nationalpark',
      de: 'Nationalpark Pallas-Yllästunturi',
      fr: 'parc national de Pallas-Yllästunturi',
      es: 'Parque Nacional Pallas-Yllästunturi',
      it: 'Parco nazionale Pallas-Yllästunturi',
      nl: 'Nationaal Park Pallas-Yllästunturi',
      'pt-BR': 'Parque Nacional Pallas-Yllästunturi',
      ja: 'パッラス＝ユッラストゥントゥリ国立公園',
      ko: '팔라스-윌라스툰투리 국립공원',
      'zh-CN': '帕拉斯-于拉斯通图里国家公园',
    },
  },
  '/images/dest-saariselka-hero.webp': {
    author: 'Ninara',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Y1A9737_Lapland_(15621124787).jpg',
    title: 'Y1A9737 Lapland (15621124787).jpg',
    taken: '2014-11-13',
    changes: 'Vain pienennys 5760 → 1920 px ja WebP-muunnos, ei rajausta.',
    fetched: '2026-10-09',
    cost: '0 €',
    place: {
      en: 'Saariselkä',
      ja: 'サーリセルカ',
      ko: '사리셀카',
      'zh-CN': '萨利色尔卡',
    },
  },
  '/images/dest-saariselka-card.webp': {
    author: 'Ninara',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Y1A9737_Lapland_(15621124787).jpg',
    title: 'Y1A9737 Lapland (15621124787).jpg',
    taken: '2014-11-13',
    changes: 'Vain pienennys 5760 → 800 px ja WebP-muunnos, ei rajausta.',
    fetched: '2026-10-09',
    cost: '0 €',
    place: {
      en: 'Saariselkä',
      ja: 'サーリセルカ',
      ko: '사리셀카',
      'zh-CN': '萨利色尔卡',
    },
  },
  '/images/dest-saariselka-band.webp': {
    author: 'Nicolas Buffler',
    license: 'CC BY-SA 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Laponie_2019_(46344164685).jpg',
    title: 'Laponie 2019 (46344164685).jpg',
    taken: '2019-02-21',
    changes: 'Vain pienennys 3008 → 1800 px ja WebP-muunnos, ei rajausta.',
    fetched: '2026-10-09',
    cost: '0 €',
    place: {
      en: 'Kaunispää, Saariselkä',
      ja: 'カウニスパー、サーリセルカ',
      ko: '카우니스패, 사리셀카',
      'zh-CN': '考尼斯帕，萨利色尔卡',
    },
  },
  '/images/stay-rovaniemi-treehouse.webp': {
    author: 'Leonhard Lenz',
    license: 'CC0 1.0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Arctic_TreeHouse_Hotel_Rovaniemi_2022-09-15_01.jpg',
    title: 'Arctic TreeHouse Hotel Rovaniemi 2022-09-15 01.jpg',
    taken: '2022-09-15',
    changes: 'Vain pienennys 8384 → 960 px ja WebP-muunnos, ei rajausta.',
    fetched: '2026-10-09',
    cost: '0 €',
    place: {
      en: 'Arctic TreeHouse Hotel, Rovaniemi',
      ja: 'Arctic TreeHouse Hotel、ロヴァニエミ',
      ko: 'Arctic TreeHouse Hotel, 로바니에미',
      'zh-CN': 'Arctic TreeHouse Hotel，罗瓦涅米',
    },
  },
  '/images/stay-rovaniemi-chalet.webp': {
    author: 'Pom\' from France',
    license: 'CC BY-SA 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Rovaniemi,_Lapland,_Finland.jpg',
    title: 'Rovaniemi, Lapland, Finland.jpg',
    taken: '2014-02-15',
    changes: 'Vain pienennys 3024 → 960 px ja WebP-muunnos, ei rajausta.',
    fetched: '2026-10-09',
    cost: '0 €',
    place: {
      en: 'Rovaniemi',
      ja: 'ロヴァニエミ',
      ko: '로바니에미',
      'zh-CN': '罗瓦涅米',
    },
  },
  '/images/stay-saariselka-wilderness.webp': {
    author: 'Kospo75',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Vellins%C3%A4rpim%C3%A4ojan_autiotupa.jpg',
    title: 'Vellinsärpimäojan autiotupa.jpg',
    taken: '2014-09-14',
    changes: 'Vain pienennys 3072 → 960 px ja WebP-muunnos, ei rajausta.',
    fetched: '2026-10-09',
    cost: '0 €',
    place: {
      en: 'Vellinsärpimäoja wilderness hut, Saariselkä',
      fi: 'Vellinsärpimäojan autiotupa, Saariselkä',
      de: 'Wildnishütte Vellinsärpimäoja, Saariselkä',
      sv: 'Vellinsärpimäoja vildmarksstuga, Saariselkä',
      fr: 'refuge Vellinsärpimäoja, Saariselkä',
      es: 'refugio Vellinsärpimäoja, Saariselkä',
      it: 'rifugio Vellinsärpimäoja, Saariselkä',
      nl: 'wildernishut Vellinsärpimäoja, Saariselkä',
      'pt-BR': 'refúgio Vellinsärpimäoja, Saariselkä',
      ja: 'Vellinsärpimäoja の無人小屋、サーリセルカ',
      ko: 'Vellinsärpimäoja 무인 오두막, 사리셀카',
      'zh-CN': 'Vellinsärpimäoja 荒野小屋，萨利色尔卡',
    },
  },
};

/**
 * Kuitit kuville, jotka eivät vaadi näkyvää merkintää (Pexels-lisenssi, CC0, public domain).
 * Ei renderöidä sivulle; kuitti on tässä, jotta lähde, lupa ja tehdyt tarkistukset löytyvät
 * koodista (lv_permanent_rules §24: URL, tunnus, päivä, lisenssi).
 *
 * Tarkistukset per kuva 23.9.2026 (Pexels-lisenssi ei tarkista näitä puolestamme):
 *   - katsottu 1600 px:nä: aito valokuva, ei AI-piirteitä; uudet (2024–2026) lataukset erikseen
 *   - ei tunnistettavia kasvoja (pilkkijät ja tunturin laen kävijät siluetteina / pieninä)
 *   - ei vieraita merkkejä eikä luettavia rekisterikilpiä (Kemin kadun auton merkki ja kilpi
 *     sumennettu; Ylläsjärven kuvasta ravintolarakennus rajattu pois)
 *   - paikka: alt-teksti väittää paikan vain, kun se on varmistettu (Kemin kirkko tunnistettava;
 *     muissa alt ei nimeä paikkaa). Hylätty tarkistuksessa: 31126201 ja 31126199 (kuvaajan
 *     tunnisteissa Norja), 34701725 (amerikkalainen pistorasia), 29290472 (keskieurooppalainen
 *     maisema), 30855507 (todennäköisesti Oulu), 24738498 (Bodø).
 * Yksi kuva = yksi sivusto: tunnukset haettu muiden LV-sivustojen src/-kansioista, 0 osumaa.
 */
export const STOCK_RECEIPTS = [
  { file: 'dest-inari-hero.webp + dest-inari-card.webp', source: 'Pexels', id: '30654164', url: 'https://www.pexels.com/photo/30654164/', author: 'Michelle Chadwick', published: '2025-02-10', changes: 'Pienennys 1920/800 px, ei rajausta; paikkaa ei väitetä (alt ei nimeä paikkaa)' },
  { file: 'dest-inari-band.webp', source: 'Pexels', id: '6601867', url: 'https://www.pexels.com/photo/6601867/', author: 'Joni Tuohimaa', published: '2021-01-26', changes: 'Pienennys 1800 px, ei rajausta; paikkaa ei väitetä' },
  { file: 'dest-levi-hero.webp + dest-levi-card.webp', source: 'Pexels', id: '36628122', url: 'https://www.pexels.com/photo/36628122/', author: 'Markku Soini', published: '2026-03-18', changes: 'Pienennys 1920/800 px, ei rajausta; paikkaa ei väitetä' },
  { file: 'dest-levi-band.webp', source: 'Pexels', id: '19744151', url: 'https://www.pexels.com/photo/19744151/', author: 'Teemu Sironen', published: '2024-01-04', changes: 'Pienennys 1800 px, ei rajausta; paikkaa ei väitetä' },
  { file: 'housing-sodankyla-hero-talvi.webp', source: 'Pexels', id: '30668141', url: 'https://www.pexels.com/photo/30668141/', author: 'Michelle Chadwick', published: '2025-02-10', changes: 'Pienennys 1920 px, ei rajausta; paikkaa ei väitetä (talvikauden hero, kesällä vanha kirkko)' },
  { file: 'housing-kemijarvi-hero-talvi.webp', source: 'Pexels', id: '35874614', url: 'https://www.pexels.com/photo/35874614/', author: 'Markku Soini', published: '2026-01-28', changes: 'Pienennys 1920 px, ei rajausta; paikkaa ei väitetä (talvikauden hero, kesällä oma kuva)' },
  { file: 'housing-home-hero-talo.webp', source: 'Pexels', id: '17648895', url: 'https://www.pexels.com/photo/17648895/', author: 'Gu Bra', published: '2023-07-18', changes: 'Rajaus 16:9, 1920 px' },
  { file: 'housing-rentals-hero-talvikatu.webp', source: 'Pexels', id: '20412426', url: 'https://www.pexels.com/photo/20412426/', author: 'Ahmet Yüksek', published: '2024-02-26', changes: 'Auton merkki ja rekisterikilpi sumennettu, 1920 px' },
  { file: 'housing-seasonal-hero-yllasjarvi.webp + housing-seasonal-card-yllasjarvi.webp', source: 'Pexels', id: '19896963', url: 'https://www.pexels.com/photo/19896963/', author: 'Fanny Hagan-Södervall', published: '2024-01-17', changes: 'Rajattu yläosaan: ravintolarakennus nimikyltteineen pois' },
  { file: 'housing-moving-hero-talvitie.webp + housing-moving-card-talvitie.webp', source: 'Pexels', id: '34803461', url: 'https://www.pexels.com/photo/34803461/', author: 'Manish Jain', published: '2025-11-19', changes: 'Rajaus 16:9 ja 4:3' },
  { file: 'housing-cost-hero-polttopuut.webp + housing-cost-card-polttopuut.webp', source: 'Pexels', id: '14841536', url: 'https://www.pexels.com/photo/14841536/', author: 'Valentin Angel Fernandez', published: '2022-12-21', changes: 'Rajaus 16:9 ja 4:3' },
  { file: 'pillar-long-stays-hero-mokki.webp + housing-longstay-card-mokki.webp', source: 'Pexels', id: '803270', url: 'https://www.pexels.com/photo/803270/', author: 'Baptiste Valthier', published: '2018-01-15', changes: 'Rajaus 4:3 kortille' },
  { file: 'whentogo-hero-tykky.webp', source: 'Pexels', id: '28359749', url: 'https://www.pexels.com/photo/28359749/', author: 'Sergey Guk', published: '2024-09-11', changes: 'Rajaus 16:9; paikkaa ei väitetä (kuvaajan paikkatiedot epäluotettavia)' },
  { file: 'bookingguide-hero-tunturi.webp', source: 'Pexels', id: '19896878', url: 'https://www.pexels.com/photo/19896878/', author: 'Fanny Hagan-Södervall', published: '2024-01-17', changes: 'Rajaus 16:9' },
  { file: 'housing-card-kemin-kirkko.webp', source: 'Pexels', id: '37254048', url: 'https://www.pexels.com/photo/37254048/', author: 'Markku Soini', published: '2026-04-25', changes: 'Rajaus 4:3' },
  { file: 'housing-arki-revontulet.webp', source: 'Pexels', id: '11747543', url: 'https://www.pexels.com/photo/11747543/', author: 'Jamo Images', published: '2022-04-08', changes: 'Rajaus 4:3' },
  { file: 'housing-arki-pilkki.webp', source: 'Pexels', id: '3224109', url: 'https://www.pexels.com/photo/3224109/', author: 'Hert Niks', published: '2019-11-14', changes: 'Rajaus 4:3; paikkaa ei väitetä' },
  { file: 'housing-arki-ruska.webp', source: 'Pexels', id: '15884211', url: 'https://www.pexels.com/photo/15884211/', author: 'Veli-Jussi Lietsala', published: '2023-03-10', changes: 'Rajaus 4:3; paikkaa eikä kuukautta väitetä' },
  { file: 'housing-kemi-hero-kaupungintalo.webp + housing-kemi-card-kaupungintalo.webp', source: 'Wikimedia Commons', id: 'File:Kemin kaupungintalo Kemi 2026-01-06 01.jpg', url: 'https://commons.wikimedia.org/wiki/File:Kemin_kaupungintalo_Kemi_2026-01-06_01.jpg', author: 'Leonhard Lenz', published: '2026-01-06', changes: 'CC0: rajaus 16:9 ja 4:3' },
  // 9.10.2026 ilta: Home.tsx (de/ja/es/br/cn/kr/it/sv) tekoälykuvat aidoiksi. Katsottu täysikokoisena (aito valokuva, ei tunnistettavia
  // kasvoja), verkoston tunniste-, kuvaaja- ja 64x36-pikselihaku: ei muualla. Pexelsin paikkatieto on kuvaajan kotipaikka, ei kuvauspaikka,
  // eikä kuvauksen "Finland" ole kuvaajan oma: alt ei väitä paikkaa.
  { file: 'hero-winter-1200/1920/2560.webp + .avif', source: 'Pexels', id: '12736972', url: 'https://www.pexels.com/photo/12736972/', author: 'Joni Tuohimaa', published: '2022-07-07', changes: 'Pienennys 1200/1920/2560 px, ei rajausta; paikkaa ei väitetä (Home.tsx talvihero, lokakuu–huhtikuu)' },
  { file: 'hero-summer-1200/1920/2560.webp + .avif', source: 'Pexels', id: '3109271', url: 'https://www.pexels.com/photo/3109271/', author: 'Olivier Darny', published: '2019-10-20', changes: 'Pienennys 1200/1920/2560 px, ei rajausta; paikkaa ei väitetä (Home.tsx kesähero, toukokuu–syyskuu; syksyn alun värit)' },
  { file: 'pillar-long-stays-card.webp', source: 'Pexels', id: '6672145', url: 'https://www.pexels.com/photo/6672145/', author: 'LePei Visual', published: '2021-02-01', changes: 'Rajaus 16:10 (5184x3240, ylhäältä 216 px pois), 960x600 px WebP; paikkaa ei väitetä' },
  { file: 'pillar-wilderness-card.webp', source: 'Pexels', id: '5841636', url: 'https://www.pexels.com/photo/5841636/', author: 'Cristian Manieri', published: '2020-11-09', changes: 'Rajaus 16:10 (5040x3150, x 280), 960x600 px WebP; kaksi pientä hahmoa mökin katoksen alla, ei tunnistettavissa; kuvaajan oma otsikko "Snow Covered Lapland in Finland", alt ei väitä paikkaa' },
] as const;

/**
 * 🔴 `scripts/version-images.mjs` kirjoittaa buildissa jokaiseen kuvapolkuun
 * `?v=<hash>` -tunnisteen, MYÖS tämän taulun avaimiin. Siksi sekä avain että
 * haettava polku normalisoidaan ilman kyselyosaa; muuten haku ei osu koskaan
 * ja tekijämerkintä katoaa hiljaa (mitattu 18.9.2026 ensimmäisessä buildissa).
 */
const bare = (p: string) => p.split('?')[0];
const BY_PATH: Record<string, PhotoCredit> = Object.fromEntries(
  Object.entries(PHOTO_CREDITS).map(([k, v]) => [bare(k), v]),
);

/** Kuvan tekijätieto polun perusteella (polku voi sisältää ?v=-versiotunnisteen). */
export function creditFor(src?: string): PhotoCredit | undefined {
  if (!src) return undefined;
  return BY_PATH[bare(src)];
}

/**
 * "Kuvassa: …" ja tekijärivin etuliite kaikilla 12 kielellä (kuvavaihto 9.10.2026, Vesa 4.10.: tekoälykuvat aidoiksi).
 * Paikka näytetään vain kun se on varmistettu (PHOTO_CREDITS[..].place); Pexels-kuvilla ei väitetä paikkaa.
 */
export const PICTURED: Record<Lang, string> = {
  en: 'Pictured: ', fi: 'Kuvassa: ', de: 'Im Bild: ', ja: '写真：', es: 'En la foto: ', 'pt-BR': 'Na foto: ',
  'zh-CN': '图：', ko: '사진: ', fr: 'Sur la photo : ', it: 'Nella foto: ', nl: 'Op de foto: ', sv: 'På bilden: ',
};
export const PHOTO_BY: Record<Lang, string> = {
  en: 'Photo', fi: 'Kuva', de: 'Foto', ja: '撮影', es: 'Foto', 'pt-BR': 'Foto',
  'zh-CN': '摄影', ko: '촬영', fr: 'Photo', it: 'Foto', nl: 'Foto', sv: 'Foto',
};

/** Varmistettu paikka kuvalle, kielellä `lang` (puuttuva kieli: englanti). */
export function placeFor(src: string | undefined, lang: Lang): string | undefined {
  const p = creditFor(src)?.place;
  return p ? (p[lang] ?? p.en) : undefined;
}

/** Kuvaluettelon otsikko ja johdanto (Home.tsx:n korttikuvat, 12 kieltä). */
export const PHOTO_LIST_TEXT: Record<Lang, { heading: string; lead: string }> = {
  en: { heading: 'Photos', lead: 'Openly licensed photos from Wikimedia Commons.' },
  fi: { heading: 'Kuvat', lead: 'Avoimella lisenssillä käytetyt kuvat Wikimedia Commonsista.' },
  de: { heading: 'Fotos', lead: 'Frei lizenzierte Fotos von Wikimedia Commons.' },
  ja: { heading: '写真', lead: 'Wikimedia Commonsのオープンライセンス写真。' },
  es: { heading: 'Fotos', lead: 'Fotos con licencia abierta de Wikimedia Commons.' },
  'pt-BR': { heading: 'Fotos', lead: 'Fotos com licença aberta do Wikimedia Commons.' },
  'zh-CN': { heading: '照片', lead: '来自维基共享资源（Wikimedia Commons）的开放许可照片。' },
  ko: { heading: '사진', lead: '위키미디어 커먼즈의 오픈 라이선스 사진.' },
  fr: { heading: 'Photos', lead: 'Photos sous licence libre issues de Wikimedia Commons.' },
  it: { heading: 'Foto', lead: 'Foto con licenza aperta da Wikimedia Commons.' },
  nl: { heading: 'Foto’s', lead: 'Foto’s met een open licentie van Wikimedia Commons.' },
  sv: { heading: 'Foton', lead: 'Öppet licensierade foton från Wikimedia Commons.' },
};
