import { useCustomization } from '@/context/CustomizationContext';
import CustomizationPreview from './CustomizationPreview';
import { motion } from 'motion/react';
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
        <div className='flex flex-col h-full w-full'>
            <h1 className='text-neutral-900 self-center relative top-20 text-xl font-medium tracking-wide'>Choose a Frame</h1>
            <div className='flex h-full w-full justify-evenly'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={
                        !!frameType && { opacity: 100 }
                    }
                    className='flex h-full pb-10'
                >
                    <CustomizationPreview />
                </motion.div>
                <motion.div
                    initial={{
                        width: '100%',
                    }}
                    animate={
                        !!frameType && {
                            width: '50%',
                            left: 50,
                        }
                    }
                    className='flex relative h-full pt-5 pb-10 justify-center items-center space-x-10 max-2xl:space-x-2 text-sm'
                >
                    <FrameCard frameType={frameType} type='oak' handleClick={handleClick} text='Fitted with an oak frame -' desc='Natural and timeless' />
                    <FrameCard frameType={frameType} type='walnut' handleClick={handleClick} text='Fitted with a walnut frame -' desc='Rich and elegant' />
                    <FrameCard frameType={frameType} type='white' handleClick={handleClick} text='Fitted with a white frame -' desc='Clean and minimal' />
                    <FrameCard frameType={frameType} type='black' handleClick={handleClick} text='Fitted with a black frame -' desc='Bold and classic' />
                </motion.div>
            </div>
        </div>
    );
}

export default CustomizeFrame;
