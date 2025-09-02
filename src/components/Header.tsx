import { useState, useEffect, useRef } from 'react';
import Logo from '@/assets/scape-logo.png';

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
            className={`flex h-auto w-full p-4 fixed mix-blend-difference bg-neutral-500/10 z-2 drop-shadow-2xl place-content-center backdrop-blur-md border-b-1 border-neutral-300 transition-transform duration-300 ${
                showHeader ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <nav className='flex place-items-center'>
                <a href='#home' className='group fixed left-[25%] transition duration-300 tracking-widest'>
                    Home
                    <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                </a>
                <a href='#thescape' className='group fixed left-[32%] transition duration-300 tracking-widest'>
                    The Scape
                    <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                </a>
                <div className='flex justify-center'>
                    <img src={Logo} alt="Logo" className='w-[20%]'/>
                </div>
                <a href='/get-started' className='group fixed right-[32%] transition duration-300 tracking-widest'>
                    Get Started
                    <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                </a>
                <a href='#map' className='group fixed right-[25%] transition duration-300 tracking-widest'>
                    Map
                    <span className='block max-w-0 group-hover:max-w-full transition-all duration-100 h-0.5 bg-neutral-300'></span>
                </a>
            </nav>
        </header>
    );
}

export default Header;
