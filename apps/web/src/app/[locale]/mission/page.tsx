import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageHero } from '@/components/PageHero';
import { SectionContainer } from '@/components/SectionContainer';
import { ContentCard } from '@/components/ContentCard';
import { QuoteBlock } from '@/components/QuoteBlock';

export default async function MissionPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const locale = params.locale;
  setRequestLocale(locale);
  const t = await getTranslations('Mission');
  
  return (
    <main className="flex-1 flex flex-col w-full">
      <PageHero title={t('title')} />

      <SectionContainer isOverlappingHero={true}>
        <ContentCard className="max-w-[960px] mx-auto text-center border-0 bg-ivory">
          
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
      </SectionContainer>
    </main>
  );
}
