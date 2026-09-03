import type { L12 } from './destinationFacts';

/**
 * Which part of a destination to sleep in.
 *
 * `destinationFacts.ts` answers "what is this place" with operator-verified
 * figures. This file answers the question the page title actually asks — where
 * to stay — and it is the one thing the destination pages never said. They
 * listed properties and they listed facts, and nothing in between explained why
 * one address differs from another.
 *
 * SOURCING: this is editorial orientation, not a second fact table, and it is
 * held to the same rule from the other direction — NOTHING here introduces a
 * figure, a distance, a price or a business name that is not already elsewhere
 * in this repo. Every geographic claim below traces to the record in
 * `destinationFacts.ts` for the same destination, to that route's own
 * description in `scripts/routes.json`, or to `copy.en.ts` (Ivalo carries the
 * airport: "Ivalo (IVL) for Saariselkä, Inari and the north"). What is added is
 * the trade-off between one area and another, which is judgement, not data — so
 * it is written as judgement and never dressed up as a measurement.
 *
 * Written natively in each of the twelve languages, not translated from the
 * English. Terminology follows destinationFacts.ts (tunturi / fjäll / Fjell /
 * la montagna / de fjeld / 山), so the two sections read as one voice.
 */

export interface StayingNote {
  title: L12;
  body: L12;
}

export const stayingUi: Record<string, L12> = {
  kicker: {
    en: 'Before you pick an address', fi: 'Ennen kuin valitset osoitteen',
    sv: 'Innan du väljer adress', de: 'Bevor Sie eine Adresse wählen',
    es: 'Antes de elegir una dirección', fr: 'Avant de choisir une adresse',
    it: 'Prima di scegliere un indirizzo', nl: 'Voordat u een adres kiest',
    ja: '住所を決める前に', ko: '주소를 정하기 전에',
    'zh-CN': '在选定住址之前', 'pt-BR': 'Antes de escolher um endereço',
  },
  /* Names the concept (areas) rather than the question, because the property
     list directly below already asks the question: `whereToStay` reads "Where
     to actually stay" in all twelve languages, and "Where the beds are" landed
     a shade too close to it in fi, ko and zh-CN. */
  h2: {
    en: 'Choosing an area', fi: 'Alueen valinta',
    sv: 'Att välja område', de: 'Die Gegend wählen',
    es: 'Elegir la zona', fr: 'Choisir un secteur',
    it: 'Scegliere la zona', nl: 'Een gebied kiezen',
    ja: 'どのエリアを選ぶか', ko: '어느 구역을 고를까',
    'zh-CN': '选择住宿区域', 'pt-BR': 'Escolher a área',
  },
  note: {
    en: 'Areas rather than properties. Which part of a destination you sleep in shapes the trip as much as the room does, and nothing in this section is sponsored.',
    fi: 'Alueita, ei majoituskohteita. Se missä päin kohdetta nukkuu vaikuttaa matkaan yhtä paljon kuin itse huone, eikä tässä osiossa ole mainossisältöä.',
    sv: 'Områden, inte boenden. Var i destinationen du sover påverkar resan lika mycket som rummet gör, och inget i det här avsnittet är sponsrat.',
    de: 'Gebiete, keine Unterkünfte. In welchem Teil eines Ortes Sie schlafen, prägt die Reise ebenso wie das Zimmer selbst – und nichts in diesem Abschnitt ist gesponsert.',
    es: 'Zonas, no alojamientos. La parte del destino en la que se duerme marca el viaje tanto como la habitación, y nada de esta sección está patrocinado.',
    fr: 'Des secteurs, pas des hébergements. L’endroit où vous dormez pèse autant sur le séjour que la chambre elle-même, et rien dans cette section n’est sponsorisé.',
    it: 'Zone, non strutture. La parte della destinazione in cui si dorme conta quanto la camera, e nulla in questa sezione è sponsorizzato.',
    nl: 'Gebieden, geen accommodaties. In welk deel van een bestemming u slaapt bepaalt de reis net zo goed als de kamer zelf, en niets in dit onderdeel is gesponsord.',
    ja: '宿泊施設ではなく、エリアの話です。どの一帯に泊まるかは、部屋そのものと同じくらい旅を左右します。この項目に広告は含まれていません。',
    ko: '숙소가 아니라 지역에 대한 이야기입니다. 어느 구역에서 자는지는 객실 자체만큼이나 여행을 좌우합니다. 이 항목에는 광고가 없습니다.',
    'zh-CN': '这里说的是区域，不是具体住宿。住在目的地的哪一片，对行程的影响不亚于房间本身。本节没有任何赞助内容。',
    'pt-BR': 'Áreas, não hospedagens. Em que parte do destino você dorme pesa tanto quanto o quarto em si, e nada desta seção é patrocinado.',
  },
};

