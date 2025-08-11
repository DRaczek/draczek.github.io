import { Canvas, useThree } from "@react-three/fiber";
import { AmbientLight } from "three/webgpu";
import { Environment, Lightformer } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { JumpAnimation } from "../components/JumpAnimation";
import { CityModel } from "../components/CityModel";
import { useNavigate } from "react-router-dom";
import { CameraController } from "../components/CameraController";
import LoaderOverlay from "../components/LoaderOverlay";
import { TextPlugin } from "gsap/all";

gsap.registerPlugin(TextPlugin);
const LandingPage = () => {
  const light = new AmbientLight(0xffffff, 1);
  const [triggerAnimation, setTriggerAnimation] = useState(null);
  const cavasRef = useRef(null);
  const landingRef = useRef(null);
  const lineRef = useRef(null);
  const nameRef = useRef(null);
  const aboveNameWordsRefs = useRef([]);
  const belowNameWordsRefs = useRef([]);
  const cursorRef = useRef(null);
  const cursorTextRef = useRef(null);
  const checkMoreButtonRef = useRef(null);
  const backgroundOverlay = useRef(null);
  const [aboveNameWords] = useState(["Programmer", "Student", "Enthusiast"]);
  const [belowNameWords] = useState([
    "Building ideas with code. ",
    "Curious. Creative. Determined.  ",
    "Always moving forward.",
  ]);
  const navigate = useNavigate();
  const [showModel, setShowModel] = useState(false);
  const [ismodelReady, setIsModelReady] = useState(false);

  function collapse() {
    const tl = gsap.timeline();

    tl.to(cavasRef.current, {
      duration: 4,
      y: 2 * window.innerHeight + 100,
      ease: "power3.out",
      onComplete: () => {
        gsap.set(cavasRef.current, { autoAlpha: 0 });
      },
    });
    tl.to(
      backgroundOverlay.current,
      {
        duration: 1.5,
        opacity: 1,
        ease: "none",
      },
      "<"
    );

    tl.to(
      landingRef.current,
      {
        duration: 2.6,
        y: 2 * window.innerHeight + 100,

        ease: "power3.out",
        onComplete: () => {
          gsap.set(landingRef.current, { autoAlpha: 0 });
        },
      },
      "<+0.25"
    );
    triggerAnimation();
  }

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(lineRef.current, {
      duration: 1,
      x: "-100vw",
    });
    tl.from(
      nameRef.current,
      {
        duration: 1,
        x: -70,
      },
      "<"
    );
    tl.from(
      aboveNameWordsRefs.current,
      {
        duration: 1,
        x: -70,
      },
      "<"
    );
    tl.to(
      cursorRef.current,
      {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        ease: "power2.inOut",
      },
      "<"
    );
    tl.from(
      belowNameWordsRefs.current,
      {
        duration: 1,
        x: -70,
        stagger: 0.2,
        autoAlpha: 0.6,
      },
      "<"
    );
    tl.from(
      checkMoreButtonRef.current,
      {
        duration: 1,
        x: -70,
        autoAlpha: 0.6,
      },
      "<"
    );

    const wordsTimeLine = gsap.timeline({ repeat: -1 });
    aboveNameWords.forEach((word) => {
      let textTimeline = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 1,
      });
      textTimeline.to(cursorTextRef.current, { duration: 1, text: word });
      wordsTimeLine.add(textTimeline);
    });
  }, []);

  useEffect(() => {
    if (ismodelReady) {
      collapse();
      setTimeout(() => {
        navigate("/more");
      }, 1500);
    }
  }, [ismodelReady]);

  return (
    <div id="frontLayerWrapper">
      <section id="frontLayer">
        <LoaderOverlay />

        <div
          className="bg-black full-page overflow-hidden position-fixed"
          style={{
            opacity: 0,
          }}
          ref={backgroundOverlay}
        ></div>
        <section
          className="d-flex align-items-end position-fixed full-page"
          id="landing"
          ref={landingRef}
          style={{
            zIndex: 1,
          }}
        >
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
          <div
            className=" text-white w-100"
            style={{
              zIndex: 3,
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)",
            }}
          >
            <div className="h-100">
              <div
                ref={nameRef}
                className="m-0 p-0 ps-2 ps-md-3 ps-lg-5 ls5 text-border lh45 fs60"
              >
                <div className="row mb-3 fs-4 d-flex align-items-end lh30">
                  <span>
                    <span ref={cursorTextRef}></span>
                    <span className="fs-4 border-0" ref={cursorRef}>
                      |
                    </span>
                  </span>
                </div>
                <div className="row">Damian Raczek</div>
              </div>
              <hr className="d-block m-0 p-0" ref={lineRef} />
              <div className="d-flex flex-row mb-0">
                <div className="flex-fill d-flex ps-0 ps-md-3 ps-lg-5 ms-0 ms-md-3 ms-lg-5 h-100">
                  <div className="h5 d-flex flex-column pt-3 align-items-stretch lh40">
                    {belowNameWords.map((value, index) => {
                      return (
                        <span
                          ref={(element) =>
                            (belowNameWordsRefs.current[index] = element)
                          }
                          className="d-block"
                          key={index}
                        >
                          {value}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div
                  ref={checkMoreButtonRef}
                  className="flex-fill d-flex align-items-center justify-content-end h2 pe-5 mb-0 checkMoreButton"
                  onClick={() => {
                    setShowModel(true);
                  }}
                >
                  Check More ⇲
                </div>
              </div>
            </div>
          </div>
        </section>

        {showModel && (
          <Canvas
            gl={{ antialias: false }}
            dpr={[1, 1.5]}
            className="full-page position-fixed overflow-visible"
            ref={cavasRef}
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

            <Environment resolution={128} frames={30}>
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
        )}
      </section>
    </div>
  );
};
export default LandingPage;
