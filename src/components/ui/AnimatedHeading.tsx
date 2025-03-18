
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface AnimatedHeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  animation?: 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'float' | 'rotate-in' | '3d-flip' | 'bounce' | 'none';
  delay?: number;
  reducedMotion?: boolean;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

const AnimatedHeading = ({
  children,
  level = 2,
  className = '',
  animation = 'fade-in',
  delay = 0,
  reducedMotion = false,
  duration = 700,
  threshold = 0.1,
  once = true
}: AnimatedHeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    // Small delay to ensure component is mounted before animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!headingRef.current || reducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold,
      }
    );

    observer.observe(headingRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, [once, threshold, reducedMotion]);
  
  const getAnimationClass = (animationType: string) => {
    switch(animationType) {
      case 'fade-in': return 'animate-fade-in';
      case 'fade-in-left': return 'animate-fade-in-left';
      case 'fade-in-right': return 'animate-fade-in-right';
      case 'scale-in': return 'animate-scale-in';
      case 'float': return 'animate-float';
      case 'rotate-in': return 'animate-rotate-in';
      case '3d-flip': return 'animate-3d-flip';
      case 'bounce': return 'animate-bounce-in';
      default: return '';
    }
  };

  // If on mobile, use simpler animations for better performance
  const effectiveAnimation = isMobile && !reducedMotion ? 'fade-in' : animation;
  const effectiveAnimationClass = isMobile && !reducedMotion 
    ? 'animate-fade-in' 
    : getAnimationClass(effectiveAnimation);

  return (
    <Tag 
      ref={headingRef}
      className={cn(
        animation !== 'none' && effectiveAnimationClass,
        !isVisible && 'opacity-0',
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards',
        animationDuration: `${duration}ms`,
        perspective: animation === '3d-flip' ? '1000px' : undefined
      }}
    >
      {children}
    </Tag>
  );
};

export default AnimatedHeading;
