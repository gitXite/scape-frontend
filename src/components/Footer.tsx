import { Separator } from './ui/separator';
import { Mail } from 'lucide-react';
import Socials from './Socials';

function Footer() {
    const footerLinks = {
        Company: [
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '/about-us' },
            { label: 'Get Started', href: '/get-started' },
            { label: 'Testimonials', href: '/testimonials' },
        ],
        Support: [
            { label: 'FAQ', href: '/faq' },
            { label: 'Orders & Shipping', href: '/shipping' },
            { label: 'Contact Support', href: '/contact-us' },
            { label: 'Submit Feedback', href: '/feedback' },
        ],
        Legal: [
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Terms of Service', href: '/terms-of-service' },
            { label: 'Returns & Refunds', href: '/returns' },
            { label: 'Cookie Policy', href: '/cookies' },
        ],
    };

    return (
        <footer className='w-full bg-footer-bg text-footer-foreground'>
            <div className='max-w-7xl mx-auto px-6 sm:px-10 py-12 sm:pt-16 sm:pb-10'>
                <div className='grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8'>
                    {/* Brand */}
                    <div className='md:col-span-3 flex flex-col items-center md:items-start max-md:relative max-md:left-0.5'>
                        <h2 className='text-3xl tracking-[0.2em] mb-1 max-md:relative max-md:left-0.5'>
                            <span>SC</span>
                            <span className='tracking-normal'>/\</span>
                            <span className='pl-1.5'>PE</span>
                        </h2>
                        <p className='text-xs tracking-widest text-footer-muted'>by md</p>
                    </div>

                    {/* Link columns */}
                    <div className='md:col-span-6 grid grid-cols-3 gap-6 sm:gap-8'>
                        {Object.entries(footerLinks).map(([category, links]) => (
                            <div key={category} className='flex flex-col items-center md:items-start gap-3'>
                                <h3 className='text-sm font-medium tracking-wide text-footer-foreground'>
                                    {category}
                                </h3>
                                {links.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className='text-xs sm:text-sm text-footer-muted hover:text-footer-foreground transition-colors duration-200'
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Socials + Payment */}
                    <div className='md:col-span-3 flex flex-col items-center md:items-end gap-4'>
                        <Socials />
                        <div className='flex items-center gap-2 text-footer-muted md:left-4 relative'>
                            <span className='text-xs max-sm:hidden'>Powered by</span>
                            <img
                                className='max-w-20 relative top-[1.5px] md:top-[1px]'
                                src='/images/Vipps-Logo.wine.png'
                                alt='Vipps Logo'
                                loading='lazy'
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <Separator className='my-8 border-footer-muted/20' orientation='horizontal' />
                <div className='flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-footer-muted'>
                    <span className='flex items-center gap-2'>
                        <Mail size={16} className='relative top-[1px]' />
                        scapebymd@gmail.com
                    </span>
                    <span>Org nr 929 981 626</span>
                    <span>© {new Date().getFullYear()}. All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;