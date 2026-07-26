import { ArrowUpRight, Home, Building2, MapPin } from 'lucide-react';
import { useLang } from '../i18n/useLang';
import { getCopy } from '../locales/copy';
import { withUtm } from '../lib/utm';

interface Portal {
  name: string;
  domain: string;
  url: string;
  scope: 'national' | 'rental-only' | 'corporate' | 'classifieds';
}

const PORTALS_BASE: Portal[] = [
  { name: 'Oikotie Asunnot', domain: 'oikotie.fi', url: 'https://asunnot.oikotie.fi/vuokrattavat-asunnot/koko-suomi?locations=Lapland', scope: 'national' },
  { name: 'Vuokraovi.com', domain: 'vuokraovi.com', url: 'https://www.vuokraovi.com/vuokra-asunnot/Lapin-maakunta', scope: 'rental-only' },
  { name: 'Etuovi.com', domain: 'etuovi.com', url: 'https://www.etuovi.com/vuokra-asunnot/lapin-maakunta', scope: 'rental-only' },
  { name: 'Tori Vuokra-asunnot', domain: 'tori.fi', url: 'https://www.tori.fi/koko_suomi/asunnot/vuokra_asunnot?ca=1&l=0&m=&w=110', scope: 'classifieds' },
  { name: 'Lumo', domain: 'lumo.fi', url: 'https://lumo.fi/vuokra-asunnot/?city=Rovaniemi', scope: 'corporate' },
  { name: 'SATO', domain: 'sato.fi', url: 'https://www.sato.fi/fi/vuokra-asunnot?city=Rovaniemi', scope: 'corporate' },
];

// Portal descriptions are kept per-locale; index aligns with PORTALS_BASE.
const PORTAL_DESC_EN: string[] = [
  "Finland's largest property portal. By volume the most active rental marketplace, with the deepest Lapland inventory across Rovaniemi, Levi, Kemi, Tornio.",
  'Rental-only portal owned by Sanoma. Newer rental listings often appear here first because the publishing flow is single-purpose. Strong for Rovaniemi.',
  "Sanoma's sister portal to Vuokraovi. Same publishing source but indexed differently in Google, so duplicate-checking both is worth it for high-demand months.",
  'Direct landlord-to-tenant classifieds, no agent fees, sometimes flexible terms. Vet listings carefully (occasional scams). Strongest for short-term sublets and rooms.',
  'Major corporate landlord with a building presence in Rovaniemi. Standardised contracts, online application, fast move-in. Best if you need predictability over price.',
  'Second major corporate landlord. Limited Lapland inventory (Rovaniemi only) but the application process is the most online-friendly of the corporates.',
];

const PORTAL_DESC_FI: string[] = [
  'Suomen suurin kiinteistöportaali. Volyymiltaan aktiivisin vuokramarkkinapaikka, syvin Lapin tarjonta Rovaniemen, Levin, Kemin ja Tornion alueilla.',
  'Sanoman omistama vain-vuokra-portaali. Uudet ilmoitukset näkyvät usein täällä ensin, koska julkaisuvirta on yksitarkoituksinen. Vahva Rovaniemellä.',
  'Sanoman sisarportaali Vuokraovelle. Sama julkaisulähde mutta eri Googlen indeksointi, joten molempien tarkistaminen kannattaa kysytyimpinä kuukausina.',
  'Suora vuokranantajan ja vuokralaisen kanava, ei välityskuluja, joskus joustavat ehdot. Tarkasta ilmoitukset huolella (satunnaisia huijauksia). Vahvin lyhytaikaisille alivuokrille ja huoneille.',
  'Iso yritysvuokranantaja, jolla on rakennuksia Rovaniemellä. Vakioidut sopimukset, verkkohaku, nopea muutto. Paras kun haluat ennustettavuutta hinnan sijaan.',
  'Toinen iso yritysvuokranantaja. Rajallinen Lapin tarjonta (vain Rovaniemi), mutta hakuprosessi on yritysvuokraajista verkkoystävällisin.',
];

