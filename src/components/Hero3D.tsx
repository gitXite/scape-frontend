import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { useEffect, useRef } from 'react';

function Hero3D() {
    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!mountRef.current) return;
        const container = mountRef.current;

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
        camera.position.set(0, 0, 0);
        const targetPosition = new THREE.Vector3(0, 0, 180);
        let progress = 0;

        const introCamera = () => {
            if (progress < 1) {
                progress += 0.002;
                const t = 1 - Math.pow(1 - progress, 3);
                camera.position.lerpVectors(
                    new THREE.Vector3(500, 200, 180),
                    targetPosition,
                    t
                );
                camera.lookAt(0, 0, 0);
                requestAnimationFrame(introCamera);
            }
        };
        introCamera();

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current!.innerHTML = '';
        mountRef.current.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        const dirLight = new THREE.DirectionalLight(0xffffff, 2);
        dirLight.position.set(5, 1, 5);
        scene.add(ambientLight, dirLight);

        const loader = new STLLoader();
        let mesh: THREE.Mesh;
        loader.load(
            '/models/terrain.stl',
            (geometry) => {
                geometry.computeBoundingBox();
                const center = new THREE.Vector3();
                geometry.boundingBox?.getCenter(center);
                geometry.center();

                const material = new THREE.MeshStandardMaterial({
                    color: 0xffffff,
                });
                mesh = new THREE.Mesh(geometry, material);
                // mesh.position.x = -50;
                mesh.rotation.x = -Math.PI / 2;
                mesh.rotation.y = Math.PI / 2;
                scene.add(mesh);

                // let progress = 0;
                // const intro = () => {
                //     if (progress < 1) {
                //         progress += 0.002;
                //         const t = 1 - Math.pow(1 - progress, 3);
                //         mesh.position.x = -50 + t * 50; 
                //         requestAnimationFrame(intro);
                //     }
                // };
                // intro();

                const size = new THREE.Vector3();
                geometry.boundingBox?.getSize(size);
                camera.position.z = 180;
                camera.position.x = 0;

                URL.revokeObjectURL('/models/terrain.stl');
            },
            undefined,
            (error) => {
                console.error('Error loading STL:', error);
                URL.revokeObjectURL('/models/terrain.stl');
            }
        );

        let targetRotationX = 0;
        let targetRotationY = 0;
        let targetRotationZ = 0;
        let currentRotationX = 0;
        let currentRotationY = 0;
        let currentRotationZ = 0;

        const onMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const mouseY = (e.clientX - rect.left) / rect.width - 0.5;
            const mouseX = (e.clientY - rect.top) / rect.height - 0.5;

            targetRotationX = mouseX * Math.PI * 0.05;
            targetRotationY = mouseY * Math.PI * 0.1;
            targetRotationZ = mouseY * Math.PI * 0.05;
        };
        container.addEventListener('mousemove', onMouseMove);

        let frameID: number;
        const animate = () => {
            frameID = requestAnimationFrame(animate);

            if (mesh) {
                currentRotationX += (targetRotationX - currentRotationX) * 0.05;
                currentRotationY += (targetRotationY - currentRotationY) * 0.05;
                currentRotationZ += (targetRotationZ - currentRotationZ) * 0.05;
                mesh.rotation.x = -Math.PI / 2.5 + currentRotationX;
                mesh.rotation.y = Math.PI / 7 + currentRotationY;
                mesh.rotation.z = -Math.PI / 5 + currentRotationZ;
            }
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            container.removeEventListener('mousemove', onMouseMove);
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
        <div
            ref={mountRef}
            className='absolute top-0 left-0 h-full w-full object-cover'
        />
    );
}

export default Hero3D;
