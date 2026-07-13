import { Info } from 'lucide-react';
import { useLang, type Lang } from '../i18n/useLang';

/**
 * Site-local affiliate disclosure (cream / Playfair luxury variant).
 *
 * The canonical network disclosure already renders once in the shared Footer.
 * This component is for the per-AD inline disclosure required by
 * premium_design_standard §6 / affiliate_ad_creative_process §5 — every ad
 * card carries its own small "affiliate link" note next to the CTA, so the
 * commercial relationship is clear at the point of the click, not only in the
 * footer.
 *
 * Voice: warm puhekieli in FI ("sulle" register), natural-native in all 11
 * locales. No em-dashes-as-poetry — these are plain, functional sentences.
 */

interface AffiliateDisclosureProps {
  /** Override the auto-detected language. */
  lang?: Lang;
  className?: string;
  /** `compact` for inline-near-CTA placement, `full` for footer/page-top blocks. */
  variant?: 'compact' | 'full';
}

const TEXT: Record<Lang, { compact: string; full: string }> = {
  fi: {
    compact: 'Kumppanilinkki. Jos varaat täältä, saamme pienen palkkion. Sulle ei tule siitä lisähintaa.',
    full: 'Tällä sivulla on kumppanilinkkejä. Kun varaat niiden kautta, saamme pienen palkkion ilman että sulle koituu mitään lisäkuluja. Kohteet valitaan silti aina ansioiden, ei palkkion mukaan.',
  },
  en: {
    compact: 'Affiliate link. If you book through it we earn a small commission, at no extra cost to you.',
    full: 'This page has affiliate links. If you book through them we earn a small commission, at no extra cost to you. Stays are still chosen on merit, never on commission.',
  },
  de: {
    compact: 'Partnerlink. Wenn Sie darüber buchen, erhalten wir eine kleine Provision, ohne Mehrkosten für Sie.',
    full: 'Diese Seite enthält Partnerlinks. Wenn Sie darüber buchen, erhalten wir eine kleine Provision, ohne Mehrkosten für Sie. Die Unterkünfte werden trotzdem nach Qualität ausgewählt, nie nach Provision.',
  },
  ja: {
    compact: 'アフィリエイトリンクです。ここからご予約いただくと、追加費用なしで少額の手数料を受け取ります。',
    full: 'このページにはアフィリエイトリンクが含まれます。リンク経由でご予約いただくと、追加費用なしで少額の手数料を受け取ります。宿の選定は手数料ではなく内容で行っています。',
  },
  es: {
    compact: 'Enlace de afiliación. Si reservas por aquí, recibimos una pequeña comisión sin coste extra para ti.',
    full: 'Esta página tiene enlaces de afiliación. Si reservas a través de ellos, recibimos una pequeña comisión sin coste adicional para ti. Los alojamientos se eligen por sus méritos, nunca por la comisión.',
  },
  'pt-BR': {
    compact: 'Link de afiliado. Se você reservar por aqui, recebemos uma pequena comissão sem custo extra para você.',
    full: 'Esta página tem links de afiliados. Se você reservar por eles, recebemos uma pequena comissão sem custo adicional para você. As acomodações são escolhidas pelo mérito, nunca pela comissão.',
  },
  'zh-CN': {
    compact: '联盟链接。如果您从这里预订，我们会获得少量佣金，您本人不会有额外费用。',
    full: '本页面包含联盟链接。如果您通过这些链接预订，我们会获得少量佣金，您本人不会产生额外费用。住宿始终按品质挑选，绝不按佣金。',
  },
  ko: {
    compact: '제휴 링크입니다. 여기에서 예약하시면 추가 비용 없이 소액의 수수료를 받습니다.',
    full: '이 페이지에는 제휴 링크가 있습니다. 이 링크로 예약하시면 추가 비용 없이 소액의 수수료를 받습니다. 숙소는 수수료가 아니라 품질을 기준으로 고릅니다.',
  },
  fr: {
    compact: "Lien d'affiliation. Si vous réservez ici, nous recevons une petite commission, sans coût supplémentaire pour vous.",
    full: "Cette page contient des liens d'affiliation. Si vous réservez via ces liens, nous recevons une petite commission, sans coût supplémentaire pour vous. Les hébergements sont choisis pour leurs qualités, jamais pour la commission.",
  },
  it: {
    compact: 'Link di affiliazione. Se prenoti da qui riceviamo una piccola commissione, senza costi extra per te.',
    full: 'Questa pagina contiene link di affiliazione. Se prenoti tramite questi link riceviamo una piccola commissione, senza costi aggiuntivi per te. Gli alloggi sono scelti per il loro valore, mai per la commissione.',
  },
  nl: {
    compact: 'Affiliate-link. Als je hier boekt, krijgen we een kleine commissie, zonder extra kosten voor jou.',
    full: 'Deze pagina bevat affiliate-links. Als je via deze links boekt, krijgen we een kleine commissie, zonder extra kosten voor jou. Accommodaties worden op kwaliteit gekozen, nooit op commissie.',
  },
  sv: {
    compact: 'Affiliatelänk. Om du bokar via den får vi en liten provision, utan extra kostnad för dig.',
    full: 'Den här sidan har affiliatelänkar. Om du bokar via dem får vi en liten provision, utan extra kostnad för dig. Boendena väljs ändå på sina meriter, aldrig efter provision.',
  },
};

export default function AffiliateDisclosure({
  lang,
  className = '',
  variant = 'full',
}: AffiliateDisclosureProps) {
  const auto = useLang();
  const resolved: Lang = lang ?? auto;
  const text = TEXT[resolved][variant];

  return (
    <p className={`flex items-start gap-2 text-xs text-charcoal/60 ${className}`} role="note">
      <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true" />
      <span className="text-balance">{text}</span>
    </p>
  );
}
