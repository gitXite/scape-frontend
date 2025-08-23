


function CustomizeFrame() {
    return (
        <div className='flex h-full w-1/3'>
            <label className='flex flex-col items-center cursor-pointer'>
                <input 
                    type='radio'
                    name='frame'
                    value='oak'
                    className='peer hidden'
                />
                <div className='flex flex-col justify-center items-center border rounded-xl p-4 transition peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:ring-blue-300 hover:scale-105 hover:shadow-lg'>
                    <img src='' alt='Oak Frame' className='bg-neutral-900 h-20 w-20 rounded' />
                    <p className='mt-2'>Oak Frame</p>
                </div>
            </label>
            <label className='flex flex-col items-center cursor-pointer'>
                <input 
                    type='radio'
                    name='frame'
                    value='walnut'
                    className='peer hidden'
                />
                <div className='flex flex-col justify-center items-center border rounded-xl p-4 transition peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:ring-blue-300 hover:scale-105 hover:shadow-lg'>
                    <img src='' alt='Walnut Frame' className='bg-neutral-900 h-20 w-20 rounded' />
                    <p className='mt-2'>Walnut Frame</p>
                </div>
            </label>
            <label className='flex flex-col items-center cursor-pointer'>
                <input 
                    type='radio'
                    name='frame'
                    value='white'
                    className='peer hidden'
                />
                <div className='flex flex-col justify-center items-center border rounded-xl p-4 transition peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:ring-blue-300 hover:scale-105 hover:shadow-lg'>
                    <img src='' alt='White Frame' className='bg-neutral-900 h-20 w-20 rounded' />
                    <p className='mt-2'>White Frame</p>
                </div>
            </label>
            <label className='flex flex-col items-center cursor-pointer'>
                <input 
                    type='radio'
                    name='frame'
                    value='black'
                    className='peer hidden'
                />
                <div className='flex flex-col justify-center items-center border rounded-xl p-4 transition peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:ring-blue-300 hover:scale-105 hover:shadow-lg'>
                    <img src='' alt='Black Frame' className='bg-neutral-900 h-20 w-20 rounded' />
                    <p className='mt-2'>Black Frame</p>
                </div>
            </label>
        </div>
    );
}


export default CustomizeFrame;
