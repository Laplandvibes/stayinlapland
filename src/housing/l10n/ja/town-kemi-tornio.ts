/**
 * Japani (ja) · town-kemi-tornio. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/kemi-tornio.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'kemi', 'itatuuli', 'keminmaa', 'keminmaaVuokra', 'tornio', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'ケミ、トルニオ、ケミンマーの賃貸：自治体の住宅',
  metaDescription:
    'ラップランドの海沿い、ケミ、トルニオ、ケミンマーで部屋を借りる方へ。ItätuuliやTornion Krunniなどの自治体住宅会社、民間の仲介会社、Kelaの支援をご案内します。',
  breadcrumb: 'ケミとトルニオ',
  hero: {
    eyebrow: 'シーラップランドの沿岸部',
    title: 'ケミ、トルニオ、ケミンマーの賃貸。',
    subtitle:
      '海沿いの双子の町では、自治体の住宅会社が数百戸を持ち、申込みはオンラインで行います。どこから始め、家賃はいくらかをご案内します。',
  },
  authorNote:
    '住宅会社の住戸数はケミ、トルニオ、ケミンマーの各自治体の公式ページ、申込みの条件は各社の公式ページ、m²あたりの家賃はフィンランド統計局（ラップランド地域 2026年第3四半期）から。2026年11月15日に確認しました。',
  intro: [
    '住民はケミが19,339人、トルニオが20,823人、ケミンマーが7,576人です（フィンランド統計局、2025年12月31日）。三つの自治体は互いに隣り合っているため、住まいと職場が別の自治体になることもあります。',
    '最初に当たるのは自治体の住宅会社です。ケミ市の自治体住宅は、市内最大の賃貸住宅事業者Kiinteistö Oy Itätuuliが運営しており（kemi.fi）、住戸は中心部から五キロメートル以内にあります（itatuuli.fi）。Keminmaan Vuokra-asunnot Oyは18棟、300戸強を持っています（keminmaa.fi）。どちらの会社も独自のオンライン申込みがあります。トルニオでは、市の住宅をTornion Krunni Oyが管理しており、これにはTornion Vuokra-asunnot Oyも含まれます（tornio.fi）。',
    'フィンランド統計局の現在の家賃表には、ケミとトルニオ単独の行がないため、以下ではラップランド地域の数字を示します。ロヴァニエミの数字は、専用のページにあります。',
  ],
  sections: [
    {
      id: 'prices',
      kicker: '家賃の目安',
      h2: 'ラップランド地域のm²あたり家賃、2026年7月〜9月。',
      table: {
        caption: '平均家賃 €/m²/月、民間賃貸住宅、2026年第3四半期',
        head: ['', 'ラップランド（地域全体）', 'ロヴァニエミ', '全国'],
        rows: [
          ['ワンルーム', '17.25', '18.63', '20.49'],
          ['二部屋の住戸', '12.87', '14.40', '15.07'],
          ['三部屋以上', '11.08', '12.29', '13.98'],
          ['全住戸', '13.14', '14.63', '15.99'],
        ],
        foot: 'フィンランド統計局、2026年第3四半期の家賃、表15fa。地域の数字にはロヴァニエミが含まれるため、ケミとトルニオの水準はおそらくそれより低くなりますが、現在の表では単独の数字は分かりません。',
      },
      paras: [
        '<strong>地域平均で見た計算例：</strong>30m²のワンルームは月額約€520（17.25 × 30）、50m²の二部屋の住戸は約€640（12.87 × 50）、75m²の三部屋の住戸は約€830（11.08 × 75）です。',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Kelaの住宅手当',
      h2: 'ケミ、トルニオ、ケミンマーはKelaの「その他の自治体」に入ります。',
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
      id: 'channels',
      kicker: '申込み先',
      h2: 'まず自治体の会社、次に仲介会社。',
      band: true,
      cards: [
        {
          title: 'ケミ：Kiinteistö Oy Itätuuli',
          body: '市の賃貸住宅です。Itätuuliはケミ最大の賃貸住宅事業者で、住戸は中心部から五キロメートル以内にあります。独自のオンライン申込みの有効期間は四か月で、敷金はかかりません。Visit Kemiの事業者向け情報ページには、民間の仲介会社も載っています：Forenom、Habita Kemi、HVC Group、Kiinteistömaailma、KVP Group、OP Koti Kemi、Pihlajaniemi & Co、Solecco、AJK Asunnot。',
          href: 'https://www.kemi.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
          linkLabel: 'kemi.fi：賃貸住宅',
          event: 'kemi_city',
        },
        {
          title: 'Keminmaan Vuokra-asunnot Oy',
          body: '自治体が所有する住宅会社で、18棟、300戸強があり、水道代と暖房費は家賃に含まれます。独自のオンライン申込みの有効期間は三か月で、敷金は家賃一か月分です。',
          href: 'https://www.keminmaanvuokra-asunnot.fi/asunnonhaku.html',
          linkLabel: 'Keminmaan Vuokra-asunnot：申込み方法',
          event: 'keminmaa',
        },
        {
          title: 'トルニオ：Tornion Krunni Oy',
          body: 'Tornion Vuokra-asunnot Oy、Tornion Oppilasasuntola Oy、Tornion Palveluasunnot Oyを管理しています。市が直接所有する住戸は、市の施設部門も扱います。住まいに関する問合せは電話で受け付けており、市のページでは民間の貸主や仲介会社も紹介されています。',
          href: 'https://www.tornio.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
          linkLabel: 'tornio.fi：賃貸住宅',
          event: 'tornio_city',
        },
        {
          title: 'OikotieとVuokraovi',
          body: '個人や仲介会社の掲載です。ケミ、トルニオ、ケミンマーは一つずつ検索してください。ポータルサイトでは、自治体ごとに検索が分かれています。',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kemi',
          linkLabel: 'Oikotie：ケミの賃貸',
          event: 'oikotie',
        },
      ],
    },
    {
      id: 'contract',
      kicker: '契約',
      h2: '知っておきたい法律の二つの規定。',
      bullets: [
        '敷金は家賃三か月分が上限です（住宅賃貸借法第8条）。',
        '2026年10月1日からは、賃貸借の終了後14日以内に、敷金を返還するか、返還しない理由を書面で説明しなければなりません（Rakli）。',
      ],
    },
  ],
  faqs: [
    {
      q: 'ケミの自治体住宅には、どう申し込みますか？',
      a: 'Kiinteistö Oy Itätuuli独自のオンライン申込みで、有効期間は四か月です。Itätuuliはケミ最大の賃貸住宅事業者で、住戸は中心部から五キロメートル以内にあり、すべて敷金なしで貸しています（itatuuli.fi）。Keminmaan Vuokra-asunnot Oyには別の申込みがあります。',
    },
    {
      q: 'ケミとトルニオの家賃はいくらですか？',
      a: 'フィンランド統計局の現在の表には、これらの町だけの行がありません。ラップランド地域の平均は2026年7月〜9月にm²あたり€13.14（ワンルーム17.25、二部屋の住戸12.87）で、その数字には家賃の高いロヴァニエミが含まれています。',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: '最初の数週間',
    h2: '内見は自分の目で。',
    lead: '内見のために泊まる場所を予約して、署名の前に住戸を見ましょう。',
    chips: [
      { label: 'ケミ', destination: 'Kemi', sid: 'rentals_kemi_first_weeks' },
      { label: 'トルニオ', destination: 'Tornio', sid: 'rentals_tornio_first_weeks' },
    ],
  },
  sources: pickSources('ja', SOURCES, common.sourceLabels),
};

export default copy;
