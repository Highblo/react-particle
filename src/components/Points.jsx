import { useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

import circleImg from "../assets/circle.png";

export const Points = () => {
  const img = useLoader(THREE.TextureLoader, circleImg);

  const count = 100;
  const sep = 3;
  let planePositions = useMemo(() => {
    let positions = [];
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = 0;
        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [count, sep]);

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={planePositions}
          count={planePositions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        map={img}
        color={0x00aaff}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
};
