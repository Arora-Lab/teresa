import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageHero } from '@/components/PageHero';
import { SectionContainer } from '@/components/SectionContainer';
import { ContentCard } from '@/components/ContentCard';
import { Button } from '@/components/Button';
import Image from 'next/image';
import { Heart, DollarSign, Building, CalendarDays, Clock, MapPin, Phone, CreditCard, ExternalLink } from 'lucide-react';

const paypalDonateUrl =
  'https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=QMNPTNKCUQMCA&ssrt=1732492491350';

export default async function Home(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const locale = params.locale;
  setRequestLocale(locale);
  
  const tHome = await getTranslations('Home');
  const tMission = await getTranslations('Mission');
  const tContribution = await getTranslations('Contribution');
  const tCommon = await getTranslations('Common');
  const tEvent = await getTranslations('Event2026');
  const eventContacts = tEvent.raw('contacts') as string[];
  
  return (
    <main className="flex-1 flex flex-col w-full">
      <PageHero 
        title={tHome('title')} 
        subtitle="Providing rice and care to elderly individuals in Vietnam. Always doing the smallest right with great love."
        isHome={true}
      />

      <SectionContainer isOverlappingHero={true} className="pb-16 md:pb-24">
        <section className="mb-16 md:mb-24 overflow-hidden rounded-card border border-border-card bg-surface shadow-card">
          <div className="grid gap-0 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
            <div className="relative min-h-[420px] bg-primary-dark">
              <Image
                src="/images/hat-gao-se-chia-v-2026.jpeg"
                alt={tEvent('title')}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-contain p-3"
                priority
              />
            </div>
            <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
              <p className="text-[14px] font-bold uppercase tracking-wider text-gold mb-3">
                {tEvent('eyebrow')}
              </p>
              <h2 className="text-[30px] md:text-[42px] font-bold text-primary-dark tracking-tight mb-4">
                {tEvent('title')}
              </h2>
              <p className="text-[17px] md:text-[18px] text-text-body leading-relaxed mb-8">
                {tEvent('subtitle')}
              </p>

              <div className="grid gap-5 text-[16px] text-text-body">
                <div className="flex gap-3">
                  <CalendarDays className="mt-1 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-primary-dark">{tEvent('dateLabel')}</p>
                    <p>{tEvent('date')}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-primary-dark">{tEvent('timeLabel')}</p>
                    <p>{tEvent('time')}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-primary-dark">{tEvent('locationLabel')}</p>
                    <p>{tEvent('location')}</p>
                    <p className="text-text-muted">{tEvent('address')}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-primary-dark">{tEvent('contactLabel')}</p>
                    {eventContacts.map((contact) => (
                      <p key={contact}>{contact}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button variant="primary" href="/blog/hatGaoSeChiaV2026">
                  {tEvent('cta')}
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Summary and Donation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch mb-16 md:mb-24">
          <ContentCard className="flex flex-col items-center text-center">
            <div className="w-[52px] h-[52px] rounded-full bg-accent-soft flex items-center justify-center text-primary-medium mb-6 flex-shrink-0">
              <Heart className="w-6 h-6" strokeWidth={2} />
            </div>
            <h3 className="text-[20px] md:text-[24px] font-bold text-primary-dark mb-3 leading-tight">{tMission('title')}</h3>
            <p className="text-text-muted text-[17px] leading-relaxed flex-grow">{tMission('summary')}</p>
          </ContentCard>
          
          <ContentCard className="flex flex-col items-center text-center">
            <div className="w-[52px] h-[52px] rounded-full bg-accent-soft flex items-center justify-center text-primary-medium mb-6 flex-shrink-0">
              <DollarSign className="w-6 h-6" strokeWidth={2} />
            </div>
            <h3 className="text-[20px] md:text-[24px] font-bold text-primary-dark mb-3 leading-tight">Zelle</h3>
            <div className="mb-5 overflow-hidden rounded-[10px] border border-border-card bg-white p-2 shadow-sm">
              <Image
                src="/images/zelle-qr-2026.png"
                alt={tCommon('zelleQrAlt')}
                width={180}
                height={180}
                className="h-auto w-[180px]"
              />
            </div>
            <p className="text-text-muted text-[17px] leading-relaxed flex-grow">{tCommon('zellePhone')}<br /><br />{tCommon('zelleInstruction')}</p>
          </ContentCard>

          <ContentCard className="flex flex-col items-center text-center">
            <div className="w-[52px] h-[52px] rounded-full bg-accent-soft flex items-center justify-center text-primary-medium mb-6 flex-shrink-0">
              <CreditCard className="w-6 h-6" strokeWidth={2} />
            </div>
            <h3 className="text-[20px] md:text-[24px] font-bold text-primary-dark mb-3 leading-tight">PayPal</h3>
            <p className="text-text-muted text-[17px] leading-relaxed flex-grow mb-6">
              {tCommon('paypalDescription')}
            </p>
            <a
              href={paypalDonateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-md focus:outline-none"
            >
              {tCommon('paypalDonate')}
              <ExternalLink className="h-4 w-4" strokeWidth={2.2} />
            </a>
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
