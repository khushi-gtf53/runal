"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ZoomOut = ({ children, duration = 1.5, initialScale = 1.5, setHeight }) => {
  const elementRef = useRef(null);
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const animation = gsap.fromTo(
      element,
      { scale: initialScale },
      {
        scale: 1,
        duration: duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "restart pause restart pause",
          scrub: false,
        },
      }
    );

    ScrollTrigger.refresh();

    return () => {
      animation.scrollTrigger?.kill(); 
    };
  }, []);

  return (
    <div ref={elementRef} style={{ width: "100%", height: setHeight ? setHeight : "100%" }}>
      {children}
    </div>
  );
};

export default ZoomOut;
