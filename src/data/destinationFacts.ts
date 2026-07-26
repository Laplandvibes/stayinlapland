import type { Lang } from '../i18n/useLang';

/**
 * Real, verifiable facts about a destination — the things that make a place
 * that place, as opposed to the generic "long stay" framing every destination
 * page shares.
 *
 * HONESTY CONTRACT: every number and every business named here must be
 * traceable to an operator-published source, and the source must be re-checked
 * seasonally (businesses close, lift counts change). Nothing here is inferred,
 * rounded up for effect, or carried over from another resort.
 *
 * The Ylläs entry is ported verbatim from the hub's verified dataset
 * (laplandvibes/src/data/resortHubs/yllas.ts), fact-checked 2026-07-23/24
 * against ski.yllas.fi, yllas.fi, nationalparks.fi and each business's own
 * site. Do not edit the numbers here without updating that file too.
 *
 * The other four destinations have no entry yet: writing one means doing the
 * same source-by-source verification pass, and a half-checked entry is worse
 * than none. A destination with no entry simply renders without this section.
 */

export type L12 = Record<Lang, string>;

export interface DestinationStat {
  /** Language-neutral figure, e.g. '62' or '464 m'. */
  value: string;
  label: L12;
}

export interface DestinationHighlight {
  title: L12;
  body: L12;
}

export type PlaceKind = 'food' | 'wellness';

export interface LocalPlace {
  /** Proper noun — never translated. */
  name: string;
  href: string;
  kind: PlaceKind;
}

export interface NetworkLink {
  label: L12;
  href: string;
}

export interface DestinationFacts {
  stats: DestinationStat[];
  highlights: DestinationHighlight[];
  places: LocalPlace[];
  networkLinks: NetworkLink[];
}

/* ─── Shared UI strings (destination-agnostic so no place name needs a local
       case ending — Finnish would otherwise require "Ylläksellä"/"Levillä"). ─── */

