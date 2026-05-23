import { type JSX, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { RippleButton } from './ripple';
import { useNavigate } from 'react-router';
import type { StoredStates } from '@/types';

interface StepperProps {
    steps: Array<{ component: JSX.Element }>;
    currentStep: number;
    onStepChange: (step: number) => void;
}

export function Stepper({ steps, currentStep, onStepChange }: StepperProps) {
    const progressPercentage =
        steps.length <= 1 ? 0 : (currentStep / (steps.length - 1)) * 100;
    const [storedStates, setStoredStates] = useState<StoredStates>(() => ({
        coordinates: !!localStorage.getItem('coordinates'),
        selectedFrame: !!localStorage.getItem('selectedFrame'),
        selectedPassePartout: !!localStorage.getItem('selectedPassePartout'),
    }));
    const navigate = useNavigate();

    useEffect(() => {
        const handleStorageChange = () => {
            setStoredStates({
                coordinates: !!localStorage.getItem('coordinates'),
                selectedFrame: !!localStorage.getItem('selectedFrame'),
                selectedPassePartout: !!localStorage.getItem(
                    'selectedPassePartout',
                ),
            });
        };

        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('coordinates-updated', handleStorageChange);
        window.addEventListener('frame-updated', handleStorageChange);
        window.addEventListener('passe-partout-updated', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener(
                'coordinates-updated',
                handleStorageChange,
            );
            window.removeEventListener('frame-updated', handleStorageChange);
            window.removeEventListener(
                'passe-partout-updated',
                handleStorageChange,
            );
        };
    }, []);

    const labels = ['Select Area', 'Frame', 'Passepartout'];

    const TimelineComponent = (
        <div className='w-full flex justify-center pt-5 sm:pt-10 px-10'>
            <div className='relative w-full max-w-2xl'>
                {/* Background line */}
                <div className='absolute top-4 left-1/2 -translate-x-1/2 w-[calc(100%-56px)] h-px bg-border' />

                {/* Active progress line */}
                <div
                    className='absolute top-4 left-5 h-px bg-foreground transition-all duration-500 ease-out'
                    style={{
                        width: `calc((100% - 56px) * ${progressPercentage / 100})`,
                    }}
                />

                {/* Steps */}
                <div className='relative flex justify-between'>
                    {steps.map((_, index) => {
                        const isCompleted = index < currentStep;
                        const isCurrent = index === currentStep;
                        const isActive = index <= currentStep;

                        return (
                            <div
                                key={index}
                                className='flex flex-col items-center'
                            >
                                {/* Circle */}
                                <div
                                    className={cn(
                                        'relative z-10 flex items-center justify-center w-8 h-8 rounded-full border text-xs font-medium transition-all duration-300',
                                        isActive
                                            ? 'bg-foreground border-foreground text-background'
                                            : 'bg-background border-border text-muted-foreground',
                                        isCurrent && 'scale-105',
                                    )}
                                >
                                    {isCompleted ? '✓' : index + 1}
                                </div>

                                {/* Label */}
                                <div className='mt-3 flex items-center'>
                                    <span
                                        className={cn(
                                            'text-sm transition-colors duration-300',
                                            isActive
                                                ? 'text-foreground font-medium'
                                                : 'text-muted-foreground',
                                        )}
                                    >
                                        {labels[index]}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );

    const ContentComponent = (
        <div className='h-full bg-surface'>
            {steps[currentStep].component}

            <div className='flex items-center justify-between px-4 sm:px-8 pb-8 pt-2'>
                <RippleButton
                    variant='outline'
                    onClick={() => onStepChange(currentStep - 1)}
                    disabled={currentStep === 0}
                    className='h-11 px-6 rounded-full border border-border bg-background text-foreground hover:bg-muted hover:border-border/80 transition-all duration-150 disabled:opacity-40 disabled:pointer-events-none hover:shadow-sm'
                >
                    Previous
                </RippleButton>

                <RippleButton
                    onClick={() =>
                        currentStep === steps.length - 1
                            ? navigate('/checkout')
                            : onStepChange(currentStep + 1)
                    }
                    disabled={
                        (currentStep === 0 && !storedStates.coordinates) ||
                        (currentStep === 1 &&
                            (!storedStates.coordinates ||
                                !storedStates.selectedFrame)) ||
                        (currentStep === 2 &&
                            (!storedStates.coordinates ||
                                !storedStates.selectedFrame ||
                                !storedStates.selectedPassePartout))
                    }
                    className='h-11 px-7 rounded-full bg-foreground border border-border hover:bg-primary-foreground hover:text-foreground text-primary-foreground hover:shadow-sm transition-all duration-150 disabled:opacity-40 disabled:pointer-events-none'
                >
                    {currentStep === steps.length - 1 ? 'Checkout' : 'Next'}
                </RippleButton>
            </div>
        </div>
    );

    return (
        <div className='w-full flex flex-col'>
            {TimelineComponent}

            <div className='flex-1 flex flex-col'>{ContentComponent}</div>
        </div>
    );
}
