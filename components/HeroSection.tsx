"use client";

import React, { useState, useEffect } from "react";
import NavBar, {
  containerBaseStyles,
  containerHoverStyles,
  textHoverGradientStyles,
} from "./NavBar";
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

const NUM_BLOBS = 2;

// Removed generateInitialBlobStyle function

const HeroSection = () => {
  // Initialize state with an empty array to avoid hydration mismatch
  const [blobStyles, setBlobStyles] = useState<React.CSSProperties[]>([]);

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
    <div className="hero-background relative min-h-screen">
      {/* Render multiple blob elements */}
      {/* {blobStyles.map((style, index) => (
        <div key={index} className="blob-element" style={style}></div>
      ))} */}

      {/* Absolutely positioned NavBar */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <NavBar />
      </div>

      {/* Hero Content - Centered with Padding */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen space-y-6 max-w-4xl mx-auto text-center pt-16">
        <h1
          className={`text-9xl font-poppins ${activeTextHoverGradientStyles}`}
        >
          We Build Web Apps
        </h1>
        <p className="text-md">
          We build web applications that help your business grow.
        </p>
        <div className="border bg-black border-gray-800 rounded-lg p-1 flex flex-row font-medium pointer-events-auto">
          <Link
            href="/contact"
            className={`${containerBaseStyles} ${containerHoverStyles} text-gray-400`}
          >
            <span className={textHoverGradientStyles}>our work</span>
          </Link>
          <Link
            href="/contact"
            className={`${containerBaseStyles} ${activeHoverStyles} text-gray-400 flex items-center gap-2`}
          >
            <span className={activeTextHoverGradientStyles}>let's talk</span>
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
