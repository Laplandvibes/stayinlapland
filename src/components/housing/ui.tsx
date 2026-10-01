/**
 * Asumissivujen yhteiset pienet ilmeosat (Vesa 18.9.2026: eloa ja korostusvärejä).
 */

/** Kaksisävyinen otsikko: ensimmäisen välimerkin jälkeinen osa pinkillä, kuten sivuston heroissa. */
export function TwoTone({ text }: { text: string }) {
  const m = text.match(/^(.{6,}?[,:.!?])\s+(.{4,})$/);
  if (!m) return <>{text}</>;
  return (
    <>
      {m[1]} <span className="text-vibe-pink">{m[2]}</span>
    </>
  );
}

/**
 * Otsikkolapun perusluokat. Lappu on värikorostus (pinkki, sininen, kulta tai tumma kaista),
 * teksti tavallisella kirjainkoolla ja ilman harvennusta: 11 px:n harvennettu versaali luki
 * puhelimessa koristeena eikä tekstinä (Vesa 1.10.2026).
 */
export const CHIP_BASE = 'inline-flex px-3 py-1 rounded-full text-[13px] font-semibold leading-snug';

/** Otsikkolappu. tone: vaalean pohjan aksentti tai tumma kaista. */
export function KickerChip({ children, tone = 'pink' }: { children: React.ReactNode; tone?: 'pink' | 'blue' | 'gold' | 'night' }) {
  const cls = {
    pink: 'bg-vibe-pink/10 text-[#BE185D]',
    blue: 'bg-finland-blue/10 text-finland-blue',
    gold: 'bg-gold-soft/70 text-[#7A5C1E]',
    night: 'bg-white/10 text-[#F9A8D4]',
  }[tone];
  return <p className={`${CHIP_BASE} ${cls}`}>{children}</p>;
}
