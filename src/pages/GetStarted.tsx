import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import MapSelector from '../components/MapSelector';



function GetStarted() {

    return (
        <div className='bg-neutral-100 h-full w-full'>
            <BackButton />
            <div className='flex-col h-full w-full place-items-center'>
                /* Choose frames and customize */
                <div>
                    <div>
                        <input
                            type='radio'
                            name='frame'
                        >

                        </input>
                        <label></label>
                    </div>
                    <div>
                        <input
                            type='radio'
                            name='frame'
                        >

                        </input>
                        <label></label>
                    </div>
                    <div>
                        <input
                            type='radio'
                            name='frame'
                        >

                        </input>
                        <label></label>
                    </div>
                </div>
                <MapSelector />
                <Footer />
            </div>
        </div>
    );
}


export default GetStarted;