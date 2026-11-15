/**
 * Korea (ko) · town-kemi-tornio. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/kemi-tornio.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'kemi', 'itatuuli', 'keminmaa', 'keminmaaVuokra', 'tornio', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: '케미, 토르니오, 케민마 임대: 지자체 주택 안내',
  metaDescription:
    '라플란드 해안 케미, 토르니오, 케민마의 임대 안내. Itätuuli와 Tornion Krunni 같은 지자체 주택회사, 민간 중개업체, Kela 지원을 정리했습니다.',
  breadcrumb: '케미와 토르니오',
  hero: {
    eyebrow: '시 라플란드의 해안',
    title: '케미, 토르니오, 케민마 임대.',
    subtitle:
      '지자체 주택회사가 수백 채를 보유하고 온라인으로 신청하는 해안의 쌍둥이 도시. 어디서 시작하는지, 월세는 얼마인지 안내합니다.',
  },
  authorNote:
    '주택회사의 보유 주택 수는 케미, 토르니오, 케민마 지자체의 공식 페이지, 신청 조건은 각 회사의 공식 페이지, ㎡당 월세는 핀란드 통계청(라플란드 광역 지역 2026Q3)을 근거로 했습니다. 2026년 11월 15일에 확인했습니다.',
  intro: [
    '케미의 주민은 19,339명, 토르니오는 20,823명, 케민마는 7,576명입니다(핀란드 통계청, 2025년 12월 31일). 세 지자체가 서로 맞닿아 있어, 집과 직장이 서로 다른 지자체에 있을 수 있습니다.',
    '지자체 주택회사가 가장 먼저 찾아갈 곳입니다. 케미의 지자체 주택은 도시 최대 임대주택 사업자인 Kiinteistö Oy Itätuuli(kemi.fi)가 운영하며, 중심가에서 다섯 킬로미터 이내에 주택이 있습니다(itatuuli.fi). Keminmaan Vuokra-asunnot Oy는 18개 건물에 300채를 조금 넘게 보유합니다(keminmaa.fi). 회사마다 온라인 신청서가 따로 있습니다. 토르니오에서는 시 소유 주택을 Tornion Krunni Oy가 관리하며, 여기에 Tornion Vuokra-asunnot Oy가 포함됩니다(tornio.fi).',
    '핀란드 통계청의 현재 임대료 표에는 케미나 토르니오의 별도 항목이 없으므로, 아래에는 라플란드 광역 수치를 보여 드립니다. 로바니에미의 수치는 해당 페이지에 있습니다.',
  ],
  sections: [
    {
      id: 'prices',
      kicker: '월세 수준',
      h2: '라플란드 광역의 ㎡당 월세, 2026년 7월–9월.',
      table: {
        caption: '평균 월세 €/㎡/월, 자유시장 임대 주택, 2026Q3',
        head: ['', '라플란드(광역 지역)', '로바니에미', '전국'],
        rows: [
          ['원룸', '17.25', '18.63', '20.49'],
          ['투룸', '12.87', '14.40', '15.07'],
          ['방 세 개 이상', '11.08', '12.29', '13.98'],
          ['전체 주택', '13.14', '14.63', '15.99'],
        ],
        foot: '핀란드 통계청, 임대료 2026Q3, 표 15fa. 광역 수치에는 로바니에미가 포함되어 있어 케미–토르니오 수준은 이보다 낮을 가능성이 크지만, 현재 표에서는 따로 확인할 수 없습니다.',
      },
      paras: [
        '<strong>광역 평균 기준 예시:</strong> 30m² 원룸은 월 약 €520(17.25 × 30), 50m² 투룸은 약 €640(12.87 × 50), 75m² 방 세 개짜리는 약 €830(11.08 × 75)입니다.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Kela 주거수당',
      h2: '케미, 토르니오, 케민마는 Kela의 “기타 지자체”에 해당합니다.',
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
      id: 'channels',
      kicker: '신청 대상',
      h2: '먼저 지자체 회사, 그다음 중개업체.',
      band: true,
      cards: [
        {
          title: '케미: Kiinteistö Oy Itätuuli',
          body: '시 소유 임대 주택입니다. Itätuuli는 케미 최대의 임대주택 사업자이며, 주택은 중심가에서 다섯 킬로미터 이내에 있습니다. 자체 온라인 신청서는 넉 달간 유효하고 보증금은 받지 않습니다. 케미 관광·비즈니스 안내 페이지에는 민간 중개업체도 나열되어 있습니다. Forenom, Habita Kemi, HVC Group, Kiinteistömaailma, KVP Group, OP Koti Kemi, Pihlajaniemi & Co, Solecco, AJK Asunnot입니다.',
          href: 'https://www.kemi.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
          linkLabel: 'kemi.fi: 임대 주택',
          event: 'kemi_city',
        },
        {
          title: 'Keminmaan Vuokra-asunnot Oy(케민마)',
          body: '지자체가 소유한 주택회사로, 18개 건물에 300채를 조금 넘게 보유하며 수도와 난방이 월세에 포함됩니다. 자체 온라인 신청서는 석 달간 유효하고 보증금은 월세 한 달 치입니다.',
          href: 'https://www.keminmaanvuokra-asunnot.fi/asunnonhaku.html',
          linkLabel: 'Keminmaan Vuokra-asunnot: 신청 방법',
          event: 'keminmaa',
        },
        {
          title: '토르니오: Tornion Krunni Oy',
          body: 'Tornion Vuokra-asunnot Oy, Tornion Oppilasasuntola Oy, Tornion Palveluasunnot Oy를 관리하며, 시가 직접 소유한 주택은 시의 시설 부서가 맡습니다. 주거 문의는 전화로 받고, 시 페이지에는 민간 집주인과 중개업체도 안내되어 있습니다.',
          href: 'https://www.tornio.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
          linkLabel: 'tornio.fi: 임대 주택',
          event: 'tornio_city',
        },
        {
          title: 'Oikotie와 Vuokraovi',
          body: '개인과 중개업체의 매물입니다. 케미, 토르니오, 케민마를 각각 별도의 지자체로 검색하십시오. 검색이 세 번 따로 이루어집니다.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kemi',
          linkLabel: 'Oikotie: 케미 임대',
          event: 'oikotie',
        },
      ],
    },
    {
      id: 'contract',
      kicker: '계약',
      h2: '알아 둘 만한 법 조항 두 가지.',
      bullets: [
        '보증금은 월세 세 달 치가 최대입니다(주거용 임대차법 제8조).',
        '2026년 10월 1일부터 보증금은 임대가 끝난 날부터 14일 안에 반환하거나, 보유 사유를 서면으로 설명해야 합니다(Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: '케미의 지자체 주택은 어떻게 신청합니까?',
      a: 'Kiinteistö Oy Itätuuli의 자체 온라인 신청서로 신청하며, 넉 달간 유효합니다. Itätuuli는 케미 최대의 임대주택 사업자로 주택이 중심가에서 다섯 킬로미터 이내에 있으며, 모든 주택을 보증금 없이 임대합니다(itatuuli.fi). Keminmaan Vuokra-asunnot Oy는 별도의 신청서가 있습니다.',
    },
    {
      q: '케미와 토르니오의 월세는 얼마입니까?',
      a: '핀란드 통계청의 현재 표에는 두 도시의 별도 항목이 없습니다. 라플란드 광역 평균은 2026년 7월–9월에 ㎡당 €13.14(원룸 17.25, 투룸 12.87)였으며, 이 수치에는 더 비싼 로바니에미가 포함되어 있습니다.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: '첫 몇 주',
    h2: '직접 방문해서 집 보기.',
    lead: '집을 보러 다니는 동안 머무를 곳을 예약하고, 서명하기 전에 집을 직접 확인하십시오.',
    chips: [
      { label: '케미', destination: 'Kemi', sid: 'rentals_kemi_first_weeks' },
      { label: '토르니오', destination: 'Tornio', sid: 'rentals_tornio_first_weeks' },
    ],
  },
  sources: pickSources('ko', SOURCES, common.sourceLabels),
};

export default copy;
