import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { useEffect, useRef } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// Geometry constants (terrain_web.stl — decimated for web, drop in /public/models/)
// After -90° X rotation: X∈[-1.311,1.311]  Y∈[0,0.386]  Z∈[-2,2]
// Frame Y axis goes front (+FRAME_DEPTH/2) to back (-FRAME_DEPTH/2).
// FRAME_DEPTH > TERRAIN_H so terrain sits inside without clipping through rear.
// 
const INNER_W = 2.623;
const INNER_D = 4.0;

const FRAME_W = 0.28; // visible moulding face width
const FRAME_DEPTH = 0.4; // front-to-back depth — must exceed TERRAIN_H
const MOUNT_MARGIN = 0.3; // cream mount board border
const TERRAIN_PAD = 0.08; // gap between mount opening and terrain edge

const BACKING_Y = -FRAME_DEPTH / 2 + 0.01; // flush to rear face
const BACKING_THICK = 0.06; // thick enough to always occlude underside
const TERRAIN_FLOOR_Y = BACKING_Y + BACKING_THICK / 2 + 0.005; // terrain Y=0 maps here

// Responsive layout helper
function getLayout(vpWidth: number) {
    if (vpWidth < 1024) {
        return {
            finalX: 0.0,
            finalY: -0.5,
            camPos: new THREE.Vector3(-0.5, 3.5, 7.0),
            camLookAt: new THREE.Vector3(1.2, -0.5, 0),
        };
    }
    return {
        finalX: 1.8,
        finalY: -1.2,
        camPos: new THREE.Vector3(-0.5, 3.5, 7.0),
        camLookAt: new THREE.Vector3(1.2, -0.5, 0),
    };
}

// set walnut textures
function makeWoodMaterial(baseTexture: THREE.Texture, baseRoughness: THREE.Texture, baseNormal: THREE.Texture, scale: THREE.Vector2) {
    const tex = baseTexture.clone();
    tex.needsUpdate = true;
    tex.colorSpace = THREE.SRGBColorSpace;

    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;

    return new THREE.MeshStandardMaterial({
        map: tex,

        normalMap: baseNormal,
        normalScale: scale,

        roughnessMap: baseRoughness,

        roughness: 0.96,
        metalness: 0.0,
    });
}

// Frame builder 
function buildFrame(renderer: THREE.WebGLRenderer): THREE.Group {
    const grp = new THREE.Group();

    // walnut textures
    const textureLoader = new THREE.TextureLoader();
    const woodTexture = textureLoader.load('/textures/walnut.jpg');
    const woodNormal = textureLoader.load('/textures/wood_normal_2.jpg');
    const woodRoughness = textureLoader.load('/textures/wood_roughness.jpg');
    woodTexture.colorSpace = THREE.SRGBColorSpace;
    woodTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    const mountMat = new THREE.MeshStandardMaterial({
        color: 0xf7f4ee,
        roughness: 0.96,
        metalness: 0.0,
    });
    const backingMat = new THREE.MeshStandardMaterial({
        color: 0x2a1c0c,
        roughness: 0.95,
        metalness: 0.0,
    });

    const box = (
        mat: THREE.Material,
        w: number,
        h: number,
        d: number,
        x: number,
        y: number,
        z: number,
    ) => {
        const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
        m.position.set(x, y, z);
        m.castShadow = m.receiveShadow = true;
        grp.add(m);
    };

    const iw = INNER_W + TERRAIN_PAD * 2;
    const id = INNER_D + TERRAIN_PAD * 2;
    const mw = iw + MOUNT_MARGIN * 2;
    const md = id + MOUNT_MARGIN * 2;
    const ow = mw + FRAME_W * 2;
    const od = md + FRAME_W * 2;

    const mountY = BACKING_Y + BACKING_THICK / 2 + 0.012;

    // Solid backing slab — flush to rear, dark walnut, fully occludes terrain underside
    box(backingMat, ow - 0.8, BACKING_THICK, od - 0.8, 0, BACKING_Y, 0);

    // Cream mount board — sits just in front of backing
    box(mountMat, mw, 0.018, md, 0, mountY, 0);

    const topMat = makeWoodMaterial(woodTexture, woodRoughness, woodNormal, new THREE.Vector2(0.6, 0.6));
    topMat.map!.repeat.set(ow / 2, 1);
    topMat.map!.rotation = Math.PI / 5;

    const sideMat = makeWoodMaterial(woodTexture, woodRoughness, woodNormal, new THREE.Vector2(0.6, 0.6));
    sideMat.map!.repeat.set(md / 2, 1);
    sideMat.map!.rotation = Math.PI / 5;
    sideMat.map!.center.set(0.5, 0.5);

    // Four walnut frame bars — outer border only, no inner fill
    box(topMat, ow, FRAME_DEPTH, FRAME_W, 0, 0, md / 2 + FRAME_W / 2); // top
    box(topMat, ow, FRAME_DEPTH, FRAME_W, 0, 0, -(md / 2 + FRAME_W / 2)); // bottom
    box(sideMat, FRAME_W, FRAME_DEPTH, md, -(mw / 2 + FRAME_W / 2), 0, 0); // left
    box(sideMat, FRAME_W, FRAME_DEPTH, md, mw / 2 + FRAME_W / 2, 0, 0); // right

    return grp;
}

