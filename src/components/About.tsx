import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useRef, useState } from 'react';

const videoSrc = '/scape_final_aspect.mp4';
const posterSrc = '/images/scape_final_aspect_thumb.jpg';

const options = {
    triggerOnce: true,
    threshold: 0.2,
};

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: 'easeOut' as const },
    },
};
const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

function ProductVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);

    function handlePlay() {
        const video = videoRef.current;
        if (!video) return;
        void video.play();
        setPlaying(true);
    }

    return (
        <figure className='group relative aspect-video max-sm:aspect-square w-full overflow-hidden rounded-2xl border border-border bg-secondary shadow-sm'>
            <video
                ref={videoRef}
                className='h-full w-full object-cover'
                poster={posterSrc}
                controls={playing}
                preload='metadata'
                playsInline
                onPause={() => setPlaying(false)}
            >
                <source src={videoSrc} type='video/mp4' />
            </video>

            {!playing && (
                <button
                    type='button'
                    onClick={handlePlay}
                    className='absolute inset-0 flex flex-col items-center justify-center gap-4 bg-foreground/20 transition-colors duration-300 hover:bg-foreground/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
                    aria-label='Play the SCAPE by md product film'
                >
                    <span className='flex size-20 items-center justify-center rounded-full bg-background/95 text-primary shadow-lg transition-transform duration-300 group-hover:scale-105'>
                        <Play
                            className='ml-1 size-8 fill-current'
                            aria-hidden='true'
                        />
                    </span>
                    <span className='rounded-full bg-background/90 px-4 py-1.5 text-sm font-medium text-foreground'>
                        Watch the film
                    </span>
                </button>
            )}
        </figure>
    );
}

