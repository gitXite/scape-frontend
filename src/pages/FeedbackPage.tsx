import BackButton from '@/components/BackButton';
import Feedback from '@/components/Feedback';
import Footer from '@/components/Footer';


function FeedbackPage() {
    return (
        <div className='flex flex-col min-h-full min-xl:h-full w-full bg-neutral-100 items-center'>
            <BackButton page='home' />
            <Feedback />
            <Footer />
        </div>
    );
}


export default FeedbackPage;
