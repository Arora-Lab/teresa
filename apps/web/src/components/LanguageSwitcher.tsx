"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'vi' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button 
      onClick={toggleLocale}
      className="ml-4 flex items-center gap-2 text-[15px] font-medium text-text-muted hover:text-primary transition-colors py-2 focus:outline-none"
      aria-label="Switch language"
    >
      <Globe className="w-4 h-4 text-primary-medium" />
      <span>{locale === 'en' ? 'Tiếng Việt' : 'English'}</span>
    </button>
  );
}
