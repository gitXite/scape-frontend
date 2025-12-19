import type React from 'react';
import { Check } from 'lucide-react';
import { Separator } from './ui/separator';

interface FrameCardParams {
    frameType: string;
    type: string;
    handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    text: string;
    desc: string;
}

function FrameCard({
    frameType,
    type,
    handleClick,
    // text,
    // desc,
}: FrameCardParams) {
    const isSelected = frameType === type;

    return (
        <label className='flex flex-col h-fit cursor-pointer w-40 max-md:w-35 z-5'>
            <input
                type='radio'
                name='frame'
                value={type}
                checked={frameType === type}
                onChange={handleClick}
                className='peer hidden'
            />
            <div className='flex flex-col h-58 w-40 max-md:w-35 max-md:h-48 text-center justify-center bg-neutral-200/20 hover:bg-white items-center peer-checked:bg-white border rounded-sm p-4 transition peer-checked:border-neutral-900 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
                {isSelected && (
                    <div className='absolute bottom-[58%] rounded-full bg-neutral-900 p-1'>
                        <Check className='w-4 h-4 text-white' />
                    </div>
                )}
                <img
                    src={`/images/frame_${type}.webp`}
                    alt={`${type.charAt(0).toUpperCase + type.slice(1)} Frame`}
                    className='w-[70%] rounded mb-2'
                />
                <p className='text-neutral-900 text-md pb-2 font-medium'>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </p>
                <Separator orientation='horizontal' />
                <p className='text-neutral-600 pt-2 '>99kr</p>
            </div>
        </label>
    );
}

export default FrameCard;
