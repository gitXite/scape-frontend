import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';
import About from '@/components/About';
import { useInView } from 'react-intersection-observer';


function AboutUs() {
    return (
        <div className='flex flex-col h-full w-full bg-neutral-100'>
            <BackButton page='home' />
            <About />
            <Footer />
        </div>
    );
}


export default AboutUs;