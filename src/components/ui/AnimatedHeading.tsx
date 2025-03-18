
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface AnimatedHeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  animation?: 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'float' | 'none';
  delay?: number;
  reducedMotion?: boolean;
}

const AnimatedHeading = ({
  children,
  level = 2,
  className = '',
  animation = 'fade-in',
  delay = 0,
  reducedMotion = false
}: AnimatedHeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Small delay to ensure component is mounted before animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const animationClass = 
    animation === 'fade-in' ? 'animate-fade-in' :
    animation === 'fade-in-left' ? 'animate-fade-in-left' :
    animation === 'fade-in-right' ? 'animate-fade-in-right' :
    animation === 'scale-in' ? 'animate-scale-in' :
    animation === 'float' ? 'animate-float' : '';

  // If on mobile, use simpler animations for better performance
  const effectiveAnimation = isMobile && !reducedMotion ? 'fade-in' : animation;
  const effectiveAnimationClass = isMobile && !reducedMotion ? 'animate-fade-in' : animationClass;

  return (
    <Tag 
      className={cn(
        animation !== 'none' && effectiveAnimationClass,
        !isVisible && 'opacity-0',
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </Tag>
  );
};

export default AnimatedHeading;
