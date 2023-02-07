import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Cloud, OrbitControls, Sky, Stars } from "@react-three/drei";

import { Points } from "./Points";

export const AnimationCanvas = () => {
  return (
    <Canvas camera={{ position: [100, 10, 0], fov: 75 }}>
      <OrbitControls />
      <Suspense fallback={null}>
        <Points />
        <Stars />
        <Sky />
        <Cloud
          opacity={0.6}
          speed={0.6}
          width={10}
          depth={1.5}
          segments={20}
          position={[0, 10, 0]}
        />
      </Suspense>
    </Canvas>
  );
};
