import CustomizationPreview from './CustomizationPreview';
import { Separator } from './ui/separator';
import React, { useState } from 'react';


function CustomizeFrame() {
    const [selectedValue, setSelectedValue] = useState<string>((): string => {
        const storedValue = localStorage.getItem('selectedFrame');
        return storedValue ? storedValue : '';
    });
    
    const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
        const value = (event.target as HTMLInputElement).value;

        setSelectedValue(value);
        localStorage.setItem('selectedFrame', value);
        window.dispatchEvent(new Event('frame-updated'));
    };
    
    return (
        <div className='flex h-full w-full'>
            <div className='flex h-full w-1/3 items-center justify-center pb-20'>
                <CustomizationPreview frameType={selectedValue} passePartoutType='' />
            </div>
            <div className='flex h-full w-2/3 items-center justify-center pb-20'>
                <label className='flex flex-col h-fit items-center cursor-pointer mx-5'>
                    <input 
                        type='radio'
                        name='frame'
                        value='oak'
                        defaultChecked={selectedValue === 'oak'}
                        onClick={handleClick}
                        className='peer hidden'
                    />
                    <div className='flex flex-col min-h-80 min-w-60 text-center justify-center bg-neutral-200/20 hover:bg-neutral-100 items-center peer-checked:bg-neutral-100 border rounded-sm p-4 transition peer-checked:border-neutral-900 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
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
                        defaultChecked={selectedValue === 'walnut'}
                        onClick={handleClick}
                        className='peer hidden'
                    />
                    <div className='flex flex-col min-h-80 min-w-60 text-center justify-center items-center bg-neutral-200/20 hover:bg-neutral-100 peer-checked:bg-neutral-100 border rounded-sm p-4 transition peer-checked:border-neutral-900 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
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
                        defaultChecked={selectedValue === 'white'}
                        onClick={handleClick}
                        className='peer hidden'
                    />
                    <div className='flex flex-col min-h-80 min-w-60 text-center justify-center items-center bg-neutral-200/20 hover:bg-neutral-100 peer-checked:bg-neutral-100 border rounded-sm p-4 transition peer-checked:border-neutral-900 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
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
                        defaultChecked={selectedValue === 'black'}
                        onClick={handleClick}
                        className='peer hidden'
                    />
                    <div className='flex flex-col min-h-80 min-w-60 text-center justify-center items-center bg-neutral-200/20 hover:bg-neutral-100 peer-checked:bg-neutral-100 border rounded-sm p-4 transition peer-checked:border-neutral-900 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
                        <img src='src/assets/product-image-without-pp.png' alt='Black Frame' className='w-50 rounded mb-2' />
                        <p className='text-neutral-500 w-60 pt-10 px-2'>Fitted with a black frame -</p>
                        <p className='text-neutral-500 w-60 pb-10 px-2'>Bold and classic</p>
                        <p className='text-neutral-900 text-xl mt-2 pb-4 font-normal'>Black</p>
                        <Separator orientation='horizontal' />
                        <p className='text-neutral-600 pt-4'>99kr</p>
                    </div>
                </label>
            </div>
        </div>
    );
}


export default CustomizeFrame;
