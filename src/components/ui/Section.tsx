
import { cn } from '@/lib/utils';
import { useRef, useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animate?: boolean;
  animationType?: 'fade' | 'slide-up' | 'slide-in' | 'scale' | '3d-rotate' | 'shadow-grow';
  background?: 'default' | 'cream' | 'beige' | 'navy' | 'white' | 'gradient';
  padding?: 'normal' | 'large' | 'small' | 'none';
  threshold?: number;
  delay?: number;
}

const Section = ({ 
  children, 
  className, 
  id, 
  animate = true, 
  animationType = 'fade',
  background = 'default',
  padding = 'normal',
  threshold = 0.15,
  delay = 0
}: SectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  // Determine background class based on prop
  const backgroundClass = 
    background === 'cream' ? 'bg-hotel-cream' :
    background === 'beige' ? 'bg-hotel-beige/30' :
    background === 'navy' ? 'bg-hotel-navy text-white' :
    background === 'white' ? 'bg-white' :
    background === 'gradient' ? 'bg-gradient-to-b from-hotel-cream to-white' :
    'bg-hotel-cream'; // default

  // Determine padding class based on prop
  const paddingClass = 
    padding === 'large' ? 'py-16 md:py-24 lg:py-32' :
    padding === 'small' ? 'py-8 md:py-12 lg:py-16' :
    padding === 'none' ? '' :
    'py-12 md:py-16 lg:py-24'; // normal (default)

  useEffect(() => {
    if (!animate || isMobile) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animate, isMobile, threshold]);

  // Animation classes based on type
  const animationClass = 
    animationType === 'fade' ? 'transition-opacity duration-1000 ease-in-out' :
    animationType === 'slide-up' ? 'transition-all duration-1000 ease-out transform' :
    animationType === 'slide-in' ? 'transition-all duration-1000 ease-out transform' :
    animationType === 'scale' ? 'transition-all duration-1000 ease-out transform' :
    animationType === '3d-rotate' ? 'transition-all duration-1200 ease-out transform-gpu perspective-1000' :
    animationType === 'shadow-grow' ? 'transition-all duration-1000 ease-out' :
    'transition-opacity duration-1000 ease-in-out';

  // Apply transform based on animation type and visibility
  const transformClass = !isVisible ? (
    animationType === 'slide-up' ? 'translate-y-16 opacity-0' :
    animationType === 'slide-in' ? '-translate-x-16 opacity-0' :
    animationType === 'scale' ? 'scale-95 opacity-0' :
    animationType === '3d-rotate' ? 'rotateY(-10deg) opacity-0' :
    animationType === 'shadow-grow' ? 'shadow-none opacity-0' :
    'opacity-0'
  ) : '';

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        backgroundClass,
        paddingClass,
        animate ? animationClass : '',
        animate && transformClass,
        animate && isVisible && 'opacity-100 translate-y-0 translate-x-0 scale-100 rotateY(0)',
        animate && isVisible && animationType === 'shadow-grow' && 'shadow-xl',
        'will-change-transform',
        className
      )}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      <div className="hotel-container">
        {children}
      </div>
    </section>
  );
};

export default Section;
