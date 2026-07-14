import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageHero } from '@/components/PageHero';
import { SectionContainer } from '@/components/SectionContainer';
import { ContentCard } from '@/components/ContentCard';
import { QuoteBlock } from '@/components/QuoteBlock';
import { Calendar, CalendarDays, Users, Building, Smartphone } from 'lucide-react';

export default async function ContributePage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const locale = params.locale;
  setRequestLocale(locale);
  const t = await getTranslations('Contribution');
  const tCommon = await getTranslations('Common');
  
  return (
    <main className="flex-1 flex flex-col w-full">
      <PageHero title={t('title')} />

      <SectionContainer isOverlappingHero={true}>
        <ContentCard className="max-w-[960px] mx-auto">
          
          <p className="text-[17px] md:text-[18px] text-text-body max-w-[720px] mx-auto text-center leading-relaxed">
            {t('intro')}
          </p>

          <div className="my-12">
            <blockquote className="border-l-4 border-primary pl-6 py-2 bg-ivory rounded-r-lg max-w-[720px] mx-auto">
              <p className="text-[18px] italic text-primary-dark font-medium leading-relaxed">
                "{t('elderlyQuote')}"
              </p>
            </blockquote>
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 mt-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-[52px] h-[52px] rounded-full bg-accent-soft flex items-center justify-center text-primary-medium mb-6">
                <Calendar className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="text-[20px] font-bold text-primary-dark mb-3">{t('monthly.amount')} - {t('monthly.title')}</h3>
              <p className="text-text-muted text-[17px] leading-relaxed">{t('monthly.description')}</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-[52px] h-[52px] rounded-full bg-accent-soft flex items-center justify-center text-primary-medium mb-6">
                <CalendarDays className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="text-[20px] font-bold text-primary-dark mb-3">{t('yearly.amount')} - {t('yearly.title')}</h3>
              <p className="text-text-muted text-[17px] leading-relaxed">{t('yearly.description')}</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-[52px] h-[52px] rounded-full bg-accent-soft flex items-center justify-center text-primary-medium mb-6">
                <Users className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="text-[20px] font-bold text-primary-dark mb-3">{t('impact.title')}</h3>
              <p className="text-text-muted text-[17px] leading-relaxed">{t('impact.description')}</p>
            </div>
          </div>

          <hr className="my-16 border-border-card" />

          {/* Donation Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-left">
            
            <div className="bg-ivory rounded-[14px] p-8 border border-border-card shadow-sm h-full">
              <h3 className="font-bold text-[22px] text-primary-dark mb-6 flex items-center gap-3">
                <Building className="w-6 h-6 text-primary-medium" strokeWidth={2} />
                {tCommon('sendChecksTo')}
              </h3>
              <div className="text-text-body text-[17px] space-y-2">
                <p className="font-semibold text-[18px] text-primary-dark">{tCommon('address.0')}</p>
                <p>{tCommon('address.1')}</p>
                <p>{tCommon('address.2')}</p>
              </div>
            </div>

            <div className="bg-ivory rounded-[14px] p-8 border border-border-card shadow-sm h-full">
              <h3 className="font-bold text-[22px] text-primary-dark mb-6 flex items-center gap-3">
                <Smartphone className="w-6 h-6 text-primary-medium" strokeWidth={2} />
                Zelle / Paypal
              </h3>
              <div className="text-text-body text-[17px] space-y-4">
                <p className="font-semibold text-[18px] text-primary-dark">{tCommon('zelleOr')}</p>
                <div className="text-primary-dark bg-accent-soft border border-border-card p-4 rounded-[10px]">
                  {tCommon('zelleInstruction')}
                </div>
                <p className="text-[15px] italic mt-4 text-text-muted">
                  {tCommon('taxReceiptNote')}
                </p>
              </div>
            </div>

          </div>
          
        </ContentCard>
      </SectionContainer>
    </main>
  );
}
