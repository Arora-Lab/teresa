import { ReactNode } from 'react';

interface QuoteBlockProps {
  children: ReactNode;
  className?: string;
}

export function QuoteBlock({ children, className = '' }: QuoteBlockProps) {
  return (
    <blockquote className={`border-l-4 border-primary pl-6 py-2 bg-ivory rounded-r-lg ${className}`}>
      <div className="text-[18px] italic text-primary-dark font-medium leading-relaxed">
        {children}
      </div>
    </blockquote>
  );
}
