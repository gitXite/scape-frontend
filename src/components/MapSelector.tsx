import { useRef, useState, useEffect, useCallback } from 'react';
import { GoogleMap, LoadScript, Rectangle } from '@react-google-maps/api';
import { useInView } from 'react-intersection-observer';
import { Slider } from './ui/slider';
import ModelPreview from './modals/ModelPreview';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hoverCard';
import { Separator } from './ui/separator';
import { Spinner } from './ui/shadcn-io/spinner/spinner';
import { STLCache } from '@/utils/cache';
import { generateAndFetchSTL } from '@/utils/generateAndFetchSTL';
import { libraries } from '@/lib/googleMapLib';
import { parseSTL } from '@/utils/parseSTL';
import type { STLObject } from '@/types';

type LatLngLiteral = google.maps.LatLngLiteral;
type RectangleBounds = {
    north: number;
    south: number;
    east: number;
    west: number;
};
type MapSelectorProps = {
    mode: 'dummy' | 'real';
    className?: string;
    classNameChild?: string;
};

const BASE_SCALE = 1500;
const RATIO_HEIGHT = 19;
const RATIO_WIDTH = 14;
const RECT_HEIGHT = BASE_SCALE * RATIO_HEIGHT;
const RECT_WIDTH = BASE_SCALE * RATIO_WIDTH;

