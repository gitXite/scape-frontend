import { useState, useEffect } from 'react';


function Header() {
    const [showHeader, setShowHeader] = useState(false)

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        const handleScroll = () => {
            setShowHeader(true);

            clearTimeout(timeout)
            timeout = setTimeout(() => {
                setShowHeader(false);
            }, 1000);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeout);
        };
    }, []);


    return (
        <header className={`flex h-auto w-full p-5 fixed bg-neutral-500/10 z-1 drop-shadow-2xl place-content-center backdrop-blur-sm border-b-1 border-neutral-300 transition-transform duration-300 ${
            showHeader ? 'translate-y-0' : '-translate-y-full'
            }`}>
            <div className='text-4xl text-neutral-900'>MD // DESIGN</div>
        </header>
    );
}


export default Header;