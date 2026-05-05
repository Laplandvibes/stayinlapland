import { ArrowUpRight, Briefcase } from 'lucide-react';

interface WorkInLaplandPromoProps {
  /** SID-like placement tag for analytics. */
  placement: string;
  variant?: 'full' | 'inline';
}

/**
 * Cross-promo to laplandwork.com — sister site for the long-stay audience that
 * also wants seasonal work, remote-work + Lapland-base, or moves here outright.
 * Outbound link tagged so we can read it in laplandwork.com analytics.
 */
export default function WorkInLaplandPromo({ placement, variant = 'full' }: WorkInLaplandPromoProps) {
  const href = `https://laplandwork.com/?utm_source=stayinlapland&utm_medium=crosslink&utm_campaign=${encodeURIComponent(placement)}`;

  if (variant === 'inline') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener"
        className="group flex items-start gap-4 px-5 py-4 sm:px-6 sm:py-5 bg-cream-2 border-l-2 border-vibe-pink rounded-r-xl no-underline transition-colors hover:bg-cream-2/80"
      >
        <div className="w-10 h-10 rounded-full bg-vibe-pink/15 flex items-center justify-center shrink-0 mt-0.5">
          <Briefcase className="w-4 h-4 text-vibe-pink" />
        </div>
        <div className="flex-1">
          <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.2em] uppercase mb-1">
            Coming to Lapland for work?
          </p>
          <p className="text-charcoal text-[15px] leading-relaxed">
            Seasonal jobs, remote-work bases and ski-resort hospitality openings live on our
            sister site <span className="font-semibold underline decoration-vibe-pink/50 underline-offset-2">laplandwork.com</span>.
            <span className="inline-flex items-center gap-1 ml-1 text-vibe-pink group-hover:gap-1.5 transition-all">
              Browse jobs
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </p>
        </div>
      </a>
    );
  }

  return (
    <section className="py-20 sm:py-24 px-5 sm:px-6 bg-cream-2/60">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
              Sister site · laplandwork.com
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal leading-[1.1] tracking-tight mb-5">
              Coming to Lapland <span className="italic font-light">for work?</span>
            </h2>
            <p className="text-graphite text-base sm:text-lg leading-relaxed mb-4">
              Many of the long-stays on this site are booked by people who came up for a
              ski season, an Arctic-engineering contract or a remote-work month — and ended
              up loving it. If that&rsquo;s why you&rsquo;re here, we built a separate site
              just for the work side.
            </p>
            <p className="text-graphite text-base sm:text-lg leading-relaxed mb-7">
              <span className="font-semibold text-charcoal">LaplandWork.com</span> is the
              centralised job hub for Finnish Lapland — seasonal hospitality, ski-resort
              roles, husky-kennel openings, hospital and engineering jobs across Rovaniemi,
              Levi, Saariselkä and Inari. Free for jobseekers, three pricing tiers for
              employers.
            </p>
            <a
              href={href}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-charcoal hover:bg-vibe-pink text-snow rounded-full font-semibold transition-colors"
            >
              Browse jobs at laplandwork.com
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Seasonal hospitality', tag: 'Levi · Ylläs · Saariselkä' },
                { label: 'Husky kennels', tag: 'Nov–Apr seasonal' },
                { label: 'Remote-work bases', tag: 'Year-round, fibre' },
                { label: 'Healthcare + tech', tag: 'Permanent positions' },
              ].map((b) => (
                <div
                  key={b.label}
                  className="bg-white border border-charcoal/8 rounded-xl p-4"
                >
                  <p className="font-heading text-lg text-charcoal leading-tight mb-1">
                    {b.label}
                  </p>
                  <p className="text-stone text-[12px]">{b.tag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
