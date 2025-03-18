
import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface VideoBackgroundProps {
  src: string;
  fallbackImage?: string;
  className?: string;
  overlayClass?: string;
  objectFit?: 'cover' | 'contain';
  muteVideo?: boolean;
}

const VideoBackground = ({
  src,
  fallbackImage,
  className = '',
  overlayClass = 'bg-gradient-to-b from-black/40 via-black/30 to-black/60',
  objectFit = 'cover',
  muteVideo = true
}: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleLoad = () => setIsLoaded(true);
    const handleError = () => setHasError(true);

    videoElement.addEventListener('loadeddata', handleLoad);
    videoElement.addEventListener('error', handleError);

    // Play the video
    const playVideo = async () => {
      try {
        if (videoElement.paused) {
          await videoElement.play();
        }
      } catch (error) {
        console.error('Video play error:', error);
        setHasError(true);
      }
    };

    playVideo();

    return () => {
      videoElement.removeEventListener('loadeddata', handleLoad);
      videoElement.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {fallbackImage && (hasError || !isLoaded) && (
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{ 
            backgroundImage: `url(${fallbackImage})`,
            opacity: isLoaded && !hasError ? 0 : 1 
          }}
        />
      )}
      
      <video
        ref={videoRef}
        className={cn(
          "absolute inset-0 w-full h-full transition-opacity duration-700",
          objectFit === 'cover' ? 'object-cover' : 'object-contain',
          isLoaded && !hasError ? 'opacity-100' : 'opacity-0'
        )}
        autoPlay
        muted={muteVideo}
        loop
        playsInline
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className={cn("absolute inset-0", overlayClass)} />
    </div>
  );
};

export default VideoBackground;
