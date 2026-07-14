import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('Common');
  
  return (
    <footer className="bg-primary-dark border-t border-primary text-ivory mt-auto">
      <div className="max-w-[1200px] mx-auto py-16 px-[18px] md:px-[24px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Org Info */}
          <div>
            <h3 className="text-[24px] font-bold text-white tracking-tight mb-4 flex items-center gap-2">
              <Image src="/images/logo.png" alt="Teresa Logo" width={24} height={24} className="object-contain" />
              {t('organizationName')}
            </h3>
            <p className="text-ivory/80 font-medium text-[15px]">{t('taxId')}</p>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-[18px] font-semibold text-white tracking-tight mb-6">
              {t('contactHeading')}
            </h3>
            <ul className="space-y-4 text-ivory/90 text-[15px]">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                {t('phone')}
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                {t('email')}
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>
                  {t('address.0')}<br />
                  {t('address.1')}<br />
                  {t('address.2')}
                </span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-[18px] font-semibold text-white tracking-tight mb-6">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-3 text-[15px]">
              <li>
                <Link href="/contribute" className="text-ivory/90 hover:text-accent transition-colors inline-flex items-center gap-2">
                  <span>&rarr;</span> {t('donateNow')}
                </Link>
              </li>
              <li>
                <Link href="/mission" className="text-ivory/90 hover:text-accent transition-colors inline-flex items-center gap-2">
                  <span>&rarr;</span> {t('ourMission')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-ivory/90 hover:text-accent transition-colors inline-flex items-center gap-2">
                  <span>&rarr;</span> {t('contactUs')}
                </Link>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary/30 text-center md:text-left text-ivory/50 text-[14px]">
          <p>&copy; {new Date().getFullYear()} {t('organizationName')}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
