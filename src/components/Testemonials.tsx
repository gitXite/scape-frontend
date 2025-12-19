import { useEffect, useState } from 'react';
import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from './ui/shadcn-io/marquee/Marquee';
import StarRating from './ui/starRating';
import { Spinner } from './ui/shadcn-io/spinner/spinner';



function Testemonials() {
    const [totalReviews, setTotalReviews] = useState();
    const [averageRating, setAverageRating] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [reviews, setReviews] = useState<any[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const getReviewStats = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/api/reviews/stats`, {
                    method: 'GET',
                });
                if (!response.ok) {
                    const data = await response.json();
                    setError(`${data.message} ${response.status}`);
                    return;
                }

                const { data } = await response.json();
                setTotalReviews(data.totalReviews);
                setAverageRating(data.averageRating);
                setIsLoading(false);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError(`${err}`);
                }
            }
        };
        const getReviews = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/api/reviews`, {
                    method: 'GET'
                });
                if (!response.ok) {
                    const data = await response.json();
                    setError(`${response.status} ${data.message}`);
                    return;
                }

                const data = await response.json();
                setReviews(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError(`${err}`);
                }
            }
        };
        getReviewStats();
        getReviews();
    }, []);

    return (
        <div className='min-h-svh w-full px-5 place-content-center'>
            {isLoading ? (
                <div className='h-full relative place-items-center justify-self-center top-2/4 -translate-y-2/4 space-y-5'>
                    <h1 className='text-neutral-900 text-center font-medium text-6xl tracking-wide text-shadow-md'>Words of praise from <br />our customers</h1>
                    <div className='rounded-full bg-neutral-900 px-5 py-1.5 drop-shadow-lg'>
                        <StarRating readonly rating={averageRating!} showValue size='lg' />
                        <p className='text-neutral-200 tracking-wide text-center font-normal text-lg'>Total reviews: {totalReviews}</p>
                    </div>
                    {error && (
                        <h1 className='text-neutral-900 font-medium'>{error}</h1>
                    )}
                    <Spinner variant={'circle'} size={42} className='text-neutral-900' />
                </div>
            ) : (
                <div className='flex flex-col min-h-svh items-center justify-evenly'>
                    <h1 className='text-neutral-900 text-center font-medium text-6xl tracking-wide text-shadow-md'>Words of praise from <br />our customers</h1>
                    <div className='rounded-full bg-neutral-900 px-5 py-1.5 drop-shadow-lg'>
                        <StarRating readonly rating={averageRating!} showValue size='lg' />
                        <p className='text-neutral-200 tracking-wide text-center font-normal text-lg'>Total reviews: {totalReviews}</p>
                    </div>
                    <div className='flex flex-col gap-10 w-3/5'>
                        <Marquee>
                            <MarqueeFade side='left' />
                            <MarqueeFade side='right' />
                            <MarqueeContent speed={100} className='py-2'>
                                {reviews.map((review) => ({ sort: Math.random(), sorted: review }))
                                    .sort((a, b) => a.sort - b.sort)
                                    .map((review, index) => (
                                        <MarqueeItem className='flex flex-col items-center text-neutral-900 font-medium justify-evenly w-60 bg-neutral-200/40 text-center p-5 rounded-lg border-1 border-neutral-300 drop-shadow-md mx-10' key={index}>
                                            <p>"{review.sorted.message}"</p>
                                            <StarRating readonly rating={review.sorted.rating} size='lg' className='mt-5' />
                                        </MarqueeItem>
                                    ))
                                }
                            </MarqueeContent>
                        </Marquee>
                        <Marquee>
                            <MarqueeFade side='left' />
                            <MarqueeFade side='right' />
                            <MarqueeContent speed={100} direction='right' className='py-2'>
                                {reviews.map((review) => ({ sort: Math.random(), sorted: review }))
                                    .sort((a, b) => a.sort - b.sort)
                                    .map((review, index) => (
                                        <MarqueeItem className='flex flex-col items-center text-neutral-900 font-medium justify-evenly w-60 bg-neutral-200/40 text-center p-5 rounded-lg border-1 border-neutral-300 drop-shadow-md mx-10' key={index}>
                                            <p>"{review.sorted.message}"</p>
                                            <StarRating readonly rating={review.sorted.rating} size='lg' className='mt-5' />
                                        </MarqueeItem>
                                    ))
                                }
                            </MarqueeContent>
                        </Marquee>
                    </div>
                </div>
            )}
        </div>
    );
}


export default Testemonials;
