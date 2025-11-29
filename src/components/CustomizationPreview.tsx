import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { useCustomization } from '@/context/CustomizationContext';
import { useRef, useState, useEffect } from 'react';
import { Spinner } from './ui/shadcn-io/spinner/spinner';
import { generateAndFetchSTL } from '@/utils/generateAndFetchSTL';

const frameImages: Record<string, string> = {
    oak: '/images/frame_oak.webp',
    walnut: '/images/frame_walnut.webp',
    white: '/images/frame_white.webp',
    black: '/images/frame_black.webp',
};

const passePartoutImages: Record<string, string> = {
    white: '/images/Passepartout_White.webp',
    black: '/images/Passepartout_Black.webp',
    without: '',
};

function CustomizationPreview() {
    const { frameType, passePartoutType } = useCustomization();
    const [isLoading, setIsLoading] = useState(false);
    const mountRef = useRef<HTMLDivElement | null>(null);

    const frame = frameImages[frameType] ?? '';
    const passePartout = passePartoutImages[passePartoutType] ?? '';

    useEffect(() => {
        if (!mountRef.current) return;
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

        const light = new THREE.DirectionalLight(0xffffff, 3);
        light.position.set(1, 1, 1);
        scene.add(light);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);

        const loader = new STLLoader();
        const loadModel = async () => {
            const url = await generateAndFetchSTL();
            if (!url) {
                setIsLoading(false);
                return;
            }

            loader.load(
                url,
                (geometry) => {
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

                    URL.revokeObjectURL(url);
                    setIsLoading(false);
                },
                undefined,
                (error) => {
                    console.error('Error loading STL:', error);
                    URL.revokeObjectURL(url);
                    setIsLoading(false);
                }
            );
        };
        loadModel();

        let frameID: number;
        const animate = () => {
            frameID = requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            cancelAnimationFrame(frameID);
            renderer.dispose();

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
    }, []);

    return (
        <div className='min-h-full w-full'>
            <div className='flex h-full justify-center place-items-center'>
                {frameType && (
                    <img
                        src={frame}
                        alt='Preview Frame'
                        className='z-3 w-[20%] absolute shadow-md'
                    />
                )}
                {passePartoutType && (
                    <img
                        src={passePartout}
                        alt='Preview Passe-Partout'
                        className='z-2 w-[19%] absolute'
                    />
                )}
                <div ref={mountRef} 
                    className='z-4 h-140 w-70 absolute self-center scale-96'
                />
                {isLoading && (
                    <Spinner
                        variant='circle'
                        size={42}
                        className='absolute top-1/2 -translate-y-1/2 justify-self-center text-neutral-900'
                    />
                )}
            </div>
        </div>
    );
}

export default CustomizationPreview;
