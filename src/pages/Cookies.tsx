import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Cookie, ShieldCheck, Lock, Sliders, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function Cookies() {
    const { t } = useTranslation('policies');

    return (
        <div className='flex flex-col min-h-screen w-full bg-surface text-surface-foreground font-sans'>
            <BackButton page='home' />

            {/* Mobile Header / Brand Anchor */}
            <div className='pt-10 pb-4 px-6 sm:px-10 max-w-4xl mx-auto w-full flex items-center justify-between sm:hidden'>
                <a
                    href='/'
                    className='inline-block'
                    aria-label='SCAPE by md Home'
                >
                    <h2 className='text-2xl font-display tracking-[0.2em] text-surface-foreground whitespace-nowrap'>
                        <span>SC</span>
                        <span className='tracking-normal'>/\</span>
                        <span className='pl-1.5'>PE</span>
                    </h2>
                </a>
                <a
                    href='/'
                    className='text-xs font-medium text-muted-foreground hover:text-surface-foreground transition-colors'
                >
                    Back to Home
                </a>
            </div>

            {/* Main Content Area */}
            <main className='flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full px-6 sm:px-10 pt-6 sm:pt-28 pb-12 sm:pb-16 text-left'>
                {/* Header Masthead */}
                <div className='mb-10 sm:mb-14'>
                    <div className='flex flex-wrap items-center gap-3 mb-4'>
                        <Badge className='inline-flex text-xs font-medium text-surface-foreground border border-border px-3 py-1 gap-2 bg-background/80 backdrop-blur-sm'>
                            <Cookie className='w-3 h-3 text-muted-foreground' />
                            {t('cookies.badge')}
                        </Badge>
                        <span className='text-xs font-mono text-muted-foreground'>
                            {t('cookies.lastUpdated')}
                        </span>
                    </div>

                    <h1 className='font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-surface-foreground mb-4 leading-tight'>
                        {t('cookies.title')}
                    </h1>

                    <p className='font-sans text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl'>
                        {t('cookies.lead')}
                    </p>
                </div>

                {/* Policy Document Card */}
                <div className='p-6 sm:p-10 rounded-2xl bg-background border border-border/80 shadow-xs space-y-8 mb-12 sm:mb-16'>
                    {/* Section 1 */}
                    <section className='space-y-3'>
                        <div className='flex items-center gap-2.5'>
                            <div className='size-7 rounded-lg bg-primary/10 flex items-center justify-center text-surface-foreground shrink-0'>
                                <Cookie className='w-4 h-4' />
                            </div>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                {t('cookies.s1.title')}
                            </h2>
                        </div>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed pl-9'>
                            {t('cookies.s1.body')}
                        </p>
                    </section>

                    <Separator className='border-border/60' />

                    {/* Section 2 */}
                    <section className='space-y-4'>
                        <div className='flex items-center gap-2.5'>
                            <div className='size-7 rounded-lg bg-primary/10 flex items-center justify-center text-surface-foreground shrink-0'>
                                <Lock className='w-4 h-4' />
                            </div>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                {t('cookies.s2.title')}
                            </h2>
                        </div>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed pl-9'>
                            {t('cookies.s2.lead')}
                        </p>

                        <div className='ml-9 grid grid-cols-1 md:grid-cols-2 gap-4 pt-2'>
                            <div className='p-4 rounded-xl border border-border/70 bg-surface/40 space-y-2'>
                                <div className='flex items-center justify-between'>
                                    <span className='font-mono text-xs font-semibold uppercase tracking-wider text-surface-foreground'>
                                        {t('cookies.s2.paymentCard.title')}
                                    </span>
                                    <span className='text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-muted text-muted-foreground'>
                                        {t('cookies.s2.paymentCard.badge')}
                                    </span>
                                </div>
                                <p className='text-xs text-muted-foreground leading-relaxed'>
                                    {t('cookies.s2.paymentCard.desc')}
                                </p>
                            </div>

                            <div className='p-4 rounded-xl border border-border/70 bg-surface/40 space-y-2'>
                                <div className='flex items-center justify-between'>
                                    <span className='font-mono text-xs font-semibold uppercase tracking-wider text-surface-foreground'>
                                        {t('cookies.s2.cartCard.title')}
                                    </span>
                                    <span className='text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-muted text-muted-foreground'>
                                        {t('cookies.s2.cartCard.badge')}
                                    </span>
                                </div>
                                <p className='text-xs text-muted-foreground leading-relaxed'>
                                    {t('cookies.s2.cartCard.desc')}
                                </p>
                            </div>
                        </div>

                        <p className='text-sm text-muted-foreground leading-relaxed pl-9 pt-2'>
                            {t('cookies.s2.note')}
                        </p>
                    </section>

                    <Separator className='border-border/60' />

                    {/* Section 3 */}
                    <section className='space-y-3'>
                        <div className='flex items-center gap-2.5'>
                            <div className='size-7 rounded-lg bg-primary/10 flex items-center justify-center text-surface-foreground shrink-0'>
                                <Sliders className='w-4 h-4' />
                            </div>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                {t('cookies.s3.title')}
                            </h2>
                        </div>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed pl-9'>
                            {t('cookies.s3.body')}
                        </p>
                        <p className='text-xs sm:text-sm text-muted-foreground/80 leading-relaxed pl-9'>
                            {t('cookies.s3.warning')}
                        </p>
                    </section>

                    <Separator className='border-border/60' />

                    {/* Section 4 */}
                    <section className='space-y-4'>
                        <div className='flex items-center gap-2.5'>
                            <div className='size-7 rounded-lg bg-primary/10 flex items-center justify-center text-surface-foreground shrink-0'>
                                <ShieldCheck className='w-4 h-4' />
                            </div>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                {t('cookies.s4.title')}
                            </h2>
                        </div>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed pl-9'>
                            {t('cookies.s4.body')}
                        </p>
                        <div className='pl-9 pt-1'>
                            <a
                                href='/privacy-policy'
                                className='inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-surface hover:bg-muted text-surface-foreground text-xs font-semibold transition-colors'
                            >
                                <span>{t('cookies.s4.cta')}</span>
                                <ArrowRight className='w-3.5 h-3.5' />
                            </a>
                        </div>
                    </section>
                </div>

                {/* Separator and Signature Logo (Preserved as requested) */}
                <Separator
                    orientation='horizontal'
                    className='border-border w-42 sm:w-56 self-center mx-auto'
                />
                <div className='flex flex-col items-center my-8 text-center'>
                    <h2 className='text-2xl sm:text-3xl font-display tracking-[0.2em] mb-1 text-foreground whitespace-nowrap'>
                        <span>SC</span>
                        <span className='tracking-normal'>/\</span>
                        <span className='pl-1.5'>PE</span>
                    </h2>
                    <p className='text-xs tracking-widest text-muted-foreground'>
                        by md
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Cookies;
