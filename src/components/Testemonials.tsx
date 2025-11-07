import ReviewCard from './ReviewCard';
import { Marquee, MarqueeContent, MarqueeFade } from './ui/shadcn-io/marquee/Marquee';
import StarRating from './ui/starRating';



function Testemonials() {
    // mock variables
    let averageRating = 4.2;
    let totalReviews = 127;

    // get reviews from backend to display

    return (
        <div className='min-h-full w-full'>
            <div className='flex flex-col h-full items-center justify-evenly'>
                <div className='rounded-full bg-neutral-900 px-5 py-1.5 drop-shadow-lg'>
                    <StarRating readonly rating={averageRating} showValue size='lg' />
                    <p className='text-neutral-200 tracking-wide text-center font-normal text-lg'>Total reviews: {totalReviews}</p>
                </div>
                <h1 className='text-neutral-900 text-center font-medium text-5xl tracking-wide text-shadow-md'>Words of praise from <br />our customers</h1>
                <div className='flex flex-col gap-10 w-1/2'>
                    <Marquee>
                        <MarqueeFade side='left' />
                        <MarqueeFade side='right' />
                        <MarqueeContent speed={100} className='py-2'>
                            <ReviewCard />
                            <ReviewCard />
                            <ReviewCard />
                            <ReviewCard />
                        </MarqueeContent>
                    </Marquee>
                    <Marquee>
                        <MarqueeFade side='left' />
                        <MarqueeFade side='right' />
                        <MarqueeContent speed={100} direction='right' className='py-2'>
                            <ReviewCard />
                            <ReviewCard />
                            <ReviewCard />
                            <ReviewCard />
                        </MarqueeContent>
                    </Marquee>
                </div>
            </div>
        </div>
    );
}


export default Testemonials;
