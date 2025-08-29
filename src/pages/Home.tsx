import MapSelector from '../components/MapSelector';
import Welcome from '../components/Welcome';
import About from '../components/Story';
import Footer from '../components/Footer';
import Header from '../components/Header';


function Home() {
    return (
        <div className='h-full w-full bg-neutral-100'>
            <Header />
            <Welcome />
            <About />
            <MapSelector mode='dummy' />
            <Footer />
        </div>
    );
}


export default Home;