import { useThree, useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect } from "react";

export function CameraController() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(7.5, 0.3, 7.5);
    camera.lookAt(0, 2, 0);
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none" },
    });

    tl.to(camera.position, {
      duration: 30,
      x: 6.1,
      y: 0.3,
      z: 6.1,
    });

    tl.to(camera.position, {
      duration: 5,
      x: 7.5,
      y: 0.3,
      z: 7.5,
    });
  }, [camera]);

  return null;
}
