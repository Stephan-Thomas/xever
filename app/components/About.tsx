"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";
import { CheckBadgeIcon, AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/solid";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    icon: <CheckBadgeIcon className="w-6 h-6 text-purple-500 flex-shrink-0" />,
    items: [
      "React, Next.js, TypeScript, and Tailwind CSS",
      "Node.js APIs, authentication, and databases",
      "Mobile-first UI implementation and responsive layouts",
      "Debugging, performance tuning, and deployment",
    ],
  },
  {
    title: "Education",
    id: "education",
    icon: <AcademicCapIcon className="w-6 h-6 text-purple-500 flex-shrink-0" />,
    items: [
      "Computer science and software engineering fundamentals",
      "Ongoing study in frontend architecture and backend systems",
      "Hands-on training through production-style portfolio projects",
    ],
  },
  {
    title: "Experience",
    id: "experience",
    icon: <BriefcaseIcon className="w-6 h-6 text-purple-500 flex-shrink-0" />,
    items: [
      "Built portfolio, landing page, and commerce interfaces",
      "Created reusable React components and interaction states",
      "Integrated APIs, forms, and project deployment pipelines",
    ],
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
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/about.png"
            alt="Workspace illustration"
            width={500}
            height={500}
            className="mx-auto"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-4 md:mt-0 text-left flex flex-col h-full"
        >
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
          <div className="my-8 text-[#ADB7BE] min-h-[220px]">
            {TAB_DATA.map((t) => (
              t.id === tab && (
                <div key={t.id} className="flex flex-col gap-3">
                  {t.items.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="flex items-start gap-3 bg-[#181818] p-4 rounded-xl border border-[#33353F] shadow-sm hover:border-purple-500/50 hover:bg-[#1f1f1f] transition-colors"
                    >
                      <div className="mt-0.5">
                        {t.icon}
                      </div>
                      <span className="text-gray-200">{item}</span>
                    </motion.div>
                  ))}
                </div>
              )
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
