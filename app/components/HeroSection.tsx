"use client";

import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="py-10 sm:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <span className="inline-grid h-[1.2em] overflow-hidden align-bottom">
              <span className="animate-role-cycle [grid-area:1/1]">
                Stephan
              </span>
              <span className="animate-role-cycle-delay-1 [grid-area:1/1]">
                Web Developer
              </span>
              <span className="animate-role-cycle-delay-2 [grid-area:1/1]">
                Mobile Developer
              </span>
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I build responsive web and mobile experiences with clean interfaces,
            practical architecture, and attention to the details users notice.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacts"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 text-white text-center transition-colors"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white text-center"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 transition-colors">
                View Projects
              </span>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/bit.png"
              alt="Portrait illustration of Stephan"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={240}
              height={240}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
