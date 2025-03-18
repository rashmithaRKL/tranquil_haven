
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SmoothImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

const SmoothImage = ({
  src,
  alt,
  className,
  width,
  height,
  objectFit = 'cover'
}: SmoothImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    setIsLoaded(false);
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <div 
      className={cn(
        'relative overflow-hidden bg-hotel-beige/30', 
        className
      )}
      style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : '100%' }}
    >
      {imgSrc && (
        <img
          src={imgSrc}
          alt={alt}
          className={cn(
            'w-full h-full transition-opacity duration-500 ease-in-out',
            objectFit === 'cover' && 'object-cover',
            objectFit === 'contain' && 'object-contain',
            objectFit === 'fill' && 'object-fill',
            objectFit === 'none' && 'object-none',
            objectFit === 'scale-down' && 'object-scale-down',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
        />
      )}
      <div 
        className={cn(
          'absolute inset-0 bg-hotel-beige/30 transition-opacity duration-500 ease-in-out',
          isLoaded ? 'opacity-0' : 'opacity-100'
        )}
      />
    </div>
  );
};

export default SmoothImage;