const rovaniemi: Record<string, StayingNote> = {
  centre: {
    title: {
      en: 'In the centre', fi: 'Keskustassa', sv: 'I centrum', de: 'Im Zentrum',
      es: 'En el centro', fr: 'Dans le centre', it: 'In centro', nl: 'In het centrum',
      ja: '中心部に泊まる', ko: '도심에 묵기', 'zh-CN': '住在市中心', 'pt-BR': 'No centro',
    },
    body: {
      en: 'Rovaniemi is a city before it is a resort. A room in the centre puts restaurants, shops and the bus station within walking distance, and the whole trip can be done without a car. The trade-off is light: for a dark sky you have to leave town.',
      fi: 'Rovaniemi on ensin kaupunki ja vasta sitten lomakohde. Keskustan majoituksesta ravintolat, kaupat ja linja-autoasema ovat kävelymatkan päässä, ja koko reissun voi tehdä ilman autoa. Vastineeksi tulee valoa: pimeää taivasta varten on lähdettävä kaupungista pois.',
      sv: 'Rovaniemi är en stad först och en semesterort sedan. Ett rum i centrum har restauranger, butiker och busstationen inom gångavstånd, och hela resan går att göra utan bil. Priset är ljuset: för en mörk himmel måste du lämna staden.',
      de: 'Rovaniemi ist zuerst eine Stadt und dann ein Ferienort. Vom Zentrum aus sind Restaurants, Geschäfte und der Busbahnhof zu Fuß erreichbar, und die ganze Reise lässt sich ohne Auto machen. Der Preis dafür ist das Licht: für einen dunklen Himmel müssen Sie hinaus.',
      es: 'Rovaniemi es antes una ciudad que un destino de esquí. Alojarse en el centro deja restaurantes, tiendas y la estación de autobuses a pie, y todo el viaje puede hacerse sin coche. A cambio está la luz: para un cielo oscuro hay que salir de la ciudad.',
      fr: 'Rovaniemi est d’abord une ville, une station ensuite. Depuis le centre, restaurants, commerces et gare routière se font à pied, et tout le séjour peut se passer de voiture. La contrepartie, c’est la lumière : pour un ciel noir, il faut sortir de la ville.',
      it: 'Rovaniemi è prima una città e poi una località di vacanza. Dal centro ristoranti, negozi e stazione degli autobus sono a piedi, e tutto il viaggio si può fare senza auto. In cambio c’è la luce: per un cielo buio bisogna uscire dall’abitato.',
      nl: 'Rovaniemi is eerst een stad en pas daarna een wintersportplaats. Vanuit het centrum liggen restaurants, winkels en het busstation op loopafstand, en de hele reis kan zonder auto. Daar staat licht tegenover: voor een donkere hemel moet u de stad uit.',
      ja: 'ロヴァニエミはリゾートである前に町です。中心部に泊まればレストランも店も長距離バスターミナルも徒歩圏で、車なしでも旅は成り立ちます。引き換えになるのは明かりです。暗い空を見たいなら、町の外へ出る必要があります。',
      ko: '로바니에미는 리조트이기 이전에 도시입니다. 도심에 묵으면 식당과 상점, 버스터미널이 걸어서 닿는 거리에 있고 차 없이도 여행이 됩니다. 대신 포기하는 것은 어둠입니다. 캄캄한 하늘을 보려면 시내를 벗어나야 합니다.',
      'zh-CN': '罗瓦涅米首先是一座城市，其次才是度假地。住在市中心，餐厅、商店和长途汽车站都在步行范围内，整趟行程不用车也能完成。代价是光：想要漆黑的夜空，就得离开市区。',
      'pt-BR': 'Rovaniemi é uma cidade antes de ser um destino de férias. No centro, restaurantes, lojas e a rodoviária ficam a pé, e a viagem inteira funciona sem carro. Em troca vem a luz: para um céu escuro é preciso sair da cidade.',
    },
  },
  river: {
    title: {
      en: 'Across the river', fi: 'Joen toisella puolella', sv: 'På andra sidan älven',
      de: 'Auf der anderen Flussseite', es: 'Al otro lado del río', fr: 'De l’autre côté du fleuve',
      it: 'Sull’altra sponda del fiume', nl: 'Aan de overkant van de rivier',
      ja: '川の向こう側', ko: '강 건너편', 'zh-CN': '河的对岸', 'pt-BR': 'Do outro lado do rio',
    },
    body: {
      en: 'Ounasvaara rises on the far bank, facing the centre. A room on that side has the slopes and the lit tracks at the door and the city one bridge away, sensible if you plan to ski every day, less so if you want to walk to dinner.',
      fi: 'Ounasvaara kohoaa joen takana keskustaa vastapäätä. Sillä puolella rinteet ja valaistut ladut ovat oven takana ja kaupunki yhden sillan päässä: järkevä valinta, jos hiihdät joka päivä, vähemmän jos haluat kävellä illalliselle.',
      sv: 'Ounasvaara reser sig på andra stranden, mitt emot centrum. Där har du backarna och de belysta spåren utanför dörren och staden en bro bort, klokt om du tänker åka skidor varje dag, mindre klokt om du vill promenera till middagen.',
      de: 'Ounasvaara erhebt sich am gegenüberliegenden Ufer, dem Zentrum zugewandt. Dort liegen Pisten und beleuchtete Loipen vor der Tür und die Stadt eine Brücke entfernt – sinnvoll, wenn Sie täglich Ski fahren, weniger, wenn Sie zum Abendessen laufen wollen.',
      es: 'Ounasvaara se levanta en la otra orilla, frente al centro. Ese lado tiene las pistas y los circuitos iluminados en la puerta y la ciudad a un puente de distancia: acertado si va a esquiar cada día, menos si prefiere ir andando a cenar.',
      fr: 'Ounasvaara s’élève sur l’autre rive, face au centre. De ce côté, les pistes et les tracés éclairés sont devant la porte et la ville à un pont de là : judicieux si vous skiez tous les jours, moins si vous voulez aller dîner à pied.',
      it: 'Ounasvaara si alza sulla riva opposta, di fronte al centro. Da quella parte piste e anelli illuminati sono davanti alla porta e la città è a un ponte di distanza: sensato se scia ogni giorno, meno se vuole andare a cena a piedi.',
      nl: 'Ounasvaara verrijst op de andere oever, tegenover het centrum. Aan die kant liggen de pistes en de verlichte loipes voor de deur en de stad één brug verderop, verstandig als u elke dag skiet, minder als u naar het diner wilt lopen.',
      ja: 'オウナスヴァーラは川の対岸、中心部の正面にそびえます。この側に泊まればゲレンデと照明付きのコースが玄関先にあり、町へは橋を一本渡るだけ。毎日滑るなら妥当な選択で、夕食に歩いて出たいなら向きません。',
      ko: '오우나스바라는 강 건너, 도심을 마주 보며 솟아 있습니다. 그쪽에 묵으면 슬로프와 조명 코스가 문 앞에 있고 시내는 다리 하나 건너입니다. 매일 스키를 탄다면 합리적이고, 저녁을 걸어서 먹으러 가고 싶다면 그렇지 않습니다.',
      'zh-CN': '奥纳斯瓦拉山耸立在河对岸，正对市中心。住在那一侧，雪道和有照明的越野道就在门口，进城只隔一座桥——每天都滑雪的话很合适，想步行去吃晚饭就不然。',
      'pt-BR': 'Ounasvaara se ergue na outra margem, de frente para o centro. Desse lado, as pistas e os circuitos iluminados ficam à porta e a cidade a uma ponte de distância: faz sentido se você vai esquiar todo dia, nem tanto se quer ir jantar a pé.',
    },
  },
  glass: {
    title: {
      en: 'Under a glass roof', fi: 'Lasikaton alla', sv: 'Under glastak',
      de: 'Unter Glasdach', es: 'Bajo un techo de cristal', fr: 'Sous un toit de verre',
      it: 'Sotto un tetto di vetro', nl: 'Onder een glazen dak',
      ja: 'ガラス屋根の下で', ko: '유리 지붕 아래', 'zh-CN': '住在玻璃屋顶下', 'pt-BR': 'Sob um teto de vidro',
    },
    body: {
      en: 'Glass igloos and aurora cabins are a room type, not a neighbourhood. They sit outside the city because that is where the sky stays dark, so settle how you will get in and out before you book: for most of them it means a drive or an arranged transfer.',
      fi: 'Lasi-iglut ja revontulimökit ovat huonetyyppi, eivät kaupunginosa. Ne ovat kaupungin ulkopuolella siksi, että taivas pysyy siellä pimeänä, joten selvitä kulkeminen ennen varausta: useimpiin kuuluu auto tai sovittu kuljetus.',
      sv: 'Glasigloor och norrskensstugor är en rumstyp, inte ett område. De ligger utanför staden just för att himlen är mörk där, så lös transporten innan du bokar: för de flesta betyder det bil eller en beställd transfer.',
      de: 'Glasiglus und Aurora-Hütten sind eine Zimmerart, kein Stadtteil. Sie liegen außerhalb, weil der Himmel dort dunkel bleibt – klären Sie also vor der Buchung, wie Sie hin- und zurückkommen: meist heißt das Auto oder ein bestellter Transfer.',
      es: 'Los iglús de cristal y las cabañas de auroras son un tipo de habitación, no un barrio. Están fuera de la ciudad porque allí el cielo sigue oscuro, así que resuelva cómo va a ir y volver antes de reservar: en la mayoría de los casos implica coche o un traslado concertado.',
      fr: 'Igloos de verre et cabanes à aurores sont un type de chambre, pas un quartier. Ils sont hors de la ville parce que c’est là que le ciel reste noir : réglez donc les trajets avant de réserver, car pour la plupart cela suppose une voiture ou une navette réservée.',
      it: 'Igloo di vetro e baite per l’aurora sono un tipo di camera, non un quartiere. Stanno fuori città perché è lì che il cielo resta buio, quindi risolva gli spostamenti prima di prenotare: per la maggior parte significa auto o un transfer concordato.',
      nl: 'Glazen iglo’s en noorderlichthutten zijn een kamertype, geen wijk. Ze liggen buiten de stad omdat de hemel daar donker blijft, dus regel het vervoer vóór u boekt: voor de meeste betekent dat een auto of een afgesproken transfer.',
      ja: 'グラスイグルーやオーロラキャビンは部屋の種類であって、地区の名前ではありません。空が暗いままだから郊外にあるので、予約の前に行き帰りの手段を決めておくこと。多くは車か、手配した送迎が前提です。',
      ko: '글라스 이글루와 오로라 캐빈은 객실 유형이지 동네 이름이 아닙니다. 하늘이 어두운 곳이라 시 외곽에 있으니, 예약 전에 오가는 방법부터 정하십시오. 대부분은 차 또는 미리 잡아둔 픽업이 전제입니다.',
      'zh-CN': '玻璃冰屋和极光小木屋是房型，不是某个街区。它们建在城外，正因为那里的天空够黑，所以订房前先把往返方式定下来：多数情况意味着自驾或预约接送。',
      'pt-BR': 'Iglus de vidro e cabanas de aurora são um tipo de quarto, não um bairro. Ficam fora da cidade porque é ali que o céu permanece escuro, então resolva o deslocamento antes de reservar: na maioria isso significa carro ou transfer combinado.',
    },
  },
};