function MapSelector({ mode, className, classNameChild }: MapSelectorProps) {
    const [center, setCenter] = useState<LatLngLiteral>((): LatLngLiteral => {
        const coords = localStorage.getItem('coordinates');
        return coords
            ? {
                  lat: (JSON.parse(coords).north + JSON.parse(coords).south) / 2,
                  lng: (JSON.parse(coords).east + JSON.parse(coords).west) / 2,
              }
            : { lat: 60.39299, lng: 5.32415 };
    });
    const [rectangleBounds, setRectangleBounds] = useState<RectangleBounds | undefined>(undefined);
    const [sliderValues, setSliderValues] = useState(() => {
        const verticalScale = localStorage.getItem('verticalScale');
        const boxSize = localStorage.getItem('boxSize');
        return verticalScale && boxSize
            ? { verticalScale: [parseFloat(verticalScale)], boxSize: [parseInt(boxSize)] }
            : { verticalScale: [2.0], boxSize: [100] };
    });
    const [showModal, setShowModal] = useState(false);
    const mapRef = useRef<google.maps.Map | null>(null);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const [hasCoordinates, setHasCoordinates] = useState(!!localStorage.getItem('coordinates'));
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const rectangleRef = useRef<google.maps.Rectangle | null>(null);
    const liveBoundsRef = useRef<RectangleBounds | null>(null);

    const computeRectangleBounds = useCallback(
        (point: LatLngLiteral) => {
            const latLng = new google.maps.LatLng(point.lat, point.lng);
            const scale = sliderValues.boxSize[0] / 100;
            const north = google.maps.geometry.spherical.computeOffset(latLng, (RECT_HEIGHT / 2) * scale, 0).lat();
            const south = google.maps.geometry.spherical.computeOffset(latLng, (RECT_HEIGHT / 2) * scale, 180).lat();
            const east = google.maps.geometry.spherical.computeOffset(latLng, (RECT_WIDTH / 2) * scale, 90).lng();
            const west = google.maps.geometry.spherical.computeOffset(latLng, (RECT_WIDTH / 2) * scale, 270).lng();
            setRectangleBounds({ north, south, east, west });
        },
        [sliderValues.boxSize]
    );

    const onLoad = useCallback((map: google.maps.Map) => {
        mapRef.current = map;
        map.setMapTypeId('terrain');
        computeRectangleBounds(center);
    }, []);

    const handleMapClick = useCallback((e: google.maps.MapMouseEvent) => {
        if (!e.latLng) return;
        setCenter({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    }, []);

    const handleCapture = async (): Promise<STLObject | undefined> => {
        setIsLoading(true);
        if (rectangleBounds) {
            switch (mode) {
                case 'dummy':
                    toast.success('Coordinates captured in test mode', { description: 'Get started to enable preview.' });
                    setIsLoading(false);
                    break;
                case 'real':
                    if (
                        JSON.parse(localStorage.getItem('coordinates') || '{}').north !== rectangleBounds.north &&
                        JSON.parse(localStorage.getItem('coordinates') || '{}').west !== rectangleBounds.west ||
                        parseInt(localStorage.getItem('verticalScale')!) !== sliderValues.verticalScale[0]
                    ) {
                        localStorage.setItem('coordinates', JSON.stringify(rectangleBounds));
                        localStorage.setItem('verticalScale', sliderValues.verticalScale[0].toString());
                        localStorage.setItem('boxSize', sliderValues.boxSize[0].toString());
                        setTimeout(() => { window.dispatchEvent(new Event('coordinates-updated')); });
                    }
                    try {
                        const stlObject = await generateAndFetchSTL();
                        if (!stlObject) {
                            toast.error('Error generating STL', { description: 'Please try again later' });
                            STLCache.invalidate();
                            setIsLoading(false);
                            return;
                        }
                        toast.success('Your Scape has been generated!', { description: 'You can now preview your model, or proceed with customization.' });
                        return stlObject;
                    } catch (err: any) {
                        console.error(err.message);
                        toast.error(err.message, { description: 'Please try again later' });
                        STLCache.invalidate();
                    } finally {
                        setIsLoading(false);
                    }
                    break;
            }
        }
    };

    const resetMap = () => {
        if (!rectangleBounds) return;
        setCenter({ lat: 60.39299, lng: 5.32415 });
        setSliderValues({ verticalScale: [2.0], boxSize: [100] });
        if (mode === 'real') {
            localStorage.removeItem('coordinates');
            localStorage.removeItem('verticalScale');
            localStorage.removeItem('boxSize');
            localStorage.removeItem('selectedFrame');
            localStorage.removeItem('selectedPassePartout');
            localStorage.setItem('step', '0');
            setTimeout(() => {
                window.dispatchEvent(new Event('coordinates-updated'));
                window.dispatchEvent(new Event('frame-removed'));
                window.dispatchEvent(new Event('passe-partout-removed'));
            });
            STLCache.invalidate();
            toast.success('Your Scape has been reset', { description: 'Please capture your coordinates to proceed.' });
        } else {
            toast.success('Map has been reset');
        }
    };

    useEffect(() => {
        if (mapRef.current) computeRectangleBounds(center);
    }, [center, computeRectangleBounds, sliderValues.boxSize]);

    useEffect(() => {
        const handleStorageChange = () => {
            STLCache.invalidate();
            setHasCoordinates(!!localStorage.getItem('coordinates'));
        };
        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('coordinates-updated', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('coordinates-updated', handleStorageChange);
        };
    }, []);

    useEffect(() => {
        const handler = (event: PageTransitionEvent) => {
            if (event.persisted) window.location.reload();
        };
        window.addEventListener('pageshow', handler);
        return () => window.removeEventListener('pageshow', handler);
    }, []);

    const containerStyle: React.CSSProperties = {
        height: '100%',
        width: '100%',
        borderRadius: '8px',
    };

    return (
        <div
            id='map'
            className={`min-h-svh h-svh w-full bg-surface py-10 sm:py-16 ${className || ''}`}
        >
            <div
                ref={ref}
                className={`h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-opacity duration-700 ease-out ${classNameChild || ''} ${
                    inView ? 'opacity-100' : 'opacity-0'
                }`}
            >
                {/* Map container */}
                <div className='h-6/10 md:h-8/10 w-full rounded-lg overflow-hidden shadow-xl'>
                    <LoadScript
                        googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''}
                        libraries={libraries}
                    >
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={window.innerWidth > 640 ? 10 : 9}
                            onLoad={onLoad}
                            onClick={handleMapClick}
                            options={{
                                streetViewControl: false,
                                fullscreenControl: false,
                                cameraControl: false,
                            }}
                        >
                            {rectangleBounds && (
                                <Rectangle
                                    onLoad={(rect) => { rectangleRef.current = rect; }}
                                    bounds={rectangleBounds}
                                    options={{
                                        strokeColor: '#000000',
                                        strokeOpacity: 1,
                                        strokeWeight: 1,
                                        fillColor: '#000000',
                                        fillOpacity: 0.5,
                                        draggable: true,
                                        editable: false,
                                        clickable: true,
                                    }}
                                    onDrag={() => {
                                        const bounds = rectangleRef.current?.getBounds();
                                        if (!bounds) return;
                                        const ne = bounds.getNorthEast();
                                        const sw = bounds.getSouthWest();
                                        liveBoundsRef.current = {
                                            north: ne.lat(),
                                            east: ne.lng(),
                                            south: sw.lat(),
                                            west: sw.lng(),
                                        };
                                    }}
                                    onDragStart={() => {
                                        document.body.style.overflow = 'hidden';
                                        document.body.style.touchAction = 'none';
                                    }}
                                    onDragEnd={() => {
                                        if (!liveBoundsRef.current) return;
                                        document.body.style.overflow = '';
                                        document.body.style.touchAction = '';
                                        setRectangleBounds(liveBoundsRef.current);
                                        setCenter({
                                            lat: (liveBoundsRef.current.north + liveBoundsRef.current.south) / 2,
                                            lng: (liveBoundsRef.current.east + liveBoundsRef.current.west) / 2,
                                        });
                                    }}
                                />
                            )}
                        </GoogleMap>
                    </LoadScript>
                </div>

                {/* Controls */}
                <div className='mt-6 sm:mt-8'>
                    {/* Sliders row - stack on mobile */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 max-w-4xl mx-auto mb-6'>
                        <div className='flex flex-col items-center group'>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <p className='text-sm text-muted-foreground font-normal pb-3 group-hover:-translate-y-0.5 cursor-default transition-all duration-200'>
                                        Box Size
                                    </p>
                                </HoverCardTrigger>
                                <HoverCardContent className='text-center text-sm'>
                                    <p className='pb-2'>Adjust the slider to set the desired area</p>
                                    <Separator orientation='horizontal' />
                                    <p className='pt-2'>Default: 100%</p>
                                </HoverCardContent>
                            </HoverCard>
                            <Slider
                                min={40}
                                max={200}
                                defaultValue={[100]}
                                value={sliderValues.boxSize}
                                onValueChange={(value) => setSliderValues({ ...sliderValues, boxSize: value })}
                                className='w-full md:w-1/2'
                            />
                            <p className='text-xs text-muted-foreground font-normal pt-2 group-hover:text-foreground/80 transition-colors cursor-default'>
                                {sliderValues.boxSize[0]}%
                            </p>
                        </div>

                        <div className='flex flex-col items-center group'>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <p className='text-sm text-muted-foreground font-normal pb-3 group-hover:-translate-y-0.5 cursor-default transition-all duration-200'>
                                        Vertical Scale
                                    </p>
                                </HoverCardTrigger>
                                <HoverCardContent className='text-center text-sm'>
                                    <p className='pb-2'>Adjust the slider to set the desired vertical exaggeration</p>
                                    <Separator orientation='horizontal' />
                                    <p className='pt-2'>Default: 2.0</p>
                                </HoverCardContent>
                            </HoverCard>
                            <Slider
                                min={1}
                                max={4}
                                step={0.1}
                                defaultValue={[2.0]}
                                value={sliderValues.verticalScale}
                                onValueChange={(value) => setSliderValues({ ...sliderValues, verticalScale: value })}
                                className='w-full md:w-1/2'
                            />
                            <p className='text-xs text-muted-foreground font-normal pt-2 group-hover:text-foreground/80 transition-colors cursor-default'>
                                {sliderValues.verticalScale[0].toFixed(1)}
                            </p>
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className='flex flex-row items-center justify-center gap-3 sm:gap-6 mt-10 sm:mt-0'>
                        <button
                            onClick={() => setShowModal(true)}
                            disabled={mode === 'dummy' || !hasCoordinates || isLoading || !STLCache.objectUrl}
                            className='text-sm text-muted-foreground font-normal hover:text-foreground disabled:opacity-40 disabled:cursor-default transition-all cursor-pointer border border-muted-foreground/30 w-19 px-3 py-1 rounded-full duration-150'
                        >
                            Preview
                        </button>
                        <Button
                            className='px-8 py-6 sm:px-10 sm:py-7 min-w-[200px] sm:min-w-[240px] bg-primary text-primary-foreground border border-border hover:bg-primary-foreground hover:text-secondary-foreground rounded-full cursor-pointer text-sm tracking-wide transition-all duration-300'
                            disabled={isLoading}
                            onClick={() => handleCapture().then((stlObject) => stlObject && parseSTL(stlObject.buffer!))}
                        >
                            {isLoading ? <Spinner variant={'ellipsis'} /> : 'Capture & Generate Terrain'}
                        </Button>
                        <button
                            className='text-sm text-muted-foreground font-normal border border-transparent rounded-full hover:border-muted-foreground/30 hover:text-foreground transition-all cursor-pointer w-19 px-3 py-1 duration-150'
                            onClick={resetMap}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>

            {showModal && (
                <ModelPreview
                    showModal={showModal}
                    setShowModal={setShowModal}
                    className='drop-shadow-2xl'
                />
            )}
        </div>
    );
}

export default MapSelector;
