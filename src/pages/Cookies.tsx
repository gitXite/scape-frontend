import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Cookie, ShieldCheck, Lock, Sliders, ArrowRight } from 'lucide-react';

function Cookies() {
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
                            Transparency & Essential Tracking
                        </Badge>
                        <span className='text-xs font-mono text-muted-foreground'>
                            Last updated: November 06, 2026
                        </span>
                    </div>

                    <h1 className='font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-surface-foreground mb-4 leading-tight'>
                        Cookie Policy.
                    </h1>

                    <p className='font-sans text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl'>
                        SCAPE by md is built on digital minimalism. We do not
                        use third-party marketing trackers or profiling cookies
                        - only strictly necessary session tokens to keep your
                        cart secure and process payments.
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
                                01 / What Are Cookies?
                            </h2>
                        </div>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed pl-9'>
                            Cookies are small text files stored locally on your
                            computer or mobile device when you interact with a
                            web application. They help the site remember your
                            configuration and function reliably. Cookies do not
                            collect personal information unless you explicitly
                            provide it (such as when entering shipping details
                            during checkout).
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
                                02 / Necessary Cookies We Use
                            </h2>
                        </div>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed pl-9'>
                            Our website operates exclusively with{' '}
                            <b>strictly necessary cookies</b> required for
                            system integrity and payment processing:
                        </p>

                        <div className='ml-9 grid grid-cols-1 md:grid-cols-2 gap-4 pt-2'>
                            <div className='p-4 rounded-xl border border-border/70 bg-surface/40 space-y-2'>
                                <div className='flex items-center justify-between'>
                                    <span className='font-mono text-xs font-semibold uppercase tracking-wider text-surface-foreground'>
                                        Payment & Anti-Fraud
                                    </span>
                                    <span className='text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-muted text-muted-foreground'>
                                        Vipps
                                    </span>
                                </div>
                                <p className='text-xs text-muted-foreground leading-relaxed'>
                                    When you finalize your Scape, integrated
                                    payment gateways set security and anti-fraud
                                    verification tokens. These prevent duplicate
                                    charges and ensure PCI-DSS compliant
                                    transactions.
                                </p>
                            </div>

                            <div className='p-4 rounded-xl border border-border/70 bg-surface/40 space-y-2'>
                                <div className='flex items-center justify-between'>
                                    <span className='font-mono text-xs font-semibold uppercase tracking-wider text-surface-foreground'>
                                        Cart & Configuration
                                    </span>
                                    <span className='text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-muted text-muted-foreground'>
                                        Session
                                    </span>
                                </div>
                                <p className='text-xs text-muted-foreground leading-relaxed'>
                                    Temporary session identifiers keep your
                                    relief model, frame selection, and
                                    passe-partout choices synchronized between
                                    steps without losing your work.
                                </p>
                            </div>
                        </div>

                        <p className='text-sm text-muted-foreground leading-relaxed pl-9 pt-2'>
                            Because these cookies are indispensable for website
                            functionality and secure commerce, they are active
                            by default. No personal information or tracking
                            profile is shared with advertisers.
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
                                03 / Managing Browser Settings
                            </h2>
                        </div>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed pl-9'>
                            You retain complete authority over your device's
                            cookie settings. You can instruct your browser to
                            prompt you when cookies are set or block them
                            altogether through your browser preferences (such as
                            in Safari, Chrome, Firefox, or Edge).
                        </p>
                        <p className='text-xs sm:text-sm text-muted-foreground/80 leading-relaxed pl-9'>
                            *Please note: Disabling strictly necessary cookies
                            will inhibit the secure payment token exchange,
                            preventing checkout completion.
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
                                04 / More Information & Privacy Rights
                            </h2>
                        </div>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed pl-9'>
                            For comprehensive documentation regarding how we
                            protect your personal data, customer rights, and
                            data retention standards, consult our Privacy
                            Policy.
                        </p>
                        <div className='pl-9 pt-1'>
                            <a
                                href='/privacy-policy'
                                className='inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-surface hover:bg-muted text-surface-foreground text-xs font-semibold transition-colors'
                            >
                                <span>Read Full Privacy Policy</span>
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
