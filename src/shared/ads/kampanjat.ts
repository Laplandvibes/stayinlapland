// Kumppanien määräaikaiset kampanjat yhdessä rekisterissä.
//
// Vesa 12.11.2026: "Ota heidän uudet kampanjat käyttöön ja ajasta niin että loppuu automaattisesti
// ja perusmainos tulee takaisin kun kampanja loppuu." Kampanja on lisäys perusmainokseen, ei sen
// korvaaja: nauha (KampanjaNauha.tsx) näkyy mainoksen yhteydessä vain aikaikkunassa ja vain
// kielillä, joilla ehdot on luettu. Päätös tehdään renderöinnin hetkellä selaimessa, joten
// kumpikaan pää ei tarvitse julkaisua (sivustot käyttävät createRootia, eikä esirenderöinnin
// tekstikeruu jäädytä nauhaa staattiseen HTML:ään).
//
// Uusi kampanja mainostajalle, jolla on jo nauha sijoituksessaan = yksi rivi KAMPANJAT-listaan.
// Uusi mainostaja = lisäksi <KampanjaNauha mainostaja="…"/> sen sijoitukseen.
//
// 🔴 Jokainen rivi vaatii: lähde (kumppanin viesti + kumppanin oma sivu, lukupäivä), tarkka
// päättymishetki Suomen aikaa, ja ehdot kokonaisina virkkeinä. Hinnat ja prosentit kirjoitetaan
// vain, kun ne on luettu kumppanin omalta sivulta. Mennyt kampanja saa jäädä listaan (se ei näy);
// siivoa, kun lista kasvaa.

const NBSP = String.fromCharCode(160)

export interface KampanjaTeksti {
  otsikko: string
  /** Yksi tarjous per rivi (lyhyt, luku mukana). Puuttuu, kun kampanja on yksi ehto. */
  rivit?: readonly string[]
  /** Ehdot ja voimassaolo kokonaisina virkkeinä. */
  ehdot: string
  /** Nauhan oman linkin teksti. Näkyy vain, kun kampanjalla on `landing` ja sijoitus antaa hrefin. */
  cta?: string
}

export interface Kampanja {
  /** Mainostajan avain: AdSpec.key (esim. 'ikaalinenspa') tai laplandgiftsin partnerId ('ruohonjuuri'). */
  mainostaja: string
  /** Aikaikkuna, UTC-millisekunteina. Suomen talviaika (EET) = UTC+2: klo 00.00 = edellisen päivän 22.00 UTC. */
  showFrom: number
  showUntil: number
  /** Kampanjan oma sivu Worker-linkin dest=-kenttään. Puuttuu, kun kampanja koskee koko kauppaa. */
  landing?: string
  /** Kielet, joilla kampanja näytetään: avain on kielikoodin alkuosa ('fi'). */
  teksti: Readonly<Record<string, KampanjaTeksti>>
}

