/**
 * Japani (ja) · town-kemijarvi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/kemijarvi.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'tkVaesto', 'kemijarvi', 'kemijarviHaku', 'kemijarviVuostimo', 'kemijarviTalousarvio', 'kemijarviTietoa',
  'kemijarviToihin', 'tkVuokrat', 'tkVuokratPostinumero', 'kela', 'tkAvainluvut', 'osrm', 'redu', 'ahvl', 'rakli',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'ケミヤルヴィの賃貸：市営560戸と申込み方法',
  metaDescription:
    'ケミヤルヴィの賃貸住宅。市が持つ560戸、オンライン申込み、2026年の家賃引き上げ、ピュハ近くのVuostimoの長屋、Kelaの住宅手当をまとめました。',
  breadcrumb: 'ケミヤルヴィ',
  hero: {
    eyebrow: 'ケミヤルヴィ、住民6,919人',
    title: 'ケミヤルヴィの賃貸。',
    subtitle:
      'フィンランド最北の町。市が賃貸住宅560戸を所有し、その一部は空いています。申込み先と、引っ越す前に知っておきたいことをご案内します。',
  },
  authorNote:
    '人口はフィンランド統計局、住戸数と申込み方法はケミヤルヴィ市のページ、家賃の引き上げと入居率の目標は市の2026年度予算から。2026年11月15日に確認しました。',
  intro: [
    'ケミヤルヴィの住民は2025年末に6,919人で、前年より35人減りました（フィンランド統計局）。市は自らをフィンランド最北の町と呼び、中心部のサービスは徒歩圏内にあるとしています（kemijarvi.fi）。',
    '市の二つの不動産会社、Kemijärven VuokratalotとKemijärven Töveliは、賃貸住宅560戸を所有しています（kemijarvi.fi）。市の予算は、それらの住戸の80〜85%が貸されている状態を現実的な目標としているため、空き住戸は実際にあります。',
    '家賃は上がっています。Kemijärven Vuokratalotは2026年2月1日に家賃を4.5%、Töveliは2026年7月1日に5%引き上げました。同じ引き上げは、2027年と2028年の計画にも書き込まれています（2026年度予算）。',
  ],
  sections: [
    {
      id: 'channels',
      kicker: '申込み先',
      h2: 'まず市の会社、次にポータルサイト。',
      band: true,
      cards: [
        {
          title: '市の賃貸住宅',
          body: '市の560戸は、中心部、Särkikangas、Sipovaara、Isokylä、Halosenranta、Vuostimoにあります。オンライン、またはSortteeri（Vapaudenkatu 8）で紙の用紙から申し込みます。申込みの有効期間は四か月で、更新できます。',
          href: 'https://kemijarvi.fi/asuminen-ja-ymparisto/asuminen/kemijarven-kaupungin-vuokratalot/asunnon-hakeminen/',
          linkLabel: 'kemijarvi.fi：住宅への申込み',
          event: 'kemijarvi_city',
        },
        {
          title: 'Vuostimo、ピュハから14km',
          body: 'Vuostimoにある1987年築の市営の長屋で、中心部から北へ約35キロメートルの場所です。ピュハトゥントゥリのスキーリゾートまでは14キロメートルで、市の賃貸住宅のなかでピュハに最も近い物件です。',
          href: 'https://kemijarvi.fi/asuminen-ja-ymparisto/asuminen/kemijarven-kaupungin-vuokratalot/vuokratalokohteet/vuostimo/',
          linkLabel: 'kemijarvi.fi：Vuostimo',
          event: 'kemijarvi_vuostimo',
        },
        {
          title: 'OikotieとVuokraovi',
          body: '自治体「ケミヤルヴィ」で探すと、個人や仲介会社の掲載が見つかります。市の住まいのページには民間の貸主は載っていないため、その住戸はポータルサイトで探します。',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kemij%C3%A4rvi',
          linkLabel: 'Oikotie：ケミヤルヴィの賃貸',
          event: 'oikotie',
        },
      ],
    },
    {
      id: 'prices',
      kicker: '家賃の目安',
      h2: '市の会社は家賃を公表していません。',
      table: {
        caption: '平均家賃 €/m²/月、民間賃貸住宅、2026年第3四半期',
        head: ['', 'ラップランド（地域全体）', '全国'],
        rows: [
          ['ワンルーム', '17.25', '20.49'],
          ['二部屋の住戸', '12.87', '15.07'],
          ['三部屋以上', '11.08', '13.98'],
          ['全住戸', '13.14', '15.99'],
        ],
        foot: 'フィンランド統計局、2026年第3四半期の家賃、表15fa。ケミヤルヴィ単独の数字は公表されておらず、地域の数字には家賃の高いロヴァニエミが含まれます。',
      },
      paras: [
        '<strong>ケミヤルヴィ独自の数字は2022年のものです。</strong>中心部の郵便番号地域98100では、2022年1月〜3月の民間賃貸のワンルームの平均はm²あたり€12.15、二部屋の住戸はm²あたり€9.10でした。それ以降の四半期はすべて非公表です。フィンランド統計局は、観測数が少なすぎる郵便番号地域の数字を公表しません（表13eb）。',
        '市の会社の家賃はオンラインに載っていません。提示を受け入れる前に、住宅担当者へ家賃を尋ねてください。そして、2026年に家賃が上がったことを覚えておきましょう。Vuokratalotは4.5%、Töveliは5%です。',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Kelaの住宅手当',
      h2: 'ケミヤルヴィはKelaの「その他の自治体」に入ります。',
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
        foot: 'Kela、一般住宅手当 2026年。手当は認定された住居費の最大70%で、額が€15未満の場合は支給されません。',
      },
    },
    {
      id: 'work',
      kicker: '仕事と交通',
      h2: '引っ越す前に、仕事を決めておきましょう。',
      bullets: [
        '市によると、市そのもの以外の主な雇用主は、Keitele Group、Festivo Porkka Group、Kelaのコンタクトセンターで、ほかに小売、サービス、観光の事業者があります（2026年度予算）。',
        '2024年の労働力人口に占める失業者の割合は15.6%で、フィンランド全体の11.7%を上回りました（フィンランド統計局）。',
        'スオムトゥントゥリは中心部から46km、ピュハトゥントゥリは50kmの距離です（OpenStreetMap）。スオムはケミヤルヴィの域内にあり、ピュハは隣のペルコセンニエミ町に属します。',
        'ロヴァニエミ空港までは80kmです（OpenStreetMap）。市によると、ヘルシンキまで直通の鉄道が通っています（kemijarvi.fi）。',
      ],
    },
    {
      id: 'contract',
      kicker: '契約',
      h2: '知っておきたい法律の二つの規定。',
      bullets: [
        '敷金は家賃三か月分が上限です（住宅賃貸借法 第8条）。',
        '2026年10月1日からは、賃貸借の終了後14日以内に、敷金を返還するか、返還しない理由を書面で説明しなければなりません（Rakli）。',
      ],
    },
  ],
  faqs: [
    {
      q: 'ケミヤルヴィの市営住宅には、どう申し込みますか？',
      a: '市のサイトのオンライン申込みか、Sortteeri（Vapaudenkatu 8）で紙の用紙を使って申し込みます。申込みの有効期間は四か月で、さらに四か月更新できます。信用情報が確認され、添付書類が届くまで申込みは処理されません。入居者選定の会議は、通常は隔週の水曜日に開かれます（kemijarvi.fi）。',
    },
    {
      q: 'ケミヤルヴィに空いている賃貸住宅はありますか？',
      a: 'おそらくあります。市の予算は、会社の住戸の80〜85%が貸されている状態を現実的な目標としています（2026年度予算）。どの住戸が空いているかは、住宅担当者に尋ねてください。',
    },
    {
      q: 'ケミヤルヴィの賃貸住宅はいくらですか？',
      a: '現在の平均は公表されていません。中心部の郵便番号地域で最新の数字は2022年初めのもので、ワンルームがm²あたり€12.15、二部屋の住戸がm²あたり€9.10でした。ラップランドの平均は2026年7月〜9月にm²あたり€13.14で、家賃の高いロヴァニエミを含んでいます（フィンランド統計局）。',
    },
    {
      q: 'ケミヤルヴィに学生向けの住宅はありますか？',
      a: 'ラップランド教育センターREDUが、ケミヤルヴィに学生寮を持っています。義務教育中の学生は無料で、空いた部屋はほかの学生に表示価格で貸されます（redu.fi）。',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: '最初の数日',
    h2: '内見は自分の目で。',
    lead: 'パートナーの検索では、ケミヤルヴィとピュハの空室とアパートメントを本日の料金で確認できます。',
    chips: [
      { label: 'ケミヤルヴィ', destination: 'Kemijärvi', sid: 'rentals_kemijarvi_first_weeks' },
      { label: 'ピュハ', destination: 'Pyhä', sid: 'rentals_pyha_first_weeks' },
    ],
  },
  sources: pickSources('ja', SOURCES, common.sourceLabels),
};

export default copy;
