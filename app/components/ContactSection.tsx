"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contacts" className="text-white scroll-mt-24 py-16 relative">
      <div className="absolute top-0 -z-10 h-full w-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-purple-600 blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-pink-600 blur-[128px]" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 border-t border-[#33353F] pt-12 relative z-10"
      >
        <div className="flex flex-col">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Let&apos;s Connect
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-[#ADB7BE] text-base sm:text-lg leading-relaxed mb-8"
          >
            I&apos;m currently looking for new opportunities, my inbox is always open. 
            Whether you have a question or just want to say hi, I&apos;ll try my best 
            to get back to you!
          </motion.p>
          
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: 0.4 }}
             viewport={{ once: true }}
             className="flex flex-wrap gap-4 mt-auto mb-8 md:mb-0"
          >
            <Link
              href="https://github.com/Stephan-Thomas"
              className="p-3 rounded-full bg-[#181818] border border-[#33353F] hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all group"
            >
              <svg className="w-6 h-6 text-[#ADB7BE] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link
              href="https://linkedin.com/in/stephan-thomas-b3539a421"
              className="p-3 rounded-full bg-[#181818] border border-[#33353F] hover:border-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all group"
            >
              <svg className="w-6 h-6 text-[#ADB7BE] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link
              href="https://x.com/stephantom001"
              className="p-3 rounded-full bg-[#181818] border border-[#33353F] hover:border-blue-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.5)] transition-all group"
            >
              <svg className="w-6 h-6 text-[#ADB7BE] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
            <Link
              href="https://wa.me/09132458020?text=Hi%20Stephan!%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect."
              className="p-3 rounded-full bg-[#181818] border border-[#33353F] hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] transition-all group"
            >
              <svg className="w-6 h-6 text-[#ADB7BE] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-[#181818] border border-[#33353F] p-8 rounded-xl shadow-lg relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
          <form 
            className="flex flex-col gap-5" 
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const email = formData.get('email');
              const subject = formData.get('subject') || 'Portfolio Contact';
              const message = formData.get('message');
              
              // Change this to your actual email address
              const yourEmail = "stephanthomasc@gmail.com";
              
              const body = `From: ${email}\n\n${message}`;
              window.location.href = `mailto:${yourEmail}?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(body)}`;
            }}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-white text-sm font-medium">Your email</label>
              <input 
                name="email"
                type="email" 
                id="email" 
                className="bg-[#121212] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                placeholder="jacob@google.com" 
                required 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-white text-sm font-medium">Subject</label>
              <input 
                name="subject"
                type="text" 
                id="subject" 
                className="bg-[#121212] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                placeholder="Just saying hi" 
                required 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-white text-sm font-medium">Message</label>
              <textarea 
                name="message" 
                id="message" 
                className="bg-[#121212] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors h-32 resize-none"
                placeholder="Let's talk about..." 
                required
              />
            </div>
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-5 rounded-lg w-full transition-colors mt-2"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
