"use client";

import React, { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Edumonitor",
    description:
      "An Intelligent Student Performance Monitoring System with Multi-Factor Attendance Verification.",
    image: "/images/edimonitor2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Stephan-Thomas/edu-monitor",
    previewUrl: "https://edu-monitor-nine.vercel.app/",
  },
  {
    id: 2,
    title: "Photography Portfolio Website",
    description:
      "A visual portfolio layout for photographers with gallery-first project presentation.",
    image: "/images/page1.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.google.com",
    previewUrl: "https://www.google.com",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description:
      "A commerce interface with product cards, browsing flows, and conversion-focused UI states.",
    image: "/images/page3.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.google.com",
    previewUrl: "https://www.google.com",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description:
      "A mobile ordering concept with category browsing and streamlined checkout screens.",
    image: "/images/page-2.png",
    tag: ["All", "Mobile"],
    previewUrl: "https://www.google.com",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description:
      "A starter template for Firebase-backed React apps with reusable auth and data patterns.",
    image: "/images/page4.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.google.com",
    previewUrl: "https://www.google.com",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description:
      "A structured learning roadmap covering frontend, backend, database, and deployment skills.",
    image: "/images/page.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.google.com",
    previewUrl: "https://www.google.com",
  },
];

const ProjectsSection = () => {
  // Split projects for the two-column masonry layout
  const leftColumnProjects = projectsData.filter((_, i) => i % 2 === 0);
  const rightColumnProjects = projectsData.filter((_, i) => i % 2 !== 0);

  return (
    <section id="projects" className="scroll-mt-24 py-24 sm:py-32 bg-[#232532]">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
            {/* Header Block inside the left column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="pt-4 pb-12"
            >
              <p className="text-[#a1a1aa] text-sm uppercase tracking-widest font-semibold mb-6 flex items-center">
                <span className="w-4 h-px bg-[#a1a1aa] mr-3"></span> Portfolio
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white mb-6">
                All Creative Works,
                <br />
                <span className="text-[#a1a1aa] font-normal">
                  Selected projects.
                </span>
              </h2>
              <p className="text-[#a1a1aa] text-sm leading-relaxed mb-10 max-w-sm">
                A selection of recent projects where I've handled both product
                design and full-stack development. Each project reflects my
                focus on creating intuitive, high-performing digital
                experiences.
              </p>
            </motion.div>

            {/* Left Column Projects */}
            {leftColumnProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                />
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 pt-0 md:pt-32">
            {/* Right Column Projects */}
            {rightColumnProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
