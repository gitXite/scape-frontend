


function CustomizeFrame() {
    return (
        <div className='flex h-full w-full items-center justify-center'>
            <label className='flex flex-col h-fit items-center cursor-pointer mx-5'>
                <input 
                    type='radio'
                    name='frame'
                    value='oak'
                    className='peer hidden'
                />
                <div className='flex flex-col justify-center items-center border rounded-sm p-4 transition peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-sky-300 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
                    <img src='src/assets/product-image-without-pp.png' alt='Oak Frame' className='w-50 rounded my-5 mb-15' />
                    <p className='text-neutral-900 text-xl mt-2 font-normal'>Oak</p>
                    <p className='text-neutral-600 mt-10'>99kr</p>
                </div>
            </label>
            <label className='flex flex-col h-fit items-center cursor-pointer mx-5'>
                <input 
                    type='radio'
                    name='frame'
                    value='walnut'
                    className='peer hidden'
                />
                <div className='flex flex-col justify-center items-center border rounded-sm p-4 transition peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-sky-300 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
                    <img src='src/assets/product-image-without-pp.png' alt='Walnut Frame' className='w-50 rounded my-5 mb-15' />
                    <p className='text-neutral-900 text-xl mt-2 font-normal'>Walnut</p>
                    <p className='text-neutral-600 mt-10'>99kr</p>
                </div>
            </label>
            <label className='flex flex-col h-fit items-center cursor-pointer mx-5'>
                <input 
                    type='radio'
                    name='frame'
                    value='white'
                    className='peer hidden'
                />
                <div className='flex flex-col justify-center items-center border rounded-sm p-4 transition peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-sky-300 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
                    <img src='src/assets/product-image-without-pp.png' alt='White Frame' className='w-50 rounded my-5 mb-15' />
                    <p className='text-neutral-900 text-xl mt-2 font-normal'>White</p>
                    <p className='text-neutral-600 mt-10'>99kr</p>
                </div>
            </label>
            <label className='flex flex-col h-fit items-center cursor-pointer mx-5'>
                <input 
                    type='radio'
                    name='frame'
                    value='black'
                    className='peer hidden'
                />
                <div className='flex flex-col justify-center items-center border rounded-sm p-4 transition peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-sky-300 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
                    <img src='src/assets/product-image-without-pp.png' alt='Black Frame' className='w-50 rounded my-5 mb-15' />
                    <p className='text-neutral-900 text-xl mt-2 font-normal'>Black</p>
                    <p className='text-neutral-600 mt-10'>99kr</p>
                </div>
            </label>
        </div>
    );
}


export default CustomizeFrame;
