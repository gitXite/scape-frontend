import type React from 'react';
import { Check } from 'lucide-react';

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
    text,
    desc,
}: PassepartoutCardParams) {
    const isSelected = passePartoutType === type;

    return (
        <label
            className={`group relative flex flex-col justify-between p-3.5 sm:p-5 rounded-2xl border transition-all duration-200 select-none text-left cursor-pointer ${
                isSelected
                    ? 'border-foreground bg-card ring-2 ring-foreground/15 shadow-sm'
                    : 'border-border/80 bg-background hover:bg-muted/40 hover:border-border shadow-xs'
            }`}
        >
            <input
                type='radio'
                name='passe-partout'
                value={type}
                checked={isSelected}
                onChange={handleClick}
                className='peer sr-only'
            />

            {/* Top row: Mat title & Radio check indicator */}
            <div className='flex items-center justify-between gap-2 mb-2'>
                <div>
                    <span className='font-display font-bold text-sm sm:text-base text-foreground capitalize'>
                        {type} Mat
                    </span>
                    <span className='block text-[11px] font-mono text-muted-foreground uppercase tracking-wider'>
                        {text}
                    </span>
                </div>

                <div
                    className={`size-5 sm:size-5.5 rounded-full flex items-center justify-center transition-all ${
                        isSelected
                            ? 'bg-foreground text-background shadow-xs'
                            : 'border border-border/80 bg-background'
                    }`}
                >
                    {isSelected && <Check className='w-3 h-3 stroke-[3]' />}
                </div>
            </div>

            {/* Passepartout Image Container */}
            <div className='aspect-[4/3] w-full rounded-xl bg-muted/30 p-2 sm:p-2.5 flex items-center justify-center my-1.5 overflow-hidden border border-border/40'>
                <img
                    src={`/images/passepartout_${type}.webp`}
                    alt={`${type} Passepartout`}
                    className='w-full h-full object-contain'
                />
            </div>

            {/* Description */}
            <p className='text-[11px] sm:text-xs text-muted-foreground leading-snug line-clamp-2 mt-1'>
                {desc}
            </p>

            {/* Quality Specification Footer */}
            <div className='mt-3 pt-2.5 border-t border-border/50 flex items-center justify-between text-[11px] font-mono text-muted-foreground'>
                <span className='text-[10px] uppercase opacity-70'>45° Bevel Cut</span>
            </div>
        </label>
    );
}

export default PassepartoutCard;
