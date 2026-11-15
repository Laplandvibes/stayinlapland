/**
 * Kiina (yksinkertaistettu) (zh-CN) · town-rovaniemi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/rovaniemi.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'rovaniemi', 'das', 'yle2025das', 'yle2026rovaniemi', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: '罗瓦涅米租房：租金、房东与申请方式',
  metaDescription:
    '在罗瓦涅米租公寓：每平方米租金（芬兰统计局2026年）、市政府列出的房东、面向学生的 DAS、Kela 住房补贴，以及什么时候申请。',
  breadcrumb: '罗瓦涅米',
  hero: {
    eyebrow: '罗瓦涅米，人口66,191',
    title: '罗瓦涅米租房。',
    subtitle:
      '拉普兰最大的城市，人口66,191。租金多少，向谁申请，什么时候申请。',
  },
  authorNote:
    '每平方米租金来自芬兰统计局（2026年7月至9月），房东来自罗瓦涅米市政府自己的住房页面，短缺数据来自 Yle。已于2026年11月15日核对。',
  intro: [
    '罗瓦涅米有66,191位居民（芬兰统计局，2025年12月31日），单间公寓的竞争十分激烈。学生住房基金会 DAS 在2026年夏天收到约550份紧急申请，比一年前多15%，近90%的申请人想要单间公寓。此外，市里的单间公寓在冬季会短租给游客（Yle，2026年7月27日）。据 DAS 总经理说，8月和9月它无法给每位申请人提供住房。',
    '一家把约250名工人带到拉普兰的招聘公司，把他们安置在罗瓦涅米大约十个不同的地方（Yle，2026年3月9日）。季节工、学生和游客都在争抢同样的小户型。',
    '好消息是价格：罗瓦涅米的平均租金为每平方米14.63欧元，低于全国平均的15.99欧元（芬兰统计局2026年第3季度）。下面是按户型划分的数字，以及申请的渠道。',
  ],
  sections: [
    {
      id: 'prices',
      kicker: '租金多少',
      h2: '2026年7月至9月罗瓦涅米每平方米租金。',
      table: {
        caption: '平均租金（欧元/平方米/月），自由市场出租公寓，罗瓦涅米，2026年第3季度',
        head: ['', '全部租约', '新签租约', '全国'],
        rows: [
          ['单间公寓', '18.63', '20.14', '20.49'],
          ['两室公寓', '14.40', '16.40', '15.07'],
          ['三室及以上', '12.29', '13.66', '13.98'],
          ['所有公寓', '14.63', '15.93', '15.99'],
        ],
        foot: '芬兰统计局，2026年第3季度租金，表15fa。新签租约 = 该季度内开始的合同，即眼下空房的要价。',
      },
      paras: [
        '<strong>算例：</strong>一套30平方米的单间公寓每月约560欧元（18.63 × 30），新签租约约600欧元（20.14 × 30）；一套50平方米的两室公寓约720欧元（14.40 × 50）；一套75平方米的三室公寓约920欧元（12.29 × 75）。水电费通常另算。',
        '新签租约的单间公寓价格为每平方米20.14欧元，比罗瓦涅米所有单间公寓的平均值18.63欧元高出1.51欧元（8%）：现在空出来的单间公寓比已出租的贵。与全国平均相比，罗瓦涅米在各种户型上都更便宜。',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Kela 住房补贴',
      h2: '罗瓦涅米的上限更高。',
      lead:
        '一般住房补贴最多为认可住房费用的70%。在罗瓦涅米，认可费用的上限高于拉普兰的其他市镇，因为该市属于 Kela 的24个较大市镇的一组（Kela 2026）。',
      table: {
        caption: '2026年最高住房费用，欧元/月，Kela 的24个较大市镇一组',
        head: ['家庭人数', '最高住房费用'],
        rows: [
          ['1人', '447'],
          ['2人', '652'],
          ['3人', '828'],
          ['4人', '981'],
          ['每多一人', '+134'],
        ],
        foot: 'Kela，2026年一般住房补贴。低于15欧元的补贴不发放。收入会通过基本自付额减少补贴。',
      },
    },
    {
      id: 'channels',
      kicker: '向谁申请',
      h2: '市政府的名单、学生基金会和找房网站。',
      lead: '罗瓦涅米市政府的住房页面列出了房东和找房服务；页面上没有列出市政府自己的住房公司。',
      band: true,
      cards: [
        {
          title: '罗瓦涅米市：房东',
          body: '市政府的页面指向企业房东 KAS asunnot、M2-Kodit、Tarveasunnot、Avara 和 Lumo，以及找房服务 Oikotie、Vuokraovi 和 Qasa。每位房东都有自己的在线申请；请同时向几家申请。',
          href: 'https://www.rovaniemi.fi/Asuminen-ja-ymparisto/Asuminen',
          linkLabel: 'rovaniemi.fi：住房',
          event: 'rovaniemi_city',
        },
        {
          title: 'DAS：面向学生',
          body: 'Domus Arctica 基金会有约1,700套住房，其中700套为单间公寓，460套为两室公寓，平均租金为每平方米12.50欧元（Yle，2026年7月27日）。申请全年受理，有效期三个月，8月和9月新生优先。如果您在罗瓦涅米就读义务教育之后的学校，就可以申请。',
          href: 'https://www.das.fi/en/apply/applying-info',
          linkLabel: 'das.fi：申请须知',
          event: 'das',
        },
        {
          title: 'KAS asunnot',
          body: '罗瓦涅米多个街区的出租住房（市政府名单）。在线申请。',
          href: 'https://kas.fi/rovaniemen-vuokrattavat-kas-kodit/',
          linkLabel: 'kas.fi：罗瓦涅米',
          event: 'kas',
        },
        {
          title: 'Lumo',
          body: '在罗瓦涅米拥有楼宇的企业房东。标准合同，在线申请，可快速入住。',
          href: 'https://lumo.fi/en/rental-apartments',
          linkLabel: 'lumo.fi：出租公寓',
          event: 'lumo',
        },
        {
          title: 'Oikotie 和 Vuokraovi',
          body: '全国性的网站收录了大部分私人和中介房源。请按罗瓦涅米市镇筛选，而不要按街区，这样 Ounasvaara、Saarenkylä 和市中心以外的住房也能搜到。',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/rovaniemi',
          linkLabel: 'Oikotie：罗瓦涅米租房',
          event: 'oikotie',
        },
        {
          title: 'NAL Rovaniemi：30岁以下',
          body: '芬兰青年住房协会罗瓦涅米分会为30岁以下的人提供青年住房（市政府名单）。当您无法申请 DAS、又不是学生时，这是一个选择。',
          href: 'https://www.rovaniemi.fi/Asuminen-ja-ymparisto/Asuminen',
          linkLabel: 'rovaniemi.fi：青年住房',
          event: 'nal',
        },
      ],
    },
    {
      id: 'when',
      kicker: '什么时候申请',
      h2: '每年有两波高峰。',
      bullets: [
        '<strong>8月至9月</strong>最紧张：DAS 无法安置所有申请人，自由市场的单间公寓也很稀缺（Yle，2026年7月27日）。',
        '<strong>11月至12月：</strong>一些单间公寓会在冬季短租给游客。定期合同往往在10月下旬到期（Yle，2026年7月27日）。',
        '<strong>春天</strong>，冬季出租的单间公寓会回到市场上。',
        '<strong>押金</strong>最多为三个月租金（《住宅租赁法》第8条），自2026年10月1日起，须在租约结束后14天内退还（Rakli）。',
      ],
    },
  ],
  faqs: [
    {
      q: '罗瓦涅米的单间公寓多少钱？',
      a: '据芬兰统计局，所有租约平均为每平方米18.63欧元，新签租约为每平方米20.14欧元（2026年第3季度）。因此一套30平方米的单间公寓每月约560–600欧元，不含电费。',
    },
    {
      q: '在罗瓦涅米很难租到房吗？',
      a: '8月至9月单间公寓很难租到：DAS 无法安置所有申请人（Yle，2026年7月27日），自由市场的单间公寓也很稀缺。两室和三室的公寓则容易些。',
    },
    {
      q: '不到罗瓦涅米来，也能申请吗？',
      a: '您可以在线向市政府列出的每一位房东以及 DAS 申请。不过仍要亲自去看房，或者要求视频看房，并且只在合同签好之后再付押金。',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: '最初的几周',
    h2: '看房期间住酒店或公寓式酒店。',
    lead: '签约之前亲自去看房子。合作伙伴的搜索页面会按今天的价格显示罗瓦涅米的空房。',
    chips: [
      { label: '罗瓦涅米', destination: 'Rovaniemi', sid: 'rentals_rovaniemi_first_weeks' },
    ],
  },
  sources: pickSources('zh-CN', SOURCES, common.sourceLabels),
};

export default copy;
