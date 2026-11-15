/**
 * Kiina (yksinkertaistettu) (zh-CN) · town-kemijarvi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/kemijarvi.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'tkVaesto', 'kemijarvi', 'kemijarviHaku', 'kemijarviVuostimo', 'kemijarviTalousarvio', 'kemijarviTietoa',
  'kemijarviToihin', 'tkVuokrat', 'tkVuokratPostinumero', 'kela', 'tkAvainluvut', 'osrm', 'redu', 'ahvl', 'rakli',
] as const;

const copy: HousingPageCopy = {
  metaTitle: '凯米耶尔维租房：市属560套住房及申请方式',
  metaDescription:
    '在凯米耶尔维租房：市属560套出租住房、在线申请、2026年的租金上调、皮哈附近的 Vuostimo 联排住宅，以及 Kela 住房补贴。',
  breadcrumb: '凯米耶尔维',
  hero: {
    eyebrow: '凯米耶尔维，6,919位居民',
    title: '凯米耶尔维租房。',
    subtitle:
      '芬兰最北的城市，市政府拥有560套出租住房，其中一些是空着的。向哪里申请，搬来之前要知道什么。',
  },
  authorNote:
    '人口来自芬兰统计局，住房数量和申请方式来自凯米耶尔维市的页面，租金上调和入住率目标来自市政府2026年预算。已于2026年11月15日核对。',
  intro: [
    '凯米耶尔维在2025年底有6,919位居民，比一年前少了35人（芬兰统计局）。该市自称是芬兰最北的城市，并表示市中心的各项服务步行即可到达（kemijarvi.fi）。',
    '市属的两家房产公司 Kemijärven Vuokratalot 和 Kemijärven Töveli 拥有560套出租住房（kemijarvi.fi）。市政府预算把这些住房80–85%有人入住视为现实的目标，所以确实有空房。',
    '租金在上涨：Kemijärven Vuokratalot 在2026年2月1日把租金上调了4.5%，Töveli 在2026年7月1日上调了5%。同样的涨幅也写进了2027年和2028年的计划（2026年预算）。',
  ],
  sections: [
    {
      id: 'channels',
      kicker: '向谁申请',
      h2: '先找市属公司，再找找房网站。',
      band: true,
      cards: [
        {
          title: '市属出租住房',
          body: '市属的560套住房分布在市中心、Särkikangas、Sipovaara、Isokylä、Halosenranta 和 Vuostimo。可在线申请，也可以向 Sortteeri（Vapaudenkatu 8）领取纸质表格。申请有效期为四个月，可以续期。',
          href: 'https://kemijarvi.fi/asuminen-ja-ymparisto/asuminen/kemijarven-kaupungin-vuokratalot/asunnon-hakeminen/',
          linkLabel: 'kemijarvi.fi：申请住房',
          event: 'kemijarvi_city',
        },
        {
          title: 'Vuostimo，距皮哈14公里',
          body: '市属的1987年联排住宅，位于 Vuostimo，在市中心以北约35公里。皮哈通图里滑雪度假村在14公里之外，所以这是市属出租住房中离皮哈最近的。',
          href: 'https://kemijarvi.fi/asuminen-ja-ymparisto/asuminen/kemijarven-kaupungin-vuokratalot/vuokratalokohteet/vuostimo/',
          linkLabel: 'kemijarvi.fi：Vuostimo',
          event: 'kemijarvi_vuostimo',
        },
        {
          title: 'Oikotie 和 Vuokraovi',
          body: '凯米耶尔维市镇下的私人和中介房源。市政府的住房页面没有列出私人房东，所以他们的房子要到找房网站上找。',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kemij%C3%A4rvi',
          linkLabel: 'Oikotie：凯米耶尔维租房',
          event: 'oikotie',
        },
      ],
    },
    {
      id: 'prices',
      kicker: '租金多少',
      h2: '市属公司没有公布它们的租金。',
      table: {
        caption: '平均租金（欧元/平方米/月），自由市场出租公寓，2026年第3季度',
        head: ['', '拉普兰（地区）', '全国'],
        rows: [
          ['单间公寓', '17.25', '20.49'],
          ['两室公寓', '12.87', '15.07'],
          ['三室及以上', '11.08', '13.98'],
          ['所有公寓', '13.14', '15.99'],
        ],
        foot: '芬兰统计局，2026年第3季度租金，表15fa。没有单独公布凯米耶尔维的数字，而且地区数字包含了更贵的罗瓦涅米。',
      },
      paras: [
        '<strong>凯米耶尔维自己的数字来自2022年。</strong>在市中心的邮政编码区98100，2022年1月至3月自由市场单间公寓平均为每平方米12.15欧元，两室公寓为每平方米9.10欧元。此后的每个季度都被隐去了：观测数太少时，芬兰统计局不公布某个邮政编码区的数字（表13eb）。',
        '市属公司没有在网上公布租金。接受报价之前，请向住房秘书询问租金，并记住2026年租金上涨过：Vuokratalot 上调4.5%，Töveli 上调5%。',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Kela 住房补贴',
      h2: '凯米耶尔维属于 Kela 的“其他市镇”。',
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
      id: 'work',
      kicker: '工作与交通',
      h2: '搬来之前，先把工作谈好。',
      bullets: [
        '据市政府称，除市政府本身之外，主要雇主还有 Keitele Group、Festivo Porkka Group 和 Kela 的联络中心，以及零售、服务和旅游企业（2026年预算）。',
        '2024年，失业者占劳动力的15.6%，芬兰全国为11.7%（芬兰统计局）。',
        'Suomutunturi 距市中心46公里，皮哈通图里距市中心50公里（OpenStreetMap）。Suomu 位于凯米耶尔维境内；皮哈则属于相邻的佩尔科森涅米市镇。',
        '罗瓦涅米机场在80公里之外（OpenStreetMap），市政府称有直达铁路一路通到赫尔辛基（kemijarvi.fi）。',
      ],
    },
    {
      id: 'contract',
      kicker: '合同',
      h2: '值得了解的两条法律规定。',
      bullets: [
        '押金最多为三个月租金（《住宅租赁法》第8条）。',
        '自2026年10月1日起，押金必须在租约结束后14天内退还，或在此期限内书面说明扣留的理由（Rakli）。',
      ],
    },
  ],
  faqs: [
    {
      q: '怎样申请凯米耶尔维的市属住房？',
      a: '通过市政府网站上的在线申请，或向 Sortteeri（Vapaudenkatu 8）领取纸质表格。申请有效期为四个月，可再续期四个月。会查信用记录，附件没有到齐之前，申请不会被处理。租户遴选会议通常每隔一个星期三举行（kemijarvi.fi）。',
    },
    {
      q: '凯米耶尔维有空置的出租房吗？',
      a: '很可能有。市政府预算把公司住房80–85%有人入住视为现实的目标（2026年预算）。请向住房秘书询问哪些房子是空的。',
    },
    {
      q: '凯米耶尔维的出租公寓多少钱？',
      a: '目前没有公布的平均数。市中心邮政编码区最新的数字来自2022年初：单间公寓每平方米12.15欧元，两室公寓每平方米9.10欧元。2026年7月至9月拉普兰的平均值为每平方米13.14欧元，且包含了更贵的罗瓦涅米（芬兰统计局）。',
    },
    {
      q: '凯米耶尔维有学生住房吗？',
      a: '拉普兰教育中心 REDU 在凯米耶尔维设有学生宿舍。仍在义务教育阶段的学生免费住宿，空出的床位按标价租给其他学生（redu.fi）。',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: '最初的几晚',
    h2: '亲自去看房。',
    lead: '合作伙伴的搜索页面会按今天的价格显示凯米耶尔维和皮哈的空房与公寓。',
    chips: [
      { label: '凯米耶尔维', destination: 'Kemijärvi', sid: 'rentals_kemijarvi_first_weeks' },
      { label: '皮哈', destination: 'Pyhä', sid: 'rentals_pyha_first_weeks' },
    ],
  },
  sources: pickSources('zh-CN', SOURCES, common.sourceLabels),
};

export default copy;
