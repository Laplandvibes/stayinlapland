import { ArrowUpRight, Home, Building2, MapPin } from 'lucide-react';

interface Portal {
  name: string;
  domain: string;
  url: string;
  description: string;
  scope: 'national' | 'rental-only' | 'corporate' | 'classifieds';
}

const PORTALS: Portal[] = [
  {
    name: 'Oikotie Asunnot',
    domain: 'oikotie.fi',
    url: 'https://asunnot.oikotie.fi/vuokrattavat-asunnot/koko-suomi?locations=Lapland',
    description:
      'Finland\'s largest property portal — by volume the most active rental marketplace, with the deepest Lapland inventory across Rovaniemi, Levi, Kemi, Tornio.',
    scope: 'national',
  },
  {
    name: 'Vuokraovi.com',
    domain: 'vuokraovi.com',
    url: 'https://www.vuokraovi.com/vuokra-asunnot/Lapin-maakunta',
    description:
      'Rental-only portal owned by Sanoma — newer rental listings often appear here first because the publishing flow is single-purpose. Strong for Rovaniemi.',
    scope: 'rental-only',
  },
  {
    name: 'Etuovi.com',
    domain: 'etuovi.com',
    url: 'https://www.etuovi.com/vuokra-asunnot/lapin-maakunta',
    description:
      'Sanoma\'s sister portal to Vuokraovi — same publishing source but indexed differently in Google, so duplicate-checking both is worth it for high-demand months.',
    scope: 'rental-only',
  },
  {
    name: 'Tori Vuokra-asunnot',
    domain: 'tori.fi',
    url: 'https://www.tori.fi/koko_suomi/asunnot/vuokra_asunnot?ca=1&l=0&m=&w=110',
    description:
      'Direct landlord-to-tenant classifieds — no agent fees, sometimes flexible terms. Vet listings carefully (occasional scams). Strongest for short-term sublets and rooms.',
    scope: 'classifieds',
  },
  {
    name: 'Lumo',
    domain: 'lumo.fi',
    url: 'https://lumo.fi/vuokra-asunnot/?city=Rovaniemi',
    description:
      'Major corporate landlord with a building presence in Rovaniemi. Standardised contracts, online application, fast move-in. Best if you need predictability over price.',
    scope: 'corporate',
  },
  {
    name: 'SATO',
    domain: 'sato.fi',
    url: 'https://www.sato.fi/fi/vuokra-asunnot?city=Rovaniemi',
    description:
      'Second major corporate landlord. Limited Lapland inventory (Rovaniemi only) but the application process is the most online-friendly of the corporates.',
    scope: 'corporate',
  },
];

const SCOPE_TAG: Record<Portal['scope'], { label: string; bg: string }> = {
  national: { label: 'NATIONAL', bg: 'bg-vibe-pink/12 text-vibe-pink border-vibe-pink/30' },
  'rental-only': { label: 'RENTAL ONLY', bg: 'bg-arctic-cyan/15 text-arctic-cyan border-arctic-cyan/30' },
  corporate: { label: 'CORPORATE', bg: 'bg-gold/15 text-gold border-gold/40' },
  classifieds: { label: 'DIRECT FROM LANDLORD', bg: 'bg-aurora-green/12 text-aurora-green border-aurora-green/30' },
};

export default function LongTermRentals() {
  return (
    <section className="py-20 sm:py-24 px-5 sm:px-6 bg-cream-2/60">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
            Moving to Lapland · 6 months and longer
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal leading-[1.1] tracking-tight mb-5">
            Looking for a real apartment, <span className="italic font-light">not a rental?</span>
          </h2>
          <p className="text-graphite text-base sm:text-lg leading-relaxed">
            The properties on this site are short-to-medium-term rentals booked through
            Hotels.com — the right answer for trips up to four weeks. For 6&nbsp;months,
            a year, or a permanent move, you want the Finnish national rental portals.
            These are the six most active for Lapland inventory.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {PORTALS.map((p) => {
            const tag = SCOPE_TAG[p.scope];
            return (
              <a
                key={p.domain}
                href={p.url}
                target="_blank"
                rel="noopener nofollow"
                className="group flex flex-col p-6 bg-white border border-charcoal/8 hover:border-charcoal/20 hover:shadow-md rounded-2xl transition-all"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className={`inline-flex items-center text-[10px] font-bold tracking-[0.18em] uppercase px-2 py-1 rounded-full border ${tag.bg}`}>
                    {tag.label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-stone group-hover:text-vibe-pink transition-colors" />
                </div>
                <h3 className="font-heading text-2xl text-charcoal leading-tight mb-1">
                  {p.name}
                </h3>
                <p className="text-stone text-[12px] mb-3 font-mono">{p.domain}</p>
                <p className="text-graphite text-[14px] leading-relaxed flex-1">
                  {p.description}
                </p>
              </a>
            );
          })}
        </div>

        {/* Practical info row */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          <div className="bg-white border border-charcoal/8 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-vibe-pink/15 flex items-center justify-center mb-3">
              <Home className="w-5 h-5 text-vibe-pink" />
            </div>
            <h3 className="font-heading text-xl text-charcoal mb-2">Typical process</h3>
            <p className="text-graphite text-[14px] leading-relaxed">
              Email landlord/agent → in-person viewing → application form (palkkatodistus +
              luottotiedot) → 1–2 month deposit + first month\'s rent → keys.
              2–6 weeks lead time is realistic.
            </p>
          </div>
          <div className="bg-white border border-charcoal/8 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-arctic-cyan/15 flex items-center justify-center mb-3">
              <Building2 className="w-5 h-5 text-arctic-cyan" />
            </div>
            <h3 className="font-heading text-xl text-charcoal mb-2">What it costs</h3>
            <p className="text-graphite text-[14px] leading-relaxed">
              Rovaniemi 1-bedroom: €600–900/month. Levi/Saariselkä 1-bedroom (winter
              season): €900–1 400. Outside winter peak in ski villages, prices drop 30–40%.
              All figures include water; electricity + heating are usually separate.
            </p>
          </div>
          <div className="bg-white border border-charcoal/8 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center mb-3">
              <MapPin className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-heading text-xl text-charcoal mb-2">Coming from abroad?</h3>
            <p className="text-graphite text-[14px] leading-relaxed">
              EU/EEA citizens can rent freely. Non-EU need residence permit (Migri
              processing 1–4 months). The job hub at <strong className="text-charcoal">laplandwork.com</strong> covers Migri,
              Kela registration, Finnish bank account opening, tax card and the full
              moving-to-Lapland checklist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
