import { useState } from 'react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { useCustomization } from '@/context/CustomizationContext';

import Frame_Oak from '@/assets/frame_oak.avif';
import Frame_Dark_Oak from '@/assets/frame_darkoak.avif';
import Frame_White from '@/assets/frame_white.avif';
import Frame_Black from '@/assets/frame_black.webp';
import PassePartout_White from '@/assets/Passepartout_White.webp';
import PassePartout_Black from '@/assets/Passepartout_Black.webp';
import modelImage from '@/assets/product-image-straight.png';


const frameImages: Record<string, string> = {
    oak: Frame_Oak,
    walnut: Frame_Dark_Oak,
    white: Frame_White,
    black: Frame_Black,
};

const passePartoutImages: Record<string, string> = {
    white: PassePartout_White,
    black: PassePartout_Black,
    without: '',
};


function CheckoutSummary() {
    const { frameType, passePartoutType } = useCustomization();

    const frame = frameImages[frameType] ?? '';
    const passePartout = passePartoutImages[passePartoutType] ?? '';
    
    return (
        <div className='flex-col h-full w-2/4 p-20 pt-10 content-center text-center'>
            <div className='flex-col pb-5'>
                <h1 className='relative bottom-5 pb-5 text-neutral-900 text-xl'>Order Summary</h1>
                <Separator orientation='horizontal' className='relative bottom-5'/>
                <div className='flex justify-between py-5'>
                    <img 
                        src={modelImage} 
                        alt='Model' 
                        className='w-50 rounded-sm object-cover' 
                    />
                    <h2 className='text-neutral-900'>Model</h2>
                    <p className='text-neutral-600'>199kr</p>
                </div>
                <div className='flex justify-between py-2'>
                    {frameType && (
                        <img 
                            src={frame} 
                            alt='Frame' 
                            className='w-50 rounded-sm object-cover' 
                        />
                    )}
                    <h2 className='text-neutral-900'>Frame</h2>
                    <p className='text-neutral-600'>99kr</p>
                </div>
                <div className='flex justify-between py-2'>
                    {passePartoutType && (
                        <img 
                            src={passePartout} 
                            alt='Passe Partout' 
                            className='w-50 rounded-sm object-cover' 
                        />
                    )}
                    <h2 className='text-neutral-900'>Passe Partout</h2>
                    <p className='text-neutral-600'>49kr</p>
                </div>
            </div>
            <Separator orientation='horizontal'/>
            <div className='flex-col pt-5 pb-5'>
                <div className='flex justify-between pb-2'>
                    <p className='text-neutral-900'>Subtotal</p>
                    <p className='text-neutral-600'>347kr</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-neutral-900 pb-2'>Tax Included</p>
                    <p className='text-neutral-600'>86.75kr</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-neutral-900'>Shipping</p>
                    <p className='text-neutral-600'>49kr</p>
                </div>
            </div>
            <Separator orientation='horizontal'/>
            <div className='flex justify-between py-5'>
                <h1 className='text-neutral-900'>Total</h1>
                <p className='text-neutral-900'>396kr</p>
            </div>
            <Button className='h-12 w-3/9 rounded-full bg-neutral-900 border-1 border-neutral-300 hover:bg-neutral-200 hover:text-neutral-900 active:bg-white cursor-pointer'>Order Now</Button>
        </div>
    );
}


export default CheckoutSummary;