// Lights
// Soft north-window key light — does not blow out the near-white terrain.
// ACES filmic tone mapping in renderer keeps whites from clipping.
function buildLights(scene: THREE.Scene): void {
    scene.add(new THREE.AmbientLight(0xfff8f4, 0.4));

    const key = new THREE.DirectionalLight(0xfffcf8, 3.0);
    key.position.set(-4, 9, 6);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.camera.near = 1;
    key.shadow.camera.far = 28;
    key.shadow.camera.left = -6;
    key.shadow.camera.right = 6;
    key.shadow.camera.top = 8;
    key.shadow.camera.bottom = -8;
    key.shadow.radius = 4;
    key.shadow.bias = -0.001;
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xf0f4ff, 0.2);
    fill.position.set(6, 3, 4);
    scene.add(fill);

    const rim = new THREE.DirectionalLight(0xffe0c0, 0.12);
    rim.position.set(0, -3, -6);
    scene.add(rim);
}

function Hero3D() {
    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!mountRef.current) return;
        const container = mountRef.current;
        container.innerHTML = '';

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        // ACES filmic: prevents the near-white terrain from clipping to pure white
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 0.88;
        container.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        scene.background = null;
        buildLights(scene);

        const camera = new THREE.PerspectiveCamera(
            32,
            container.clientWidth / container.clientHeight,
            0.1,
            5000,
        );

        let layout = getLayout(window.innerWidth);
        camera.position.copy(layout.camPos);
        camera.lookAt(layout.camLookAt);

        const FINAL_X = 1.8;
        const FINAL_Y = -1.2;

        const ENTRY_OFFSET_X = 4.0;
        const ENTRY_DURATION = 1.6; // seconds
        const entryStart = performance.now();

        const root = new THREE.Group();
        root.position.set(FINAL_X + ENTRY_OFFSET_X, FINAL_Y - 0.5, 0);

        root.rotation.x = 0.28;
        root.rotation.y = -0.08 + 0.4; // will animate to -0.08
        scene.add(root);

        // Frame renders immediately - visible before STL loads
        root.add(buildFrame(renderer));

        // Uses terrain_web.stl (20k-face decimation in /public/models/)
        // STL axes: X=width, Y=depth, Z=elevation
        // Rotate -90° on X so elevation → Three.js Y (Y-up)
        const loader = new STLLoader();
        loader.load(
            '/models/terrain_web.stl',
            (geometry) => {
                geometry.applyMatrix4(
                    new THREE.Matrix4().makeRotationX(-Math.PI / 2),
                );
                geometry.computeVertexNormals();

                const mesh = new THREE.Mesh(
                    geometry,
                    new THREE.MeshStandardMaterial({
                        color: 0xf0ebe4,
                        roughness: 0.9,
                        metalness: 0.0,
                    }),
                );
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                // Seat terrain floor just above the backing panel — no clipping
                // After rotation, terrain Y ∈ [0, TERRAIN_H].
                // Set position.y so Y=0 aligns with TERRAIN_FLOOR_Y.
                mesh.position.y = TERRAIN_FLOOR_Y;
                root.add(mesh);
            },
            undefined,
            (err) => console.error('[Hero3D] STL load error:', err),
        );

        // Mouse parallax
        const MAX_TILT = 0.42;
        const clamp = (v: number, lo: number, hi: number) =>
            Math.max(lo, Math.min(hi, v));

        let targetX = 0,
            targetY = 0;
        let currentX = 0,
            currentY = 0;

        const onMouseMove = (e: MouseEvent) => {
            if (window.innerWidth < 1024) return;
            targetX = clamp(
                (e.clientY / window.innerHeight - 0.8) * 0.8,
                -MAX_TILT,
                MAX_TILT,
            );
            targetY = -(e.clientX / window.innerWidth - 0.8) * 0.45;
        };
        window.addEventListener('mousemove', onMouseMove);

        const onScroll = () => {
            if (window.innerWidth >= 1024) return;
            const heroEl = document.getElementById('home');
            const heroH = heroEl?.clientHeight ?? window.innerHeight;
            const pct = Math.min(window.scrollY / heroH, 1);
            targetX = -pct * 0.6;
            targetY = clamp(pct * 0.2, -MAX_TILT, MAX_TILT);
        };
        window.addEventListener('scroll', onScroll, { passive: true });

        // Mobile: gyroscope as a bonus layer where available
        const onDeviceOrientation = (e: DeviceOrientationEvent) => {
            if (window.innerWidth >= 1024 || e.beta == null || e.gamma == null)
                return;
            targetX = clamp((e.beta - 45) * 0.01, -MAX_TILT, MAX_TILT);
            targetY = e.gamma * 0.012;
        };
        window.addEventListener(
            'deviceorientation',
            onDeviceOrientation as EventListener,
            { passive: true },
        );

        // Render loop
        const easeOutExpo = (t: number) =>
            t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

        let frameID: number;
        const animate = (now: number) => {
            frameID = requestAnimationFrame(animate);

            // Entry animation (slide in from right + settle)
            const elapsed = (now - entryStart) / 1000;
            const tRaw = Math.min(elapsed / ENTRY_DURATION, 1.0);
            const te = easeOutExpo(tRaw);
            const tc = easeOutCubic(tRaw);
            const entryDone = tRaw >= 1.0;

            root.position.x = FINAL_X + ENTRY_OFFSET_X * (1 - te);
            root.position.y = FINAL_Y - 0.5 * (1 - tc);

            if (!entryDone) {
                root.rotation.y = -0.08 + 0.4 * (1 - te);
            } else {
                currentX += (targetX - currentX) * 0.042;
                currentY += (targetY - currentY) * 0.042;
            }

            const BASE_TILT = 0.28;
            root.rotation.x =
                clamp(
                    BASE_TILT + currentX,
                    BASE_TILT - MAX_TILT,
                    BASE_TILT + MAX_TILT,
                ) +
                Math.sin(now * 0.00028) * 0.004;

            if (entryDone) {
                root.rotation.y =
                    -0.08 + currentY + Math.sin(now * 0.00019) * 0.003;
            }
            root.rotation.z = Math.sin(now * 0.00014) * 0.002;

            renderer.render(scene, camera);
        };
        frameID = requestAnimationFrame(animate);

        // Resize
        const handleResize = () => {
            if (!mountRef.current) return;
            const w = mountRef.current.clientWidth;
            const h = mountRef.current.clientHeight;
            renderer.setSize(w, h);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', handleResize);

        // Cleanup 
        return () => {
            cancelAnimationFrame(frameID);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
            scene.traverse((obj) => {
                if (obj instanceof THREE.Mesh) {
                    obj.geometry.dispose();
                    if (Array.isArray(obj.material)) {
                        obj.material.forEach((m) => m.dispose());
                    } else if (obj.material instanceof THREE.Material) {
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
            className='absolute top-0 right-0 h-full w-full lg:w-3/4 object-cover'
        />
    );
}

export default Hero3D;