export const KAMPANJAT: readonly Kampanja[] = [
  // ── Ikaalinen Spa, Black Month viikko 2 ────────────────────────────────────
  // Lähde: Adtractionin ja Ikaalinen Span kumppaniviesti 12.11.2026 ("viikon tarjoukset 15.11. asti")
  // + kumppanin oma sivu, luettu 12.11.2026 (otsikko "Ikaalinen Span Black Month 2026", kohta
  // "Tässä viikon 2 lahjakorttitarjoukset"): hinnat, normaalihinnat, "Lahjakortteja rajattu erä.
  // Lahjakortit ovat voimassa 12kk ostopäivästä." Sivu on suomeksi ⇒ vain fi.
  // Teksti natiivilukijan korjaama 12.11.2026 (norm. → normaalisti, "lastenannosta", kampanjanimi
  // pois otsikosta, ehdot kolmeksi virkkeeksi; Ruohonjuuren otsikko "ja saat … 20 prosentin alennuksen").
  // Osto tapahtuu sivun napista kumppanin lahjakorttikaupassa (ikaalinenspa.givito.fi).
  {
    mainostaja: 'ikaalinenspa',
    showFrom: Date.UTC(2026, 10, 11, 22), // 12.11.2026 klo 00.00 Suomen aikaa
    showUntil: Date.UTC(2026, 10, 15, 22), // 16.11.2026 klo 00.00 Suomen aikaa
    landing: 'https://ikaalinenspa.fi/yritys-faq/kylpylatarjous/black-friday-2026',
    teksti: {
      fi: {
        otsikko: 'Viikon lahjakorttitarjoukset 15.11. asti',
        rivit: [
          `Kylpylä ja UTU Saunamaailma kahdelle aikuiselle 38${NBSP}€ (normaalisti 66${NBSP}€)`,
          `Spa-kuukausikortti 58${NBSP}€ (normaalisti 82${NBSP}€)`,
          `Kuntosalijäsenyys 1${NBSP}kuukaudeksi 19${NBSP}€ (normaalisti 33${NBSP}€)`,
          `Plazan perhelahjakortti 42${NBSP}€ (normaalisti noin 60${NBSP}€): 2 pizzaa tai pastaa ja 2 lastenannosta`,
          `Day Span avoin lahjakortti 50${NBSP}€ (arvo 70${NBSP}€)`,
        ],
        ehdot:
          `Tarjoukset ovat voimassa 15.11.2026 asti. Lahjakortteja on tarjolla rajattu erä. Lahjakortit ovat ` +
          `voimassa 12${NBSP}kuukautta ostopäivästä. Hinnat on tarkistettu kylpylän verkkosivuilta 12.11.2026.`,
        cta: 'Katso viikon tarjoukset',
      },
    },
  },
  // ── Ruohonjuuri, osta 2 samaa tuotetta ─────────────────────────────────────
  // Lähde: Adtractionin ja Ruohonjuuren kumppaniviesti 12.11.2026 ("Uusi kampanja") + ruohonjuuri.fi,
  // luettu 12.11.2026: "Osta 2 samaa tuotetta, saat molemmista -20%. Kampanja alkaa verkossa jo
  // keskiviikkona 11.11. ja myymälöissä 13.11. Kampanja kestää 15.11. asti. Tarjous koskee vain
  // normaalihintaisia tuotteita. Ei koske Ruohis-hintaisia eikä lahjakortteja."
  // Kampanjalla ei ole omaa sivua (ilmoitus osoittaa kaupan etusivulle) ⇒ ei landingia: nauhan
  // yllä oleva ostonappi vie tuotteen tai osaston omalle sivulle kuten ennenkin.
  // Vain fi: ehdot on julkaistu suomeksi, eikä niitä käännetä itse.
  {
    mainostaja: 'ruohonjuuri',
    showFrom: Date.UTC(2026, 10, 11, 22),
    showUntil: Date.UTC(2026, 10, 15, 22),
    teksti: {
      fi: {
        otsikko: `Ruohonjuuressa 15.11. asti: osta kaksi samaa tuotetta ja saat molemmista 20${NBSP}prosentin alennuksen`,
        ehdot:
          `Kampanja on voimassa Ruohonjuuren verkkokaupassa 15.11.2026 asti. Alennus koskee vain ` +
          `normaalihintaisia tuotteita, ei Ruohis-hintaisia tuotteita eikä lahjakortteja.`,
      },
    },
  },
  // ── Telia, Wolt+ 12 kk 5G-liittymiin ───────────────────────────────────────
  // Lähde: Adtractionin ja Telian kumppaniviesti 18.11.2026 ("Telian nykyinen Wolt+ kylkiäiskampanja
  // jatkuu 26.11.2026 asti", kuvaus: "kaikkiin 5G-liittymiimme sisältyy nyt asiakasetuna Wolt+-jäsenyys
  // 12 kk 0 € (arvo 71,88 €). Lisäetuna uusiin liittymiin tai numeronsiirtoihin toiselta operaattorilta
  // liittymien avausmaksu 5 € (norm. 8,99 €).") + kumppanin oma sivu, luettu 18.11.2026: "Kampanja on
  // voimassa 12.–26.11.2026", "Olet oikeutettu etuun, jos tilaat uuden määräaikaisen liittymän uudella
  // puhelinnumerolla tai vaihdat numerosi Telialle toiselta operaattorilta", "Edut eivät koske nykyisen
  // Telian liittymän päivityksiä tai numeronsiirtoja Telia Dot -liittymistä", "Edut saat vain tämän sivun
  // kautta verkkokaupastamme", voucher sähköpostiin viikon päästä aktivoinnista, liittymät 12 kk
  // määräaikaisia. Edut saa vain kampanjasivulta ⇒ landing, ja sijoitus vie mainoksen napin sinne.
  // Vain fi: ehdot on julkaistu suomeksi (Telian EN-linkki vie yleiselle englanninkieliselle etusivulle).
  // Sijoitukset: stayinlaplandin ja laplandworkin TeliaAd (SettlingInAds.tsx).
  {
    mainostaja: 'telia',
    showFrom: Date.UTC(2026, 10, 17, 22), // 18.11.2026 klo 00.00 Suomen aikaa
    showUntil: Date.UTC(2026, 10, 26, 22), // 27.11.2026 klo 00.00 Suomen aikaa
    landing: 'https://www.telia.fi/kampanjat/liittymat/liittymaedut',
    teksti: {
      fi: {
        otsikko: 'Telian liittymäedut 26.11. asti',
        rivit: [
          `Wolt+-jäsenyys 12${NBSP}kuukaudeksi 0${NBSP}€ (arvo 71,88${NBSP}€) kaikkiin Telian 5G-liittymiin`,
          `Avausmaksu 5${NBSP}€ (normaalisti 8,99${NBSP}€) uusiin liittymiin ja numeronsiirtoihin toiselta operaattorilta`,
        ],
        ehdot:
          `Kampanja on voimassa 26.11.2026 asti, ja edut saa vain Telian kampanjasivun kautta verkkokaupasta. ` +
          `Edut koskevat uutta 12${NBSP}kuukauden määräaikaista liittymää uudella numerolla tai toiselta ` +
          `operaattorilta siirretyllä numerolla, eivät nykyisen Telia-liittymän päivitystä eivätkä numeronsiirtoa ` +
          `Telia Dot -liittymästä. Wolt+-etukoodi tulee sähköpostiin noin viikon kuluttua liittymän aktivoinnista, ` +
          `jos liittymä on silloin käytössä, sopimus voimassa ja ensimmäinen lasku maksettu. ` +
          `Ehdot on tarkistettu Telian sivulta 18.11.2026.`,
      },
    },
  },
  // <adtraction:2026-11-12-elamyslahjat> Elämyslahjat.fi: Elämyslahjat black month alennukset alkaneet
  // Lähde: Adtractionin kumppaniviesti 12.11.2026 + kumppanin oma sivu
  // https://www.elamyslahjat.fi/kampanja/black-friday-kampanja/, luettu 19.11.2026. Teksti kumppanin sanoin, natiivilukijan
  // tarkistama; hyväksytty painikkeella 19.11.2026 (Adtraction-julkaisuajo, scripts/lv-adtraction-kampanjat).
  {
    mainostaja: 'elamyslahjat',
    showFrom: Date.UTC(2026, 10, 18, 22), // 19.11.2026 klo 00.00 Suomen aikaa
    showUntil: Date.UTC(2026, 11, 3, 22), // 4.12.2026 klo 00.00 Suomen aikaa
    landing: 'https://www.elamyslahjat.fi/kampanja/black-friday-kampanja/',
    teksti: {
      fi: {
        otsikko: `Elämyslahjojen Black Friday -tarjoukset 3.12. asti`,
        ehdot: `Kampanja on voimassa 3.12.2026 asti. Tarjoukset ovat pikadiilejä, ja aikalaskuri kertoo, kuinka kauan kampanjaa on jäljellä. Alennuksen suuruus ja hinta vaihtelevat lahjan mukaan, ja tarjolla olevat lahjat voivat vaihtua kampanjan aikana. Valikoimassa on elämyksiä eri puolilta Suomea ja ulkomailta, ja Lapin kohteet löytyvät kumppanin sivuston Sijainnin mukaan -valikosta kohdasta Lappi. Lahjakortin voimassaoloaika kerrotaan kunkin lahjan tiedoissa. Tiedot on tarkistettu kumppanin sivulta 19.11.2026.`,
        cta: `Katso tarjoukset`,
      },
    },
  },
  // </adtraction:2026-11-12-elamyslahjat>
]

