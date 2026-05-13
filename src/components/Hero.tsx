import { useNavigate } from 'react-router';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';

const Hero3DNew = lazy(() => import('./Hero3DNew'));

// ─────────────────────────────────────────────────────────────────────────────
// Suspense fallback — a minimal skeleton that matches the hero background so
// there's no flash. We don't show a spinner because the canvas is behind the
// text; a blank dark area is fine while Three.js boots.
// ─────────────────────────────────────────────────────────────────────────────
function CanvasFallback() {
    return (
        <div className='absolute top-0 right-0 h-full w-full lg:w-3/4 pointer-events-none' />
    );
}

function Hero() {
    const navigate = useNavigate();

    // Text enters from above (staggered)
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

    // CTAs enter from below (staggered, starts after text)
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
            {/* ── Background ─────────────────────────────────────────────────── */}
            <div className='absolute inset-0 bg-gradient-to-br sm:from-background from-hero-dark/80 via-hero-dark-deep to-hero-dark' />

            {/* ── Inner shadow vignette ───────────────────────────────────────── */}
            <div className='absolute inset-0 shadow-[inset_0px_0px_30px_rgba(0,0,0,0.5)]' />

            <div
                className='absolute bottom-0 left-0 right-0 h-full pointer-events-none z-10
                            bg-gradient-to-tl from-white/[0.07] to-transparent'
            />
            <div
                className='absolute bottom-0 left-0 right-0 h-28 pointer-events-none z-10
                            bg-gradient-to-t from-white/[0.12] to-transparent'
            />

            <div
                className='absolute inset-0 pointer-events-none z-10
                bg-gradient-to-t from-hero-dark/95 via-hero-dark/50 to-transparent
                sm:bg-gradient-to-r sm:from-hero-dark sm:via-hero-dark/75 sm:to-transparent'
            />

            {/* ── 3D canvas — right 75%, absolute behind text ─────────────────── */}
            <Suspense fallback={<CanvasFallback />}>
                <Hero3DNew />
            </Suspense>

            {/* ── Left-aligned text content ────────────────────────────────────── */}
            <div
                className='relative z-20 flex flex-col justify-center w-full
                    items-center text-center
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
                        To Frame
                    </h1>
                </motion.div>

                {/* Description */}
                <motion.p
                    custom={3}
                    variants={fadeDown}
                    initial='hidden'
                    animate='visible'
                    className='mt-4 mb-60 sm:mb-10 text-base sm:text-lg max-md:w-3/5 max-sm:w-4/5
                               text-primary-foreground/90 font-thin
                               leading-relaxed max-w-[50ch]
                               [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]'
                >
                    Custom 3D terrain models created from real Norwegian
                    landscapes, printed and framed by hand.
                </motion.p>

                {/* CTAs */}
                <div
                    className='w-full max-sm:absolute max-sm:bottom-10 sm:mt-10 flex flex-col sm:flex-row
                        items-center sm:items-start
                        justify-center sm:justify-start
                        gap-4 pointer-events-auto'
                >
                    <motion.div
                        custom={0}
                        variants={fadeUp}
                        initial='hidden'
                        animate='visible'
                    >
                        <button
                            className='group flex items-center justify-center gap-3
                                       px-10 py-4 max-sm:w-70
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
                                className='w-4 h-4 hidden sm:block
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
                                       text-sm sm:text-base text-primary-foreground/50
                                       hover:text-primary-foreground
                                       font-light transition-colors duration-200
                                       cursor-pointer'
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
