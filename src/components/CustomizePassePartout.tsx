import { Separator } from './ui/Separator';


function CustomizePassePartout() {
    const handleClick = (value: string) => {
        localStorage.setItem('selectedPassePartout', value);
    };
    
    return (
        <div className='flex h-full w-full justify-center items-center pb-20'>
            <label className='flex flex-col h-fit items-center cursor-pointer mx-5'>
                <input 
                    type='radio'
                    name='passe-partout'
                    value='without'
                    className='peer hidden'
                    onClick={(e) => handleClick(e.target.value)}
                />
                <div className='flex flex-col min-h-80 min-w-60 text-center justify-center items-center border rounded-sm p-4 transition peer-checked:border-neutral-900 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
                    <img src='src/assets/product-image-without-pp.png' alt='Without' className='w-50 mb-2 rounded' />
                    <p className='text-neutral-500 w-60 pt-10 px-2'>Without a passe-partout -</p>
                    <p className='text-neutral-500 w-60 pb-10 px-2'>Pure focus on the model</p>
                    <p className='text-neutral-900 text-xl mt-2 pb-4 font-normal'>Without</p>
                    <Separator orientation='horizontal' />
                    <p className='text-neutral-600 pt-4'>19kr</p>
                </div>
            </label>
            <label className='flex flex-col h-fit items-center cursor-pointer mx-5'>
                <input 
                    type='radio'
                    name='passe-partout'
                    value='white'
                    className='peer hidden'
                    onClick={(e) => handleClick(e.target.value)}
                />
                <div className='flex flex-col min-h-80 min-w-60 text-center justify-center items-center border rounded-sm p-4 transition peer-checked:border-neutral-900 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
                    <img src='src/assets/product-image-without-pp.png' alt='White' className='w-50 mb-2 rounded' />
                    <p className='text-neutral-500 w-60 pt-10 px-2'>Enclosed by white -</p>
                    <p className='text-neutral-500 w-60 pb-10 px-2'>Bright, airy, and classic</p>
                    <p className='text-neutral-900 text-xl mt-2 pb-4 font-normal'>White</p>
                    <Separator orientation='horizontal' />
                    <p className='text-neutral-600 pt-4'>49kr</p>
                </div>
            </label>
            <label className='flex flex-col h-fit items-center cursor-pointer mx-5'>
                <input 
                    type='radio'
                    name='passe-partout'
                    value='black'
                    className='peer hidden'
                    onClick={(e) => handleClick(e.target.value)}
                />
                <div className='flex flex-col min-h-80 min-w-60 text-center justify-start items-center border rounded-sm p-4 transition peer-checked:border-neutral-900 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
                    <img src='src/assets/product-image-without-pp.png' alt='Black' className='w-50 mb-2 rounded' />
                    <p className='text-neutral-500 w-60 pt-10 px-2'>Enclosed by black -</p>
                    <p className='text-neutral-500 w-60 pb-10 px-2'>Sharp contrast for a bold look</p>
                    <p className='text-neutral-900 text-xl mt-2 pb-4 font-normal'>Black</p>
                    <Separator orientation='horizontal' />
                    <p className='text-neutral-600 pt-4'>49kr</p>
                </div>
            </label>
        </div>
    );
}


export default CustomizePassePartout;
