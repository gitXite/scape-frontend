


function CustomizePassePartout() {
    return (
        <div className='flex h-full w-full justify-center items-center'>
            <label className='flex flex-col h-fit items-center cursor-pointer mx-5'>
                <input 
                    type='radio'
                    name='passe-partout'
                    value='without'
                    className='peer hidden'
                />
                <div className='flex flex-col justify-center items-center border rounded-sm p-4 transition peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-sky-300 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
                    <img src='src/assets/product-image-without-pp.png' alt='Without' className='w-50 my-5 mb-15 rounded' />
                    <p className='text-neutral-900 mt-10'>Without</p>
                </div>
            </label>
            <label className='flex flex-col h-fit items-center cursor-pointer mx-5'>
                <input 
                    type='radio'
                    name='passe-partout'
                    value='white'
                    className='peer hidden'
                />
                <div className='flex flex-col justify-center items-center border rounded-sm p-4 transition peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-sky-300 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
                    <img src='src/assets/product-image-without-pp.png' alt='White' className='w-50 my-5 mb-15 rounded' />
                    <p className='text-neutral-900 mt-10'>White</p>
                </div>
            </label>
            <label className='flex flex-col h-fit items-center cursor-pointer mx-5'>
                <input 
                    type='radio'
                    name='passe-partout'
                    value='black'
                    className='peer hidden'
                />
                <div className='flex flex-col justify-center items-center border rounded-sm p-4 transition peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-sky-300 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
                    <img src='src/assets/product-image-without-pp.png' alt='Black' className='w-50 my-5 mb-15 rounded' />
                    <p className='text-neutral-900 mt-10'>Black</p>
                </div>
            </label>
        </div>
    );
}


export default CustomizePassePartout;
