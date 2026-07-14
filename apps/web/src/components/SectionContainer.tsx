import { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  isOverlappingHero?: boolean;
}

export function SectionContainer({ 
  children, 
  className = '',
  isOverlappingHero = false
}: SectionContainerProps) {
  return (
    <section 
      className={`max-w-[1200px] mx-auto px-[18px] md:px-[24px] ${isOverlappingHero ? 'relative z-20 -mt-12 md:-mt-20' : 'py-12 md:py-24'} ${className}`}
    >
      {children}
    </section>
  );
}
