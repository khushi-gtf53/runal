"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { SubHeading, Heading } from "../common/CommonHeading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SlideIn from "@/utils/Animations/SlideIn";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // const curtainRef = useRef(null);

  // useEffect(() => {
  //   if (!curtainRef.current) return;

  //   gsap.fromTo(
  //     curtainRef.current,
  //     { scaleX: 0, transformOrigin: "left left" },
  //     {
  //       scaleX: 1,
  //       duration: 2,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: curtainRef.current,
  //         start: "top 50%",
  //         toggleActions: "play none none reverse",
  //       },
  //     }
  //   );
  //}, []);

  return (
    <section className="relative w-full sm:h-screen pt-10 md:pt-20 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none overflow-hidden">
        <div
          // ref={curtainRef}
          className="w-full h-full ">
          <Image
            src="/assets/common/wave_pattern.webp"
            alt="Wave Pattern"
            width={1600}
            height={1600}
            quality={100}
            priority
            className="w-full h-full object-contain mix-blend-screen opacity-40"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative sm:max-w-[50%] mx-auto h-full flex flex-col justify-center items-center text-center px-4">
        <SlideIn>
          <Heading>About Us</Heading>
          <SubHeading extraClass={"minion_font"}>
            Creating the world's finest developments
          </SubHeading>

          <p className="description font-[100]">
            We've been living 32 glorious years of quality construction. Our
            structures are vivid reflections of the umpteen efforts and passion
            that we put in to build an awe-inspiring lifestyle. We are one of the
            finest builders in Pune, known for our quality construction. We build
            Quality. We are Quality!
          </p>
        </SlideIn>

        <button className="btn-radial mt-14 border border-[#EAC78E] bg-black text-[#EAC78E] text-base px-8 py-2 tracking-wider capitalize relative transition-colors duration-500 hover:text-black">
          Know More
        </button>
      </div>
    </section>
  );
};

export default About;