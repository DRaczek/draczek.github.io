import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const TypeWriterEffectText = ({ selectedWords }) => {
  const cursorRef = useRef(null);
  const cursorTextRef = useRef(null);
  const [words] = useState(selectedWords);
  useEffect(() => {
    gsap.timeline().to(
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
    const wordsTimeLine = gsap.timeline({ repeat: -1 });
    words.forEach((word) => {
      let textTimeline = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 1,
      });
      textTimeline.to(cursorTextRef.current, { duration: 1, text: word });
      wordsTimeLine.add(textTimeline);
    });
  }, []);
  return (
    <span>
      <span ref={cursorTextRef}></span>
      <span className="fs-4 border-0" ref={cursorRef}>
        |
      </span>
    </span>
  );
};

export default TypeWriterEffectText;
