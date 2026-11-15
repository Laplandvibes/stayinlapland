/**
 * Japani (ja) · town-kittila-levi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/kittila-levi.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'kittila', 'yle2023', 'yle2017', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'キッティラとレヴィの賃貸：自治体の住宅と季節契約',
  metaDescription:
    'キッティラとレヴィで部屋を借りる方へ。自治体のKittilän Vuokratalot Oy、休暇用アパートメントの季節家賃、季節労働者の従業員用住宅、Kelaの支援をご案内します。',
  breadcrumb: 'キッティラとレヴィ',
  hero: {
    eyebrow: 'キッティラ、住民6,973人',
    title: 'キッティラとレヴィの賃貸。',
    subtitle:
      'ラップランドで最も急速に成長している自治体の一つと、そのスキーリゾート。同じ部屋が、夏は月額、冬は週単位の料金になります。申込み先と時期をご案内します。',
  },
  authorNote:
    '人口と増加率はフィンランド統計局、Kittilän Vuokratalot Oyは自治体と会社の公式ページ、レヴィの季節の価格はYle（2023年5月25日）から。2026年11月15日に確認しました。',
  intro: [
    'キッティラの住民は2025年末に6,973人で、一年間で2.0%増え、ラップランドの自治体で二番目の伸びでした。これを上回ったのはペルコセンニエミだけで、2.4%です（フィンランド統計局）。原動力はレヴィです。2017年にLevin Matkailu Oyは、リゾートエリアが冬のシーズンに2,000人強の季節労働者を雇うと見積もっていました（Yle、2017年10月25日）。',
    'レヴィの賃貸市場は季節に連動します。中心部に近い80m²のアルプス風の住戸は、5月から11月は月額€750、繁忙期は週€2,000、通年契約は月額€1,650でした（Yle、2023年5月25日）。休暇用アパートメントでは、正式な住所を取得できないこともあります。',
    '通年の賃貸は、レヴィの中心部よりキッティラの村のほうが見つかりやすいでしょう。自治体の住宅はKittilän Vuokratalot Oyが貸し出しており、会社のサイトからオンラインで申し込みます（kittila.fi、Kittilän Vuokratalot）。',
  ],
  sections: [
    {
      id: 'channels',
      kicker: '申込み先',
      h2: '自治体の会社、ポータルサイト、レヴィのグループ。',
      band: true,
      cards: [
        {
          title: 'Kittilän Vuokratalot Oy',
          body: '自治体の賃貸住宅を貸し出しています。事務所は役場の一階（Valtatie 15、99100 Kittilä）にあります。会社は、ウェブサイトから必要な添付書類をそろえたオンライン申込みだけを処理します。申込みの有効期間は同社のページに書かれていないので、会社に尋ねてください。',
          href: 'https://kittila.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot',
          linkLabel: 'kittila.fi：賃貸住宅',
          event: 'kittila_city',
        },
        {
          title: 'Oikotie、Vuokraovi、TA-Asunnot',
          body: '自治体「キッティラ」で探すと、個人や仲介会社の掲載が見つかります。レヴィの住戸も同じ検索に含まれます。TA-Asunnotは、キッティラに自社の空き賃貸住宅を持っています。',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kittil%C3%A4',
          linkLabel: 'Oikotie：キッティラの賃貸',
          event: 'oikotie',
        },
        {
          title: '従業員用住宅',
          body: 'リゾートの雇用主は、長屋や休暇用アパートメントをシーズン中ずっと従業員向けに借り上げ、家賃を給与から差し引きます。住まいについては、求人の提示と一緒に書面で尋ねましょう。全体像は季節労働者のページにあります。',
          href: '/seasonal-worker-housing',
          linkLabel: '季節労働者の住まい',
          event: 'seasonal_page',
        },
        {
          title: 'Facebookのレヴィ住宅グループ',
          body: 'フェルの村で最も早い手段で、季節労働者が住まいを見つけることが多い場所です。ただし、誰も保証してはくれません。内見の前に敷金を払ってはいけません。契約は必ず書面で結びましょう。',
        },
      ],
    },
    {
      id: 'prices',
      kicker: '家賃の目安',
      h2: '地域の数字と、レヴィという例外。',
      table: {
        caption: '平均家賃 €/m²/月、民間賃貸住宅、2026年第3四半期',
        head: ['', 'ラップランド（地域全体）', '全国'],
        rows: [
          ['ワンルーム', '17.25', '20.49'],
          ['二部屋の住戸', '12.87', '15.07'],
          ['三部屋以上', '11.08', '13.98'],
          ['全住戸', '13.14', '15.99'],
        ],
        foot: 'フィンランド統計局、2026年第3四半期の家賃、表15fa。キッティラ単独の数字は公表されておらず、レヴィの季節家賃は統計にまったく含まれません。',
      },
      paras: [
        '<strong>レヴィの例（Yle、2023年5月25日）：</strong>80m²のアルプス風の住戸は、5月から11月は月額€750 = m²あたり€9.38、繁忙期は週€2,000、通年契約は月額€1,650 = m²あたり€20.63です。同じ部屋が、夏は地域平均より安く、通年では全国のワンルームの価格より高くなります。',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Kelaの住宅手当',
      h2: 'キッティラはKelaの「その他の自治体」に入ります。',
      table: {
        caption: '2026年の住居費の上限額、€/月、Kelaの区分「その他の自治体」',
        head: ['世帯人数', '住居費の上限額'],
        rows: [
          ['1人', '394'],
          ['2人', '574'],
          ['3人', '734'],
          ['4人', '875'],
          ['一人増えるごとに', '+129'],
        ],
        foot: 'Kela、一般住宅手当 2026年。手当は認定された住居費の最大70%です。登録住所のない休暇用アパートメントでは、支給の条件を満たしません。',
      },
    },
    {
      id: 'when',
      kicker: '申込みの時期',
      h2: '週単位の料金が始まる前の、夏に。',
      bullets: [
        '休暇用アパートメントを月単位で借りられるのは5月から11月だけで、繁忙期は週単位で貸し出されます（Yle、2023年5月25日）。冬のシーズンの住まいは、夏のうちに見つけましょう。',
        '自治体の会社への申込みはシーズンの前に出し、有効期間がどのくらいかを会社に尋ねましょう。',
        '敷金は家賃三か月分が上限です（住宅賃貸借法第8条）。2026年10月1日からは、賃貸借の終了後14日以内に返還されます（Rakli）。',
      ],
    },
  ],
  faqs: [
    {
      q: 'レヴィで冬に借りる部屋は、どこで見つかりますか？',
      a: '最も可能性が高いのは雇用主です。リゾートの会社は、長屋や休暇用アパートメントをシーズン中ずっと従業員向けに借り上げます。一般の市場では、レヴィの住戸は冬は週単位で貸されるため（Yle、2023年5月25日）、月額の賃貸が可能なのは主に5月から11月です。自治体の会社は、キッティラの村とレヴィのシルッカ地区の両方に住戸を持っています（Kittilän Vuokratalot）。',
    },
    {
      q: 'キッティラの自治体住宅には、どう申し込みますか？',
      a: '会社のサイトにあるKittilän Vuokratalot Oyのオンライン申込みで行います。必要な添付書類のない不完全な申込みは処理されません。事務所は役場の一階、Valtatie 15にあります（kittila.fi、Kittilän Vuokratalot）。',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: '最初の数泊',
    h2: '住まいが空く前に。',
    lead: '提携先の検索では、レヴィとキッティラの空室とアパートメントを本日の料金で確認できます。',
    chips: [
      { label: 'レヴィ', destination: 'Levi', sid: 'rentals_levi_first_weeks' },
      { label: 'キッティラ', destination: 'Kittilä', sid: 'rentals_kittila_first_weeks' },
    ],
  },
  sources: pickSources('ja', SOURCES, common.sourceLabels),
};

export default copy;
