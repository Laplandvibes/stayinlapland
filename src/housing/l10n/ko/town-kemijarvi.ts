/**
 * Korea (ko) · town-kemijarvi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
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
  metaTitle: '케미야르비 임대: 시 소유 주택 560채와 신청 방법',
  metaDescription:
    '케미야르비의 임대 안내. 시 소유 임대 주택 560채, 온라인 신청, 2026년 임대료 인상, 퓌해 인근 Vuostimo 연립주택, Kela 주거수당을 정리했습니다.',
  breadcrumb: '케미야르비',
  hero: {
    eyebrow: '케미야르비, 주민 6,919명',
    title: '케미야르비 임대.',
    subtitle:
      '시가 임대 주택 560채를 소유하고 그중 일부가 비어 있는 핀란드 최북단 도시. 어디에 신청하는지, 이사 전에 무엇을 알아야 하는지 안내합니다.',
  },
  authorNote:
    '인구는 핀란드 통계청, 주택 수와 신청 방법은 케미야르비 시의 공식 페이지, 임대료 인상과 입주율 목표는 시의 2026년 예산을 근거로 했습니다. 2026년 11월 15일에 확인했습니다.',
  intro: [
    '케미야르비의 주민은 2025년 말 6,919명으로 전년보다 35명 줄었습니다(핀란드 통계청). 시는 스스로를 핀란드 최북단 도시라고 소개하며, 중심가의 서비스가 걸어서 갈 수 있는 거리에 있다고 설명합니다(kemijarvi.fi).',
    '시의 부동산 회사 두 곳(Kemijärven Vuokratalot, Kemijärven Töveli)이 임대 주택 560채를 소유하고 있습니다(kemijarvi.fi). 시 예산은 이 주택의 80–85%를 임대하는 것을 현실적인 목표로 보고 있으므로 빈집이 실제로 존재합니다.',
    '월세는 오르고 있습니다. 2026년 2월 1일에 Kemijärven Vuokratalot의 월세가 4.5%, 2026년 7월 1일에 Töveli의 월세가 5% 올랐습니다. 같은 인상률이 2027년과 2028년 계획에도 들어 있습니다(2026년 예산).',
  ],
  sections: [
    {
      id: 'channels',
      kicker: '신청 대상',
      h2: '먼저 시 소유 회사, 그다음 포털.',
      band: true,
      cards: [
        {
          title: '시 소유 임대 주택',
          body: '시의 주택 560채는 중심가, Särkikangas, Sipovaara, Isokylä, Halosenranta, Vuostimo에 있습니다. 온라인으로 신청하거나 Sortteeri(Vapaudenkatu 8)에서 종이 양식으로 신청합니다. 신청서는 넉 달간 유효하며 갱신할 수 있습니다.',
          href: 'https://kemijarvi.fi/asuminen-ja-ymparisto/asuminen/kemijarven-kaupungin-vuokratalot/asunnon-hakeminen/',
          linkLabel: 'kemijarvi.fi: 주택 신청',
          event: 'kemijarvi_city',
        },
        {
          title: '퓌해에서 14km, Vuostimo',
          body: 'Vuostimo에 있는 1987년에 지은 시 소유 연립주택으로, 중심가에서 북쪽으로 약 35킬로미터 떨어져 있습니다. 퓌해툰투리 스키 리조트까지는 14킬로미터여서, 시의 임대 주택 중 퓌해에서 가장 가깝습니다.',
          href: 'https://kemijarvi.fi/asuminen-ja-ymparisto/asuminen/kemijarven-kaupungin-vuokratalot/vuokratalokohteet/vuostimo/',
          linkLabel: 'kemijarvi.fi: Vuostimo',
          event: 'kemijarvi_vuostimo',
        },
        {
          title: 'Oikotie와 Vuokraovi',
          body: '케미야르비 지자체로 분류된 개인과 중개업체 매물입니다. 시의 주거 페이지에는 민간 집주인이 나열되어 있지 않으므로, 민간 주택은 포털에서 찾아야 합니다.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kemij%C3%A4rvi',
          linkLabel: 'Oikotie: 케미야르비 임대',
          event: 'oikotie',
        },
      ],
    },
    {
      id: 'prices',
      kicker: '월세 수준',
      h2: '시 소유 회사는 월세를 공개하지 않습니다.',
      table: {
        caption: '평균 월세 €/㎡/월, 자유시장 임대 주택, 2026Q3',
        head: ['', '라플란드(광역 지역)', '전국'],
        rows: [
          ['원룸', '17.25', '20.49'],
          ['투룸', '12.87', '15.07'],
          ['방 세 개 이상', '11.08', '13.98'],
          ['전체 주택', '13.14', '15.99'],
        ],
        foot: '핀란드 통계청, 임대료 2026Q3, 표 15fa. 케미야르비의 별도 수치는 발표되지 않으며, 광역 수치에는 더 비싼 로바니에미가 포함되어 있습니다.',
      },
      paras: [
        '<strong>케미야르비 자체 수치는 2022년 것입니다.</strong> 도심 우편번호 지역 98100에서 자유시장 원룸은 2022년 1월–3월에 ㎡당 평균 €12.15, 투룸은 ㎡당 €9.10이었습니다. 그 이후의 모든 분기는 비공개 처리되었습니다. 관측 수가 너무 적으면 핀란드 통계청은 해당 우편번호 지역의 수치를 발표하지 않습니다(표 13eb).',
        '시 소유 회사의 월세는 온라인에 없습니다. 제안을 받아들이기 전에 주택 담당자에게 월세를 문의하고, 2026년에 월세가 올랐다는 점을 기억하세요. Vuokratalot 4.5%, Töveli 5%입니다.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Kela 주거수당',
      h2: '케미야르비는 Kela의 “기타 지자체”에 해당합니다.',
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
      kicker: '일자리와 교통',
      h2: '이사하기 전에 일자리부터 정하세요.',
      bullets: [
        '시에 따르면 시 자체를 제외한 주요 고용주는 Keitele Group, Festivo Porkka Group, Kela의 고객센터이며, 소매, 서비스, 관광 업체도 있습니다(2026년 예산).',
        '실업자는 2024년 노동력의 15.6%로, 핀란드 전체의 11.7%보다 높았습니다(핀란드 통계청).',
        '수오무툰투리는 중심가에서 46km, 퓌해툰투리는 50km 거리입니다(OpenStreetMap). 수오무는 케미야르비 안에 있고, 퓌해는 이웃 지자체인 펠코센니에미에 속합니다.',
        '로바니에미 공항은 80km 거리이며(OpenStreetMap), 시는 헬싱키까지 직행 철도가 이어진다고 설명합니다(kemijarvi.fi).',
      ],
    },
    {
      id: 'contract',
      kicker: '계약',
      h2: '알아 둘 만한 법 조항 두 가지.',
      bullets: [
        '보증금은 월세 세 달 치가 최대입니다(주거용 임대차법 제8조).',
        '2026년 10월 1일부터 보증금은 임대가 끝난 날부터 14일 안에 반환하거나, 돌려주지 않는 사유를 서면으로 알려야 합니다(Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: '케미야르비의 시 소유 주택은 어떻게 신청합니까?',
      a: '시 웹사이트의 온라인 신청서나 Sortteeri(Vapaudenkatu 8)의 종이 양식으로 신청합니다. 신청서는 넉 달간 유효하며 넉 달 더 갱신할 수 있습니다. 신용 기록을 조회하며, 첨부 서류가 도착해야 신청서가 처리됩니다. 입주자 선정 회의는 보통 격주 수요일에 열립니다(kemijarvi.fi).',
    },
    {
      q: '케미야르비에 빈 임대 주택이 있습니까?',
      a: '있을 가능성이 높습니다. 시 예산은 회사 소유 주택의 80–85%를 임대하는 것을 현실적인 목표로 봅니다(2026년 예산). 어떤 집이 비어 있는지 주택 담당자에게 문의하세요.',
    },
    {
      q: '케미야르비의 임대 주택 월세는 얼마입니까?',
      a: '현재의 평균은 발표되지 않습니다. 도심 우편번호 지역의 가장 최근 수치는 2022년 초의 것으로 원룸 ㎡당 €12.15, 투룸 ㎡당 €9.10입니다. 라플란드 평균은 2026년 7월–9월에 ㎡당 €13.14였으며, 이 수치에는 더 비싼 로바니에미가 포함되어 있습니다(핀란드 통계청).',
    },
    {
      q: '케미야르비에 학생 기숙사가 있습니까?',
      a: '라플란드 교육센터 REDU가 케미야르비에서 학생 기숙사를 운영합니다. 의무교육 중인 학생은 주거가 무료이며, 남는 자리는 다른 학생에게 공시된 가격으로 임대됩니다(redu.fi).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: '첫 며칠 숙소',
    h2: '직접 방문해서 집 보기.',
    lead: '제휴사 검색에서 오늘 가격으로 케미야르비와 퓌해의 빈 객실과 아파트를 확인할 수 있습니다.',
    chips: [
      { label: '케미야르비', destination: 'Kemijärvi', sid: 'rentals_kemijarvi_first_weeks' },
      { label: '퓌해', destination: 'Pyhä', sid: 'rentals_pyha_first_weeks' },
    ],
  },
  sources: pickSources('ko', SOURCES, common.sourceLabels),
};

export default copy;
