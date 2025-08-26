import { useState } from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import MapSelector from '../components/MapSelector';
import CustomizeFrame from '../components/CustomizeFrame';
import CustomizePassePartout from '../components/CustomizePassePartout';
import { Stepper } from '@/components/ui/Stepper';



function Customize() {
    const [activeStep, setActiveStep] = useState(0);
    const steps = [
        { component: MapSelector() },
        { component: CustomizeFrame() },
        { component: CustomizePassePartout() },
    ];
    
    return (
        <div className='bg-neutral-100 h-full w-full'>
            <BackButton />  
            <div className='flex h-full w-full place-items-center'>
                <Stepper steps={steps} currentStep={activeStep} onStepChange={setActiveStep} />
            </div>

            <Footer />
        </div>
    );
}


export default Customize;