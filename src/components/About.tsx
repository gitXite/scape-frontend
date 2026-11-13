import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Play,
    Compass,
    Layers,
    Sparkles,
    MapPin,
} from 'lucide-react';
import { useRef, useState } from 'react';
import { Badge } from './ui/badge';

const videoSrc = '/videos/scape_final_aspect.mp4';
const posterSrc = '/images/scape_final_aspect_thumb.jpg';

const options = {
    triggerOnce: true,
    threshold: 0.15,
};

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

const craftValues = [
    {
        number: '01',
        tag: 'Cartography',
        title: 'Every Contour Tells a Story',
        description:
            'We do not approximate nature. We use official digital elevation data to capture the real shape of the landscape, preserving the distinctive features of places that matter to you.',
        spec: 'High Fidelity',
        icon: Compass,
    },
    {
        number: '02',
        tag: 'Scandinavian Design',
        title: 'Sculpted for Scandinavian Interiors',
        description:
            'Designed to complement Scandinavian interiors, each terrain model combines clean lines, natural forms and understated colours to bring a subtle connection to the landscape into your home.',
        spec: 'Designed for modern interiors',
        icon: Layers,
    },
    {
        number: '03',
        tag: 'Personal Meaning',
        title: 'An Anchor to Places That Matter',
        description:
            'Whether it’s a family cabin in Hemsedal, a summit in Jotunheimen, or the archipelago where you grew up - each SCAPE is a tactile anchor to a memory in the landscape.',
        spec: 'Bespoke commissions',
        icon: Sparkles,
    },
];

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
        <figure className='group relative aspect-video max-sm:aspect-[3/4] w-full overflow-hidden rounded-2xl border border-border/80 bg-muted/30 shadow-sm'>
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
                    className='absolute inset-0 flex flex-col items-center justify-center gap-4 bg-primary/25 backdrop-blur-[2px] transition-all duration-300 hover:bg-primary/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 cursor-pointer'
                    aria-label='Play the SCAPE by md product film'
                >
                    <span className='flex size-18 sm:size-20 items-center justify-center rounded-full bg-background/95 text-primary shadow-xl transition-transform duration-300 group-hover:scale-105'>
                        <Play
                            className='ml-1 size-7 sm:size-8 fill-current'
                            aria-hidden='true'
                        />
                    </span>
                    <span className='rounded-full bg-background/90 px-4 py-1.5 text-xs sm:text-sm font-medium text-foreground tracking-wide border border-border/60 shadow-sm'>
                        Watch the film (0:31)
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

    return (
        <div className='flex flex-col min-h-screen w-full bg-surface text-surface-foreground font-sans'>
            {/* Desktop in-page sticky sub-nav */}
            <nav
                aria-label='About Page Navigation'
                className='fixed top-6 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center gap-8 px-8 py-2.5 rounded-full bg-background/80 backdrop-blur-md border border-border/80 shadow-sm text-xs font-medium text-muted-foreground'
            >
                <a
                    href='#story'
                    className='hover:text-foreground transition-colors duration-150'
                >
                    Story
                </a>
                <a
                    href='#film'
                    className='hover:text-foreground transition-colors duration-150'
                >
                    Film
                </a>
                <a
                    href='#founders'
                    className='hover:text-foreground transition-colors duration-150'
                >
                    Founders
                </a>
                <a
                    href='#values'
                    className='hover:text-foreground transition-colors duration-150'
                >
                    Values
                </a>
                <a
                    href='#mission'
                    className='hover:text-foreground transition-colors duration-150'
                >
                    Mission
                </a>
            </nav>

            {/* Mobile Header / Brand Anchor */}
            <div className='pt-12 pb-6 px-6 sm:px-10 max-w-6xl mx-auto w-full flex items-center justify-between sm:hidden'>
                <h2 className='text-2xl font-display tracking-[0.2em] text-surface-foreground whitespace-nowrap'>
                    <span>SC</span>
                    <span className='tracking-normal'>/\</span>
                    <span className='pl-1.5'>PE</span>
                </h2>
                <a
                    href='/'
                    className='text-xs font-medium text-muted-foreground hover:text-surface-foreground transition-colors flex items-center gap-1'
                >
                    Back to Home
                </a>
            </div>

            {/* Editorial Hero Section */}
            <section id='story' className='w-full pt-6 sm:pt-28 pb-16 sm:pb-24'>
                <div className='max-w-6xl mx-auto px-6 sm:px-10'>
                    <motion.div
                        ref={ref1}
                        initial='hidden'
                        animate={inView1 ? 'visible' : 'hidden'}
                        variants={staggerContainer}
                        className='text-left max-w-4xl'
                    >
                        <motion.div
                            variants={fadeInUp}
                            className='flex items-center gap-2 mb-4'
                        >
                            <Badge className='inline-flex text-xs font-medium text-surface-foreground border border-border px-3 py-1 gap-2 bg-background/80 backdrop-blur-sm'>
                                <MapPin className='w-3 h-3 text-muted-foreground' />
                                Bergen, Norway
                            </Badge>
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className='font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-surface-foreground mb-8 leading-[1.08]'
                        >
                            Topography as art.
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className='font-sans text-lg sm:text-xl text-surface-foreground/90 leading-relaxed font-normal mb-8 max-w-3xl'
                        >
                            Born on the west coast of Norway, SCAPE by md
                            translates the dramatic topography of mountains,
                            fjords, and coastlines into architectural 3D reliefs
                            for contemporary Scandinavian spaces.
                        </motion.p>
                    </motion.div>

                    {/* Editorial Story Split: Narrative + Studio Photography */}
                    <motion.div
                        ref={ref1}
                        initial='hidden'
                        animate={inView1 ? 'visible' : 'hidden'}
                        variants={staggerContainer}
                        className='grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 pt-8 items-start text-left'
                    >
                        <div className='md:sticky md:top-25 md:col-span-7 space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed'>
                            <motion.p variants={fadeInUp}>
                                Being based in Bergen, it’s difficult not to be
                                inspired by the surrounding mountains, fjords,
                                and dramatic landscapes that define the west
                                coast of Norway. SCAPE by md was created from a
                                desire to capture these environments in a
                                tangible form - combining modern technology with
                                scandinavian design to create detailed 3D
                                terrain pieces with both visual and sentimental
                                value.
                            </motion.p>
                            <motion.p variants={fadeInUp}>
                                Every piece is designed and produced to order in
                                our Bergen workshop.
                            </motion.p>
                        </div>

                        <div className='md:col-span-5'>
                            <div className='relative rounded-lg overflow-hidden border border-border/80 shadow-sm bg-muted'>
                                <img
                                    src='/images/studio_product_collection.webp'
                                    alt='Collection of framed topographic models crafted in Bergen'
                                    className='w-full h-full object-cover transition-transform duration-500'
                                    loading='lazy'
                                />
                                <div className='absolute bottom-3 left-4 px-3 py-1 rounded-sm bg-black/60 backdrop-blur-md text-[11px] font-medium text-white'>
                                    <span>Studio Collection</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Process Film / The Craft in Motion */}
            <section id='film' className='w-full py-16 sm:py-24'>
                <div className='max-w-6xl mx-auto px-6 sm:px-10 text-left'>
                    <motion.div
                        ref={ref2}
                        initial='hidden'
                        animate={inView2 ? 'visible' : 'hidden'}
                        variants={staggerContainer}
                    >
                        <motion.div
                            variants={fadeInUp}
                            className='max-w-2xl mb-8 sm:mb-10'
                        >
                            <p className='text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-3'>
                                THE CRAFT IN MOTION
                            </p>
                            <h2 className='font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-surface-foreground mb-4 leading-tight'>
                                Bring your landscape to life.
                            </h2>
                        </motion.div>

                        <motion.div variants={fadeInUp} className='w-full'>
                            <ProductVideo />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 3. The Atelier / Founders Section */}
            <section
                id='founders'
                className='w-full py-16 sm:py-24 border-b border-border/60'
            >
                <div className='max-w-6xl mx-auto px-6 sm:px-10 text-left'>
                    <motion.div
                        ref={ref3}
                        initial='hidden'
                        animate={inView3 ? 'visible' : 'hidden'}
                        variants={staggerContainer}
                    >
                        <motion.div
                            variants={fadeInUp}
                            className='max-w-2xl mb-12 sm:mb-16'
                        >
                            <p className='text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-3'>
                                THE FOUNDERS
                            </p>
                            <h2 className='font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-surface-foreground mb-4 leading-tight'>
                                Architecture meets data engineering.
                            </h2>
                            <p className='font-sans text-base sm:text-lg text-muted-foreground leading-relaxed'>
                                SCAPE is created by Maren and Daniel. Our
                                practice unites spatial architectural design
                                with geospatial computing to create quality art.
                            </p>
                        </motion.div>

                        {/* Founder discipline cards */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                            <motion.div
                                variants={fadeInUp}
                                className='p-8 rounded-2xl bg-background border border-border/80 shadow-sm flex flex-col justify-between'
                            >
                                <div>
                                    <div className='flex items-center justify-between mb-6'>
                                        <span className='font-mono text-xs uppercase tracking-wider text-muted-foreground/80'>
                                            Architecture & Design
                                        </span>
                                        <span className='text-xs font-semibold text-surface-foreground/80 bg-muted px-2.5 py-1 rounded-full'>
                                            Co-Founder
                                        </span>
                                    </div>
                                    <h3 className='font-display text-2xl font-bold text-surface-foreground tracking-tight mb-4'>
                                        Maren
                                    </h3>
                                    <p className='font-sans text-sm sm:text-base text-muted-foreground leading-relaxed mb-6'>
                                        With an educational foundation in
                                        architecture, Maren defines the physical
                                        aesthetics, proportion, and quality. She
                                        had the idea initially, which we then
                                        perfected over multiple iterations.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={fadeInUp}
                                className='p-8 rounded-2xl bg-background border border-border/80 shadow-sm flex flex-col justify-between'
                            >
                                <div>
                                    <div className='flex items-center justify-between mb-6'>
                                        <span className='font-mono text-xs uppercase tracking-wider text-muted-foreground/80'>
                                            Data Engineering & Software
                                        </span>
                                        <span className='text-xs font-semibold text-surface-foreground/80 bg-muted px-2.5 py-1 rounded-full'>
                                            Co-Founder
                                        </span>
                                    </div>
                                    <h3 className='font-display text-2xl font-bold text-surface-foreground tracking-tight mb-4'>
                                        Daniel
                                    </h3>
                                    <p className='font-sans text-sm sm:text-base text-muted-foreground leading-relaxed mb-6'>
                                        With a background in computer science
                                        and data systems, Daniel built the
                                        algorithmic engine that interfaces
                                        directly with Norway’s elevation
                                        databases. He translates gigabytes of
                                        raw binary data into high-resolution
                                        physical topography.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 4. Craft Values / Architectural Pillars */}
            <section
                id='values'
                className='w-full py-16 sm:py-24 border-b border-border/60 bg-background/50'
            >
                <div className='max-w-6xl mx-auto px-6 sm:px-10 text-left'>
                    <motion.div
                        ref={ref4}
                        initial='hidden'
                        animate={inView4 ? 'visible' : 'hidden'}
                        variants={staggerContainer}
                    >
                        <motion.div
                            variants={fadeInUp}
                            className='max-w-2xl mb-12 sm:mb-16'
                        >
                            <p className='text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-3'>
                                OUR PRINCIPLES
                            </p>
                            <h2 className='font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-surface-foreground mb-4 leading-tight'>
                                What defines a SCAPE.
                            </h2>
                            <p className='font-sans text-base sm:text-lg text-muted-foreground leading-relaxed'>
                                Every piece we craft adheres to our three
                                foundational standards.
                            </p>
                        </motion.div>

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12'>
                            {craftValues.map((value) => {
                                const Icon = value.icon;
                                return (
                                    <motion.div
                                        key={value.number}
                                        variants={fadeInUp}
                                        className='flex flex-col justify-between text-left p-6 sm:p-8 rounded-2xl bg-surface border border-border/80 shadow-xs'
                                    >
                                        <div>
                                            <div className='flex items-center justify-between mb-5'>
                                                <span className='font-mono text-xs uppercase tracking-wider text-muted-foreground/80'>
                                                    {value.tag}
                                                </span>
                                                <div className='size-8 rounded-full bg-primary/10 flex items-center justify-center text-surface-foreground'>
                                                    <Icon className='w-4 h-4' />
                                                </div>
                                            </div>
                                            <h3 className='font-display text-lg sm:text-xl font-bold text-surface-foreground tracking-tight mb-3'>
                                                {value.title}
                                            </h3>
                                            <p className='font-sans text-sm text-muted-foreground leading-relaxed mb-6'>
                                                {value.description}
                                            </p>
                                        </div>
                                        <div className='pt-2'>
                                            <span className='inline-flex items-center text-[11px] font-medium tracking-wide uppercase text-muted-foreground/80 bg-background/60 border border-border/80 px-2.5 py-1 rounded-md'>
                                                {value.spec}
                                            </span>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 5. Mission & Final Editorial Call to Action */}
            <section id='mission' className='w-full py-20 sm:py-28'>
                <div className='max-w-6xl mx-auto px-6 sm:px-10 text-left'>
                    <motion.div
                        ref={ref5}
                        initial='hidden'
                        animate={inView5 ? 'visible' : 'hidden'}
                        variants={staggerContainer}
                        className='flex flex-col md:flex-row md:items-center md:justify-between gap-10'
                    >
                        <motion.div variants={fadeInUp} className='max-w-2xl'>
                            <p className='text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-3'>
                                GET STARTED
                            </p>
                            <h2 className='font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-surface-foreground mb-4 leading-tight'>
                                Frame your memories.
                            </h2>
                            <p className='font-sans text-base sm:text-lg text-muted-foreground leading-relaxed'>
                                We believe that every landscape tells a story.
                                Our mission is to help you preserve and
                                celebrate the places that matter most -
                                transforming memories into timeless art pieces
                                that you can hold and display.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className='shrink-0'>
                            <a
                                href='/get-started'
                                className='inline-flex group items-center gap-3 px-8 py-4 text-sm font-semibold border border-border rounded-full bg-primary text-primary-foreground transition-all duration-200 shadow-xs hover:bg-primary-foreground hover:text-secondary-foreground cursor-pointer'
                            >
                                Customize Your Scape
                                <ArrowRight className='w-4 h-4 transition-transform duration-200 group-hover:translate-x-1' />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default About;
