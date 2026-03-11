import { useNavigate } from 'react-router';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Hero3D from './Hero3D';
import { motion } from 'framer-motion';

function Hero() {
    const navigate = useNavigate();

    const fadeDownVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.3 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1] as const,
            },
        }),
    };

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.3 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1] as const,
            },
        }),
    };

    return (
        <section id='home' className='relative h-svh w-[100vw] flex items-center justify-center overflow-hidden'>
            {/* Background */}
            <div className='absolute inset-0 bg-gradient-to-br from-hero-dark via-hero-dark-deep to-hero-dark' />

            {/* Ambient glow effects */}
            <div
                className='absolute top-[10%] left-[-5%] w-[70%] h-[70%] rounded-full opacity-20 blur-[120px] pointer-events-none'
                style={{
                    background: 'radial-gradient(circle, hsl(var(--hero-glow-1) / 0.5), transparent 65%)',
                }}
            />
            <div
                className='absolute bottom-[-15%] right-[-5%] w-[60%] h-[60%] rounded-full opacity-20 blur-[100px] pointer-events-none'
                style={{
                    background: 'radial-gradient(circle, hsl(var(--hero-glow-2) / 0.4), transparent 65%)',
                }}
            />
            <div
                className='absolute top-[30%] left-[25%] w-[40%] h-[40%] rounded-full opacity-10 blur-[90px] pointer-events-none'
                style={{
                    background: 'radial-gradient(circle, hsl(var(--hero-glow-3) / 0.4), transparent 65%)',
                }}
            />

            {/* Inner shadow overlay */}
            <div className='absolute inset-0 shadow-[inset_0px_0px_30px_rgba(0,0,0,0.5)]' />

            {/* 3D background */}
            <Hero3D />

            {/* Content */}
            <div className='relative z-10 flex flex-col items-center text-center px-4 bottom-50'>
                <motion.div custom={0} variants={fadeDownVariants} initial='hidden' animate='visible'>
                    <h1 className='text-7xl sm:text-8xl md:text-9xl text-primary-foreground font-extralight tracking-[0.2em] select-none [text-shadow:0_4px_20px_rgba(0,0,0,0.4)]'>
                        <span>SC</span>
                        <span className='tracking-normal'>/\</span>
                        <span className='pl-5'>PE</span>
                    </h1>
                </motion.div>

                <motion.div custom={1} variants={fadeDownVariants} initial='hidden' animate='visible'>
                    <h2 className='mt-4 sm:mt-6 text-xl sm:text-3xl md:text-4xl text-primary-foreground/80 font-extralight tracking-wide select-none [text-shadow:0_2px_10px_rgba(0,0,0,0.6)]'>
                        From Map To Frame
                    </h2>
                </motion.div>
            </div>

            {/* Bottom CTA */}
            <div className='absolute bottom-8 sm:bottom-16 left-0 right-0 flex flex-col items-center z-10 px-4'>
                <motion.div custom={2} variants={fadeUpVariants} initial='hidden' animate='visible'>
                    <button
                        className='group flex items-center gap-3 px-8 py-3.5 sm:px-10 sm:py-4 text-sm sm:text-base tracking-wide font-normal text-primary border border-primary-foreground/30 rounded-full backdrop-blur-md bg-primary-foreground/5 hover:bg-primary-foreground/15 transition-all duration-300 cursor-pointer'
                        onClick={() => navigate('/get-started')}
                    >
                        Get Started
                        <ArrowRight className='w-4 h-4 hidden sm:block group-hover:translate-x-1.5 relative top-[1px] transition-transform duration-200' />
                    </button>
                </motion.div>

                <motion.div custom={3} variants={fadeUpVariants} initial='hidden' animate='visible'>
                    <a
                        href='#thescape'
                        className='flex flex-col items-center mt-6 group cursor-pointer'
                    >
                        <span className='text-sm sm:text-base text-primary group-hover:text-primary font-normal transition-colors duration-200'>
                            Explore
                        </span>
                        <ChevronDown className='w-5 h-5 text-primary mt-1 group-hover:translate-y-1 transition-all duration-200 animate-bounce group-hover:animate-none' />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;