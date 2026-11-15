/**
 * Kiina (yksinkertaistettu) (zh-CN) · longstays. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/longstays.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['ahvl531', 'kuluttajaliittoVuokra', 'rakli', 'dvvTilapainen', 'dvv'] as const;

const copy: HousingPageCopy = {
  metaTitle: '在拉普兰住一个月或一整个冬天：公寓、木屋或员工住房',
  metaDescription:
    '在芬兰拉普兰住一个月或一整个冬天：带家具的出租公寓、按周出租的木屋，或雇主提供的员工住房，以及各种合同的押金、期限和迁居登记要求。',
  breadcrumb: '长期居住',
  hero: {
    eyebrow: '从一个月到一整个冬天',
    title: '在拉普兰住一个月。',
    subtitle:
      '带家具的出租公寓、按周出租的木屋，或雇主提供的住房：在拉普兰住一个月到整个冬天的三种方式，以及每种合同对您有什么要求。',
  },
  authorNote:
    '法律来自 Finlex（《住宅租赁法》481/1995，修正案531/2026），迁居登记来自数字与人口数据服务局，木屋详情来自 Lomarengas 的产品数据源。已于2026年11月15日核对。',
  intro: [
    '在莱维远程办公一个月，在罗瓦涅米过一个冬天，或在滑雪度假村做一个雪季：想在拉普兰住得久一些，通常有三种选择。它们的价格不同，但更大的差别在于您最终签的是哪种合同，以及法律因此保护您什么。',
    '如果您是来度假而不是来生活，酒店和木屋请看我们的姐妹站点 <a href="https://laplandstays.com/cn/" target="_blank" rel="noopener">laplandstays.com</a>，别墅请看 <a href="https://laplandluxuryvillas.com/cn/" target="_blank" rel="noopener">laplandluxuryvillas.com</a>。',
  ],
  sections: [
    {
      id: 'three-ways',
      kicker: '三种方式',
      h2: '公寓、木屋，或员工住房。',
      cards: [
        {
          title: '带家具的出租公寓',
          body: '一份<strong>住宅租赁合同</strong>，较长的停留通常是定期租约。租赁法保护您：押金最多为三个月租金，自2026年10月1日起必须在14天内退还。',
          href: '/rentals',
          linkLabel: '按城镇看租房',
        },
        {
          title: '按周出租的木屋',
          body: '度假木屋通过中介按周出租，条款通常是中介的预订和取消条款。租赁法管的是用于居住的出租公寓，不包括住宿企业的经营活动。下面有可订的木屋及其照片。',
        },
        {
          title: '员工住房',
          body: '做季节工时，住房往往随工作一起提供。签字之前，请问清楚这套房子是否属于雇佣的一部分，以及工作在季节中途结束的话，住房会怎么样。',
          href: '/seasonal-worker-housing',
          linkLabel: '季节工住房',
        },
      ],
    },
    {
      id: 'contract',
      kicker: '合同',
      h2: '定期租约不能提前终止。',
      bullets: [
        '<strong>定期租约持续到合同写明的日期。</strong>租客不能在合同期内提出解约。只有经房东同意，或出现法律规定的特定情形，才能提前结束（芬兰消费者联盟，租赁法）。',
        '<strong>如果您不知道会住多久，</strong>请要求签不定期租约。租客可以提前通知解约，而租客的通知期限在2026年10月1日的修订中并不改变（Rakli）。',
        '<strong>连续签短租约：</strong>如果同一位租客连续超过两次获得三个月或更短的定期租约，则无论合同写明的结束日期是什么，该租约都视为不定期租约。',
        '<strong>租赁法并不涵盖所有情形。</strong>它适用于用于居住的出租公寓，但不适用于住宿企业的经营活动（《住宅租赁法》第1条和第2条）。签字之前，请问清楚您得到的是住宅租赁合同还是住宿合同。',
        '<strong>押金</strong>最多为三个月租金。自2026年10月1日起，须在租约结束后14天内退还，或通知扣留的理由。',
      ],
    },
    {
      id: 'address',
      kicker: '迁居登记',
      h2: '三个月或更久：请登记迁居。',
      paras: [
        '据数字与人口数据服务局，只要您的居住地址发生变化且停留至少三个月，就要登记迁居。如果您在一年内回到同一个永久地址，这次迁居就是临时的，您的永久地址继续有效。',
        '登记最早在搬家日前一个月、最迟在搬家后一周内办理。如果是永久迁居，其余事项，如冬季轮胎、电力合同和您的健康中心，见<a href="/moving-to-lapland/">搬家清单</a>。',
      ],
    },
  ],
  faqs: [
    {
      q: '我能在拉普兰租一个月的公寓吗？',
      a: '可以。定期租约也可以很短，度假木屋则按周出租。请在找房网站上搜索“kalustettu”（带家具）这个词。签字之前，请问清楚这是住宅租赁还是住宿，因为租赁法只保护前者。',
    },
    {
      q: '如果我在拉普兰过冬，需要登记迁居吗？',
      a: '需要，只要停留至少三个月。如果您在一年内回到同一个永久地址，这次迁居就是临时的，您的永久地址继续有效（数字与人口数据服务局）。',
    },
    {
      q: '如果我的工作结束了，能终止定期租约吗？',
      a: '通常不能。定期租约持续到合同写明的日期。请与房东商定提前结束，或者一开始就选不定期租约，这样租客可以提前通知解约。',
    },
  ],
  sources: pickSources('zh-CN', SOURCES, common.sourceLabels),
};

export default copy;
