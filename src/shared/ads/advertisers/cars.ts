import { Car } from 'lucide-react'
import type { AdSpec } from '../AdUnit'

// Car rental (EconomyBookings via the go.laplandvibes.com/go/cars redirect
// Worker). Replaces the Kiwitaxi airport-transfer ad, which was removed across
// the ecosystem 2026-07-09 because it doesn't serve Lapland airports (Vesa
// tested it) — advertising it beside Lapland content was misleading. Car rental
// genuinely operates at Rovaniemi/Kittilä/Ivalo. No brand logo: DiscoverCars
// (the one car logo we hold) is still PENDING TP approval, and EconomyBookings
// has no logo asset — so this is a category ad and AdUnit renders the wordmark.
const cars: AdSpec = {
  key: 'cars',
  brand: 'EconomyBookings',
  // The real destination brand (clicks go to economybookings.com). Logo is the
  // recoloured light-bg version of their SVG (their white logo → charcoal text,
  // orange accent kept) so it reads on the white ad card. Ships per-site under
  // public/images/partners/economybookings.svg.
  logo: '/images/partners/economybookings.svg',
  // pickup_location=RVN: ilman IATA:a Worker wrappaa EB:n ETUSIVUN tyhjällä
  // noutokentällä (lv_permanent_rules §5, Vesa 2026-08-09: mainos-CTA ei
  // koskaan kumppanin yleiselle etusivulle). RVN-oletus = esitäytetty
  // Rovaniemen tuloslistaus; kohdetietoinen pinta rakentaa linkin itse
  // (esim. laplandtransport AirportTransferAd per-kenttä-IATA:lla).
  linkFor: (sid) =>
    `https://go.laplandvibes.com/go/cars?sid=${encodeURIComponent(sid)}&pickup_location=RVN`,
  accent: '#0F766E',
  accentDark: '#0B5E57',
  icon: Car,
  copy: {
    fi: {
      eyebrow: 'Oma tahti Lapissa',
      headline: 'Vuokra-auto Lapin kentältä, tuntureille ja revontulille silloin kun itse haluat',
      sub: 'Lapissa välimatkat ovat pitkät ja julkinen liikenne harvassa. Omalla autolla ehdit hotellilta hiihtokeskukseen, husky-tilalle ja parhaille revontulipaikoille ilman aikatauluja. Nouto suoraan lentokentältä, ja talvirenkaat kuuluvat Suomessa vakiona.',
      trust: ['Nouto lentokentältä', 'Talvirenkaat vakiona', 'Vertaa vuokraamoja'],
      cta: 'Katso vuokra-autot',
      poweredBy: 'Autovuokraus EconomyBookingsin kautta',
    },
    en: {
      eyebrow: 'Your own pace in Lapland',
      headline: 'A rental car from the airport, reach the fells and the aurora on your own schedule',
      sub: 'Distances in Lapland are long and public transport is sparse. With your own car you get from the hotel to the ski resort, the husky farm and the best aurora spots without waiting for a bus. Pick up right at the airport, and winter tyres come as standard in Finland.',
      trust: ['Pick up at the airport', 'Winter tyres included', 'Compare rental companies'],
      cta: 'See rental cars',
      poweredBy: 'Car rental via EconomyBookings',
    },
    de: {
      eyebrow: 'Ihr eigenes Tempo in Lappland',
      headline: 'Ein Mietwagen ab dem Flughafen, zu den Fjälls und Nordlichtern, wann Sie wollen',
      sub: 'In Lappland sind die Entfernungen groß und öffentliche Verkehrsmittel selten. Mit dem eigenen Auto kommen Sie ohne Fahrplan vom Hotel zum Skigebiet, zur Huskyfarm und zu den besten Nordlicht-Plätzen. Abholung direkt am Flughafen, Winterreifen sind in Finnland Standard.',
      trust: ['Abholung am Flughafen', 'Winterreifen inklusive', 'Autovermietungen vergleichen'],
      cta: 'Mietwagen ansehen',
      poweredBy: 'Autovermietung über EconomyBookings',
    },
    ja: {
      eyebrow: 'ラップランドを自分のペースで',
      headline: '空港からレンタカーで、山々やオーロラへ好きな時間に',
      sub: 'ラップランドは距離が長く、公共交通は限られています。自分の車があれば、ホテルからスキー場、ハスキー牧場、オーロラの名所まで時刻表を気にせず移動できます。空港で直接受け取り、フィンランドでは冬用タイヤが標準装備です。',
      trust: ['空港で受け取り', '冬用タイヤ標準装備', 'レンタカー会社を比較'],
      cta: 'レンタカーを見る',
      poweredBy: 'レンタカーはEconomyBookings経由',
    },
    es: {
      eyebrow: 'Tu propio ritmo en Laponia',
      headline: 'Un coche de alquiler desde el aeropuerto, a los montes y las auroras cuando quieras',
      sub: 'En Laponia las distancias son largas y el transporte público escaso. Con su propio coche va del hotel a la estación de esquí, a la granja de huskies y a los mejores puntos para ver auroras sin esperar el autobús. Recogida en el aeropuerto y neumáticos de invierno de serie en Finlandia.',
      trust: ['Recogida en el aeropuerto', 'Neumáticos de invierno incluidos', 'Compara empresas de alquiler'],
      cta: 'Ver coches de alquiler',
      poweredBy: 'Alquiler de coches vía EconomyBookings',
    },
    'pt-BR': {
      eyebrow: 'Seu próprio ritmo na Lapônia',
      headline: 'Um carro alugado no aeroporto, até as montanhas e a aurora na sua hora',
      sub: 'Na Lapônia as distâncias são longas e o transporte público é escasso. Com o seu carro você vai do hotel à estação de esqui, à fazenda de huskies e aos melhores pontos de aurora sem esperar ônibus. Retirada no aeroporto e pneus de inverno de série na Finlândia.',
      trust: ['Retirada no aeroporto', 'Pneus de inverno incluídos', 'Compare locadoras'],
      cta: 'Ver carros para alugar',
      poweredBy: 'Aluguel de carro via EconomyBookings',
    },
    'zh-CN': {
      eyebrow: '在拉普兰按自己的节奏',
      headline: '机场租车，随时前往雪山和极光',
      sub: '拉普兰地广人稀，公共交通班次很少。自驾就能随时从酒店前往滑雪场、哈士奇农场和最佳极光地点，不必等巴士。机场直接取车，芬兰的租车标配冬季轮胎。',
      trust: ['机场取车', '标配冬季轮胎', '比较租车公司'],
      cta: '查看租车',
      poweredBy: '租车服务由 EconomyBookings 提供',
    },
    ko: {
      eyebrow: '라플란드를 내 속도로',
      headline: '공항에서 렌터카로, 원할 때 언제든 산과 오로라로',
      sub: '라플란드는 이동 거리가 길고 대중교통이 드뭅니다. 렌터카가 있으면 버스를 기다리지 않고 호텔에서 스키장, 허스키 농장, 최고의 오로라 명소까지 갈 수 있습니다. 공항에서 바로 픽업하고, 핀란드에서는 겨울용 타이어가 기본입니다.',
      trust: ['공항에서 픽업', '겨울용 타이어 기본', '렌터카 업체 비교'],
      cta: '렌터카 보기',
      poweredBy: '렌터카는 EconomyBookings 제공',
    },
    fr: {
      eyebrow: 'Votre rythme en Laponie',
      headline: 'Une voiture de location à l’aéroport, vers les fjälls et les aurores quand vous voulez',
      sub: 'En Laponie les distances sont longues et les transports en commun rares. Avec votre propre voiture, vous allez de l’hôtel à la station de ski, à la ferme de huskies et aux meilleurs spots d’aurores sans attendre le bus. Retrait directement à l’aéroport, pneus hiver de série en Finlande.',
      trust: ['Retrait à l’aéroport', 'Pneus hiver inclus', 'Comparez les loueurs'],
      cta: 'Voir les voitures',
      poweredBy: 'Location de voiture via EconomyBookings',
    },
    it: {
      eyebrow: 'Il Suo ritmo in Lapponia',
      headline: 'Un’auto a noleggio dall’aeroporto, verso i fjäll e l’aurora quando vuoi',
      sub: 'In Lapponia le distanze sono lunghe e i mezzi pubblici scarsi. Con un’auto propria raggiunge dall’hotel la stazione sciistica, la fattoria degli husky e i punti migliori per l’aurora senza aspettare il bus. Ritiro direttamente in aeroporto, pneumatici invernali di serie in Finlandia.',
      trust: ['Ritiro in aeroporto', 'Pneumatici invernali inclusi', 'Confronta gli autonoleggi'],
      cta: 'Vedi le auto a noleggio',
      poweredBy: 'Autonoleggio tramite EconomyBookings',
    },
    nl: {
      eyebrow: 'Uw eigen tempo in Lapland',
      headline: 'Een huurauto vanaf de luchthaven, naar de fjälls en het noorderlicht wanneer u wilt',
      sub: 'In Lapland zijn de afstanden groot en het openbaar vervoer schaars. Met uw eigen auto rijdt u van het hotel naar het skigebied, de huskyfarm en de beste noorderlichtplekken zonder op de bus te wachten. Ophalen direct op de luchthaven, en winterbanden zijn in Finland standaard.',
      trust: ['Ophalen op de luchthaven', 'Winterbanden inbegrepen', 'Vergelijk verhuurbedrijven'],
      cta: 'Bekijk huurauto’s',
      poweredBy: 'Autohuur via EconomyBookings',
    },
    sv: {
      eyebrow: 'Ditt eget tempo i Lappland',
      headline: 'Hyrbil direkt från flygplatsen, till fjällen och norrskenet när det passar dig',
      sub: 'Avstånden i Lappland är långa och kollektivtrafiken gles. Med egen bil tar du dig från hotellet till skidorten, huskygården och de bästa norrskensplatserna utan att vänta på någon buss. Hämta bilen direkt på flygplatsen, och vinterdäck ingår som standard i Finland.',
      trust: ['Hämtning på flygplatsen', 'Vinterdäck ingår', 'Jämför biluthyrare'],
      cta: 'Se hyrbilar',
      poweredBy: 'Biluthyrning via EconomyBookings',
    },
  },
}

export default cars
