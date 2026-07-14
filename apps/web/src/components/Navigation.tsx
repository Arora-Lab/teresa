"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const t = useTranslations('Navigation');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/contribute', label: t('contribute') },
    { href: '/mission', label: t('mission') },
    { href: '/formation', label: t('formation') },
    { href: '/blog', label: t('blog') },
    { href: '/contact', label: t('contact') }
  ];
  
  return (
    <nav className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-md border-b border-border-card shadow-sm transition-all">
      <div className="max-w-[1200px] mx-auto px-[18px] md:px-[24px]">
        <div className="flex justify-between h-[80px]">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
              <div className="w-[42px] h-[42px] relative flex items-center justify-center group-hover:scale-105 transition-transform">
                <Image src="/images/logo.png" alt="Teresa Logo" width={38} height={38} className="object-contain" />
              </div>
              <span className="font-bold text-[22px] md:text-[24px] text-primary-dark tracking-tight">
                Teresa Family Charity
              </span>
            </Link>
          </div>
          
          <div className="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-text-body hover:text-primary border-transparent hover:border-primary inline-flex items-center px-1 pt-1 border-b-2 text-[17px] font-semibold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            
            <div className="border-l border-border-card pl-4 h-6 flex items-center">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-body hover:text-primary focus:outline-none p-2 -mr-2"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-7 w-7" aria-hidden="true" />
              ) : (
                <Menu className="block h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-ivory border-b border-border-card shadow-md absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-[17px] font-semibold text-text-body hover:text-primary hover:bg-accent-soft transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-3 pt-4 mt-4 border-t border-border-card">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