const levi: Record<string, StayingNote> = {
  village: {
    title: {
      en: 'In the village', fi: 'Kylässä', sv: 'I byn', de: 'Im Dorf',
      es: 'En el pueblo', fr: 'Dans le village', it: 'Nel villaggio', nl: 'In het dorp',
      ja: '村の中に泊まる', ko: '마을 안에 묵기', 'zh-CN': '住在村里', 'pt-BR': 'No vilarejo',
    },
    body: {
      en: 'Lifts, restaurants and shops sit within a few streets of each other, so a room in the village means the car can stay parked all week. It is also the liveliest place to sleep on a Saturday in high season, which cuts both ways.',
      fi: 'Hissit, ravintolat ja kaupat ovat muutaman korttelin säteellä, joten kylässä majoittuva voi jättää auton seisomaan koko viikoksi. Se on myös vilkkain paikka nukkua sesongin lauantaina, mikä on samalla etu ja haitta.',
      sv: 'Liftar, restauranger och butiker ligger inom några kvarter, så bor du i byn kan bilen stå parkerad hela veckan. Det är också den livligaste platsen att sova på en lördag i högsäsong, vilket skär åt båda hållen.',
      de: 'Lifte, Restaurants und Geschäfte liegen wenige Straßen auseinander, im Dorf kann das Auto also die ganze Woche stehen bleiben. Es ist zugleich der lebhafteste Ort zum Schlafen an einem Samstag in der Hochsaison – das hat zwei Seiten.',
      es: 'Remontes, restaurantes y tiendas están a pocas calles unos de otros, así que alojarse en el pueblo permite dejar el coche aparcado toda la semana. También es el sitio más animado para dormir un sábado de temporada alta, y eso corta por los dos lados.',
      fr: 'Remontées, restaurants et commerces tiennent en quelques rues : au village, la voiture peut rester garée toute la semaine. C’est aussi l’endroit le plus animé où dormir un samedi de pleine saison, ce qui se paie dans les deux sens.',
      it: 'Impianti, ristoranti e negozi stanno in poche vie, quindi chi dorme in paese può lasciare l’auto ferma tutta la settimana. È anche il posto più vivace in cui dormire un sabato di alta stagione, e vale in entrambi i sensi.',
      nl: 'Liften, restaurants en winkels liggen binnen een paar straten, dus wie in het dorp slaapt kan de auto de hele week laten staan. Het is ook de levendigste plek om op een zaterdag in het hoogseizoen te slapen, en dat snijdt aan twee kanten.',
      ja: 'リフトもレストランも店も数ブロックの範囲に収まっているので、村に泊まれば車は一週間置いたままで済みます。同時に、ハイシーズンの土曜にいちばん賑やかな場所でもあり、それは長所にも短所にもなります。',
      ko: '리프트와 식당, 상점이 몇 블록 안에 모여 있어 마을에 묵으면 차를 일주일 내내 세워둘 수 있습니다. 동시에 성수기 토요일 밤에 가장 시끌벅적한 자리이기도 하니, 장점이자 단점입니다.',
      'zh-CN': '缆车、餐厅和商店都在几条街之内，住在村里，车可以停一整周不动。同样，这也是旺季周六夜里最热闹的地方——好处和代价是同一件事。',
      'pt-BR': 'Teleféricos, restaurantes e lojas ficam a poucas ruas uns dos outros, então quem dorme no vilarejo pode deixar o carro parado a semana toda. É também o lugar mais movimentado para dormir num sábado de alta temporada, e isso corta dos dois lados.',
    },
  },
  slopeside: {
    title: {
      en: 'On the slope', fi: 'Rinteessä', sv: 'I backen', de: 'An der Piste',
      es: 'A pie de pista', fr: 'Au pied des pistes', it: 'Sulle piste', nl: 'Aan de piste',
      ja: 'ゲレンデ際に泊まる', ko: '슬로프 바로 옆', 'zh-CN': '住在雪道边', 'pt-BR': 'No pé da pista',
    },
    body: {
      en: 'Ski-in ski-out is worth checking rather than assuming. Levitunturi has slopes on more than one side, and a chalet that reaches a lift does not always reach the lift you had in mind. Ask which one, and what the way back looks like at the end of the day.',
      fi: 'Ski-in ski-out kannattaa tarkistaa eikä olettaa. Levitunturissa on rinteitä useammalla puolella, eikä mökki josta pääsee hissille ole aina sillä hissillä jota ajattelit. Kysy kumpi se on ja millainen paluumatka on päivän päätteeksi.',
      sv: 'Ski in–ski out är värt att kontrollera i stället för att förutsätta. Levitunturi har backar på mer än en sida, och en stuga som når en lift når inte alltid den lift du tänkt dig. Fråga vilken, och hur vägen tillbaka ser ut när dagen är slut.',
      de: 'Ski-in-Ski-out sollte man nachfragen statt voraussetzen. Levitunturi hat Pisten auf mehr als einer Seite, und ein Chalet mit Liftanschluss hängt nicht immer an dem Lift, den Sie im Kopf hatten. Fragen Sie nach – und danach, wie der Rückweg am Abend aussieht.',
      es: 'Lo de «a pie de pista» conviene comprobarlo, no darlo por hecho. Levitunturi tiene laderas en más de un lado, y un chalé que llega a un remonte no siempre llega al que tenía en mente. Pregunte a cuál, y cómo es la vuelta al final del día.',
      fr: 'Le « ski aux pieds » se vérifie plutôt qu’il ne se suppose. Levitunturi a des pistes sur plusieurs versants, et un chalet qui rejoint une remontée ne rejoint pas toujours celle que vous aviez en tête. Demandez laquelle, et à quoi ressemble le retour en fin de journée.',
      it: 'Lo ski-in ski-out va verificato, non dato per scontato. Levitunturi ha piste su più versanti, e una baita che arriva a un impianto non arriva sempre a quello che aveva in mente. Chieda quale, e com’è il rientro a fine giornata.',
      nl: 'Ski-in ski-out is iets om na te vragen, niet om aan te nemen. Levitunturi heeft pistes aan meer dan één kant, en een chalet dat een lift bereikt, bereikt niet altijd de lift die u voor ogen had. Vraag welke, en hoe de terugweg er aan het eind van de dag uitziet.',
      ja: 'スキーイン・スキーアウトは前提にせず確かめたい点です。レヴィトゥントゥリは複数の斜面にコースがあり、リフトにつながる山小屋が、思い描いていたリフトにつながっているとは限りません。どのリフトか、そして一日の終わりの帰り道はどうなるかを聞いてください。',
      ko: '스키 인/아웃은 당연하게 여기지 말고 확인할 대목입니다. 레비툰투리는 여러 사면에 슬로프가 있어, 리프트로 이어지는 샬레라도 머릿속에 그린 그 리프트가 아닐 수 있습니다. 어느 리프트인지, 하루가 끝날 무렵 돌아오는 길은 어떤지 물어보십시오.',
      'zh-CN': '"滑进滑出"值得问清楚，而不是默认。莱维山不止一面有雪道，能通到某条缆车的木屋，未必通到你想要的那一条。问清是哪一条，也问清一天结束时回来的那段路是什么样。',
      'pt-BR': 'Ski-in ski-out é para conferir, não para presumir. Levitunturi tem pistas em mais de um lado, e um chalé que alcança um teleférico nem sempre alcança aquele que você imaginou. Pergunte qual é, e como fica a volta no fim do dia.',
    },
  },
  beyond: {
    title: {
      en: 'Beyond the village lights', fi: 'Kylän valojen ulkopuolella',
      sv: 'Bortom byns ljus', de: 'Jenseits der Dorflichter',
      es: 'Más allá de las luces del pueblo', fr: 'Au-delà des lumières du village',
      it: 'Oltre le luci del paese', nl: 'Voorbij de dorpslichten',
      ja: '村の明かりの外へ', ko: '마을 불빛 바깥', 'zh-CN': '走出村庄的灯光', 'pt-BR': 'Além das luzes do vilarejo',
    },
    body: {
      en: 'Cabins further out trade walking distance for dark sky and quiet. You will need a car, and in a snowfall the last few kilometres are the slow ones, but the aurora does not have to compete with street lighting.',
      fi: 'Kauempana olevat mökit vaihtavat kävelymatkan pimeään taivaaseen ja hiljaisuuteen. Auto tarvitaan, ja lumisateella viimeiset kilometrit ovat ne hitaat, mutta revontulien ei tarvitse kilpailla katuvalojen kanssa.',
      sv: 'Stugor längre ut byter gångavstånd mot mörk himmel och tystnad. Bil behövs, och i snöfall är de sista kilometrarna de långsamma, men norrskenet slipper tävla med gatubelysningen.',
      de: 'Hütten weiter draußen tauschen Gehweite gegen dunklen Himmel und Ruhe. Ein Auto ist nötig, und bei Schneefall sind die letzten Kilometer die langsamen – dafür muss das Nordlicht nicht gegen Straßenlaternen ankommen.',
      es: 'Las cabañas más alejadas cambian la distancia a pie por cielo oscuro y silencio. Hará falta coche, y con nieve los últimos kilómetros son los lentos, pero la aurora no tiene que competir con el alumbrado.',
      fr: 'Les chalets plus éloignés échangent la marche contre un ciel noir et du silence. Il faudra une voiture, et sous la neige ce sont les derniers kilomètres qui sont lents, mais l’aurore n’a plus à rivaliser avec l’éclairage public.',
      it: 'Le baite più lontane scambiano la distanza a piedi con cielo buio e silenzio. Serve l’auto, e con la neve gli ultimi chilometri sono quelli lenti, ma l’aurora non deve competere con i lampioni.',
      nl: 'Hutten verderop ruilen loopafstand in voor een donkere hemel en stilte. U hebt een auto nodig, en bij sneeuwval zijn de laatste kilometers traag, maar het noorderlicht hoeft niet op te boksen tegen straatverlichting.',
      ja: '離れた場所のキャビンは、歩ける距離と引き換えに暗い空と静けさを差し出します。車は要りますし、雪が降れば最後の数キロが時間を食います。そのかわり、オーロラが街灯と競う必要はありません。',
      ko: '조금 떨어진 캐빈은 걸어 다닐 거리를 내주고 어두운 하늘과 고요를 얻습니다. 차는 있어야 하고 눈이 오면 마지막 몇 킬로미터가 느립니다. 대신 오로라가 가로등과 겨루지 않아도 됩니다.',
      'zh-CN': '再远一些的木屋，用步行距离换来漆黑的夜空和安静。得有车，下雪时最后那几公里最慢——但极光不必再和路灯争光。',
      'pt-BR': 'Cabanas mais afastadas trocam a distância a pé por céu escuro e silêncio. Vai precisar de carro, e com neve os últimos quilômetros são os lentos, mas a aurora não precisa disputar com a iluminação pública.',
    },
  },
};

