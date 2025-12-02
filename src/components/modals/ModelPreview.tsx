import * as THREE from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { useEffect, useRef, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

import type React from 'react';

import { X } from 'lucide-react';
import { Spinner } from '../ui/shadcn-io/spinner/spinner';
import { cn } from '@/lib/utils';

type ModelPreviewProps = {
    geometry: THREE.BufferGeometry | null;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    className: string;
    errorMessage?: string;
};

function ModelPreview({
    geometry,
    showModal,
    setShowModal,
    className,
    errorMessage,
}: ModelPreviewProps) {
    const [isLoading, setIsLoading] = useState(false);
    const mountRef = useRef<HTMLDivElement | null>(null);

    useHotkeys('escape', (event) => {
        event.preventDefault();
        if (showModal) setShowModal(false);
    });

    useEffect(() => {
        if (!mountRef.current || !geometry) return;
        setIsLoading(true);

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

        const material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.scale.set(scaleX, scaleY, scaleZ);
        scene.add(mesh);

        geometry.center();

        const size = new THREE.Vector3();
        box.getSize(size);
        const maxDim = Math.max(targetWidth, targetHeight, size.z);
        camera.position.z = maxDim * 1.5;
        controls.update();

        setIsLoading(false);

        let frameID: number;
        const animate = () => {
            frameID = requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            if (!mountRef.current) return;
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            renderer.setSize(width, height);
            renderer.setPixelRatio(window.devicePixelRatio);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(frameID);
            renderer.dispose();
            controls.dispose();

            scene.traverse((obj) => {
                if (obj instanceof THREE.Mesh) {
                    obj.geometry.dispose();
                    if (obj.material instanceof THREE.Material) {
                        obj.material.dispose();
                    }
                }
            });

            if (
                mountRef.current &&
                renderer.domElement.parentNode === mountRef.current
            ) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, [geometry]);

    return (
        <>
            {showModal && (
                <div
                    className='fixed inset-0 bg-black/20 backdrop-blur-sm z-10'
                    onClick={() => setShowModal(false)}
                />
            )}

            <div
                className={cn(
                    'absolute h-6/7 w-3/5 max-lg:w-9/10 -translate-y-10 bg-neutral-900 rounded-sm z-50 ',
                    className
                )}
            >
                {errorMessage && (
                    <p className='text-neutral-100 relative justify-self-center top-2/4 -translate-y-2/4 font-normal'>
                        {errorMessage}
                    </p>
                )}
                {isLoading && (
                    <Spinner
                        variant='circle'
                        size={42}
                        className='relative justify-self-center top-2/4 -translate-y-2/4'
                    />
                )}
                <button
                    onClick={() => setShowModal(false)}
                    className='absolute group top-0 right-0 p-2 px-5 max-lg:px-3 max-lg:py-3 hover:bg-neutral-300 rounded-sm rounded-tl-none rounded-br-none items-center content-center justify-center transition-all duration-150'
                >
                    <X
                        size={25}
                        className='text-neutral-300 group-hover:text-neutral-900 transition-all duration-150'
                    />
                </button>
                <div
                    ref={mountRef}
                    className='h-full w-full rounded-sm overflow-hidden'
                ></div>
            </div>
        </>
    );
}

export default ModelPreview;
