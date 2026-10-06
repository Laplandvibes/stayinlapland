// /destinations/<slug> <title> and meta description: ONE composer for both sides.
// scripts/generate-prerender-meta.mjs writes the prerendered HTML with it and
// src/pages/DestinationPage.tsx calls the same functions in the browser, so the two
// cannot disagree (gate:meta-hydraatio in lv-ops). Plain .mjs because a node script
// cannot import a .ts module; the types are in destMeta.d.mts.
//
// Until 2026-10-06 the rule was copied into both files and the copies had drifted:
// the generator clipped "pitch + longStayAngle" at 165 characters on a word boundary
// ("…Dorf-Hauptstraße. Langzeit-Logik") and the prerender cut it again at a sentence
// end, while the page sliced the same text at 160 characters in the middle of a word
// ("…Jeden Morg"). Google saw one description and the browser showed another.

/** ja and zh-CN write sentences back to back: no space after 。！？. Korean spaces them. */
const NO_SPACE = /^(ja|zh)/;

// The prerender window, measured the same way as ensureDescriptionLength() and
// clampDescription() in scripts/_prerender_routes.mjs: a CJK character counts as two
// width units. Inside the window the prerender leaves a description untouched; under
// it the prerender extends the text with the page's own sentences, over it the text is
// cut, and the browser would show the source text instead.
const WIDE = /[\u1100-\u11FF\u2E80-\uA4CF\uA960-\uA97F\uAC00-\uD7FF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFF60\uFFE0-\uFFE6]/;
const tidy = (s) => String(s ?? '').replace(/\s+/g, ' ').trim();
const width = (s) => [...String(s)].reduce((n, c) => n + (WIDE.test(c) ? 2 : 1), 0);
const fits = (s) => s.length <= 160 && [...s].length <= 160 && width(s) <= 200;
const longEnough = (s) => s.length >= 70 || width(s) >= 100;

/**
 * Why a description falls outside the prerender window, or null when it is inside.
 * @param {string} d
 */
export function descriptionWindowProblem(d) {
  const s = tidy(d);
  if (!fits(s)) return `over 160 characters / 200 width units (${s.length} / ${width(s)})`;
  if (!longEnough(s)) return `under 70 characters / 100 width units (${s.length} / ${width(s)})`;
  return null;
}

/** "{name}: {suffix}", e.g. "Levi: Where to Stay". */
export function destTitle(name, suffix) {
  return `${tidy(name)}: ${tidy(suffix)}`;
}

/**
 * The page's own text: the pitch (hero subtitle), then whole sentences of the
 * longStayAngle (first paragraph) for as long as they fit the window. A sentence that
 * does not fit is left out whole, never cut. `metaDescription` is a hand-written text
 * for the cases where the pitch alone is outside the window (or the composed text
 * would repeat itself); it is used as it is.
 * @param {{ pitch: string, longStayAngle?: string, metaDescription?: string, lang: string }} o
 */
export function destDescription({ pitch, longStayAngle, metaDescription, lang }) {
  if (tidy(metaDescription)) return tidy(metaDescription);
  const cjk = NO_SPACE.test(String(lang || ''));
  const rest = tidy(longStayAngle);
  const sentences = (cjk ? rest.split(/(?<=[。！？])/u) : rest.split(/(?<=[.!?。！？])\s+/u))
    .map((s) => s.trim())
    .filter(Boolean);
  let out = tidy(pitch);
  for (const s of sentences) {
    const next = !out ? s : cjk && /[。！？]$/u.test(out) ? out + s : `${out} ${s}`;
    if (!fits(next)) break;
    out = next;
  }
  return out;
}
