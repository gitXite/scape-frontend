import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import StarRating from '@/components/ui/starRating';
import { Spinner } from './ui/shadcn-io/spinner/spinner';
import { toast } from 'sonner';

function Feedback() {
    const [userRating, setUserRating] = useState(0);
    const [submittedRating, setSubmittedRating] = useState<number | null>(
        (): number | null => {
            const storedRating = localStorage.getItem('feedbackRating');
            return storedRating ? Number(storedRating) : null;
        }
    );
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [orderId, setOrderId] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>,
        type: string
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
            const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/api/reviews`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    rating: userRating,
                    message: feedbackMessage,
                    orderID: orderId,
                }),
            });
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
        <div className='flex flex-col min-h-screen w-full items-center justify-center'>
            <div className='flex flex-col h-fit max-sm:h-svh max-lg:w-full bg-neutral-200/40 border-1 border-neutral-300 rounded-sm items-center py-10 px-20 max-sm:px-5 place-content-evenly'>
                {!submittedRating ? (
                    <>
                        <div className='flex flex-col items-center w-full gap-2 max-sm:place-content-evenly max-sm:h-3/4'>
                            <h1 className='text-neutral-900 text-6xl max-xl:text-5xl max-md:text-4xl max-sm:text-3xl tracking-wide mb-5 max-sm:mb-0 font-medium text-shadow-md'>
                                We value your opinion
                            </h1>
                            <div className='flex flex-col text-center items-center relative'>
                                <label className='text-neutral-900 text-xl max-sm:text-lg font-normal mb-3 block'>
                                    How would you rate your overall experience?
                                </label>
                                <StarRating
                                    rating={userRating || 4}
                                    onRatingChange={setUserRating}
                                    size='lg'
                                    className='mb-2'
                                />
                                {userRating > 0 && (
                                    <p className='text-sm text-muted-foreground mb-2'>
                                        You rated: {userRating} out of 5 stars
                                    </p>
                                )}
                            </div>
                            <textarea
                                value={feedbackMessage}
                                onChange={(event) =>
                                    handleChange(event, 'feedback')
                                }
                                placeholder='We would love your feedback'
                                className='text-neutral-700 font-normal mb-2 border-1 border-neutral-300 shadow-xs focus:drop-shadow-sm bg-white rounded-sm p-5 h-35 w-6/10 max-sm:w-full resize-none focus:outline-none focus:ring-3 focus:ring-neutral-300 focus:border-neutral-400'
                            />
                            <textarea
                                value={orderId}
                                onChange={(event) =>
                                    handleChange(event, 'orderId')
                                }
                                placeholder='Order ID (required)'
                                className='text-neutral-900 h-10.5 text-center overflow-hidden p-2 mb-2 font-normal border-1 border-neutral-300 shadow-xs focus:drop-shadow-sm bg-white rounded-sm resize-none focus:outline-none focus:ring-3 focus:ring-neutral-300 focus:border-neutral-400'
                            />
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
                                    disabled={userRating === 0 || orderId === ''}
                                    className='w-40 p-5 bg-neutral-900 border-neutral-300 border-1 hover:bg-neutral-200 active:bg-white text-neutral-100 hover:text-neutral-900 rounded-full cursor-pointer'
                                >
                                    Submit Feedback
                                </Button>
                            )}
                        </div>
                    </>
                ) : (
                    <div className='flex flex-col text-center py-4 items-center relative'>
                        <p className='text-green-600 font-medium mb-10'>
                            Thank you for your review!
                        </p>
                        <StarRating
                            rating={submittedRating}
                            readonly
                            size='md'
                        />
                        <p className='text-sm text-muted-foreground mt-2'>
                            You rated: {submittedRating} out of 5 stars
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Feedback;
