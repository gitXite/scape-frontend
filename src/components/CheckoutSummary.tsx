/* tntegrate stripe payment API */


function CheckoutSummary() {
    return (
        <div className='flex h-full w-full'>
            <div className='h-full w-2/4 p-10'>
                {/* Stripe payment API */}
            </div>
            <div className='flex-col h-full w-2/4 p-10'>
                <div className='flex-col pb-5 border-b-1 border-neutral-900'>
                    <h1>Order Summary</h1>
                    <div className='flex'>
                        <img src='' alt='' className='h-20 w-20 rounded-sm' />
                        <h2 className='text-neutral-900'>Model</h2>
                        <p className='text-neutral-600'>199kr</p>
                    </div>
                    <div className='flex'>
                        <img src='' alt='' className='h-20 w-20 rounded-sm' />
                        <h2 className='text-neutral-900'>Frame</h2>
                        <p className='text-neutral-600'>99kr</p>
                    </div>
                </div>
                <div className='flex-col pb-5 border-b-1 border-neutral-900'>
                    <div className='flex place-content-between'>
                        <p className='text-neutral-900'>Subtotal</p>
                        <p className='text-neutral-600'>298kr</p>
                    </div>
                    <div className='flex place-content-between'>
                        <p className='text-neutral-900'>Tax Included</p>
                        <p className='text-neutral-600'>74.5kr</p>
                    </div>
                    <div className='flex place-content-between'>
                        <p className='text-neutral-900'>Shipping</p>
                        <p className='text-neutral-600'>49kr</p>
                    </div>
                </div>
                <div className='flex place-content-between'>
                    <h1 className='text-neutral-900'>Total</h1>
                    <p className='text-neutral-900'>347kr</p>
                </div>
            </div>
        </div>
    );
}


export default CheckoutSummary;
