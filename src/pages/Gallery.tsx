import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from '@/components/ui/Carousel';
import { useEffect, useState } from 'react';

function Gallery() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) return;

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div className='flex flex-col h-full w-full bg-neutral-100 items-center'>
            <Carousel
                setApi={setApi}
                className='w-2/4 rounded-sm drop-shadow-xl'
            >
                <CarouselContent className='rounded-sm'>
                    <CarouselItem className=''>
                        <img
                            src='src/assets/product-image-straight.png'
                            alt='Image 1'
                            className='rounded-sm'
                        />
                    </CarouselItem>
                    <CarouselItem className=''>
                        <img
                            src='src/assets/product-image-angle.png'
                            alt='Image 2'
                            className='rounded-sm'
                        />
                    </CarouselItem>
                    <CarouselItem className=''>
                        <img
                            src='src/assets/product-image-angle-alps.png'
                            alt='Image 3'
                            className='rounded-sm'
                        />
                    </CarouselItem>
                </CarouselContent>

                <div className='absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2'>
                    {Array.from({ length: count }).map((_, index) => (
                        <button
                            key={index}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                                current === index + 1
                                    ? 'w-8 bg-white'
                                    : 'w-4 bg-white/50'
                            }`}
                            onClick={() => api?.scrollTo(index)}
                        />
                    ))}
                </div>

                <CarouselPrevious className='bg-neutral-900 border-neutral-300 hover:bg-neutral-200 active:bg-neutral-50' />
                <CarouselNext className='bg-neutral-900 border-neutral-300 hover:bg-neutral-200 active:bg-neutral-50' />
            </Carousel>
        </div>
    );
}

export default Gallery;
