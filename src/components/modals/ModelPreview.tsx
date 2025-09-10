import { useHotkeys } from 'react-hotkeys-hook';
import { X } from 'lucide-react';
import type React from 'react';
import { Spinner } from '../ui/shadcn-io/spinner/spinner';


type ModelPreviewProps = {
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
};

function ModelPreview({ showModal, setShowModal }: ModelPreviewProps) {
    useHotkeys('escape', (event) => {
        event.preventDefault();
        if (showModal) setShowModal(false);
    });

    return (
        <div className='absolute h-6/7 w-3/4 -translate-y-10 bg-neutral-900 rounded-sm z-50 shadow-[inset_0px_0px_20px_rgba(0,0,0,0.6)]'>
            <Spinner variant='circle' size={42} className='relative justify-self-center top-2/4 -translate-y-2/4' />
            <button 
                onClick={() => setShowModal(false)}
                className='absolute group top-0 right-0 p-2 px-5 hover:shadow-[inset_0px_0px_10px_rgba(0,0,0,0.5)] active:shadow-[inset_0px_0px_20px_rgba(0,0,0,0.6)] hover:bg-neutral-100 rounded-sm rounded-tl-none rounded-br-none items-center content-center justify-center transition-all duration-100'
            >
                <X size={25} className='text-neutral-300 group-hover:text-neutral-900 transition-all duration-100' />
            </button>
        </div>
    );
}


export default ModelPreview;