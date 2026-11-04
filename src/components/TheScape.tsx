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
import { ArrowRight, Check } from 'lucide-react';
import type { CarouselApi } from './ui/carousel';
import { Badge } from './ui/badge';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const pillars = [
    {
        number: '01',
        tag: 'Cartography',
        title: 'Millimeter-Accurate Relief',
        description:
            'Every model is derived from geographic elevation data, translating real-world terrain into a detailed physical relief.',
        spec: 'Official GeoData',
    },
    {
        number: '02',
        tag: 'Materiality',
        title: 'Sculpted for Natural Light',
        description:
            'A refined matte finish brings out the contours of the terrain, with subtle shadows that shift as natural light moves through the room.',
        spec: 'Light-responsive matte surface',
    },
    {
        number: '03',
        tag: 'Craftsmanship',
        title: 'Finished to Fit Your Space',
        description:
            'Each piece is presented in a carefully selected frame, with oak, walnut, black and white finishes and your choice of passe-partout.',
        spec: 'Customisable framing',
    },
];

const studioImages = [
    {
        src: '/images/studio_product_oak.webp',
        alt: 'Oak frame with topographic relief',
        caption: 'Natural Oak',
    },
    {
        src: '/images/studio_product_model.webp',
        alt: 'Detailed close-up of 3D terrain elevation',
        caption: 'Terrain Relief Detail',
    },
    {
        src: '/images/studio_product_black.webp',
        alt: 'Satin black frame with custom landscape',
        caption: 'Satin Black',
    },
    {
        src: '/images/studio_product_collection.webp',
        alt: 'Collection of framed terrain models',
        caption: 'Studio Collection',
    },
];

