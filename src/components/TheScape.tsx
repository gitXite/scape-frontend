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

const options = {
    triggerOnce: false,
    threshold: 0.3,
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
            className='grid grid-cols-2 max-lg:flex max-lg:flex-col gap-x-20 w-full bg-neutral-100 min-h-[200vh] px-10 max-sm:px-5 py-10'
        >
            <div className='flex flex-col items-center gap-y-80 mt-20 max-lg:gap-y-40'>
                <div
                    ref={ref1}
                    className={`place-items-center transition-opacity duration-600 ease-in ${
                        inView1 ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <h1 className='text-6xl max-lg:text-5xl text-neutral-900 pb-10'>
                        From Map To Frame
                    </h1>
                    <p className='w-8/12 max-sm:w-full text-center text-neutral-700 leading-8'>
                        With just a few clicks, you can transform any map location within Norway into a stunning and fully detailed 3D model. 
                        Simply choose your area of interest and our service automatically creates a precise topographic cutout, 
                        capturing terrain contours, elevation data, and the unique geographic character of the landscape. 
                        The result is a clear and visually compelling 3D repsesentation that is ready for planning, design, visualization, or display. 
                        Whether you want to highlight a favourite place, prepare a project, or explore terrain in a completely new way, our service makes complex spatial data effortless, 
                        intuitive, and beautifully rendered. 
                    </p>
                </div>
                <div
                    ref={ref2}
                    className={`place-items-center mt-80 max-lg:mt-0 transition-opacity duration-600 ease-in ${
                        inView2 ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <h1 className='text-6xl max-lg:text-5xl text-neutral-900 pb-10'>
                        Made By MD
                    </h1>
                    <p className='w-8/12 max-sm:w-full text-center text-neutral-700 leading-8'>
                        We are Maren and Daniel, a newly engaged couple turning our shared creativity into a meaningful side project as we save up for our wedding. 
                        Maren brings her background in architecture, an eye for design, and a passion for spatial experiences. 
                        Daniel contributes his skills as a data engineering and computer science student, 
                        combining techical insight with problem solving curiosity. 
                        Together, we've created a small but thoughtful venture that blends design, technology, and a love for crafting something special. 
                    </p>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center gap-y-80 max-lg:gap-y-40 mt-40'>
                <div
                    ref={ref3}
                    className={`place-items-center transition-opacity duration-600 ease-in ${
                        inView3 ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <Carousel setApi={setApi} className='w-3/4 max-sm:w-full rounded-sm drop-shadow-xl'>
                        <CarouselContent className='rounded-sm'>
                            <CarouselItem className=''>
                                <img
                                    src='/images/product-image-straight.png'
                                    alt='Image 1'
                                    className='rounded-sm'
                                />
                            </CarouselItem>
                            <CarouselItem className=''>
                                <img
                                    src='/images/product-image-angle.png'
                                    alt='Image 2'
                                    className='rounded-sm'
                                />
                            </CarouselItem>
                            <CarouselItem className=''>
                                <img
                                    src='/images/product-image-angle-alps.png'
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
                        
                        <CarouselPrevious className='bg-neutral-900 border-neutral-300 hover:bg-neutral-200 active:bg-white max-sm:hidden' />
                        <CarouselNext className='bg-neutral-900 border-neutral-300 hover:bg-neutral-200 active:bg-white max-sm:hidden' />
                    </Carousel>
                </div>
                <div
                    ref={ref4}
                    className={`place-items-center mt-60 max-lg:mt-0 transition-opacity duration-600 ease-in ${
                        inView4 ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <h1 className='text-6xl max-lg:text-5xl text-neutral-900 pb-10'>
                        How It Works
                    </h1>
                    <p className='w-8/12 max-sm:w-full text-center text-neutral-700 leading-8'>
                        Creating and ordering your custom 3D landscape is simple and seamless. 
                        Start by exploring the map and selecting and exact area you want to transform. 
                        Once your cutout is chosen, our system instantly generates a preview of the 3D model so oyu can see exactly how it will look. 
                        When you are happy with the result, you can choose your preferred appearance and framing before placing your order. 
                        From there, we handle the rest, producing your model with care and delivering a high quality piece that captures your chosen landscape in beautiful detail. 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TheScape;
