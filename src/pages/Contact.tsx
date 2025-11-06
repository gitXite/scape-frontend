import BackButton from '@/components/BackButton';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

function Contact() {
    return (
        <div className='flex flex-col h-full w-full bg-neutral-100'>
            <div className='flex min-h-full w-full justify-center items-center py-20'>
                <BackButton page='home' />
                <div className='flex h-full w-3/5 text-center justify-center bg-neutral-200/20 border-1 border-neutral-300 rounded-sm'>
                    <div className='flex h-full w-2/4 flex-col py-10 justify-center'>
                        <h1 className='text-neutral-900 text-6xl tracking-widest'>
                            Contact Us
                        </h1>
                        <p className='px-15 pt-15 text-neutral-600 tracking-wide'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nesciunt minima porro, laudantium enim sunt,
                        </p>
                        <p className='px-15 py-15 text-neutral-600 tracking-wide'>
                            inventore mollitia, similique sed quaerat
                            necessitatibus possimus totam voluptatum ea
                            perspiciatis autem. Quos aliquid ducimus dolorem!
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