const saariselka: Record<string, StayingNote> = {
  village: {
    title: {
      en: 'The village under Kaunispää', fi: 'Kylä Kaunispään alla',
      sv: 'Byn under Kaunispää', de: 'Das Dorf unter dem Kaunispää',
      es: 'El pueblo al pie del Kaunispää', fr: 'Le village au pied du Kaunispää',
      it: 'Il paese sotto il Kaunispää', nl: 'Het dorp onder Kaunispää',
      ja: 'カウニスパーの麓の村', ko: '카우니스패 아래 마을',
      'zh-CN': '考尼斯帕山下的村庄', 'pt-BR': 'O vilarejo aos pés do Kaunispää',
    },
    body: {
      en: 'Most of the beds are in the village at the foot of the fell, with the lifts and the restaurants within reach on foot. It is the simplest base if you would rather not drive, and the shortest walk home in the dark.',
      fi: 'Suurin osa majoituksesta on tunturin juurella olevassa kylässä, josta hisseille ja ravintoloihin pääsee kävellen. Se on yksinkertaisin tukikohta jos et halua ajaa, ja lyhin kotimatka pimeässä.',
      sv: 'De flesta sängarna finns i byn vid fjällets fot, med liftar och restauranger inom gångavstånd. Det är den enklaste basen om du helst slipper köra, och den kortaste vägen hem i mörkret.',
      de: 'Die meisten Betten liegen im Dorf am Fuß des Fjells, Lifte und Restaurants zu Fuß erreichbar. Das ist die einfachste Basis, wenn Sie lieber nicht fahren – und der kürzeste Heimweg im Dunkeln.',
      es: 'La mayoría de las plazas están en el pueblo al pie de la montaña, con los remontes y los restaurantes a pie. Es la base más sencilla si prefiere no conducir, y el camino de vuelta más corto en la oscuridad.',
      fr: 'L’essentiel des lits se trouve au village, au pied du fjäll, remontées et restaurants accessibles à pied. C’est la base la plus simple si vous préférez ne pas conduire, et le plus court retour dans le noir.',
      it: 'La maggior parte dei letti è nel paese ai piedi della montagna, con impianti e ristoranti raggiungibili a piedi. È la base più semplice se preferisce non guidare, e il rientro più breve al buio.',
      nl: 'De meeste bedden staan in het dorp aan de voet van de fjäll, met liften en restaurants op loopafstand. Het is de eenvoudigste uitvalsbasis als u liever niet rijdt, en de kortste weg terug in het donker.',
      ja: '宿の大半は山の麓の村にあり、リフトもレストランも歩いて届きます。運転を避けたいなら最も手軽な拠点で、暗いなかを帰る距離もいちばん短くなります。',
      ko: '숙소 대부분은 산기슭 마을에 있고, 리프트와 식당이 걸어서 닿습니다. 운전을 피하고 싶다면 가장 단순한 거점이고, 어두운 길을 걸어 돌아오는 거리도 가장 짧습니다.',
      'zh-CN': '大部分床位都在山脚下的村子里，缆车和餐厅步行可达。如果不想开车，这是最省事的落脚点，摸黑走回住处的路也最短。',
      'pt-BR': 'A maior parte das camas fica no vilarejo ao pé da montanha, com teleféricos e restaurantes a pé. É a base mais simples se você prefere não dirigir, e a volta mais curta no escuro.',
    },
  },
  kiilopaa: {
    title: {
      en: 'Kiilopää, at the park boundary', fi: 'Kiilopää, puiston rajalla',
      sv: 'Kiilopää, vid parkgränsen', de: 'Kiilopää, an der Parkgrenze',
      es: 'Kiilopää, en el límite del parque', fr: 'Kiilopää, à la lisière du parc',
      it: 'Kiilopää, al confine del parco', nl: 'Kiilopää, aan de parkgrens',
      ja: '国立公園との境、キーロパー', ko: '국립공원 경계의 킬로패',
      'zh-CN': '国家公园边上的基洛帕', 'pt-BR': 'Kiilopää, na divisa do parque',
    },
    body: {
      en: 'Kiilopää stands a little apart, run by the outdoor association Suomen Latu, with marked routes starting at the door and a smoke sauna beside the stream. Staying there means the national park before breakfast, and a drive to anything else.',
      fi: 'Kiilopää on hieman erillään, Suomen Ladun ylläpitämä, ja merkityt reitit lähtevät ovelta savusaunan ollessa puron rannassa. Siellä yöpyminen tarkoittaa kansallispuistoa ennen aamiaista, ja automatkaa kaikkeen muuhun.',
      sv: 'Kiilopää ligger lite för sig, drivet av friluftsförbundet Suomen Latu, med markerade leder som börjar vid dörren och en rökbastu vid bäcken. Att bo där betyder nationalparken före frukost, och bil till allt annat.',
      de: 'Kiilopää liegt etwas abseits, betrieben vom Outdoor-Verband Suomen Latu, mit markierten Routen ab der Haustür und einer Rauchsauna am Bach. Dort zu wohnen heißt Nationalpark vor dem Frühstück – und Autofahrt zu allem anderen.',
      es: 'Kiilopää queda algo aparte, gestionado por la asociación de aire libre Suomen Latu, con rutas señalizadas que arrancan en la puerta y un sauna de humo junto al arroyo. Dormir allí significa parque nacional antes del desayuno, y coche para todo lo demás.',
      fr: 'Kiilopää se tient un peu à l’écart, géré par l’association de plein air Suomen Latu, avec des itinéraires balisés au départ de la porte et un sauna à fumée au bord du ruisseau. Y loger, c’est le parc national avant le petit-déjeuner, et la voiture pour tout le reste.',
      it: 'Kiilopää sta un po’ in disparte, gestito dall’associazione outdoor Suomen Latu, con percorsi segnalati che partono dalla porta e una sauna a fumo lungo il ruscello. Dormire lì significa parco nazionale prima di colazione, e auto per tutto il resto.',
      nl: 'Kiilopää ligt wat apart, beheerd door de outdoorvereniging Suomen Latu, met gemarkeerde routes die bij de deur beginnen en een rooksauna aan de beek. Daar slapen betekent nationaal park vóór het ontbijt, en de auto voor al het andere.',
      ja: 'キーロパーは少し離れて建ち、野外協会スオメン・ラトゥが運営しています。標識のあるルートが玄関から始まり、小川のほとりには煙サウナ。ここに泊まるとは、朝食前に国立公園があるということ、そしてそれ以外には車が要るということです。',
      ko: '킬로패는 조금 떨어져 있고, 야외활동 협회 수오멘 라투가 운영합니다. 표식이 있는 코스가 문 앞에서 시작되고 개울가에는 훈연 사우나가 있습니다. 이곳에 묵는다는 것은 아침 식사 전에 국립공원이 있다는 뜻이고, 그 밖의 모든 곳에는 차가 필요하다는 뜻입니다.',
      'zh-CN': '基洛帕稍稍独立于村外，由户外协会 Suomen Latu 经营，标记好的路线从门口出发，溪边有一间烟熏桑拿。住在这里意味着早餐前就有国家公园——去别处则都得开车。',
      'pt-BR': 'Kiilopää fica um pouco à parte, tocado pela associação de atividades ao ar livre Suomen Latu, com rotas sinalizadas saindo da porta e uma sauna de fumaça à beira do riacho. Dormir ali significa parque nacional antes do café, e carro para todo o resto.',
    },
  },
  glass: {
    title: {
      en: 'Under a glass roof', fi: 'Lasikaton alla', sv: 'Under glastak',
      de: 'Unter Glasdach', es: 'Bajo un techo de cristal', fr: 'Sous un toit de verre',
      it: 'Sotto un tetto di vetro', nl: 'Onder een glazen dak',
      ja: 'ガラス屋根の下で', ko: '유리 지붕 아래', 'zh-CN': '住在玻璃屋顶下', 'pt-BR': 'Sob um teto de vidro',
    },
    body: {
      en: 'Glass-roofed rooms are scattered around the area rather than gathered in one place. Check the distance to the lifts and to the shops before booking: this far north, in December, that walk is a decision rather than a detail.',
      fi: 'Lasikattoiset huoneet ovat hajallaan ympäri aluetta eivätkä yhdessä paikassa. Tarkista etäisyys hisseille ja kauppoihin ennen varausta: näin pohjoisessa, joulukuussa, se kävelymatka on päätös eikä yksityiskohta.',
      sv: 'Rummen med glastak ligger utspridda i området snarare än samlade på ett ställe. Kolla avståndet till liftarna och till affärerna innan du bokar: så här långt norrut, i december, är den promenaden ett beslut och inte en detalj.',
      de: 'Zimmer mit Glasdach sind über das Gebiet verstreut, nicht an einem Ort gebündelt. Prüfen Sie vor der Buchung die Entfernung zu den Liften und zu den Geschäften: so weit im Norden ist dieser Weg im Dezember eine Entscheidung, kein Detail.',
      es: 'Las habitaciones con techo de cristal están repartidas por la zona, no reunidas en un punto. Compruebe la distancia a los remontes y a las tiendas antes de reservar: tan al norte, en diciembre, ese paseo es una decisión y no un detalle.',
      fr: 'Les chambres à toit de verre sont dispersées dans le secteur plutôt que regroupées. Vérifiez la distance jusqu’aux remontées et jusqu’aux commerces avant de réserver : si haut vers le nord, en décembre, ce trajet est une décision et non un détail.',
      it: 'Le camere con tetto di vetro sono sparse nella zona, non riunite in un punto solo. Controlli la distanza dagli impianti e dai negozi prima di prenotare: così a nord, a dicembre, quella camminata è una decisione e non un dettaglio.',
      nl: 'Kamers met een glazen dak liggen verspreid over het gebied, niet op één plek bij elkaar. Controleer vóór het boeken de afstand tot de liften en tot de winkels: zo ver naar het noorden is dat loopje in december een besluit en geen detail.',
      ja: 'ガラス屋根の部屋は一か所にまとまっておらず、エリア各所に散らばっています。予約の前にリフトと商店までの距離を確かめてください。これだけ北の十二月では、その徒歩移動は細部ではなく判断の対象です。',
      ko: '유리 지붕 객실은 한곳에 모여 있지 않고 지역 곳곳에 흩어져 있습니다. 예약 전에 리프트와 상점까지의 거리를 확인하십시오. 이만큼 북쪽의 12월에 그 걷는 거리는 사소한 항목이 아니라 결정 사항입니다.',
      'zh-CN': '带玻璃屋顶的房间散落在各处，并不集中在一片。订之前先看清到缆车和到商店的距离：在这么北的地方，十二月里的那段步行是一项决定，而不是细节。',
      'pt-BR': 'Os quartos com teto de vidro estão espalhados pela área, não reunidos num ponto só. Confira a distância até os teleféricos e até o comércio antes de reservar: tão ao norte, em dezembro, essa caminhada é uma decisão, não um detalhe.',
    },
  },
};

