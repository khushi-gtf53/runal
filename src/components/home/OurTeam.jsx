"use client";

import React, { useEffect, useRef } from "react";
import { Heading, SubHeading } from "../common/CommonHeading";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import SlideIn from "@/utils/Animations/SlideIn";

gsap.registerPlugin(ScrollTrigger);

const OurTeam = () => {
  const teamSectionRef = useRef(null);
  const leftColContainerRef = useRef(null);
  const leftColContentRef = useRef(null);
  const rightColContainerRef = useRef(null);
  const rightColContentRef = useRef(null);

  useEffect(() => {
    const section = teamSectionRef.current;
    const leftContainer = leftColContainerRef.current;
    const leftContent = leftColContentRef.current;
    const rightContainer = rightColContainerRef.current;
    const rightContent = rightColContentRef.current;

    if (!section || !leftContainer || !leftContent || !rightContainer || !rightContent) return;

    const leftScrollHeight = leftContent.scrollHeight - leftContainer.clientHeight;
    const rightScrollHeight = rightContent.scrollHeight - rightContainer.clientHeight;

    const maxScroll = Math.max(leftScrollHeight, rightScrollHeight);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 0.5,
        start: "top top",
        end: `+=${maxScroll * 1.5}`,
        invalidateOnRefresh: true,
      },
    });

    tl.to(leftContent, { y: -leftScrollHeight, ease: "none" }, 0).to(
      rightContent,
      { y: -rightScrollHeight, ease: "none" },
      0
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={teamSectionRef} className="team w-full relative sm:min-h-screen ">
      <div className="grid grid-cols-12">
        {/* Left side heading */}
        <div className="col-span-12 sm:col-span-5 w-full h-full">
          <div className="flex flex-col py-10 sm:py-0 justify-center w-full h-full relative gap-5 items-center sm:max-w-[60%] mx-auto">
            <div className="absolute inset-0 flex justify-center items-start pointer-events-none">
              <Image
                src="/assets/common/brand_full_pattern.webp"
                alt="Wave Pattern"
                width={400}
                height={400}
                quality={100}
                priority
                className="max-w-full max-h-full object-cover mix-blend-screen opacity-30"
              />
            </div>
            <SlideIn>
              <Heading extraClass={"text-center"}>our team</Heading>
              <SubHeading extraClass={"text-center"}>
                Every Shape, Every curve, every surface is designed to blend with the landscape.
              </SubHeading>
            </SlideIn>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-7 h-full">
          <div className="team flex gap-4 items-start justify-center">
            {/* Left column */}
            <div ref={leftColContainerRef} className="h-[80vh] w-[350px] overflow-hidden">
              <div ref={leftColContentRef} className="flex flex-col items-center gap-8">
                <div className="team_card w-[350px] bg-black rounded-lg overflow-hidden">
                  <Image
                    src="/assets/home/team/1.webp"
                    alt="Rajendra Jain"
                    width={350}
                    height={350}
                    quality={100}
                    className="object-contain w-full h-[250px] sm:h-[350px]"
                  />
                  <div className="member_name flex flex-col gap-2 text-center p-4">
                    <h4 className="capitalize text-primarygold mt-3 tracking-wider minion_font_italic text-xl sm:text-3xl">
                      Rajendra Jain
                    </h4>
                    <p className="capitalize text-primarygold tracking-wider minion_font_italic text-[16px] sm:text-[18px]">
                      Founder
                    </p>
                  </div>
                </div>

                <div className="team_card w-[350px] bg-black rounded-lg overflow-hidden">
                  <Image
                    src="/assets/home/team/2.webp"
                    alt="Priya Sharma"
                    width={350}
                    height={350}
                    quality={100}
                    className="object-contain w-full h-[250px] sm:h-[350px]"
                  />
                  <div className="member_name flex flex-col gap-2 text-center p-4">
                    <h4 className="capitalize text-primarygold mt-3 tracking-wider minion_font_italic text-xl sm:text-3xl">
                      Priya Sharma
                    </h4>
                    <p className="capitalize text-primarygold tracking-wider minion_font_italic text-[16px] sm:text-[18px]">
                      CEO
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div ref={rightColContainerRef} className="h-[80vh] w-[350px] overflow-hidden">
              <div ref={rightColContentRef} className="flex flex-col items-center gap-8">
                <div className="team_card w-[350px] mt-40 bg-black rounded-lg overflow-hidden">
                  <Image
                    src="/assets/home/team/3.webp"
                    alt="Amit Patel"
                    width={350}
                    height={350}
                    quality={100}
                    className="object-contain w-full h-[250px] sm:h-[350px]"
                  />
                  <div className="member_name flex flex-col gap-2 text-center p-4">
                    <h4 className="capitalize text-primarygold mt-3 tracking-wider minion_font_italic text-xl sm:text-3xl">
                      Amit Patel
                    </h4>
                    <p className="capitalize text-primarygold tracking-wider minion_font_italic text-[16px] sm:text-[18px]">
                      Lead Architect
                    </p>
                  </div>
                </div>

                <div className="sm:w-[350px] sm:p-4">
                  <Link href="#">
                    <button className=" bg-black cursor-pointer text-primarygold text-2xl sm:text-3xl px-8 py-2 tracking-wider capitalize minion_font_italic relative overflow-hidden transition-colors duration-300 hover:text-black group w-full flex gap-2 items-center justify-end">
                      <span className="relative z-10 flex gap-2 items-center">
                        our team <IoIosArrowRoundForward size={34} />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;