import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { useCustomization } from '@/context/CustomizationContext';
import { toast } from 'sonner';

import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Spinner } from './ui/shadcn-io/spinner/spinner';

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

interface Checkout {
    lat: number;
    lng: number;
    verticalScale: number;
    scale: number;
}

function CheckoutSummary() {
    const navigate = useNavigate();
    const { frameType, passePartoutType } = useCustomization();
    const [isLoading, setIsLoading] = useState(false);

    const frame = frameImages[frameType] ?? '';
    const passePartout = passePartoutImages[passePartoutType] ?? '';

    const coords = localStorage.getItem('coordinates');
    const verticalScale = localStorage.getItem('verticalScale');
    const boxSize = localStorage.getItem('boxSize');
    const checkout: Checkout = {
        lat: JSON.parse(coords!).north,
        lng: JSON.parse(coords!).west,
        verticalScale: [parseFloat(verticalScale!)][0],
        scale: [parseInt(boxSize!)][0],
    };

    const sendSTL = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(
                `${import.meta.env.VITE_APP_API_URL}/api/order/send`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(checkout),
                }
            );
            const data = await response.json();
            if (!data.ok) {
                setIsLoading(false);
                toast.error(data.message, {
                    description: 'Something went wrong'
                });
                return;
            }

            setIsLoading(false);
            toast.success(data.message, {
                description: 'Check your email',
            });

            localStorage.removeItem('coordinates');
            localStorage.removeItem('verticalScale');
            localStorage.removeItem('boxSize');
            localStorage.removeItem('selectedFrame');
            localStorage.removeItem('selectedPassePartout');
            localStorage.setItem('step', '0');
            setTimeout(() => {
                window.dispatchEvent(new Event('coordinates-updated'));
                window.dispatchEvent(new Event('frame-removed'));
                window.dispatchEvent(new Event('passe-partout-removed'));
            });

            navigate('/');
        } catch (err: any) {
            setIsLoading(false);
            toast.error(`${err.message}`, {
                description: 'Please try again later',
            });
            console.error('Error:', err);
        }
    };

    return (
        <div className='flex-col h-full w-2/4 px-20 text-center content-center'>
            <div className='flex-col pb-5'>
                <h1 className='relative bottom-5 pb-5 text-neutral-900 text-xl font-medium'>
                    Order Summary
                </h1>
                <Separator
                    orientation='horizontal'
                    className='relative bottom-5'
                />
                <div className='flex justify-between items-center py-5 font-normal tracking-wide'>
                    <img
                        src='/images/studio_product_model.webp'
                        alt='Model'
                        className='w-50 rounded-sm object-cover'
                    />
                    <h2 className='text-neutral-900'>Scape</h2>
                    <p className='text-neutral-600'>349kr</p>
                </div>
                <div className='flex justify-between items-center py-2 font-normal tracking-wide'>
                    <div className='flex h-60 w-40 justify-center items-center'>
                        {frameType && (
                            <img
                                src={frame}
                                alt='Frame'
                                className='w-40 rounded-sm z-2 absolute'
                            />
                        )}
                        {passePartoutType && (
                            <img
                                src={passePartout}
                                alt='Passe Partout'
                                className='w-39 rounded-sm absolute'
                            />
                        )}
                    </div>
                    <h2 className='text-neutral-900'>Frame & Passepartout</h2>
                    <p className='text-neutral-600'>148kr</p>
                </div>
            </div>
            <Separator orientation='horizontal' />
            <div className='flex flex-col pt-5 pb-5'>
                <div className='flex justify-between pb-2 font-normal tracking-wide'>
                    <p className='text-neutral-900'>Subtotal</p>
                    <p className='text-neutral-600'>497kr</p>
                </div>
                {/* <div className='flex justify-between font-normal tracking-wide'>
                    <p className='text-neutral-900 pb-2'>Tax Included</p>
                    <p className='text-neutral-600'>124.25kr</p>
                </div> */}
                <div className='flex justify-between font-normal tracking-wide'>
                    <p className='text-neutral-900'>Shipping</p>
                    <p className='text-neutral-600'>TBD</p>
                </div>
            </div>
            <Separator orientation='horizontal' />
            <div className='flex justify-between py-5 font-medium tracking-wide'>
                <h1 className='text-neutral-900'>Total</h1>
                <p className='text-neutral-900'>497kr</p>
            </div>
            {isLoading ? (
                <Button
                    onClick={sendSTL}
                    disabled
                    className='h-12 w-3/9 rounded-full bg-neutral-900 border-1 border-neutral-300 hover:bg-neutral-200 hover:text-neutral-900 active:bg-white cursor-pointer'
                >
                    <Spinner variant={'ellipsis'} />
                </Button>
            ) : (
                <Button
                    onClick={sendSTL}
                    disabled
                    className='h-12 w-3/9 rounded-full bg-neutral-900 border-1 border-neutral-300 hover:bg-neutral-200 hover:text-neutral-900 active:bg-white cursor-pointer'
                >
                    Order Now
                </Button>
            )}
        </div>
    );
}

export default CheckoutSummary;
