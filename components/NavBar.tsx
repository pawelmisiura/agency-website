"use client";

import React, { useState } from "react";
import Link from "next/link";

export const containerBaseStyles =
  "text-sm px-4 py-2 rounded-lg border border-transparent transition-all duration-300 group";
export const containerHoverStyles =
  "hover:border-[#83BBF4]/75 hover:shadow-[0_0_10px_#83BBF4]";

// Styles for the inner text span gradient on hover
export const textHoverGradientStyles =
  "group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#83BBF4] group-hover:text-transparent group-hover:bg-clip-text";

// Styles for the active text gradient
export const activeTextGradientStyles =
  "bg-gradient-to-r from-white to-[#83BBF4] text-transparent bg-clip-text";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative flex flex-row justify-between items-center max-w-7xl mx-auto py-4">
      {/* Logo */}
      <div className="relative h-8 overflow-hidden group z-20">
        <h1 className="text-2xl transition-transform duration-600 group-hover:-translate-y-full">
          {"<"}Black Pearl Labs{">"}
        </h1>
        <h1 className="text-2xl absolute top-0 left-0 transition-transform duration-600 group-hover:translate-y-0 translate-y-full">
          {"<"}Black Pearl Labs{">"}
        </h1>
      </div>

      {/* Desktop Navigation Links - hidden on mobile */}
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 hidden md:flex justify-center pointer-events-none">
        <div className="border bg-[#0f0f0f] border-gray-800 rounded-lg p-1 flex flex-row font-medium pointer-events-auto">
          <Link
            href="#hero"
            className={`${containerBaseStyles} ${containerHoverStyles} text-gray-400 cursor-pointer`}
          >
            <span className={`${textHoverGradientStyles} cursor-pointer`}>
              home
            </span>
          </Link>
          <Link
            href="#projects"
            className={`${containerBaseStyles} ${containerHoverStyles} text-gray-400 cursor-pointer`}
          >
            <span className={`${textHoverGradientStyles} cursor-pointer`}>
              projects
            </span>
          </Link>
          <Link
            href="#contact"
            className={`${containerBaseStyles} ${containerHoverStyles} text-gray-400 cursor-pointer`}
          >
            <span className={`${textHoverGradientStyles} cursor-pointer`}>
              contact
            </span>
          </Link>
        </div>
      </div>

      {/* Let's Talk Button - hidden on mobile */}
      <div
        className={`hidden md:flex flex-row gap-4 relative overflow-hidden p-1 rounded-lg animated-border-base hover:border-[#83BBF4]/75 hover:shadow-[0_0_10px_#83BBF4] transition-all duration-300 z-20`}
      >
        <Link
          href="#contact"
          className={`${containerBaseStyles} text-gray-400 flex items-center gap-2 cursor-pointer`}
        >
          <span className={`${textHoverGradientStyles} cursor-pointer`}>
            let&apos;s talk
          </span>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="flex md:hidden z-20 ml-auto">
        <button
          onClick={toggleMenu}
          className={`border border-gray-700 rounded-lg p-2 text-gray-400 flex items-center justify-center cursor-pointer ${isMenuOpen ? "bg-[#0f0f0f] shadow-[0_0_10px_#83BBF4] border-[#83BBF4]/75" : "hover:border-[#83BBF4]/75 hover:shadow-[0_0_10px_#83BBF4]"} transition-all duration-300`}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay - Slide down from top */}
      <div
        className={`fixed inset-x-0 top-0 bg-black bg-opacity-70 backdrop-blur-lg z-10 flex flex-col items-center justify-center transition-all duration-500 ${
          isMenuOpen
            ? "h-screen opacity-100"
            : "h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8 w-full max-w-sm">
          <Link
            href="#hero"
            className={`${containerBaseStyles} ${containerHoverStyles} text-white w-full text-center cursor-pointer text-xl`}
            onClick={() => setIsMenuOpen(false)}
          >
            <span className={`${textHoverGradientStyles} cursor-pointer`}>
              Home
            </span>
          </Link>
          <Link
            href="#projects"
            className={`${containerBaseStyles} ${containerHoverStyles} text-white w-full text-center cursor-pointer text-xl`}
            onClick={() => setIsMenuOpen(false)}
          >
            <span className={`${textHoverGradientStyles} cursor-pointer`}>
              Projects
            </span>
          </Link>
          <Link
            href="#contact"
            className={`${containerBaseStyles} ${containerHoverStyles} text-white w-full text-center cursor-pointer text-xl`}
            onClick={() => setIsMenuOpen(false)}
          >
            <span className={`${textHoverGradientStyles} cursor-pointer`}>
              Contact
            </span>
          </Link>
          <Link
            href="#contact"
            className={`${containerBaseStyles} ${containerHoverStyles} text-white w-full text-center cursor-pointer flex items-center justify-center gap-2 text-xl`}
            onClick={() => setIsMenuOpen(false)}
          >
            <span className={`${textHoverGradientStyles} cursor-pointer`}>
              Let&apos;s Talk
            </span>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
