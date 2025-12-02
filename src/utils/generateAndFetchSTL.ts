import { STLCache } from './cache';
import type { STLObject } from '@/types';
import { parseSTL } from './parseSTL';

export const generateAndFetchSTL = async (): Promise<STLObject | null> => {
    const coords = JSON.parse(localStorage.getItem('coordinates') || '{}');
    const verticalScale = localStorage.getItem('verticalScale');
    const scale = localStorage.getItem('boxSize');

    if (!coords || !verticalScale || !scale) {
        console.error('Missing localstorage data');
        return null;
    }

    const key = JSON.stringify({
        lat: coords.north,
        lng: coords.west,
        verticalScale,
        scale
    });
    if (STLCache.geometry && STLCache.cacheKey === key) {
        return {
            url: STLCache.objectUrl!,
            geometry: STLCache.geometry
        };
    }
    
    try {
        const resp = await fetch(
            `${import.meta.env.VITE_APP_API_URL}/api/stl/generate`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: key
            }
        );

        if (!resp.ok) {
            const data = await resp.json();
            throw new Error(data.message || 'Unknown error');
        }

        const arrayBuffer = await resp.arrayBuffer();
        STLCache.rawBuffer = arrayBuffer;
        STLCache.cacheKey = key;

        const blob = new Blob([arrayBuffer], { type: 'application/sla' });
        const url = URL.createObjectURL(blob);
        STLCache.objectUrl = url;

        const geometry = parseSTL(arrayBuffer);

        return {
            url,
            geometry
        };
    } catch (err) {
        console.error('Error fetching STL: ', err);
        throw err;
    }
};
