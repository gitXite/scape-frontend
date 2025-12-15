import type React from 'react';
import { Separator } from './ui/separator';

interface FrameCardParams {
    frameType: string;
    type: string;
    handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    text: string;
    desc: string;
}

function FrameCard({ frameType, type, handleClick, text, desc }: FrameCardParams) {
    return (
        <label className='flex flex-col h-fit cursor-pointer max-2xl:scale-90'>
            <input
                type='radio'
                name='frame'
                value={type}
                checked={frameType === type}
                onChange={handleClick}
                className='peer hidden'
            />
            <div className='flex flex-col max-h-80 max-w-60 text-center justify-center bg-neutral-200/20 hover:bg-neutral-100 items-center peer-checked:bg-neutral-100 border rounded-sm p-4 transition peer-checked:border-neutral-900 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
                <img
                    src={`/images/frame_${type}.webp`}
                    alt={`${type.charAt(0).toUpperCase + type.slice(1)} Frame`}
                    className='w-30 rounded mb-2'
                />
                {/* <p className='text-neutral-500 w-60 pt-2 px-2'>
                    {text}
                    Fitted with an oak frame -
                </p> */}
                {/* <p className='text-neutral-500 w-60 pb-2 px-2'>
                    {desc}
                    Natural and timeless
                </p> */}
                <p className='text-neutral-900 text-xl pb-2 font-normal tracking-widest'>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </p>
                <Separator orientation='horizontal' />
                <p className='text-neutral-600 pt-2'>99kr</p>
            </div>
        </label>
    );
}

export default FrameCard;
