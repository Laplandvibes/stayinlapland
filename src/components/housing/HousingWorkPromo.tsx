import { ArrowUpRight, Briefcase } from 'lucide-react';
import type { HousingHomeCopy } from '../../housing/home';

interface HousingWorkPromoProps {
  copy: HousingHomeCopy['work'];
  /** utm_campaign + Umami-sivu, esim. "housing_home" tai "housing_seasonal". */
  placement: string;
  variant?: 'banner' | 'strip';
}

/**
 * laplandwork-ristilinkki asumissivuille: kuva ja yksi viesti (banner) tai
 * sininen rivi johdannon alla (strip). Korvaa asumissivuilla vanhan
 * WorkInLaplandPromon, jonka teksti puhuu "näistä pitkän jakson kohteista" ja
 * jonka neljä valkoista laatikkoa Vesa totesi tylsiksi (18.9.2026).
 */
export default function HousingWorkPromo({ copy, placement, variant = 'banner' }: HousingWorkPromoProps) {
  const href = `https://laplandwork.com/?utm_source=stayinlapland&utm_medium=crosslink&utm_campaign=${encodeURIComponent(placement)}`;
  const out = { 'data-umami-event': 'housing_out', 'data-umami-event-page': placement, 'data-umami-event-target': 'laplandwork' };

  if (variant === 'strip') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener"
        {...out}
        className="group relative overflow-hidden flex items-center gap-4 p-4 sm:p-5 min-h-11 rounded-2xl bg-finland-blue text-snow shadow-md hover:shadow-lg transition-shadow"
      >
        <span className="pointer-events-none absolute -top-16 -right-10 w-48 h-48 rounded-full bg-vibe-pink/25 blur-3xl" aria-hidden="true" />
        <span className="relative inline-flex w-11 h-11 shrink-0 items-center justify-center rounded-xl bg-vibe-pink text-white" aria-hidden="true">
          <Briefcase className="w-5 h-5" />
        </span>
        <span className="relative flex-1">
          <span className="block font-heading text-2xl leading-tight tracking-wide">
            {copy.h2a} <span className="text-[#F9A8D4]">{copy.h2b}</span>
          </span>
          <span className="block text-snow/85 text-[14px] leading-snug mt-1">{copy.stripText}</span>
        </span>
        <ArrowUpRight className="relative w-5 h-5 shrink-0 text-[#F9A8D4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    );
  }

  return (
    <section className="py-16 sm:py-24 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
        <figure>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-night shadow-md">
            <img src={copy.image} alt={copy.alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
          </div>
          <figcaption className="mt-3 text-stone text-xs sm:text-sm italic leading-relaxed">{copy.caption}</figcaption>
        </figure>
        <div>
          <p className="inline-flex px-3 py-1 rounded-full bg-finland-blue/10 text-finland-blue text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">{copy.kicker}</p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal leading-[1.1] tracking-wide mb-5">
            {copy.h2a} <span className="text-vibe-pink">{copy.h2b}</span>
          </h2>
          <p className="text-graphite text-base sm:text-lg leading-relaxed mb-7">{copy.body}</p>
          <a
            href={href}
            target="_blank"
            rel="noopener"
            {...out}
            className="inline-flex items-center justify-center text-center leading-snug gap-2 px-7 py-3.5 min-h-11 bg-charcoal hover:bg-[#BE185D] text-snow rounded-full font-semibold transition-colors"
          >
            {copy.cta}
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
