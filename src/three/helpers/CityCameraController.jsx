import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export function CityCameraController() {
  const { camera } = useThree();
  const tl = useRef(null);

  useEffect(() => {
    camera.position.set(7.5, 0.3, 7.5);
    camera.lookAt(0, 2, 0);

    tl.current = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none" },
    });

    tl.current.to(camera.position, {
      duration: 30,
      x: 6.1,
      y: 0.3,
      z: 6.1,
    });

    tl.current.to(camera.position, {
      duration: 5,
      x: 7.5,
      y: 0.3,
      z: 7.5,
    });

    return () => {
      if (tl.current) {
        tl.current.kill();
        tl.current = null;
      }
    };
  }, [camera]);

  return null;
}
