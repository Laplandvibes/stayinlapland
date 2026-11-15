/**
 * Kiina (yksinkertaistettu) (zh-CN) · town-kittila-levi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/kittila-levi.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'kittila', 'yle2023', 'yle2017', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: '基蒂莱与莱维租房：市政公寓、季节性租约',
  metaDescription:
    '在基蒂莱和莱维租房：市政的 Kittilän Vuokratalot Oy、度假公寓的季节性租金、季节工的员工住房，以及 Kela 的补贴。',
  breadcrumb: '基蒂莱与莱维',
  hero: {
    eyebrow: '基蒂莱，6,973位居民',
    title: '基蒂莱与莱维租房。',
    subtitle:
      '拉普兰增长最快的市镇之一和它的滑雪度假村：同一套房子，夏天按月收租，冬天按周收费。向哪里申请，什么时候申请。',
  },
  authorNote:
    '人口和增长来自芬兰统计局，Kittilän Vuokratalot Oy 的信息来自市镇和公司自己的页面，莱维的季节性价格来自 Yle，2023年5月25日。已于2026年11月15日核对。',
  intro: [
    '基蒂莱在2025年底有6,973位居民，一年内增长了2.0%，在拉普兰各市镇中增长速度排第二：只有佩尔科森涅米增长得更快，为2.4%（芬兰统计局）。动力来自莱维：2017年，Levin Matkailu Oy 估计度假区将为冬季雇用2,000多名季节工（Yle，2017年10月25日）。',
    '莱维的租房市场随季节而变：市中心附近一套80平方米的阿尔卑斯风格公寓，5月至11月每月750欧元，旺季每周2,000欧元，全年长租每月1,650欧元（Yle，2023年5月25日）。在度假公寓里，您也可能无法登记正式地址。',
    '长期出租的房子在基蒂莱村比在莱维中心更容易找到。市镇的住房由 Kittilän Vuokratalot Oy 出租，申请要在公司网站上以电子方式提交（kittila.fi，Kittilän Vuokratalot）。',
  ],
  sections: [
    {
      id: 'channels',
      kicker: '向谁申请',
      h2: '市属公司、找房网站和莱维群组。',
      band: true,
      cards: [
        {
          title: 'Kittilän Vuokratalot Oy',
          body: '出租市镇自己的住房。办公室在市镇大楼一层（Valtatie 15，99100 Kittilä）。公司只处理通过其网站提交、并附有所需附件的电子申请。它的页面没有说明申请的有效期有多长，请向公司询问。',
          href: 'https://kittila.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot',
          linkLabel: 'kittila.fi：出租住房',
          event: 'kittila_city',
        },
        {
          title: 'Oikotie、Vuokraovi 和 TA-Asunnot',
          body: '基蒂莱市镇下的私人和中介房源；莱维的房源也在同一搜索结果里。TA-Asunnot 在基蒂莱有自己空置的出租公寓。',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kittil%C3%A4',
          linkLabel: 'Oikotie：基蒂莱租房',
          event: 'oikotie',
        },
        {
          title: '员工住房',
          body: '度假村的雇主为员工租下联排住宅和度假公寓，租期覆盖整个雪季，房租从您的工资里扣。请在拿到录用通知的同时，书面询问住房的事。整体情况见季节工住房页面。',
          href: '/seasonal-worker-housing',
          linkLabel: '季节工住房',
          event: 'seasonal_page',
        },
        {
          title: 'Facebook 上的莱维找房群',
          body: '这是山区村庄里最快的渠道，季节工往往在这里找到住处。没有人为这些房源担保：看房之前绝不要付押金，并要求书面合同。',
        },
      ],
    },
    {
      id: 'prices',
      kicker: '租金多少',
      h2: '地区数字与莱维这个例外。',
      table: {
        caption: '平均租金（欧元/平方米/月），自由市场出租公寓，2026年第3季度',
        head: ['', '拉普兰（地区）', '全国'],
        rows: [
          ['单间公寓', '17.25', '20.49'],
          ['两室公寓', '12.87', '15.07'],
          ['三室及以上', '11.08', '13.98'],
          ['所有公寓', '13.14', '15.99'],
        ],
        foot: '芬兰统计局，2026年第3季度租金，表15fa。没有单独公布基蒂莱的数字，而莱维的季节性租金根本不在统计里。',
      },
      paras: [
        '<strong>莱维的例子（Yle，2023年5月25日）：</strong>一套80平方米的阿尔卑斯风格公寓，5月至11月每月750欧元 = 每平方米9.38欧元，旺季每周2,000欧元，全年长租每月1,650欧元 = 每平方米20.63欧元。同一套房子，夏天比地区平均值便宜，全年长租则比全国单间公寓的价格还贵。',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Kela 住房补贴',
      h2: '基蒂莱属于 Kela 的“其他市镇”。',
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
        foot: 'Kela，2026年一般住房补贴。补贴最多为认可住房费用的70%。住在没有登记地址的度假公寓里，则不满足条件。',
      },
    },
    {
      id: 'when',
      kicker: '什么时候申请',
      h2: '夏天，在按周计价开始之前。',
      bullets: [
        '度假公寓只有在5月至11月才能按月出租，旺季的价格是按周计算的（Yle，2023年5月25日）。要找雪季的住房，请在夏天找好。',
        '请在雪季之前提交市属公司的申请，并向公司问清楚申请的有效期有多长。',
        '押金最多为三个月租金（《住宅租赁法》第8条），自2026年10月1日起，须在租约结束后14天内退还（Rakli）。',
      ],
    },
  ],
  faqs: [
    {
      q: '在莱维去哪里找冬季出租房？',
      a: '最有可能的是找您的雇主：度假村的公司为员工租下联排住宅和度假公寓，租期覆盖整个雪季。在公开市场上，莱维的住房冬季按周出租（Yle，2023年5月25日），所以按月租主要只在5月至11月可行。市属公司在基蒂莱村和莱维的 Sirkka 都有住房（Kittilän Vuokratalot）。',
    },
    {
      q: '怎样申请基蒂莱的市政住房？',
      a: '通过 Kittilän Vuokratalot Oy 在公司网站上的电子申请。没有附上所需附件的不完整申请不会被处理。办公室在市镇大楼一层，Valtatie 15（kittila.fi，Kittilän Vuokratalot）。',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: '最初的几晚',
    h2: '在房子空出来之前。',
    lead: '合作伙伴的搜索页面会按今天的价格显示莱维和基蒂莱的空房与公寓。',
    chips: [
      { label: '莱维', destination: 'Levi', sid: 'rentals_levi_first_weeks' },
      { label: '基蒂莱', destination: 'Kittilä', sid: 'rentals_kittila_first_weeks' },
    ],
  },
  sources: pickSources('zh-CN', SOURCES, common.sourceLabels),
};

export default copy;
