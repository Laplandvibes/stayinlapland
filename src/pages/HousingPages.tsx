import { useParams } from 'react-router-dom';
import HousingPage from '../components/housing/HousingPage';
import SettlingInAds from '../components/SettlingInAds';
import CabinCarousel from '../components/housing/CabinCarousel';
import NotFound from './NotFound';
import { HOUSING_PAGES, HOUSING_ROUTES, RENTAL_TOWNS, isRentalTownSlug } from '../housing';

/**
 * Asumissivujen reitit (rooli §23). Yksi runko, sisältö per sivu
 * `src/housing/*.ts`-tiedostoista. Kuvat ovat omia valokuvia heinäkuun 2026
 * ajomatkalta (Rovaniemi, Levi, Ylläs, Tornio) — ei AI-kuvia (01-kuvat §0).
 */
/*
 * Mainokset osion perään, sivun aiheesta käsin (Vesa 23.9.2026: "muuten en näe sivulla juurikaan
 * mainoksia"; CLAUDE.md "Mainos rakennetaan sivun aiheesta käsin"). Tunnisteet ovat kielikohtaisia:
 * suomenkielinen muuttaja tulee yleensä etelästä, joten matka-eSIM (Airalo) vain englanniksi ja käännöksille
 * (ne käyttävät englannin osiotunnisteita: lukija tulee ulkomailta).
 * Kausityösivulla suomenkieliselle ei mainosta: työnantajan asunnossa sähkö on yleensä vuokrassa
 * ja oma liittymä on jo olemassa.
 */
const MOVING_ADS = {
  viikko: <SettlingInAds context="moving" sidPrefix="stay_moving" kinds={['fortum', 'telia']} />,
  'week-one': <SettlingInAds context="moving" sidPrefix="stay_moving" kinds={['fortum', 'telia', 'airalo']} />,
};
const COST_ADS = {
  sahko: <SettlingInAds context="electricity" sidPrefix="stay_cost" kinds={['fortum']} />,
  electricity: <SettlingInAds context="electricity" sidPrefix="stay_cost" kinds={['fortum']} />,
};
/*
 * Vuokrasivut (/rentals + 6 kaupunkisivua): sähkösopimus ja liittymä heti hintaosion perään, koska lukija on juuri
 * nähnyt vuokran ilman sähköä (Vesa 18.11.2026: "stayinlapland sivulla saa olla mainontaa enemmänkin, nyt turhaa
 * piilotettu. nämä on kuitenkin hyödykkeitä joita jokainen muuttaja tarvitsee"). Ennen tätä vuokrasivujen ainoa
 * mainos oli hotellihaku 47–65 %:n syvyydellä (mitattu 18.11. puhelimella). sid: stay_rentals[_<kaupunki>]_<laji>.
 */
const rentalAds = (sidPrefix: string) => ({
  hinnat: <SettlingInAds context="renting" sidPrefix={sidPrefix} kinds={['fortum', 'telia']} />,
  prices: <SettlingInAds context="renting" sidPrefix={sidPrefix} kinds={['fortum', 'telia', 'airalo']} />,
});

const SEASONAL_ADS = {
  ask: <SettlingInAds context="arrival" sidPrefix="stay_seasonal" kinds={['airalo', 'telia']} />,
};

/*
 * Pitkät jaksot: Lomarenkaan mökit kuvineen heti "kolme tapaa" -osion perään, koska toinen tapa on
 * mökki viikkovuokralla (Vesa 23.9.2026: "tähän tietenkin karuselli kuvineen").
 */
// Käännökset (l10n/) käyttävät englannin osiotunnisteita, joten 'three-ways' osuu kaikille muille kielille.
const LONG_STAY_CABINS = {
  'kolme-tapaa': <CabinCarousel sidPrefix="stay_longstay_cabin" id="mokit" />,
  'three-ways': <CabinCarousel sidPrefix="stay_longstay_cabin" id="cabins" />,
};

export function Rentals() {
  return <HousingPage route={HOUSING_ROUTES.rentals} copy={HOUSING_PAGES.rentals} copyKey="rentals" heroImage="/images/housing-rentals-hero-talvikatu.webp" current="rentals" workPromo="inline" inserts={rentalAds('stay_rentals')} />;
}

