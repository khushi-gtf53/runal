"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SlideIn = ({ children, duration = 1, delay = 0.2 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const animation = gsap.fromTo(
      element,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration,
        delay,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
          scrub: false,
        },
      }
    );

    return () => {
      animation.scrollTrigger?.kill(); 
    };
  }, [duration, delay]);

  return <div ref={elementRef}>{children}</div>;
};

export default SlideIn;
