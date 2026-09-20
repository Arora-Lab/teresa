import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageHero } from '@/components/PageHero';
import { SectionContainer } from '@/components/SectionContainer';
import { ContentCard } from '@/components/ContentCard';
import { QuoteBlock } from '@/components/QuoteBlock';
import Image from 'next/image';

export default async function MissionPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const locale = params.locale;
  setRequestLocale(locale);
  const t = await getTranslations('Mission');
  const orgChartSrc = locale === 'vi' ? '/images/org-chart-vi.png' : '/images/org-chart-en.png';
  
  return (
    <main className="flex-1 flex flex-col w-full">
      <PageHero title={t('title')} />

      <SectionContainer isOverlappingHero={true}>
        <ContentCard className="max-w-[960px] mx-auto text-center border-0 bg-ivory mb-10 md:mb-12">
          
          <div className="max-w-[720px] mx-auto text-left">
            <h2 className="text-[28px] md:text-[32px] font-bold text-primary-dark mb-8 text-center leading-tight">
              {t('goal')}
            </h2>
            
            <QuoteBlock className="mb-10 text-center">
              "{t('eachMonth')}"
            </QuoteBlock>
            
            <hr className="my-10 border-border-card" />
            
            <p className="text-[17px] md:text-[18px] text-text-body leading-[1.8] whitespace-pre-wrap">
              {t('fullText')}
            </p>
          </div>
          
        </ContentCard>

        <ContentCard className="max-w-[1180px] mx-auto mb-10 md:mb-12">
          <div className="text-center mb-8">
            <p className="text-[14px] font-bold uppercase tracking-wider text-gold mb-2">
              {t('orgChartEyebrow')}
            </p>
            <h2 className="text-[28px] md:text-[36px] font-bold text-primary-dark tracking-tight">
              {t('orgChartTitle')}
            </h2>
          </div>
          <div className="overflow-hidden rounded-[10px] border border-border-card bg-white shadow-sm">
            <Image
              src={orgChartSrc}
              alt={t('orgChartAlt')}
              width={1920}
              height={1080}
              className="h-auto w-full"
              sizes="(min-width: 1200px) 1120px, calc(100vw - 36px)"
            />
          </div>
        </ContentCard>

        <ContentCard className="max-w-[960px] mx-auto">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.7fr)] lg:items-center">
            <div>
              <p className="text-[14px] font-bold uppercase tracking-wider text-gold mb-2">
                {t('mapEyebrow')}
              </p>
              <h2 className="text-[28px] md:text-[36px] font-bold text-primary-dark tracking-tight mb-4">
                {t('mapTitle')}
              </h2>
              <p className="text-[17px] md:text-[18px] text-text-body leading-[1.8]">
                {t('mapDescription')}
              </p>
            </div>
            <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-[10px] border border-border-card bg-primary-dark/95 p-4 shadow-sm">
              <Image
                src="/images/rice-distribution-map.png"
                alt={t('mapAlt')}
                width={1822}
                height={2495}
                className="h-auto w-full"
                sizes="(min-width: 1024px) 420px, calc(100vw - 72px)"
              />
            </div>
          </div>
        </ContentCard>
      </SectionContainer>
    </main>
  );
}
