


function CustomizeFrame() {
    return (
        <div className='flex h-full w-full'>
            <div className='h-full w-2/3 place-content-center place-items-center'>
                <div className='h-[80%] p-10'>
                    <img src='' alt='Preview' className='bg-neutral-900' />
                </div>
            </div>
            <div className='flex h-full w-1/3'>
                <div className='flex-col justify-center'>
                    <img src='' alt='Oak Frame' className='bg-neutral-900' />
                    <p>Oak Frame</p>
                </div>
                <div className='flex-col justify-center'>
                    <img src='' alt='Walnut Frame' className='bg-neutral-900' />
                    <p>Walnut Frame</p>
                </div>
                <div className='flex-col justify-center'>
                    <img src='' alt='White Frame' className='bg-neutral-900' />
                    <p>White Frame</p>
                </div>
                <div className='flex-col justify-center'>
                    <img src='' alt='Black Frame' className='bg-neutral-900' />
                    <p>Black Frame</p>
                </div>
            </div>
        </div>
    );
}


export default CustomizeFrame;
