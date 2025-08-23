import { useState } from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import MapSelector from '../components/MapSelector';
import ModelPreview from '../components/ModelPreview';
import CustomizeFrame from '../components/CustomizeFrame';
import CustomizePassePartout from '../components/CustomizePassePartout';
import DefaultStepper from '../components/DefaultStepper';


function Customize() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <div className='bg-neutral-100 h-full w-full'>
            <BackButton />
            <div className='flex-col h-full w-full place-items-center'>
                <DefaultStepper activeStep={activeStep} setActiveStep={setActiveStep} />

                {activeStep === 0 && <MapSelector />}
                {activeStep === 1 && (
                    <>
                        <ModelPreview /> 
                        <CustomizeFrame />
                    </>
                )}
                {activeStep === 2 && (
                    <>
                        <ModelPreview /> 
                        <CustomizePassePartout />
                    </>
                )}                
            </div>
            <Footer />
        </div>
    );
}


export default Customize;
