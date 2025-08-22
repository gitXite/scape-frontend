import { useNavigate } from 'react-router';



function BackButton() {
    const navigate = useNavigate();

    return (
        <button 
            className='absolute m-10 mt-8 h-fit text-lg text-neutral-600 hover:text-neutral-950 hover:cursor-pointer active:text-neutral-600'
            onClick={() => {navigate(-1)}}
        >
            Back
        </button>
    );
}


export default BackButton;