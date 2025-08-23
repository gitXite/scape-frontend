import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import MapSelector from '../components/MapSelector';
import ModelPreview from '../components/ModelPreview';
import CustomizeFrame from '../components/CustomizeFrame';
import CustomizePassePartout from '../components/CustomizePassePartout';
import DefaultStepper from '../components/DefaultStepper';


function Customize() {

    return (
        <div className='bg-neutral-100 h-full w-full'>
            <BackButton />
            <div className='flex-col h-full w-full place-items-center'>
                {/* Step 1 */}
                <MapSelector />
                
                {/* Step 2 */}
                {/* <ModelPreview /> <CustomizeFrame /> */}

                {/* Step 3 */}
                {/* <ModelPreview /> <CustomizePassePartout /> */}
                
                <DefaultStepper />
            </div>
            <Footer />
        </div>
    );
}


export default Customize;
