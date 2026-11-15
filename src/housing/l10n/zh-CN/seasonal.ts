/**
 * Kiina (yksinkertaistettu) (zh-CN) · seasonal. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
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
  metaTitle: '拉普兰季节工住房：莱维、于拉斯、萨利色尔卡',
  metaDescription:
    '季节工在莱维、于拉斯、萨利色尔卡和罗瓦涅米住在哪里：员工住房、季节性租约或市政公寓，以及签约前该问什么。',
  breadcrumb: '季节工',
  hero: {
    eyebrow: '季节性工作，冬季与夏季',
    title: '季节工住在哪里？',
    subtitle:
      '合租的员工公寓、按季节租约出租的度假公寓，或市政出租房。滑雪度假村的住房短缺是真实存在的，人们就是这样与它共处的。',
  },
  authorNote:
    '短缺数据来自2017–2026年 Yle 和 Kesko 的新闻，找房渠道来自各市镇自己的页面。具体的职位信息请看我们的姐妹站点 laplandwork.com。',
  intro: [
    '莱维旅游区为冬季雇用2,000多名季节工，这是 Levin Matkailu Oy 总经理 Kristiina Kukkohovi 早在2017年做出的估计，她还说，住房短缺正在成为拉普兰各个度假村的大问题（Yle，2017年10月25日）。情况至今没有缓解：2023年春天，Yle 报道了莱维和于拉斯的员工住在度假公寓里、无法登记地址的情况。',
    '2026年6月，阿卡斯隆波洛 K-Market Jounin Kauppa 的店主决定为自己的员工建造三栋联排住宅，因为住房太少，租金又涨得很高（Yle，2026年6月16日）。这家店每年雇用约20名季节工，其中大约一半需要租房（Kesko，2026年6月17日）。',
    '在罗瓦涅米，招聘公司 Career.fi 把约250名工人带到拉普兰，并把他们安置在大约十个不同的地方；两名爱沙尼亚工人在租住的公寓进入管道翻修后，连续两个冬天住在增长总监的家里。找住处“每年都像一场大戏”（Yle，2026年3月9日）。',
  ],
  sections: [
    {
      id: 'three-ways',
      kicker: '度过一个工作季的三种方式',
      h2: '员工住房、季节性租约，或市政公寓。',
      cards: [
        {
          title: '1. 员工住房',
          body:
            '滑雪度假村里最常见的办法：雇主为员工租下联排住宅、木屋和度假公寓，租期覆盖整个雪季，房租从您的工资里扣。在鲁卡，一家餐饮集团早在2017年就在11月至5月为员工租下了四处度假房产（Yle，2017年10月25日）。好处是：您一到就有地方住。风险是：工作一结束，住房也跟着结束。',
        },
        {
          title: '2. 按季节租约出租的度假公寓',
          body:
            '莱维一套80平方米的阿尔卑斯风格公寓：5月至11月每月750欧元，旺季每周2,000欧元，全年长租每月1,650欧元（Yle，2023年5月25日）。夏季便宜，冬季根本租不起。而且在度假公寓里，您也无法登记正式地址（Yle，2023年5月25日）。',
        },
        {
          title: '3. 市政出租房',
          body:
            'Kittilän Vuokratalot Oy、Inarin Vuokra-asunnot Oy（在伊瓦洛、伊纳里和萨利色尔卡有500多套住房）以及索丹屈莱的 Asentopuulaaki（约720套住房）。请在夏季、雪季开始之前申请；并向公司问清楚申请的有效期有多长。',
        },
      ],
    },
    {
      id: 'places',
      kicker: '各地情况',
      h2: '同样短缺，办法各异。',
      band: true,
      cards: [
        {
          title: '莱维与基蒂莱',
          image: { src: '/images/housing-levi-keskusta-card.webp', alt: '夏日里莱维中心的木造建筑' },
          body:
            '2025年基蒂莱的人口增长了2.0%，在拉普兰各市镇中位居第二，仅次于佩尔科森涅米（2.4%）（芬兰统计局）。雇主为员工租下联排住宅，租期覆盖整个雪季，其他人则在 Facebook 的莱维找房群里找房。Kittilän Vuokratalot Oy 的房源既有基蒂莱村里的，也有位于莱维 Sirkka 的。',
          href: 'https://kittila.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot',
          linkLabel: 'Kittilän Vuokratalot Oy',
          event: 'kittila',
        },
        {
          title: '于拉斯：阿卡斯隆波洛与于拉斯耶尔维',
          image: { src: '/images/housing-seasonal-card-yllas-tunturi.webp', alt: '9月的早晨，隔着阿卡斯隆波洛的湖面望向于拉斯' },
          body:
            '店主们自己动手盖房：按目前的进度，Jounin Kauppa 的三栋联排住宅预计在2026年11月至12月完工，有单间公寓、供合租的两居室公寓和三居室家庭公寓，每套都带桑拿（Kesko，2026年6月17日）。村里第一栋模块化建筑在2025年10月已接近完工（Yle，2026年6月16日）。',
          href: 'https://www.kesko.fi/media/uutiset-ja-tiedotteet/uutiset/2026/lapin-asuntopulaa-ratkomassa-k-market-jounin-kaupan-kauppiaat-rakennuttavat-kolme-rivitaloa-tyontekijoilleen/',
          linkLabel: 'Kesko，2026年6月17日',
          event: 'yllas',
        },
        {
          title: '萨利色尔卡与伊瓦洛',
          image: { src: '/images/housing-saariselka-hirsitalot.webp', alt: '11月的萨利色尔卡，圆木建筑' },
          body:
            '市属公司 Inarin Vuokra-asunnot Oy 在萨利色尔卡和伊瓦洛都有住房，市镇的页面列出了私人房东和 Facebook 上的索丹屈莱–伊纳里–乌茨约基群组。面试时请问雇主是否提供住房。',
          href: 'https://www.inari.fi/fi/palvelut/asuminen.html',
          linkLabel: 'inari.fi：住房',
          event: 'inari',
        },
        {
          title: '罗瓦涅米',
          image: { src: '/images/housing-rovaniemi-lappia-card.webp', alt: '罗瓦涅米市中心的 Lappia 大楼' },
          body:
            '学生、游客和季节工同时在争夺同样的单间公寓：2026年夏天，学生住房基金会 DAS 收到约550份紧急申请，比一年前多15%，近90%的申请人想要单间公寓（Yle，2026年7月27日）。',
          href: 'https://yle.fi/a/74-20213937',
          linkLabel: 'Yle，2026年3月9日：罗瓦涅米的住房短缺',
          event: 'rovaniemi',
        },
        {
          title: '鲁卡与库萨莫',
          image: { src: '/images/housing-ruka-kyla-card.webp', alt: '夏日里鲁卡步行村的广场和红色瞭望塔' },
          body:
            '鲁卡位于北博滕区而不是拉普兰，但雪季和住房短缺是一样的。2017年，鲁卡的餐饮集团冬季员工从20多名常驻员工增加到80多人，并在11月至5月为员工租下了四处度假房产（Yle，2017年10月25日）。',
          href: 'https://yle.fi/a/3-9895965',
          linkLabel: 'Yle，2017年10月25日',
          event: 'ruka',
        },
      ],
    },
    {
      id: 'summer',
      kicker: '夏季旺季',
      h2: '夏天并不清闲。',
      paras: [
        '拉普兰的夏季工作自成一个季节：罗瓦涅米全年的旅游业、徒步区域、建筑工地和商店的夏季高峰。夏季，度假公寓按月出租（莱维的例子里，5月至11月每月750欧元，Yle，2023年5月25日）。',
        '在罗瓦涅米，一家招聘公司的增长总监希望冬季把季节工安置在同一屋檐下，夏季则安置建筑工人和体育队伍（Yle，2026年3月9日）。对夏季到来的人来说这是好消息：为冬季建的员工住房，夏季是空着的。',
      ],
      image: {
        src: '/images/housing-jouninkauppa.webp',
        alt: '夏季阿卡斯隆波洛 K-Market Jounin Kauppa 商店的门面',
        caption:
          'K-Market Jounin Kauppa，阿卡斯隆波洛，2026年7月。店主正在为员工建造三栋联排住宅（Kesko，2026年6月17日）。摄影：LaplandVibes。',
        ratio: '4/3',
      },
    },
    {
      id: 'ask',
      kicker: '签约之前',
      h2: '请向您的雇主问清这些。',
      bullets: [
        '住房是雇佣待遇的一部分，还是单独的租约？从您的工资里扣多少，工资单上看得到吗？',
        '是单人房间还是合住？公寓里住几个人，您的房门有锁吗？',
        '如果工作在季节结束前就结束了，或者延续到季节之后，租约会怎么样？',
        '您能在那里登记地址吗？向 DVV 提交迁居登记须在搬家后一周内完成，而度假公寓往往不符合条件。',
        '电费、水费和网费由谁付？',
        '没有车，怎么去上班：距离多远，有公交或滑雪巴士吗？',
        '有押金吗，什么时候退？法律规定：自2026年10月1日起，须在租约结束后14天内退还（Rakli）。',
      ],
    },
  ],
  faqs: [
    {
      q: '莱维的雇主会为季节工提供住房吗？',
      a: '经常会，但不一定，也不是免费的。雇主为员工租下联排住宅和度假公寓，租期覆盖整个雪季，房租从您的工资里扣。请让对方把条件写成书面形式，并问清楚工作结束后住房会怎么处理。',
    },
    {
      q: '我应该什么时候开始找雪季的住房？',
      a: '夏天。请在雪季之前向各市政住房公司（基蒂莱、伊纳里、索丹屈莱）申请；以莱维的例子来说，度假公寓只有在5月至11月才能按月租（Yle，2023年5月25日）。',
    },
    {
      q: '我能整个雪季都住在度假公寓里吗？',
      a: '可以，前提是房主提供季节性租约，但您无法在度假公寓里登记正式地址（Yle，2023年5月25日）。',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: '最初的几晚',
    h2: '在拿到钥匙之前。',
    lead:
      '工作季往往在住房空出来之前就开始了。我们合作伙伴的搜索页面会按今天的价格显示可订的客房和公寓。',
    chips: [
      { label: '莱维', destination: 'Levi', sid: 'seasonal_first_nights_levi' },
      { label: '于拉斯', destination: 'Äkäslompolo', sid: 'seasonal_first_nights_yllas' },
      { label: '萨利色尔卡', destination: 'Saariselkä', sid: 'seasonal_first_nights_saariselka' },
      { label: '罗瓦涅米', destination: 'Rovaniemi', sid: 'seasonal_first_nights_rovaniemi' },
    ],
  },
  sources: pickSources('zh-CN', SOURCES, common.sourceLabels),
};

export default copy;
