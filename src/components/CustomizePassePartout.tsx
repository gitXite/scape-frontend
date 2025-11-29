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
        <div className='flex flex-col h-full w-full'>
            <h1 className='text-neutral-900 self-center relative top-20 text-xl font-medium tracking-wide'>Choose a Passepartout</h1>
            <div className='flex h-full w-full justify-evenly'>
                <div className='flex h-full pb-10'>
                    <CustomizationPreview />
                </div>
                <div className='flex h-full justify-center items-center pb-10 text-sm space-x-10 max-2xl:space-x-2'>
                    <PassepartoutCard passePartoutType={passePartoutType} type='white' handleClick={handleClick} text='Enclosed by white -' desc='Bright, airy, and classic' />
                    <PassepartoutCard passePartoutType={passePartoutType} type='black' handleClick={handleClick} text='Enclosed by black -' desc='Sharp contrast for a bold look' />
                </div>
            </div>
        </div>
    );
}

export default CustomizePassePartout;
