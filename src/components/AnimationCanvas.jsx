import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { Points } from "./Points";

export const AnimationCanvas = () => {
  return (
    <Canvas camera={{ position: [100, 10, 0], fov: 75 }}>
      <Suspense fallback={null}>
        <Points />
      </Suspense>
    </Canvas>
  );
};
