import { useHotkeys } from 'react-hotkeys-hook';
import { X } from 'lucide-react';
import type React from 'react';
import { Spinner } from '../ui/shadcn-io/spinner/spinner';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';


type ModelPreviewProps = {
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    className: string,
};

function ModelPreview({ showModal, setShowModal, className }: ModelPreviewProps) {
    const [isLoading, setIsLoading] = useState(false);
    const mountRef = useRef<HTMLDivElement | null>(null);

    useHotkeys('escape', (event) => {
        event.preventDefault();
        if (showModal) setShowModal(false);
    });

    useEffect(() => {
        if (!mountRef.current) return;

        setIsLoading(true);

        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            mountRef.current.clientWidth / mountRef.current.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        mountRef.current!.innerHTML = '';
        mountRef.current.appendChild(renderer.domElement);
        scene.background = null;

        const light = new THREE.DirectionalLight(0xffffff, 3);
        light.position.set(1, 1, 1);
        scene.add(light);
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
        scene.add(ambientLight);

        const loader = new STLLoader();
        loader.load('/models/terrain-33531.stl', (geometry) => {
            geometry.computeBoundingBox();
            const center = new THREE.Vector3();
            geometry.boundingBox?.getCenter(center);
            geometry.center();

            const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            const size = new THREE.Vector3();
            geometry.boundingBox?.getSize(size);
            const maxDim = Math.max(size.x, size.y, size.z);
            camera.position.z = maxDim * 1.5;
            controls.update();

            setIsLoading(false);
        }, undefined, (error) => {
            console.error('Error loading STL:', error);
            setIsLoading(false);
        });

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.enableZoom = true;

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
            controls.dispose();
        };
    }, []);

    return (
        <div className={cn('absolute h-6/7 w-3/4 -translate-y-10 bg-neutral-900 rounded-sm z-50 shadow-[inset_0px_0px_20px_rgba(0,0,0,0.6)]', className)}>
            {isLoading && (
                <Spinner variant='circle' size={42} className='relative justify-self-center top-2/4 -translate-y-2/4' />
            )}
            <button 
                onClick={() => setShowModal(false)}
                className='absolute group top-0 right-0 p-2 px-5 hover:shadow-[inset_0px_0px_10px_rgba(0,0,0,0.5)] active:shadow-[inset_0px_0px_20px_rgba(0,0,0,0.6)] hover:bg-neutral-100 rounded-sm rounded-tl-none rounded-br-none items-center content-center justify-center transition-all duration-100'
            >
                <X size={25} className='text-neutral-300 group-hover:text-neutral-900 transition-all duration-100' />
            </button>
            <div ref={mountRef} className='h-full w-full rounded-sm overflow-hidden'></div>
        </div>
    );
}


export default ModelPreview;