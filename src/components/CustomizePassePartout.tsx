import { useCustomization } from '@/context/CustomizationContext';
import CustomizationPreview from './CustomizationPreview';
import { Separator } from './ui/separator';
import React from 'react';
import Passepartout_White from '@/assets/Passepartout_White.webp';
import Passepartout_Black from '@/assets/Passepartout_Black.webp';

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
                <div className='flex h-full justify-center items-center pb-10 text-sm'>
                    <label className='flex flex-col h-fit items-center cursor-pointer mx-5'>
                        <input
                            type='radio'
                            name='passe-partout'
                            value='white'
                            checked={passePartoutType === 'white'}
                            onChange={handleClick}
                            className='peer hidden'
                        />
                        <div className='flex flex-col max-h-80 max-w-60 text-center justify-center items-center bg-neutral-200/20 hover:bg-neutral-100 peer-checked:bg-neutral-100 border rounded-sm p-4 transition peer-checked:border-neutral-900 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
                            <img
                                src={Passepartout_White}
                                alt='White'
                                className='w-30 mb-2 rounded'
                            />
                            <p className='text-neutral-500 w-60 pt-2 px-2'>
                                Enclosed by white -
                            </p>
                            <p className='text-neutral-500 w-60 pb-2 px-2'>
                                Bright, airy, and classic
                            </p>
                            <p className='text-neutral-900 text-xl pb-2 font-normal tracking-widest'>
                                White
                            </p>
                            <Separator orientation='horizontal' />
                            <p className='text-neutral-600 pt-2'>49kr</p>
                        </div>
                    </label>
                    <label className='flex flex-col h-fit items-center cursor-pointer mx-5'>
                        <input
                            type='radio'
                            name='passe-partout'
                            value='black'
                            checked={passePartoutType === 'black'}
                            onChange={handleClick}
                            className='peer hidden'
                        />
                        <div className='flex flex-col max-h-80 max-w-60 text-center justify-center items-center bg-neutral-200/20 hover:bg-neutral-100 peer-checked:bg-neutral-100 border rounded-sm p-4 transition peer-checked:border-neutral-900 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
                            <img
                                src={Passepartout_Black}
                                alt='Black'
                                className='w-30 mb-2 rounded'
                            />
                            <p className='text-neutral-500 w-60 pt-2 px-2'>
                                Enclosed by black -
                            </p>
                            <p className='text-neutral-500 w-60 pb-2 px-2'>
                                Sharp contrast for a bold look
                            </p>
                            <p className='text-neutral-900 text-xl pb-2 font-normal tracking-widest'>
                                Black
                            </p>
                            <Separator orientation='horizontal' />
                            <p className='text-neutral-600 pt-2'>49kr</p>
                        </div>
                    </label>
                    {/* <label className='flex flex-col h-fit items-center cursor-pointer mx-5'>
                        <input
                            type='radio'
                            name='passe-partout'
                            value='without'
                            checked={passePartoutType === 'without'}
                            onChange={handleClick}
                            className='peer hidden'
                        />
                        <div className='flex flex-col max-h-80 max-w-60 text-center justify-center items-center bg-neutral-200/20 hover:bg-neutral-100 peer-checked:bg-neutral-100 border rounded-sm p-4 transition peer-checked:border-neutral-900 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
                            <img
                                src=''
                                alt='Without'
                                className='w-40 mb-2 rounded'
                            />
                            <p className='text-neutral-500 w-60 px-2'>
                                Without a passe-partout -
                            </p>
                            <p className='text-neutral-500 w-60 pb-5 px-2'>
                                Pure focus on the model
                            </p>
                            <p className='text-neutral-900 text-xl pb-2 font-normal'>
                                Without
                            </p>
                            <Separator orientation='horizontal' />
                            <p className='text-neutral-600 pt-2'>19kr</p>
                        </div>
                    </label> */}
                </div>
            </div>
        </div>
    );
}

export default CustomizePassePartout;
