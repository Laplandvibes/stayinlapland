import { Link } from 'react-router-dom';
import { MapPin, ChevronRight } from 'lucide-react';
import AffiliateCTA from './AffiliateCTA';
import { useLang, useLocalePath } from '../i18n/useLang';
import { getCopy } from '../locales/copy';

const destinations = [
  { name: 'Rovaniemi', sid: 'hero_dest_rovaniemi' },
  { name: 'Levi', sid: 'hero_dest_levi' },
  { name: 'Saariselkä', sid: 'hero_dest_saariselka' },
  { name: 'Inari', sid: 'hero_dest_inari' },
  { name: 'Ylläs', sid: 'hero_dest_yllas' },
];

const isSummerSeason = () => {
  const m = new Date().getMonth() + 1;
  return m >= 5 && m <= 9;
};

export default function Hero() {
  const lang = useLang();
  const localePath = useLocalePath();
  const t = getCopy(lang).hero;
  const summer = isSummerSeason();
  const heroBase = summer ? 'home-hero-summer' : 'hero-aurora-cabins';
  const heroAlt = summer
    ? 'Lakeside log cabin in the Finnish Lapland summer'
    : 'Aurora over a snow-covered log cabin in Finnish Lapland';
  return (
    <section className="relative overflow-hidden bg-night">
      <div className="relative min-h-[88svh] sm:min-h-[94svh] flex items-center justify-center">
        <picture><source srcSet={`/images/${heroBase}.avif`} type="image/avif" /><source srcSet={`/images/${heroBase}.webp`} type="image/webp" /><img
          src={`/images/${heroBase}.webp`}
          alt={heroAlt}
          className="absolute inset-0 w-full h-full object-cover [object-position:50%_42%]"
          fetchPriority="high"
          decoding="async" /></picture>

        <div className="absolute inset-0 bg-gradient-to-b from-night/60 via-night/30 to-night" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 65% at 50% 55%, rgba(15,23,42,0.45) 0%, rgba(15,23,42,0.0) 70%)',
          }}
        />

        <div className="relative z-10 text-center px-5 sm:px-6 max-w-3xl mx-auto pt-28 pb-32">
          <p
            className="inline-flex items-center gap-2 text-vibe-pink uppercase tracking-[0.3em] text-[11px] sm:text-xs font-semibold mb-6"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.85)' }}
          >
            <MapPin className="w-3.5 h-3.5" />
            {t.eyebrow}
          </p>

          <h1
            className="font-heading font-medium text-snow leading-[1.05] tracking-wide text-[42px] sm:text-6xl lg:text-7xl mb-6"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.85)' }}
          >
            {t.h1Line1}
            <br />
            <span className="text-vibe-pink">{t.h1Line2}</span>
          </h1>

          <p
            className="font-body text-snow/85 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ textShadow: '0 2px 14px rgba(0,0,0,0.8)' }}
          >
            {t.lead} <span className="text-snow">{t.leadPriceRange}</span>.
          </p>

          <div className="mt-10 mb-2 hidden sm:block">
            <p
              className="text-[11px] sm:text-xs text-snow/65 mb-3 uppercase tracking-[0.22em] font-semibold"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.85)' }}
            >
              {t.liveLabel}
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {destinations.map((d) => (
                <AffiliateCTA
                  key={d.name}
                  partner="hotels"
                  sid={d.sid}
                  destination={`${d.name === 'Ylläs' ? 'Äkäslompolo' : d.name}, Finland`}
                  className="group inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-full bg-night/60 backdrop-blur-sm border border-snow/30 text-[13px] sm:text-base text-snow hover:bg-vibe-pink/15 hover:border-vibe-pink/55 transition-all duration-200"
                >
                  <MapPin className="w-3.5 h-3.5 text-gold group-hover:text-vibe-pink transition-colors" />
                  <span className="font-medium">{d.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-snow/75 group-hover:text-vibe-pink transition-colors" />
                </AffiliateCTA>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to={localePath('/long-stays')}
              className="px-7 py-3.5 bg-vibe-pink hover:bg-vibe-pink/90 text-white rounded-full font-semibold transition-all hover:scale-[1.02] shadow-lg shadow-vibe-pink/30 text-center"
            >
              {t.browseLongStays}
            </Link>
            <Link
              to={localePath('/hotels')}
              className="px-7 py-3.5 bg-night/55 backdrop-blur-sm border border-snow/35 text-snow rounded-full font-semibold hover:bg-night/75 hover:border-snow/55 transition-all text-center"
            >
              {t.seeHotels}
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
