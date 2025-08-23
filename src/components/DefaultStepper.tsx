import { useState } from 'react';
import { Stepper, Step, Button } from "@material-tailwind/react";


function DefaultStepper() {
    const [activeStep, setActiveStep] = useState(0);
    const [isFirstStep, setIsFirstStep] = useState(true);
    const [isLastStep, setIsLastStep] = useState(false);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    return (
        <div className='w-full py-4 px-8'>
            <Stepper
                isActiveStep={activeStep}
                isLastStep={(value) => setIsLastStep(value)}
                isFirstStep={(value) => setIsFirstStep(value)}
            >
                <Step onClick={() => setActiveStep(0)}>1</Step>
                <Step onClick={() => setActiveStep(1)}>2</Step>
                <Step onClick={() => setActiveStep(2)}>3</Step>
            </Stepper>
            <div className='flex justify-between mt-16'>
                <Button onClick={handlePrev} disabled={isFirstStep}>
                    Prev
                </Button>
                <Button onClick={handleNext} disabled={isLastStep}>
                    Next
                </Button>
            </div>
        </div>
    );
}


export default DefaultStepper;
