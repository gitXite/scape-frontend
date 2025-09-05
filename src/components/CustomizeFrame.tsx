import { useCustomization } from '@/context/CustomizationContext';
import CustomizationPreview from './CustomizationPreview';
import { Separator } from './ui/separator';
import React from 'react';
import frame_oak from '@/assets/frame_oak.avif';
import frame_dark_oak from '@/assets/frame_darkoak.avif';
import frame_white from '@/assets/frame_white.avif';
import frame_black from '@/assets/frame_black.webp';

function CustomizeFrame() {
    const { frameType, setFrameType } = useCustomization();
    
    const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        setFrameType(value);
        window.dispatchEvent(new Event('frame-updated'));
    };
    
    return (
        <div className='flex h-full w-full'>
            <div className='flex flex-col h-full w-2/4'>
                <CustomizationPreview />
            </div>
            <div className='flex flex-col h-full w-2/4 pt-5 pr-100 justify-center space-y-5'>
                <div className='flex w-full justify-center'>    
                    <label className='flex flex-col h-fit cursor-pointer mx-5'>
                        <input 
                            type='radio'
                            name='frame'
                            value='oak'
                            checked={frameType === 'oak'}
                            onChange={handleClick}
                            className='peer hidden'
                        />
                        <div className='flex flex-col max-h-80 max-w-60 text-center justify-center bg-neutral-200/20 hover:bg-neutral-100 items-center peer-checked:bg-neutral-100 border rounded-sm p-4 transition peer-checked:border-neutral-900 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
                            <img src={frame_oak} alt='Oak Frame' className='w-40 rounded mb-2' />
                            <p className='text-neutral-500 w-60 px-2'>Fitted with an oak frame -</p>
                            <p className='text-neutral-500 w-60 pb-2 px-2'>Natural and timeless</p>
                            <p className='text-neutral-900 text-xl pb-2 font-normal tracking-widest'>Oak</p>
                            <Separator orientation='horizontal' />
                            <p className='text-neutral-600 pt-2'>99kr</p>
                        </div>
                    </label>
                    <label className='flex flex-col h-fit items-center cursor-pointer mx-5'>
                        <input 
                            type='radio'
                            name='frame'
                            value='walnut'
                            checked={frameType === 'walnut'}
                            onChange={handleClick}
                            className='peer hidden'
                        />
                        <div className='flex flex-col max-h-80 max-w-60 text-center justify-center items-center bg-neutral-200/20 hover:bg-neutral-100 peer-checked:bg-neutral-100 border rounded-sm p-4 transition peer-checked:border-neutral-900 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
                            <img src={frame_dark_oak} alt='Walnut Frame' className='w-40 rounded mb-2' />
                            <p className='text-neutral-500 w-60 px-2'>Fitted with a walnut frame -</p>
                            <p className='text-neutral-500 w-60 pb-5 px-2'>Rich and elegant</p>
                            <p className='text-neutral-900 text-xl pb-2 font-normal tracking-widest'>Walnut</p>
                            <Separator orientation='horizontal' />
                            <p className='text-neutral-600 pt-2'>99kr</p>
                        </div>
                    </label>
                </div>
                <div className='flex w-full justify-center'>
                    <label className='flex flex-col h-fit items-center cursor-pointer mx-5'>
                        <input 
                            type='radio'
                            name='frame'
                            value='white'
                            checked={frameType === 'white'}
                            onChange={handleClick}
                            className='peer hidden'
                        />
                        <div className='flex flex-col max-h-80 max-w-60 text-center justify-center items-center bg-neutral-200/20 hover:bg-neutral-100 peer-checked:bg-neutral-100 border rounded-sm p-4 transition peer-checked:border-neutral-900 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
                            <img src={frame_white} alt='White Frame' className='w-40 rounded mb-2' />
                            <p className='text-neutral-500 w-60 px-2'>Fitted with a white frame -</p>
                            <p className='text-neutral-500 w-60 pb-5 px-2'>Clean and minimal</p>
                            <p className='text-neutral-900 text-xl pb-2 font-normal tracking-widest'>White</p>
                            <Separator orientation='horizontal' />
                            <p className='text-neutral-600 pt-2'>99kr</p>
                        </div>
                    </label>
                    <label className='flex flex-col h-fit items-center cursor-pointer mx-5'>
                        <input 
                            type='radio'
                            name='frame'
                            value='black'
                            checked={frameType === 'black'}
                            onChange={handleClick}
                            className='peer hidden'
                        />
                        <div className='flex flex-col max-h-80 max-w-60 text-center justify-center items-center bg-neutral-200/20 hover:bg-neutral-100 peer-checked:bg-neutral-100 border rounded-sm p-4 transition peer-checked:border-neutral-900 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
                            <img src={frame_black} alt='Black Frame' className='w-40 rounded mb-2' />
                            <p className='text-neutral-500 w-60 px-2'>Fitted with a black frame -</p>
                            <p className='text-neutral-500 w-60 pb-5 px-2'>Bold and classic</p>
                            <p className='text-neutral-900 text-xl pb-2 font-normal tracking-widest'>Black</p>
                            <Separator orientation='horizontal' />
                            <p className='text-neutral-600 pt-2'>99kr</p>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}


export default CustomizeFrame;
