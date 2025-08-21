import { Float, OrbitControls } from "@react-three/drei";
import { SpaceModel } from "../three/models/SpaceModel";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";

export default function SpaceModelCanvas({ shouldRender }) {
  return (
    <Canvas
      frameloop={shouldRender ? "always" : "demand"}
      dpr={0.7}
      id="landing-canvas"
      className="position-absolute"
      style={{
        zIndex: 0,
      }}
      camera={{ position: [5, 10, 10], fov: 40 }}
    >
      <group>
        <Float speed={1}>
          <SpaceModel scale={[2.5, 2.5, 2.5]} />
        </Float>
      </group>
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        zoomSpeed={1}
        maxDistance={20}
        minDistance={6}
      />
      <EffectComposer multisampling={2}>
        <Bloom levels={5} luminanceThreshold={0.3} intensity={3} />
      </EffectComposer>
    </Canvas>
  );
}
