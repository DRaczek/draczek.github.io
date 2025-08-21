import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function ModelLoaderOverlay() {
  const { progress } = useProgress();
  const loaderRef = useRef();

  useEffect(() => {
    if (progress === 100) {
      requestAnimationFrame(() => {
        gsap.timeline().to(loaderRef.current, {
          duration: 1,
          autoAlpha: 0,
        });
      });
    }
  }, [progress]);

  return (
    <div
      ref={loaderRef}
      className="loader-screen"
      style={{
        position: "fixed",
        zIndex: 10000,
        backgroundColor: "black",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="loader-text">Loading: {Math.floor(progress)}%</div>
    </div>
  );
}
