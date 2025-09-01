import { useNavigate } from 'react-router';
import { ChevronLeft } from 'lucide-react';



function BackButton() {
    const navigate = useNavigate();

    return (
        <button 
            className='flex group items-center absolute m-10 top-0 left-0 mt-9 h-fit text-lg transition-colors duration-100 text-neutral-600 hover:text-neutral-950 hover:cursor-pointer active:text-neutral-600'
            onClick={() => {navigate(-1)}}
        >
            <ChevronLeft className='group-hover:-translate-x-2 mt-[1px] transition-transform duration-200 text-neutral-500 group-hover:text-neutral-600 ease-out' />
            Back
        </button>
    );
}


export default BackButton;