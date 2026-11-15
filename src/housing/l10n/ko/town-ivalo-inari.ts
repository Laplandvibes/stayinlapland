/**
 * Korea (ko) · town-ivalo-inari. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/ivalo-inari.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'inari', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: '이발로와 이나리 임대: 지자체와 민간 집주인',
  metaDescription:
    '이발로, 이나리, 사리셀카의 임대 안내. 지자체 주택 500채 이상(Inarin Vuokra-asunnot Oy), 지자체가 안내하는 민간 집주인, Kela 지원을 정리했습니다.',
  breadcrumb: '이발로와 이나리',
  hero: {
    eyebrow: '이나리 지자체, 주민 7,244명',
    title: '이발로와 이나리 임대.',
    subtitle:
      '핀란드 최북단의 임대 시장. 지자체 회사 하나, 민간 집주인 몇 곳, 그리고 사리셀카의 시즌. 어디서 시작할지 안내합니다.',
  },
  authorNote:
    'Inarin Vuokra-asunnot Oy와 민간 집주인은 이나리 지자체의 공식 주거 페이지, 인구는 핀란드 통계청, ㎡당 월세는 핀란드 통계청(라플란드 광역 지역 2026Q3)을 근거로 했습니다. 2026년 11월 15일에 확인했습니다.',
  intro: [
    '이나리 지자체의 주민은 7,244명이며(핀란드 통계청, 2025년 12월 31일), 지자체에 따르면 그곳에 살고 싶다는 관심이 늘어 임대 사업자 목록을 페이지에 정리해 두었습니다(inari.fi).',
    '지자체 회사 Inarin Vuokra-asunnot Oy는 이발로, 이나리, 사리셀카, 넬림, 세베트야르비에서 원룸부터 가족용까지 500채 이상을 임대합니다. 지자체 목록에 있는 민간 집주인은 Bilto Oy, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg Oy, Uni Kodit입니다(inari.fi).',
    '핀란드 통계청은 이나리의 별도 월세 수치를 발표하지 않으므로 아래에는 라플란드 광역 수치를 보여 드립니다. 사리셀카 시즌 근로자의 주거는 별도 페이지가 있습니다.',
  ],
  sections: [
    {
      id: 'channels',
      kicker: '신청 대상',
      h2: '지자체 회사와 지자체의 목록.',
      band: true,
      cards: [
        {
          title: 'Inarin Vuokra-asunnot Oy',
          body: '지자체 주택회사로, 이발로, 이나리, 사리셀카, 넬림, 세베트야르비에 500채 이상을 보유하며 기본 생활 서비스와 가깝습니다. 빈집과 신청은 회사 사이트에서 확인합니다.',
          href: 'https://inarinvuokra-asunnot.fi/',
          linkLabel: 'inarinvuokra-asunnot.fi',
          event: 'inari_company',
        },
        {
          title: '이나리 지자체: 민간 집주인',
          body: '지자체 주거 페이지에는 Bilto Oy, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg Oy, Uni Kodit의 연락처가 나열되어 있고, 페이스북의 소단퀼래–이나리–우츠요키 임대 그룹도 안내됩니다. 자세한 정보는 inari@inari.fi로 문의하세요.',
          href: 'https://www.inari.fi/fi/palvelut/asuminen.html',
          linkLabel: 'inari.fi: 주거',
          event: 'inari_city',
        },
        {
          title: 'Oikotie와 Vuokraovi',
          body: '이나리 지자체로 분류된 개인 매물이며, 이발로와 사리셀카의 집도 같은 검색에 나옵니다. 매물이 적으니 검색 알림을 설정하세요.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/inari',
          linkLabel: 'Oikotie: 이나리 임대',
          event: 'oikotie',
        },
        {
          title: '사리셀카 시즌 근로자를 위해',
          body: '사리셀카의 고용주도 직원 숙소를 직접 제공하며, 지자체 회사에는 사리셀카에도 주택이 있습니다. 면접 때 주거에 대해 물어보세요. 전체 상황은 시즌 근로자 페이지에 있습니다.',
          href: '/seasonal-worker-housing',
          linkLabel: '시즌 근로자 숙소',
          event: 'seasonal_page',
        },
      ],
    },
    {
      id: 'prices',
      kicker: '월세 수준',
      h2: '라플란드 광역의 ㎡당 월세, 2026년 7월–9월.',
      table: {
        caption: '평균 월세 €/㎡/월, 자유시장 임대 주택, 2026Q3',
        head: ['', '라플란드(광역 지역)', '전국'],
        rows: [
          ['원룸', '17.25', '20.49'],
          ['투룸', '12.87', '15.07'],
          ['방 세 개 이상', '11.08', '13.98'],
          ['전체 주택', '13.14', '15.99'],
        ],
        foot: '핀란드 통계청, 임대료 2026Q3, 표 15fa. 이나리의 별도 수치는 발표되지 않습니다.',
      },
    },
    {
      id: 'housing-allowance',
      kicker: 'Kela 주거수당',
      h2: '이나리는 Kela의 “기타 지자체”에 해당합니다.',
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
      id: 'contract',
      kicker: '계약',
      h2: '보증금과 반환.',
      bullets: [
        '보증금은 월세 세 달 치가 최대입니다(주거용 임대차법 제8조).',
        '2026년 10월 1일부터 보증금은 임대가 끝난 날부터 14일 안에 반환하거나, 돌려주지 않는 사유를 서면으로 알려야 합니다(Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: '이발로에서 임대 주택은 어디서 찾습니까?',
      a: '이발로, 이나리, 사리셀카에 500채 이상을 보유한 지자체 회사 Inarin Vuokra-asunnot Oy나, 지자체가 안내하는 민간 집주인(Bilto, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg, Uni Kodit)에게서 구합니다. 포털에는 매물이 적습니다.',
    },
    {
      q: '사리셀카에도 임대 주택이 있습니까?',
      a: '지자체 회사에는 사리셀카에도 주택이 있고, 고용주가 시즌 직원의 숙소를 직접 제공하기도 합니다. 공개 시장에서 사리셀카의 집은 대부분 휴가용 주택입니다.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: '첫 며칠 숙소',
    h2: '열쇠를 받기 전에.',
    lead: '제휴사 검색에서 오늘 가격으로 이발로와 사리셀카의 빈 객실을 확인할 수 있습니다.',
    chips: [
      { label: '이발로', destination: 'Ivalo', sid: 'rentals_ivalo_first_weeks' },
      { label: '사리셀카', destination: 'Saariselkä', sid: 'rentals_saariselka_first_weeks' },
    ],
  },
  sources: pickSources('ko', SOURCES, common.sourceLabels),
};

export default copy;
