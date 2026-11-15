/**
 * Korea (ko) · rentals. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/rentals.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'tkVuokrat', 'kela', 'ahvl', 'rakli', 'kuluttajaliittoVuokra', 'yle2025das', 'yle2023', 'rovaniemi', 'das',
  'kittila', 'kemi', 'keminmaa', 'tornio', 'kemijarvi', 'kemijarviHaku', 'kemijarviVuostimo', 'kemijarviTalousarvio',
  'sodankyla', 'asentopuulaaki', 'asentopuulaakiVapaat', 'inari',
] as const;

const copy: HousingPageCopy = {
  metaTitle: '라플란드 월세 구하기: 로바니에미, 레비, 케미–토르니오',
  metaDescription:
    '핀란드 라플란드의 장기 임대 안내. 로바니에미, 케미–토르니오, 레비, 이나리의 ㎡당 월세(핀란드 통계청), 보증금, Kela 주거수당을 정리했습니다.',
  breadcrumb: '임대',
  hero: {
    eyebrow: '라플란드 임대',
    title: '라플란드에서 집 구하기.',
    subtitle:
      '임대 주택을 어디서 찾는지, 비용은 얼마인지, Kela가 얼마를 보전하는지. 도시별로 안내합니다.',
  },
  authorNote:
    '㎡당 월세: 핀란드 통계청 임대료 통계, 자유시장 임대 주택, 2026년 7월–9월. 지자체 임대주택 회사는 2026년 11월 15일에 지자체와 각 회사의 공식 사이트에서 확인했습니다.',
  intro: [
    '라플란드에서 임대 주택은 크게 세 곳에서 나옵니다. 지자체가 소유한 주택회사, 전국 단위 포털, 지역 커뮤니티입니다. 먼저 지자체를 확인하세요. 지자체 회사는 케민마에 300채를 조금 넘게, 소단퀼래에 약 720채, 케미야르비에 560채, 이나리에 500채 이상을 보유하고 있으며, 지금 빈집이 없어도 신청할 수 있습니다.',
    '가격은 이사할 지역에 따라 달라집니다. 로바니에미의 30m² 원룸은 평균 월 €560 정도이고, 라플란드의 다른 지역은 이보다 낮습니다. 산간 리조트 마을에서는 월세가 시즌에 따라 달라지므로, 겨울에는 먼저 고용주에게 직원 숙소가 있는지 문의하세요.',
  ],
  sections: [
    {
      id: 'towns',
      kicker: '주택이 있는 곳',
      h2: '도시별 안내.',
      lead: '도시마다 별도 페이지가 있습니다. 지자체 임대주택 회사와 신청 방법, 월세 수준, Kela의 상한액을 다룹니다. 윌래스의 직원 숙소는 시즌 근로자 페이지에서 설명합니다.',
      band: true,
      cards: [
        {
          title: '로바니에미',
          image: { src: '/images/housing-rovaniemi-card-talvikatu.webp', alt: '1월 로바니에미의 눈 덮인 거리를 걷는 사람들과 아파트 단지' },
          body:
            '시 공식 페이지에는 임대 회사 KAS asunnot, M2-Kodit, Tarveasunnot, Avara, Lumo와 검색 서비스 Oikotie, Vuokraovi, Qasa가 안내되어 있습니다. 학생은 도무스 아르크티카 재단 DAS(약 1,700채, 그중 원룸 700채)에, 30세 미만은 NAL Rovaniemi에 신청합니다. DAS 신청서는 석 달간 유효하며, 8월과 9월에는 신입생이 우선입니다.',
          href: '/rentals/rovaniemi',
          linkLabel: '로바니에미 임대',
        },
        {
          title: '케미, 케민마, 토르니오',
          image: { src: '/images/housing-kemi-card-kaupungintalo.webp', alt: '눈 내린 1월 아침의 케미 시청' },
          body:
            '케미 시의 임대 주택은 도시 최대 임대주택 사업자인 Kiinteistö Oy Itätuuli가 운영하며, 중심가에서 다섯 킬로미터 이내에 주택이 있습니다. Keminmaan Vuokra-asunnot Oy는 300채를 조금 넘게 보유하고 있고, 두 회사 모두 온라인 신청 양식이 따로 있습니다. 토르니오에서는 시 소유 주택을 Tornion Krunni Oy(Tornion Vuokra-asunnot Oy)가 관리합니다.',
          href: '/rentals/kemi-tornio',
          linkLabel: '케미, 토르니오, 케민마 임대',
        },
        {
          title: '케미야르비',
          image: { src: '/images/housing-kemijarvi-card-kerrostalo.webp', alt: '7월 저녁의 케미야르비, 아파트 건물과 오래된 소나무' },
          body:
            '시의 부동산 회사 두 곳이 임대 주택 560채를 소유하고 있으며, 예산 계획상 입주율 목표가 80–85%이므로 빈집이 실제로 존재합니다. 신청서는 넉 달간 유효합니다. Vuostimo 연립주택은 퓌해툰투리에서 14km 거리에 있습니다.',
          href: '/rentals/kemijarvi',
          linkLabel: '케미야르비 임대',
        },
        {
          title: '소단퀼래',
          image: { src: '/images/housing-sodankyla-jaamerentie.webp', alt: '9월의 소단퀼래 중심가 Jäämerentie' },
          body:
            'Asentopuulaaki Oy가 지자체 소유 주택 약 720채를 임대하며, 회사의 주택 검색에서 그때그때 비어 있거나 곧 비는 주택을 볼 수 있습니다. 오래된 건물은 ㎡당 약 €9–12.50, 2025년에 준공된 Käpyriihi는 €18입니다.',
          href: '/rentals/sodankyla',
          linkLabel: '소단퀼래 임대',
        },
        {
          title: '키틸래와 레비',
          image: { src: '/images/housing-kittila-levi-card-kyla.webp', alt: '11월 레비 툰투리 정상에서 내려다본 레비 마을, 호수와 먼 산자락' },
          body:
            'Kittilän Vuokratalot Oy가 지자체 소유 임대 주택을 임대하며, 사무실은 지자체 청사(Valtatie 15)의 지상층에 있습니다. 신청은 회사 웹사이트에서 온라인으로 합니다. 레비의 휴가용 아파트는 주로 5월부터 11월까지 월세로 나오고, 겨울에는 같은 집이 주 단위로 임대됩니다.',
          href: '/rentals/kittila-levi',
          linkLabel: '키틸래와 레비 임대',
        },
        {
          title: '이나리, 이발로, 사리셀카',
          image: { src: '/images/housing-ivalo-joki.webp', alt: '여름 저녁 이발로 강 건너로 본 이발로 마을' },
          body:
            'Inarin Vuokra-asunnot Oy는 이발로, 이나리, 사리셀카, 넬림, 세베트야르비에 500채 이상을 보유하고 있습니다. 지자체 페이지에는 민간 집주인(Bilto, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg, Uni Kodit)과 페이스북의 소단퀼래–이나리–우츠요키 임대 그룹도 안내되어 있습니다.',
          href: '/rentals/ivalo-inari',
          linkLabel: '이발로와 이나리 임대',
        },
      ],
    },
    {
      id: 'portals',
      kicker: '포털과 커뮤니티',
      h2: '핀란드 다른 지역과 같은 경로입니다.',
      bullets: [
        '<a href="https://asunnot.oikotie.fi/vuokra-asunnot/rovaniemi" target="_blank" rel="noopener">Oikotie</a>: 전국 단위 포털입니다. 마을 이름만이 아니라 지자체로 필터를 거세요.',
        '<a href="https://www.vuokraovi.com/vuokra-asunnot/rovaniemi" target="_blank" rel="noopener">Vuokraovi</a>: 임대 전용입니다.',
        '<a href="https://qasa.fi" target="_blank" rel="noopener">Qasa</a>: 로바니에미 시가 안내하는 서비스이며, 계약은 플랫폼에서 전자 서명으로 체결합니다.',
        '<a href="https://www.tori.fi" target="_blank" rel="noopener">Tori</a>: 임대 주택도 올라오는 중고 거래 사이트입니다. 송금하기 전에 확인할 사항은 아래를 읽어 보세요.',
        '페이스북 그룹: 레비 주거 검색, 케미–케민마, 소단퀼래–이나리–우츠요키. 산간 리조트 마을에서 가장 빠른 경로이지만, 올라온 매물은 누구도 보증하지 않습니다.',
      ],
    },
    {
      id: 'prices',
      kicker: '월세 수준',
      h2: '느낌이 아니라 ㎡당 가격으로.',
      lead:
        '핀란드 통계청은 분기마다 임대료를 발표합니다. 아래는 2026년 7월–9월 자유시장 임대 주택의 평균 월세이며, ㎡당 월 유로 기준입니다.',
      table: {
        caption: '평균 월세 €/㎡/월, 자유시장 임대 주택, 2026Q3',
        head: ['', '로바니에미', '라플란드(광역 지역)', '전국'],
        rows: [
          ['원룸', '18.63', '17.25', '20.49'],
          ['투룸', '14.40', '12.87', '15.07'],
          ['방 세 개 이상', '12.29', '11.08', '13.98'],
          ['전체 주택', '14.63', '13.14', '15.99'],
          ['신규 계약, 전체 주택', '15.93', '13.39', '16.72'],
        ],
        foot: '핀란드 통계청, 임대료 2026Q3, 표 15fa. 신규 계약은 해당 분기에 시작된 계약으로, 지금 시장에서 요구하는 가격을 보여 줍니다.',
      },
      paras: [
        '<strong>계산 방법:</strong> ㎡당 월세에 전용 면적을 곱합니다. 로바니에미의 30m² 원룸은 평균 월 약 €560(18.63 × 30), 신규 계약에서는 약 €600입니다(20.14 × 30, 로바니에미 신규 계약 원룸 수치). 50m² 투룸은 월 약 €720(14.40 × 50)입니다. 수도 요금과 전기 요금은 보통 별도입니다.',
        '라플란드의 ㎡당 월세는 모든 주택 규모에서 전국 평균보다 낮고, 그 차이는 투룸에서 가장 작습니다.',
      ],
      note: {
        label: '통계에 잡히지 않는 부분',
        body:
          '스키 리조트의 시즌 임대와 가구가 갖춰진 단기 임대는 이 수치에 포함되지 않습니다. 레비 중심가 근처의 80m² 알프스풍 아파트는 5월부터 11월까지 월 €750, 성수기에는 주 €2,000, 연중 계약은 월 €1,650이었습니다(Yle, 2023년 5월 25일). 같은 집이 세 가지 가격인 셈입니다.',
      },
    },
    {
      id: 'housing-allowance',
      kicker: 'Kela 주거수당',
      h2: '상한액은 지자체에 따라 다릅니다.',
      lead:
        '일반 주거수당은 인정되는 주거비의 최대 70%를 보전하며, 인정되는 주거비에는 지자체와 가구 규모에 따라 정해진 상한이 있습니다. Kela는 지자체를 세 그룹으로 나눕니다. 로바니에미는 규모가 큰 24개 지자체 그룹에 속하고, 라플란드의 나머지 지자체는 모두 상한이 더 낮은 “기타 지자체”에 해당합니다.',
      table: {
        caption: '2026년 주거비 상한액, €/월',
        head: ['가구 규모', '로바니에미', '라플란드 기타 지자체'],
        rows: [
          ['1인', '447', '394'],
          ['2인', '652', '574'],
          ['3인', '828', '734'],
          ['4인', '981', '875'],
          ['인원 추가 시', '+134', '+129'],
        ],
        foot: 'Kela, 일반 주거수당 2026. 수당이 €15 미만이면 지급되지 않습니다.',
      },
      paras: [
        '상한액이란, 로바니에미에서 혼자 사는 가구의 월세가 €600이어도 €447까지만 인정된다는 뜻입니다. 나머지는 본인이 부담합니다. 소득은 기본 공제액을 통해 수당을 줄이며, Kela의 계산기에서 본인의 경우를 확인할 수 있습니다.',
      ],
    },
    {
      id: 'contract',
      kicker: '임대차 계약',
      h2: '서명하기 전 확인할 다섯 가지.',
      bullets: [
        '<strong>보증금은 월세 세 달 치가 최대입니다</strong>(주거용 임대차법 제8조). 한 달 또는 두 달 치가 일반적입니다.',
        '<strong>2026년 10월 1일부터 보증금은 반환해야 하며</strong>, 계약이 끝나거나 집을 인도한 날부터 14일 안에 반환하거나 돌려주지 않는 사유를 서면으로 알려야 합니다(2026년 10월 1일 시행 개정, Rakli).',
        '<strong>임차인의 해지 통보 기간은 한 달입니다.</strong> 2026년 10월 1일 이후에 체결한 계약에서 집주인의 해지 통보 기간은 석 달이며, 임대가 최소 두 해 계속된 경우에는 넉 달입니다(Rakli). 2026년 10월 1일 이전에 체결한 계약은 이전의 통보 기간이 유지됩니다(Kuluttajaliitto).',
        '<strong>기간이 정해진 계약은 양쪽 모두 만료까지 묶입니다.</strong> 시즌 근무에서는 고용주가 제공하는 집이 업무와 연결된 경우가 많으니, 시즌이 끝나기 전에 일이 끝나면 어떻게 되는지 계약서에서 확인하세요.',
        '<strong>신용 기록은 거의 항상 조회됩니다.</strong> 연체 기록이 있어도 임대가 불가능한 것은 아니지만, 이 경우 대형 체인보다 지자체 임대주택 회사나 민간 집주인이 더 가능성이 높습니다.',
      ],
    },
    {
      id: 'before-paying',
      kicker: '송금하기 전에',
      h2: '보증금을 지키는 세 가지 원칙.',
      bullets: [
        '집을 직접 보거나, 집과 열쇠가 같은 화면에 나오는 영상 투어를 확인하기 전에는 절대 보증금을 송금하지 마세요.',
        '계약은 서면으로 하고, 집주인의 이름과 사업자 번호 또는 개인 식별번호가 기재되어 있어야 합니다. 시장을 잘 모른다면 지자체 임대주택 회사가 가장 안전한 출발점입니다.',
        '가구가 갖춰진 단기 임대는 정식 임대차가 아닙니다. 휴가용 아파트에서는 공식 주소를 받지 못할 수 있고, 주소가 없으면 신용 조회 같은 일상적인 일 처리가 어려워집니다(Yle, 2023년 5월 25일).',
      ],
    },
  ],
  faqs: [
    {
      q: '로바니에미의 원룸 월세는 얼마입니까?',
      a: '핀란드 통계청에 따르면 로바니에미 자유시장 원룸의 평균 월세는 2026년 7월–9월에 ㎡당 €18.63, 신규 계약에서는 ㎡당 €20.14였습니다. 따라서 30m² 원룸은 전기 요금을 제외하고 월 약 €560–600입니다.',
    },
    {
      q: '핀란드 신용 기록이 없어도 라플란드에서 집을 구할 수 있습니까?',
      a: '가능하지만 선택지가 줄어듭니다. 지자체 임대주택 회사와 민간 집주인은 사례별로 판단하며, 더 많은 보증금(법적으로 월세 세 달 치까지 가능)이나 보증인이 도움이 됩니다. 대형 임대 체인은 항상 신용 조회를 합니다.',
    },
    {
      q: '로바니에미에서 집을 구하기 가장 좋은 시기는 언제입니까?',
      a: '8월과 9월을 제외한 어느 달이든 좋습니다. 그 시기에는 DAS가 모든 신청자를 수용하지 못하고 자유시장 원룸도 귀합니다(Yle, 2026년 7월 27일). 겨울 시즌 동안 단기로 임대되던 원룸은 봄에 다시 시장에 나옵니다.',
    },
    {
      q: '레비의 월세는 왜 겨울에 몇 배나 높아집니까?',
      a: '성수기에는 같은 집이 주 단위로 임대되기 때문입니다. Yle의 사례(2023년 5월 25일)에서 80m² 알프스풍 아파트는 여름에 월 €750, 겨울에 주 €2,000이었습니다. 월세 계약은 5월부터 11월까지 가능하며, 겨울에는 고용주에게 직원 숙소를 문의하거나 키틸래 지자체 회사를 확인하세요.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: '첫 몇 주',
    h2: '집은 직접 보고 정하세요.',
    lead:
      '첫 몇 주는 호텔이나 아파트호텔을 예약하고, 서명하기 전에 집을 직접 보세요. 제휴사 검색에서 오늘 가격으로 빈 객실을 확인할 수 있습니다.',
    chips: [
      { label: '로바니에미', destination: 'Rovaniemi', sid: 'rentals_first_weeks_rovaniemi' },
      { label: '레비', destination: 'Levi', sid: 'rentals_first_weeks_levi' },
      { label: '토르니오', destination: 'Tornio', sid: 'rentals_first_weeks_tornio' },
      { label: '이발로', destination: 'Ivalo', sid: 'rentals_first_weeks_ivalo' },
    ],
  },
  sources: pickSources('ko', SOURCES, common.sourceLabels),
};

export default copy;
