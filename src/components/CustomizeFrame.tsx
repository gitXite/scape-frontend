import { useCustomization } from '@/context/CustomizationContext';
import CustomizationPreview from './CustomizationPreview';
import { motion } from 'motion/react';
import { Separator } from './ui/separator';
import React from 'react';

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
                    className='flex relative h-full pt-5 pb-10 justify-center items-center space-y-5 space-x-10 text-sm'
                >
                    <label className='flex flex-col h-fit cursor-pointer '>
                        <input
                            type='radio'
                            name='frame'
                            value='oak'
                            checked={frameType === 'oak'}
                            onChange={handleClick}
                            className='peer hidden'
                        />
                        <div className='flex flex-col max-h-80 max-w-60 text-center justify-center bg-neutral-200/20 hover:bg-neutral-100 items-center peer-checked:bg-neutral-100 border rounded-sm p-4 transition peer-checked:border-neutral-900 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
                            <img
                                src='/images/frame_oak.webp'
                                alt='Oak Frame'
                                className='w-30 rounded mb-2'
                            />
                            <p className='text-neutral-500 w-60 pt-2 px-2'>
                                Fitted with an oak frame -
                            </p>
                            <p className='text-neutral-500 w-60 pb-2 px-2'>
                                Natural and timeless
                            </p>
                            <p className='text-neutral-900 text-xl pb-2 font-normal tracking-widest'>
                                Oak
                            </p>
                            <Separator orientation='horizontal' />
                            <p className='text-neutral-600 pt-2'>99kr</p>
                        </div>
                    </label>
                    <label className='flex flex-col h-fit items-center cursor-pointer'>
                        <input
                            type='radio'
                            name='frame'
                            value='walnut'
                            checked={frameType === 'walnut'}
                            onChange={handleClick}
                            className='peer hidden'
                        />
                        <div className='flex flex-col max-h-80 max-w-60 text-center justify-center items-center bg-neutral-200/20 hover:bg-neutral-100 peer-checked:bg-neutral-100 border rounded-sm p-4 transition peer-checked:border-neutral-900 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
                            <img
                                src='/images/frame_darkoak.webp'
                                alt='Walnut Frame'
                                className='w-30 rounded mb-2'
                            />
                            <p className='text-neutral-500 w-60 pt-2 px-2'>
                                Fitted with a walnut frame -
                            </p>
                            <p className='text-neutral-500 w-60 pb-2 px-2'>
                                Rich and elegant
                            </p>
                            <p className='text-neutral-900 text-xl pb-2 font-normal tracking-widest'>
                                Walnut
                            </p>
                            <Separator orientation='horizontal' />
                            <p className='text-neutral-600 pt-2'>99kr</p>
                        </div>
                    </label>
                    <label className='flex flex-col h-fit items-center cursor-pointer'>
                        <input
                            type='radio'
                            name='frame'
                            value='white'
                            checked={frameType === 'white'}
                            onChange={handleClick}
                            className='peer hidden'
                        />
                        <div className='flex flex-col max-h-80 max-w-60 text-center justify-center items-center bg-neutral-200/20 hover:bg-neutral-100 peer-checked:bg-neutral-100 border rounded-sm p-4 transition peer-checked:border-neutral-900 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
                            <img
                                src='/images/frame_white.webp'
                                alt='White Frame'
                                className='w-30 rounded mb-2'
                            />
                            <p className='text-neutral-500 w-60 pt-2 px-2'>
                                Fitted with a white frame -
                            </p>
                            <p className='text-neutral-500 w-60 pb-2 px-2'>
                                Clean and minimal
                            </p>
                            <p className='text-neutral-900 text-xl pb-2 font-normal tracking-widest'>
                                White
                            </p>
                            <Separator orientation='horizontal' />
                            <p className='text-neutral-600 pt-2'>99kr</p>
                        </div>
                    </label>
                    <label className='flex flex-col h-fit items-center cursor-pointer mb-5'>
                        <input
                            type='radio'
                            name='frame'
                            value='black'
                            checked={frameType === 'black'}
                            onChange={handleClick}
                            className='peer hidden'
                        />
                        <div className='flex flex-col max-h-80 max-w-60 text-center justify-center items-center bg-neutral-200/20 hover:bg-neutral-100 peer-checked:bg-neutral-100 border rounded-sm p-4 transition peer-checked:border-neutral-900 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
                            <img
                                src='/images/frame_black.webp'
                                alt='Black Frame'
                                className='w-30 rounded mb-2'
                            />
                            <p className='text-neutral-500 w-60 pt-2 px-2'>
                                Fitted with a black frame -
                            </p>
                            <p className='text-neutral-500 w-60 pb-2 px-2'>
                                Bold and classic
                            </p>
                            <p className='text-neutral-900 text-xl pb-2 font-normal tracking-widest'>
                                Black
                            </p>
                            <Separator orientation='horizontal' />
                            <p className='text-neutral-600 pt-2'>99kr</p>
                        </div>
                    </label>
                </motion.div>
            </div>
        </div>
    );
}

export default CustomizeFrame;
