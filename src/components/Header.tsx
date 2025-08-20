import { useState, useEffect } from 'react';


function Header() {
    const [showHeader, setShowHeader] = useState(false)
    const [ishovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        const handleScroll = () => {
            setShowHeader(true);

            clearTimeout(timeout)
            if (!ishovered) {
                timeout = setTimeout(() => {
                    setShowHeader(false);
                }, 1000);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeout);
        };
    }, []);


    return (
        <header onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`flex h-auto w-full p-5 fixed mix-blend-difference bg-neutral-500/10 z-1 drop-shadow-2xl place-content-center backdrop-blur-sm border-b-1 border-neutral-300 transition-transform duration-300 ${
            showHeader || ishovered ? 'translate-y-0' : '-translate-y-full'
            }`}>
            <div className='text-4xl text-neutral-100 mix-blend-difference'>MD // DESIGN</div>
        </header>
    );
}


export default Header;