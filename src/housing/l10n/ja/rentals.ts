/**
 * Japani (ja) · rentals. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/rentals.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'tkVuokrat', 'kela', 'ahvl', 'rakli', 'kuluttajaliittoVuokra', 'yle2025das', 'yle2023', 'rovaniemi', 'das',
  'kittila', 'kemi', 'keminmaa', 'tornio', 'kemijarvi', 'kemijarviHaku', 'kemijarviVuostimo', 'kemijarviTalousarvio',
  'sodankyla', 'asentopuulaaki', 'asentopuulaakiVapaat', 'inari',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'ラップランドで部屋を借りる：ロヴァニエミ、レヴィ、ケミ・トルニオ',
  metaDescription:
    'ロヴァニエミ、ケミ・トルニオ、レヴィ、イナリなど、フィンランド・ラップランドで長期の賃貸を探す方へ。m²あたりの家賃（フィンランド統計局）、敷金、Kelaの住宅手当を解説します。',
  breadcrumb: '賃貸',
  hero: {
    eyebrow: 'ラップランドで借りる',
    title: 'ラップランドで家を借りる。',
    subtitle:
      '賃貸住宅の見つけ方、家賃の目安、Kelaがどこまで負担してくれるか。町ごとにご案内します。',
  },
  authorNote:
    'm²あたりの家賃：フィンランド統計局の家賃統計（民間賃貸住宅、2026年7月〜9月）。自治体の住宅会社は、各自治体と会社の公式サイトで2026年11月15日に確認しました。',
  intro: [
    'ラップランドの賃貸住宅は、自治体が持つ住宅会社、全国規模のポータルサイト、地元のグループの三つのどれかで見つかります。まずは自治体から当たってみてください。自治体の会社は数百戸を所有しており、たとえばケミンマーでは300戸強、ソダンキュラでは約720戸、ケミヤルヴィでは560戸、イナリでは500戸超です。今は空きがなくても申し込めます。',
    '家賃は住む場所で変わります。ロヴァニエミでは30m²のワンルームの平均が月額約€560で、ラップランドのほかの地域はそれより安くなります。フェルの村では家賃が季節に連動するので、冬は先に雇用主へ従業員用住宅があるか尋ねましょう。',
  ],
  sections: [
    {
      id: 'towns',
      kicker: '住宅のある場所',
      h2: '町ごとに見る。',
      lead: '町ごとにページを用意しています。自治体の住宅会社と申込み方法、家賃の水準、Kelaの上限額です。ユッラスの従業員用住宅は、季節労働者のページで扱っています。',
      band: true,
      cards: [
        {
          title: 'ロヴァニエミ',
          image: { src: '/images/housing-rovaniemi-card-talvikatu.webp', alt: '1月のロヴァニエミ、雪の積もった通りを歩く人々と集合住宅' },
          body:
            '市の公式ページでは、貸主としてKAS asunnot、M2-Kodit、Tarveasunnot、Avara、Lumo、物件検索サービスとしてOikotie、Vuokraovi、Qasaが紹介されています。学生はDomus Arctica財団DAS（約1,700戸、うち700戸がワンルーム）に、30歳未満の方はNAL Rovaniemiに申し込みます。DASの申込みの有効期間は三か月で、8月と9月は新入生が優先されます。',
          href: '/rentals/rovaniemi',
          linkLabel: 'ロヴァニエミの賃貸',
        },
        {
          title: 'ケミ、ケミンマー、トルニオ',
          image: { src: '/images/housing-kemi-card-kaupungintalo.webp', alt: '雪の1月の朝のケミ市庁舎' },
          body:
            'ケミ市の自治体住宅を運営するのは、市内最大の賃貸住宅事業者Kiinteistö Oy Itätuuliで、住戸は中心部から五キロメートル以内にあります。Keminmaan Vuokra-asunnot Oyは300戸強を持ち、どちらの会社も独自のオンライン申込みがあります。トルニオでは、市の住宅をTornion Krunni Oy（Tornion Vuokra-asunnot Oy）が管理しています。',
          href: '/rentals/kemi-tornio',
          linkLabel: 'ケミ、トルニオ、ケミンマーの賃貸',
        },
        {
          title: 'ケミヤルヴィ',
          image: { src: '/images/housing-kemijarvi-card-kerrostalo.webp', alt: '7月の夕方のケミヤルヴィ、集合住宅と古い松の木' },
          body:
            '市の二つの不動産会社が賃貸住宅560戸を所有しており、予算では入居率80〜85%を目標としているため、空き住戸は実際にあります。申込みの有効期間は四か月です。Vuostimoの長屋はピュハトゥントゥリから14kmの場所にあります。',
          href: '/rentals/kemijarvi',
          linkLabel: 'ケミヤルヴィの賃貸',
        },
        {
          title: 'ソダンキュラ',
          image: { src: '/images/housing-sodankyla-jaamerentie.webp', alt: '9月のソダンキュラの中心街、Jäämerentie' },
          body:
            'Asentopuulaaki Oyが町の住宅約720戸を貸し出しており、同社の住戸検索では、その時点で空いている住戸と間もなく空く住戸が分かります。古い建物の家賃はm²あたり約€9〜12.50、2025年に完成したKäpyriihiは€18です。',
          href: '/rentals/sodankyla',
          linkLabel: 'ソダンキュラの賃貸',
        },
        {
          title: 'キッティラとレヴィ',
          image: { src: '/images/housing-kittila-levi-card-kyla.webp', alt: '11月のレヴィ山頂から見たレヴィの村、湖とその先のフェル' },
          body:
            'Kittilän Vuokratalot Oyが町営の賃貸住宅を貸し出しています。事務所は役場の一階（Valtatie 15）にあります。申込みは同社のウェブサイトからオンラインで行います。レヴィの休暇用アパートメントが月額賃貸になるのは主に5月から11月で、冬は同じ部屋が週単位で貸されます。',
          href: '/rentals/kittila-levi',
          linkLabel: 'キッティラとレヴィの賃貸',
        },
        {
          title: 'イナリ、イヴァロ、サーリセルカ',
          image: { src: '/images/housing-ivalo-joki.webp', alt: '夏の夕方、イヴァロ川越しに見るイヴァロの町' },
          body:
            'Inarin Vuokra-asunnot Oyは、イヴァロ、イナリ、サーリセルカ、ネッリム、セヴェッティヤルヴィに500戸超を持っています。町のページには民間の貸主（Bilto、Ivalon vuokra-asunnot、IvaloCenter、Rakennusliike Holmberg、Uni Kodit）と、Facebookの「ソダンキュラ・イナリ・ウツヨキ」賃貸グループも載っています。',
          href: '/rentals/ivalo-inari',
          linkLabel: 'イヴァロとイナリの賃貸',
        },
      ],
    },
    {
      id: 'portals',
      kicker: 'ポータルサイトとグループ',
      h2: 'フィンランドのほかの地域と同じ探し方。',
      bullets: [
        '<a href="https://asunnot.oikotie.fi/vuokra-asunnot/rovaniemi" target="_blank" rel="noopener">Oikotie</a>：全国対応。村ではなく、自治体で絞り込みます。',
        '<a href="https://www.vuokraovi.com/vuokra-asunnot/rovaniemi" target="_blank" rel="noopener">Vuokraovi</a>：賃貸専門です。',
        '<a href="https://qasa.fi" target="_blank" rel="noopener">Qasa</a>：ロヴァニエミ市が紹介しています。契約はプラットフォーム上で電子署名します。',
        '<a href="https://www.tori.fi" target="_blank" rel="noopener">Tori</a>：賃貸物件も載る掲示板型のサイトです。支払う前に確認すべきことは、下で説明します。',
        'Facebookグループ：レヴィの住まい探し、ケミ・ケミンマー、ソダンキュラ・イナリ・ウツヨキ。フェルの村では最も早い手段ですが、掲載内容を保証する人はいません。',
      ],
    },
    {
      id: 'prices',
      kicker: '家賃の目安',
      h2: '感覚ではなく、平方メートルあたりで。',
      lead:
        'フィンランド統計局は四半期ごとに家賃を公表しています。以下は2026年7月〜9月の民間賃貸住宅の平均家賃で、月・平方メートルあたりのユーロ額です。',
      table: {
        caption: '平均家賃 €/m²/月、民間賃貸住宅、2026年第3四半期',
        head: ['', 'ロヴァニエミ', 'ラップランド（地域全体）', '全国'],
        rows: [
          ['ワンルーム', '18.63', '17.25', '20.49'],
          ['二部屋の住戸', '14.40', '12.87', '15.07'],
          ['三部屋以上', '12.29', '11.08', '13.98'],
          ['全住戸', '14.63', '13.14', '15.99'],
          ['新規契約、全住戸', '15.93', '13.39', '16.72'],
        ],
        foot: 'フィンランド統計局、2026年第3四半期の家賃、表15fa。新規契約とは当四半期中に始まった契約のことで、今まさに提示されている家賃を示します。',
      },
      paras: [
        '<strong>計算方法：</strong>m²あたりの家賃に床面積を掛けます。ロヴァニエミの30m²のワンルームは平均で月額約€560（18.63 × 30）、新規契約では約€600（20.14 × 30、ロヴァニエミのワンルームの新規契約の数値）です。50m²の二部屋の住戸は月額約€720（14.40 × 50）。水道代と電気代は通常、別にかかります。',
        'ラップランドのm²あたり家賃は、どの広さでも全国平均を下回っており、その差が最も小さいのは二部屋の住戸です。',
      ],
      note: {
        label: '統計に表れないもの',
        body:
          'スキーリゾートの季節貸しや、家具付きの短期賃貸は、この数値に含まれていません。レヴィ中心部に近い80m²のアルプス風の住戸は、5月から11月は月額€750、繁忙期は週€2,000、通年契約は月額€1,650でした（Yle、2023年5月25日）。同じ部屋に三通りの価格があったわけです。',
      },
    },
    {
      id: 'housing-allowance',
      kicker: 'Kelaの住宅手当',
      h2: '上限額は自治体によって異なります。',
      lead:
        '一般住宅手当は、認定された住居費の最大70%まで支給され、認定される住居費には自治体と世帯人数に応じた上限があります。Kelaは自治体を三つのグループに分けており、ロヴァニエミは比較的大きな24自治体のグループに入ります。ラップランドのほかの自治体はすべて「その他の自治体」に分類され、上限額が低くなります。',
      table: {
        caption: '2026年の住居費の上限額、€/月',
        head: ['世帯人数', 'ロヴァニエミ', 'ラップランドのその他の自治体'],
        rows: [
          ['1人', '447', '394'],
          ['2人', '652', '574'],
          ['3人', '828', '734'],
          ['4人', '981', '875'],
          ['一人増えるごとに', '+134', '+129'],
        ],
        foot: 'Kela、一般住宅手当 2026年。手当の額が€15未満の場合は支給されません。',
      },
      paras: [
        '上限があるため、ロヴァニエミの一人世帯では、家賃が€600でも€447までしか算入されません。残りはご自身の負担です。所得に応じた基礎自己負担額によって、手当は減額されます。ご自身の場合の金額は、Kelaの計算ツールで確認できます。',
      ],
    },
    {
      id: 'contract',
      kicker: '賃貸借契約',
      h2: '署名の前に確認したい五つのこと。',
      bullets: [
        '<strong>敷金は家賃三か月分が上限です</strong>（住宅賃貸借法第8条）。一、二か月分が一般的です。',
        '<strong>2026年10月1日からは、敷金を14日以内に返還しなければなりません。</strong>賃貸借が終了した日、または住戸を引き渡した日からこの期間内に返還するか、返還しない理由を書面で説明する必要があります（2026年10月1日施行の改正、Rakli）。',
        '<strong>借主の解約予告期間は一か月です。</strong>2026年10月1日以降に結ばれた契約では、貸主の解約予告期間は三か月で、賃貸借が継続して二年以上続いている場合は四か月です（Rakli）。2026年10月1日より前に結ばれた契約は、従来の解約予告期間のままです（Kuluttajaliitto）。',
        '<strong>定期借家契約は、双方を期間の終わりまで拘束します。</strong>季節労働では、雇用主が用意する住まいが仕事と結びついていることがよくあります。シーズンの終了前に仕事が終わった場合にどうなるかを、必ず読んでおきましょう。',
        '<strong>信用情報はほぼ必ず確認されます。</strong>延滞の記録があっても借りられないわけではありませんが、その場合は大手の賃貸会社より、自治体の住宅会社や個人の貸主のほうが見込みがあります。',
      ],
    },
    {
      id: 'before-paying',
      kicker: 'お金を払う前に',
      h2: '敷金を守る三つのルール。',
      bullets: [
        '内見をする前、または住戸と鍵が同じ画面に映るビデオ内見をする前に、敷金を払ってはいけません。',
        '契約は書面で結び、貸主の名前と事業者ID（Y-tunnus）または個人識別番号が記載されたものにします。市場に不慣れなら、自治体の住宅会社が最も安全な出発点です。',
        '家具付きの短期賃貸は賃貸借ではありません。休暇用アパートメントでは正式な住所を取得できないことがあり、住所がないと、信用情報の確認など日常の手続きが難しくなります（Yle、2023年5月25日）。',
      ],
    },
  ],
  faqs: [
    {
      q: 'ロヴァニエミのワンルームはいくらですか？',
      a: 'フィンランド統計局によると、2026年7月〜9月のロヴァニエミにおける民間賃貸のワンルームの平均家賃は、m²あたり€18.63、新規契約ではm²あたり€20.14でした。つまり30m²のワンルームなら、電気代を除いて月額約€560〜600になります。',
    },
    {
      q: 'フィンランドの信用情報がなくても、ラップランドで部屋を借りられますか？',
      a: '借りられますが、選択肢は減ります。自治体の住宅会社と個人の貸主は案件ごとに判断し、敷金を多めに積む（法律上は家賃三か月分まで）か、保証人を立てると有利です。大手の賃貸会社は必ず信用情報を確認します。',
    },
    {
      q: 'ロヴァニエミで部屋を探すのに最適な時期はいつですか？',
      a: '8月と9月以外の月がおすすめです。この時期はDASが申込者全員を入居させられず、民間賃貸のワンルームも不足します（Yle、2026年7月27日）。冬のシーズン向けに短期で貸し出されていたワンルームは、春に市場へ戻ってきます。',
    },
    {
      q: 'レヴィの家賃が冬に何倍にもなるのはなぜですか？',
      a: '繁忙期には同じ部屋が週単位で貸し出されるからです。Yleの例（2023年5月25日）では、80m²のアルプス風の住戸が夏は月額€750、冬は週€2,000でした。月額賃貸が可能なのは5月から11月で、冬は雇用主に従業員用住宅を尋ねるか、キッティラ町の会社を当たりましょう。',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: '最初の数週間',
    h2: '実際に部屋を見てから決める。',
    lead:
      '最初の数週間はホテルかアパートホテルを予約し、契約の前に自分の目で住戸を確認しましょう。提携先の検索では、空室を本日の料金で確認できます。',
    chips: [
      { label: 'ロヴァニエミ', destination: 'Rovaniemi', sid: 'rentals_first_weeks_rovaniemi' },
      { label: 'レヴィ', destination: 'Levi', sid: 'rentals_first_weeks_levi' },
      { label: 'トルニオ', destination: 'Tornio', sid: 'rentals_first_weeks_tornio' },
      { label: 'イヴァロ', destination: 'Ivalo', sid: 'rentals_first_weeks_ivalo' },
    ],
  },
  sources: pickSources('ja', SOURCES, common.sourceLabels),
};

export default copy;
