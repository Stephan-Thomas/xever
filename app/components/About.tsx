"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>React, Next.js, TypeScript, and Tailwind CSS</li>
        <li>Node.js APIs, authentication, and database-backed features</li>
        <li>Mobile-first UI implementation and responsive layouts</li>
        <li>Debugging, performance tuning, and deployment workflows</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Computer science and software engineering fundamentals</li>
        <li>Ongoing study in frontend architecture and backend systems</li>
        <li>Hands-on training through production-style portfolio projects</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Built portfolio, landing page, and commerce interfaces</li>
        <li>Created reusable React components and polished interaction states</li>
        <li>Integrated APIs, forms, and project deployment pipelines</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white scroll-mt-24">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about.png"
          alt="Workspace illustration"
          width={500}
          height={500}
          className="mx-auto"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl leading-relaxed">
            I am a full-stack developer focused on building practical,
            accessible products for the web and mobile. I enjoy turning rough
            ideas into clear interfaces, reliable components, and maintainable
            code that is easy to extend.
          </p>
          <div className="flex flex-row flex-wrap gap-4 mt-8" role="tablist">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="my-8 text-[#ADB7BE]">
            {TAB_DATA.find((t) => t.id === tab)?.content || (
              <p>Nothing to show.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
