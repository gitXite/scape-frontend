import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router';
import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Spinner } from '@/components/ui/shadcn-io/spinner/spinner';
import {
    CheckCircle2,
    RotateCcw,
    Mail,
    AlertCircle,
    PackageCheck,
    Compass,
    Layers,
    Truck,
    Frame,
} from 'lucide-react';

type OrderStatus =
    | 'loading'
    | 'success'
    | 'cancelled'
    | 'expired'
    | 'not_found'
    | 'error';

interface OrderSnapshot {
    frame: string;
    passepartout: string;
    reference: string;
}

function OrderConfirmation() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const paramReference = searchParams.get('reference');
    const localReference = localStorage.getItem('reference');
    const reference = paramReference || localReference || '';

    const [status, setStatus] = useState<OrderStatus>('loading');
    const [orderId, setOrderId] = useState<string>(reference);
    const [orderSnapshot] = useState<OrderSnapshot>(() => ({
        frame: localStorage.getItem('selectedFrame') || '',
        passepartout: localStorage.getItem('selectedPassePartout') || '',
        reference: reference,
    }));

    useEffect(() => {
        if (!reference) {
            setStatus('not_found');
            return;
        }

        let isMounted = true;
        let attempts = 0;
        const maxAttempts = 4;

        async function verifyPayment() {
            try {
                const res = await fetch(
                    `${import.meta.env.VITE_APP_API_URL}/api/checkout?reference=${reference}`,
                );
                const data = await res.json();
                const paymentStatus =
                    typeof data === 'string'
                        ? data
                        : data?.status || data?.data;

                if (!isMounted) return;

                if (paymentStatus === 'PaymentSuccessful') {
                    setOrderId(reference);
                    setStatus('success');

                    // Clear cart & customization localStorage now that payment is confirmed
                    localStorage.removeItem('reference');
                    localStorage.removeItem('coordinates');
                    localStorage.removeItem('verticalScale');
                    localStorage.removeItem('boxSize');
                    localStorage.removeItem('selectedFrame');
                    localStorage.removeItem('selectedPassePartout');
                    localStorage.setItem('step', '0');

                    setTimeout(() => {
                        window.dispatchEvent(new Event('coordinates-updated'));
                        window.dispatchEvent(new Event('frame-removed'));
                        window.dispatchEvent(
                            new Event('passe-partout-removed'),
                        );
                    });
                } else if (paymentStatus === 'PaymentTerminated') {
                    setStatus('cancelled');
                    // Only remove the stale transaction reference so user's map customization is preserved
                    localStorage.removeItem('reference');
                } else if (paymentStatus === 'SessionExpired') {
                    setStatus('expired');
                    localStorage.removeItem('reference');
                } else {
                    // Pending state or intermediate Vipps status
                    attempts++;
                    if (attempts < maxAttempts) {
                        setTimeout(verifyPayment, 1800);
                    } else {
                        setStatus('error');
                    }
                }
            } catch (err) {
                console.error('Error verifying payment callback:', err);
                if (isMounted) {
                    attempts++;
                    if (attempts < maxAttempts) {
                        setTimeout(verifyPayment, 1800);
                    } else {
                        setStatus('error');
                    }
                }
            }
        }

        verifyPayment();

        return () => {
            isMounted = false;
        };
    }, [reference]);

    return (
        <div className='flex flex-col min-h-screen w-full bg-neutral-100 text-foreground font-sans'>
            <BackButton page='home' />

            <main className='flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16'>
                {/* Brand Logo Header */}
                <div className='flex flex-col items-center mb-6 sm:mb-8 text-center'>
                    <h2 className='text-2xl sm:text-3xl font-display tracking-[0.2em] mb-1 text-foreground whitespace-nowrap'>
                        <span>SC</span>
                        <span className='tracking-normal'>/\</span>
                        <span className='pl-1.5'>PE</span>
                    </h2>
                    <p className='text-xs tracking-widest text-muted-foreground'>
                        by md
                    </p>
                </div>

                {/* 1. Loading State */}
                {status === 'loading' && (
                    <div className='w-full max-w-lg bg-background border border-border/80 rounded-2xl shadow-sm p-8 sm:p-12 text-center flex flex-col items-center gap-5'>
                        <div className='w-14 h-14 rounded-full bg-muted flex items-center justify-center text-foreground'>
                            <Spinner variant='circle' className='w-6 h-6' />
                        </div>
                        <div>
                            <h1 className='text-xl sm:text-2xl font-display font-semibold tracking-tight text-foreground'>
                                Verifying payment status
                            </h1>
                            <p className='text-sm text-muted-foreground mt-2 max-w-sm mx-auto leading-relaxed'>
                                Connecting to Vipps to confirm your transaction.
                                Please do not close this window...
                            </p>
                        </div>
                    </div>
                )}

                {/* 2. Success State */}
                {status === 'success' && (
                    <div className='w-full max-w-2xl bg-background border border-border/80 rounded-2xl shadow-sm p-6 sm:p-10'>
                        {/* Header badge */}
                        <div className='text-center'>
                            <div className='w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center mx-auto mb-4'>
                                <CheckCircle2 className='w-8 h-8 stroke-[2]' />
                            </div>
                            <h1 className='text-2xl sm:text-3xl font-display font-bold tracking-tight text-foreground'>
                                Order Confirmed
                            </h1>
                            <p className='text-sm sm:text-base text-muted-foreground mt-2 max-w-md mx-auto'>
                                Takk for din bestilling! We’ve received your
                                order and we will begin preparing your custom
                                Scape.
                            </p>

                            {orderId && (
                                <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-muted border border-border/60 text-xs font-mono text-muted-foreground mt-4'>
                                    <span>Order ID:</span>
                                    <span className='font-semibold text-foreground tracking-wider'>
                                        #{orderId}
                                    </span>
                                </div>
                            )}
                        </div>

                        <Separator
                            className='my-8 border-border/60'
                            orientation='horizontal'
                        />

                        {/* Craft & Delivery Process */}
                        <div className='space-y-4'>
                            <div className='flex items-center justify-between'>
                                <h2 className='text-xs font-semibold uppercase tracking-wider text-muted-foreground'>
                                    What happens next
                                </h2>
                                <span className='text-xs text-muted-foreground/80'>
                                    Estimated dispatch: 2-4 business days
                                </span>
                            </div>

                            <div className='grid grid-cols-1 sm:grid-cols-4 gap-3'>
                                <div className='flex sm:flex-col items-start gap-3 p-3.5 rounded-xl bg-muted/30 border border-border/50'>
                                    <div className='w-7 h-7 rounded-full bg-foreground text-background flex items-center justify-center shrink-0 text-xs font-semibold'>
                                        01
                                    </div>
                                    <div>
                                        <p className='text-xs font-semibold text-foreground flex items-center gap-1.5'>
                                            <Layers className='w-3.5 h-3.5 text-muted-foreground' />{' '}
                                            3D Printing
                                        </p>
                                        <p className='text-[11px] text-muted-foreground mt-0.5 leading-snug'>
                                            We start 3D printing your order as
                                            soon as possible.
                                        </p>
                                    </div>
                                </div>

                                <div className='flex sm:flex-col items-start gap-3 p-3.5 rounded-xl bg-muted/30 border border-border/50'>
                                    <div className='w-7 h-7 rounded-full bg-muted-foreground/20 text-foreground flex items-center justify-center shrink-0 text-xs font-semibold'>
                                        02
                                    </div>
                                    <div>
                                        <p className='text-xs font-semibold text-foreground flex items-center gap-1.5'>
                                            <Frame className='w-3.5 h-3.5 text-muted-foreground' />{' '}
                                            Framing
                                        </p>
                                        <p className='text-[11px] text-muted-foreground mt-0.5 leading-snug'>
                                            Hand-fitted into solid frames and
                                            apply final touches.
                                        </p>
                                    </div>
                                </div>

                                <div className='flex sm:flex-col items-start gap-3 p-3.5 rounded-xl bg-muted/30 border border-border/50'>
                                    <div className='w-7 h-7 rounded-full bg-muted-foreground/20 text-foreground flex items-center justify-center shrink-0 text-xs font-semibold'>
                                        03
                                    </div>
                                    <div>
                                        <p className='text-xs font-semibold text-foreground flex items-center gap-1.5'>
                                            <PackageCheck className='w-3.5 h-3.5 text-muted-foreground' />{' '}
                                            Quality Control
                                        </p>
                                        <p className='text-[11px] text-muted-foreground mt-0.5 leading-snug'>
                                            Thourougly inspect the final build-
                                            and print quality.
                                        </p>
                                    </div>
                                </div>

                                <div className='flex sm:flex-col items-start gap-3 p-3.5 rounded-xl bg-muted/30 border border-border/50'>
                                    <div className='w-7 h-7 rounded-full bg-muted-foreground/20 text-foreground flex items-center justify-center shrink-0 text-xs font-semibold'>
                                        04
                                    </div>
                                    <div>
                                        <p className='text-xs font-semibold text-foreground flex items-center gap-1.5'>
                                            <Truck className='w-3.5 h-3.5 text-muted-foreground' />{' '}
                                            Dispatch
                                        </p>
                                        <p className='text-[11px] text-muted-foreground mt-0.5 leading-snug'>
                                            Packaged and shipped with Posten,
                                            with tracking.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Separator
                            className='my-8 border-border/60'
                            orientation='horizontal'
                        />

                        {/* Order Summary Receipt */}
                        <div className='space-y-4'>
                            <h2 className='text-xs font-semibold uppercase tracking-wider text-muted-foreground'>
                                Order Summary
                            </h2>

                            <div className='space-y-3.5'>
                                <div className='flex items-center justify-between text-sm'>
                                    <div className='flex items-center gap-3.5'>
                                        <img
                                            src='/images/studio_product_model.webp'
                                            alt='Scape Model'
                                            className='w-12 h-12 rounded-lg object-cover bg-muted border border-border/60 shrink-0'
                                        />
                                        <div>
                                            <p className='font-medium text-foreground'>
                                                Scape
                                            </p>
                                            <p className='text-xs text-muted-foreground'>
                                                3D Topographic Model
                                            </p>
                                        </div>
                                    </div>
                                    <span className='font-mono text-foreground font-medium'>
                                        399 kr
                                    </span>
                                </div>

                                <div className='flex items-center justify-between text-sm pt-1'>
                                    <div>
                                        <p className='font-medium text-foreground'>
                                            Custom Frame & Passepartout
                                        </p>
                                        <p className='text-xs text-muted-foreground capitalize'>
                                            {orderSnapshot.frame || ''} frame ·{' '}
                                            {orderSnapshot.passepartout || ''}{' '}
                                            passepartout
                                        </p>
                                    </div>
                                    <span className='font-mono text-foreground font-medium'>
                                        148 kr
                                    </span>
                                </div>

                                <div className='flex items-center justify-between text-xs text-muted-foreground pt-1'>
                                    <span>Shipping (Posten Norge)</span>
                                    <span className='font-mono'>49 kr</span>
                                </div>

                                <Separator className='my-3 border-border/40' />

                                <div className='flex justify-between items-baseline font-medium text-base text-foreground'>
                                    <span className='font-display font-semibold'>
                                        Total Paid
                                    </span>
                                    <span className='font-display font-bold text-xl tabular-nums'>
                                        596 kr
                                    </span>
                                </div>
                            </div>
                        </div>

                        <Separator
                            className='my-8 border-border/60'
                            orientation='horizontal'
                        />

                        {/* Email and Support Notice */}
                        <div className='flex items-start gap-3.5 p-4 rounded-xl bg-muted/40 border border-border/60 text-xs text-muted-foreground'>
                            <Mail className='w-4 h-4 text-foreground shrink-0 mt-0.5' />
                            <p className='leading-relaxed'>
                                A complete receipt and tracking updates have
                                been sent to your email. If you need to make
                                changes or have questions before shipping,
                                contact us at{' '}
                                <a
                                    href='mailto:scapebymd@gmail.com'
                                    className='font-medium text-foreground underline underline-offset-2 hover:opacity-80'
                                >
                                    scapebymd@gmail.com
                                </a>
                                .
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className='flex flex-col sm:flex-row items-center gap-3.5 mt-8'>
                            <button
                                onClick={() => navigate('/get-started')}
                                className='inline-flex w-full group justify-center gap-2.5 px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold transition-all duration-200 hover:bg-primary-foreground hover:text-secondary-foreground shadow-sm cursor-pointer'
                            >
                                Create Another Scape
                            </button>
                            <button
                                onClick={() => navigate('/')}
                                className='inline-flex w-full justify-center gap-2 px-6 py-3.5 rounded-full border border-border bg-background text-surface-foreground text-xs sm:text-sm font-medium hover:bg-muted transition-colors cursor-pointer'
                            >
                                Back to Home
                            </button>
                        </div>
                    </div>
                )}

                {/* 3. Cancelled or Expired State */}
                {(status === 'cancelled' || status === 'expired') && (
                    <div className='w-full max-w-lg bg-background border border-border/80 rounded-2xl shadow-sm p-6 sm:p-10 text-center flex flex-col items-center'>
                        <div className='w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center mb-4'>
                            <RotateCcw className='w-8 h-8 stroke-[2]' />
                        </div>

                        <h1 className='text-2xl sm:text-3xl font-display font-bold tracking-tight text-foreground'>
                            {status === 'cancelled'
                                ? 'Checkout Cancelled'
                                : 'Session Expired'}
                        </h1>

                        <p className='text-sm text-muted-foreground mt-2 max-w-md mx-auto leading-relaxed'>
                            {status === 'cancelled'
                                ? 'Your payment was not completed and no funds were withdrawn. Your custom 3D terrain selection has been preserved so you can resume anytime.'
                                : 'The checkout session timed out before payment could be verified. No funds were charged, and your custom terrain selection is still saved.'}
                        </p>

                        <div className='w-full my-6 p-4 rounded-xl bg-muted/40 border border-border/60 text-left text-xs text-muted-foreground space-y-1.5'>
                            <p className='font-medium text-foreground'>
                                Ready to complete your piece?
                            </p>
                            <p>
                                You can return directly to checkout to retry
                                payment with Vipps, or return home.
                            </p>
                        </div>

                        <div className='w-full flex flex-col sm:flex-row items-center gap-3'>
                            <button
                                onClick={() => navigate('/checkout')}
                                className='inline-flex w-full group justify-center gap-2.5 px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold transition-all duration-200 hover:bg-primary-foreground hover:text-secondary-foreground shadow-sm cursor-pointer'
                            >
                                Return to Checkout
                            </button>
                            <button
                                onClick={() => navigate('/')}
                                className='inline-flex w-full justify-center gap-2 px-6 py-3.5 rounded-full border border-border bg-background text-surface-foreground text-xs sm:text-sm font-medium hover:bg-muted transition-colors cursor-pointer'
                            >
                                Back to Home
                            </button>
                        </div>
                    </div>
                )}

                {/* 4. Not Found / Direct Visit State */}
                {status === 'not_found' && (
                    <div className='w-full max-w-lg bg-background border border-border/80 rounded-2xl shadow-sm p-6 sm:p-10 text-center flex flex-col items-center'>
                        <div className='w-16 h-16 rounded-full bg-muted flex items-center justify-center text-muted-foreground mb-4'>
                            <Compass className='w-8 h-8 stroke-[1.5]' />
                        </div>

                        <h1 className='text-2xl font-display font-bold tracking-tight text-foreground'>
                            No Active Order Found
                        </h1>

                        <p className='text-sm text-muted-foreground mt-2 max-w-sm mx-auto leading-relaxed'>
                            We couldn’t find an order session to confirm. If you
                            recently completed a purchase, please check your
                            email inbox for your order receipt.
                        </p>

                        <div className='w-full flex flex-col sm:flex-row items-center gap-3 mt-8'>
                            <button
                                onClick={() => navigate('/get-started')}
                                className='inline-flex w-full group justify-center gap-2.5 px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold transition-all duration-200 hover:bg-primary-foreground hover:text-secondary-foreground shadow-sm cursor-pointer'
                            >
                                Create a Scape
                            </button>
                            <button
                                onClick={() => navigate('/')}
                                className='inline-flex w-full justify-center gap-2 px-6 py-3.5 rounded-full border border-border bg-background text-surface-foreground text-xs sm:text-sm font-medium hover:bg-muted transition-colors cursor-pointer'
                            >
                                Back to Home
                            </button>
                        </div>
                    </div>
                )}

                {/* 5. Error State */}
                {status === 'error' && (
                    <div className='w-full max-w-lg bg-background border border-border/80 rounded-2xl shadow-sm p-6 sm:p-10 text-center flex flex-col items-center'>
                        <div className='w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center mb-4'>
                            <AlertCircle className='w-8 h-8 stroke-[2]' />
                        </div>

                        <h1 className='text-2xl font-display font-bold tracking-tight text-foreground'>
                            Order Verification Pending
                        </h1>

                        <p className='text-sm text-muted-foreground mt-2 max-w-sm mx-auto leading-relaxed'>
                            We received your callback but could not immediately
                            verify payment status with Vipps. If your Vipps app
                            confirmed the transaction, your order has gone
                            through and your confirmation email is on its way.
                        </p>

                        <div className='w-full flex flex-col sm:flex-row items-center gap-3 mt-8'>
                            <button
                                onClick={() => window.location.reload()}
                                className='inline-flex w-full group justify-center gap-2.5 px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold transition-all duration-200 hover:bg-primary-foreground hover:text-secondary-foreground shadow-sm cursor-pointer'
                            >
                                Check Status Again
                            </button>
                            <button
                                onClick={() => navigate('/')}
                                className='inline-flex w-full justify-center gap-2 px-6 py-3.5 rounded-full border border-border bg-background text-surface-foreground text-xs sm:text-sm font-medium hover:bg-muted transition-colors cursor-pointer'
                            >
                                Back to Home
                            </button>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}

export default OrderConfirmation;
