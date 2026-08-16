import React, {
  Suspense,
  useEffect,
  useState,
} from "react";

import { Canvas } from "@react-three/fiber";

import {
  OrbitControls,
  Preload,
  useGLTF,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF(
    "/desktop_pc/scene.gltf"
  );

  return (
    <mesh>
      <hemisphereLight
        intensity={0.15}
        groundColor="black"
      />

      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      <pointLight intensity={1} />

      <primitive
        object={computer.scene}
        scale={
          isMobile
            ? 0.45
            : 0.75
        }
        position={
          isMobile
            ? [0, -1.75, -1]
            : [0, -3.25, -1.5]
        }
        rotation={[
          -0.01,
          -0.2,
          -0.1,
        ]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] =
    useState(false);

  useEffect(() => {
    const mediaQuery =
      window.matchMedia(
        "(max-width: 768px)"
      );

    setIsMobile(
      mediaQuery.matches
    );

    const handleMediaQueryChange = (
      event
    ) => {
      setIsMobile(
        event.matches
      );
    };

    mediaQuery.addEventListener(
      "change",
      handleMediaQueryChange
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleMediaQueryChange
      );
    };
  }, []);

  return (
    <Canvas
      /*
       * ALWAYS is intentional here.
       * This keeps OrbitControls smooth while dragging.
       */
      frameloop="always"

      shadows

      /*
       * Slightly lower DPR keeps GPU usage reasonable
       * now that your tech balls are back.
       */
      dpr={[1, 1.5]}

      camera={{
        position: [
          20,
          3,
          5,
        ],
        fov: 25,
      }}

      gl={{
        preserveDrawingBuffer: true,
        alpha: true,
        antialias: true,
      }}

      onCreated={({ gl }) => {
        /*
         * Keep WebGL background transparent
         * so herobg remains visible.
         */
        gl.setClearColor(
          0x000000,
          0
        );
      }}

      style={{
        width: "100%",
        height: "100%",
        background:
          "transparent",
        pointerEvents:
          "auto",
        cursor: "grab",
      }}
    >
      <Suspense
        fallback={
          <CanvasLoader />
        }
      >
        <OrbitControls
          /*
           * MAIN INTERACTION FIX
           */
          enableRotate={true}

          /*
           * Don't let scrolling accidentally zoom.
           */
          enableZoom={false}

          /*
           * Don't move camera sideways.
           */
          enablePan={false}

          /*
           * Smooth drag movement.
           */
          enableDamping={true}
          dampingFactor={0.05}
          rotateSpeed={0.65}

          /*
           * Keep computer upright.
           * Horizontal movement is still allowed.
           */
          maxPolarAngle={
            Math.PI / 2
          }
          minPolarAngle={
            Math.PI / 2
          }
        />

        <Computers
          isMobile={
            isMobile
          }
        />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

useGLTF.preload(
  "/desktop_pc/scene.gltf"
);

export default ComputersCanvas;
