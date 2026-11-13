import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';
import About from '@/components/About';


function AboutUs() {
    return (
        <div className='flex flex-col min-h-screen w-full bg-surface text-surface-foreground'>
            <BackButton page='home' />
            <About />
            <Footer />
        </div>
    );
}


export default AboutUs;