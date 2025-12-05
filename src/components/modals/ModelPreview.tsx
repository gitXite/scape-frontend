import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

import type React from 'react';

import { X } from 'lucide-react';
import { Spinner } from '../ui/shadcn-io/spinner/spinner';
import { cn } from '@/lib/utils';
import { STLCache } from '@/utils/cache';
import { setupThreeJS } from '@/utils/setupThreeJS';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';

type ModelPreviewProps = {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    className: string;
};

function ModelPreview({
    showModal,
    setShowModal,
    className,
}: ModelPreviewProps) {
    const [isLoading, setIsLoading] = useState(false);
    const mountRef = useRef<HTMLDivElement | null>(null);
    const controlsRef = useRef<TrackballControls | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

    useHotkeys('escape', (event) => {
        event.preventDefault();
        if (showModal) setShowModal(false);
    });

    useEffect(() => {
        setIsLoading(true);

        const geometry = STLCache.geometry;
        const mesh = STLCache.mesh;
        if (!mountRef.current || !geometry || !mesh) return;

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                const three = setupThreeJS(mountRef, geometry, mesh);
                if (!three) return;

                controlsRef.current = three.controls;
                cameraRef.current = three.camera;
                sceneRef.current = three.scene;
                rendererRef.current = three.renderer;
            });
            setIsLoading(false);
        });

        let frameID: number;
        const animate = () => {
            frameID = requestAnimationFrame(animate);
            controlsRef.current?.update();
            rendererRef.current?.render(sceneRef.current!, cameraRef.current!);
        };
        animate();

        const handleResize = () => {
            if (!mountRef.current) return;
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;

            cameraRef.current!.aspect = width / height;
            cameraRef.current?.updateProjectionMatrix();

            rendererRef.current?.setSize(width, height);
            rendererRef.current?.setPixelRatio(window.devicePixelRatio);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(frameID);
            controlsRef.current?.dispose();

            sceneRef.current?.traverse((obj) => {
                if (obj instanceof THREE.Mesh) {
                    obj.geometry.dispose();
                    if (obj.material instanceof THREE.Material) {
                        obj.material.dispose();
                    }
                }
            });

            if (rendererRef.current) {
                rendererRef.current.dispose();
                rendererRef.current.forceContextLoss();
                if (
                    mountRef.current &&
                    rendererRef.current?.domElement.parentNode === mountRef.current
                ) {
                    mountRef.current.removeChild(rendererRef.current?.domElement);
                }
                rendererRef.current = null;
            }
            controlsRef.current = null;
            cameraRef.current = null;
            sceneRef.current = null;
        };
    }, [STLCache.objectUrl]);

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
