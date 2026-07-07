import { useState } from 'react';
import { Send } from 'lucide-react';
import { useLang, useLocalePath } from '../i18n/useLang';
import { getCopy } from '../locales/copy';

const SUPABASE_URL = (import.meta.env.VITE_SUPABASE_URL as string) ?? '';
const SUPABASE_ANON_KEY = (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string) ?? '';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const lang = useLang();
  const localePath = useLocalePath();
  const t = getCopy(lang).newsletter;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === 'loading') return;
    setStatus('loading');
    setErrorMsg('');

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      setTimeout(() => setStatus('success'), 600);
      return;
    }

    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/send-welcome-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ email, source: 'stayinlapland-newsletter' }),
      });
      if (!res.ok) throw new Error('Subscribe failed');
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Subscribe failed');
    }
  }

  return (
    <section className="relative bg-night text-snow">
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
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.placeholder}
              aria-label="Email address"
              className="flex-1 px-6 py-4 rounded-full bg-snow/12 backdrop-blur-sm text-snow placeholder:text-snow/80 border border-snow/30 focus:outline-none focus:ring-2 focus:ring-gold/60 text-base"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-4 rounded-full bg-vibe-pink text-snow font-semibold hover:bg-vibe-pink/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {status === 'loading' ? t.subscribing : t.subscribe}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="mt-4 text-sm text-snow/70">
            {t.errorPrefix} {errorMsg || t.pleaseTryAgain}.
          </p>
        )}

        <p className="mt-7 text-xs text-snow/75">
          {t.footnotePart1}
          <a href={localePath('/privacy')} className="underline hover:text-snow">
            {t.footnoteLink}
          </a>
          {t.footnotePart2}
        </p>
      </div>
    </section>
  );
}
