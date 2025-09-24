"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Heading, SubHeading } from "../common/CommonHeading";
import FollowArrow from "@/utils/FollowArrow";
import SlideIn from "@/utils/Animations/SlideIn";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IconicProperties = () => {
  const sectionRef = useRef(null);

useEffect(() => {
  const ctx = gsap.context(() => {
    const boxes = gsap.utils.toArray(".reveal-box");

    const master = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=2000", 
        scrub: false,
        pin: true,
      },
    });

    boxes.forEach((box) => {
      const slices = box.querySelectorAll(".uncover_slice");
      const img = box.querySelector("img");
      const text = box.querySelector(".project-text");

      const tl = gsap.timeline();

      tl.fromTo(
        slices,
        { scaleY: 1 },
        {
          scaleY: 0,
          duration: 2,
          stagger: 0.2,
          transformOrigin: "center bottom",
        }
      )
        .to(img, { scale: 1.2, duration: 1 }, "<")
        .fromTo(
          text,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.2"
        );

      master.add(tl, 0);
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);


  return (
    <section
      ref={sectionRef}
      className="relative w-full h-auto bg-black text-white overflow-hidden py-10 md:py-14"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <Image
          src="/assets/common/brand_pattern.webp"
          alt="Brand Pattern Background"
          width={1400}
          height={1400}
          quality={100}
          className="max-w-full max-h-full object-contain"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative sm:max-w-7xl mx-auto h-full flex flex-col items-center text-center px-4">
        <SlideIn>
          <Heading>Iconic Properties</Heading>
          <SubHeading extraClass={"sm:max-w-[70%] mx-auto italic"}>
            Every shape, every curve, every surface is designed to blend with
            the landscape
          </SubHeading>
        </SlideIn>

        {/* Projects */}
        <SlideIn delay={0.6}>
          <div className="projects mt-12 flex flex-col md:flex-row gap-12 md:gap-20 justify-center items-center">
            {/* Residential */}
            <FollowArrow>
              <div className="reveal-box border-8 border-[#2C2C2C]/50 p-6 bg-black mx-auto w-[90%] sm:w-[360px] md:w-[460px]">
                <div className="relative overflow-hidden">
                  <Image
                    src="/assets/home/iconic_properties/residential.webp"
                    alt="Residential Property"
                    width={500}
                    height={650}
                    className="w-full h-auto object-cover"
                    priority
                  />

                  <div className="uncover absolute inset-0 flex">
                    <div className="uncover_slice flex-1 bg-black"></div>
                    <div className="uncover_slice flex-1 bg-black"></div>
                    <div className="uncover_slice flex-1 bg-black"></div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>

                  <div className="absolute bottom-4 w-full project-text opacity-0">
                    <h3 className="capitalize minion_font_italic text-gradient-gold text-3xl tracking-wider">
                      residential <br /> projects
                    </h3>
                  </div>
                </div>
              </div>
            </FollowArrow>

            {/* Commercial */}
            <FollowArrow>
              <div className="reveal-box border-8 border-[#2C2C2C]/50 p-6 bg-black mx-auto w-[90%] sm:w-[360px] md:w-[460px]">
                <div className="relative overflow-hidden">
                  <Image
                    src="/assets/home/iconic_properties/commercial.webp"
                    alt="Commercial Property"
                    width={500}
                    height={650}
                    className="w-full h-auto object-cover"
                    priority
                  />

                  <div className="uncover absolute inset-0 flex">
                    <div className="uncover_slice flex-1 bg-black"></div>
                    <div className="uncover_slice flex-1 bg-black"></div>
                    <div className="uncover_slice flex-1 bg-black"></div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>

                  <div className="absolute bottom-4 w-full project-text opacity-0">
                    <h3 className="capitalize minion_font_italic text-gradient-gold text-3xl tracking-wider">
                      commercial <br /> projects
                    </h3>
                  </div>
                </div>
              </div>
            </FollowArrow>
          </div>
        </SlideIn>
      </div>
    </section>
  );
};

export default IconicProperties;
