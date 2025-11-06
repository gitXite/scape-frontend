import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';
import productStraight from '@/assets/product-image-straight.png';


function Gallery() {
    return (
        <div className='flex flex-col min-h-full w-full bg-neutral-100'>
            <BackButton page='home' />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 p-20 px-30 min-h-full w-full bg-neutral-100'>
                <div>
                    <img
                        src={productStraight}
                        className='rounded-sm shadow-md hover:scale-105 transition-transform duration-300'
                    />
                </div>
                <div>
                    <img
                        src={productStraight}
                        className='rounded-sm shadow-md hover:scale-105 transition-transform duration-300'
                    />
                </div>
                <div>
                    <img
                        src={productStraight}
                        className='rounded-sm shadow-md hover:scale-105 transition-transform duration-300'
                    />
                </div>
                <div>
                    <img
                        src={productStraight}
                        className='rounded-sm shadow-md hover:scale-105 transition-transform duration-300'
                    />
                </div>
                <div>
                    <img
                        src={productStraight}
                        className='rounded-sm shadow-md hover:scale-105 transition-transform duration-300'
                    />
                </div>
                <div>
                    <img
                        src={productStraight}
                        className='rounded-sm shadow-md hover:scale-105 transition-transform duration-300'
                    />
                </div>
                <div>
                    <img
                        src={productStraight}
                        className='rounded-sm shadow-md hover:scale-105 transition-transform duration-300'
                    />
                </div>
                <div>
                    <img
                        src={productStraight}
                        className='rounded-sm shadow-md hover:scale-105 transition-transform duration-300'
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Gallery;
