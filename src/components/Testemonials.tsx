import { useEffect, useState } from 'react';
import {
    Marquee,
    MarqueeContent,
    MarqueeFade,
    MarqueeItem,
} from './ui/shadcn-io/marquee/Marquee';
import StarRating from './ui/starRating';
import { Spinner } from './ui/shadcn-io/spinner/spinner';
import TestimonialCard from './TestimonialCard';
import { Star, Sparkles } from 'lucide-react';

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
                const response = await fetch(
                    `${import.meta.env.VITE_APP_API_URL}/api/reviews/stats`,
                    {
                        method: 'GET',
                    },
                );
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
                const response = await fetch(
                    `${import.meta.env.VITE_APP_API_URL}/api/reviews`,
                    {
                        method: 'GET',
                    },
                );
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
        <div className='flex flex-col min-h-svh w-full px-5 items-center overflow-hidden'>
            <div className='flex flex-col relative z-10 w-full pt-24 pb-16'>
                <div className='text-center px-6'>
                    <div className='inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6'>
                        <Sparkles className='w-4 h-4' />
                        Customer Reviews
                    </div>

                    <h1 className='text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight'>
                        Words of <span className='text-primary'>praise</span>
                        <br />
                        from our customers
                    </h1>

                    <p className='text-xl text-muted-foreground font-normal max-w-2xl mx-auto mb-10'>
                        Don't just take our word for it. See what our customers
                        have to say about their experience.
                    </p>
                </div>

                {isLoading ? (
                    <div className='flex flex-col items-center self-center'>
                        <Spinner
                            variant={'circle'}
                            size={42}
                            className='text-neutral-900'
                        />
                        {error && (
                            <h1 className='text-neutral-900 font-medium'>
                                {error}
                            </h1>
                        )}
                    </div>
                ) : (
                    <div className='flex flex-col w-full items-center'>
                        <div className='inline-flex w-fit items-center gap-6 bg-card border border-border rounded-full px-8 py-4 shadow-md mb-16'>
                            <div className='flex items-center gap-3'>
                                <StarRating
                                    readonly
                                    rating={averageRating!}
                                    showValue
                                    size='lg'
                                />
                            </div>
                            <div className='w-px h-8 bg-border' />
                            <div className='text-left'>
                                <p className='text-2xl font-bold text-foreground'>
                                    {totalReviews}
                                </p>
                                <p className='text-sm font-normal text-muted-foreground'>
                                    Total Reviews
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-10 w-4/5 items-center self-center overflow-hidden'>
                            <Marquee>
                                <MarqueeFade side='left' />
                                <MarqueeFade side='right' />
                                <MarqueeContent speed={window.innerWidth < 640 ? 100 : 40} className='py-2'>
                                    {reviews
                                        .map((review) => ({
                                            sort: Math.random(),
                                            sorted: review,
                                        }))
                                        .sort((a, b) => a.sort - b.sort)
                                        .map((review, index) => (
                                            <MarqueeItem
                                                className=''
                                                key={index}
                                            >
                                                <TestimonialCard
                                                    review={{
                                                        rating: review.sorted.rating,
                                                        message: review.sorted.message,
                                                    }}
                                                />
                                            </MarqueeItem>
                                        ))}
                                </MarqueeContent>
                            </Marquee>
                            <Marquee>
                                <MarqueeFade side='left' />
                                <MarqueeFade side='right' />
                                <MarqueeContent
                                    speed={window.innerWidth < 640 ? 100 : 40}
                                    direction='right'
                                    className='py-2'
                                >
                                    {reviews
                                        .map((review) => ({
                                            sort: Math.random(),
                                            sorted: review,
                                        }))
                                        .sort((a, b) => a.sort - b.sort)
                                        .map((review, index) => (
                                            <MarqueeItem
                                                className=''
                                                key={index}
                                            >
                                                <TestimonialCard
                                                    review={{
                                                        rating: review.sorted.rating,
                                                        message: review.sorted.message,
                                                    }}
                                                />
                                            </MarqueeItem>
                                        ))}
                                </MarqueeContent>
                            </Marquee>
                        </div>
                    </div>
                )}
                <div className="text-center mt-20 px-6">
                    <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
                        <a href='/feedback' className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-neutral-200 hover:text-foreground border border-neutral-300 active:bg-white transition-all shadow-sm shadow-primary/20 cursor-pointer">
                            Leave a Review
                        </a>
                        <a href='/get-started' className="px-8 py-4 bg-card border border-border text-foreground rounded-xl font-semibold hover:bg-accent active:bg-white transition-all cursor-pointer">
                            Create Your Scape
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testemonials;
