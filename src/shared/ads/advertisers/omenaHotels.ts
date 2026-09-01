import { KeyRound } from 'lucide-react'
import type { AdSpec } from '../AdUnit'

// Omena Hotels — budget self-service hotels in Finnish city centres (Helsinki,
// Tampere, Turku, Jyväskylä…). Door-code check-in, price per ROOM. Stopover
// angle for the journey north. Adtraction deep-link (no client SID slot).
// Logo: _affiliate/logos/adtraction-omena-hotels.png
// → public/images/partners/omenahotels.png.
const omenaHotels: AdSpec = {
  key: 'omenahotels',
  brand: 'Omena Hotels',
  logo: '/images/partners/omenahotels.png',
  // dest=Helsinki-kokoomasivu: ilman destiä Adtraction-wrap pudottaa
  // omenahotels.comin ETUSIVULLE (lv_permanent_rules §5). Copyn kulma on
  // "välietappi matkalla pohjoiseen / ennen aikaista aamulentoa" — Helsinki on
  // se etappi, ja kokoomasivu listaa molemmat keskustahotellit (Lönnrotinkatu,
  // Yrjönkatu). Sivustolla on vain fi- ja en-kieliversiot: fi saa /fi-polun,
  // kaikki muut kielet en-polun. Polut verifioitu 2026-08-14: fi HTTP 200,
  // title "Helsinki kutsuu lomailijaa - Omena Hotels", bodyssä "Omena-hotellit
  // Helsingin keskustassa"; en HTTP 200, title "Cheap citybreak in central
  // Helsinki - Omena Hotels".
  linkFor: (sid, lang) => {
    const dest = (lang ?? '').slice(0, 2) === 'fi'
      ? 'https://www.omenahotels.com/fi/hotellithelsinki/'
      : 'https://www.omenahotels.com/en/hotelshelsinki/'
    return `https://go.laplandvibes.com/go/omenahotels?sid=${encodeURIComponent(sid)}&dest=${encodeURIComponent(dest)}`
  },
  accent: '#E4002B',
  accentDark: '#B00021',
  icon: KeyRound,
  copy: {
    fi: {
      eyebrow: 'Välietappi kaupungissa',
      headline: 'Omena Hotels, huone keskustasta ovikoodilla, hinta koko huoneesta',
      sub: 'Kätevä yöpymispaikka matkalla pohjoiseen tai ennen aikaista aamulentoa: huone Helsingin, Tampereen tai Turun keskustasta ilman vastaanottojonoa. Ovikoodi tulee puhelimeen ja kävelet suoraan sisään. Hinta on koko huoneesta, ei per henkilö.',
      trust: ['Sisään ovikoodilla', 'Keskustasijainnit', 'Hinta koko huoneesta'],
      cta: 'Katso huonehinnat',
      poweredBy: 'Varaus Omena Hotelsilta',
    },
    en: {
      eyebrow: 'A city stopover',
      headline: 'Omena Hotels, a city-centre room with a door code, priced per room',
      sub: 'A handy overnight stop on the way north or before an early flight: a room in central Helsinki, Tampere or Turku with no reception queue. The door code comes to your phone and you walk straight in. The price covers the whole room, not per person.',
      trust: ['Check in with a door code', 'City-centre locations', 'Price per room'],
      cta: 'See room prices',
      poweredBy: 'Booking with Omena Hotels',
    },
    de: {
      eyebrow: 'Zwischenstopp in der Stadt',
      headline: 'Omena Hotels, Zimmer im Zentrum per Türcode, Preis pro Zimmer',
      sub: 'Praktischer Übernachtungsstopp auf dem Weg nach Norden oder vor einem frühen Flug: ein Zimmer im Zentrum von Helsinki, Tampere oder Turku ohne Rezeptionsschlange. Der Türcode kommt aufs Handy, Sie gehen direkt hinein. Der Preis gilt fürs ganze Zimmer, nicht pro Person.',
      trust: ['Check-in per Türcode', 'Zentrale Lagen', 'Preis pro Zimmer'],
      cta: 'Zimmerpreise ansehen',
      poweredBy: 'Buchung bei Omena Hotels',
    },
    ja: {
      eyebrow: '街での中継泊',
      headline: 'Omena Hotels：ドアコードで入る中心部の部屋、料金は1室単位',
      sub: '北へ向かう途中や早朝便の前の一泊に便利。ヘルシンキ、タンペレ、トゥルクの中心部の部屋に、フロントの列なしでチェックイン。ドアコードがスマホに届き、そのまま入室。料金は人数ではなく1室あたりです。',
      trust: ['ドアコードで入室', '中心部の立地', '料金は1室単位'],
      cta: '部屋の料金を見る',
      poweredBy: '予約はOmena Hotels',
    },
    es: {
      eyebrow: 'Parada en la ciudad',
      headline: 'Omena Hotels, habitación céntrica con código de puerta, precio por habitación',
      sub: 'Una parada práctica de camino al norte o antes de un vuelo temprano: habitación en el centro de Helsinki, Tampere o Turku sin cola de recepción. El código llega a su móvil y entra directamente. El precio es por toda la habitación, no por persona.',
      trust: ['Entrada con código', 'Ubicaciones céntricas', 'Precio por habitación'],
      cta: 'Ver precios de habitaciones',
      poweredBy: 'Reserva con Omena Hotels',
    },
    'pt-BR': {
      eyebrow: 'Parada na cidade',
      headline: 'Omena Hotels, quarto no centro com código de porta, preço por quarto',
      sub: 'Uma parada prática a caminho do norte ou antes de um voo cedo: quarto no centro de Helsinque, Tampere ou Turku sem fila de recepção. O código chega no seu celular e você entra direto. O preço é pelo quarto inteiro, não por pessoa.',
      trust: ['Entrada com código', 'Localizações centrais', 'Preço por quarto'],
      cta: 'Ver preços dos quartos',
      poweredBy: 'Reserva com Omena Hotels',
    },
    'zh-CN': {
      eyebrow: '城市中转住一晚',
      headline: 'Omena Hotels：市中心客房，门禁码入住，按房间计价',
      sub: '北上途中或赶早班机前的实用一晚：赫尔辛基、坦佩雷或图尔库市中心的房间，无需在前台排队。门禁码发到手机，直接推门入住。价格按整间房算，不按人头。',
      trust: ['门禁码直接入住', '市中心位置', '按房间计价'],
      cta: '查看房价',
      poweredBy: '预订自 Omena Hotels',
    },
    ko: {
      eyebrow: '도시에서 하룻밤',
      headline: 'Omena Hotels: 도어 코드로 들어가는 시내 중심 객실, 요금은 방 단위',
      sub: '북쪽으로 가는 길이나 이른 아침 비행 전에 편한 하룻밤. 헬싱키·탐페레·투르쿠 중심가 객실에 프런트 줄 없이 체크인합니다. 도어 코드가 휴대폰으로 오고 바로 들어가면 끝. 요금은 인원수가 아니라 방 전체 기준입니다.',
      trust: ['도어 코드 체크인', '시내 중심 위치', '방 단위 요금'],
      cta: '객실 요금 보기',
      poweredBy: 'Omena Hotels 예약',
    },
    fr: {
      eyebrow: 'Étape en ville',
      headline: 'Omena Hotels, une chambre en centre-ville avec code de porte, prix à la chambre',
      sub: 'Une étape pratique sur la route du nord ou avant un vol matinal : une chambre au centre d’Helsinki, Tampere ou Turku sans file à la réception. Le code arrive sur votre téléphone et vous entrez directement. Le prix couvre toute la chambre, pas par personne.',
      trust: ['Entrée par code', 'Emplacements centraux', 'Prix à la chambre'],
      cta: 'Voir les prix des chambres',
      poweredBy: 'Réservation chez Omena Hotels',
    },
    it: {
      eyebrow: 'Sosta in città',
      headline: 'Omena Hotels, camera in centro con codice porta, prezzo a camera',
      sub: 'Una sosta comoda verso nord o prima di un volo all’alba: una camera in centro a Helsinki, Tampere o Turku senza coda alla reception. Il codice arriva sul telefono ed entri direttamente. Il prezzo è per l’intera camera, non a persona.',
      trust: ['Ingresso con codice', 'Posizioni centrali', 'Prezzo a camera'],
      cta: 'Vedi i prezzi delle camere',
      poweredBy: 'Prenotazione con Omena Hotels',
    },
    nl: {
      eyebrow: 'Tussenstop in de stad',
      headline: 'Omena Hotels, een kamer in het centrum met deurcode, prijs per kamer',
      sub: 'Een handige overnachting op weg naar het noorden of vóór een vroege vlucht: een kamer in het centrum van Helsinki, Tampere of Turku zonder rij bij de receptie. De deurcode komt op uw telefoon en u loopt zo naar binnen. De prijs geldt per kamer, niet per persoon.',
      trust: ['Inchecken met deurcode', 'Centrale locaties', 'Prijs per kamer'],
      cta: 'Bekijk kamerprijzen',
      poweredBy: 'Boeking bij Omena Hotels',
    },
    sv: {
      eyebrow: 'Ett stopp i stan',
      headline: 'Omena Hotels, ett rum i city med dörrkod, pris per rum',
      sub: 'Ett smidigt övernattningsstopp på vägen norrut eller inför ett tidigt flyg: ett rum i centrala Helsingfors, Tammerfors eller Åbo utan kö vid receptionen. Dörrkoden kommer till mobilen och du går rakt in. Priset gäller hela rummet, inte per person.',
      trust: ['Incheckning med dörrkod', 'Centrala lägen', 'Pris per rum'],
      cta: 'Se rumspriser',
      poweredBy: 'Bokning hos Omena Hotels',
    },
  },
}

export default omenaHotels
