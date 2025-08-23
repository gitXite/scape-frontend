import { useInView } from 'react-intersection-observer';
import CustomCarousel from './CustomCarousel';

const options = {
    triggerOnce: false,
    threshold: 0.1,
};

function About() {
    const { ref: ref1, inView: inView1 } = useInView(options);
    const { ref: ref2, inView: inView2 } = useInView(options);
    const { ref: ref3, inView: inView3 } = useInView(options);
    const { ref: ref4, inView: inView4 } = useInView(options);


    return (
        <div id='about' className='grid grid-cols-2 gap-x-20 w-full bg-neutral-100 min-h-[200vh] px-10'>
            <div className='flex flex-col items-center gap-y-80 mt-20'>
                <div ref={ref1} className={`place-items-center transition-opacity duration-600 ease-in ${
                    inView1 ? 'opacity-100' : 'opacity-0'
                }`}>
                    <h1 className=' text-6xl text-neutral-900'>From Map To Masterpiece</h1>
                    <p className='text-3xl text-amber-800 p-5'>/ /</p>
                    <p className='w-8/12 text-center text-neutral-700 leading-8'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minima dolore, consequuntur alias quasi voluptate corporis
                        ducimus asperiores! Commodi quasi repudiandae impedit
                        facilis expedita cupiditate numquam ratione facere fuga.
                        Eos, corporis.
                    </p>
                </div>
                <div ref={ref2} className={`place-items-center mt-40 transition-opacity duration-600 ease-in ${
                    inView2 ? 'opacity-100' : 'opacity-0'
                }`}>
                    <h1 className='text-6xl text-neutral-900'>Realize Your World</h1>
                    <p className='text-3xl text-amber-800 p-5'>/ /</p>
                    <p className='w-8/12 text-center text-neutral-700 leading-8'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Doloremque ad, exercitationem quisquam ducimus numquam iure
                        quaerat, incidunt deserunt expedita tempore at delectus
                        quasi molestias necessitatibus sit est reprehenderit odit
                        ratione!
                    </p>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center gap-y-80 mt-40'>
                <div ref={ref3} className={`h-100 w-150 place-items-center transition-opacity duration-600 ease-in ${
                    inView3 ? 'opacity-100' : 'opacity-0'
                }`}>
                    <CustomCarousel />    
                </div>
                <div ref={ref4} className={`place-items-center mt-40 transition-opacity duration-600 ease-in ${
                    inView4 ? 'opacity-100' : 'opacity-0'
                }`}>
                    <h1 className='text-6xl text-neutral-900'>Placeholder</h1>
                    <p className='text-3xl text-amber-800 p-5'>/ /</p>
                    <p className='w-8/12 text-center text-neutral-700 leading-8'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Doloremque ad, exercitationem quisquam ducimus numquam iure
                        quaerat, incidunt deserunt expedita tempore at delectus
                        quasi molestias necessitatibus sit est reprehenderit odit
                        ratione!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
