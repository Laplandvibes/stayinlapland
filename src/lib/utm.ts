/**
 * withUtm — editoriaalinen referral-merkintä operaattorien/venuejen OMILLE
 * sivuille vieviin ulkoisiin linkkeihin (vuokraportaalit, majoittajien omat
 * sivut jne.).
 *
 * EI kosketa: go.laplandvibes.com-affiliatelinkkejä, Lomarengas/Sembo/Trip.com-
 * kumppanilinkkejä, GetYourGuidea, Maps-linkkejä eikä LV-ekosysteemin sisäisiä
 * ristilinkkejä.
 *
 * rel pysyy editoriaalisena (EI sponsored) — tämä on referral, ei mainos.
 *
 * Data pysyy puhtaana: UTM lisätään vasta renderissä.
 */
const UTM_SOURCE = 'laplandvibes';
const UTM_MEDIUM = 'referral';
const SITE = 'stayinlapland';

export function withUtm(url: string, context: string): string {
  try {
    const u = new URL(url);
    u.searchParams.set('utm_source', UTM_SOURCE);
    u.searchParams.set('utm_medium', UTM_MEDIUM);
    u.searchParams.set('utm_campaign', `${SITE}_${context}`);
    return u.toString();
  } catch {
    return url;
  }
}
