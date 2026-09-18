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
  license: 'CC BY 2.0' | 'CC BY-SA 4.0' | 'CC0 1.0';
  licenseUrl: string;
  /** Commonsin tiedostosivu: kuvaus, tekijä ja lisenssi alkuperäisessä muodossa. */
  sourceUrl: string;
  /** Tiedoston nimi Commonsissa. */
  title: string;
  /** Kuvauspäivä Commonsin tai EXIFin mukaan. */
  taken: string;
  /** Mitä kuvalle tehtiin. */
  changes: string;
  fetched: '2026-09-18';
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
};

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
