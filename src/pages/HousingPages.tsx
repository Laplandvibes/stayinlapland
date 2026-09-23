import { useParams } from 'react-router-dom';
import HousingPage from '../components/housing/HousingPage';
import SettlingInAds from '../components/SettlingInAds';
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
 * suomenkielinen muuttaja tulee yleensä etelästä, joten matka-eSIM (Airalo) vain englanniksi.
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
const SEASONAL_ADS = {
  ask: <SettlingInAds context="arrival" sidPrefix="stay_seasonal" kinds={['airalo', 'telia']} />,
};

export function Rentals() {
  return <HousingPage route={HOUSING_ROUTES.rentals} copy={HOUSING_PAGES.rentals} heroImage="/images/housing-rentals-hero-talvikatu.webp" current="rentals" workPromo="inline" />;
}

export function SeasonalWorkerHousing() {
  return <HousingPage route={HOUSING_ROUTES.seasonal} copy={HOUSING_PAGES.seasonal} heroImage="/images/housing-seasonal-hero-yllasjarvi.webp" current="seasonal" workPromo="full" inserts={SEASONAL_ADS} />;
}

export function MovingToLapland() {
  return <HousingPage route={HOUSING_ROUTES.moving} copy={HOUSING_PAGES.moving} heroImage="/images/housing-moving-hero-talvitie.webp" current="moving" workPromo="inline" inserts={MOVING_ADS} />;
}

export function CostOfLiving() {
  return <HousingPage route={HOUSING_ROUTES.cost} copy={HOUSING_PAGES.cost} heroImage="/images/housing-cost-hero-polttopuut.webp" current="cost" workPromo="none" inserts={COST_ADS} />;
}

const TOWN_HERO: Record<string, string | undefined> = {
  rovaniemi: '/images/housing-rovaniemi-hero-talvikatu.webp',
  'kemi-tornio': '/images/housing-kemi-hero-kaupungintalo.webp',
  'kittila-levi': '/images/housing-kittila-levi-hero.webp',
  // Ivalo ilmasta helmikuussa 2017, Wikimedia Commons CC BY-SA 4.0 (Markus Säynevirta). Tekijä piirtyy heroon
  // automaattisesti src/data/photoCredits.ts:stä.
  'ivalo-inari': '/images/housing-ivalo-ilmakuva.webp',
};

export function RentalsTown() {
  const { town } = useParams<{ town: string }>();
  if (!town || !isRentalTownSlug(town)) return <NotFound />;
  return (
    <HousingPage
      route={`${HOUSING_ROUTES.rentals}/${town}`}
      copy={RENTAL_TOWNS[town]}
      heroImage={TOWN_HERO[town]}
      current="rentals"
      parent={{ route: HOUSING_ROUTES.rentals, key: 'rentals' }}
      workPromo="inline"
    />
  );
}
