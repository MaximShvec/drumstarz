import type { ImgHTMLAttributes } from "react";
import { IMAGE_SRCSET } from "../../data/imageSrcset";

export function imageSrcSet(src: string) {
  return IMAGE_SRCSET[src]?.srcSet;
}

function descriptorSrc(srcSet: string, width: number) {
  const part = srcSet.split(", ").find((entry) => entry.endsWith(` ${width}w`));
  return part?.split(" ")[0];
}

type PhotoProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  sizes: string;
};

export function Photo({ src, sizes, alt = "", decoding = "async", width, height, ...rest }: PhotoProps) {
  const meta = IMAGE_SRCSET[src];
  const srcSet = meta?.srcSet;
  const src800 = srcSet ? descriptorSrc(srcSet, 800) : undefined;
  const has1280 = Boolean(srcSet?.includes(" 1280w"));
  const forceMobile = Boolean(src800 && !has1280);

  const img = (
    <img
      alt={alt}
      decoding={decoding}
      {...rest}
      src={src}
      srcSet={forceMobile ? undefined : srcSet}
      sizes={srcSet && !forceMobile ? sizes : undefined}
      width={width ?? meta?.width}
      height={height ?? meta?.height}
    />
  );

  if (!forceMobile) return img;

  return (
    <picture>
      <source media="(max-width: 63.99rem)" srcSet={src800} type="image/webp" />
      {img}
    </picture>
  );
}
