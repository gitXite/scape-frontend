import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';


function Shipping() {
    return (
        <div className='flex flex-col min-h-full min-md:h-full w-full bg-neutral-100 tracking-wide'>
            <BackButton page='home' />
            <div className='flex flex-col min-h-full w-full'>
                <div className='flex h-full w-full place-content-evenly p-10 max-md:flex-col max-md:items-center max-md:text-center max-md:gap-10'>
                    <div className='flex flex-col place-content-center text-neutral-900 w-1/4 max-lg:w-1/2 max-md:w-3/4 max-sm:w-full gap-5'>
                        <h1 className='text-2xl tracking-widest font-medium'>Shipping</h1>
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
                    <div className='flex flex-col place-content-center text-neutral-900 w-1/4 max-lg:w-1/2 max-md:w-3/4 max-sm:w-full gap-5'>
                        <h1 className='text-2xl tracking-widest font-medium'>Orders</h1>
                        <p className=''>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. 
                            Quisque faucibus ex sapien vitae pellentesque sem placerat. 
                            In id cursus mi pretium tellus duis convallis. 
                            Tempus leo eu aenean sed diam urna tempor. 
                            Pulvinar vivamus fringilla lacus nec metus bibendum egestas. 
                            Iaculis massa nisl malesuada lacinia integer nunc posuere. 
                            Ut hendrerit semper vel class aptent taciti sociosqu. 
                            Ad litora torquent per conubia nostra inceptos himenaeos.
                        </p>
                        <p className='text-lg font-medium'>Contact us <a href='/contact-us'><b>here</b></a></p>
                    </div>
                </div>
                <Separator orientation='horizontal' className='border-neutral-400 w-1/4 max-lg:w-1/2 self-center' />
                <h2 className='flex flex-col text-2xl font-normal gap-2 text-neutral-900 text-center my-10 mb-20'>
                    S C /\ P E
                    <p className='text-sm content-end tracking-widest'>by md</p>
                </h2>
            </div>
            <Footer />
        </div>
    );
}


export default Shipping;
