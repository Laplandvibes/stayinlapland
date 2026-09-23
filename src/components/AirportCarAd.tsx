import { ArrowUpRight } from 'lucide-react';
import AffiliateCTA from './AffiliateCTA';
import AdUnit from '../shared/ads/AdUnit';
import carsAd from '../shared/ads/advertisers/cars';
import type { Lang } from '../i18n/useLang';

/**
 * Vuokra-automainos varausoppaan "Miten päästä perille" -osion perään.
 *
 * Korvaa sivun pohjalla olleen Omena Hotels -mainoksen (Vesa 23.9.2026: *"tämähän ei näy
 * ollenkaan kun on sivun pohjalla, muutenkin ei lapissa paljon ole omena hotelleja joten mainos
 * ei ole niin järkevä"*). Osio nimeää kolme kenttää ja kertoo mihin kukin vie, joten mainos
 * rakentuu siitä (CLAUDE.md "Mainos rakennetaan sivun aiheesta käsin"): otsikko kysyy lukijan
 * kenttää, jokainen kenttä on oma nouto-IATA Workerin linkissä ja oma mitattava sid.
 *
 * Suomeksi ja englanniksi tämä lohko; muilla kymmenellä kielellä verkoston valmis 12-kielinen
 * automainos (`shared/ads/advertisers/cars.ts`), ettei saksankieliselle sivulle jää englantia.
 * Brändiväri on mainostajan (teal), ei meidän pinkki: mainos näyttää mainokselta.
 */
const AIRPORTS = [
  { iata: 'RVN', name: 'Rovaniemi', sid: 'bg_car_rvn', fi: 'kaupunki ja etelä', en: 'the town and the south' },
  { iata: 'KTT', name: 'Kittilä', sid: 'bg_car_ktt', fi: 'Levi ja Ylläs', en: 'Levi and Ylläs' },
  { iata: 'IVL', name: 'Ivalo', sid: 'bg_car_ivl', fi: 'Saariselkä ja Inari', en: 'Saariselkä and Inari' },
] as const;

const TEXT = {
  fi: {
    ad: 'Mainos',
    kicker: 'Kentältä perille',
    title: 'Mille kentälle laskeudut? Vertaa sieltä noudettavat vuokra-autot.',
    lead: 'Valitse kenttä, niin haku avautuu valmiiksi sen noutopisteellä. Omalla autolla retket ja kylien väliset siirtymät eivät odota aikataulua.',
    note: 'Kumppanilinkki: autovuokraus EconomyBookingsin kautta. Jos varaat, saamme pienen palkkion. Sinulle hinta on sama.',
  },
  en: {
    ad: 'Ad',
    kicker: 'From the airport',
    title: 'Which airport are you landing at? Compare the cars you can pick up there.',
    lead: 'Choose the airport and the search opens with that pickup point filled in. With your own car, day trips and moves between villages do not wait for a timetable.',
    note: 'Affiliate link: car rental via EconomyBookings. If you book, we earn a small commission. Your price is the same.',
  },
} as const;

const ACCENT = '#0F766E';
const ACCENT_DARK = '#0B5E57';

export default function AirportCarAd({ lang, className = '' }: { lang: Lang; className?: string }) {
  if (lang !== 'fi' && lang !== 'en') {
    return <AdUnit spec={carsAd} sid="bg_getting_there_car" lang={lang} variant="light" className={className} />;
  }
  const t = TEXT[lang];
  return (
    <aside
      className={`relative overflow-hidden rounded-2xl bg-white p-7 sm:p-9 shadow-sm ring-1 ring-black/5 ${className}`}
      style={{ borderTop: `3px solid ${ACCENT}` }}
      aria-label={t.title}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <span className="inline-flex w-fit items-center rounded-full bg-[#0F766E]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-800">
            {t.ad}
          </span>
          <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: ACCENT_DARK }}>
            {t.kicker}
          </p>
        </div>
        <img src="/images/partners/economybookings.svg" alt="EconomyBookings" width={140} height={32} loading="lazy" decoding="async" className="h-7 w-auto shrink-0" />
      </div>
      <h3 className="font-heading text-2xl sm:text-3xl leading-tight tracking-wide text-charcoal">{t.title}</h3>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-graphite">{t.lead}</p>
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {AIRPORTS.map((a) => (
          <AffiliateCTA
            key={a.iata}
            partner="cars"
            sid={a.sid}
            destination={a.iata}
            className="group flex min-h-11 items-center justify-between gap-3 rounded-xl bg-[#0B5E57] px-4 py-3 text-left text-white transition-colors hover:bg-[#0F766E]"
          >
            <span className="flex flex-col">
              <span className="text-[15px] font-semibold leading-snug">
                {a.name} ({a.iata})
              </span>
              <span className="text-[13px] leading-snug text-white/85">{a[lang]}</span>
            </span>
            <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </AffiliateCTA>
        ))}
      </div>
      <p className="mt-5 text-[13px] leading-relaxed text-graphite">{t.note}</p>
    </aside>
  );
}
