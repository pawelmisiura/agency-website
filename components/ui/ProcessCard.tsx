import React from "react";

const activeTextHoverGradientStyles =
  "bg-gradient-to-r from-white to-[#83BBF4] text-transparent bg-clip-text w-fit";

const CustomCard = ({
  title,
  description,
  step,
}: {
  title: string;
  description: string;
  step: string;
}) => {
  return (
    <div className="flex flex-col gap-4 overflow-hidden p-4 rounded-lg card-border-base">
      <div className="h-72 w-full bg-gray-900 rounded-lg"></div>
      <div className="grid grid-rows-2 gap-4">
        <div className="flex flex-row gap-2">
          <p
            className={`text-4xl font-poppins ${activeTextHoverGradientStyles}`}
          >
            {step}
          </p>
          <p className="text-4xl font-poppins">{title}</p>
        </div>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default CustomCard;
