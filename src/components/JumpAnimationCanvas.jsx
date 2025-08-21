import { Canvas } from "@react-three/fiber";
import { JumpAnimation } from "../three/models/JumpAnimation";
import { Environment, Lightformer } from "@react-three/drei";

const JumpAnimationCanvas = ({
  canvasRef,
  setTriggerAnimation,
  setIsModelReady,
}) => {
  return (
    <Canvas
      gl={{ antialias: false }}
      dpr={[1, 1.5]}
      className="full-page position-fixed overflow-visible"
      ref={canvasRef}
      id="canvas"
      style={{
        top: "-105vh",
        zIndex: 2,
      }}
      shadows
      camera={{ position: [0, 0, 10], fov: 50, near: 1, far: 20 }}
    >
      <group>
        <JumpAnimation
          setTriggerAnimation={setTriggerAnimation}
          modelReadySetter={setIsModelReady}
        />
      </group>

      <Environment resolution={128}>
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

export default JumpAnimationCanvas;
