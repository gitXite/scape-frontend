import { useState } from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import MapSelector from '../components/MapSelector';
import CustomizeFrame from '../components/CustomizeFrame';
import CustomizePassePartout from '../components/CustomizePassePartout';
import { Stepper } from '@/components/ui/Stepper';
import { CircleQuestionMark } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/HoverCard';



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
            <HoverCard>
                <HoverCardTrigger className='absolute m-10 top-0 mt-9 mr-110 right-0'><CircleQuestionMark className='text-neutral-600 hover:text-neutral-900 transition-colors duration-100 cursor-pointer' /></HoverCardTrigger>
                <HoverCardContent className='bg-neutral-900 text-neutral-100'>
                    Select your coordinates, pick a frame, passe-partout and order now!
                </HoverCardContent>
            </HoverCard>
            <div className='flex h-full w-full place-items-center'>
                <Stepper steps={steps} currentStep={activeStep} onStepChange={setActiveStep} />
            </div>

            <Footer />
        </div>
    );
}


export default Customize;