const PORTAL_DESC_DE: string[] = [
  'Finnlands größtes Immobilienportal. Volumenmäßig der aktivste Mietmarktplatz mit dem tiefsten Lappland-Angebot in Rovaniemi, Levi, Kemi, Tornio.',
  'Nur-Miete-Portal von Sanoma. Neue Inserate erscheinen häufig zuerst hier, weil der Publikationsfluss eindeutig ist. Stark in Rovaniemi.',
  'Schwesterportal von Sanoma zu Vuokraovi. Gleiche Veröffentlichungsquelle, aber unterschiedliche Indexierung in Google; in stark nachgefragten Monaten lohnt sich der Doppel-Check.',
  'Direktkleinanzeigen vom Vermieter, keine Maklergebühren, gelegentlich flexible Bedingungen. Inserate sorgfältig prüfen (gelegentliche Betrugsversuche). Am stärksten bei Kurzmieten und WG-Zimmern.',
  'Großer institutioneller Vermieter mit Gebäudebestand in Rovaniemi. Standardverträge, Online-Bewerbung, schneller Einzug. Am besten, wenn Berechenbarkeit wichtiger ist als der Preis.',
  'Zweiter großer institutioneller Vermieter. Begrenztes Lappland-Angebot (nur Rovaniemi), aber der Bewerbungsprozess ist online-freundlich.',
];

export default function LongTermRentals() {
  const lang = useLang();
  const t = getCopy(lang).longTermRentals;
  const descriptions = lang === 'fi' ? PORTAL_DESC_FI : lang === 'de' ? PORTAL_DESC_DE : PORTAL_DESC_EN;

  const SCOPE_TAG: Record<Portal['scope'], { label: string; bg: string }> = {
    national: { label: t.tags.national, bg: 'bg-vibe-pink/12 text-vibe-pink border-vibe-pink/30' },
    'rental-only': { label: t.tags.rentalOnly, bg: 'bg-arctic-cyan/15 text-arctic-cyan border-arctic-cyan/30' },
    corporate: { label: t.tags.corporate, bg: 'bg-gold/15 text-gold border-gold/40' },
    classifieds: { label: t.tags.classifieds, bg: 'bg-aurora-green/12 text-aurora-green border-aurora-green/30' },
  };

  return (
    <section className="py-20 sm:py-24 px-5 sm:px-6 bg-cream-2/60">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <p className="text-vibe-pink text-[11px] font-semibold tracking-[0.28em] uppercase mb-3">
            {t.eyebrow}
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal leading-[1.1] tracking-wide mb-5">
            {t.h2A} <span className="text-vibe-pink">{t.h2B}</span>
          </h2>
          <p className="text-graphite text-base sm:text-lg leading-relaxed">{t.lead}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {PORTALS_BASE.map((p, i) => {
            const tag = SCOPE_TAG[p.scope];
            return (
              <a
                key={p.domain}
                href={withUtm(p.url, 'long_stays_portal')}
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
                <h3 className="font-heading text-2xl text-charcoal leading-tight mb-1">{p.name}</h3>
                <p className="text-stone text-[12px] mb-3 font-mono">{p.domain}</p>
                <p className="text-graphite text-[14px] leading-relaxed flex-1">{descriptions[i]}</p>
              </a>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          <div className="bg-white border border-charcoal/8 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-vibe-pink/15 flex items-center justify-center mb-3">
              <Home className="w-5 h-5 text-vibe-pink" />
            </div>
            <h3 className="font-heading text-xl text-charcoal mb-2">{t.process.title}</h3>
            <p className="text-graphite text-[14px] leading-relaxed">{t.process.body}</p>
          </div>
          <div className="bg-white border border-charcoal/8 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-arctic-cyan/15 flex items-center justify-center mb-3">
              <Building2 className="w-5 h-5 text-arctic-cyan" />
            </div>
            <h3 className="font-heading text-xl text-charcoal mb-2">{t.cost.title}</h3>
            <p className="text-graphite text-[14px] leading-relaxed">{t.cost.body}</p>
          </div>
          <div className="bg-white border border-charcoal/8 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center mb-3">
              <MapPin className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-heading text-xl text-charcoal mb-2">{t.abroad.title}</h3>
            <p className="text-graphite text-[14px] leading-relaxed">{t.abroad.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
