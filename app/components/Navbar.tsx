"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Services",
    path: "#services",
  },
  {
    title: "Works",
    path: "#projects",
  },
  {
    title: "Blog",
    path: "#blog",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md py-4" : "bg-transparent py-6 md:py-10"}`}>
      <div className="container mx-auto px-6 md:px-12 xl:px-24 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-purple-600 hover:text-purple-500 transition-colors"
        >
          Stephan.
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              type="button"
              aria-label="Open navigation menu"
              onClick={() => setNavbarOpen(true)}
              className="flex items-center text-slate-200 hover:text-white transition-colors"
            >
              <Bars3Icon className="h-8 w-8" />
            </button>
          ) : (
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setNavbarOpen(false)}
              className="flex items-center text-slate-200 hover:text-white transition-colors"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block" id="navbar">
          <ul className="flex flex-row space-x-10">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                <Link
                  href={link.path}
                  className={`text-lg font-medium transition-colors ${index === 0 ? "text-white" : "text-[#71717a] hover:text-white"}`}
                >
                  {link.title}
                </Link>
                {/* Active dot indicator (mocked as active on the first item) */}
                {index === 0 && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
