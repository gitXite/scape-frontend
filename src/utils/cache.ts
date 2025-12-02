import type { BufferGeometry } from 'three';

export const STLCache = {
    objectUrl: null as string | null,
    geometry: null as BufferGeometry | null,
    rawBuffer: null as ArrayBuffer | null,
    cacheKey: null as string | null,

    invalidate() {
        if (this.objectUrl) {
            URL.revokeObjectURL(this.objectUrl);
        }
        this.objectUrl, this.rawBuffer, this.geometry, this.cacheKey = null;
    }
};