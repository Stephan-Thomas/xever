"use client";

import React, { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description:
      "A responsive portfolio built with React components, animated hero text, and project showcases.",
    image: "/images/page.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.google.com",
    previewUrl: "https://www.google.com",
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
  const [tag, setTag] = useState("All");
  const tags = ["All", "Web", "Mobile"];
  const filteredProjects = useMemo(
    () => projectsData.filter((project) => project.tag.includes(tag)),
    [tag]
  );

  return (
    <section id="projects" className="scroll-mt-24 py-12">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-4xl text-white font-bold mb-8 md:mb-12"
      >
        My Projects
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-white flex flex-row justify-center items-center gap-2 py-6"
      >
        {tags.map((projectTag) => (
          <button
            key={projectTag}
            type="button"
            onClick={() => setTag(projectTag)}
            className={`rounded-full border-2 px-6 py-3 text-base sm:text-xl cursor-pointer transition-colors ${
              tag === projectTag
                ? "border-purple-500 text-white"
                : "border-slate-600 text-[#ADB7BE] hover:border-white hover:text-white"
            }`}
            aria-pressed={tag === projectTag}
          >
            {projectTag}
          </button>
        ))}
      </motion.div>
      <motion.div layout className="grid md:grid-cols-3 gap-8 md:gap-12">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -50 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.05, 
                transition: { duration: 0.2, delay: 0 } 
              }}
              className="h-full"
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
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
