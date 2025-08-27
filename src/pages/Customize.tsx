import { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import MapSelector from '../components/MapSelector';
import CustomizeFrame from '../components/CustomizeFrame';
import CustomizePassePartout from '../components/CustomizePassePartout';
import { Stepper } from '@/components/ui/Stepper';
import { CircleQuestionMark } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/HoverCard';
import { Separator } from '@/components/ui/Separator';



function Customize() {
    const [activeStep, setActiveStep] = useState(() => {
        const step = localStorage.getItem('step');
        return step ? +step : 0;
    });
    
    const steps = [
        { component: MapSelector() },
        { component: CustomizeFrame() },
        { component: CustomizePassePartout() },
    ];

    useEffect(() => {
        localStorage.setItem('step', activeStep.toString());
    }, [activeStep]);
    
    return (
        <div className='bg-neutral-100 h-full w-full'>
            <BackButton />
            <HoverCard>
                <HoverCardTrigger className='absolute m-10 top-0 mt-9 mr-100 right-0'><CircleQuestionMark className='text-neutral-600/50 hover:text-neutral-900 transition-colors duration-200 cursor-pointer' /></HoverCardTrigger>
                <HoverCardContent className='bg-neutral-900 text-neutral-100 text-center justify-center'>
                    <p>1. </p>
                    <b>Select your coordinates -</b>
                    <p className='pb-2'>Choose the exact location you want</p>
                    <Separator orientation='horizontal' className='border-neutral-100/10' />
                    <p className='pt-2'>2. </p>
                    <b>Pick a frame -</b>
                    <p className='pb-2'>Find the style that fits your space</p>
                    <Separator orientation='horizontal' className='border-neutral-100/10' />
                    <p className='pt-2'>3. </p>
                    <b>Add a passe-partout -</b>
                    <p className='pb-2'>Give your model a refined finish</p>
                    <Separator orientation='horizontal' className='border-neutral-100/10' />
                    <p className='pt-2'>4. </p>
                    <b>Checkout -</b>
                    <p>Get your customized piece delivered to you</p>
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