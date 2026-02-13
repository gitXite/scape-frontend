import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const options = {
    triggerOnce: true,
    threshold: 0.2,
};

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' as const },
    },
};
const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

function About() {
    const [ref1, inView1] = useInView(options);
    const [ref2, inView2] = useInView(options);
    const [ref3, inView3] = useInView(options);
    const [ref4, inView4] = useInView(options);

    const values = [
        {
            title: 'Craftsmanship',
            description:
                'Every piece is precision-crafted with attention to detail, ensuring the highest quality representation of Norwegian terrain.',
        },
        {
            title: 'Innovation',
            description:
                'We blend cutting-edge data processing with traditional design principles to create something truly unique.',
        },
        {
            title: 'Sustainability',
            description:
                'Our materials and processes are chosen with environmental responsibility in mind.',
        },
    ];

    return (
        <div className='flex flex-col min-h-[100vh] w-full bg-neutral-100'>
            <header className='flex h-auto z-2 w-1/3 fixed place-content-center justify-evenly self-center mix-blend-difference text-white bg-neutral-500/10 shadow-md backdrop-blur-md mt-6 p-3 rounded-full border border-neutral-300/30 max-sm:hidden'>
                <a
                    href='#about-us'
                    className='group md:tracking-tight max-sm:text-sm text-md'
                >
                    About Us
                    <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300' />
                </a>
                <a
                    href='#the-beginning'
                    className='group md:tracking-tight max-sm:text-sm text-md'
                >
                    The Beginning
                    <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300' />
                </a>
                <a
                    href='#values'
                    className='group md:tracking-tight max-sm:text-sm text-md'
                >
                    Our Values
                    <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300' />
                </a>
                <a
                    href='#mission'
                    className='group md:tracking-tight max-sm:text-sm text-md'
                >
                    Our Mission
                    <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300' />
                </a>
            </header>
            <div
                className='flex flex-col w-full text-neutral-900 self-center items-center text-center py-24 max-sm:pt-0'
                id='about-us'
            >
                <div className='py-24 px-6'>
                    <motion.div
                        ref={ref1}
                        initial='hidden'
                        animate={inView1 ? 'visible' : 'hidden'}
                        variants={staggerContainer}
                        className='max-w-4xl mx-auto text-center'
                    >
                        <motion.p
                            variants={fadeInUp}
                            className='text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4'
                        >
                            About Us
                        </motion.p>
                        <motion.h1
                            variants={fadeInUp}
                            className='text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-8 tracking-tight'
                        >
                            Made By MD
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            className='text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed'
                        >
                            We are Maren and Daniel, the couple behind this
                            project, combining our different strengths to create
                            something meaningful together.
                        </motion.p>
                    </motion.div>
                </div>

                <div className='w-full py-20 px-6' id='the-beginning'>
                    <motion.div
                        ref={ref2}
                        initial='hidden'
                        animate={inView2 ? 'visible' : 'hidden'}
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
                                className='order-1 md:order-2'
                            >
                                <p className='text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4'>
                                    The Beginning
                                </p>
                                <h2 className='text-3xl sm:text-4xl font-light text-foreground mb-6 tracking-tight'>
                                    Where Design Meets Data
                                </h2>
                                <div className='space-y-4 text-muted-foreground leading-relaxed'>
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
                                        Together, we've created Scape by md,
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
                        ref={ref3}
                        initial='hidden'
                        animate={inView3 ? 'visible' : 'hidden'}
                        variants={staggerContainer}
                        className='max-w-6xl mx-auto'
                    >
                        <motion.div
                            variants={fadeInUp}
                            className='text-center mb-16'
                        >
                            <p className='text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4'>
                                Our Values
                            </p>
                            <h2 className='text-3xl sm:text-4xl font-light text-foreground tracking-tight'>
                                What We Believe
                            </h2>
                        </motion.div>
                        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    variants={fadeInUp}
                                    className='text-center p-8 bg-secondary/20 rounded-lg'
                                >
                                    <div className='w-12 h-12 mx-auto mb-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-medium'>
                                        {index + 1}
                                    </div>
                                    <h3 className='text-xl font-medium text-foreground mb-3'>
                                        {value.title}
                                    </h3>
                                    <p className='text-muted-foreground leading-relaxed'>
                                        {value.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className='py-24 px-6 bg-primary w-full' id='mission'>
                    <motion.div
                        ref={ref4}
                        initial='hidden'
                        animate={inView4 ? 'visible' : 'hidden'}
                        variants={staggerContainer}
                        className='max-w-4xl mx-auto text-center'
                    >
                        <motion.p
                            variants={fadeInUp}
                            className='text-sm tracking-[0.2em] uppercase text-primary-foreground/60 mb-4'
                        >
                            Our Mission
                        </motion.p>
                        <motion.h2
                            variants={fadeInUp}
                            className='text-3xl sm:text-4xl font-light text-primary-foreground mb-6 tracking-tight'
                        >
                            Bringing Landscapes to Life
                        </motion.h2>
                        <motion.p
                            variants={fadeInUp}
                            className='text-lg text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed mb-10'
                        >
                            We believe that every landscape tells a story. Our
                            mission is to help you preserve and celebrate the
                            places that matter most - transforming memories into
                            timeless art pieces that you can hold and display.
                        </motion.p>
                        <motion.a
                            variants={fadeInUp}
                            href='/get-started'
                            className='inline-flex group items-center px-8 py-4 text-sm font-medium bg-primary-foreground text-primary rounded-full hover:opacity-90 transition-opacity'
                        >
                            Create Your Scape
                            <ArrowRight className='self-center w-[18px] text-neutral-900 relative max-sm:hidden left-2 top-[1px] p-0 m-0 group-hover:translate-x-2 transition-all duration-200 ease-out' />
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default About;
