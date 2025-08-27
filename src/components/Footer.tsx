


function Footer() {
    return (
        <footer className='flex justify-center place-items-end h-50 w-full p-5 border-t-1 bg-neutral-900'>
            <div className='flex-col place-items-center'>
                <div className='h-fit w-auto text-2xl text-neutral-100 p-2 pb-15'>
                    <p className=''>Terrascapes</p>
                </div>
                <small className=''>Copyright © {new Date().getFullYear()} by Daniel Halås. All Rights Reserved.</small>
            </div>
            <div className='flex ml-5 absolute left-0 place-items-end'>
                <small>Powered by</small>
                <img className='w-2/10 m-0 p-0 relative -bottom-3' src="src/assets/Stripe_Logo.png" alt="Stripe Logo" />
            </div>
        </footer>
    );
}


export default Footer;