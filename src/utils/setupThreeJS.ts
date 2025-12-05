import * as THREE from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import type React from 'react';

export function setupThreeJS(
    mountRef: React.RefObject<HTMLDivElement | null>,
    geometry: THREE.BufferGeometry,
    mesh: THREE.Mesh
): { controls: TrackballControls; camera: THREE.PerspectiveCamera; scene: THREE.Scene; renderer: THREE.WebGLRenderer } | null {
    if (!mountRef.current) return null;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(
        50,
        mountRef.current.clientWidth / mountRef.current.clientHeight,
        0.1,
        5000
    );

    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
    });
    renderer.setSize(width, height);
    mountRef.current!.innerHTML = '';
    mountRef.current.appendChild(renderer.domElement);

    const controls = new TrackballControls(camera, renderer.domElement);
    controls.staticMoving = false;
    controls.rotateSpeed = window.innerWidth > 640 ? 5.0 : 1.0;
    controls.dynamicDampingFactor = window.innerWidth > 640 ? 0.2 : 0.1;
    controls.panSpeed = window.innerWidth > 640 ? 0.3 : 0.05;

    const light = new THREE.DirectionalLight(0xffffff, 3);
    light.position.set(1, 1, 1);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    geometry.computeBoundingBox();
    const center = new THREE.Vector3();
    geometry.boundingBox?.getCenter(center);
    geometry.center();

    const box = geometry.boundingBox!;
    const currentWidth = box.max.x - box.min.x;
    const currentHeight = box.max.y - box.min.y;

    const targetWidth = 140;
    const targetHeight = 190;

    const scaleX = targetWidth / currentWidth;
    const scaleY = targetHeight / currentHeight;
    const scaleZ = Math.max(scaleX, scaleY);

    mesh.scale.set(scaleX, scaleY, scaleZ);
    scene.add(mesh);

    geometry.center();

    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(targetWidth, targetHeight, size.z);
    camera.position.z = maxDim * 1.5;
    controls.update();

    return {
        controls, camera, scene, renderer
    };
}
