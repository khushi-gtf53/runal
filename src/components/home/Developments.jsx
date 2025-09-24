"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { SubHeading } from "../common/CommonHeading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Developments = () => {
  const imgRef = useRef(null);
  const headingRef = useRef(null);
  const pointersRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { scale: 0.5, opacity: 0.5 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (pointersRef.current) {
      gsap.fromTo(
        pointersRef.current.querySelectorAll(".point"),
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: pointersRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

  }, []);

  return (
    <section className="relative w-full sm:h-screen py-10 md:py-20 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <Image
          ref={imgRef}
          src="/assets/common/flame_pattern.webp"
          alt="Flame Pattern"
          width={1200}
          height={1200}
          quality={100}
          className="max-w-full max-h-full object-contain opacity-100"
          priority
        />
      </div>

      <div className="relative z-10 max-w-[90%] mx-auto h-full sm:flex justify-between items-center">
        <div ref={headingRef} className="subheading max-w-lg text-center opacity-0">
          <SubHeading extraClass="text-gradient-gold">
            Creating the world's finest developments
          </SubHeading>
        </div>

        <div ref={pointersRef} className="pointers flex flex-col mt-10 md:mt-0 gap-10 md:pe-40">
          <div className="point text-center opacity-0">
            <h3 className="heading capitalize minion_font_italic mb-2 tracking-wider text-gradient-gold text-[28px] md:text-[34px]">
              2.5 million
            </h3>
            <p className="tracking-wider text-[16px]">Sq.Ft. of space delivered</p>
          </div>
          <div className="point text-center opacity-0">
            <h3 className="heading uppercase minion_font_italic mb-2 tracking-wide text-gradient-gold text-[28px] md:text-[34px]">
              30 +
            </h3>
            <p className="tracking-wider text-[16px]">Residential Projects</p>
          </div>
          <div className="point text-center opacity-0">
            <h3 className="heading uppercase minion_font_italic mb-2 tracking-wider text-gradient-gold text-[28px] md:text-[34px]">
              05 +
            </h3>
            <p className="tracking-wider text-[16px]">Commercial Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developments;