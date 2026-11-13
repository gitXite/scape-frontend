import type React from 'react';
import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';

interface FrameCardParams {
    frameType: string;
    type: string;
    handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    art: string;
    text: string;
    desc: string;
}

function FrameCard({
    frameType,
    type,
    handleClick,
    art,
    text,
    desc,
}: FrameCardParams) {
    const isSelected = frameType === type;
    const [outOfStock, setOutOfStock] = useState(false);
    const [expectedDate, setExpectedDate] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://api.salesitem.ingka.com/availabilities/ru/no?itemNos=${art}&expand=StoresList,Restocks`,
                    {
                        headers: {
                            accept: 'application/json;version=2',
                            'sec-ch-ua':
                                '"Not;A=Brand";v="8", "Chromium";v="150", "Google Chrome";v="150"',
                            'sec-ch-ua-mobile': '?0',
                            'sec-ch-ua-platform': '"Windows"',
                            'x-client-id':
                                'ef382663-a2a5-40d4-8afe-f0634821c0ed',
                        },
                        referrer: 'https://www.ikea.com/',
                        body: null,
                        method: 'GET',
                        mode: 'cors',
                        credentials: 'omit',
                    },
                );

                if (!response.ok) return;

                const data = await response.json();
                const availability = data.availabilities?.find(
                    (a: any) => a.classUnitKey?.classUnitCode === '441',
                );

                if (!availability) return;

                if (availability.availableForCashCarry) {
                    setOutOfStock(false);
                    setExpectedDate('');
                    return;
                }

                setOutOfStock(true);

                const date =
                    availability.buyingOption?.cashCarry?.availability
                        ?.restocks?.[0]?.earliestDate;

                if (date) {
                    setExpectedDate(
                        new Date(date).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                        }),
                    );
                } else {
                    setExpectedDate('TBA');
                }
            } catch (e) {
                console.error('Failed to fetch stock', e);
            }
        };

        fetchData();
    }, [art]);

    return (
        <label
            className={`group relative flex flex-col justify-between p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 select-none text-left ${
                outOfStock ? 'cursor-not-allowed opacity-60 bg-muted/20 border-dashed border-border' : 'cursor-pointer'
            } ${
                isSelected
                    ? 'border-foreground bg-card ring-2 ring-foreground/15 shadow-sm'
                    : 'border-border/80 bg-background hover:bg-muted/40 hover:border-border shadow-xs'
            }`}
        >
            <input
                type='radio'
                name='frame'
                value={type}
                checked={isSelected}
                onChange={handleClick}
                disabled={outOfStock}
                className='peer sr-only'
            />

            {/* Top row: Finish title & Radio check indicator */}
            <div className='flex items-center justify-between gap-2 mb-2'>
                <div>
                    <span className='font-display font-bold text-sm sm:text-base text-foreground capitalize'>
                        {text || type}
                    </span>
                    <span className='block text-[11px] font-mono text-muted-foreground uppercase tracking-wider'>
                        {type} Finish
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

            {/* Frame Image Container */}
            <div className='aspect-[4/3] w-full rounded-xl bg-muted/30 p-2 sm:p-2.5 flex items-center justify-center my-1.5 overflow-hidden border border-border/40'>
                <img
                    src={`/images/frame_${type}.webp`}
                    alt={`${type} Frame`}
                    className={`w-full h-full object-contain ${
                        outOfStock ? 'grayscale opacity-75' : ''
                    }`}
                />
            </div>

            {/* Description */}
            <p className='text-[11px] sm:text-xs text-muted-foreground leading-snug line-clamp-2 mt-1'>
                {desc}
            </p>

            {/* Stock Availability Footer */}
            <div className='mt-3 pt-2.5 border-t border-border/50 flex items-center justify-between text-[11px] font-mono'>
                {outOfStock ? (
                    <span className='inline-flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-medium'>
                        <span className='size-1.5 rounded-full bg-amber-500' />
                        {expectedDate ? `Restock ${expectedDate}` : 'Out of stock'}
                    </span>
                ) : (
                    <span className='inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium'>
                        <span className='size-1.5 rounded-full bg-emerald-500' />
                        In stock
                    </span>
                )}
            </div>
        </label>
    );
}

export default FrameCard;
