import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageHero } from '@/components/PageHero';
import { SectionContainer } from '@/components/SectionContainer';
import { Button } from '@/components/Button';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { eventPostSlug, legacyBlogPosts } from '@/content/blogPosts';

export default async function BlogPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const locale = params.locale;
  setRequestLocale(locale);
  const t = await getTranslations('Blog');
  const posts = [
    {
      slug: eventPostSlug,
      title: t(`posts.${eventPostSlug}.title`),
      category: t(`posts.${eventPostSlug}.category`),
      excerpt: t(`posts.${eventPostSlug}.excerpt`),
      image: '/images/hat-gao-se-chia-v-2026.jpeg',
      imageClassName: 'object-cover object-top',
    },
    ...legacyBlogPosts.map((post) => ({
      slug: post.slug,
      title: post.title,
      category: post.category,
      excerpt: post.excerpt,
      image: post.heroImage,
      imageClassName: 'object-cover',
    })),
  ];
  
  return (
    <main className="flex-1 flex flex-col w-full">
      <PageHero title={t('title')} />

      <SectionContainer isOverlappingHero={true}>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto">
          {posts.map((post) => (
            <div key={post.slug} className="flex flex-col bg-ivory rounded-card border border-border-card overflow-hidden shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-200 group">
              
              <div className="relative h-[200px] w-full bg-primary-medium/10 overflow-hidden">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className={post.imageClassName}
                  />
                ) : (
                  <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                    <span className="text-primary-dark/30 font-bold text-sm">Image Placeholder</span>
                  </div>
                )}
              </div>

              <div className="flex-1 p-8 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-[14px] font-bold tracking-wider uppercase text-gold mb-3">
                    {post.category}
                  </p>
                  <Link href={`/blog/${post.slug}`} className="block focus:outline-none">
                    <h3 className="text-[22px] font-bold text-primary-dark leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="mt-4 text-[16px] text-text-muted line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}
                  </Link>
                </div>
                <div className="mt-8">
                  <Button variant="text" href={`/blog/${post.slug}`} className="p-0 text-[15px] font-bold">
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
