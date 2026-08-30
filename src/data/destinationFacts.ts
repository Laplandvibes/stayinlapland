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
 * site. Levi is likewise ported verbatim from resortHubs/levi.ts (verified
 * 2026-07-23). Do not edit those numbers without updating the hub files too.
 *
 * Rovaniemi, Saariselkä and Inari were verified from scratch 2026-07-26.
 * Sources, one per figure published below:
 *  • Rovaniemi — ounasvaara.fi/en/slopes/ (slope map runs 1–11, and the site's
 *    own status widget reads "0/11 Slopes Open" / "1/5 Lifts Open"; "50
 *    kilometers has lights" of the area's 100 km of track) and
 *    ounasvaara.fi/en/about/ ("Ounasvaara rises to over 200 metres above sea
 *    level, with the biggest difference in altitude (140 m) being the FIS
 *    competition slope"; "Ounasvaara's approximately 100 km of cross-country
 *    ski trails are part of the city's network of over 200 km of trails").
 *    Midnight sun 6 Jun–7 Jul and polar night 6 Dec–7 Jan from
 *    visitrovaniemi.fi. Arktikum's two resident institutions and the "the
 *    architecture is an attraction in itself" framing from arktikum.fi.
 *  • Saariselkä — skisaariselka.com/slopes/ ("24 slopes, 16 of which are
 *    illuminated", "6 lifts", longest slope "2000 m", "Elevation 180 m") and
 *    skisaariselka.com ("The northernmost ski center in Europe"; stated
 *    2026/2027 opening goal 21.11.2026–2.5.2027). Kiilopää facts from
 *    kiilopaa.fi/en/ (run by Suomen Latu, "located right next to Urho Kekkonen
 *    National Park", routes from a one-kilometre loop to over 20 kilometres,
 *    smoke sauna and stream swimming at Kuurakaltio).
 *  • Inari — inari.fi/en/information.html, the municipality's own page:
 *    "Inari is the largest municipality in Finland", "It covers 5 percent of
 *    the total surface area in Finland", "Lake Inari is the third largest lake
 *    in Finland. Its length is about 100 km, average depth is 14 metres and
 *    the deepest points go down to almost 100 metres. Lake Inari has over
 *    3 300 islands", "There are over 10 000 lakes in Inari region", "Almost
 *    one third of the Inari citizens are Sámi. Two thirds of the population
 *    of Inari municipality live in the village of Ivalo", "three different
 *    Sámi languages are officially used side by side with Finnish". Siida's
 *    role as the national museum of Sámi culture from siida.fi.
 *
 * No park-area figure is published anywhere here: luontoon.fi (which replaced
 * nationalparks.fi in 2026) renders its destination pages client-side and
 * states no area for Urho Kekkonen or Lemmenjoki in the served HTML, so the
 * number could not be traced to the operator and is therefore absent.
 *
 * 🔴 URL gate, re-run 2026-07-26: HTTP 200 is not enough. nationalparks.fi
 * deep links now answer 200 while serving the luontoon.fi front page, and
 * kuukkeli.com / petronella.fi answer 200 with an unrelated business. Every
 * href below was checked for 200 AND a title that names the right business.
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
  /**
   * Optional one-line caveat rendered under the name. Use it when the venue is
   * real and bookable but part of what the category heading promises is not
   * currently available — a closed pool world under "Sauna & spa", say. The
   * alternative (dropping the venue) hides a place the reader may still want.
   */
  note?: L12;
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
    it: 'Dove La mandano quelli del posto.', nl: 'Waar de locals u heen sturen.', 'pt-BR': 'Para onde os locais mandam você.',
    ja: '地元の人がすすめる場所。', ko: '현지 사람들이 알려 주는 곳.', 'zh-CN': '当地人会指给你的地方。',
  },
  placesNote: {
    en: 'Independent local businesses, listed because they are open and worth the walk. These are plain links, not paid placements, and we earn nothing if you go.',
    fi: 'Itsenäisiä paikallisia yrityksiä, listattu koska ne ovat auki ja käynnin arvoisia. Nämä ovat tavallisia linkkejä, eivät maksettuja paikkoja, emmekä ansaitse mitään jos menet.',
    sv: 'Fristående lokala företag, med på listan för att de har öppet och är värda promenaden. Det här är vanliga länkar, inte köpta placeringar, och vi tjänar ingenting på att du går dit.',
    de: 'Unabhängige lokale Betriebe, aufgeführt, weil sie geöffnet und den Weg wert sind. Das sind normale Links, keine bezahlten Platzierungen, und wir verdienen nichts daran.',
    fr: 'Des établissements locaux indépendants, cités parce qu’ils sont ouverts et valent le détour. Ce sont de simples liens, pas des placements payants, et nous ne gagnons rien si vous y allez.',
    es: 'Negocios locales independientes, incluidos porque están abiertos y merecen la caminata. Son enlaces normales, no ubicaciones pagadas, y no ganamos nada si vas.',
    it: 'Attività locali indipendenti, elencate perché sono aperte e valgono il tragitto. Sono link normali, non posizionamenti a pagamento, e non guadagniamo nulla se ci va.',
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
        de: 'Rund 300 Kilometer gepflegte Loipen ziehen sich durch die Wälder des Nationalparks, mehr als 30 davon für die dunklen Monate beleuchtet. Wählen Sie ein Loipencafé als Ziel und laufen Sie auf Skiern dorthin auf einen Kaffee.',
        es: 'Unos 300 kilómetros de pistas mantenidas recorren los bosques del parque nacional, más de 30 iluminados para los meses oscuros. Elige un café de pista como destino y esquía hasta allí a tomar un café.',
        fr: 'Environ 300 kilomètres de pistes entretenues sillonnent les forêts du parc national, dont plus de 30 éclairés pour les mois sombres. Choisissez un café de piste comme but et rejoignez-le à ski pour un café.',
        it: 'Circa 300 chilometri di piste battute attraversano i boschi del parco nazionale, oltre 30 illuminati per i mesi bui. Scelga un caffè lungo la pista come meta e lo raggiunga sugli sci per un caffè.',
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

/* ─── Stat labels shared by the entries verified 2026-07-26. Ylläs keeps its
       own inline copies above because it is a verbatim port. ─── */

const slopesLabel: L12 = {
  en: 'slopes', fi: 'rinnettä', sv: 'backar', de: 'Pisten', fr: 'pistes', es: 'pistas',
  it: 'piste', nl: 'pistes', 'pt-BR': 'pistas', ja: 'コース', ko: '슬로프', 'zh-CN': '雪道',
};

const liftsLabel: L12 = {
  en: 'lifts', fi: 'hissiä', sv: 'liftar', de: 'Lifte', fr: 'remontées', es: 'remontes',
  it: 'impianti', nl: 'liften', 'pt-BR': 'teleféricos', ja: 'リフト', ko: '리프트', 'zh-CN': '缆车',
};

const verticalLabel: L12 = {
  en: 'vertical drop', fi: 'pudotusta', sv: 'fallhöjd', de: 'Höhenunterschied',
  fr: 'dénivelé', es: 'desnivel', it: 'dislivello', nl: 'hoogteverschil',
  'pt-BR': 'desnível', ja: '標高差', ko: '표고차', 'zh-CN': '落差',
};

const xcLabel: L12 = {
  en: 'cross-country tracks', fi: 'hoidettuja latuja', sv: 'preparerade spår',
  de: 'gepflegte Loipen', fr: 'pistes de ski de fond', es: 'pistas de esquí de fondo',
  it: 'piste da fondo', nl: 'langlaufloipes', 'pt-BR': 'trilhas de esqui nórdico',
  ja: 'クロスカントリーコース', ko: '크로스컨트리 트랙', 'zh-CN': '越野雪道',
};

/* ─── ROVANIEMI ─── verified 2026-07-26 against ounasvaara.fi,
       visitrovaniemi.fi and arktikum.fi ─── */

const rovaniemi: DestinationFacts = {
  stats: [
    {
      value: '66°33′',
      label: {
        en: 'north: the Arctic Circle', fi: 'pohjoista: napapiiri', sv: 'nordlig bredd: polcirkeln',
        de: 'Nord: der Polarkreis', fr: 'nord : le cercle polaire', es: 'norte: el círculo polar',
        it: 'nord: il circolo polare', nl: 'noord: de poolcirkel', 'pt-BR': 'norte: o círculo polar',
        ja: '北緯、北極圏', ko: '북위, 북극권', 'zh-CN': '北纬，北极圈',
      },
    },
    { value: '11', label: { ...slopesLabel } },
    {
      value: '200+ km',
      label: {
        en: 'ski trails in the city', fi: 'latua kaupungissa', sv: 'skidspår i staden',
        de: 'Loipen in der Stadt', fr: 'pistes de fond en ville', es: 'pistas de fondo en la ciudad',
        it: 'piste da fondo in città', nl: 'loipes in de stad', 'pt-BR': 'trilhas de esqui na cidade',
        ja: '市内のコース', ko: '시내 스키 트랙', 'zh-CN': '市内雪道',
      },
    },
    { value: '140 m', label: { ...verticalLabel } },
  ],
  highlights: [
    {
      title: {
        en: 'A city on the Arctic Circle', fi: 'Kaupunki napapiirillä', sv: 'En stad på polcirkeln',
        de: 'Eine Stadt am Polarkreis', fr: 'Une ville sur le cercle polaire',
        es: 'Una ciudad en el círculo polar', it: 'Una città sul circolo polare',
        nl: 'Een stad op de poolcirkel', 'pt-BR': 'Uma cidade no círculo polar',
        ja: '北極圏の街', ko: '북극권의 도시', 'zh-CN': '北极圈上的城市',
      },
      body: {
        en: 'The Arctic Circle crosses Rovaniemi at 66°33′ north. From 6 June to 7 July the sun never sets. In December it still rises: on 21 December from 11:08 to 13:22, a little over two hours of light. True polar night, kaamos in Finnish, starts further north.',
        fi: 'Napapiiri kulkee Rovaniemen halki 66°33′ pohjoista leveyttä. Kesäkuun 6. päivästä heinäkuun 7. päivään aurinko ei laske. Joulukuussa aurinko nousee yhä: 21. joulukuuta klo 11.08–13.22, runsaat kaksi tuntia valoa. Varsinainen kaamos alkaa vasta pohjoisempaa.',
        sv: 'Polcirkeln går genom Rovaniemi vid 66°33′ nordlig bredd. Från 6 juni till 7 juli går solen aldrig ner. I december går solen fortfarande upp: den 21 december mellan 11.08 och 13.22, drygt två timmars ljus. Den egentliga polarnatten, kaamos på finska, börjar först längre norrut.',
        de: 'Der Polarkreis verläuft bei 66°33′ nördlicher Breite durch Rovaniemi. Vom 6. Juni bis 7. Juli geht die Sonne nicht unter. Im Dezember geht sie weiterhin auf: am 21. Dezember von 11:08 bis 13:22 Uhr, gut zwei Stunden Licht. Die echte Polarnacht, auf Finnisch kaamos, beginnt erst weiter nördlich.',
        es: 'El círculo polar cruza Rovaniemi a 66°33′ de latitud norte. Del 6 de junio al 7 de julio el sol no se pone. En diciembre sigue saliendo: el 21 de diciembre, de 11:08 a 13:22, algo más de dos horas de luz. La noche polar de verdad, kaamos en finés, empieza más al norte.',
        fr: 'Le cercle polaire traverse Rovaniemi à 66°33′ de latitude nord. Du 6 juin au 7 juillet, le soleil ne se couche pas. En décembre, il se lève encore : le 21 décembre de 11h08 à 13h22, un peu plus de deux heures de lumière. La vraie nuit polaire, kaamos en finnois, commence plus au nord.',
        it: 'Il circolo polare attraversa Rovaniemi a 66°33′ di latitudine nord. Dal 6 giugno al 7 luglio il sole non tramonta. A dicembre sorge ancora: il 21 dicembre dalle 11:08 alle 13:22, poco più di due ore di luce. La vera notte polare, kaamos in finlandese, comincia più a nord.',
        nl: 'De poolcirkel loopt bij 66°33′ noorderbreedte door Rovaniemi. Van 6 juni tot 7 juli gaat de zon niet onder. In december komt ze nog steeds op: op 21 december van 11.08 tot 13.22 uur, ruim twee uur licht. De echte poolnacht, kaamos in het Fins, begint pas verder naar het noorden.',
        ja: '北極圏は北緯66度33分で Rovaniemi を横切ります。6月6日から7月7日まで太陽は沈みません。12月でも太陽は昇り、12月21日は11時08分から13時22分まで、2時間あまりの明るさがあります。フィンランド語で kaamos と呼ばれる本当の極夜が始まるのは、さらに北です。',
        ko: '북극권은 북위 66도 33분에서 Rovaniemi를 가로지릅니다. 6월 6일부터 7월 7일까지는 해가 지지 않습니다. 12월에도 해는 뜹니다. 12월 21일에는 11시 08분부터 13시 22분까지, 두 시간 남짓 빛이 있습니다. 핀란드어로 kaamos라 부르는 진짜 극야는 더 북쪽에서 시작됩니다.',
        'zh-CN': '北极圈在北纬 66°33′ 穿过 Rovaniemi。6 月 6 日到 7 月 7 日太阳不落。12 月太阳依然会升起：12 月 21 日从 11:08 到 13:22，有两个多小时的光。芬兰语称作 kaamos 的真正极夜，要更靠北才开始。',
        'pt-BR': 'O círculo polar cruza Rovaniemi a 66°33′ de latitude norte. De 6 de junho a 7 de julho o sol não se põe. Em dezembro ele ainda nasce: em 21 de dezembro, das 11:08 às 13:22, pouco mais de duas horas de luz. A noite polar de verdade, kaamos em finlandês, começa mais ao norte.',
      },
    },
    {
      title: {
        en: 'Ounasvaara, across the river', fi: 'Ounasvaara joen takana',
        sv: 'Ounasvaara på andra sidan älven', de: 'Ounasvaara jenseits des Flusses',
        es: 'Ounasvaara, al otro lado del río', fr: 'Ounasvaara, de l’autre côté du fleuve',
        it: 'Ounasvaara, dall’altra parte del fiume', nl: 'Ounasvaara aan de overkant van de rivier',
        ja: '川の向こうの Ounasvaara', ko: '강 건너의 Ounasvaara', 'zh-CN': '河对岸的 Ounasvaara',
        'pt-BR': 'Ounasvaara, do outro lado do rio',
      },
      body: {
        en: 'Eleven slopes and five lifts on the hill facing the centre, with 140 metres of vertical on the competition slope. Around them run about 100 kilometres of cross-country track, half of it lit, part of a city network of more than 200 kilometres.',
        fi: 'Yksitoista rinnettä ja viisi hissiä keskustaa vastapäätä olevalla vaaralla, ja kilparinteessä 140 metrin pudotus. Ympärillä kiertää noin 100 kilometriä latua, puolet siitä valaistuna, osana yli 200 kilometrin kaupunkiverkostoa.',
        sv: 'Elva backar och fem liftar på höjden mitt emot centrum, med 140 meters fallhöjd i tävlingsbacken. Runt dem löper omkring 100 kilometer skidspår, hälften belyst, som en del av ett stadsnät på över 200 kilometer.',
        de: 'Elf Pisten und fünf Lifte auf dem Hügel gegenüber dem Zentrum, mit 140 Metern Höhenunterschied an der Wettkampfpiste. Rundherum verlaufen rund 100 Kilometer Loipen, die Hälfte davon beleuchtet, als Teil eines Stadtnetzes von über 200 Kilometern.',
        es: 'Once pistas y cinco remontes en la colina frente al centro, con 140 metros de desnivel en la pista de competición. Alrededor discurren unos 100 kilómetros de pistas de fondo, la mitad iluminadas, dentro de una red urbana de más de 200 kilómetros.',
        fr: 'Onze pistes et cinq remontées sur la colline face au centre, avec 140 mètres de dénivelé sur la piste de compétition. Autour courent environ 100 kilomètres de pistes de fond, la moitié éclairées, dans un réseau urbain de plus de 200 kilomètres.',
        it: 'Undici piste e cinque impianti sulla collina di fronte al centro, con 140 metri di dislivello sulla pista da gara. Intorno corrono circa 100 chilometri di piste da fondo, metà illuminate, dentro una rete cittadina di oltre 200 chilometri.',
        nl: 'Elf pistes en vijf liften op de heuvel tegenover het centrum, met 140 meter hoogteverschil op de wedstrijdpiste. Eromheen loopt zo’n 100 kilometer langlaufloipe, de helft verlicht, als deel van een stadsnetwerk van ruim 200 kilometer.',
        ja: '中心部と向かい合う丘に11本のコースと5基のリフトがあり、競技コースの標高差は140メートル。その周囲を約100キロのクロスカントリーコースが巡り、半分は照明付きで、200キロを超える市内ネットワークの一部になっています。',
        ko: '도심과 마주 보는 언덕에 11개의 슬로프와 5대의 리프트가 있고, 경기용 슬로프의 표고차는 140미터입니다. 그 둘레로 약 100킬로미터의 크로스컨트리 트랙이 이어지며 절반에는 조명이 켜집니다. 200킬로미터가 넘는 시내 네트워크의 일부입니다.',
        'zh-CN': '与市中心隔水相望的山丘上有 11 条雪道和 5 部缆车，比赛道落差 140 米。周围铺开约 100 公里越野雪道，其中一半点着灯，属于全市 200 多公里网络的一部分。',
        'pt-BR': 'Onze pistas e cinco teleféricos na colina em frente ao centro, com 140 metros de desnível na pista de competição. Em volta correm cerca de 100 quilômetros de trilhas de esqui nórdico, metade iluminada, parte de uma rede urbana de mais de 200 quilômetros.',
      },
    },
    {
      title: {
        en: 'Arktikum, under the glass', fi: 'Arktikum lasikäytävän alla', sv: 'Arktikum under glaset',
        de: 'Arktikum unter dem Glas', es: 'Arktikum, bajo el cristal', fr: 'Arktikum, sous la verrière',
        it: 'Arktikum, sotto il vetro', nl: 'Arktikum onder het glas', ja: 'ガラスの下の Arktikum',
        ko: '유리 아래의 Arktikum', 'zh-CN': '玻璃之下的 Arktikum', 'pt-BR': 'Arktikum, sob o vidro',
      },
      body: {
        en: 'The Arctic science centre and museum holds two institutions under one roof: the Regional Museum of Lapland and the Arctic Centre of the University of Lapland. The architecture is an attraction in itself, and the glass corridor is the part people come to see.',
        fi: 'Arktinen tiedekeskus ja museo pitää saman katon alla kahta laitosta: Lapin maakuntamuseota ja Lapin yliopiston Arktista keskusta. Arkkitehtuuri on nähtävyys itsessään, ja lasikäytävä on se osa, jota tullaan katsomaan.',
        sv: 'Det arktiska vetenskapscentret och museet rymmer två institutioner under samma tak: Lapplands landskapsmuseum och Arktiska centret vid Lapplands universitet. Arkitekturen är en sevärdhet i sig, och glaskorridoren är den del man kommer för att se.',
        de: 'Das arktische Wissenschaftszentrum und Museum vereint zwei Einrichtungen unter einem Dach: das Regionalmuseum Lapplands und das Arktische Zentrum der Universität Lappland. Die Architektur ist selbst eine Sehenswürdigkeit, und der Glasgang ist der Teil, für den die Leute kommen.',
        es: 'El centro científico y museo del Ártico reúne dos instituciones bajo un mismo techo: el Museo Regional de Laponia y el Centro Ártico de la Universidad de Laponia. La arquitectura es de por sí un atractivo, y el corredor de cristal es la parte que la gente viene a ver.',
        fr: 'Le centre scientifique et musée de l’Arctique réunit deux institutions sous un même toit : le musée régional de Laponie et le Centre arctique de l’université de Laponie. L’architecture est en soi une attraction, et la galerie de verre est ce que l’on vient voir.',
        it: 'Il centro scientifico e museo dell’Artico riunisce due istituzioni sotto lo stesso tetto: il Museo regionale della Lapponia e il Centro artico dell’Università della Lapponia. L’architettura è di per sé un’attrazione, e il corridoio di vetro è la parte che si viene a vedere.',
        nl: 'Het arctische wetenschapscentrum en museum brengt twee instellingen onder één dak: het Regionaal Museum van Lapland en het Arctisch Centrum van de Universiteit van Lapland. De architectuur is op zichzelf een bezienswaardigheid, en de glazen gang is het deel waarvoor men komt.',
        ja: 'この北極の科学センター兼博物館は、ひとつ屋根の下に2つの機関を収めています。ラップランド地方博物館と、ラップランド大学北極センターです。建築そのものが見どころで、なかでもガラスの回廊は多くの人が目当てにする場所です。',
        ko: '이 북극 과학 센터 겸 박물관은 한 지붕 아래 두 기관을 품고 있습니다. 라플란드 지방 박물관과 라플란드 대학교 북극 센터입니다. 건축 자체가 볼거리이며, 그중에서도 유리 회랑은 사람들이 보러 오는 부분입니다.',
        'zh-CN': '这座北极科学中心兼博物馆将两家机构收于同一屋檐下：拉普兰地区博物馆与拉普兰大学北极中心。建筑本身就是看点，其中的玻璃回廊更是人们专程前来观看的部分。',
        'pt-BR': 'O centro científico e museu do Ártico reúne duas instituições sob o mesmo teto: o Museu Regional da Lapônia e o Centro Ártico da Universidade da Lapônia. A arquitetura é por si só uma atração, e o corredor de vidro é a parte que as pessoas vêm ver.',
      },
    },
  ],
  places: [
    { name: 'Ravintola Nili', href: 'https://www.nili.fi/', kind: 'food' },
    { name: 'GUSTAV Kitchen & Bar', href: 'https://www.gustavkitchenbar.fi/', kind: 'food' },
    { name: 'Monte Rosa', href: 'https://www.monterosa.fi/', kind: 'food' },
    { name: 'Kauppayhtiö', href: 'https://kauppayhtio.fi/', kind: 'food' },
    { name: 'Cafe & Bar 21', href: 'https://www.cafebar21.fi/', kind: 'food' },
    { name: 'Santasport Kylpylä', href: 'https://santasport.fi/vapaa-aika/kylpyla/', kind: 'wellness' },
    {
      name: 'Lapland Hotels Sky Ounasvaara',
      href: 'https://www.laplandhotels.com/en/hotels-and-destinations/rovaniemi/lapland-hotels-sky-ounasvaara',
      kind: 'wellness',
    },
  ],
  networkLinks: [
    {
      label: {
        en: 'Ounasvaara on LaplandSkiResorts', fi: 'Ounasvaara LaplandSkiResortsissa',
        sv: 'Ounasvaara på LaplandSkiResorts', de: 'Ounasvaara auf LaplandSkiResorts',
        es: 'Ounasvaara en LaplandSkiResorts', fr: 'Ounasvaara sur LaplandSkiResorts',
        it: 'Ounasvaara su LaplandSkiResorts', nl: 'Ounasvaara op LaplandSkiResorts',
        ja: 'LaplandSkiResorts で Ounasvaara を見る', ko: 'LaplandSkiResorts에서 Ounasvaara 보기',
        'zh-CN': '在 LaplandSkiResorts 上看 Ounasvaara', 'pt-BR': 'Ounasvaara no LaplandSkiResorts',
      },
      href: 'https://laplandskiresorts.com/resort/ounasvaara',
    },
    {
      label: {
        en: 'The Rovaniemi guide on LaplandVibes', fi: 'Rovaniemen opas LaplandVibesissä',
        sv: 'Rovaniemi-guiden på LaplandVibes', de: 'Der Rovaniemi-Guide auf LaplandVibes',
        es: 'La guía de Rovaniemi en LaplandVibes', fr: 'Le guide de Rovaniemi sur LaplandVibes',
        it: 'La guida di Rovaniemi su LaplandVibes', nl: 'De Rovaniemi-gids op LaplandVibes',
        ja: 'LaplandVibes の Rovaniemi ガイド', ko: 'LaplandVibes의 Rovaniemi 가이드',
        'zh-CN': 'LaplandVibes 上的 Rovaniemi 指南', 'pt-BR': 'O guia de Rovaniemi no LaplandVibes',
      },
      href: 'https://laplandvibes.com/destination/rovaniemi',
    },
  ],
};

/* ─── LEVI ─── strings ported from the hub's verified dataset
       (resortHubs/levi.ts, verified 2026-07-23) ─── */

const levi: DestinationFacts = {
  stats: [
    { value: '44', label: { ...slopesLabel } },
    { value: '26', label: { ...liftsLabel } },
    {
      value: '531 m',
      label: {
        en: 'summit', fi: 'laella', sv: 'topp', de: 'Gipfel', fr: 'sommet', es: 'cima',
        it: 'vetta', nl: 'top', 'pt-BR': 'cume', ja: '山頂', ko: '정상', 'zh-CN': '山顶',
      },
    },
    { value: '~230 km', label: { ...xcLabel } },
  ],
  highlights: [
    {
      title: {
        en: 'The slopes of Levi', fi: 'Levin rinteet', sv: 'Backarna i Levi',
        de: 'Die Pisten von Levi', es: 'Las pistas de Levi', fr: 'Les pistes de Levi',
        it: 'Le piste di Levi', nl: 'De pistes van Levi', ja: 'Levi のゲレンデ',
        ko: 'Levi의 슬로프', 'zh-CN': 'Levi 的雪道', 'pt-BR': 'As pistas de Levi',
      },
      body: {
        en: '44 slopes drop off Levitunturi to the village at its foot, and two gondolas carry you to the 531-metre summit. The alpine World Cup opens here every November, with the season’s first slalom raced on the front slope on 14 and 15 November 2026.',
        fi: '44 rinnettä laskeutuu Levitunturilta sen juurella olevaan kylään, ja kaksi gondolia vie 531 metrin laelle. Alppihiihdon maailmancup avataan täällä joka marraskuu, ja kauden ensimmäinen pujottelu ajetaan eturinteessä 14. ja 15. marraskuuta 2026.',
        sv: '44 backar faller från Levitunturi ner till byn vid foten, och två gondoler tar dig till toppen på 531 meter. Alpina världscupen inleds här varje november, och säsongens första slalom åks i frontbacken den 14 och 15 november 2026.',
        de: '44 Pisten fallen vom Levitunturi zum Dorf an seinem Fuß ab, und zwei Gondeln bringen Sie auf den 531 Meter hohen Gipfel. Der alpine Weltcup wird hier jeden November eröffnet, und der erste Slalom der Saison wird am 14. und 15. November 2026 an der Frontpiste gefahren.',
        es: '44 pistas descienden del Levitunturi hasta el pueblo a sus pies, y dos telecabinas te llevan a la cima de 531 metros. La Copa del Mundo de esquí alpino se inaugura aquí cada noviembre, y el primer eslalon de la temporada se disputa en la pista frontal el 14 y 15 de noviembre de 2026.',
        fr: '44 pistes dévalent le Levitunturi jusqu’au village à son pied, et deux télécabines vous mènent au sommet à 531 mètres. La Coupe du monde de ski alpin s’ouvre ici chaque novembre, et le premier slalom de la saison se court sur la piste frontale les 14 et 15 novembre 2026.',
        it: '44 piste scendono dal Levitunturi fino al villaggio ai suoi piedi, e due cabinovie La portano alla vetta di 531 metri. La Coppa del Mondo di sci alpino si apre qui ogni novembre, e il primo slalom della stagione si corre sulla pista frontale il 14 e 15 novembre 2026.',
        nl: '44 pistes dalen van de Levitunturi af naar het dorp aan de voet, en twee gondels brengen u naar de top op 531 meter. De alpine wereldbeker opent hier elke november, en de eerste slalom van het seizoen wordt op de frontpiste verreden op 14 en 15 november 2026.',
        ja: '44本のコースが Levitunturi から山ふもとの村へと下り、2基のゴンドラが標高531メートルの山頂へ運びます。アルペンスキーのワールドカップは毎年11月にここで開幕し、今シーズン最初のスラロームは2026年11月14日と15日にフロントスロープで行われます。',
        ko: '44개의 슬로프가 Levitunturi에서 기슭의 마을로 내려오고, 두 대의 곤돌라가 해발 531미터 정상까지 데려다줍니다. 알파인 월드컵은 해마다 11월 이곳에서 개막하며, 시즌 첫 회전 경기는 2026년 11월 14일과 15일 프런트 슬로프에서 열립니다.',
        'zh-CN': '44 条雪道自 Levitunturi 一路下延至山脚的村庄，两部吊厢缆车载你登上 531 米的山顶。高山滑雪世界杯每年 11 月在此揭幕，本赛季首场回转赛将于 2026 年 11 月 14 日和 15 日在正面雪道举行。',
        'pt-BR': '44 pistas descem do Levitunturi até o vilarejo a seus pés, e dois teleféricos gôndola levam você ao cume de 531 metros. A Copa do Mundo de esqui alpino abre aqui todo mês de novembro, e o primeiro slalom da temporada é disputado na pista frontal em 14 e 15 de novembro de 2026.',
      },
    },
    {
      title: {
        en: 'Cross-country to a trail café', fi: 'Hiihtäen latukahvilaan',
        sv: 'På längdskidor till spårkafé', de: 'Auf Langlaufskiern zum Loipencafé',
        es: 'Esquí de fondo hasta un café de pista', fr: 'À ski de fond jusqu’à un café de piste',
        it: 'Sci di fondo fino a un caffè lungo la pista', nl: 'Langlaufen naar een loipecafé',
        ja: 'クロスカントリーでトラックカフェへ', ko: '크로스컨트리로 트랙 카페까지',
        'zh-CN': '越野滑雪去雪道咖啡馆', 'pt-BR': 'Esqui de fundo até um café de trilha',
      },
      body: {
        en: 'Around 230 kilometres of maintained tracks run from the village into the fells, with 28 kilometres lit through the dark months. Pick a trail café as your turning point, ski out for coffee and glide back before dusk.',
        fi: 'Noin 230 kilometriä hoidettuja latuja lähtee kylästä tuntureille, ja niistä 28 kilometriä on valaistu pimeille kuukausille. Valitse latukahvila käännekohdaksi, hiihdä kahville ja liu’u takaisin ennen hämärää.',
        sv: 'Omkring 230 kilometer preparerade spår löper från byn ut i fjällen, varav 28 kilometer är belysta under de mörka månaderna. Välj ett spårkafé som vändpunkt, åk ut på en kopp kaffe och glid tillbaka före skymningen.',
        de: 'Rund 230 Kilometer gepflegte Loipen führen vom Dorf hinaus in die Fjells, davon 28 Kilometer in den dunklen Monaten beleuchtet. Wählen Sie ein Loipencafé als Wendepunkt, laufen Sie hinaus auf einen Kaffee und gleiten Sie vor der Dämmerung zurück.',
        es: 'Unos 230 kilómetros de pistas mantenidas salen del pueblo hacia las colinas, y 28 kilómetros están iluminados durante los meses oscuros. Elige un café de pista como punto de retorno, esquía hasta allí a tomar un café y regresa deslizándote antes del anochecer.',
        fr: 'Environ 230 kilomètres de pistes entretenues partent du village vers les fjelds, dont 28 kilomètres éclairés pendant les mois sombres. Choisissez un café de piste comme point de demi-tour, rejoignez-le à ski pour un café et revenez en glissant avant la nuit.',
        it: 'Circa 230 chilometri di piste battute partono dal villaggio verso le montagne, di cui 28 chilometri illuminati nei mesi bui. Scelga un caffè lungo la pista come punto di ritorno, lo raggiunga sugli sci per un caffè e torni scivolando prima del tramonto.',
        nl: 'Zo’n 230 kilometer geprepareerde loipes lopen vanuit het dorp de fjelden in, waarvan 28 kilometer verlicht in de donkere maanden. Kies een loipecafé als keerpunt, langlauf erheen voor koffie en glijd terug voor het donker.',
        ja: '約230キロの整備されたトラックが村から山々へと延び、そのうち28キロは暗い季節のために照明が付いています。トラックカフェを折り返し地点に選び、コーヒーを飲みに滑っていき、暗くなる前に戻ってきましょう。',
        ko: '약 230킬로미터의 정비된 트랙이 마을에서 산으로 뻗어 있고, 그중 28킬로미터는 어두운 계절 동안 조명이 켜집니다. 트랙 카페를 반환점으로 정해 커피 한 잔 마시러 나갔다가 해 지기 전에 미끄러져 돌아오세요.',
        'zh-CN': '约 230 公里的整备雪道自村庄延伸进山，其中 28 公里在漫长黑夜里点着灯。挑一家雪道咖啡馆作为折返点，滑过去喝杯咖啡，再在暮色前滑回来。',
        'pt-BR': 'Cerca de 230 quilômetros de trilhas mantidas partem do vilarejo rumo às montanhas, com 28 quilômetros iluminados durante os meses escuros. Escolha um café de trilha como ponto de retorno, esquie até lá para um café e deslize de volta antes do anoitecer.',
      },
    },
    {
      title: {
        en: 'Everything within walking distance', fi: 'Kaikki kävelymatkan päässä',
        sv: 'Allt inom gångavstånd', de: 'Alles zu Fuß erreichbar',
        es: 'Todo a distancia a pie', fr: 'Tout à distance de marche',
        it: 'Tutto a distanza di passeggiata', nl: 'Alles op loopafstand',
        ja: 'すべてが徒歩圏内', ko: '모든 것이 걸어서 닿는 거리',
        'zh-CN': '一切皆在步行之内', 'pt-BR': 'Tudo a distância de caminhada',
      },
      body: {
        en: 'Lifts, restaurants, shops and the après-ski all sit within a few streets of each other. When the lifts close the crowd moves to Hullu Poro, the resort’s long-running restaurant and live-music venue.',
        fi: 'Hissit, ravintolat, kaupat ja after ski ovat kaikki muutaman korttelin päässä toisistaan. Kun hissit sulkeutuvat, väki siirtyy Hullu Poroon, keskuksen pitkäikäiseen ravintola- ja livemusiikkipaikkaan.',
        sv: 'Liftar, restauranger, butiker och efterskidåkningen ligger alla inom några kvarter från varandra. När liftarna stänger flyttar folkmassan till Hullu Poro, ortens långlivade restaurang och livemusikscen.',
        de: 'Lifte, Restaurants, Geschäfte und der Après-Ski liegen alle nur wenige Straßen voneinander entfernt. Wenn die Lifte schließen, zieht die Menge ins Hullu Poro, das langjährige Restaurant und die Livemusik-Bühne des Ortes.',
        es: 'Los remontes, los restaurantes, las tiendas y el après-ski están a pocas calles unos de otros. Cuando cierran los remontes, la gente se traslada al Hullu Poro, el veterano restaurante y sala de música en vivo del destino.',
        fr: 'Les remontées, les restaurants, les boutiques et l’après-ski se trouvent tous à quelques rues les uns des autres. Quand les remontées ferment, la foule se déplace au Hullu Poro, le restaurant et la scène de musique live de longue date de la station.',
        it: 'Impianti, ristoranti, negozi e l’après-ski si trovano tutti a poche vie l’uno dall’altro. Quando gli impianti chiudono, la folla si sposta all’Hullu Poro, lo storico ristorante e locale di musica dal vivo della località.',
        nl: 'Liften, restaurants, winkels en de après-ski liggen allemaal een paar straten van elkaar. Als de liften sluiten, trekt het publiek naar Hullu Poro, het al jaren bestaande restaurant en livemuziekpodium van de plaats.',
        ja: 'リフトもレストランも店もアフタースキーも、すべて数ブロックの範囲に収まっています。リフトが止まると、人々は Hullu Poro へ。長く愛される、この地のレストラン兼ライブ会場です。',
        ko: '리프트, 레스토랑, 상점, 애프터스키가 모두 몇 블록 안에 모여 있습니다. 리프트가 멈추면 사람들은 Hullu Poro로 향합니다. 오래도록 사랑받아 온 이곳의 레스토랑이자 라이브 음악 공연장입니다.',
        'zh-CN': '缆车、餐厅、商店和雪后聚会都相隔不过几条街。缆车停运后，人群便涌向 Hullu Poro，那是这处度假地经营多年的餐厅兼现场音乐场地。',
        'pt-BR': 'Teleféricos, restaurantes, lojas e o après-ski ficam todos a poucas ruas uns dos outros. Quando os teleféricos fecham, a multidão se muda para o Hullu Poro, o veterano restaurante e casa de música ao vivo do destino.',
      },
    },
  ],
  places: [
    { name: 'Hullu Poro', href: 'https://www.hulluporo.fi/en/', kind: 'food' },
    { name: 'Panoramic Restaurant TUIKKU', href: 'https://tuikku.fi/', kind: 'food' },
    { name: 'Ravintola Riihi', href: 'https://immelkartano.fi/ravintola-riihi', kind: 'food' },
    { name: 'Kekäle', href: 'https://www.levihotelspa.fi/en/kekale/', kind: 'food' },
    { name: 'NiliPoro', href: 'https://www.niliporo.fi/', kind: 'food' },
    { name: 'Sports Bar Kota', href: 'https://www.cafebarkota.com/', kind: 'food' },
    { name: 'Levi Hotel Spa', href: 'https://www.levihotelspa.fi/en', kind: 'wellness' },
    { name: 'Water World Levi', href: 'https://www.levihotelspa.fi/en/water-world/', kind: 'wellness' },
    { name: 'Levi Wellness Club', href: 'https://leviwellnessclub.fi/', kind: 'wellness' },
  ],
  networkLinks: [
    {
      label: {
        en: 'Levi on LaplandSkiResorts', fi: 'Levi LaplandSkiResortsissa', sv: 'Levi på LaplandSkiResorts',
        de: 'Levi auf LaplandSkiResorts', es: 'Levi en LaplandSkiResorts', fr: 'Levi sur LaplandSkiResorts',
        it: 'Levi su LaplandSkiResorts', nl: 'Levi op LaplandSkiResorts', ja: 'LaplandSkiResorts で Levi を見る',
        ko: 'LaplandSkiResorts에서 Levi 보기', 'zh-CN': '在 LaplandSkiResorts 上看 Levi',
        'pt-BR': 'Levi no LaplandSkiResorts',
      },
      href: 'https://laplandskiresorts.com/resort/levi',
    },
    {
      label: {
        en: 'The Levi resort guide on LaplandVibes', fi: 'Levin keskusopas LaplandVibesissä',
        sv: 'Levi-guiden på LaplandVibes', de: 'Der Levi-Guide auf LaplandVibes',
        es: 'La guía de Levi en LaplandVibes', fr: 'Le guide de Levi sur LaplandVibes',
        it: 'La guida di Levi su LaplandVibes', nl: 'De Levi-gids op LaplandVibes',
        ja: 'LaplandVibes の Levi ガイド', ko: 'LaplandVibes의 Levi 가이드',
        'zh-CN': 'LaplandVibes 上的 Levi 指南', 'pt-BR': 'O guia de Levi no LaplandVibes',
      },
      href: 'https://laplandvibes.com/destination/levi',
    },
  ],
};

/* ─── SAARISELKÄ ─── verified 2026-07-26 against skisaariselka.com and
       kiilopaa.fi ─── */

const saariselka: DestinationFacts = {
  stats: [
    { value: '24', label: { ...slopesLabel } },
    { value: '6', label: { ...liftsLabel } },
    { value: '180 m', label: { ...verticalLabel } },
    {
      value: '2 km',
      label: {
        en: 'longest run', fi: 'pisin rinne', sv: 'längsta backe', de: 'längste Abfahrt',
        fr: 'plus longue piste', es: 'pista más larga', it: 'pista più lunga',
        nl: 'langste afdaling', 'pt-BR': 'pista mais longa', ja: '最長コース',
        ko: '가장 긴 슬로프', 'zh-CN': '最长雪道',
      },
    },
  ],
  highlights: [
    {
      title: {
        en: 'The northernmost ski centre in Europe', fi: 'Euroopan pohjoisin hiihtokeskus',
        sv: 'Europas nordligaste skidcenter', de: 'Europas nördlichstes Skizentrum',
        es: 'El centro de esquí más septentrional de Europa',
        fr: 'La station de ski la plus septentrionale d’Europe',
        it: 'La stazione sciistica più settentrionale d’Europa',
        nl: 'Het noordelijkste skicentrum van Europa', ja: 'ヨーロッパ最北のスキーセンター',
        ko: '유럽 최북단 스키 센터', 'zh-CN': '欧洲最北的滑雪中心',
        'pt-BR': 'O centro de esqui mais setentrional da Europa',
      },
      body: {
        en: 'That is the resort’s own description of itself. 24 slopes spread over the Kaunispää and Iisakkipää fells, 16 of them floodlit, served by six lifts. The stated goal for the coming season is to open on 21 November 2026 and run until 2 May 2027.',
        fi: 'Näin keskus kuvaa itse itseään. 24 rinnettä levittäytyy Kaunispään ja Iisakkipään tuntureille, niistä 16 valaistuna, ja kuusi hissiä palvelee laskijoita. Tulevan kauden tavoitteeksi on ilmoitettu avaus 21. marraskuuta 2026 ja sulkeminen 2. toukokuuta 2027.',
        sv: 'Så beskriver orten sig själv. 24 backar breder ut sig över fjällen Kaunispää och Iisakkipää, 16 av dem belysta, och sex liftar betjänar åkarna. Det uttalade målet för kommande säsong är att öppna den 21 november 2026 och hålla öppet till den 2 maj 2027.',
        de: 'So beschreibt sich der Ort selbst. 24 Pisten verteilen sich über die Fjells Kaunispää und Iisakkipää, 16 davon flutlichtbeleuchtet, bedient von sechs Liften. Als Ziel für die kommende Saison ist die Eröffnung am 21. November 2026 und der Betrieb bis zum 2. Mai 2027 angegeben.',
        es: 'Así se describe la propia estación. 24 pistas se reparten por los montes Kaunispää e Iisakkipää, 16 de ellas iluminadas, con seis remontes al servicio de los esquiadores. El objetivo declarado para la próxima temporada es abrir el 21 de noviembre de 2026 y cerrar el 2 de mayo de 2027.',
        fr: 'C’est ainsi que la station se décrit elle-même. 24 pistes se répartissent sur les monts Kaunispää et Iisakkipää, dont 16 éclairées, desservies par six remontées. L’objectif annoncé pour la saison à venir est d’ouvrir le 21 novembre 2026 et de fermer le 2 mai 2027.',
        it: 'È così che la stazione descrive se stessa. 24 piste si distribuiscono sui monti Kaunispää e Iisakkipää, 16 delle quali illuminate, servite da sei impianti. L’obiettivo dichiarato per la prossima stagione è aprire il 21 novembre 2026 e chiudere il 2 maggio 2027.',
        nl: 'Zo omschrijft het gebied zichzelf. 24 pistes verdelen zich over de fjelden Kaunispää en Iisakkipää, 16 daarvan verlicht, bediend door zes liften. Het uitgesproken doel voor het komende seizoen is openen op 21 november 2026 en doorgaan tot 2 mei 2027.',
        ja: 'これはリゾート自身による紹介です。24本のコースが Kaunispää と Iisakkipää の2つの山に広がり、うち16本にナイター照明。6基のリフトが滑走者を運びます。次のシーズンは2026年11月21日オープン、2027年5月2日クローズを目標に掲げています。',
        ko: '리조트가 스스로를 소개하는 표현입니다. 24개의 슬로프가 Kaunispää와 Iisakkipää 두 산에 펼쳐지고 그중 16개에는 야간 조명이 들어오며, 여섯 대의 리프트가 스키어를 실어 나릅니다. 다가오는 시즌은 2026년 11월 21일 개장, 2027년 5월 2일 폐장을 목표로 내걸고 있습니다.',
        'zh-CN': '这是度假地对自己的描述。24 条雪道铺展在 Kaunispää 和 Iisakkipää 两座山上，其中 16 条设有夜间照明，六部缆车运送滑雪者。新雪季的既定目标是 2026 年 11 月 21 日开板，2027 年 5 月 2 日收板。',
        'pt-BR': 'É assim que a própria estação se descreve. 24 pistas se espalham pelos montes Kaunispää e Iisakkipää, 16 delas iluminadas, atendidas por seis teleféricos. A meta declarada para a próxima temporada é abrir em 21 de novembro de 2026 e seguir até 2 de maio de 2027.',
      },
    },
    {
      title: {
        en: 'Kiilopää and the national park', fi: 'Kiilopää ja kansallispuisto',
        sv: 'Kiilopää och nationalparken', de: 'Kiilopää und der Nationalpark',
        es: 'Kiilopää y el parque nacional', fr: 'Kiilopää et le parc national',
        it: 'Kiilopää e il parco nazionale', nl: 'Kiilopää en het nationale park',
        ja: 'Kiilopää と国立公園', ko: 'Kiilopää와 국립공원', 'zh-CN': 'Kiilopää 与国家公园',
        'pt-BR': 'Kiilopää e o parque nacional',
      },
      body: {
        en: 'Kiilopää, run by the outdoor association Suomen Latu, sits right next to Urho Kekkonen National Park. Marked routes start at its door and run from a one-kilometre loop to walks of over twenty, so the length of the day is yours to choose.',
        fi: 'Ulkoilujärjestö Suomen Ladun Kiilopää sijaitsee aivan Urho Kekkosen kansallispuiston kupeessa. Merkityt reitit lähtevät ovelta ja ulottuvat kilometrin lenkistä yli kahdenkymmenen kilometrin vaelluksiin, joten päivän mitan saa valita itse.',
        sv: 'Kiilopää, som drivs av friluftsförbundet Suomen Latu, ligger alldeles intill Urho Kekkonens nationalpark. Markerade leder startar vid dörren och sträcker sig från en kilometerslinga till vandringar på över tjugo, så dagens längd får du välja själv.',
        de: 'Kiilopää, betrieben vom Outdoor-Verband Suomen Latu, liegt direkt neben dem Urho-Kekkonen-Nationalpark. Markierte Routen beginnen an der Tür und reichen von einer Ein-Kilometer-Runde bis zu Touren von über zwanzig, die Länge des Tages wählen Sie also selbst.',
        es: 'Kiilopää, gestionado por la asociación de aire libre Suomen Latu, está justo al lado del Parque Nacional Urho Kekkonen. Las rutas señalizadas arrancan en la puerta y van de un circuito de un kilómetro a caminatas de más de veinte, así que la duración del día la eliges tú.',
        fr: 'Kiilopää, géré par l’association de plein air Suomen Latu, se trouve juste à côté du parc national Urho Kekkonen. Les itinéraires balisés partent de la porte et vont d’une boucle d’un kilomètre à des marches de plus de vingt, la longueur de la journée vous appartient donc.',
        it: 'Kiilopää, gestito dall’associazione outdoor Suomen Latu, si trova proprio accanto al Parco Nazionale Urho Kekkonen. I percorsi segnalati partono dalla porta e vanno da un anello di un chilometro a camminate di oltre venti, così la lunghezza della giornata la sceglie Lei.',
        nl: 'Kiilopää, gerund door de outdoorvereniging Suomen Latu, ligt pal naast Nationaal Park Urho Kekkonen. Gemarkeerde routes beginnen bij de deur en lopen van een lus van één kilometer tot tochten van ruim twintig, dus de lengte van de dag kiest u zelf.',
        ja: 'アウトドア団体 Suomen Latu が運営する Kiilopää は、Urho Kekkonen 国立公園のすぐ隣にあります。標識付きのルートは玄関先から始まり、1キロの周回から20キロを超える行程まで。一日の長さは自分で選べます。',
        ko: '아웃도어 단체 Suomen Latu가 운영하는 Kiilopää는 Urho Kekkonen 국립공원 바로 옆에 있습니다. 표시된 경로가 문 앞에서 시작해 1킬로미터 순환로부터 20킬로미터가 넘는 길까지 이어지니, 하루의 길이는 직접 고르면 됩니다.',
        'zh-CN': '由户外协会 Suomen Latu 运营的 Kiilopää 就紧挨着 Urho Kekkonen 国家公园。标记好的路线从门口起步，短则一公里环线，长则二十公里以上，一天走多远由你自己定。',
        'pt-BR': 'O Kiilopää, administrado pela associação de atividades ao ar livre Suomen Latu, fica bem ao lado do Parque Nacional Urho Kekkonen. As rotas sinalizadas começam na porta e vão de um circuito de um quilômetro a caminhadas de mais de vinte, então a duração do dia é você quem escolhe.',
      },
    },
    {
      title: {
        en: 'Smoke sauna, then the stream', fi: 'Savusauna ja sen jälkeen puro',
        sv: 'Rökbastu och sedan bäcken', de: 'Rauchsauna, dann der Bach',
        es: 'Sauna de humo y luego el arroyo', fr: 'Sauna à fumée, puis le ruisseau',
        it: 'Sauna a fumo, poi il ruscello', nl: 'Rooksauna en dan de beek',
        ja: 'スモークサウナ、そして小川へ', ko: '스모크 사우나, 그리고 개울',
        'zh-CN': '烟熏桑拿，然后跳进溪里', 'pt-BR': 'Sauna de fumaça e depois o riacho',
      },
      body: {
        en: 'At Kuurakaltio, Kiilopää heats a traditional smoke sauna beside a fell stream, and the cooling off is a dip in the running water rather than a plunge pool. The public sauna shifts are open to visitors, not only to people staying there.',
        fi: 'Kuurakaltiossa Kiilopää lämmittää perinteisen savusaunan tunturipuron rannalla, ja vilvoittelu tapahtuu virtaavassa vedessä eikä altaassa. Yleiset saunavuorot ovat avoinna myös muille kuin siellä majoittuville.',
        sv: 'Vid Kuurakaltio värmer Kiilopää en traditionell rökbastu vid en fjällbäck, och svalkandet sker i rinnande vatten i stället för i en pool. De allmänna bastuturerna är öppna även för andra än dem som bor på plats.',
        de: 'Bei Kuurakaltio heizt Kiilopää eine traditionelle Rauchsauna an einem Fjellbach, und abgekühlt wird im fließenden Wasser statt in einem Becken. Die öffentlichen Saunazeiten stehen auch Gästen offen, die nicht dort übernachten.',
        es: 'En Kuurakaltio, Kiilopää calienta una sauna de humo tradicional junto a un arroyo de montaña, y el refresco se toma en el agua corriente en lugar de en una piscina. Los turnos de sauna públicos están abiertos también a quienes no se alojan allí.',
        fr: 'À Kuurakaltio, Kiilopää chauffe un sauna à fumée traditionnel au bord d’un ruisseau de fjeld, et l’on se rafraîchit dans l’eau courante plutôt que dans un bassin. Les créneaux de sauna publics sont ouverts aussi à ceux qui ne logent pas sur place.',
        it: 'A Kuurakaltio, Kiilopää scalda una sauna a fumo tradizionale accanto a un ruscello di montagna, e il refrigerio si prende nell’acqua corrente invece che in una vasca. I turni di sauna pubblici sono aperti anche a chi non alloggia lì.',
        nl: 'Bij Kuurakaltio stookt Kiilopää een traditionele rooksauna aan een fjeldbeek, en afkoelen doet u in stromend water in plaats van in een dompelbad. De openbare saunatijden staan ook open voor wie er niet logeert.',
        ja: 'Kuurakaltio では、Kiilopää が山の小川のほとりで伝統的なスモークサウナを焚いています。火照りを冷ますのは水風呂ではなく、流れる沢の水。一般開放のサウナ時間は、宿泊者以外にも開かれています。',
        ko: 'Kuurakaltio에서 Kiilopää는 산속 개울가에 전통 스모크 사우나를 지핍니다. 몸을 식히는 곳은 냉탕이 아니라 흐르는 개울물입니다. 공개 사우나 시간은 그곳에 묵지 않는 사람에게도 열려 있습니다.',
        'zh-CN': '在 Kuurakaltio，Kiilopää 于山间溪畔烧起传统烟熏桑拿，降温靠的不是冷水池，而是跳进流动的溪水。公共桑拿时段也向非住客开放。',
        'pt-BR': 'Em Kuurakaltio, o Kiilopää aquece uma sauna de fumaça tradicional à beira de um riacho da montanha, e o resfriamento é um mergulho na água corrente, não numa piscina. Os turnos públicos de sauna estão abertos também a quem não está hospedado ali.',
      },
    },
  ],
  places: [
    { name: 'Kaunispään Huippu', href: 'https://www.kaunispaanhuippu.fi/', kind: 'food' },
    { name: 'Pirkon Pirtti', href: 'https://www.pirkonpirtti.fi/', kind: 'food' },
    { name: 'Cafe & Restaurant Kiilopää', href: 'https://www.kiilopaa.fi/en/eat/cafe-restaurant-kiilopaa', kind: 'food' },
    { name: 'Kammi Restaurant', href: 'https://www.kiilopaa.fi/en/eat/kammi-restaurant-fireplace-lounge', kind: 'food' },
    {
      name: 'Kuurakaltio',
      href: 'https://www.kiilopaa.fi/en/kuurakaltio-savusauna-ja-uintipaikka',
      kind: 'wellness',
    },
    {
      name: 'Holiday Club Saariselkä',
      href: 'https://www.holidayclubresorts.com/en/resorts/saariselka/',
      kind: 'wellness',
      // Pool world shut for a rebuild since 2026; Holiday Club's own Finnish
      // page states it reopens in 2027. The hotel, the Aurora Spa treatment
      // side and the bowling alley stay open, so the venue keeps its place
      // here — with the pools named as closed rather than sold.
      note: {
        en: 'Pool world closed for renovation, reopens 2027, Aurora Spa treatments and bowling continue',
        fi: 'Allasmaailma remontissa, avautuu 2027; Aurora Span hoidot ja keilahalli jatkavat',
        sv: 'Badavdelningen renoveras, öppnar 2027 – Aurora Spas behandlingar och bowling fortsätter',
        de: 'Badelandschaft wird umgebaut, öffnet 2027 – Aurora-Spa-Behandlungen und Bowling laufen weiter',
        fr: 'Espace piscines en rénovation, réouverture en 2027 – soins de l’Aurora Spa et bowling maintenus',
        es: 'Zona de piscinas en reforma, reabre en 2027: los tratamientos del Aurora Spa y la bolera siguen',
        it: 'Area piscine in ristrutturazione, riapre nel 2027 – trattamenti dell’Aurora Spa e bowling attivi',
        nl: 'Zwembadgedeelte in verbouwing, opent weer in 2027 – behandelingen van de Aurora Spa en bowlen gaan door',
        'pt-BR': 'Área de piscinas em reforma, reabre em 2027 – tratamentos do Aurora Spa e boliche continuam',
        ja: 'プール施設は改装中、再開は2027年。Aurora Spa のトリートメントとボウリングは営業中',
        ko: '수영장은 개보수 중, 2027년 재개장, Aurora Spa 트리트먼트와 볼링장은 계속 운영',
        'zh-CN': '泳池区整修中，2027 年重开——Aurora Spa 护理与保龄球照常',
      },
    },
  ],
  networkLinks: [
    {
      label: {
        en: 'Saariselkä on LaplandSkiResorts', fi: 'Saariselkä LaplandSkiResortsissa',
        sv: 'Saariselkä på LaplandSkiResorts', de: 'Saariselkä auf LaplandSkiResorts',
        es: 'Saariselkä en LaplandSkiResorts', fr: 'Saariselkä sur LaplandSkiResorts',
        it: 'Saariselkä su LaplandSkiResorts', nl: 'Saariselkä op LaplandSkiResorts',
        ja: 'LaplandSkiResorts で Saariselkä を見る', ko: 'LaplandSkiResorts에서 Saariselkä 보기',
        'zh-CN': '在 LaplandSkiResorts 上看 Saariselkä', 'pt-BR': 'Saariselkä no LaplandSkiResorts',
      },
      href: 'https://laplandskiresorts.com/resort/saariselka',
    },
    {
      label: {
        en: 'The Saariselkä guide on LaplandVibes', fi: 'Saariselän opas LaplandVibesissä',
        sv: 'Saariselkä-guiden på LaplandVibes', de: 'Der Saariselkä-Guide auf LaplandVibes',
        es: 'La guía de Saariselkä en LaplandVibes', fr: 'Le guide de Saariselkä sur LaplandVibes',
        it: 'La guida di Saariselkä su LaplandVibes', nl: 'De Saariselkä-gids op LaplandVibes',
        ja: 'LaplandVibes の Saariselkä ガイド', ko: 'LaplandVibes의 Saariselkä 가이드',
        'zh-CN': 'LaplandVibes 上的 Saariselkä 指南', 'pt-BR': 'O guia de Saariselkä no LaplandVibes',
      },
      href: 'https://laplandvibes.com/destination/saariselka',
    },
  ],
};

/* ─── INARI ─── verified 2026-07-26 against the municipality's own
       inari.fi/en/information.html and siida.fi ─── */

const inari: DestinationFacts = {
  stats: [
    {
      value: '3 300+',
      label: {
        en: 'islands in the lake', fi: 'saarta järvessä', sv: 'öar i sjön',
        de: 'Inseln im See', fr: 'îles dans le lac', es: 'islas en el lago',
        it: 'isole nel lago', nl: 'eilanden in het meer', 'pt-BR': 'ilhas no lago',
        ja: '湖に浮かぶ島', ko: '호수의 섬', 'zh-CN': '湖中岛屿',
      },
    },
    {
      value: '100 km',
      label: {
        en: 'of lake, end to end', fi: 'järveä päästä päähän', sv: 'sjö från ände till ände',
        de: 'See von Ende zu Ende', fr: 'de lac d’un bout à l’autre', es: 'de lago de punta a punta',
        it: 'di lago da un capo all’altro', nl: 'meer van eind tot eind',
        'pt-BR': 'de lago de ponta a ponta', ja: '端から端までの湖', ko: '끝에서 끝까지의 호수',
        'zh-CN': '湖泊全长',
      },
    },
    {
      value: '3',
      label: {
        en: 'Sámi languages in official use', fi: 'saamen kieltä virallisessa käytössä',
        sv: 'samiska språk i officiellt bruk', de: 'samische Sprachen im amtlichen Gebrauch',
        fr: 'langues sames en usage officiel', es: 'lenguas sami de uso oficial',
        it: 'lingue sami in uso ufficiale', nl: 'Samische talen in officieel gebruik',
        'pt-BR': 'línguas sámi em uso oficial', ja: '公用のサーミ語', ko: '공식으로 쓰이는 사미어',
        'zh-CN': '官方使用的萨米语',
      },
    },
    {
      value: '5 %',
      label: {
        en: 'of Finland, one municipality', fi: 'Suomesta, yksi kunta',
        sv: 'av Finland, en kommun', de: 'Finnlands, eine Gemeinde',
        fr: 'de la Finlande, une commune', es: 'de Finlandia, un municipio',
        it: 'della Finlandia, un comune', nl: 'van Finland, één gemeente',
        'pt-BR': 'da Finlândia, um município', ja: 'フィンランド、ひとつの自治体',
        ko: '핀란드, 하나의 지자체', 'zh-CN': '芬兰国土，一个市镇',
      },
    },
  ],
  highlights: [
    {
      title: {
        en: 'Finland’s third-largest lake', fi: 'Suomen kolmanneksi suurin järvi',
        sv: 'Finlands tredje största sjö', de: 'Finnlands drittgrößter See',
        es: 'El tercer lago más grande de Finlandia', fr: 'Le troisième lac de Finlande',
        it: 'Il terzo lago più grande della Finlandia', nl: 'Het op twee na grootste meer van Finland',
        ja: 'フィンランドで3番目に大きな湖', ko: '핀란드에서 세 번째로 큰 호수',
        'zh-CN': '芬兰第三大湖', 'pt-BR': 'O terceiro maior lago da Finlândia',
      },
      body: {
        en: 'Lake Inari runs about a hundred kilometres end to end and holds over 3 300 islands. It averages 14 metres deep and reaches nearly 100 at its deepest. The municipality counts more than 10 000 lakes in all.',
        fi: 'Inarijärvi on päästä päähän noin sata kilometriä ja siinä on yli 3 300 saarta. Keskisyvyys on 14 metriä ja syvimmillään lähes 100. Koko kunnassa lasketaan olevan yli 10 000 järveä.',
        sv: 'Enare träsk mäter omkring hundra kilometer från ände till ände och rymmer över 3 300 öar. Medeldjupet är 14 meter och som djupast närmar det sig 100. I hela kommunen räknar man med över 10 000 sjöar.',
        de: 'Der Inarisee misst von einem Ende zum anderen rund hundert Kilometer und zählt über 3 300 Inseln. Im Schnitt ist er 14 Meter tief, an der tiefsten Stelle fast 100. In der ganzen Gemeinde werden über 10 000 Seen gezählt.',
        es: 'El lago Inari mide unos cien kilómetros de punta a punta y tiene más de 3 300 islas. Su profundidad media es de 14 metros y llega casi a 100 en el punto más hondo. En todo el municipio se cuentan más de 10 000 lagos.',
        fr: 'Le lac Inari s’étire sur une centaine de kilomètres et compte plus de 3 300 îles. Sa profondeur moyenne est de 14 mètres et atteint près de 100 au point le plus profond. La commune entière compte plus de 10 000 lacs.',
        it: 'Il lago Inari misura un centinaio di chilometri da un capo all’altro e conta oltre 3 300 isole. La profondità media è di 14 metri e nel punto più profondo sfiora i 100. In tutto il comune si contano più di 10 000 laghi.',
        nl: 'Het Inarimeer meet zo’n honderd kilometer van eind tot eind en telt ruim 3 300 eilanden. Gemiddeld is het 14 meter diep en op het diepste punt bijna 100. In de hele gemeente worden meer dan 10 000 meren geteld.',
        ja: 'Inari 湖は端から端までおよそ100キロ、3 300 を超える島を抱えています。平均水深は14メートル、最も深いところでは100メートル近く。この自治体全体では1万を超える湖が数えられています。',
        ko: 'Inari 호수는 끝에서 끝까지 약 100킬로미터에 이르고 3 300개가 넘는 섬을 품고 있습니다. 평균 수심은 14미터, 가장 깊은 곳은 100미터에 가깝습니다. 이 지자체 전체에는 1만 개가 넘는 호수가 있습니다.',
        'zh-CN': 'Inari 湖首尾约一百公里，湖中散布着 3 300 多座岛屿。平均水深 14 米，最深处接近 100 米。整个市镇境内的湖泊超过一万个。',
        'pt-BR': 'O lago Inari tem cerca de cem quilômetros de ponta a ponta e abriga mais de 3 300 ilhas. A profundidade média é de 14 metros e chega a quase 100 no ponto mais fundo. O município todo conta mais de 10 000 lagos.',
      },
    },
    {
      title: {
        en: 'Three Sámi languages, side by side', fi: 'Kolme saamen kieltä rinnakkain',
        sv: 'Tre samiska språk sida vid sida', de: 'Drei samische Sprachen nebeneinander',
        es: 'Tres lenguas sami, una al lado de la otra', fr: 'Trois langues sames côte à côte',
        it: 'Tre lingue sami, una accanto all’altra', nl: 'Drie Samische talen naast elkaar',
        ja: '3つのサーミ語が並び立つ', ko: '나란히 쓰이는 세 개의 사미어',
        'zh-CN': '三种萨米语并行', 'pt-BR': 'Três línguas sámi, lado a lado',
      },
      body: {
        en: 'North Sámi, Inari Sámi and Skolt Sámi are all in official use here alongside Finnish, and almost a third of the municipality’s residents are Sámi. Siida, the national museum of Sámi culture, sets its main exhibition and open-air museum against the nature of the far north.',
        fi: 'Pohjoissaame, inarinsaame ja koltansaame ovat täällä virallisessa käytössä suomen rinnalla, ja lähes kolmannes kunnan asukkaista on saamelaisia. Siida, saamelaiskulttuurin valtakunnallinen museo, asettaa perusnäyttelynsä ja ulkomuseonsa pohjoisen luontoa vasten.',
        sv: 'Nordsamiska, enaresamiska och skoltsamiska är alla i officiellt bruk här vid sidan av finskan, och nästan en tredjedel av kommunens invånare är samer. Siida, det nationella museet för samisk kultur, ställer sin basutställning och sitt friluftsmuseum mot den nordliga naturen.',
        de: 'Nordsamisch, Inarisamisch und Skoltsamisch sind hier neben dem Finnischen alle im amtlichen Gebrauch, und fast ein Drittel der Einwohner der Gemeinde sind Samen. Siida, das nationale Museum der samischen Kultur, stellt seine Hauptausstellung und sein Freilichtmuseum der Natur des hohen Nordens gegenüber.',
        es: 'El sami septentrional, el sami de Inari y el sami skolt están aquí en uso oficial junto al finés, y casi un tercio de los habitantes del municipio son sami. Siida, el museo nacional de la cultura sami, sitúa su exposición principal y su museo al aire libre frente a la naturaleza del extremo norte.',
        fr: 'Le same du Nord, le same d’Inari et le same skolt sont tous en usage officiel ici aux côtés du finnois, et près d’un tiers des habitants de la commune sont sames. Siida, le musée national de la culture same, adosse son exposition principale et son musée de plein air à la nature du Grand Nord.',
        it: 'Il sami settentrionale, il sami di Inari e il sami skolt sono qui tutti in uso ufficiale accanto al finlandese, e quasi un terzo degli abitanti del comune è sami. Siida, il museo nazionale della cultura sami, accosta la sua esposizione principale e il museo all’aperto alla natura dell’estremo nord.',
        nl: 'Noord-Samisch, Inari-Samisch en Skolt-Samisch zijn hier alle drie in officieel gebruik naast het Fins, en bijna een derde van de inwoners van de gemeente is Sami. Siida, het nationale museum van de Samische cultuur, zet zijn hoofdtentoonstelling en openluchtmuseum af tegen de natuur van het hoge noorden.',
        ja: 'ここでは北サーミ語、イナリサーミ語、スコルトサーミ語がフィンランド語と並んで公用に使われ、自治体の住民のおよそ3分の1がサーミの人々です。サーミ文化の国立博物館 Siida は、常設展と野外博物館を北の自然と向き合わせて見せています。',
        ko: '이곳에서는 북부 사미어, 이나리 사미어, 스콜트 사미어가 핀란드어와 나란히 공식적으로 쓰이고, 지자체 주민의 거의 3분의 1이 사미인입니다. 사미 문화의 국립 박물관 Siida는 상설 전시와 야외 박물관을 북방의 자연과 마주 세워 보여 줍니다.',
        'zh-CN': '在这里，北萨米语、伊纳里萨米语和斯科尔特萨米语与芬兰语并列，同为官方使用的语言，市镇近三分之一的居民是萨米人。萨米文化的国立博物馆 Siida，把常设展与露天博物馆安置在极北的自然之中。',
        'pt-BR': 'O sámi do norte, o sámi de Inari e o sámi skolt estão todos em uso oficial aqui ao lado do finlandês, e quase um terço dos moradores do município é sámi. O Siida, museu nacional da cultura sámi, coloca sua exposição principal e seu museu ao ar livre diante da natureza do extremo norte.',
      },
    },
    {
      title: {
        en: 'The largest municipality in the country', fi: 'Maan suurin kunta',
        sv: 'Landets största kommun', de: 'Die größte Gemeinde des Landes',
        es: 'El municipio más grande del país', fr: 'La plus grande commune du pays',
        it: 'Il comune più grande del paese', nl: 'De grootste gemeente van het land',
        ja: '国内でいちばん広い自治体', ko: '나라에서 가장 넓은 지자체',
        'zh-CN': '全国面积最大的市镇', 'pt-BR': 'O maior município do país',
      },
      body: {
        en: 'Inari covers five per cent of Finland’s surface area, and two thirds of its people live in Ivalo rather than in Inari village itself. What that leaves around the village is space: forest, water and open fell, with very little in between.',
        fi: 'Inari kattaa viisi prosenttia Suomen pinta-alasta, ja kaksi kolmasosaa asukkaista asuu Ivalossa eikä itse Inarin kylässä. Kylän ympärille jää siis tilaa: metsää, vettä ja avointa tunturia, eikä juuri muuta väliin.',
        sv: 'Enare täcker fem procent av Finlands yta, och två tredjedelar av invånarna bor i Ivalo snarare än i själva Enare by. Kvar runt byn blir alltså utrymme: skog, vatten och öppet fjäll, med mycket lite däremellan.',
        de: 'Inari umfasst fünf Prozent der Fläche Finnlands, und zwei Drittel der Einwohner leben in Ivalo statt im Dorf Inari selbst. Rund um das Dorf bleibt damit Raum: Wald, Wasser und offenes Fjell, mit sehr wenig dazwischen.',
        es: 'Inari abarca el cinco por ciento de la superficie de Finlandia, y dos tercios de sus habitantes viven en Ivalo y no en el propio pueblo de Inari. Lo que queda alrededor del pueblo es espacio: bosque, agua y monte abierto, con muy poco entremedio.',
        fr: 'Inari couvre cinq pour cent de la superficie de la Finlande, et deux tiers de ses habitants vivent à Ivalo plutôt qu’au village d’Inari même. Ce qui reste autour du village, c’est de l’espace : forêt, eau et fjeld ouvert, avec très peu de choses entre les deux.',
        it: 'Inari copre il cinque per cento della superficie della Finlandia, e due terzi dei suoi abitanti vivono a Ivalo e non nel villaggio di Inari stesso. Intorno al villaggio resta quindi spazio: foresta, acqua e montagna aperta, con ben poco nel mezzo.',
        nl: 'Inari beslaat vijf procent van de oppervlakte van Finland, en twee derde van de inwoners woont in Ivalo in plaats van in het dorp Inari zelf. Wat er rond het dorp overblijft is ruimte: bos, water en open fjeld, met heel weinig ertussen.',
        ja: 'Inari はフィンランドの国土の5パーセントを占め、住民の3分の2は Inari 村ではなく Ivalo に暮らしています。だから村のまわりに残るのは、空間そのもの。森と水と開けた山があり、その間にはほとんど何もありません。',
        ko: 'Inari는 핀란드 국토의 5퍼센트를 차지하고, 주민의 3분의 2는 Inari 마을이 아니라 Ivalo에 삽니다. 그래서 마을 둘레에 남는 것은 공간입니다. 숲과 물과 트인 산이 있고, 그 사이에는 거의 아무것도 없습니다.',
        'zh-CN': 'Inari 占芬兰国土面积的百分之五，而三分之二的居民住在 Ivalo，而非 Inari 村本身。于是村庄四周留下的就是空间：森林、水域和开阔的山地，中间几乎别无他物。',
        'pt-BR': 'Inari ocupa cinco por cento da superfície da Finlândia, e dois terços de seus moradores vivem em Ivalo, não na própria vila de Inari. O que sobra em volta da vila é espaço: floresta, água e montanha aberta, com muito pouco no meio.',
      },
    },
  ],
  places: [
    {
      name: 'Restaurant Aanaar',
      href: 'https://www.wildernesshotels.fi/wilderness-hotel-juutua/restaurant-aanaar',
      kind: 'food',
    },
    { name: 'Sarrit (Siida)', href: 'https://siida.fi/en/', kind: 'food' },
    { name: 'Čaiju (Sajos)', href: 'https://www.sajos.fi/', kind: 'food' },
    {
      name: 'Koski Sauna & Jacuzzi',
      href: 'https://www.wildernesshotels.fi/wilderness-hotel-juutua/koski-sauna-jacuzzi-packages',
      kind: 'wellness',
    },
  ],
  networkLinks: [
    {
      label: {
        en: 'The Inari guide on LaplandVibes', fi: 'Inarin opas LaplandVibesissä',
        sv: 'Enare-guiden på LaplandVibes', de: 'Der Inari-Guide auf LaplandVibes',
        es: 'La guía de Inari en LaplandVibes', fr: 'Le guide d’Inari sur LaplandVibes',
        it: 'La guida di Inari su LaplandVibes', nl: 'De Inari-gids op LaplandVibes',
        ja: 'LaplandVibes の Inari ガイド', ko: 'LaplandVibes의 Inari 가이드',
        'zh-CN': 'LaplandVibes 上的 Inari 指南', 'pt-BR': 'O guia de Inari no LaplandVibes',
      },
      href: 'https://laplandvibes.com/destination/inari',
    },
    {
      label: {
        en: 'Inari stays on LaplandStays', fi: 'Inarin majoitukset LaplandStaysissa',
        sv: 'Boende i Enare på LaplandStays', de: 'Unterkünfte in Inari auf LaplandStays',
        es: 'Alojamientos de Inari en LaplandStays', fr: 'Les hébergements d’Inari sur LaplandStays',
        it: 'Alloggi a Inari su LaplandStays', nl: 'Verblijven in Inari op LaplandStays',
        ja: 'LaplandStays で Inari の宿を見る', ko: 'LaplandStays에서 Inari 숙소 보기',
        'zh-CN': '在 LaplandStays 上看 Inari 的住宿', 'pt-BR': 'Hospedagens em Inari no LaplandStays',
      },
      href: 'https://laplandstays.com/destinations/inari',
    },
  ],
};

export const destinationFacts: Record<string, DestinationFacts> = {
  rovaniemi,
  levi,
  saariselka,
  inari,
  yllas,
};

export function getDestinationFacts(slug: string): DestinationFacts | undefined {
  return destinationFacts[slug];
}
