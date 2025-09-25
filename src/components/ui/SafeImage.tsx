"use client";

import Image, { ImageProps } from 'next/image';
import { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

interface SafeImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string | StaticImageData | null | undefined;
  alt: string;
  fallbackSrc?: string;
}

export function SafeImage({ 
  src, 
  alt, 
  fallbackSrc = '/images/fallback.jpg',
  ...props 
}: SafeImageProps) {
  const [imageSrc, setImageSrc] = useState<string | StaticImageData>(fallbackSrc);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!src) {
      setHasError(true);
      return;
    }

    if (typeof src === 'string') {
      try {
        // Basic URL validation
        new URL(src, window.location.origin);
        setImageSrc(src);
        setHasError(false);
      } catch (e) {
        console.error('Invalid image URL:', src);
        setHasError(true);
      }
    } else {
      // Handle StaticImageData objects
      setImageSrc(src);
      setHasError(false);
    }
  }, [src]);

  if (hasError || !src) {
    return (
      <div className="relative w-full h-full bg-gray-100 flex items-center justify-center">
        <span className="text-gray-400">Image not available</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <Image 
        src={imageSrc}
        alt={alt}
        onError={() => setHasError(true)}
        {...props}
      />
    </div>
  );
}
