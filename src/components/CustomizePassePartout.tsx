


function CustomizePassePartout() {
    return (
        <div className='flex h-full w-1/3'>
            <label className='flex flex-col items-center cursor-pointer'>
                <input 
                    type='radio'
                    name='passe-partout'
                    value='without'
                    className='peer hidden'
                />
                <div className='flex flex-col justify-center items-center border rounded-xl p-4 transition peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:ring-blue-300 hover:scale-105 hover:shadow-lg'>
                    <img src='' alt='Without' className='bg-neutral-900 h-20 w-20 rounded' />
                    <p className='mt-2'>Without</p>
                </div>
            </label>
            <label className='flex flex-col items-center cursor-pointer'>
                <input 
                    type='radio'
                    name='passe-partout'
                    value='white'
                    className='peer hidden'
                />
                <div className='flex flex-col justify-center items-center border rounded-xl p-4 transition peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:ring-blue-300 hover:scale-105 hover:shadow-lg'>
                    <img src='' alt='White' className='bg-neutral-900 h-20 w-20 rounded' />
                    <p className='mt-2'>White</p>
                </div>
            </label>
            <label className='flex flex-col items-center cursor-pointer'>
                <input 
                    type='radio'
                    name='passe-partout'
                    value='black'
                    className='peer hidden'
                />
                <div className='flex flex-col justify-center items-center border rounded-xl p-4 transition peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:ring-blue-300 hover:scale-105 hover:shadow-lg'>
                    <img src='' alt='Black' className='bg-neutral-900 h-20 w-20 rounded' />
                    <p className='mt-2'>Black</p>
                </div>
            </label>
        </div>
    );
}


export default CustomizePassePartout;
