import { Link } from 'react-router-dom';
import { SiteLink } from '../lib/movedToStays';
import { MapPin, ChevronRight } from 'lucide-react';
import AffiliateCTA from './AffiliateCTA';
import { useLang, useLocalePath } from '../i18n/useLang';
import { getCopy } from '../locales/copy';
import { emWidth } from '../lib/headingFit';

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
  /* ── Two lines on a computer in every language (Vesa 3.10.2026: "tehdään turhaan kolmirivisiä") ──────────
   * Measured live 3.10.: at 1280–1920 px the heading ran to three to five lines in de/es/pt/it/sv/ko/ja
   * ("LAPONIA ES MÁS / QUE UNA SEMANA DE / VACACIONES."): the size grew to 96–106 px, the column stayed at 720 px
   * (max-w-3xl) with photograph on both sides. From xl the copy column widens to 976 px, and from lg the size is
   * the smaller of the designed size and the size at which the longer of the two authored lines fits the column
   * (100cqi / em). The lead and the destination chips keep their old 720 px measure.
   * 🔴 ja is left exactly as it was. Fitted to two lines (61 px) its pink second line moved up into the
   * brighter middle of the photograph: heroteksti-portti 0 → 2 findings at 1440/2000 px (92 % of pixels under
   * 3:1). The pink line fails there in de/es/zh/ko already today; ja only passed because its five-line wrap
   * pushed the pink line down. Fixing ja needs the pink-on-photo decision first (#F9A8D4 as on the hub). */
  const fit = lang !== 'ja';
  const h1Em = Math.max(emWidth(t.h1Line1, 0.025), emWidth(t.h1Line2, 0.025));
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

        {/* @container + w-full: a container may not size itself from its content, and as a flex item it would
            collapse to 0 (and 100cqi with it); w-full + max-w gives the width the text used to stretch it to. */}
        <div className={`@container w-full relative z-10 text-center px-5 sm:px-6 max-w-3xl ${fit ? 'xl:max-w-5xl' : ''} mx-auto pt-28 pb-28`}>
          {/* Ei yläotsikkoa ("Finnisch-Lappland · Redaktioneller Leitfaden"): sivusto ei
              esittele itseään heron päällä (Vesa 18.9.2026, etusivun kärki). */}
          <h1
            className={`font-heading font-medium text-snow leading-[1.05] tracking-wide text-[42px] sm:text-6xl mb-6 ${
              fit
                ? 'lg:[--h1-max:4.5rem] xl:[--h1-max:clamp(96px,1.5vw_+_76.8px,115.2px)] lg:[font-size:min(var(--h1-max),calc(100cqi/var(--h1-em)))]'
                : 'lg:text-7xl xl:text-8xl xl:text-[clamp(96px,1.5vw_+_76.8px,115.2px)]'
            }`}
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.85)', ['--h1-em' as string]: h1Em.toFixed(2) }}
          >
            {t.h1Line1}
            <br />
            <span className="text-vibe-pink">{t.h1Line2}</span>
          </h1>

          <p
            className="font-body text-snow/85 text-base sm:text-lg lg:text-xl max-w-2xl xl:max-w-[45rem] mx-auto leading-relaxed xl:text-2xl"
            style={{ textShadow: '0 2px 14px rgba(0,0,0,0.8)' }}
          >
            {t.lead} <span className="text-snow">{t.leadPriceRange}</span>.
          </p>

          <div className="mt-10 mb-2 hidden sm:block xl:max-w-[45rem] xl:mx-auto">
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
              className="px-7 py-3.5 bg-[#DB2777] hover:bg-[#BE185D] text-white rounded-full font-semibold transition-all hover:scale-[1.02] shadow-lg shadow-vibe-pink/30 text-center"
            >
              {t.browseLongStays}
            </Link>
            <SiteLink
              path="/hotels"
              className="px-7 py-3.5 bg-night/55 backdrop-blur-sm border border-snow/35 text-snow rounded-full font-semibold hover:bg-night/75 hover:border-snow/55 transition-all text-center"
            >
              {t.seeHotels}
            </SiteLink>
          </div>
        </div>

      </div>
    </section>
  );
}
