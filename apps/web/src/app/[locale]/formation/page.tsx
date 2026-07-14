import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageHero } from '@/components/PageHero';
import { SectionContainer } from '@/components/SectionContainer';
import { ContentCard } from '@/components/ContentCard';
import { QuoteBlock } from '@/components/QuoteBlock';
import Image from 'next/image';

export default async function FormationPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const locale = params.locale;
  setRequestLocale(locale);
  const t = await getTranslations('Formation');
  
  return (
    <main className="flex-1 flex flex-col w-full">
      <PageHero title={t('title')} />

      <SectionContainer isOverlappingHero={true}>
        <ContentCard className="max-w-[960px] mx-auto text-center border-0 bg-ivory">
          
          <div className="max-w-[720px] mx-auto text-left flex flex-col items-center">
            
            <p className="text-[17px] md:text-[18px] text-text-body leading-[1.8] text-center mb-10">
              {t('intro')}
            </p>
            
            {/* Image placeholder for St. Therese */}
            <div className="w-[180px] h-[180px] rounded-full overflow-hidden border-4 border-ivory shadow-card mb-8 relative">
               <div className="absolute inset-0 bg-primary-medium/10 flex items-center justify-center">
                  <span className="text-primary-dark/30 font-bold text-sm">Image</span>
               </div>
            </div>
            
            <QuoteBlock className="mb-8 w-full text-center">
              {t('quote')}
            </QuoteBlock>
            
            <p className="text-[20px] text-primary-medium font-bold text-center">
              {t('outro')}
            </p>

          </div>
          
        </ContentCard>
      </SectionContainer>
    </main>
  );
}
