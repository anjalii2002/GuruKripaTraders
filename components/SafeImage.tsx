'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { Image as ImageIcon } from 'lucide-react';

interface SafeImageProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string;
}

export default function SafeImage({
  src,
  alt,
  fallbackSrc = '/images/hero-showcase.png',
  className = '',
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!hasError ? (
        <Image
          {...props}
          src={imgSrc}
          alt={alt || 'Gurukripa Traders Product'}
          onError={() => {
            setImgSrc(fallbackSrc);
            setHasError(true);
          }}
        />
      ) : (
        <div className="w-full h-full bg-cream-200 border border-cream-300 flex flex-col items-center justify-center p-4 text-center text-charcoal-700">
          <ImageIcon className="w-8 h-8 text-terracotta-600 mb-1" />
          <span className="text-[11px] font-bold">{alt}</span>
        </div>
      )}
    </div>
  );
}
