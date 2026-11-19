import BackButton from '@/components/BackButton';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Mail, MapPin, Clock, Sparkles, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation('pages');

    return (
        <div className='flex flex-col min-h-screen w-full bg-surface text-surface-foreground font-sans'>
            <BackButton page='home' />

            {/* Mobile Header / Brand Anchor */}
            <div className='pt-10 pb-4 px-6 sm:px-10 max-w-6xl mx-auto w-full flex items-center justify-between sm:hidden'>
                <h2 className='text-2xl font-display tracking-[0.2em] text-surface-foreground whitespace-nowrap'>
                    <span>SC</span>
                    <span className='tracking-normal'>/\</span>
                    <span className='pl-1.5'>PE</span>
                </h2>
                <a
                    href='/'
                    className='text-xs font-medium text-muted-foreground hover:text-surface-foreground transition-colors'
                >
                    {t('contact.header.backToHome')}
                </a>
            </div>

            {/* Main Content Area */}
            <main className='flex-1 max-w-6xl mx-auto w-full px-6 sm:px-10 pt-6 sm:pt-28 pb-16 sm:pb-24 text-left'>
                {/* Header Masthead */}
                <div className='max-w-2xl mb-10 sm:mb-14'>
                    <Badge className='inline-flex text-xs font-medium text-surface-foreground border border-border px-3 py-1 mb-4 gap-2 bg-background/80 backdrop-blur-sm'>
                        <MapPin className='w-3 h-3 text-muted-foreground' />
                        {t('contact.header.badge')}
                    </Badge>

                    <h1 className='font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-surface-foreground mb-4 leading-[1.08]'>
                        {t('contact.header.title')}
                    </h1>

                    <p className='font-sans text-base sm:text-lg text-muted-foreground leading-relaxed'>
                        {t('contact.header.lead')}
                    </p>
                </div>

                {/* 2-Column Architectural Layout */}
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start'>
                    {/* Left Column: Studio & Contact Information */}
                    <aside className='lg:sticky lg:top-25 lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-background border border-border/80 shadow-xs space-y-8'>
                        <div>
                            <div className='flex items-center gap-2 mb-6'>
                                <MessageSquare className='w-4 h-4 text-muted-foreground' />
                                <span className='text-xs font-semibold uppercase tracking-wider text-muted-foreground'>
                                    {t('contact.sidebar.directSupport')}
                                </span>
                            </div>

                            <div className='space-y-6'>
                                {/* Direct Email */}
                                <div className='flex items-start gap-4'>
                                    <div className='size-10 rounded-xl bg-primary/10 text-surface-foreground flex items-center justify-center shrink-0 mt-0.5'>
                                        <Mail className='w-5 h-5' />
                                    </div>
                                    <div>
                                        <h3 className='text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1'>
                                            {t('contact.sidebar.emailTitle')}
                                        </h3>
                                        <a
                                            href='mailto:scapebymd@gmail.com'
                                            className='text-base font-semibold text-surface-foreground hover:underline underline-offset-4 transition-colors'
                                        >
                                            {t('contact.sidebar.email')}
                                        </a>
                                        <p className='text-xs text-muted-foreground mt-0.5'>
                                            {t('contact.sidebar.emailSub')}
                                        </p>
                                    </div>
                                </div>

                                {/* Response Time */}
                                <div className='flex items-start gap-4'>
                                    <div className='size-10 rounded-xl bg-primary/10 text-surface-foreground flex items-center justify-center shrink-0 mt-0.5'>
                                        <Clock className='w-5 h-5' />
                                    </div>
                                    <div>
                                        <h3 className='text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1'>
                                            {t('contact.sidebar.responseTimeTitle')}
                                        </h3>
                                        <p className='text-base font-semibold text-surface-foreground'>
                                            {t('contact.sidebar.responseTime')}
                                        </p>
                                        <p className='text-xs text-muted-foreground mt-0.5'>
                                            {t('contact.sidebar.responseTimeSub')}
                                        </p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className='flex items-start gap-4'>
                                    <div className='size-10 rounded-xl bg-primary/10 text-surface-foreground flex items-center justify-center shrink-0 mt-0.5'>
                                        <MapPin className='w-5 h-5' />
                                    </div>
                                    <div>
                                        <h3 className='text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1'>
                                            {t('contact.sidebar.workshopTitle')}
                                        </h3>
                                        <p className='text-base font-semibold text-surface-foreground'>
                                            {t('contact.sidebar.workshopLocation')}
                                        </p>
                                        <p className='text-xs text-muted-foreground mt-0.5'>
                                            {t('contact.sidebar.workshopSub')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Special Commission Note */}
                        <div className='pt-6 border-t border-border/60'>
                            <div className='flex items-start gap-3 p-4 rounded-xl bg-muted/40 border border-border/60 text-xs text-muted-foreground leading-relaxed'>
                                <Sparkles className='w-4 h-4 text-surface-foreground shrink-0 mt-0.5' />
                                <p>
                                    {t('contact.sidebar.customCommission')}
                                </p>
                            </div>
                        </div>
                    </aside>

                    {/* Right Column: The Contact Form */}
                    <div className='lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-background border border-border/80 shadow-xs'>
                        <div className='mb-6 pb-6 border-b border-border/60'>
                            <h2 className='font-display text-xl sm:text-2xl font-bold tracking-tight text-surface-foreground mb-1.5'>
                                {t('contact.form.heading')}
                            </h2>
                            <p className='text-xs sm:text-sm text-muted-foreground'>
                                {t('contact.form.subheading')}
                            </p>
                        </div>

                        <ContactForm />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Contact;
