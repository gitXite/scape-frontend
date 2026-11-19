import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Mail, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function PrivacyPolicy() {
    const { t } = useTranslation('policies');

    return (
        <div className='flex flex-col min-h-screen w-full bg-surface text-surface-foreground font-sans'>
            <BackButton page='home' />

            {/* Mobile Header / Brand Anchor */}
            <div className='pt-10 pb-4 px-6 sm:px-10 max-w-4xl mx-auto w-full flex items-center justify-between sm:hidden'>
                <h2 className='text-2xl font-display tracking-[0.2em] text-surface-foreground whitespace-nowrap'>
                    <span>SC</span>
                    <span className='tracking-normal'>/\</span>
                    <span className='pl-1.5'>PE</span>
                </h2>
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
                    <div className='flex items-center gap-3 mb-4'>
                        <Badge className='inline-flex text-xs font-medium text-surface-foreground border border-border px-3 py-1 gap-2 bg-background/80 backdrop-blur-sm'>
                            <ShieldCheck className='w-3 h-3 text-muted-foreground' />
                            {t('privacy.badge')}
                        </Badge>
                        <span className='text-xs font-mono text-muted-foreground'>
                            {t('privacy.lastUpdated')}
                        </span>
                    </div>

                    <h1 className='font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-surface-foreground mb-4 leading-tight'>
                        {t('privacy.title')}
                    </h1>

                    <p className='font-sans text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl'>
                        {t('privacy.lead')}
                    </p>
                </div>

                {/* Policy Document Card */}
                <div className='p-6 sm:p-10 rounded-2xl bg-background border border-border/80 shadow-xs space-y-8 mb-12 sm:mb-16'>
                    {/* Section 1 */}
                    <section className='space-y-3'>
                        <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                            {t('privacy.s1.title')}
                        </h2>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
                            {t('privacy.s1.body')}
                        </p>
                    </section>

                    <Separator className='border-border' />

                    {/* Section 2 */}
                    <section className='space-y-3'>
                        <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                            {t('privacy.s2.title')}
                        </h2>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
                            {t('privacy.s2.lead')}
                        </p>
                        <ul className='space-y-2 text-sm sm:text-base text-muted-foreground pl-1'>
                            <li className='flex items-start gap-2.5'>
                                <span className='size-1.5 rounded-full bg-foreground/60 shrink-0 mt-2' />
                                <span>{t('privacy.s2.items.name')}</span>
                            </li>
                            <li className='flex items-start gap-2.5'>
                                <span className='size-1.5 rounded-full bg-foreground/60 shrink-0 mt-2' />
                                <span>{t('privacy.s2.items.email')}</span>
                            </li>
                            <li className='flex items-start gap-2.5'>
                                <span className='size-1.5 rounded-full bg-foreground/60 shrink-0 mt-2' />
                                <span>{t('privacy.s2.items.address')}</span>
                            </li>
                            <li className='flex items-start gap-2.5'>
                                <span className='size-1.5 rounded-full bg-foreground/60 shrink-0 mt-2' />
                                <span>{t('privacy.s2.items.payment')}</span>
                            </li>
                        </ul>
                        <p className='text-xs sm:text-sm text-muted-foreground/80 leading-relaxed pt-1'>
                            {t('privacy.s2.noCookies')}
                        </p>
                    </section>

                    <Separator className='border-border' />

                    {/* Section 3 */}
                    <section className='space-y-3'>
                        <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                            {t('privacy.s3.title')}
                        </h2>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
                            {t('privacy.s3.lead')}
                        </p>
                        <ul className='space-y-2 text-sm sm:text-base text-muted-foreground pl-1'>
                            <li className='flex items-start gap-2.5'>
                                <span className='size-1.5 rounded-full bg-foreground/60 shrink-0 mt-2' />
                                <span>{t('privacy.s3.items.item1')}</span>
                            </li>
                            <li className='flex items-start gap-2.5'>
                                <span className='size-1.5 rounded-full bg-foreground/60 shrink-0 mt-2' />
                                <span>{t('privacy.s3.items.item2')}</span>
                            </li>
                            <li className='flex items-start gap-2.5'>
                                <span className='size-1.5 rounded-full bg-foreground/60 shrink-0 mt-2' />
                                <span>{t('privacy.s3.items.item3')}</span>
                            </li>
                        </ul>
                        <p className='text-xs sm:text-sm text-muted-foreground/80 leading-relaxed pt-1'>
                            {t('privacy.s3.noMarketing')}
                        </p>
                    </section>

                    <Separator className='border-border' />

                    {/* Section 4 */}
                    <section className='space-y-3'>
                        <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                            {t('privacy.s4.title')}
                        </h2>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
                            {t('privacy.s4.lead')}
                        </p>
                        <ul className='space-y-2 text-sm sm:text-base text-muted-foreground pl-1'>
                            <li className='flex items-start gap-2.5'>
                                <span className='size-1.5 rounded-full bg-foreground/60 shrink-0 mt-2' />
                                <span>{t('privacy.s4.items.vipps')}</span>
                            </li>
                            <li className='flex items-start gap-2.5'>
                                <span className='size-1.5 rounded-full bg-foreground/60 shrink-0 mt-2' />
                                <span>{t('privacy.s4.items.posten')}</span>
                            </li>
                        </ul>
                    </section>

                    <Separator className='border-border' />

                    {/* Section 5 */}
                    <section className='space-y-3'>
                        <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                            {t('privacy.s5.title')}
                        </h2>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
                            {t('privacy.s5.body')}
                        </p>
                    </section>

                    <Separator className='border-border' />

                    {/* Section 6 */}
                    <section className='space-y-3'>
                        <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                            {t('privacy.s6.title')}
                        </h2>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
                            {t('privacy.s6.body')}
                        </p>
                    </section>

                    <Separator className='border-border' />

                    {/* Section 7 */}
                    <section className='space-y-3'>
                        <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                            {t('privacy.s7.title')}
                        </h2>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
                            {t('privacy.s7.body')}
                        </p>
                    </section>

                    <Separator className='border-border' />

                    {/* Section 8 / Contact Box */}
                    <section className='p-5 rounded-xl bg-muted/40 border border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
                        <div className='flex items-start gap-3'>
                            <Mail className='w-5 h-5 text-foreground shrink-0 mt-0.5' />
                            <div>
                                <h3 className='font-display text-sm font-bold text-foreground'>
                                    {t('privacy.contact.title')}
                                </h3>
                                <p className='text-xs text-muted-foreground mt-0.5'>
                                    {t('privacy.contact.desc')}{' '}
                                    <a
                                        href='mailto:scapebymd@gmail.com'
                                        className='font-semibold text-foreground underline underline-offset-2'
                                    >
                                        scapebymd@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>

                        <a
                            href='/contact-us'
                            className='inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-background text-foreground text-xs font-medium hover:bg-muted transition-colors shrink-0'
                        >
                            <span>{t('privacy.contact.cta')}</span>
                            <ArrowRight className='w-3 h-3' />
                        </a>
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

export default PrivacyPolicy;
