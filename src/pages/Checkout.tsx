import Footer from '../components/Footer';
import CheckoutSummary from '../components/CheckoutSummary';
import BackButton from '@/components/BackButton';
import { CustomizationProvider } from '@/context/CustomizationContext';

function Checkout() {
    return (
        <div className='flex flex-col min-h-screen w-full bg-surface text-surface-foreground font-sans relative'>
            <BackButton page='back' />

            {/* Mobile Back Anchor */}
            <a
                href='/get-started'
                className='sm:hidden absolute top-4 right-4 place-self-end text-xs font-medium text-muted-foreground hover:text-surface-foreground transition-colors flex items-center gap-1'
            >
                Back
            </a>

            <main className='flex-1 flex w-full items-center justify-center py-8 sm:py-16'>
                <CustomizationProvider>
                    <CheckoutSummary />
                </CustomizationProvider>
            </main>

            <Footer />
        </div>
    );
}

export default Checkout;
