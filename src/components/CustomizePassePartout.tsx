import { useCustomization } from '@/context/CustomizationContext';
import CustomizationPreview from './CustomizationPreview';
import React from 'react';
import PassepartoutCard from './PassepartoutCard';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck } from 'lucide-react';

function CustomizePassePartout() {
    const { frameType, passePartoutType, setPassePartoutType } = useCustomization();

    const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setPassePartoutType(value);
        window.dispatchEvent(new Event('passe-partout-updated'));
    };

    return (
        <div className='flex flex-col w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-10 py-4 sm:py-6'>
            {/* Step Header */}
            <div className='flex flex-col items-center text-center mb-6 sm:mb-8'>
                <Badge className='inline-flex text-xs font-medium text-surface-foreground border border-border px-3 py-1 mb-3 gap-2 bg-background/80 backdrop-blur-sm'>
                    Step 03 · Passe-partout
                </Badge>
                <h1 className='font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground'>
                    Choose a Passe-partout.
                </h1>
                <p className='font-sans text-sm sm:text-base text-muted-foreground mt-1.5 max-w-lg'>
                    An archival bevel-cut mounting board provides visual breathing room and focuses the eye on the relief depth.
                </p>
            </div>

            {/* 2-Column Responsive Layout */}
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start text-left'>
                {/* Left Column: 3D Product Live Preview */}
                <div className='lg:col-span-5 rounded-2xl bg-background border border-border/80 shadow-xs p-4 sm:p-6 flex flex-col items-center justify-between sm:sticky sm:top-15'>
                    {/* Preview Top Header */}
                    <div className='w-full flex items-center justify-between pb-3 border-b border-border/60 text-xs'>
                        <span className='inline-flex items-center gap-1.5 text-muted-foreground font-medium'>
                            <span className='size-2 rounded-full bg-emerald-500 animate-pulse' />
                            Live Model Preview
                        </span>
                        <span className='font-mono text-muted-foreground text-[11px]'>21 × 30 cm (A4)</span>
                    </div>

                    {/* ThreeJS Preview Container */}
                    <div className='h-[300px] sm:h-[380px] lg:h-[420px] w-full flex items-center justify-center relative overflow-hidden my-2'>
                        <CustomizationPreview />
                    </div>

                    {/* Preview Footer */}
                    <div className='w-full pt-3 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground'>
                        <span>Configuration:</span>
                        <span className='font-display font-semibold text-foreground capitalize'>
                            {frameType || 'Oak'} Frame · {passePartoutType ? `${passePartoutType} Mat` : 'Select mat'}
                        </span>
                    </div>
                </div>

                {/* Right Column: Passepartout Card Selection Grid */}
                <div className='lg:col-span-7 flex flex-col gap-5'>
                    <div className='pb-2 border-b border-border/60 flex items-baseline justify-between'>
                        <div>
                            <h2 className='font-display text-base sm:text-lg font-bold text-foreground tracking-tight'>
                                Available Colours
                            </h2>
                            <p className='text-xs text-muted-foreground mt-0.5'>
                                1.4 mm thick mounting board with 45° bevel cut.
                            </p>
                        </div>
                    </div>

                    {/* 2-Column Grid */}
                    <div className='grid grid-cols-2 gap-3.5 sm:gap-4'>
                        <PassepartoutCard
                            passePartoutType={passePartoutType}
                            type='white'
                            handleClick={handleClick}
                            text='Natural White'
                            desc='Bright, airy, and classic gallery look that lets the relief shadow stand out'
                        />
                        <PassepartoutCard
                            passePartoutType={passePartoutType}
                            type='black'
                            handleClick={handleClick}
                            text='Deep Black'
                            desc='Dramatic depth with sharp edge contrast that anchors the terrain'
                        />
                    </div>

                    {/* Specification Guarantee */}
                    <div className='p-4 rounded-xl bg-background/60 border border-border/60 flex items-center gap-3 text-xs text-muted-foreground'>
                        <ShieldCheck className='w-4 h-4 text-foreground shrink-0' />
                        <span>Finished products are inspected and quality controlled in Bergen.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomizePassePartout;
