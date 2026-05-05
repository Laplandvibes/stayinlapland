interface ImageBreakProps {
  src: string;
  alt: string;
  caption?: string;
  ratio?: '3/1' | '21/9' | '16/9';
}

const RATIO_CLS: Record<NonNullable<ImageBreakProps['ratio']>, string> = {
  '3/1': 'aspect-[3/1]',
  '21/9': 'aspect-[21/9]',
  '16/9': 'aspect-[16/9]',
};

export default function ImageBreak({ src, alt, caption, ratio = '3/1' }: ImageBreakProps) {
  return (
    <figure className="relative w-full overflow-hidden bg-night">
      <div className={`relative w-full ${RATIO_CLS[ratio]}`}>
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      {caption && (
        <figcaption className="text-center text-stone text-xs sm:text-sm italic mt-3 max-w-2xl mx-auto px-4">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
