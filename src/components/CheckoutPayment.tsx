import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Spinner } from './ui/shadcn-io/spinner/spinner';
import { Badge } from './ui/badge';
import { ShieldCheck } from 'lucide-react';

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
            toast.error('Failed to load Vipps Checkout SDK');
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
            console.error('VippsCheckout initialization error:', err);
        }
    }, [sdkReady, session]);

    if (!session) return null;

    return (
        <div className='flex flex-col w-full max-w-xl mx-auto px-4 sm:px-6 py-4 text-center items-center gap-6'>
            {/* Header */}
            <div>
                <Badge className='inline-flex text-xs font-medium text-surface-foreground border border-border px-3 py-1 mb-3 gap-2 bg-background/80 backdrop-blur-sm'>
                    <ShieldCheck className='w-3.5 h-3.5 text-emerald-600' />
                    Official Vipps Gateway
                </Badge>
                <h1 className='font-display text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight'>
                    Vipps Checkout.
                </h1>
                <p className='font-sans text-xs sm:text-sm text-muted-foreground mt-1'>
                    Complete your payment securely via the Vipps app or bank card below.
                </p>
            </div>

            {/* Vipps Container */}
            <div className='w-full min-h-[440px] rounded-2xl bg-background border border-border/80 shadow-xs overflow-hidden flex flex-col items-center justify-center p-2 sm:p-4'>
                {!sdkReady ? (
                    <div className='flex flex-col items-center justify-center gap-3 py-16 text-muted-foreground'>
                        <Spinner variant='circle' size={32} className='text-foreground' />
                        <span className='text-xs font-mono'>Connecting to Vipps secure portal...</span>
                    </div>
                ) : (
                    <div id='vipps-checkout-container' className='w-full min-h-[420px]' />
                )}
            </div>
        </div>
    );
}

export default CheckoutPayment;
