/**
 * Japani (ja) · seasonal. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/seasonal.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'yle2017', 'yle2023', 'yle2026yllas', 'kesko2026', 'yle2026rovaniemi', 'yle2025das',
  'tkVaesto', 'kittila', 'inari', 'sodankyla', 'rakli', 'dvv',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'ラップランドの季節労働者の住まい：レヴィ、ユッラス、サーリセルカ',
  metaDescription:
    'レヴィ、ユッラス、サーリセルカ、ロヴァニエミで季節労働者はどこに住むのか。従業員用住宅、季節契約、自治体の賃貸住宅と、契約前に確認すべきことを解説します。',
  breadcrumb: '季節労働者',
  hero: {
    eyebrow: '季節の仕事、冬も夏も',
    title: '季節労働者はどこに住んでいるのか。',
    subtitle:
      '従業員用のシェア住宅、季節契約の休暇用アパートメント、自治体の賃貸住宅。スキーリゾートの住宅不足は現実の問題で、人々はこうして乗り切っています。',
  },
  authorNote:
    '住宅不足の数字は2017〜2026年のYleとKeskoの報道から、探し方は各自治体の公式ページから。仕事そのものは、姉妹サイトのlaplandwork.comが扱っています。',
  intro: [
    'レヴィの観光エリアは冬のシーズンに2,000人強の季節労働者を雇っていると、Levin Matkailu Oyの代表取締役Kristiina Kukkohovi氏は2017年の時点で見積もっており、住宅不足はラップランドのどのリゾートでも大きな問題になりつつあると語っていました（Yle、2017年10月25日）。状況は和らいでいません。2023年春には、レヴィとユッラスの従業員が、住所を登録できない休暇用アパートメントで暮らしていることをYleが伝えています。',
    '2026年6月、アカスロンポロのK-Market Jounin Kauppaのオーナーは、住戸が足りず家賃も高騰しているとして、自社の従業員のために長屋を三棟建てることを決めました（Yle、2026年6月16日）。この店は年に約20人の季節労働者を雇っており、そのおよそ半数が賃貸の住まいを必要としています（Kesko、2026年6月17日）。',
    'ロヴァニエミでは、人材会社のCareer.fiが約250人をラップランドに連れてきて、十か所ほどに分けて住まわせました。エストニア人の従業員二人は、借りていた部屋が配管の改修工事に入ったため、成長戦略責任者の家族のもとで二度の冬を過ごしました。住まいを見つけるのは「毎年ちょっとした大騒ぎ」だそうです（Yle、2026年3月9日）。',
  ],
  sections: [
    {
      id: 'three-ways',
      kicker: 'シーズンを暮らす三つの方法',
      h2: '従業員用住宅、季節契約、自治体の住宅。',
      cards: [
        {
          title: '1. 従業員用住宅',
          body:
            'スキーリゾートで最も一般的な形です。雇用主が長屋、コテージ、休暇用アパートメントをシーズン中ずっと従業員向けに借り上げ、家賃は給与から差し引かれます。ルカでは、あるレストラン会社が2017年にすでに、従業員用に四軒の休暇用物件を11月から5月まで借りていました（Yle、2017年10月25日）。利点は、到着したときに屋根が用意されていること。リスクは、仕事が終わると住まいも終わることです。',
        },
        {
          title: '2. 季節契約の休暇用アパートメント',
          body:
            'レヴィの80m²のアルパイン・ハウスの住戸は、5月から11月は月額€750、繁忙期は週€2,000、通年契約は月額€1,650でした（Yle、2023年5月25日）。夏は安く、冬は手が出ません。また、休暇用アパートメントでは正式な住所を取得できません（Yle、2023年5月25日）。',
        },
        {
          title: '3. 自治体の賃貸住宅',
          body:
            'キッティラのKittilän Vuokratalot Oy、イナリのInarin Vuokra-asunnot Oy（イヴァロ、イナリ、サーリセルカに500戸超）、ソダンキュラのAsentopuulaaki（約720戸）があります。シーズンが始まる前の夏に申し込みましょう。申込みがどのくらいの期間有効か、会社に確認してください。',
        },
      ],
    },
    {
      id: 'places',
      kicker: '地域別',
      h2: '同じ住宅不足でも、解決策は地域ごとに違う。',
      band: true,
      cards: [
        {
          title: 'レヴィとキッティラ',
          image: { src: '/images/housing-levi-keskusta-card.webp', alt: '夏の日のレヴィ中心部の木造の建物' },
          body:
            'キッティラの人口は2025年に2.0%増加し、ラップランドの自治体ではペルコセンニエミ（2.4%）に次ぐ伸びでした（フィンランド統計局）。雇用主は従業員用にシーズン中ずっと長屋を借り上げ、それ以外の人はFacebookのレヴィ住宅グループで探します。Kittilän Vuokratalot Oyは、キッティラの村とレヴィのシルッカ地区の両方の住戸を掲載しています。',
          href: 'https://kittila.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot',
          linkLabel: 'Kittilän Vuokratalot Oy',
          event: 'kittila',
        },
        {
          title: 'ユッラス：アカスロンポロとユッラスヤルヴィ',
          image: { src: '/images/housing-seasonal-card-yllas-tunturi.webp', alt: '9月の朝、アカスロンポロの湖越しに見るユッラス' },
          body:
            '店主たちは自分たちで建てています。Jounin Kauppaの長屋三棟は、現時点の予定では2026年11月〜12月に完成します。ワンルーム、シェア向けの二寝室の住戸、家族向けの三寝室の住戸があり、すべてサウナ付きです（Kesko、2026年6月17日）。村で最初のモジュール式建物は、2025年10月にほぼ完成しました（Yle、2026年6月16日）。',
          href: 'https://www.kesko.fi/media/uutiset-ja-tiedotteet/uutiset/2026/lapin-asuntopulaa-ratkomassa-k-market-jounin-kaupan-kauppiaat-rakennuttavat-kolme-rivitaloa-tyontekijoilleen/',
          linkLabel: 'Kesko、2026年6月17日',
          event: 'yllas',
        },
        {
          title: 'サーリセルカとイヴァロ',
          image: { src: '/images/housing-saariselka-hirsitalot.webp', alt: '11月のサーリセルカのログハウス' },
          body:
            '自治体の会社Inarin Vuokra-asunnot Oyは、サーリセルカとイヴァロの両方に住戸を持っています。町のページには民間の貸主と、FacebookのSodankylä–Inari–Utsjokiグループも載っています。雇用主が住まいを提供してくれるかどうかは、面接で尋ねましょう。',
          href: 'https://www.inari.fi/fi/palvelut/asuminen.html',
          linkLabel: 'inari.fi：住まい',
          event: 'inari',
        },
        {
          title: 'ロヴァニエミ',
          image: { src: '/images/housing-rovaniemi-lappia-card.webp', alt: 'ロヴァニエミ中心部のラッピアホール' },
          body:
            '学生、観光客、季節労働者が、同じ時期に同じワンルームを奪い合っています。2026年夏には、学生住宅財団DASに約550件の緊急の申込みがあり、前年より15%増えました。申込者の90%近くがワンルームを希望していました（Yle、2026年7月27日）。',
          href: 'https://yle.fi/a/74-20213937',
          linkLabel: 'Yle、2026年3月9日：ロヴァニエミの住宅不足',
          event: 'rovaniemi',
        },
        {
          title: 'ルカとクーサモ',
          image: { src: '/images/housing-ruka-kyla-card.webp', alt: '夏のルカの歩行者村、広場と赤い展望塔' },
          body:
            'ルカはラップランドではなく北ポフヤンマー県にありますが、シーズンも住宅不足も同じです。2017年、ルカのレストラン会社は、通年の従業員20人強から、冬には80人超に増え、従業員用に四軒の休暇用物件を11月から5月まで借りていました（Yle、2017年10月25日）。',
          href: 'https://yle.fi/a/3-9895965',
          linkLabel: 'Yle、2017年10月25日',
          event: 'ruka',
        },
      ],
    },
    {
      id: 'summer',
      kicker: '夏のシーズン',
      h2: '夏は静かではありません。',
      paras: [
        'ラップランドの夏の仕事は、それだけで一つのシーズンです。ロヴァニエミの通年の観光、ハイキングエリア、建設現場、店の夏の繁忙期などがあります。夏は休暇用アパートメントが月単位で貸されます（レヴィの例では5月から11月まで月額€750、Yle、2023年5月25日）。',
        'ロヴァニエミでは、ある人材会社の成長戦略責任者が、冬は季節労働者を、夏は建設作業員やスポーツチームを、同じ建物に住まわせたいと考えています（Yle、2026年3月9日）。夏に来る人にとっては朗報です。冬向けに作られた従業員用住宅は、夏には空いているからです。',
      ],
      image: {
        src: '/images/housing-jouninkauppa.webp',
        alt: '夏のアカスロンポロにあるK-Market Jounin Kauppaの店頭',
        caption:
          'K-Market Jounin Kauppa、アカスロンポロ、2026年7月。オーナーは従業員のために長屋を三棟建てています（Kesko、2026年6月17日）。写真：LaplandVibes。',
        ratio: '4/3',
      },
    },
    {
      id: 'ask',
      kicker: '署名の前に',
      h2: '雇用主に確認したいこと。',
      bullets: [
        '住まいは雇用条件の一部ですか、それとも別の賃貸契約ですか。給与からいくら引かれ、給与明細に記載されますか。',
        '個室ですか、相部屋ですか。部屋には何人住み、ご自身の部屋に鍵はかかりますか。',
        'シーズンが終わる前に仕事が終わった場合、あるいはシーズンを過ぎても仕事が続く場合、賃貸契約はどうなりますか。',
        'そこで住所を登録できますか。DVVへの住所変更の届出は、引っ越してから一週間以内が期限で、休暇用アパートメントでは認められないことがよくあります。',
        '電気、水道、インターネットの料金は誰が払いますか。',
        '車がなくても通勤できますか。距離、バス、スキーバスはどうなっていますか。',
        '敷金はありますか。いつ返ってきますか。法律では、2026年10月1日から、賃貸借の終了後14日以内です（Rakli）。',
      ],
    },
  ],
  faqs: [
    {
      q: 'レヴィで、雇用主は季節労働者に住まいを用意してくれますか？',
      a: 'よくありますが、必ずではなく、無料でもありません。雇用主は長屋や休暇用アパートメントをシーズン中ずっと従業員向けに借り上げ、家賃を給与から差し引きます。条件は書面でもらい、仕事が終わったときに住まいがどうなるかを確認してください。',
    },
    {
      q: '冬のシーズンの住まいは、いつから探し始めるべきですか？',
      a: '夏です。シーズンの前に自治体の住宅会社（キッティラ、イナリ、ソダンキュラ）へ申し込みましょう。レヴィの例では、休暇用アパートメントを月単位で借りられるのは5月から11月だけでした（Yle、2023年5月25日）。',
    },
    {
      q: 'シーズン中ずっと休暇用アパートメントに住めますか？',
      a: '所有者が季節契約を提供してくれるなら可能です。ただし、休暇用アパートメントでは正式な住所を取得できません（Yle、2023年5月25日）。',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: '最初の数日',
    h2: '鍵を受け取る前に。',
    lead:
      '住まいが空くより先に、シーズンが始まることはよくあります。パートナーの検索では、空いている客室とアパートメントを本日の料金で確認できます。',
    chips: [
      { label: 'レヴィ', destination: 'Levi', sid: 'seasonal_first_nights_levi' },
      { label: 'ユッラス', destination: 'Äkäslompolo', sid: 'seasonal_first_nights_yllas' },
      { label: 'サーリセルカ', destination: 'Saariselkä', sid: 'seasonal_first_nights_saariselka' },
      { label: 'ロヴァニエミ', destination: 'Rovaniemi', sid: 'seasonal_first_nights_rovaniemi' },
    ],
  },
  sources: pickSources('ja', SOURCES, common.sourceLabels),
};

export default copy;
