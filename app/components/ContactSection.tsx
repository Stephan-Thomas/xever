"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:stephanthomasc@gmail.com?subject=New Project Inquiry from ${formData.name}&body=${formData.project}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contacts" className="text-white py-24 sm:py-32 bg-[#2b2d3a]">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 lg:gap-32">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
              Got a project?
              <br />
              <span className="text-[#a1a1aa] font-normal">Let's talk.</span>
            </h2>
            <p className="text-[#a1a1aa] text-sm leading-relaxed mb-16 max-w-sm">
              I'm currently available for new opportunities and interesting
              projects. Feel free to reach out — whether you have a clear brief
              or just a rough idea.
            </p>
            <a
              href="mailto:stephanthomasc@gmail.com"
              className="text-purple-600 font-semibold text-lg hover:text-purple-400 transition-colors inline-flex items-center group w-fit"
            >
              hi@stephan.com
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-3 group-hover:translate-x-2 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-12">
              Estimate your project?
              <br />
              <span className="text-[#a1a1aa] font-normal">
                Let me know here.
              </span>
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  placeholder="What's your name?"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-[#3d3f50] py-4 text-white placeholder:text-white font-medium focus:outline-none focus:border-purple-600 transition-colors"
                />
              </div>

              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  placeholder="Your fancy email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-[#3d3f50] py-4 text-white placeholder:text-white font-medium focus:outline-none focus:border-purple-600 transition-colors"
                />
              </div>

              <div className="relative group flex items-end">
                <input
                  type="text"
                  id="project"
                  placeholder="Tell me about your project"
                  required
                  value={formData.project}
                  onChange={(e) =>
                    setFormData({ ...formData, project: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-[#3d3f50] py-4 pr-20 text-white placeholder:text-white font-medium focus:outline-none focus:border-purple-600 transition-colors"
                />
                <div className="absolute right-0 bottom-4 flex items-center gap-4 text-[#71717a]">
                  <button
                    type="button"
                    aria-label="Attach file"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    <svg
                      className="w-5 h-5 transform -rotate-45"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      />
                    </svg>
                  </button>
                  <button
                    type="submit"
                    aria-label="Submit"
                    className="text-purple-600 hover:text-purple-400 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
