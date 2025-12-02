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

type LatLngLiteral = google.maps.LatLngLiteral;
type RectangleBounds = {
    north: number;
    south: number;
    east: number;
    west: number;
};
type MapSelectorProps = {
    mode: 'dummy' | 'real';
};

const BASE_SCALE = 1500;
const RATIO_HEIGHT = 19;
const RATIO_WIDTH = 14;
const RECT_HEIGHT = BASE_SCALE * RATIO_HEIGHT;
const RECT_WIDTH = BASE_SCALE * RATIO_WIDTH;

const containerStyle: React.CSSProperties = {
    height: '80%',
    width: '80%',
    boxShadow: '5px 5px 15px 2px rgba(0, 0, 0, 0.3)',
    borderRadius: '5px',
};

const libraries: 'geometry'[] = ['geometry'];

function MapSelector({ mode }: MapSelectorProps) {
    const [center, setCenter] = useState<LatLngLiteral>((): LatLngLiteral => {
        const coords = localStorage.getItem('coordinates');
        return coords
            ? {
                  lat:
                      (JSON.parse(coords).north + JSON.parse(coords).south) / 2,
                  lng: (JSON.parse(coords).east + JSON.parse(coords).west) / 2,
              }
            : {
                  lat: 60.39299,
                  lng: 5.32415,
              };
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
            : {
                  verticalScale: [2.0],
                  boxSize: [100],
              };
    });
    const [showModal, setShowModal] = useState(false);
    const mapRef = useRef<google.maps.Map | null>(null);
    const { ref: ref, inView: inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [hasCoordinates, setHasCoordinates] = useState(
        !!localStorage.getItem('coordinates')
    );
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onLoad = useCallback((map: google.maps.Map) => {
        mapRef.current = map;
        map.setMapTypeId('terrain');
        computeRectangleBounds(center);
    }, []);

    const computeRectangleBounds = useCallback(
        (point: LatLngLiteral) => {
            const latLng = new google.maps.LatLng(point.lat, point.lng);

            const north = google.maps.geometry.spherical
                .computeOffset(
                    latLng,
                    (RECT_HEIGHT / 2) * (sliderValues.boxSize[0] / 100),
                    0
                )
                .lat();
            const south = google.maps.geometry.spherical
                .computeOffset(
                    latLng,
                    (RECT_HEIGHT / 2) * (sliderValues.boxSize[0] / 100),
                    180
                )
                .lat();
            const east = google.maps.geometry.spherical
                .computeOffset(
                    latLng,
                    (RECT_WIDTH / 2) * (sliderValues.boxSize[0] / 100),
                    90
                )
                .lng();
            const west = google.maps.geometry.spherical
                .computeOffset(
                    latLng,
                    (RECT_WIDTH / 2) * (sliderValues.boxSize[0] / 100),
                    270
                )
                .lng();

            setRectangleBounds({ north, south, east, west });
        },
        [sliderValues.boxSize]
    );

    const handleMapClick = useCallback((e: google.maps.MapMouseEvent) => {
        if (!e.latLng) return;
        const clickedPoint = { lat: e.latLng.lat(), lng: e.latLng.lng() };
        setCenter(clickedPoint);
    }, []);

    const handleCapture = () => {
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
                    localStorage.setItem(
                        'coordinates',
                        JSON.stringify(rectangleBounds)
                    );
                    localStorage.setItem(
                        'verticalScale',
                        sliderValues.verticalScale[0].toString()
                    );
                    localStorage.setItem(
                        'boxSize',
                        sliderValues.boxSize[0].toString()
                    );
                    setTimeout(() => {
                        window.dispatchEvent(new Event('coordinates-updated'));
                    });
                    toast.success('Coordinates captured!', {
                        description:
                            'You can now proceed or preview your model.',
                    });
                    setIsLoading(false);
                    break;
            }
        }
    };

    const resetMap = () => {
        if (rectangleBounds) {
            switch (mode) {
                case 'dummy':
                    setCenter({ lat: 60.39299, lng: 5.32415 });
                    setSliderValues({
                        verticalScale: [2.0],
                        boxSize: [100],
                    });
                    toast.success('Map has been reset');
                    break;
                case 'real':
                    setCenter({ lat: 60.39299, lng: 5.32415 });
                    setSliderValues({
                        verticalScale: [2.0],
                        boxSize: [100],
                    });
                    localStorage.removeItem('coordinates');
                    localStorage.removeItem('verticalScale');
                    localStorage.removeItem('boxSize');
                    localStorage.removeItem('selectedFrame');
                    localStorage.removeItem('selectedPassePartout');
                    setTimeout(() => {
                        window.dispatchEvent(new Event('coordinates-updated'));
                        window.dispatchEvent(new Event('frame-removed'));
                        window.dispatchEvent(
                            new Event('passe-partout-removed')
                        );
                    });
                    toast.success('Your Scape has been reset', {
                        description:
                            'Please capture your coordinates to proceed.',
                    });
                    break;
            }
        }
    };

    useEffect(() => {
        if (mapRef.current) computeRectangleBounds(center);
    }, [center, computeRectangleBounds, sliderValues.boxSize]);

    useEffect(() => {
        const handleStorageChange = () => {
            setHasCoordinates(!!localStorage.getItem('coordinates'));
        };

        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('coordinates-updated', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener(
                'coordinates-updated',
                handleStorageChange
            );
        };
    }, []);

    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            window.location.reload();
        }
    });

    return (
        <div
            id='map'
            className='flex flex-col h-full w-full max-sm:relative bg-neutral-100 items-center max-sm:place-content-center pt-20'
        >
            <div
                ref={ref}
                className={`flex flex-col h-full max-sm:h-4/5 max-lg:h-9/10 w-full items-center transition-opacity duration-600 ease-in max-sm:mb-20 ${
                    inView ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <LoadScript
                    googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
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
                                bounds={rectangleBounds}
                                options={{
                                    strokeColor: '#000000',
                                    strokeOpacity: 1,
                                    strokeWeight: 1,
                                    fillColor: '#000000',
                                    fillOpacity: 0.5,
                                    draggable: false,
                                    editable: false,
                                    clickable: false,
                                }}
                            />
                        )}
                    </GoogleMap>
                </LoadScript>

                <div className='flex w-3/5 max-2xl:w-3/4 max-lg:w-full place-items-center self-center justify-evenly'>
                    <div className='flex flex-col w-40 relative max-sm:absolute max-sm:bottom-10 min-sm:top-4 max-sm:right-4/7 items-center group'>
                        <HoverCard>
                            <HoverCardTrigger>
                                <p className='text-neutral-600 pb-3 group-hover:-translate-y-1 cursor-default transition-all duration-200'>
                                    Box Size
                                </p>
                            </HoverCardTrigger>
                            <HoverCardContent className='text-center'>
                                <p className='pb-2'>
                                    Adjust the slider to set the desired area
                                </p>
                                <Separator orientation='horizontal' />
                                <p className='pt-2'>Default: 100%</p>
                            </HoverCardContent>
                        </HoverCard>
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
                            className='w-full'
                        />
                        <p className='text-neutral-400 pt-2 transition-colors duration-200 group-hover:text-neutral-600 cursor-default'>
                            {sliderValues.boxSize[0]}%
                        </p>
                    </div>
                    <button
                        onClick={() => setShowModal(true)}
                        disabled={mode === 'dummy' || !hasCoordinates}
                        className='flex w-[55px] place-content-center font-normal place-items-end mt-8 transition-colors duration-100 text-neutral-600 hover:text-neutral-950 active:text-neutral-600 cursor-pointer disabled:cursor-default disabled:text-neutral-600/50'
                    >
                        Preview
                    </button>
                    <Button
                        className='mt-8 py-8 pl-10 pr-10 min-w-60 bg-neutral-900 border-neutral-300 border-1 transition-all hover:bg-neutral-200 active:bg-white text-neutral-100 hover:text-neutral-900 rounded-full cursor-pointer text-md tracking-wide'
                        disabled={isLoading}
                        onClick={handleCapture}
                    >
                        {isLoading ? <Spinner variant={'ellipsis'} /> : 'Capture Coordinates'}
                    </Button>
                    <button
                        className='flex w-[55px] place-content-center font-normal place-items-end mt-8 transition-colors duration-100 text-neutral-600 hover:text-neutral-950 hover:cursor-pointer active:text-neutral-600'
                        onClick={resetMap}
                    >
                        Reset
                    </button>
                    <div className='flex flex-col w-40 relative max-sm:absolute max-sm:bottom-10 min-sm:top-4 max-sm:left-4/7 items-center group'>
                        <HoverCard>
                            <HoverCardTrigger>
                                <p className='text-neutral-600 pb-3 group-hover:-translate-y-1 cursor-default transition-all duration-200'>
                                    Vertical Scale
                                </p>
                            </HoverCardTrigger>
                            <HoverCardContent className='text-center'>
                                <p className='pb-2'>
                                    Adjust the slider to set the desired
                                    vertical exaggeration
                                </p>
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
                            onValueChange={(value) =>
                                setSliderValues({
                                    ...sliderValues,
                                    verticalScale: value,
                                })
                            }
                            className='w-full'
                        />
                        <p className='text-neutral-400 pt-2 transition-colors duration-200 group-hover:text-neutral-600 cursor-default'>
                            {sliderValues.verticalScale[0].toFixed(1)}
                        </p>
                    </div>
                </div>
            </div>
            {showModal && (
                <ModelPreview
                    showModal={showModal}
                    setShowModal={setShowModal}
                    className='drop-shadow-2xl drop-shadow-black/50'
                />
            )}
        </div>
    );
}

export default MapSelector;
