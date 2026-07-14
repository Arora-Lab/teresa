import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Common');
  
  return (
    <footer className="bg-primary-dark border-t border-primary text-ivory mt-auto">
      <div className="max-w-[1200px] mx-auto py-16 px-[18px] md:px-[24px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Org Info */}
          <div>
            <h3 className="text-[24px] font-bold text-white tracking-tight mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {t('organizationName')}
            </h3>
            <p className="text-ivory/80 font-medium text-[15px]">{t('taxId')}</p>
            <p className="text-ivory/50 mt-6 text-[14px]">&copy; {new Date().getFullYear()} {t('organizationName')}. All rights reserved.</p>
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
      </div>
    </footer>
  );
}
