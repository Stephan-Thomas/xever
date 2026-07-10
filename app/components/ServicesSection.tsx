"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Product\nDesigner.",
    projects: "124 Projects",
    icon: (
      <svg
        className="w-8 h-8 sm:w-10 sm:h-10 text-current flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
    isPrimary: true,
  },
  {
    title: "Branding\nDesigner.",
    projects: "37 Projects",
    icon: (
      <svg
        className="w-8 h-8 sm:w-10 sm:h-10 text-current flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    ),
    isPrimary: false,
  },
  {
    title: "Full Stack\nDeveloper.",
    projects: "62 Projects",
    icon: (
      <svg
        className="w-8 h-8 sm:w-10 sm:h-10 text-current flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    isPrimary: false,
  },
];

const ServicesSection = () => {
  return (
    <section className="relative text-white" id="services">
      {/* Split background */}
      <div className="absolute inset-0 -z-10 flex flex-col">
        <div className="flex-1 bg-[#2b2d3a]"></div>
        <div className="flex-1 bg-[#232532]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 xl:px-24 pt-24 sm:pt-32 pb-16 sm:pb-24">
        {/* Top 2-Column Text Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-20 md:mb-28">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-[#a1a1aa] text-sm uppercase tracking-widest font-semibold mb-6 flex items-center">
              <span className="w-4 h-px bg-[#a1a1aa] mr-3"></span> Expertise
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
              Any Type Of Query
              <br />& Discussion.
            </h2>
            <p className="text-[#a1a1aa] text-sm leading-relaxed mb-10 max-w-sm">
              Feel free to reach out for project inquiries, collaborations, or
              just a friendly chat. I'm always excited to discuss new
              opportunities.
            </p>
            <a
              href="mailto:stephanthomasc@gmail.com"
              className="text-purple-600 font-semibold text-lg hover:text-purple-400 transition-colors inline-flex items-center group"
            >
              hi@stephan.com
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform"
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
            </a>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-xl sm:text-2xl font-medium leading-relaxed mb-8">
              You can't use up creativity, the more you use, more you have in
              your signifant mind.
            </p>
            <p className="text-[#a1a1aa] text-sm leading-relaxed mb-12 max-w-sm">
              Product Designer & Full Stack Developer who somehow convinced 187
              clients that I know what I’m doing. Let’s make something awesome
              before I run out of clever lorem ipsum.
            </p>

            <div className="flex items-center gap-10">
              <div className="flex items-end gap-3">
                <span className="text-5xl font-bold text-purple-600">6</span>
                <span className="text-xs text-white font-medium w-16 leading-tight pb-1">
                  Years of
                  <br />
                  Experience.
                </span>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-5xl font-bold text-purple-600">187</span>
                <span className="text-xs text-white font-medium w-16 leading-tight pb-1">
                  Satisfied
                  <br />
                  Clients.
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Square Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`aspect-square flex items-center justify-center p-8 sm:p-10 transition-transform duration-300 hover:-translate-y-2 ${
                service.isPrimary
                  ? "bg-purple-600 text-white"
                  : "bg-[#3d3f50] text-white hover:bg-[#46485b]"
              }`}
            >
              <div className="flex items-start gap-4 sm:gap-6 w-full">
                {service.icon}
                <div className="flex flex-col">
                  <h3 className="text-2xl sm:text-3xl font-semibold leading-tight whitespace-pre-line mb-3">
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm ${service.isPrimary ? "text-purple-200" : "text-[#a1a1aa]"}`}
                  >
                    {service.projects}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
