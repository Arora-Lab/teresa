import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageHero } from '@/components/PageHero';
import { SectionContainer } from '@/components/SectionContainer';
import { ContentCard } from '@/components/ContentCard';
import { Button } from '@/components/Button';
import { DollarSign, Building } from 'lucide-react';
import Image from 'next/image';

export default async function Home(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const locale = params.locale;
  setRequestLocale(locale);
  
  const tHome = await getTranslations('Home');
  const tMission = await getTranslations('Mission');
  const tContribution = await getTranslations('Contribution');
  const tCommon = await getTranslations('Common');
  
  return (
    <main className="flex-1 flex flex-col w-full">
      <PageHero 
        title={tHome('title')} 
        subtitle="Providing rice and care to elderly individuals in Vietnam. Always doing the smallest right with great love."
        isHome={true}
      />

      <SectionContainer isOverlappingHero={true} className="pb-16 md:pb-24">
        
        {/* Three Column Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-16 md:mb-24">
          <ContentCard className="flex flex-col items-center text-center">
            <div className="w-[52px] h-[52px] rounded-full bg-accent-soft flex items-center justify-center text-primary-medium mb-6 flex-shrink-0">
              <Image src="/images/logo.png" alt="Teresa Logo" width={32} height={32} className="opacity-90" />
            </div>
            <h3 className="text-[20px] md:text-[24px] font-bold text-primary-dark mb-3 leading-tight">{tMission('title')}</h3>
            <p className="text-text-muted text-[17px] leading-relaxed flex-grow">{tMission('summary')}</p>
          </ContentCard>
          
          <ContentCard className="flex flex-col items-center text-center">
            <div className="w-[52px] h-[52px] rounded-full bg-accent-soft flex items-center justify-center text-primary-medium mb-6 flex-shrink-0">
              <DollarSign className="w-6 h-6" strokeWidth={2} />
            </div>
            <h3 className="text-[20px] md:text-[24px] font-bold text-primary-dark mb-3 leading-tight">Zelle</h3>
            <p className="text-text-muted text-[17px] leading-relaxed flex-grow">{tCommon('zellePhone')}<br /><br />{tCommon('zelleInstruction')}</p>
          </ContentCard>

          <ContentCard className="flex flex-col items-center text-center">
            <div className="w-[52px] h-[52px] rounded-full bg-accent-soft flex items-center justify-center text-primary-medium mb-6 flex-shrink-0">
              <Building className="w-6 h-6" strokeWidth={2} />
            </div>
            <h3 className="text-[20px] md:text-[24px] font-bold text-primary-dark mb-3 leading-tight">Checks</h3>
            <div className="text-text-muted text-[17px] leading-relaxed flex-grow">
              <p className="mb-2">{tCommon('sendChecksTo')}</p>
              <p className="font-semibold text-primary-dark">{tCommon('address.0')}</p>
              <p>{tCommon('address.1')}</p>
              <p>{tCommon('address.2')}</p>
            </div>
          </ContentCard>
        </div>

        {/* Detailed Contribution Section */}
        <ContentCard className="max-w-[960px] mx-auto text-center border-0 bg-ivory">
          <h2 className="text-[30px] md:text-[36px] font-bold text-primary-dark mb-6 tracking-tight">{tContribution('title')}</h2>
          <p className="text-[17px] md:text-[18px] text-text-body mb-10 leading-relaxed max-w-[720px] mx-auto">
            {tContribution('intro')}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" href="/contribute">
              {tCommon('donateNow')}
            </Button>
            <Button variant="secondary" href="/mission">
              {tCommon('ourMission')}
            </Button>
          </div>
        </ContentCard>

      </SectionContainer>
    </main>
  );
}
