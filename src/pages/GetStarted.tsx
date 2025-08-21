import { useNavigate } from 'react-router';
import Footer from '../components/Footer';
import MapSelector from '../components/MapSelector';



function GetStarted() {
    const navigate = useNavigate();

    return (
        <div className='bg-neutral-100 h-full w-full'>
            <button 
                className='absolute m-10 mt-8 h-fit text-lg text-neutral-600 hover:text-neutral-950 hover:cursor-pointer active:text-neutral-600'
                onClick={() => {navigate(-1)}}
            >
                Back
            </button>
            <div className='flex-col h-full w-full'>
                <MapSelector />
                <Footer />
            </div>
        </div>
    );
}


export default GetStarted;