import { Canvas } from "@react-three/fiber";
import { HeadModel } from "../three/models/HeadModel";
import { Environment, Lightformer } from "@react-three/drei";

export default function HeadModelCanvas() {
  return (
    <Canvas
      style={{
        height: "400px",
      }}
      camera={{
        position: [0, 1, 10],
        fov: 35,
        near: 1,
        far: 20,
      }}
    >
      <group>
        <HeadModel />
      </group>

      <Environment resolution={32} frames={1}>
        <group rotation={[-Math.PI / 3, 4, 1]}>
          <Lightformer
            form="circle"
            intensity={2}
            position={[-10, 0, 0]}
            scale={15}
          />
          <Lightformer
            form="circle"
            intensity={1.5}
            position={[-10, 5, 0]}
            scale={15}
          />
          <Lightformer
            form="circle"
            intensity={1.5}
            position={[-5, -5, 0]}
            scale={15}
          />
        </group>
      </Environment>
    </Canvas>
  );
}
