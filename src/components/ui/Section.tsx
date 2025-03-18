
import { cn } from '@/lib/utils';
import { useRef, useEffect, useState } from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animate?: boolean;
}

const Section = ({ children, className, id, animate = true }: SectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!animate) {
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
        threshold: 0.1,
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
  }, [animate]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        'section-padding transition-opacity duration-700 ease-in-out',
        animate && !isVisible ? 'opacity-0' : 'opacity-100',
        className
      )}
    >
      <div className="hotel-container">
        {children}
      </div>
    </section>
  );
};

export default Section;
