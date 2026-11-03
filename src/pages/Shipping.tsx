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
                        <h1 className='text-2xl tracking-widest font-medium'>
                            Shipping
                        </h1>
                        <p>
                            We offer shipping through Posten directly integrated
                            in Vipps, making delivery fast and convenient. Once
                            your package is on its way, you’ll receive tracking
                            information so you can follow the shipment in real
                            time. Delivery times vary depending on your
                            location, but Posten typically provides quick and
                            reliable service across Norway.
                        </p>
                    </div>
                    <div className='flex flex-col place-content-center text-neutral-900 w-1/4 max-lg:w-1/2 max-md:w-3/4 max-sm:w-full gap-5'>
                        <h1 className='text-2xl tracking-widest font-medium'>
                            Orders
                        </h1>
                        <p className=''>
                            When you place an order with us, it is processed
                            immediately and you’ll receive a confirmation by
                            email as soon as payment is completed. We’ll start
                            production as soon as possible, but production times
                            may vary depending on the number of pending orders.
                            If anything is unclear or you need to make changes
                            before your order is shipped, contact our support
                            team as soon as possible - we’re always here to help
                            ensure the process is smooth and predictable.
                        </p>
                        <p className='text-lg font-medium'>
                            Contact us{' '}
                            <a href='/contact-us'>
                                <b>here</b>
                            </a>
                        </p>
                    </div>
                </div>
                <Separator
                    orientation='horizontal'
                    className='border-neutral-400 w-1/4 max-lg:w-1/2 self-center'
                />
                <div className='flex flex-col items-center my-8 text-center'>
                    <h2 className='text-2xl sm:text-3xl font-display tracking-[0.2em] mb-1 text-foreground whitespace-nowrap'>
                        <span>SC</span>
                        <span className='tracking-normal'>/\</span>
                        <span className='pl-1.5'>PE</span>
                    </h2>
                    <p className='text-xs tracking-widest text-muted-foreground'>
                        by md
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Shipping;
