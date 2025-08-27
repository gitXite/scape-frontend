import { Separator } from './ui/Separator';
import Socials from './Socials';

function Footer() {
    return (
        <footer className='flex justify-center place-items-end h-50 w-full p-5 border-t-1 bg-neutral-900 overflow-hidden'>
            <div className='flex absolute left-0 ml-20 h-40 text-center'>
                <div className='flex flex-col px-6 place-content-around'>
                    <a
                        href='/#home'
                        className='text-neutral-300 group hover:text-white transition duration-200 font-medium'
                    >
                        Home
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                    <a
                        href='/#about'
                        className='text-neutral-300 group hover:text-white transition duration-200 font-medium'
                    >
                        About
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                    <a
                        href='/#map'
                        className='text-neutral-300 group hover:text-white transition duration-200 font-medium'
                    >
                        Map
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                </div>
                <Separator
                    orientation='vertical'
                    className='border-neutral-100/10 max-h-25 mt-7.5'
                />
                <div className='flex flex-col px-6 place-content-around'>
                    <a
                        href='/gallery'
                        className='text-neutral-300 group hover:text-white transition duration-200 font-regular'
                    >
                        Gallery
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                    <a
                        href='/'
                        className='text-neutral-300 group hover:text-white transition duration-200 font-regular'
                    >
                        Projects
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                    <a
                        href='/'
                        className='text-neutral-300 group hover:text-white transition duration-200 font-regular'
                    >
                        Services
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                </div>
                <Separator
                    orientation='vertical'
                    className='border-neutral-100/10 max-h-25 mt-7.5'
                />
                <div className='flex flex-col px-6 place-content-around'>
                    <a
                        href='/contact'
                        className='text-neutral-300 group hover:text-white transition duration-200 font-regular'
                    >
                        Contact
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                    <a
                        href='/'
                        className='text-neutral-300 group hover:text-white transition duration-200 font-regular'
                    >
                        Shipping
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                    <a
                        href='/'
                        className='text-neutral-300 group hover:text-white transition duration-200 font-regular'
                    >
                        FAQ
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                </div>
            </div>
            <div className='flex-col place-items-center'>
                <div className='h-fit w-auto text-2xl text-neutral-100 p-2 pb-15'>
                    <p className=''>T e r r a n u o v o</p>
                </div>
                <small className=''>
                    Copyright © {new Date().getFullYear()} by Daniel Halås. All
                    Rights Reserved.
                </small>
            </div>
            <div className='flex absolute right-0 items-center'>
                <Socials />
                <small className='relative -bottom-2'>Powered by</small>
                <img
                    className='max-w-20 mr-10 p-0 relative -bottom-2'
                    src='src/assets/Stripe_Logo.png'
                    alt='Stripe Logo'
                />
            </div>
        </footer>
    );
}

export default Footer;
