import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { STLCache } from './cache';


export const parseSTL = (arrayBuffer: ArrayBuffer): THREE.BufferGeometry => {
    const loader = new STLLoader();
    const geometry = loader.parse(arrayBuffer);
    STLCache.geometry = geometry;

    return geometry;
};