interface ImageBreakProps {
  src: string;
  /** AVIF sibling of src. Pass it only when the file exists — a 404 inside
   *  <source> does not fall back to the <img>, it breaks the picture. */
  avifSrc?: string;
  alt: string;
  caption?: string;
  ratio?: '3/1' | '21/9' | '16/9' | 'band';
}

const RATIO_CLS: Record<NonNullable<ImageBreakProps['ratio']>, string> = {
  '3/1': 'aspect-[3/1]',
  '21/9': 'aspect-[21/9]',
  '16/9': 'aspect-[16/9]',
  // 3:1 is only 125px tall on a 375px phone — too thin to read as a picture.
  'band': 'aspect-[16/9] sm:aspect-[21/9] lg:aspect-[3/1]',
};

export default function ImageBreak({ src, avifSrc, alt, caption, ratio = '3/1' }: ImageBreakProps) {
  return (
    <figure className="relative w-full overflow-hidden bg-night">
      <div className={`relative w-full ${RATIO_CLS[ratio]}`}>
        <picture>
          {avifSrc && <source srcSet={avifSrc} type="image/avif" />}
          <source srcSet={src} type="image/webp" />
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
      {caption && (
        <figcaption className="text-center text-stone text-xs sm:text-sm italic mt-3 max-w-2xl mx-auto px-4">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
