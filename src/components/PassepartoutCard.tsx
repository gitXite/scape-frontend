import { Check } from 'lucide-react';
import { Separator } from './ui/separator';

interface PassepartoutCardParams {
    passePartoutType: string;
    type: string;
    handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    text: string;
    desc: string;
}

function PassepartoutCard({
    passePartoutType,
    type,
    handleClick,
    // text,
    // desc,
}: PassepartoutCardParams) {
    const isSelected = passePartoutType === type;

    return (
        <label className='flex flex-col h-fit cursor-pointer w-40 max-md:w-35 z-5'>
            <input
                type='radio'
                name='passe-partout'
                value={type}
                checked={passePartoutType === type}
                onChange={handleClick}
                className='peer hidden'
            />
            <div className='flex flex-col h-58 w-40 max-md:w-35 max-md:h-48 text-center justify-center items-center bg-neutral-200/20 hover:bg-white peer-checked:bg-white border rounded-sm p-4 transition peer-checked:border-neutral-900 peer-checked:scale-105 peer-checked:shadow-lg hover:scale-105 hover:shadow-lg'>
                {isSelected && (
                    <div className='absolute bottom-[58%] rounded-full bg-neutral-900 p-1'>
                        <Check className='w-4 h-4 text-white' />
                    </div>
                )}
                <img
                    src={`/images/passepartout_${type}.webp`}
                    alt={`${type.charAt(0).toUpperCase + type.slice(1)} Passepartout`}
                    className='w-[70%] mb-2 rounded'
                />
                <p className='text-neutral-900 text-md pb-2 font-medium'>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </p>
                <Separator orientation='horizontal' />
                <p className='text-neutral-600 pt-2'>49kr</p>
            </div>
        </label>
    );
}

export default PassepartoutCard;
