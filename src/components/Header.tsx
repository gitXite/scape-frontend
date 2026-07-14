import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#thescape', label: 'The Scape' },
    { href: '/about-us', label: 'About' },
    { href: '#map', label: 'Map' },
];

function Header() {
    const [showHeader, setShowHeader] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isHoveredRef = useRef(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const clearHideTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    };

    const startHideTimeout = () => {
        clearHideTimeout();
        timeoutRef.current = setTimeout(() => {
            if (!isHoveredRef.current) {
                setShowHeader(false);
            }
        }, 1500);
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowHeader(true);
            startHideTimeout();
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (e.clientY <= 60) {
                setShowHeader(true);
                startHideTimeout();
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            clearHideTimeout();
        };
    }, []);

    // Split links so the centered wordmark stays balanced.
    const leftLinks = navLinks.slice(0, 2);
    const rightLinks = navLinks.slice(2);

    return (
        <header
            onMouseEnter={() => {
                isHoveredRef.current = true;
                clearHideTimeout();
                setShowHeader(true);
            }}
            onMouseLeave={() => {
                isHoveredRef.current = false;
                startHideTimeout();
            }}
            className={`fixed left-0 right-0 top-0 z-50 text-primary-foreground border-b transition-all duration-300 ease-out ${
                showHeader ? 'translate-y-0' : '-translate-y-full'
            } ${
                mobileMenuOpen
                    ? 'bg-primary/95 border-primary-foreground/10 shadow-lg shadow-black/20 backdrop-blur-md'
                    : 'bg-primary/70 backdrop-blur-md border-primary-foreground/10 shadow-sm shadow-black/10'
            }`}
        >
            <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='relative flex h-16 items-center justify-between sm:h-20'>
                    {/* Left nav - desktop */}
                    <div className='hidden items-center gap-8 md:flex'>
                        {leftLinks.map((link) => (
                            <NavLink
                                key={link.href}
                                href={link.href}
                                label={link.label}
                            />
                        ))}
                    </div>

                    {/* Centered wordmark */}
                    <a
                        href='#home'
                        aria-label='SCAPE home'
                        className='absolute left-1/2 -translate-x-1/2 text-xl tracking-[0.35em] text-primary-foreground transition-opacity hover:opacity-80 sm:text-2xl'
                    >
                        <span>SC</span>
                        <span className='tracking-normal'>/\</span>
                        <span className='pl-1.5'>PE</span>
                    </a>

                    {/* Right nav - desktop */}
                    <div className='hidden items-center gap-8 md:flex'>
                        {rightLinks.map((link) => (
                            <NavLink
                                key={link.href}
                                href={link.href}
                                label={link.label}
                            />
                        ))}
                        <a
                            href='/get-started'
                            className='rounded-full border border-primary-foreground/30 px-6 py-2.5 text-[13px] font-medium tracking-wide text-primary-foreground transition-colors duration-300 hover:bg-primary-foreground hover:text-primary'
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        type='button'
                        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileMenuOpen}
                        className='ml-auto p-2 text-primary-foreground/90 transition-colors hover:text-primary-foreground md:hidden'
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                className={`overflow-hidden transition-all duration-300 md:hidden ${
                    mobileMenuOpen
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                }`}
            >
                <div className='flex flex-col gap-1 px-6 pb-6 pt-2'>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className='border-b border-primary-foreground/10 py-3 text-sm tracking-widest text-primary-foreground/80 transition-colors hover:text-primary-foreground'
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href='/get-started'
                        onClick={() => setMobileMenuOpen(false)}
                        className='mt-4 rounded-full border border-primary-foreground/30 px-6 py-3 text-center text-sm tracking-widest text-primary-foreground transition-colors duration-300 hover:bg-primary-foreground hover:text-primary'
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </header>
    );
}

function NavLink({ href, label }: { href: string; label: string }) {
    return (
        <a
            href={href}
            className='group relative text-[13px] font-medium tracking-wide text-primary-foreground/80 transition-colors duration-150 hover:text-primary-foreground'
        >
            {label}
            <span className='absolute -bottom-1 left-0 h-0.5 w-0 bg-primary-foreground transition-all duration-150 group-hover:w-full' />
        </a>
    );
}

export default Header;