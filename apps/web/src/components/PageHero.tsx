import Image from 'next/image';
import { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  isHome?: boolean;
}

export function PageHero({ 
  title, 
  subtitle, 
  imageSrc = '/images/hero.png',
  isHome = false 
}: PageHeroProps) {
  return (
    <div className={`relative w-full ${isHome ? 'h-[400px] md:h-[500px]' : 'h-[240px] md:h-[340px]'} flex items-center justify-center overflow-hidden`}>
      <div className="absolute inset-0 z-0">
        <Image 
          src={imageSrc} 
          alt="Vietnamese countryside rice field" 
          fill 
          className="object-cover" 
          priority 
        />
        {/* 50-65% Dark green overlay per spec */}
        <div className="absolute inset-0 bg-primary-dark/60 mix-blend-multiply"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className={`${isHome ? 'text-[36px] md:text-[58px]' : 'text-[32px] md:text-[42px]'} font-bold text-white tracking-tight drop-shadow-sm leading-tight`}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-ivory/90 font-medium">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
