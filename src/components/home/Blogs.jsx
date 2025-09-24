"use client";

import React, { useEffect, useRef } from 'react'
import { Heading, SubHeading } from '../common/CommonHeading';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Link from 'next/link';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import Image from 'next/image';
import SlideIn from '@/utils/Animations/SlideIn';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Blogs = () => {

    const blogRef = useRef(null);

    const blogData = [
        {
            date: "14 march 2024",
            description: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt fuga, quas quasi asperiores eius illo itaque, provident",
            link: "#"
        },
        {
            date: "24 march 2024",
            description: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt fuga, quas quasi asperiores eius illo itaque, provident",
            link: "#"
        },
        {
            date: "28 march 2024",
            description: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt fuga, quas quasi asperiores eius illo itaque, provident",
            link: "#"
        },
    ]

    useEffect(() => {
        if (blogRef.current) {
            gsap.fromTo(
                blogRef.current.querySelectorAll(".blog_item"),
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: blogRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }
    }, []);

    return (
        <section className="blogs w-full h-auto py-10 md:py-20 bg-[url(/assets/home/blog/blog_bg.webp)] bg-no-repeat bg-center bg-cover">
            <div className="relative max-w-6xl mx-auto h-full flex flex-col items-center sm:text-center px-4">
                <div className="absolute inset-0 flex justify-center mt-[100px] items-start pointer-events-none">
                    <Image
                        src="/assets/common/brand_full_pattern.webp"
                        alt="Wave Pattern"
                        width={400}
                        height={400}
                        quality={100}
                        priority
                        className="max-w-full max-h-full object-cover mix-blend-screen opacity-20"
                    />

                </div>
                <SlideIn>
                    <Heading extraClass={"text-center"}>lastest posts and insights</Heading>
                    <SubHeading extraClass={'sm:max-w-[70%] text-center mx-auto italic'}>
                        Every story shared here is reflection of connection, trust, and transformation
                    </SubHeading>
                </SlideIn>

                <div className="blog_sec relative md:pb-40 mt-3 md:mt-10" ref={blogRef}>
                    {blogData.map((blog, i) => (
                        <div key={i} className="blog_item relative py-5 flex justify-center w-full " >
                            <div className="grid grid-cols-12 gap-3">
                                <div className="col-span-12 sm:col-span-4 blog_date capitalize pt-2 text-primarygold tracking-wider text-[16px]">
                                    {blog.date}
                                    <span className="w-20 ms-4">- - - - - - - - - - -  </span>
                                </div>
                                <div className="col-span-12 sm:col-span-5 blog_description pe-3">
                                    <p className="text-left leading-[30px] tracking-[1px]">
                                        {blog.description}
                                    </p>
                                </div>

                                <div className="col-span-12 sm:col-span-3 blog_view_details flex justify-start sm:ps-10 items-start">
                                    <Link href={blog.link}> <button className='capitalize cursor-pointer tracking-[1px] flex gap-2 items-center text-primarygold'> read more <IoIosArrowRoundForward size={34} /></button></Link>
                                </div>
                            </div>
                        </div>
                    ))}


                    <div className="pagination flex justify-center mt-10">
                        <div className="flex gap-4 items-center">
                            <SlArrowLeft className='text-primarygold' />
                            <div className="pages flex items-center gap-1">
                                <div className="active w-10 h-10 rounded-full flex justify-center items-center bg-[#825314] text-white">1</div>
                                <div className=" w-10 h-10 rounded-full flex justify-center items-center bg-transparent text-white">2</div>
                                <div className=" w-10 h-10 rounded-full flex justify-center items-center bg-transparent text-white">3</div>
                                ...
                            </div>
                            <SlArrowRight className='text-primarygold' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blogs;