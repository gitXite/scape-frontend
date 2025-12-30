import { useNavigate } from 'react-router';
import { ArrowRight, ChevronDown, /*ChevronRight*/ } from 'lucide-react';
import Hero3D from './Hero3D';
import { motion } from 'motion/react';

function Hero() {
    const navigate = useNavigate();
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

    return (
        <div id='home' className='h-svh w-full place-content-center'>
            <div className='flex flex-col place-items-center place-content-center h-full w-full shadow-[inset_0px_0px_20px_rgba(0,0,0,0.6)] bg-neutral-900 drop-shadow-xl drop-shadow-neutral-500/60'>
                <Hero3D />
                <motion.div
                    custom={0}
                    variants={fadeDownVariants}
                    initial='hidden'
                    animate='visible'
                >
                    <h1 className='z-2 relative bottom-50 text-9xl max-md:text-8xl max-sm:text-7xl text-white drop-shadow-black drop-shadow-2xl tracking-widest [text-shadow:0_4px_10px_rgba(0,0,0,0.6)] pointer-events-none'>
                        S C /\ P E
                    </h1>
                </motion.div>
                <motion.div
                    custom={1}
                    variants={fadeDownVariants}
                    initial='hidden'
                    animate='visible'
                >
                    <div className='flex tracking-widest relative text-white bottom-50 text-5xl max-md:text-3xl max-sm:text-2xl z-2 drop-shadow-black drop-shadow-2xl mt-10 space-x-10 max-sm:space-x-5 [text-shadow:0_2px_8px_rgba(0,0,0,1)] pointer-events-none'>
                        <h2 className='tracking-normal'>From Map To Frame</h2>
                        {/* <h2 className=''>M a p</h2>
                        <h2 className=''>T o</h2>
                        <h2 className=''>F r a m e</h2> */}
                    </div>
                </motion.div>
                {/* <motion.p
                    custom={1}
                    variants={fadeUpVariants}
                    initial='hidden'
                    animate='visible'
                    className='max-w-lg [text-shadow:0_2px_8px_rgba(0,0,0,1)] text-center text-xl text-neutral-950 leading-relaxed font-thin z-10 pointer-events-none'
                >
                    Transform any Norwegian landscape into a stunning 3D
                    topographic model. Precision-crafted artwork that captures
                    the beauty of your favorite places.
                </motion.p> */}
                <div className='flex flex-col absolute bottom-20 max-sm:bottom-10'>
                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial='hidden'
                        animate='visible'
                        className='backdrop-blur-sm rounded-full'
                    >
                        <button
                            className='flex z-2 p-5 pl-12 pr-12 max-sm:px-9 max-sm:py-4 text-xl max-sm:text-lg font-normal group backdrop-blur-sm transition-colors duration-150 hover:bg-neutral-100/20 text-neutral-900 border-1 border-neutral-50/80 rounded-full shadow-md hover:cursor-pointer'
                            onClick={() => {
                                navigate('/get-started');
                            }}
                        >
                            <p className='tracking-widest'>Get Started</p>
                            {/* <span className='w-4'></span> */}
                            {/* <p>Started</p> */}
                            <ArrowRight className='self-center w-[18px] text-neutral-900 relative max-sm:hidden left-4 top-[1px] p-0 m-0 group-hover:translate-x-2 transition-all duration-200 ease-out' />
                        </button>
                    </motion.div>
                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial='hidden'
                        animate='visible'
                        className=''
                    >
                        <div className='flex flex-col text-center items-center mt-5'>
                            <a
                                href='#thescape'
                                className='text-lg tracking-tight text-neutral-900 cursor-pointer font-normal active:text-neutral-700 transition-colors duration-100 z-1 peer'
                            >
                                Explore
                            </a>
                            <ChevronDown className='text-neutral-900/85 pointer-events-none z-0 peer-hover:translate-y-2 relative top-2 transition-all duration-200 ease-out peer-hover:animate-none animate-bounce' />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
