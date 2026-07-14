import { getTranslations, setRequestLocale } from 'next-intl/server';
import ContactForm from '@/components/ContactForm';
import { PageHero } from '@/components/PageHero';
import { SectionContainer } from '@/components/SectionContainer';
import { ContentCard } from '@/components/ContentCard';
import { Phone, Mail, MapPin } from 'lucide-react';

export default async function ContactPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const locale = params.locale;
  setRequestLocale(locale);
  const t = await getTranslations('Contact');
  const tCommon = await getTranslations('Common');
  
  const formTranslations = {
    sendUsMessage: t('form.sendUsMessage'),
    firstName: t('form.firstName'),
    lastName: t('form.lastName'),
    email: t('form.email'),
    message: t('form.message'),
    submit: t('form.submit'),
    submitting: t('form.submitting'),
    success: t('form.success'),
    successDesc: t('form.successDesc'),
    error: t('form.error'),
  };
  
  return (
    <main className="flex-1 flex flex-col w-full">
      <PageHero title={t('title')} />

      <SectionContainer isOverlappingHero={true}>
        <ContentCard className="p-0 overflow-hidden max-w-[1024px] mx-auto border-0 bg-transparent shadow-none">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-surface rounded-card border border-border-card shadow-card overflow-hidden">
            
            {/* Contact Info Panel (Deep Forest Green) */}
            <div className="relative overflow-hidden bg-primary-dark py-12 px-8 sm:px-12 lg:col-span-5">
              {/* Subtle background decoration */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
              
              <h3 className="text-[24px] font-bold text-white mb-6 relative z-10">{t('getInTouch')}</h3>
              <p className="text-[17px] text-ivory/80 leading-relaxed mb-10 relative z-10">
                {t('intro')}
              </p>
              
              <ul className="space-y-6 text-[16px] text-ivory/90 relative z-10">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-medium">{tCommon('phone')}</span>
                </li>
                
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-medium break-all">{tCommon('email')}</span>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-medium leading-relaxed pt-2">
                    {tCommon('address.0')}<br/>
                    {tCommon('address.1')}<br/>
                    {tCommon('address.2')}
                  </span>
                </li>
              </ul>
            </div>
            
            {/* Contact Form Panel (Ivory/White) */}
            <div className="py-12 px-8 sm:px-12 lg:col-span-7 bg-ivory flex flex-col justify-center">
              <h3 className="text-[22px] font-bold text-primary-dark mb-4">{t('form.sendUsMessage')}</h3>
              <ContactForm tForm={formTranslations} />
            </div>
            
          </div>
          
        </ContentCard>
      </SectionContainer>
    </main>
  );
}
