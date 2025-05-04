import React from "react";
import { Phone, PenLine, Code, TestTube, Rocket } from "lucide-react";

const activeTextHoverGradientStyles =
  "bg-gradient-to-r from-white to-[#83BBF4] text-transparent bg-clip-text w-fit";

const ProcessCard = ({
  title,
  description,
  step,
}: {
  title: string;
  description: string;
  step: string;
}) => {
  // Select icon based on step
  const getIcon = () => {
    switch (step) {
      case "01":
        return <Phone size={72} className="text-white" />;
      case "02":
        return <PenLine size={72} className="text-white" />;
      case "03":
        return <Code size={72} className="text-white" />;
      case "04":
        return <TestTube size={72} className="text-white" />;
      case "05":
        return <Rocket size={72} className="text-white" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-4 overflow-hidden p-4 rounded-lg card-border-base">
      <div className="h-72 w-full bg-gray-900 rounded-lg flex items-center justify-center">
        {getIcon()}
      </div>
      <div className="grid grid-rows-2 gap-4">
        <div className="flex flex-row gap-2">
          <p
            className={`text-4xl font-poppins ${activeTextHoverGradientStyles}`}
          >
            {step}
          </p>
          <p className="text-4xl font-poppins">{title}</p>
        </div>
        <p className="text-md text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ProcessCard;
