import React from "react";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section id="contacts" className="text-white scroll-mt-24 py-16">
      <div className="grid md:grid-cols-2 gap-10 border-t border-[#33353F] pt-12">
        <div>
          <h2 className="text-4xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-[#ADB7BE] text-base sm:text-lg leading-relaxed">
            Have a project, collaboration, or role in mind? Send a message and
            I&apos;ll get back to you with the next practical step.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Link
            href="mailto:hello@example.com"
            className="rounded-lg border border-[#33353F] bg-[#181818] px-5 py-4 text-[#ADB7BE] hover:border-purple-500 hover:text-white transition-colors"
          >
            hello@example.com
          </Link>
          <Link
            href="https://github.com"
            className="rounded-lg border border-[#33353F] bg-[#181818] px-5 py-4 text-[#ADB7BE] hover:border-purple-500 hover:text-white transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com"
            className="rounded-lg border border-[#33353F] bg-[#181818] px-5 py-4 text-[#ADB7BE] hover:border-purple-500 hover:text-white transition-colors"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
