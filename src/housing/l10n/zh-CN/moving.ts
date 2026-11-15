/**
 * Kiina (yksinkertaistettu) (zh-CN) · moving. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/moving.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'dvv', 'traficom', 'tkSahko', 'tkPolttoaine', 'kuntaliitto', 'perusopetuslaki', 'fmi', 'foreca',
  'lvDrive', 'lapha', 'laplandwork', 'ahvl', 'rakli',
] as const;

const copy: HousingPageCopy = {
  metaTitle: '搬到拉普兰：头一个月的实用指南',
  metaDescription:
    '迁居登记、冬季轮胎、日托费用、电费和极夜：搬到芬兰拉普兰后的第一个月，需要办妥哪些事、按什么顺序办，附 DVV 和 Traficom 的期限。',
  breadcrumb: '搬到拉普兰',
  hero: {
    eyebrow: '搬到拉普兰：最初的30天',
    title: '搬到拉普兰。',
    subtitle:
      '迁居登记、冬季轮胎、日托、电力合同和极夜：第一个月要办哪些事，按什么顺序办。',
  },
  authorNote:
    '期限来自 DVV、Traficom 和芬兰地方政府协会，极夜时长来自芬兰气象研究所，距离来自 LaplandVibes 自驾路线。已于2026年11月15日核对。',
  intro: [
    '搬到拉普兰要办的手续与芬兰其他地方相同，但有三件事在这里比在南方更要紧：冬季长达半年，距离以数百公里计，而且在小市镇里，各项服务都集中在一处。本页是一份清单，按需要办理的先后顺序排列。',
    '如果您是从国外搬到芬兰，居留许可、个人身份编码、税卡和银行账户请看我们的姐妹站点 <a href="https://laplandwork.com/moving-to-finland" target="_blank" rel="noopener">laplandwork.com</a>。本页从您拿到钥匙那一刻开始。',
  ],
  sections: [
    {
      id: 'week-one',
      kicker: '第一周',
      h2: '四项通知，一个截止日期。',
      bullets: [
        '<strong>向 DVV 提交迁居登记</strong>：最早在搬家日前一个月，最迟在搬家后一周内（DVV）。同一份登记也会通知 Posti。市政服务（日托、学校、健康中心）按您登记的居住市镇提供，所以请立即办理。',
        '<strong>电力合同。</strong>2026年6月，年用电2,500–4,999千瓦时的家庭，电力总价在芬兰全国平均为每千瓦时23.7欧分；年用电超过15,000千瓦时的档位（电采暖住宅属于这一档）为14.9欧分（芬兰统计局）。拉普兰的供暖季很长，所以估算用电量时要往高里估。',
        '<strong>医疗保健</strong>由拉普兰福利服务县（Lapha）负责。非紧急就诊通过您所在地的健康中心；请在该县的网站上找到最近的一家，并在 Omakanta 上注册。',
        '<strong>网络。</strong>签约前先问问住房公司或房东有没有光纤。在人口稀少的地区，移动路由器往往是唯一的选择，远程办公的人应先在房子里测试网络连接。',
      ],
    },
    {
      id: 'car',
      kicker: '汽车与冬季',
      h2: '在罗瓦涅米没有车也能过。其他地方不行。',
      bullets: [
        '<strong>冬季轮胎：</strong>在芬兰，如果天气或路况需要，11月1日至3月31日必须使用冬季轮胎。在同一时期以及路况需要的其他时候，可以使用钉胎。冬季轮胎的主沟深度必须至少为3.0毫米（Traficom）。',
        '<strong>燃油：</strong>2026年6月，95E10汽油在芬兰全国平均为每升2.09欧元，柴油为2.15欧元（芬兰统计局）。距离长，使这一项在拉普兰比在南方占的比重更大。',
        '<strong>距离</strong>来自 LaplandVibes 自驾路线：奥卢–凯米105公里，凯米–罗瓦涅米118公里，罗瓦涅米–于拉斯（阿卡斯隆波洛）175公里，索丹屈莱–萨利色尔卡130公里，莱维–基尔皮斯耶尔维258公里。拉普兰比地图上看起来大得多。',
        '<strong>发动机预热器与车内加热器。</strong>严寒中，出发前要先给车预热；停车场里的预热电源桩是拉普兰的标准配置。请让租约写明包含一个带电源桩的车位。',
      ],
      image: {
        src: '/images/housing-kittila-airport.webp',
        alt: '夏日里基蒂莱机场的航站楼',
        caption: '基蒂莱机场，2026年7月。莱维和于拉斯由基蒂莱机场服务，罗瓦涅米有自己的机场，萨利色尔卡则由伊瓦洛机场服务。摄影：LaplandVibes。',
        ratio: '16/9',
      },
    },
    {
      id: 'children',
      kicker: '孩子',
      h2: '日托按收入收费，上学不要钱。',
      bullets: [
        '<strong>幼儿教育费用</strong>随家庭收入而定：自2026年8月1日起，每个孩子每月最高收费335欧元，最低收费32欧元。第二个孩子最多交最小孩子费用的40%，即最多134欧元（芬兰地方政府协会）。',
        '<strong>学前教育和基础教育</strong>都是免费的，学习材料和校餐也包括在内（《基础教育法》第31条）。上学路程超过五公里时，会安排上下学交通（第32条），在小市镇里这是日常的一部分。',
        '日托名额向市镇申请，而归属哪个市镇由您在 DVV 登记的地址决定。所以迁居登记要先办，而不是最后办。',
      ],
    },
    {
      id: 'light',
      kicker: '光明与黑暗',
      h2: '极夜比您想的要短。乌茨约基除外。',
      paras: [
        'Kaamos 即极夜，意思是太阳不会升到地平线以上。据芬兰气象研究所，在乌茨约基的努奥尔加姆，极夜持续近两个月，从11月25日到1月17日；而在索丹屈莱，只在圣诞节前持续四天。极夜线稍稍位于北极圈以北，所以罗瓦涅米没有真正的极夜（Foreca）：冬天太阳很低，但会升起来。',
        '夏天正好相反。在罗瓦涅米的北极圈一带，就到了午夜太阳的分界线，而在努奥尔加姆，太阳从5月16日到7月29日都不落下（芬兰气象研究所）。遮光窗帘是夏季最要紧的一件东西，光疗灯则是冬季的。',
      ],
    },
    {
      id: 'before-signing',
      kicker: '签约之前',
      h2: '请向房东问清这些。',
      bullets: [
        '供暖方式以及由谁付费：集中供暖通常包含在房租里，电采暖则要算在您自己的账单上。',
        '带预热电源桩的车位，以及存放冬季装备的地方：滑雪板、雪橇、冬季轮胎。',
        '离最近的商店、健康中心和学校有多远，冬天有没有公交开过去。',
        '押金及其退还：最多三个月租金（《住宅租赁法》第8条），自2026年10月1日起，须在租约结束后14天内退还（Rakli）。',
      ],
    },
  ],
  faqs: [
    {
      q: '迁居登记最迟什么时候提交？',
      a: '最早在搬家日前一个月，最迟在搬家后一周内（DVV）。一份登记同时涵盖数字与人口数据服务局和 Posti。',
    },
    {
      q: '在拉普兰什么时候必须使用冬季轮胎？',
      a: '法律规定，如果天气或路况需要，从11月1日到3月31日必须使用；在同一时期以及路况需要的其他时候允许使用钉胎（Traficom）。所以换胎看的是路况，而不是日历。',
    },
    {
      q: '罗瓦涅米有极夜吗？',
      a: '没有真正的极夜：极夜线稍稍位于北极圈以北（Foreca）。在索丹屈莱，圣诞节前太阳有四天不升起；在努奥尔加姆则近两个月（芬兰气象研究所）。',
    },
  ],
  cta: {
    partner: 'cars',
    kicker: '头几周的用车',
    h2: '看房、运搬家行李、去商店采购。',
    lead:
      '您自己的车往往到得更晚。从机场租一辆车，足够应付看房和最初的几周；合作伙伴的搜索页面能一次比较各家租车公司。',
    chips: [
      { label: '罗瓦涅米（RVN）', destination: 'RVN', sid: 'moving_car_rvn' },
      { label: '基蒂莱（KTT）', destination: 'KTT', sid: 'moving_car_ktt' },
      { label: '凯米-托尔尼奥（KEM）', destination: 'KEM', sid: 'moving_car_kem' },
      { label: '伊瓦洛（IVL）', destination: 'IVL', sid: 'moving_car_ivl' },
    ],
  },
  sources: pickSources('zh-CN', SOURCES, common.sourceLabels),
};

export default copy;
