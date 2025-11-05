import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';


function Shipping() {
    return (
        <div className='flex flex-col h-full w-full bg-neutral-100 items-center'>
            <BackButton />
            <div className='flex flex-col h-full w-full'>
                <div className='flex h-full w-full'>
                    <div className='flex flex-col'>
                        <h1>Shipping</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. 
                            Quisque faucibus ex sapien vitae pellentesque sem placerat. 
                            In id cursus mi pretium tellus duis convallis. 
                            Tempus leo eu aenean sed diam urna tempor. 
                            Pulvinar vivamus fringilla lacus nec metus bibendum egestas. 
                            Iaculis massa nisl malesuada lacinia integer nunc posuere. 
                            Ut hendrerit semper vel class aptent taciti sociosqu. 
                            Ad litora torquent per conubia nostra inceptos himenaeos.
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <h1>Orders</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. 
                            Quisque faucibus ex sapien vitae pellentesque sem placerat. 
                            In id cursus mi pretium tellus duis convallis. 
                            Tempus leo eu aenean sed diam urna tempor. 
                            Pulvinar vivamus fringilla lacus nec metus bibendum egestas. 
                            Iaculis massa nisl malesuada lacinia integer nunc posuere. 
                            Ut hendrerit semper vel class aptent taciti sociosqu. 
                            Ad litora torquent per conubia nostra inceptos himenaeos.
                        </p>
                        <p>Contact us </p></><a href='/contact'><b>here</b></a>
                    </div>
                </div>
                <Separator orientation='horizontal' className='border-neutral-400 max-w-100' />
                <h2 className='flex flex-col text-2xl font-normal gap-2'>
                    S C /\ P E
                    <p className='text-sm content-end tracking-widest'>by md</p>
                </h2>
            </div>
            <Footer />
        </div>
    );
}


export default Shipping;
