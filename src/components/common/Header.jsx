"use client";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 z-20 w-full text-white">      
      <div className="relative flex justify-between montserrat_medium items-center max-w-[90%] mx-auto py-8">
        {/* Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li>
              <Link  href="#" className="uppercase tracking-widest hover:text-gray-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="uppercase tracking-widest hover:text-gray-300 transition"
              >
                Residential
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="uppercase tracking-widest hover:text-gray-300 transition"
              >
                Commercial
              </Link>
            </li>
          </ul>
        </nav>

        {/* Logo */}
        <div className="logo flex-shrink-0">
          <Link href="#">
            <Image
              src="/assets/common/logo.webp"
              alt="Header Logo"
              width={160}
              height={60}
              priority
              className="w-auto h-8 sm:h-12 object-contain"
            />
          </Link>
        </div>

        {/* CTA + Menu */}
        <div className="header_cta flex sm:gap-6 items-center">
          <div className="hidden sm:block call uppercase tracking-widest text-sm">
            Call:{" "}
            <a
              href="tel:+91-9168666175"
              className="hover:text-gray-300 transition"
            >
              +91-9168666175
            </a>
          </div>
          <button aria-label="Open menu" className="hamburger_menu cursor-pointer flex flex-col gap-2">
           <div className="w-8 h-[1.5px] rounded-2xl bg-white"/>
           <div className="w-8 h-[1.5px] rounded-2xl bg-white"/>
           <div className="w-8 h-[1.5px] rounded-2xl bg-white"/>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
