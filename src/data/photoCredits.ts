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
export type PhotoCredit = {
  /** Tekijä siinä muodossa kuin hän on sen Commonsiin merkinnyt (lyhennettynä). */
  author: string;
  license: 'CC BY 2.0' | 'CC BY 3.0' | 'CC BY-SA 3.0' | 'CC BY-SA 4.0' | 'CC0 1.0';
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
