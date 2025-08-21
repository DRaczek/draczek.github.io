import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import ModelLoaderOverlay from "../three/helpers/ModelLoaderOverlay";
import { TextPlugin } from "gsap/all";
import CityModelCanvas from "../components/CityModelCanvas";
import TypeWriterEffectText from "../components/TypeWriterEffectText";
import JumpAnimationCanvas from "../components/JumpAnimationCanvas";

gsap.registerPlugin(TextPlugin);
const LandingPage = () => {
  const ABOVE_NAME_WORDS = ["Programmer", "Student", "Enthusiast"];
  const BELOW_NAME_LINES = [
    "Building ideas with code. ",
    "Curious. Creative. Determined.  ",
    "Always moving forward.",
  ];

  const navigate = useNavigate();
  const [triggerJumpAnimation, setTriggerJumpAnimation] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [ismodelReady, setIsModelReady] = useState(false);
  const jumpAnimationCanvasRef = useRef(null);
  const landingRef = useRef(null);
  const lineRef = useRef(null);
  const nameRef = useRef(null);
  const belowNameLinesRefs = useRef([]);
  const checkMoreButtonRef = useRef(null);
  const backgroundOverlayRef = useRef(null);

  const collapseCanvas = (timeline) => {
    timeline.to(jumpAnimationCanvasRef.current, {
      duration: 4,
      y: 2 * window.innerHeight + 100,
      ease: "power3.out",
      onComplete: () => {
        gsap.set(jumpAnimationCanvasRef.current, { autoAlpha: 0 });
      },
    });
  };
  const showBackgroundOverlay = (timeline) => {
    timeline.to(
      backgroundOverlayRef.current,
      {
        duration: 1.5,
        opacity: 1,
        ease: "none",
      },
      "<"
    );
  };
  const collapseLandingPage = (timeline) => {
    timeline.to(
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
  };
  function collapse() {
    const tl = gsap.timeline();
    collapseCanvas(tl);
    showBackgroundOverlay(tl);
    collapseLandingPage(tl);
    triggerJumpAnimation();
  }
  const introAnimationLine = (timeline) => {
    timeline.from(lineRef.current, { duration: 1, x: "-100vw" });
  };
  const introAnimationNames = (timeline) => {
    timeline.from(nameRef.current, { duration: 1, x: -70 }, "<");
  };
  const introAnimationBelowNameLines = (timeline) => {
    timeline.from(
      belowNameLinesRefs.current,
      { duration: 1, x: -70, stagger: 0.2, autoAlpha: 0.6 },
      "<"
    );
  };
  const introAnimationCheckMoreButton = (timeline) => {
    timeline.from(
      checkMoreButtonRef.current,
      { duration: 1, x: -70, autoAlpha: 0.6 },
      "<"
    );
  };
  function introAnimation() {
    const tl = gsap.timeline();
    introAnimationLine(tl);
    introAnimationNames(tl);
    introAnimationBelowNameLines(tl);
    introAnimationCheckMoreButton(tl);
  }

  const addToTable = (el, tableRef) => {
    if (el && tableRef.current && !tableRef.current.includes(el)) {
      tableRef.current.push(el);
    }
  };

  useEffect(() => {
    introAnimation();
  }, []);

  useEffect(() => {
    if (ismodelReady) {
      collapse();
      gsap.delayedCall(1.5, () => navigate("/more"));
    }
  }, [ismodelReady]);

  return (
    <div id="frontLayerWrapper">
      <section id="frontLayer">
        <ModelLoaderOverlay />

        <div
          className="bg-black full-page overflow-hidden position-fixed"
          style={{
            opacity: 0,
          }}
          ref={backgroundOverlayRef}
        />

        <section
          className="d-flex align-items-end position-fixed full-page"
          id="landing"
          ref={landingRef}
          style={{
            zIndex: 1,
          }}
        >
          <CityModelCanvas />

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
                  <TypeWriterEffectText selectedWords={ABOVE_NAME_WORDS} />
                </div>
                <div className="row">Damian Raczek</div>
              </div>
              <hr className="d-block m-0 p-0" ref={lineRef} />
              <div className="d-flex flex-row mb-0">
                <div className="flex-fill d-flex ps-0 ps-md-3 ps-lg-5 ms-0 ms-md-3 ms-lg-5 h-100">
                  <div className="h5 d-flex flex-column pt-3 align-items-stretch lh40">
                    {BELOW_NAME_LINES.map((value, index) => {
                      return (
                        <span
                          ref={(element) =>
                            addToTable(element, belowNameLinesRefs)
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
          <JumpAnimationCanvas
            canvasRef={jumpAnimationCanvasRef}
            setIsModelReady={setIsModelReady}
            setTriggerAnimation={setTriggerJumpAnimation}
          />
        )}
      </section>
    </div>
  );
};
export default LandingPage;
