import { useCallback, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

import circleImg from "../assets/circle.png";

export const Points = () => {
  const img = useTexture(circleImg);
  const bufferRef = useRef();

  useFrame(() => {
    t += 15;
    const positions = bufferRef.current.array;

    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        positions[i + 1] = graph(x, z);
        i += 3;
      }
    }
    bufferRef.current.needsUpdate = true;
  });

  let t = 0;
  let f = 0.002;
  let a = 3;
  const graph = useCallback(
    (x, z) => {
      return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
    },
    [t, f, a]
  );

  const count = 100;
  const sep = 3;
  let planePositions = useMemo(() => {
    let positions = [];
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = graph(x, z);
        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [count, sep, graph]);

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          ref={bufferRef}
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
