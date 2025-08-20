


function Footer() {
    return (
        <footer className='flex justify-center place-items-end h-50 w-full p-5 border-t-1 bg-neutral-900'>
            <div className='flex-col place-items-center'>
                <div className='h-fit w-auto text-2xl text-neutral-100 p-2'>MD // DESIGN</div>
                <small className='text-neutral-100'>Copyright © {new Date().getFullYear()} by Daniel Halås. All Rights Reserved.</small>
            </div>
        </footer>
    );
}


export default Footer;