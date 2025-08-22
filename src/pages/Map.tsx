import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import MapSelector from '../components/MapSelector';



function Map() {
    return (
        <div className='bg-neutral-100 h-full w-full'>
            <BackButton />
            <div className='flex-col h-full w-full'>
                <MapSelector />
                <Footer />
            </div>
        </div>
    );
}


export default Map;