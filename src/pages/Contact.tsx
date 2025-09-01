import BackButton from '@/components/BackButton';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

function Contact() {

    return (
        <div className='flex flex-col h-full w-full bg-neutral-100'>
            <div className='flex h-full w-full items-center py-10'>
                <BackButton />
                {/* <div className='flex flex-col h-full w-2/4 text-neutral-900 text-6xl font-normal tracking-wide justfy-start items-center px-50'>
                    <h1 className=''></h1>
                </div> */}
                <div className='flex h-full w-full text-center justify-center items-center'>
                    <ContactForm />
                </div>
            </div>
            <Footer />
        </div>
    );
}


export default Contact;