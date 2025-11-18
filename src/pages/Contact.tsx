import BackButton from '@/components/BackButton';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

function Contact() {
    return (
        <div className='flex flex-col h-full w-full bg-neutral-100'>
            <div className='flex min-h-full w-full justify-center items-center py-20'>
                <BackButton page='home' />
                <div className='flex h-full w-3/5 text-center justify-center bg-neutral-200/40 border-1 border-neutral-300 rounded-sm'>
                    <div className='flex h-full w-2/4 flex-col py-10 justify-center'>
                        <h1 className='text-neutral-900 text-6xl tracking-widest font-medium'>
                            Contact Us
                        </h1>
                        <p className='px-15 pt-15 text-neutral-600 tracking-wide'>
                            Have questions, feedback, or ideas? 
                            We are ready to assist you. Whether you’re looking for product information, support, or partnership opportunities, we’re just a message away.
                        </p>
                        <p className='px-15 py-15 text-neutral-600 tracking-wide'>
                            Fill out the form, or send us an email.
                            We aim to respond promptly and ensure your experience with us is seamless.
                            <br />Your inquiries matter. Let’s connect. 
                        </p>
                        <p className='px-15 text-neutral-600 tracking-wide font-medium'>
                            scapebymd@gmail.com
                        </p>
                    </div>
                    <Separator
                        orientation='vertical'
                        className='max-h-120 self-center border-neutral-300'
                    />
                    <div className='flex h-full w-2/4 items-center'>
                        <ContactForm />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
