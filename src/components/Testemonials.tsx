import { useEffect, useState } from 'react';
import StarRating from './ui/starRating';
// import { Spinner } from './ui/shadcn-io/spinner/spinner';
import TestimonialCard from './TestimonialCard';
import { Sparkles, Star } from 'lucide-react';
import { Button } from './ui/button';

const INITIAL_COUNT = 6;
const BATCH_SIZE = 6;

function Testemonials() {
    const [totalReviews, setTotalReviews] = useState();
    const [averageRating, setAverageRating] = useState<number>();
    // const [isLoading, setIsLoading] = useState(true);
    const [reviews, setReviews] = useState<any[]>([]);
    // const [error, setError] = useState('');
    const [visible, setVisible] = useState(INITIAL_COUNT);
    const shown = reviews.slice(0, visible);
    const remaining = reviews.length - shown.length;

    useEffect(() => {
        const getReviewStats = async () => {
            // setIsLoading(true);
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_APP_API_URL}/api/reviews/stats`,
                    {
                        method: 'GET',
                    },
                );
                if (!response.ok) {
                    // const data = await response.json();
                    // setError(`${data.message} ${response.status}`);
                    return;
                }

                const { data } = await response.json();
                setTotalReviews(data.totalReviews);
                setAverageRating(data.averageRating);
                // setIsLoading(false);
            } catch (err) {
                if (err instanceof Error) {
                    // setError(err.message);
                } else {
                    // setError(`${err}`);
                }
            }
        };

        const getReviews = async () => {
            // setIsLoading(true);
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_APP_API_URL}/api/reviews`,
                    {
                        method: 'GET',
                    },
                );
                if (!response.ok) {
                    // const data = await response.json();
                    // setError(`${response.status} ${data.message}`);
                    return;
                }

                const data = await response.json();
                setReviews(data);
            } catch (err) {
                if (err instanceof Error) {
                    // setError(err.message);
                } else {
                    // setError(`${err}`);
                }
            }
        };

        getReviewStats();
        getReviews();
    }, []);

    return (
        <div className='flex flex-col min-h-svh w-full px-5 items-center overflow-hidden font-normal'>
            <div className='flex flex-col relative mx-auto max-w-6xl px-6 py-8'>
                <section className='mx-auto mt-10 max-w-2xl text-left sm:text-center'>
                    <span className='inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground'>
                        <Star
                            className='size-4 fill-amber-400 text-amber-400'
                            aria-hidden='true'
                        />
                        Customer Reviews
                    </span>
                    <h1 className='mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl'>
                        Words of praise from our customers
                    </h1>
                    <p className='mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground'>
                        Don&apos;t just take our word for it. See what our
                        customers say about turning their favorite places into
                        tangible art.
                    </p>
                </section>

                {/* Aggregate summary uses whole-collection stats from the backend */}
                <section className='mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8'>
                    <div className='grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-12'>
                        <div className='text-center sm:border-r sm:border-border sm:pr-12'>
                            <p className='font-display text-6xl font-semibold leading-none text-foreground'>
                                {averageRating?.toFixed(1)}
                            </p>
                            <StarRating
                                readonly
                                rating={averageRating!}
                                size='lg'
                                className='mt-3 justify-center'
                            />
                            <p className='mt-3 text-sm text-muted-foreground'>
                                Based on{' '}
                                <span className='font-medium text-card-foreground'>
                                    {totalReviews} reviews
                                </span>
                            </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='text-pretty text-lg leading-relaxed text-card-foreground'>
                                Customers across Norway consistently rate their
                                SCAPE pieces among the most meaningful gifts
                                they&apos;ve given or received.
                            </p>
                            <p className='inline-flex items-center gap-2 text-sm font-medium text-primary'>
                                <Sparkles className="size-4" aria-hidden="true" />
                                Handcrafted and shipped from Bergen, Norway.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Randomized assortment from the backend - 6 shown, reveal more on demand */}
                <section className='mt-10' aria-label='Customer reviews'>
                    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                        {shown.map((review) => (
                            <TestimonialCard key={review.id} review={review} />
                        ))}
                    </div>

                    {remaining > 0 && (
                        <div className='mt-10 flex flex-col items-center gap-3'>
                            <Button
                                size='lg'
                                variant='outline'
                                className='h-11 rounded-full px-8 text-base text-foreground bg-secondary hover:bg-muted shadow-none hover:shadow-xs'
                                onClick={() =>
                                    setVisible((v) => v + BATCH_SIZE)
                                }
                            >
                                Show more reviews
                            </Button>
                            <p className='text-sm text-muted-foreground'>
                                Showing {shown.length} of {reviews.length}
                            </p>
                        </div>
                    )}
                </section>

                <section className='mt-16 flex flex-col items-center gap-4 rounded-2xl border border-border bg-card px-6 py-8 text-center shadow-sm'>
                    <h2 className='text-balance text-3xl font-semibold tracking-tight text-foreground'>
                        Ready to create your own?
                    </h2>
                    <p className='max-w-md text-pretty text-muted-foreground'>
                        Join our happy customers and turn a place you love into
                        a piece you&apos;ll treasure.
                    </p>
                    <div className='mt-2 flex w-full justify-center flex-col gap-3 sm:flex-row'>
                        <a
                            href='/feedback'
                            className='inline-flex items-center justify-center max-sm:w-full gap-3 px-8 sm:px-10 py-4 text-sm font-medium rounded-full bg-primary text-primary-foreground border border-border hover:bg-primary-foreground hover:text-secondary-foreground transition-all duration-300'
                        >
                            Leave a Review
                        </a>
                        <a
                            href='/get-started'
                            className='inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 text-sm font-medium rounded-full bg-primary text-primary-foreground border border-border hover:bg-primary-foreground hover:text-secondary-foreground transition-all duration-300'
                        >
                            Create Your Scape
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Testemonials;
