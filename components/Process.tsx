import React from "react";
// import CustomCard from "./ui/CustomCard";
import ProcessCard from "./ui/ProcessCard";

const activeTextHoverGradientStyles =
  "bg-gradient-to-r from-white to-[#83BBF4] text-transparent bg-clip-text w-fit";

const Process = () => {
  return (
    <div
      id="process"
      className="space-y-16 py-16 max-w-7xl mx-auto overflow-x-hidden p-3"
    >
      <h2 className={`text-8xl font-poppins ${activeTextHoverGradientStyles}`}>
        Our Process
      </h2>
      <div className="grid grid-cols-4 gap-8">
        <ProcessCard
          step="01"
          title="Discovery & Planning"
          description="We build web applications that help your business grow."
        />
        <ProcessCard
          step="02"
          title="Design & Development"
          description="We build web applications that help your business grow."
        />
        <ProcessCard
          step="03"
          title="Testing & Deployment"
          description="We build web applications that help your business grow."
        />
        <ProcessCard
          step="03"
          title="Testing & Deployment"
          description="We build web applications that help your business grow."
        />
      </div>
    </div>
  );
};

export default Process;
