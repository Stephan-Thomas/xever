"use client";

import React, { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";

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
      <h2 className="text-center text-4xl text-white font-bold mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
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
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
