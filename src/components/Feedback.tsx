import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import StarRating from '@/components/ui/starRating';
import { Spinner } from './ui/shadcn-io/spinner/spinner';
import { toast } from 'sonner';
import { CheckCircle2, Sparkles } from 'lucide-react';

function Feedback() {
    const [userRating, setUserRating] = useState(0);
    const [submittedRating, setSubmittedRating] = useState<number | null>(
        (): number | null => {
            const storedRating = localStorage.getItem('feedbackRating');
            return storedRating ? Number(storedRating) : null;
        },
    );
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [orderId, setOrderId] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>,
        type: string,
    ) => {
        if (type === 'feedback') {
            setFeedbackMessage(event.target.value);
        } else if (type === 'orderId') {
            setOrderId(event.target.value);
        }
    };

    const handleSubmitReview = async () => {
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
                        message: feedbackMessage,
                        orderID: orderId,
                    }),
                },
            );
            if (!response.ok) {
                const data = await response.json();
                toast.error(data.message, {
                    // description: 'Please try again later',
                });
                setIsLoading(false);
                return;
            }

            if (userRating > 0) {
                localStorage.setItem('feedbackRating', userRating.toString());
                localStorage.setItem('feedbackMessage', feedbackMessage);
                localStorage.setItem('orderId', orderId);
            }

            toast.success('Feedback received', {
                description: 'Thank you for your review',
            });
            setIsLoading(false);
            setSubmittedRating(userRating);
        } catch (err: any) {
            toast.error(err.message, {
                description: 'Please try again later',
            });
            setIsLoading(false);
        }
    };

    return (
        <div className='relative z-10 min-h-screen w-full flex items-center justify-center px-6 py-24'>
            <div className='w-full max-w-xl'>
                {!submittedRating ? (
                    <div className='relative w-full'>
                        <div className='text-center mb-10'>
                            <div className='inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6'>
                                <Sparkles className='w-4 h-4' />
                                Share Your Experience
                            </div>

                            <h1 className='text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight'>
                                We value your
                                <span className='text-primary'> opinion</span>
                            </h1>

                            <p className='text-lg text-muted-foreground'>
                                Help us improve by sharing your feedback
                            </p>
                        </div>

                        <div className='relative group w-full'>
                            <div className='relative bg-card border border-border rounded-2xl p-8 shadow-xl'>
                                <div className='text-center mb-8'>
                                    <label className='text-foreground font-medium text-lg mb-4 block'>
                                        How would you rate your overall
                                        experience?
                                    </label>
                                    <div className='flex flex-col items-center gap-3'>
                                        <StarRating
                                            rating={userRating || 4}
                                            onRatingChange={setUserRating}
                                            size='lg'
                                        />
                                        {userRating > 0 && (
                                            <p className='text-sm text-primary font-medium animate-fade-in'>
                                                You rated: {userRating} out of 5
                                                stars
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className='mb-6'>
                                    <label className='text-sm font-medium text-foreground mb-2 block'>
                                        Your Feedback
                                    </label>
                                    <textarea
                                        value={feedbackMessage}
                                        onChange={(event) =>
                                            handleChange(event, 'feedback')
                                        }
                                        placeholder='Tell us about your experience...'
                                        className='min-h-[120px] w-full text-foreground resize-none border border-border shadow-xs focus:drop-shadow-sm bg-background rounded-sm p-5 h-35 max-sm:w-full focus:outline-none focus:ring-3 focus:ring-neutral-300 focus:border-neutral-400'
                                    />
                                </div>

                                <div className='mb-8'>
                                    <label className='text-sm font-medium text-foreground mb-2 block'>
                                        Order ID{' '}
                                        <span className='text-destructive'>
                                            *
                                        </span>
                                    </label>
                                    <textarea
                                        value={orderId}
                                        onChange={(event) =>
                                            handleChange(event, 'orderId')
                                        }
                                        placeholder='Enter your order ID'
                                        className='w-full h-13 overflow-hidden px-5 py-3 rounded-sm border border-border text-foreground placeholder:text-muted-foreground shadow-xs focus:drop-shadow-sm bg-background resize-none focus:outline-none focus:ring-3 focus:ring-neutral-300 focus:border-neutral-400 transition-all'
                                    />
                                </div>

                                {isLoading ? (
                                    <Button
                                        onClick={handleSubmitReview}
                                        disabled
                                        className='w-40 p-5 bg-neutral-900 border-neutral-300 border-1 hover:bg-neutral-200 active:bg-white text-neutral-100 hover:text-neutral-900 rounded-full cursor-pointer'
                                    >
                                        <Spinner variant={'ellipsis'} />
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={handleSubmitReview}
                                        disabled={
                                            userRating === 0 || orderId === ''
                                        }
                                        className='w-40 p-5 bg-neutral-900 border-neutral-300 border-1 hover:bg-neutral-200 active:bg-white text-neutral-100 hover:text-neutral-900 rounded-full cursor-pointer'
                                    >
                                        Submit Feedback
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='relative'>
                        <div className='relative bg-card border border-border rounded-2xl p-12 shadow-xl text-center'>
                            <div className='inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6'>
                                <CheckCircle2 className='w-10 h-10 text-green-600' />
                            </div>

                            <h2 className='text-3xl font-bold text-foreground mb-4'>
                                Thank you for your review!
                            </h2>

                            <p className='text-muted-foreground mb-8'>
                                Your feedback helps us improve our service
                            </p>

                            <div className='inline-flex flex-col items-center gap-3 bg-secondary/50 rounded-xl px-8 py-6'>
                                <p className='text-sm font-medium text-muted-foreground'>
                                    Your rating
                                </p>
                                <StarRating
                                    rating={submittedRating}
                                    readonly
                                    size='lg'
                                />
                                <p className='text-lg font-semibold text-foreground'>
                                    You rated: {submittedRating} out of 5 stars
                                </p>
                            </div>

                            {/* <Button
                                onClick={() => {
                                    localStorage.removeItem('feedbackRating');
                                    localStorage.removeItem('feedbackMessage');
                                    localStorage.removeItem('orderId');
                                    setSubmittedRating(null);
                                    setUserRating(0);
                                    setFeedbackMessage('');
                                    setOrderId('');
                                }}
                                variant='outline'
                                className='mt-8'
                            >
                                Submit Another Review
                            </Button> */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Feedback;
