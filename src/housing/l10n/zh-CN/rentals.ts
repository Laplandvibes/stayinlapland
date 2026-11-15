/**
 * Kiina (yksinkertaistettu) (zh-CN) · rentals. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
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
  metaTitle: '拉普兰租房：罗瓦涅米、莱维、凯米–托尔尼奥',
  metaDescription:
    '芬兰拉普兰长期租房指南，涵盖罗瓦涅米、凯米与托尔尼奥、莱维和伊纳里：每平方米租金（芬兰统计局）、押金与 Kela 住房补贴。',
  breadcrumb: '租房',
  hero: {
    eyebrow: '在拉普兰租房',
    title: '在拉普兰租一个家。',
    subtitle:
      '去哪里找出租公寓、要花多少钱、Kela 能补贴多少。按城镇逐一说明。',
  },
  authorNote:
    '每平方米租金：芬兰统计局租金统计，自由市场出租公寓，2026年7月至9月。市政住房公司的信息于2026年11月15日在各市镇和公司自己的网站上核对。',
  intro: [
    '在拉普兰，出租公寓来自三个渠道：市镇自己的住房公司、全国性的找房网站，或本地的社群。先从市镇的住房公司开始。它们拥有数百套住房，例如凯米昂马300多套、索丹屈莱约720套、凯米耶尔维560套、伊纳里500多套，而且即使眼下没有空房，您也可以先提交申请。',
    '价格取决于您搬到哪里。在罗瓦涅米，一套30平方米的单间公寓平均月租约560欧元，拉普兰其他地方更低。在山区村庄，租金随季节而变，所以过冬的话，先问问您的雇主有没有员工住房。',
  ],
  sections: [
    {
      id: 'towns',
      kicker: '房子在哪里',
      h2: '按城镇逐一说明。',
      lead: '每个城镇都有单独的页面：市政住房公司及申请方式、租金水平和 Kela 的补贴上限。于拉斯的员工住房见季节工住房页面。',
      band: true,
      cards: [
        {
          title: '罗瓦涅米',
          image: { src: '/images/housing-rovaniemi-card-talvikatu.webp', alt: '1月的罗瓦涅米，积雪的街道上有公寓楼和行人' },
          body:
            '市政府的页面列出了房东 KAS asunnot、M2-Kodit、Tarveasunnot、Avara 和 Lumo，以及找房服务 Oikotie、Vuokraovi 和 Qasa。学生向 Domus Arctica 基金会 DAS 申请（约1,700套住房，其中700套为单间公寓）；30岁以下的人可向 NAL Rovaniemi 申请。DAS 的申请有效期为三个月，8月和9月新生优先。',
          href: '/rentals/rovaniemi',
          linkLabel: '罗瓦涅米租房',
        },
        {
          title: '凯米、凯米昂马和托尔尼奥',
          image: { src: '/images/housing-kemi-card-kaupungintalo.webp', alt: '1月一个积雪的早晨，凯米市政厅' },
          body:
            '凯米的市政住房由 Kiinteistö Oy Itätuuli 经营，它是该镇最大的出租住房提供者，房源都在距市中心五公里以内。Keminmaan Vuokra-asunnot Oy 有300多套住房，两家公司各有自己的在线申请。托尔尼奥的市属住房由 Tornion Krunni Oy（Tornion Vuokra-asunnot Oy）管理。',
          href: '/rentals/kemi-tornio',
          linkLabel: '凯米、托尔尼奥和凯米昂马租房',
        },
        {
          title: '凯米耶尔维',
          image: { src: '/images/housing-kemijarvi-card-kerrostalo.webp', alt: '7月傍晚，凯米耶尔维的一栋公寓楼和一棵老松树' },
          body:
            '市属两家房产公司拥有560套出租住房，预算的目标是其中80–85%有人入住，所以确实有空房。申请有效期为四个月。Vuostimo 联排住宅距 Pyhätunturi 14公里。',
          href: '/rentals/kemijarvi',
          linkLabel: '凯米耶尔维租房',
        },
        {
          title: '索丹屈莱',
          image: { src: '/images/housing-sodankyla-jaamerentie.webp', alt: '9月的 Jäämerentie，索丹屈莱村的主街' },
          body:
            'Asentopuulaaki Oy 经营市镇约720套住房，公司的找房页面会显示任一时点空置或即将空出的住房。较老的楼房每平方米约9–12.50欧元，2025年落成的 Käpyriihi 为18欧元。',
          href: '/rentals/sodankyla',
          linkLabel: '索丹屈莱租房',
        },
        {
          title: '基蒂莱与莱维',
          image: { src: '/images/housing-kittila-levi-card-kyla.webp', alt: '11月从莱维山顶俯瞰莱维村，远处有湖泊和山峦' },
          body:
            'Kittilän Vuokratalot Oy 出租市镇自己的住房，办公室在市镇大楼一层（Valtatie 15）。申请在公司网站上在线提交。莱维的度假公寓主要在5月至11月改为按月出租；冬季，同一套公寓按周出租。',
          href: '/rentals/kittila-levi',
          linkLabel: '基蒂莱与莱维租房',
        },
        {
          title: '伊纳里、伊瓦洛和萨利色尔卡',
          image: { src: '/images/housing-ivalo-joki.webp', alt: '夏日傍晚，隔着伊瓦洛河望向伊瓦洛' },
          body:
            'Inarin Vuokra-asunnot Oy 在伊瓦洛、伊纳里、萨利色尔卡、Nellim 和 Sevettijärvi 有500多套住房。市镇的页面还列出了私人房东（Bilto、Ivalon vuokra-asunnot、IvaloCenter、Rakennusliike Holmberg、Uni Kodit）以及 Facebook 上的索丹屈莱–伊纳里–乌茨约基租房群。',
          href: '/rentals/ivalo-inari',
          linkLabel: '伊瓦洛与伊纳里租房',
        },
      ],
    },
    {
      id: 'portals',
      kicker: '找房网站与社群',
      h2: '渠道与芬兰其他地方相同。',
      bullets: [
        '<a href="https://asunnot.oikotie.fi/vuokra-asunnot/rovaniemi" target="_blank" rel="noopener">Oikotie</a>：全国性网站。请按市镇筛选，而不要只按村庄。',
        '<a href="https://www.vuokraovi.com/vuokra-asunnot/rovaniemi" target="_blank" rel="noopener">Vuokraovi</a>：只有出租房源。',
        '<a href="https://qasa.fi" target="_blank" rel="noopener">Qasa</a>：罗瓦涅米市政府列出的平台，合同在平台上以电子方式签署。',
        '<a href="https://www.tori.fi" target="_blank" rel="noopener">Tori</a>：分类信息网站，也有出租公寓。付款前要核对什么，请看下文。',
        'Facebook 群组：莱维找房、凯米–凯米昂马，以及索丹屈莱–伊纳里–乌茨约基。这是山区村庄里最快的渠道，但没有人为这些信息担保。',
      ],
    },
    {
      id: 'prices',
      kicker: '租金多少',
      h2: '看每平方米的数字，而不是凭感觉。',
      lead:
        '芬兰统计局每季度公布租金。下面是2026年7月至9月自由市场出租公寓的平均租金，单位为每月每平方米欧元。',
      table: {
        caption: '平均租金（欧元/平方米/月），自由市场出租公寓，2026年第3季度',
        head: ['', '罗瓦涅米', '拉普兰（地区）', '全国'],
        rows: [
          ['单间公寓', '18.63', '17.25', '20.49'],
          ['两室公寓', '14.40', '12.87', '15.07'],
          ['三室及以上', '12.29', '11.08', '13.98'],
          ['所有公寓', '14.63', '13.14', '15.99'],
          ['新签租约，所有公寓', '15.93', '13.39', '16.72'],
        ],
        foot: '芬兰统计局，2026年第3季度租金，表15fa。新签租约指该季度内开始的合同，反映的是眼下的要价。',
      },
      paras: [
        '<strong>计算方法：</strong>用每平方米租金乘以建筑面积。在罗瓦涅米，30平方米的单间公寓平均月租约560欧元（18.63 × 30），新签租约约600欧元（20.14 × 30，即罗瓦涅米新签租约单间公寓的数字）。50平方米的两室公寓：每月约720欧元（14.40 × 50）。水电费通常另算。',
        '拉普兰每平方米的租金在各种户型上都低于全国平均水平，其中两室公寓的差距最小。',
      ],
      note: {
        label: '统计里看不到的部分',
        body:
          '滑雪度假村的季节性出租和带家具的短租不在这些数字里。在莱维中心附近，一套80平方米的高山屋公寓，5月至11月每月750欧元，旺季每周2,000欧元，全年包租每月1,650欧元（Yle，2023年5月25日）：同一套房子，三种价格。',
      },
    },
    {
      id: 'housing-allowance',
      kicker: 'Kela 住房补贴',
      h2: '上限取决于市镇。',
      lead:
        '一般住房补贴最多负担认可住房费用的70%，而认可费用设有上限，随市镇和家庭人数而定。Kela 把市镇分为三组：罗瓦涅米属于24个较大市镇的一组，拉普兰其余市镇都归入“其他市镇”，上限更低。',
      table: {
        caption: '2026年最高住房费用，欧元/月',
        head: ['家庭人数', '罗瓦涅米', '拉普兰其他市镇'],
        rows: [
          ['1人', '447', '394'],
          ['2人', '652', '574'],
          ['3人', '828', '734'],
          ['4人', '981', '875'],
          ['每多一人', '+134', '+129'],
        ],
        foot: 'Kela，2026年一般住房补贴。低于15欧元的补贴不发放。',
      },
      paras: [
        '上限的意思是：在罗瓦涅米，单人家庭的房租最多按447欧元计算，即使实际房租是600欧元。其余部分由您自己承担。收入会通过基本自付额减少补贴；Kela 的计算器可以按您自己的情况算出结果。',
      ],
    },
    {
      id: 'contract',
      kicker: '租赁合同',
      h2: '签字之前的五件事。',
      bullets: [
        '<strong>押金最多为三个月租金</strong>（《住宅租赁法》第8条）。通常收一到两个月。',
        '<strong>自2026年10月1日起，押金必须退还</strong>，或在租约结束或交还住房后14天内书面说明扣留的理由（2026年10月1日起生效的修订，Rakli）。',
        '<strong>租客的通知期限为一个月。</strong>对于2026年10月1日或之后签订的合同，房东的通知期限为三个月；如果租期已连续满两年，则为四个月（Rakli）。2026年10月1日之前签订的合同沿用旧的通知期限（Kuluttajaliitto）。',
        '<strong>定期租约对双方都有约束力，直到期满。</strong>做季节工时，雇主提供的住房往往与工作挂钩：请读清楚，如果工作在雪季结束前就结束了，会怎么样。',
        '<strong>几乎总会查信用记录。</strong>有逾期记录不等于租不到房，但这时市政住房公司或私人房东比大型连锁房东更有可能接受。',
      ],
    },
    {
      id: 'before-paying',
      kicker: '付款之前',
      h2: '三条能保住押金的规则。',
      bullets: [
        '在看房之前，或在一段能把房子和钥匙拍进同一画面的视频看房之前，绝不要付押金。',
        '合同要书面形式，并写明房东的姓名及企业编号或个人身份编码。如果您不了解市场，市政住房公司是最稳妥的起点。',
        '带家具的短租不是租赁：度假公寓可能无法登记正式地址，而没有地址会让与各类公司打交道更麻烦，例如信用审查时（Yle，2023年5月25日）。',
      ],
    },
  ],
  faqs: [
    {
      q: '罗瓦涅米的单间公寓多少钱？',
      a: '据芬兰统计局，2026年7月至9月，罗瓦涅米自由市场单间公寓的平均租金为每平方米18.63欧元，新签租约为每平方米20.14欧元。因此一套30平方米的单间公寓每月约560–600欧元，不含电费。',
    },
    {
      q: '没有芬兰信用记录，能在拉普兰租房吗？',
      a: '可以，但选择会少一些。市政住房公司和私人房东会逐案决定，多付一些押金（法律允许最多三个月租金）或找一位担保人会有帮助。大型连锁租赁公司一律会查信用记录。',
    },
    {
      q: '在罗瓦涅米什么时候找房最好？',
      a: '除8月和9月以外的任何月份都好。那时 DAS 无法安置所有申请人，自由市场的单间公寓也很稀缺（Yle，2026年7月27日）。为雪季短租出去的单间公寓，到春天会重新回到市场。',
    },
    {
      q: '为什么莱维的房租冬天比夏天高好几倍？',
      a: '因为在旺季，同一套公寓按周出租。在 Yle 的例子里（2023年5月25日），一套80平方米的高山屋公寓，夏季每月750欧元，冬季每周2,000欧元。5月至11月可以按月租；冬季请向您的雇主问问员工住房，或联系基蒂莱的市政公司。',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: '最初的几周',
    h2: '亲自去看房。',
    lead:
      '头几周先订一家酒店或公寓式酒店，签约之前亲自去看房子。我们合作伙伴的搜索页面会按今天的价格显示空房。',
    chips: [
      { label: '罗瓦涅米', destination: 'Rovaniemi', sid: 'rentals_first_weeks_rovaniemi' },
      { label: '莱维', destination: 'Levi', sid: 'rentals_first_weeks_levi' },
      { label: '托尔尼奥', destination: 'Tornio', sid: 'rentals_first_weeks_tornio' },
      { label: '伊瓦洛', destination: 'Ivalo', sid: 'rentals_first_weeks_ivalo' },
    ],
  },
  sources: pickSources('zh-CN', SOURCES, common.sourceLabels),
};

export default copy;
