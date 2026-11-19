import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import StarRating from '@/components/ui/starRating';
import { Spinner } from './ui/shadcn-io/spinner/spinner';
import { toast } from 'sonner';
import {
    CheckCircle2,
    Sparkles,
    ArrowRight,
    PackageCheck,
    MessageSquare,
    RotateCcw,
    SendHorizonal,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useTranslation } from 'react-i18next';

function Feedback() {
    const { t } = useTranslation('pages');
    const [userRating, setUserRating] = useState(0);
    const [submittedRating, setSubmittedRating] = useState<number | null>(
        () => {
            const storedRating = localStorage.getItem('feedbackRating');
            return storedRating ? Number(storedRating) : null;
        },
    );
    const [submittedMessage, setSubmittedMessage] = useState<string>(() => {
        return localStorage.getItem('feedbackMessage') || '';
    });
    const [submittedOrderId, setSubmittedOrderId] = useState<string>(() => {
        return localStorage.getItem('orderId') || '';
    });

    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [orderId, setOrderId] = useState<string>(() => {
        try {
            const params = new URLSearchParams(window.location.search);
            const fromParam = params.get('orderId') || params.get('reference');
            if (fromParam) return fromParam;
        } catch {
            // ignore
        }
        return (
            localStorage.getItem('reference') ||
            localStorage.getItem('orderId') ||
            ''
        );
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmitReview = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (userRating === 0) {
            toast.error(t('feedback.form.toast.selectRating'));
            return;
        }
        if (!orderId.trim()) {
            toast.error(t('feedback.form.toast.orderId'));
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch(
                `${import.meta.env.VITE_APP_API_URL}/api/reviews`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        rating: userRating,
                        message: feedbackMessage.trim(),
                        orderID: orderId.trim(),
                    }),
                },
            );

            if (!response.ok) {
                const data = await response.json().catch(() => ({}));
                toast.error(data.message || t('feedback.form.toast.error'), {
                    description: t('feedback.form.toast.errorDesc'),
                });
                setIsLoading(false);
                return;
            }

            localStorage.setItem('feedbackRating', userRating.toString());
            localStorage.setItem('feedbackMessage', feedbackMessage.trim());
            localStorage.setItem('orderId', orderId.trim());

            toast.success(t('feedback.form.toast.received'), {
                description: t('feedback.form.toast.receivedDesc'),
            });

            setSubmittedRating(userRating);
            setSubmittedMessage(feedbackMessage.trim());
            setSubmittedOrderId(orderId.trim());
            setIsLoading(false);
        } catch (err: any) {
            toast.error(err.message || t('feedback.form.toast.networkError'), {
                description: t('feedback.form.toast.networkErrorDesc'),
            });
            setIsLoading(false);
        }
    };

    const handleReset = () => {
        localStorage.removeItem('feedbackRating');
        localStorage.removeItem('feedbackMessage');
        localStorage.removeItem('orderId');
        setSubmittedRating(null);
        setSubmittedMessage('');
        setSubmittedOrderId('');
        setUserRating(0);
        setFeedbackMessage('');
    };

    return (
        <div className='w-full max-w-xl mx-auto'>
            {!submittedRating ? (
                <div className='w-full flex flex-col items-center'>
                    {/* Header Masthead */}
                    <div className='text-left sm:text-center mb-8 sm:mb-10 w-full'>
                        <Badge className='inline-flex text-xs font-medium text-surface-foreground border border-border px-3.5 py-1 gap-2 bg-background/80 backdrop-blur-sm mb-4'>
                            <Sparkles className='size-3 text-primary' />
                            {t('feedback.header.badge')}
                        </Badge>

                        <h1 className='font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-surface-foreground mb-4 leading-tight'>
                            {t('feedback.header.title')}
                        </h1>

                        <p className='font-sans text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg sm:mx-auto'>
                            {t('feedback.header.lead')}
                        </p>
                    </div>

                    {/* Feedback Form Card */}
                    <form
                        onSubmit={handleSubmitReview}
                        className='w-full p-6 sm:p-8 rounded-2xl bg-background border border-border/80 shadow-xs space-y-6 text-left'
                    >
                        {/* Rating Section */}
                        <div className='p-5 rounded-xl bg-surface/40 border border-border/60 text-center space-y-3'>
                            <label className='block font-display text-sm sm:text-base font-bold text-foreground'>
                                {t('feedback.form.ratingQuestion')}
                            </label>
                            <div className='flex flex-col items-center gap-2'>
                                <StarRating
                                    rating={userRating}
                                    onRatingChange={setUserRating}
                                    size='lg'
                                    className='justify-center py-1'
                                />
                                <p className='text-xs font-mono font-medium text-muted-foreground min-h-[1.25rem] transition-all'>
                                    {userRating > 0
                                        ? t(`feedback.form.ratings.${userRating}`)
                                        : t('feedback.form.selectPrompt')}
                                </p>
                            </div>
                        </div>

                        {/* Written Message */}
                        <div className='space-y-2'>
                            <div className='flex items-center justify-between'>
                                <label
                                    htmlFor='feedback-message'
                                    className='font-display text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5'
                                >
                                    <MessageSquare className='size-3.5 text-muted-foreground' />
                                    <span>{t('feedback.form.experienceLabel')}</span>
                                </label>
                                <span className='text-[11px] font-mono text-muted-foreground'>
                                    {t('feedback.form.optional')}
                                </span>
                            </div>
                            <textarea
                                id='feedback-message'
                                value={feedbackMessage}
                                onChange={(e) =>
                                    setFeedbackMessage(e.target.value)
                                }
                                placeholder={t('feedback.form.messagePlaceholder')}
                                className='w-full min-h-[120px] rounded-xl border border-border/80 bg-surface/30 p-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-y leading-relaxed'
                            />
                        </div>

                        {/* Order ID */}
                        <div className='space-y-2'>
                            <div className='flex items-center justify-between'>
                                <label
                                    htmlFor='order-id'
                                    className='font-display text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5'
                                >
                                    <PackageCheck className='size-3.5 text-muted-foreground' />
                                    <span>{t('feedback.form.orderLabel')}</span>
                                    <span className='text-destructive'>*</span>
                                </label>
                                <span className='text-[11px] font-mono text-muted-foreground'>
                                    {t('feedback.form.required')}
                                </span>
                            </div>
                            <input
                                id='order-id'
                                type='text'
                                value={orderId}
                                onChange={(e) => setOrderId(e.target.value)}
                                placeholder={t('feedback.form.orderPlaceholder')}
                                className='w-full rounded-xl border border-border/80 bg-surface/30 px-4 py-3 text-sm font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all'
                                required
                            />
                            <p className='text-[11px] text-muted-foreground font-sans pl-1'>
                                {t('feedback.form.orderHint')}
                            </p>
                        </div>

                        <Separator className='border-border/60 my-2' />

                        {/* Action Submit Button */}
                        <div className='pt-1 flex flex-col sm:flex-row items-center justify-between gap-3'>
                            <p className='text-xs text-muted-foreground/80 font-sans text-center sm:text-left'>
                                {t('feedback.form.disclaimer')}
                            </p>

                            <Button
                                type='submit'
                                disabled={
                                    isLoading ||
                                    userRating === 0 ||
                                    !orderId.trim()
                                }
                                className='w-full sm:w-auto min-w-56 h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm transition-all duration-200 hover:bg-primary-foreground hover:text-secondary-foreground border border-border cursor-pointer inline-flex items-center justify-center gap-2'
                            >
                                {isLoading ? (
                                    <>
                                        <Spinner
                                            size={16}
                                            className='text-primary-foreground'
                                        />
                                        <span>{t('feedback.form.submitting')}</span>
                                    </>
                                ) : (
                                    <>
                                        <span>{t('feedback.form.submit')}</span>
                                        <SendHorizonal className='size-4 transition-colors' />
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            ) : (
                /* Thank You / Confirmation Screen */
                <div className='w-full p-8 sm:p-12 rounded-2xl bg-background border border-border/80 shadow-xs text-center space-y-6'>
                    <div className='size-14 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto'>
                        <CheckCircle2 className='size-8' />
                    </div>

                    <div className='space-y-2'>
                        <Badge className='inline-flex text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 gap-1.5'>
                            {t('feedback.confirmation.verifiedBadge')}
                        </Badge>
                        <h2 className='font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground'>
                            {t('feedback.confirmation.title')}
                        </h2>
                        <p className='text-sm sm:text-base text-muted-foreground max-w-md mx-auto leading-relaxed'>
                            {t('feedback.confirmation.desc')}
                        </p>
                    </div>

                    {/* Submitted Review Snapshot */}
                    <div className='p-5 sm:p-6 rounded-xl bg-surface/50 border border-border/70 text-left space-y-3'>
                        <div className='flex items-center justify-between'>
                            <StarRating
                                rating={submittedRating}
                                readonly
                                size='md'
                            />
                            {submittedOrderId && (
                                <span className='font-mono text-xs text-muted-foreground'>
                                    {t('feedback.confirmation.orderPrefix')}{submittedOrderId}
                                </span>
                            )}
                        </div>

                        {submittedMessage && (
                            <blockquote className='text-xs sm:text-sm text-foreground/90 italic border-l-2 border-primary/40 pl-3 py-0.5 leading-relaxed'>
                                "{submittedMessage}"
                            </blockquote>
                        )}
                    </div>

                    {/* Navigation Actions */}
                    <div className='pt-2 flex flex-col sm:flex-row items-center justify-center gap-3'>
                        <a
                            href='/testimonials'
                            className='max-sm:w-full inline-flex group items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold transition-all duration-200 hover:bg-primary-foreground hover:text-secondary-foreground border border-border shadow-xs cursor-pointer'
                        >
                            <span>{t('feedback.confirmation.exploreCta')}</span>
                            <ArrowRight className='size-4 group-hover:translate-x-1 transition-all' />
                        </a>

                        <button
                            type='button'
                            onClick={handleReset}
                            className='max-sm:w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-border bg-background text-surface-foreground text-xs sm:text-sm font-medium hover:bg-muted transition-colors cursor-pointer'
                        >
                            <RotateCcw className='size-3.5' />
                            <span>{t('feedback.confirmation.anotherOrder')}</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Feedback;
