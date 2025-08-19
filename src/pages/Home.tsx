import MapSelector from '../components/MapSelector';
import Welcome from '../components/Welcome';
import About from '../components/About';


function Home() {
    return (
        <div className='h-full w-full bg-neutral-100'>
            <Welcome />
            <About />
            <MapSelector />
        </div>
    );
}


export default Home;