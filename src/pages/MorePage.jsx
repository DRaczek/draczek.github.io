import {
  Environment,
  Float,
  Lightformer,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { SpaceModel } from "../three/models/SpaceModel";
import { HeadModel } from "../three/models/HeadModel";
import "../css/more.css";
import "../css/about.css";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import TwoElementLabel from "../components/TwoElementLabel";
import Timeline from "../components/TimeLine";
import Projects from "../components/Projects";

gsap.registerPlugin(ScrollToPlugin);
function MorePage() {
  const aboutSectionRef = useRef(null);
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const viewportHeight = window.innerHeight;
      setShouldRender(scrollY < 1.1 * viewportHeight);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-black min-full-height container-fluid text-white pb-5">
      <div className="row min-full-height">
        <div className="position-relative min-full-height">
          <div
            className="d-flex justify-content-center flex-column bg-transparent p-5 position-absolute"
            id="landing-text"
          >
            <p className="h1 mb-4 text-primary fw-bold">
              Making real life solutions for bold ideas
            </p>
            <p className="fs-6 text-secondary">
              Hi, I'm Damian, passionate programmer and graduate of programming
              technical school
            </p>
            <button
              id="check_more_button"
              type="button"
              className="btn btn-primary"
              onClick={() => {
                gsap.to(window, {
                  duration: 1.5,
                  scrollTo: aboutSectionRef.current,
                  ease: "power2.out",
                });
              }}
            >
              <span className=" ps-4 fs-5">Check more</span>
              <span className=" fs-4 ps-2 opacity-0">↓</span>
            </button>
          </div>
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
        </div>
      </div>

      <div className="row" ref={aboutSectionRef}>
        <section className="pt-5 pb-5" id="about">
          <div className="container">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-lg-6">
                <div className="">
                  <h3 className="text-primary fw-bold fs-1 mb-2">About Me</h3>
                  <h6 className="text-secondary fs-4 fw-semibold">
                    Aspiring programming Full-Stack student
                  </h6>
                  <p className="fs-5">
                    I love turning ideas into reality through code. I'm
                    currently exploring both front-end and back-end
                    technologies, but my favourite specialization is back-end.
                    I'm actively trying towards becoming the Full-Stack
                    Developer.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <TwoElementLabel
                        containerClassName={"mb-2"}
                        firstElement={"Age"}
                        secondElement={"19 Yr"}
                      />
                      <TwoElementLabel
                        containerClassName={"mb-2"}
                        firstElement={"Residence"}
                        secondElement={"Poland"}
                      />
                      <TwoElementLabel
                        containerClassName={"mb-2"}
                        firstElement={"Address"}
                        secondElement={"Limanowa, Poland"}
                      />
                    </div>
                    <div className="col-md-6">
                      <TwoElementLabel
                        containerClassName={"mb-2"}
                        firstElement={"E-mail"}
                        secondElement={"damian.raczek@proton.me"}
                      />
                      <TwoElementLabel
                        containerClassName={"mb-2"}
                        firstElement={"Phone"}
                        secondElement={"+48 511 015 730"}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="about-avatar">
                  {isMobile == true ? (
                    <img src="/avatar_mobile.png" style={{ height: "400px" }} />
                  ) : (
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
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="row">
        <Timeline />
      </div>

      <div className="row">
        <Projects />
      </div>
    </div>
  );
}

export default MorePage;
