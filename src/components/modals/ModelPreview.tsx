import { useHotkeys } from 'react-hotkeys-hook';
import { X } from 'lucide-react';


function ModelPreview({ showModal, setShowModal }) {
    useHotkeys('escape', (event) => {
        event.preventDefault();
        if (showModal) setShowModal(false);
    });

    return (
        <div className='absolute h-6/7 w-3/4 -translate-y-10 bg-neutral-800 rounded-sm z-50 shadow-[inset_0px_0px_20px_rgba(0,0,0,0.6)]'>
            <button 
                onClick={() => setShowModal(false)}
                className='absolute group top-0 right-0 p-2 px-5 hover:shadow-[inset_0px_0px_10px_rgba(0,0,0,0.5)] active:shadow-[inset_0px_0px_20px_rgba(0,0,0,0.6)] hover:bg-red-600/60 rounded-sm rounded-tl-none rounded-br-none items-center content-center justify-center transition-all duration-100'
            >
                <X size={25} className='text-neutral-400 group-hover:text-neutral-100 transition-all duration-100' />
            </button>
        </div>
    );
}


export default ModelPreview;