import { useRef, useState, useEffect, useCallback } from 'react';
import { GoogleMap, LoadScript, Rectangle } from '@react-google-maps/api';

type LatLngLiteral = google.maps.LatLngLiteral;
type RectangleBounds = {
    north: number;
    south: number;
    east: number;
    west: number;
};

const RECT_HEIGHT_SCALE = 10000; // in meters
const RECT_WIDTH_SCALE = 7000; // in meters

const containerStyle: React.CSSProperties = {
    height: '600px',
    width: '50%',
};

const libraries: ('geometry')[] = ['geometry'];

const MapSelector = () => {
    const [center, setCenter] = useState<LatLngLiteral>({ lat: 60.4720, lng: 8.4689 });
    const [rectangleBounds, setRectangleBounds] = useState<RectangleBounds | null>(null);
    const mapRef = useRef<google.maps.Map | null>(null);

    const onLoad = useCallback((map: google.maps.Map) => {
        mapRef.current = map;
        computeRectangleBounds(center);
    }, []);

    const computeRectangleBounds = useCallback((point: LatLngLiteral) => {
        const latLng = new google.maps.LatLng(point.lat, point.lng);

        const north = google.maps.geometry.spherical.computeOffset(latLng, RECT_HEIGHT_SCALE / 2, 0).lat();
        const south = google.maps.geometry.spherical.computeOffset(latLng, RECT_HEIGHT_SCALE / 2, 180).lat();
        const east = google.maps.geometry.spherical.computeOffset(latLng, RECT_WIDTH_SCALE / 2, 90).lng();
        const west = google.maps.geometry.spherical.computeOffset(latLng, RECT_WIDTH_SCALE / 2, 270).lng();

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
            alert(`Coordinates captured successfully:\n${JSON.stringify(rectangleBounds, null, 2)}`);
        }
    };

    return (
        <div className="flex flex-col h-full w-full items-center mt-20">
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} libraries={libraries}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    mapTypeId="hybrid"
                    onLoad={onLoad}
                    onClick={handleMapClick}
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
                                clickable: false,
                            }}
                        />
                    )}
                </GoogleMap>
            </LoadScript>

            <button className="flex border-1 mt-5 p-3 hover:cursor-pointer" onClick={handleCapture}>
                Capture Coordinates
            </button>
        </div>
    );
};

export default MapSelector;