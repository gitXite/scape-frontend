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

        window.addEventListener('scroll', handleScroll);
        return () => {
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
            className={`flex h-auto w-full p-5 fixed mix-blend-difference bg-neutral-500/10 z-1 drop-shadow-2xl place-content-center backdrop-blur-md border-b-1 border-neutral-300 transition-transform duration-300 ${
                showHeader ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <nav className='flex place-items-center'>
                <a href='#welcome' className='fixed left-3/8'>
                    Home
                </a>
                <a href='#about' className='fixed right-3/8'>
                    About
                </a>
                <div className='text-4xl text-neutral-100 mix-blend-difference'>
                    MD // DESIGN
                </div>
                <a href='#map' className='fixed right-1/3'>
                    Map
                </a>
            </nav>
        </header>
    );
}

export default Header;
