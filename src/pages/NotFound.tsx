import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Compass, MapPin } from 'lucide-react';

const fadeDown = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay: 0.15 + i * 0.1,
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
            duration: 0.7,
            delay: 0.35 + i * 0.1,
            ease: [0.25, 0.4, 0.25, 1] as const,
        },
    }),
};

function NotFound() {
    return (
        <div className='flex flex-col min-h-screen w-full bg-[#0c0d11] text-primary-foreground selection:bg-primary-foreground/20'>
            {/* ── Studio Backdrop Lighting (Identical to Hero) */}
            <div className='fixed inset-0 pointer-events-none bg-gradient-to-b from-[#0e1015] via-[#0c0d11] to-[#0a0b0e]' />

            {/* Studio spotlight behind central block */}
            <div className='fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_75%_55%_at_50%_35%,_rgba(255,248,235,0.08)_0%,_transparent_70%)]' />

            {/* Subtle perimeter vignette */}
            <div className='fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_60%,_rgba(5,6,8,0.5)_100%)]' />

            {/* ── Header Brand Bar */}
            <header className='relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-8 sm:pt-10 flex items-center justify-between'>
                <a
                    href='/'
                    className='inline-block group'
                    aria-label='SCAPE by md Home'
                >
                    <h2 className='text-2xl sm:text-3xl font-display tracking-[0.2em] mb-0.5 text-primary-foreground whitespace-nowrap transition-opacity group-hover:opacity-90'>
                        <span>SC</span>
                        <span className='tracking-normal'>/\</span>
                        <span className='pl-1.5'>PE</span>
                    </h2>
                    <p className='text-[10px] sm:text-xs tracking-widest text-primary-foreground/60'>
                        by md
                    </p>
                </a>
            </header>

            {/* ── Main Content Area */}
            <main className='relative z-20 flex-1 flex flex-col justify-center items-center text-center px-6 sm:px-12 py-16 sm:py-24 max-w-4xl mx-auto'>
                {/* Status Pill Badge */}
                <motion.div
                    custom={0}
                    variants={fadeDown}
                    initial='hidden'
                    animate='visible'
                    className='mb-6 sm:mb-8'
                >
                    <div className='inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-primary-foreground/[0.08] border border-primary-foreground/15 backdrop-blur-md'>
                        <span className='h-2 w-2 rounded-full bg-amber-400 animate-pulse' />
                        <span className='text-[11px] sm:text-xs font-mono font-medium tracking-[0.2em] uppercase text-primary-foreground/80'>
                            Error 404 · Uncharted Terrain
                        </span>
                    </div>
                </motion.div>

                {/* Big Architectural Headline */}
                <motion.div
                    custom={1}
                    variants={fadeDown}
                    initial='hidden'
                    animate='visible'
                    className='mb-6'
                >
                    <h1 className='font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-primary-foreground leading-[1.08] sm:leading-[1.02]'>
                        Lost in the <br className='hidden sm:inline' />
                        <span className='text-primary-foreground/60 font-bold'>
                            topography.
                        </span>
                    </h1>
                </motion.div>

                {/* Editorial Copy */}
                <motion.p
                    custom={2}
                    variants={fadeDown}
                    initial='hidden'
                    animate='visible'
                    className='font-sans text-sm sm:text-base md:text-lg text-primary-foreground/85 font-normal leading-relaxed max-w-xl mx-auto mb-8'
                >
                    The coordinates you’re looking for don’t exist in our
                    elevation model, or this path has shifted. Let’s guide you
                    back to familiar ground.
                </motion.p>

                {/* Cartographic Telemetry Box */}
                <motion.div
                    custom={0}
                    variants={fadeUp}
                    initial='hidden'
                    animate='visible'
                    className='mb-10 w-full max-w-md'
                >
                    <div className='flex flex-wrap items-center justify-center gap-x-4 gap-y-2 py-2.5 px-4 rounded-xl bg-primary-foreground/[0.04] border border-primary-foreground/10 text-[11px] sm:text-xs font-mono text-primary-foreground/60'>
                        <span className='flex items-center gap-1.5 text-primary-foreground/80'>
                            <Compass className='w-3.5 h-3.5 text-primary-foreground/70' />
                            <span>60°23′N 05°19′E</span>
                        </span>
                        <span className='text-primary-foreground/20 hidden sm:inline'>
                            •
                        </span>
                        <span>ELEV: 0m</span>
                        <span className='text-primary-foreground/20 hidden sm:inline'>
                            •
                        </span>
                        <span className='text-amber-300/80'>
                            GRID: UNRESOLVED
                        </span>
                    </div>
                </motion.div>

                {/* Action Buttons (Matched with Hero) */}
                <motion.div
                    custom={1}
                    variants={fadeUp}
                    initial='hidden'
                    animate='visible'
                    className='flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-14'
                >
                    <a
                        href='/'
                        className='group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-xs sm:text-sm font-semibold text-primary transition-all duration-200 hover:bg-primary-foreground/90 shadow-lg shadow-black/30'
                    >
                        <ArrowLeft className='w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:-translate-x-1' />
                        Return to Home
                    </a>

                    <a
                        href='/get-started'
                        className='group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full  px-6 py-3.5 text-xs sm:text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10  transition-all duration-200 backdrop-blur-sm'
                    >
                        <MapPin className='w-3.5 h-3.5 sm:w-4 sm:h-4' />
                        Explore Interactive Map
                        <ArrowRight className='w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-1' />
                    </a>
                </motion.div>

                {/* Helpful Quick Navigation Shortcuts */}
                <motion.div
                    custom={2}
                    variants={fadeUp}
                    initial='hidden'
                    animate='visible'
                    className='pt-6 border-t border-primary-foreground/10 w-full max-w-lg'
                >
                    <p className='text-[11px] font-mono uppercase tracking-wider text-primary-foreground/40 mb-3'>
                        Suggested destinations
                    </p>
                    <div className='flex flex-wrap items-center justify-center gap-4 text-xs font-sans'>
                        <a
                            href='/#thescape'
                            className='text-primary-foreground/70 hover:text-primary-foreground transition-colors'
                        >
                            The Scape
                        </a>
                        <span className='text-primary-foreground/20'>/</span>
                        <a
                            href='/about-us'
                            className='text-primary-foreground/70 hover:text-primary-foreground transition-colors'
                        >
                            About Us
                        </a>
                        <span className='text-primary-foreground/20'>/</span>
                        <a
                            href='/faq'
                            className='text-primary-foreground/70 hover:text-primary-foreground transition-colors'
                        >
                            FAQ
                        </a>
                        <span className='text-primary-foreground/20'>/</span>
                        <a
                            href='/contact-us'
                            className='text-primary-foreground/70 hover:text-primary-foreground transition-colors'
                        >
                            Contact
                        </a>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}

export default NotFound;
