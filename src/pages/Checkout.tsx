import Footer from '../components/Footer';
import CheckoutSummary from '../components/CheckoutSummary';
import BackButton from '@/components/BackButton';
import { CustomizationProvider } from '@/context/CustomizationContext';


function Checkout() {
    

    return (
        <div className='flex-col min-h-full w-full bg-neutral-100'>
            <div className='flex min-h-svh w-full items-center content-center py-10'>
                <BackButton page='back' />
                <CustomizationProvider>
                    <CheckoutSummary />
                </CustomizationProvider>
            </div>
            <Footer />
        </div>
    );
}


export default Checkout;
