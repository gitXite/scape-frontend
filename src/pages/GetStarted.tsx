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
        {
            component: (
                <MapSelector
                    mode='real'
                    showStepHeader
                    className='pt-2 sm:pt-4'
                />
            ),
        },
        { component: <CustomizeFrame /> },
        { component: <CustomizePassePartout /> },
    ];

    useEffect(() => {
        localStorage.setItem('step', activeStep.toString());
        const refresh = async () => {
            if (localStorage.getItem('coordinates') && !STLCache.objectUrl) {
                await generateAndFetchSTL().then((stlObject) =>
                    parseSTL(stlObject?.buffer!),
                );
            }
        };
        refresh();
    }, [activeStep]);

    return (
        <div className='min-h-svh bg-surface w-full relative'>
            <BackButton page='home' />

            {/* Mobile Home Anchor - Zero vertical layout footprint */}
            <a
                href='/'
                className='sm:hidden z-50 absolute top-4 right-4 text-xs font-medium text-muted-foreground hover:text-surface-foreground transition-colors flex items-center gap-1'
            >
                Back to Home
            </a>
            <HoverCard>
                <HoverCardTrigger className='fixed right-6 top-6 max-md:hidden z-50 flex items-center justify-center size-9 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-muted transition-colors cursor-pointer shadow-xs'>
                    <CircleQuestionMark className='size-4 text-muted-foreground hover:text-foreground transition-colors' />
                </HoverCardTrigger>
                <HoverCardContent className='bg-neutral-900 text-neutral-100 text-left justify-center'>
                    <p>
                        1. <b>Select your coordinates -</b>
                    </p>
                    <p className='pb-3'>Choose the exact location you want</p>
                    <Separator
                        orientation='horizontal'
                        className='border-neutral-100/10'
                    />
                    <p className='pt-2'>
                        2. <b>Pick a frame -</b>
                    </p>
                    <p className='pb-3'>Find the style that fits your space</p>
                    <Separator
                        orientation='horizontal'
                        className='border-neutral-100/10'
                    />
                    <p className='pt-2'>
                        3. <b>Add a passepartout -</b>
                    </p>
                    <p className='pb-3'>Give your model a refined finish</p>
                    <Separator
                        orientation='horizontal'
                        className='border-neutral-100/10'
                    />
                    <p className='pt-2'>
                        4. <b>Checkout -</b>
                    </p>
                    <p>Get your customized piece delivered to you</p>
                </HoverCardContent>
            </HoverCard>
            <div className='flex flex-col h-full w-full place-items-center'>
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
