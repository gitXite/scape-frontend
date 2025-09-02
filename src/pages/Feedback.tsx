import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';
import StarRating from '@/components/ui/starRating';


function Feedback() {
    const [userRating, setUserRating] = useState(0);
    const [submittedRating, setSubmittedRating] = useState<number | null>(null);
    const [feedbackMessage, setFeedbackMessage] = useState('');

    // mock variables
    // let averageRating = 4.2;
    // let totalReviews = 127;

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFeedbackMessage(event.target.value)
    };

    const handleSubmitReview = () => {
        if (userRating > 0) {
            setSubmittedRating(userRating);
            localStorage.setItem('feedbackRating', userRating.toString());
            localStorage.setItem('feedbackMessage', feedbackMessage);
        }
    };

    return (
        <div className='flex flex-col h-full w-full bg-neutral-100 items-center'>
            <BackButton />
            <div className='flex flex-col h-full w-3/5 bg-neutral-200/20 border-1 border-neutral-300 m-10 p-10 rounded-sm items-center'>
                {!submittedRating ? (
                    <>
                        <div className='flex flex-col items-center w-full'>
                            <h1 className='text-neutral-900 text-2xl font-medium pb-8'>How was your experience?</h1>
                            <textarea 
                                value={feedbackMessage}
                                onChange={handleChange}
                                placeholder='Enter your message'
                                className='text-neutral-700 font-normal border-1 border-neutral-300 drop-shadow-sm bg-white rounded-sm p-5 h-50 w-6/10 resize-none focus:outline-none focus:ring-3 focus:ring-neutral-300 focus:border-neutral-400'
                            />
                        </div>
                        <div className='flex flex-col text-center items-center relative -bottom-15'>
                            <label className='text-neutral-900 text-sm font-medium mb-2 block'>Your Rating</label>
                            <StarRating rating={userRating || 4} onRatingChange={setUserRating} size='lg' className='mb-2' />
                            {userRating > 0 && (
                                <p className='text-sm text-muted-foreground mb-2'>You rated: {userRating} out of 5 stars</p>
                            )}
                            <Button
                                onClick={handleSubmitReview}
                                disabled={userRating === 0}
                                className='w-full p-5 bg-neutral-900 border-neutral-300 border-1 hover:bg-neutral-200 active:bg-white text-neutral-100 hover:text-neutral-900 rounded-full cursor-pointer'
                            >
                                Submit Feedback
                            </Button>
                        </div>
                    </>
                ) : (
                    <div className='flex flex-col text-center py-4 items-center relative top-30'>
                        <p className='text-green-600 font-medium mb-5'>Thank you for your review!</p>
                        <StarRating rating={submittedRating} readonly size='md' />
                        <p className='text-sm text-muted-foreground mt-2'>You rated: {submittedRating} out of 5 stars</p>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}


export default Feedback;