import { useNavigate } from 'react-router';
import VideoBackground from './VideoBackground';
import { ChevronDown } from 'lucide-react';


function Welcome() {
    const navigate = useNavigate();

    return (
        <div id='home' className='h-full w-full place-content-center'>
            <div className='flex flex-col place-items-center place-content-center  h-8/12 w-full shadow-[inset_0px_0px_20px_rgba(0,0,0,0.6)] bg-neutral-900 drop-shadow-2xl drop-shadow-neutral-500'>
                <VideoBackground />
                <h1 className='z-2 mt-10 text-9xl drop-shadow-black drop-shadow-2xl'>W   E   L   C   O   M   E</h1>
                <button 
                    className='z-2 flex mt-20 p-5 pl-12 pr-12 text-xl backdrop-blur-md text-neutral-100 border-1 transition duration-150 shadow-[inset_0px_0px_10px_rgba(0,0,0,0.6)] hover:shadow-[inset_0px_0px_15px_rgba(0,0,0,0.6)] active:shadow-[inset_0px_0px_10px_rgba(0,0,0,0.6)] shadow-neutral-950 border-neutral-100 rounded-full hover:drop-shadow-xl hover:cursor-pointer'
                    onClick={() => {navigate('/customize')}}
                >
                    <p>G e t</p><span className='w-4'></span><p>S t a r t e d</p>
                </button>
            </div>
            <div className='flex flex-col text-center items-center'>
                <a href='#about' className='text-lg text-neutral-500 relative top-10 cursor-pointer hover:text-neutral-600 active:text-neutral-600 pb-5 z-1 peer'>Read More</a>
                <ChevronDown className='text-neutral-500/50 relative top-5 cursor-pointer z-0 peer-hover:translate-y-2 transition-transform duration-200 ease-out' />
            </div>
        </div>
    );
}


export default Welcome;
