import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageHero } from '@/components/PageHero';
import { SectionContainer } from '@/components/SectionContainer';
import { ContentCard } from '@/components/ContentCard';
import { Calendar, CalendarDays, Users, Building, Smartphone, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const paypalDonateUrl =
  'https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=QMNPTNKCUQMCA&ssrt=1732492491350';

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

          <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-16">
            <div className="flex flex-col items-center text-center bg-surface rounded-card p-6 md:p-8 border border-border-card shadow-sm">
              <div className="w-[52px] h-[52px] rounded-full bg-accent-soft flex items-center justify-center text-primary-medium mb-6 flex-shrink-0">
                <Calendar className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="text-[20px] font-bold text-primary-dark mb-3">{t('monthly.amount')} - {t('monthly.title')}</h3>
              <p className="text-text-muted text-[16px] leading-relaxed flex-grow">{t('monthly.description')}</p>
            </div>
            
            <div className="flex flex-col items-center text-center bg-surface rounded-card p-6 md:p-8 border border-border-card shadow-sm">
              <div className="w-[52px] h-[52px] rounded-full bg-accent-soft flex items-center justify-center text-primary-medium mb-6 flex-shrink-0">
                <CalendarDays className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="text-[20px] font-bold text-primary-dark mb-3">{t('yearly.amount')} - {t('yearly.title')}</h3>
              <p className="text-text-muted text-[16px] leading-relaxed flex-grow">{t('yearly.description')}</p>
            </div>
            
            <div className="flex flex-col items-center text-center bg-surface rounded-card p-6 md:p-8 border border-border-card shadow-sm">
              <div className="w-[52px] h-[52px] rounded-full bg-accent-soft flex items-center justify-center text-primary-medium mb-6 flex-shrink-0">
                <Users className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="text-[20px] font-bold text-primary-dark mb-3">{t('impact.title')}</h3>
              <p className="text-text-muted text-[16px] leading-relaxed flex-grow">{t('impact.description')}</p>
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
                Zelle / PayPal
              </h3>
              <div className="text-text-body text-[17px] space-y-4">
                <div className="grid gap-5 sm:grid-cols-[180px_minmax(0,1fr)] sm:items-start">
                  <div className="overflow-hidden rounded-[10px] border border-border-card bg-white p-2 shadow-sm">
                    <Image
                      src="/images/zelle-qr-2026.png"
                      alt={tCommon('zelleQrAlt')}
                      width={180}
                      height={180}
                      className="h-auto w-full"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="font-semibold text-[18px] text-primary-dark">
                      {tCommon('zelleOr')} <span className="whitespace-nowrap">{tCommon('zellePhone')}</span>
                    </p>
                    <div className="text-primary-dark bg-accent-soft border border-border-card p-4 rounded-[10px]">
                      {tCommon('zelleInstruction')}
                    </div>
                  </div>
                </div>
                <div className="pt-2">
                  <a
                    href={paypalDonateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-md focus:outline-none"
                  >
                    {tCommon('paypalDonate')}
                    <ExternalLink className="h-4 w-4" strokeWidth={2.2} />
                  </a>
                  <p className="mt-3 text-[15px] leading-relaxed text-text-muted">
                    {tCommon('paypalDescription')}
                  </p>
                </div>
                <p className="text-[15px] italic mt-4 text-text-muted">
                  {tCommon.rich('taxReceiptNote', {
                    b: (chunks) => <strong className="font-semibold text-primary-dark not-italic">{chunks}</strong>
                  })}
                </p>
              </div>
            </div>

          </div>
          
        </ContentCard>
      </SectionContainer>
    </main>
  );
}
