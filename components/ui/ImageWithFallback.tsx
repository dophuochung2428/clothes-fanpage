"use client";

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';

export default function ImageWithFallback({ src, alt, ...props }: ImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    // use next/image but swap to local fallback on error
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      {...props}
      src={imgSrc as string}
      alt={alt as string}
      onError={() => setImgSrc('/fallback.svg')}
    />
  );
}
