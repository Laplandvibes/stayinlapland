import type { PhotoCredit as Credit } from '../data/photoCredits';

/**
 * Tekijä ja lisenssi kuvan päälle — vain avoimen lisenssin kuville
 * (`src/data/photoCredits.ts`). Omat kuvat eivät saa merkintää.
 *
 * Kaksi muotoa:
 *   - `linked` (oletus): tekijä linkkinä Commonsin tiedostosivulle ja lisenssi
 *     linkkinä lisenssiin. Käytä kun kuva EI ole linkin sisällä (hero, osion kuva).
 *   - `linked={false}`: pelkkä teksti. Käytä kun koko kortti on linkki, koska
 *     linkkiä ei saa sisäkkäistää linkkiin. Linkit ovat silloin sivun lopun
 *     kuvaluettelossa (`PhotoCreditList`).
 *
 * Koko (Vesa 18.9.2026, laplandwellness): *"eikä tuo cc by tartte olla noin
 * isona"* ⇒ 9–10 px. Kontrasti: valkoinen musta/55-pohjalla on puhtaan
 * valkoisen kuvan päälläkin 4,8:1, koska pohja on kiinteä eikä kuvan varassa.
 * 🔴 Linkit ovat pieniä, joten `lv-tap` antaa 44 px:n osuma-alueen. `rel`
 * sisältää `noopener` mutta EI `noreferrer` (verkoston sääntö).
 */
export default function PhotoCredit({
  credit,
  label,
  linked = true,
}: {
  credit?: Credit;
  label: string;
  linked?: boolean;
}) {
  if (!credit) return null;
  // 🔴 Aina oikea alakulma (Vesa 23.9.2026: "kuvatiedot pitää olla aina oikea alalaita, ei me
  // mainosteta sitä"). Yläkulmavaihtoehto poistettu, ettei se palaa korttiin.
  return (
    <span className={`absolute bottom-0 right-0 rounded-tl z-10 max-w-full bg-black/55 px-1.5 py-[2px] text-[9px] sm:text-[10px] leading-tight text-white`}>
      {label}:{' '}
      {linked ? (
        <>
          <a href={credit.sourceUrl} target="_blank" rel="noopener" className="lv-tap underline decoration-white/50 underline-offset-2 hover:decoration-white">
            {credit.author}
          </a>
          {', '}
          <a href={credit.licenseUrl} target="_blank" rel="license noopener" className="lv-tap underline decoration-white/50 underline-offset-2 hover:decoration-white">
            {credit.license}
          </a>
        </>
      ) : (
        <>
          {credit.author}, {credit.license}
        </>
      )}
    </span>
  );
}

/** Sivun lopun kuvaluettelo: jokaisesta avoimen lisenssin kuvasta tiedostosivu + lisenssi linkkeinä. */
export function PhotoCreditList({
  credits,
  heading,
  lead,
}: {
  credits: Credit[];
  heading: string;
  lead: string;
}) {
  if (!credits.length) return null;
  return (
    <div className="mt-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-graphite mb-2">{heading}</p>
      <p className="text-graphite text-[15px] leading-relaxed mb-2">{lead}</p>
      <ul className="space-y-1.5 text-[15px] leading-relaxed">
        {credits.map((c) => (
          <li key={c.sourceUrl} className="text-graphite">
            <a href={c.sourceUrl} target="_blank" rel="noopener" className="text-charcoal underline underline-offset-2 hover:text-[#BE185D]">
              {c.title}
            </a>
            {' · '}
            {c.author}
            {' · '}
            <a href={c.licenseUrl} target="_blank" rel="license noopener" className="underline underline-offset-2 hover:text-[#BE185D]">
              {c.license}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Uniikit tekijätiedot annetuista kuvapoluista, esiintymisjärjestyksessä. */
export function uniqueCredits(srcs: (string | undefined)[], lookup: (s?: string) => Credit | undefined): Credit[] {
  const seen = new Set<string>();
  const out: Credit[] = [];
  for (const s of srcs) {
    const c = lookup(s);
    if (c && !seen.has(c.sourceUrl)) {
      seen.add(c.sourceUrl);
      out.push(c);
    }
  }
  return out;
}
