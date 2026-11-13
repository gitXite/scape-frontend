import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Package, ShieldAlert, HeartHandshake, ArrowRight } from 'lucide-react';

function Returns() {
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
            <main className='flex-1 flex flex-col justify-center max-w-5xl mx-auto w-full px-6 sm:px-10 pt-6 sm:pt-28 pb-12 sm:pb-16 text-left'>
                {/* Header Masthead */}
                <div className='mb-10 sm:mb-14'>
                    <Badge className='inline-flex text-xs font-medium text-surface-foreground border border-border px-3 py-1 mb-4 gap-2 bg-background/80 backdrop-blur-sm'>
                        <HeartHandshake className='w-3 h-3 text-muted-foreground' />
                        Customer Care & Quality Guarantee
                    </Badge>

                    <h1 className='font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-surface-foreground mb-4 leading-tight'>
                        Returns & Refunds.
                    </h1>

                    <p className='font-sans text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl'>
                        All SCAPE pieces are bespoke physical commissions
                        tailored to your specific coordinates. Here is how our
                        return and damage policies operate.
                    </p>
                </div>

                {/* 2-Column Policy Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-10'>
                    {/* Card 1: Custom Order Policy */}
                    <div className='flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-background border border-border/80 shadow-xs'>
                        <div>
                            <div className='size-10 rounded-xl bg-primary/10 text-surface-foreground flex items-center justify-center mb-5'>
                                <Package className='w-5 h-5' />
                            </div>
                            <h2 className='font-display text-xl sm:text-2xl font-bold tracking-tight text-surface-foreground mb-3'>
                                Custom-Made to Order
                            </h2>
                            <p className='font-sans text-sm sm:text-base text-muted-foreground leading-relaxed'>
                                At <b>SCAPE by md</b>, all products are
                                custom-made to order based on the geographical
                                coordinates, elevation scale, and framing
                                finishes you specify. Because each item is
                                uniquely created for you, we cannot accept
                                returns, exchanges, or cancellations once
                                additive production and framing have commenced.
                            </p>
                        </div>
                        <div className='pt-4 mt-4 border-t border-border/60 text-xs text-muted-foreground/80 leading-relaxed'>
                            This policy is in full accordance with Norwegian and
                            EU consumer protection statutes, which legally
                            exempt personalized, custom-made goods from standard
                            cooling-off return rights.
                        </div>
                    </div>

                    {/* Card 2: Damaged / Defective Deliveries */}
                    <div className='flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-background border border-border/80 shadow-xs'>
                        <div>
                            <div className='size-10 rounded-xl bg-primary/10 text-surface-foreground flex items-center justify-center mb-5'>
                                <ShieldAlert className='w-5 h-5' />
                            </div>
                            <h2 className='font-display text-xl sm:text-2xl font-bold tracking-tight text-surface-foreground mb-3'>
                                Damaged in Transit
                            </h2>
                            <p className='font-sans text-sm sm:text-base text-muted-foreground leading-relaxed'>
                                If your item arrives damaged, defective, or
                                incorrect, please reach out to us within{' '}
                                <b>7 days</b> of parcel delivery. Please include
                                photographs of the packaging and the affected
                                frame or relief so our atelier can evaluate the
                                issue and immediately dispatch a priority
                                replacement.
                            </p>
                        </div>
                        <div className='pt-4 mt-4 border-t border-border/60'>
                            <a
                                href='/contact-us'
                                className='inline-flex items-center gap-1.5 text-xs font-semibold text-surface-foreground hover:underline underline-offset-4'
                            >
                                <span>Report a damaged item</span>
                                <ArrowRight className='w-3 h-3' />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Assurance Callout */}
                <div className='p-6 rounded-2xl bg-muted/40 border border-border/60 mb-12 sm:mb-16'>
                    <p className='text-sm sm:text-base text-foreground font-medium mb-1'>
                        Our Craft Commitment
                    </p>
                    <p className='text-xs sm:text-sm text-muted-foreground leading-relaxed'>
                        We want you to be entirely proud to display your Scape.
                        If there is ever an oversight or flaw on our part, we
                        will work directly with you to resolve it swiftly and
                        ensure you are delighted with your finished artwork.
                    </p>
                </div>

                {/* Separator and Signature Logo (Preserved as requested) */}
                <Separator
                    orientation='horizontal'
                    className='border-border w-42 sm:w-56 self-center mx-auto'
                />
                <div className='flex flex-col items-center my-8 text-center'>
                    <p className='text-xs font-display uppercase tracking-widest text-muted-foreground mb-3'>
                        Regards,
                    </p>
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

export default Returns;
