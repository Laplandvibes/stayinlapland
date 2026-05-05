interface MarginNoteProps {
  label?: string;
  children: React.ReactNode;
}

export default function MarginNote({ label = 'Aside', children }: MarginNoteProps) {
  return (
    <aside className="my-8 px-5 py-4 sm:px-6 sm:py-5 bg-cream-2 border-l-2 border-gold rounded-r-md">
      <p className="text-gold text-[11px] font-semibold tracking-[0.2em] uppercase mb-2">
        {label}
      </p>
      <div className="text-graphite text-[15px] leading-relaxed italic">{children}</div>
    </aside>
  );
}