const inari: Record<string, StayingNote> = {
  village: {
    title: {
      en: 'Inari village, by the water', fi: 'Inarin kylä veden äärellä',
      sv: 'Enare by vid vattnet', de: 'Das Dorf Inari am Wasser',
      es: 'El pueblo de Inari, junto al agua', fr: 'Le village d’Inari, au bord de l’eau',
      it: 'Il villaggio di Inari, sull’acqua', nl: 'Het dorp Inari, aan het water',
      ja: '水辺のイナリ村', ko: '물가의 이나리 마을',
      'zh-CN': '水边的伊纳里村', 'pt-BR': 'A vila de Inari, à beira da água',
    },
    body: {
      en: 'The village sits on the lake and holds Siida, the national museum of Sámi culture. It is small, and that is the reason to stay: the water, the quiet and the short winter light, rather than a choice of addresses.',
      fi: 'Kylä on järven rannalla, ja siellä on Siida, saamelaiskulttuurin kansallismuseo. Kylä on pieni, ja juuri se on syy yöpyä: vesi, hiljaisuus ja lyhyt talvivalo, ei osoitteiden valikoima.',
      sv: 'Byn ligger vid sjön och rymmer Siida, nationalmuseet för samisk kultur. Den är liten, och det är just därför man bor här: vattnet, tystnaden och det korta vinterljuset snarare än ett urval av adresser.',
      de: 'Das Dorf liegt am See und beherbergt Siida, das Nationalmuseum der samischen Kultur. Es ist klein, und genau das ist der Grund zu bleiben: das Wasser, die Stille und das kurze Winterlicht statt einer Auswahl an Adressen.',
      es: 'El pueblo está a orillas del lago y alberga Siida, el museo nacional de la cultura sami. Es pequeño, y ese es justamente el motivo para quedarse: el agua, el silencio y la luz breve del invierno, no la variedad de direcciones.',
      fr: 'Le village borde le lac et abrite Siida, le musée national de la culture same. Il est petit, et c’est précisément la raison d’y dormir : l’eau, le silence et la courte lumière d’hiver plutôt qu’un choix d’adresses.',
      it: 'Il villaggio si affaccia sul lago e ospita Siida, il museo nazionale della cultura sami. È piccolo, ed è proprio questo il motivo per fermarsi: l’acqua, il silenzio e la luce breve dell’inverno, non la scelta di indirizzi.',
      nl: 'Het dorp ligt aan het meer en herbergt Siida, het nationale museum van de Samische cultuur. Het is klein, en juist dat is de reden om er te blijven: het water, de stilte en het korte winterlicht in plaats van een keuze aan adressen.',
      ja: '村は湖に面し、サーミ文化の国立博物館シイダがあります。小さな村ですが、泊まる理由はまさにそこにあります。選べる住所の数ではなく、水と、静けさと、冬の短い光です。',
      ko: '마을은 호숫가에 있고 사미 문화 국립박물관 시이다가 자리합니다. 작은 마을이며, 바로 그 점이 묵을 이유입니다. 고를 수 있는 주소의 수가 아니라 물과 고요, 그리고 짧은 겨울 빛입니다.',
      'zh-CN': '村子临湖而建，萨米文化国家博物馆 Siida 就在这里。村子很小，而这正是留下来的理由：水、安静，以及冬天短促的光，而不是可选住址的多少。',
      'pt-BR': 'A vila fica na margem do lago e abriga o Siida, museu nacional da cultura sámi. É pequena, e é justamente por isso que se fica: a água, o silêncio e a luz curta do inverno, não a variedade de endereços.',
    },
  },
  ivalo: {
    title: {
      en: 'Ivalo, where you land', fi: 'Ivalo, jonne lennetään',
      sv: 'Ivalo, dit planet går', de: 'Ivalo, wo Sie landen',
      es: 'Ivalo, donde se aterriza', fr: 'Ivalo, où l’on atterrit',
      it: 'Ivalo, dove si atterra', nl: 'Ivalo, waar u landt',
      ja: '降り立つ町、イヴァロ', ko: '비행기가 닿는 이발로',
      'zh-CN': '落地的地方：伊瓦洛', 'pt-BR': 'Ivalo, onde se pousa',
    },
    body: {
      en: 'The airport is at Ivalo, and so are most of the municipality’s residents; Inari village is the smaller of the two. A room in Ivalo shortens the first and last day of the trip, and a room in Inari puts you beside the lake for all the days in between.',
      fi: 'Lentoasema on Ivalossa, samoin suurin osa kunnan asukkaista; Inarin kylä on näistä kahdesta pienempi. Ivalon majoitus lyhentää matkan ensimmäisen ja viimeisen päivän, Inarin majoitus taas vie järven rantaan kaikiksi väliin jääviksi päiviksi.',
      sv: 'Flygplatsen ligger i Ivalo, liksom de flesta av kommunens invånare; Enare by är den mindre av de två. Ett rum i Ivalo kortar resans första och sista dag, ett rum i Enare lägger dig vid sjön alla dagarna däremellan.',
      de: 'Der Flughafen liegt in Ivalo, und dort wohnen auch die meisten Einwohner der Gemeinde; das Dorf Inari ist das kleinere von beiden. Ein Zimmer in Ivalo verkürzt den ersten und letzten Reisetag, ein Zimmer in Inari setzt Sie für alle Tage dazwischen an den See.',
      es: 'El aeropuerto está en Ivalo, y allí vive también la mayoría de los habitantes del municipio; el pueblo de Inari es el más pequeño de los dos. Alojarse en Ivalo acorta el primer y el último día del viaje; alojarse en Inari le deja junto al lago todos los días intermedios.',
      fr: 'L’aéroport est à Ivalo, où vit aussi la plus grande partie des habitants de la commune ; le village d’Inari est le plus petit des deux. Une chambre à Ivalo raccourcit le premier et le dernier jour du voyage ; une chambre à Inari vous met au bord du lac tous les jours entre les deux.',
      it: 'L’aeroporto è a Ivalo, dove vive anche la maggior parte degli abitanti del comune; il villaggio di Inari è il più piccolo dei due. Una camera a Ivalo accorcia il primo e l’ultimo giorno del viaggio; una camera a Inari La mette in riva al lago per tutti i giorni in mezzo.',
      nl: 'Het vliegveld ligt in Ivalo, en daar woont ook het grootste deel van de gemeente; het dorp Inari is de kleinere van de twee. Een kamer in Ivalo bekort de eerste en de laatste reisdag, een kamer in Inari zet u alle dagen daartussen aan het meer.',
      ja: '空港はイヴァロにあり、自治体の住民の多くもそこに暮らしています。イナリ村は二つのうち小さいほうです。イヴァロに泊まれば旅の初日と最終日が短くなり、イナリに泊まれば、あいだのすべての日を湖のそばで過ごせます。',
      ko: '공항은 이발로에 있고, 이 지자체 주민 대부분도 그곳에 삽니다. 이나리 마을은 둘 중 작은 쪽입니다. 이발로에 묵으면 여행의 첫날과 마지막 날이 짧아지고, 이나리에 묵으면 그 사이의 모든 날을 호숫가에서 보내게 됩니다.',
      'zh-CN': '机场在伊瓦洛，全市大多数居民也住在那里；伊纳里村是两者中较小的一个。住伊瓦洛，能缩短行程的头一天和最后一天；住伊纳里，则把中间所有日子都留在湖边。',
      'pt-BR': 'O aeroporto fica em Ivalo, onde também vive a maior parte dos moradores do município; a vila de Inari é a menor das duas. Um quarto em Ivalo encurta o primeiro e o último dia da viagem; um quarto em Inari deixa você à beira do lago em todos os dias do meio.',
    },
  },
  shore: {
    title: {
      en: 'Out along the shore', fi: 'Rantaa pitkin ulos', sv: 'Ut längs stranden',
      de: 'Draußen am Ufer', es: 'A lo largo de la orilla', fr: 'Le long de la rive',
      it: 'Lungo la riva', nl: 'Verderop langs de oever',
      ja: '湖岸に沿って外へ', ko: '호숫가를 따라 바깥으로',
      'zh-CN': '沿着湖岸往外', 'pt-BR': 'Ao longo da margem',
    },
    body: {
      en: 'Cabins stand along the shore and back in the forest, with a great deal of space and very little between them. Buy food before you drive out, the shops are in the villages, not on the road.',
      fi: 'Mökkejä on rantaa pitkin ja metsän puolella, tilaa on paljon ja niiden välissä hyvin vähän. Osta ruoat ennen kuin ajat ulos: kaupat ovat kylissä, eivät matkan varrella.',
      sv: 'Stugor ligger längs stranden och inne i skogen, med gott om utrymme och mycket lite däremellan. Handla mat innan du kör ut, affärerna finns i byarna, inte längs vägen.',
      de: 'Hütten stehen am Ufer und drinnen im Wald, mit viel Raum und sehr wenig dazwischen. Kaufen Sie ein, bevor Sie hinausfahren – die Geschäfte sind in den Dörfern, nicht an der Strecke.',
      es: 'Las cabañas se reparten por la orilla y por el bosque, con mucho espacio y muy poco entre ellas. Compre comida antes de salir: las tiendas están en los pueblos, no en la carretera.',
      fr: 'Les chalets s’égrènent le long de la rive et dans la forêt, avec beaucoup d’espace et très peu de choses entre eux. Faites les courses avant de partir : les commerces sont dans les villages, pas sur la route.',
      it: 'Le baite stanno lungo la riva e dentro il bosco, con molto spazio e pochissimo in mezzo. Faccia la spesa prima di uscire: i negozi sono nei villaggi, non lungo la strada.',
      nl: 'Hutten staan langs de oever en achterin het bos, met veel ruimte en heel weinig ertussen. Koop eten voordat u wegrijdt, de winkels staan in de dorpen, niet langs de weg.',
      ja: 'キャビンは湖岸沿いと森の奥に点在し、空間は広く、あいだにはほとんど何もありません。走り出す前に食料を買っておくこと。店は村にあり、道中にはありません。',
      ko: '캐빈은 호숫가를 따라, 그리고 숲 안쪽에 서 있습니다. 공간은 넉넉하고 그 사이에는 거의 아무것도 없습니다. 나가기 전에 드실 것을 사 두십시오. 상점은 마을에 있지 길가에 있지 않습니다.',
      'zh-CN': '小木屋沿湖岸铺开，也退进林子里，空间很大，彼此之间几乎什么都没有。开车出发前先把食物买齐——商店在村子里，不在路上。',
      'pt-BR': 'As cabanas ficam ao longo da margem e mata adentro, com muito espaço e quase nada entre elas. Compre comida antes de sair: o comércio está nas vilas, não na estrada.',
    },
  },
};

