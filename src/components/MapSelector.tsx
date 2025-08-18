// remember to install '@react-google-maps/api'
import { useRef, useCallback, useState } from 'react';
import { GoogleMap, LoadScript, Rectangle } from '@react-google-maps/api';
// types for IntelliSense
// import {} from 'google.maps';


type LatLngLiteral = google.maps.LatLngLiteral;
type RectangleBounds = {
    north: number, 
    south: number, 
    east: number, 
    west: number
};

// selection size and scale, eg 500:1
// placeholder values - currently in meters
const RECT_HEIGHT_SCALE: number = 10000;
const RECT_WIDTH_SCALE: number = 7000;

const containerStyle: React.CSSProperties = {
    height: '500px',
    width: '50%'
};

const libraries: ('geometry')[] = ['geometry'];


const MapSelector = () => {
    const [center, setCenter] = useState<LatLngLiteral>({ lat: 60.4720, lng: 8.4689 });
    const [rectangleBounds, setRectangleBounds] = useState<RectangleBounds | null>(null);
    const mapRef = useRef<google.maps.Map | null>(null);

    const onLoad = useCallback((map: google.maps.Map) => {
        mapRef.current = map;
        computeRectangleBounds(center);
    }, [center]);

    const computeRectangleBounds = (centerPoint: LatLngLiteral) => {
        const centerLatLng = new google.maps.LatLng(centerPoint.lat, centerPoint.lng);

        const northLat = google.maps.geometry.spherical.computeOffset(centerLatLng, RECT_HEIGHT_SCALE / 2, 0).lat();
        const southLat = google.maps.geometry.spherical.computeOffset(centerLatLng, RECT_HEIGHT_SCALE / 2, 180).lat();
        const eastLng = google.maps.geometry.spherical.computeOffset(centerLatLng, RECT_WIDTH_SCALE / 2, 90).lng();
        const westLng = google.maps.geometry.spherical.computeOffset(centerLatLng, RECT_WIDTH_SCALE / 2, 270).lng();

        setRectangleBounds({
            north: northLat,
            south: southLat,
            east: eastLng,
            west: westLng
        });
    };

    const handleCenterChanged = () => {
        if (mapRef.current) {
            const c = mapRef.current.getCenter();
            if (c) {
                const newCenter = { lat: c.lat(), lng: c.lng() };
                setCenter(newCenter);
                computeRectangleBounds(newCenter);
            }
        }
    };

    const handleCapture = () => {
        if (rectangleBounds) {
            alert(`Coordinates captured successfully:\n${JSON.stringify(rectangleBounds, null, 2)}`);
            // send backend request
        } else {
            return;
        }
    };
    
    return (
        <div className='flex flex-col h-full w-full items-center mt-20'>
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} libraries={libraries}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    mapTypeId='hybrid'
                    onLoad={onLoad}
                    onCenterChanged={handleCenterChanged}
                >
                    {rectangleBounds && (
                        <Rectangle 
                            bounds={rectangleBounds}
                            options={{
                                strokeColor: '#04ff00',
                                strokeOpacity: 0.5,
                                strokeWeight: 1,
                                fillColor: '#04ff00',
                                fillOpacity: 0.1,
                                draggable: false,
                                editable: false, 
                                clickable: false
                            }}
                        />
                    )}
                </GoogleMap>
            </LoadScript>
            <button className='flex border-1 mt-5 p-3 hover:cursor-pointer' onClick={handleCapture}>
                Capture Coordinates
            </button>
        </div>
    );
};

export default MapSelector;
