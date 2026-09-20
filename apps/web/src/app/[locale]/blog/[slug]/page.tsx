import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { SectionContainer } from '@/components/SectionContainer';
import { ContentCard } from '@/components/ContentCard';
import { Button } from '@/components/Button';
import { eventPostSlug, getGalleryImages, getLegacyBlogPost } from '@/content/blogPosts';

export default async function BlogPostPage(props: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const params = await props.params;
  const { locale, slug } = params;
  setRequestLocale(locale);

  const legacyPost = getLegacyBlogPost(slug);

  const tCommon = await getTranslations('Common');
  const tBlog = await getTranslations('Blog');

  if (slug !== eventPostSlug && !legacyPost) {
    notFound();
  }

  if (legacyPost) {
    const galleryImages = getGalleryImages(legacyPost.galleryDir);

    return (
      <main className="flex-1 flex flex-col w-full">
        <PageHero title={legacyPost.title} subtitle={legacyPost.excerpt} />

        <SectionContainer isOverlappingHero={true} className="pb-16 md:pb-24">
          <ContentCard className="max-w-[1040px] mx-auto">
            <div className="max-w-[780px]">
              <p className="text-[14px] font-bold uppercase tracking-wider text-gold mb-3">
                {legacyPost.category}
              </p>
              <h2 className="text-[30px] md:text-[40px] font-bold text-primary-dark tracking-tight">
                {legacyPost.title}
              </h2>
              <p className="mt-3 text-[15px] text-text-muted">{legacyPost.date}</p>
            </div>

            <div className="mt-8 space-y-5 text-[17px] md:text-[18px] text-text-body leading-relaxed max-w-[860px]">
              {legacyPost.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {galleryImages.length > 0 && (
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {galleryImages.map((image, index) => (
                  <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-card bg-primary-dark/5">
                    <Image
                      src={image}
                      alt={`${legacyPost.title} ${index + 1}`}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="mt-10">
              <Button variant="secondary" href="/blog">
                {tBlog('title')}
              </Button>
            </div>
          </ContentCard>
        </SectionContainer>
      </main>
    );
  }

  const t = await getTranslations('Event2026');
  const contacts = t.raw('contacts') as string[];

  return (
    <main className="flex-1 flex flex-col w-full">
      <PageHero title={t('title')} subtitle={t('subtitle')} />

      <SectionContainer isOverlappingHero={true} className="pb-16 md:pb-24">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] max-w-[1120px] mx-auto items-start">
          <div className="relative min-h-[520px] overflow-hidden rounded-card border border-border-card bg-primary-dark shadow-card">
            <Image
              src="/images/hat-gao-se-chia-v-2026.jpeg"
              alt={t('title')}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-contain p-3"
              priority
            />
          </div>

          <ContentCard className="space-y-8">
            <div>
              <p className="text-[14px] font-bold uppercase tracking-wider text-gold mb-3">
                {t('eyebrow')}
              </p>
              <h2 className="text-[30px] md:text-[40px] font-bold text-primary-dark tracking-tight">
                {t('title')}
              </h2>
            </div>

            <div className="space-y-6 text-[17px] md:text-[18px] text-text-body leading-relaxed">
              <p>{t('intro')}</p>

              <section className="space-y-3">
                <h3 className="text-[24px] md:text-[28px] font-bold text-primary-dark">
                  {t('aboutHeading')}
                </h3>
                <p>{t('aboutBody')}</p>
              </section>

              <section className="space-y-3">
                <h3 className="text-[24px] md:text-[28px] font-bold text-primary-dark">
                  {t('meaningHeading')}
                </h3>
                <p>{t('meaningBody')}</p>
              </section>

              <div className="space-y-4">
                <p>
                  {t('timeLabel')}: <strong>{t('timeLine')}</strong>
                </p>
                <p>
                  {t('locationLabel')}: <strong>{t('locationLine')}</strong>
                </p>
                <div>
                  <p>{t('contactLabel')}:</p>
                  <div className="mt-2 space-y-1">
                    {contacts.map((contact) => {
                      const [name, phone] = contact.split(': ');
                      return (
                        <p key={contact}>
                          {name}: <strong>{phone}</strong>
                        </p>
                      );
                    })}
                  </div>
                </div>
                <p>{t('closing')}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button variant="primary" href="/contribute">
                {tCommon('donateNow')}
              </Button>
              <Button variant="secondary" href="/contact">
                {tCommon('contactUs')}
              </Button>
            </div>
          </ContentCard>
        </div>
      </SectionContainer>
    </main>
  );
}
