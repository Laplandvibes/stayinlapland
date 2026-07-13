import TermsContent from '../../../shared/Legal/TermsContent';
import { pageUrl } from '../lib/meta';
import { useLang, type Lang } from '../i18n/useLang';

const META: Record<Lang, { title: string; description: string }> = {
  en: {
    title: 'Terms of Use | StayInLapland',
    description:
      'StayInLapland terms of use — editorial scope, affiliate disclosure, third-party booking links, intellectual property, and Finnish jurisdiction.',
  },
  fi: {
    title: 'Käyttöehdot | StayInLapland',
    description:
      'StayInLaplandin käyttöehdot — toimituksellinen sisältö, affiliate-ilmoitus, kolmansien osapuolten varauslinkit, immateriaalioikeudet ja Suomen lainkäyttöalue.',
  },
  de: {
    title: 'Nutzungsbedingungen | StayInLapland',
    description:
      'Nutzungsbedingungen von StayInLapland — redaktioneller Umfang, Affiliate-Hinweis, Buchungslinks Dritter, geistiges Eigentum und finnischer Gerichtsstand.',
  },
  ja: {
    title: '利用規約 | StayInLapland',
    description:
      'StayInLaplandの利用規約 — 編集方針、アフィリエイト開示、第三者の予約リンク、知的財産、フィンランドの準拠法。',
  },
  es: {
    title: 'Términos de uso | StayInLapland',
    description:
      'Términos de uso de StayInLapland — alcance editorial, divulgación de afiliados, enlaces de reserva de terceros, propiedad intelectual y jurisdicción finlandesa.',
  },
  'pt-BR': {
    title: 'Termos de uso | StayInLapland',
    description:
      'Termos de uso do StayInLapland — escopo editorial, divulgação de afiliados, links de reserva de terceiros, propriedade intelectual e jurisdição finlandesa.',
  },
  'zh-CN': {
    title: '使用条款 | StayInLapland',
    description:
      'StayInLapland 使用条款 — 编辑范围、联盟披露、第三方预订链接、知识产权及芬兰司法管辖。',
  },
  ko: {
    title: '이용약관 | StayInLapland',
    description:
      'StayInLapland 이용약관 — 에디토리얼 범위, 제휴 고지, 제3자 예약 링크, 지적 재산권, 핀란드 관할.',
  },
  fr: {
    title: "Conditions d'utilisation | StayInLapland",
    description:
      "Conditions d'utilisation de StayInLapland — périmètre éditorial, divulgation d'affiliation, liens de réservation tiers, propriété intellectuelle et juridiction finlandaise.",
  },
  it: {
    title: 'Termini di utilizzo | StayInLapland',
    description:
      'Termini di utilizzo di StayInLapland — ambito editoriale, divulgazione di affiliazione, link di prenotazione di terzi, proprietà intellettuale e giurisdizione finlandese.',
  },
  nl: {
    title: 'Gebruiksvoorwaarden | StayInLapland',
    description:
      'Gebruiksvoorwaarden van StayInLapland — redactionele reikwijdte, affiliate-vermelding, boekingslinks van derden, intellectueel eigendom en Finse jurisdictie.',
  },
  sv: {
    title: 'Användarvillkor | StayInLapland',
    description:
      'StayInLaplands användarvillkor — redaktionell räckvidd, affiliateinformation, bokningslänkar från tredje part, immateriella rättigheter och finsk jurisdiktion.',
  },
};

export default function Terms() {
  const lang = useLang();
  const meta = META[lang];
  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={pageUrl('/terms')} />
      <meta name="robots" content="index, follow" />
      <TermsContent siteName="StayInLapland" siteUrl="stayinlapland.com" lang={lang} />
    </>
  );
}
