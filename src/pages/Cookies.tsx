import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';



function Cookies() {
    return (
        <div className='flex flex-col min-h-full w-full bg-neutral-100 items-center'>
            <BackButton page='home' />
            <div className='flex flex-col items-center space-y-5 min-h-full p-10 w-200 max-lg:w-3/4 max-sm:w-full text-center text-neutral-900'>
                <h1 className='text-2xl tracking-widest font-medium mb-2'>
                    COOKIE POLICY
                </h1>
                <h2 className='text-neutral-400 font-normal'>
                    Last updated September 02, 2025
                </h2>
                <p className='mb-8'>
                    Our website uses only <b>neccessary cookies</b> to ensure the proper functioning of the site. 
                    These cookies are essential for things like payment and transactions. 
                </p>
                <h2 className='text-xl font-normal tracking-widest m-2'>
                    1. What are cookies?
                </h2>
                <p className='mb-8'>
                    Cookies are small text files stored on your device when you visit a website. 
                    They help the site function correctly but do not collect personal information unless you provide it. 
                </p>
                <h2 className='text-xl font-normal tracking-widest m-2'>
                    2. Neccessary cookies we use:
                </h2>
                <p>
                    When you make a payment, third-party services such as Stripe/Vipps may set cookies on your device for security and fraud prevention. 
                    These cookies are necessary to process payments and cannot be disabled without preventing transactions.
                </p>
                <p className='mb-8'>
                    Since these cookies are essential for the website to operate, they are always active. 
                    No personal data is shared with third parties through these cookies. 
                </p>
                <h2 className='text-xl font-normal tracking-widest m-2'>
                    3. Managing cookies
                </h2>
                <p className='mb-8'>
                    You can control cookies through your browser settings. 
                    Please note that disabling neccessary cookies may prevent some features of the website from working correctly. 
                </p>
                <h2 className='text-xl font-normal tracking-widest m-2'>
                    4. More information
                </h2>
                <p>
                    For more information on how we handle your personal data, please see our <a href="/privacy-policy" target='_blank'><b>Privacy Policy</b></a>. 
                </p>
                <Separator orientation='horizontal' className='border-neutral-400 max-w-100 mt-5' />
                <h2 className='flex flex-col text-2xl font-normal gap-2 mt-5'>
                    S C /\ P E
                    <p className='text-sm content-end tracking-widest'>by md</p>
                </h2>
            </div>
            <Footer />
        </div>
    );
}


export default Cookies;