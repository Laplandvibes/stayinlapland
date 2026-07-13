import CookieContent from '../../../shared/Legal/CookieContent';
import { pageUrl } from '../lib/meta';
import { useLang, type Lang } from '../i18n/useLang';

const META: Record<Lang, { title: string; description: string }> = {
  en: {
    title: 'Cookie Policy | StayInLapland',
    description:
      'StayInLapland cookie policy — what cookies we set (Google Analytics 4, consent state, newsletter popup state), how to opt out, and your rights under GDPR.',
  },
  fi: {
    title: 'Evästekäytäntö | StayInLapland',
    description:
      'StayInLaplandin evästekäytäntö — mitä evästeitä asetamme (Google Analytics 4, suostumustila, uutiskirjepopupin tila), miten kieltäydyt ja GDPR-oikeutesi.',
  },
  de: {
    title: 'Cookie-Richtlinie | StayInLapland',
    description:
      'Cookie-Richtlinie von StayInLapland — welche Cookies wir setzen (Google Analytics 4, Consent-Status, Newsletter-Popup-Status), Opt-out und Ihre DSGVO-Rechte.',
  },
  ja: {
    title: 'クッキーポリシー | StayInLapland',
    description:
      'StayInLaplandのクッキーポリシー — 設定するCookie（Google Analytics 4、同意状態、ニュースレターポップアップ状態）、オプトアウト方法、GDPR上の権利。',
  },
  es: {
    title: 'Política de cookies | StayInLapland',
    description:
      'Política de cookies de StayInLapland — qué cookies establecemos (Google Analytics 4, estado de consentimiento, popup del boletín), cómo rechazarlas y tus derechos RGPD.',
  },
  'pt-BR': {
    title: 'Política de cookies | StayInLapland',
    description:
      'Política de cookies do StayInLapland — quais cookies definimos (Google Analytics 4, estado de consentimento, popup da newsletter), como recusar e seus direitos GDPR.',
  },
  'zh-CN': {
    title: 'Cookie 政策 | StayInLapland',
    description:
      'StayInLapland Cookie 政策 — 我们设置哪些 Cookie（Google Analytics 4、同意状态、新闻通讯弹窗状态）、如何退出及您的 GDPR 权利。',
  },
  ko: {
    title: '쿠키 정책 | StayInLapland',
    description:
      'StayInLapland 쿠키 정책 — 설정하는 쿠키(Google Analytics 4, 동의 상태, 뉴스레터 팝업 상태), 거부 방법 및 GDPR 권리.',
  },
  fr: {
    title: 'Politique de cookies | StayInLapland',
    description:
      'Politique de cookies de StayInLapland — quels cookies nous déposons (Google Analytics 4, état du consentement, popup newsletter), comment les refuser et vos droits RGPD.',
  },
  it: {
    title: 'Informativa sui cookie | StayInLapland',
    description:
      'Informativa sui cookie di StayInLapland — quali cookie impostiamo (Google Analytics 4, stato del consenso, popup newsletter), come rifiutarli e i tuoi diritti GDPR.',
  },
  nl: {
    title: 'Cookiebeleid | StayInLapland',
    description:
      'Cookiebeleid van StayInLapland — welke cookies we plaatsen (Google Analytics 4, toestemmingsstatus, nieuwsbriefpopup), hoe je weigert en je AVG-rechten.',
  },
  sv: {
    title: 'Cookiepolicy | StayInLapland',
    description:
      'StayInLaplands cookiepolicy — vilka cookies vi sätter (Google Analytics 4, samtyckesstatus, status för nyhetsbrevspopup), hur du tackar nej och dina rättigheter enligt GDPR.',
  },
};

export default function CookiePolicy() {
  const lang = useLang();
  const meta = META[lang];
  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={pageUrl('/cookie-policy')} />
      <meta name="robots" content="index, follow" />
      <CookieContent siteId="stayinlapland" siteName="StayInLapland" lang={lang} />
    </>
  );
}
