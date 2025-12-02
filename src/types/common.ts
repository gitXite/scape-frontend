import type { BufferGeometry } from 'three';

export type StoredStates = {
    coordinates: boolean,
    selectedFrame: boolean,
    selectedPassePartout: boolean,
};

export type STLObject = {
    url: string | null,
    geometry: BufferGeometry | null
};