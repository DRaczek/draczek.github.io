import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/TimeLine.css";
import TimeLineItem from "./TimeLineItem";

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

  const addToTable = (el, tableRef) => {
    if (el && tableRef.current && !tableRef.current.includes(el)) {
      tableRef.current.push(el);
    }
  };

  return (
    <div className="timeline-container position-relative py-5">
      <div className="timeline-line" ref={lineRef}></div>
      <TimeLineItem
        variant="right"
        src="/wsb_logo.png"
        alt="WSB NLU"
        href="https://www.wsb-nlu.edu.pl/"
        ref={(el) => addToTable(el, itemsRef)}
      >
        <h5 className="fw-bold">
          October 2025
          <br />
          I applied for an engineering degree in Computer Science with a
          specialization in Business Application Development.
          <br />
          WSB-NLU
        </h5>
      </TimeLineItem>
      <TimeLineItem
        variant="left"
        src="/logo_olympia_electronics.png"
        alt="Olympia Electronics"
        href="https://www.olympia-electronics.com/en"
        ref={(el) => addToTable(el, itemsRef)}
      >
        <h5 className="fw-bold">
          April 2024
          <br />
          Vocational Internship as part of technical secondary school education
          <br />
          European Union FERS program - 2022-1-PL01-KA122-VET-000076905
          <br />
          Olympia Electronics - Greece
        </h5>
        <p className="text-muted">
          WordPress, soft skills, learning how high-tech companies operate
        </p>
      </TimeLineItem>
      <TimeLineItem
        variant="right"
        src="/favicon_newdef.png"
        alt="NEWDEF"
        href="https://newdef.pl/"
        ref={(el) => addToTable(el, itemsRef)}
      >
        <h5 className="fw-bold">
          March 2023 &amp; April 2024
          <br />
          Vocational Internship as part of technical secondary school education
          <br />
          NEWDEF
        </h5>
        <p className="text-muted">
          Java, Spring Boot REST API, PostgreSQL, Android Studio app, Liquibase,
          Swagger, SOLID principles
        </p>
      </TimeLineItem>
      <TimeLineItem
        variant="left"
        src="/zstio_logo.png"
        alt="ZSTiO Limanowa"
        href="https://zstio.edu.pl/"
        ref={(el) => addToTable(el, itemsRef)}
      >
        <h5 className="fw-bold">
          2020 - 2025
          <br /> Technical Secondary School - ZSTiO, Limanowa - Software
          Development Technician
        </h5>
        <p className="text-muted">
          C++, PHP, C#, HTML, CSS, JS, React.js, WordPress, .NET MAUI,
          Xamarin.Forms, WPF, Git, etc.
        </p>
      </TimeLineItem>
    </div>
  );
};

export default Timeline;
