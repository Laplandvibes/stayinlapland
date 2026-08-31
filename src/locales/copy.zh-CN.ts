import type { SectionCopy } from './copy';
import { copyEN } from './copy.en';

/**
 * ZH-CN copy, overlays the most visible chrome (nav, hero, newsletter, CTAs).
 * Deep sections fall back to copyEN by structural inheritance. Quality bar:
 * ≥1500 chars in this overlay block.
 */
export const copyZHCN: SectionCopy = {
  ...copyEN,
  nav: {
    longStays: '长期入住',
    hotels: '酒店',
    glassIgloos: '玻璃冰屋',
    wilderness: '荒野住宿',
    whenToGo: '何时前往',
    bookingGuide: '预订指南',
    browseStays: '浏览住宿',
    homeAria: 'StayInLapland，首页',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
  },
  hero: {
    eyebrow: '芬兰拉普兰 · 编辑指南',
    h1Line1: '拉普兰不止是',
    h1Line2: '一周的假期。',
    lead: '按周入住的木屋、罗瓦涅米的精品酒店、那一晚梦寐以求的玻璃冰屋，以及最后一条公路尽头的荒野旅舍。已验证价格区间',
    leadPriceRange: '140 € 至 1,500 €',
    liveLabel: '实时空房 · Trip.com 搜索',
    browseLongStays: '浏览长期入住',
    seeHotels: '查看酒店',
  },
  newsletter: {
    eyebrow: '长期入住开放 · 淡季价格',
    h2: '您尚未能预订的住宿。',
    lead: '本站大多数长住型住宿会在八月底放出冬季房源，很快订完。我们会讲清预订窗口何时开放，以及房价下降但极光依然可见的淡季周（11月、4月下旬）。',
    placeholder: '您的邮箱地址',
    subscribe: '订阅',
    subscribing: '订阅中…',
    success: '就快好了：请在我们刚发送的邮件中确认订阅。',
    errorPrefix: '订阅未成功，',
    pleaseTryAgain: '请重试',
    footnotePart1: '我们绝不发垃圾邮件。一键退订。详见我们的',
    footnoteLink: '隐私政策',
    footnotePart2: '。',
  },
  authorByline: {
    reviewed: '由 LaplandVibes 编辑网络审核',
    defaultNote:
      '由芬兰拉普兰当地合作伙伴撰写并核对事实。我们从预订中获得联盟佣金，但这绝不影响我们推荐哪些物业。',
  },
  affiliateDisclosure:
    '本页面包含联盟链接。您通过这些链接预订时，我们将获得佣金，您无需支付额外费用。物业基于质量入选，而非佣金。',
  marginNoteDefault: '旁注',
  comparison: {
    property: '物业',
    verdict: '评价',
    nOutOf5: (n) => `${n} 分（满分 5 分）`,
  },
  editorsPick: {
    kicker: '编辑推荐',
    perNight: '/ 晚',
    note: '说明',
    cta: '查看价格并预订',
  },
  propertyCard: {
    ...copyEN.propertyCard,
    short: '1–3晚',
    medium: '3–6晚',
    long: '7晚以上',
    nights: (n) => `${n}晚`,
    minPrefix: '起价',
    perNight: '/ 晚',
    cta: '查看价格',
  },
  workInLaplandPromo: {
    inlineEyebrow: '想在芬兰拉普兰工作？',
    inlineBodyPrefix: '季节性岗位、远程办公住所与滑雪场招聘，均可在我们的姐妹站点 ',
    inlineBodyBrand: 'laplandwork.com',
    inlineBodySuffix: ' 上找到。',
    inlineCta: '浏览职位',
    fullEyebrow: '姐妹站点 · laplandwork.com',
    fullH2A: '想在',
    fullH2B: '芬兰拉普兰工作吗？',
    fullP1:
      '本站不少长期入住客人，最初其实是为了滑雪季、北极工程合同或一两个月的远程办公而来，结果爱上了这里。如果您正是因此而来，工作侧有它自己的网站。',
    fullP2A: 'LaplandWork.com',
    fullP2B:
      ' 是芬兰拉普兰的集中式就业枢纽，季节性住宿岗位、滑雪场职位、哈士奇农场空缺，以及罗瓦涅米、莱维、萨利色尔卡和伊纳里的医院与工程职位。对求职者免费，雇主分三档付费。',
    fullCta: '查看职位',
    blocks: [
      { label: '季节性住宿岗位', tag: '莱维 · 于拉斯 · 萨利色尔卡' },
      { label: '哈士奇农场', tag: '十一月至四月季节性' },
      { label: '远程办公住所', tag: '全年开放，光纤网络' },
      { label: '医疗与工程', tag: '长期职位' },
    ],
  },
  longTermRentals: {
    eyebrow: '搬到拉普兰 · 六个月以上',
    h2A: '在找真正的住房，',
    h2B: '而不是短租？',
    lead:
      '本网站收录的是通过我们的预订伙伴提供的短期或中期租住，最多四周的旅行是合适的解决方案。若是六个月、一年或永久搬迁，您需要的是芬兰本地的租房门户。这里列出拉普兰最活跃的六个。',
    process: {
      title: '通常的流程',
      body:
        '联系房东/中介邮件 → 现场看房 → 申请表（收入证明 + 信用记录）→ 一至两个月押金 + 首月租金 → 拿到钥匙。两到六周的准备时间是切实可行的。',
    },
    cost: {
      title: '大致花费',
      body:
        '罗瓦涅米一居室：每月 600–900 €。莱维/萨利色尔卡的一居室（冬季）:900–1,400 €。滑雪度假村冬季高峰之外，价格下降 30–40%。所有金额含水费；电费 + 取暖通常另算。',
    },
    abroad: {
      title: '从国外搬来？',
      body:
        '欧盟/欧洲经济区公民可自由租房。其他国家需先办理居留许可（芬兰移民局通常 1–4 个月）。laplandwork.com 上的工作枢纽涵盖移民局、Kela 登记、开设芬兰银行账户、税卡以及搬到拉普兰的完整清单。',
    },
    tags: {
      national: '全国性',
      rentalOnly: '仅租赁',
      corporate: '企业租赁',
      classifieds: '直接对接房东',
    },
  },
  tripRecommender: {
    weBook: '我们会预订',
    items: [
      {
        forWho: '初次出行 · 4–6 晚 · 带孩子',
        recommendation: '罗瓦涅米的精品酒店',
        rationale:
          '像 Arctic Light 或 Arctic TreeHouse 这样的设计酒店，既靠近机场、有像样的餐饮选择，也方便玩转圣诞老人村，一家人不必为了偏远小屋里的取暖问题而把晚上耗掉。',
        ctaLabel: '查看酒店',
      },
      {
        forWho: '常客 · 7–14 晚 · 一处大本营',
        recommendation: '莱维或萨利色尔卡的长期入住木屋',
        rationale:
          '住下来，过一周。Levi Spirit 的两居室或萨利色尔卡边上的山脊小屋，能拿到周价、有自家桑拿，也留出足够时间真正沉进拉普兰，而不是在 bucket-list 之间疲于奔波。',
        ctaLabel: '查看长期入住',
      },
      {
        forWho: '结婚纪念日 · 退休庆典 · 整组人包场',
        recommendation: '荒野别墅',
        rationale:
          '荒野别墅是纪念这一时刻最独家的方式。Iso-Syöte 的 Eagle View 套房带来林线之上的隔绝感，Wilderness Hotel Nangu 别墅则在伊纳里湖畔加上萨米人带领的活动，两者都足够私密，让整片风景仿佛归您所有，却无需整栋包场的价格。',
        ctaLabel: '查看荒野别墅',
      },
    ],
  },
  home: {
    ...copyEN.home,
    metaTitle: 'StayInLapland，芬兰拉普兰的长期入住与精品酒店',
    metaDescription:
      '在芬兰拉普兰住下来，按周入住的木屋、罗瓦涅米与萨利色尔卡的设计酒店、标志性的玻璃冰屋，以及最后一条公路尽头的荒野别墅。',
    schemaName: 'StayInLapland，芬兰拉普兰的长期入住与精品酒店',
    breadcrumbHome: '首页',
    stats: { stays: '精选住宿', bases: '拉普兰据点', categories: '住宿类别', months: '逐月评估' },
    intro: {
      p1:
        '"拉普兰最佳住宿"清单几乎总是从玻璃冰屋开始，并按同一套模板写下去。这本指南反其道而行：亲自住过的夜晚、本地的推荐，以及只收录那些回程后还会让人念念不忘的住处。',
      p2:
        '我们把拉普兰的住宿分成四个清晰的类别，长期入住、酒店、玻璃冰屋与荒野别墅。16 处精选，全部亲身体验。最受欢迎的路线是：在莱维住一周木屋，加上罗瓦涅米两晚设计酒店，再以一晚玻璃冰屋收尾。把这些组合在一起，就构成了人们一再回到拉普兰的那种感觉。',
      p3: '这本指南既不聚合价格，也不复刻评论。来源标明，合作关系公开。',
    },
    authorNote: '一份手工挑选的短名单，在芬兰撰写，并由分布在拉普兰各地的本地合作伙伴核实。',
    fourWays: {
      kicker: '四种住法',
      h2A: '挑一种。',
      h2B: '或把两种叠在一起。',
      lead:
        '选一个真正契合您旅程的类别，再去挑具体住处。长期入住的读者最常把两种叠加，一周的木屋大本营，加上在另一种住宿里再住两晚。',
    },
    propertyWord: '处',
    propertiesWord: '处',
    explore: '探索',
    pullQuote: {
      text:
        '拉普兰比人们想象的要大。罗瓦涅米到萨利色尔卡的路，无论哪个方向都要吃掉半天。初次到访最大的错误，就是在五个晚上里换三处大本营。',
      attr: '拉普兰住宿报告 · 拉普兰区域委员会，2024',
    },
    tripKicker: '已经大致知道想要什么了？',
    tripH2: '当地人的捷径。',
    destKicker: '拉普兰的五处大本营',
    destH2: '想住拉普兰的哪一带？',
    destLead:
      '每个目的地都有自己的长期入住逻辑。点进去看具体推荐，以及为何要选这处而不是别处的理由。',
    readGuide: '阅读',
    faqKicker: '真正的问题，真正的答案',
    faqH2: '在您点任何按钮之前。',
    faqs: [
      {
        q: '本站所说的"长期入住"指什么？',
        a: '本站把四晚及以上都归为长期入住，这是拉普兰多数住处开始提供周价、像样厨房真正派上用场的门槛。所列长期入住物业根据房型，最少 3 晚至 7 晚不等；每张房卡都会显示最低天数。',
      },
      {
        q: '为什么首页强调长期入住，而不是玻璃冰屋？',
        a: '玻璃冰屋是拉普兰的标志性形式，它有自己的页面。但人们最爱、回味最久的拉普兰之旅，并不是在玻璃穹顶下住三晚的 bucket-list 之旅，而是以木屋或设计酒店为一周的大本营，再附加一两晚别处的住宿。这份网站映射的，是拉普兰真正回报回头客的方式。',
      },
      {
        q: 'Kakslauttanen 真的值得那个价吗？',
        a: '值得，但只限 Kelo-Glass 冰屋，不是经典玻璃冰屋。Kelo-Glass 把全景玻璃屋顶与有暖气的木屋结构、厨房空间和壁炉结合在一起。两晚的最低住宿能让人最大化感受其价值。最佳极光窗口：二月初与三月底。',
      },
      {
        q: '如果长期入住要兼顾远程办公，该选哪里？',
        a: '罗瓦涅米。它是拉普兰唯一拥有稳定光纤、每日往返赫尔辛基与斯德哥尔摩航班，以及在淡季仍照常营业的真正冬季餐饮场景的城市。Arctic TreeHouse Resort 与 Ounasvaara 的山间别墅都提供周价，并有像样的办公位。',
      },
    ],
    fullGuideCta: '阅读完整预订指南',
    categoryDescriptions: {
      longStays: '周租与月租，别墅、设计木屋、滑雪公寓。',
      hotels: '适合短住的拉普兰精品、设计与经典酒店。',
      glassIgloos: '拉普兰的标志形式，四处对得起这个名字的度假村。',
      wilderness: '最后一条公路之后，给认真旅人的两处隐居地。',
    },
    categoryNames: {
      longStays: '长期入住',
      hotels: '酒店',
      glassIgloos: '玻璃冰屋',
      wilderness: '荒野别墅',
    },
  },
  hotels: {
    metaTitle: 'StayInLapland，芬兰拉普兰的精品与设计酒店',
    metaDescription:
      '值得预订的五家拉普兰酒店，Arctic TreeHouse 设计套房、Arctic Light 精品酒店、Levi Spirit 别墅酒店、Lapland Hotels Saaga、Star Arctic Hotel。为短住、出差，以及长住行程之间的过渡夜晚精选。',
    breadcrumb: '酒店',
    pageHero: {
      eyebrow: '值得预订的五家酒店',
      title: '拉普兰的酒店。',
      subtitle:
        '精品、设计与一贯可靠的经典拉普兰酒店，适合短住、出差，以及您围绕更长木屋大本营安排的那两晚城市停留。',
    },
    authorNote: '五处住宿，均与运营方公布的资料及 2025/26 季的近期住客评价交叉核实。',
    introP1:
      '拉普兰不乏把基本功做好的中端连锁酒店，Scandic、Sokos，每晚 90–140 €。它们没有列在这里；预订它们的逻辑基本只是"离机场最近、那一周最便宜"。',
    introP2:
      '下面五家酒店凭另一种理由入选，设计、建筑、景观，或服务的组合。当您想要的是一家本身就构成出行理由的酒店、而不仅仅是落脚点时，它们就是正确答案。',
    picksKicker: '五处精选',
    picksH2: '是精选，不是聚合。',
    pullQuote: {
      text:
        '罗瓦涅米在 1944 年后重建过三次，第三次由阿尔瓦·阿尔托主持，他把城市规划画成驯鹿角的形状。Arctic Light Hotel 就坐落在鹿角之内，一座挺过三次重建的 1939 年建筑里。',
      attr: 'Architectural Record · Arctic Light Hotel 专题',
    },
    glanceKicker: '五家一览',
    glanceH2: '带观点的对比。',
    rubric:
      '五个点为最佳。设计 = 室内造型与材质；建筑 = 建筑本身；活动 = 步行 15 分钟内的滑雪进出、哈士奇农场、本地文化。',
    axes: ['设计', '建筑', '水疗 / 桑拿', '活动', '餐厅'],
    rows: [
      { name: 'Arctic TreeHouse', verdict: '罗瓦涅米最好的设计酒店。' },
      { name: 'Arctic Light', verdict: '建筑上最有看头的一栋。' },
      { name: 'Levi Spirit', verdict: '成人氛围。水疗 + 滑雪进出。' },
      { name: 'Lapland Hotels Saaga', verdict: '于拉斯的滑雪进出经典。已含水疗。' },
      { name: 'Star Arctic', verdict: '山顶 · 天最暗 · 木屋/酒店混合。' },
    ],
    marginLabel: '内行话',
    marginBody:
      'Arctic TreeHouse 与 Levi Spirit 都经营自家餐厅，Rakas(TreeHouse)和 Spirit Kitchen(Levi)，皆取材本地。无论订哪家，订房当天就把餐位也订了；周末餐厅比客房更早满。',
    counterKicker: '诚实的反向建议',
    counterH2: '当酒店并非答案时。',
    counterP1:
      '若要连住 5 晚以上、且节奏相同，滑雪、做饭、桑拿、循环，长住木屋或公寓在每晚成本和生活品质上都胜过以上任何一家酒店。当每天都不一样时，酒店才更合适。',
    counterP2: '若只为一晚极光打卡，玻璃冰屋更胜一筹。以上酒店都没有玻璃屋顶。',
    seeLong: '查看长期入住',
    seeIgloos: '查看玻璃冰屋',
    browseAll: '浏览 Trip.com 房源',
  },
  glassIgloos: {
    metaTitle: 'StayInLapland，芬兰拉普兰玻璃冰屋，四家度假村排名',
    metaDescription:
      '精选指南：对得起名字的芬兰拉普兰玻璃冰屋度假村，Kakslauttanen、Levin Iglut、Aurora Village、Aurora Pyramids。按天空可见度、暗夜位置、舒适度与可达性排名。',
    breadcrumb: '玻璃冰屋',
    pageHero: {
      eyebrow: '拉普兰的标志性形式',
      title: '芬兰拉普兰的玻璃冰屋。',
      subtitle:
        '玻璃屋顶的芬兰穹顶诞生于萨利色尔卡。如今对得起这个名字的有四家，而它们彼此之间存在实打实的差别。',
    },
    authorNote: '四家度假村均与运营方公布的资料及近期住客评价交叉核实。价格最近核对时间：2026 年 2 月。',
    pickWhy: [
      'Kakslauttanen 出现在每份清单上，是因为它配得上。这家度假村 1973 年在萨利色尔卡起步，彼时"萨利色尔卡的旅游住宿"还只是一间木屋旅舍，极光则是从停车场抬头看的东西；现代玻璃冰屋是它后来发明的。',
      '这里有个岔路：要订 Kelo-Glass 冰屋，而不是经典玻璃冰屋。Kelo-Glass 把全景玻璃屋顶与带暖气的木屋结构、独立厨房和壁炉结合在一起。经典玻璃冰屋更小、更挤，卫生间还要在零下 25 度里走 50 米。',
      '差价大约每晚 200 €。摊到三晚来看，光是不必在凌晨四点穿上雪靴，Kelo-Glass 就把这份溢价赚了回来。',
    ],
    pickCaveat:
      '经典玻璃冰屋大约便宜 30%，但体验明显更差。若预算上限是每晚 400 €，看看 Aurora Village 或 Aurora Pyramids，同样的天空，往往还有更好的湖畔或荒野位置。',
    pullQuote: {
      text:
        '第一座玻璃冰屋的建造，是为了让客人不必在零下 30 度站到屋外就能看见极光。几十年后，这仍是它的全部卖点，而每个模仿者都做砸的那一部分，是极光散去之后会发生什么。',
      attr: 'Kakslauttanen 起源 · 度假村创立于 1973 年',
    },
    runnersKicker: '另外三家',
    runnersH2: '当 Kakslauttanen 不是正确答案时。',
    glanceKicker: '四家一览',
    glanceH2: '带观点的对比。',
    rubric:
      '五个点为最佳。可达性 = 从最近机场抵达的便利；天空 = 黑暗程度与观测几何；私密 = 与邻舍的隔离；舒适 = 卫浴、厨房、隔音；口碑 = 度假村兑现宣传册的程度。',
    axes: ['可达性', '天空', '私密', '舒适', '口碑'],
    rows: [
      { name: 'Kakslauttanen', verdict: '元祖。价高。只有 Kelo-Glass 才值。' },
      { name: 'Levin Iglut', verdict: '工程最佳。电动极光床。' },
      { name: 'Aurora Village', verdict: '最有荒野感。距伊瓦洛 30 分钟。' },
      { name: 'Aurora Pyramids', verdict: '湖面倒影让极光翻倍。' },
    ],
    marginLabel: '取舍',
    marginBody:
      '没有一家能在五个维度上全胜。Aurora Pyramids 的湖面倒影压倒所有人，却输在可达性（距伊瓦洛 40 分钟）。Levin Iglut 工程取胜，却坐落在繁忙的滑雪村里。挑出对您最要紧的那一项。',
    counterKicker: '诚实的反向建议',
    counterH2: '什么时候干脆跳过玻璃冰屋。',
    counterP1:
      '若要住四晚以上，两晚玻璃冰屋加一段长住木屋，是比四晚玻璃冰屋更好的行程。新鲜感第二晚就过去了；一座带私人桑拿的木屋(hirsimökki)能给你玻璃穹顶给不了的那一部分拉普兰。',
    counterP2:
      '圣诞（12 月 22 日 → 1 月 2 日）价格翻三倍，到开春前九成房源都被英国包价团订走。可能的话把日期挪到一月下半月，更冷、更暗、价格减半、极光更好。',
    seeLong: '查看长期入住',
    bookingGuideBtn: '预订指南',
    browseAll: '浏览 Trip.com 房源',
  },
  wilderness: {
    metaTitle: 'StayInLapland，芬兰拉普兰荒野别墅，认真的隐居地',
    metaDescription:
      '最后一条公路之后的荒野别墅，Iso-Syöte Eagle View 套房与 Wilderness Hotel Muotka。林线之上的极光观测，以及现场极光叫醒服务。',
    breadcrumb: '荒野住宿',
    pageHero: {
      eyebrow: '最后一条公路之后',
      title: '荒野别墅。',
      subtitle:
        '拉普兰的新传统，自 2010 年代起，在旅游公路尽头之处由建筑师设计的隐居地。两处别墅，两种对"荒野"的不同定义。',
    },
    authorNote: '两处住宿的信息均依据运营方公布的资料及近期住客评价核实。',
    pickWhy: [
      'Iso-Syöte Eagle View 套房坐落在芬兰最南端的真正高山上，海拔 432 米，松木建造的套房，可在林线之上观测极光，无需向北长途飞行。',
      '玻璃立面朝向开阔的天空，晴朗夜里躺在床上便能看见极光弧。极光观测来自你山脊上的专属套房，而非共用的庇护点，既有私密，又无需整栋包场的承诺。',
      '它也是认真的荒野别墅中最易抵达的一处：距奥卢机场 90 分钟，使其成为连短途行程都适合的难得隐居地。',
    ],
    pickCaveat:
      '本站的"查看价格"按钮会跳转到 Trip.com 搜索最近的可订房源。Eagle View 套房在晴空的周末最先订满，请按日期下手，而非看天气预报。',
    pullQuote: {
      text:
        '"偏远"通常只是营销话术，在这片高处却是事实。公路到此为止，林线沉到你脚下，余下的光只有天空决定造出的那一点。这样的地方无法随意造访，你只能郑重投入其中。',
      attr: '在 Iso-Syöte 的高山道路上，抬头望去',
    },
    runnersKicker: '另一处',
    runnersH2: '当整套山脊套房太过头时。',
    glanceKicker: '两种对荒野的定义',
    glanceH2: '一览。',
    rubric:
      '隔绝 = 你真正有多孤身；服务 = 员工与客人的比例；活动 = 含在内或可预约的向导体验。',
    axes: ['可达性', '隔绝', '服务', '活动', '一生一次指数'],
    rows: [
      { name: 'Iso-Syöte Eagle View', verdict: '林线之上。从芬兰南部最易抵达。' },
      { name: 'Hotel Muotka', verdict: '现场极光叫醒服务。酒店般的舒适。' },
    ],
    marginLabel: 'Muotka 的极光叫醒',
    marginBody:
      'Wilderness Hotel Muotka 配有值班的极光猎人，盯着 Kp 指数，在极光开场时挨个敲门。这是本指南所有住宿里最出色的一项，对于只住一晚的行程而言，值这份差价。',
    counterKicker: '诚实的反向建议',
    counterH2: '荒野别墅并非人人适合。',
    counterP1:
      '两处别墅距最近机场都要 1–3 小时车程。对于不足三晚的行程，花在路上的时间过于不成比例。',
    counterP2:
      '对首次到北极的旅人：先去罗瓦涅米或萨利色尔卡走一趟。把整栋包场的荒野别墅留给还在适应零下 25 度的人，是种浪费。',
    seeLong: '查看长期入住',
    browseAll: '浏览 Trip.com 房源',
  },
  longStays: {
    metaTitle: 'StayInLapland，芬兰拉普兰长期入住，一周起的租住',
    metaDescription:
      '五处适合一周以上租住的拉普兰长住房源，Arctic TreeHouse 设计套房、Levi 顶层公寓、Ounasvaara 木屋、Pyhä 原木木屋、伊纳里湖畔别墅。周价、私人桑拿、独立厨房。',
    breadcrumb: '长期入住',
    pageHero: {
      eyebrow: '五处长住房源',
      title: '住一周。或一个月。',
      subtitle:
        '为回头客、远程办公者、家庭，以及任何拉普兰行程超过三晚的人准备的正确答案。周价、私人桑拿、真正的厨房，从设计套房到滑雪进出公寓。',
    },
    authorNote:
      '五处住宿，均与当地合作伙伴及 2025/26 季的周价日历交叉核实。',
    pickWhy: [
      'Arctic TreeHouse Resort 是这个问题的答案，"在罗瓦涅米，如何在不租毛坯木屋的前提下来一次像样的长住？"嵌进圣诞公园边缘松林里的设计套房，每间都有小厨房和朝向树木的全景玻璃立面。',
      '周价比每晚价大约低 25%，每间套房都可使用度假村的桑拿村，在这里住一周，平均每晚比一连串单晚预订更便宜，也有宽裕得多的空间真正安顿下来。',
      '它也是这份清单里最灵活的落脚点：罗瓦涅米的机场、餐厅与设计文化都在十分钟内，而套房本身却只面向森林。下方的"查看价格"按钮会直接带您进入周租房源。',
    ],
    pickCaveat:
      '周折扣在您选满 7 晚以上时才会出现在预订系统里，并不总是显示在标示的每晚价上。圣诞前后的旺季周会提前数月订满;11 月中与 4 月下旬则便宜得多。',
    pullQuote: {
      text:
        '设计任务是消隐进山脊里。用取自这片土地的木材，玻璃只朝北，屋脊永不高过树梢。你所看见的，本就在那里，我们只是让人能住进它的里面。',
      attr: 'Studio Puisto · 建筑师陈述',
    },
    runnersKicker: '另外四处',
    runnersH2: '从滑雪进出公寓到湖畔别墅。',
    runnersLead:
      '下面四处各有不同的长住逻辑，靠近缆车系统、在拉普兰工作日的远程办公配套、家庭友好的厨房，或文化丰厚的湖畔大本营。',
    weeklyKicker: '周价是怎么运作的',
    weeklyH2: '价格下降得比人们以为的更快。',
    weeklyP1:
      '在本页的住宿里，周价平均比标示的每晚价<strong>每晚便宜 23%</strong>。Levi Residences 降 30%,Pyhä Bear’s Lodge 降 18%,Arctic TreeHouse 降 25%。多数房源不会主动宣传，折扣藏在预订系统里，选满 7 晚以上才会出现。',
    weeklyP2:
      '过渡周，<strong>11 月中</strong>（积雪稳定之前）与<strong>4 月下旬</strong>（融雪之后），在此之上再降 30–50%。两个窗口里极光都仍活跃。对工作日程灵活的人来说，这是长住的甜蜜点。',
    marginLabel: '预订策略',
    marginBody:
      '住满四周时，把它拆到两处房源，往往能胜过订一处，既避开圣诞与二月滑雪假期那一记"旺季周"涨价，又能真正看到拉普兰的两个面。转场要花半天，但省下的钱通常够在别处多住两晚。',
    counterKicker: '诚实的反向建议',
    counterH2: '什么时候别订长住。',
    counterP1:
      '若是 2–3 晚的初次出行，跳过长住租赁。入住、采购、学用炉灶的这笔"税"，会把省下的钱抹平。订家酒店吧。',
    counterP2:
      '若只为一晚极光打卡，玻璃冰屋才是更好的答案。那片玻璃屋顶正是你来的目的；长住木屋给你的，只是一扇窗。',
    counterP3:
      '若同行者行动能力不一，预订前先直接致电房源，多数长住木屋并非无台阶，桑拿尤其常设在地下的木地板上。',
    seeHotels: '查看酒店',
    seeIgloos: '查看玻璃冰屋',
    browseAll: '浏览 Trip.com 房源',
  },
  bookingGuide: {
    metaTitle: 'StayInLapland，拉普兰预订指南：何时、如何、带什么',
    metaDescription:
      '实用的拉普兰预订指南，何时来看极光最好、怎么抵达、带什么、实际花多少、取消政策与内行贴士。',
    breadcrumb: '预订指南',
    pageHero: {
      eyebrow: '认真计划一次出行',
      title: '拉普兰预订指南。',
      subtitle:
        '实用而有观点的建议。何时来、怎么到、带什么、实际花多少。',
    },
    sections: [
      {
        title: '何时来',
        body: [
          '极光季从八月底持续到四月初。最强的窗口是九至十月和二至三月，长长的暗夜与活跃的太阳天气在此叠合。',
          '避开十一月底到十二月中：够暗，但积雪常常零星，许多活动还没开始。',
          '圣诞和新年提前九个月订满，价格翻三倍。当地人的选择是一月下半月，更安静、更冷、极光更好。',
        ],
      },
      {
        title: '怎么抵达',
        body: [
          '三座拉普兰机场覆盖了您会预订的大部分目的地。罗瓦涅米(RVN)通往圣诞老人村和南部，基蒂莱(KTT)通往莱维和于拉斯，伊瓦洛(IVL)通往萨利色尔卡、伊纳里与北部。',
          '赫尔辛基(HEL)→ 拉普兰是 90 分钟的国内航班。十二月至三月也有从伦敦、柏林、巴黎出发的直飞航班。',
          '火车：赫尔辛基，罗瓦涅米的过夜卧铺很慢，但沿波的尼亚湾海岸经凯米北上的路段确实美，车厢里满是做同一段旅程的本地人。',
        ],
      },
      {
        title: '带什么',
        body: [
          '多数房源提供北极外装（零下 30 度防寒服、靴子、手套、帽子），含在房价里或收取少量日费。托运满满一箱滑雪装备前先确认。',
          '分层比厚度更重要，美利奴打底 + 抓绒中层 + 防风外壳。棉质会要命。',
          '相机：备用电池放进外套贴身处。寒冷会很快耗光电量。',
        ],
      },
      {
        title: '预算现实核对',
        body: [
          '长住木屋（按周）：每晚 140–280 €，可住 4–6 人。',
          '精品酒店：每晚 140–420 €，通常含早餐。',
          '玻璃冰屋，旺季：双人每晚 400–1,500 €。',
          '荒野别墅套房：每晚 220–950 €，视物业而定。',
          '活动（哈士奇雪橇、雪地摩托、极光追猎）通常另计，每人每次 120–200 €。',
        ],
      },
      {
        title: '取消政策',
        body: [
          '多数拉普兰房源在旺季周已改为不可退款房价。点"预订"前先读清小字。',
          '对超过 2,000 € 的行程，带"任意理由取消"保障的旅行保险确实值得。追极光的人总会因天气而取消。',
          '我们的预订伙伴会遵守预订时显示的取消政策，通过本站的跳转预订，可让房价保持可见且一致。',
        ],
      },
      {
        title: '内行贴士',
        body: [
          '萨利色尔卡和伊纳里比罗瓦涅米更冷、更暗、极光更强，但机场、活动和圣诞老人村都在罗瓦涅米。把大本营混着安排。',
          '若只有三晚，就在一个地方住完。拉普兰比人们想象的大，转场会吃掉整天。',
          '极光预报（NOAA、Aurora Service Europe）准的是 30–90 分钟，而非几天。保持灵活。',
        ],
      },
    ],
    readyTitle: '准备好预订了吗？',
    readyLead:
      '按类别浏览精挑细选的房源，或直接跳到 Trip.com 的实时空房。',
    browseAll: '浏览全部拉普兰住宿',
  },
  whenToGo: {
    metaTitle: 'StayInLapland，拉普兰旅行时机，逐月指南',
    metaDescription:
      '芬兰拉普兰逐月编辑指南，极光何时最强、积雪何时稳定、旺季与过渡季价格，以及当地人留给自己的那几周。',
    breadcrumb: '何时前往',
    pageHero: {
      eyebrow: '逐月而论',
      title: '何时去拉普兰。',
      subtitle:
        '合适的月份取决于行程类型。极光优先、滑雪优先、长住性价比、圣诞旺季，各有不同的甜蜜点。下面是逐月的编辑视角。',
    },
    authorNote:
      '综合芬兰拉普兰各地当地合作伙伴的现场报告整理而成。',
    pullQuote: {
      text:
        '芬兰拉普兰的极光大多出现在傍晚到凌晨之间，而从秋季到初春这段漫长的黑夜时节机会最大。晴朗的夜空和一点耐心，比具体哪一天更重要。',
      attr: 'LaplandVibes，整理自我们在芬兰拉普兰各地合作伙伴的极光观测记录',
    },
    months: [
      {
        name: '九月',
        pitch: '极光季开场',
        body:
          '长长的暗夜开始了。雪还没落，这是桦树转红泛金的"ruska"时节。极光映在裸露的地面上，色彩是全年最上镜的。',
        bestFor: ['摄影师', '极光优先的短住', '徒步 + 极光组合'],
        avoidIf: ['专程为雪而来的人'],
      },
      {
        name: '十月',
        pitch: '安静的过渡季',
        body:
          '初雪飘起，但月底前地面少有积雪。酒店执行过渡季房价（较旺季 -30%），极光活跃，游客极少。是基础设施齐备下最便宜的极光窗口。',
        bestFor: ['预算有限的极光猎人', '旺季前抵达的长住'],
        avoidIf: ['想要滑雪或雪地摩托保证的人'],
      },
      {
        name: '十一月',
        pitch: '极夜开始，积雪稳定',
        body:
          '拉普兰冬天最冷的起点。在最北部的乌茨约基，极夜于月底开始。积雪从十一月底开始留得住，到月末多数度假村和雪旅馆开门。十一月底是长住绝对的性价比之最。',
        bestFor: ['享 -50% 房价的长住', '熟悉寒冷的回头客'],
        avoidIf: ['初次旅行者（积雪不稳定）'],
      },
      {
        name: '十二月',
        pitch: '圣诞旺季',
        body:
          '圣诞到新年是一切的顶点，顶点价格、顶点需求、罗瓦涅米顶点的圣诞老人旅游。玻璃冰屋价格翻三倍，雪旅馆全面开放。极光仍活跃，但天气常更多云。',
        bestFor: ['圣诞主题的家庭出行', '想要稳定积雪的初次旅行者'],
        avoidIf: ['对预算敏感的出行', '极光优先的住宿'],
      },
      {
        name: '一月',
        pitch: '当地人的选择',
        body:
          '一月下半月是安静的甜蜜点，旺季价格已回落，白昼明显变长，积雪稳定，极光最活跃。圣诞人潮已散，二月学校假期人潮尚未到来。',
        bestFor: ['长住', '蜜月旅人', '极光摄影'],
        avoidIf: ['任何程度上需要温暖天气的人'],
      },
      {
        name: '二月',
        pitch: '极光最强的月份',
        body:
          '二月中到三月中，统计上是全年最强的极光窗口，暗夜与活跃太阳天气叠合。因欧洲学校假期，长住又回到旺季价；请提前六个月预订。',
        bestFor: ['玻璃冰屋', '极光打卡之旅'],
        avoidIf: ['临时起意的计划者'],
      },
      {
        name: '三月',
        pitch: '光回来了',
        body:
          '白昼迅速变长，到月末已有 13 小时日照。极光在黑暗的清晨和深夜仍然强。朝南的山坡可玩春雪滑雪。是最上镜的滑雪月份。',
        bestFor: ['滑雪进出的长住', '既想要光又想要极光的人'],
        avoidIf: ['为极夜氛围而来的摄影师'],
      },
      {
        name: '四月',
        pitch: '春雪与光',
        body:
          '雪仍深，山坡上的滑雪一流。极光季在四月上旬、夜色转亮时结束。四月下旬又是过渡季，房价降 30%，房源仍开门，太阳在地平线以上停留 16 小时以上。',
        bestFor: ['季末滑雪长住', '越野滑雪'],
        avoidIf: ['极光优先的行程'],
      },
    ],
    bestForLabel: '适合',
    skipIfLabel: '不适合',
    cheatKicker: '当地人的速查表',
    cheatH2: '当地人留给自己的三周。',
    cheatP1:
      '<strong class="text-charcoal">十一月底（第 47–48 周）。</strong>积雪刚稳定，一年中最暗的几周开始，极光季全面活跃。长住房价较旺季减 40–50%。部分房源尚未完全开放，订前确认。',
    cheatP2:
      '<strong class="text-charcoal">一月下半月（第 3–4 周）。</strong>全季极光与成本之比最佳的一周。圣诞人潮已散，二月学校假期未启，白昼渐长，积雪全数就位。我们的编辑正是这时去度假。',
    cheatP3:
      '<strong class="text-charcoal">四月下旬（第 16–17 周）。</strong>春雪滑雪的顶峰，太阳每天在地平线以上 16 小时，北坡积雪仍深。极光窗口已关，但单是这光就值得一行。复活节后房价降 30%。',
    marginLabel: '预订时机',
    marginBody:
      '二月旺季：提前六个月订。一月下旬：三个月。过渡季（十一月、四月下旬）：六到八周即可。圣诞/跨年：至少九个月，并备好替代日期，因为旺季房源开春就没了。',
    readGuide: '阅读预订指南',
    seeLong: '查看长期入住',
  },
  destinationPage: {
    metaTitleSuffix: '住在哪里 | StayInLapland',
    pageHeroEyebrow: '拉普兰目的地',
    notFoundKicker: '页面未找到',
    notFoundTitle: '该目的地不在列表中。',
    notFoundBody: '我们目前覆盖罗瓦涅米、莱维、萨利色尔卡、伊纳里和于拉斯。',
    backHome: '返回首页',
    authorNoteFor: (n) => `${n} 的长住视角，与当地合作伙伴共同撰写并核实。`,
    recommendedIn: (n) => `${n} 的推荐`,
    whereToStay: '到底住在哪里。',
    minStayLabel: '最少入住：',
    perNight: '/ 晚',
    checkRates: '查看价格',
    seeAll: '查看全部',
    liveAvailabilityIn: (n) => `在 ${n} 查实时空房？`,
    networkLeadA: '我们的网络只排名 16 处房源。Trip.com 列出今冬在 ',
    networkLeadB: ' 运营的其余一切，灵活改期、按设施筛选、查看全部房源。',
    browseInDest: (n) => `浏览 Trip.com, ${n}`,
    imageNote:
      '图片仅为示意：展示的是住宿类型与当地风景，并非该住处本身的房间。',
    landscapeAlt: (n) => `${n}的冬季风景，芬兰拉普兰`,
    bucketLabels: {
      'long-stays': '长期入住',
      'hotels': '酒店',
      'glass-igloos': '玻璃冰屋',
      'wilderness': '荒野住宿',
    },
  },
  hotelsData: [
    {
      name: 'Arctic TreeHouse Resort',
      location: '罗瓦涅米',
      highlight: '设计酒店 · 林缘套房',
      description:
        '一家 70 套房的设计酒店，嵌在罗瓦涅米圣诞公园后方的松林里。每间套房都有朝向树林的全景玻璃幕墙和北欧极简内饰。自家餐厅 Rakas 实力强劲、取材本地；度假村的桑拿村向所有客人开放。',
    },
    {
      name: 'Arctic Light Hotel',
      location: '罗瓦涅米市中心',
      highlight: '精品 57 间客房 · 1939 年功能主义建筑',
      description:
        '一家位于 1939 年功能主义建筑里的 57 间客房精品酒店，曾是当地报社，1944 年拉普兰战争毁掉罗瓦涅米后重建。每层楼有不同的室内主题；顶层套房自带桑拿。是城里建筑上最讲究的一家酒店。',
    },
    {
      name: 'Levi Spirit',
      location: '莱维',
      highlight: '设计别墅 · 水疗 · 滑雪进出',
      description:
        '位于莱维山脚的高端别墅酒店。室外私人热浴缸、每栋别墅内置桑拿、可滑雪进出缆车，以及全套水疗服务。为成人而建，没有儿童项目，只有安静的房间和好食物。',
    },
    {
      name: 'Lapland Hotels Saaga',
      location: '于拉斯耶尔维（于拉斯）',
      highlight: '于拉斯经典 · 滑雪进出 · 水疗与泳池',
      description:
        '位于于拉斯较安静的于拉斯耶尔维一侧的经典酒店，距 Iso-Ylläs 缆车约百米，冬季可滑雪进出。标准房与高级房房价含泳池、水疗和健身房；公寓另配私人桑拿。自助餐厅 Biegga 望向山峦与于拉斯耶尔维湖。',
    },
    {
      name: 'Star Arctic Hotel',
      location: '萨利色尔卡',
      highlight: '山顶 · 天最暗 · 套房与玻璃木屋混合',
      description:
        '一处混合型住宿，萨利色尔卡之上最高点的经典酒店客房，外加玻璃屋顶木屋。几乎零光污染。酒店客房透过超大窗户享有同样的山顶景观，价格约比木屋便宜 40%。',
    },
  ],
  longStaysData: [
    {
      name: 'Arctic TreeHouse Resort，长住',
      location: '罗瓦涅米',
      highlight: '设计套房 · 周价 · 桑拿村',
      description:
        '位于圣诞公园边缘、俯瞰松林的设计套房。周价较每晚价降 25%。每间套房配小厨房、全景玻璃幕墙，并可使用度假村桑拿村，是在罗瓦涅米不必租毛坯木屋就能好好长住的少数方式之一。',
    },
    {
      name: 'Levi Residences，顶层套房',
      location: '莱维村',
      highlight: '两居 · 滑雪进出 · 私人桑拿 · 周价',
      description:
        '位于莱维山脚的两居公寓，步行可达缆车与村庄。每户配私人柴烧桑拿、真正的厨房，十二月至三月起订四晚。适合既想滑一周雪、又不愿放弃城镇便利的家庭。',
    },
    {
      name: 'Lapland Hotels Ounasvaara Chalets',
      location: '罗瓦涅米 · 奥纳斯瓦拉山',
      highlight: '滑雪进出 · 步行可达罗瓦涅米市中心',
      description:
        '奥纳斯瓦拉山上设备齐全的木屋。冬季可滑雪进出，步行十分钟到罗瓦涅米市中心。若想兼得城镇便利与北极清晨，这是最灵活的长住选择。',
    },
    {
      name: "Lapland Hotels Bear's Lodge",
      location: '皮哈-卢奥斯托国家公园',
      highlight: '国家公园门口 · 私人桑拿 · 家庭',
      description:
        '皮哈-卢奥斯托国家公园旁的传统原木木屋。全套厨房、私人柴烧桑拿、可达湖畔。若多周家庭出行的日子围着雪鞋徒步和越野滑道转、而非观光，这便是正确答案。',
    },
    {
      name: 'Wilderness Hotel Nangu，湖畔别墅',
      location: '伊纳里湖南岸',
      highlight: '萨米主导的活动 · 湖景 · 长住价',
      description:
        '伊纳里湖畔、房间朝水的别墅。萨米人带领的冰钓、护林员向导的荒野滑雪，二十分钟外是伊纳里萨米博物馆。四晚起享长住价，是湖畔长住中最具文化气息的一处。',
    },
  ],
  glassIgloosData: [
    {
      name: 'Kakslauttanen Arctic Resort',
      location: '萨利色尔卡',
      highlight: '元祖玻璃冰屋 · 提供 Kelo-Glass',
      description:
        '发明现代玻璃冰屋的度假村。要选 Kelo-Glass，而非经典玻璃冰屋，Kelo 把全景玻璃屋顶与带暖气的木屋结构、小厨房和壁炉结合在一起。住满两晚才最划算。',
    },
    {
      name: 'Levin Iglut',
      location: '莱维山',
      highlight: '电动极光床 · 山顶位置',
      description:
        '位于莱维山、远在村庄光罩之上的高端玻璃冰屋。电动床朝极光弧调整，每户配私人小厨房，工程上是芬兰五家度假村里最好的。',
    },
    {
      name: 'Aurora Village',
      location: '伊瓦洛',
      highlight: '伊瓦洛附近的荒野环境 · 木屋间距宽',
      description:
        '伊瓦洛附近未经扰动的森林里的玻璃屋顶木屋。木屋间距宽以保私密，周遭够暗，极光能透过薄云显现。是本站最有荒野感的玻璃冰屋住宿。',
    },
    {
      name: 'Aurora Pyramids',
      location: '伊纳里湖',
      highlight: '金字塔木屋 · 湖面倒影',
      description:
        '伊纳里湖畔金字塔形的玻璃幕墙木屋。当风速降到每秒 3 米以下，封冻的湖面会映出极光弧，这种观测几何，别的芬兰住宿都给不了。',
    },
  ],
  wildernessData: [
    {
      name: 'Iso-Syöte Eagle View Suites',
      location: 'Iso-Syöte（普达斯耶尔维，拉普兰以南不远）',
      highlight: '林线之上 · 可从奥卢抵达',
      description:
        '建在 Iso-Syöte 山海拔 432 米处的原木套房，芬兰最南的真正山丘。无需飞往萨利色尔卡的长途，即可在林线之上观赏极光，距奥卢机场 90 分钟。',
    },
    {
      name: 'Wilderness Hotel Muotka',
      location: '萨利色尔卡一带',
      highlight: '极光叫醒服务 · 酒店般的舒适',
      description:
        '朝向四周山丘、整面玻璃的极光木屋。现场极光猎人在活动转强时叫醒客人，很实用，因为多数极光窗口都在午夜之后。荒野位置里的酒店般舒适。',
    },
  ],
  destinationsData: [
    {
      slug: 'rovaniemi',
      pitch:
        '芬兰拉普兰的首府，唯一一座拥有真正冬季餐饮场景、运转中的机场枢纽和全年设计文化的拉普兰城市。',
      longStayAngle:
        '若您的长住包含在拉普兰远程办公的工作日和往北的周末出行，这便是合适的大本营，快速 wifi、直飞斯德哥尔摩的航班、淡季照常营业的餐厅。',
    },
    {
      slug: 'levi',
      pitch:
        '按缆车票销售额计芬兰最大的滑雪度假村，25,000 个床位、滑雪进出公寓，还有一条真正的村庄主街。',
      longStayAngle:
        '长住逻辑：滑雪进出公寓自十二月至四月按周出租。缆车每天运行，村中餐厅夜夜营业，你可以在这里好好过上一季。',
    },
    {
      slug: 'saariselka',
      pitch:
        '纬度比罗瓦涅米更高，雪更硬，天更暗。是最把冬天当回事的拉普兰村庄。',
      longStayAngle:
        '长住逻辑：租一栋山丘上的木屋，写一本书。少有干扰。出色的越野滑雪网络、附近的哈士奇农场，没有城市的纷扰。',
    },
    {
      slug: 'inari',
      pitch: '萨米文化之都，伊纳里湖（芬兰第三大湖），本站最北的长住大本营。',
      longStayAngle:
        '长住逻辑：湖本身就是活动。每天清晨冰钓、横穿封冻湖面的越野滑雪、门口的伊纳里萨米博物馆与 SIIDA 文化中心。',
    },
    {
      slug: 'yllas',
      pitch:
        '比莱维更安静，雪季更长，约 300 公里维护良好的越野雪道穿越国家公园。',
      longStayAngle:
        '长住逻辑：越野滑道网络是看点。这里的木屋租赁自十一月底至五月初按周出租。对不需要每天乘缆车滑高山的滑雪者而言，是最好的长住之选。',
    },
  ],
  allCategoriesSummary: [
    { slug: 'long-stays', description: '周租与月租，别墅、设计木屋、滑雪公寓。' },
    { slug: 'hotels', description: '适合短住的拉普兰精品、设计与经典酒店。' },
    { slug: 'glass-igloos', description: '拉普兰的标志形式，四处对得起这个名字的度假村。' },
    { slug: 'wilderness', description: '最后一条公路之后，给认真旅人的两处隐居地。' },
  ],
};
