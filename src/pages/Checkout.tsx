import Footer from '../components/Footer';
import CheckoutSummary from '../components/CheckoutSummary';
import CheckoutPayment from '../components/CheckoutPayment';


function Checkout() {
    return (
        <div className='flex-col h-full w-full bg-neutral-100'>
            <div className='flex h-full w-full'>
                <CheckoutPayment />
                <CheckoutSummary />
            </div>
            <Footer />
        </div>
    );
}


export default Checkout;
