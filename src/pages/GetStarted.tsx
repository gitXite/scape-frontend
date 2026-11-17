import { useEffect, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import MapSelector from '../components/MapSelector';
import CustomizeFrame from '../components/CustomizeFrame';
import CustomizePassePartout from '../components/CustomizePassePartout';
import { Stepper } from '@/components/ui/stepper';
import { CircleQuestionMark, Compass, Sparkles } from 'lucide-react';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hoverCard';
import { CustomizationProvider } from '@/context/CustomizationContext';
import { STLCache } from '@/utils/cache';
import { generateAndFetchSTL } from '@/utils/generateAndFetchSTL';
import { parseSTL } from '@/utils/parseSTL';

function GetStarted() {
    const { t } = useTranslation('customizer');
    const { t: tCommon } = useTranslation('common');
    const [activeStep, setActiveStep] = useState(() => {
        const step = localStorage.getItem('step');
        return step ? +step : 0;
    });

    const steps = [
        {
            component: (
                <MapSelector mode='real' showStepHeader className='pt-4' />
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
                {tCommon('actions.backToHome')}
            </a>

            <HoverCard openDelay={150} closeDelay={200}>
                <HoverCardTrigger className='fixed right-6 top-6 hidden sm:flex z-50 group items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-md border border-border hover:border-foreground/20 hover:bg-muted/60 transition-all cursor-pointer shadow-xs'>
                    <CircleQuestionMark className='size-4 text-muted-foreground group-hover:text-foreground transition-colors' />
                    <span className='text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors'>
                        {t('guide.button')}
                    </span>
                </HoverCardTrigger>
                <HoverCardContent
                    align='end'
                    side='bottom'
                    sideOffset={10}
                    className='w-84 sm:w-96 p-0 rounded-2xl bg-background/95 backdrop-blur-md border border-border/80 shadow-2xl text-foreground overflow-hidden z-50 text-left'
                >
                    {/* Masthead */}
                    <div className='p-4 pb-3 bg-background/95 border-b border-border flex items-center justify-between'>
                        <div className='flex items-center gap-2.5'>
                            <div className='size-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0'>
                                <Compass className='size-4' />
                            </div>
                            <div>
                                <h3 className='font-display text-xs font-bold tracking-tight text-foreground uppercase'>
                                    {t('guide.title')}
                                </h3>
                                <p className='text-[11px] text-muted-foreground font-sans'>
                                    {t('guide.subtitle')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step-by-Step Instructions */}
                    <div className='p-3 sm:p-4 space-y-2.5'>
                        {/* Step 1 */}
                        <div className='p-2.5 rounded-xl bg-surface/40 border border-border/50 hover:border-border transition-colors space-y-1.5'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-2'>
                                    <span className='font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary/15 text-primary'>
                                        01
                                    </span>
                                    <h4 className='font-display text-xs font-bold text-foreground'>
                                        {t('guide.step1.title')}
                                    </h4>
                                </div>
                                <span className='text-[10px] font-mono text-muted-foreground'>
                                    {t('guide.step1.tag')}
                                </span>
                            </div>
                            <p className='text-xs text-muted-foreground leading-relaxed pl-6'>
                                <Trans
                                    i18nKey='guide.step1.desc1'
                                    ns='customizer'
                                    components={{ bold: <b /> }}
                                />
                            </p>
                            <p className='text-xs text-muted-foreground leading-relaxed pl-6'>
                                <Trans
                                    i18nKey='guide.step1.desc2'
                                    ns='customizer'
                                    components={{ bold: <b /> }}
                                />
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className='p-2.5 rounded-xl bg-surface/40 border border-border/50 hover:border-border transition-colors space-y-1.5'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-2'>
                                    <span className='font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary/15 text-primary'>
                                        02
                                    </span>
                                    <h4 className='font-display text-xs font-bold text-foreground'>
                                        {t('guide.step2.title')}
                                    </h4>
                                </div>
                                <span className='text-[10px] font-mono text-muted-foreground'>
                                    {t('guide.step2.tag')}
                                </span>
                            </div>
                            <p className='text-xs text-muted-foreground leading-relaxed pl-6'>
                                {t('guide.step2.desc')}
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className='p-2.5 rounded-xl bg-surface/40 border border-border/50 hover:border-border transition-colors space-y-1.5'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-2'>
                                    <span className='font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary/15 text-primary'>
                                        03
                                    </span>
                                    <h4 className='font-display text-xs font-bold text-foreground'>
                                        {t('guide.step3.title')}
                                    </h4>
                                </div>
                                <span className='text-[10px] font-mono text-muted-foreground'>
                                    {t('guide.step3.tag')}
                                </span>
                            </div>
                            <p className='text-xs text-muted-foreground leading-relaxed pl-6'>
                                {t('guide.step3.desc')}
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className='p-2.5 rounded-xl bg-surface/40 border border-border/50 hover:border-border transition-colors space-y-1.5'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-2'>
                                    <span className='font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary/15 text-primary'>
                                        04
                                    </span>
                                    <h4 className='font-display text-xs font-bold text-foreground'>
                                        {t('guide.step4.title')}
                                    </h4>
                                </div>
                                <span className='text-[10px] font-mono text-muted-foreground'>
                                    {t('guide.step4.tag')}
                                </span>
                            </div>
                            <p className='text-xs text-muted-foreground leading-relaxed pl-6'>
                                {t('guide.step4.desc')}
                            </p>
                        </div>
                    </div>

                    {/* Footer Tip */}
                    <div className='p-3 px-4 bg-surface/60 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground font-sans'>
                        <span className='flex items-center gap-1.5'>
                            <Sparkles className='size-3 text-primary shrink-0' />
                            <span>
                                {t('guide.tip')}
                            </span>
                        </span>
                        <span className='font-mono text-[10px] text-muted-foreground/70'>
                            {t('guide.signature')}
                        </span>
                    </div>
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
