import { Canvas } from "@react-three/fiber";
import { CameraController } from "../three/helpers/CameraController";
import { CityModel } from "../three/models/CityModel";
import { Environment, Lightformer } from "@react-three/drei";

const CityModelCanvas = () => {
  return (
    <Canvas
      className="full-page position-absolute overflow-hidden"
      style={{
        zIndex: -2,
      }}
      shadows
      camera={{
        fov: 30,
        near: 1,
        far: 100,
      }}
    >
      <CameraController />
      <group>
        <CityModel />
      </group>

      <Environment resolution={128} frames={1}>
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
};

export default CityModelCanvas;
