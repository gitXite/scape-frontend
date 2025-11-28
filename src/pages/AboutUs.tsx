import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';
import About from '@/components/About';


function AboutUs() {
    return (
        <div className='flex flex-col min-h-full w-full bg-neutral-100'>
            <BackButton page='home' />
            <About />
            <Footer />
        </div>
    );
}


export default AboutUs;