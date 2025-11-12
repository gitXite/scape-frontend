import { useNavigate } from 'react-router';
import { ChevronDown } from 'lucide-react';
import Hero3D from './Hero3D';


function Hero() {
    const navigate = useNavigate();

    return (
        <div id='home' className='h-full w-full place-content-center'>
            <div className='flex flex-col place-items-center place-content-center h-full w-full shadow-[inset_0px_0px_20px_rgba(0,0,0,0.6)] bg-neutral-900 drop-shadow-xl drop-shadow-neutral-500/60'>
                <Hero3D />

                <h1 className='z-2 relative bottom-30 text-9xl text-white drop-shadow-black drop-shadow-2xl tracking-widest [text-shadow:0_4px_10px_rgba(0,0,0,0.6)] pointer-events-none'>S C /\ P E</h1>
                <div className='flex tracking-widest relative text-white bottom-30 text-5xl z-2 drop-shadow-black drop-shadow-2xl mt-10 space-x-10 [text-shadow:0_2px_8px_rgba(0,0,0,1)] pointer-events-none'>
                    <h2 className=''>F r o m</h2>
                    <h2 className=''>M a p</h2>
                    <h2 className=''>T o</h2>
                    <h2 className=''>F r a m e</h2>
                </div>
                <button 
                    className='z-2 flex mt-20 p-5 pl-12 pr-12 relative bottom-30 text-xl font-normal backdrop-blur-xs text-neutral-900 border-1 border-neutral-50/80 transition-all duration-150 rounded-full shadow-md hover:cursor-pointer'
                    onClick={() => {navigate('/get-started')}}
                >
                    <p>G e t</p><span className='w-4'></span><p>S t a r t e d</p>
                </button>
                <div className='flex flex-col text-center items-center absolute bottom-20'>
                    <a href='#thescape' className='text-lg text-neutral-800 relative top-10 cursor-pointer font-normal active:text-neutral-500 transition-colors duration-100 pb-5 z-1 peer'>Read More</a>
                    <ChevronDown className='text-neutral-900/85 relative top-5 cursor-pointer z-0 peer-hover:translate-y-2 transition-all duration-200 ease-out' />
                </div>
            </div>
        </div>
    );
}


export default Hero;
