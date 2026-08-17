import { ShieldCheck } from 'lucide-react';
import { useLang } from '../i18n/useLang';
import { getCopy } from '../locales/copy';

interface AuthorBylineProps {
  note?: string;
}

export default function AuthorByline({ note }: AuthorBylineProps) {
  const lang = useLang();
  const t = getCopy(lang).authorByline;
  // An editorial credit, not a trust badge. The old version was a 56 px pink
  // medallion beside two lines of grey text, floating in its own section — it
  // read as a compliance seal bolted onto the page (Vesa 2026-08-17: "aivan
  // kamala osio tuo tarkastettu"). A gold left rule is the same device the
  // site already uses for MarginNote, so the credit sits inside the editorial
  // voice instead of interrupting it.
  return (
    <div className="border-l-2 border-gold/70 pl-4 sm:pl-5">
      <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
        <ShieldCheck className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        {t.reviewed}
      </p>
      <p className="mt-1.5 text-stone text-sm sm:text-[15px] leading-relaxed">
        {note ?? t.defaultNote}
      </p>
    </div>
  );
}
