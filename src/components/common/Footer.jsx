"use client";
import Image from 'next/image';
import React from 'react'
import { BsTwitterX } from 'react-icons/bs';
import { CgFacebook } from 'react-icons/cg';
import { FaYoutube } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { RiInstagramFill } from 'react-icons/ri';
import { Heading } from './CommonHeading';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="relative w-full ">
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
        <div className="max-w-[80%] mx-auto ">
            <div className="top_footer py-14">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 sm:col-span-5">
                        <div className="footer_logo">
                            <img src="/assets/common/logo.webp" alt="" />
                        </div>

                        <div className="contact_details flex flex-col space-y-4 mt-10 sm:max-w-[80%]">
                            <div className="flex gap-2">
                                <h4>address: </h4>
                                <p>Runal Gateway, Off Mumbai-Pune Expressway Bypass Road,Near Sentosa Resorts & Water Park, PCMC, Pune - 412101</p>
                            </div>
                            <div className="flex gap-3">
                                <h4>Phone No: </h4>
                                <p><a href="tel:+91-916 8666 175">+91-916 8666 175</a></p>
                            </div>
                            <div className="flex gap-3">
                                <h4>Email Us: </h4>
                                <p><a href="mailto:info@runal.com">info@runal.com</a></p>
                            </div>
                            <div className="flex gap-3">
                                <h4>Follow Us:</h4>
                                <div className="social_links flex gap-2 items-center">
                                    <BsTwitterX size={18} />
                                    <RiInstagramFill size={18} />
                                    <CgFacebook size={18} />
                                    <FaYoutube size={18} />
                                    <GrLinkedinOption size={18} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-6 sm:col-span-2 mt-10 sm:mt-0 ">
                        <Heading extraClass={"text-[16px]"}>quick links</Heading>

                        <div className="links mt-10">
                            <ul className="flex flex-col gap-3">
                                <Link href="#"><li>home</li></Link>
                                <Link href="#"><li>the brand</li></Link>
                                <Link href="#"><li>nri corner</li></Link>
                                <Link href="#"><li>emi calculator</li></Link>
                                <Link href="#"><li>downloads</li></Link>
                                <Link href="#"><li>life at runal</li></Link>
                                <Link href="#"><li>blogs</li></Link>
                                <Link href="#"><li>contact</li></Link>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-span-6 sm:col-span-2 mt-10 sm:mt-0">
                        <div className="flex flex-col items-end ">
                            <div>
                                <Heading extraClass={"text-[16px]"}>our projects</Heading>

                                <div className="links mt-10">
                                    <ul className="flex flex-col gap-3">
                                        <Link href="#"><li>runal spacio</li></Link>
                                        <Link href="#"><li>runal gateway</li></Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-3">
                        <div className="flex justify-end">
                            <img src="/assets/common/footer_download.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom_footer w-full border-t border-[#EABB85]/30 text-center">
                <div className="sm:flex justify-between items-center py-3 text-[12px]">
                    <div className="copyright">
                        © 2025 Runal Developers  ISO 9001: 2015 Certified | Curated by: <a href="http://gtftechnologies.com" target="_blank" rel="noopener noreferrer"> GTF Technologies</a>
                    </div>

                    <div className="documents flex gap-2 items-center  py-2">
                       <Link href="#"> Privacy Policy</Link> <span>|</span> 
                       <Link href="#"> Terms & Conditions </Link> <span>|</span> 
                       <Link href="#"> Disclaimer </Link> 
                    </div>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer