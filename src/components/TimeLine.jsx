import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../TimeLine.css";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const lineRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    // Animate central line
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    // Animate timeline cards
    itemsRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    const logos = gsap.utils.toArray(".timeline-logo");

    logos.forEach((logo) => {
      gsap.fromTo(
        logo,
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: logo,
            start: "center center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="timeline-container position-relative py-5">
      <div className="timeline-line" ref={lineRef}></div>

      <div
        className="timeline-item right"
        ref={(el) => (itemsRef.current[0] = el)}
      >
        <a className="timeline-logo" href="https://www.wsb-nlu.edu.pl/">
          <img src="/wsb_logo.png" alt="WSB NLU" />
        </a>
        <div className="card shadow-sm p-4">
          <h5 className="fw-bold">
            October 2025
            <br />
            I applied for an engineering degree in Computer Science with a
            specialization in Business Application Development.
            <br />
            WSB-NLU
          </h5>
        </div>
      </div>

      <div
        className="timeline-item left"
        ref={(el) => (itemsRef.current[1] = el)}
      >
        <a
          className="timeline-logo"
          href="https://www.olympia-electronics.com/en"
        >
          <img src="/logo_olympia_electronics.png" alt="Olympia Electronics" />
        </a>
        <div className="card shadow-sm p-4">
          <h5 className="fw-bold">
            April 2024
            <br />
            Vocational Internship as part of technical secondary school
            education
            <br />
            European Union FERS program - 2022-1-PL01-KA122-VET-000076905
            <br />
            Olympia Electronics - Greece
          </h5>
          <p className="text-muted">
            WordPress, soft skills, learning how high-tech companies operate
          </p>
        </div>
      </div>

      <div
        className="timeline-item right"
        ref={(el) => (itemsRef.current[2] = el)}
      >
        <a className="timeline-logo" href="https://newdef.pl/">
          <img src="/favicon_newdef.png" alt="NEWDEF" />
        </a>
        <div className="card shadow-sm p-4">
          <h5 className="fw-bold">
            March 2023 &amp; April 2024
            <br />
            Vocational Internship as part of technical secondary school
            education
            <br />
            NEWDEF
          </h5>
          <p className="text-muted">
            Java, Spring Boot REST API, PostgreSQL, Android Studio app,
            Liquibase, Swagger, SOLID principles
          </p>
        </div>
      </div>

      <div
        className="timeline-item left"
        ref={(el) => (itemsRef.current[3] = el)}
      >
        <a className="timeline-logo" href="https://zstio.edu.pl/">
          <img src="/zstio_logo.png" alt="ZSTiO Limanowa" />
        </a>
        <div className="card shadow-sm p-4">
          <h5 className="fw-bold">
            2020 - 2025
            <br /> Technical Secondary School - ZSTiO, Limanowa - Software
            Development Technician
          </h5>
          <p className="text-muted">
            C++, PHP, C#, HTML, CSS, JS, React.js, WordPress, .NET MAUI,
            Xamarin.Forms, WPF, Git, etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
