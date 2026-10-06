import PrivacyContent from '../shared/Legal/PrivacyContent';
import { useLang, type Lang, useLocalPageUrl } from '../i18n/useLang';

const META: Record<Lang, { title: string; description: string }> = {
  en: {
    title: 'Privacy Policy',
    description:
      'StayInLapland privacy policy: how we handle pseudonymous analytics, newsletter subscriptions, your GDPR rights, and our data controller (LaPeso Oy, Finland).',
  },
  fi: {
    title: 'Tietosuojaseloste',
    description:
      'StayInLaplandin tietosuojaseloste: pseudonyymi kävijäanalytiikka, uutiskirjetilaukset, GDPR-oikeutesi ja rekisterinpitäjä (LaPeso Oy, Suomi).',
  },
  de: {
    title: 'Datenschutzerklärung',
    description:
      'Datenschutzerklärung von StayInLapland: pseudonyme Analysedaten, Newsletter-Abos, Ihre DSGVO-Rechte und der Verantwortliche (LaPeso Oy, Finnland).',
  },
  ja: {
    title: 'プライバシーポリシー',
    description:
      'StayInLaplandのプライバシーポリシー：仮名化されたアクセス解析、ニュースレター購読、GDPR上の権利、データ管理者（フィンランドのLaPeso Oy）について。',
  },
  es: {
    title: 'Política de privacidad',
    description:
      'Política de privacidad de StayInLapland: analítica seudonimizada, suscripciones al boletín, sus derechos RGPD y el responsable del tratamiento (LaPeso Oy).',
  },
  'pt-BR': {
    title: 'Política de privacidade',
    description:
      'Política de privacidade do StayInLapland: analytics pseudonimizado, assinaturas da newsletter, seus direitos GDPR e o controlador (LaPeso Oy, Finlândia).',
  },
  'zh-CN': {
    title: '隐私政策',
    description:
      'StayInLapland 隐私政策：通过 Google Analytics 4 收集的假名化分析数据、新闻通讯订阅、您的 GDPR 权利及数据控制者（芬兰 LaPeso Oy）。',
  },
  ko: {
    title: '개인정보 처리방침',
    description:
      'StayInLapland 개인정보 처리방침: 가명 처리된 분석 데이터, 뉴스레터 구독, GDPR 권리 및 데이터 관리자(핀란드 LaPeso Oy).',
  },
  fr: {
    title: 'Politique de confidentialité',
    description:
      'Politique de confidentialité de StayInLapland : analytics pseudonymes, newsletter, vos droits RGPD et le responsable du traitement (LaPeso Oy, Finlande).',
  },
  it: {
    title: 'Informativa sulla privacy',
    description:
      'Informativa sulla privacy di StayInLapland: analytics pseudonimi, newsletter, i Suoi diritti GDPR e il titolare del trattamento (LaPeso Oy, Finlandia).',
  },
  nl: {
    title: 'Privacybeleid',
    description:
      'Privacybeleid van StayInLapland: gepseudonimiseerde analytics, de nieuwsbrief, uw AVG-rechten en de verwerkingsverantwoordelijke (LaPeso Oy, Finland).',
  },
  sv: {
    title: 'Integritetspolicy',
    description:
      'StayInLaplands integritetspolicy: pseudonym analys, nyhetsbrevsprenumerationer, dina rättigheter enligt GDPR och personuppgiftsansvarig (LaPeso Oy, Finland).',
  },
};

export default function PrivacyPolicy() {
  const lang = useLang();
  const localUrl = useLocalPageUrl();
  const meta = META[lang];
  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={localUrl('/privacy')} />
      <meta name="robots" content="index, follow" />
      <PrivacyContent siteName="StayInLapland" lang={lang} />
    </>
  );
}
