import { ChevronDown, ShieldCheck } from 'lucide-react';
import { PhotoCreditList } from './PhotoCredit';
import type { PhotoCredit as Credit } from '../data/photoCredits';

/**
 * Lähteet, tarkistusmerkintä ja kuvien tekijätiedot YHDEN suljetun rivin takana
 * sivun lopussa.
 *
 * Vesa 23.9.2026 etusivun lähdeluettelosta: *"mitä nämä lähteet on? ei kait
 * ainakaan näin selkeästi tulisi olla nämä?"* Luettelo oli 8–17 alleviivattua
 * riviä omana osionaan ja tarkistusmerkintä sen yläpuolella, eli sivun loppu
 * näytti lähdeluettelolta eikä asumisoppaalta.
 *
 * 🔴 Kaksi sääntöä, jotka tämä pitää yhtä aikaa:
 *   1. Näkyvyys: suljettuna rivi on yksi hiuksenohut palkki ("Lähteet ja kuvat · 17").
 *   2. lv_permanent_rules §33 (Vesa 20.9.2026): lähdeviite ei saa olla sivun vaikein
 *      rivi lukea ⇒ AVATTUNA lähteet ovat 16 px ja täydellä musteella. Pienentäminen
 *      ei ollut ratkaisu; piilottaminen avattavan rivin taakse on.
 * Sisältö on DOMissa myös suljettuna (details), joten hakukone ja ryömittävä runko
 * näkevät lähteet.
 */
export interface SourceLink {
  id: string;
  label: string;
  url: string;
}

export default function SourcesDisclosure({
  summary,
  count,
  updated,
  note,
  sourcesLead,
  sources = [],
  photoCredits = [],
  photosHeading,
  photosLead,
  page,
}: {
  /** Rivin otsikko, esim. "Lähteet ja kuvat". */
  summary: string;
  /** Näytettävä lukumäärä; oletus = lähteiden määrä. */
  count?: number;
  /** "Tarkistettu 17.9.2026" — näkyy rivillä oikealla. */
  updated?: string;
  /** Tarkistusmerkinnän teksti (entinen AuthorByline). */
  note?: string;
  sourcesLead?: string;
  sources?: SourceLink[];
  photoCredits?: Credit[];
  photosHeading?: string;
  photosLead?: string;
  /** Umami-sivutunniste ulos vieville linkeille. */
  page: string;
}) {
  const n = count ?? sources.length;
  return (
    <section className="px-5 sm:px-6 py-8 sm:py-10">
      <details className="group max-w-3xl mx-auto border-y border-charcoal/12">
        <summary className="cursor-pointer list-none flex items-center gap-3 py-4 min-h-11 text-graphite hover:text-charcoal transition-colors">
          <ShieldCheck className="w-4 h-4 shrink-0 text-[#7A5C1E]" aria-hidden="true" />
          <span className="text-[15px] font-semibold">
            {summary}
            {n > 0 && <span className="ml-1.5 font-normal text-stone">· {n}</span>}
          </span>
          {updated && <span className="ml-auto text-[13px] text-stone whitespace-nowrap hidden sm:inline">{updated}</span>}
          <ChevronDown className="w-4 h-4 shrink-0 text-stone transition-transform group-open:rotate-180 sm:ml-2 ml-auto" aria-hidden="true" />
        </summary>
        <div className="pb-8 pt-2">
          {note && <p className="text-charcoal text-base leading-relaxed">{note}</p>}
          {sources.length > 0 && (
            <>
              {sourcesLead && <p className="mt-5 text-graphite text-base leading-relaxed">{sourcesLead}</p>}
              <ol className="mt-3 space-y-2 text-base leading-relaxed list-decimal pl-6 marker:text-stone">
                {sources.map((s) => (
                  <li key={s.id} className="text-charcoal">
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener"
                      className="lv-tap underline underline-offset-2 decoration-charcoal/30 hover:text-[#BE185D] hover:decoration-[#BE185D]"
                      data-umami-event="housing_out"
                      data-umami-event-page={page}
                      data-umami-event-target={`source_${s.id}`}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ol>
            </>
          )}
          {updated && <p className="mt-4 text-graphite text-[15px] sm:hidden">{updated}</p>}
          {photoCredits.length > 0 && photosHeading && (
            <PhotoCreditList credits={photoCredits} heading={photosHeading} lead={photosLead ?? ''} />
          )}
        </div>
      </details>
    </section>
  );
}
