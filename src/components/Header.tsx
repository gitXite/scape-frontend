import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

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

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#thescape', label: 'The Scape' },
        { href: '#map', label: 'Map' },
    ];

    return (
        <>
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
                className={`fixed left-0 right-0 z-50 mix-blend-difference text-white backdrop-blur-xl bg-primary/10 border-b border-primary-foreground/10 transition-transform duration-300 ease-out ${
                    showHeader ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <div className='relative sm:left-8'>
                    <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                        <div className='flex items-center justify-between h-16 sm:h-20'>
                            {/* Left nav - desktop */}
                            <div className='hidden md:flex items-center gap-8'>
                                {navLinks.slice(0, 2).map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className='text-sm tracking-widest text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-150 relative group'
                                    >
                                        {link.label}
                                        <span className='absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-primary-foreground transition-all duration-150' />
                                    </a>
                                ))}
                            </div>

                            {/* Logo */}
                            <div className='flex-shrink-0 md:hidden'>
                                <a href='#home' className='text-xl sm:text-2xl tracking-[0.3em] text-primary-foreground/80'>
                                    <span>SC</span>
                                    <span className='tracking-normal'>/\</span>
                                    <span className='pl-1.5'>PE</span>
                                </a>
                            </div>
                            <div className='flex-shrink-0 max-sm:hidden'>
                                <img 
                                    src='/images/scape-logo-trans.webp'
                                    alt='Scape logo'
                                    className='max-h-[70px] max-sm:w-[60%] py-2'
                                />
                            </div>

                            {/* Right nav - desktop */}
                            <div className='hidden md:flex items-center gap-8'>
                                <a
                                    href='#map'
                                    className='text-sm tracking-widest text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-150 relative group'
                                >
                                    Map
                                    <span className='absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-primary-foreground transition-all duration-150' />
                                </a>
                                <a
                                    href='/get-started'
                                    className='text-sm tracking-widest px-6 py-2.5 font-normal rounded-full shadow-sm bg-primary/20 border-primary-foreground/30 border hover:bg-neutral-100/90 active:bg-white text-primary-foreground/80 hover:text-foreground transition-all duration-300'
                                >
                                    Get Started
                                </a>
                            </div>

                            {/* Mobile menu button */}
                            <button
                                className='md:hidden text-primary-foreground/80 p-2'
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                            </button>
                        </div>
                    </nav>
                </div>

                {/* Mobile menu */}
                <div
                    className={`md:hidden transition-all duration-300 overflow-hidden ${
                        mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className='px-6 py-6 flex flex-col gap-5'>
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className='text-sm tracking-widest text-primary-foreground/80 hover:text-primary-foreground transition-colors'
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href='/get-started'
                            className='text-sm tracking-widest px-6 py-3 rounded-full border border-primary-foreground/30 text-primary-foreground/80 text-center hover:bg-primary-foreground hover:text-primary transition-all duration-300 mt-2'
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
