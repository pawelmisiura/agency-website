import React from "react";
import CustomCard from "./ui/CustomCard";

const activeTextHoverGradientStyles =
  "bg-gradient-to-r from-white to-[#83BBF4] text-transparent bg-clip-text w-fit";

const Services = () => {
  return (
    <div className="space-y-16 py-16 max-w-7xl mx-auto overflow-x-hidden p-3">
      <h2 className={`text-8xl font-poppins ${activeTextHoverGradientStyles}`}>
        What we do
      </h2>
      <div className="grid grid-cols-2 gap-8">
        <CustomCard
          title="Web Applications"
          description="We build web applications that help your business grow."
        />
        <CustomCard
          title="Mobile Applications"
          description="We build mobile applications that help your business grow."
        />
        <CustomCard
          title="AI Solutions"
          description="We build AI solutions that help your business grow."
        />
        <CustomCard
          title="Landing Pages"
          description="We build landing pages that help your business grow."
        />
      </div>
    </div>
  );
};

export default Services;
