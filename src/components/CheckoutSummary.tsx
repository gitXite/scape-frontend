import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { useCustomization } from '@/context/CustomizationContext';
import { toast } from 'sonner';
import { useState } from 'react';
import { Spinner } from './ui/shadcn-io/spinner/spinner';
import CheckoutPayment from './CheckoutPayment';
import type { Checkout } from '@/types';
import { ShieldCheck, Truck, Lock, CreditCard } from 'lucide-react';
import { Badge } from './ui/badge';

const frameImages: Record<string, string> = {
    oak: '/images/frame_oak.webp',
    walnut: '/images/frame_walnut.webp',
    white: '/images/frame_white.webp',
    black: '/images/frame_black.webp',
};

const passePartoutImages: Record<string, string> = {
    white: '/images/passepartout_white.webp',
    black: '/images/passepartout_black.webp',
    without: '',
};

function CheckoutSummary() {
    const { frameType, passePartoutType } = useCustomization();
    const [isLoading, setIsLoading] = useState(false);
    const [session, setSession] = useState(null);

    const frame = frameImages[frameType] ?? frameImages.oak;
    const passePartout = passePartoutImages[passePartoutType] ?? passePartoutImages.white;

    const coords = localStorage.getItem('coordinates');
    const verticalScale = localStorage.getItem('verticalScale');
    const boxSize = localStorage.getItem('boxSize');
    const reference = localStorage.getItem('reference');

    const checkout: Checkout = {
        coordinates: {
            north: coords ? JSON.parse(coords).north : 60.4,
            south: coords ? JSON.parse(coords).south : 60.3,
            east: coords ? JSON.parse(coords).east : 5.4,
            west: coords ? JSON.parse(coords).west : 5.2,
        },
        zScale: verticalScale ? [parseFloat(verticalScale)][0] : 2.0,
        scale: boxSize ? [parseInt(boxSize)][0] : 100,
        frame: frameType || 'oak',
        passepartout: passePartoutType || 'white',
        reference: reference,
    };

    async function startCheckout() {
        setIsLoading(true);
        try {
            const response = await fetch(
                `${import.meta.env.VITE_APP_API_URL}/api/checkout`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(checkout),
                },
            );
            const { data, orderId } = await response.json();
            setSession(data);
            localStorage.setItem('reference', orderId);
        } catch (err) {
            toast.error('Failed to initiate Vipps checkout', {
                description: 'Please try again in a moment.',
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className='flex w-full justify-center'>
            {session ? (
                <CheckoutPayment session={session} />
            ) : (
                <div className='flex flex-col w-full max-w-xl mx-auto px-4 sm:px-6 text-left'>
                    {/* Header */}
                    <div className='mb-6 sm:mb-8 text-center sm:text-left'>
                        <Badge className='inline-flex text-xs font-medium text-surface-foreground border border-border px-3 py-1 mb-3 gap-2 bg-background/80 backdrop-blur-sm'>
                            Review & Pay
                        </Badge>
                        <h1 className='font-display text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight'>
                            Order Summary.
                        </h1>
                        <p className='font-sans text-sm sm:text-base text-muted-foreground mt-1'>
                            Verify your custom configuration before proceeding to secure Vipps checkout.
                        </p>
                    </div>

                    {/* Order Receipt Card */}
                    <div className='rounded-2xl bg-background border border-border/80 shadow-xs p-6 sm:p-8 space-y-6'>
                        {/* Item 1: Topographic Model */}
                        <div className='flex items-center gap-4 sm:gap-5'>
                            <div className='size-18 sm:size-20 rounded-xl bg-muted border border-border/60 shrink-0 overflow-hidden flex items-center justify-center'>
                                <img
                                    src='/images/studio_product_model.webp'
                                    alt='Custom 3D Topographic Relief'
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <div className='flex-1 min-w-0'>
                                <div className='flex items-center gap-2'>
                                    <h2 className='text-base sm:text-lg font-display font-bold text-foreground'>
                                        The Scape
                                    </h2>
                                    <span className='text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-muted text-muted-foreground'>
                                        3D printed
                                    </span>
                                </div>
                                <p className='text-xs sm:text-sm text-muted-foreground mt-0.5'>
                                    14 × 19 cm (A5 format) · Made to order
                                </p>
                            </div>
                            <p className='font-mono font-semibold text-foreground text-sm sm:text-base tabular-nums'>
                                399 kr
                            </p>
                        </div>

                        <Separator className='border-border/60' orientation='horizontal' />

                        {/* Item 2: Frame & Passepartout */}
                        <div className='flex items-center gap-4 sm:gap-5'>
                            <div className='size-18 sm:size-20 rounded-xl bg-muted/60 border border-border/60 shrink-0 overflow-hidden flex items-center justify-center relative p-1.5'>
                                <img
                                    src={frame}
                                    alt='Selected Frame'
                                    className='w-full h-full object-contain z-2 absolute inset-0 p-1.5'
                                />
                                {passePartout && (
                                    <img
                                        src={passePartout}
                                        alt='Selected Passepartout'
                                        className='w-[88%] h-[88%] object-contain z-1 absolute'
                                    />
                                )}
                            </div>
                            <div className='flex-1 min-w-0'>
                                <h2 className='text-base sm:text-lg font-display font-bold text-foreground capitalize'>
                                    {frameType || 'Oak'} Frame
                                </h2>
                                <p className='text-xs sm:text-sm text-muted-foreground mt-0.5 capitalize'>
                                    {passePartoutType ? `${passePartoutType} Passepartout` : 'White Passepartout'}
                                </p>
                            </div>
                            <p className='font-mono font-semibold text-foreground text-sm sm:text-base tabular-nums'>
                                148 kr
                            </p>
                        </div>

                        <Separator className='border-border/60' orientation='horizontal' />

                        {/* Price Breakdown */}
                        <div className='space-y-2 text-sm'>
                            <div className='flex justify-between font-normal'>
                                <span className='text-muted-foreground'>Subtotal</span>
                                <span className='font-mono text-foreground tabular-nums'>547 kr</span>
                            </div>
                            <div className='flex justify-between font-normal'>
                                <span className='text-muted-foreground flex items-center gap-1.5'>
                                    <span>Tracked Shipping (Posten Norge)</span>
                                </span>
                                <span className='font-mono text-foreground tabular-nums'>49 kr</span>
                            </div>
                        </div>

                        <Separator className='border-border/60' orientation='horizontal' />

                        {/* Total Row */}
                        <div className='flex justify-between items-baseline pt-1'>
                            <div>
                                <span className='font-display text-lg sm:text-xl font-bold text-foreground block'>
                                    Total Amount
                                </span>
                                <span className='text-xs text-muted-foreground'>
                                    Includes 25% MVA & nationwide shipping
                                </span>
                            </div>
                            <span className='font-display text-2xl sm:text-3xl font-extrabold text-foreground tabular-nums'>
                                596 kr
                            </span>
                        </div>

                        {/* Vipps Checkout Banner */}
                        <div className='p-4 rounded-xl bg-[#ff5b24]/[0.06] border border-[#ff5b24]/20 flex items-center justify-between gap-4'>
                            <div className='flex items-center gap-3'>
                                <div className='size-2.5 rounded-full bg-[#ff5b24] shrink-0' />
                                <div>
                                    <p className='text-xs sm:text-sm font-semibold text-foreground'>
                                        Vipps Checkout
                                    </p>
                                    <p className='text-[11px] text-muted-foreground leading-tight mt-0.5'>
                                        Pay instantly with the Vipps app or Bank Card (Visa / Mastercard)
                                    </p>
                                </div>
                            </div>
                            <img
                                src='/images/Vipps-Logo.wine.png'
                                alt='Vipps Logo'
                                className='h-6 sm:h-7 object-contain shrink-0'
                            />
                        </div>

                        {/* Action CTA Button */}
                        <div className='pt-2'>
                            {isLoading ? (
                                <Button
                                    onClick={startCheckout}
                                    disabled
                                    className='h-13 w-full rounded-full bg-foreground text-background border border-border opacity-80 cursor-not-allowed flex items-center shadow-xs justify-center'
                                >
                                    <Spinner variant='ellipsis' />
                                </Button>
                            ) : (
                                <Button
                                    onClick={startCheckout}
                                    className='group h-13 w-full rounded-full bg-foreground text-background font-semibold text-sm sm:text-base hover:bg-primary-foreground hover:text-primary transition-all shadow-xs border border-border flex items-center justify-center gap-2.5 cursor-pointer'
                                >
                                    <span>Pay with Vipps</span>
                                    {/* <span className='font-mono font-normal opacity-80'>· 596 kr</span> */}
                                    <CreditCard className='w-4 h-4 ml-1 transition-all' />
                                </Button>
                            )}
                        </div>

                        {/* Trust & Guarantee Badges */}
                        <div className='pt-4 border-t border-border/50 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-muted-foreground'>
                            <span className='flex items-center gap-1.5'>
                                <ShieldCheck className='w-4 h-4 text-emerald-600 dark:text-emerald-400' />
                                Secure Vipps Checkout
                            </span>
                            <span className='flex items-center gap-1.5'>
                                <Truck className='w-4 h-4 text-foreground' />
                                Posten Tracked Delivery
                            </span>
                            <span className='flex items-center gap-1.5'>
                                <Lock className='w-3.5 h-3.5 text-foreground' />
                                TLS Encrypted
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CheckoutSummary;
