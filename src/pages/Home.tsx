import MapSelector from '../components/MapSelector';
import Hero from '../components/Hero';
import TheScape from '../components/TheScape';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        const reference = localStorage.getItem('reference');
        if (reference) {
            navigate(`/order-confirmation?reference=${reference}`, { replace: true });
        }
    }, [navigate]);

    return (
        <div className='h-full w-full bg-neutral-100'>
            <Header />
            <Hero />
            <TheScape />
            <MapSelector mode='real' className='pb-16 scroll-mt-20' />
            <Footer />
        </div>
    );
}

export default Home;
