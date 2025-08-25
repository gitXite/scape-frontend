import type React from 'react';



type StepperProps = {
    activeStep: number, 
    setActiveStep: React.Dispatch<React.SetStateAction<number>>,
};

function Stepper({ activeStep, setActiveStep }: StepperProps) {
    return (
        <div className='w-full'>

        </div>
    );
}


export default Stepper;