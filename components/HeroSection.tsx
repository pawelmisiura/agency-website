"use client";

import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";

// Helper function to generate random border-radius
const getRandomBorderRadius = () => {
  const p = () => Math.floor(Math.random() * 50) + 30;
  return `${p()}% ${100 - p()}% ${p()}% ${100 - p()}% / ${p()}% ${p()}% ${
    100 - p()
  }% ${100 - p()}%`;
};

const NUM_BLOBS = 4;

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
    <div className="hero-background">
      {/* Render multiple blob elements */}
      {blobStyles.map((style, index) => (
        <div key={index} className="blob-element" style={style}></div>
      ))}
      <NavBar />
      {/* Add other hero content here */}
    </div>
  );
};

export default HeroSection;
