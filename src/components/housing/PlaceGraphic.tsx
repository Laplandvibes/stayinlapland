import { MapPin } from 'lucide-react';

/**
 * Graafinen korttitausta paikalle, josta ei ole omaa valokuvaa.
 *
 * 🔴 Ei toisen paikan valokuvaa eikä AI-kuvaa: kuva, joka näyttää paikan jota se
 * ei ole nähnyt, on se mihin tällä sivustolla ei ole varaa (Vesa 26.7.2026,
 * sama sääntö kuin PageHeron kuvattomassa taustassa). Kun oma kuva saadaan,
 * anna kortille `image` ja tämä jää pois itsestään.
 */
export default function PlaceGraphic() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-finland-blue via-night to-[#1e1b4b]" aria-hidden="true">
      <div className="absolute -right-6 -bottom-8 w-40 h-40 rounded-full border border-white/10" />
      <div className="absolute -right-14 -bottom-16 w-64 h-64 rounded-full border border-white/10" />
      <div className="absolute -right-24 -bottom-28 w-96 h-96 rounded-full border border-white/5" />
      <MapPin className="absolute right-5 top-5 w-7 h-7 text-vibe-pink" />
    </div>
  );
}
