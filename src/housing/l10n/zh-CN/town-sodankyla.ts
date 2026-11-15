/**
 * Kiina (yksinkertaistettu) (zh-CN) · town-sodankyla. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/sodankyla.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'tkVaesto', 'sodankyla', 'asentopuulaaki', 'asentopuulaakiHaku', 'asentopuulaakiVapaat', 'asentopuulaakiMuutto',
  'sodankyla2025', 'yle2025sodankyla', 'tkVuokratPostinumero', 'sodankylaOpintolaina', 'yle2026opintolaina', 'kela',
  'maavoimat', 'yle2026kasarmi', 'yle2026kevitsa', 'angloSakatti', 'yle2026sakatti', 'sodankylaMuuttajalle', 'fmi',
  'osrm', 'redu', 'sodankylaAsuntola', 'ahvl', 'rakli',
] as const;

const copy: HousingPageCopy = {
  metaTitle: '索丹屈莱租房：720套市政住房及其租金',
  metaDescription:
    '在索丹屈莱租房：Asentopuulaaki Oy 约720套市政住房、每平方米约7.40–18欧元的租金、在线申请、学生贷款补偿试点以及 Kela 的补贴。',
  breadcrumb: '索丹屈莱',
  hero: {
    eyebrow: '索丹屈莱，8,095位居民',
    title: '索丹屈莱租房。',
    subtitle:
      '一个市镇里同时有驻军、矿山和科学社区，主村长期的住房短缺已随着新楼落成而缓解。向哪里申请，要花多少钱。',
  },
  authorNote:
    '人口来自芬兰统计局，住房数量来自市镇的页面，租金、条件和空置住房来自 Asentopuulaaki Oy 自己的页面，就业信息来自芬兰陆军、Yle 和各公司。已于2026年11月15日核对。',
  intro: [
    '索丹屈莱在2025年底有8,095位居民（芬兰统计局）。市镇拥有约720套出租住房，由它的子公司 Asentopuulaaki Oy 出租（sodankyla.fi）。公司名单上几乎每套住房都在主村；其余的在 Aska、Orajärvi、Riipi、Torvinen 和 Vaalajärvi。',
    '据市镇称，多年困扰索丹屈莱的住房短缺已经缓解：2025年夏天，在 Jeesiöjoki 河边落成了拥有36套新住房的 Käpyriihi（索丹屈莱市镇，2025年7月2日）。公司的找房页面会列出任一时点空置或即将空出的住房，并附有租金和空出的日期（Asentopuulaaki）。',
    '短缺并没有完全结束。2025年9月，市镇的技术主管对 Yle 说，尽管有工作岗位，住房短缺仍让索丹屈莱难以招到工人（Yle，2025年9月11日）。',
  ],
  sections: [
    {
      id: 'prices',
      kicker: '租金多少',
      h2: '旧楼每平方米约10欧元，新楼18欧元。',
      table: {
        caption: 'Asentopuulaaki Oy 的租金，欧元/平方米/月，2026年11月15日房产清单',
        head: ['楼宇', '欧元/平方米/月'],
        rows: [
          ['Käpyriihi，2025年落成', '18.00'],
          ['Peuranpalas（2013年）和 Kehtoranta（2015年）', '12.80–13.00'],
          ['1977–1998年的联排、外廊式和公寓楼', '8.80–12.50'],
          ['市中心的公寓楼，1968–1970年', '10.20'],
          ['外围村庄的联排住宅', '7.40–10.90'],
        ],
        foot: '根据 Asentopuulaaki Oy 房产清单上每套住房的租金计算，2026年11月15日：42栋楼宇，597套住房。押金为一个月租金，水费预收，家用电费由租客承担。在电采暖的村庄住宅里，租客还要支付取暖费，公司估计夏季每月约100欧元，冬季约200欧元。',
      },
      paras: [
        '<strong>算例：</strong>市中心公寓楼里一套55平方米的两室公寓每月632欧元；Käpyriihi 一套42平方米的两室公寓756欧元；Kaanaanmaa 一套80平方米的三室联排住宅800欧元。',
        '<strong>私人租金：</strong>2025年10月至12月，索丹屈莱市中心邮政编码区的自由市场两室公寓平均为每平方米11.73欧元（芬兰统计局，表13eb）。没有更新的市镇数字：索丹屈莱不在芬兰统计局当前的租金表里。',
      ],
    },
    {
      id: 'channels',
      kicker: '向谁申请',
      h2: '先找市属公司，再找找房网站。',
      band: true,
      cards: [
        {
          title: 'Asentopuulaaki Oy',
          body: '出租市镇约720套住房的市属子公司。您在线申请，并附上收入证明。会查信用记录，逾期付款记录对您不利。',
          href: 'https://www.asentopuulaaki.fi/asunnon-hakeminen/',
          linkLabel: 'asentopuulaaki.fi：申请住房',
          event: 'asentopuulaaki',
        },
        {
          title: '空置住房',
          body: '公司的找房页面会显示空置和即将空出的住房，附有租金和空出的日期。名单在公司自己的网站上更新，所以申请之前请先查看。',
          href: 'https://www.asentopuulaaki.fi/asuntohaku/',
          linkLabel: 'asentopuulaaki.fi：找房',
          event: 'asentopuulaaki_vapaat',
        },
        {
          title: 'Oikotie 和 Vuokraovi',
          body: '索丹屈莱市镇下的私人房源。市镇的住房页面没有点名自己公司以外的房东，所以私人住房要到找房网站上找。',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/sodankyl%C3%A4',
          linkLabel: 'Oikotie：索丹屈莱租房',
          event: 'oikotie',
        },
      ],
    },
    {
      id: 'student-loan',
      kicker: '给新居民',
      h2: '应届毕业生最高可得5,800欧元。',
      paras: [
        '应届毕业生如果搬到索丹屈莱、伊纳里或乌茨约基，并以至少全职50%的工作量受雇或自主经营，这三个市镇会为其补偿学生贷款。补偿最高为5,800欧元，按12个月为一期，追溯发放，最长三年（索丹屈莱市镇）。',
        '它涵盖职业高中资格、应用科学大学或大学学位的学生贷款，并且您必须是在此前两年内毕业的。申请将于2027年1月首次处理，据 Yle，申请表格在2026年12月1日开放（Yle，2026年9月1日）。',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Kela 住房补贴',
      h2: '索丹屈莱属于 Kela 的“其他市镇”。',
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
      kicker: '工作',
      h2: '驻军在扩大；矿山将在2034年关闭。',
      bullets: [
        '猎兵旅雇用约400人，每年训练约2,200名义务兵（芬兰陆军）。索丹屈莱驻地正在建造一座可容纳近700名义务兵的营房，预计在2028年初完工（Yle，2026年4月2日）。',
        'Boliden 的 Kevitsa 矿在2026年5月宣布裁减77个岗位，矿山计划在2034年关闭（Yle，2026年5月26日）。',
        'Anglo American 计划中的 Sakatti 矿预计在2032年前后开始运营，但项目仍处于许可阶段，芬兰自然保护协会拉普兰分会已就 Sakatti 的决定向法院提出上诉（Anglo American；Yle，2026年6月18日）。',
        '市镇还提到了 Tähtelä 科学社区和卢奥斯托山区度假村（sodankyla.fi）。卢奥斯托距主村38公里（OpenStreetMap）。',
      ],
    },
    {
      id: 'everyday',
      kicker: '日常生活',
      h2: '这里的极夜只有四天。',
      bullets: [
        '在索丹屈莱，极夜只持续四天，就在圣诞节之前（芬兰气象研究所）。',
        '最近的机场是基蒂莱，在93公里之外，罗瓦涅米市中心在130公里之外（OpenStreetMap）。',
        '对学生：REDU 在索丹屈莱设有学生宿舍，2026年3月，市镇宣布在 Asentopuulaaki 的大户型住房里为高中生和成人学生设立宿舍（redu.fi；索丹屈莱市镇，2026年3月5日）。',
      ],
    },
    {
      id: 'contract',
      kicker: '合同',
      h2: '一个月的通知期。',
      bullets: [
        '在 Asentopuulaaki，通知期限为一个日历月，押金在您搬出约两周后退还（Asentopuulaaki）。',
        '押金最多为三个月租金（《住宅租赁法》第8条）。',
        '自2026年10月1日起，押金必须在租约结束后14天内退还，或在此期限内书面说明扣留的理由（Rakli）。',
      ],
    },
  ],
  faqs: [
    {
      q: '怎样申请索丹屈莱的市政住房？',
      a: '通过 Asentopuulaaki Oy 的在线申请，并附上收入证明，例如工资单。会通过 Suomen Asiakastieto 查信用记录，逾期付款记录对您不利（Asentopuulaaki）。',
    },
    {
      q: '索丹屈莱的出租公寓多少钱？',
      a: '市属公司的旧公寓楼约每平方米10欧元，联排和外廊式住宅多为10–12.50欧元，2025年落成的 Käpyriihi 为18欧元，即一套42平方米的两室公寓每月756欧元（Asentopuulaaki，2026年11月15日）。2025年10月至12月，市中心自由市场的两室公寓平均为每平方米11.73欧元（芬兰统计局）。',
    },
    {
      q: '索丹屈莱有住房短缺吗？',
      a: '曾经持续了多年。据市镇称，随着新楼落成，短缺已经缓解（2025年7月2日），市属公司的找房页面会列出空置和即将空出的住房（Asentopuulaaki）。',
    },
    {
      q: '谁能领取学生贷款补偿？',
      a: '搬到索丹屈莱、伊纳里或乌茨约基、并至少以全职的50%工作或作为个体经营者工作的应届毕业生。补偿最高为三年内5,800欧元，申请将于2027年1月首次处理（索丹屈莱市镇）。',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: '最初的几晚',
    h2: '亲自去看房。',
    lead: '合作伙伴的搜索页面会按今天的价格显示索丹屈莱和卢奥斯托的空房与公寓。',
    chips: [
      { label: '索丹屈莱', destination: 'Sodankylä', sid: 'rentals_sodankyla_first_weeks' },
      { label: '卢奥斯托', destination: 'Luosto', sid: 'rentals_luosto_first_weeks' },
    ],
  },
  sources: pickSources('zh-CN', SOURCES, common.sourceLabels),
};

export default copy;
