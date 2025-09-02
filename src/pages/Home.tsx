import MapSelector from '../components/MapSelector';
import Hero from '../components/Hero';
import TheScape from '../components/TheScape';
import Footer from '../components/Footer';
import Header from '../components/Header';


function Home() {
    return (
        <div className='h-full w-full bg-neutral-100'>
            <Header />
            <Hero />
            <TheScape />
            <MapSelector mode='dummy' />
            <Footer />
        </div>
    );
}


export default Home;