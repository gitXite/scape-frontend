import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Spinner } from './ui/shadcn-io/spinner/spinner';

interface CheckoutPaymentProps {
    session: {
        checkoutFrontendUrl: string;
        token: string;
        pollingUrl: string;
    } | null;
}

function CheckoutPayment({ session }: CheckoutPaymentProps) {
    const [sdkReady, setSdkReady] = useState(false);

    useEffect(() => {
        if (!session) return;

        const script = document.createElement('script');
        script.src = 'https://checkout.vipps.no/vippsCheckoutSDK.js';
        script.async = true;
        script.onload = () => setSdkReady(true);
        script.onerror = () => {
            toast.error('Failed to load Vipps SDK');
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [session]);

    useEffect(() => {
        if (!sdkReady || !session) return;

        try {
            window.VippsCheckout({
                token: session.token,
                checkoutFrontendUrl: session.checkoutFrontendUrl,
                iFrameContainerId: 'vipps-checkout-container',
            });
        } catch (err) {
            console.error('VippsCheckout callback failed', err);
        }
    }, [sdkReady, session]);

    if (!session) return null;
    
    return (
        <div className='flex flex-col h-full w-2/4 max-lg:w-full px-20 max-sm:px-0 text-neutral-900 text-center gap-10 text-xl font-medium'>
            <h1 className='text-3xl'>Vipps Checkout</h1>
            {!sdkReady ? (
                <Spinner variant='circle' />
            ) : (
                <div id='vipps-checkout-container' className='h-full w-full' />
            )}
        </div>
    );
}

export default CheckoutPayment;
