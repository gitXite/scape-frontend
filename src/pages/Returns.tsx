import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

function Returns() {
    return (
        <div className='flex flex-col min-h-full w-full bg-neutral-100 items-center'>
            <BackButton page='home' />
            <div className='flex flex-col justify-center items-center space-y-10 min-h-screen p-10 w-200 max-lg:w-3/4 max-md:w-full text-center text-neutral-900 text-lg'>
                <h1 className='text-2xl tracking-widest font-medium mb-10'>
                    RETURN POLICY
                </h1>
                <p>
                    At <b>SCAPE by md</b>, all of our products are custom-made
                    to order. <br />
                    Because each item is specifically tailored to your request,
                    we unfortunately cannot accept returns, exchanges, or
                    cancellations once production has started.
                </p>
                <p>
                    This policy is in accordance with consumer protection laws,
                    which exempt custom-made products from standard return
                    rights.
                </p>
                <p>
                    If your item arrives damaged, defective, or incorrect,
                    please contact us within <b>7 days</b> of delivery with
                    photos of the issue, and we will work with you to resolve
                    the problem as quickly as possible.
                </p>
                <p className=''>
                    We want you to be happy with your order, and we'll do our
                    best to make things right in case of any mistakes on our
                    side.
                </p>
                <Separator
                    orientation='horizontal'
                    className='border-neutral-400 max-w-100 mt-10'
                />
                <h2 className='text-xl font-regular tracking-widest'>
                    Regards,
                </h2>
                <div className='flex flex-col items-center text-center'>
                    <h2 className='text-2xl sm:text-3xl font-display tracking-[0.2em] mb-1 text-foreground whitespace-nowrap'>
                        <span>SC</span>
                        <span className='tracking-normal'>/\</span>
                        <span className='pl-1.5'>PE</span>
                    </h2>
                    <p className='text-xs tracking-widest text-muted-foreground'>
                        by md
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Returns;
