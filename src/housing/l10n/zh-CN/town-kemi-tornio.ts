/**
 * Kiina (yksinkertaistettu) (zh-CN) · town-kemi-tornio. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/kemi-tornio.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'kemi', 'itatuuli', 'keminmaa', 'keminmaaVuokra', 'tornio', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: '凯米、托尔尼奥与凯米昂马租房：市政公寓',
  metaDescription:
    '在拉普兰海岸的凯米、托尔尼奥和凯米昂马租房：Itätuuli、Tornion Krunni 等市政住房公司、私人中介，以及 Kela 的补贴。',
  breadcrumb: '凯米与托尔尼奥',
  hero: {
    eyebrow: '海滨拉普兰的海岸',
    title: '凯米、托尔尼奥与凯米昂马租房。',
    subtitle:
      '海岸边的双子城，市政住房公司握有数百套住房，申请在线提交。从哪里入手，租金是多少。',
  },
  authorNote:
    '住房公司的房屋数量来自凯米、托尔尼奥和凯米昂马各市镇自己的页面，申请条件来自各公司自己的页面，每平方米租金来自芬兰统计局（拉普兰地区，2026年第3季度）。已于2026年11月15日核对。',
  intro: [
    '凯米有19,339位居民，托尔尼奥有20,823位，凯米昂马有7,576位（芬兰统计局，2025年12月31日）。这三个市镇彼此相邻，所以住的地方和工作的地方可能不在同一个市镇。',
    '市政住房公司是首选的去处：凯米的市政住房由 Kiinteistö Oy Itätuuli 经营（kemi.fi），它是该镇最大的出租住房提供者，房源都在距市中心五公里以内（itatuuli.fi）。Keminmaan Vuokra-asunnot Oy 有18处房产、300多套住房（keminmaa.fi）。两家公司各有自己的在线申请。托尔尼奥的市属住房由 Tornion Krunni Oy 管理，其中包括 Tornion Vuokra-asunnot Oy（tornio.fi）。',
    '芬兰统计局当前的租金表没有单独列出凯米或托尔尼奥，所以下面显示的是拉普兰地区的数字。罗瓦涅米的数字见它自己的页面。',
  ],
  sections: [
    {
      id: 'prices',
      kicker: '租金多少',
      h2: '2026年7月至9月拉普兰地区每平方米租金。',
      table: {
        caption: '平均租金（欧元/平方米/月），自由市场出租公寓，2026年第3季度',
        head: ['', '拉普兰（地区）', '罗瓦涅米', '全国'],
        rows: [
          ['单间公寓', '17.25', '18.63', '20.49'],
          ['两室公寓', '12.87', '14.40', '15.07'],
          ['三室及以上', '11.08', '12.29', '13.98'],
          ['所有公寓', '13.14', '14.63', '15.99'],
        ],
        foot: '芬兰统计局，2026年第3季度租金，表15fa。地区数字包含罗瓦涅米，所以凯米–托尔尼奥的水平很可能低于它；当前的表没有单独列出。',
      },
      paras: [
        '<strong>按地区平均值的算例：</strong>一套30平方米的单间公寓每月约520欧元（17.25 × 30）；一套50平方米的两室公寓约640欧元（12.87 × 50）；一套75平方米的三室公寓约830欧元（11.08 × 75）。',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Kela 住房补贴',
      h2: '凯米、托尔尼奥和凯米昂马属于 Kela 的“其他市镇”。',
      table: {
        caption: '2026年最高住房费用，欧元/月，Kela 分组“其他市镇”',
        head: ['家庭人数', '最高住房费用'],
        rows: [
          ['1人', '394'],
          ['2人', '574'],
          ['3人', '734'],
          ['4人', '875'],
          ['每多一人', '+129'],
        ],
        foot: 'Kela，2026年一般住房补贴。补贴最多为认可住房费用的70%；低于15欧元的补贴不发放。',
      },
    },
    {
      id: 'channels',
      kicker: '向谁申请',
      h2: '先找市政公司，再找中介。',
      band: true,
      cards: [
        {
          title: '凯米：Kiinteistö Oy Itätuuli',
          body: '市属出租住房。Itätuuli 是凯米最大的出租住房提供者，房源都在距市中心五公里以内。它自己的在线申请有效期为四个月，不收押金。Visit Kemi 的商业信息页面还列出了私人中介：Forenom、Habita Kemi、HVC Group、Kiinteistömaailma、KVP Group、OP Koti Kemi、Pihlajaniemi & Co、Solecco 和 AJK Asunnot。',
          href: 'https://www.kemi.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
          linkLabel: 'kemi.fi：出租住房',
          event: 'kemi_city',
        },
        {
          title: '凯米昂马：Keminmaan Vuokra-asunnot Oy',
          body: '市镇所有的住房公司：18处房产、300多套住房，房租已含水费和取暖费。它自己的在线申请有效期为三个月，押金为一个月租金。',
          href: 'https://www.keminmaanvuokra-asunnot.fi/asunnonhaku.html',
          linkLabel: 'Keminmaan Vuokra-asunnot：申请方式',
          event: 'keminmaa',
        },
        {
          title: '托尔尼奥：Tornion Krunni Oy',
          body: '管理 Tornion Vuokra-asunnot Oy、Tornion Oppilasasuntola Oy 和 Tornion Palveluasunnot Oy；市政府的设施部门也负责市政府直接持有的住房。住房咨询请打电话，市政府的页面也指向私人房东和中介。',
          href: 'https://www.tornio.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
          linkLabel: 'tornio.fi：出租住房',
          event: 'tornio_city',
        },
        {
          title: 'Oikotie 和 Vuokraovi',
          body: '私人和中介房源。请把凯米、托尔尼奥和凯米昂马当作三个独立的市镇来搜索：它们是三个各自独立的市镇搜索。',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kemi',
          linkLabel: 'Oikotie：凯米租房',
          event: 'oikotie',
        },
      ],
    },
    {
      id: 'contract',
      kicker: '合同',
      h2: '值得了解的两条法律规定。',
      bullets: [
        '押金最多为三个月租金（《住宅租赁法》第8条）。',
        '自2026年10月1日起，押金必须退还，或在租约结束后14天内书面说明扣留的理由（Rakli）。',
      ],
    },
  ],
  faqs: [
    {
      q: '怎样申请凯米的市政住房？',
      a: '通过 Kiinteistö Oy Itätuuli 自己的在线申请，有效期为四个月。Itätuuli 是凯米最大的出租住房提供者，房源都在距市中心五公里以内，全部房源都不收押金（itatuuli.fi）。Keminmaan Vuokra-asunnot Oy 有自己的申请。',
    },
    {
      q: '凯米和托尔尼奥的房租是多少？',
      a: '芬兰统计局当前的表没有单独列出这两个镇。2026年7月至9月，拉普兰地区的平均值为每平方米13.14欧元（单间公寓17.25，两室公寓12.87），而这个数字包含了更贵的罗瓦涅米。',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: '最初的几周',
    h2: '亲自去看房。',
    lead: '订一个看房期间落脚的地方，签约之前亲眼看看房子。',
    chips: [
      { label: '凯米', destination: 'Kemi', sid: 'rentals_kemi_first_weeks' },
      { label: '托尔尼奥', destination: 'Tornio', sid: 'rentals_tornio_first_weeks' },
    ],
  },
  sources: pickSources('zh-CN', SOURCES, common.sourceLabels),
};

export default copy;