const kieliavain = (lang?: string) => (lang || '').split('-')[0]

/** Mainostajan tällä hetkellä ja tällä kielellä voimassa oleva kampanja, tai undefined. */
export function kampanja(mainostaja: string | undefined, lang?: string, now: number = Date.now()): Kampanja | undefined {
  if (!mainostaja) return undefined
  const kieli = kieliavain(lang)
  return KAMPANJAT.find(
    (k) => k.mainostaja === mainostaja && !!k.teksti[kieli] && now >= k.showFrom && now < k.showUntil,
  )
}

/** Kampanjan teksti lukijan kielellä, tai undefined kun kampanjaa ei ole. */
export function kampanjaTeksti(mainostaja: string | undefined, lang?: string, now: number = Date.now()): KampanjaTeksti | undefined {
  return kampanja(mainostaja, lang, now)?.teksti[kieliavain(lang)]
}

/**
 * Vaihtaa Worker-linkin dest=-kentän kampanjan sivuksi, kun mainostajalla on voimassa kampanja,
 * jolla on oma sivu. Muuten linkki palaa sellaisenaan (perusmainoksen linkki).
 */
export function withKampanja(href: string, mainostaja: string | undefined, lang?: string, now: number = Date.now()): string {
  const k = kampanja(mainostaja, lang, now)
  if (!k?.landing) return href
  const dest = `dest=${encodeURIComponent(k.landing)}`
  if (/[?&]dest=/.test(href)) return href.replace(/([?&])dest=[^&#]*/, `$1${dest}`)
  return `${href}${href.includes('?') ? '&' : '?'}${dest}`
}
