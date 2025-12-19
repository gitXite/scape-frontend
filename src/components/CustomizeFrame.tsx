import { useCustomization } from '@/context/CustomizationContext';
import CustomizationPreview from './CustomizationPreview';
import React from 'react';
import FrameCard from './FrameCard';

function CustomizeFrame() {
    const { frameType, setFrameType } = useCustomization();

    const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        setFrameType(value);
        window.dispatchEvent(new Event('frame-updated'));
    };

    return (
        <div className='flex flex-col min-h-svh min-sm:h-svh w-full'>
            <div className='flex flex-col pt-15 pb-8 px-4'>
                <h1 className='text-neutral-900 self-center text-2xl font-medium tracking-tight'>Choose a Frame</h1>
                <p className='text-md text-neutral-500 text-center mt-2'>Select the perfect frame for your scape</p>
            </div>
            <div className='flex max-lg:flex-col h-full w-full max-lg:px-10 max-lg:place-content-between place-content-evenly max-lg:items-center'>
                <div className='flex h-4/5 max-sm:h-[300px] w-1/3 max-lg:w-full rounded-2xl bg-white border border-neutral-200'>
                    <CustomizationPreview />
                </div>
                <div className='flex h-4/5 max-xl:w-100 max-sm:w-full max-sm:flex-1 max-sm:mt-10 min-lg:flex-wrap max-sm:flex-wrap max-lg:pb-20 max-sm:pb-10 justify-center items-center gap-10 max-lg:gap-5 text-sm'>
                    <FrameCard frameType={frameType} type='oak' handleClick={handleClick} text='Fitted with an oak frame -' desc='Natural and timeless' />
                    <FrameCard frameType={frameType} type='walnut' handleClick={handleClick} text='Fitted with a walnut frame -' desc='Rich and elegant' />
                    <FrameCard frameType={frameType} type='white' handleClick={handleClick} text='Fitted with a white frame -' desc='Clean and minimal' />
                    <FrameCard frameType={frameType} type='black' handleClick={handleClick} text='Fitted with a black frame -' desc='Bold and classic' />
                </div>
            </div>
        </div>
    );
}

export default CustomizeFrame;
