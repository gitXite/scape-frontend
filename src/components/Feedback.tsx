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

const RATING_DESCRIPTIONS: Record<number, string> = {
    1: 'You rated 1 / 5 stars',
    2: 'You rated 2 / 5 stars',
    3: 'You rated 3 / 5 stars',
    4: 'You rated 4 / 5 stars',
    5: 'You rated 5 / 5 stars',
};

function Feedback() {
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
            toast.error('Please select a star rating first');
            return;
        }
        if (!orderId.trim()) {
            toast.error('Please provide your Order ID');
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
                toast.error(data.message || 'Unable to submit review', {
                    description:
                        'Please check your Order ID or try again shortly.',
                });
                setIsLoading(false);
                return;
            }

            localStorage.setItem('feedbackRating', userRating.toString());
            localStorage.setItem('feedbackMessage', feedbackMessage.trim());
            localStorage.setItem('orderId', orderId.trim());

            toast.success('Feedback received', {
                description:
                    'Thank you for helping us uphold our standards.',
            });

            setSubmittedRating(userRating);
            setSubmittedMessage(feedbackMessage.trim());
            setSubmittedOrderId(orderId.trim());
            setIsLoading(false);
        } catch (err: any) {
            toast.error(err.message || 'Network error', {
                description: 'Please try again later.',
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
                            Review & Verification
                        </Badge>

                        <h1 className='font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-surface-foreground mb-4 leading-tight'>
                            Share your perspective.
                        </h1>

                        <p className='font-sans text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg sm:mx-auto'>
                            Every SCAPE is a bespoke commission. Your feedback
                            directly informs how we engineer, print, and frame
                            models in Bergen.
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
                                How would you rate your Scape?
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
                                        ? RATING_DESCRIPTIONS[userRating]
                                        : 'Select a rating from 1 to 5 stars'}
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
                                    <span>Your Experience</span>
                                </label>
                                <span className='text-[11px] font-mono text-muted-foreground'>
                                    Optional
                                </span>
                            </div>
                            <textarea
                                id='feedback-message'
                                value={feedbackMessage}
                                onChange={(e) =>
                                    setFeedbackMessage(e.target.value)
                                }
                                placeholder='Tell us about the detail, expectations, packaging, or how it looks in your space...'
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
                                    <span>Order Verification</span>
                                    <span className='text-destructive'>*</span>
                                </label>
                                <span className='text-[11px] font-mono text-muted-foreground'>
                                    Required
                                </span>
                            </div>
                            <input
                                id='order-id'
                                type='text'
                                value={orderId}
                                onChange={(e) => setOrderId(e.target.value)}
                                placeholder='e.g. ORD-10492'
                                className='w-full rounded-xl border border-border/80 bg-surface/30 px-4 py-3 text-sm font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all'
                                required
                            />
                            <p className='text-[11px] text-muted-foreground font-sans pl-1'>
                                Located in your order confirmation email or
                                transaction confirmation.
                            </p>
                        </div>

                        <Separator className='border-border/60 my-2' />

                        {/* Action Submit Button */}
                        <div className='pt-1 flex flex-col sm:flex-row items-center justify-between gap-3'>
                            <p className='text-xs text-muted-foreground/80 font-sans text-center sm:text-left'>
                                Reviews are verified before appearing on our
                                testimonials page.
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
                                        <span>Submitting...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Submit Feedback</span>
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
                            Verified Review
                        </Badge>
                        <h2 className='font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground'>
                            Thank you for your review.
                        </h2>
                        <p className='text-sm sm:text-base text-muted-foreground max-w-md mx-auto leading-relaxed'>
                            Your perspective has been recorded. It helps us
                            maintain the tactile quality of every Scape we
                            produce in Bergen.
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
                                    Order: {submittedOrderId}
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
                            <span>Explore Reviews</span>
                            <ArrowRight className='size-4 group-hover:translate-x-1 transition-all' />
                        </a>

                        <button
                            type='button'
                            onClick={handleReset}
                            className='max-sm:w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-border bg-background text-surface-foreground text-xs sm:text-sm font-medium hover:bg-muted transition-colors cursor-pointer'
                        >
                            <RotateCcw className='size-3.5' />
                            <span>Submit for Another Order</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Feedback;
