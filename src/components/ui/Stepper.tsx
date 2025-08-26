import type { JSX } from 'react';
import { cn } from '@/lib/utils';
import { RippleButton } from './Ripple';

interface StepperProps {
    steps: Array<{ component: JSX.Element }>;
    currentStep: number;
    onStepChange: (step: number) => void;
}

export function Stepper({ steps, currentStep, onStepChange }: StepperProps) {
    const progressPercentage = (currentStep / (steps.length - 1)) * 100;

    const TimelineComponent = (
        <div className='relative top-10 w-full max-w-2xl mx-auto'>
            
            <div className='absolute top-1/2 left-0 w-full h-0.5 bg-neutral-200 transform -translate-y-1/2' />

            <div
                className='absolute top-1/2 left-0 h-0.5 bg-neutral-900 transform -translate-y-1/2 transition-all duration-500 ease-out'
                style={{ width: `${progressPercentage}%` }}
            />

            <div className='relative flex justify-between'>
                {steps.map((_, index) => (
                    <div
                        key={index}
                        className={cn(
                            'w-4 h-4 rounded-full border-2 transition-all duration-300',
                            index <= currentStep
                                ? 'border-neutral-900 bg-neutral-900'
                                : 'border-neutral-200 bg-neutral-100'
                        )}
                    />
                ))}
            </div>
        </div>
    );

    const ContentComponent = (
        <div className='h-full bg-neutral-100'>
            {steps[currentStep].component}

            <div className='flex justify-between'>
                <RippleButton
                    variant='outline'
                    onClick={() => onStepChange(currentStep - 1)}
                    disabled={currentStep === 0}
                    className='text-neutral-900 bg-neutral-100 border-neutral-300 border-1 hover:bg-neutral-200 hover:drop-shadow-md active:bg-neutral-50 ml-50 bottom-25'
                >
                    Previous
                </RippleButton>
                <RippleButton
                    onClick={() => onStepChange(currentStep + 1)}
                    disabled={currentStep === steps.length - 1}
                    className='text-neutral-100 bg-neutral-900 border-neutral-300 border-1 hover:bg-neutral-200 hover:text-neutral-900 active:bg-neutral-50 hover:drop-shadow-md mr-50 bottom-25'
                >
                    {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
                </RippleButton>
            </div>
        </div>
    );

    return (
        <div className='h-full w-full overflow-hidden'>
            {TimelineComponent}
            {ContentComponent}
        </div>
    );
}
