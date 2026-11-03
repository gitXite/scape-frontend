import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Truck, PackageCheck, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

function Shipping() {
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
                {/* Header */}
                <div className='mb-10 sm:mb-14'>
                    <Badge className='inline-flex text-xs font-medium text-surface-foreground border border-border px-3 py-1 mb-4 gap-2 bg-background/80 backdrop-blur-sm'>
                        <Truck className='w-3 h-3 text-muted-foreground' />
                        Domestic Delivery (Norway)
                    </Badge>
                    <h1 className='font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-surface-foreground mb-4 leading-tight'>
                        Orders & Shipping.
                    </h1>
                    <p className='font-sans text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl'>
                        All pieces are crafted to order in our Bergen studio and
                        delivered across Norway via Posten.
                    </p>
                </div>

                {/* 2-Column Editorial Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-12 sm:mb-16'>
                    {/* Shipping Section */}
                    <div className='flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-background border border-border/80 shadow-xs'>
                        <div>
                            <div className='size-10 rounded-xl bg-primary/10 text-surface-foreground flex items-center justify-center mb-5'>
                                <Truck className='w-5 h-5' />
                            </div>
                            <h2 className='font-display text-xl sm:text-2xl font-bold tracking-tight text-surface-foreground mb-3'>
                                Shipping
                            </h2>
                            <p className='font-sans text-sm sm:text-base text-muted-foreground leading-relaxed'>
                                We offer shipping through Posten directly
                                integrated in Vipps, making delivery fast and
                                convenient. Once your package is on its way,
                                you’ll receive tracking information so you can
                                follow the shipment in real time. Delivery times
                                vary depending on your location, but Posten
                                typically provides quick and reliable service
                                across Norway.
                            </p>
                        </div>
                    </div>

                    {/* Orders Section */}
                    <div className='flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-background border border-border/80 shadow-xs'>
                        <div>
                            <div className='size-10 rounded-xl bg-primary/10 text-surface-foreground flex items-center justify-center mb-5'>
                                <PackageCheck className='w-5 h-5' />
                            </div>
                            <h2 className='font-display text-xl sm:text-2xl font-bold tracking-tight text-surface-foreground mb-3'>
                                Orders
                            </h2>
                            <p className='font-sans text-sm sm:text-base text-muted-foreground leading-relaxed mb-6'>
                                When you place an order with us, it is processed
                                immediately and you’ll receive a confirmation by
                                email as soon as payment is completed. We’ll
                                start production as soon as possible, but
                                production times may vary depending on the
                                number of pending orders. If anything is unclear
                                or you need to make changes before your order is
                                shipped, contact our support team as soon as
                                possible - we’re always here to help ensure the
                                process is smooth and predictable.
                            </p>
                        </div>
                        <div className='pt-4 border-t border-border/60'>
                            <p className='text-sm text-muted-foreground flex items-center gap-1.5'>
                                Need help with an order?{' '}
                                <a
                                    href='/contact-us'
                                    className='font-semibold text-surface-foreground underline underline-offset-4 hover:opacity-80 inline-flex items-center gap-1'
                                >
                                    Contact us here
                                    <ArrowRight className='w-3 h-3' />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Separator and Signature Logo (Preserved as requested) */}
                <Separator
                    orientation='horizontal'
                    className='border-border w-1/4 max-lg:w-1/2 self-center'
                />
                <div className='flex flex-col items-center mt-8 text-center'>
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

export default Shipping;
