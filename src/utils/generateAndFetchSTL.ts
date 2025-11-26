export const generateAndFetchSTL = async (): Promise<string | null> => {
    const coords = JSON.parse(localStorage.getItem('coordinates') || '{}');
    const verticalScale = localStorage.getItem('verticalScale');
    const scale = localStorage.getItem('boxSize');

    if (!coords || !verticalScale || !scale) {
        console.error('Missing localstorage data');
        return null;
    }
    
    try {
        const resp = await fetch(
            `${import.meta.env.VITE_APP_API_URL}/api/stl/generate`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    lat: coords.north,
                    lng: coords.west,
                    verticalScale: verticalScale,
                    scale: scale,
                }),
            }
        );

        if (!resp.ok) {
            const data = await resp.json();
            throw new Error(data.message || 'Unknown error');
        }

        const arrayBuffer = await resp.arrayBuffer();
        const blob = new Blob([arrayBuffer], { type: 'application/sla' });
        const url = URL.createObjectURL(blob);
        return url;
    } catch (err) {
        console.error('Error fetching STL: ', err);
        throw err;
    }
};
