import { ArrowUpRight, Briefcase } from 'lucide-react';
import type { HousingHomeCopy } from '../../housing/home';

interface HousingWorkPromoProps {
  copy: HousingHomeCopy['work'];
  /** utm_campaign + Umami-sivu, esim. "housing_home" tai "housing_seasonal". */
  placement: string;
  variant?: 'banner' | 'strip';
}

/** Sisarsivuston sanamerkki verkoston kaavalla: pinkki #, valkoinen LAPLAND, pinkki WORK (Bebas). */
function WorkWordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`font-logo tracking-wide leading-none ${className}`} aria-label="#LAPLANDWORK">
      <span className="text-vibe-pink">#</span>
      <span className="text-snow">LAPLAND</span>
      <span className="text-vibe-pink">WORK</span>
    </span>
  );
}

/**
 * Suomen lipun risti taustakuviona: lipun mittasuhteet 18 × 11, pystypalkki
 * kohdassa 5–8 ja vaakapalkki 4–7. Hillitty (valkoinen 9 %), jotta se on
 * tunnistettava muttei kilpaile tekstin kanssa.
 */
function NordicCross() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 w-full h-full"
      viewBox="0 0 18 11"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect x="5" y="0" width="3" height="11" fill="#fff" fillOpacity="0.09" />
      <rect x="0" y="4" width="18" height="3" fill="#fff" fillOpacity="0.09" />
    </svg>
  );
}

/**
 * laplandwork-ristilinkki asumissivuille.
 *
 * 🎨 Vesa 23.9.2026: *"tämä on loistava osio … mutta voisi olla enemmän
 * laplandwork-sivun teemaa, eli vähän sinivalkoista Suomea tähän?"* ⇒ osio
 * puhuu nyt laplandworkin kieltä: Suomen sininen paneeli (#002F6C), lipun risti
 * taustalla, valokuva valkoisessa kehyksessä, #LAPLANDWORK-sanamerkki ja
 * valkoinen nappi sinisellä tekstillä. Kontrastit: valkoinen sinisellä 13,6:1,
 * #BFD7FF sinisellä 10,4:1, sininen valkoisella 13,6:1, pinkki # sinisellä
 * 3,8:1 (sanamerkki on iso teksti, raja 3:1).
 *
 * Banneri etusivulla ja kausityösivulla, kapea rivi muilla asumissivuilla
 * sisällön JÄLKEEN (ei johdannon alla: promo ennen sisältöä oli yksi syy siihen,
 * että vuokrasivu "poukkoili", Vesa 23.9.2026).
 */
export default function HousingWorkPromo({ copy, placement, variant = 'banner' }: HousingWorkPromoProps) {
  const href = `https://laplandwork.com/?utm_source=stayinlapland&utm_medium=crosslink&utm_campaign=${encodeURIComponent(placement)}`;
  const out = { 'data-umami-event': 'housing_out', 'data-umami-event-page': placement, 'data-umami-event-target': 'laplandwork' };

  if (variant === 'strip') {
    return (
      <section className="px-5 sm:px-6 py-10 sm:py-12">
        <a
          href={href}
          target="_blank"
          rel="noopener"
          {...out}
          className="group relative overflow-hidden max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-5 sm:p-7 min-h-11 rounded-2xl bg-finland-blue text-snow shadow-[0_12px_40px_rgba(0,47,108,0.22)] hover:shadow-[0_16px_48px_rgba(0,47,108,0.3)] transition-shadow"
        >
          <NordicCross />
          <span className="relative inline-flex w-12 h-12 shrink-0 items-center justify-center rounded-xl bg-white text-finland-blue" aria-hidden="true">
            <Briefcase className="w-6 h-6" />
          </span>
          <span className="relative flex-1">
            <WorkWordmark className="text-lg" />
            <span className="block font-heading text-2xl sm:text-3xl leading-tight tracking-wide mt-1">
              {copy.h2a} <span className="text-[#BFD7FF]">{copy.h2b}</span>
            </span>
            <span className="block text-snow/90 text-[15px] leading-snug mt-1.5">{copy.stripText}</span>
          </span>
          <span className="relative inline-flex items-center gap-2 self-start sm:self-center shrink-0 px-5 py-2.5 min-h-11 rounded-full bg-white text-finland-blue text-sm font-semibold group-hover:bg-[#EEF3FF] transition-colors">
            {copy.cta}
            <ArrowUpRight className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </a>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-24 px-5 sm:px-6 bg-[#EEF3FF]">
      <div className="relative max-w-6xl mx-auto overflow-hidden rounded-3xl bg-finland-blue text-snow shadow-[0_24px_70px_rgba(0,47,108,0.28)]">
        <NordicCross />
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-12">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-[6px] ring-white bg-night shadow-xl">
              <img src={copy.image} alt={copy.alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
            <figcaption className="mt-3 text-snow/80 text-sm italic leading-relaxed">{copy.caption}</figcaption>
          </figure>
          <div>
            <WorkWordmark className="text-3xl sm:text-4xl" />
            <p className="mt-3 inline-flex px-3 py-1 rounded-full bg-white/12 text-snow text-[11px] font-semibold tracking-[0.18em] uppercase">{copy.kicker}</p>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-snow leading-[1.05] tracking-wide mt-5 mb-5">
              {copy.h2a} <span className="text-[#BFD7FF]">{copy.h2b}</span>
            </h2>
            <p className="text-snow/90 text-base sm:text-lg leading-relaxed mb-8">{copy.body}</p>
            <a
              href={href}
              target="_blank"
              rel="noopener"
              {...out}
              className="inline-flex items-center justify-center text-center leading-snug gap-2 px-7 py-3.5 min-h-11 bg-white hover:bg-[#EEF3FF] text-finland-blue rounded-full font-semibold transition-colors shadow-lg shadow-night/20"
            >
              {copy.cta}
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
