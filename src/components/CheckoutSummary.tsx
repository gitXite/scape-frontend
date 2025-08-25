import { Separator } from './ui/separator';



function CheckoutSummary() {
    return (
        <div className='flex-col h-full w-2/4 p-10 content-center'>
            <div className='flex-col pb-5'>
                <h1 className='pb-5 text-neutral-900'>Order Summary</h1>
                <Separator orientation='horizontal'/>
                <div className='flex justify-between py-2'>
                    <img src='src/assets/product-image-straight.png' alt='Product Image 1' className='h-20 w-30 rounded-sm object-cover' />
                    <h2 className='text-neutral-900'>Model</h2>
                    <p className='text-neutral-600'>199kr</p>
                </div>
                <div className='flex justify-between py-2'>
                    <img src='src/assets/product-image-angle.png' alt='Product Image 2' className='h-20 w-30 rounded-sm object-cover' />
                    <h2 className='text-neutral-900'>Frame</h2>
                    <p className='text-neutral-600'>99kr</p>
                </div>
            </div>
            <Separator orientation='horizontal'/>
            <div className='flex-col pt-5 pb-5'>
                <div className='flex justify-between'>
                    <p className='text-neutral-900'>Subtotal</p>
                    <p className='text-neutral-600'>298kr</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-neutral-900'>Tax Included</p>
                    <p className='text-neutral-600'>74.5kr</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-neutral-900'>Shipping</p>
                    <p className='text-neutral-600'>49kr</p>
                </div>
            </div>
            <Separator orientation='horizontal'/>
            <div className='flex justify-between'>
                <h1 className='text-neutral-900'>Total</h1>
                <p className='text-neutral-900'>347kr</p>
            </div>
        </div>
    );
}


export default CheckoutSummary;
