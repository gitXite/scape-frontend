import Footer from '../components/Footer';
import CheckoutSummary from '../components/CheckoutSummary';
import CheckoutPayment from '../components/CheckoutPayment';
import { Separator } from '@/components/ui/separator';


function Checkout() {
    return (
        <div className='flex-col h-full w-full bg-neutral-100'>
            <div className='flex h-full w-full items-center content-center'>
                <CheckoutPayment />
                <Separator className=''/>
                <CheckoutSummary />
            </div>
            <Footer />
        </div>
    );
}


export default Checkout;
