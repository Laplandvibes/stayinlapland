import PrivacyContent from '../shared/Legal/PrivacyContent';
import { pageUrl } from '../lib/meta';
import { useLang, type Lang } from '../i18n/useLang';

const META: Record<Lang, { title: string; description: string }> = {
  en: {
    title: 'Privacy Policy | StayInLapland',
    description:
      'StayInLapland privacy policy: how we handle anonymous analytics, newsletter subscriptions, your GDPR rights, and our data controller (Lapeso Oy, Finland).',
  },
  fi: {
    title: 'Tietosuojaseloste | StayInLapland',
    description:
      'StayInLaplandin tietosuojaseloste: anonyymi analytiikka, uutiskirjetilaukset, GDPR-oikeutesi ja rekisterinpitäjä (Lapeso Oy, Suomi).',
  },
  de: {
    title: 'Datenschutzerklärung | StayInLapland',
    description:
      'Datenschutzerklärung von StayInLapland: anonyme Analytics, Newsletter-Abos, Ihre DSGVO-Rechte und der Verantwortliche (Lapeso Oy, Finnland).',
  },
  ja: {
    title: 'プライバシーポリシー | StayInLapland',
    description:
      'StayInLaplandのプライバシーポリシー：匿名アナリティクス、ニュースレター購読、GDPR上の権利、データ管理者（フィンランドのLapeso Oy）について。',
  },
  es: {
    title: 'Política de privacidad | StayInLapland',
    description:
      'Política de privacidad de StayInLapland: analítica anónima, suscripciones al boletín, tus derechos RGPD y el responsable del tratamiento (Lapeso Oy, Finlandia).',
  },
  'pt-BR': {
    title: 'Política de privacidade | StayInLapland',
    description:
      'Política de privacidade do StayInLapland: analytics anônimo, assinaturas da newsletter, seus direitos GDPR e o controlador de dados (Lapeso Oy, Finlândia).',
  },
  'zh-CN': {
    title: '隐私政策 | StayInLapland',
    description:
      'StayInLapland 隐私政策：匿名分析、新闻通讯订阅、您的 GDPR 权利及数据控制者（芬兰 Lapeso Oy）。',
  },
  ko: {
    title: '개인정보 처리방침 | StayInLapland',
    description:
      'StayInLapland 개인정보 처리방침: 익명 분석, 뉴스레터 구독, GDPR 권리 및 데이터 관리자(핀란드 Lapeso Oy).',
  },
  fr: {
    title: 'Politique de confidentialité | StayInLapland',
    description:
      'Politique de confidentialité de StayInLapland: analytics anonymes, abonnements à la newsletter, vos droits RGPD et le responsable du traitement (Lapeso Oy, Finlande).',
  },
  it: {
    title: 'Informativa sulla privacy | StayInLapland',
    description:
      'Informativa sulla privacy di StayInLapland: analytics anonimi, iscrizioni alla newsletter, i tuoi diritti GDPR e il titolare del trattamento (Lapeso Oy, Finlandia).',
  },
  nl: {
    title: 'Privacybeleid | StayInLapland',
    description:
      'Privacybeleid van StayInLapland: anonieme analytics, nieuwsbriefinschrijvingen, je AVG-rechten en de verwerkingsverantwoordelijke (Lapeso Oy, Finland).',
  },
  sv: {
    title: 'Integritetspolicy | StayInLapland',
    description:
      'StayInLaplands integritetspolicy: anonym analys, nyhetsbrevsprenumerationer, dina rättigheter enligt GDPR och personuppgiftsansvarig (Lapeso Oy, Finland).',
  },
};

export default function PrivacyPolicy() {
  const lang = useLang();
  const meta = META[lang];
  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={pageUrl('/privacy')} />
      <meta name="robots" content="index, follow" />
      <PrivacyContent siteName="StayInLapland" lang={lang} />
    </>
  );
}
