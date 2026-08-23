import { stayingUi, type StayingNote } from '../data/destinationStaying';
import { useLang } from '../i18n/useLang';

/**
 * Areas, not properties.
 *
 * It sits above the property list on purpose: which part of a destination you
 * sleep in is the decision that comes first, and until now the page went
 * straight from "here is the place" to "here are five stays" with nothing in
 * between. Deliberately unmonetised — the note says so, and the paid CTAs are
 * all further down.
 */
export default function DestinationAreas({ notes }: { notes: Record<string, StayingNote> }) {
  const lang = useLang();
  const t = (m: Record<string, string>) => m[lang] ?? m.en;
  const items = Object.values(notes);
  if (!items.length) return null;

  // No background tint: the property list right below is already
  // `bg-cream-2/60`, and two tinted bands in a row read as one long block.
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
          {t(stayingUi.kicker)}
        </p>
        <h2 className="font-heading text-4xl sm:text-5xl text-charcoal leading-tight tracking-wide mb-4">
          {t(stayingUi.h2)}
        </h2>
        <p className="text-graphite text-[15px] leading-relaxed max-w-3xl mb-10">
          {t(stayingUi.note)}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((n) => (
            <article
              key={n.title.en}
              className="bg-white border border-charcoal/8 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="font-heading text-2xl text-charcoal leading-tight mb-3 tracking-wide">
                {t(n.title)}
              </h3>
              <p className="text-graphite text-[15px] leading-relaxed">{t(n.body)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
