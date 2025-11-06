import { Separator } from './ui/separator';
import Socials from './Socials';
// import Logo from '@/assets/scape-logo.png';

function Footer() {
    return (
        <footer className='flex justify-center place-items-end min-h-50 max-h-50 w-full p-5 border-t-1 bg-neutral-900 overflow-hidden'>
            <div className='flex absolute left-0 ml-20 h-40 text-center space-x-2'>
                <div className='flex flex-col items-start px-6 place-content-around relative'>
                    <h1 className='text-neutral-100 group transition duration-200 font-medium tracking-wide'>
                        Company
                    </h1>
                    <a
                        href='/'
                        className='text-neutral-300 group hover:text-white transition duration-200 text-sm'
                    >
                        Home
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                    <a
                        href='/about-us'
                        className='text-neutral-300 group hover:text-white transition duration-200 text-sm'
                    >
                        About Us
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                    <a
                        href='/testimonials'
                        className='text-neutral-300 group hover:text-white transition duration-200 text-sm'
                    >
                        Testimonials
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                    <a
                        href='/gallery'
                        className='text-neutral-300 group hover:text-white transition duration-200 text-sm'
                    >
                        Gallery
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
                        href='/faq'
                        className='text-neutral-300 group hover:text-white transition duration-200 text-sm'
                    >
                        FAQ
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                    <a
                        href='/shipping'
                        className='text-neutral-300 group hover:text-white transition duration-200 text-sm'
                    >
                        Orders & Shipping
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                    <a
                        href='/contact-us'
                        className='text-neutral-300 group hover:text-white transition duration-200 text-sm'
                    >
                        Contact Support
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                    <a
                        href='/feedback'
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
                        href='/terms-of-service'
                        className='text-neutral-300 group hover:text-white transition duration-200 text-sm'
                    >
                        Terms of Service
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                    </a>
                    <a
                        href='/returns'
                        className='text-neutral-300 group hover:text-white transition duration-200 text-sm'
                    >
                        Returns & Refunds
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
            <div className='flex-col place-items-center space-y-2'>
                <div className='h-fit w-auto text-4xl text-center text-neutral-100 mb-10'>
                    <h1 className=''>S C /\ P E</h1>
                    <p className='text-sm pt-2 pb-1 tracking-widest'>by md</p>
                </div>
                {/* <img src={Logo} alt="Logo" className='w-[14%]' /> */}
                <p className='text-xs'>
                    Copyright © {new Date().getFullYear()} by md design. All
                    Rights Reserved.
                </p>
            </div>
            <div className='flex absolute right-0 items-center'>
                <Socials />
                <small className='relative left-2 -bottom-2'>Powered by</small>
                <img
                    className='max-w-20 mr-20 p-0 relative bottom-[-9px]'
                    src='src/assets/Vipps-Logo.wine.png'
                    alt='Vipps Logo'
                />
            </div>
        </footer>
    );
}

export default Footer;
