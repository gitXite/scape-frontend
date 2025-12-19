import { useCustomization } from '@/context/CustomizationContext';
import CustomizationPreview from './CustomizationPreview';
import React from 'react';
import PassepartoutCard from './PassepartoutCard';

function CustomizePassePartout() {
    const { passePartoutType, setPassePartoutType } = useCustomization();

    const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        setPassePartoutType(value);
        window.dispatchEvent(new Event('passe-partout-updated'));
    };

    return (
        <div className='flex flex-col min-h-svh min-sm:h-svh w-full'>
            <div className='flex flex-col pt-15 pb-8 px-4'>
                <h1 className='text-neutral-900 self-center text-2xl font-medium tracking-tight'>Choose a Passepartout</h1>
                <p className='text-md text-neutral-500 text-center mt-2'>Add a passepartout to enhance your frame</p>
            </div>
            <div className='flex max-lg:flex-col h-full w-full max-lg:px-10 max-lg:place-content-between place-content-evenly max-lg:items-center'>
                <div className='flex h-4/5 max-sm:h-[300px] w-1/3 max-lg:w-full rounded-2xl bg-white border border-neutral-200'>
                    <CustomizationPreview />
                </div>
                <div className='flex h-4/5 max-xl:w-100 max-sm:w-full max-sm:mt-10 max-lg:pb-20 max-sm:pb-10 justify-center items-center gap-10 text-sm'>
                    <PassepartoutCard passePartoutType={passePartoutType} type='white' handleClick={handleClick} text='Enclosed by white -' desc='Bright, airy, and classic' />
                    <PassepartoutCard passePartoutType={passePartoutType} type='black' handleClick={handleClick} text='Enclosed by black -' desc='Sharp contrast for a bold look' />
                </div>
            </div>
        </div>
    );
}

export default CustomizePassePartout;
