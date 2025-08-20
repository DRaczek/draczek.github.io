import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/Projects.css";
import Project from "./Project";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%", // animacja gdy górna krawędź karty jest w 80% wysokości ekranu
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section className="py-5">
      <div className="container-fluid p-1 ps-lg-5 pe-lg-5">
        <h2 className="section-title mb-5 fw-bold h2 position-relative pb-3">
          My Selected Personal Projects
        </h2>
        <Project
          addToRefs={addToRefs}
          link="https://github.com/aruk3101/advertisement_system_pzaw"
          title="2024 - Advertisement System - school project - Web App"
          badges={[
            "Java",
            "Spring Boot",
            "React.js",
            "PostgreSql",
            "Bootstrap",
            "Liquibase",
            "Swagger",
            "REST API",
            "Web App",
            "School Project",
            "Unfinished",
          ]}
        />

        <Project
          addToRefs={addToRefs}
          link="https://github.com/DRaczek/advertisement_system_pad_pam"
          title="2024 - Advertisement System - school project - Mobile App"
          badges={[
            "C#",
            ".NET MAUI",
            "Sqlite",
            "sqlite-net-pcl",
            "Mobile App (Android)",
            "Desktop App",
            "School Project",
            "Unfinished",
          ]}
        />

        <Project
          addToRefs={addToRefs}
          link="https://github.com/DRaczek/dRaczekProjekt"
          title="2023 - Online Store - School project - Web app"
          badges={[
            "HTML",
            "CSS",
            "JS",
            "PHP",
            "MySql",
            "No frameworks",
            "MVC",
            "sendmail",
            "School Project",
          ]}
        />
      </div>
    </section>
  );
}
