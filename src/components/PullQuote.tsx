interface PullQuoteProps {
  children: React.ReactNode;
  attribution?: string;
}

export default function PullQuote({ children, attribution }: PullQuoteProps) {
  return (
    <figure className="max-w-3xl mx-auto py-14 sm:py-20 px-4">
      <span
        aria-hidden="true"
        className="block text-gold/60 font-heading text-7xl sm:text-8xl leading-none mb-2 select-none"
      >
        &ldquo;
      </span>
      <blockquote className="font-heading font-medium italic text-2xl sm:text-3xl md:text-4xl leading-snug text-charcoal">
        {children}
      </blockquote>
      {attribution && (
        <figcaption className="mt-6 text-stone text-xs sm:text-sm uppercase tracking-[0.2em]">
          — {attribution}
        </figcaption>
      )}
    </figure>
  );
}
