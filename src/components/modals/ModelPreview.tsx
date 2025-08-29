import { X } from 'lucide-react';


function ModelPreview() {
    return (
        <div className='absolute h-full w-3/4 bg-neutral-800 rounded-sm z-50'>
            <button className='absolute group top-0 right-0 p-2 px-5 hover:bg-red-700/80 rounded-sm rounded-tl-none rounded-br-none items-center content-center justify-center transition-all duration-100'>
                <X size={25} className='text-neutral-400 group-hover:text-neutral-100 transition-all duration-100' />
            </button>
        </div>
    );
}


export default ModelPreview;