"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="text-white py-24 sm:py-32" id="about">
      <div className="container mx-auto px-4 md:px-12 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight">
            About Me
          </h2>
          <div className="text-[#a1a1aa] text-lg md:text-xl leading-relaxed space-y-6 font-light">
            <p>
              I'm a full-stack developer who enjoys turning ideas into fast,
              responsive, and user-friendly web applications. I primarily work
              with modern JavaScript technologies, building clean interfaces on
              the frontend and reliable, scalable systems on the backend.
              Whether it's solving complex technical problems or refining the
              smallest UI details, I genuinely enjoy the process of creating
              software that people actually want to use.
            </p>
            <p>
              I'm always learning, experimenting with new tools, and looking for
              better ways to build. Technology moves fast, and I like keeping up
              with it—not because I have to, but because there's always
              something interesting waiting around the corner. I believe good
              code isn't just about making things work; it's about making them
              maintainable, efficient, and enjoyable for the next developer who
              has to read it (which is usually future me).
            </p>
            <p>
              When I'm not coding, you'll probably find me exploring new
              technologies, brainstorming project ideas, or convincing myself
              that the bug I've been chasing for three hours is "definitely just
              a small typo." Most of the time, it actually is. I enjoy building
              things that solve real problems, collaborating with others, and
              continuously pushing myself to become a better developer with
              every project I take on.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
