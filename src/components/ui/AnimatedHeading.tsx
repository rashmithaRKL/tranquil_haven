
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedHeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  animation?: 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'none';
  delay?: number;
}

const AnimatedHeading = ({
  children,
  level = 2,
  className = '',
  animation = 'fade-in',
  delay = 0
}: AnimatedHeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const animationClass = 
    animation === 'fade-in' ? 'animate-fade-in' :
    animation === 'fade-in-left' ? 'animate-fade-in-left' :
    animation === 'fade-in-right' ? 'animate-fade-in-right' :
    animation === 'scale-in' ? 'animate-scale-in' : '';

  return (
    <Tag 
      className={cn(
        animation !== 'none' && animationClass,
        'opacity-0',
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