function TheScape() {
    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: true,
        threshold: 0.15,
    });
    const { ref: ref3, inView: inView3 } = useInView({
        triggerOnce: true,
        threshold: 0.15,
    });
    const { ref: ref4, inView: inView4 } = useInView({
        triggerOnce: true,
        threshold: 0.15,
    });
    const { ref: ref5, inView: inView5 } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

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
        <section
            id='thescape'
            className='w-full bg-surface text-surface-foreground transition-colors'
        >
            {/* Header */}
            <div className='max-w-6xl mx-auto px-6 sm:px-10 pt-20 sm:pt-28 pb-12 sm:pb-16'>
                <motion.div
                    ref={ref1}
                    initial='hidden'
                    animate={inView1 ? 'visible' : 'hidden'}
                    variants={staggerContainer}
                    className='max-w-3xl text-left'
                >
                    <motion.p
                        variants={fadeInUp}
                        className='text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-4'
                    >
                        THE SCAPE
                    </motion.p>
                    <motion.h2
                        variants={fadeInUp}
                        className='font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-surface-foreground mb-6 leading-[1.1]'
                    >
                        From Map To Frame.
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className='font-sans text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl'
                    >
                        With just a few clicks you can transform any Norwegian
                        landscape into a stunning 3D topographic model. Our
                        service captures elevation data and terrain contours to
                        create precision-crafted artwork that celebrates the
                        beauty of your favorite places.
                    </motion.p>
                </motion.div>
            </div>

            {/* Selling points */}
            <div className='max-w-6xl mx-auto px-6 sm:px-10 pb-16 sm:pb-24'>
                <motion.div
                    ref={ref2}
                    initial='hidden'
                    animate={inView2 ? 'visible' : 'hidden'}
                    variants={staggerContainer}
                    className='pt-10 sm:pt-14'
                >
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 md:divide-y-0'>
                        {pillars.map((pillar) => (
                            <motion.div
                                key={pillar.number}
                                variants={fadeInUp}
                                className='flex flex-col justify-between text-left pt-6 first:pt-0 md:pt-0'
                            >
                                <div>
                                    <div className='flex items-center gap-2 mb-4'>
                                        <span className='font-mono text-xs uppercase tracking-wider text-muted-foreground/80'>
                                            {pillar.tag}
                                        </span>
                                    </div>
                                    <h3 className='font-display text-lg sm:text-xl font-bold text-surface-foreground tracking-tight mb-3'>
                                        {pillar.title}
                                    </h3>
                                    <p className='font-sans text-sm text-muted-foreground leading-relaxed mb-6'>
                                        {pillar.description}
                                    </p>
                                </div>
                                <div className='pt-2'>
                                    <span className='inline-flex items-center text-[11px] font-medium tracking-wide uppercase text-muted-foreground/80 bg-background/60 border border-border/80 px-2.5 py-1 rounded-md'>
                                        {pillar.spec}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Video Showcase */}
            <div className='max-w-6xl mx-auto px-6 sm:px-10 pb-16 sm:pb-24'>
                <motion.div
                    ref={ref3}
                    initial='hidden'
                    animate={inView3 ? 'visible' : 'hidden'}
                    variants={staggerContainer}
                    className='flex flex-col text-left'
                >
                    <motion.div variants={fadeInUp} className='mb-6'>
                        <Badge className='inline-flex text-xs font-medium text-surface-foreground border border-border px-3 py-1 mb-3 gap-2 bg-background/80 backdrop-blur-sm'>
                            <span className='h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse' />
                            Showcase
                        </Badge>
                        <h3 className='font-display text-2xl sm:text-3xl font-bold tracking-tight text-surface-foreground mb-2'>
                            How it works.
                        </h3>
                        <p className='font-sans text-sm sm:text-base text-muted-foreground max-w-xl'>
                            Explore our interactive map interface to select your
                            coordinates, adjust vertical relief scaling, and
                            preview the 3D model in real time.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        className='w-full rounded-2xl border border-border/80 overflow-hidden shadow-sm bg-muted/20'
                    >
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload='none'
                            poster={
                                window.innerWidth < 640
                                    ? '/images/demo-mobile-thumbnail.jpg'
                                    : '/images/thumbnail-1.jpg'
                            }
                            className='w-full border rounded-xl shadow-md'
                        >
                            <source
                                src={
                                    window.innerWidth < 640
                                        ? '/videos/demo-mobile.mp4'
                                        : '/videos/demo.mp4'
                                }
                                type='video/mp4'
                            />
                        </video>
                    </motion.div>
                </motion.div>
            </div>

            {/* Specifications & Product Photography Carousel */}
            <div className='max-w-6xl mx-auto px-6 sm:px-10 pb-16 sm:pb-24'>
                <motion.div
                    ref={ref4}
                    initial='hidden'
                    animate={inView4 ? 'visible' : 'hidden'}
                    variants={staggerContainer}
                >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center'>
                        {/* Left Column: Craft Story & Specifications */}
                        <motion.div variants={fadeInUp} className='text-left'>
                            <p className='text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-3'>
                                CRAFT & SPECIFICATIONS
                            </p>
                            <h3 className='font-display text-2xl sm:text-3xl md:text-4xl font-bold text-surface-foreground mb-6 tracking-tight'>
                                Designed for scandinavian interiors.
                            </h3>
                            <p className='font-sans text-sm sm:text-base text-muted-foreground leading-relaxed mb-6'>
                                Every SCAPE is made to order using
                                high-resolution data and our proprietary
                                modeling algorithm, ensuring clean edges and a
                                tactile texture that brings every landscape to
                                life.
                            </p>

                            <div className='space-y-4 pt-2'>
                                <div className='flex items-start gap-3'>
                                    <div className='size-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-surface-foreground'>
                                        <Check className='size-3 stroke-[2.5]' />
                                    </div>
                                    <div>
                                        <h4 className='text-sm font-semibold text-surface-foreground'>
                                            Made to order
                                        </h4>
                                        <p className='text-xs text-muted-foreground mt-0.5'>
                                            Each piece is produced individually for your order.
                                        </p>
                                    </div>
                                </div>

                                <div className='flex items-start gap-3'>
                                    <div className='size-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-surface-foreground'>
                                        <Check className='size-3 stroke-[2.5]' />
                                    </div>
                                    <div>
                                        <h4 className='text-sm font-semibold text-surface-foreground'>
                                            Made in Bergen
                                        </h4>
                                        <p className='text-xs text-muted-foreground mt-0.5'>
                                            Designed and produced in Bergen,
                                            Norway, with delivery throughout
                                            Norway.
                                        </p>
                                    </div>
                                </div>

                                <div className='flex items-start gap-3'>
                                    <div className='size-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-surface-foreground'>
                                        <Check className='size-3 stroke-[2.5]' />
                                    </div>
                                    <div>
                                        <h4 className='text-sm font-semibold text-surface-foreground'>
                                            A considered finish
                                        </h4>
                                        <p className='text-xs text-muted-foreground mt-0.5'>
                                            Assembled as a complete piece of wall art, ready to find its place in your home.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: High-End Photography Carousel */}
                        <motion.div variants={fadeInUp} className='relative'>
                            <Carousel
                                setApi={setApi}
                                className='w-full rounded-lg shadow-lg'
                            >
                                <CarouselContent>
                                    {studioImages.map((img) => (
                                        <CarouselItem key={img.alt}>
                                            <div className='aspect-[4/5] bg-muted rounded-lg overflow-hidden relative'>
                                                <img
                                                    src={img.src}
                                                    alt={img.alt}
                                                    className='w-full h-full object-cover'
                                                    loading='lazy'
                                                />
                                                <div className='absolute bottom-3 left-4 px-3 py-1 rounded-sm bg-black/60 backdrop-blur-md text-[11px] font-medium text-white'>
                                                    {img.caption}
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                                {/* Dot Indicators */}
                                <div className='absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1.5'>
                                    {Array.from({ length: count }).map(
                                        (_, index) => (
                                            <button
                                                key={index}
                                                aria-label={`Go to slide ${index + 1}`}
                                                className={`block h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                                                    current === index + 1
                                                        ? 'w-7 bg-white'
                                                        : 'w-2 bg-white/40'
                                                }`}
                                                onClick={() =>
                                                    api?.scrollTo(index)
                                                }
                                            />
                                        ),
                                    )}
                                </div>

                                <CarouselPrevious className='hidden sm:flex bg-primary border-border text-primary-foreground hover:bg-primary-foreground' />
                                <CarouselNext className='hidden sm:flex bg-primary border-border text-primary-foreground hover:bg-primary-foreground' />
                            </Carousel>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* CTA */}
            <div className=''>
                <div className='max-w-6xl mx-auto px-6 sm:px-10 py-16 sm:py-20'>
                    <motion.div
                        ref={ref5}
                        initial='hidden'
                        animate={inView5 ? 'visible' : 'hidden'}
                        variants={staggerContainer}
                        className='flex flex-col md:flex-row md:items-center md:justify-between gap-8 text-left'
                    >
                        <motion.div variants={fadeInUp} className='max-w-xl'>
                            <h3 className='font-display text-2xl sm:text-3xl md:text-4xl font-bold text-surface-foreground mb-3 tracking-tight'>
                                Try it out.
                            </h3>
                            <p className='font-sans text-sm sm:text-base text-muted-foreground leading-relaxed'>
                                Choose any coordinate across Norway. Preview the
                                3D model in real time, choose your framing, and
                                receive a bespoke art piece.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className='shrink-0'>
                            <a
                                href='/get-started'
                                className='inline-flex group items-center gap-3 px-8 py-3.5 text-sm font-semibold border border-border rounded-full bg-primary text-primary-foreground transition-all duration-200 hover:bg-primary-foreground hover:text-secondary-foreground'
                            >
                                Customize Yours
                                <ArrowRight className='w-4 h-4 transition-transform duration-200 group-hover:translate-x-1' />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default TheScape;
