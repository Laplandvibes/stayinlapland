/**
 * Korea (ko) · longstays. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/longstays.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['ahvl531', 'kuluttajaliittoVuokra', 'rakli', 'dvvTilapainen', 'dvv'] as const;

const copy: HousingPageCopy = {
  metaTitle: '라플란드 한 달 살기와 겨울 체류: 아파트, 캐빈, 직원 숙소',
  metaDescription:
    '핀란드 라플란드에서 한 달 또는 한 겨울을 머무는 방법. 가구가 갖춰진 임대 아파트, 주 단위 캐빈, 직원 숙소를 비교합니다.',
  breadcrumb: '장기 체류',
  hero: {
    eyebrow: '한 달에서 한 겨울까지',
    title: '라플란드에서 한 달 살기.',
    subtitle:
      '가구가 갖춰진 임대 아파트, 주 단위 캐빈, 고용주가 제공하는 숙소. 한 달에서 한 겨울까지 라플란드에서 지내는 세 가지 방법과, 각 계약이 요구하는 조건을 안내합니다.',
  },
  authorNote:
    '법령은 Finlex(주거용 임대차법 481/1995, 개정 531/2026), 주소 신고는 디지털·인구정보청, 캐빈 정보는 Lomarengas 상품 피드를 근거로 했습니다. 2026년 11월 15일에 확인했습니다.',
  intro: [
    '레비에서 한 달 원격 근무, 로바니에미에서 한 겨울, 스키 리조트에서 한 시즌. 라플란드의 장기 체류는 대개 세 가지 방법 중 하나로 정리됩니다. 가격도 다르지만, 어떤 계약을 맺게 되고 그에 따라 법이 무엇을 보호하는지가 더 크게 다릅니다.',
    '거주가 아니라 휴가로 오신다면 호텔과 캐빈은 자매 사이트 <a href="https://laplandstays.com/" target="_blank" rel="noopener">laplandstays.com</a>에, 빌라는 <a href="https://laplandluxuryvillas.com/" target="_blank" rel="noopener">laplandluxuryvillas.com</a>에 있습니다.',
  ],
  sections: [
    {
      id: 'three-ways',
      kicker: '세 가지 방법',
      h2: '아파트, 캐빈, 직원 숙소.',
      cards: [
        {
          title: '가구가 갖춰진 임대 아파트',
          body: '<strong>주거용 임대차 계약</strong>이며, 장기 체류에서는 보통 기간이 정해져 있습니다. 임대차법이 임차인을 보호합니다. 보증금은 월세 세 달 치가 최대이고, 2026년 10월 1일부터는 14일 안에 반환해야 합니다.',
          href: '/rentals',
          linkLabel: '도시별 임대 안내',
        },
        {
          title: '주 단위 캐빈',
          body: '휴가용 캐빈은 중개업체를 통해 주 단위로 임대되며, 조건은 보통 업체의 예약 및 취소 약관입니다. 임대차법은 거주용으로 빌린 집에 적용될 뿐 숙박업의 영업 활동에는 적용되지 않습니다. 사진이 있는 이용 가능한 캐빈은 아래에서 확인하십시오.',
        },
        {
          title: '직원 숙소',
          body: '시즌 근무에서는 주거가 일자리에 딸려 오는 경우가 많습니다. 서명하기 전에 그 집이 고용 조건의 일부인지, 시즌 도중에 일이 끝나면 집이 어떻게 되는지 물어보십시오.',
          href: '/seasonal-worker-housing',
          linkLabel: '시즌 근로자 숙소',
        },
      ],
    },
    {
      id: 'contract',
      kicker: '계약',
      h2: '기간이 정해진 임대는 중도에 끝낼 수 없습니다.',
      bullets: [
        '<strong>기간이 정해진 임대는 계약서에 적힌 날짜까지 유지됩니다.</strong> 임차인은 계약 기간 중간에 해지를 통보할 수 없습니다. 집주인과 합의하거나 법에 정해진 특정 상황에서만 더 일찍 끝낼 수 있습니다(핀란드 소비자연합, 임대차법).',
        '<strong>얼마나 머물지 모른다면</strong> 대신 기간이 정해지지 않은 임대를 요청하십시오. 임차인은 이 계약을 해지할 수 있으며, 임차인의 해지 통보 기간은 2026년 10월 1일의 개정에서 바뀌지 않습니다(Rakli).',
        '<strong>짧은 임대를 연이어 맺는 경우:</strong> 같은 임차인에게 석 달 이하의 기간 한정 임대가 두 번을 넘게 연속으로 주어지면, 적힌 종료일과 관계없이 그 임대는 기간이 정해지지 않은 것으로 봅니다.',
        '<strong>임대차법이 모든 것을 포괄하지는 않습니다.</strong> 거주용으로 빌린 집에는 적용되지만 숙박업의 영업 활동에는 적용되지 않습니다(주거용 임대차법 제1조, 제2조). 서명하기 전에 주거용 임대차 계약인지, 숙박 계약인지 물어보십시오.',
        '<strong>보증금</strong>은 월세 세 달 치가 최대입니다. 2026년 10월 1일부터는 임대가 끝난 날부터 14일 안에 반환하거나 보유 사실을 통지해야 합니다.',
      ],
    },
    {
      id: 'address',
      kicker: '주소 신고',
      h2: '석 달 이상이면 주소를 신고하십시오.',
      paras: [
        '디지털·인구정보청에 따르면, 거주 주소가 바뀌고 체류가 최소 석 달 이어지면 이사를 신고해야 합니다. 한 해 안에 같은 영구 주소로 돌아오면 그 이사는 임시이며 영구 주소는 그대로 유효합니다.',
        '신고는 이사 당일로부터 빨라야 한 달 전, 늦어도 이사 후 일주일 안에 합니다. 영구 이주라면 겨울 타이어, 전기 계약, 보건소 같은 나머지 사항은 <a href="/moving-to-lapland/">이사 체크리스트</a>에 있습니다.',
      ],
    },
  ],
  faqs: [
    {
      q: '라플란드에서 한 달만 집을 빌릴 수 있습니까?',
      a: '가능합니다. 기간이 정해진 임대는 짧아도 되고, 휴가용 캐빈은 주 단위로 임대됩니다. 임대 포털에서 “kalustettu”(가구 포함)라는 단어로 검색하십시오. 서명하기 전에 주거용 임대차인지 숙박인지 물어보십시오. 임대차법은 앞의 경우만 보호하기 때문입니다.',
    },
    {
      q: '라플란드에서 겨울을 보내면 주소를 신고해야 합니까?',
      a: '체류가 최소 석 달 이어지면 신고해야 합니다. 한 해 안에 같은 영구 주소로 돌아오면 그 이사는 임시이며 영구 주소는 그대로 유효합니다(디지털·인구정보청).',
    },
    {
      q: '일이 끝나면 기간이 정해진 임대도 끝낼 수 있습니까?',
      a: '대개는 할 수 없습니다. 기간이 정해진 임대는 계약서에 적힌 날짜까지 유지됩니다. 집주인과 더 이른 종료를 합의하거나, 처음부터 임차인이 해지할 수 있는 기간 미정 임대를 선택하십시오.',
    },
  ],
  sources: pickSources('ko', SOURCES, common.sourceLabels),
};

export default copy;
