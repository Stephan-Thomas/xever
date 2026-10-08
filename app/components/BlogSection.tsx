"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    date: "Aug 15, 2026",
    title: "Designing for the future: Why minimalism wins",
    readTime: "5 min read",
  },
  {
    id: 2,
    date: "Jul 22, 2026",
    title: "Building scalable web apps with Next.js and Tailwind",
    readTime: "8 min read",
  },
  {
    id: 3,
    date: "Jun 10, 2026",
    title: "The psychology of color in modern UI design",
    readTime: "6 min read",
  },
];

const testimonials = [
  {
    id: 1,
    quote: "Working with Stephan was an outstanding experience. He delivered a high-quality product that exceeded our expectations while maintaining excellent communication throughout the entire project. Truly one of the best professionals I’ve worked with.",
    name: "Jude Muoghalu",
    title: "CEO of Tech-Engines software associates.",
    image: "/images/jude1.jpg",
  },
  {
    id: 2,
    quote: "Stephan is an exceptionally talented developer who not only understands how to write clean code, but also possesses a rare eye for premium design. Working with him completely elevated our product's user experience.",
    name: "Alex Johnson",
    title: "Product Manager, TechVision",
    image: "/images/bit1.png",
  },
  {
    id: 3,
    quote: "Amazing attention to detail and incredibly fast turnaround times. The new platform looks beautiful and performs flawlessly. I couldn't be happier with the results and the seamless collaboration.",
    name: "Sarah Jenkins",
    title: "Founder, CreativeSolutions",
    image: "/images/bit2.png",
  },
  {
    id: 4,
    quote: "A true professional. Stephan took our vague concepts and transformed them into a highly polished, intuitive web application. His expertise in both frontend and backend development is top-notch.",
    name: "Michael Chen",
    title: "CTO, NextGen Startups",
    image: "/images/bit3.png",
  }
];

const BlogSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-white py-24 sm:py-32 bg-[#232532]" id="blog">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-24 md:gap-y-32">
          {/* Top Left: Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-[#a1a1aa] text-sm uppercase tracking-widest font-semibold mb-6 flex items-center">
              <span className="w-4 h-px bg-[#a1a1aa] mr-3"></span> Blog
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-2">
              What&apos;s new?
            </h2>
            <h3 className="text-2xl sm:text-3xl font-light text-[#a1a1aa]">
              My blog and news.
            </h3>
          </motion.div>

          {/* Top Right: Blog Posts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                className={`flex items-start md:items-center py-6 gap-6 group cursor-pointer ${
                  index !== blogPosts.length - 1
                    ? "border-b border-[#303245]"
                    : ""
                }`}
              >
                <span className="text-sm font-medium text-[#71717a] w-32 shrink-0">
                  {post.date} - Blog
                </span>
                <h4 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors flex-1">
                  {post.title}
                </h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-purple-600 group-hover:translate-x-2 transition-transform shrink-0"
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
              </div>
            ))}
          </motion.div>

          {/* Bottom Left: Image Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full max-w-sm mx-auto md:mx-0 aspect-[3/4]"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentTestimonial}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="absolute inset-0 w-full h-full object-cover grayscale object-top"
              />
            </AnimatePresence>
          </motion.div>

          {/* Bottom Right: Testimonial Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center min-h-[300px]"
          >
            <svg
              className="w-12 h-12 text-[#3d3f50] mb-8 shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.714 4.029-6.915 6.98-6.915l-.47 2.614c-1.745 0-3.045 1.144-3.045 3.093h3.518v8.599h-7.003zm-10.985 0v-7.391c0-5.714 4.029-6.915 6.98-6.915l-.47 2.614c-1.745 0-3.045 1.144-3.045 3.093h3.518v8.599h-7.003z" />
            </svg>

            <div className="flex-1 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <p className="text-xl sm:text-2xl font-medium leading-relaxed mb-8">
                    {testimonials[currentTestimonial].quote}
                  </p>

                  <div className="mb-12">
                    <p className="text-white font-semibold text-lg">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-[#71717a] text-sm mt-1">
                      {testimonials[currentTestimonial].title}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Indicators */}
            <div className="flex gap-3 mt-auto pt-12 z-10 relative">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-8 h-1 rounded-full transition-colors ${
                    currentTestimonial === index ? "bg-purple-600" : "bg-[#3d3f50] hover:bg-[#4a4d5e]"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
