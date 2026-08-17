import { ArrowUpRight, ExternalLink, UtensilsCrossed, Flame } from 'lucide-react';
import { factsUi, type DestinationFacts as Facts, type PlaceKind } from '../data/destinationFacts';
import { useLang } from '../i18n/useLang';

const KIND_ICON: Record<PlaceKind, typeof UtensilsCrossed> = {
  food: UtensilsCrossed,
  wellness: Flame,
};

/**
 * The "this is a real place" section: verified figures, three things that are
 * actually here, and the independent local businesses worth walking to.
 *
 * The place links are deliberately plain (no affiliate wrapper, no sponsored
 * rel) because we earn nothing on them — saying so in the note is the point.
 * Only the accommodation CTAs on this page are monetised.
 */
export default function DestinationFacts({ facts }: { facts: Facts }) {
  const lang = useLang();
  const t = (m: Record<string, string>) => m[lang] ?? m.en;

  const byKind = (kind: PlaceKind) => facts.places.filter((p) => p.kind === kind);
  const groups: { kind: PlaceKind; label: string }[] = [
    { kind: 'food', label: t(factsUi.foodLabel) },
    { kind: 'wellness', label: t(factsUi.wellnessLabel) },
  ];

  return (
    <section className="py-16 sm:py-24 px-5 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
          {t(factsUi.highlightsKicker)}
        </p>
        <h2 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight tracking-wide mb-10">
          {t(factsUi.highlightsH2)}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
          {facts.highlights.map((h, i) => (
            <article
              key={h.title.en}
              className="relative bg-white border border-charcoal/8 rounded-2xl p-6 pt-7 shadow-sm overflow-hidden"
            >
              <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gold to-gold/20" />
              <span className="block font-heading text-gold/70 text-lg leading-none mb-2">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-heading text-2xl text-charcoal leading-tight mb-3 tracking-wide">
                {t(h.title)}
              </h3>
              <p className="text-graphite text-[15px] leading-relaxed">{t(h.body)}</p>
            </article>
          ))}
        </div>

        <div className="border-t border-charcoal/10 pt-12">
          <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
            {t(factsUi.placesKicker)}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl text-charcoal leading-tight tracking-wide mb-4">
            {t(factsUi.placesH2)}
          </h2>
          <p className="text-graphite text-[15px] leading-relaxed max-w-3xl mb-8">{t(factsUi.placesNote)}</p>

          {/* Was a bare bulleted list of links — Vesa 2026-08-17. Same links, but
              grouped into cards with a category icon so the section reads as
              editorial recommendations rather than a footer link dump. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {groups.map(({ kind, label }) => {
              const items = byKind(kind);
              if (items.length === 0) return null;
              const Icon = KIND_ICON[kind];
              return (
                <div key={kind} className="bg-white border border-charcoal/8 rounded-2xl p-6 shadow-sm">
                  <p className="flex items-center gap-2 text-gold text-[11px] font-semibold tracking-[0.22em] uppercase mb-4">
                    <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                    {label}
                  </p>
                  <ul className="divide-y divide-charcoal/8">
                    {items.map((p) => (
                      <li key={p.name}>
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noopener"
                          className="group flex items-center justify-between gap-3 py-2.5 text-charcoal hover:text-vibe-pink transition-colors"
                        >
                          <span className="font-medium">{p.name}</span>
                          <ExternalLink
                            className="w-3.5 h-3.5 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <p className="text-stone text-[12px] leading-relaxed mt-10 max-w-3xl">{t(factsUi.sourceNote)}</p>

          {facts.networkLinks.length > 0 && (
            <div className="mt-10 pt-8 border-t border-charcoal/10">
              <h3 className="font-body text-[13px] font-semibold text-stone uppercase tracking-[0.16em] mb-4">
                {t(factsUi.networkH3)}
              </h3>
              <div className="flex flex-wrap gap-3">
                {facts.networkLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-charcoal/15 text-charcoal text-sm font-semibold hover:border-vibe-pink hover:text-vibe-pink transition-colors"
                  >
                    {t(l.label)}
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