function About() {
    const [ref1, inView1] = useInView(options);
    const [ref2, inView2] = useInView(options);
    const [ref3, inView3] = useInView(options);
    const [ref4, inView4] = useInView(options);
    const [ref5, inView5] = useInView(options);

    const values = [
        {
            title: 'Craftsmanship',
            description:
                'Every piece is precision-crafted with attention to detail, ensuring the highest quality representation of Norwegian terrain.',
        },
        {
            title: 'Innovation',
            description:
                'We blend innovative data processing with traditional design principles to create something truly unique.',
        },
        {
            title: 'Sentimental Value',
            description:
                'Each piece capture places, memories, and moments that hold personal meaning.',
        },
    ];

    return (
        <div className='flex flex-col min-h-[100vh] w-full bg-surface'>
            <header className='flex h-auto font-normal z-2 gap-8 px-10 fixed place-content-center justify-evenly self-center text-foreground bg-primary/5 shadow-md backdrop-blur-md mt-6 p-3 rounded-full border border-neutral-100/40 max-sm:hidden'>
                <a
                    href='#about-us'
                    className='group text-[13px] font-medium tracking-wide'
                >
                    About Us
                    <span className='block max-w-0 group-hover:max-w-full transition-all duration-150 h-0.5 bg-foreground' />
                </a>
                <a
                    href='#the-team'
                    className='group text-[13px] font-medium tracking-wide'
                >
                    The Team
                    <span className='block max-w-0 group-hover:max-w-full transition-all duration-150 h-0.5 bg-foreground' />
                </a>
                <a
                    href='#values'
                    className='group text-[13px] font-medium tracking-wide'
                >
                    Our Values
                    <span className='block max-w-0 group-hover:max-w-full transition-all duration-150 h-0.5 bg-foreground' />
                </a>
                <a
                    href='#mission'
                    className='group text-[13px] font-medium tracking-wide'
                >
                    Our Mission
                    <span className='block max-w-0 group-hover:max-w-full transition-all duration-150 h-0.5 bg-foreground' />
                </a>
            </header>
            <div
                className='flex w-full items-center justify-center pt-20 max-sm:pt-5'
                id='about-us'
            >
                <img
                    src='/images/scape-logo-trans.webp'
                    className='mix-blend-difference max-sm:w-1/3 w-1/6'
                />
            </div>
            <div className='flex flex-col w-full text-neutral-900 self-center items-center text-center max-sm:text-left pb-20 max-sm:pt-0'>
                <div className='pt-5 pb-20 px-6'>
                    <motion.div
                        ref={ref1}
                        initial='hidden'
                        animate={inView1 ? 'visible' : 'hidden'}
                        variants={staggerContainer}
                        className='max-w-4xl mx-auto text-center max-sm:text-left space-y-4'
                    >
                        <motion.p
                            variants={fadeInUp}
                            className='text-xs sm:text-sm tracking-[0.25em] font-medium uppercase text-muted-foreground mb-4'
                        >
                            About Us
                        </motion.p>
                        <motion.h1
                            variants={fadeInUp}
                            className='text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-8 tracking-tight'
                        >
                            SCAPE by md
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            className='text-base sm:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed'
                        >
                            The project is driven by Maren and Daniel, a
                            Bergen-based couple who combine their different
                            strengths to bring landscapes to life.
                        </motion.p>
                        <motion.p
                            variants={fadeInUp}
                            className='text-base text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed'
                        >
                            Being based in Bergen, it’s difficult not to be
                            inspired by the surrounding mountains, fjords, and
                            dramatic landscapes that define the west coast of
                            Norway. SCAPE by md was created from a desire to
                            capture these environments in a tangible form -
                            combining modern technology with scandinavian design
                            to create detailed 3D terrain pieces with both
                            visual and sentimental value.
                        </motion.p>
                    </motion.div>
                </div>

                <div className='flex flex-col items-center py-12 px-6 w-full'>
                    <motion.div
                        ref={ref2}
                        initial='hidden'
                        animate={inView2 ? 'visible' : 'hidden'}
                        variants={staggerContainer}
                        className='max-w-6xl mx-auto'
                    >
                        <motion.div
                            variants={fadeInUp}
                            className='order-1 md:order-2 text-left'
                        >
                            <p className='text-xs sm:text-sm tracking-[0.25em] font-medium uppercase text-muted-foreground mb-4'>
                                The Craft in Motion
                            </p>
                            <h2 className='text-3xl sm:text-4xl font-medium text-foreground mb-6 tracking-tight'>
                                Bringing the SCAPE to Life
                            </h2>
                        </motion.div>
                        <motion.div className='md:w-6xl' variants={fadeInUp}>
                            <ProductVideo />
                        </motion.div>
                    </motion.div>
                </div>

                <div className='w-full py-20 px-6' id='the-team'>
                    <motion.div
                        ref={ref3}
                        initial='hidden'
                        animate={inView3 ? 'visible' : 'hidden'}
                        variants={staggerContainer}
                        className='max-w-5xl mx-auto'
                    >
                        <div className='grid md:grid-cols-2 gap-24 items-center'>
                            <motion.div
                                variants={fadeInUp}
                                className='order-2 md:order-1'
                            >
                                <div className='aspect-[4/5] bg-muted rounded-lg overflow-hidden'>
                                    <div className='w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center'>
                                        {/* <img src="" alt="Maren & Daniel" className='z-1' loading='lazy' /> */}
                                        <span className='text-6xl text-muted-foreground/20 font-light'>
                                            MD
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={fadeInUp}
                                className='order-1 md:order-2 text-left'
                            >
                                <p className='text-xs sm:text-sm tracking-[0.25em] font-medium uppercase text-muted-foreground mb-4'>
                                    The Team
                                </p>
                                <h2 className='text-3xl sm:text-4xl font-medium text-foreground mb-6 tracking-tight'>
                                    Maren & Daniel
                                </h2>
                                <div className='space-y-4 text-muted-foreground leading-relaxed text-base sm:text-lg'>
                                    <p>
                                        Maren brings her background in
                                        architecture and design, with an eye for
                                        aesthetics and spatial understanding
                                        that transforms raw data into visually
                                        stunning pieces.
                                    </p>
                                    <p>
                                        Daniel contributes his expertise in data
                                        engineering and computer science,
                                        building the technical foundation that
                                        processes elevation data with precision
                                        and accuracy.
                                    </p>
                                    <p>
                                        Together, we've created SCAPE by md,
                                        <br />a thoughtful venture that blends
                                        design, technology, and a deep love for
                                        crafting something special.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                <div className='py-24 px-6' id='values'>
                    <motion.div
                        ref={ref4}
                        initial='hidden'
                        animate={inView4 ? 'visible' : 'hidden'}
                        variants={staggerContainer}
                        className='max-w-6xl mx-auto text-left'
                    >
                        <motion.div
                            variants={fadeInUp}
                            className='text-left max-sm:text-left mb-16'
                        >
                            <p className='text-xs sm:text-sm tracking-[0.25em] font-medium uppercase text-muted-foreground mb-4'>
                                Our Values
                            </p>
                            <h2 className='text-3xl sm:text-4xl font-medium text-foreground tracking-tight'>
                                What We Believe
                            </h2>
                        </motion.div>
                        <div className='grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border'>
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    variants={fadeInUp}
                                    className='flex flex-col gap-3 px-0 sm:px-8 py-8 sm:py-0
                                                       first:pt-0 last:pb-0 sm:first:pl-0 sm:last:pr-0'
                                >
                                    <span className='text-base text-muted-foreground/70 tabular-nums'>
                                        0{index + 1}
                                    </span>

                                    <h3 className='text-base sm:text-lg font-medium text-surface-foreground leading-snug'>
                                        {value.title}
                                    </h3>

                                    <p className='text-sm text-muted-foreground leading-relaxed'>
                                        {value.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className='pt-24 px-6 bg-surface w-full' id='mission'>
                    <motion.div
                        ref={ref5}
                        initial='hidden'
                        animate={inView5 ? 'visible' : 'hidden'}
                        variants={staggerContainer}
                        className='max-w-4xl mx-auto text-center max-sm:text-left'
                    >
                        <motion.p
                            variants={fadeInUp}
                            className='text-xs sm:text-sm tracking-[0.25em] font-medium uppercase text-muted-foreground mb-4'
                        >
                            Our Mission
                        </motion.p>
                        <motion.h2
                            variants={fadeInUp}
                            className='text-3xl sm:text-4xl font-medium text-foreground mb-6 tracking-tight'
                        >
                            Bringing Landscapes to Life
                        </motion.h2>
                        <motion.p
                            variants={fadeInUp}
                            className='text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10'
                        >
                            We believe that every landscape tells a story. Our
                            mission is to help you preserve and celebrate the
                            places that matter most - transforming memories into
                            timeless art pieces that you can hold and display.
                        </motion.p>
                        <motion.a
                            variants={fadeInUp}
                            href='/get-started'
                            className='inline-flex group items-center px-8 py-4 text-sm font-medium bg-foreground border border-border text-primary-foreground rounded-full hover:bg-white hover:text-foreground transition-color'
                        >
                            Create Your Scape
                            <ArrowRight className='self-center w-[18px] text-primary-foreground relative max-sm:hidden left-2 top-[1px] p-0 m-0 group-hover:text-foreground group-hover:translate-x-2 transition-all duration-200 ease-out' />
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default About;
