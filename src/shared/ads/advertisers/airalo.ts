import { Smartphone } from 'lucide-react'
import type { AdSpec } from '../AdUnit'

// Airalo — traveller eSIMs, installed before departure. Travelpayouts p=8310.
// The natural "before you go" slot filler (replaced EKTA 2026-07-07 — their
// site is broken). Logo: _affiliate/logos/tp-airalo.png
// → public/images/partners/airalo.png.
const airalo: AdSpec = {
  key: 'airalo',
  brand: 'Airalo',
  logo: '/images/partners/airalo.png',
  // dest=Finland eSIM -maasivu: ilman destiä TP-wrap (&u=) pudottaa
  // airalo.comin ETUSIVULLE (lv_permanent_rules §5). Airalolla on kieliversio
  // jokaiselle 12 mainoskielelle; kolmen lokaalikoodi poikkeaa omastamme
  // (es→es-ES, sv→sv-SE, en→juuripolku ilman prefiksiä). Polut verifioitu
  // 2026-08-14: kaikki 12 HTTP 200 + lokalisoitu title (fi "Suomi-eSIM,
  // alkaen 4.00 € | Maailman ensimmäinen eSIM-kauppa · Airalo", en "Finland
  // eSIM, from 4.00 €…"), en-bodyssä h1 "Finland eSIMs".
  linkFor: (sid, lang) => {
    const AIRALO_LOCALE: Record<string, string> = {
      fi: 'fi', de: 'de', ja: 'ja', es: 'es-ES', 'pt-BR': 'pt-BR',
      'zh-CN': 'zh-CN', ko: 'ko', fr: 'fr', it: 'it', nl: 'nl', sv: 'sv-SE',
    }
    const loc = AIRALO_LOCALE[lang ?? ''] // en ja tuntemattomat → juuripolku
    const dest = `https://www.airalo.com/${loc ? loc + '/' : ''}finland-esim`
    return `https://go.laplandvibes.com/go/airalo?sid=${encodeURIComponent(sid)}&dest=${encodeURIComponent(dest)}`
  },
  accent: '#E8356D',
  accentDark: '#BE1E52',
  icon: Smartphone,
  copy: {
    fi: {
      eyebrow: 'Netti heti laskeutuessa',
      headline: 'Airalo, asenna Suomen eSIM puhelimeen jo ennen lentoa',
      sub: 'Ei jonoa kioskille eikä roaming-yllätyksiä laskussa. Ostat eSIMin verkosta, asennat QR-koodilla minuuteissa ja data toimii siitä hetkestä, kun kone laskeutuu. Oma numerosi pysyy käytössä viesteille koko matkan.',
      trust: ['Asennus QR-koodilla', 'Ei roaming-yllätyksiä', 'Oma numero säilyy'],
      cta: 'Katso Suomen eSIMit',
      poweredBy: 'eSIM Airalon kautta',
    },
    en: {
      eyebrow: 'Online the moment you land',
      headline: 'Airalo, install a Finland eSIM before you even board',
      sub: 'No kiosk queue, no roaming surprise on next month’s bill. Buy the eSIM online, install it from a QR code in minutes, and data works the moment the plane touches down. Your own number stays active for calls and messages the whole trip.',
      trust: ['Installs from a QR code', 'No roaming surprises', 'Keep your own number'],
      cta: 'See Finland eSIMs',
      poweredBy: 'eSIM via Airalo',
    },
    de: {
      eyebrow: 'Online, sobald Sie landen',
      headline: 'Airalo, die Finnland-eSIM schon vor dem Abflug installieren',
      sub: 'Keine Schlange am Kiosk, keine Roaming-Überraschung auf der Rechnung. Sie kaufen die eSIM online, installieren sie in Minuten per QR-Code, und die Daten funktionieren ab der Landung. Ihre eigene Nummer bleibt die ganze Reise über aktiv.',
      trust: ['Installation per QR-Code', 'Keine Roaming-Überraschung', 'Eigene Nummer bleibt'],
      cta: 'Finnland-eSIMs ansehen',
      poweredBy: 'eSIM über Airalo',
    },
    ja: {
      eyebrow: '着陸した瞬間からネット',
      headline: 'Airalo：搭乗前にフィンランドのeSIMをインストール',
      sub: 'キオスクの列にも、翌月のローミング請求にも悩まされません。オンラインで購入し、QRコードから数分でインストール。着陸した瞬間からデータ通信が使えます。自分の番号は旅の間ずっとそのまま。',
      trust: ['QRコードで数分設定', 'ローミング請求の心配なし', '自分の番号はそのまま'],
      cta: 'フィンランドのeSIMを見る',
      poweredBy: 'eSIMはAiralo経由',
    },
    es: {
      eyebrow: 'Conectado al aterrizar',
      headline: 'Airalo, instala una eSIM de Finlandia antes de embarcar',
      sub: 'Sin cola en el quiosco ni sorpresas de roaming en la factura. Compra la eSIM en línea, la instala con un código QR en minutos y los datos funcionan en cuanto el avión toca pista. Su número de siempre sigue activo todo el viaje.',
      trust: ['Se instala con código QR', 'Sin sorpresas de roaming', 'Conserva su número'],
      cta: 'Ver eSIM de Finlandia',
      poweredBy: 'eSIM con Airalo',
    },
    'pt-BR': {
      eyebrow: 'Conectado ao aterrissar',
      headline: 'Airalo, instale um eSIM da Finlândia antes mesmo de embarcar',
      sub: 'Sem fila no quiosque nem surpresa de roaming na fatura. Você compra o eSIM online, instala pelo QR code em minutos e os dados funcionam assim que o avião pousa. Seu número de sempre continua ativo a viagem toda.',
      trust: ['Instala pelo QR code', 'Sem surpresas de roaming', 'Mantém seu número'],
      cta: 'Ver eSIMs da Finlândia',
      poweredBy: 'eSIM pela Airalo',
    },
    'zh-CN': {
      eyebrow: '落地即有网络',
      headline: 'Airalo：登机前就装好芬兰eSIM',
      sub: '不用在机场排队买卡，也不会有漫游账单的意外。在线购买eSIM，扫二维码几分钟装好，飞机一落地数据就能用。原有号码整个旅程保持在线。',
      trust: ['扫码几分钟安装', '没有漫游账单意外', '原号码保持可用'],
      cta: '查看芬兰eSIM',
      poweredBy: 'eSIM 由 Airalo 提供',
    },
    ko: {
      eyebrow: '착륙하는 순간부터 온라인',
      headline: 'Airalo: 탑승 전에 핀란드 eSIM을 미리 설치하세요',
      sub: '키오스크 줄도, 다음 달 로밍 요금 폭탄도 없습니다. 온라인으로 구매해 QR 코드로 몇 분 만에 설치하면, 비행기가 착륙하는 순간부터 데이터가 잡힙니다. 내 번호는 여행 내내 그대로 유지됩니다.',
      trust: ['QR 코드로 몇 분 설치', '로밍 요금 걱정 없음', '내 번호 그대로'],
      cta: '핀란드 eSIM 보기',
      poweredBy: 'Airalo를 통한 eSIM',
    },
    fr: {
      eyebrow: 'En ligne dès l’atterrissage',
      headline: 'Airalo, installez une eSIM Finlande avant même d’embarquer',
      sub: 'Pas de file au kiosque, pas de surprise de roaming sur la facture. Vous achetez l’eSIM en ligne, l’installez en quelques minutes via un QR code, et les données fonctionnent dès que l’avion se pose. Votre numéro habituel reste actif tout le séjour.',
      trust: ['Installation par QR code', 'Pas de surprise de roaming', 'Votre numéro conservé'],
      cta: 'Voir les eSIM Finlande',
      poweredBy: 'eSIM via Airalo',
    },
    it: {
      eyebrow: 'Online già all’atterraggio',
      headline: 'Airalo, installi una eSIM per la Finlandia prima ancora di imbarcarsi',
      sub: 'Niente coda al chiosco né sorprese di roaming in bolletta. Compri la eSIM online, la installi in pochi minuti con un QR code e i dati funzionano appena l’aereo tocca terra. Il Suo numero resta attivo per tutto il viaggio.',
      trust: ['Si installa con QR code', 'Niente sorprese di roaming', 'Mantiene il Suo numero'],
      cta: 'Vedi le eSIM Finlandia',
      poweredBy: 'eSIM con Airalo',
    },
    nl: {
      eyebrow: 'Online zodra u landt',
      headline: 'Airalo, installeer een Finland-eSIM nog vóór u instapt',
      sub: 'Geen rij bij de kiosk en geen roamingverrassing op de rekening. U koopt de eSIM online, installeert hem in een paar minuten via een QR-code, en uw data werkt zodra het vliegtuig landt. Uw eigen nummer blijft de hele reis actief.',
      trust: ['Installeren via QR-code', 'Geen roamingverrassingen', 'Uw eigen nummer blijft'],
      cta: 'Bekijk Finland-eSIMs',
      poweredBy: 'eSIM via Airalo',
    },
    sv: {
      eyebrow: 'Uppkopplad direkt vid landning',
      headline: 'Airalo, installera ett Finland-eSIM redan innan du går ombord',
      sub: 'Ingen kö vid kiosken, inga roamingöverraskningar på nästa månads räkning. Du köper eSIM:et online, installerar det med en QR-kod på några minuter, och datan fungerar direkt när planet landar. Ditt eget nummer är kvar aktivt för samtal och meddelanden hela resan.',
      trust: ['Installeras med QR-kod', 'Inga roamingöverraskningar', 'Behåll ditt eget nummer'],
      cta: 'Se Finland-eSIM',
      poweredBy: 'eSIM via Airalo',
    },
  },
}

export default airalo
