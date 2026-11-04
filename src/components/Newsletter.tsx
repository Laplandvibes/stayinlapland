import { useEffect, useRef, useState } from 'react';
import { Send, Mail } from 'lucide-react';
import { useLang, useLocalePath } from '../i18n/useLang';
import { getCopy } from '../locales/copy';
import FounderByline from '../shared/FounderByline';

// Uutiskirjeen kieliohje sivun kielestä (ei <html lang>:sta, joka on esirenderöinnissä aina 'en').
// Kirjeitä lähtee vain suomeksi ja englanniksi, joten fi/en-sivulla ohje toistaisi itsestäänselvää
// eikä näy. Vesa 1.11.2026: "kuinka monta kertaa lukee sähköpostiosoite" (sama kuin skiresorts 92e9878).
const NL_LANG_NOTICE: Record<string, string> = {
  de: 'Die Newsletter werden auf Englisch versendet.', ja: 'ニュースレターは英語でお届けします。',
  es: 'Los boletines se envían en inglés.', pt: 'As newsletters são enviadas em inglês.', zh: '订阅邮件以英语发送。',
  ko: '뉴스레터는 영어로 발송됩니다.', fr: 'Les newsletters sont envoyées en anglais.', it: 'Le newsletter sono inviate in inglese.',
  nl: 'De nieuwsbrieven zijn in het Engels.', sv: 'Nyhetsbreven skickas på engelska.',
};
// Esimerkkiosoite kentän taustalle (4.11.2026): näyttää muodon, ei toista otsikkoa.
const NL_EMAIL_EXAMPLE: Record<string, string> = {
  en: 'name@example.com', fi: 'nimi@esimerkki.fi', de: 'name@beispiel.de', ja: 'name@example.com',
  es: 'nombre@ejemplo.es', pt: 'nome@exemplo.com.br', zh: 'name@example.com', ko: 'name@example.com',
  fr: 'nom@exemple.fr', it: 'nome@esempio.it', nl: 'naam@voorbeeld.nl', sv: 'namn@exempel.se',
};
const nlLang = (l?: string): string => {
  const x = (l || 'en').toLowerCase();
  return x === 'br' ? 'pt' : x === 'cn' ? 'zh' : x === 'kr' ? 'ko' : x === 'jp' ? 'ja' : x.split('-')[0];
};

/**
 * [LV-FUNNEL 2026-08-21] Lomakesuppilon eventit Umamiin — paikallinen apuri,
 * ei jaettua importtia (vendoroitu sync on refresh-only). Ei saa koskaan
 * rikkoa lomaketta. Standardi: memory _procedural/lv_form_funnel_events.md.
 */
function track(event: string, data?: Record<string, unknown>) {
  try {
    (window as unknown as { umami?: { track: (e: string, d?: unknown) => void } }).umami?.track(event, data);
  } catch { /* ignore */ }
}

/**
 * Signup goes through the same-origin Pages Function `/api/newsletter`
 * (functions/api/newsletter.ts), the same route the popup uses.
 *
 * 🔴 This used to read `VITE_SUPABASE_URL` + `VITE_SUPABASE_PUBLISHABLE_KEY`
 * and call Supabase from the browser. The repo has no `.env`, so both were ''
 * — and the handler treated "no keys" as a reason to show the success view
 * without sending anything. This section renders on 8 pages, so every visitor
 * who subscribed here was told it worked and had their address discarded.
 * Verified live 2026-08-17: submitting sent zero network requests.
 *
 * Do NOT reintroduce an env read or a "no keys configured" branch here. The
 * endpoint needs no secrets, and a signup form must never fake success — if
 * the request fails the visitor has to see the error state.
 */
const NEWSLETTER_ENDPOINT = '/api/newsletter';

type Status = 'idle' | 'loading' | 'success' | 'error';

// Sähköpostikentän ruudunlukijanimi (gate:a11y-nimet 24.10.2026).
const EMAIL_LABEL: Record<string, string> = {
  en: 'Email address',
  fi: 'Sähköpostiosoite',
  sv: 'E-postadress',
  de: 'E-Mail-Adresse',
  es: 'Correo electrónico',
  fr: 'Adresse e-mail',
  it: 'Indirizzo email',
  nl: 'E-mailadres',
  'pt-BR': 'Endereço de e-mail',
  ja: 'メールアドレス',
  ko: '이메일 주소',
  'zh-CN': '电子邮箱地址',
};

