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
    // text,
    // desc,
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
                const availability = data.availabilities.find(
                    (a: any) => a.classUnitKey.classUnitCode === '441',
                );

                if (!availability) return;

                if (availability.availableForCashCarry) {
                    setOutOfStock(false);
                    setExpectedDate('');
                    return;
                }

                setOutOfStock(true);

                const date = availability.buyingOption.cashCarry.availability.restocks?.[0]?.earliestDate;

                if (date) {
                    setExpectedDate(
                        new Date(date).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                        }),
                    );
                }
            } catch (e) {
                console.error('Failed to fetch stock', e);
            }
        };

        fetchData();
    }, [art]);

    return (
        <label
            className={`flex flex-col h-fit w-40 max-md:w-35 z-5 ${!outOfStock && 'cursor-pointer'} ${outOfStock && 'cursor-not-allowed'}`}
        >
            <input
                type='radio'
                name='frame'
                value={type}
                checked={frameType === type}
                onChange={handleClick}
                disabled={outOfStock}
                className='peer hidden'
            />
            <div
                className={`flex relative flex-col h-58 w-40 max-md:w-35 max-md:h-48 text-center justify-between bg-neutral-200/20 hover:bg-card items-center peer-checked:bg-card border rounded-sm p-4 transition peer-checked:border-neutral-900 peer-checked:scale-105 peer-checked:shadow-lg hover:shadow-lg ${!outOfStock && 'hover:scale-105'} ${outOfStock && 'hover:shadow-none hover:bg-neutral-200/20'}`}
            >
                {isSelected && (
                    <div className='absolute bottom-[52%] rounded-full bg-primary p-1'>
                        <Check className='w-4 h-4 text-white' />
                    </div>
                )}
                {outOfStock && (
                    <div className='absolute z-5 inset-0 flex items-center justify-center'>
                        <span className='rounded-full bg-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary-foreground'>
                            Out of stock
                        </span>
                    </div>
                )}
                <img
                    src={`/images/frame_${type}.webp`}
                    alt={`${type.charAt(0).toUpperCase + type.slice(1)} Frame`}
                    className={`w-[90%] rounded mb-2 ${outOfStock && 'grayscale'}`}
                />
                <p className='text-primary text-md pb-2 font-medium'>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </p>
                {expectedDate && (
                    <span className='absolute text-muted-foreground text-xs bottom-0 font-normal my-2'>
                        Expected: {expectedDate}
                    </span>
                )}
            </div>
        </label>
    );
}

export default FrameCard;
