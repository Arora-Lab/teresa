import { ReactNode } from 'react';

interface ContentCardProps {
  children: ReactNode;
  className?: string;
}

export function ContentCard({ children, className = '' }: ContentCardProps) {
  return (
    <div 
      className={`bg-surface rounded-card p-6 md:p-10 border border-border-card shadow-card ${className}`}
    >
      {children}
    </div>
  );
}
