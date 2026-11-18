import { Footprints } from 'lucide-react'
import type { AdSpec } from '../AdUnit'

// Icebug — ruotsalainen liukkaan kelin jalkinemerkki (nastakengät, pitopohjat).
// Talvivaruste-/pakkassisältöjen slotti: hub (revontulisivun what-to-wear),
// skiresorts (keliolosuhteet). Adtraction-ohjelma Icebug FI hyväksytty
// 3.8.2026, reitti go/icebug (a=1963340650, pin.icebug.com) verifioitu GETillä
// + kontrollikokeella (ilman as= ei at_gd-evästettä) samana päivänä.
//
// 🔴 VAIN fi-copy TARKOITUKSELLA: ohjelman kauppa on icebug.com/fi-FI, jonka
// toimitusehdot (luettu 3.8.2026) sanovat "Suomeen toimitus Postin
// välityksellä" — kauppa palvelee Suomea. AdUnit renderöi tyhjää muilla
// lokaaleilla kun en-fallbackia ei ole, eli kortti näkyy vain /fi-sivuilla.
// Älä lisää en-copyä: mainos joka kutsuu ostamaan kaupasta, joka ei toimita
// ostajan maahan, on sama vikaluokka kuin nordicnestin worldwide-väite.
//
// Väriperustelu: Icebugin brändi on mustavalkoinen (sivuston CTA-nappi
// rgb(38,38,38)), joten accent on neutraali tumma #404040 (valkoinen teksti
// päällä 10,37:1, AA + AAA) ja accentDark brändin oma nappimusta #262626
// (15,13:1) — sama monokromiratkaisu kuin Makialla.
// Logot: icebug.png (tumma, vaalea kortti) + icebug-white.png (tumma kortti),
// lähde icebug.comin oma header-SVG (kumppanin oma vektorilogo, kaksi
// täyttöversiota). Arkistokopiot _affiliate/logos/adtraction-icebug*.png.
const icebug: AdSpec = {
  key: 'icebug',
  brand: 'Icebug',
  logo: '/images/partners/icebug.png',
  logoDark: '/images/partners/icebug-white.png',
  // dest=nastakengät (unisex-kategoria): ilman destiä Adtraction-wrap pudottaa
  // icebug.com:n ETUSIVULLE (lv_permanent_rules §5). Kategoria täsmää copyyn
  // "nastakengät ja pitopohjat jäiselle kelille"; miesten/naisten alasivujen
  // sijaan yhteinen studded-winter-boots kattaa molemmat (87 tuotetta).
  // Verifioitu selaimessa 2026-08-14: <title> "Nastakengät | Icebug",
  // tuotelistaus hintoineen renderöityy. HUOM: icebug.com vastaa curlille
  // 429 — verifiointi vaatii selaimen, älä "korjaa" tätä curl-mittauksella.
  linkFor: (sid) => `https://go.laplandvibes.com/go/icebug?sid=${encodeURIComponent(sid)}&dest=${encodeURIComponent('https://icebug.com/fi-FI/category/studded-winter-boots')}`,
  accent: '#404040',
  accentDark: '#262626',
  icon: Footprints,
  copy: {
    fi: {
      eyebrow: 'Liukkaan kelin kengät',
      headline: 'Icebug, nastakengät ja pitopohjat jäiselle kelille',
      sub: 'Ruotsalainen jalkinemerkki, joka on erikoistunut liukkaan kelin kenkiin: nastapohjaiset talvikengät ja pitävät ulkopohjat kävelyyn, juoksuun ja vaellukseen. Jäisellä pihalla, ladulla ja revontuliretkellä pito ratkaisee enemmän kuin mikään muu varuste. Suomen kauppa toimittaa Postin välityksellä.',
      trust: ['Nastapohjat ja pitopohjat', 'Tehty liukkaalle kelille', 'Toimitus Suomeen Postilla'],
      cta: 'Katso talvikengät',
      poweredBy: 'Kengät Icebugilta',
    },
  },
}

export default icebug
