import Testemonials from '@/components/Testemonials';
import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';


function TestimonialsPage() {
    return (
        <div className='flex flex-col h-full w-full bg-neutral-100 items-center'>
            <BackButton page='home' />
            <Testemonials />
            <Footer />
        </div>
    );
}


export default TestimonialsPage;
