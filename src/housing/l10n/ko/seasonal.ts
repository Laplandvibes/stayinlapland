/**
 * Korea (ko) · seasonal. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
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
  metaTitle: '라플란드 시즌 근로자 숙소: 레비, 윌래스, 사리셀카',
  metaDescription:
    '레비, 윌래스, 사리셀카, 로바니에미의 시즌 근로자는 어디서 살까요? 직원 숙소, 시즌 임대, 지자체 임대 주택과 계약 전 확인 사항을 안내합니다.',
  breadcrumb: '시즌 근로자',
  hero: {
    eyebrow: '겨울과 여름의 시즌 일자리',
    title: '시즌 근로자는 어디서 살까요?',
    subtitle:
      '공동 직원 숙소, 시즌 임대로 빌린 휴가용 아파트, 지자체 임대 주택. 스키 리조트의 주택 부족은 현실이며, 사람들은 이렇게 해결하고 있습니다.',
  },
  authorNote:
    '주택 부족 수치는 2017–2026년 Yle와 Kesko 보도, 검색 경로는 각 지자체의 공식 페이지를 근거로 했습니다. 일자리 자체는 자매 사이트 laplandwork.com에서 다룹니다.',
  intro: [
    '레비 관광 지역은 겨울 시즌에 2,000명을 조금 넘는 시즌 근로자를 고용한다고, 레비 관광회사(Levin Matkailu Oy)의 대표 크리스티나 쿠코호비(Kristiina Kukkohovi)가 이미 2017년에 추산했습니다. 그는 주택 부족이 라플란드 모든 리조트에서 큰 문제가 되고 있다고 말했습니다(Yle, 2017년 10월 25일). 상황은 나아지지 않았습니다. 2023년 봄 Yle는 레비와 윌래스의 근로자들이 주소를 등록할 수 없는 휴가용 아파트에 살고 있다고 보도했습니다.',
    '2026년 6월 애캐슬롬폴로의 K-Market Jounin Kauppa 주인들은 집이 너무 적고 월세가 크게 올랐다는 이유로 직원을 위한 연립주택 세 동을 짓기로 했습니다(Yle, 2026년 6월 16일). 이 가게는 해마다 시즌 근로자 약 20명을 고용하며, 그중 절반 정도가 임대 주택을 필요로 합니다(Kesko, 2026년 6월 17일).',
    '로바니에미에서는 채용 회사 Career.fi가 근로자 약 250명을 라플란드로 데려와 열 곳 남짓한 장소에 나누어 살게 했습니다. 에스토니아 근로자 두 명은 임대한 집이 배관 공사에 들어가자 성장 책임자의 가족과 함께 두 번의 겨울을 보냈습니다. 주거를 구하는 일은 “해마다 한바탕 소동”이라고 합니다(Yle, 2026년 3월 9일).',
  ],
  sections: [
    {
      id: 'three-ways',
      kicker: '한 시즌을 사는 세 가지 방법',
      h2: '직원 숙소, 시즌 임대, 지자체 주택.',
      cards: [
        {
          title: '1. 직원 숙소',
          body:
            '스키 리조트에서 가장 흔한 방식입니다. 고용주가 연립주택, 캐빈, 휴가용 아파트를 시즌 내내 직원용으로 빌려 두고 월세를 급여에서 공제합니다. 루카에서는 한 레스토랑 그룹이 이미 2017년에 직원을 위해 휴가용 주택 네 채를 11월부터 5월까지 빌렸습니다(Yle, 2017년 10월 25일). 장점은 도착하면 지붕이 준비되어 있다는 것입니다. 위험은 일이 끝나면 집도 끝난다는 것입니다.',
        },
        {
          title: '2. 시즌 임대로 빌린 휴가용 아파트',
          body:
            '레비의 80m² 알파인 하우스 아파트는 5월부터 11월까지 월 €750, 성수기에는 주 €2,000, 연중 계약은 월 €1,650입니다(Yle, 2023년 5월 25일). 여름에는 저렴하지만 겨울에는 불가능합니다. 또한 휴가용 아파트에서는 공식 주소를 받을 수 없습니다(Yle, 2023년 5월 25일).',
        },
        {
          title: '3. 지자체 임대 주택',
          body:
            'Kittilän Vuokratalot Oy, Inarin Vuokra-asunnot Oy(이발로, 이나리, 사리셀카에 500채 이상), 소단퀼래의 Asentopuulaaki(약 720채)가 있습니다. 시즌이 시작되기 전 여름에 신청하고, 신청서가 얼마나 오래 유효한지 회사에 문의하십시오.',
        },
      ],
    },
    {
      id: 'places',
      kicker: '지역별 사정',
      h2: '같은 주택난, 다른 해법.',
      band: true,
      cards: [
        {
          title: '레비와 키틸래',
          image: { src: '/images/housing-levi-keskusta-card.webp', alt: '여름날 레비 중심가의 목조 건물들' },
          body:
            '키틸래의 인구는 2025년에 2.0% 늘어, 펠코센니에미(2.4%)에 이어 라플란드 지자체 가운데 두 번째로 많이 증가했습니다(핀란드 통계청). 고용주는 직원용 연립주택을 시즌 내내 빌리고, 나머지 사람들은 페이스북의 레비 주거 그룹에서 집을 찾습니다. Kittilän Vuokratalot Oy는 키틸래 마을과 레비의 시르카(Sirkka) 양쪽의 주택을 등록해 두고 있습니다.',
          href: 'https://kittila.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot',
          linkLabel: 'Kittilän Vuokratalot Oy',
          event: 'kittila',
        },
        {
          title: '윌래스: 애캐슬롬폴로와 윌래스야르비',
          image: { src: '/images/housing-seasonal-card-yllas-tunturi.webp', alt: '9월 아침 애캐슬롬폴로의 호수 건너로 보이는 윌래스' },
          body:
            '가게 주인들이 직접 짓고 있습니다. Jounin Kauppa의 연립주택 세 동은 현재 계획대로라면 2026년 11월–12월에 완공되며, 원룸, 함께 쓰기 위한 방 두 개짜리, 가족용 방 세 개짜리가 있고 모든 집에 사우나가 딸려 있습니다(Kesko, 2026년 6월 17일). 마을 최초의 모듈러 건물은 2025년 10월에 거의 완성되었습니다(Yle, 2026년 6월 16일).',
          href: 'https://www.kesko.fi/media/uutiset-ja-tiedotteet/uutiset/2026/lapin-asuntopulaa-ratkomassa-k-market-jounin-kaupan-kauppiaat-rakennuttavat-kolme-rivitaloa-tyontekijoilleen/',
          linkLabel: 'Kesko, 2026년 6월 17일',
          event: 'yllas',
        },
        {
          title: '사리셀카와 이발로',
          image: { src: '/images/housing-saariselka-hirsitalot.webp', alt: '11월 사리셀카의 통나무 건물들' },
          body:
            '지자체 회사 Inarin Vuokra-asunnot Oy는 사리셀카와 이발로 양쪽에 주택이 있으며, 지자체 페이지에는 민간 집주인과 페이스북의 소단퀼래–이나리–우츠요키 그룹이 안내되어 있습니다. 면접 때 고용주가 주거를 제공하는지 물어보십시오.',
          href: 'https://www.inari.fi/fi/palvelut/asuminen.html',
          linkLabel: 'inari.fi: 주거',
          event: 'inari',
        },
        {
          title: '로바니에미',
          image: { src: '/images/housing-rovaniemi-lappia-card.webp', alt: '로바니에미 중심가의 라피아 하우스(Lappia House)' },
          body:
            '학생, 관광객, 시즌 근로자가 같은 시기에 같은 원룸을 놓고 경쟁합니다. 2026년 여름 학생 주택 재단 DAS에는 긴급 신청이 약 550건 들어와 지난해보다 15% 늘었고, 신청자의 90% 가까이가 원룸을 원했습니다(Yle, 2026년 7월 27일).',
          href: 'https://yle.fi/a/74-20213937',
          linkLabel: 'Yle, 2026년 3월 9일: 로바니에미의 주택난',
          event: 'rovaniemi',
        },
        {
          title: '루카와 쿠사모',
          image: { src: '/images/housing-ruka-kyla-card.webp', alt: '여름 루카 보행자 마을의 광장과 붉은 전망탑' },
          body:
            '루카는 라플란드가 아니라 북포흐얀마에 있지만, 시즌도 주택 부족도 같습니다. 2017년 루카의 레스토랑 그룹은 상시 직원 20명을 조금 넘던 규모에서 겨울에 80명 이상으로 늘었고, 11월부터 5월까지 직원용으로 휴가용 주택 네 채를 빌렸습니다(Yle, 2017년 10월 25일).',
          href: 'https://yle.fi/a/3-9895965',
          linkLabel: 'Yle, 2017년 10월 25일',
          event: 'ruka',
        },
      ],
    },
    {
      id: 'summer',
      kicker: '여름 시즌',
      h2: '여름도 조용하지 않습니다.',
      paras: [
        '라플란드의 여름 일자리는 그 자체로 하나의 시즌입니다. 로바니에미의 연중 관광, 하이킹 지역, 건설 현장, 가게들의 여름 성수기가 있습니다. 여름에는 휴가용 아파트가 월 단위로 임대됩니다(레비 사례에서 5월부터 11월까지 월 €750, Yle, 2023년 5월 25일).',
        '로바니에미에서는 한 채용 회사의 성장 책임자가 겨울에는 시즌 근로자를, 여름에는 건설 인력과 스포츠 팀을 한 지붕 아래 묵게 하기를 바랍니다(Yle, 2026년 3월 9일). 여름에 도착하는 사람에게는 좋은 소식입니다. 겨울용으로 지은 직원 숙소가 여름에는 비어 있기 때문입니다.',
      ],
      image: {
        src: '/images/housing-jouninkauppa.webp',
        alt: '여름 애캐슬롬폴로의 K-Market Jounin Kauppa 매장 전면',
        caption:
          'K-Market Jounin Kauppa, 애캐슬롬폴로, 2026년 7월. 주인들이 직원을 위해 연립주택 세 동을 짓고 있습니다(Kesko, 2026년 6월 17일). 사진: LaplandVibes.',
        ratio: '4/3',
      },
    },
    {
      id: 'ask',
      kicker: '서명하기 전에',
      h2: '고용주에게 이렇게 물어보십시오.',
      bullets: [
        '집이 고용 조건에 포함되어 있습니까, 아니면 별도의 임대 계약입니까? 급여에서 얼마가 공제되며, 급여 명세서에 표시됩니까?',
        '독방입니까, 공동입니까? 한 집에 몇 명이 살며, 내 방문에 잠금장치가 있습니까?',
        '시즌이 끝나기 전에 일이 끝나거나 시즌 이후까지 일이 이어지면 임대 계약은 어떻게 됩니까?',
        '그곳에 주소를 등록할 수 있습니까? DVV에 대한 주소 변경 신고는 이사 후 일주일 안에 해야 하며, 휴가용 아파트는 자격이 안 되는 경우가 많습니다.',
        '전기, 수도, 인터넷 요금은 누가 냅니까?',
        '자동차 없이 어떻게 출근합니까? 거리, 버스, 스키 버스는 어떻습니까?',
        '보증금이 있습니까, 있다면 언제 돌려받습니까? 법에 따르면 2026년 10월 1일부터는 계약이 끝난 날부터 14일 안에 반환해야 합니다(Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: '레비의 시즌 근로자에게 고용주가 주거를 제공합니까?',
      a: '자주 제공하지만 항상은 아니며 무료도 아닙니다. 고용주는 연립주택과 휴가용 아파트를 시즌 내내 직원용으로 빌리고 월세를 급여에서 공제합니다. 제안은 서면으로 받고, 일이 끝나면 집이 어떻게 되는지 확인하십시오.',
    },
    {
      q: '겨울 시즌 주거는 언제부터 알아봐야 합니까?',
      a: '여름입니다. 시즌 전에 지자체 임대주택 회사(키틸래, 이나리, 소단퀼래)에 신청하십시오. 레비 사례에서는 휴가용 아파트를 월 단위로 빌릴 수 있는 기간이 5월부터 11월까지뿐이었습니다(Yle, 2023년 5월 25일).',
    },
    {
      q: '시즌 내내 휴가용 아파트에서 살 수 있습니까?',
      a: '집주인이 시즌 임대를 제공한다면 가능하지만, 휴가용 아파트에서는 공식 주소를 받을 수 없습니다(Yle, 2023년 5월 25일).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: '첫 며칠 밤',
    h2: '열쇠를 받기 전에.',
    lead:
      '집이 비기 전에 시즌이 먼저 시작되는 경우가 많습니다. 제휴사 검색에서 오늘 가격으로 이용 가능한 객실과 아파트를 확인할 수 있습니다.',
    chips: [
      { label: '레비', destination: 'Levi', sid: 'seasonal_first_nights_levi' },
      { label: '윌래스', destination: 'Äkäslompolo', sid: 'seasonal_first_nights_yllas' },
      { label: '사리셀카', destination: 'Saariselkä', sid: 'seasonal_first_nights_saariselka' },
      { label: '로바니에미', destination: 'Rovaniemi', sid: 'seasonal_first_nights_rovaniemi' },
    ],
  },
  sources: pickSources('ko', SOURCES, common.sourceLabels),
};

export default copy;
