import { Quote } from 'lucide-react';
import StarRating from './ui/starRating';
import type { Review } from '@/types/index';

function TestimonialCard({ review }: { review: Review }) {
    return (
        <div className='relative group overflow-hidden rounded-2xl transition-all duration-500 bg-card border border-border p-6 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1'>
            <div className='absolute -top-12 -right-12 w-24 h-24 rounded-full blur-3xl transition-opacity duration-500 bg-primary/10 opacity-0 group-hover:opacity-100' />

            <Quote className='w-8 h-8 mb-4 text-primary/20' />

            <p className='text-lg leading-relaxed font-normal mb-6 text-foreground'>
                "{review.message}"
            </p>

            <div className='flex items-center justify-between'>
                <div className='flex-shrink-0 w-[250px]'>
                    <p className='text-sm font-normal text-muted-foreground'>
                        Verified Customer
                    </p>
                </div>
                <StarRating readonly rating={review.rating} size='md' />
            </div>
        </div>
    );
}

export default TestimonialCard;
