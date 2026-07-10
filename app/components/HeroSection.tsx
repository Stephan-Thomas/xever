"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 flex items-center min-h-screen bg-[#2b2d3a]">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center w-full">
          {/* Left Column: Name and Socials */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 flex flex-col justify-center h-full pt-8 lg:pt-0"
          >
            <h1 className="text-white text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.1] tracking-tight mb-6 min-h-[160px] md:min-h-[190px] lg:min-h-[200px]">
              <TypeAnimation
                sequence={["Stephan\nThomas.", 1000]}
                wrapper="span"
                speed={50}
                repeat={0}
                cursor={false}
                style={{ whiteSpace: "pre-line", display: "inline-block" }}
              />
            </h1>
            <div className="w-16 h-1.5 bg-purple-600 mb-auto lg:mb-32"></div>

            <div className="flex items-center gap-6 mt-8 lg:mt-auto">
              <Link
                href="https://dribbble.com"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-transparent text-[#a1a1aa] transition-all duration-300 hover:text-white hover:border-[#EA4C89] hover:shadow-[0_0_10px_#EA4C89]"
              >
                <span className="sr-only">Dribbble</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.156-.137-.322-.206-.489.583-1.832.96-3.766.974-3.844.757.348 1.458.784 2.083 1.305.352-.614.75-1.284 1.162-2.015zm-2.001-1.39c-.392.545-.826 1.054-1.298 1.523-.016-.01-.39-1.921-.99-3.738 1.258-.292 2.656-.475 4.19-.533-.497-.905-1.144-1.713-1.902-2.39zM12 3.992c1.782 0 3.425.594 4.747 1.583-.005.016-.275.92-.816 2.684-1.464-.176-2.909-.047-4.225.106-2.583-3.411-3.666-4.667-3.714-4.721C9.255 3.197 10.59 2.99 12 2.992zM5.592 5.094c.046.05 1.114 1.298 3.655 4.673-1.624.595-3.085 1.428-3.085 1.428-.621-1.874-.185-3.924.965-5.596l-.535-.505zm-1.077 6.442c0-.18.016-.358.043-.532 0 0 1.54-.863 3.32-1.492-.12.285-.236.574-.344.872-3.179 1.127-4.887 2.766-4.945 2.82a8.528 8.528 0 011.926-1.668zM5.19 16.71c.058-.052 1.83-1.758 5.176-2.981.428 1.168.805 2.455 1.1 3.864-2.825.962-4.935 3.015-5.006 3.087a8.498 8.498 0 01-1.27-3.97zM12 20.009c-1.393 0-2.712-.338-3.882-.932.072-.072 2.22-2.164 5.155-3.176.315 1.432.551 2.842.66 4.092-.614.15-1.26.233-1.933.233v-.217zM15.42 18.232c-.092-1.127-.308-2.428-.604-3.766 2.723-.42 5.568.103 5.862.158a8.502 8.502 0 01-5.258 3.608z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="https://instagram.com"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-transparent text-[#a1a1aa] transition-all duration-300 hover:text-white hover:border-[#E1306C] hover:shadow-[0_0_10px_#E1306C]"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="https://linkedin.com"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-transparent text-[#a1a1aa] transition-all duration-300 hover:text-white hover:border-[#0077b5] hover:shadow-[0_0_10px_#0077b5]"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Middle Column: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-1 lg:order-2 place-self-center w-full max-w-sm mx-auto relative z-10"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/images/bit.png"
                alt="Portrait of Stephan"
                className="object-contain"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority
              />
            </div>
          </motion.div>

          {/* Right Column: Intro text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-3 lg:order-3 flex flex-col justify-center text-left pt-8 lg:pt-0"
          >
            <p className="text-[#a1a1aa] text-sm uppercase tracking-widest font-semibold mb-6 flex items-center">
              <span className="w-4 h-px bg-[#a1a1aa] mr-3"></span> Introduction
            </p>

            <h2 className="text-white text-2xl lg:text-3xl font-medium leading-snug mb-6">
              Product Designer and Developer, based in Nigeria.
            </h2>

            <p className="text-[#71717a] text-sm leading-relaxed mb-10 max-w-sm">
              I design and build digital products that users love. Specializing
              in product design and full-stack development, I create seamless
              experiences from concept to code.
            </p>

            <Link
              href="#about"
              className="text-purple-600 font-medium text-lg hover:text-purple-400 transition-colors flex items-center gap-2 group w-fit"
            >
              <span className="underline decoration-2 underline-offset-8">
                My story
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:translate-x-2 transition-transform ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
