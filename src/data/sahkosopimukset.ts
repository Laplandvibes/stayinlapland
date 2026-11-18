/**
 * Sähkövertailun tarjoukset (Vesa 19.11.2026: "Kyllä, sähkövertailu"). Yksi rivi per kumppani: se tarjous,
 * jonka lukija näkee ensimmäisenä, kun hän klikkaa meidän linkkiämme (Worker vie Adtractionin kautta kumppanin
 * omalle kumppanisivulle). Luettu selaimella 19.11.2026 klo 00.30, hinnat sisältävät alv:n 25,5 %:
 *   - Fortum: fortum.com/fi/sahkoa/sahkoa-kotiin/kampanja/affiliate-fortum-sahkosopimukset → "Fortum Tarkka",
 *     "Pörssisähkön hinta + 0,59 c/kWh", "Perusmaksuetu ensimmäiset 3kk 0 €", perusmaksu sen jälkeen 5,99 €/kk,
 *     "Sopimus on voimassa niin kauan kun haluat".
 *   - Vattenfall: vattenfall.fi/kampanjat/sahkoa-kotiin → "Optimi Pörssisähkö", "Spot-hinta + 0,50 snt/kWh",
 *     "Perusmaksu: 5,95 €/kk 0,00 €/kk", "Perusmaksualennuksen kesto: 6 kk", "Toistaiseksi voimassa".
 *   - Oomi: oma.oomi.fi/s/public?c=Affi → "Oomi Kiinteä", 24 kk, "9,89 c/kWh", "Perusmaksu 0,00 €/kk ensimmäiset
 *     9 kuukautta, jonka jälkeen 5,90 €/kk". 🔴 Oomin kumppanisivulla on VAIN 24 kk määräaikaiset (suodatin
 *     "Voimassa toistaiseksi" ⇒ "Ei hakutuloksia"), joten Oomia ei esitetä pörssisähkön vaihtoehtona.
 *
 * Irtisanominen (vertailun ingressi): toistaiseksi voimassa olevan voi irtisanoa kahden viikon irtisanomisajalla
 * (Vattenfallin UKK, vattenfall.fi/sahkosopimukset 19.11.2026), määräaikaisen kesken kauden muuton perusteella
 * (sähkönmyyntiehdot: kuluttajan on osoitettava muutto; Hehkun UKK "Määräaikaisia sähkösopimuksia ei voi
 * irtisanoa, ellei kyseessä ole muutto"; Verkkouutiset 2024, määräaikaisten irtisanomisten säännöt).
 *
 * 🔴 Hinnat näytetään vain viikon lukuhetkestä (sama raja kuin GYG-hinnoilla, lv_permanent_rules §40): hinnat ja
 * perusmaksuedut ovat kampanjoita, joiden päättymistä emme tiedä. Viikon jälkeen kortti näyttää yhä sopimukset,
 * mutta hinnan tilalla "katso voimassa oleva hinta yhtiön sivulta". Päivitys = lue sivut uudelleen, vaihda luvut
 * ja SAHKO_LUETTU, julkaise.
 */

export type SahkoKumppani = 'fortum' | 'vattenfall' | 'oomi';

export interface SahkoTarjous {
  key: SahkoKumppani;
  /** Yhtiön nimi (aria, kuvan alt). */
  yhtio: string;
  /** Tuotteen nimi kumppanin omalla sivulla, ei käännetä. */
  tuote: string;
  tyyppi: 'spot' | 'kiintea24';
  /** spot: marginaali c/kWh pörssihinnan päälle; kiintea24: energian hinta c/kWh. */
  snt: number;
  /** Perusmaksuedun kesto kuukausina (perusmaksu 0 €), ja perusmaksu sen jälkeen €/kk. */
  etuKk: number;
  perusmaksu: number;
  logo: string;
  /** Kortin reunaviiva kumppanin brändivärillä. */
  accent: string;
  /** Napin täyttö: valkoinen teksti ≥ 4,5:1. */
  cta: string;
}

/** 19.11.2026 klo 00.30 Suomen aikaa (UTC+2). */
export const SAHKO_LUETTU = Date.UTC(2026, 10, 18, 22, 30);
export const SAHKO_HINNAT_NAKYVAT_ASTI = SAHKO_LUETTU + 7 * 24 * 60 * 60 * 1000;

export const SAHKO_TARJOUKSET: readonly SahkoTarjous[] = [
  // Järjestys: pörssisopimukset marginaalin mukaan, sitten kiinteä.
  { key: 'vattenfall', yhtio: 'Vattenfall', tuote: 'Optimi Pörssisähkö', tyyppi: 'spot', snt: 0.5, etuKk: 6, perusmaksu: 5.95,
    logo: '/images/partners/vattenfall.png', accent: '#FFDA00', cta: '#1F6FB2' },
  { key: 'fortum', yhtio: 'Fortum', tuote: 'Fortum Tarkka', tyyppi: 'spot', snt: 0.59, etuKk: 3, perusmaksu: 5.99,
    logo: '/images/partners/fortum.png', accent: '#3CB54A', cta: '#2E7D32' },
  { key: 'oomi', yhtio: 'Oomi', tuote: 'Oomi Kiinteä', tyyppi: 'kiintea24', snt: 9.89, etuKk: 9, perusmaksu: 5.9,
    logo: '/images/partners/oomi.png', accent: '#0B2447', cta: '#0B2447' },
];

export function sahkoHinnatNakyvat(now: number = Date.now()): boolean {
  return now >= SAHKO_LUETTU && now < SAHKO_HINNAT_NAKYVAT_ASTI;
}
