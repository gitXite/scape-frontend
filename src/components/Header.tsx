import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#thescape', label: 'The Scape' },
    { href: '/about-us', label: 'About' },
    { href: '#map', label: 'Map' },
];

function Header() {
    const [showHeader, setShowHeader] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const lastScrollY = useRef(0);
    const isHoveredRef = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // At the top of the page, header is always visible with subtle top styling
            if (currentScrollY <= 20) {
                setShowHeader(true);
                setIsScrolled(false);
                lastScrollY.current = currentScrollY;
                return;
            }

            setIsScrolled(true);

            // On desktop (>= 1024px), header stays permanently pinned
            if (window.innerWidth >= 1024) {
                setShowHeader(true);
                lastScrollY.current = currentScrollY;
                return;
            }

            // Keep visible if mobile menu is open or mouse is hovering
            if (mobileMenuOpen || isHoveredRef.current) {
                setShowHeader(true);
                lastScrollY.current = currentScrollY;
                return;
            }

            const delta = currentScrollY - lastScrollY.current;

            // Scroll down past threshold on mobile/tablet -> hide
            if (delta > 8 && currentScrollY > 80) {
                setShowHeader(false);
            }
            // Scroll up past threshold -> reveal
            else if (delta < -8) {
                setShowHeader(true);
            }

            lastScrollY.current = currentScrollY;
        };

        const handleMouseMove = (e: MouseEvent) => {
            // Reveal header if mouse nudges close to top edge
            if (e.clientY <= 30) {
                setShowHeader(true);
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && mobileMenuOpen) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [mobileMenuOpen]);

    // Split links so the centered wordmark stays balanced.
    const leftLinks = navLinks.slice(0, 2);
    const rightLinks = navLinks.slice(2);

    return (
        <header
            onMouseEnter={() => {
                isHoveredRef.current = true;
                setShowHeader(true);
            }}
            onMouseLeave={() => {
                isHoveredRef.current = false;
            }}
            className={`fixed left-0 right-0 top-0 z-50 text-primary-foreground transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                showHeader ? 'translate-y-0' : '-translate-y-full lg:translate-y-0'
            } ${
                mobileMenuOpen
                    ? 'bg-primary/95 border-b border-primary-foreground/10 shadow-xl shadow-black/30 backdrop-blur-md'
                    : isScrolled
                      ? 'bg-primary/80 border-b border-primary-foreground/10 shadow-sm shadow-black/20 backdrop-blur-md'
                      : 'bg-transparent border-b border-transparent'
            }`}
        >
            <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='relative flex h-16 items-center justify-between sm:h-18'>
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
                        className='absolute left-1/2 -translate-x-1/2 font-display text-lg tracking-[0.35em] text-primary-foreground transition-opacity hover:opacity-80 sm:text-xl'
                    >
                        <span>SC</span>
                        <span className='tracking-normal'>/\</span>
                        <span className='pl-1.5'>PE</span>
                    </a>

                    {/* Right nav - desktop */}
                    <div className='hidden items-center gap-7 md:flex'>
                        {rightLinks.map((link) => (
                            <NavLink
                                key={link.href}
                                href={link.href}
                                label={link.label}
                            />
                        ))}
                        <a
                            href='/get-started'
                            className='rounded-full border border-primary-foreground/25 bg-primary-foreground/[0.06] px-5 py-2 text-xs font-semibold tracking-wider uppercase text-primary-foreground transition-all duration-200 hover:bg-primary-foreground hover:text-primary hover:border-primary-foreground hover:shadow-md hover:shadow-black/20 active:scale-[0.98]'
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        type='button'
                        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileMenuOpen}
                        className='ml-auto rounded-lg p-2 text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground md:hidden'
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu drawer */}
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
                        className='mt-4 rounded-full border border-primary-foreground/30 bg-primary-foreground/[0.08] px-6 py-3 text-center text-xs font-semibold tracking-widest uppercase text-primary-foreground transition-all duration-200 hover:bg-primary-foreground hover:text-primary'
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
            className='group relative py-1 text-[13px] font-medium tracking-wide text-primary-foreground/75 transition-colors duration-200 hover:text-primary-foreground'
        >
            {label}
            <span className='absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-primary-foreground transition-all duration-300 ease-out group-hover:w-full' />
        </a>
    );
}

export default Header;