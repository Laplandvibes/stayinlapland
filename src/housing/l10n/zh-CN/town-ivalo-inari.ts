/**
 * Kiina (yksinkertaistettu) (zh-CN) · town-ivalo-inari. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/ivalo-inari.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'inari', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: '伊瓦洛与伊纳里租房：市政与私人房东',
  metaDescription:
    '在伊瓦洛、伊纳里和萨利色尔卡租房：500多套市政住房（Inarin Vuokra-asunnot Oy）、市镇列出的私人房东，以及 Kela 的补贴。',
  breadcrumb: '伊瓦洛与伊纳里',
  hero: {
    eyebrow: '伊纳里市镇，7,244位居民',
    title: '伊瓦洛与伊纳里租房。',
    subtitle:
      '芬兰最北的租房市场：一家市政公司、几位私人房东，外加萨利色尔卡的雪季。从哪里入手。',
  },
  authorNote:
    'Inarin Vuokra-asunnot Oy 和私人房东的信息来自伊纳里市镇自己的住房页面，人口来自芬兰统计局，每平方米租金来自芬兰统计局（拉普兰地区，2026年第3季度）。已于2026年11月15日核对。',
  intro: [
    '伊纳里市镇有7,244位居民（芬兰统计局，2025年12月31日），据市镇称，人们对来这里居住的兴趣有所增加，所以它在自己的页面上整理了一份出租房提供者名单（inari.fi）。',
    '市属公司 Inarin Vuokra-asunnot Oy 在伊瓦洛、伊纳里、萨利色尔卡、Nellim 和 Sevettijärvi 出租500多套住房，从单间公寓到家庭公寓都有。市镇名单上的私人房东有 Bilto Oy、Ivalon vuokra-asunnot、IvaloCenter、Rakennusliike Holmberg Oy 和 Uni Kodit（inari.fi）。',
    '芬兰统计局没有单独公布伊纳里的租金数字，所以下面显示的是拉普兰地区的数字。萨利色尔卡季节工的住房另有专门页面。',
  ],
  sections: [
    {
      id: 'channels',
      kicker: '向谁申请',
      h2: '市属公司和市镇的名单。',
      band: true,
      cards: [
        {
          title: 'Inarin Vuokra-asunnot Oy',
          body: '市政住房公司：在伊瓦洛、伊纳里、萨利色尔卡、Nellim 和 Sevettijärvi 有500多套住房，基本服务都在附近。空房和申请请到公司自己的网站上查看。',
          href: 'https://inarinvuokra-asunnot.fi/',
          linkLabel: 'inarinvuokra-asunnot.fi',
          event: 'inari_company',
        },
        {
          title: '伊纳里市镇：私人房东',
          body: '市镇的住房页面列出了 Bilto Oy、Ivalon vuokra-asunnot、IvaloCenter、Rakennusliike Holmberg Oy 和 Uni Kodit 及其联系方式，还有 Facebook 上的索丹屈莱–伊纳里–乌茨约基租房群。更多信息可联系 inari@inari.fi。',
          href: 'https://www.inari.fi/fi/palvelut/asuminen.html',
          linkLabel: 'inari.fi：住房',
          event: 'inari_city',
        },
        {
          title: 'Oikotie 和 Vuokraovi',
          body: '伊纳里市镇下的私人房源；伊瓦洛和萨利色尔卡的住房在同一个搜索里。房源不多，所以请设置搜索提醒。',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/inari',
          linkLabel: 'Oikotie：伊纳里租房',
          event: 'oikotie',
        },
        {
          title: '给萨利色尔卡的季节工',
          body: '萨利色尔卡的雇主也自己为员工提供住房，市属公司在萨利色尔卡也有住房。面试时请问问住房的事；整体情况见季节工住房页面。',
          href: '/seasonal-worker-housing',
          linkLabel: '季节工住房',
          event: 'seasonal_page',
        },
      ],
    },
    {
      id: 'prices',
      kicker: '租金多少',
      h2: '2026年7月至9月拉普兰地区每平方米租金。',
      table: {
        caption: '平均租金（欧元/平方米/月），自由市场出租公寓，2026年第3季度',
        head: ['', '拉普兰（地区）', '全国'],
        rows: [
          ['单间公寓', '17.25', '20.49'],
          ['两室公寓', '12.87', '15.07'],
          ['三室及以上', '11.08', '13.98'],
          ['所有公寓', '13.14', '15.99'],
        ],
        foot: '芬兰统计局，2026年第3季度租金，表15fa。没有单独公布伊纳里的数字。',
      },
    },
    {
      id: 'housing-allowance',
      kicker: 'Kela 住房补贴',
      h2: '伊纳里属于 Kela 的“其他市镇”。',
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
      id: 'contract',
      kicker: '合同',
      h2: '押金及其退还。',
      bullets: [
        '押金最多为三个月租金（《住宅租赁法》第8条）。',
        '自2026年10月1日起，押金必须在租约结束后14天内退还，或在此期限内书面说明扣留的理由（Rakli）。',
      ],
    },
  ],
  faqs: [
    {
      q: '在伊瓦洛去哪里找出租房？',
      a: '可以找市属公司 Inarin Vuokra-asunnot Oy，它在伊瓦洛、伊纳里和萨利色尔卡有500多套住房，也可以找市镇列出的私人房东（Bilto、Ivalon vuokra-asunnot、IvaloCenter、Rakennusliike Holmberg、Uni Kodit）。找房网站上的房源很少。',
    },
    {
      q: '萨利色尔卡有出租房吗？',
      a: '市属公司在萨利色尔卡也有住房，雇主也自己为季节工提供住房。在公开市场上，萨利色尔卡的住房大多是度假屋。',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: '最初的几晚',
    h2: '在拿到钥匙之前。',
    lead: '合作伙伴的搜索页面会按今天的价格显示伊瓦洛和萨利色尔卡的空房。',
    chips: [
      { label: '伊瓦洛', destination: 'Ivalo', sid: 'rentals_ivalo_first_weeks' },
      { label: '萨利色尔卡', destination: 'Saariselkä', sid: 'rentals_saariselka_first_weeks' },
    ],
  },
  sources: pickSources('zh-CN', SOURCES, common.sourceLabels),
};

export default copy;
