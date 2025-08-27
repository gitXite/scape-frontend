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
        }

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
            className={`flex h-auto w-full p-5 fixed mix-blend-difference bg-neutral-500/10 z-2 drop-shadow-2xl place-content-center backdrop-blur-md border-b-1 border-neutral-300 transition-transform duration-300 ${
                showHeader ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <nav className='flex place-items-center'>
                <a href='#home' className='group fixed left-3/9 transition duration-300'>
                    Home
                    <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                </a>
                <a href='#about' className='group fixed right-3/9 transition duration-300'>
                    About
                    <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                </a>
                <div className='text-4xl text-neutral-100 mix-blend-difference'>
                    T e r r a n u o v o
                </div>
                <a href='#map' className='group fixed right-3/11 transition duration-300'>
                    Map
                    <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                </a>
            </nav>
        </header>
    );
}

export default Header;
