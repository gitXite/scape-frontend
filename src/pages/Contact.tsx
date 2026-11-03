import BackButton from '@/components/BackButton';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Mail, MapPin, Clock, Sparkles, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

function Contact() {
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
                    Back to Home
                </a>
            </div>

            {/* Main Content Area */}
            <main className='flex-1 max-w-6xl mx-auto w-full px-6 sm:px-10 pt-6 sm:pt-28 pb-16 sm:pb-24 text-left'>
                {/* Header Masthead */}
                <div className='max-w-2xl mb-10 sm:mb-14'>
                    <Badge className='inline-flex text-xs font-medium text-surface-foreground border border-border px-3 py-1 mb-4 gap-2 bg-background/80 backdrop-blur-sm'>
                        <MapPin className='w-3 h-3 text-muted-foreground' />
                        Bergen · Norway
                    </Badge>

                    <h1 className='font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-surface-foreground mb-4 leading-[1.08]'>
                        Let’s connect.
                    </h1>

                    <p className='font-sans text-base sm:text-lg text-muted-foreground leading-relaxed'>
                        Have questions about custom coordinates, framing
                        details, or bespoke commissions? We’re here to help
                        bring your landscape to life.
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
                                    Direct Support
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
                                            Direct Email
                                        </h3>
                                        <a
                                            href='mailto:scapebymd@gmail.com'
                                            className='text-base font-semibold text-surface-foreground hover:underline underline-offset-4 transition-colors'
                                        >
                                            scapebymd@gmail.com
                                        </a>
                                        <p className='text-xs text-muted-foreground mt-0.5'>
                                            Direct line to Maren & Daniel
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
                                            Response Time
                                        </h3>
                                        <p className='text-base font-semibold text-surface-foreground'>
                                            Within 24 hours
                                        </p>
                                        <p className='text-xs text-muted-foreground mt-0.5'>
                                            Monday through Friday
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
                                            Workshop
                                        </h3>
                                        <p className='text-base font-semibold text-surface-foreground'>
                                            Bergen, Norway
                                        </p>
                                        <p className='text-xs text-muted-foreground mt-0.5'>
                                            Nationwide delivery via Posten
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
                                    Looking for custom dimensions, a specific
                                    summit elevation ratio, or corporate
                                    gifting? Mention your project details in the
                                    form and we will assist.
                                </p>
                            </div>
                        </div>
                    </aside>

                    {/* Right Column: The Contact Form */}
                    <div className='lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-background border border-border/80 shadow-xs'>
                        <div className='mb-6 pb-6 border-b border-border/60'>
                            <h2 className='font-display text-xl sm:text-2xl font-bold tracking-tight text-surface-foreground mb-1.5'>
                                Send a message
                            </h2>
                            <p className='text-xs sm:text-sm text-muted-foreground'>
                                Fill in your details below and our Bergen studio
                                will get back to you promptly.
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
