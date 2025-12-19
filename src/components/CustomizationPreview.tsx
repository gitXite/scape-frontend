import * as THREE from 'three';
import { useCustomization } from '@/context/CustomizationContext';
import { useRef, useState, useEffect } from 'react';
import { Spinner } from './ui/shadcn-io/spinner/spinner';
import { STLCache } from '@/utils/cache';

const frameImages: Record<string, string> = {
    oak: '/images/frame_oak.webp',
    walnut: '/images/frame_walnut.webp',
    white: '/images/frame_white.webp',
    black: '/images/frame_black.webp',
};

const passePartoutImages: Record<string, string> = {
    white: '/images/passepartout_white.webp',
    black: '/images/passepartout_black.webp',
    without: '',
};

function CustomizationPreview() {
    const { frameType, passePartoutType } = useCustomization();
    const [isLoading, setIsLoading] = useState(false);
    const mountRef = useRef<HTMLDivElement | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

    const frame = frameImages[frameType] ?? '';
    const passePartout = passePartoutImages[passePartoutType] ?? '';

    useEffect(() => {
        setIsLoading(true);

        const geometry = STLCache.geometry;
        const mesh = STLCache.mesh;
        if (!mountRef.current || !geometry || !mesh) return;

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                if (!mountRef.current) return;

                const width = mountRef.current.clientWidth;
                const height = mountRef.current.clientHeight;

                const scene = new THREE.Scene();
                scene.background = null;
                sceneRef.current = scene;

                const camera = new THREE.PerspectiveCamera(
                    50,
                    mountRef.current.clientWidth /
                        mountRef.current.clientHeight,
                    0.1,
                    5000
                );
                cameraRef.current = camera;

                const renderer = new THREE.WebGLRenderer({
                    antialias: true,
                    alpha: true,
                });
                renderer.setSize(width, height);
                mountRef.current!.innerHTML = '';
                mountRef.current.appendChild(renderer.domElement);
                rendererRef.current = renderer;

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
            });
            setIsLoading(false);
        });

        let frameID: number;
        const animate = () => {
            frameID = requestAnimationFrame(animate);
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
            cameraRef.current = null;
            sceneRef.current = null;
        };
    }, []);

    return (
        <div className='h-full w-full'>
            <div className='flex h-full w-full justify-center place-items-center'>
                <div className='flex relative w-[56%] max-lg:w-[200px] max-sm:w-[180px] justify-center'>
                    {frameType && (
                        <img
                            src={frame}
                            alt='Preview Frame'
                            className='z-3 shadow-md w-full'
                        />
                    )}
                    {passePartoutType && (
                        <img
                            src={passePartout}
                            alt='Preview Passe-Partout'
                            className='z-2 absolute self-center w-[94%]'
                        />
                    )}
                    <div
                        ref={mountRef}
                        className='z-4 h-[102%] w-[70%] absolute self-center'
                    />
                    {isLoading && (
                        <Spinner
                            variant='circle'
                            size={42}
                            className='self-center absolute text-neutral-900 z-5'
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default CustomizationPreview;
