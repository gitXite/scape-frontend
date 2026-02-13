import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from './ui/carousel';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import type { CarouselApi } from './ui/carousel';

const options = {
    triggerOnce: true,
    threshold: window.innerWidth < 768 ? 0.3 : 0.5,
};

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' as const },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

function TheScape() {
    const { ref: ref1, inView: inView1 } = useInView(options);
    const { ref: ref2, inView: inView2 } = useInView(options);
    const { ref: ref3, inView: inView3 } = useInView(options);
    const { ref: ref4, inView: inView4 } = useInView(options);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const features = [
        {
            title: 'Select',
            description:
                'Choose any location in Norway using our interactive map interface.',
        },
        {
            title: 'Generate',
            description:
                'Our system creates a precise 3D model from real terrain data.',
        },
        {
            title: 'Frame',
            description:
                'Select your preferred frame style and receive a stunning art piece.',
        },
    ];

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
            className='flex flex-col w-full bg-neutral-100 px-10 max-sm:px-5'
        >
            <div className='py-10 pb-5 md:py-20 px-6'>
                <motion.div
                    ref={ref1}
                    initial='hidden'
                    animate={inView1 ? 'visible' : 'hidden'}
                    variants={staggerContainer}
                    className='max-w-4xl mx-auto text-center mt-20'
                >
                    <motion.p
                        variants={fadeInUp}
                        className='text-sm tracking-[0.2em] font-medium uppercase text-muted-foreground mb-4'
                    >
                        The Scape
                    </motion.p>
                    <motion.h2
                        variants={fadeInUp}
                        className='text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-6 tracking-tight'
                    >
                        From Map To Frame
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className='text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed'
                    >
                        With just a few clicks you can transform any Norwegian
                        landscape into a stunning 3D topographic model. Our
                        service captures elevation data and terrain contours to
                        create precision-crafted artwork that celebrates the
                        beauty of your favorite places.
                    </motion.p>
                </motion.div>
            </div>

            <div className='py-10 md:py-20 px-6'>
                <motion.div
                    ref={ref2}
                    initial='hidden'
                    animate={inView2 ? 'visible' : 'hidden'}
                    variants={staggerContainer}
                    className='max-w-6xl mx-auto'
                >
                    <div className='grid md:grid-cols-3 gap-0 md:gap-12'>
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                variants={fadeInUp}
                                className='text-center p-8'
                            >
                                <div className='w-12 h-12 mx-auto mb-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-medium'>
                                    {index + 1}
                                </div>
                                <h3 className='text-xl font-medium text-foreground mb-3'>
                                    {feature.title}
                                </h3>
                                <p className='text-muted-foreground leading-relaxed'>
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className='flex w-full py-10 md:py-20 px-6'>
                <motion.div
                    ref={ref3}
                    initial='hidden'
                    animate={inView3 ? 'visible' : 'hidden'}
                    variants={staggerContainer}
                    className='w-full'
                >
                    <div className='w-full grid md:grid-cols-2 space-y-10 md:space-y-0 items-center justify-items-center max-sm:text-center'>
                        <motion.div
                            variants={fadeInUp}
                            className='w-full md:w-1/2'
                        >
                            <h3 className='text-4xl sm:text-5xl font-light text-foreground mb-6 tracking-tight'>
                                How It Works
                            </h3>
                            <p className='text-muted-foreground leading-relaxed mb-6'>
                                Creating and ordering your custom 3D landscape
                                is simple and seamless. Start by exploring the
                                map and selecting and exact area you want to
                                transform. Once your cutout is chosen, our
                                system instantly generates a preview of the 3D
                                model so you can see exactly how it will look.
                                When you are happy with the result, you can
                                choose your preferred appearance and framing
                                before placing your order.
                            </p>
                            <p className='text-muted-foreground leading-relaxed'>
                                From there, we handle the rest, producing your
                                model with care and delivering a high quality
                                piece that captures your chosen landscape in
                                beautiful detail.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className='relative w-full md:w-1/2'
                        >
                            <Carousel
                                setApi={setApi}
                                className='w-full rounded-sm drop-shadow-xl'
                            >
                                <CarouselContent className='rounded-sm'>
                                    <CarouselItem className=''>
                                        <img
                                            src='/images/studio_product_oak.webp'
                                            alt='Studio image oak frame'
                                            className='rounded-sm'
                                        />
                                    </CarouselItem>
                                    <CarouselItem className=''>
                                        <img
                                            src='/images/studio_product_model.webp'
                                            alt='Studio image model'
                                            className='rounded-sm'
                                        />
                                    </CarouselItem>
                                    <CarouselItem className=''>
                                        <img
                                            src='/images/studio_product_black.webp'
                                            alt='Studio image black frame'
                                            className='rounded-sm'
                                        />
                                    </CarouselItem>
                                    <CarouselItem className=''>
                                        <img
                                            src='/images/studio_product_collection.webp'
                                            alt='Studio collection'
                                            className='rounded-sm'
                                        />
                                    </CarouselItem>
                                </CarouselContent>

                                <div className='absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2'>
                                    {Array.from({ length: count }).map(
                                        (_, index) => (
                                            <button
                                                key={index}
                                                className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                                                    current === index + 1
                                                        ? 'w-8 bg-white'
                                                        : 'w-4 bg-white/50'
                                                }`}
                                                onClick={() =>
                                                    api?.scrollTo(index)
                                                }
                                            />
                                        ),
                                    )}
                                </div>

                                <CarouselPrevious className='bg-neutral-900 border-neutral-300 hover:bg-neutral-200 active:bg-white max-sm:hidden' />
                                <CarouselNext className='bg-neutral-900 border-neutral-300 hover:bg-neutral-200 active:bg-white max-sm:hidden' />
                            </Carousel>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                ref={ref4}
                initial='hidden'
                animate={inView4 ? 'visible' : 'hidden'}
                variants={staggerContainer}
                className={'w-full mt-20 px-6 transition-opacity duration-600 ease-in pb-8 md:pb-20'}
            >
                <motion.div className='text-center' variants={fadeInUp}>
                    <h3 className='text-3xl sm:text-4xl font-light text-neutral-900 mb-6 tracking-tight'>
                        Ready to create your scape?
                    </h3>
                    <p className='text-neutral-900/60 mb-10 max-w-xl mx-auto'>
                        Start exploring the map and transform your favorite
                        Norwegian landscape into a stunning 3D artwork.
                    </p>
                    <a
                        href='/get-started'
                        className='inline-flex group items-center px-9 py-4 text-sm font-medium rounded-full shadow-sm bg-neutral-900 border-neutral-300 border-1 hover:bg-neutral-200 active:bg-white text-neutral-100 hover:text-neutral-900 transition-all'
                    >
                        Get Started
                        <ArrowRight className='self-center w-[18px] text-neutral-100 group-hover:text-neutral-900 relative max-sm:hidden left-4 top-[1px] p-0 m-0 group-hover:translate-x-2 transition-all duration-200 ease-out' />
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default TheScape;
