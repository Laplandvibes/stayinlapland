import CookieContent from '../shared/Legal/CookieContent';
import { useLang, type Lang, useLocalPageUrl } from '../i18n/useLang';

const META: Record<Lang, { title: string; description: string }> = {
  en: {
    title: 'Cookie Policy',
    description:
      'StayInLapland cookie policy: what cookies we set (Google Analytics 4, consent state, newsletter popup state), how to opt out, and your rights under GDPR.',
  },
  fi: {
    title: 'Evästekäytäntö',
    description:
      'StayInLaplandin evästekäytäntö: mitä evästeitä asetamme (Google Analytics 4, suostumustila, uutiskirjepopupin tila), miten kieltäydyt ja GDPR-oikeutesi.',
  },
  de: {
    title: 'Cookie-Richtlinie',
    description:
      'Cookie-Richtlinie von StayInLapland: welche Cookies wir setzen (Google Analytics 4, Consent, Newsletter-Popup), Opt-out und Ihre DSGVO-Rechte.',
  },
  ja: {
    title: 'クッキーポリシー',
    description:
      'StayInLaplandのクッキーポリシー：設定するCookie（Google Analytics 4、同意状態、ニュースレターポップアップ状態）、オプトアウト方法、GDPR上の権利。',
  },
  es: {
    title: 'Política de cookies y consentimiento',
    description:
      'Política de cookies de StayInLapland: qué cookies utilizamos (Google Analytics 4, consentimiento, popup del boletín), cómo rechazarlas y sus derechos RGPD.',
  },
  'pt-BR': {
    title: 'Política de cookies',
    description:
      'Política de cookies do StayInLapland: quais cookies usamos (Google Analytics 4, consentimento, popup da newsletter), como recusá-los e seus direitos GDPR.',
  },
  'zh-CN': {
    title: 'Cookie 政策',
    description:
      'StayInLapland Cookie 政策：我们设置哪些 Cookie（Google Analytics 4、同意状态、新闻通讯弹窗状态）、如何退出及您的 GDPR 权利。',
  },
  ko: {
    title: '쿠키 정책',
    description:
      'StayInLapland 쿠키 정책: 설정하는 쿠키(Google Analytics 4, 동의 상태, 뉴스레터 팝업 상태), 거부 방법 및 GDPR 권리.',
  },
  fr: {
    title: 'Politique de cookies',
    description:
      'Politique de cookies de StayInLapland : les cookies déposés (Google Analytics 4, consentement, popup newsletter), comment les refuser et vos droits RGPD.',
  },
  it: {
    title: 'Informativa sui cookie',
    description:
      'Informativa sui cookie di StayInLapland: quali cookie utilizziamo (Google Analytics 4, consenso, popup newsletter), come rifiutarli e i Suoi diritti GDPR.',
  },
  nl: {
    title: 'Cookiebeleid',
    description:
      'Cookiebeleid van StayInLapland: welke cookies we plaatsen (Google Analytics 4, toestemmingsstatus, nieuwsbriefpopup), hoe u weigert en uw AVG-rechten.',
  },
  sv: {
    title: 'Cookiepolicy',
    description:
      'StayInLaplands cookiepolicy: vilka cookies vi sätter (Google Analytics 4, samtycke, nyhetsbrevspopup), hur du tackar nej och dina rättigheter enligt GDPR.',
  },
};

export default function CookiePolicy() {
  const lang = useLang();
  const localUrl = useLocalPageUrl();
  const meta = META[lang];
  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={localUrl('/cookie-policy')} />
      <CookieContent siteId="stayinlapland" siteName="StayInLapland" lang={lang} />
    </>
  );
}
