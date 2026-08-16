import React, { Suspense, useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const MODEL_PATH = "/desktop_pc/scene.gltf";

useGLTF.preload(MODEL_PATH);

const Computers = ({ isMobile }) => {
  const computer = useGLTF(MODEL_PATH);

  const scene = useMemo(() => {
    const clonedScene = computer.scene.clone(true);

    clonedScene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        if (child.geometry?.attributes?.position?.array) {
          const positionArray = child.geometry.attributes.position.array;
          let changed = false;

          for (let i = 0; i < positionArray.length; i += 1) {
            if (!Number.isFinite(positionArray[i])) {
              positionArray[i] = 0;
              changed = true;
            }
          }

          if (changed) {
            child.geometry.attributes.position.needsUpdate = true;
          }

          try {
            child.geometry.computeBoundingSphere();
          } catch {
            try {
              child.geometry.computeBoundingBox();
            } catch {
              // Ignore geometry fallback errors
            }
          }
        }

        const materials = Array.isArray(child.material)
          ? child.material
          : [child.material];

        materials.forEach((material) => {
          if (!material) return;

          if (material.map) {
            if ("colorSpace" in material.map) {
              material.map.colorSpace = THREE.SRGBColorSpace;
            }

            material.map.needsUpdate = true;
          }

          material.needsUpdate = true;
        });
      }
    });

    return clonedScene;
  }, [computer.scene]);

  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor="black" />

      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.2}
        castShadow
        shadow-mapSize={1024}
      />

      <pointLight intensity={1.5} />

      <primitive
        object={scene}
        scale={isMobile ? 0.48 : 0.78}
        position={isMobile ? [0, -2.2, -1.2] : [0, -3.35, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{
        position: [20, 3, 5],
        fov: 25,
      }}
      gl={{
        preserveDrawingBuffer: true,
        alpha: true,
        antialias: true,
      }}
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
