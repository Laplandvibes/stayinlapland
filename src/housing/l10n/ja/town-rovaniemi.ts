/**
 * Japani (ja) · town-rovaniemi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/rovaniemi.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'rovaniemi', 'das', 'yle2025das', 'yle2026rovaniemi', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'ロヴァニエミの賃貸：家賃、貸主、申込み方法',
  metaDescription:
    'ロヴァニエミで部屋を借りる方へ。m²あたりの家賃（フィンランド統計局 2026年）、市が掲載する貸主、学生向けのDAS、Kelaの住宅手当、申込みの時期をまとめました。',
  breadcrumb: 'ロヴァニエミ',
  hero: {
    eyebrow: 'ロヴァニエミ、住民66,191人',
    title: 'ロヴァニエミの賃貸。',
    subtitle:
      'ラップランド最大の都市で、住民は66,191人。家賃の目安、申込み先、申込みの時期をご案内します。',
  },
  authorNote:
    'm²あたりの家賃はフィンランド統計局（2026年7月〜9月）、貸主はロヴァニエミ市の住まいのページ、住宅不足の数字はYleから。2026年11月15日に確認しました。',
  intro: [
    'ロヴァニエミの住民は66,191人（フィンランド統計局、2025年12月31日）で、ワンルームをめぐる競争が激しい街です。学生住宅財団DASには2026年夏に約550件の緊急の申込みがあり、前年より15%増えました。申込者の90%近くがワンルームを希望し、市内のワンルームは冬のシーズンに観光客向けの短期賃貸に回されています（Yle、2026年7月27日）。DASの代表によると、8月と9月は申込者全員に住戸を提供できません。',
    'ラップランドに約250人を連れてきた人材会社は、ロヴァニエミ市内の十か所ほどに分けて住まわせました（Yle、2026年3月9日）。季節労働者、学生、観光客が、みな同じ小さな住戸を狙っています。',
    '朗報は価格です。ロヴァニエミの平均家賃はm²あたり€14.63で、全国平均の€15.99を下回っています（フィンランド統計局 2026年第3四半期）。以下に、広さ別の数字と申込み先をまとめます。',
  ],
  sections: [
    {
      id: 'prices',
      kicker: '家賃の目安',
      h2: 'ロヴァニエミのm²あたり家賃、2026年7月〜9月。',
      table: {
        caption: '平均家賃 €/m²/月、民間賃貸住宅、ロヴァニエミ 2026年第3四半期',
        head: ['', '全契約', '新規契約', '全国'],
        rows: [
          ['ワンルーム', '18.63', '20.14', '20.49'],
          ['二部屋の住戸', '14.40', '16.40', '15.07'],
          ['三部屋以上', '12.29', '13.66', '13.98'],
          ['全住戸', '14.63', '15.93', '15.99'],
        ],
        foot: 'フィンランド統計局、2026年第3四半期の家賃、表15fa。新規契約とは当四半期中に始まった契約のことで、今まさに空き住戸に提示されている家賃を示します。',
      },
      paras: [
        '<strong>計算例：</strong>30m²のワンルームは月額約€560（18.63 × 30）、新規契約では約€600（20.14 × 30）。50m²の二部屋の住戸は約€720（14.40 × 50）。75m²の三部屋の住戸は約€920（12.29 × 75）です。水道代と電気代は通常、別にかかります。',
        'ワンルームの新規契約の価格m²あたり€20.14は、ロヴァニエミのワンルーム全体の平均€18.63より€1.51（8%）高くなっています。今まさに空くワンルームは、すでに貸されているものより高いのです。全国平均と比べると、ロヴァニエミはどの広さでも安くなっています。',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Kelaの住宅手当',
      h2: 'ロヴァニエミは上限額が高めです。',
      lead:
        '一般住宅手当は、認定された住居費の最大70%です。ロヴァニエミは、Kelaの大規模自治体24のグループに入っているため、認定される住居費の上限額が、ラップランドのほかの自治体より高く設定されています（Kela 2026年）。',
      table: {
        caption: '2026年の住居費の上限額、€/月、Kelaの大規模自治体24のグループ',
        head: ['世帯人数', '住居費の上限額'],
        rows: [
          ['1人', '447'],
          ['2人', '652'],
          ['3人', '828'],
          ['4人', '981'],
          ['一人増えるごとに', '+134'],
        ],
        foot: 'Kela、一般住宅手当 2026年。手当の額が€15未満の場合は支給されません。所得があると、基礎控除を通じて手当が減ります。',
      },
    },
    {
      id: 'channels',
      kicker: '申込み先',
      h2: '市のリスト、学生財団、ポータルサイト。',
      lead: 'ロヴァニエミ市の住まいのページには貸主と物件検索サービスが並んでいますが、市独自の自治体住宅会社は挙げられていません。',
      band: true,
      cards: [
        {
          title: 'ロヴァニエミ市：貸主',
          body: '市のページでは、法人の貸主としてKAS asunnot、M2-Kodit、Tarveasunnot、Avara、Lumo、物件検索サービスとしてOikotie、Vuokraovi、Qasaが紹介されています。貸主ごとに独自のオンライン申込みがあるので、複数に同時に申し込みましょう。',
          href: 'https://www.rovaniemi.fi/Asuminen-ja-ymparisto/Asuminen',
          linkLabel: 'rovaniemi.fi：住まい',
          event: 'rovaniemi_city',
        },
        {
          title: 'DAS：学生向け',
          body: 'Domus Arctica財団には約1,700戸があり、うち700戸がワンルーム、460戸が二部屋の住戸で、平均家賃はm²あたり€12.50です（Yle、2026年7月27日）。申込みは随時受け付けられ、有効期間は三か月で、8月と9月は新入生が優先されます。ロヴァニエミで義務教育修了後の教育機関に通っていれば申し込めます。',
          href: 'https://www.das.fi/en/apply/applying-info',
          linkLabel: 'das.fi：申込み案内',
          event: 'das',
        },
        {
          title: 'KAS asunnot',
          body: 'ロヴァニエミの複数の地区にある賃貸住宅です（市のリストより）。オンラインで申し込みます。',
          href: 'https://kas.fi/rovaniemen-vuokrattavat-kas-kodit/',
          linkLabel: 'kas.fi：ロヴァニエミ',
          event: 'kas',
        },
        {
          title: 'Lumo',
          body: 'ロヴァニエミに建物を持つ法人の貸主です。標準的な契約、オンライン申込み、早い入居が特徴です。',
          href: 'https://lumo.fi/en/rental-apartments',
          linkLabel: 'lumo.fi：賃貸アパート',
          event: 'lumo',
        },
        {
          title: 'OikotieとVuokraovi',
          body: '全国規模のポータルサイトで、個人や仲介会社の掲載の大半が見つかります。地区ではなく、ロヴァニエミという自治体で絞り込むと、Ounasvaara、Saarenkylä、中心部の外にある住戸も表示されます。',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/rovaniemi',
          linkLabel: 'Oikotie：ロヴァニエミの賃貸',
          event: 'oikotie',
        },
        {
          title: 'NAL Rovaniemi：30歳未満',
          body: 'フィンランド若者住宅協会のロヴァニエミ支部は、30歳未満向けの若者住宅を提供しています（市のリストより）。DASを利用できず、学生でもない場合の選択肢です。',
          href: 'https://www.rovaniemi.fi/Asuminen-ja-ymparisto/Asuminen',
          linkLabel: 'rovaniemi.fi：若者向け住宅',
          event: 'nal',
        },
      ],
    },
    {
      id: 'when',
      kicker: '申込みの時期',
      h2: '一年に二度の混雑。',
      bullets: [
        '<strong>8月〜9月</strong>が最も厳しい時期です。DASは申込者全員を入居させられず、民間賃貸のワンルームも不足します（Yle、2026年7月27日）。',
        '<strong>11月〜12月：</strong>一部のワンルームは、冬のシーズンに観光客向けの短期賃貸に回されます。定期借家契約は10月下旬に終わることが多いです（Yle、2026年7月27日）。',
        '<strong>春には</strong>、冬のシーズン向けに貸されていたワンルームが戻ってきます。',
        '<strong>敷金</strong>は家賃三か月分が上限です（住宅賃貸借法 第8条）。2026年10月1日からは、賃貸借の終了後14日以内に返還しなければなりません（Rakli）。',
      ],
    },
  ],
  faqs: [
    {
      q: 'ロヴァニエミのワンルームはいくらですか？',
      a: 'フィンランド統計局によると、全契約でm²あたり€18.63、新規契約では€20.14です（2026年第3四半期）。つまり30m²のワンルームなら、電気代を除いて月額約€560〜600になります。',
    },
    {
      q: 'ロヴァニエミで賃貸住宅を見つけるのは難しいですか？',
      a: 'ワンルームは8月〜9月に入手が難しくなります。DASが申込者全員を入居させられず（Yle、2026年7月27日）、民間賃貸のワンルームも不足するためです。二部屋、三部屋の住戸のほうが探しやすいです。',
    },
    {
      q: 'ロヴァニエミに行かずに申し込めますか？',
      a: '市が掲載しているすべての貸主とDASには、オンラインで申し込めます。それでも、住戸は自分の目で見るか、ビデオ内見を頼みましょう。敷金は契約書に署名してから払ってください。',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: '最初の数週間',
    h2: '住戸を見て回るあいだは、ホテルかアパートホテルで。',
    lead: '署名の前に、住戸を実際に見てみましょう。パートナーの検索では、ロヴァニエミの空室を本日の料金で確認できます。',
    chips: [
      { label: 'ロヴァニエミ', destination: 'Rovaniemi', sid: 'rentals_rovaniemi_first_weeks' },
    ],
  },
  sources: pickSources('ja', SOURCES, common.sourceLabels),
};

export default copy;
