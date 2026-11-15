/**
 * Japani (ja) · town-sodankyla. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/sodankyla.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'tkVaesto', 'sodankyla', 'asentopuulaaki', 'asentopuulaakiHaku', 'asentopuulaakiVapaat', 'asentopuulaakiMuutto',
  'sodankyla2025', 'yle2025sodankyla', 'tkVuokratPostinumero', 'sodankylaOpintolaina', 'yle2026opintolaina', 'kela',
  'maavoimat', 'yle2026kasarmi', 'yle2026kevitsa', 'angloSakatti', 'yle2026sakatti', 'sodankylaMuuttajalle', 'fmi',
  'osrm', 'redu', 'sodankylaAsuntola', 'ahvl', 'rakli',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'ソダンキュラの賃貸：市営約720戸と家賃の目安',
  metaDescription:
    'ソダンキュラで部屋を借りる方へ。Asentopuulaaki Oyが貸す約720戸の自治体住宅、m²あたり約€7.40〜18の家賃、オンライン申込み、学生ローンの試行事業、Kelaの支援をご案内します。',
  breadcrumb: 'ソダンキュラ',
  hero: {
    eyebrow: 'ソダンキュラ、住民8,095人',
    title: 'ソダンキュラの賃貸。',
    subtitle:
      '駐屯地、鉱山、科学コミュニティが一つの自治体にあり、中心の村で長く続いた住宅不足は、新しい建物ができて和らぎました。申込み先と費用をご案内します。',
  },
  authorNote:
    '人口はフィンランド統計局、住戸数は自治体のページ、家賃、条件、空き住戸はAsentopuulaaki Oyの公式ページ、仕事はフィンランド陸軍、Yle、各社から。2026年11月15日に確認しました。',
  intro: [
    'ソダンキュラの住民は2025年末に8,095人でした（フィンランド統計局）。自治体は約720戸の賃貸住宅を所有し、子会社のAsentopuulaaki Oyが貸し出しています（sodankyla.fi）。同社の一覧にある住戸は、ほぼすべてが中心の村にあり、残りはAska、Orajärvi、Riipi、Torvinen、Vaalajärviにあります。',
    '自治体によると、ソダンキュラを長年悩ませてきた住宅不足は和らぎました。2025年夏には、Jeesiöjoki川のほとりに36戸の新しいKäpyriihiが完成しています（ソダンキュラ町、2025年7月2日）。同社の住戸検索には、その時点で空いている住戸と間もなく空く住戸が、家賃と入居可能日とともに載っています（Asentopuulaaki）。',
    '住宅不足が完全になくなったわけではありません。2025年9月、町の技術部長はYleに、仕事はあるのに、ソダンキュラへ働き手を呼ぶのは今も難しいと語りました（Yle、2025年9月11日）。',
  ],
  sections: [
    {
      id: 'prices',
      kicker: '家賃の目安',
      h2: '古い建物でm²あたり約€10、新築で€18。',
      table: {
        caption: 'Asentopuulaaki Oyの家賃、€/m²/月、物件一覧 2026年11月15日',
        head: ['建物', '€/m²/月'],
        rows: [
          ['Käpyriihi、2025年完成', '18.00'],
          ['Peuranpalas（2013年）とKehtoranta（2015年）', '12.80–13.00'],
          ['1977〜1998年の長屋、外廊下式、アパート', '8.80–12.50'],
          ['中心部の集合住宅、1968〜1970年', '10.20'],
          ['周辺の村の長屋', '7.40–10.90'],
        ],
        foot: 'Asentopuulaaki Oyの物件一覧（2026年11月15日）にある全住戸の家賃から算出：42棟、597戸。敷金は家賃一か月分で、水道代は前払い、家庭の電気代は借主が負担します。電気暖房の村の住宅では、暖房費も借主の負担で、同社は夏で月額約€100、冬で€200と見積もっています。',
      },
      paras: [
        '<strong>計算例：</strong>中心部の集合住宅の55m²の二部屋の住戸は月額€632、Käpyriihiの42m²の二部屋の住戸は€756、Kaanaanmaaの80m²の三部屋の長屋は€800です。',
        '<strong>民間の家賃：</strong>ソダンキュラ中心部の郵便番号地域で、民間賃貸の二部屋の住戸の平均は、2025年10月〜12月にm²あたり€11.73でした（フィンランド統計局、表13eb）。これより新しい自治体の数字はありません。ソダンキュラは、フィンランド統計局の現在の家賃表に含まれていないためです。',
      ],
    },
    {
      id: 'channels',
      kicker: '申込み先',
      h2: 'まず自治体の会社、次にポータルサイト。',
      band: true,
      cards: [
        {
          title: 'Asentopuulaaki Oy',
          body: '自治体の約720戸を貸し出している、自治体の子会社です。オンラインで申し込み、収入の証明を添付します。信用情報が確認され、支払いの延滞があると不利になります。',
          href: 'https://www.asentopuulaaki.fi/asunnon-hakeminen/',
          linkLabel: 'asentopuulaaki.fi：住宅への申込み',
          event: 'asentopuulaaki',
        },
        {
          title: '空き住戸',
          body: '同社の住戸検索では、空いている住戸と間もなく空く住戸が、家賃と入居可能日とともに表示されます。一覧は同社の公式サイトで更新されるので、申し込む前に確認してください。',
          href: 'https://www.asentopuulaaki.fi/asuntohaku/',
          linkLabel: 'asentopuulaaki.fi：住戸検索',
          event: 'asentopuulaaki_vapaat',
        },
        {
          title: 'OikotieとVuokraovi',
          body: '自治体「ソダンキュラ」で探すと、民間の掲載が見つかります。自治体の住まいのページには自社以外の貸主は挙げられていないため、民間の住戸はポータルサイトで探します。',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/sodankyl%C3%A4',
          linkLabel: 'Oikotie：ソダンキュラの賃貸',
          event: 'oikotie',
        },
      ],
    },
    {
      id: 'student-loan',
      kicker: '移住者の方へ',
      h2: '最近の卒業者に最大€5,800。',
      paras: [
        'ソダンキュラ、イナリ、ウツヨキは、移り住んでフルタイムの50%以上、または起業家として働く最近の卒業者に、学生ローンの補償を行っています。補償額は最大€5,800で、最長三年にわたり、12か月ごとの期間でさかのぼって支払われます（ソダンキュラ町）。',
        '対象は、職業系の後期中等教育の資格、または応用科学大学か大学の学位に対する学生ローンで、過去二年以内に卒業している必要があります。申込みの処理が始まるのは2027年1月で、Yleによると申込用紙は2026年12月1日に開きます（Yle、2026年9月1日）。',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Kelaの住宅手当',
      h2: 'ソダンキュラはKelaの「その他の自治体」に入ります。',
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
      kicker: '仕事',
      h2: '駐屯地は拡大し、鉱山は2034年に閉鎖される。',
      bullets: [
        'イェーガー旅団は約400人を雇用し、年に約2,200人の徴兵者を訓練しています（フィンランド陸軍）。ソダンキュラ駐屯地では、700人近い徴兵者のための兵舎が建設中で、2028年初めまでの完成予定です（Yle、2026年4月2日）。',
        'Bolidenが運営するKevitsa鉱山は2026年5月に77人の人員削減を発表し、鉱山は2034年に閉鎖される予定です（Yle、2026年5月26日）。',
        'Anglo Americanが計画するSakatti鉱山は2032年ごろの操業開始を目指していますが、事業は許認可の手続き中で、フィンランド自然保護協会ラップランド支部はSakattiの決定を裁判で争っています（Anglo American、Yle、2026年6月18日）。',
        '自治体は、Tähteläの科学コミュニティとルオストのフェル・リゾートも挙げています（sodankyla.fi）。ルオストは中心の村から38kmです（OpenStreetMap）。',
      ],
    },
    {
      id: 'everyday',
      kicker: '日々の暮らし',
      h2: 'ここの極夜は四日間です。',
      bullets: [
        'ソダンキュラの極夜は、クリスマス直前のわずか四日間です（フィンランド気象研究所）。',
        '最寄りの空港は93km離れたキッティラで、ロヴァニエミ中心部までは130kmです（OpenStreetMap）。',
        '学生の方へ：REDUはソダンキュラに学生寮を持っており、2026年3月に自治体は、Asentopuulaakiの大きな住戸で、高校生と成人学生のための寮を設けると発表しました（redu.fi、ソダンキュラ町、2026年3月5日）。',
      ],
    },
    {
      id: 'contract',
      kicker: '契約',
      h2: '解約予告は一か月です。',
      bullets: [
        'Asentopuulaakiでは、解約予告期間は暦月で一か月で、敷金は退去の約二週間後に返還されます（Asentopuulaaki）。',
        '敷金は家賃三か月分が上限です（住宅賃貸借法 第8条）。',
        '2026年10月1日からは、賃貸借の終了後14日以内に、敷金を返還するか、返還しない理由を書面で説明しなければなりません（Rakli）。',
      ],
    },
  ],
  faqs: [
    {
      q: 'ソダンキュラの自治体住宅には、どう申し込みますか？',
      a: 'Asentopuulaaki Oyのオンライン申込みで、給与明細などの収入の証明を添付します。信用情報はSuomen Asiakastietoで確認され、支払いの延滞があると不利になります（Asentopuulaaki）。',
    },
    {
      q: 'ソダンキュラの賃貸住宅はいくらですか？',
      a: '自治体の会社の古い集合住宅でm²あたり約€10、長屋や外廊下式の住宅では多くが€10〜12.50、2025年に完成したKäpyriihiでは€18で、42m²の二部屋の住戸なら月額€756です（Asentopuulaaki、2026年11月15日）。中心部の民間賃貸の二部屋の住戸は、2025年10月〜12月の平均がm²あたり€11.73でした（フィンランド統計局）。',
    },
    {
      q: 'ソダンキュラに住宅不足はありますか？',
      a: '長年ありました。自治体によると、新しい建物が完成して和らぎ（2025年7月2日）、自治体の会社の住戸検索には、空いている住戸と間もなく空く住戸が載っています（Asentopuulaaki）。',
    },
    {
      q: '学生ローンの補償を受けられるのは誰ですか？',
      a: 'ソダンキュラ、イナリ、ウツヨキに移り住み、フルタイムの50%以上、または起業家として働く最近の卒業者です。補償額は三年間で最大€5,800で、申込みの処理が始まるのは2027年1月です（ソダンキュラ町）。',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: '最初の数日',
    h2: '内見は自分の目で。',
    lead: 'パートナーの検索では、ソダンキュラとルオストの空室とアパートメントを本日の料金で確認できます。',
    chips: [
      { label: 'ソダンキュラ', destination: 'Sodankylä', sid: 'rentals_sodankyla_first_weeks' },
      { label: 'ルオスト', destination: 'Luosto', sid: 'rentals_luosto_first_weeks' },
    ],
  },
  sources: pickSources('ja', SOURCES, common.sourceLabels),
};

export default copy;
