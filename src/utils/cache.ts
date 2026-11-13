import type { BufferGeometry, Mesh } from 'three';

export const STLCache = {
    objectUrl: null as string | null,
    geometry: null as BufferGeometry | null,
    rawBuffer: null as ArrayBuffer | null,
    mesh: null as Mesh | null,
    cacheKey: null as string | null,

    invalidate() {
        if (this.objectUrl) {
            URL.revokeObjectURL(this.objectUrl);
        }
        this.objectUrl = null;
        this.rawBuffer = null;
        this.geometry = null;
        this.mesh = null;
        this.cacheKey = null;
    }
};