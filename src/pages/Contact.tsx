import { useEffect, useState } from 'react';
import BackButton from '@/components/BackButton';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

function Contact() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='flex flex-col min-h-full min-md:h-full w-full bg-neutral-100'>
            <div className='flex min-h-full w-full justify-center items-center py-20 max-xl:py-0'>
                <BackButton page='home' />
                <div className='flex h-full w-3/5 max-xl:w-full max-md:flex-col max-md:items-center max-xl:border-none text-center justify-center max-md:justify-normal bg-neutral-200/40 border-1 border-neutral-300 rounded-sm'>
                    <div className='flex h-full w-2/4 max-md:w-full flex-col py-10 justify-center space-y-15 max-md:space-y-5'>
                        <h1 className='text-neutral-900 text-6xl tracking-widest font-medium'>
                            Contact Us
                        </h1>
                        <p className='px-15 text-neutral-600 tracking-wide'>
                            Have questions, feedback, or ideas? 
                            We’re here to help. Whether you’re looking for product information, support, or partnership opportunities, we’re just a message away.
                        </p>
                        <p className='px-15 text-neutral-600 tracking-wide'>
                            Fill out the form, or send us an email.
                            We aim to respond promptly and ensure your experience with us is seamless.
                            <br />Your inquiries matter. Let’s connect. 
                        </p>
                        <p className='px-15 text-neutral-600 tracking-wide font-medium'>
                            scapebymd@gmail.com
                        </p>
                    </div>
                    <Separator
                        orientation={width <= 768 ? 'horizontal' : 'vertical'}
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
