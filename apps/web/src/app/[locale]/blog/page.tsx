import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageHero } from '@/components/PageHero';
import { SectionContainer } from '@/components/SectionContainer';
import { Button } from '@/components/Button';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

export default async function BlogPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const locale = params.locale;
  setRequestLocale(locale);
  const t = await getTranslations('Blog');
  
  return (
    <main className="flex-1 flex flex-col w-full">
      <PageHero title={t('title')} />

      <SectionContainer isOverlappingHero={true}>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto">
          {['vietCulturalFest2023', 'june2023', 'riceDistribution'].map((postKey) => (
            <div key={postKey} className="flex flex-col bg-ivory rounded-card border border-border-card overflow-hidden shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-200 group">
              
              <div className="relative h-[200px] w-full bg-primary-medium/10 overflow-hidden">
                {/* Fallback pattern/image */}
                <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                  <span className="text-primary-dark/30 font-bold text-sm">Image Placeholder</span>
                </div>
              </div>

              <div className="flex-1 p-8 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-[14px] font-bold tracking-wider uppercase text-gold mb-3">
                    {t(`posts.${postKey}.category`)}
                  </p>
                  <Link href={`/blog/${postKey}`} className="block focus:outline-none">
                    <h3 className="text-[22px] font-bold text-primary-dark leading-tight group-hover:text-primary transition-colors">
                      {t(`posts.${postKey}.title`)}
                    </h3>
                    {t(`posts.${postKey}.excerpt`) && (
                      <p className="mt-4 text-[16px] text-text-muted line-clamp-3 leading-relaxed">
                        {t(`posts.${postKey}.excerpt`)}
                      </p>
                    )}
                  </Link>
                </div>
                <div className="mt-8">
                  <Button variant="text" href={`/blog/${postKey}`} className="p-0 text-[15px] font-bold">
                    {t('readMore')}
                  </Button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </SectionContainer>
    </main>
  );
}
