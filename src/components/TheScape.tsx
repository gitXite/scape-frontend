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
import { useTranslation } from 'react-i18next';

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

function TheScape() {
    const { t } = useTranslation('home');

    const pillars = [
        {
            number: '01',
            tag: t('theScape.pillars.p1.tag'),
            title: t('theScape.pillars.p1.title'),
            description: t('theScape.pillars.p1.description'),
            spec: t('theScape.pillars.p1.spec'),
        },
        {
            number: '02',
            tag: t('theScape.pillars.p2.tag'),
            title: t('theScape.pillars.p2.title'),
            description: t('theScape.pillars.p2.description'),
            spec: t('theScape.pillars.p2.spec'),
        },
        {
            number: '03',
            tag: t('theScape.pillars.p3.tag'),
            title: t('theScape.pillars.p3.title'),
            description: t('theScape.pillars.p3.description'),
            spec: t('theScape.pillars.p3.spec'),
        },
    ];

    const studioImages = [
        {
            src: '/images/IMG_0444.avif',
            alt: 'Oak frame with topographic relief',
            caption: t('theScape.captions.oak'),
        },
        {
            src: '/images/IMG_0467.avif',
            alt: 'Detailed close-up of 3D terrain elevation',
            caption: t('theScape.captions.oak'),
        },
        {
            src: '/images/IMG_0453.avif',
            alt: 'Oak frame, alternative angle',
            caption: t('theScape.captions.oak'),
        },
        {
            src: '/images/IMG_0443.avif',
            alt: 'Oak frame, wide angle',
            caption: t('theScape.captions.oak'),
        },
        {
            src: '/images/IMG_0473.avif',
            alt: 'Oak frame, angled',
            caption: t('theScape.captions.oak'),
        },
        {
            src: '/images/studio_product_collection.webp',
            alt: 'Collection of framed terrain models',
            caption: t('theScape.captions.studioCollection'),
        },
    ];
    const imageClasses = [
        '',
        '',
        '',
        '',
        '',
        'object-cover object-center'
    ];

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
                        {t('theScape.eyebrow')}
                    </motion.p>
                    <motion.h2
                        variants={fadeInUp}
                        className='font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-surface-foreground mb-6 leading-[1.1]'
                    >
                        {t('theScape.title')}
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className='font-sans text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl'
                    >
                        {t('theScape.description')}
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
                            {t('theScape.showcase.badge')}
                        </Badge>
                        <h3 className='font-display text-2xl sm:text-3xl font-bold tracking-tight text-surface-foreground mb-2'>
                            {t('theScape.showcase.title')}
                        </h3>
                        <p className='font-sans text-sm sm:text-base text-muted-foreground max-w-xl'>
                            {t('theScape.showcase.description')}
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
                                {t('theScape.specs.eyebrow')}
                            </p>
                            <h3 className='font-display text-2xl sm:text-3xl md:text-4xl font-bold text-surface-foreground mb-6 tracking-tight'>
                                {t('theScape.specs.title')}
                            </h3>
                            <p className='font-sans text-sm sm:text-base text-muted-foreground leading-relaxed mb-6'>
                                {t('theScape.specs.description')}
                            </p>

                            <div className='space-y-4 pt-2'>
                                <div className='flex items-start gap-3'>
                                    <div className='size-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-surface-foreground'>
                                        <Check className='size-3 stroke-[2.5]' />
                                    </div>
                                    <div>
                                        <h4 className='text-sm font-semibold text-surface-foreground'>
                                            {t('theScape.specs.points.madeToOrder.title')}
                                        </h4>
                                        <p className='text-xs text-muted-foreground mt-0.5'>
                                            {t('theScape.specs.points.madeToOrder.desc')}
                                        </p>
                                    </div>
                                </div>

                                <div className='flex items-start gap-3'>
                                    <div className='size-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-surface-foreground'>
                                        <Check className='size-3 stroke-[2.5]' />
                                    </div>
                                    <div>
                                        <h4 className='text-sm font-semibold text-surface-foreground'>
                                            {t('theScape.specs.points.madeInBergen.title')}
                                        </h4>
                                        <p className='text-xs text-muted-foreground mt-0.5'>
                                            {t('theScape.specs.points.madeInBergen.desc')}
                                        </p>
                                    </div>
                                </div>

                                <div className='flex items-start gap-3'>
                                    <div className='size-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-surface-foreground'>
                                        <Check className='size-3 stroke-[2.5]' />
                                    </div>
                                    <div>
                                        <h4 className='text-sm font-semibold text-surface-foreground'>
                                            {t('theScape.specs.points.finish.title')}
                                        </h4>
                                        <p className='text-xs text-muted-foreground mt-0.5'>
                                            {t('theScape.specs.points.finish.desc')}
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
                                    {studioImages.map((img, index) => (
                                        <CarouselItem key={img.alt}>
                                            <div className='aspect-[4/5] bg-muted rounded-lg overflow-hidden relative'>
                                                <img
                                                    src={img.src}
                                                    alt={img.alt}
                                                    className={`h-full w-full ${imageClasses[index]}`}
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
                                {t('theScape.cta.title')}
                            </h3>
                            <p className='font-sans text-sm sm:text-base text-muted-foreground leading-relaxed'>
                                {t('theScape.cta.description')}
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className='shrink-0'>
                            <a
                                href='/get-started'
                                className='inline-flex group items-center gap-3 px-8 py-3.5 text-sm font-semibold border border-border rounded-full bg-primary text-primary-foreground shadow-xs transition-all duration-200 hover:bg-primary-foreground hover:text-secondary-foreground'
                            >
                                {t('theScape.cta.button')}
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
