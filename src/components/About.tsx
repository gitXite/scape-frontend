// import { useInView } from 'react-intersection-observer';

// const options = {
//     triggerOnce: false,
//     threshold: 0.1,
// };

function About() {
    return (
        <div className='flex flex-col min-h-[200vh] w-full bg-neutral-100'>
            <div className='flex flex-col text-neutral-900 self-center items-center text-center p-20 gap-10 w-3/4 max-sm:w-full max-sm:p-10'>
                <h1 className='text-4xl max-sm:text-3xl font-medium tracking-wide'>
                    What happens when an architect meets a data engineer?
                </h1>
                <p className='text-lg w-3/5 max-sm:w-full'>
                    We are Maren and Daniel, the couple behind this project,
                    combining our different strengths to create something
                    meaningful together. Maren works as an architect, and her
                    passion for design, spatial understanding, and attention to
                    detail shapes the artistic side of our 3D landscapes. She
                    loves transforming real-world places into objects that feel
                    thoughtful and beautifully crafted. Daniel is a data
                    engineering student who brings the technical backbone to our
                    work. He enjoys turning complex data into intuitive tools,
                    building the systems that make it easy for anyone to
                    generate their own 3D landscape. Together, we blend design
                    and technology into a small but heartfelt venture that lets
                    us share our skills, learn from each other, and save money
                    for our wedding.
                </p>
                <p className='text-lg w-3/5 max-sm:w-full'>
                    The idea was inspired by our wish to bring our different
                    identities into our new home. This resulted in a scaled 3D
                    landscape of our hometowns, Stavanger and Stord, displayed
                    proudly in our living room, which eventually sparked the
                    idea to share this artwork with others.
                </p>
            </div>
        </div>
    );
}

export default About;
