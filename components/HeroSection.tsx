"use client";

import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Link from "next/link";

// Helper function to generate random border-radius
const getRandomBorderRadius = () => {
  const p = () => Math.floor(Math.random() * 50) + 30;
  return `${p()}% ${100 - p()}% ${p()}% ${100 - p()}% / ${p()}% ${p()}% ${
    100 - p()
  }% ${100 - p()}%`;
};

const activeHoverStyles =
  "border-[#83BBF4]/75 shadow-[0_0_10px_#83BBF4] border-transparent transition-all duration-300";

const activeTextHoverGradientStyles =
  "bg-gradient-to-r from-white to-[#83BBF4] text-transparent bg-clip-text";

const containerBaseStyles =
  "text-sm px-4 py-2 rounded-lg border border-transparent transition-all duration-300 group";

const containerHoverStyles =
  "hover:border-[#83BBF4]/75 hover:shadow-[0_0_10px_#83BBF4]";

const NUM_BLOBS = 4;

// Removed generateInitialBlobStyle function

const HeroSection = () => {
  // Initialize state with an empty array to avoid hydration mismatch
  const [blobStyles, setBlobStyles] = useState<React.CSSProperties[]>([]);
  const [activeButton, setActiveButton] = useState<"work" | "talk">("talk");

  useEffect(() => {
    // Generate initial styles only on the client after mount
    const initialStyles = Array.from({ length: NUM_BLOBS }, () => {
      const randomTop = Math.random() * 120 - 10;
      const randomLeft = Math.random() * 120 - 10;
      const randomScale = 0.7 + Math.random() * 0.8;
      const randomRadius = getRandomBorderRadius();
      return {
        top: `${randomTop}%`,
        left: `${randomLeft}%`,
        transform: `translate(-50%, -50%) scale(${randomScale})`,
        borderRadius: randomRadius,
      };
    });
    setBlobStyles(initialStyles);

    const updateBlobs = () => {
      // Use the state updater function to generate new styles based on previous state count
      setBlobStyles((currentStyles) =>
        Array.from({ length: currentStyles.length }, () => {
          const randomTop = Math.random() * 120 - 10;
          const randomLeft = Math.random() * 120 - 10;
          const randomScale = 0.7 + Math.random() * 0.8;
          const randomRadius = getRandomBorderRadius();
          return {
            top: `${randomTop}%`,
            left: `${randomLeft}%`,
            transform: `translate(-50%, -50%) scale(${randomScale})`,
            borderRadius: randomRadius,
          };
        })
      );
    };

    const intervalId = setInterval(updateBlobs, 15000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="hero" className="relative min-h-screen">
      {/* Absolutely positioned NavBar */}
      <div className="absolute top-0 left-0 right-0 z-10 pointer-events-auto px-4 md:px-0">
        <NavBar />
      </div>

      {/* Hero Content - Centered with Padding */}
      <div className="flex flex-col items-center justify-center h-screen space-y-4 md:space-y-6 max-w-4xl mx-auto text-center px-4 md:px-0 pt-16">
        <h1
          className={`text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-poppins ${activeTextHoverGradientStyles} leading-tight`}
        >
          We Build Web Apps
        </h1>
        <p className="text-md md:text-lg px-4">
          From ideas to deployment. We will deliver an MVP in as little as 3
          weeks.
        </p>
        <div className="border bg-black border-gray-800 rounded-lg p-1 flex flex-row font-medium pointer-events-auto">
          <Link
            href="#projects"
            className={`${containerBaseStyles} ${activeButton === "work" ? activeHoverStyles : containerHoverStyles}`}
            onMouseEnter={() => setActiveButton("work")}
            onMouseLeave={() => setActiveButton("talk")}
          >
            <span
              className={
                activeButton === "work"
                  ? activeTextHoverGradientStyles
                  : "text-white"
              }
            >
              our work
            </span>
          </Link>
          <Link
            href="#contact"
            className={`${containerBaseStyles} ${activeButton === "talk" ? activeHoverStyles : containerHoverStyles} text-gray-400 flex items-center gap-2`}
            onMouseEnter={() => setActiveButton("talk")}
            onMouseLeave={() => setActiveButton("work")}
          >
            <span
              className={
                activeButton === "talk"
                  ? activeTextHoverGradientStyles
                  : "text-gray-400"
              }
            >
              let&apos;s talk
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

export default HeroSection;
