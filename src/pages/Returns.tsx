import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';



function Returns() {
    return (
        <div className='flex flex-col h-full w-full bg-neutral-100 items-center'>
            <BackButton />
            <div className='flex flex-col items-center space-y-10 min-h-full p-10 w-200 text-center text-neutral-900 text-lg'>
                <h1 className='text-2xl tracking-widest font-normal mb-10'>
                    RETURN POLICY
                </h1>
                <p>
                    At <b>SCAPE by md</b>, all of our products are custom-made to order. <br />
                    Because each item is specifically tailored to your request, we unfortunately cannot accept returns, exchanges, or cancellations once production has started.
                </p>
                <p>
                    This policy is in accordance with consumer protection laws, which exempt custom-made products from standard return rights.
                </p>
                <p>
                    If your item arrives damaged, defective, or incorrect, please contact us within <b>7 days</b> of delivery with photos of the issue, 
                    and we will work with you to resolve the problem as quickly as possible.
                </p>
                <p className=''>
                    We want you to be happy with your order, and we’ll do our best to make things right in case of any mistakes on our side.
                </p>
                <Separator orientation='horizontal' className='border-neutral-400 max-w-100' />
                <h2 className='text-xl font-regular tracking-widest'>
                    Regards,
                </h2>
                <h2 className='flex flex-col text-2xl font-normal gap-2'>
                    S C /\ P E
                    <p className='text-sm content-end tracking-widest'>by md</p>
                </h2>
            </div>
            <Footer />
        </div>
    );
}


export default Returns;