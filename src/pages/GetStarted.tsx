import { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import MapSelector from '../components/MapSelector';
import CustomizeFrame from '../components/CustomizeFrame';
import CustomizePassePartout from '../components/CustomizePassePartout';
import { Stepper } from '@/components/ui/stepper';
import { CircleQuestionMark } from 'lucide-react';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hoverCard';
import { Separator } from '@/components/ui/separator';
import { CustomizationProvider } from '@/context/CustomizationContext';
import { STLCache } from '@/utils/cache';
import { generateAndFetchSTL } from '@/utils/generateAndFetchSTL';
import { parseSTL } from '@/utils/parseSTL';

function GetStarted() {
    const [activeStep, setActiveStep] = useState(() => {
        const step = localStorage.getItem('step');
        return step ? +step : 0;
    });

    const steps = [
        { component: <MapSelector mode='real' className='pt-20' /> },
        { component: <CustomizeFrame /> },
        { component: <CustomizePassePartout /> },
    ];

    useEffect(() => {
        localStorage.setItem('step', activeStep.toString());
        const refresh = async () => {
            if (localStorage.getItem('coordinates') && !STLCache.objectUrl) {
                await generateAndFetchSTL().then(stlObject => parseSTL(stlObject?.buffer!));
            }
        };
        refresh();
    }, [activeStep]);

    return (
        <div className='bg-neutral-100 min-h-svh min-sm:h-svh w-full'>
            <BackButton page='home' />
            <HoverCard>
                <HoverCardTrigger className='absolute right-10 top-9 max-md:hidden z-5'>
                    <CircleQuestionMark className='text-neutral-600/50 hover:text-neutral-900 transition-colors duration-200 cursor-pointer' />
                </HoverCardTrigger>
                <HoverCardContent className='bg-neutral-900 text-neutral-100 text-center justify-center'>
                    <p>1. </p>
                    <b>Select your coordinates -</b>
                    <p className='pb-3'>Choose the exact location you want</p>
                    <Separator
                        orientation='horizontal'
                        className='border-neutral-100/10'
                    />
                    <p className='pt-2'>2. </p>
                    <b>Pick a frame -</b>
                    <p className='pb-3'>Find the style that fits your space</p>
                    <Separator
                        orientation='horizontal'
                        className='border-neutral-100/10'
                    />
                    <p className='pt-2'>3. </p>
                    <b>Add a passepartout -</b>
                    <p className='pb-3'>Give your model a refined finish</p>
                    <Separator
                        orientation='horizontal'
                        className='border-neutral-100/10'
                    />
                    <p className='pt-2'>4. </p>
                    <b>Checkout -</b>
                    <p>Get your customized piece delivered to you</p>
                </HoverCardContent>
            </HoverCard>
            <div className='flex h-full w-full place-items-center'>
                <CustomizationProvider>
                    <Stepper
                        steps={steps}
                        currentStep={activeStep}
                        onStepChange={setActiveStep}
                    />
                </CustomizationProvider>
            </div>

            <Footer />
        </div>
    );
}

export default GetStarted;
