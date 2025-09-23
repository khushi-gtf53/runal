"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "Residential Projects",
    img: "/assets/home/timeline/1.webp",
    description:
      "We've been living 32 glorious years of quality construction. Our structures are vivid reflections of the umpteen efforts and passion that we put in to build an awe-inspiring lifestyle.",
  },
  {
    name: "Commercial Projects",
    img: "/assets/home/timeline/1.webp",
    description:
      "Our commercial spaces are designed to blend innovation with functionality, delivering unmatched business environments.",
  },
  {
    name: "Mixed Use Projects",
    img: "/assets/home/timeline/1.webp",
    description:
      "Blending residential and commercial excellence, our mixed-use developments redefine urban living.",
  },
];

const ProjectTimeline = () => {
  const sectionRef = useRef(null);
  const slidesRef = useRef(null);
  const lineRef = useRef(null);
  const progressRef = useRef(null);
  const navBtnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".project");

      // Horizontal scroll
      const horizontalTween = gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: "none",
        scrollTrigger: {
          id: "timeline-scroll",
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + slidesRef.current.offsetWidth,
        },
      });

      // Line animation
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            toggleActions: "play none none none",
          },
        }
      );

      // Progress bar
      gsap.to([navBtnRef.current], {
        x: () => window.innerWidth * 0.85 - 80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => "+=" + slidesRef.current.offsetWidth,
          scrub: true,
        },
      });

      // Animate project content
      slides.forEach((slide) => {
        const name = slide.querySelector(".project_name h3");
        const pimage = slide.querySelector(".project_img img");
        const description = slide.querySelector(".project_details .description");

        if (name) {
          gsap.fromTo(
            name,
            { x: -100, opacity: 0.5 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                containerAnimation: horizontalTween,
                trigger: slide,
                start: "left center",
                end: "right center",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        if (pimage) {
          gsap.fromTo(
            pimage,
            { opacity: 0.2 },
            {
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                containerAnimation: horizontalTween,
                trigger: slide,
                start: "left center",
                end: "right center",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        if (description) {
          gsap.fromTo(
            description,
            { x: 100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                containerAnimation: horizontalTween,
                trigger: slide,
                start: "left center",
                end: "right center",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleNext = () => {
    const slides = gsap.utils.toArray(".project");
    const st = ScrollTrigger.getById("timeline-scroll");
    if (!st) return;

    const progressPerSlide = 1 / (slides.length - 1);
    const nextProgress = Math.min(
      1,
      Math.round(st.progress / progressPerSlide + 1) * progressPerSlide
    );

    gsap.to(st, {
      progress: nextProgress,
      duration: 1,
      ease: "power2.inOut",
    });
  };

  return (
    <section ref={sectionRef} className="timeline w-full min-h-screen text-white py-16 sm:py-24 relative overflow-hidden">
      <div ref={slidesRef} className="timeline flex w-full h-full">
        {projects.map((project, i) => (
          <div key={i} className="project flex-shrink-0 w-screen h-full snap-start z-30 relative px-6 sm:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-3 h-full">
              {/* Project Name */}
              <div className="project_name flex sm:block justify-center sm:mt-28">
                <h3 className="capitalize text-xl sm:text-4xl text-primarygold minion_font sm:max-w-[60%] mx-auto text-center tracking-widest">
                  {project.name}
                </h3>
              </div>

              <div className="project_img relative z-20 flex justify-center items-center">
                <Image
                  src={project.img}
                  alt={project.name}
                  width={600}
                  height={600}
                  priority={i === 0} 
                  className="max-h-[300px] sm:max-h-[70vh]  object-contain"
                />
              </div>

              {/* Project Description */}
              <div className="project_details sm:max-w-[75%] leading-[22px] sm:leading-[26px] tracking-[0.5px] sm:tracking-[1px] ms-auto flex flex-col justify-end sm:mb-36 text-center sm:text-left">
                <p className="description">{project.description}</p>
              </div>
            </div>

            <div className={`runal_logo absolute top-1 -translate-y-1 opacity-70 ${i % 2 === 0 ? "right-0" : "left-0"}`}>
              <Image
                src="/assets/common/logo_half.webp"
                alt="Runal Decorative Logo"
                width={160}
                height={200}
                className={`h-[300px] ${i % 2 === 0 ? "scale-x-100" : "scale-x-[-1]"
                  }`}
              />
            </div>
            
            <div className={`runal_logo absolute top-1 -translate-y-1 opacity-70 ${i % 2 === 0 ? "left-0" : "right-0"}`}>
              <Image
                src="/assets/common/logo_half.webp"
                alt="Runal Decorative Logo"
                width={160}
                height={200}
                className={`h-[300px] ${i % 2 === 0 ? "scale-x-[-1]" : "scale-x-100"
                  }`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Line */}
      <div ref={lineRef} className="absolute bottom-48 left-0 z-0 w-full h-[1px] bg-white/40 scale-x-0"/>

      {/* Navigation Button */}
      <div ref={navBtnRef} className="navigation_btn z-30 absolute bottom-40 left-[15%] cursor-pointer" onClick={handleNext}>
        <div className="border absolute -bottom-1 -left-1 border-white w-18 h-18 rounded-full opacity-80"></div>
        <div className="border absolute -bottom-2 -left-2 border-white w-20 h-20 rounded-full opacity-50"></div>
        <div className="bg-white text-black flex justify-center items-center w-16 h-16 rounded-full">
          <IoIosArrowRoundForward size={34} />
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;