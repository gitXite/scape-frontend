


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
                    <img src='src/assets/product-image-without-pp.png' alt='Oak Frame' className='w-50 rounded my-10' />
                    <p className='text-neutral-900 mt-2'>Oak Frame</p>
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
                    <img src='src/assets/product-image-without-pp.png' alt='Walnut Frame' className='w-50 rounded my-10' />
                    <p className='text-neutral-900 mt-2'>Walnut Frame</p>
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
                    <img src='src/assets/product-image-without-pp.png' alt='White Frame' className='w-50 rounded my-10' />
                    <p className='text-neutral-900 mt-2'>White Frame</p>
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
                    <img src='src/assets/product-image-without-pp.png' alt='Black Frame' className='w-50 rounded my-10' />
                    <p className='text-neutral-900 mt-2'>Black Frame</p>
                </div>
            </label>
        </div>
    );
}


export default CustomizeFrame;
