import { useLang } from '../i18n/useLang';
import { getCopy } from '../locales/copy';

interface MarginNoteProps {
  label?: string;
  children: React.ReactNode;
}

export default function MarginNote({ label, children }: MarginNoteProps) {
  const lang = useLang();
  const fallback = getCopy(lang).marginNoteDefault;
  return (
    <aside className="my-8 px-5 py-4 sm:px-6 sm:py-5 bg-cream-2 border-l-2 border-gold rounded-r-md">
      <p className="text-gold text-[11px] font-semibold tracking-[0.2em] uppercase mb-2">
        {label ?? fallback}
      </p>
      <div className="text-graphite text-[15px] leading-relaxed italic">{children}</div>
    </aside>
  );
}
