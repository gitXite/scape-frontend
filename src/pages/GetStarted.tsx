import Footer from '../components/Footer';
import MapSelector from '../components/MapSelector';



function GetStarted() {
    return (
        <div className='h-full w-full bg-neutral-900'>
            <MapSelector />
            <Footer />
        </div>
    );
}


export default GetStarted;