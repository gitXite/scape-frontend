import { useNavigate } from 'react-router';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';

const Hero3DNew = lazy(() => import('./Hero3DNew'));


function CanvasFallback() {
    return (
        <div className='absolute top-0 right-0 h-full w-full lg:w-3/4 pointer-events-none' />
    );
}

function Hero() {
    const navigate = useNavigate();

    const fadeDown = {
        hidden: { opacity: 0, y: -24 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.3 + i * 0.15,
                ease: [0.25, 0.4, 0.25, 1] as const,
            },
        }),
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 24 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.6 + i * 0.15,
                ease: [0.25, 0.4, 0.25, 1] as const,
            },
        }),
    };

    return (
        <section
            id='home'
            className='relative h-svh w-screen flex overflow-hidden'
        >
            {/* ── Background */}
            <div className='absolute inset-0 bg-gradient-to-br sm:from-hero-dark/30 from-hero-dark/50 via-hero-dark-deep to-hero-dark' />

            {/* ── Inner shadow vignette and radial glow*/}
            <div className='absolute inset-0 shadow-[inset_0px_0px_30px_rgba(0,0,0,0.5)]' />
            <div className='absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_50%_35%,_rgba(255,220,150,0.10)_0%,_transparent_65%)]' />

            <div
                className='absolute bottom-0 left-0 right-0 h-full pointer-events-none z-10
                            bg-gradient-to-tl from-white/[0.07] to-transparent'
            />
            <div
                className='absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none z-10
                            bg-gradient-to-t from-white/[0.12] to-transparent'
            />

            <div
                className='absolute inset-0 pointer-events-none z-10
                bg-gradient-to-r from-hero-dark/90 via-hero-dark/40 to-transparent
                sm:bg-gradient-to-r sm:from-hero-dark sm:via-hero-dark/40 sm:to-transparent'
            />

            {/* ── 3D canvas — right 75%, absolute behind text */}
            <Suspense fallback={<CanvasFallback />}>
                <Hero3DNew />
            </Suspense>

            {/* ── Left-aligned text content */}
            <div
                className='relative z-20 flex flex-col justify-start sm:justify-center max-sm:pt-40 w-full
                    items-start text-left
                    sm:items-start sm:text-left
                    px-8 sm:px-12 lg:px-20
                    max-w-full
                    pointer-events-none select-none'
            >
                {/* Eyebrow */}
                <motion.p
                    custom={0}
                    variants={fadeDown}
                    initial='hidden'
                    animate='visible'
                    className='text-[0.65rem] tracking-[0.3em] uppercase
                               text-primary-foreground/70 mb-5 sm:mb-4'
                >
                    Framed Terrain Models
                </motion.p>

                {/* Wordmark headline */}
                <motion.div
                    custom={1}
                    variants={fadeDown}
                    initial='hidden'
                    animate='visible'
                >
                    <h1
                        className='text-6xl sm:text-6xl md:text-7xl lg:text-8xl
                                   text-primary-foreground font-bold
                                   tracking-wide
                                   [text-shadow:0_4px_20px_rgba(0,0,0,0.4)] mb-2'
                    >
                        From Map <br />
                        to Frame
                    </h1>
                </motion.div>

                {/* Description */}
                <motion.p
                    custom={3}
                    variants={fadeDown}
                    initial='hidden'
                    animate='visible'
                    className='mt-2 sm:mb-10 text-base sm:text-lg max-md:w-3/5 max-sm:w-4/5
                               text-primary-foreground/90 font-thin
                               leading-relaxed max-w-[50ch]
                               [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]'
                >
                    Custom 3D terrain models created from real Norwegian
                    landscapes, printed and framed by hand.
                </motion.p>

                {/* CTAs */}
                <div
                    className='w-full max-sm:mt-5 flex flex-col sm:flex-row
                        items-start sm:items-start
                        justify-start sm:justify-start
                        gap-2 pointer-events-auto'
                >
                    <motion.div
                        custom={0}
                        variants={fadeUp}
                        initial='hidden'
                        animate='visible'
                    >
                        <button
                            className='group flex items-center justify-center gap-3
                                       px-8 sm:px-10 py-4 max-sm:w-50
                                       text-sm sm:text-base tracking-wide font-normal
                                       text-primary
                                       border border-primary-foreground/30 rounded-full
                                       backdrop-blur-md bg-primary-foreground
                                       hover:bg-primary-foreground/90
                                       transition-all duration-300 cursor-pointer'
                            onClick={() => navigate('/get-started')}
                        >
                            Get Started
                            <ArrowRight
                                className='w-4 h-4 block sm:block
                                                   group-hover:translate-x-1.5
                                                   relative top-[1px]
                                                   transition-transform duration-200'
                            />
                        </button>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUp}
                        initial='hidden'
                        animate='visible'
                    >
                        <a
                            href='#thescape'
                            className='flex items-center gap-2 px-2 py-3.5
                                       text-sm sm:text-base text-primary-foreground/80
                                       hover:text-primary-foreground
                                       font-light transition-colors duration-200
                                       cursor-pointer animate-pulse hover:animate-none'
                        >
                            Explore
                            <ChevronDown
                                className='w-4 h-4 mt-px
                                                    group-hover:translate-y-1
                                                    transition-transform duration-200
                                                    animate-bounce'
                            />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
