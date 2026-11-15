/**
 * Korea (ko) · town-sodankyla. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
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
  metaTitle: '소단퀼래 임대: 지자체 주택 720채와 월세 수준',
  metaDescription:
    '소단퀼래의 임대 안내. Asentopuulaaki Oy의 지자체 주택 약 720채, ㎡당 약 €7.40–18의 월세, 온라인 신청, 학자금 대출 시범 사업과 Kela 지원을 정리했습니다.',
  breadcrumb: '소단퀼래',
  hero: {
    eyebrow: '소단퀼래, 주민 8,095명',
    title: '소단퀼래 임대.',
    subtitle:
      '주둔지, 광산, 과학 공동체가 한 지자체에 있는 곳. 신축 건물이 들어서면서 중심 마을의 오랜 주택난이 누그러졌습니다. 어디에 신청하는지, 비용은 얼마인지 안내합니다.',
  },
  authorNote:
    '인구는 핀란드 통계청, 주택 수는 지자체 페이지, 월세·조건·빈집은 Asentopuulaaki Oy의 공식 페이지, 일자리는 핀란드 육군, Yle, 각 기업의 자료를 근거로 했습니다. 2026년 11월 15일에 확인했습니다.',
  intro: [
    '소단퀼래의 주민은 2025년 말 8,095명이었습니다(핀란드 통계청). 지자체는 임대 주택 약 720채를 소유하고 있으며, 자회사 Asentopuulaaki Oy가 임대합니다(sodankyla.fi). 회사 목록에 있는 주택은 거의 모두 중심 마을에 있고, 나머지는 Aska, Orajärvi, Riipi, Torvinen, Vaalajärvi에 있습니다.',
    '지자체에 따르면 소단퀼래를 오랫동안 괴롭혀 온 주택난은 누그러졌습니다. 2025년 여름 Jeesiöjoki 강변에 신규 주택 36채의 Käpyriihi가 완공되었습니다(소단퀼래 지자체, 2025년 7월 2일). 회사의 주택 검색에는 그때그때 비어 있거나 곧 비는 주택이 월세와 입주 가능일과 함께 나옵니다(Asentopuulaaki).',
    '주택난이 완전히 끝난 것은 아닙니다. 2025년 9월 지자체의 기술 담당 이사는 일자리가 있는데도 근로자를 소단퀼래로 데려오기가 여전히 어렵다고 Yle에 말했습니다(Yle, 2025년 9월 11일).',
  ],
  sections: [
    {
      id: 'prices',
      kicker: '월세 수준',
      h2: '오래된 건물은 ㎡당 약 €10, 새 건물은 €18.',
      table: {
        caption: 'Asentopuulaaki Oy 월세, €/㎡/월, 주택 목록 2026년 11월 15일',
        head: ['건물', '€/㎡/월'],
        rows: [
          ['Käpyriihi, 2025년 준공', '18.00'],
          ['Peuranpalas 2013년, Kehtoranta 2015년', '12.80–13.00'],
          ['연립주택, 외부 복도형, 아파트 1977–1998년', '8.80–12.50'],
          ['중심가의 아파트 단지, 1968–1970년', '10.20'],
          ['외곽 마을의 연립주택', '7.40–10.90'],
        ],
        foot: 'Asentopuulaaki Oy 주택 목록의 모든 주택 월세로 계산했습니다(2026년 11월 15일, 건물 42동, 주택 597채). 보증금은 월세 한 달 치이고, 수도 요금은 선불이며, 가정용 전기는 임차인이 부담합니다. 전기 난방을 쓰는 마을 주택에서는 난방비도 임차인이 부담하며, 회사는 여름에 월 약 €100, 겨울에 월 약 €200으로 봅니다.',
      },
      paras: [
        '<strong>예시:</strong> 중심가 아파트 단지의 55m² 투룸은 월 €632, Käpyriihi의 42m² 투룸은 €756, Kaanaanmaa의 80m² 방 세 개짜리 연립주택은 €800입니다.',
        '<strong>민간 월세:</strong> 2025년 10월–12월 소단퀼래 중심 우편번호 지역의 자유시장 투룸은 ㎡당 평균 €11.73이었습니다(핀란드 통계청, 표 13eb). 더 최근의 지자체 수치는 없습니다. 소단퀼래는 핀란드 통계청의 현재 임대료 표에 없습니다.',
      ],
    },
    {
      id: 'channels',
      kicker: '신청 대상',
      h2: '먼저 지자체 회사, 그다음 포털.',
      band: true,
      cards: [
        {
          title: 'Asentopuulaaki Oy',
          body: '지자체 소유 주택 약 720채를 임대하는 지자체 자회사입니다. 온라인으로 신청하며 소득 증빙을 첨부합니다. 신용 기록을 조회하며, 연체 기록은 불리하게 작용합니다.',
          href: 'https://www.asentopuulaaki.fi/asunnon-hakeminen/',
          linkLabel: 'asentopuulaaki.fi: 주택 신청',
          event: 'asentopuulaaki',
        },
        {
          title: '빈집',
          body: '회사의 주택 검색에는 비어 있거나 곧 비는 주택이 월세와 입주 가능일과 함께 나옵니다. 목록은 회사 사이트에서 갱신되므로 신청하기 전에 확인하십시오.',
          href: 'https://www.asentopuulaaki.fi/asuntohaku/',
          linkLabel: 'asentopuulaaki.fi: 주택 검색',
          event: 'asentopuulaaki_vapaat',
        },
        {
          title: 'Oikotie와 Vuokraovi',
          body: '소단퀼래 지자체 아래의 개인 매물입니다. 지자체 주거 페이지에는 자체 회사 외의 집주인이 나와 있지 않으므로, 민간 주택은 포털에서 찾아야 합니다.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/sodankyl%C3%A4',
          linkLabel: 'Oikotie: 소단퀼래 임대',
          event: 'oikotie',
        },
      ],
    },
    {
      id: 'student-loan',
      kicker: '새로 오는 분께',
      h2: '최근 졸업자에게 최대 €5,800.',
      paras: [
        '소단퀼래, 이나리, 우츠요키는 이주해 와서 상근 근무 시간의 50% 이상 일하거나 사업자로 일하는 최근 졸업자의 학자금 대출을 보전합니다. 보전액은 최대 €5,800이며, 12개월 단위로 최대 세 해에 걸쳐 소급 지급됩니다(소단퀼래 지자체).',
        '직업계 고등학교 자격, 응용과학대학교 또는 대학교 학위를 위한 학자금 대출이 대상이며, 졸업한 지 지난 두 해 안이어야 합니다. 신청은 2027년 1월에 처음 처리되며, Yle에 따르면 신청 양식은 2026년 12월 1일에 열립니다(Yle, 2026년 9월 1일).',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Kela 주거수당',
      h2: '소단퀼래는 Kela의 “기타 지자체”에 해당합니다.',
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
        foot: 'Kela, 일반 주거수당 2026. 수당은 인정되는 주거비의 최대 70%이며, €15 미만의 수당은 지급되지 않습니다.',
      },
    },
    {
      id: 'work',
      kicker: '일자리',
      h2: '주둔지는 커지고, 광산은 2034년에 문을 닫습니다.',
      bullets: [
        '예거 여단은 약 400명을 고용하고 해마다 징집병 약 2,200명을 훈련합니다(핀란드 육군). 소단퀼래 주둔지에는 징집병 700명 가까이를 수용하는 병영이 건설 중이며 2028년 초에 완공될 예정입니다(Yle, 2026년 4월 2일).',
        'Boliden의 Kevitsa 광산은 2026년 5월 일자리 77개 감축을 발표했고, 광산은 2034년에 폐쇄될 예정입니다(Yle, 2026년 5월 26일).',
        'Anglo American이 계획 중인 Sakatti 광산은 2032년경 가동을 시작할 예정이지만 프로젝트는 아직 인허가 단계이며, 핀란드 자연보호협회 라플란드 지부가 Sakatti 결정에 대해 법원에 이의를 제기했습니다(Anglo American, Yle, 2026년 6월 18일).',
        '지자체는 Tähtelä 과학 공동체와 루오스토 산악 리조트도 소개합니다(sodankyla.fi). 루오스토는 중심 마을에서 38km 거리입니다(OpenStreetMap).',
      ],
    },
    {
      id: 'everyday',
      kicker: '일상',
      h2: '이곳의 극야는 나흘입니다.',
      bullets: [
        '소단퀼래의 극야는 크리스마스 직전 나흘뿐입니다(핀란드 기상청).',
        '가장 가까운 공항은 93km 떨어진 키틸래이고, 로바니에미 중심가는 130km 거리입니다(OpenStreetMap).',
        '학생은 REDU가 소단퀼래에서 학생 기숙사를 운영하며, 2026년 3월 지자체는 Asentopuulaaki의 큰 주택에 고등학생과 성인 학생을 위한 기숙사를 마련한다고 발표했습니다(redu.fi, 소단퀼래 지자체, 2026년 3월 5일).',
      ],
    },
    {
      id: 'contract',
      kicker: '계약',
      h2: '해지 통보는 한 달.',
      bullets: [
        'Asentopuulaaki의 해지 통보 기간은 달력상 한 달이며, 보증금은 퇴거 후 약 두 주 뒤에 반환됩니다(Asentopuulaaki).',
        '보증금은 월세 세 달 치가 최대입니다(주거용 임대차법 제8조).',
        '2026년 10월 1일부터 보증금은 임대가 끝난 날부터 14일 안에 반환하거나, 보유 사유를 서면으로 설명해야 합니다(Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: '소단퀼래의 지자체 주택은 어떻게 신청합니까?',
      a: 'Asentopuulaaki Oy의 온라인 신청서로 신청하며, 급여 명세서 같은 소득 증빙을 첨부합니다. 신용 기록은 Suomen Asiakastieto를 통해 조회하며, 연체 기록은 불리하게 작용합니다(Asentopuulaaki).',
    },
    {
      q: '소단퀼래의 임대 주택 월세는 얼마입니까?',
      a: '지자체 회사의 오래된 아파트 단지는 ㎡당 약 €10, 연립주택과 외부 복도형 주택은 대부분 €10–12.50이며, 2025년에 준공된 Käpyriihi는 €18이므로 42m² 투룸은 월 €756입니다(Asentopuulaaki, 2026년 11월 15일). 중심가의 자유시장 투룸은 2025년 10월–12월에 ㎡당 평균 €11.73이었습니다(핀란드 통계청).',
    },
    {
      q: '소단퀼래에 주택난이 있습니까?',
      a: '오랫동안 있었습니다. 지자체에 따르면 신축 건물이 완공되면서 누그러졌으며(2025년 7월 2일), 지자체 회사의 주택 검색에는 비어 있거나 곧 비는 주택이 나옵니다(Asentopuulaaki).',
    },
    {
      q: '학자금 대출 보전은 누가 받을 수 있습니까?',
      a: '소단퀼래, 이나리, 우츠요키로 이주해 와서 상근 근무 시간의 50% 이상 일하거나 사업자로 일하는 최근 졸업자입니다. 보전액은 세 해에 걸쳐 최대 €5,800이며, 신청은 2027년 1월에 처음 처리됩니다(소단퀼래 지자체).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: '첫 며칠 밤',
    h2: '직접 방문해서 집 보기.',
    lead: '제휴사 검색에서 오늘 가격으로 소단퀼래와 루오스토의 빈 객실과 아파트를 확인할 수 있습니다.',
    chips: [
      { label: '소단퀼래', destination: 'Sodankylä', sid: 'rentals_sodankyla_first_weeks' },
      { label: '루오스토', destination: 'Luosto', sid: 'rentals_luosto_first_weeks' },
    ],
  },
  sources: pickSources('ko', SOURCES, common.sourceLabels),
};

export default copy;
