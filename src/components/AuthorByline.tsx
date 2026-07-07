import { ShieldCheck } from 'lucide-react';
import { useLang } from '../i18n/useLang';
import { getCopy } from '../locales/copy';

interface AuthorBylineProps {
  note?: string;
}

export default function AuthorByline({ note }: AuthorBylineProps) {
  const lang = useLang();
  const t = getCopy(lang).authorByline;
  return (
    <div className="flex items-start gap-4">
      <div
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-vibe-pink/10 border border-vibe-pink/30 flex items-center justify-center shrink-0"
        aria-hidden="true"
      >
        <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-vibe-pink" />
      </div>
      <div className="text-graphite text-sm sm:text-[15px] leading-relaxed">
        <p className="text-charcoal font-semibold mb-0.5">{t.reviewed}</p>
        <p className="text-stone">{note ?? t.defaultNote}</p>
      </div>
    </div>
  );
}