const CONSENT_COPY = {
  en: {
    consent:
      'Yes, send the LaplandVibes newsletter (travel tips, seasonal updates and offers) to this email address. I confirm I am 18 or over.',
    privacy: 'Privacy Policy',
  },
  fi: {
    consent:
      'LaplandVibes saa lähettää minulle uutiskirjettä (matkailuvinkkejä, sesonkitietoa ja tarjouksia) antamaani sähköpostiosoitteeseen. Olen täyttänyt 18 vuotta.',
    privacy: 'Tietosuojaseloste',
  },
  de: {
    consent:
      'Ja, LaplandVibes darf mir den Newsletter mit Reisetipps, Saisoninfos und Angeboten an diese E-Mail-Adresse senden. Ich bin mindestens 18 Jahre alt.',
    privacy: 'Datenschutzerklärung',
  },
  ja: {
    consent:
      '入力したメールアドレス宛に、LaplandVibesがニュースレター（旅のヒント、シーズン情報、キャンペーン情報）を送ることに同意します。私は18歳以上です。',
    privacy: 'プライバシーポリシー',
  },
  es: {
    consent:
      'Acepto recibir en mi correo el boletín de LaplandVibes (consejos de viaje, información de temporada y ofertas) y confirmo que tengo al menos 18 años.',
    privacy: 'Política de privacidad',
  },
  'pt-BR': {
    consent:
      'Aceito receber a newsletter do LaplandVibes no e-mail informado, com dicas de viagem, informações de temporada e ofertas. Tenho 18 anos ou mais.',
    privacy: 'Política de Privacidade',
  },
  'zh-CN': {
    consent:
      '我同意 LaplandVibes 向我填写的邮箱发送订阅邮件，内容包括拉普兰旅行建议、季节资讯和优惠信息，并确认本人已年满18周岁。',
    privacy: '隐私政策',
  },
  ko: {
    consent:
      '입력한 이메일 주소로 LaplandVibes가 보내는 여행 팁·시즌 정보·프로모션 소식 뉴스레터 수신에 동의하며, 만 18세 이상임을 확인합니다.',
    privacy: '개인정보처리방침',
  },
  fr: {
    consent:
      "J'accepte de recevoir la newsletter LaplandVibes (conseils voyage, infos saisonnières, offres) à cette adresse e-mail et je confirme avoir 18 ans ou plus.",
    privacy: 'Politique de confidentialité',
  },
  it: {
    consent:
      "Sì, desidero ricevere la newsletter di LaplandVibes (consigli di viaggio, novità stagionali e offerte) all'indirizzo indicato. Ho almeno 18 anni.",
    privacy: 'Informativa sulla privacy',
  },
  nl: {
    consent:
      'Ja, LaplandVibes mag de nieuwsbrief met reistips, seizoensinfo en aanbiedingen naar dit e-mailadres sturen. Ik ben 18 jaar of ouder.',
    privacy: 'Privacyverklaring',
  },
  sv: {
    consent:
      'Ja, jag vill ha nyhetsbrevet från LaplandVibes med restips, säsongsinfo och erbjudanden till min e-postadress. Jag är minst 18 år.',
    privacy: 'Integritetspolicy',
  },
} as const;

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState(''); // honeypot, humans leave blank
  const [consented, setConsented] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const lang = useLang();
  const localePath = useLocalePath();
  const t = getCopy(lang).newsletter;
  const c = CONSENT_COPY[lang];
  // [LV-FUNNEL] view = osio vieritetty näkyviin (kerran), start = 1. fokus,
  // blocked kerran per submit-yritys (natiivi invalid laukeaa per kenttä).
  const funnelData = { surface: 'inline', lang };
  const sectionRef = useRef<HTMLElement | null>(null);
  const startTracked = useRef(false);
  const blockedTracked = useRef(false);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver((entries) => {
      if (entries.some((en) => en.isIntersecting)) {
        track('nl_view', funnelData);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const trackStart = () => {
    if (startTracked.current) return;
    startTracked.current = true;
    track('nl_start', funnelData);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !consented || status === 'loading') {
      if (status !== 'loading') track('nl_blocked', { ...funnelData, reason: !email ? 'email' : 'consent' });
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    track('nl_submit', funnelData);

    try {
      const res = await fetch(NEWSLETTER_ENDPOINT, {
        method: 'POST',
        // No Authorization header: the proxy injects the Supabase key
        // server-side. Nothing secret reaches the browser.
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'stayinlapland-newsletter',
          // `website` is the honeypot (send-welcome-email's HONEYPOT_FIELDS) —
          // humans leave it blank, bots fill it. A non-empty value drops the
          // signup silently upstream.
          website,
          site: 'stayinlapland',
          language: lang,
          channel: 'inline',
          consent: true,
          ageConfirmed: true,
          consentText: c.consent,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Subscribe failed');
      setStatus('success');
      track('nl_success', funnelData);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Subscribe failed');
      track('nl_error', funnelData);
    }
  }

  return (
    <section className="relative bg-night text-snow" ref={sectionRef}>
      <div
        aria-hidden="true"
        className="absolute -top-px left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #FAFAF8, transparent)' }}
      />

      <div className="relative max-w-3xl mx-auto px-5 py-24 sm:py-28 text-center">
        <p className="text-gold uppercase tracking-[0.28em] text-[11px] font-semibold mb-5">
          {t.eyebrow}
        </p>
        <h2 className="font-heading font-medium text-snow leading-[1.1] text-4xl sm:text-5xl md:text-6xl mb-5">
          {t.h2}
        </h2>
        <p className="text-snow/75 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-9">
          {t.lead}
        </p>

        {status === 'success' ? (
          <div className="bg-snow/10 border border-snow/25 backdrop-blur-sm text-snow px-6 py-5 rounded-2xl max-w-lg mx-auto">
            {t.success}
          </div>
        ) : (
          <><FounderByline tone="pink" />
          {/* 4.11.2026 (Vesa: kenttä "leijuu" eikä "anna esimerkkiä taustalle"): Codexin 28.10. tumma laatikko pois, otsikko kentän yllä, kenttä ja nappi samalla rivillä, esimerkkiosoite kentässä. */}
          {/* 🔴 Osion pohja on tumma bg-night (#0F172A), joten valkoinen teksti käy, mutta tumma deep-night-nappi
              sulautuisi siihen: nappi pysyy sivuston #BE185D:ssä (valkoinen 5,8:1). */}
          <form onSubmit={handleSubmit}
            onInvalidCapture={(e) => {
              if (blockedTracked.current) return;
              blockedTracked.current = true;
              window.setTimeout(() => { blockedTracked.current = false; }, 400);
              const t = e.target as HTMLInputElement;
              track('nl_blocked', { ...funnelData, reason: t.type === 'checkbox' ? 'consent' : 'email' });
            }}
            className="max-w-lg mx-auto text-left"
          >
            {/* Honeypot: off-screen, not focusable, hidden from the a11y tree.
                Added with the endpoint switch — this form now actually reaches
                the upstream, so it is a real spam target for the first time.
                Mirrors shared/NewsletterPopup.tsx. */}
            <input
              type="text"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
            />
            <label htmlFor="nl-inline-email" className="block text-white font-semibold text-sm mb-2">
              {EMAIL_LABEL[lang] ?? EMAIL_LABEL.en}
            </label>
            {NL_LANG_NOTICE[nlLang(lang)] && (
              <p id="nl-inline-email-lang" className="text-white text-[13px] leading-relaxed -mt-1 mb-2">
                {NL_LANG_NOTICE[nlLang(lang)]}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1 min-w-0">
                <Mail aria-hidden className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                <input
                  id="nl-inline-email"
                  aria-describedby={NL_LANG_NOTICE[nlLang(lang)] ? 'nl-inline-email-lang' : undefined}
                  autoComplete="email"
                  type="email"
                  required
                  value={email}
                  placeholder={NL_EMAIL_EXAMPLE[nlLang(lang)] ?? NL_EMAIL_EXAMPLE.en}
                  onFocus={trackStart}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-14 bg-white text-slate-900 border border-white rounded-full pl-11 pr-4 text-base placeholder:text-slate-500 focus:outline-none focus:ring-4 focus:ring-white/40 transition-shadow"
                />
              </div>
              {/* 🔴 Nappi #BE185D (pinkkiramppi 700), ei #EC4899: snow-teksti #EC4899:llä on 3,4:1 ja #DB2777:llä 4,4:1, molemmat kaatuvat lomakeportin (audit_lomakkeet 18.9.2026). Valkoinen #BE185D:llä on 5,8:1. */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="h-14 shrink-0 bg-[#BE185D] hover:bg-[#9D174D] text-white font-bold px-7 rounded-full shadow-lg transition-colors text-base whitespace-nowrap inline-flex items-center justify-center gap-2 disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                {status === 'loading' ? t.subscribing : t.subscribe}
              </button>
            </div>

            <label className="mt-4 flex items-start gap-3 text-left text-xs leading-relaxed text-white cursor-pointer">
              <input
                type="checkbox"
                checked={consented}
                onFocus={trackStart}
                onChange={(e) => setConsented(e.target.checked)}
                required
                className="mt-0.5 h-4 w-4 shrink-0 rounded border border-snow/40 bg-snow/12 accent-vibe-pink focus:outline-none focus:ring-2 focus:ring-gold/60"
              />
              <span>
                {c.consent}{' '}
                <a
                  href={localePath('/privacy/')}
                  target="_blank"
                  rel="noopener"
                  className="font-semibold text-white underline underline-offset-2"
                >
                  {c.privacy}
                </a>
              </span>
            </label>
          </form></>
        )}

        {status === 'error' && (
          <p className="mt-4 text-sm text-snow/70">
            {t.errorPrefix} {errorMsg || t.pleaseTryAgain}.
          </p>
        )}

        <p className="mt-7 text-xs text-snow/75">
          {t.footnote}
        </p>
      </div>
    </section>
  );
}
