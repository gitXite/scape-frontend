import { Separator } from './ui/separator';
import Socials from './Socials';

function Footer() {
    return (
        <footer className='flex relative max-xl:flex-col max-xl:place-items-center justify-center place-items-end min-h-50 max-xl:max-h-100 max-h-50 w-full p-5 border-t-1 bg-neutral-900 overflow-hidden'>
            <div className='flex max-xl:w-full flex-col space-y-2 text-center place-content-center'>
                <div className='h-fit w-auto text-4xl text-center text-neutral-100 mb-5'>
                    <h1 className=''>S C /\ P E</h1>
                    <p className='text-sm pt-2 pb-1 tracking-widest'>by md</p>
                </div>
                <div className='flex max-xl:w-full absolute max-xl:static left-0 ml-20 max-[1440px]:ml-5 max-xl:ml-0 h-40 text-center space-x-2 justify-evenly'>
                    <div className='flex flex-col items-start max-xl:items-center px-6 max-sm:px-2 place-content-around max-xl:w-1/3'>
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
                            href='/get-started'
                            className='text-neutral-300 group hover:text-white transition duration-200 text-sm'
                        >
                            Get Started
                            <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                        </a>
                        <a
                            href='/testimonials'
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
                    <div className='flex flex-col items-start max-xl:items-center px-6 max-sm:px-2 place-content-around max-xl:w-1/3'>
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
                    <div className='flex flex-col items-start max-xl:items-center px-6 max-sm:px-2 place-content-around max-xl:w-1/3'>
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
                <div className='flex absolute max-xl:relative max-xl:w-full right-0 bottom-0 items-center'>
                    <small className='relative right-20 max-xl:right-2 top-2 max-xl:w-1/3 max-[465px]:text-xs'>scapebymd@gmail.com</small>
                    <Socials />
                    <div className='flex items-center max-xl:w-1/3 place-content-center'>
                        <small className='relative left-2 top-2 max-[465px]:hidden'>Powered by</small>
                        <img
                            className='max-w-20 mr-20 max-[1440px]:mr-5 max-xl:mr-0 p-0 relative bottom-[-9px]'
                            src='/images/Vipps-Logo.wine.png'
                            alt='Vipps Logo'
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-2 mt-5'>
                    <p className='text-xs'>Org nr 929 981 626</p>
                    <p className='text-xs'>
                        Copyright © {new Date().getFullYear()} by md design. All
                        Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
