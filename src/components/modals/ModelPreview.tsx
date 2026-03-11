import * as THREE from 'three';
import { useEffect, useRef, useState, useCallback } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

import type React from 'react';

import { X, Maximize2, RotateCcw } from 'lucide-react';
import { Spinner } from '../ui/shadcn-io/spinner/spinner';
import { cn } from '@/lib/utils';
import { STLCache } from '@/utils/cache';
import { setupThreeJS } from '@/utils/setupThreeJS';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';

type ModelPreviewProps = {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
};

function ModelPreview({
    showModal,
    setShowModal,
    className,
}: ModelPreviewProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [isReady, setIsReady] = useState(false);
    const mountRef = useRef<HTMLDivElement | null>(null);
    const controlsRef = useRef<TrackballControls | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const frameIDRef = useRef<number | null>(null);
    const initTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const cleanup = useCallback(() => {
        if (initTimeoutRef.current) {
            clearTimeout(initTimeoutRef.current);
            initTimeoutRef.current = null;
        }
        if (frameIDRef.current) {
            cancelAnimationFrame(frameIDRef.current);
            frameIDRef.current = null;
        }
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
    }, []);

    useHotkeys('escape', (event) => {
        event.preventDefault();
        if (showModal) setShowModal(false);
    });

    // Initialize Three.js when modal opens and mount is ready
    useEffect(() => {
        if (!showModal) {
            cleanup();
            setIsReady(false);
            setIsLoading(true);
            return;
        }

        const geometry = STLCache.geometry;
        const mesh = STLCache.mesh;

        if (!geometry || !mesh) {
            setIsLoading(false);
            return;
        }

        // Use setTimeout to yield to the browser and let the modal animation play
        // The 50ms delay allows CSS animations to start before heavy JS work
        initTimeoutRef.current = setTimeout(() => {
            if (!mountRef.current) return;

            const three = setupThreeJS(mountRef, geometry, mesh);
            if (!three) {
                setIsLoading(false);
                return;
            }

            controlsRef.current = three.controls;
            cameraRef.current = three.camera;
            sceneRef.current = three.scene;
            rendererRef.current = three.renderer;

            setIsLoading(false);
            setIsReady(true);
        }, 100);

        return cleanup;
    }, [showModal, cleanup]);

    // Animation loop - separate from initialization
    useEffect(() => {
        if (!isReady) return;

        const animate = () => {
            frameIDRef.current = requestAnimationFrame(animate);
            controlsRef.current?.update();
            if (sceneRef.current && cameraRef.current) {
                rendererRef.current?.render(
                    sceneRef.current,
                    cameraRef.current,
                );
            }
        };
        animate();

        const handleResize = () => {
            if (!mountRef.current || !cameraRef.current || !rendererRef.current)
                return;
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;

            cameraRef.current.aspect = width / height;
            cameraRef.current.updateProjectionMatrix();

            rendererRef.current.setSize(width, height);
            rendererRef.current.setPixelRatio(window.devicePixelRatio);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (frameIDRef.current) {
                cancelAnimationFrame(frameIDRef.current);
            }
        };
    }, [isReady]);

    if (!showModal) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className='fixed inset-0 bg-black/60 backdrop-blur-md z-40 animate-in fade-in duration-200'
                onClick={() => setShowModal(false)}
            />

            {/* Modal */}
            <div
                className={cn(
                    'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50',
                    'w-full sm:w-[90vw] max-w-5xl h-[85vh]',
                    'bg-gradient-to-b from-zinc-900 to-zinc-950',
                    'rounded-2xl overflow-hidden',
                    'border border-white/10',
                    'shadow-2xl shadow-black/50',
                    'animate-in zoom-in-95 fade-in duration-100',
                    className,
                )}
            >
                {/* Header */}
                <div className='absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-5 py-4 bg-gradient-to-b from-black/60 to-transparent'>
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center justify-center w-8 h-8 rounded-md bg-white/10 backdrop-blur-sm'>
                            <Maximize2 className='w-4 h-4 text-white/70' />
                        </div>
                        <div>
                            <h3 className='text-sm font-medium text-white'>
                                3D Model Preview
                            </h3>
                            <p className='text-xs text-white/50'>
                                Drag to rotate, scroll to zoom
                            </p>
                        </div>
                    </div>

                    <div className='flex items-center gap-2'>
                        <button
                            className='flex items-center justify-center w-9 h-9 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200 group'
                            title='Reset view'
                        >
                            <RotateCcw className='w-4 h-4 text-white/50 group-hover:text-white/80 transition-colors' />
                        </button>
                        <button
                            onClick={() => setShowModal(false)}
                            className='flex items-center justify-center w-9 h-9 rounded-md bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/30 transition-all duration-200 group'
                            title='Close (Esc)'
                        >
                            <X className='w-4 h-4 text-white/50 group-hover:text-red-400 transition-colors' />
                        </button>
                    </div>
                </div>

                {/* Loading State */}
                {isLoading && (
                    <div className='absolute inset-0 flex flex-col items-center justify-center gap-4 bg-zinc-950/80 backdrop-blur-sm z-20'>
                        <div className='relative'>
                            <div className='absolute inset-0 rounded-full bg-white/10 blur-xl animate-pulse' />
                            <Spinner
                                variant='circle'
                                size={48}
                                className='relative text-white'
                            />
                        </div>
                        <p className='text-sm text-white/60 animate-pulse'>
                            Loading model...
                        </p>
                    </div>
                )}

                {/* 3D Viewport */}
                <div
                    ref={mountRef}
                    className='h-full w-full bg-gradient-to-br from-zinc-900 via-zinc-950 to-black'
                />

                {/* Footer hint */}
                <div className='absolute bottom-0 left-0 right-0 flex items-center justify-center py-3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none'>
                    <div className='flex items-center gap-2 sm:gap-4 text-xs text-white/40'>
                        <span className='flex items-center gap-1.5'>
                            <kbd className='px-1.5 py-0.5 rounded bg-white/10 font-mono text-[10px]'>
                                ESC
                            </kbd>
                            to close
                        </span>
                        <span className='w-px h-3 bg-white/20' />
                        <span>Scroll to zoom</span>
                        <span className='w-px h-3 bg-white/20' />
                        <span>Left click to rotate</span>
                        <span className='w-px h-3 bg-white/20' />
                        <span>Right click to drag</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModelPreview;
