import React from "react";
import Link from "next/link";

export const containerBaseStyles =
  "text-sm px-4 py-2 rounded-lg border border-transparent transition-all duration-300 group";
export const containerHoverStyles =
  "hover:border-[#83BBF4]/75 hover:shadow-[0_0_10px_#83BBF4]";

// Styles for the inner text span gradient on hover
export const textHoverGradientStyles =
  "group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#83BBF4] group-hover:text-transparent group-hover:bg-clip-text";

const NavBar = () => {
  // Styles for the container (Link/button)

  return (
    <div className="relative flex flex-row justify-between items-center max-w-7xl mx-auto py-4">
      {/* Logo */}
      <div className="relative h-8 overflow-hidden group">
        <h1 className="text-2xl transition-transform duration-600 group-hover:-translate-y-full">
          {"<"}Black Pearl Labs{">"}
        </h1>
        <h1 className="text-2xl absolute top-0 left-0 transition-transform duration-600 group-hover:translate-y-0 translate-y-full">
          {"<"}Black Pearl Labs{">"}
        </h1>
      </div>

      {/* Absolutely Centered Navigation Links */}
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-center pointer-events-none">
        <div className="border bg-[#0f0f0f] border-gray-800 rounded-lg p-1 flex flex-row font-medium pointer-events-auto">
          <Link
            href="#hero"
            className={`${containerBaseStyles} ${containerHoverStyles} text-gray-400 cursor-pointer`}
          >
            <span className={textHoverGradientStyles}>home</span>
          </Link>
          <Link
            href="#projects"
            className={`${containerBaseStyles} ${containerHoverStyles} text-gray-400 cursor-pointer`}
          >
            <span className={textHoverGradientStyles}>projects</span>
          </Link>
          <Link
            href="#process"
            className={`${containerBaseStyles} ${containerHoverStyles} text-gray-400 cursor-pointer`}
          >
            <span className={textHoverGradientStyles}>process</span>
          </Link>
          <Link
            href="#contact"
            className={`${containerBaseStyles} ${containerHoverStyles} text-gray-400 cursor-pointer`}
          >
            <span className={textHoverGradientStyles}>contact</span>
          </Link>
        </div>
      </div>

      {/* Let's Talk Button */}
      <div
        className={`flex flex-row gap-4 relative overflow-hidden p-1 rounded-lg animated-border-base hover:border-[#83BBF4]/75 hover:shadow-[0_0_10px_#83BBF4] transition-all duration-300`}
      >
        <Link
          href="#contact"
          className={`${containerBaseStyles} text-gray-400 flex items-center gap-2`}
        >
          <span className={textHoverGradientStyles}>let&apos;s talk</span>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
