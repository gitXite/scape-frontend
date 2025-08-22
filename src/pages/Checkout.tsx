import Footer from '../components/Footer';
import CheckoutSummary from '../components/CheckoutSummary';


function Checkout() {
    return (
        <div className='flex-col h-full w-full bg-neutral-100'>
            <CheckoutSummary />
            <Footer />
        </div>
    );
}


export default Checkout;
