import { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
import { Marquee, MarqueeContent, MarqueeFade } from './ui/shadcn-io/marquee/Marquee';
import StarRating from './ui/starRating';
import { Spinner } from './ui/shadcn-io/spinner/spinner';



function Testemonials() {
    const [totalReviews, setTotalReviews] = useState();
    const [averageRating, setAverageRating] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getReviewStats = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/feedback/stats`, {
                    method: 'GET',
                });
                if (!response) return;
                const data = await response.json();

                setTotalReviews(data.data.totalReviews);
                setAverageRating(data.data.averageRating);
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
            }
        };
        getReviewStats();
    }, []);

    return (
        <div className='min-h-full w-full p-5'>
            {isLoading ? (
                <Spinner variant={'circle'} size={64} className='text-neutral-900 relative justify-self-center top-2/4 -translate-y-2/4' />
            ) : (
                <div className='flex flex-col h-full items-center justify-evenly'>
                    <h1 className='text-neutral-900 text-center font-medium text-6xl tracking-wide text-shadow-md'>Words of praise from <br />our customers</h1>
                    <div className='rounded-full bg-neutral-900 px-5 py-1.5 drop-shadow-lg'>
                        <StarRating readonly rating={averageRating!} showValue size='lg' />
                        <p className='text-neutral-200 tracking-wide text-center font-normal text-lg'>Total reviews: <small>{totalReviews}</small></p>
                    </div>
                    <div className='flex flex-col gap-10 w-3/5'>
                        <Marquee>
                            <MarqueeFade side='left' />
                            <MarqueeFade side='right' />
                            <MarqueeContent speed={100} className='py-2'>
                                <ReviewCard />
                                <ReviewCard />
                                <ReviewCard />
                                <ReviewCard />
                            </MarqueeContent>
                        </Marquee>
                        <Marquee>
                            <MarqueeFade side='left' />
                            <MarqueeFade side='right' />
                            <MarqueeContent speed={100} direction='right' className='py-2'>
                                <ReviewCard />
                                <ReviewCard />
                                <ReviewCard />
                                <ReviewCard />
                            </MarqueeContent>
                        </Marquee>
                    </div>
                </div>
            )}
        </div>
    );
}


export default Testemonials;
