import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { useCustomization } from '@/context/CustomizationContext';
import { toast } from 'sonner';

import { useState } from 'react';
import { Spinner } from './ui/shadcn-io/spinner/spinner';
import CheckoutPayment from './CheckoutPayment';
import type { Checkout } from '@/types';
import { ShieldCheck, Truck } from 'lucide-react';

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

    const frame = frameImages[frameType] ?? '';
    const passePartout = passePartoutImages[passePartoutType] ?? '';

    const coords = localStorage.getItem('coordinates');
    const verticalScale = localStorage.getItem('verticalScale');
    const boxSize = localStorage.getItem('boxSize');
    const reference = localStorage.getItem('reference');
    const checkout: Checkout = {
        coordinates: {
            north: JSON.parse(coords!).north,
            south: JSON.parse(coords!).south,
            east: JSON.parse(coords!).east,
            west: JSON.parse(coords!).west,
        },
        verticalScale: [parseFloat(verticalScale!)][0],
        scale: [parseInt(boxSize!)][0],
        frame: frameType,
        passepartout: passePartoutType,
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
            toast.error('Vipps error');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className='flex w-full justify-center'>
            {session ? (
                <CheckoutPayment session={session} />
            ) : (
                <div className='flex flex-col w-full max-w-xl mx-auto px-6 sm:px-10'>
                    <h1 className='text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-6'>
                        Order Summary
                    </h1>

                    <Separator orientation='horizontal' />

                    <div className='flex items-center gap-5 py-6'>
                        <div className='rounded-sm h-55 bg-muted flex-shrink-0 overflow-hidden'>
                            <img
                                src='/images/studio_product_model.webp'
                                alt='Model'
                                className='w-40 rounded-sm object-cover'
                            />
                        </div>
                        <div className='flex-1 min-w-0'>
                            <h2 className='text-lg font-medium text-foreground'>
                                Scape
                            </h2>
                            <p className='text-sm font-normal text-muted-foreground mt-0.5'>
                                Custom Made
                            </p>
                        </div>
                        <p className='font-normal text-foreground tabular-nums'>
                            399 kr
                        </p>
                    </div>

                    <Separator orientation='horizontal' />

                    <div className='flex h-65 items-center gap-5 py-6'>
                        <div className='w-40 h-28 rounded-lg bg-muted flex-shrink-0 overflow-hidden flex items-center justify-center'>
                            <img
                                src={frame}
                                alt='Frame'
                                className='w-40 rounded-sm z-2 absolute'
                            />
                            <img
                                src={passePartout}
                                alt='Passe Partout'
                                className='w-39 rounded-sm absolute'
                            />
                        </div>
                        <div className='flex-1 min-w-0'>
                            <h2 className='text-lg font-medium text-foreground'>
                                Frame & Passepartout
                            </h2>
                            <p className='forn-normal text-sm text-muted-foreground mt-0.5'>
                                {frameType.charAt(0).toUpperCase() +
                                    frameType.slice(1)}{' '}
                                Frame <span className='font-medium'>·</span>{' '}
                                {passePartoutType.charAt(0).toUpperCase() +
                                    passePartoutType.slice(1)}{' '}
                                Passepartout
                            </p>
                        </div>
                        <p className='font-normal text-foreground tabular-nums'>
                            148 kr
                        </p>
                    </div>

                    <Separator orientation='horizontal' />

                    <div className='flex flex-col gap-1 py-6'>
                        <div className='flex justify-between font-normal text-sm'>
                            <span className='text-muted-foreground'>
                                Subtotal
                            </span>
                            <span className='text-foreground tabular-nums'>
                                547 kr
                            </span>
                        </div>
                        <div className='flex justify-between font-normal text-sm'>
                            <span className='text-muted-foreground'>
                                Shipping
                            </span>
                            <span className='text-foreground tabular-nums'>
                                49 kr
                            </span>
                        </div>
                    </div>

                    <Separator orientation='horizontal' />

                    <div className='flex justify-between items-baseline py-6'>
                        <span className='font-display text-xl font-medium text-foreground'>
                            Total
                        </span>
                        <span className='font-display text-xl font-medium text-foreground tabular-nums'>
                            596 kr
                        </span>
                    </div>
                    {isLoading ? (
                        <Button
                            onClick={startCheckout}
                            disabled
                            className='h-12 w-3/9 self-center rounded-full bg-neutral-900 border-1 border-neutral-300 hover:bg-neutral-200 hover:text-neutral-900 active:bg-white cursor-pointer'
                        >
                            <Spinner variant={'ellipsis'} />
                        </Button>
                    ) : (
                        <Button
                            onClick={startCheckout}
                            className='h-12 w-3/9 self-center rounded-full bg-neutral-900 border-1 border-neutral-300 hover:bg-neutral-200 hover:text-neutral-900 active:bg-white cursor-pointer'
                        >
                            Order Now
                        </Button>
                    )}

                    <div className='flex items-center justify-center gap-6 mt-5 text-sm font-normal text-muted-foreground'>
                        <span className='flex items-center gap-1.5'>
                            <ShieldCheck className='w-3.5 h-3.5' />
                            Secure checkout
                        </span>
                        <span className='flex items-center gap-1.5'>
                            <Truck className='w-3.5 h-3.5' />
                            Fast delivery
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CheckoutSummary;
