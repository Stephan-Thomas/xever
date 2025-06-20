"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Procastinating</li>
        <li>Googling stuff</li>
        <li>Sleeping</li>
        <li>Whinning people</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>🎓 BSc in StackOverflowing</li>
        <li> 💻 Git Rebase Survivor (3-time champ)</li>
        <li>📚 Minor in Asking ChatGPT at 3AM</li>
        <li>🛠️ Senior Vibe Engineer @ Freestyle Coding Corp</li>
        <li>🎓 MSc in Copy-Pasting with Honors</li>
        <li>🪲 Bug Breeder & Debugging Evangelist</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>🧙 Freelance Vibe Developer</li>
        <li>🦾 Intern @ Ctrl+C Ctrl+V Innovations</li>
        <li>🏢 Senior Stack Overflow Consultant</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about.png"
          alt="about image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I specialize in Pull Stack development—mostly because I couldn’t
            choose between frontend dopamine hits and backend existential
            crises. If you're looking for: Pixel-perfect UIs that somehow still
            break on mobile <br /> ✔️ Clean backend logic duct-taped with
            console.logs
            <br /> ✔️ Random commits at 3AM with messages like fix?? <br /> ✔️
            And an unhealthy obsession with dark mode <br /> ✔️✔️ Then
            congrats—you just found your dev. I don’t just write code. I vibe
            with it. Sometimes it vibes back. Most times it throws errors. But I
            always win. Eventually. Sometimes.
          </p>
          <div className="flex flex-row mt-8">
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
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="my-8">
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