export const factsUi: Record<string, L12> = {
  highlightsKicker: {
    en: 'Beyond the booking', fi: 'Varauksen takana', sv: 'Bortom bokningen',
    de: 'Jenseits der Buchung', fr: 'Au-delà de la réservation', es: 'Más allá de la reserva',
    it: 'Oltre la prenotazione', nl: 'Meer dan de boeking', 'pt-BR': 'Além da reserva',
    ja: '予約の向こう側', ko: '예약 너머', 'zh-CN': '预订之外',
  },
  highlightsH2: {
    en: 'What is actually here.', fi: 'Mitä täällä oikeasti on.', sv: 'Vad som faktiskt finns här.',
    de: 'Was hier wirklich ist.', fr: 'Ce qu’il y a vraiment ici.', es: 'Lo que hay realmente aquí.',
    it: 'Che cosa c’è davvero qui.', nl: 'Wat hier echt is.', 'pt-BR': 'O que realmente existe aqui.',
    ja: 'ここに実際にあるもの。', ko: '여기에 실제로 있는 것.', 'zh-CN': '这里究竟有什么。',
  },
  placesKicker: {
    en: 'On the ground', fi: 'Paikan päällä', sv: 'På plats',
    de: 'Vor Ort', fr: 'Sur place', es: 'Sobre el terreno',
    it: 'Sul posto', nl: 'Ter plaatse', 'pt-BR': 'No local',
    ja: '現地で', ko: '현지에서', 'zh-CN': '在当地',
  },
  placesH2: {
    en: 'Where the locals send you.', fi: 'Minne paikalliset ohjaavat.', sv: 'Dit lokalborna skickar dig.',
    de: 'Wohin die Einheimischen schicken.', fr: 'Où les habitants vous envoient.', es: 'Adonde te mandan los de aquí.',
    it: 'Dove ti mandano quelli del posto.', nl: 'Waar de locals je heen sturen.', 'pt-BR': 'Para onde os locais mandam você.',
    ja: '地元の人がすすめる場所。', ko: '현지 사람들이 알려 주는 곳.', 'zh-CN': '当地人会指给你的地方。',
  },
  placesNote: {
    en: 'Independent local businesses, listed because they are open and worth the walk. These are plain links, not paid placements, and we earn nothing if you go.',
    fi: 'Itsenäisiä paikallisia yrityksiä, listattu koska ne ovat auki ja käynnin arvoisia. Nämä ovat tavallisia linkkejä, eivät maksettuja paikkoja, emmekä ansaitse mitään jos menet.',
    sv: 'Fristående lokala företag, med på listan för att de har öppet och är värda promenaden. Det här är vanliga länkar, inte köpta placeringar, och vi tjänar ingenting på att du går dit.',
    de: 'Unabhängige lokale Betriebe, aufgeführt weil sie geöffnet und den Weg wert sind. Das sind normale Links, keine bezahlten Platzierungen, und wir verdienen nichts daran.',
    fr: 'Des établissements locaux indépendants, cités parce qu’ils sont ouverts et valent le détour. Ce sont de simples liens, pas des placements payants, et nous ne gagnons rien si vous y allez.',
    es: 'Negocios locales independientes, incluidos porque están abiertos y merecen la caminata. Son enlaces normales, no ubicaciones pagadas, y no ganamos nada si vas.',
    it: 'Attività locali indipendenti, elencate perché sono aperte e valgono il tragitto. Sono link normali, non posizionamenti a pagamento, e non guadagniamo nulla se ci vai.',
    nl: 'Zelfstandige lokale zaken, vermeld omdat ze open zijn en de wandeling waard. Dit zijn gewone links, geen betaalde plaatsingen, en wij verdienen er niets aan.',
    'pt-BR': 'Negócios locais independentes, listados porque estão abertos e valem a caminhada. São links comuns, não inserções pagas, e não ganhamos nada se você for.',
    ja: '独立した地元のお店を、営業していて足を運ぶ価値があるという理由で挙げています。これらは通常のリンクで、有料掲載ではありません。行かれても当サイトの収益にはなりません。',
    ko: '독립적으로 운영되는 현지 가게들로, 실제로 문을 열고 있고 찾아갈 만하다는 이유로 실었습니다. 일반 링크이며 유료 게재가 아니고, 방문하셔도 저희에게 수익은 없습니다.',
    'zh-CN': '独立经营的本地商家，列在这里是因为它们确实在营业、也值得走一趟。这些是普通链接，并非付费推广，你去了我们也不会有任何收入。',
  },
  networkH3: {
    en: 'More on this place, elsewhere in our network',
    fi: 'Lisää tästä paikasta muualla verkostossamme',
    sv: 'Mer om platsen på andra sajter i vårt nätverk',
    de: 'Mehr zu diesem Ort anderswo in unserem Netzwerk',
    fr: 'Plus sur ce lieu ailleurs dans notre réseau',
    es: 'Más sobre este lugar en otras webs de nuestra red',
    it: 'Altro su questo luogo altrove nella nostra rete',
    nl: 'Meer over deze plek elders in ons netwerk',
    'pt-BR': 'Mais sobre este lugar em outros sites da nossa rede',
    ja: 'このエリアについては、系列サイトでもさらに詳しく',
    ko: '이곳에 관한 더 많은 정보는 저희 네트워크의 다른 사이트에서',
    'zh-CN': '关于这里，我们网络中的其他站点还有更多内容',
  },
  sourceNote: {
    en: 'Figures from the resort and national-park operators, checked July 2026. Seasonal businesses are marked as such on their own sites.',
    fi: 'Luvut hiihtokeskuksen ja kansallispuiston ylläpitäjiltä, tarkistettu heinäkuussa 2026. Kausiluontoiset yritykset ilmoittavat aukiolonsa omilla sivuillaan.',
    sv: 'Siffrorna kommer från skidorten och nationalparkens förvaltare, kontrollerade i juli 2026. Säsongsöppna företag anger sina tider på sina egna sajter.',
    de: 'Zahlen von den Betreibern des Skigebiets und des Nationalparks, geprüft im Juli 2026. Saisonbetriebe geben ihre Öffnungszeiten auf ihren eigenen Seiten an.',
    fr: 'Chiffres fournis par les exploitants de la station et du parc national, vérifiés en juillet 2026. Les établissements saisonniers indiquent leurs horaires sur leur propre site.',
    es: 'Cifras de los operadores de la estación y del parque nacional, comprobadas en julio de 2026. Los negocios de temporada indican sus horarios en sus propias webs.',
    it: 'Dati dei gestori della stazione e del parco nazionale, verificati a luglio 2026. Le attività stagionali indicano gli orari sui propri siti.',
    nl: 'Cijfers van de exploitanten van het skigebied en het nationale park, gecontroleerd in juli 2026. Seizoensbedrijven vermelden hun openingstijden op hun eigen site.',
    'pt-BR': 'Números dos operadores da estação e do parque nacional, verificados em julho de 2026. Negócios sazonais informam os horários em seus próprios sites.',
    ja: '数値はスキーリゾートと国立公園の運営者によるもので、2026年7月に確認しました。季節営業の店舗は各自のサイトで営業期間を告知しています。',
    ko: '수치는 스키 리조트와 국립공원 운영 주체의 자료이며 2026년 7월에 확인했습니다. 시즌 영업 업소는 각자의 사이트에 영업 기간을 안내합니다.',
    'zh-CN': '数据来自滑雪场与国家公园的运营方，于 2026 年 7 月核对。季节性营业的商家会在各自网站公布营业时间。',
  },
  foodLabel: {
    en: 'Eat & drink', fi: 'Syöminen ja juominen', sv: 'Äta och dricka',
    de: 'Essen & Trinken', fr: 'Manger et boire', es: 'Comer y beber',
    it: 'Mangiare e bere', nl: 'Eten & drinken', 'pt-BR': 'Comer e beber',
    ja: '食事とドリンク', ko: '먹고 마시기', 'zh-CN': '吃与喝',
  },
  wellnessLabel: {
    en: 'Sauna & spa', fi: 'Sauna ja kylpylä', sv: 'Bastu och spa',
    de: 'Sauna & Spa', fr: 'Sauna et spa', es: 'Sauna y spa',
    it: 'Sauna e spa', nl: 'Sauna & spa', 'pt-BR': 'Sauna e spa',
    ja: 'サウナとスパ', ko: '사우나와 스파', 'zh-CN': '桑拿与水疗',
  },
};

