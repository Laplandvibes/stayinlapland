/**
 * Korea (ko) · town-rovaniemi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/rovaniemi.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'rovaniemi', 'das', 'yle2025das', 'yle2026rovaniemi', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: '로바니에미 임대: 월세 시세, 집주인, 신청 방법',
  metaDescription:
    '로바니에미에서 집 구하기. ㎡당 월세(핀란드 통계청 2026), 시가 안내하는 집주인, 학생용 DAS, Kela 주거수당과 신청 시기를 정리했습니다.',
  breadcrumb: '로바니에미',
  hero: {
    eyebrow: '로바니에미, 주민 66,191명',
    title: '로바니에미 임대.',
    subtitle:
      '라플란드 최대 도시, 주민 66,191명. 월세는 얼마인지, 어디에 신청하는지, 언제 신청하는지.',
  },
  authorNote:
    '㎡당 월세는 핀란드 통계청(2026년 7월–9월), 집주인 목록은 로바니에미 시의 공식 주거 페이지, 주택 부족 수치는 Yle를 근거로 했습니다. 2026년 11월 15일에 확인했습니다.',
  intro: [
    '로바니에미는 주민이 66,191명이며(핀란드 통계청, 2025년 12월 31일) 원룸 경쟁이 치열합니다. 학생 주택 재단 DAS에는 2026년 여름 긴급 신청이 약 550건 들어와 지난해보다 15% 늘었고, 신청자의 90% 가까이가 원룸을 원했으며, 시내 원룸은 겨울 시즌 동안 관광객에게 단기로 임대됩니다(Yle, 2026년 7월 27일). DAS 대표에 따르면 8월과 9월에는 모든 신청자에게 집을 제공할 수 없습니다.',
    '근로자 약 250명을 라플란드로 데려온 한 채용 회사는 이들을 로바니에미의 열 곳 남짓한 장소에 나누어 살게 했습니다(Yle, 2026년 3월 9일). 시즌 근로자, 학생, 관광객이 모두 같은 작은 집을 찾고 있습니다.',
    '좋은 소식은 가격입니다. 로바니에미의 평균 월세는 ㎡당 €14.63으로 전국 평균 €15.99보다 낮습니다(핀란드 통계청 2026Q3). 아래에서 주택 규모별 수치와 신청 경로를 확인하십시오.',
  ],
  sections: [
    {
      id: 'prices',
      kicker: '월세 수준',
      h2: '로바니에미의 ㎡당 월세, 2026년 7월–9월.',
      table: {
        caption: '평균 월세 €/㎡/월, 자유시장 임대 주택, 로바니에미 2026Q3',
        head: ['', '전체 계약', '신규 계약', '전국'],
        rows: [
          ['원룸', '18.63', '20.14', '20.49'],
          ['투룸', '14.40', '16.40', '15.07'],
          ['방 세 개 이상', '12.29', '13.66', '13.98'],
          ['전체 주택', '14.63', '15.93', '15.99'],
        ],
        foot: '핀란드 통계청, 임대료 2026Q3, 표 15fa. 신규 계약은 해당 분기에 시작된 계약으로, 지금 나와 있는 빈집의 요구 가격을 뜻합니다.',
      },
      paras: [
        '<strong>예시:</strong> 30m² 원룸은 월 약 €560(18.63 × 30), 신규 계약에서는 약 €600(20.14 × 30)입니다. 50m² 투룸은 약 €720(14.40 × 50), 75m² 방 세 개짜리는 약 €920(12.29 × 75)입니다. 수도 요금과 전기 요금은 보통 별도입니다.',
        '신규 계약 원룸 가격 ㎡당 €20.14는 로바니에미 전체 원룸의 평균 €18.63보다 €1.51(8%) 높습니다. 지금 새로 나오는 원룸은 이미 임대 중인 원룸보다 비쌉니다. 전국 평균과 비교하면 로바니에미는 모든 주택 규모에서 더 저렴합니다.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Kela 주거수당',
      h2: '로바니에미는 상한액이 더 높습니다.',
      lead:
        '일반 주거수당은 인정되는 주거비의 최대 70%입니다. 로바니에미는 Kela가 분류한 규모가 큰 24개 지자체 그룹에 속하므로, 인정되는 주거비의 상한이 라플란드의 다른 지자체보다 높습니다(Kela 2026).',
      table: {
        caption: '2026년 주거비 상한액, €/월, Kela의 규모가 큰 24개 지자체 그룹',
        head: ['가구 규모', '주거비 상한액'],
        rows: [
          ['1인', '447'],
          ['2인', '652'],
          ['3인', '828'],
          ['4인', '981'],
          ['인원 추가 시', '+134'],
        ],
        foot: 'Kela, 일반 주거수당 2026. €15 미만의 수당은 지급되지 않습니다. 소득은 기본 공제액을 통해 수당을 줄입니다.',
      },
    },
    {
      id: 'channels',
      kicker: '신청 대상',
      h2: '시의 목록, 학생 재단, 포털.',
      lead: '로바니에미 시의 주거 페이지에는 집주인과 검색 서비스가 나열되어 있으며, 시 자체의 지자체 임대주택 회사는 명시되어 있지 않습니다.',
      band: true,
      cards: [
        {
          title: '로바니에미 시: 집주인 목록',
          body: '시 페이지에는 법인 집주인 KAS asunnot, M2-Kodit, Tarveasunnot, Avara, Lumo와 검색 서비스 Oikotie, Vuokraovi, Qasa가 안내되어 있습니다. 집주인마다 온라인 신청서가 따로 있으니 여러 곳에 동시에 신청하십시오.',
          href: 'https://www.rovaniemi.fi/Asuminen-ja-ymparisto/Asuminen',
          linkLabel: 'rovaniemi.fi: 주거',
          event: 'rovaniemi_city',
        },
        {
          title: 'DAS: 학생용',
          body: '도무스 아르크티카 재단은 약 1,700채를 보유하며 그중 원룸이 700채, 투룸이 460채이고 평균 월세는 ㎡당 €12.50입니다(Yle, 2026년 7월 27일). 신청은 상시 접수이며 석 달간 유효하고, 8월과 9월에는 신입생이 우선입니다. 로바니에미의 중등 이후 교육기관에서 공부하는 경우 신청할 수 있습니다.',
          href: 'https://www.das.fi/en/apply/applying-info',
          linkLabel: 'das.fi: 신청 안내',
          event: 'das',
        },
        {
          title: 'KAS asunnot',
          body: '로바니에미 여러 지구의 임대 주택(시 목록). 온라인으로 신청합니다.',
          href: 'https://kas.fi/rovaniemen-vuokrattavat-kas-kodit/',
          linkLabel: 'kas.fi: 로바니에미',
          event: 'kas',
        },
        {
          title: 'Lumo',
          body: '로바니에미에 건물이 있는 법인 집주인입니다. 표준 계약, 온라인 신청, 빠른 입주가 특징입니다.',
          href: 'https://lumo.fi/en/rental-apartments',
          linkLabel: 'lumo.fi: 임대 아파트',
          event: 'lumo',
        },
        {
          title: 'Oikotie와 Vuokraovi',
          body: '전국 단위 포털에는 개인과 중개업체의 매물 대부분이 올라옵니다. 오우나스바라, 사아렌퀼래, 중심가 밖의 집도 나오도록 지구가 아니라 로바니에미 지자체로 필터를 거십시오.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/rovaniemi',
          linkLabel: 'Oikotie: 로바니에미 임대',
          event: 'oikotie',
        },
        {
          title: 'NAL Rovaniemi: 30세 미만',
          body: '핀란드 청년주거협회 로바니에미 지부는 30세 미만을 위한 청년 주택을 제공합니다(시 목록). DAS를 이용할 수 없고 학생도 아닐 때의 선택지입니다.',
          href: 'https://www.rovaniemi.fi/Asuminen-ja-ymparisto/Asuminen',
          linkLabel: 'rovaniemi.fi: 청년 주택',
          event: 'nal',
        },
      ],
    },
    {
      id: 'when',
      kicker: '신청 시기',
      h2: '한 해에 두 번 몰립니다.',
      bullets: [
        '<strong>8월–9월</strong>이 가장 빠듯합니다. DAS가 모든 신청자를 수용하지 못하고 자유시장 원룸도 귀합니다(Yle, 2026년 7월 27일).',
        '<strong>11월–12월:</strong> 일부 원룸은 겨울 시즌 동안 관광객에게 단기로 임대됩니다. 기간이 정해진 계약은 10월 말에 끝나는 경우가 많습니다(Yle, 2026년 7월 27일).',
        '<strong>봄</strong>에는 겨울 시즌에 임대되던 원룸이 다시 나옵니다.',
        '<strong>보증금</strong>은 월세 세 달 치가 최대이며(주거용 임대차법 제8조), 2026년 10월 1일부터는 임대가 끝난 날부터 14일 안에 반환해야 합니다(Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: '로바니에미의 원룸 월세는 얼마입니까?',
      a: '핀란드 통계청에 따르면 전체 계약 기준 ㎡당 €18.63, 신규 계약 기준 ㎡당 €20.14입니다(2026Q3). 따라서 30m² 원룸은 전기 요금을 제외하고 월 약 €560–600입니다.',
    },
    {
      q: '로바니에미에서 집을 구하기 어렵습니까?',
      a: '8월–9월에는 원룸을 구하기 어렵습니다. DAS가 모든 신청자를 수용하지 못하고(Yle, 2026년 7월 27일) 자유시장 원룸도 귀합니다. 투룸과 방 세 개짜리는 상대적으로 쉽습니다.',
    },
    {
      q: '로바니에미에 가지 않고도 신청할 수 있습니까?',
      a: '시가 안내하는 모든 집주인과 DAS에 온라인으로 신청할 수 있습니다. 그래도 집은 직접 보거나 영상 투어를 요청하고, 보증금은 계약서에 서명한 뒤에만 송금하십시오.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: '첫 몇 주',
    h2: '집을 보러 다니는 동안의 호텔이나 아파트호텔.',
    lead: '서명하기 전에 집을 직접 보십시오. 제휴사 검색에서 오늘 가격으로 로바니에미의 빈 객실을 확인할 수 있습니다.',
    chips: [
      { label: '로바니에미', destination: 'Rovaniemi', sid: 'rentals_rovaniemi_first_weeks' },
    ],
  },
  sources: pickSources('ko', SOURCES, common.sourceLabels),
};

export default copy;
