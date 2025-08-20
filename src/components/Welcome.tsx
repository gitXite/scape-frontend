


function Welcome() {
    return (
        <div className='h-full w-full place-content-center'>
            <div className='flex flex-col place-items-center place-content-center h-8/12 w-full bg-neutral-900 drop-shadow-2xl drop-shadow-neutral-500'>
                <h1 className='mt-10 text-9xl'>W  E   L   C   O   M   E</h1>
                <button className='flex mt-20 p-6 pl-12 pr-12 text-xl border-1 shadow-[inset_0px_0px_10px_rgba(0,0,0,0.6)] shadow-neutral-950 border-neutral-100 rounded-md hover:bg-neutral-100 hover:text-neutral-900 hover:border-neutral-900 hover:cursor-pointer'>
                    <p>G   e   t</p><span className='w-4'></span><p>S   t   a   r   t   e   d</p>
                </button>
            </div>
        </div>
    );
}


export default Welcome;