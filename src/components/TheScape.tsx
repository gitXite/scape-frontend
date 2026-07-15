import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from './ui/carousel';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { CarouselApi } from './ui/carousel';
import { Badge } from './ui/badge';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' as const },
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
    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });
    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });
    const { ref: ref3, inView: inView3 } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });
    const { ref: ref4, inView: inView4 } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const { ref: ref5, inView: inView5 } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });
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
        <section id='thescape' className='w-full bg-surface'>
            {/* Hero text */}
            <div className='px-6 sm:px-10 pt-20 sm:pt-32 pb-10 sm:pb-16'>
                <motion.div
                    ref={ref1}
                    initial='hidden'
                    animate={inView1 ? 'visible' : 'hidden'}
                    variants={staggerContainer}
                    className='max-w-3xl mx-auto text-center'
                >
                    <motion.p
                        variants={fadeInUp}
                        className='text-xs sm:text-sm tracking-[0.25em] font-medium uppercase text-muted-foreground mb-4'
                    >
                        The Scape
                    </motion.p>
                    <motion.h2
                        variants={fadeInUp}
                        className='text-3xl sm:text-4xl md:text-5xl font-medium text-surface-foreground mb-6 tracking-tight leading-tight'
                    >
                        From Map To Frame
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className='text-base sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed'
                    >
                        With just a few clicks you can transform any Norwegian
                        landscape into a stunning 3D topographic model. Our
                        service captures elevation data and terrain contours to
                        create precision-crafted artwork that celebrates the
                        beauty of your favorite places.
                    </motion.p>
                </motion.div>
            </div>

            {/* Feature steps */}
            <div className='px-6 sm:px-10 py-10 sm:py-16'>
                <motion.div
                    ref={ref2}
                    initial='hidden'
                    animate={inView2 ? 'visible' : 'hidden'}
                    variants={staggerContainer}
                    className='max-w-5xl mx-auto'
                >
                    <div className='grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border'>
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                variants={fadeInUp}
                                className='flex flex-col gap-3 px-0 sm:px-8 py-8 sm:py-0
                               first:pt-0 last:pb-0 sm:first:pl-0 sm:last:pr-0'
                            >
                                <span className='text-xs text-muted-foreground/70 tabular-nums'>
                                    0{index + 1}
                                </span>

                                <h3 className='text-base sm:text-lg font-medium text-surface-foreground leading-snug'>
                                    {feature.title}
                                </h3>

                                <p className='text-sm text-muted-foreground leading-relaxed'>
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className='px-6 sm:px-10 py-5 sm:py-10'>
                <motion.div
                    ref={ref3}
                    initial='hidden'
                    animate={inView3 ? 'visible' : 'hidden'}
                    variants={fadeInUp}
                    className='flex flex-col max-w-6xl mx-auto items-center justify-center'
                >
                    <Badge className='inline-flex text-xs text-foreground border border-border self-start px-3 mb-2 ml-4 gap-2 bg-background'>
                        <span className='animate-pulse h-1.5 w-1.5 rounded-full bg-green-600' />
                        The Process
                    </Badge>
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload='none'
                        poster={window.innerWidth < 640 ? '/images/demo-mobile-thumbnail.jpg' : '/images/thumbnail-1.jpg'}
                        className='w-full border rounded-xl shadow-md'
                    >
                        <source src={window.innerWidth < 640 ? '/videos/demo-mobile.mp4' : '/videos/demo.mp4'} type='video/mp4' />
                    </video>
                </motion.div>
            </div>

            {/* How it works + Carousel */}
            <div className='px-6 sm:px-10 py-10 sm:py-20'>
                <motion.div
                    ref={ref4}
                    initial='hidden'
                    animate={inView4 ? 'visible' : 'hidden'}
                    variants={staggerContainer}
                    className='max-w-6xl mx-auto'
                >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center'>
                        <motion.div
                            variants={fadeInUp}
                            className='text-center md:text-left'
                        >
                            <h3 className='text-3xl sm:text-4xl md:text-5xl font-medium text-surface-foreground mb-6 tracking-tight'>
                                How It Works
                            </h3>
                            <p className='text-muted-foreground leading-relaxed mb-5 text-sm sm:text-base'>
                                Creating and ordering your custom 3D landscape
                                is simple and seamless. Start by exploring the
                                map and selecting the exact area you want to
                                transform. Once your cutout is chosen, our
                                system instantly generates a preview of the 3D
                                model so you can see exactly how it will look.
                            </p>
                            <p className='text-muted-foreground leading-relaxed text-sm sm:text-base'>
                                From there, we handle the rest - producing your
                                model with care and delivering a high quality
                                piece that captures your chosen landscape in
                                beautiful detail.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className='relative'>
                            <Carousel
                                setApi={setApi}
                                className='w-full rounded-lg shadow-xl'
                            >
                                <CarouselContent>
                                    {[
                                        {
                                            src: '/images/studio_product_oak.webp',
                                            alt: 'Oak frame',
                                        },
                                        {
                                            src: '/images/studio_product_model.webp',
                                            alt: 'Model',
                                        },
                                        {
                                            src: '/images/studio_product_black.webp',
                                            alt: 'Black frame',
                                        },
                                        {
                                            src: '/images/studio_product_collection.webp',
                                            alt: 'Collection',
                                        },
                                    ].map((img) => (
                                        <CarouselItem key={img.alt}>
                                            <div className='aspect-[4/5] bg-muted rounded-lg overflow-hidden'>
                                                <img
                                                    src={img.src}
                                                    alt={img.alt}
                                                    className='w-full h-full object-cover'
                                                    loading='lazy'
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                                <div className='absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2'>
                                    {Array.from({ length: count }).map(
                                        (_, index) => (
                                            <button
                                                key={index}
                                                className={`block h-1 cursor-pointer rounded-full transition-all duration-300 ${
                                                    current === index + 1
                                                        ? 'w-8 bg-primary-foreground'
                                                        : 'w-4 bg-primary-foreground/40'
                                                }`}
                                                onClick={() =>
                                                    api?.scrollTo(index)
                                                }
                                            />
                                        ),
                                    )}
                                </div>

                                <CarouselPrevious className='hidden xl:flex bg-primary border-border text-primary-foreground hover:bg-primary-foreground' />
                                <CarouselNext className='hidden xl:flex bg-primary border-border text-primary-foreground hover:bg-primary-foreground' />
                            </Carousel>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* CTA */}
            <motion.div
                ref={ref5}
                initial='hidden'
                animate={inView5 ? 'visible' : 'hidden'}
                variants={staggerContainer}
                className='px-6 sm:px-10 py-10 sm:py-18'
            >
                <motion.div
                    className='text-center max-w-xl mx-auto'
                    variants={fadeInUp}
                >
                    <h3 className='text-2xl sm:text-3xl md:text-4xl font-medium text-surface-foreground mb-5 tracking-tight'>
                        Ready to create your scape?
                    </h3>
                    <p className='text-muted-foreground mb-8 text-sm sm:text-base'>
                        Start exploring the map and transform your favorite
                        Norwegian landscape into a stunning 3D artwork.
                    </p>
                    <a
                        href='/get-started'
                        className='inline-flex group items-center gap-3 px-15 sm:px-10 py-4 text-sm font-medium rounded-full bg-primary text-primary-foreground border border-border hover:bg-primary-foreground hover:text-secondary-foreground transition-all duration-300'
                    >
                        Get Started
                        <ArrowRight className='w-4 h-4 hidden sm:block group-hover:translate-x-1.5 transition-transform duration-200' />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default TheScape;
