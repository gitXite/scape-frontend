import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation('checkout');
    const { t: tCustomizer } = useTranslation('customizer');
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
                                {t('confirmation.loading.title')}
                            </h1>
                            <p className='text-sm text-muted-foreground mt-2 max-w-sm mx-auto leading-relaxed'>
                                {t('confirmation.loading.desc')}
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
                                {t('confirmation.success.title')}
                            </h1>
                            <p className='text-sm sm:text-base text-muted-foreground mt-2 max-w-md mx-auto'>
                                {t('confirmation.success.desc')}
                            </p>

                            {orderId && (
                                <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-muted border border-border/60 text-xs font-mono text-muted-foreground mt-4'>
                                    <span>{t('confirmation.success.orderId')}</span>
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
                                    {t('confirmation.success.nextStepsTitle')}
                                </h2>
                                <span className='text-xs text-muted-foreground/80'>
                                    {t('confirmation.success.estimatedDispatch')}
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
                                            {t('confirmation.success.step1.title')}
                                        </p>
                                        <p className='text-[11px] text-muted-foreground mt-0.5 leading-snug'>
                                            {t('confirmation.success.step1.desc')}
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
                                            {t('confirmation.success.step2.title')}
                                        </p>
                                        <p className='text-[11px] text-muted-foreground mt-0.5 leading-snug'>
                                            {t('confirmation.success.step2.desc')}
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
                                            {t('confirmation.success.step3.title')}
                                        </p>
                                        <p className='text-[11px] text-muted-foreground mt-0.5 leading-snug'>
                                            {t('confirmation.success.step3.desc')}
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
                                            {t('confirmation.success.step4.title')}
                                        </p>
                                        <p className='text-[11px] text-muted-foreground mt-0.5 leading-snug'>
                                            {t('confirmation.success.step4.desc')}
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
                                {t('confirmation.success.summaryTitle')}
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
                                                {t('confirmation.success.modelTitle')}
                                            </p>
                                            <p className='text-xs text-muted-foreground'>
                                                {t('confirmation.success.modelSubtitle')}
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
                                            {t('confirmation.success.framePassepartout')}
                                        </p>
                                        <p className='text-xs text-muted-foreground capitalize'>
                                            {orderSnapshot.frame ? tCustomizer(`frame.options.${orderSnapshot.frame}.title`, { defaultValue: orderSnapshot.frame }) : ''} {t('confirmation.success.frameSuffix')} ·{' '}
                                            {orderSnapshot.passepartout ? tCustomizer(`passepartout.options.${orderSnapshot.passepartout}.title`, { defaultValue: orderSnapshot.passepartout }) : ''}{' '}
                                            {t('confirmation.success.matSuffix')}
                                        </p>
                                    </div>
                                    <span className='font-mono text-foreground font-medium'>
                                        148 kr
                                    </span>
                                </div>

                                <div className='flex items-center justify-between text-xs text-muted-foreground pt-1'>
                                    <span>{t('confirmation.success.shipping')}</span>
                                    <span className='font-mono'>49 kr</span>
                                </div>

                                <Separator className='my-3 border-border/40' />

                                <div className='flex justify-between items-baseline font-medium text-base text-foreground'>
                                    <span className='font-display font-semibold'>
                                        {t('confirmation.success.totalPaid')}
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
                                {t('confirmation.success.emailNotice')}{' '}
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
                                {t('confirmation.success.createAnother')}
                            </button>
                            <button
                                onClick={() => navigate('/')}
                                className='inline-flex w-full justify-center gap-2 px-6 py-3.5 rounded-full border border-border bg-background text-surface-foreground text-xs sm:text-sm font-medium hover:bg-muted transition-colors cursor-pointer'
                            >
                                {t('confirmation.success.backToHome')}
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
                                ? t('confirmation.cancelled.title')
                                : t('confirmation.expired.title')}
                        </h1>

                        <p className='text-sm text-muted-foreground mt-2 max-w-md mx-auto leading-relaxed'>
                            {status === 'cancelled'
                                ? t('confirmation.cancelled.desc')
                                : t('confirmation.expired.desc')}
                        </p>

                        <div className='w-full my-6 p-4 rounded-xl bg-muted/40 border border-border/60 text-left text-xs text-muted-foreground space-y-1.5'>
                            <p className='font-medium text-foreground'>
                                {t('confirmation.readyToComplete')}
                            </p>
                            <p>
                                {t('confirmation.readyToCompleteDesc')}
                            </p>
                        </div>

                        <div className='w-full flex flex-col sm:flex-row items-center gap-3'>
                            <button
                                onClick={() => navigate('/checkout')}
                                className='inline-flex w-full group justify-center gap-2.5 px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold transition-all duration-200 hover:bg-primary-foreground hover:text-secondary-foreground shadow-sm cursor-pointer'
                            >
                                {t('confirmation.returnToCheckout')}
                            </button>
                            <button
                                onClick={() => navigate('/')}
                                className='inline-flex w-full justify-center gap-2 px-6 py-3.5 rounded-full border border-border bg-background text-surface-foreground text-xs sm:text-sm font-medium hover:bg-muted transition-colors cursor-pointer'
                            >
                                {t('confirmation.success.backToHome')}
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
                            {t('confirmation.notFound.title')}
                        </h1>

                        <p className='text-sm text-muted-foreground mt-2 max-w-sm mx-auto leading-relaxed'>
                            {t('confirmation.notFound.desc')}
                        </p>

                        <div className='w-full flex flex-col sm:flex-row items-center gap-3 mt-8'>
                            <button
                                onClick={() => navigate('/get-started')}
                                className='inline-flex w-full group justify-center gap-2.5 px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold transition-all duration-200 hover:bg-primary-foreground hover:text-secondary-foreground shadow-sm cursor-pointer'
                            >
                                {t('confirmation.notFound.createAScape')}
                            </button>
                            <button
                                onClick={() => navigate('/')}
                                className='inline-flex w-full justify-center gap-2 px-6 py-3.5 rounded-full border border-border bg-background text-surface-foreground text-xs sm:text-sm font-medium hover:bg-muted transition-colors cursor-pointer'
                            >
                                {t('confirmation.notFound.backToHome')}
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
                            {t('confirmation.error.title')}
                        </h1>

                        <p className='text-sm text-muted-foreground mt-2 max-w-sm mx-auto leading-relaxed'>
                            {t('confirmation.error.desc')}
                        </p>

                        <div className='w-full flex flex-col sm:flex-row items-center gap-3 mt-8'>
                            <button
                                onClick={() => window.location.reload()}
                                className='inline-flex w-full justify-center gap-2 px-6 py-3.5 rounded-full border border-border bg-background text-surface-foreground text-xs sm:text-sm font-medium hover:bg-muted transition-colors cursor-pointer'
                            >
                                {t('confirmation.error.checkAgain')}
                            </button>
                            <button
                                onClick={() => {
                                    localStorage.removeItem('reference');
                                    navigate('/');
                                }} 
                                className='inline-flex w-full justify-center gap-2 px-6 py-3.5 rounded-full text-destructive border border-destructive bg-background text-xs sm:text-sm font-medium hover:bg-destructive/10 transition-colors cursor-pointer'>
                                {t('confirmation.error.cancel')}
                            </button>
                        </div>
                        <div className='w-full mt-4'>
                            <button
                                onClick={() => navigate('/checkout')}
                                className='inline-flex w-full group justify-center gap-2.5 px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold transition-all duration-200 hover:bg-primary-foreground hover:text-secondary-foreground shadow-sm cursor-pointer'
                            >
                                {t('confirmation.error.backToCheckout')}
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
