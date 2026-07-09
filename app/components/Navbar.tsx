"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contacts",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/70 backdrop-blur-md border-b border-[#33353F]/50 transition-all">
      <div className="container flex flex-wrap items-center justify-between mx-auto px-6 py-4">
        <Link
          href="/"
          className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-extrabold hover:opacity-80 transition-opacity"
        >
          Stephan
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              type="button"
              aria-label="Open navigation menu"
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded-lg border-slate-200/50 text-slate-200 hover:text-white hover:border-white transition-colors"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          ) : (
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded-lg border-slate-200/50 text-slate-200 hover:text-white hover:border-white transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 bg-transparent">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
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
