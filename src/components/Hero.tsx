import { ArrowRight, ChevronDown, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';

const Hero3DNew = lazy(() => import('./Hero3DNew'));

function CanvasFallback() {
    return (
        <div className='absolute inset-0 h-full w-full pointer-events-none' />
    );
}

function Hero() {
    const fadeDown = {
        hidden: { opacity: 0, y: -20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: 0.2 + i * 0.12,
                ease: [0.25, 0.4, 0.25, 1] as const,
            },
        }),
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: 0.4 + i * 0.12,
                ease: [0.25, 0.4, 0.25, 1] as const,
            },
        }),
    };

    return (
        <section
            id='home'
            className='relative h-svh w-screen flex flex-col justify-between lg:justify-center overflow-hidden bg-[#0c0d11]'
        >
            {/* ── Studio Backdrop Lighting */}
            <div className='absolute inset-0 bg-gradient-to-b from-[#0e1015] via-[#0c0d11] to-[#0a0b0e]' />

            {/* Studio spotlight behind the 3D frame */}
            <div className='absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_75%_55%_at_50%_35%,_rgba(255,248,235,0.08)_0%,_transparent_70%)] lg:bg-[radial-gradient(ellipse_65%_60%_at_72%_45%,_rgba(255,248,235,0.09)_0%,_transparent_70%)]' />

            {/* Subtle perimeter vignette */}
            <div className='absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_60%,_rgba(5,6,8,0.45)_100%)]' />

            {/* ── Mobile readability gradient scrims (guarantees 100% contrast on mobile without dulling 3D center stage) */}
            <div className='lg:hidden absolute top-0 left-0 right-0 h-52 pointer-events-none z-10 bg-gradient-to-b from-[#0c0d11] via-[#0c0d11]/85 to-transparent' />
            <div className='lg:hidden absolute bottom-0 left-0 right-0 h-64 pointer-events-none z-10 bg-gradient-to-t from-[#0c0d11] via-[#0c0d11]/90 to-transparent' />

            {/* ── 3D canvas (WebGL) */}
            <Suspense fallback={<CanvasFallback />}>
                <Hero3DNew />
            </Suspense>

            {/* ── Hero Content */}
            <div
                className='relative z-20 flex flex-col justify-between lg:justify-center h-full w-full
                    pt-20 pb-8 sm:pt-24 sm:pb-10 lg:py-0
                    px-6 sm:px-12 lg:px-20 max-w-7xl
                    pointer-events-none select-none'
            >
                {/* On mobile: stretches full height and splits Top (headline) and Bottom (CTAs) around the 3D model.
                    On desktop: condenses into a clean left-column stack. */}
                <div className='flex flex-col justify-between lg:justify-center items-start text-left h-full lg:h-auto max-w-xl'>
                    {/* ── Top Block (Headline & Eyebrow) */}
                    <div className='flex flex-col items-start'>
                        {/* Eyebrow */}
                        <motion.div
                            custom={0}
                            variants={fadeDown}
                            initial='hidden'
                            animate='visible'
                            className='mb-2 sm:mb-4'
                        >
                            <span className='text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-primary-foreground/70'>
                                FRAMED TERRAIN MODELS
                            </span>
                        </motion.div>

                        {/* Bold Modern Headline */}
                        <motion.div
                            custom={1}
                            variants={fadeDown}
                            initial='hidden'
                            animate='visible'
                        >
                            <h1 className='font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tight text-primary-foreground leading-[1.05] sm:leading-[0.96] mb-0 sm:mb-2'>
                                From Map <br />
                                <span className='text-primary-foreground/70 font-bold'>to Frame.</span>
                            </h1>
                        </motion.div>
                    </div>

                    {/* ── Bottom Block (Description, Price, Actions) */}
                    <div className='flex flex-col items-start pt-4 lg:pt-6'>
                        {/* Editorial Description */}
                        <motion.p
                            custom={2}
                            variants={fadeDown}
                            initial='hidden'
                            animate='visible'
                            className='font-sans text-xs sm:text-sm md:text-base text-primary-foreground/90 font-normal leading-relaxed max-w-[38ch] sm:max-w-[48ch] mb-4 sm:mb-6'
                        >
                            Choose your favourite place in Norway. We’ll turn it into a custom 3D landscape, framed and ready for display.
                        </motion.p>

                        {/* Refined Price Tag */}
                        <motion.div
                            custom={0}
                            variants={fadeUp}
                            initial='hidden'
                            animate='visible'
                            className='mb-4 sm:mb-6'
                        >
                            <div className='inline-flex items-center gap-2.5 sm:gap-3 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-md bg-primary-foreground/[0.08] border border-primary-foreground/15 backdrop-blur-md'>
                                <span className='font-display text-lg sm:text-2xl font-bold tracking-tight text-primary-foreground'>
                                    596 NOK
                                </span>
                                <span className='h-3.5 w-px bg-primary-foreground/20' />
                                <Truck />
                                <span className='text-xs sm:text-sm text-primary-foreground/70 font-medium'>
                                    shipping included
                                </span>
                            </div>
                        </motion.div>

                        {/* Action Button Group */}
                        <div className='flex flex-wrap items-center gap-3 pointer-events-auto'>
                            <motion.div
                                custom={1}
                                variants={fadeUp}
                                initial='hidden'
                                animate='visible'
                            >
                                <a
                                    href='/get-started'
                                    className='group inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-semibold text-primary transition-all duration-200 hover:bg-primary-foreground/90 shadow-lg shadow-black/30'
                                >
                                    Customize Yours
                                    <ArrowRight className='w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-1' />
                                </a>
                            </motion.div>

                            <motion.div
                                custom={2}
                                variants={fadeUp}
                                initial='hidden'
                                animate='visible'
                            >
                                <a
                                    href='#thescape'
                                    className='inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-3.5 py-3 sm:px-4 sm:py-3.5 text-xs sm:text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/[0.08] transition-all duration-200'
                                >
                                    Explore
                                    <ChevronDown className='w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-y-0.5' />
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
