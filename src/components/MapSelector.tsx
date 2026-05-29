import { useRef, useState, useEffect, useCallback } from 'react';
import { GoogleMap, LoadScript, Rectangle } from '@react-google-maps/api';
import { useInView } from 'react-intersection-observer';
import { Slider } from './ui/slider';
import ModelPreview from './modals/ModelPreview';
import { toast } from 'sonner';
import { Button } from './ui/button';
// import { Switch } from './ui/switch';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hoverCard';
import { Spinner } from './ui/shadcn-io/spinner/spinner';
import { STLCache } from '@/utils/cache';
import { generateAndFetchSTL } from '@/utils/generateAndFetchSTL';
import { libraries } from '@/lib/googleMapLib';
import { parseSTL } from '@/utils/parseSTL';
import type { STLObject } from '@/types';
import { /*Box,*/ ChevronsUp, /*Frame*/ } from 'lucide-react';

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
                  lat:
                      (JSON.parse(coords).north + JSON.parse(coords).south) / 2,
                  lng: (JSON.parse(coords).east + JSON.parse(coords).west) / 2,
              }
            : { lat: 60.39299, lng: 5.32415 };
    });
    const [rectangleBounds, setRectangleBounds] = useState<
        RectangleBounds | undefined
    >(undefined);
    const [sliderValues, setSliderValues] = useState(() => {
        const verticalScale = localStorage.getItem('verticalScale');
        const boxSize = localStorage.getItem('boxSize');
        return verticalScale && boxSize
            ? {
                  verticalScale: [parseFloat(verticalScale)],
                  boxSize: [parseInt(boxSize)],
              }
            : { verticalScale: [2.0], boxSize: [100] };
    });
    const [showModal, setShowModal] = useState(false);
    const mapRef = useRef<google.maps.Map | null>(null);
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const isDraggingRef = useRef(false);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const [hasCoordinates, setHasCoordinates] = useState(
        !!localStorage.getItem('coordinates'),
    );
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const rectangleRef = useRef<google.maps.Rectangle | null>(null);
    const liveBoundsRef = useRef<RectangleBounds | null>(null);
    const [controlsOpen, setControlsOpen] = useState(false);
    const [isSliderDrag, setIsSliderDrag] = useState(false);
    const isMobile = window.innerWidth < 640;
    // const [isToggled, setIsToggled] = useState(false);

    const computeRectangleBounds = useCallback(
        (point: LatLngLiteral) => {
            const latLng = new google.maps.LatLng(point.lat, point.lng);
            const scale = sliderValues.boxSize[0] / 100;
            const north = google.maps.geometry.spherical
                .computeOffset(latLng, (RECT_HEIGHT / 2) * scale, 0)
                .lat();
            const south = google.maps.geometry.spherical
                .computeOffset(latLng, (RECT_HEIGHT / 2) * scale, 180)
                .lat();
            const east = google.maps.geometry.spherical
                .computeOffset(latLng, (RECT_WIDTH / 2) * scale, 90)
                .lng();
            const west = google.maps.geometry.spherical
                .computeOffset(latLng, (RECT_WIDTH / 2) * scale, 270)
                .lng();
            setRectangleBounds({ north, south, east, west });
        },
        [sliderValues.boxSize],
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
                    toast.success('Coordinates captured in test mode', {
                        description: 'Get started to enable preview.',
                    });
                    setIsLoading(false);
                    break;
                case 'real':
                    if (
                        (JSON.parse(localStorage.getItem('coordinates') || '{}')
                            .north !== rectangleBounds.north &&
                            JSON.parse(
                                localStorage.getItem('coordinates') || '{}',
                            ).west !== rectangleBounds.west) ||
                        parseInt(localStorage.getItem('verticalScale')!) !==
                            sliderValues.verticalScale[0]
                    ) {
                        localStorage.setItem(
                            'coordinates',
                            JSON.stringify(rectangleBounds),
                        );
                        localStorage.setItem(
                            'verticalScale',
                            sliderValues.verticalScale[0].toString(),
                        );
                        localStorage.setItem(
                            'boxSize',
                            sliderValues.boxSize[0].toString(),
                        );
                        setTimeout(() => {
                            window.dispatchEvent(
                                new Event('coordinates-updated'),
                            );
                        });
                    }
                    try {
                        const stlObject = await generateAndFetchSTL();
                        if (!stlObject) {
                            toast.error('Error generating STL', {
                                description: 'Please try again later',
                            });
                            STLCache.invalidate();
                            setIsLoading(false);
                            return;
                        }
                        toast.success('Your Scape has been generated!', {
                            description:
                                'You can now preview your model, or proceed with customization.',
                        });
                        return stlObject;
                    } catch (err: any) {
                        console.error(err.message);
                        toast.error(err.message, {
                            description: 'Please try again later',
                        });
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
        setControlsOpen(false);
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
            toast.success('Your Scape has been reset', {
                description: 'Please capture your coordinates to proceed.',
            });
        } else {
            toast.success('Map has been reset');
        }
    };

    useEffect(() => {
        const el = mapContainerRef.current;
        if (!el) return;

        const preventScroll = (e: TouchEvent) => {
            if (isDraggingRef.current) {
                e.preventDefault();
            }
        };

        el.addEventListener('touchmove', preventScroll, {
            passive: false,
        });

        return () => {
            el.removeEventListener('touchmove', preventScroll);
        };
    }, []);

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
            window.removeEventListener(
                'coordinates-updated',
                handleStorageChange,
            );
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
    };

    return (
        <div id='map' className={`w-full bg-surface py-5 ${className || ''}`}>
            <div
                ref={ref}
                className={`max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 transition-all duration-700 ease-out ${
                    classNameChild || ''
                } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
                {/* Main map card */}
                <div className='relative'>
                    <div
                        className='h-[76vh] sm:h-[76vh] w-full rounded-2xl overflow-hidden border border-border/50 shadow-md overscroll-none touch-none bg-card'
                        ref={mapContainerRef}
                    >
                        <LoadScript
                            googleMapsApiKey={
                                import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''
                            }
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
                                    maxZoom: window.innerWidth > 640 ? 11 : 10,
                                    gestureHandling: 'greedy',
                                }}
                            >
                                {rectangleBounds && (
                                    <Rectangle
                                        onLoad={(rect) => {
                                            rectangleRef.current = rect;
                                        }}
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
                                            const bounds =
                                                rectangleRef.current?.getBounds();
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
                                            isDraggingRef.current = true;
                                        }}
                                        onDragEnd={() => {
                                            if (!liveBoundsRef.current) return;

                                            isDraggingRef.current = false;

                                            setRectangleBounds(
                                                liveBoundsRef.current,
                                            );

                                            setCenter({
                                                lat:
                                                    (liveBoundsRef.current
                                                        .north +
                                                        liveBoundsRef.current
                                                            .south) /
                                                    2,
                                                lng:
                                                    (liveBoundsRef.current
                                                        .east +
                                                        liveBoundsRef.current
                                                            .west) /
                                                    2,
                                            });
                                        }}
                                    />
                                )}
                            </GoogleMap>
                        </LoadScript>
                    </div>

                    {/* Floating controls panel */}
                    <div
                        onMouseEnter={() => setControlsOpen(true)}
                        onMouseLeave={() => setControlsOpen(false)}
                        className='
                            absolute
                            bottom-0
                            sm:bottom-8
                            left-0
                            right-0
                            sm:left-8
                            z-10
                            max-sm:w-full
                            sm:max-w-lg
                        '
                    >
                        <div
                            className={`
                                rounded-xl
                                border
                                border-background/60
                                sm:border-border/50
                                bg-background/50
                                sm:bg-background/20
                                backdrop-blur-sm
                                sm:backdrop-blur-md
                                shadow-xl
                                overflow-hidden
                                transition-opacity
                                duration-200

                                ${isSliderDrag ? 'opacity-0' : 'opacity-100'}
                            `}
                        >
                            {/* Mobile expand toggle */}
                            <button
                                onClick={() => setControlsOpen(!controlsOpen)}
                                className='
                                    w-full
                                    flex
                                    items-center
                                    justify-between
                                    px-5
                                    pt-4
                                    max-sm:pb-0
                                    text-left
                                '
                            >
                                <div>
                                    <p className='text-sm font-medium text-foreground'>
                                        Adjust Controls
                                    </p>

                                    <p className='hidden sm:block text-xs text-foreground/70 mt-1'>
                                        Terrain settings
                                    </p>
                                </div>

                                <ChevronsUp
                                    size={18}
                                    className={`
                                        text-foreground
                                        transition-all
                                        duration-300
                                        ease-in-out
                                        ${controlsOpen ? 'rotate-180' : ''}
                                    `}
                                />
                            </button>

                            {/* Expandable controls */}
                            <div
                                className={`
                                    overflow-hidden
                                    opacity-0
                                    transition-all
                                    duration-300
                                    ease-in-out

                                    ${controlsOpen ? 'max-h-[600px] opacity-100' : 'max-h-0'}
                                `}
                            >
                                <div className='px-5 pb-0 sm:pb-0 pt-4 sm:pt-4'>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12'>
                                        {/* Box size */}
                                        <div className='space-y-2 sm:space-y-3'>
                                            <div className='flex items-center justify-between gap-4'>
                                                <HoverCard>
                                                    <HoverCardTrigger>
                                                        <div className='cursor-default text-left'>
                                                            <p className='text-sm font-medium text-foreground'>
                                                                Capture Size
                                                            </p>

                                                            <p className='hidden sm:block text-xs text-foreground/70 mt-1'>
                                                                Controls terrain
                                                                coverage
                                                            </p>
                                                        </div>
                                                    </HoverCardTrigger>

                                                    <HoverCardContent className='text-sm text-left'>
                                                        Adjust the captured
                                                        terrain coverage.
                                                        Default: 100%.
                                                    </HoverCardContent>
                                                </HoverCard>

                                                <div className='text-sm font-medium text-foreground/80 tabular-nums'>
                                                    {sliderValues.boxSize[0]}%
                                                </div>
                                            </div>

                                            <Slider
                                                min={40}
                                                max={200}
                                                defaultValue={[100]}
                                                value={sliderValues.boxSize}
                                                onValueChange={(value) =>
                                                    setSliderValues({
                                                        ...sliderValues,
                                                        boxSize: value,
                                                    })
                                                }
                                                onPointerDown={() => {
                                                    if (window.innerWidth < 640)
                                                        setIsSliderDrag(true);
                                                }}
                                                onPointerUp={() => {
                                                    if (window.innerWidth < 640)
                                                        setIsSliderDrag(false);
                                                }}
                                                className='w-full'
                                            />

                                            <div className='flex justify-between text-xs text-foreground/60'>
                                                <span>Smaller</span>
                                                <span>Larger</span>
                                            </div>
                                        </div>

                                        {/* Terrain height */}
                                        <div className='space-y-2 sm:space-y-3'>
                                            <div className='flex items-center justify-between gap-4'>
                                                <HoverCard>
                                                    <HoverCardTrigger>
                                                        <div className='cursor-default text-left'>
                                                            <p className='text-sm font-medium text-foreground'>
                                                                Terrain Height
                                                            </p>

                                                            <p className='hidden sm:block text-xs text-foreground/70 mt-1'>
                                                                Vertical
                                                                exaggeration
                                                            </p>
                                                        </div>
                                                    </HoverCardTrigger>

                                                    <HoverCardContent className='text-sm text-left'>
                                                        Increase or decrease
                                                        terrain height. Default:
                                                        2.0x
                                                    </HoverCardContent>
                                                </HoverCard>

                                                <div className='text-sm font-medium text-foreground/80 tabular-nums'>
                                                    {sliderValues.verticalScale[0].toFixed(
                                                        1,
                                                    )}
                                                    x
                                                </div>
                                            </div>

                                            <Slider
                                                min={1}
                                                max={4}
                                                step={0.1}
                                                defaultValue={[2.0]}
                                                value={
                                                    sliderValues.verticalScale
                                                }
                                                onValueChange={(value) =>
                                                    setSliderValues({
                                                        ...sliderValues,
                                                        verticalScale: value,
                                                    })
                                                }
                                                className='w-full'
                                            />

                                            <div className='flex justify-between text-xs text-foreground/60'>
                                                <span>Subtle</span>
                                                <span>Dramatic</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={`flex items-center justify-between pt-5 transition-all duration-initial ease-in-out ${controlsOpen ? 'opacity-100' : 'opacity-0'}`}
                                    >
                                        {isMobile && (
                                            <Button
                                                onClick={resetMap}
                                                className={`
                                                    h-9
                                                    px-7
                                                    rounded-full
                                                    text-sm
                                                    shadow-sm
                                                    transition-color
                                                    cursor-pointer
                                                `}
                                            >
                                                Reset
                                            </Button>
                                        )}
                                        {/* <div className='flex items-center gap-2 sm:gap-3'>
                                            <div
                                                className={`flex items-center gap-1 transition-colors ${
                                                    !isToggled
                                                        ? 'text-foreground'
                                                        : 'text-muted-foreground'
                                                }`}
                                            >
                                                <Frame size={16} />
                                                <span className='text-xs font-medium'>
                                                    Wall Mount
                                                </span>
                                            </div>

                                            <Switch
                                                id='model-type'
                                                className='transform-gpu'
                                                checked={isToggled}
                                                onCheckedChange={setIsToggled}
                                            />

                                            <div
                                                className={`flex items-center gap-1 transition-colors ${
                                                    isToggled
                                                        ? 'text-foreground'
                                                        : 'text-muted-foreground'
                                                }`}
                                            >
                                                <Box size={16} />
                                                <span className='text-xs font-medium'>
                                                    Table Display
                                                </span>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div
                                className={`
                                    p-4 ${controlsOpen ? 'pt-1 sm:pt-4' : 'pt-4'}
                                    flex
                                    flex-row-reverse
                                    sm:flex-row
                                    gap-3
                                    items-end
                                    justify-center
                                    sm:items-center
                                    sm:justify-between
                                    transition-all
                                `}
                            >
                                {/* Secondary buttons */}
                                <div
                                    className={`relative flex ease-in-out duration-300 ${isMobile ? `flex-col-reverse gap-2` : 'flex-row gap-3'} order-2 sm:order-1`}
                                >
                                    <Button
                                        onClick={() => setShowModal(true)}
                                        disabled={
                                            mode === 'dummy' ||
                                            !hasCoordinates ||
                                            isLoading ||
                                            !STLCache.objectUrl
                                        }
                                        className='
                                            sm:h-10
                                            h-10
                                            px-8
                                            rounded-full
                                            text-sm
                                            shadow-sm
                                            font-medium
                                            transition-color
                                            cursor-pointer
                                            hover:bg-background
                                            hover:text-foreground
                                            disabled:opacity-40
                                            disabled:pointer-events-none
                                        '
                                    >
                                        Preview
                                    </Button>

                                    {!isMobile && (
                                        <Button
                                            onClick={resetMap}
                                            className='
                                                sm:h-10
                                                h-10
                                                px-8
                                                rounded-full
                                                text-sm
                                                shadow-sm
                                                transition-color
                                                cursor-pointer
                                                hover:bg-background
                                                hover:text-foreground
                                            '
                                        >
                                            Reset
                                        </Button>
                                    )}
                                </div>

                                {/* Main CTA */}
                                <Button
                                    className='
                                        order-1
                                        sm:order-2
                                        h-12
                                        px-8
                                        sm:px-10
                                        rounded-full
                                        text-sm
                                        font-medium
                                        tracking-wide
                                        shadow-sm
                                        transition-color
                                        duration-150
                                        min-w-[220px]
                                        cursor-pointer
                                        hover:bg-background
                                        hover:text-foreground
                                    '
                                    disabled={isLoading}
                                    onClick={() =>
                                        handleCapture().then(
                                            (stlObject) =>
                                                stlObject &&
                                                parseSTL(stlObject.buffer!),
                                        )
                                    }
                                >
                                    {isLoading ? (
                                        <Spinner variant={'ellipsis'} />
                                    ) : (
                                        'Generate Scape'
                                    )}
                                </Button>
                            </div>
                        </div>
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
