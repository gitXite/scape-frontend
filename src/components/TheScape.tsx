import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from './ui/carousel';
import type { CarouselApi } from './ui/carousel';
import productStraight from '@/assets/product-image-straight.png';
import productAngle from '@/assets/product-image-angle.png';
import productAlps from '@/assets/product-image-angle-alps.png';

const options = {
    triggerOnce: false,
    threshold: 0.1,
};

function TheScape() {
    const { ref: ref1, inView: inView1 } = useInView(options);
    const { ref: ref2, inView: inView2 } = useInView(options);
    const { ref: ref3, inView: inView3 } = useInView(options);
    const { ref: ref4, inView: inView4 } = useInView(options);
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
        <div
            id='thescape'
            className='grid grid-cols-2 gap-x-20 w-full bg-neutral-100 min-h-[200vh] px-10 py-10'
        >
            <div className='flex flex-col items-center gap-y-80 mt-20'>
                <div
                    ref={ref1}
                    className={`place-items-center transition-opacity duration-600 ease-in ${
                        inView1 ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <h1 className='text-6xl text-neutral-900 pb-10'>
                        From Map To Frame
                    </h1>
                    <p className='w-8/12 text-center text-neutral-700 leading-8'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minima dolore, consequuntur alias quasi voluptate
                        corporis ducimus asperiores! Commodi quasi repudiandae
                        impedit facilis expedita cupiditate numquam ratione
                        facere fuga. Eos, corporis.
                    </p>
                </div>
                <div
                    ref={ref2}
                    className={`place-items-center mt-80 transition-opacity duration-600 ease-in ${
                        inView2 ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <h1 className='text-6xl text-neutral-900 pb-10'>
                        Realize Your World
                    </h1>
                    <p className='w-8/12 text-center text-neutral-700 leading-8'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Doloremque ad, exercitationem quisquam ducimus
                        numquam iure quaerat, incidunt deserunt expedita tempore
                        at delectus quasi molestias necessitatibus sit est
                        reprehenderit odit ratione!
                    </p>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center gap-y-80 mt-40'>
                <div
                    ref={ref3}
                    className={`place-items-center transition-opacity duration-600 ease-in ${
                        inView3 ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <Carousel setApi={setApi} className='w-3/4 rounded-sm drop-shadow-xl'>
                        <CarouselContent className='rounded-sm'>
                            <CarouselItem className=''>
                                <img
                                    src={productStraight}
                                    alt='Image 1'
                                    className='rounded-sm'
                                />
                            </CarouselItem>
                            <CarouselItem className=''>
                                <img
                                    src={productAngle}
                                    alt='Image 2'
                                    className='rounded-sm'
                                />
                            </CarouselItem>
                            <CarouselItem className=''>
                                <img
                                    src={productAlps}
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
                        
                        <CarouselPrevious className='bg-neutral-900 border-neutral-300 hover:bg-neutral-200 active:bg-white' />
                        <CarouselNext className='bg-neutral-900 border-neutral-300 hover:bg-neutral-200 active:bg-white' />
                    </Carousel>
                </div>
                <div
                    ref={ref4}
                    className={`place-items-center mt-60 transition-opacity duration-600 ease-in ${
                        inView4 ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <h1 className='text-6xl text-neutral-900 pb-10'>
                        The Perfect Gift
                    </h1>
                    <p className='w-8/12 text-center text-neutral-700 leading-8'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Doloremque ad, exercitationem quisquam ducimus
                        numquam iure quaerat, incidunt deserunt expedita tempore
                        at delectus quasi molestias necessitatibus sit est
                        reprehenderit odit ratione!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TheScape;
