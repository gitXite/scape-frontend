import { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';


interface StarRatingProps {
    rating: number,
    onRatingChange?: (rating: number) => void,
    maxRating?: number,
    size?: 'sm' | 'md' | 'lg',
    readonly?: boolean,
    showValue?: boolean,
    className?: string
};


function StarRating({
    rating, 
    onRatingChange,
    maxRating = 5,
    size = 'md',
    readonly = false,
    showValue = false,
    className
}: StarRatingProps) {
    const [hoverRating, setHoverRating] = useState(0);
    
    const sizeClasses = {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
    };

    const handleClick = (value: number) => {
        if (!readonly && onRatingChange) {
            onRatingChange(value);
        }
    };

    const handleMouseEnter = (value: number) => {
        if (!readonly) {
            setHoverRating(value);
        }
    };

    const handleMouseLeave = () => {
        if (!readonly) {
            setHoverRating(0);
        }
    };

    const displayRating = hoverRating || rating;

    return (
        <div className={cn('flex items-center gap-1', className)}>
            <div className='flex items-center'>
                {Array.from({ length: maxRating }, (_, index) => {
                    const starValue = index + 1;
                    const isFilled = starValue <= displayRating;
                    const isPartiallyFilled = starValue - 0.5 <= displayRating && starValue > displayRating;

                    return (
                        <button
                            key={index}
                            type='button'
                            className={cn(
                                'relative transition-colors duration-150',
                                readonly
                                    ? 'cursor-default'
                                    : 'cursor-pointer hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm',
                                sizeClasses[size],
                            )}
                            onClick={() => handleClick(starValue)}
                            onMouseEnter={() => handleMouseEnter(starValue)}
                            onMouseLeave={handleMouseLeave}
                            disabled={readonly}
                            aria-label={`${readonly ? 'Rating' : 'Rate'} ${starValue} out of ${maxRating} stars`}
                        >
                            <Star
                                className={cn(
                                    'transition-colors duration-150',
                                    sizeClasses[size],
                                    isFilled || isPartiallyFilled
                                        ? 'fill-yellow-400 text-yellow-400'
                                        : readonly
                                            ? 'fill-none text-muted-foreground'
                                            : 'fill-none text-muted-foreground hover:text-yellow-400',
                                )}
                            />
                            {isPartiallyFilled && (
                                <Star 
                                    className={cn('absolute inset-0 fill-yellow-400 text-yellow-400', sizeClasses[size])}
                                    style={{ clipPath: `inset(0 ${100 - (displayRating - index) * 100}% 0 0)`}}
                                />
                            )}
                        </button>
                    );
                })}
            </div>
            {showValue && (
                <span className='text-sm text-background ml-2'>
                    {rating.toFixed(1)} / {maxRating}
                </span>
            )}
        </div>
    );
}


export default StarRating;