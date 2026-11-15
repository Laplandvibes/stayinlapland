/**
 * Korea (ko) · town-kittila-levi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/kittila-levi.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'kittila', 'yle2023', 'yle2017', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: '키틸래와 레비 임대: 지자체 주택과 시즌 임대',
  metaDescription:
    '키틸래와 레비의 임대 안내. 지자체 소유 Kittilän Vuokratalot Oy, 휴가용 아파트의 시즌 월세, 시즌 근로자 직원 숙소와 Kela 지원을 정리했습니다.',
  breadcrumb: '키틸래와 레비',
  hero: {
    eyebrow: '키틸래, 주민 6,973명',
    title: '키틸래와 레비 임대.',
    subtitle:
      '라플란드에서 가장 빨리 성장하는 지자체 중 하나와 그곳의 스키 리조트. 같은 집이 여름에는 월세, 겨울에는 주 단위 요금입니다. 어디에, 언제 신청하는지 안내합니다.',
  },
  authorNote:
    '인구와 증가율은 핀란드 통계청, Kittilän Vuokratalot Oy는 지자체와 회사의 공식 페이지, 레비의 시즌 가격은 Yle(2023년 5월 25일)를 근거로 했습니다. 2026년 11월 15일에 확인했습니다.',
  intro: [
    '키틸래의 주민은 2025년 말 6,973명이었고 한 해 동안 2.0% 늘어 라플란드 지자체 가운데 두 번째로 빠르게 성장했습니다. 더 빨리 성장한 곳은 2.4%의 펠코센니에미뿐입니다(핀란드 통계청). 성장의 동력은 레비입니다. 2017년 레비 관광회사(Levin Matkailu Oy)는 리조트 지역이 겨울 시즌에 시즌 근로자를 2,000명 조금 넘게 고용할 것으로 추산했습니다(Yle, 2017년 10월 25일).',
    '레비의 임대 시장은 시즌을 따릅니다. 중심가 근처의 80m² 알파인 하우스 아파트는 5월부터 11월까지 월 €750, 성수기에는 주 €2,000, 연중 계약은 월 €1,650이었습니다(Yle, 2023년 5월 25일). 휴가용 아파트는 공식 주소도 받지 못할 수 있습니다.',
    '장기 임대는 레비 중심가보다 키틸래 마을에서 구할 가능성이 높습니다. 지자체 소유 주택은 Kittilän Vuokratalot Oy가 임대하며, 회사 사이트에서 전자 신청서로 신청합니다(kittila.fi, Kittilän Vuokratalot).',
  ],
  sections: [
    {
      id: 'channels',
      kicker: '신청 대상',
      h2: '지자체 회사, 포털, 레비 그룹.',
      band: true,
      cards: [
        {
          title: 'Kittilän Vuokratalot Oy',
          body: '지자체 소유 임대 주택을 임대합니다. 사무실은 지자체 청사(Valtatie 15, 99100 Kittilä)의 지상층에 있습니다. 회사는 웹사이트를 통해 필수 첨부 서류와 함께 제출된 전자 신청서만 처리합니다. 회사 페이지에는 신청서가 얼마나 오래 유효한지 나와 있지 않으므로 회사에 문의하십시오.',
          href: 'https://kittila.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot',
          linkLabel: 'kittila.fi: 임대 주택',
          event: 'kittila_city',
        },
        {
          title: 'Oikotie, Vuokraovi, TA-Asunnot',
          body: '키틸래 지자체 아래의 개인과 중개업체 매물이며, 레비의 집도 같은 검색에 나옵니다. TA-Asunnot는 키틸래에 자체 빈 임대 주택을 보유하고 있습니다.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kittil%C3%A4',
          linkLabel: 'Oikotie: 키틸래 임대',
          event: 'oikotie',
        },
        {
          title: '직원 숙소',
          body: '리조트 고용주는 연립주택과 휴가용 아파트를 시즌 내내 직원용으로 빌리고 월세를 급여에서 공제합니다. 일자리 제안서와 함께 주거에 대해 서면으로 문의하십시오. 전체 상황은 시즌 근로자 페이지에 있습니다.',
          href: '/seasonal-worker-housing',
          linkLabel: '시즌 근로자 숙소',
          event: 'seasonal_page',
        },
        {
          title: '페이스북의 레비 주거 그룹',
          body: '산간 리조트 마을에서 가장 빠른 경로이며 시즌 근로자들이 집을 찾는 곳입니다. 누구도 보증하지 않으니, 집을 직접 보기 전에는 절대 보증금을 송금하지 말고 계약은 서면으로 받으십시오.',
        },
      ],
    },
    {
      id: 'prices',
      kicker: '월세 수준',
      h2: '광역 수치와 레비라는 예외.',
      table: {
        caption: '평균 월세 €/㎡/월, 자유시장 임대 주택, 2026Q3',
        head: ['', '라플란드(광역 지역)', '전국'],
        rows: [
          ['원룸', '17.25', '20.49'],
          ['투룸', '12.87', '15.07'],
          ['방 세 개 이상', '11.08', '13.98'],
          ['전체 주택', '13.14', '15.99'],
        ],
        foot: '핀란드 통계청, 임대료 2026Q3, 표 15fa. 키틸래의 별도 수치는 발표되지 않으며, 레비의 시즌 월세는 통계에 전혀 포함되지 않습니다.',
      },
      paras: [
        '<strong>레비 사례(Yle, 2023년 5월 25일):</strong> 80m² 알파인 하우스 아파트는 5월부터 11월까지 월 €750으로 ㎡당 €9.38, 성수기에는 주 €2,000, 연중 계약은 월 €1,650으로 ㎡당 €20.63입니다. 같은 집이 여름에는 광역 평균보다 저렴하고, 연중 계약으로는 전국 원룸 가격보다 비쌉니다.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Kela 주거수당',
      h2: '키틸래는 Kela의 “기타 지자체”에 해당합니다.',
      table: {
        caption: '2026년 주거비 상한액, €/월, Kela “기타 지자체” 그룹',
        head: ['가구 규모', '주거비 상한액'],
        rows: [
          ['1인', '394'],
          ['2인', '574'],
          ['3인', '734'],
          ['4인', '875'],
          ['인원 추가 시', '+129'],
        ],
        foot: 'Kela, 일반 주거수당 2026. 수당은 인정되는 주거비의 최대 70%입니다. 주소를 등록할 수 없는 휴가용 아파트에서는 조건이 충족되지 않습니다.',
      },
    },
    {
      id: 'when',
      kicker: '신청 시기',
      h2: '주 단위 요금이 시작되기 전인 여름에.',
      bullets: [
        '휴가용 아파트의 월 단위 임대는 5월부터 11월까지만 가능하고, 성수기에는 주 단위 요금이 적용됩니다(Yle, 2023년 5월 25일). 겨울 시즌의 집은 여름에 구하십시오.',
        '지자체 회사의 신청서는 시즌 전에 제출하고, 얼마나 오래 유효한지 회사에 문의하십시오.',
        '보증금은 월세 세 달 치가 최대이며(주거용 임대차법 제8조), 2026년 10월 1일부터는 임대가 끝난 날부터 14일 안에 반환합니다(Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: '레비에서 겨울 동안 빌릴 집은 어디서 찾습니까?',
      a: '고용주를 통하는 경우가 가장 많습니다. 리조트 회사들은 연립주택과 휴가용 아파트를 시즌 내내 직원용으로 빌립니다. 공개 시장에서 레비의 집은 겨울에 주 단위로 임대되므로(Yle, 2023년 5월 25일) 월세 계약은 주로 5월부터 11월까지만 가능합니다. 지자체 회사에는 키틸래 마을과 레비의 시르카(Sirkka) 양쪽에 주택이 있습니다(Kittilän Vuokratalot).',
    },
    {
      q: '키틸래의 지자체 주택은 어떻게 신청합니까?',
      a: '회사 사이트의 Kittilän Vuokratalot Oy 전자 신청서로 신청합니다. 필수 첨부 서류가 없는 불완전한 신청서는 처리되지 않습니다. 사무실은 지자체 청사의 지상층, Valtatie 15에 있습니다(kittila.fi, Kittilän Vuokratalot).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: '첫 며칠 밤',
    h2: '집이 비기 전에.',
    lead: '제휴사 검색에서 오늘 가격으로 레비와 키틸래의 빈 객실과 아파트를 확인할 수 있습니다.',
    chips: [
      { label: '레비', destination: 'Levi', sid: 'rentals_levi_first_weeks' },
      { label: '키틸래', destination: 'Kittilä', sid: 'rentals_kittila_first_weeks' },
    ],
  },
  sources: pickSources('ko', SOURCES, common.sourceLabels),
};

export default copy;
