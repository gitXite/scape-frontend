import { useState } from 'react';
import { Stepper, Step, Button } from '@material-tailwind/react';

function DefaultStepper({ activeStep, setActiveStep }) {
    const [isFirstStep, setIsFirstStep] = useState(true);
    const [isLastStep, setIsLastStep] = useState(false);

    const handleNext = () =>
        !isLastStep && setActiveStep((cur: number) => cur + 1);
    const handlePrev = () =>
        !isFirstStep && setActiveStep((cur: number) => cur - 1);

    return (
        <div className='w-full py-4 px-8 bg-neutral-100'>
            <Stepper
                activeStep={activeStep}
                isLastStep={(value) => setIsLastStep(value)}
                isFirstStep={(value) => setIsFirstStep(value)}
                className='text-neutral-900'
            >
                <Step 
                    onClick={() => setActiveStep(0)}
                    className='rounded-full cursor-pointer'
                >
                    1
                </Step>
                <Step onClick={() => setActiveStep(1)}>2</Step>
                <Step onClick={() => setActiveStep(2)}>3</Step>
            </Stepper>
            <div className='flex justify-between mt-16'>
                <Button 
                    onClick={handlePrev}
                    disabled={isFirstStep}
                    variant='filled'
                    className='rounded-sm text-neutral-900 px-5 py-2 cursor-pointer'
                >
                        Prev
                </Button>
                <Button
                    onClick={handleNext}
                    disabled={isLastStep}
                    variant='filled'
                    className='rounded-sm text-neutral-900 px-5 py-2 cursor-pointer'
                >
                    Next
                </Button>
            </div>
        </div>
    );
}

export default DefaultStepper;
