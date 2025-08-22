import { useRef, useState, useEffect, useCallback } from 'react';
import { GoogleMap, LoadScript, Rectangle } from '@react-google-maps/api';
import { useInView } from 'react-intersection-observer';

type LatLngLiteral = google.maps.LatLngLiteral;
type RectangleBounds = {
    north: number;
    south: number;
    east: number;
    west: number;
};

// placeholder, to scale with zoom
const RECT_HEIGHT_SCALE = 12000 * 2; // in meters
const RECT_WIDTH_SCALE = 9500 * 2; // in meters

const containerStyle: React.CSSProperties = {
    height: '80%',
    width: '80%',
    boxShadow: '5px 5px 15px 2px rgba(0, 0, 0, 0.3)',
    borderRadius: '5px',
};

const libraries: 'geometry'[] = ['geometry'];


function MapSelector() {
    const [center, setCenter] = useState<LatLngLiteral>({
        lat: 60.39299,
        lng: 5.32415,
    });
    const [rectangleBounds, setRectangleBounds] = useState<RectangleBounds | undefined>(undefined);
    const mapRef = useRef<google.maps.Map | null>(null);
    const { ref: ref, inView: inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const onLoad = useCallback((map: google.maps.Map) => {
        mapRef.current = map;
        computeRectangleBounds(center);
    }, []);

    const computeRectangleBounds = useCallback((point: LatLngLiteral) => {
        const latLng = new google.maps.LatLng(point.lat, point.lng);

        const north = google.maps.geometry.spherical
            .computeOffset(latLng, RECT_HEIGHT_SCALE / 2, 0)
            .lat();
        const south = google.maps.geometry.spherical
            .computeOffset(latLng, RECT_HEIGHT_SCALE / 2, 180)
            .lat();
        const east = google.maps.geometry.spherical
            .computeOffset(latLng, RECT_WIDTH_SCALE / 2, 90)
            .lng();
        const west = google.maps.geometry.spherical
            .computeOffset(latLng, RECT_WIDTH_SCALE / 2, 270)
            .lng();

        setRectangleBounds({ north, south, east, west });
    }, []);

    const handleMapClick = useCallback((e: google.maps.MapMouseEvent) => {
        if (!e.latLng) return;
        const clickedPoint = { lat: e.latLng.lat(), lng: e.latLng.lng() };
        setCenter(clickedPoint);
    }, []);

    useEffect(() => {
        if (mapRef.current) computeRectangleBounds(center);
    }, [center, computeRectangleBounds]);

    const handleCapture = () => {
        if (rectangleBounds) {
            alert(
                `Coordinates captured successfully:\n${JSON.stringify(
                    rectangleBounds,
                    null,
                    2
                )}`
            );
        }
    };

    const resetMap = () => {
        if (rectangleBounds) {
            setCenter({ lat: 60.39299, lng: 5.32415 });
        }
    };

    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            window.location.reload();
        }
    });
    

    return (
        <div id='map' className='flex flex-col h-full w-full bg-neutral-100 place-content-start items-center pt-20'>
            <div ref={ref} className={`flex flex-col h-full w-full place-content-start items-center transition-opacity duration-600 ease-in ${
                inView ? 'opacity-100' : 'opacity-0'
            }`}>
                <LoadScript
                    googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                    libraries={libraries}
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                        mapTypeId='terrain'
                        onLoad={onLoad}
                        onClick={handleMapClick}
                    >
                        {rectangleBounds && (
                            <Rectangle
                                bounds={rectangleBounds}
                                options={{
                                    strokeColor: '#ff0000',
                                    strokeOpacity: 0.8,
                                    strokeWeight: 1,
                                    fillColor: '#ff0000',
                                    fillOpacity: 0.2,
                                    draggable: false,
                                    editable: false,
                                    clickable: false,
                                }}
                            />
                        )}
                    </GoogleMap>
                </LoadScript>
                
                <div className='flex place-items-center ml-18'>
                    <button
                        className='flex border-neutral-900 text-neutral-900 text-xl border-1 mt-8 mr-10 p-5 pl-10 pr-10 transition duration-150 shadow-[inset_0_0_10px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_0_15px_rgba(0,0,0,0.3)] active:shadow-[inset_0_0_10px_rgba(0,0,0,0.3)] rounded-sm hover:cursor-pointer .hover:border-neutral-100 .hover:bg-neutral-900 .hover:text-neutral-100'
                        onClick={handleCapture}
                    >
                        Capture Coordinates
                    </button>
                    <button 
                        className='flex place-content-center place-items-end mt-8 text-neutral-600 hover:text-neutral-950 hover:cursor-pointer active:text-neutral-600' 
                        onClick={resetMap}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MapSelector;
