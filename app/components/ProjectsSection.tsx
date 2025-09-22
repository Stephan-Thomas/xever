import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/page.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.google.com",
    previewUrl: "https://www.google.com",
  },
  {
    id: 2,
    title: "Photography Portfolio Website",
    description: "Project 2 description",
    image: "/images/page1.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.google.com",
    previewUrl: "https://www.google.com",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/page3.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.google.com",
    previewUrl: "https://www.google.com",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/page3.png",
    tag: ["All", "Mobile"],
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Project 5 description",
    image: "/images/page4.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.google.com",
    previewUrl: "https://www.google.com",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 6 description",
    image: "/images/page.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.google.com",
    previewUrl: "https://www.google.com",
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl text-white font-bold mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <button className="rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer">
          All
        </button>
        <button className="rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer">
          Web
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            // tag={project}
            gitUrl={project.gitUrl || ""}
            previewUrl={project.previewUrl || ""}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
