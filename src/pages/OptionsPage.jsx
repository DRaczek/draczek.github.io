import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { CSSPlugin, gsap } from "gsap";
import { HeadModel } from "../components/HeadModel";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(CSSPlugin);
const OptionsPage = () => {
  const navigation = useNavigate();
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const aboutRef = useRef(null);
  const headRef = useRef(null);
  const contactRef = useRef(null);
  const educationRef = useRef(null);
  const starsBackgroundRef = useRef(null);
  const backLayerRef = useRef(null);
  const backgroundWrapperRef = useRef(null);
  const [elementRefs, setElementRefs] = useState([
    projectsRef,
    experienceRef,
    aboutRef,
    educationRef,
    contactRef,
  ]);

  useEffect(() => {
    const tl = gsap.timeline();

    let defaults = { duration: 0.3, ease: "power3.out", autoAlpha: 0, y: 50 };
    tl.from(starsBackgroundRef.current, { autoAlpha: 0, duration: 1 })
      .from(projectsRef.current, { ...defaults })
      .from(experienceRef.current, { ...defaults }, "-=0.1")
      .from(aboutRef.current, { ...defaults }, "-=0.1")
      .from(headRef.current, { ...defaults }, "-=0.1")
      .from(contactRef.current, { ...defaults }, "-=0.1")
      .from(educationRef.current, { ...defaults }, "-=0.1");
  }, []);

  function GoToPage({ event, route }) {
    let clickedElement = event.target;
    let bounds = clickedElement.getBoundingClientRect();
    const tl = gsap.timeline();

    tl.set(backgroundWrapperRef.current, {
      display: "block",
    });

    event.target.style.zIndex = 500;
    event.target.style.position = "fixed";

    tl.to(
      backgroundWrapperRef.current,
      {
        duration: 1.2,
        ease: "none",
        opacity: 1,
      },
      0
    ).to(
      event.target,
      {
        duration: 0.5,
        ease: "none",
        y: 25 - bounds.top,
        x: 70 - bounds.left,
        fontSize: 60,
        rotation: 0,
        scale: 1,
        translate: 0,
        transform: 0,
        color: "black",
      },
      0
    );
    elementRefs.forEach((element) => {
      console.log(element);
      console.log(elementRefs[0]);
      if (clickedElement.textContent != element.current.textContent) {
        tl.to(
          element.current,
          {
            duration: 0.5,
            ease: "none",
            autoAlpha: 0,
          },
          "<"
        );
      }
    });
    tl.to(
      headRef.current,
      {
        duration: 0.5,
        ease: "none",
        autoAlpha: 0,
      },
      "<"
    );
    setTimeout(() => {
      navigation(route);
    }, 1500);
  }

  return (
    <section
      ref={backLayerRef}
      id="backLayer"
      className="d-flex align-items-center justify-content-center full-page overflow-hidden"
      style={{
        Zindex: -1,
      }}
    >
      <div id="star-layers" class="star-layers" ref={starsBackgroundRef}>
        <div class="star-layer" id="stars"></div>
        <div class="star-layer" id="stars2"></div>
        <div class="star-layer" id="stars3"></div>
      </div>

      <div
        ref={backgroundWrapperRef}
        className="position-fixed bg-white opacity-0 full-page overflow-hidden d-none"
        style={{
          zIndex: 0,
        }}
      ></div>

      <div
        id="sections"
        className="container-fluid text-light h1"
        style={{ Zindex: 500 }}
      >
        <div className="row h33vh">
          <div
            className="col-6 d-flex align-items-center justify-content-center"
            ref={projectsRef}
          >
            <div
              className="sectionLink"
              id="projectsLink"
              onClick={(event) => {
                GoToPage({ event, route: "/projects" });
              }}
            >
              Projects
            </div>
          </div>
          <div
            className="col-6 d-flex align-items-center justify-content-center"
            ref={experienceRef}
          >
            <div
              className="sectionLink"
              id="experienceLink"
              onClick={(event) => {
                GoToPage({ event, route: "/experience" });
              }}
            >
              Experience
            </div>
          </div>
        </div>
        <div className="row h33vh">
          <div
            className="col-4 d-flex align-items-center justify-content-center"
            ref={aboutRef}
          >
            <div
              className="sectionLink"
              id="aboutLink"
              onClick={(event) => {
                GoToPage({ event, route: "/about" });
              }}
            >
              About
            </div>
          </div>
          <div className="col-4 d-flex align-items-center justify-content-center overflow-hidden">
            <Canvas
              ref={headRef}
              style={{
                maxWidth: "200px",
                maxHeight: "200px",
              }}
              shadows
              camera={{ position: [0, 1, 10], fov: 35, near: 1, far: 20 }}
            >
              <group>
                <HeadModel />
              </group>

              <Environment resolution={256}>
                <group rotation={[-Math.PI / 3, 4, 1]}>
                  <Lightformer
                    form={"circle"}
                    intensity={3}
                    position={[-10, 0, 0]}
                    scale={10}
                  ></Lightformer>
                  <Lightformer
                    form={"circle"}
                    intensity={3}
                    position={[-10, 5, 0]}
                    scale={10}
                  ></Lightformer>
                  <Lightformer
                    form={"circle"}
                    intensity={3}
                    position={[-10, -5, 0]}
                    scale={10}
                  ></Lightformer>
                  <Lightformer
                    form={"circle"}
                    intensity={3}
                    position={[-10, 0, 10]}
                    scale={10}
                  ></Lightformer>
                  <Lightformer
                    form={"circle"}
                    intensity={3}
                    position={[-10, 0, -10]}
                    scale={10}
                  ></Lightformer>
                  <Lightformer
                    form={"circle"}
                    intensity={3}
                    position={[-5, -5, -5]}
                    scale={10}
                  ></Lightformer>
                  <Lightformer
                    form={"circle"}
                    intensity={3}
                    position={[-5, -5, 5]}
                    scale={10}
                  ></Lightformer>
                </group>
              </Environment>
            </Canvas>
          </div>
          <div
            className="col-4 d-flex align-items-center justify-content-center"
            ref={contactRef}
          >
            <div
              className="sectionLink"
              id="contactLink"
              onClick={(event) => {
                GoToPage({ event, route: "/contact" });
              }}
            >
              Contact
            </div>
          </div>
        </div>
        <div className="row h33vh">
          <div
            className="col-12 d-flex align-items-center justify-content-center"
            ref={educationRef}
          >
            <div
              className="sectionLink"
              id="educationLink"
              onClick={(event) => {
                GoToPage({ event, route: "/education" });
              }}
            >
              Education
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OptionsPage;
