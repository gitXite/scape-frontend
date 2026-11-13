import { BadgeCheck, Quote, MapPin } from 'lucide-react';
import StarRating from './ui/starRating';
import type { Review } from '@/types/common';
import { Separator } from './ui/separator';

function TestimonialCard({ review }: { review: Review }) {
    return (
        <figure className='flex h-full flex-col rounded-2xl border border-border/80 bg-background p-6 sm:p-7 shadow-xs hover:border-border hover:shadow-sm transition-all duration-300 group text-left'>
            <div className='flex items-center justify-between gap-4 mb-4'>
                <div className='size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0'>
                    <Quote className='size-4' aria-hidden='true' />
                </div>
                <StarRating
                    readonly
                    rating={review.rating}
                    size='sm'
                    className='shrink-0'
                />
            </div>

            <blockquote className='flex-1 text-sm sm:text-base font-normal leading-relaxed text-surface-foreground/90 italic'>
                "{review.message}"
            </blockquote>

            <Separator
                className='my-5 border-border'
                orientation='horizontal'
            />

            <div className='flex justify-between items-center gap-2 pt-0.5 text-xs'>
                <figcaption className='inline-flex items-center gap-1.5 font-semibold text-primary'>
                    <BadgeCheck
                        className='size-3.5 shrink-0'
                        aria-hidden='true'
                    />
                    <span>Verified Customer</span>
                </figcaption>
                {review.location && (
                    <figcaption className='inline-flex items-center gap-1 text-muted-foreground font-mono'>
                        <MapPin className='size-3 text-muted-foreground/70 shrink-0' />
                        <span>{review.location}</span>
                    </figcaption>
                )}
            </div>
        </figure>
    );
}

export default TestimonialCard;
