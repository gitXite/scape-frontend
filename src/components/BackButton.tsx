import { useNavigate } from 'react-router';
import { ChevronLeft } from 'lucide-react';


type BackButtonProps = {
    page: 'home' | 'back';
}

function BackButton({ page }: BackButtonProps) {
    const navigate = useNavigate();

    return (
        <button 
            className='flex group items-center fixed m-10 top-0 left-0 mt-9 h-fit text-lg transition-colors duration-100 text-neutral-600 hover:text-neutral-950 hover:cursor-pointer active:text-neutral-600'
            onClick={() => {
                if (page === 'home') navigate('/');
                if (page === 'back') navigate(-1);
            }}
        >
            <ChevronLeft className='group-hover:-translate-x-2 mt-[1px] transition-transform duration-200 text-neutral-500 group-hover:text-neutral-600 ease-out' />
            {page.charAt(0).toUpperCase() + page.slice(1)}
        </button>
    );
}


export default BackButton;