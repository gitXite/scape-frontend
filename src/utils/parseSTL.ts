import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { STLCache } from './cache';

export const parseSTL = (arrayBuffer: ArrayBuffer): {mesh: THREE.Mesh, geometry: THREE.BufferGeometry} => {
    const loader = new STLLoader();
    const geometry = loader.parse(arrayBuffer);
    STLCache.geometry = geometry;
    const material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
    });
    const mesh = new THREE.Mesh(geometry, material);
    STLCache.mesh = mesh;

    return {
        mesh, 
        geometry
    };
};
