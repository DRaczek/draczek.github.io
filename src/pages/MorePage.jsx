import "../css/more.css";
import "../css/about.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Timeline from "../components/TimeLine";
import Projects from "../components/Projects";
import SpaceModelCanvas from "../components/SpaceModelCanvas";
import AboutSection from "../components/AboutSection";

const isMobile = /Mobi|Android/i.test(navigator.userAgent);
gsap.registerPlugin(ScrollToPlugin);
function MorePage() {
  const [shouldRender, setShouldRender] = useState(true);
  const aboutSectionRef = useRef(null);

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
                  duration: isMobile ? 0.5 : 1.5,
                  scrollTo: aboutSectionRef.current,
                  ease: "power3.out",
                });
              }}
            >
              <span className=" ps-4 fs-5">Check more</span>
              <span className=" fs-4 ps-2 opacity-0">↓</span>
            </button>
          </div>
          <SpaceModelCanvas shouldRender={shouldRender} />
        </div>
      </div>

      <div className="row" ref={aboutSectionRef}>
        <AboutSection />
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
