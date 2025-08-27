import { Separator } from './ui/Separator';



function CustomizeFrame() {
    return (
        <div className='flex h-full w-full items-center justify-center pb-20'>
            <label className='flex flex-col h-fit items-center cursor-pointer mx-5'>
                <input 
                    type='radio'
                    name='frame'
                    value='oak'
                    className='peer hidden'
                />
                <div className='flex flex-col min-h-80 min-w-60 text-center justify-center items-center border rounded-sm p-4 transition peer-checked:border-neutral-900 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
                    <img src='src/assets/product-image-without-pp.png' alt='Oak Frame' className='w-50 rounded mb-2' />
                    <p className='text-neutral-500 w-60 pt-10 px-2'>Fitted with an oak frame -</p>
                    <p className='text-neutral-500 w-60 pb-10 px-2'>Natural and timeless</p>
                    <p className='text-neutral-900 text-xl mt-2 pb-4 font-normal'>Oak</p>
                    <Separator orientation='horizontal' />
                    <p className='text-neutral-600 pt-4'>99kr</p>
                </div>
            </label>
            <label className='flex flex-col h-fit items-center cursor-pointer mx-5'>
                <input 
                    type='radio'
                    name='frame'
                    value='walnut'
                    className='peer hidden'
                />
                <div className='flex flex-col min-h-80 min-w-60 text-center justify-center items-center border rounded-sm p-4 transition peer-checked:border-neutral-900 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
                    <img src='src/assets/product-image-without-pp.png' alt='Walnut Frame' className='w-50 rounded mb-2' />
                    <p className='text-neutral-500 w-60 pt-10 px-2'>Fitted with a walnut frame -</p>
                    <p className='text-neutral-500 w-60 pb-10 px-2'>Rich and elegant</p>
                    <p className='text-neutral-900 text-xl mt-2 pb-4 font-normal'>Walnut</p>
                    <Separator orientation='horizontal' />
                    <p className='text-neutral-600 pt-4'>99kr</p>
                </div>
            </label>
            <label className='flex flex-col h-fit items-center cursor-pointer mx-5'>
                <input 
                    type='radio'
                    name='frame'
                    value='white'
                    className='peer hidden'
                />
                <div className='flex flex-col min-h-80 min-w-60 text-center justify-center items-center border rounded-sm p-4 transition peer-checked:border-neutral-900 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
                    <img src='src/assets/product-image-without-pp.png' alt='White Frame' className='w-50 rounded mb-2' />
                    <p className='text-neutral-500 w-60 pt-10 px-2'>Fitted with a white frame -</p>
                    <p className='text-neutral-500 w-60 pb-10 px-2'>Clean and minimal</p>
                    <p className='text-neutral-900 text-xl mt-2 pb-4 font-normal'>White</p>
                    <Separator orientation='horizontal' />
                    <p className='text-neutral-600 pt-4'>99kr</p>
                </div>
            </label>
            <label className='flex flex-col h-fit items-center cursor-pointer mx-5'>
                <input 
                    type='radio'
                    name='frame'
                    value='black'
                    className='peer hidden'
                />
                <div className='flex flex-col min-h-80 min-w-60 text-center justify-center items-center border rounded-sm p-4 transition peer-checked:border-neutral-900 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
                    <img src='src/assets/product-image-without-pp.png' alt='Black Frame' className='w-50 rounded mb-2' />
                    <p className='text-neutral-500 w-60 pt-10 px-2'>Fitted with a black frame -</p>
                    <p className='text-neutral-500 w-60 pb-10 px-2'>Bold and classic</p>
                    <p className='text-neutral-900 text-xl mt-2 pb-4 font-normal'>Black</p>
                    <Separator orientation='horizontal' />
                    <p className='text-neutral-600 pt-4'>99kr</p>
                </div>
            </label>
        </div>
    );
}


export default CustomizeFrame;
