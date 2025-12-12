export interface Checkout {
    coordinates: {
        north: number;
        south: number;
        east: number;
        west: number;
    };
    verticalScale: number;
    scale: number;
    frame: string;
    passepartout: string;
    reference: string | null;
}

export type StoredStates = {
    coordinates: boolean,
    selectedFrame: boolean,
    selectedPassePartout: boolean,
};

export type STLObject = {
    url: string | null,
    buffer: ArrayBuffer | null
};