import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Mail, ArrowRight } from 'lucide-react';

function PrivacyPolicy() {
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
                            Legal & Transparency
                        </Badge>
                        <span className='text-xs font-mono text-muted-foreground'>
                            Last updated: November 06, 2026
                        </span>
                    </div>

                    <h1 className='font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-surface-foreground mb-4 leading-tight'>
                        Privacy Policy.
                    </h1>

                    <p className='font-sans text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl'>
                        We value your privacy. This policy explains what
                        information we collect, how we use it, and your rights
                        as a customer of SCAPE by md.
                    </p>
                </div>

                {/* Policy Document Card */}
                <div className='p-6 sm:p-10 rounded-2xl bg-background border border-border/80 shadow-xs space-y-8 mb-12 sm:mb-16'>
                    {/* Section 1 */}
                    <section className='space-y-3'>
                        <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                            01 / Introduction
                        </h2>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
                            We are committed to safeguarding the personal
                            information of our visitors and customers. We do not
                            sell, rent, or trade your personal data.
                        </p>
                    </section>

                    <Separator className='border-border' />

                    {/* Section 2 */}
                    <section className='space-y-3'>
                        <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                            02 / Information We Collect
                        </h2>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
                            We only collect information that you voluntarily
                            provide when creating an inquiry or placing an
                            order:
                        </p>
                        <ul className='space-y-2 text-sm sm:text-base text-muted-foreground pl-1'>
                            <li className='flex items-start gap-2.5'>
                                <span className='size-1.5 rounded-full bg-foreground/60 shrink-0 mt-2' />
                                <span>
                                    <b>Full Name</b> - used for order
                                    identification and labeling
                                </span>
                            </li>
                            <li className='flex items-start gap-2.5'>
                                <span className='size-1.5 rounded-full bg-foreground/60 shrink-0 mt-2' />
                                <span>
                                    <b>Email Address</b> - used to send order
                                    confirmations and real-time tracking updates
                                </span>
                            </li>
                            <li className='flex items-start gap-2.5'>
                                <span className='size-1.5 rounded-full bg-foreground/60 shrink-0 mt-2' />
                                <span>
                                    <b>Delivery Address</b> - used exclusively
                                    by Posten Norge for physical parcel dispatch
                                </span>
                            </li>
                            <li className='flex items-start gap-2.5'>
                                <span className='size-1.5 rounded-full bg-foreground/60 shrink-0 mt-2' />
                                <span>
                                    <b>Payment Information</b> - processed
                                    securely through Vipps; card numbers never
                                    touch or reside on our servers
                                </span>
                            </li>
                        </ul>
                        <p className='text-xs sm:text-sm text-muted-foreground/80 leading-relaxed pt-1'>
                            We do <b>not</b> collect personal data automatically
                            or through cross-site tracking cookies.
                        </p>
                    </section>

                    <Separator className='border-border' />

                    {/* Section 3 */}
                    <section className='space-y-3'>
                        <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                            03 / How We Use Your Information
                        </h2>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
                            Your information is used solely to fulfill our
                            contractual commitments to you:
                        </p>
                        <ul className='space-y-2 text-sm sm:text-base text-muted-foreground pl-1'>
                            <li className='flex items-start gap-2.5'>
                                <span className='size-1.5 rounded-full bg-foreground/60 shrink-0 mt-2' />
                                <span>
                                    Fabricating and custom-framing your 3D
                                    topographic relief
                                </span>
                            </li>
                            <li className='flex items-start gap-2.5'>
                                <span className='size-1.5 rounded-full bg-foreground/60 shrink-0 mt-2' />
                                <span>
                                    Contacting you regarding dispatch, tracking,
                                    or unexpected production delays
                                </span>
                            </li>
                            <li className='flex items-start gap-2.5'>
                                <span className='size-1.5 rounded-full bg-foreground/60 shrink-0 mt-2' />
                                <span>
                                    Responding to customer support inquiries and
                                    replacement requests
                                </span>
                            </li>
                        </ul>
                        <p className='text-xs sm:text-sm text-muted-foreground/80 leading-relaxed pt-1'>
                            We never use your contact details for unsolicited
                            marketing campaigns, nor do we disclose customer
                            lists to third parties.
                        </p>
                    </section>

                    <Separator className='border-border' />

                    {/* Section 4 */}
                    <section className='space-y-3'>
                        <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                            04 / Cookies & Payment Infrastructure
                        </h2>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
                            When you make a payment on our website, verified
                            payment providers (Vipps) set strictly essential
                            session tokens to verify anti-fraud checks and
                            guarantee transaction integrity.
                        </p>
                        <p className='text-xs sm:text-sm text-muted-foreground/80 leading-relaxed'>
                            These cookies cannot be turned off without breaking
                            the checkout flow. For further details on cookie
                            lifespans, please review our{' '}
                            <a
                                href='/cookies'
                                className='font-semibold text-foreground underline underline-offset-4'
                            >
                                Cookie Policy
                            </a>
                            .
                        </p>
                    </section>

                    <Separator className='border-border' />

                    {/* Section 5 */}
                    <section className='space-y-3'>
                        <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                            05 / Data Security
                        </h2>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
                            We employ modern industry standards to protect your
                            data, including transport-layer security (HTTPS/TLS)
                            encryption on all endpoints and strict access
                            limitations within our workshop databases.
                        </p>
                    </section>

                    <Separator className='border-border' />

                    {/* Section 6 */}
                    <section className='space-y-3'>
                        <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                            06 / Your Rights (GDPR)
                        </h2>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
                            Under Norwegian and European privacy regulations,
                            you hold the right to request a copy of the personal
                            data we store, request rectification of errors, or
                            ask for complete deletion of your customer record
                            once your warranty and accounting period has
                            completed.
                        </p>
                    </section>

                    <Separator className='border-border' />

                    {/* Section 7 */}
                    <section className='space-y-3'>
                        <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                            07 / Policy Updates
                        </h2>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
                            Any revisions to our privacy practices will be
                            published on this page alongside an updated revision
                            date.
                        </p>
                    </section>

                    <Separator className='border-border' />

                    {/* Section 8 / Contact Box */}
                    <section className='p-5 rounded-xl bg-muted/40 border border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
                        <div className='flex items-start gap-3'>
                            <Mail className='w-5 h-5 text-foreground shrink-0 mt-0.5' />
                            <div>
                                <h3 className='font-display text-sm font-bold text-foreground'>
                                    Questions or Data Inquiries?
                                </h3>
                                <p className='text-xs text-muted-foreground mt-0.5'>
                                    Contact Maren & Daniel directly at{' '}
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
                            <span>Contact Us</span>
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
