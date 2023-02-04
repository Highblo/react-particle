import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Points } from "./Points";

export const AnimationCanvas = () => {
  return (
    <Canvas camera={{ position: [100, 10, 0], fov: 75 }}>
      <OrbitControls />
      <Suspense fallback={null}>
        <Points />
      </Suspense>
    </Canvas>
  );
};
