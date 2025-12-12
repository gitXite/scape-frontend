import MapSelector from '../components/MapSelector';
import Hero from '../components/Hero';
import TheScape from '../components/TheScape';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { toast } from 'sonner';
import { useEffect } from 'react';

function Home() {
    const reference = localStorage.getItem('reference');

    useEffect(() => {
        async function checkCallback() {
            if (!reference) return;

            try {
                const res = await fetch(
                    `${
                        import.meta.env.VITE_APP_API_URL
                    }/api/checkout?reference=${reference}`
                );
                const status = await res.json();

                switch (status) {
                    case 'PaymentSuccessful':
                        toast.success('Order successfully placed', {
                            description:
                                'Check your mail for order confirmation',
                        });
                        localStorage.removeItem('reference');
                        localStorage.removeItem('coordinates');
                        localStorage.removeItem('verticalScale');
                        localStorage.removeItem('boxSize');
                        localStorage.removeItem('selectedFrame');
                        localStorage.removeItem('selectedPassePartout');
                        localStorage.setItem('step', '0');
                        setTimeout(() => {
                            window.dispatchEvent(
                                new Event('coordinates-updated')
                            );
                            window.dispatchEvent(new Event('frame-removed'));
                            window.dispatchEvent(
                                new Event('passe-partout-removed')
                            );
                        });
                        break;
                    case 'SessionExpired':
                        toast.info('Checkout session expired');
                        localStorage.removeItem('reference');
                        break;
                    case 'PaymentTerminated':
                        toast.info('Checkout cancelled');
                        localStorage.removeItem('reference');
                        break;
                }
            } catch (err) {
                console.error('Polling error', err);
            }
        }

        checkCallback();
    }, []);

    return (
        <div className='h-full w-full bg-neutral-100'>
            <Header />
            <Hero />
            <TheScape />
            <MapSelector mode='real' />
            <Footer />
        </div>
    );
}

export default Home;
