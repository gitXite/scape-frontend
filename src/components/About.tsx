import { useInView } from 'react-intersection-observer';

const options = {
    triggerOnce: false,
    threshold: 0.1,
};

function About() {
    const { ref: ref1, inView: inView1 } = useInView(options);
    const { ref: ref2, inView: inView2 } = useInView(options);

    return (
        <div ref={ref1} className='flex h-full w-full bg-neutral-100 place-content-center justify-around'>
            <div className={`flex flex-col h-fit place-items-center w-1/3 mb-80 transition-opacity duration-700 ease-in ${
                inView1 ? 'opacity-100' : 'opacity-0'
            }`}>
                <h1 className='mb-10 text-6xl text-neutral-900'>Placeholder</h1>
                <p className='w-8/12 text-center text-neutral-700'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima dolore, consequuntur alias quasi voluptate corporis
                    ducimus asperiores! Commodi quasi repudiandae impedit
                    facilis expedita cupiditate numquam ratione facere fuga.
                    Eos, corporis.
                </p>
            </div>
            <div ref={ref2} className={`flex flex-col h-fit place-items-center w-1/3 mt-100 transition-opacity duration-700 ease-in ${
                inView2 ? 'opacity-100' : 'opacity-0'
            }`}>
                <h1 className='mb-10 text-6xl text-neutral-900'>Placeholder</h1>
                <p className='w-8/12 text-center text-neutral-700 '>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloremque ad, exercitationem quisquam ducimus numquam iure
                    quaerat, incidunt deserunt expedita tempore at delectus
                    quasi molestias necessitatibus sit est reprehenderit odit
                    ratione!
                </p>
            </div>
        </div>
    );
}

export default About;
