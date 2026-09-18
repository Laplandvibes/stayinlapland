import { useParams } from 'react-router-dom';
import HousingPage from '../components/housing/HousingPage';
import NotFound from './NotFound';
import { HOUSING_PAGES, HOUSING_ROUTES, RENTAL_TOWNS, isRentalTownSlug } from '../housing';

/**
 * Asumissivujen reitit (rooli §23). Yksi runko, sisältö per sivu
 * `src/housing/*.ts`-tiedostoista. Kuvat ovat omia valokuvia heinäkuun 2026
 * ajomatkalta (Rovaniemi, Levi, Ylläs, Tornio) — ei AI-kuvia (01-kuvat §0).
 */
export function Rentals() {
  return <HousingPage route={HOUSING_ROUTES.rentals} copy={HOUSING_PAGES.rentals} heroImage="/images/housing-rentals-hero.webp" current="rentals" workPromo="inline" />;
}

export function SeasonalWorkerHousing() {
  return <HousingPage route={HOUSING_ROUTES.seasonal} copy={HOUSING_PAGES.seasonal} heroImage="/images/housing-seasonal-hero.webp" current="seasonal" workPromo="full" />;
}

export function MovingToLapland() {
  return <HousingPage route={HOUSING_ROUTES.moving} copy={HOUSING_PAGES.moving} heroImage="/images/housing-moving-hero.webp" current="moving" workPromo="inline" />;
}

export function CostOfLiving() {
  return <HousingPage route={HOUSING_ROUTES.cost} copy={HOUSING_PAGES.cost} heroImage="/images/housing-cost-hero.webp" current="cost" workPromo="none" />;
}

const TOWN_HERO: Record<string, string | undefined> = {
  rovaniemi: '/images/housing-rovaniemi-lappia.webp',
  'kemi-tornio': '/images/housing-cost-hero.webp',
  'kittila-levi': '/images/housing-home-hero.webp',
  // Inarista ei ole omaa valokuvaa: PageHero piirtää graafisen taustan. Ei toisen paikan kuvaa (Vesa 26.7.2026).
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