export function SeasonalWorkerHousing() {
  return <HousingPage route={HOUSING_ROUTES.seasonal} copy={HOUSING_PAGES.seasonal} copyKey="seasonal" heroImage="/images/housing-seasonal-hero-yllasjarvi.webp" current="seasonal" workPromo="full" inserts={SEASONAL_ADS} />;
}

export function MovingToLapland() {
  return <HousingPage route={HOUSING_ROUTES.moving} copy={HOUSING_PAGES.moving} copyKey="moving" heroImage="/images/housing-moving-hero-talvitie.webp" heroScrim="strong" current="moving" workPromo="inline" inserts={MOVING_ADS} />;
}

export function CostOfLiving() {
  return <HousingPage route={HOUSING_ROUTES.cost} copy={HOUSING_PAGES.cost} copyKey="cost" heroImage="/images/housing-cost-hero-polttopuut.webp" current="cost" workPromo="none" inserts={COST_ADS} />;
}

const TOWN_HERO: Record<string, string | undefined> = {
  rovaniemi: '/images/housing-rovaniemi-hero-talvikatu.webp',
  'kemi-tornio': '/images/housing-kemi-hero-kaupungintalo.webp',
  // Oma kuva 18.7.2026 (kerrostalo ja vanha mänty Kemijärvellä), master D:/_puhelin_staging/kuvat/20260718_224029.jpg.
  kemijarvi: '/images/housing-kemijarvi-hero-kerrostalo.webp',
  // Sodankylän vanha kirkko (1689), Wikimedia Commons CC BY-SA 4.0 (EerikLehto). Vain pienennys, ei rajausta.
  sodankyla: '/images/housing-sodankyla-hero-vanha-kirkko.webp',
  'kittila-levi': '/images/housing-kittila-levi-hero-kyla.webp',
  // Ivalo ilmasta helmikuussa 2017, Wikimedia Commons CC BY-SA 4.0 (Markus Säynevirta). Tekijä piirtyy heroon
  // automaattisesti src/data/photoCredits.ts:stä.
  'ivalo-inari': '/images/housing-ivalo-ilmakuva.webp',
};

/*
 * Talvikauden hero (kuvavaihto 9.10.2026, Vesa 4.10.: sivut joilla on talvella kesäkuva). Sodankylän ja Kemijärven
 * hero on kesäkuva (vanha kirkko, oma heinäkuun kuva); syys–huhtikuussa näytetään talvikuva, toukokuussa kesäkuva palaa.
 * Sama kausiraja kuin etusivun herossa (Hero.tsx isSummerSeason: toukokuu–syyskuu). Talvikuvat ovat paikattomia
 * Pexels-kuvia (kuvaajan paikkatieto ei todista paikkaa), joten heroille ei väitetä paikkaa. Kuitit: STOCK_RECEIPTS.
 */
const TOWN_HERO_WINTER: Record<string, string | undefined> = {
  sodankyla: '/images/housing-sodankyla-hero-talvi.webp',
  kemijarvi: '/images/housing-kemijarvi-hero-talvi.webp',
};
/* Vaaleat kaupunkiherot (heroteksti-portti 18.10.2026: Kemin kaupungintalon lumikuvan päällä ingressi 2.81:1). */
const STRONG_SCRIM_TOWNS = new Set(['kemi-tornio']);
const isSummerSeason = () => {
  const m = new Date().getMonth() + 1;
  return m >= 5 && m <= 9;
};

export function RentalsTown() {
  const { town } = useParams<{ town: string }>();
  if (!town || !isRentalTownSlug(town)) return <NotFound />;
  return (
    <HousingPage
      route={`${HOUSING_ROUTES.rentals}/${town}`}
      copy={RENTAL_TOWNS[town]}
      copyKey={`town-${town}`}
      heroImage={(!isSummerSeason() && TOWN_HERO_WINTER[town]) || TOWN_HERO[town]}
      heroScrim={STRONG_SCRIM_TOWNS.has(town) ? 'strong' : undefined}
      current="rentals"
      parent={{ route: HOUSING_ROUTES.rentals, key: 'rentals' }}
      workPromo="inline"
      inserts={rentalAds(`stay_rentals_${town.replace(/-/g, '_')}`)}
    />
  );
}

export function LongStays() {
  return <HousingPage route={HOUSING_ROUTES.longStays} copy={HOUSING_PAGES.longStays} copyKey="longstays" heroImage="/images/pillar-long-stays-hero-mokki.webp" heroScrim="strong" current="longStays" workPromo="inline" inserts={LONG_STAY_CABINS} />;
}
