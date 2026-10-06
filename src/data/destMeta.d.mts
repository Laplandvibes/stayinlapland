// Types for destMeta.mjs (the /destinations/<slug> title and description composer shared with
// scripts/generate-prerender-meta.mjs).
export function descriptionWindowProblem(d: string): string | null;
export function destTitle(name: string, suffix: string): string;
export function destDescription(o: {
  pitch: string;
  longStayAngle?: string;
  metaDescription?: string;
  lang: string;
}): string;
