import MapSelector from '../components/MapSelector';
import Welcome from '../components/Welcome';


function Home() {
    return (
        <div className='h-full w-full bg-neutral-100'>
            <Welcome />
            <MapSelector />
        </div>
    );
}


export default Home;