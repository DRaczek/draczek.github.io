import { Float, OrbitControls } from "@react-three/drei";
import { SpaceModel } from "../three/models/SpaceModel";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

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
        <Float speed={2}>
          <group
            onUpdate={(self) => {
              self.scale.set(0, 0, 0);
              self.rotation.y = -Math.PI / 2;

              gsap
                .timeline()
                .to(self.scale, {
                  x: 1.2,
                  y: 1.2,
                  z: 1.2,
                  duration: 2,
                  ease: "power2.out",
                })
                .to(
                  self.rotation,
                  {
                    y: 0,
                    duration: 2,
                    ease: "power2.out",
                  },
                  "<"
                );
            }}
          >
            <SpaceModel scale={[2.5, 2.5, 2.5]} />
          </group>
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
