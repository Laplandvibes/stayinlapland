import { Link } from 'react-router-dom';
import { MapPin, ChevronRight, ArrowDown } from 'lucide-react';
import AffiliateCTA from './AffiliateCTA';

const destinations = [
  { name: 'Rovaniemi', sid: 'hero_dest_rovaniemi' },
  { name: 'Levi', sid: 'hero_dest_levi' },
  { name: 'Saariselkä', sid: 'hero_dest_saariselka' },
  { name: 'Inari', sid: 'hero_dest_inari' },
  { name: 'Ylläs', sid: 'hero_dest_yllas' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-night">
      <div className="relative min-h-[88svh] sm:min-h-[94svh] flex items-center justify-center">
        <img
          src="/images/home-hero.webp"
          alt="Luxury log cabin in Finnish Lapland with warm window light at twilight"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
        />

        {/* Editorial scrim — strong at top + bottom, soft in middle to keep
            the photograph readable */}
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
            Finnish Lapland · Editorial guide
          </p>

          <h1
            className="font-heading font-medium text-snow leading-[1.05] tracking-tight text-[42px] sm:text-6xl lg:text-7xl mb-6"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.85)' }}
          >
            Settle into Lapland.
            <br />
            <span className="italic font-light text-snow/95">Don&rsquo;t just visit.</span>
          </h1>

          <p
            className="font-body text-snow/85 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ textShadow: '0 2px 14px rgba(0,0,0,0.8)' }}
          >
            Luxury cabins by the week, design hotels in Rovaniemi, glass igloos for the
            bucket-list nights — and the wilderness lodges past the last road. Verified rates
            from <span className="text-snow">€140 to €2 800</span> across Finnish Lapland.
          </p>

          <div className="mt-10 mb-2">
            <p
              className="text-[11px] sm:text-xs text-snow/65 mb-3 uppercase tracking-[0.22em] font-semibold"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.85)' }}
            >
              Live availability · Hotels.com search
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {destinations.map((d) => (
                <AffiliateCTA
                  key={d.name}
                  partner="hotels"
                  sid={d.sid}
                  destination={d.name}
                  className="group inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-full bg-night/60 backdrop-blur-sm border border-snow/30 text-[13px] sm:text-base text-snow hover:bg-vibe-pink/15 hover:border-vibe-pink/55 transition-all duration-200"
                >
                  <MapPin className="w-3.5 h-3.5 text-gold group-hover:text-vibe-pink transition-colors" />
                  <span className="font-medium">{d.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-snow/45 group-hover:text-vibe-pink transition-colors" />
                </AffiliateCTA>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/long-stays"
              className="px-7 py-3.5 bg-vibe-pink hover:bg-vibe-pink/90 text-white rounded-full font-semibold transition-all hover:scale-[1.02] shadow-lg shadow-vibe-pink/30 text-center"
            >
              Browse long stays
            </Link>
            <Link
              to="/hotels"
              className="px-7 py-3.5 bg-night/55 backdrop-blur-sm border border-snow/35 text-snow rounded-full font-semibold hover:bg-night/75 hover:border-snow/55 transition-all text-center"
            >
              See hotels
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-9 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-5 h-5 text-snow/55" />
        </div>
      </div>
    </section>
  );
}