/* ─── YLLÄS ─── strings ported from the hub's verified dataset ─── */

const yllas: DestinationFacts = {
  stats: [
    {
      value: '62',
      label: {
        en: 'slopes', fi: 'rinnettä', sv: 'backar', de: 'Pisten', fr: 'pistes', es: 'pistas',
        it: 'piste', nl: 'pistes', 'pt-BR': 'pistas', ja: 'コース', ko: '슬로프', 'zh-CN': '雪道',
      },
    },
    {
      value: '464 m',
      label: {
        en: 'vertical drop', fi: 'pudotusta', sv: 'fallhöjd', de: 'Höhenunterschied',
        fr: 'dénivelé', es: 'desnivel', it: 'dislivello', nl: 'hoogteverschil',
        'pt-BR': 'desnível', ja: '標高差', ko: '표고차', 'zh-CN': '落差',
      },
    },
    {
      value: '~300 km',
      label: {
        en: 'cross-country tracks', fi: 'hoidettuja latuja', sv: 'preparerade spår',
        de: 'gepflegte Loipen', fr: 'pistes de ski de fond', es: 'pistas de esquí de fondo',
        it: 'piste da fondo', nl: 'langlaufloipes', 'pt-BR': 'trilhas de esqui nórdico',
        ja: 'クロスカントリーコース', ko: '크로스컨트리 트랙', 'zh-CN': '越野雪道',
      },
    },
    {
      value: '2',
      label: {
        en: 'villages, one fell', fi: 'kylää, yksi tunturi', sv: 'byar, ett fjäll',
        de: 'Dörfer, ein Fjell', fr: 'villages, un mont', es: 'pueblos, una montaña',
        it: 'villaggi, una montagna', nl: 'dorpen, één fjeld', 'pt-BR': 'vilarejos, uma montanha',
        // Stacked under the figure, so no counter word: it would be orphaned.
        ja: '村、ひとつの山', ko: '마을, 하나의 산', 'zh-CN': '村庄，一座大山',
      },
    },
  ],
  highlights: [
    {
      title: {
        en: 'The slopes of Ylläs', fi: 'Ylläksen rinteet', sv: 'Backarna i Ylläs',
        de: 'Die Pisten von Ylläs', es: 'Las pistas de Ylläs', fr: 'Les pistes de Ylläs',
        it: 'Le piste di Ylläs', nl: 'De pistes van Ylläs', ja: 'Ylläs のゲレンデ',
        ko: 'Ylläs의 슬로프', 'zh-CN': 'Ylläs 的雪道', 'pt-BR': 'As pistas de Ylläs',
      },
      body: {
        en: '62 slopes on two sides of the fell and the longest downhill runs in Finland: over three kilometres from the treeless top to the valley, a 464-metre drop. Ski buses link both villages to the lifts.',
        fi: '62 rinnettä tunturin kahdella puolella ja Suomen pisimmät laskettelurinteet: yli kolme kilometriä paljaalta laelta laaksoon, 464 metrin pudotus. Hiihtobussit vievät molemmista kylistä hisseille.',
        sv: '62 backar på fjällets två sidor och Finlands längsta utförsåkning: över tre kilometer från den kala toppen ner till dalen, 464 meters fallhöjd. Skidbussar förbinder båda byarna med liftarna.',
        de: '62 Pisten auf zwei Seiten des Fjells und die längsten Abfahrten Finnlands: über drei Kilometer vom baumlosen Gipfel bis ins Tal, 464 Meter Höhenunterschied. Skibusse verbinden beide Dörfer mit den Liften.',
        es: '62 pistas en dos laderas de la montaña y los descensos más largos de Finlandia: más de tres kilómetros desde la cima despejada hasta el valle, con un desnivel de 464 metros. Autobuses de esquí conectan ambos pueblos con los remontes.',
        fr: '62 pistes sur les deux versants du mont et les plus longues descentes de Finlande : plus de trois kilomètres du sommet dénudé jusqu’à la vallée, 464 mètres de dénivelé. Des navettes ski relient les deux villages aux remontées.',
        it: '62 piste sui due versanti della montagna e le discese più lunghe della Finlandia: oltre tre chilometri dalla cima spoglia fino a valle, con un dislivello di 464 metri. Gli ski bus collegano entrambi i villaggi agli impianti.',
        nl: '62 pistes op twee zijden van de fjeld en de langste afdalingen van Finland: ruim drie kilometer van de kale top tot in het dal, 464 meter hoogteverschil. Skibussen verbinden beide dorpen met de liften.',
        ja: '山の両側に広がる62本のコースと、フィンランド最長の滑走。木々のない山頂から谷まで3キロを超え、標高差は464メートル。スキーバスが両方の村とリフトを結びます。',
        ko: '산 양쪽에 펼쳐진 62개의 슬로프와 핀란드에서 가장 긴 활강. 나무 없는 정상에서 골짜기까지 3킬로미터가 넘고, 표고차는 464미터입니다. 스키 버스가 두 마을과 리프트를 잇습니다.',
        'zh-CN': '山两侧共 62 条雪道，以及芬兰最长的下坡：从光秃的山顶到谷底超过三公里，落差 464 米。滑雪巴士将两个村庄与缆车相连。',
        'pt-BR': '62 pistas nos dois lados da montanha e as descidas mais longas da Finlândia: mais de três quilômetros do topo sem árvores até o vale, com 464 metros de desnível. Ônibus de esqui ligam os dois vilarejos aos teleféricos.',
      },
    },
    {
      title: {
        en: 'On skis to lunch', fi: 'Hiihtäen lounaalle', sv: 'På skidor till lunch',
        de: 'Auf Langlaufskiern zum Mittagessen', es: 'Esquiando hasta el almuerzo',
        fr: 'À ski jusqu’au déjeuner', it: 'Con gli sci fino a pranzo',
        nl: 'Op de langlaufski naar de lunch', ja: 'スキーで昼食へ', ko: '스키를 타고 점심 먹으러',
        'zh-CN': '滑着雪去吃午餐', 'pt-BR': 'De esqui até o almoço',
      },
      body: {
        en: 'Around 300 kilometres of maintained tracks wind through the national park forests, more than 30 of them lit for the dark months. Pick a trail café as your destination and ski there for coffee.',
        fi: 'Noin 300 kilometriä hoidettuja latuja kiertää kansallispuiston metsissä, yli 30 niistä valaistuna pimeille kuukausille. Valitse latukahvila päivän kohteeksi ja hiihdä sinne kahville.',
        sv: 'Runt 300 kilometer preparerade spår slingrar sig genom nationalparkens skogar, över 30 av dem belysta för de mörka månaderna. Välj ett spårkafé som mål och åk skidor dit på en kopp kaffe.',
        de: 'Rund 300 Kilometer gepflegte Loipen ziehen sich durch die Wälder des Nationalparks, mehr als 30 davon für die dunklen Monate beleuchtet. Wähl ein Loipencafé als Ziel und lauf auf Ski dorthin auf einen Kaffee.',
        es: 'Unos 300 kilómetros de pistas mantenidas recorren los bosques del parque nacional, más de 30 iluminados para los meses oscuros. Elige un café de pista como destino y esquía hasta allí a tomar un café.',
        fr: 'Environ 300 kilomètres de pistes entretenues sillonnent les forêts du parc national, dont plus de 30 éclairés pour les mois sombres. Choisissez un café de piste comme but et rejoignez-le à ski pour un café.',
        it: 'Circa 300 chilometri di piste battute attraversano i boschi del parco nazionale, oltre 30 illuminati per i mesi bui. Scegli un caffè lungo la pista come meta e raggiungilo sugli sci per un caffè.',
        nl: 'Zo’n 300 kilometer geprepareerde loipes kronkelen door de bossen van het nationale park, ruim 30 daarvan verlicht voor de donkere maanden. Kies een loipecafé als bestemming en langlauf erheen voor koffie.',
        ja: '国立公園の森を約300キロの整備されたトラックが縫うように走り、うち30キロ以上が暗い季節のために照明付き。トラック沿いのカフェを目的地に選び、コーヒーを飲みに滑っていきましょう。',
        ko: '국립공원 숲을 약 300킬로미터의 정비된 트랙이 굽이굽이 지나가며, 그중 30킬로미터 이상은 어두운 계절을 위해 조명이 켜집니다. 트랙 옆 카페를 목적지로 정하고 커피 한 잔 마시러 스키를 타고 가 보세요.',
        'zh-CN': '约 300 公里的雪道穿行于国家公园的森林之间，其中 30 多公里在漫长黑夜里点着灯。挑一家雪道旁的咖啡馆作为目的地，滑过去喝杯咖啡。',
        'pt-BR': 'Cerca de 300 quilômetros de trilhas mantidas serpenteiam pelas florestas do parque nacional, mais de 30 deles iluminados para os meses escuros. Escolha um café de trilha como destino e esquie até lá para um café.',
      },
    },
    {
      title: {
        en: 'Pallas-Yllästunturi National Park', fi: 'Pallas-Yllästunturin kansallispuisto',
        sv: 'Nationalparken Pallas-Yllästunturi', de: 'Nationalpark Pallas-Yllästunturi',
        es: 'Parque Nacional Pallas-Yllästunturi', fr: 'Parc national de Pallas-Yllästunturi',
        it: 'Parco Nazionale di Pallas-Yllästunturi', nl: 'Nationaal Park Pallas-Yllästunturi',
        ja: 'Pallas-Yllästunturi 国立公園', ko: 'Pallas-Yllästunturi 국립공원',
        'zh-CN': 'Pallas-Yllästunturi 国家公园', 'pt-BR': 'Parque Nacional Pallas-Yllästunturi',
      },
      body: {
        en: 'Finland’s most visited national park begins at the village edge. The Kellokas visitor centre, on the road between the two villages, is the natural first stop for trail maps and exhibitions.',
        fi: 'Suomen suosituin kansallispuisto alkaa kylän laidalta. Luontokeskus Kellokas kylien välisen tien varrella on luonteva ensimmäinen pysähdys reittikarttoihin ja näyttelyihin.',
        sv: 'Finlands mest besökta nationalpark börjar vid byns kant. Naturum Kellokas, vid vägen mellan de två byarna, är ett naturligt första stopp för ledkartor och utställningar.',
        de: 'Finnlands meistbesuchter Nationalpark beginnt am Dorfrand. Das Besucherzentrum Kellokas an der Straße zwischen den beiden Dörfern ist die natürliche erste Anlaufstelle für Wegekarten und Ausstellungen.',
        es: 'El parque nacional más visitado de Finlandia empieza al borde del pueblo. El centro de visitantes Kellokas, en la carretera entre los dos pueblos, es la primera parada natural para mapas de senderos y exposiciones.',
        fr: 'Le parc national le plus visité de Finlande commence à la lisière du village. Le centre d’accueil Kellokas, sur la route entre les deux villages, est la première halte naturelle pour les cartes de sentiers et les expositions.',
        it: 'Il parco nazionale più visitato della Finlandia inizia ai margini del villaggio. Il centro visitatori Kellokas, sulla strada tra i due villaggi, è la prima tappa naturale per mappe dei sentieri ed esposizioni.',
        nl: 'Het meest bezochte nationale park van Finland begint aan de rand van het dorp. Het bezoekerscentrum Kellokas, aan de weg tussen de twee dorpen, is de logische eerste stop voor wandelkaarten en tentoonstellingen.',
        ja: 'フィンランドで最も訪れる人の多い国立公園が、村のすぐ端から始まります。2つの村を結ぶ道沿いにあるビジターセンター Kellokas は、ルート地図や展示を見る最初の立ち寄り先にぴったりです。',
        ko: '핀란드에서 가장 많은 사람이 찾는 국립공원이 마을 가장자리에서 시작됩니다. 두 마을을 잇는 길가에 있는 방문자 센터 Kellokas는 경로 지도와 전시를 살펴보기에 자연스러운 첫 기착지입니다.',
        'zh-CN': '芬兰访客最多的国家公园就从村边开始。位于两村之间道路旁的 Kellokas 游客中心，是索取步道地图、参观展览的理想第一站。',
        'pt-BR': 'O parque nacional mais visitado da Finlândia começa na borda do vilarejo. O centro de visitantes Kellokas, na estrada entre os dois vilarejos, é a primeira parada natural para mapas de trilhas e exposições.',
      },
    },
  ],
  places: [
    { name: 'Ravintola Rouhe', href: 'https://www.ravintolarouhe.fi/', kind: 'food' },
    { name: 'Ravintola Otso', href: 'https://www.ravintolaotso.fi/', kind: 'food' },
    { name: 'Ylläksen Eväskori & Joiku Pub', href: 'https://www.evaskori.fi/', kind: 'food' },
    { name: 'Ylläskammi', href: 'https://www.yllasravintolat.fi/', kind: 'food' },
    { name: 'Ravintola Poro', href: 'https://www.ravintolaporo.fi/', kind: 'food' },
    { name: 'Bar Kaappi', href: 'https://yllas.fi/en/restaurant/bar-kaappi/', kind: 'food' },
    {
      name: 'Lapland Hotels Saaga Spa & Sauna',
      href: 'https://www.laplandhotels.com/en/hotels-and-destinations/yllas/lapland-hotels-saaga/spa',
      kind: 'wellness',
    },
    { name: 'Sauna Gondola', href: 'https://ski.yllas.fi/en/gondola/sauna-gondola/', kind: 'wellness' },
    { name: 'FitnessGym Ylläs', href: 'https://fitnessgym.fi/en/fitnessgym-yllas-2/', kind: 'wellness' },
  ],
  networkLinks: [
    {
      label: {
        en: 'Ylläs on LaplandSkiResorts', fi: 'Ylläs LaplandSkiResortsissa', sv: 'Ylläs på LaplandSkiResorts',
        de: 'Ylläs auf LaplandSkiResorts', es: 'Ylläs en LaplandSkiResorts', fr: 'Ylläs sur LaplandSkiResorts',
        it: 'Ylläs su LaplandSkiResorts', nl: 'Ylläs op LaplandSkiResorts', ja: 'LaplandSkiResorts で Ylläs を見る',
        ko: 'LaplandSkiResorts에서 Ylläs 보기', 'zh-CN': '在 LaplandSkiResorts 上看 Ylläs',
        'pt-BR': 'Ylläs no LaplandSkiResorts',
      },
      href: 'https://laplandskiresorts.com/resort/yllas',
    },
    {
      label: {
        en: 'The Ylläs resort guide on LaplandVibes', fi: 'Ylläksen keskusopas LaplandVibesissä',
        sv: 'Ylläs-guiden på LaplandVibes', de: 'Der Ylläs-Guide auf LaplandVibes',
        es: 'La guía de Ylläs en LaplandVibes', fr: 'Le guide d’Ylläs sur LaplandVibes',
        it: 'La guida di Ylläs su LaplandVibes', nl: 'De Ylläs-gids op LaplandVibes',
        ja: 'LaplandVibes の Ylläs ガイド', ko: 'LaplandVibes의 Ylläs 가이드',
        'zh-CN': 'LaplandVibes 上的 Ylläs 指南', 'pt-BR': 'O guia de Ylläs no LaplandVibes',
      },
      href: 'https://laplandvibes.com/destination/yllas',
    },
  ],
};

export const destinationFacts: Record<string, DestinationFacts> = {
  yllas,
};

export function getDestinationFacts(slug: string): DestinationFacts | undefined {
  return destinationFacts[slug];
}
