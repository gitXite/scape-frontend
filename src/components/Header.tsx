import { useState, useEffect, useRef } from 'react';

function Header() {
    const [showHeader, setShowHeader] = useState(false);
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
        }, 1000);
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowHeader(true);
            startHideTimeout();
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (e.clientY <= 50) {
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
            className={`flex h-auto w-full fixed place-content-center mix-blend-difference text-white bg-neutral-500/10 z-2 shadow-md backdrop-blur-md border-b-1 border-neutral-300/30 transition-transform duration-300 ${
                showHeader ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <nav className='container mx-auto px-6 py-4'>
                <div className='grid grid-cols-3 items-center max-sm:flex max-sm:justify-between'>
                    <div className='flex gap-5 md:gap-20 justify-center md:justify-end items-center max-sm:hidden'>
                        <a href='#home' className='group md:tracking-widest max-sm:text-sm'>
                            Home
                            <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300' />
                        </a>
                        <a href='#thescape' className='group md:tracking-widest max-sm:text-sm'>
                            The Scape
                            <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300' />
                        </a>
                    </div>

                    <div className='flex justify-start md:justify-center'>
                        <img
                            src='/images/scape-logo-trans.webp'
                            alt='Logo'
                            className='max-h-[70px] max-sm:w-[60%]'
                        />
                    </div>

                    <div className='flex gap-5 md:gap-20 justify-center md:justify-start items-center'>
                        <a href='#map' className='group md:tracking-widest max-sm:text-sm max-sm:hidden'>
                            Map
                            <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300' />
                        </a>
                        <a
                            href='/get-started'
                            className='inline-flex items-center px-4 py-2.5 md:px-8 md:py-3.5 md:tracking-widest max-sm:text-sm font-normal rounded-full shadow-sm bg-neutral-500/10 border-neutral-300/50 border hover:bg-neutral-100/90 active:bg-white text-white hover:text-neutral-900 transition-all'
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
