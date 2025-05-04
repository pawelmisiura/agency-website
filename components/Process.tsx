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
      <div className="grid grid-cols-3 gap-8">
        <ProcessCard
          step="01"
          title="Initial Call"
          description="Share your idea and get an expert opinion. No commitment."
        />
        <ProcessCard
          step="02"
          title="Planning"
          description="Recieve a detailed design and development plan for your project."
        />
        <ProcessCard
          step="03"
          title="Development"
          description="We will build your project in sprints. We will keep you updated every step of the way."
        />
      </div>
      <div className="grid grid-cols-2 gap-8">
        <ProcessCard
          step="04"
          title="Testing"
          description="We will test your project and implement automation tests to ensure your project is stable."
        />
        <ProcessCard
          step="05"
          title="Deployment"
          description="We will deploy your project and provide you with 30 days of support."
        />
      </div>
    </div>
  );
};

export default Process;
