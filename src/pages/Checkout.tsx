import Footer from '../components/Footer';
import CheckoutSummary from '../components/CheckoutSummary';
import CheckoutPayment from '../components/CheckoutPayment';
import { Separator } from '@/components/ui/separator';
import BackButton from '@/components/BackButton';
import { CustomizationProvider } from '@/context/CustomizationContext';


function Checkout() {
    return (
        <div className='flex-col h-full w-full bg-neutral-100'>
            <div className='flex h-full w-full items-center content-center py-10'>
                <BackButton page='back' />
                <CheckoutPayment />
                <Separator className=''/>
                <CustomizationProvider>
                    <CheckoutSummary />
                </CustomizationProvider>
            </div>
            <Footer />
        </div>
    );
}


export default Checkout;
