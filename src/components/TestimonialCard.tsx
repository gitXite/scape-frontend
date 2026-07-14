import { BadgeCheck, Quote } from 'lucide-react';
import StarRating from './ui/starRating';
import type { Review } from '@/types/index';
import { Separator } from './ui/separator';

function TestimonialCard({ review }: { review: Review }) {
    return (
        <figure className='flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7'>
            <div className='flex items-center justify-between'>
                <Quote className='size-7 text-primary/25' aria-hidden='true' />
                <StarRating
                    readonly
                    rating={review.rating}
                    className='shrink-0'
                />
            </div>
            <blockquote className='mt-4 flex-1 text-pretty font-normal leading-relaxed text-card-foreground'>
                {review.message}
            </blockquote>

            <Separator className='my-4 mt-6' orientation='horizontal' />

            <div className='flex justify-between items-center'>
                <figcaption className='flex items-center gap-2 text-sm font-medium text-primary'>
                    <BadgeCheck className='size-4' aria-hidden='true' />
                    Verified purchase
                </figcaption>
                <figcaption className='text-sm font-normal text-muted-foreground'>
                    {review.location}
                </figcaption>
            </div>
        </figure>
    );
}

export default TestimonialCard;
