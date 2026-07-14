import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'text';
  href?: string;
  className?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  href,
  className = '',
  ...props 
}: ButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-200 focus:outline-none";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark rounded-xl px-6 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none",
    secondary: "bg-surface border-2 border-primary text-primary hover:bg-primary/5 rounded-xl px-6 py-3",
    text: "text-primary hover:text-primary-dark underline-offset-4 hover:underline py-2"
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  const renderContent = () => (
    <>
      {children}
      {variant === 'text' && <ArrowRight className="ml-2 w-4 h-4" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {renderContent()}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {renderContent()}
    </button>
  );
}