const yllas: Record<string, StayingNote> = {
  villages: {
    title: {
      en: 'Äkäslompolo or Ylläsjärvi', fi: 'Äkäslompolo vai Ylläsjärvi',
      sv: 'Äkäslompolo eller Ylläsjärvi', de: 'Äkäslompolo oder Ylläsjärvi',
      es: 'Äkäslompolo o Ylläsjärvi', fr: 'Äkäslompolo ou Ylläsjärvi',
      it: 'Äkäslompolo o Ylläsjärvi', nl: 'Äkäslompolo of Ylläsjärvi',
      ja: 'アカスロンポロか、ユッラスヤルヴィか', ko: '애캐슬롬폴로냐 윌래스야르비냐',
      'zh-CN': '选阿卡斯隆波罗还是于拉斯耶尔维', 'pt-BR': 'Äkäslompolo ou Ylläsjärvi',
    },
    body: {
      en: 'One fell, two villages, and the choice matters more than the map suggests, because they sit on opposite sides of it. Ski buses link both to the lifts, so neither is cut off, but crossing between them is a journey rather than a stroll.',
      fi: 'Yksi tunturi, kaksi kylää, ja valinta merkitsee enemmän kuin kartalta näyttää, sillä kylät ovat tunturin vastakkaisilla puolilla. Hiihtobussit vievät molemmista hisseille, joten kumpikaan ei jää erilleen, mutta kylästä toiseen siirtyminen on matka eikä kävelylenkki.',
      sv: 'Ett fjäll, två byar, och valet betyder mer än kartan antyder, för de ligger på var sin sida av det. Skidbussar förbinder båda med liftarna, så ingen blir avskuren, men att ta sig mellan dem är en resa och ingen promenad.',
      de: 'Ein Fjell, zwei Dörfer – und die Wahl wiegt schwerer, als die Karte vermuten lässt, denn sie liegen auf gegenüberliegenden Seiten. Skibusse verbinden beide mit den Liften, abgeschnitten ist also keines; der Weg von einem zum anderen ist aber eine Fahrt und kein Spaziergang.',
      es: 'Una montaña, dos pueblos, y la elección pesa más de lo que sugiere el mapa, porque están en laderas opuestas. Los autobuses de esquí conectan ambos con los remontes, así que ninguno queda aislado, pero ir de uno a otro es un trayecto y no un paseo.',
      fr: 'Un fjäll, deux villages, et le choix compte davantage que la carte ne le laisse croire, car ils sont sur des versants opposés. Des navettes ski relient les deux aux remontées : aucun n’est isolé, mais passer de l’un à l’autre est un trajet, pas une promenade.',
      it: 'Una montagna, due villaggi, e la scelta pesa più di quanto suggerisca la cartina, perché stanno su versanti opposti. Gli ski bus collegano entrambi agli impianti, quindi nessuno resta tagliato fuori, ma passare dall’uno all’altro è un viaggio, non due passi.',
      nl: 'Eén fjäll, twee dorpen, en de keuze telt zwaarder dan de kaart doet vermoeden, want ze liggen aan weerszijden. Skibussen verbinden beide met de liften, dus geen van beide is afgesloten, maar van het ene naar het andere is een rit en geen wandeling.',
      ja: '山はひとつ、村はふたつ。地図の印象よりも選択は重く効きます。ふたつは山を挟んで反対側にあるからです。スキーバスがどちらの村もリフトに結んでいるので孤立はしませんが、村から村への移動は散歩ではなく移動です。',
      ko: '산은 하나, 마을은 둘. 지도에서 보이는 것보다 선택이 더 중요합니다. 두 마을이 산을 사이에 두고 반대편에 있기 때문입니다. 스키 버스가 두 마을 모두를 리프트와 잇기 때문에 고립되지는 않지만, 마을에서 마을로 넘어가는 일은 산책이 아니라 이동입니다.',
      'zh-CN': '一座山，两个村，选哪边比地图看上去更要紧，因为它们分处山的两侧。滑雪巴士把两个村都连到缆车，所以谁都不算与世隔绝——但从这村到那村是一段路程，不是散步。',
      'pt-BR': 'Uma montanha, dois vilarejos, e a escolha pesa mais do que o mapa sugere, porque ficam em lados opostos. Ônibus de esqui ligam os dois aos teleféricos, então nenhum fica isolado, mas ir de um ao outro é um trajeto, não um passeio.',
    },
  },
  liftsOrTracks: {
    title: {
      en: 'Near the lifts, or near the tracks', fi: 'Hissien lähellä vai latujen',
      sv: 'Nära liftarna eller nära spåren', de: 'Nah an den Liften oder nah an den Loipen',
      es: 'Cerca de los remontes o cerca de las pistas de fondo',
      fr: 'Près des remontées ou près des tracés', it: 'Vicino agli impianti o vicino agli anelli',
      nl: 'Dicht bij de liften of dicht bij de loipes',
      ja: 'リフトの近くか、コースの近くか', ko: '리프트 가까이냐 코스 가까이냐',
      'zh-CN': '靠近缆车，还是靠近越野道', 'pt-BR': 'Perto dos teleféricos ou perto das pistas de fundo',
    },
    body: {
      en: 'Slopes run down both sides of the fell and about three hundred kilometres of tracks run through the forest around it. Decide which of the two you will use more before you pick an address, because the fell itself is in between.',
      fi: 'Rinteet laskevat tunturin molemmilta puolilta, ja sen ympärillä metsässä kiertää noin kolmesataa kilometriä latuja. Päätä kumpaa käytät enemmän ennen kuin valitset osoitteen, sillä tunturi itse on niiden välissä.',
      sv: 'Backar går ner på båda sidor av fjället, och runt om i skogen löper omkring trehundra kilometer spår. Bestäm vilket av de två du kommer att använda mest innan du väljer adress, för fjället självt ligger emellan.',
      de: 'Pisten führen auf beiden Seiten des Fjells hinab, und rundherum ziehen sich rund dreihundert Kilometer Loipen durch den Wald. Entscheiden Sie vor der Adresswahl, was Sie mehr nutzen werden – denn dazwischen liegt das Fjell selbst.',
      es: 'Las pistas bajan por las dos laderas de la montaña y unos trescientos kilómetros de circuitos recorren el bosque que la rodea. Decida cuál de las dos cosas usará más antes de elegir dirección, porque en medio está la propia montaña.',
      fr: 'Les pistes descendent des deux versants du fjäll et environ trois cents kilomètres de tracés courent dans la forêt alentour. Décidez de ce que vous utiliserez le plus avant de choisir une adresse, car entre les deux se dresse le mont lui-même.',
      it: 'Le piste scendono su entrambi i versanti della montagna e attorno, nel bosco, corrono circa trecento chilometri di anelli. Decida quale delle due userà di più prima di scegliere l’indirizzo, perché in mezzo c’è la montagna stessa.',
      nl: 'Pistes lopen langs beide zijden van de fjäll naar beneden en rondom slingert zo’n driehonderd kilometer loipe door het bos. Bepaal wat u het meest gaat gebruiken vóór u een adres kiest, want daartussen ligt de fjäll zelf.',
      ja: 'ゲレンデは山の両側を落ち、まわりの森にはおよそ三百キロのコースがめぐっています。どちらをより多く使うのかを決めてから住所を選んでください。ふたつのあいだには山そのものがあります。',
      ko: '슬로프는 산 양쪽으로 내려오고, 그 둘레의 숲에는 약 300킬로미터의 코스가 이어집니다. 어느 쪽을 더 많이 쓸지 정한 다음에 주소를 고르십시오. 둘 사이에는 산 자체가 놓여 있습니다.',
      'zh-CN': '雪道从山的两侧落下，四周林间还有约三百公里的越野道。先想清楚这两样你会更多用哪一样，再挑住址——因为夹在中间的正是这座山。',
      'pt-BR': 'As pistas descem pelos dois lados da montanha e cerca de trezentos quilômetros de trilhas cortam a floresta ao redor. Decida qual das duas vai usar mais antes de escolher o endereço, porque no meio está a própria montanha.',
    },
  },
  forest: {
    title: {
      en: 'Cabins at the forest edge', fi: 'Mökit metsän reunassa',
      sv: 'Stugor i skogsbrynet', de: 'Hütten am Waldrand',
      es: 'Cabañas en el borde del bosque', fr: 'Chalets en lisière de forêt',
      it: 'Baite al margine del bosco', nl: 'Hutten aan de bosrand',
      ja: '森のきわのキャビン', ko: '숲 가장자리의 캐빈',
      'zh-CN': '林缘的小木屋', 'pt-BR': 'Cabanas na borda da floresta',
    },
    body: {
      en: 'Pallas-Yllästunturi National Park begins where the villages end, and a cabin on that edge has the trailhead at the door. The Kellokas visitor centre, on the road between the two villages, is where to pick up maps first.',
      fi: 'Pallas-Yllästunturin kansallispuisto alkaa siitä mihin kylät loppuvat, ja reunalla olevasta mökistä reitin lähtö on oven takana. Kellokkaan luontokeskus kylien välisen tien varrella on ensimmäinen paikka hakea kartat.',
      sv: 'Pallas-Yllästunturi nationalpark börjar där byarna slutar, och en stuga i det brynet har ledstarten utanför dörren. Naturum Kellokas, vid vägen mellan byarna, är där du först hämtar kartorna.',
      de: 'Der Nationalpark Pallas-Yllästunturi beginnt dort, wo die Dörfer enden, und eine Hütte an diesem Rand hat den Wegeinstieg vor der Tür. Das Besucherzentrum Kellokas an der Straße zwischen den beiden Dörfern ist die erste Adresse für Karten.',
      es: 'El parque nacional de Pallas-Yllästunturi empieza donde acaban los pueblos, y una cabaña en ese borde tiene el inicio del sendero en la puerta. El centro de visitantes Kellokas, en la carretera entre los dos pueblos, es donde recoger primero los mapas.',
      fr: 'Le parc national de Pallas-Yllästunturi commence là où finissent les villages, et un chalet en lisière a le départ des sentiers devant la porte. Le centre d’accueil Kellokas, sur la route entre les deux villages, est où prendre les cartes en premier.',
      it: 'Il parco nazionale di Pallas-Yllästunturi comincia dove finiscono i villaggi, e una baita su quel margine ha l’imbocco del sentiero davanti alla porta. Il centro visitatori Kellokas, sulla strada fra i due paesi, è il primo posto dove prendere le mappe.',
      nl: 'Nationaal park Pallas-Yllästunturi begint waar de dorpen ophouden, en een hut aan die rand heeft het startpunt van de route voor de deur. Bezoekerscentrum Kellokas, aan de weg tussen de twee dorpen, is waar u eerst de kaarten haalt.',
      ja: 'パラス・ユッラストゥントゥリ国立公園は村が終わるところから始まり、そのきわのキャビンなら登山口が玄関先です。ふたつの村を結ぶ道沿いのケッロカス自然センターが、まず地図を受け取る場所になります。',
      ko: '팔라스-윌래스툰투리 국립공원은 마을이 끝나는 곳에서 시작되고, 그 가장자리의 캐빈은 등산로 입구가 문 앞입니다. 두 마을을 잇는 길가의 켈로카스 방문자 센터가 먼저 지도를 받아 갈 곳입니다.',
      'zh-CN': '帕拉斯-于拉斯通图里国家公园从村子的尽头开始，建在林缘的木屋，步道起点就在门口。两村之间公路边的 Kellokas 游客中心，是先去取地图的地方。',
      'pt-BR': 'O Parque Nacional Pallas-Yllästunturi começa onde os vilarejos terminam, e uma cabana nessa borda tem o início da trilha à porta. O centro de visitantes Kellokas, na estrada entre os dois vilarejos, é onde pegar os mapas primeiro.',
    },
  },
};

export const destinationStaying: Record<string, Record<string, StayingNote>> = {
  rovaniemi,
  levi,
  saariselka,
  inari,
  yllas,
};

export function getDestinationStaying(slug: string): Record<string, StayingNote> | undefined {
  return destinationStaying[slug];
}
