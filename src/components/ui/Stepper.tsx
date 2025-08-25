import { cn } from '@/lib/utils';
import { RippleButton } from '../animate-ui/buttons/Ripple';
import type { JSX } from 'react';

interface StepperProps {
    steps: Array<{ component: JSX.Element }>;
    currentStep: number;
    onStepChange: (step: number) => void;
}

export function Stepper({ steps, currentStep, onStepChange }: StepperProps) {
    const progressPercentage = (currentStep / (steps.length - 1)) * 100;

    const TimelineComponent = (
        <div className='relative w-full max-w-2xl mx-auto mb-8'>
            <div className='absolute top-1/2 left-0 w-full h-0.5 bg-muted transform -translate-y-1/2' />

            <div
                className='absolute top-1/2 left-0 h-0.5 bg-primary transform -translate-y-1/2 transition-all duration-500 ease-out'
                style={{ width: `${progressPercentage}%` }}
            />

            {/* Step indicators */}
            <div className='relative flex justify-between'>
                {steps.map((_, index) => (
                    <div
                        key={index}
                        className={cn(
                            'w-4 h-4 rounded-full border-2 transition-all duration-300',
                            index <= currentStep
                                ? 'border-primary bg-primary'
                                : 'border-muted bg-background'
                        )}
                    />
                ))}
            </div>
        </div>
    );

    const ContentComponent = (
        <div className='mt-8 p-6 border rounded-lg bg-card'>
            {steps[currentStep].component}

            <div className='flex justify-between'>
                <RippleButton
                    variant='outline'
                    onClick={() => onStepChange(currentStep - 1)}
                    disabled={currentStep === 0}
                >
                    Previous
                </RippleButton>
                <RippleButton
                    onClick={() => onStepChange(currentStep + 1)}
                    disabled={currentStep === steps.length - 1}
                >
                    {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
                </RippleButton>
            </div>
        </div>
    );

    return (
        <div className='h-full w-full mx-auto'>
            {TimelineComponent}
            {ContentComponent}
        </div>
    );
}
