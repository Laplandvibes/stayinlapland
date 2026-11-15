/**
 * Japani (ja) · town-ivalo-inari. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/ivalo-inari.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'inari', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'イヴァロとイナリの賃貸：自治体と民間の貸主',
  metaDescription:
    'イヴァロ、イナリ、サーリセルカで部屋を借りる方へ。500戸超の自治体住宅（Inarin Vuokra-asunnot Oy）、町が紹介する民間の貸主、Kelaの支援をご案内します。',
  breadcrumb: 'イヴァロとイナリ',
  hero: {
    eyebrow: 'イナリ町、住民7,244人',
    title: 'イヴァロとイナリの賃貸。',
    subtitle:
      'フィンランド最北の賃貸市場。自治体の会社が一つ、民間の貸主が数社、そしてサーリセルカのシーズンがあります。どこから始めるかをご案内します。',
  },
  authorNote:
    'Inarin Vuokra-asunnot Oyと民間の貸主はイナリ町の住まいのページ、人口はフィンランド統計局、m²あたりの家賃はフィンランド統計局（ラップランド地域 2026年第3四半期）から。2026年11月15日に確認しました。',
  intro: [
    'イナリ町の住民は7,244人です（フィンランド統計局、2025年12月31日）。町によると、ここに住みたいという関心が高まっており、そのため町は賃貸事業者の一覧をページにまとめました（inari.fi）。',
    '自治体の会社Inarin Vuokra-asunnot Oyは、イヴァロ、イナリ、サーリセルカ、ネッリム、セヴェッティヤルヴィで、ワンルームからファミリー向けまで500戸超を貸しています。町の一覧にある民間の貸主は、Bilto Oy、Ivalon vuokra-asunnot、IvaloCenter、Rakennusliike Holmberg Oy、Uni Koditです（inari.fi）。',
    'フィンランド統計局はイナリ単独の家賃の数字を公表していないため、以下ではラップランド地域の数字を示します。サーリセルカの季節労働者の住まいは、専用のページで扱っています。',
  ],
  sections: [
    {
      id: 'channels',
      kicker: '申込み先',
      h2: '自治体の会社と、町の一覧。',
      band: true,
      cards: [
        {
          title: 'Inarin Vuokra-asunnot Oy',
          body: '自治体の住宅会社です。イヴァロ、イナリ、サーリセルカ、ネッリム、セヴェッティヤルヴィに500戸超があり、生活に必要なサービスの近くにあります。空き状況と申込みは、同社の公式サイトにあります。',
          href: 'https://inarinvuokra-asunnot.fi/',
          linkLabel: 'inarinvuokra-asunnot.fi',
          event: 'inari_company',
        },
        {
          title: 'イナリ町：民間の貸主',
          body: '町の住まいのページには、Bilto Oy、Ivalon vuokra-asunnot、IvaloCenter、Rakennusliike Holmberg Oy、Uni Koditが連絡先つきで載っているほか、Facebookの「ソダンキュラ・イナリ・ウツヨキ」賃貸グループも紹介されています。詳しくはinari@inari.fiへお問い合わせください。',
          href: 'https://www.inari.fi/fi/palvelut/asuminen.html',
          linkLabel: 'inari.fi：住まい',
          event: 'inari_city',
        },
        {
          title: 'OikotieとVuokraovi',
          body: '自治体「イナリ」で探すと、民間の掲載が見つかります。イヴァロとサーリセルカの住戸も同じ検索に含まれます。掲載は少ないので、検索アラートを設定しておきましょう。',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/inari',
          linkLabel: 'Oikotie：イナリの賃貸',
          event: 'oikotie',
        },
        {
          title: 'サーリセルカの季節労働者の方へ',
          body: 'サーリセルカの雇用主は従業員を自分たちで住まわせることもあり、自治体の会社もサーリセルカに住戸を持っています。住まいについては面接で尋ねましょう。全体像は季節労働者のページにあります。',
          href: '/seasonal-worker-housing',
          linkLabel: '季節労働者の住まい',
          event: 'seasonal_page',
        },
      ],
    },
    {
      id: 'prices',
      kicker: '家賃の目安',
      h2: 'ラップランド地域のm²あたり家賃、2026年7月〜9月。',
      table: {
        caption: '平均家賃 €/m²/月、民間賃貸住宅、2026年第3四半期',
        head: ['', 'ラップランド（地域全体）', '全国'],
        rows: [
          ['ワンルーム', '17.25', '20.49'],
          ['二部屋の住戸', '12.87', '15.07'],
          ['三部屋以上', '11.08', '13.98'],
          ['全住戸', '13.14', '15.99'],
        ],
        foot: 'フィンランド統計局、2026年第3四半期の家賃、表15fa。イナリ単独の数字は公表されていません。',
      },
    },
    {
      id: 'housing-allowance',
      kicker: 'Kelaの住宅手当',
      h2: 'イナリはKelaの「その他の自治体」に入ります。',
      table: {
        caption: '2026年の住居費の上限額、€/月、Kelaの区分「その他の自治体」',
        head: ['世帯人数', '住居費の上限額'],
        rows: [
          ['1人', '394'],
          ['2人', '574'],
          ['3人', '734'],
          ['4人', '875'],
          ['一人増えるごとに', '+129'],
        ],
        foot: 'Kela、一般住宅手当 2026年。手当は認定された住居費の最大70%で、額が€15未満の場合は支給されません。',
      },
    },
    {
      id: 'contract',
      kicker: '契約',
      h2: '敷金とその返還。',
      bullets: [
        '敷金は家賃三か月分が上限です（住宅賃貸借法第8条）。',
        '2026年10月1日からは、賃貸借の終了後14日以内に、敷金を返還するか、返還しない理由を書面で説明しなければなりません（Rakli）。',
      ],
    },
  ],
  faqs: [
    {
      q: 'イヴァロで賃貸住宅はどこで見つかりますか？',
      a: 'イヴァロ、イナリ、サーリセルカに500戸超を持つ自治体の会社Inarin Vuokra-asunnot Oyか、町が紹介する民間の貸主（Bilto、Ivalon vuokra-asunnot、IvaloCenter、Rakennusliike Holmberg、Uni Kodit）です。ポータルサイトの掲載は少ないです。',
    },
    {
      q: 'サーリセルカに賃貸住宅はありますか？',
      a: '自治体の会社はサーリセルカにも住戸を持っており、雇用主は季節の従業員を自分たちで住まわせています。一般の市場では、サーリセルカの住戸は大半が休暇用の住まいです。',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: '最初の数泊',
    h2: '鍵を受け取る前に。',
    lead: '提携先の検索では、イヴァロとサーリセルカの空室を本日の料金で確認できます。',
    chips: [
      { label: 'イヴァロ', destination: 'Ivalo', sid: 'rentals_ivalo_first_weeks' },
      { label: 'サーリセルカ', destination: 'Saariselkä', sid: 'rentals_saariselka_first_weeks' },
    ],
  },
  sources: pickSources('ja', SOURCES, common.sourceLabels),
};

export default copy;
