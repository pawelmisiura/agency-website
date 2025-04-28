import React from "react";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-800/50">
      {/* Apply glow effect to this inner container */}
      <div className="relative overflow-hidden glow-border-top max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Black Pearl Labs. All rights
          reserved.
        </p>
        {/* You can add more footer links or elements here if needed */}
      </div>
    </footer>
  );
};

export default Footer;
