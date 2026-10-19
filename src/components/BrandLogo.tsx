import { getImage } from "@/lib/images";

type BrandLogoProps = {
  src: string;
  alt?: string;
  className?: string;
};

export function BrandLogo({ src, alt, className = "" }: BrandLogoProps) {
  const image = getImage(src);
  const mask = `url("${image.webp[0].src}")`;

  return (
    <span
      className={`theme-logo ${className}`}
      role={alt ? "img" : undefined}
      aria-label={alt}
      aria-hidden={alt ? undefined : true}
      style={{
        aspectRatio: `${image.width} / ${image.height}`,
        maskImage: mask,
        WebkitMaskImage: mask,
      }}
    />
  );
}
