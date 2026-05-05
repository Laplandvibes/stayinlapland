import { useState } from 'react';
import { Send } from 'lucide-react';

const SUPABASE_URL = (import.meta.env.VITE_SUPABASE_URL as string) ?? '';
const SUPABASE_ANON_KEY = (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string) ?? '';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

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
      {/* Soft top transition from cream into night */}
      <div
        aria-hidden="true"
        className="absolute -top-px left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #FAFAF8, transparent)' }}
      />

      <div className="relative max-w-3xl mx-auto px-5 py-24 sm:py-28 text-center">
        <p className="text-gold uppercase tracking-[0.28em] text-[11px] font-semibold mb-5">
          Long-stay openings · off-season rates
        </p>
        <h2 className="font-heading font-medium text-snow leading-[1.1] text-4xl sm:text-5xl md:text-6xl mb-5">
          The stays you can&rsquo;t book yet.
        </h2>
        <p className="text-snow/75 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-9">
          Most of the long-stay properties on this site release winter inventory in late
          August and resell within four weeks. Subscribers get the heads-up — plus the
          off-season weeks (November, late April) when nightly rates drop 50% but the aurora
          is still active.
        </p>

        {status === 'success' ? (
          <div className="bg-snow/10 border border-snow/25 backdrop-blur-sm text-snow px-6 py-5 rounded-2xl max-w-lg mx-auto">
            Welcome aboard. Check your inbox to confirm — first long-stay alert lands when
            we open the next inventory window.
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
              placeholder="Your email address"
              className="flex-1 px-6 py-4 rounded-full bg-snow/12 backdrop-blur-sm text-snow placeholder:text-snow/55 border border-snow/30 focus:outline-none focus:ring-2 focus:ring-gold/60 text-base"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-4 rounded-full bg-vibe-pink text-snow font-semibold hover:bg-vibe-pink/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="mt-4 text-sm text-snow/70">
            Could not subscribe — {errorMsg || 'please try again'}.
          </p>
        )}

        <p className="mt-7 text-xs text-snow/50">
          We never spam. Unsubscribe with one click. See our{' '}
          <a href="/privacy" className="underline hover:text-snow">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </section>
  );
}
