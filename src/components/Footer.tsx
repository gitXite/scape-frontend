import { Separator } from './ui/Separator';
import Socials from './Socials';

function Footer() {
    return (
        <footer className='flex justify-center place-items-end h-50 w-full p-5 border-t-1 bg-neutral-900 overflow-hidden'>
            <div className='flex absolute left-0 ml-15 h-40 text-center'>
                <div className='flex flex-col items-start px-6 place-content-around'>
                    <a
                        href='/#home'
                        className='text-neutral-300 group hover:text-white transition duration-200 font-medium tracking-wide'
                    >
                        Home
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                    <a
                        href='/#about'
                        className='text-neutral-300 group hover:text-white transition duration-200 font-medium tracking-wide'
                    >
                        Our Story
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                    <a
                        href='/#map'
                        className='text-neutral-300 group hover:text-white transition duration-200 font-medium tracking-wide'
                    >
                        Map
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                </div>
                <div className='flex items-center justify-center h-full'>
                    <Separator
                        orientation='vertical'
                        className='border-neutral-100/10 max-h-20'
                    />
                </div>
                <div className='flex flex-col items-start px-6 place-content-around relative bottom-1'>
                    <h1 className='text-neutral-100 group transition duration-200 font-medium tracking-wide'>
                        Company
                    </h1>
                    <a
                        href='/'
                        className='text-neutral-300 group hover:text-white transition duration-200 text-sm'
                    >
                        About Us
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                    <a
                        href='/gallery'
                        className='text-neutral-300 group hover:text-white transition duration-200 text-sm'
                    >
                        Gallery
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                    <a
                        href='/'
                        className='text-neutral-300 group hover:text-white transition duration-200 text-sm'
                    >
                        Testimonials
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                </div>
                <div className='flex items-center justify-center h-full'>
                    <Separator
                        orientation='vertical'
                        className='border-neutral-100/10 max-h-20'
                    />
                </div>
                <div className='flex flex-col items-start px-6 place-content-around'>
                    <h1 className='text-neutral-100 group transition duration-200 font-medium tracking-wide'>
                        Support
                    </h1>
                    <a
                        href='/'
                        className='text-neutral-300 group hover:text-white transition duration-200 text-sm'
                    >
                        FAQ
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                    <a
                        href='/'
                        className='text-neutral-300 group hover:text-white transition duration-200 text-sm'
                    >
                        Orders & Shipping
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                    <a
                        href='/contact'
                        className='text-neutral-300 group hover:text-white transition duration-200 text-sm'
                    >
                        Contact Support
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                    <a
                        href='/'
                        className='text-neutral-300 group hover:text-white transition duration-200 text-sm'
                    >
                        Submit Feedback
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                </div>
                <div className='flex items-center justify-center h-full'>
                    <Separator
                        orientation='vertical'
                        className='border-neutral-100/10 max-h-20'
                    />
                </div>
                <div className='flex flex-col items-start px-6 place-content-around'>
                    <h1 className='text-neutral-100 group transition duration-200 font-medium tracking-wide'>
                        Legal
                    </h1>
                    <a
                        href='/privacy-policy'
                        className='text-neutral-300 group hover:text-white transition duration-200 text-sm'
                    >
                        Privacy Policy
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                    <a
                        href='/terms-&-conditions'
                        className='text-neutral-300 group hover:text-white transition duration-200 text-sm'
                    >
                        Terms of Service
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                    <a
                        href='/'
                        className='text-neutral-300 group hover:text-white transition duration-200 text-sm'
                    >
                        Return & Refund Policy
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                    <a
                        href='/cookies'
                        className='text-neutral-300 group hover:text-white transition duration-200 text-sm'
                    >
                        Cookie Policy
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                </div>
            </div>
            <div className='flex-col place-items-center'>
                <div className='h-fit w-auto text-4xl text-neutral-100 p-2 pb-15'>
                    <h1 className=''>S c a p e</h1>
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
