import type { CSSProperties } from 'react';

/**
 * Heading width estimates for fitting a display heading to its column (Vesa 3.10.2026: "tehdään turhaan
 * kolmirivisiä"). Same idea as the hub hero (laplandvibes/src/components/Hero.tsx), with the glyph widths
 * measured from Bebas Neue (laplandsnowmobile, same face) in Chrome on 3.10.2026 (canvas, 100 px):
 *   most capitals and digits 0.34–0.43 em (estimate 0.4), M 0.54 and W 0.56 (0.56), I/J and . , : ; ' ’ ! 0.19–0.27
 *   (0.2), space 0.16 (0.2), ß 0.74. A CJK glyph comes from the fallback face: 1.05 em (1.0 left ja/zh lines
 *   1–8 px wider than the column on the hub, and they broke).
 * `tracking` is the heading's letter-spacing in em (tracking-wide = 0.025), added once per glyph: without it
 * "WAT TE VERWACHTEN" came out 0.4 em short and still broke before the last word.
 */
const CJK_CHAR = /[　-ヿ㐀-鿿가-힯＀-￯]/;
const WIDE = /[mwßMW]/;
const NARROW = /[ijIJíìîïÍÌÎÏ.,:;!'’‘]/;

export const hasCjk = (s: string): boolean => CJK_CHAR.test(s);

export const emWidth = (s: string, tracking = 0): number =>
  [...s].reduce(
    (w, ch) =>
      w +
      tracking +
      (CJK_CHAR.test(ch) ? 1.05 : ch === ' ' ? 0.2 : ch === 'ß' ? 0.74 : WIDE.test(ch) ? 0.56 : NARROW.test(ch) ? 0.2 : 0.4),
    0,
  );

/**
 * One-line fit for a short section heading on a computer (lg+). The heading's column must carry `@container`
 * and the heading `lg:[--fit-max:<designed size>]`. Size = the smaller of the designed size and the size at
 * which the whole heading fits the column (100cqi / width in em). Applied only when the heading is at most
 * `maxEm` wide, so a heading meant to run to two lines is not shrunk to a sliver: callers pick `maxEm` so the
 * fitted size stays ≥ ~80 % of the design at 1280 px. Returns the class and the CSS variable for `style`.
 */
export function fitOneLine(text: string, maxEm: number, tracking = 0): { className: string; style: CSSProperties } {
  const em = emWidth(text, tracking);
  if (em > maxEm) return { className: '', style: {} };
  return {
    className: 'lg:[font-size:min(var(--fit-max),calc(100cqi/var(--fit-em)))]',
    style: { '--fit-em': em.toFixed(2) } as CSSProperties,
  };
}
